###duplicate property names in strict mode
          
```
function() {
    'use strict';
    return this === undefined && ({
        a: 1,
        a: 1
    }).a === 1;
}
```
###no semicolon needed after do-while
          
```
function() {
    do {} while (false) return true;
}
```
###no assignments allowed in for-in head
          
```
function() {
    try {
        eval('for (var i = 0 in {}) {}');
    } catch (e) {
        return true;
    }
}
```
###accessors aren't constructors
          
```
function() {
    try {
        new(Object.getOwnPropertyDescriptor({get a() {}
        }, 'a')).get;
    } catch (e) {
        return true;
    }
}
```
###Invalid Date
          
```
function() {
    return new Date(NaN) + "" === "Invalid Date";
}
```
###function 'length' is configurable
          
```
function() {
    var fn = function(a, b) {};

    var desc = Object.getOwnPropertyDescriptor(fn, "length");
    if (desc.configurable) {
        Object.defineProperty(fn, "length", {
            value: 1
        });
        return fn.length === 1;
    }

    return false;
}
```
