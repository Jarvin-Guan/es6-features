const Promise = this.Promise || require( 'promise' );
const agent = require( 'superagent-promise' )( require( 'superagent' ), Promise );
const co = require( 'co' );
const async = require( 'async' );
const fs = require( 'fs' );
const mkdirp = require( 'mkdirp' );
const path = require( 'path' );
const beautify = require( 'js-beautify' ).js_beautify;

const htmlmap = {
    '&quot;':'"', 
    '&amp;':'&' 
};

function getmatches( regex, html ) {
    let results = [ ];
    let match;
    while ( match = regex.exec( html ) ) {
        results.push( match );
    }
    return results;
}

let versions = [ ];

function walk( root, filelist ) {  
    let dirList = fs.readdirSync( root );
    dirList.forEach( ( item ) => {
        let name = root + '/' + item;
        if ( fs.statSync( name ).isDirectory() ) {
            walk( name, filelist );
        } else {
            if ( path.extname( name ) !== '' ) {
                filelist.push( name );
            }
        }
    } );
}

co( function* () {
    let html = ( yield agent( 'GET', 'http://node.green/' ).end() ).text;
    let versionReS = /<th\s*[^>]+>\s*([^\s<>]+)[\s\S]*?<sub\s+class="flagged">([^<]+)/g;
    for ( let m of getmatches( versionReS, html ) ) {
        versions.push( m[1] + ' ( ' + m[2] + ' ) ' );
    }
    let smallAreaRes = /class="feature\s*sub">[\S\s]+?<a[^>]+>([^<]+)[\S\s]+?<\/tr>(?:\s*?<tr>\s*<td\s*class="feature\s*subsub">[^<]+[\s\S]+?<\/tr>\s*)+/g;
    let strTemp = '<td\\s*class="feature\\s*subsub">([^<]+)[^>]+>\\?\\s*[^>]+>(function\\(\\)[\\s\\S]+?>\\s*\\})\\s*<\\/div>\\s*<\\/div>\\s*<\\/td>';
    
    versions.forEach( function() {
        strTemp = strTemp + '\\s*<td[^>]+><div\\s*class="(\\S+)[\\s\\S]+?<\\/td>';
    } );
    let detailAreaRes = new RegExp( strTemp, 'g' );
    var blocks = [ ];
    for ( let m of getmatches( smallAreaRes, html ) ) {
        var capter = { };
        capter.title = m[1];
        capter.content = [ ];
        var funcStr = m[0];
        for ( let m of getmatches( detailAreaRes, funcStr ) ) {
            capter.content.push( {
                name : m[1],
                func : m[2],
                flags: m.slice( 3 )
            } );
        }
        blocks.push( capter );
    }
    let fileTask = [];
    
    async.map( versions, function( version ) {
        mkdirp.sync( './doc/' + version.replace( /\([^\)]+\)/g, '' ) );
        fileTask.push( function( callback ) {
            let index = versions.indexOf( version );
            version = version.replace( /\([^\)]+\)/g, '' );
            for ( let block of blocks ) {
                for ( let content of block.content ) {
                    if ( content.flags[index].startsWith( 'Yes' ) ) {
                        let filename = './doc/' + version + '/' + block.title.replace( /\([^\)]\)/g, '' ) + '.md';
                        filename = filename.replace( /\([^\)]+\)/g, '' );
                        async.forEachOf( htmlmap, function( value, key, callback ) {
                            let Rex = new RegExp( key, 'g' );
                            filename = filename.replace( Rex, value );
                        } );
                        if ( !fs.existsSync( filename ) ) {
                            fs.writeFileSync( filename, '' );
                        }
                        fs.appendFileSync( filename, '###' + content.name );
                        fs.appendFileSync( filename, '\n```\n' );
                        
                        let funcStr = content.func;
                        funcStr = funcStr.replace( /\<[^>]+\>/g, '' );
                        async.forEachOf( htmlmap, function( value, key, callback ) {
                            let Rex = new RegExp( key, 'g' );
                            funcStr = funcStr.replace( Rex, value );
                        } );
                        funcStr = beautify( funcStr );
                        fs.appendFileSync( filename, funcStr );
                        fs.appendFileSync( filename, '\n```\n' );
                    }
                }
            }
            callback( null, 1 );
        } );
    } );
    
    
    async.parallel( fileTask, function( err, results ) {
        let files = [];
        walk( './doc', files );
        files = files.reverse();
        var temp = path.dirname( files[0] ).replace( /\.\/doc\//, '' );
        fs.appendFileSync( './SUMMARY.md', '\n* [' + temp + ']()' );
        for ( let file of files ) {
            let pathname = path.dirname( file ).replace( /\.\/doc\//, '' );
            if ( pathname === temp ) {
                fs.appendFileSync( './SUMMARY.md', '\n   * [' + path.basename( file ) + '](' 
                + file.replace( /\([^\)]+\)/g, '' ) + ')');
            }
            else {
                temp = pathname;
                fs.appendFileSync( './SUMMARY.md', '\n* [' + pathname + ']()' );
            }
        }
    } );
} ).catch( function( err ) {
    console.log( err );
} );
