###block-level function declaration
          
```
function() {
    'use strict';

    function f() {
        return 1;
    } {
        function f() {
            return 2;
        }
    }
    return f() === 1;
}
```
###0 parameters
          
```
function() {
    return (() = & gt; 5)() === 5;
}
```
###1 parameter, no brackets
          
```
function() {
    var b = x = & gt;
    x + "foo";
    return (b("fee fie foe ") === "fee fie foe foo");
}
```
###multiple parameters
          
```
function() {
    var c = (v, w, x, y, z) = & gt;
    "" + v + w + x + y + z;
    return (c(6, 5, 4, 3, 2) === "65432");
}
```
###lexical &quot;this&quot; binding
          
```
function() {
    var d = {
        x: "bar",
        y: function() {
            return z = & gt;
            this.x + z;
        }
    }.y();
    var e = {
        x: "baz",
        y: d
    };
    return d("ley") === "barley" && e.y("ley") === "barley";
}
```
###&quot;this&quot; unchanged by call or apply
          
```
function() {
    var d = {
        x: "foo",
        y: function() {
            return () = & gt;
            this.x;
        }
    };
    var e = {
        x: "bar"
    };
    return d.y().call(e) === "foo" && d.y().apply(e) === "foo";
}
```
###can't be bound, can be curried
          
```
function() {
    var d = {
        x: "bar",
        y: function() {
            return z = & gt;
            this.x + z;
        }
    };
    var e = {
        x: "baz"
    };
    return d.y().bind(e, "ley")() === "barley";
}
```
###lexical &quot;arguments&quot; binding
          
```
function() {
    var f = (function() {
        return z = & gt;
        arguments[0];
    }(5));
    return f(6) === 5;
}
```
###no line break between params and &lt;code&gt;=&gt;&lt;/code&gt;
          
```
function() {
    return (() = & gt; {
        try {
            Function("x\n =&gt; 2")();
        } catch (e) {
            return true;
        }
    })();
}
```
###correct precedence
          
```
function() {
    return (() = & gt; {
        try {
            Function("0 || () =&gt; 2")();
        } catch (e) {
            return true;
        }
    })();
}
```
###no &quot;prototype&quot; property
          
```
function() {
    var a = () = & gt;
    5;
    return !a.hasOwnProperty("prototype");
}
```
###lexical &quot;super&quot; binding in constructors
          
```
function() {
    var received;

    class B {
        constructor(arg) {
            received = arg;
        }
    }
    class C extends B {
        constructor() {
            var callSuper = () = & gt;
            super('foo');
            callSuper();
        }
    }
    return new C instanceof C && received === 'foo'
}
```
###lexical &quot;super&quot; binding in methods
          
```
function() {
    class B {
        qux() {
            return "quux";
        }
    }
    class C extends B {
        baz() {
            return x = & gt;
            super.qux();
        }
    }
    var arrow = new C().baz();
    return arrow() === "quux";
}
```
###lexical &quot;new.target&quot; binding
          
```
function() {
    function C() {
        return x = & gt;
        new.target;
    }
    return new C()() === C && C()() === undefined;
}
```
