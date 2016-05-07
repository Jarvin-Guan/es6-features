###&quot;y&quot; flag
          
```
function() {
    var re = new RegExp('\\w', 'y');
    re.exec('xy');
    return (re.exec('xy')[0] === 'y');
}
```
###&quot;y&quot; flag, lastIndex
          
```
function() {
    var re = new RegExp('yy', 'y');
    re.lastIndex = 3;
    var result = re.exec('xxxyyxx')[0];
    return result === 'yy' && re.lastIndex === 5;
}
```
###&quot;u&quot; flag
          
```
function() {
    return "𠮷".match(/^.$/u)[0].length === 2;
}
```
###&quot;u&quot; flag, Unicode code point escapes
          
```
function() {
    return "𝌆".match(/\u{1d306}/u)[0].length === 2;
}
```
###&quot;u&quot; flag, case folding
          
```
function() {
    return "ſ".match(/S/iu) && "ſ".match(/\w/iu) && "ſ".match(/\W/iu) && "S".match(/ſ/iu) && "S".match(/\w/iu) && "S".match(/\W/iu);
}
```
