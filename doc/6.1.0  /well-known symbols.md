###Symbol.isConcatSpreadable
          
```
function() {
    var a = [],
        b = [];
    b[Symbol.isConcatSpreadable] = false;
    a = a.concat(b);
    return a[0] === b;
}
```
###Symbol.iterator, existence
          
```
function() {
    return "iterator" in Symbol;
}
```
###Symbol.iterator, arguments object
          
```
function() {
    return (function() {
        return typeof arguments[Symbol.iterator] === 'function' && Object.hasOwnProperty.call(arguments, Symbol.iterator);
    }());
}
```
###Symbol.replace
          
```
function() {
    var O = {};
    O[Symbol.replace] = function() {
        return 42;
    };
    return ''.replace(O) === 42;
}
```
###Symbol.search
          
```
function() {
    var O = {};
    O[Symbol.search] = function() {
        return 42;
    };
    return ''.search(O) === 42;
}
```
###Symbol.split
          
```
function() {
    var O = {};
    O[Symbol.split] = function() {
        return 42;
    };
    return ''.split(O) === 42;
}
```
###Symbol.match
          
```
function() {
    var O = {};
    O[Symbol.match] = function() {
        return 42;
    };
    return ''.match(O) === 42;
}
```
###Symbol.match, RegExp constructor
          
```
function() {
    var re = /./;
    re[Symbol.match] = false;
    var foo = {
        constructor: RegExp
    };
    foo[Symbol.match] = true;
    return RegExp(re) !== re && RegExp(foo) === foo;
}
```
###Symbol.toPrimitive
          
```
function() {
    var a = {},
        b = {},
        c = {};
    var passed = 0;
    a[Symbol.toPrimitive] = function(hint) {
        passed += hint === "number";
        return 0;
    };
    b[Symbol.toPrimitive] = function(hint) {
        passed += hint === "string";
        return 0;
    };
    c[Symbol.toPrimitive] = function(hint) {
        passed += hint === "default";
        return 0;
    };

    a >= 0;
    b in {};
    c == 0;
    return passed === 3;
}
```
###Symbol.toStringTag
          
```
function() {
    var a = {};
    a[Symbol.toStringTag] = "foo";
    return (a + "") === "[object foo]";
}
```
###Symbol.toStringTag affects existing built-ins
          
```
function() {
    var s = Symbol.toStringTag;
    var passed = true;
    [
        [Array.prototype, []],
        [String.prototype, ''],
        [arguments, arguments],
        [Function.prototype, function() {}],
        [Error.prototype, new Error()],
        [Boolean.prototype, true],
        [Number.prototype, 2],
        [Date.prototype, new Date()],
        [RegExp.prototype, /./]
    ].forEach(function(pair) {
        pair[0][s] = "foo";
        passed &= (Object.prototype.toString.call(pair[1]) === "[object foo]");
        delete pair[0][s];
    });
    return passed;
}
```
###Symbol.toStringTag, new built-ins
          
```
function() {
    var passed = true;
    var s = Symbol.toStringTag;
    [
        [String, "String Iterator"],
        [Array, "Array Iterator"],
        [Map, "Map Iterator"],
        [Set, "Set Iterator"]
    ].forEach(function(pair) {
        var iterProto = Object.getPrototypeOf(new pair[0]()[Symbol.iterator]());
        passed = passed && iterProto.hasOwnProperty(s) && iterProto[s] === pair[1];
    });
    passed = passed && Object.getPrototypeOf(function*() {})[s] === "GeneratorFunction" && Object.getPrototypeOf(function*() {}())[s] === "Generator" && Map.prototype[s] === "Map" && Set.prototype[s] === "Set" && ArrayBuffer.prototype[s] === "ArrayBuffer" && DataView.prototype[s] === "DataView" && Promise.prototype[s] === "Promise" && Symbol.prototype[s] === "Symbol" && typeof Object.getOwnPropertyDescriptor(
        Object.getPrototypeOf(Int8Array).prototype, Symbol.toStringTag).get === "function";
    return passed;
}
```
###Symbol.toStringTag, misc. built-ins
          
```
function() {
    var s = Symbol.toStringTag;
    return Math[s] === "Math" && JSON[s] === "JSON";
}
```
###Symbol.unscopables
          
```
function() {
    var a = {
        foo: 1,
        bar: 2
    };
    a[Symbol.unscopables] = {
        bar: true
    };
    with(a) {
        return foo === 1 && typeof bar === "undefined";
    }
}
```
