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
###new Function
          
```
function() {
    return (new Function).name === "anonymous";
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
###class statements
          
```
function() {
    class foo {};
    class bar {
        static name() {}
    };
    return foo.name === "foo" &&
        typeof bar.name === "function";
}
```
###class expressions
          
```
function() {
    return class foo {}.name === "foo" &&
        typeof class bar {
            static name() {}
        }.name === "function";
}
```
###class prototype methods
          
```
function() {
    class C {
        foo() {}
    };
    return (new C).foo.name === "foo";
}
```
###class static methods
          
```
function() {
    class C {
        static foo() {}
    };
    return C.foo.name === "foo";
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
