###with arrays
          
```
function() {
    return function([a, , [b], c]) {
        return a === 5 && b === 6 && c === undefined;
    }([5, null, [6]]);
}
```
###with sparse arrays
          
```
function() {
    return function([a, , b]) {
        return a === undefined && b === undefined;
    }([, , , ]);
}
```
###with strings
          
```
function() {
    return function([a, b, c]) {
        return a === "a" && b === "b" && c === undefined;
    }("ab");
}
```
###with astral plane strings
          
```
function() {
    return function([c]) {
        return c === "𠮷";
    }("𠮷𠮶");
}
```
###with generator instances
          
```
function() {
    return function([a, b, c]) {
        return a === 1 && b === 2 && c === undefined;
    }(function*() {
        yield 1;
        yield 2;
    }());
}
```
###with generic iterables
          
```
function() {
    return function([a, b, c]) {
        return a === 1 && b === 2 && c === undefined;
    }(global.__createIterableObject([1, 2]));
}
```
###with instances of generic iterables
          
```
function() {
    return function([a, b, c]) {
        return a === 1 && b === 2 && c === undefined;
    }(Object.create(global.__createIterableObject([1, 2])));
}
```
###trailing commas in iterable patterns
          
```
function() {
    return function([a, ]) {
        return a === 1;
    }([1]);
}
```
###with objects
          
```
function() {
    return function({
        c,
        x: d,
        e
    }) {
        return c === 7 && d === 8 && e === undefined;
    }({
        c: 7,
        x: 8
    });
}
```
###object destructuring with primitives
          
```
function() {
    return function({
        toFixed
    }, {
        slice
    }) {
        return toFixed === Number.prototype.toFixed && slice === String.prototype.slice;
    }(2, '');
}
```
###trailing commas in object patterns
          
```
function() {
    return function({
        a,
    }) {
        return a === 1;
    }({
        a: 1
    });
}
```
###throws on null and undefined
          
```
function() {
    try {
        (function({
            a
        }) {}(null));
        return false;
    } catch (e) {}
    try {
        (function({
            b
        }) {}(undefined));
        return false;
    } catch (e) {}
    return true;
}
```
###computed properties
          
```
function() {
    var qux = "corge";
    return function({
        [qux]: grault
    }) {
        return grault === "garply";
    }({
        corge: "garply"
    });
}
```
###nested
          
```
function() {
    return function([e, {
        x: f,
        g
    }], {
        h,
        x: [i]
    }) {
        return e === 9 && f === 10 && g === undefined && h === 11 && i === 12;
    }([9, {
        x: 10
    }], {
        h: 11,
        x: [12]
    });
}
```
###'arguments' interaction
          
```
function() {
    return (function({
        a,
        x: b,
        y: e
    }, [c, d]) {
        return arguments[0].a === 1 && arguments[0].x === 2 && !("y" in arguments[0]) && arguments[1] + '' === "3,4";
    }({
        a: 1,
        x: 2
    }, [3, 4]));
}
```
###new Function() support
          
```
function() {
    return new Function("{a, x:b, y:e}", "[c, d]",
        "return a === 1 && b === 2 && c === 3 && " + "d === 4 && e === undefined;"
    )({
        a: 1,
        x: 2
    }, [3, 4]);
}
```
###in parameters, function 'length' property
          
```
function() {
    return function({
        a,
        b
    }, [c, d]) {}.length === 2;
}
```
###rest
          
```
function() {
    return function([a, ...b], [c, ...d]) {
        return a === 3 && b instanceof Array && (b + "") === "4,5" &&
            c === 6 && d instanceof Array && d.length === 0;
    }([3, 4, 5], [6]);
}
```
###empty patterns
          
```
function() {
    return function([], {}) {
        return arguments[0] + '' === "3,4" && arguments[1].x === "foo";
    }([3, 4], {
        x: "foo"
    });
}
```
###defaults
          
```
function() {
    return (function({
        a = 1,
        b = 0,
        c = 3,
        x: d = 0,
        y: e = 5
    }, [f = 6, g = 0, h = 8]) {
        return a === 1 && b === 2 && c === 3 && d === 4 &&
            e === 5 && f === 6 && g === 7 && h === 8;
    }({
        b: 2,
        c: undefined,
        x: 4
    }, [, 7, undefined]));
}
```
###defaults, separate scope
          
```
function() {
    return (function({
        a = function() {
            return typeof b === 'undefined';
        }
    }) {
        var b = 1;
        return a();
    }({}));
}
```
###defaults, new Function() support
          
```
function() {
    return new Function("{a = 1, b = 0, c = 3, x:d = 0, y:e = 5}",
        "return a === 1 && b === 2 && c === 3 && d === 4 && e === 5;"
    )({
        b: 2,
        c: undefined,
        x: 4
    });
}
```
