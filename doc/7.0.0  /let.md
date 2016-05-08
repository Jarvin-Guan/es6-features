###basic support
          
```
function() {
    let foo = 123;
    return (foo === 123);
}
```
###is block-scoped
          
```
function() {
    let bar = 123; {
        let bar = 456;
    }
    return bar === 123;
}
```
###cannot be in statements
          
```
function() {
    let bar = 1;
    try {
        Function("if(true) let baz = 1;")();
    } catch (e) {
        return true;
    }
}
```
###for loop statement scope
          
```
function() {
    let baz = 1;
    for (let baz = 0; false;) {}
    return baz === 1;
}
```
###temporal dead zone
          
```
function() {
    var passed = (function() {
        try {
            qux;
        } catch (e) {
            return true;
        }
    }());

    function fn() {
        passed &= qux === 456;
    }
    let qux = 456;
    fn();
    return passed;
}
```
###for/for-in loop iteration scope
          
```
function() {
    let scopes = [];
    for (let i = 0; i < 2; i++) {
        scopes.push(function() {
            return i;
        });
    }
    let passed = (scopes[0]() === 0 && scopes[1]() === 1);

    scopes = [];
    for (let i in {
            a: 1,
            b: 1
        }) {
        scopes.push(function() {
            return i;
        });
    }
    passed &= (scopes[0]() === "a" && scopes[1]() === "b");
    return passed;
}
```
###basic support (strict mode)
          
```
function() {
    'use strict';
    let foo = 123;
    return (foo === 123);
}
```
###is block-scoped (strict mode)
          
```
function() {
    'use strict';
    let bar = 123; {
        let bar = 456;
    }
    return bar === 123;
}
```
###cannot be in statements (strict mode)
          
```
function() {
    'use strict';
    let bar = 1;
    try {
        Function("'use strict'; if(true) let baz = 1;")();
    } catch (e) {
        return true;
    }
}
```
###for loop statement scope (strict mode)
          
```
function() {
    'use strict';
    let baz = 1;
    for (let baz = 0; false;) {}
    return baz === 1;
}
```
###temporal dead zone (strict mode)
          
```
function() {
    'use strict';
    var passed = (function() {
        try {
            qux;
        } catch (e) {
            return true;
        }
    }());

    function fn() {
        passed &= qux === 456;
    }
    let qux = 456;
    fn();
    return passed;
}
```
###for/for-in loop iteration scope (strict mode)
          
```
function() {
    'use strict';
    let scopes = [];
    for (let i = 0; i < 2; i++) {
        scopes.push(function() {
            return i;
        });
    }
    let passed = (scopes[0]() === 0 && scopes[1]() === 1);

    scopes = [];
    for (let i in {
            a: 1,
            b: 1
        }) {
        scopes.push(function() {
            return i;
        });
    }
    passed &= (scopes[0]() === "a" && scopes[1]() === "b");
    return passed;
}
```
