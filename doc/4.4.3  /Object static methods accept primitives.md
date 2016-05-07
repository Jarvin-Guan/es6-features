###Object.getPrototypeOf
          
```
function() {
    return Object.getPrototypeOf('a').constructor === String;
}
```
###Object.getOwnPropertyDescriptor
          
```
function() {
    return Object.getOwnPropertyDescriptor('a', 'foo') === undefined;
}
```
###Object.getOwnPropertyNames
          
```
function() {
    var s = Object.getOwnPropertyNames('a');
    return s.length === 2 &&
        ((s[0] === 'length' && s[1] === '0') || (s[0] === '0' && s[1] === 'length'));
}
```
###Object.seal
          
```
function() {
    return Object.seal('a') === 'a';
}
```
###Object.freeze
          
```
function() {
    return Object.freeze('a') === 'a';
}
```
###Object.preventExtensions
          
```
function() {
    return Object.preventExtensions('a') === 'a';
}
```
###Object.isSealed
          
```
function() {
    return Object.isSealed('a') === true;
}
```
###Object.isFrozen
          
```
function() {
    return Object.isFrozen('a') === true;
}
```
###Object.isExtensible
          
```
function() {
    return Object.isExtensible('a') === false;
}
```
###Object.keys
          
```
function() {
    var s = Object.keys('a');
    return s.length === 1 && s[0] === '0';
}
```
