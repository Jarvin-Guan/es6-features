###with arrays
          
```
function() {
    var arr = [5];
    for (var item of arr)
        return item === 5;
}
```
###with sparse arrays
          
```
function() {
    var arr = [, , ];
    var count = 0;
    for (var item of arr)
        count += (item === undefined);
    return count === 2;
}
```
###with strings
          
```
function() {
    var str = "";
    for (var item of "foo")
        str += item;
    return str === "foo";
}
```
###with astral plane strings
          
```
function() {
    var str = "";
    for (var item of "𠮷𠮶")
        str += item + " ";
    return str === "𠮷 𠮶 ";
}
```
###with generic iterables
          
```
function() {
    var result = "";
    var iterable = global.__createIterableObject([1, 2, 3]);
    for (var item of iterable) {
        result += item;
    }
    return result === "123";
}
```
###with instances of generic iterables
          
```
function() {
    var result = "";
    var iterable = global.__createIterableObject([1, 2, 3]);
    for (var item of Object.create(iterable)) {
        result += item;
    }
    return result === "123";
}
```
