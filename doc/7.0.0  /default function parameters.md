###basic functionality
          
```
function() {
    return (function(a = 1, b = 2) {
        return a === 3 && b === 2;
    }(3));
}
```
###explicit undefined defers to the default
          
```
function() {
    return (function(a = 1, b = 2) {
        return a === 1 && b === 3;
    }(undefined, 3));
}
```
###defaults can refer to previous params
          
```
function() {
    return (function(a, b = a) {
        return b === 5;
    }(5));
}
```
###arguments object interaction
          
```
function() {
    return (function(a = "baz", b = "qux", c = "quux") {
        a = "corge";
        // The arguments object is not mapped to the
        // parameters, even outside of strict mode.
        return arguments.length === 2 && arguments[0] === "foo" && arguments[1] === "bar";
    }("foo", "bar"));
}
```
###temporal dead zone
          
```
function() {
    return (function(x = 1) {
        try {
            eval("(function(a=a){}())");
            return false;
        } catch (e) {}
        try {
            eval("(function(a=b,b){}())");
            return false;
        } catch (e) {}
        return true;
    }());
}
```
###separate scope
          
```
function() {
    return (function(a = function() {
        return typeof b === 'undefined';
    }) {
        var b = 1;
        return a();
    }());
}
```
###new Function() support
          
```
function() {
    return new Function("a = 1", "b = 2",
        "return a === 3 && b === 2;"
    )(3);
}
```
