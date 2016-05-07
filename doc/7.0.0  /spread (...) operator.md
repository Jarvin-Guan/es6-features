###with arrays, in function calls
          
```
function() {
    return Math.max(...[1, 2, 3]) === 3
}
```
###with arrays, in array literals
          
```
function() {
    return [...[1, 2, 3]][2] === 3;
}
```
###with sparse arrays, in function calls
          
```
function() {
    var a = Array(...[, , ]);
    return "0" in a && "1" in a && '' + a[0] + a[1] === "undefinedundefined";
}
```
###with sparse arrays, in array literals
          
```
function() {
    var a = [...[, , ]];
    return "0" in a && "1" in a && '' + a[0] + a[1] === "undefinedundefined";
}
```
###with strings, in function calls
          
```
function() {
    return Math.max(...
        "1234") === 4;
}
```
###with strings, in array literals
          
```
function() {
    return ["a", ...
        "bcd", "e"
    ][3] === "d";
}
```
###with astral plane strings, in function calls
          
```
function() {
    return Array(...
        "𠮷𠮶")[0] === "𠮷";
}
```
###with astral plane strings, in array literals
          
```
function() {
    return [...
        "𠮷𠮶"
    ][0] === "𠮷";
}
```
###with generator instances, in calls
          
```
function() {
    var iterable = (function*() {
        yield 1;
        yield 2;
        yield 3;
    }());
    return Math.max(...iterable) === 3;
}
```
###with generator instances, in arrays
          
```
function() {
    var iterable = (function*() {
        yield "b";
        yield "c";
        yield "d";
    }());
    return ["a", ...iterable, "e"][3] === "d";
}
```
###with generic iterables, in calls
          
```
function() {
    var iterable = global.__createIterableObject([1, 2, 3]);
    return Math.max(...iterable) === 3;
}
```
###with generic iterables, in arrays
          
```
function() {
    var iterable = global.__createIterableObject(["b", "c", "d"]);
    return ["a", ...iterable, "e"][3] === "d";
}
```
###with instances of iterables, in calls
          
```
function() {
    var iterable = global.__createIterableObject([1, 2, 3]);
    return Math.max(...Object.create(iterable)) === 3;
}
```
###with instances of iterables, in arrays
          
```
function() {
    var iterable = global.__createIterableObject(["b", "c", "d"]);
    return ["a", ...Object.create(iterable), "e"][3] === "d";
}
```
###spreading non-iterables is a runtime error
          
```
function() {
    try {
        Math.max(...2);
    } catch (e) {
        return Math.max(...[1, 2, 3]) === 3;
    }
}
```
