###class statement
          
```
function() {
    class C {}
    return typeof C === "function";
}
```
###is block-scoped
          
```
function() {
    class C {}
    var c1 = C; {
        class C {}
        var c2 = C;
    }
    return C === c1;
}
```
###class expression
          
```
function() {
    return typeof class C {} === "function";
}
```
###anonymous class
          
```
function() {
    return typeof class {} === "function";
}
```
###constructor
          
```
function() {
    class C {
        constructor() {
            this.x = 1;
        }
    }
    return C.prototype.constructor === C && new C().x === 1;
}
```
###prototype methods
          
```
function() {
    class C {
        method() {
            return 2;
        }
    }
    return typeof C.prototype.method === "function" && new C().method() === 2;
}
```
###string-keyed methods
          
```
function() {
    class C {
        "foo bar" () {
            return 2;
        }
    }
    return typeof C.prototype["foo bar"] === "function" && new C()["foo bar"]() === 2;
}
```
###computed prototype methods
          
```
function() {
    var foo = "method";
    class C {
        [foo]() {
            return 2;
        }
    }
    return typeof C.prototype.method === "function" && new C().method() === 2;
}
```
###optional semicolons
          
```
function() {
    class C {;
        method() {
            return 2;
        };
        method2() {
            return 2;
        }
        method3() {
            return 2;
        };
    }
    return typeof C.prototype.method === "function" && typeof C.prototype.method2 === "function" && typeof C.prototype.method3 === "function";
}
```
###static methods
          
```
function() {
    class C {
        static method() {
            return 3;
        }
    }
    return typeof C.method === "function" && C.method() === 3;
}
```
###computed static methods
          
```
function() {
    var foo = "method";
    class C {
        static[foo]() {
            return 3;
        }
    }
    return typeof C.method === "function" && C.method() === 3;
}
```
###accessor properties
          
```
function() {
    var baz = false;
    class C {
        get foo() {
            return "foo";
        }
        set bar(x) {
            baz = x;
        }
    }
    new C().bar = true;
    return new C().foo === "foo" && baz;
}
```
###computed accessor properties
          
```
function() {
    var garply = "foo",
        grault = "bar",
        baz = false;
    class C {
        get[garply]() {
            return "foo";
        }
        set[grault](x) {
            baz = x;
        }
    }
    new C().bar = true;
    return new C().foo === "foo" && baz;
}
```
###static accessor properties
          
```
function() {
    var baz = false;
    class C {
        static get foo() {
            return "foo";
        }
        static set bar(x) {
            baz = x;
        }
    }
    C.bar = true;
    return C.foo === "foo" && baz;
}
```
###computed static accessor properties
          
```
function() {
    var garply = "foo",
        grault = "bar",
        baz = false;
    class C {
        static get[garply]() {
            return "foo";
        }
        static set[grault](x) {
            baz = x;
        }
    }
    C.bar = true;
    return C.foo === "foo" && baz;
}
```
###class name is lexically scoped
          
```
function() {
    class C {
        method() {
            return typeof C === "function";
        }
    }
    var M = C.prototype.method;
    C = undefined;
    return C === undefined && M();
}
```
###computed names, temporal dead zone
          
```
function() {
    try {
        var B = class C {
            [C]() {}
        }
    } catch (e) {
        return true;
    }
}
```
###methods aren't enumerable
          
```
function() {
    class C {
        foo() {}
        static bar() {}
    }
    return !C.prototype.propertyIsEnumerable("foo") && !C.propertyIsEnumerable("bar");
}
```
###implicit strict mode
          
```
function() {
    class C {
        static method() {
            return this === undefined;
        }
    }
    return (0, C.method)();
}
```
###constructor requires new
          
```
function() {
    class C {}
    try {
        C();
    } catch (e) {
        return true;
    }
}
```
###extends
          
```
function() {
    class B {}
    class C extends B {}
    return new C() instanceof B && B.isPrototypeOf(C);
}
```
###extends expressions
          
```
function() {
    var B;
    class C extends(B = class {}) {}
    return new C() instanceof B && B.isPrototypeOf(C);
}
```
###extends null
          
```
function() {
    class C extends null {
        constructor() {
            return Object.create(null);
        }
    }
    return Function.prototype.isPrototypeOf(C) && Object.getPrototypeOf(C.prototype) === null;
}
```
###new.target
          
```
function() {
    var passed = false;
    new function f() {
        passed = new.target === f;
    }();

    class A {
        constructor() {
            passed &= new.target === B;
        }
    }
    class B extends A {}
    new B();
    return passed;
}
```
