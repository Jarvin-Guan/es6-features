###String.prototype.normalize
          
```
function() {
    return typeof String.prototype.normalize === "function" && "c\u0327\u0301".normalize("NFC") === "\u1e09" && "\u1e09".normalize("NFD") === "c\u0327\u0301";
}
```
###String.prototype[Symbol.iterator]
          
```
function() {
    return typeof String.prototype[Symbol.iterator] === 'function';
}
```
