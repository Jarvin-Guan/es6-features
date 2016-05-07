###RegExp.prototype.compile
          
```
function() {
    return typeof RegExp.prototype.compile === 'function';
}
```
###HTML-style comments
          
```
function() {
    -- & gt;
    A comment
        & lt;
    !--Another comment
    var a = 3; & lt;
    !--Another comment
    return a === 3;
}
```
###hyphens in character sets
          
```
function() {
    return /[\w-_]/.exec("-")[0] === "-";
}
```
###invalid character escapes
          
```
function() {
    return /\z/.exec("\\z")[0] === "z" && /[\z]/.exec("[\\z]")[0] === "z";
}
```
###invalid control-character escapes
          
```
function() {
    return /\c2/.exec("\\c2")[0] === "\\c2";
}
```
###invalid Unicode escapes
          
```
function() {
    return /\u1/.exec("u1")[0] === "u1" && /[\u1]/.exec("u")[0] === "u";
}
```
###invalid hexadecimal escapes
          
```
function() {
    return /\x1/.exec("x1")[0] === "x1" && /[\x1]/.exec("x")[0] === "x";
}
```
###incomplete patterns and quantifiers
          
```
function() {
    return /x{1/.exec("x{1")[0] === "x{1" && /x]1/.exec("x]1")[0] === "x]1";
}
```
###octal escape sequences
          
```
function() {
    return /\041/.exec("!")[0] === "!" && /[\041]/.exec("!")[0] === "!";
}
```
###invalid backreferences become octal escapes
          
```
function() {
    return /\41/.exec("!")[0] === "!" && /[\41]/.exec("!")[0] === "!";
}
```
