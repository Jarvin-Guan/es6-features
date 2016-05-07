###basic functions
          
```
function() {
    function correctProtoBound(proto) {
        var f = function() {};
        if (Object.setPrototypeOf) {
            Object.setPrototypeOf(f, proto);
        } else {
            f.__proto__ = proto;
        }
        var boundF = Function.prototype.bind.call(f, null);
        return Object.getPrototypeOf(boundF) === proto;
    }
    return correctProtoBound(Function.prototype) && correctProtoBound({}) && correctProtoBound(null);
}
```
###generator functions
          
```
function() {
    function correctProtoBound(proto) {
        var f = function*() {};
        if (Object.setPrototypeOf) {
            Object.setPrototypeOf(f, proto);
        } else {
            f.__proto__ = proto;
        }
        var boundF = Function.prototype.bind.call(f, null);
        return Object.getPrototypeOf(boundF) === proto;
    }
    return correctProtoBound(Function.prototype) && correctProtoBound({}) && correctProtoBound(null);
}
```
###arrow functions
          
```
function() {
    function correctProtoBound(proto) {
        var f = () = & gt;
        5;
        if (Object.setPrototypeOf) {
            Object.setPrototypeOf(f, proto);
        } else {
            f.__proto__ = proto;
        }
        var boundF = Function.prototype.bind.call(f, null);
        return Object.getPrototypeOf(boundF) === proto;
    }
    return correctProtoBound(Function.prototype) && correctProtoBound({}) && correctProtoBound(null);
}
```
###classes
          
```
function() {
    function correctProtoBound(proto) {
        class C {}
        if (Object.setPrototypeOf) {
            Object.setPrototypeOf(C, proto);
        } else {
            C.__proto__ = proto;
        }
        var boundF = Function.prototype.bind.call(C, null);
        return Object.getPrototypeOf(boundF) === proto;
    }
    return correctProtoBound(Function.prototype) && correctProtoBound({}) && correctProtoBound(null);
}
```
###subclasses
          
```
function() {
    function correctProtoBound(superclass) {
        class C extends superclass {
            constructor() {
                return Object.create(null);
            }
        }
        var boundF = Function.prototype.bind.call(C, null);
        return Object.getPrototypeOf(boundF) === Object.getPrototypeOf(C);
    }
    return correctProtoBound(function() {}) && correctProtoBound(Array) && correctProtoBound(null);
}
```
