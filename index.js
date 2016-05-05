const Promise = this.Promise || require('promise');
const agent = require('superagent-promise')(require('superagent'), Promise);
const co = require('co');
const async = require('async');
const fs = require('fs');

function getmatches(regex,html){
    let results = [ ];
    let match;
    while( match = regex.exec( html ) ) {
        results.push(match);
    }
    return results;
}

co(function* (){
    let html = ( yield agent('GET', 'http://node.green/').end() ).text;
    let versionReS = /<th\s*[^>]+>\s*([^\s<>]+)[\s\S]*?<sub\s+class="flagged">([^<]+)/g;
    let verisons = [ ];
    for(let m of getmatches(versionReS,html)){
        verisons.push(m[1]+"("+m[2]+")");
    };
    let smallAreaRes = /class="feature\s*sub">[\S\s]+?<a[^>]+>([^<]+)[\S\s]+?<\/tr>(?:\s*?<tr>\s*<td\s*class="feature\s*subsub">[^<]+[\s\S]+?<\/tr>\s*)+/g;
    let strTemp ='<td\\s*class="feature\\s*subsub">([^<]+)[^>]+>\\?\\s*[^>]+>(function\\(\\)[\\s\\S]+?>\\s*\\})\\s*<\\/div>\\s*<\\/div>\\s*<\\/td>';
    
    verisons.forEach(function(){
        strTemp = strTemp + "\\s*<td[^>]+><div\\s*class=\"(\\S+)[\\s\\S]+?<\\/td>";
    })
    let detailAreaRes =new RegExp(strTemp,'g');
    var blocks = [ ];
    for(let m of getmatches(smallAreaRes,html)){
        var capter = { };
        capter.title = m[1];
        capter.content = [ ];
        var funcStr = m[0];
        for(let m of getmatches(detailAreaRes,funcStr)){
            capter.content.push({
                name : m[1],
                func : m[2],
                flags: m.slice(3,-1)
            });
        }
        blocks.push(capter);
    };
    let g=1;
    fs.appendFileSync('message.md', '\n    * data to append');
}).catch(function(err){
    console.log(err);
});
