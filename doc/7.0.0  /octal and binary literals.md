###octal literals
          
```
function() {
    return 0o10 === 8 && 0O10 === 8;
}
```
###binary literals
          
```
function() {
    return 0b10 === 2 && 0B10 === 2;
}
```
###octal supported by Number()
          
```
function() {
    return Number('0o1') === 1;
}
```
###binary supported by Number()
          
```
function() {
    return Number('0b1') === 1;
}
```
