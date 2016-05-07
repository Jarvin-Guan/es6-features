###with arrays
          
```
function() {
    var [a, , [b], c] = [5, null, [6]];
    return a === 5 && b === 6 && c === undefined;
}
```
###with sparse arrays
          
```
function() {
    var [a, , b] = [, , , ];
    return a === undefined && b === undefined;
}
```
###with strings
          
```
function() {
    var [a, b, c] = "ab";
    return a === "a" && b === "b" && c === undefined;
}
```
###with astral plane strings
          
```
function() {
    var [c] = "𠮷𠮶";
    return c === "𠮷";
}
```
###with generator instances
          
```
function() {
    var [a, b, c] = (function*() {
        yield 1;
        yield 2;
    }());
    return a === 1 && b === 2 && c === undefined;
}
```
###with generic iterables
          
```
function() {
    var [a, b, c] = global.__createIterableObject([1, 2]);
    return a === 1 && b === 2 && c === undefined;
}
```
###with instances of generic iterables
          
```
function() {
    var [a, b, c] = Object.create(global.__createIterableObject([1, 2]));
    return a === 1 && b === 2 && c === undefined;
}
```
###trailing commas in iterable patterns
          
```
function() {
    var [a, ] = [1];
    return a === 1;
}
```
###with objects
          
```
function() {
    var {
        c,
        x: d,
        e
    } = {
        c: 7,
        x: 8
    };
    return c === 7 && d === 8 && e === undefined;
}
```
###object destructuring with primitives
          
```
function() {
    var {
        toFixed
    } = 2;
    var {
        slice
    } = '';
    return toFixed === Number.prototype.toFixed && slice === String.prototype.slice;
}
```
###trailing commas in object patterns
          
```
function() {
    var {
        a,
    } = {
        a: 1
    };
    return a === 1;
}
```
###throws on null and undefined
          
```
function() {
    try {
        var {
            a
        } = null;
        return false;
    } catch (e) {}
    try {
        var {
            b
        } = undefined;
        return false;
    } catch (e) {}
    return true;
}
```
###computed properties
          
```
function() {
    var qux = "corge";
    var {
        [qux]: grault
    } = {
        corge: "garply"
    };
    return grault === "garply";
}
```
###multiples in a single var statement
          
```
function() {
    var [a, b] = [5, 6], {
        c,
        d
    } = {
        c: 7,
        d: 8
    };
    return a === 5 && b === 6 && c === 7 && d === 8;
}
```
###nested
          
```
function() {
    var [e, {
        x: f,
        g
    }] = [9, {
        x: 10
    }];
    var {
        h,
        x: [i]
    } = {
        h: 11,
        x: [12]
    };
    return e === 9 && f === 10 && g === undefined && h === 11 && i === 12;
}
```
###in for-in loop heads
          
```
function() {
    for (var [i, j, k] in {
            qux: 1
        }) {
        return i === "q" && j === "u" && k === "x";
    }
}
```
###in for-of loop heads
          
```
function() {
    for (var [i, j, k] of[[1, 2, 3]]) {
        return i === 1 && j === 2 && k === 3;
    }
}
```
###in catch heads
          
```
function() {
    try {
        throw [1, 2];
    } catch ([i, j]) {
        try {
            throw {
                k: 3,
                l: 4
            };
        } catch ({
            k,
            l
        }) {
            return i === 1 && j === 2 && k === 3 && l === 4;
        }
    }
}
```
###rest
          
```
function() {
    var [a, ...b] = [3, 4, 5];
    var [c, ...d] = [6];
    return a === 3 && b instanceof Array && (b + "") === "4,5" &&
        c === 6 && d instanceof Array && d.length === 0;
}
```
###defaults
          
```
function() {
    var {
        a = 1, b = 0, z: c = 3
    } = {
        b: 2,
        z: undefined
    };
    var [d = 0, e = 5, f = 6] = [4, , undefined];
    return a === 1 && b === 2 && c === 3 && d === 4 && e === 5 && f === 6;
}
```
###defaults, let temporal dead zone
          
```
function() {
    var {
        a,
        b = 2
    } = {
        a: 1
    };
    try {
        eval("let {c = c} = {};");
        return false;
    } catch (e) {}
    try {
        eval("let {c = d, d} = {d:1};");
        return false;
    } catch (e) {}
    return a === 1 && b === 2;
}
```
