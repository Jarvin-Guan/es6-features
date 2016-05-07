###basic support
          
```
function() {
    return {
        __proto__: []
    }
    instanceof Array
        && !({
                __proto__: null
            }
            instanceof Object);
}
```
###multiple __proto__ is an error
          
```
function() {
    try {
        eval("({ __proto__ : [], __proto__: {} })");
    } catch (e) {
        return true;
    }
}
```
###not a computed property
          
```
function() {
    if (!({
                __proto__: []
            }
            instanceof Array)) {
        return false;
    }
    var a = "__proto__";
    return !({
            [a]: []
        }
        instanceof Array);
}
```
###not a shorthand property
          
```
function() {
    if (!({
                __proto__: []
            }
            instanceof Array)) {
        return false;
    }
    var __proto__ = [];
    return !({
            __proto__
        }
        instanceof Array);
}
```
###not a shorthand method
          
```
function() {
    if (!({
                __proto__: []
            }
            instanceof Array)) {
        return false;
    }
    return !({
            __proto__() {}
        }
        instanceof Function);
}
```
