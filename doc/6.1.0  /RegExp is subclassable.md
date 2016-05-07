###basic functionality
          
```
function() {
    class R extends RegExp {}
    var r = new R("baz", "g");
    return r.global && r.source === "baz";
}
```
###correct prototype chain
          
```
function() {
    class R extends RegExp {}
    var r = new R("baz", "g");
    return r instanceof R && r instanceof RegExp && Object.getPrototypeOf(R) === RegExp;
}
```
###RegExp.prototype.exec
          
```
function() {
    class R extends RegExp {}
    var r = new R("baz", "g");
    return r.exec("foobarbaz")[0] === "baz" && r.lastIndex === 9;
}
```
###RegExp.prototype.test
          
```
function() {
    class R extends RegExp {}
    var r = new R("baz");
    return r.test("foobarbaz");
}
```
