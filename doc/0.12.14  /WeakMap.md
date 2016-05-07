###basic functionality
          
```
function() {
    var key = {};
    var weakmap = new WeakMap();

    weakmap.set(key, 123);

    return weakmap.has(key) && weakmap.get(key) === 123;
}
```
###constructor arguments
          
```
function() {
    var key1 = {};
    var key2 = {};
    var weakmap = new WeakMap([
        [key1, 123],
        [key2, 456]
    ]);

    return weakmap.has(key1) && weakmap.get(key1) === 123 &&
        weakmap.has(key2) && weakmap.get(key2) === 456;
}
```
###constructor requires new
          
```
function() {
    new WeakMap();
    try {
        WeakMap();
        return false;
    } catch (e) {
        return true;
    }
}
```
###constructor accepts null
          
```
function() {
    new WeakMap(null);
    return true;
}
```
###constructor invokes set
          
```
function() {
    var passed = false;
    var _set = WeakMap.prototype.set;

    WeakMap.prototype.set = function(k, v) {
        passed = true;
    };

    new WeakMap([
        [{}, 42]
    ]);
    WeakMap.prototype.set = _set;

    return passed;
}
```
###frozen objects as keys
          
```
function() {
    var f = Object.freeze({});
    var m = new WeakMap;
    m.set(f, 42);
    return m.get(f) === 42;
}
```
###WeakMap.prototype.set returns this
          
```
function() {
    var weakmap = new WeakMap();
    var key = {};
    return weakmap.set(key, 0) === weakmap;
}
```
###WeakMap.prototype.delete
          
```
function() {
    return typeof WeakMap.prototype.delete === "function";
}
```
###WeakMap.prototype isn't an instance
          
```
function() {
    new WeakMap();
    var obj = {};
    try {
        WeakMap.prototype.has(obj);
    } catch (e) {
        return true;
    }
}
```
