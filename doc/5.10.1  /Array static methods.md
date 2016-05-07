###Array.from, array-like objects
          
```
function() {
    return Array.from({
        0: "foo",
        1: "bar",
        length: 2
    }) + '' === "foo,bar";
}
```
###Array.from, generator instances
          
```
function() {
    var iterable = (function*() {
        yield 1;
        yield 2;
        yield 3;
    }());
    return Array.from(iterable) + '' === "1,2,3";
}
```
###Array.from, generic iterables
          
```
function() {
    var iterable = global.__createIterableObject([1, 2, 3]);
    return Array.from(iterable) + '' === "1,2,3";
}
```
###Array.from, instances of generic iterables
          
```
function() {
    var iterable = global.__createIterableObject([1, 2, 3]);
    return Array.from(Object.create(iterable)) + '' === "1,2,3";
}
```
###Array.from map function, array-like objects
          
```
function() {
    return Array.from({
        0: "foo",
        1: "bar",
        length: 2
    }, function(e, i) {
        return e + this.baz + i;
    }, {
        baz: "d"
    }) + '' === "food0,bard1";
}
```
###Array.from map function, generator instances
          
```
function() {
    var iterable = (function*() {
        yield "foo";
        yield "bar";
        yield "bal";
    }());
    return Array.from(iterable, function(e, i) {
        return e + this.baz + i;
    }, {
        baz: "d"
    }) + '' === "food0,bard1,bald2";
}
```
###Array.from map function, generic iterables
          
```
function() {
    var iterable = global.__createIterableObject(["foo", "bar", "bal"]);
    return Array.from(iterable, function(e, i) {
        return e + this.baz + i;
    }, {
        baz: "d"
    }) + '' === "food0,bard1,bald2";
}
```
###Array.from map function, instances of iterables
          
```
function() {
    var iterable = global.__createIterableObject(["foo", "bar", "bal"]);
    return Array.from(Object.create(iterable), function(e, i) {
        return e + this.baz + i;
    }, {
        baz: "d"
    }) + '' === "food0,bard1,bald2";
}
```
###Array.of
          
```
function() {
    return typeof Array.of === 'function' &&
        Array.of(2)[0] === 2;
}
```
