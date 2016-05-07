###with arrays
          
```
function() {
    var a, b, c;
    [a, , [b], c] = [5, null, [6]];
    return a === 5 && b === 6 && c === undefined;
}
```
###with sparse arrays
          
```
function() {
    var a, b;
    [a, , b] = [, , , ];
    return a === undefined && b === undefined;
}
```
###with strings
          
```
function() {
    var a, b, c;
    [a, b, c] = "ab";
    return a === "a" && b === "b" && c === undefined;
}
```
###with astral plane strings
          
```
function() {
    var c;
    [c] = "𠮷𠮶";
    return c === "𠮷";
}
```
###with generator instances
          
```
function() {
    var a, b, c;
    [a, b, c] = (function*() {
        yield 1;
        yield 2;
    }());
    return a === 1 && b === 2 && c === undefined;
}
```
###with generic iterables
          
```
function() {
    var a, b, c;
    [a, b, c] = global.__createIterableObject([1, 2]);
    return a === 1 && b === 2 && c === undefined;
}
```
###with instances of generic iterables
          
```
function() {
    var a, b, c;
    [a, b, c] = Object.create(global.__createIterableObject([1, 2]));
    return a === 1 && b === 2 && c === undefined;
}
```
###iterable destructuring expression
          
```
function() {
    var a, b, iterable = [1, 2];
    return ([a, b] = iterable) === iterable;
}
```
###chained iterable destructuring
          
```
function() {
    var a, b, c, d;
    [a, b] = [c, d] = [1, 2];
    return a === 1 && b === 2 && c === 1 && d === 2;
}
```
###trailing commas in iterable patterns
          
```
function() {
    var a;
    [a, ] = [1];
    return a === 1;
}
```
###with objects
          
```
function() {
    var c, d, e;
    ({
        c,
        x: d,
        e
    } = {
        c: 7,
        x: 8
    });
    return c === 7 && d === 8 && e === undefined;
}
```
###object destructuring with primitives
          
```
function() {
    var toFixed, slice;
    ({
        toFixed
    } = 2);
    ({
        slice
    } = '');
    return toFixed === Number.prototype.toFixed && slice === String.prototype.slice;
}
```
###trailing commas in object patterns
          
```
function() {
    var a;
    ({
        a,
    } = {
        a: 1
    });
    return a === 1;
}
```
###object destructuring expression
          
```
function() {
    var a, b, obj = {
        a: 1,
        b: 2
    };
    return ({
        a,
        b
    } = obj) === obj;
}
```
###parenthesised left-hand-side is a syntax error
          
```
function() {
    var a, b;
    ({
        a,
        b
    } = {
        a: 1,
        b: 2
    });
    try {
        eval("({a,b}) = {a:3,b:4};");
    } catch (e) {
        return a === 1 && b === 2;
    }
}
```
###chained object destructuring
          
```
function() {
    var a, b, c, d;
    ({
        a,
        b
    } = {
        c,
        d
    } = {
        a: 1,
        b: 2,
        c: 3,
        d: 4
    });
    return a === 1 && b === 2 && c === 3 && d === 4;
}
```
###throws on null and undefined
          
```
function() {
    var a, b;
    try {
        ({
            a
        } = null);
        return false;
    } catch (e) {}
    try {
        ({
            b
        } = undefined);
        return false;
    } catch (e) {}
    return true;
}
```
###computed properties
          
```
function() {
    var grault, qux = "corge";
    ({
        [qux]: grault
    } = {
        corge: "garply"
    });
    return grault === "garply";
}
```
###nested
          
```
function() {
    var e, f, g, h, i;
    [e, {
        x: f,
        g
    }] = [9, {
        x: 10
    }];
    ({
        h,
        x: [i]
    } = {
        h: 11,
        x: [12]
    });
    return e === 9 && f === 10 && g === undefined && h === 11 && i === 12;
}
```
###rest
          
```
function() {
    var a, b, c, d;
    [a, ...b] = [3, 4, 5];
    [c, ...d] = [6];
    return a === 3 && b instanceof Array && (b + "") === "4,5" &&
        c === 6 && d instanceof Array && d.length === 0;
}
```
###nested rest
          
```
function() {
    var a = [1, 2, 3],
        first, last;
    [first, ...[a[2], last]] = a;
    return first === 1 && last === 3 && (a + "") === "1,2,2";
}
```
###empty patterns
          
```
function() {
    [] = [1, 2];
    ({} = {
        a: 1,
        b: 2
    });
    return true;
}
```
###defaults
          
```
function() {
    var a, b, c, d, e, f;
    ({
        a = 1,
        b = 0,
        z: c = 3
    } = {
        b: 2,
        z: undefined
    });
    [d = 0, e = 5, f = 6] = [4, , undefined];
    return a === 1 && b === 2 && c === 3 && d === 4 && e === 5 && f === 6;
}
```
