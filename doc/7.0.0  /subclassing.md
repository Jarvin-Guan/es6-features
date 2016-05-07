###Date.prototype[Symbol.toPrimitive]
          
```
function() {
    var tp = Date.prototype[Symbol.toPrimitive];
    return tp.call(Object(2), "number") === 2 && tp.call(Object(2), "string") === "2" && tp.call(Object(2), "default") === "2";
}
```
###length property (accessing)
          
```
function() {
    class C extends Array {}
    var c = new C();
    var len1 = c.length;
    c[2] = 'foo';
    var len2 = c.length;
    return len1 === 0 && len2 === 3;
}
```
###length property (setting)
          
```
function() {
    class C extends Array {}
    var c = new C();
    c[2] = 'foo';
    c.length = 1;
    return c.length === 1 && !(2 in c);
}
```
###correct prototype chain
          
```
function() {
    class C extends Array {}
    var c = new C();
    return c instanceof C && c instanceof Array && Object.getPrototypeOf(C) === Array;
}
```
###Array.isArray support
          
```
function() {
    class C extends Array {}
    return Array.isArray(new C());
}
```
###Array.from
          
```
function() {
    class C extends Array {}
    return C.from({
        length: 0
    }) instanceof C;
}
```
###Array.of
          
```
function() {
    class C extends Array {}
    return C.of(0) instanceof C;
}
```
