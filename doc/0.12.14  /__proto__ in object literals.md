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
