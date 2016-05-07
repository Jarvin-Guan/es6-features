###Array.prototype.copyWithin
          
```
function() {
    return typeof Array.prototype.copyWithin === 'function';
}
```
###Array.prototype.find
          
```
function() {
    return typeof Array.prototype.find === 'function';
}
```
###Array.prototype.findIndex
          
```
function() {
    return typeof Array.prototype.findIndex === 'function';
}
```
###Array.prototype.fill
          
```
function() {
    return typeof Array.prototype.fill === 'function';
}
```
###Array.prototype.keys
          
```
function() {
    return typeof Array.prototype.keys === 'function';
}
```
###Array.prototype.entries
          
```
function() {
    return typeof Array.prototype.entries === 'function';
}
```
###Array.prototype[Symbol.iterator]
          
```
function() {
    return typeof Array.prototype[Symbol.iterator] === 'function';
}
```
###Array.prototype[Symbol.unscopables]
          
```
function() {
    var unscopables = Array.prototype[Symbol.unscopables];
    if (!unscopables) {
        return false;
    }
    var ns = "find,findIndex,fill,copyWithin,entries,keys,values".split(",");
    for (var i = 0; i & lt; ns.length; i++) {
        if (Array.prototype[ns[i]] && !unscopables[ns[i]]) return false;
    }
    return true;
}
```
