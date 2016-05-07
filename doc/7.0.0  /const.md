###basic support
          
```
function() {
    const foo = 123;
    return (foo === 123);
}
```
###is block-scoped
          
```
function() {
    const bar = 123; {
        const bar = 456;
    }
    return bar === 123;
}
```
###cannot be in statements
          
```
function() {
    const bar = 1;
    try {
        Function("if(true) const baz = 1;")();
    } catch (e) {
        return true;
    }
}
```
###redefining a const is an error
          
```
function() {
    const baz = 1;
    try {
        Function("const foo = 1; foo = 2;")();
    } catch (e) {
        return true;
    }
}
```
###for loop statement scope
          
```
function() {
    const baz = 1;
    for (const baz = 0; false;) {}
    return baz === 1;
}
```
###for-in loop iteration scope
          
```
function() {
    var scopes = [];
    for (const i in {
            a: 1,
            b: 1
        }) {
        scopes.push(function() {
            return i;
        });
    }
    return (scopes[0]() === "a" && scopes[1]() === "b");
}
```
###for-of loop iteration scope
          
```
function() {
    var scopes = [];
    for (const i of['a', 'b']) {
        scopes.push(function() {
            return i;
        });
    }
    return (scopes[0]() === "a" && scopes[1]() === "b");
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
    const qux = 456;
    fn();
    return passed;
}
```
###basic support (strict mode)
          
```
function() {
    "use strict";
    const foo = 123;
    return (foo === 123);
}
```
###is block-scoped (strict mode)
          
```
function() {
    'use strict';
    const bar = 123; {
        const bar = 456;
    }
    return bar === 123;
}
```
###cannot be in statements (strict mode)
          
```
function() {
    'use strict';
    const bar = 1;
    try {
        Function("'use strict'; if(true) const baz = 1;")();
    } catch (e) {
        return true;
    }
}
```
###redefining a const (strict mode)
          
```
function() {
    'use strict';
    const baz = 1;
    try {
        Function("'use strict'; const foo = 1; foo = 2;")();
    } catch (e) {
        return true;
    }
}
```
###for loop statement scope (strict mode)
          
```
function() {
    'use strict';
    const baz = 1;
    for (const baz = 0; false;) {}
    return baz === 1;
}
```
###for-in loop iteration scope (strict mode)
          
```
function() {
    'use strict';
    var scopes = [];
    for (const i in {
            a: 1,
            b: 1
        }) {
        scopes.push(function() {
            return i;
        });
    }
    return (scopes[0]() === "a" && scopes[1]() === "b");
}
```
###for-of loop iteration scope (strict mode)
          
```
function() {
    'use strict';
    var scopes = [];
    for (const i of['a', 'b']) {
        scopes.push(function() {
            return i;
        });
    }
    return (scopes[0]() === "a" && scopes[1]() === "b");
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
    const qux = 456;
    fn();
    return passed;
}
```
