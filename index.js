const Promise = this.Promise || require('promise');
const agent = require('superagent-promise')(require('superagent'), Promise);

function getmatches(regex,html){
    let results=new Array();
    let match;
    while( ( match = regex.exec( html ) ) ) {
        results.push(match);
    }
    return results;
}
 
agent('GET', 'http://node.green/')
  .end()
  .then(function onResult(res) {
    let html = res.text;
    let versions =new Array();
    let versionReS = /<th\s*[^>]+>\s*([^\s<>]+)[\s\S]*?<sub\s+class="flagged">([^<]+)/g;
    for(let m of getmatches(versionReS,html)){
        versions.push(m[1]+"("+m[2]+")");
    };
    
    let largAreaReS = /<table\s+class="results">[\s\S]*?<h2\s+class="category">\s*<div\s*[\s\S]+?<a\s+href="[^>]+>([^<]+)([\s\S]+?)<\/table>/g;
    let smallAreaRes = /class="feature\s*sub">[\S\s]+?<a[^>]+>([^<]+)[\S\s]+?<\/tr>(?:\s*?<tr>\s*<td\s*class="feature\s*subsub">[^<]+[\s\S]+?<\/tr>\s*)+/g;
    let detailAreaRes = /<td\s*class="feature\s*subsub">([^<]+)[^>]+>\?\s*[^>]+>(function\(\)\{[^\}]+)\}\s*<\/div>\s*<\/div>\s*<\/td>\s*<td[^>]+><div\s*class="(\S+)[\s\S]+?<\/td>\s*<td[^>]+><div\s*class="(\S+)[\s\S]+?<\/td>\s*<td[^>]+><div\s*class="(\S+)[\s\S]+?<\/td>\s*<td[^>]+><div\s*class="(\S+)[\s\S]+?<\/td>\s*<td[^>]+><div\s*class="(\S+)[\s\S]+?<\/td>\s*<td[^>]+><div\s*class="(\S+)[\s\S]+?<\/td>\s*<td[^>]+><div\s*class="(\S+)[\s\S]+?<\/td>\s*<td[^>]+><div\s*class="(\S+)[\s\S]+?<\/td>\s*<td[^>]+><div\s*class="(\S+)[\s\S]+?<\/td>\s*<td[^>]+><div\s*class="(\S+)[\s\S]+?<\/td>\s*<td[^>]+><div\s*class="(\S+)[\s\S]+?<\/td>/g;
    let contents =new Array();
    for(let m of getmatches(largAreaReS,html)){
        var content = new Object();
        content.bigTitle=m[1];
        let bigArea=m[2];
        for(let m of getmatches(smallAreaRes,bigArea)){
            var smArea=new Array();
            var smallcontent = new Object();
            smallcontent.smallTitle=m[1];
            let detailHtml = m[0];
            for(let m of getmatches(detailAreaRes,detailHtml)){
                var detailcontent = new Object();
                let suports=new Array();
                detailcontent.name=m[1];
                detailcontent.func=m[2];
                let i = 3;
                while(m[i]){
                    suports.push(m[i]);
                    i++;
                }
                detailcontent.suports=suports;
                smallcontent.detail=detailcontent;
                smArea.push(smallcontent);
                content.smArea=smArea;
            }
        }
        contents.push(content);
    };
    console.log(1);
  }, function onError(err) {
      console.log(err.message);
  });