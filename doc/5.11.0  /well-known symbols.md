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
