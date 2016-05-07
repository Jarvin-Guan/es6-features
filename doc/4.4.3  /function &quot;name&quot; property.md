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
###bound functions
          
```
function() {
    function foo() {};
    return foo.bind({}).name === "bound foo" &&
        (function() {}).bind({}).name === "bound ";
}
```
###shorthand methods
          
```
function() {
    var o = {
        foo() {}
    };
    return o.foo.name === "foo";
}
```
###shorthand methods (no lexical binding)
          
```
function() {
    var f = "foo";
    return ({
        f() {
            return f;
        }
    }).f() === "foo";
}
```
###isn't writable, is configurable
          
```
function() {
    var descriptor = Object.getOwnPropertyDescriptor(function f() {}, "name");
    return descriptor.enumerable === false &&
        descriptor.writable === false &&
        descriptor.configurable === true;
}
```
