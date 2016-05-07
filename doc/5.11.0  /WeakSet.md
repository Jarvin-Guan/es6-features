###basic functionality
          
```
function() {
    var obj1 = {};
    var weakset = new WeakSet();

    weakset.add(obj1);
    weakset.add(obj1);

    return weakset.has(obj1);
}
```
###constructor arguments
          
```
function() {
    var obj1 = {},
        obj2 = {};
    var weakset = new WeakSet([obj1, obj2]);

    return weakset.has(obj1) && weakset.has(obj2);
}
```
###constructor requires new
          
```
function() {
    new WeakSet();
    try {
        WeakSet();
        return false;
    } catch (e) {
        return true;
    }
}
```
###constructor accepts null
          
```
function() {
    new WeakSet(null);
    return true;
}
```
###constructor invokes add
          
```
function() {
    var passed = false;
    var _add = WeakSet.prototype.add;

    WeakSet.prototype.add = function(v) {
        passed = true;
    };

    new WeakSet([{}]);
    WeakSet.prototype.add = _add;

    return passed;
}
```
###WeakSet.prototype.add returns this
          
```
function() {
    var weakset = new WeakSet();
    var obj = {};
    return weakset.add(obj) === weakset;
}
```
###WeakSet.prototype.delete
          
```
function() {
    return typeof WeakSet.prototype.delete === "function";
}
```
###no WeakSet.prototype.clear method
          
```
function() {
    if (!("clear" in WeakSet.prototype)) {
        return true;
    }
    var s = new WeakSet();
    var key = {};
    s.add(key);
    s.clear();
    return s.has(key);
}
```
###.has and .delete methods accept primitives
          
```
function() {
    var s = new WeakSet;
    return s.has(1) === false && s.delete(1) === false;
}
```
###WeakSet.prototype isn't an instance
          
```
function() {
    new WeakSet();
    var obj = {};
    try {
        WeakSet.prototype.has(obj);
    } catch (e) {
        return true;
    }
}
```
