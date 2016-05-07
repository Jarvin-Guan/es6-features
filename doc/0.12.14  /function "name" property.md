###function statements
          
```
function() {
    function foo() {};
    return foo.name === 'foo' &&
        (function() {}).name === '';
}
```
###function expressions
          
```
function() {
    return (function foo() {}).name === 'foo' &&
        (function() {}).name === '';
}
```
