###no escaped reserved words as identifiers
          
```
function() {
    var\ u0061;
    try {
        eval('var v\\u0061r');
    } catch (e) {
        return true;
    }
}
```
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
###RegExp constructor can alter flags
          
```
function() {
    return new RegExp(/./im, "g").global === true;
}
```
###RegExp.prototype.toString generic and uses &quot;flags&quot; property
          
```
function() {
    return RegExp.prototype.toString.call({
        source: 'foo',
        flags: 'bar'
    }) === '/foo/bar';
}
```
###built-in prototypes are not instances
          
```
function() {
    try {
        RegExp.prototype.exec();
        return false;
    } catch (e) {}
    try {
        Date.prototype.valueOf();
        return false;
    } catch (e) {}

    if (![Error, EvalError, RangeError, ReferenceError, SyntaxError, TypeError, URIError].every(function(E) {
            return Object.prototype.toString.call(E.prototype) === '[object Object]';
        })) {
        return false;
    }

    return true;
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
