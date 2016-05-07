###in constructors
          
```
function() {
    var passed = false;
    new function f() {
        passed = (new.target === f);
    }();
    (function() {
        passed &= (new.target === undefined);
    }());
    return passed;
}
```
###assignment is an early error
          
```
function() {
    var passed = false;
    new function f() {
        passed = (new.target === f);
    }();

    try {
        Function("new.target = function(){};");
    } catch (e) {
        return passed;
    }
}
```
