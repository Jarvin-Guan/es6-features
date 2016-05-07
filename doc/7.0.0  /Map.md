###basic functionality
          
```
function() {
    var key = {};
    var map = new Map();

    map.set(key, 123);

    return map.has(key) && map.get(key) === 123;
}
```
###constructor arguments
          
```
function() {
    var key1 = {};
    var key2 = {};
    var map = new Map([
        [key1, 123],
        [key2, 456]
    ]);

    return map.has(key1) && map.get(key1) === 123 &&
        map.has(key2) && map.get(key2) === 456;
}
```
###constructor requires new
          
```
function() {
    new Map();
    try {
        Map();
        return false;
    } catch (e) {
        return true;
    }
}
```
###constructor accepts null
          
```
function() {
    new Map(null);
    return true;
}
```
###constructor invokes set
          
```
function() {
    var passed = false;
    var _set = Map.prototype.set;

    Map.prototype.set = function(k, v) {
        passed = true;
    };

    new Map([
        [1, 2]
    ]);
    Map.prototype.set = _set;

    return passed;
}
```
###Map.prototype.set returns this
          
```
function() {
    var map = new Map();
    return map.set(0, 0) === map;
}
```
###-0 key converts to +0
          
```
function() {
    var map = new Map();
    map.set(-0, "foo");
    var k;
    map.forEach(function(value, key) {
        k = 1 / key;
    });
    return k === Infinity && map.get(+0) == "foo";
}
```
###Map.prototype.size
          
```
function() {
    var key = {};
    var map = new Map();

    map.set(key, 123);

    return map.size === 1;
}
```
###Map.prototype.delete
          
```
function() {
    return typeof Map.prototype.delete === "function";
}
```
###Map.prototype.clear
          
```
function() {
    return typeof Map.prototype.clear === "function";
}
```
###Map.prototype.forEach
          
```
function() {
    return typeof Map.prototype.forEach === "function";
}
```
###Map.prototype.keys
          
```
function() {
    return typeof Map.prototype.keys === "function";
}
```
###Map.prototype.values
          
```
function() {
    return typeof Map.prototype.values === "function";
}
```
###Map.prototype.entries
          
```
function() {
    return typeof Map.prototype.entries === "function";
}
```
###Map.prototype[Symbol.iterator]
          
```
function() {
    return typeof Map.prototype[Symbol.iterator] === "function";
}
```
###Map.prototype isn't an instance
          
```
function() {
    new Map();
    var obj = {};
    try {
        Map.prototype.has(obj);
    } catch (e) {
        return true;
    }
}
```
###Map iterator prototype chain
          
```
function() {
    // Iterator instance
    var iterator = new Map()[Symbol.iterator]();
    // %MapIteratorPrototype%
    var proto1 = Object.getPrototypeOf(iterator);
    // %IteratorPrototype%
    var proto2 = Object.getPrototypeOf(proto1);

    return proto2.hasOwnProperty(Symbol.iterator) &&
        !proto1.hasOwnProperty(Symbol.iterator) &&
        !iterator.hasOwnProperty(Symbol.iterator) &&
        iterator[Symbol.iterator]() === iterator;
}
```
