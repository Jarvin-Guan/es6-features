###String.prototype.codePointAt
          
```
function() {
    return typeof String.prototype.codePointAt === 'function';
}
```
###String.prototype.normalize
          
```
function() {
    return typeof String.prototype.normalize === "function" && "c\u0327\u0301".normalize("NFC") === "\u1e09" && "\u1e09".normalize("NFD") === "c\u0327\u0301";
}
```
###String.prototype.repeat
          
```
function() {
    return typeof String.prototype.repeat === 'function' && "foo".repeat(3) === "foofoofoo";
}
```
###String.prototype.startsWith
          
```
function() {
    return typeof String.prototype.startsWith === 'function' && "foobar".startsWith("foo");
}
```
###String.prototype.endsWith
          
```
function() {
    return typeof String.prototype.endsWith === 'function' && "foobar".endsWith("bar");
}
```
###String.prototype.includes
          
```
function() {
    return typeof String.prototype.includes === 'function' && "foobar".includes("oba");
}
```
###String.prototype[Symbol.iterator]
          
```
function() {
    return typeof String.prototype[Symbol.iterator] === 'function';
}
```
###String iterator prototype chain
          
```
function() {
    // Iterator instance
    var iterator = '' [Symbol.iterator]();
    // %StringIteratorPrototype%
    var proto1 = Object.getPrototypeOf(iterator);
    // %IteratorPrototype%
    var proto2 = Object.getPrototypeOf(proto1);

    return proto2.hasOwnProperty(Symbol.iterator) &&
        !proto1.hasOwnProperty(Symbol.iterator) &&
        !iterator.hasOwnProperty(Symbol.iterator) &&
        iterator[Symbol.iterator]() === iterator;
}
```
