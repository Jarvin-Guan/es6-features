###basic functionality
          
```
function() {
    var obj = {};
    var set = new Set();

    set.add(123);
    set.add(123);

    return set.has(123);
}
```
###constructor arguments
          
```
function() {
    var obj1 = {};
    var obj2 = {};
    var set = new Set([obj1, obj2]);

    return set.has(obj1) && set.has(obj2);
}
```
###constructor requires new
          
```
function() {
    new Set();
    try {
        Set();
        return false;
    } catch (e) {
        return true;
    }
}
```
###constructor accepts null
          
```
function() {
    new Set(null);
    return true;
}
```
###constructor invokes add
          
```
function() {
    var passed = false;
    var _add = Set.prototype.add;

    Set.prototype.add = function(v) {
        passed = true;
    };

    new Set([1]);
    Set.prototype.add = _add;

    return passed;
}
```
###Set.prototype.add returns this
          
```
function() {
    var set = new Set();
    return set.add(0) === set;
}
```
###Set.prototype.size
          
```
function() {
    var obj = {};
    var set = new Set();

    set.add(123);
    set.add(123);
    set.add(456);

    return set.size === 2;
}
```
###Set.prototype.delete
          
```
function() {
    return typeof Set.prototype.delete === "function";
}
```
###Set.prototype.clear
          
```
function() {
    return typeof Set.prototype.clear === "function";
}
```
###Set.prototype.forEach
          
```
function() {
    return typeof Set.prototype.forEach === "function";
}
```
###Set.prototype.keys
          
```
function() {
    return typeof Set.prototype.keys === "function";
}
```
###Set.prototype.values
          
```
function() {
    return typeof Set.prototype.values === "function";
}
```
###Set.prototype.entries
          
```
function() {
    return typeof Set.prototype.entries === "function";
}
```
###Set.prototype[Symbol.iterator]
          
```
function() {
    return typeof Set.prototype[Symbol.iterator] === "function";
}
```
###Set.prototype isn't an instance
          
```
function() {
    new Set();
    var obj = {};
    try {
        Set.prototype.has(obj);
    } catch (e) {
        return true;
    }
}
```
