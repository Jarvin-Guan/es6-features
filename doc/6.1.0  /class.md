###class statement
          
```
function(){
              <div class="code">class C {}
return typeof C === &quot;function&quot;;</div>}
```
###is block-scoped
          
```
function(){
              <div class="code">class C {}
var c1 = C;
{
  class C {}
  var c2 = C;
}
return C === c1;</div>}
```
###class expression
          
```
function(){
              <div class="code">return typeof class C {} === &quot;function&quot;;</div>}
```
###anonymous class
          
```
function(){
              <div class="code">return typeof class {} === &quot;function&quot;;</div>}
```
###constructor
          
```
function(){
              <div class="code">class C {
  constructor() { this.x = 1; }
}
return C.prototype.constructor === C
  &amp;&amp; new C().x === 1;</div>}
```
###prototype methods
          
```
function(){
              <div class="code">class C {
  method() { return 2; }
}
return typeof C.prototype.method === &quot;function&quot;
  &amp;&amp; new C().method() === 2;</div>}
```
###string-keyed methods
          
```
function(){
              <div class="code">class C {
  &quot;foo bar&quot;() { return 2; }
}
return typeof C.prototype[&quot;foo bar&quot;] === &quot;function&quot;
  &amp;&amp; new C()[&quot;foo bar&quot;]() === 2;</div>}
```
###computed prototype methods
          
```
function(){
              <div class="code">var foo = &quot;method&quot;;
class C {
  [foo]() { return 2; }
}
return typeof C.prototype.method === &quot;function&quot;
  &amp;&amp; new C().method() === 2;</div>}
```
###optional semicolons
          
```
function(){
              <div class="code">class C {
  ;
  method() { return 2; };
  method2() { return 2; }
  method3() { return 2; };
}
return typeof C.prototype.method === &quot;function&quot;
  &amp;&amp; typeof C.prototype.method2 === &quot;function&quot;
  &amp;&amp; typeof C.prototype.method3 === &quot;function&quot;;</div>}
```
###static methods
          
```
function(){
              <div class="code">class C {
  static method() { return 3; }
}
return typeof C.method === &quot;function&quot;
  &amp;&amp; C.method() === 3;</div>}
```
###computed static methods
          
```
function(){
              <div class="code">var foo = &quot;method&quot;;
class C {
  static [foo]() { return 3; }
}
return typeof C.method === &quot;function&quot;
  &amp;&amp; C.method() === 3;</div>}
```
###accessor properties
          
```
function(){
              <div class="code">var baz = false;
class C {
  get foo() { return &quot;foo&quot;; }
  set bar(x) { baz = x; }
}
new C().bar = true;
return new C().foo === &quot;foo&quot; &amp;&amp; baz;</div>}
```
###computed accessor properties
          
```
function(){
              <div class="code">var garply = &quot;foo&quot;, grault = &quot;bar&quot;, baz = false;
class C {
  get [garply]() { return &quot;foo&quot;; }
  set [grault](x) { baz = x; }
}
new C().bar = true;
return new C().foo === &quot;foo&quot; &amp;&amp; baz;</div>}
```
###static accessor properties
          
```
function(){
              <div class="code">var baz = false;
class C {
  static get foo() { return &quot;foo&quot;; }
  static set bar(x) { baz = x; }
}
C.bar = true;
return C.foo === &quot;foo&quot; &amp;&amp; baz;</div>}
```
###computed static accessor properties
          
```
function(){
              <div class="code">var garply = &quot;foo&quot;, grault = &quot;bar&quot;, baz = false;
class C {
  static get [garply]() { return &quot;foo&quot;; }
  static set [grault](x) { baz = x; }
}
C.bar = true;
return C.foo === &quot;foo&quot; &amp;&amp; baz;</div>}
```
###class name is lexically scoped
          
```
function(){
              <div class="code">class C {
  method() { return typeof C === &quot;function&quot;; }
}
var M = C.prototype.method;
C = undefined;
return C === undefined &amp;&amp; M();</div>}
```
###computed names, temporal dead zone
          
```
function(){
              <div class="code">try {
  var B = class C {
    [C](){}
  }
} catch(e) {
  return true;
}</div>}
```
###methods aren't enumerable
          
```
function(){
              <div class="code">class C {
  foo() {}
  static bar() {}
}
return !C.prototype.propertyIsEnumerable(&quot;foo&quot;) &amp;&amp; !C.propertyIsEnumerable(&quot;bar&quot;);</div>}
```
###implicit strict mode
          
```
function(){
              <div class="code">class C {
  static method() { return this === undefined; }
}
return (0,C.method)();</div>}
```
###constructor requires new
          
```
function(){
              <div class="code">class C {}
try {
  C();
}
catch(e) {
  return true;
}</div>}
```
###extends
          
```
function(){
              <div class="code">class B {}
class C extends B {}
return new C() instanceof B
  &amp;&amp; B.isPrototypeOf(C);</div>}
```
###extends expressions
          
```
function(){
              <div class="code">var B;
class C extends (B = class {}) {}
return new C() instanceof B
  &amp;&amp; B.isPrototypeOf(C);</div>}
```
###extends null
          
```
function(){
              <div class="code">class C extends null {
  constructor() { return Object.create(null); }
}
return Function.prototype.isPrototypeOf(C)
  &amp;&amp; Object.getPrototypeOf(C.prototype) === null;</div>}
```
###new.target
          
```
function(){
              <div class="code">var passed = false;
new function f() {
  passed = new.target === f;
}();

class A {
  constructor() {
    passed &amp;= new.target === B;
  }
}
class B extends A {}
new B();
return passed;</div>}
```
###class statement
          
```
function(){
              <div class="code">class C {}
return typeof C === &quot;function&quot;;</div>}
```
###is block-scoped
          
```
function(){
              <div class="code">class C {}
var c1 = C;
{
  class C {}
  var c2 = C;
}
return C === c1;</div>}
```
###class expression
          
```
function(){
              <div class="code">return typeof class C {} === &quot;function&quot;;</div>}
```
###anonymous class
          
```
function(){
              <div class="code">return typeof class {} === &quot;function&quot;;</div>}
```
###constructor
          
```
function(){
              <div class="code">class C {
  constructor() { this.x = 1; }
}
return C.prototype.constructor === C
  &amp;&amp; new C().x === 1;</div>}
```
###prototype methods
          
```
function(){
              <div class="code">class C {
  method() { return 2; }
}
return typeof C.prototype.method === &quot;function&quot;
  &amp;&amp; new C().method() === 2;</div>}
```
###string-keyed methods
          
```
function(){
              <div class="code">class C {
  &quot;foo bar&quot;() { return 2; }
}
return typeof C.prototype[&quot;foo bar&quot;] === &quot;function&quot;
  &amp;&amp; new C()[&quot;foo bar&quot;]() === 2;</div>}
```
###computed prototype methods
          
```
function(){
              <div class="code">var foo = &quot;method&quot;;
class C {
  [foo]() { return 2; }
}
return typeof C.prototype.method === &quot;function&quot;
  &amp;&amp; new C().method() === 2;</div>}
```
###optional semicolons
          
```
function(){
              <div class="code">class C {
  ;
  method() { return 2; };
  method2() { return 2; }
  method3() { return 2; };
}
return typeof C.prototype.method === &quot;function&quot;
  &amp;&amp; typeof C.prototype.method2 === &quot;function&quot;
  &amp;&amp; typeof C.prototype.method3 === &quot;function&quot;;</div>}
```
###static methods
          
```
function(){
              <div class="code">class C {
  static method() { return 3; }
}
return typeof C.method === &quot;function&quot;
  &amp;&amp; C.method() === 3;</div>}
```
###computed static methods
          
```
function(){
              <div class="code">var foo = &quot;method&quot;;
class C {
  static [foo]() { return 3; }
}
return typeof C.method === &quot;function&quot;
  &amp;&amp; C.method() === 3;</div>}
```
###accessor properties
          
```
function(){
              <div class="code">var baz = false;
class C {
  get foo() { return &quot;foo&quot;; }
  set bar(x) { baz = x; }
}
new C().bar = true;
return new C().foo === &quot;foo&quot; &amp;&amp; baz;</div>}
```
###computed accessor properties
          
```
function(){
              <div class="code">var garply = &quot;foo&quot;, grault = &quot;bar&quot;, baz = false;
class C {
  get [garply]() { return &quot;foo&quot;; }
  set [grault](x) { baz = x; }
}
new C().bar = true;
return new C().foo === &quot;foo&quot; &amp;&amp; baz;</div>}
```
###static accessor properties
          
```
function(){
              <div class="code">var baz = false;
class C {
  static get foo() { return &quot;foo&quot;; }
  static set bar(x) { baz = x; }
}
C.bar = true;
return C.foo === &quot;foo&quot; &amp;&amp; baz;</div>}
```
###computed static accessor properties
          
```
function(){
              <div class="code">var garply = &quot;foo&quot;, grault = &quot;bar&quot;, baz = false;
class C {
  static get [garply]() { return &quot;foo&quot;; }
  static set [grault](x) { baz = x; }
}
C.bar = true;
return C.foo === &quot;foo&quot; &amp;&amp; baz;</div>}
```
###class name is lexically scoped
          
```
function(){
              <div class="code">class C {
  method() { return typeof C === &quot;function&quot;; }
}
var M = C.prototype.method;
C = undefined;
return C === undefined &amp;&amp; M();</div>}
```
###computed names, temporal dead zone
          
```
function(){
              <div class="code">try {
  var B = class C {
    [C](){}
  }
} catch(e) {
  return true;
}</div>}
```
###methods aren't enumerable
          
```
function(){
              <div class="code">class C {
  foo() {}
  static bar() {}
}
return !C.prototype.propertyIsEnumerable(&quot;foo&quot;) &amp;&amp; !C.propertyIsEnumerable(&quot;bar&quot;);</div>}
```
###implicit strict mode
          
```
function(){
              <div class="code">class C {
  static method() { return this === undefined; }
}
return (0,C.method)();</div>}
```
###constructor requires new
          
```
function(){
              <div class="code">class C {}
try {
  C();
}
catch(e) {
  return true;
}</div>}
```
###extends
          
```
function(){
              <div class="code">class B {}
class C extends B {}
return new C() instanceof B
  &amp;&amp; B.isPrototypeOf(C);</div>}
```
###extends expressions
          
```
function(){
              <div class="code">var B;
class C extends (B = class {}) {}
return new C() instanceof B
  &amp;&amp; B.isPrototypeOf(C);</div>}
```
###extends null
          
```
function(){
              <div class="code">class C extends null {
  constructor() { return Object.create(null); }
}
return Function.prototype.isPrototypeOf(C)
  &amp;&amp; Object.getPrototypeOf(C.prototype) === null;</div>}
```
###new.target
          
```
function(){
              <div class="code">var passed = false;
new function f() {
  passed = new.target === f;
}();

class A {
  constructor() {
    passed &amp;= new.target === B;
  }
}
class B extends A {}
new B();
return passed;</div>}
```
###class statement
          
```
function(){
              <div class="code">class C {}
return typeof C === &quot;function&quot;;</div>}
```
###is block-scoped
          
```
function(){
              <div class="code">class C {}
var c1 = C;
{
  class C {}
  var c2 = C;
}
return C === c1;</div>}
```
###class expression
          
```
function(){
              <div class="code">return typeof class C {} === &quot;function&quot;;</div>}
```
###anonymous class
          
```
function(){
              <div class="code">return typeof class {} === &quot;function&quot;;</div>}
```
###constructor
          
```
function(){
              <div class="code">class C {
  constructor() { this.x = 1; }
}
return C.prototype.constructor === C
  &amp;&amp; new C().x === 1;</div>}
```
###prototype methods
          
```
function(){
              <div class="code">class C {
  method() { return 2; }
}
return typeof C.prototype.method === &quot;function&quot;
  &amp;&amp; new C().method() === 2;</div>}
```
###string-keyed methods
          
```
function(){
              <div class="code">class C {
  &quot;foo bar&quot;() { return 2; }
}
return typeof C.prototype[&quot;foo bar&quot;] === &quot;function&quot;
  &amp;&amp; new C()[&quot;foo bar&quot;]() === 2;</div>}
```
###computed prototype methods
          
```
function(){
              <div class="code">var foo = &quot;method&quot;;
class C {
  [foo]() { return 2; }
}
return typeof C.prototype.method === &quot;function&quot;
  &amp;&amp; new C().method() === 2;</div>}
```
###optional semicolons
          
```
function(){
              <div class="code">class C {
  ;
  method() { return 2; };
  method2() { return 2; }
  method3() { return 2; };
}
return typeof C.prototype.method === &quot;function&quot;
  &amp;&amp; typeof C.prototype.method2 === &quot;function&quot;
  &amp;&amp; typeof C.prototype.method3 === &quot;function&quot;;</div>}
```
###static methods
          
```
function(){
              <div class="code">class C {
  static method() { return 3; }
}
return typeof C.method === &quot;function&quot;
  &amp;&amp; C.method() === 3;</div>}
```
###computed static methods
          
```
function(){
              <div class="code">var foo = &quot;method&quot;;
class C {
  static [foo]() { return 3; }
}
return typeof C.method === &quot;function&quot;
  &amp;&amp; C.method() === 3;</div>}
```
###accessor properties
          
```
function(){
              <div class="code">var baz = false;
class C {
  get foo() { return &quot;foo&quot;; }
  set bar(x) { baz = x; }
}
new C().bar = true;
return new C().foo === &quot;foo&quot; &amp;&amp; baz;</div>}
```
###computed accessor properties
          
```
function(){
              <div class="code">var garply = &quot;foo&quot;, grault = &quot;bar&quot;, baz = false;
class C {
  get [garply]() { return &quot;foo&quot;; }
  set [grault](x) { baz = x; }
}
new C().bar = true;
return new C().foo === &quot;foo&quot; &amp;&amp; baz;</div>}
```
###static accessor properties
          
```
function(){
              <div class="code">var baz = false;
class C {
  static get foo() { return &quot;foo&quot;; }
  static set bar(x) { baz = x; }
}
C.bar = true;
return C.foo === &quot;foo&quot; &amp;&amp; baz;</div>}
```
###computed static accessor properties
          
```
function(){
              <div class="code">var garply = &quot;foo&quot;, grault = &quot;bar&quot;, baz = false;
class C {
  static get [garply]() { return &quot;foo&quot;; }
  static set [grault](x) { baz = x; }
}
C.bar = true;
return C.foo === &quot;foo&quot; &amp;&amp; baz;</div>}
```
###class name is lexically scoped
          
```
function(){
              <div class="code">class C {
  method() { return typeof C === &quot;function&quot;; }
}
var M = C.prototype.method;
C = undefined;
return C === undefined &amp;&amp; M();</div>}
```
###computed names, temporal dead zone
          
```
function(){
              <div class="code">try {
  var B = class C {
    [C](){}
  }
} catch(e) {
  return true;
}</div>}
```
###methods aren't enumerable
          
```
function(){
              <div class="code">class C {
  foo() {}
  static bar() {}
}
return !C.prototype.propertyIsEnumerable(&quot;foo&quot;) &amp;&amp; !C.propertyIsEnumerable(&quot;bar&quot;);</div>}
```
###implicit strict mode
          
```
function(){
              <div class="code">class C {
  static method() { return this === undefined; }
}
return (0,C.method)();</div>}
```
###constructor requires new
          
```
function(){
              <div class="code">class C {}
try {
  C();
}
catch(e) {
  return true;
}</div>}
```
###extends
          
```
function(){
              <div class="code">class B {}
class C extends B {}
return new C() instanceof B
  &amp;&amp; B.isPrototypeOf(C);</div>}
```
###extends expressions
          
```
function(){
              <div class="code">var B;
class C extends (B = class {}) {}
return new C() instanceof B
  &amp;&amp; B.isPrototypeOf(C);</div>}
```
###extends null
          
```
function(){
              <div class="code">class C extends null {
  constructor() { return Object.create(null); }
}
return Function.prototype.isPrototypeOf(C)
  &amp;&amp; Object.getPrototypeOf(C.prototype) === null;</div>}
```
###new.target
          
```
function(){
              <div class="code">var passed = false;
new function f() {
  passed = new.target === f;
}();

class A {
  constructor() {
    passed &amp;= new.target === B;
  }
}
class B extends A {}
new B();
return passed;</div>}
```
###class statement
          
```
function(){
              <div class="code">class C {}
return typeof C === &quot;function&quot;;</div>}
```
###is block-scoped
          
```
function(){
              <div class="code">class C {}
var c1 = C;
{
  class C {}
  var c2 = C;
}
return C === c1;</div>}
```
###class expression
          
```
function(){
              <div class="code">return typeof class C {} === &quot;function&quot;;</div>}
```
###anonymous class
          
```
function(){
              <div class="code">return typeof class {} === &quot;function&quot;;</div>}
```
###constructor
          
```
function(){
              <div class="code">class C {
  constructor() { this.x = 1; }
}
return C.prototype.constructor === C
  &amp;&amp; new C().x === 1;</div>}
```
###prototype methods
          
```
function(){
              <div class="code">class C {
  method() { return 2; }
}
return typeof C.prototype.method === &quot;function&quot;
  &amp;&amp; new C().method() === 2;</div>}
```
###string-keyed methods
          
```
function(){
              <div class="code">class C {
  &quot;foo bar&quot;() { return 2; }
}
return typeof C.prototype[&quot;foo bar&quot;] === &quot;function&quot;
  &amp;&amp; new C()[&quot;foo bar&quot;]() === 2;</div>}
```
###computed prototype methods
          
```
function(){
              <div class="code">var foo = &quot;method&quot;;
class C {
  [foo]() { return 2; }
}
return typeof C.prototype.method === &quot;function&quot;
  &amp;&amp; new C().method() === 2;</div>}
```
###optional semicolons
          
```
function(){
              <div class="code">class C {
  ;
  method() { return 2; };
  method2() { return 2; }
  method3() { return 2; };
}
return typeof C.prototype.method === &quot;function&quot;
  &amp;&amp; typeof C.prototype.method2 === &quot;function&quot;
  &amp;&amp; typeof C.prototype.method3 === &quot;function&quot;;</div>}
```
###static methods
          
```
function(){
              <div class="code">class C {
  static method() { return 3; }
}
return typeof C.method === &quot;function&quot;
  &amp;&amp; C.method() === 3;</div>}
```
###computed static methods
          
```
function(){
              <div class="code">var foo = &quot;method&quot;;
class C {
  static [foo]() { return 3; }
}
return typeof C.method === &quot;function&quot;
  &amp;&amp; C.method() === 3;</div>}
```
###accessor properties
          
```
function(){
              <div class="code">var baz = false;
class C {
  get foo() { return &quot;foo&quot;; }
  set bar(x) { baz = x; }
}
new C().bar = true;
return new C().foo === &quot;foo&quot; &amp;&amp; baz;</div>}
```
###computed accessor properties
          
```
function(){
              <div class="code">var garply = &quot;foo&quot;, grault = &quot;bar&quot;, baz = false;
class C {
  get [garply]() { return &quot;foo&quot;; }
  set [grault](x) { baz = x; }
}
new C().bar = true;
return new C().foo === &quot;foo&quot; &amp;&amp; baz;</div>}
```
###static accessor properties
          
```
function(){
              <div class="code">var baz = false;
class C {
  static get foo() { return &quot;foo&quot;; }
  static set bar(x) { baz = x; }
}
C.bar = true;
return C.foo === &quot;foo&quot; &amp;&amp; baz;</div>}
```
###computed static accessor properties
          
```
function(){
              <div class="code">var garply = &quot;foo&quot;, grault = &quot;bar&quot;, baz = false;
class C {
  static get [garply]() { return &quot;foo&quot;; }
  static set [grault](x) { baz = x; }
}
C.bar = true;
return C.foo === &quot;foo&quot; &amp;&amp; baz;</div>}
```
###class name is lexically scoped
          
```
function(){
              <div class="code">class C {
  method() { return typeof C === &quot;function&quot;; }
}
var M = C.prototype.method;
C = undefined;
return C === undefined &amp;&amp; M();</div>}
```
###computed names, temporal dead zone
          
```
function(){
              <div class="code">try {
  var B = class C {
    [C](){}
  }
} catch(e) {
  return true;
}</div>}
```
###methods aren't enumerable
          
```
function(){
              <div class="code">class C {
  foo() {}
  static bar() {}
}
return !C.prototype.propertyIsEnumerable(&quot;foo&quot;) &amp;&amp; !C.propertyIsEnumerable(&quot;bar&quot;);</div>}
```
###implicit strict mode
          
```
function(){
              <div class="code">class C {
  static method() { return this === undefined; }
}
return (0,C.method)();</div>}
```
###constructor requires new
          
```
function(){
              <div class="code">class C {}
try {
  C();
}
catch(e) {
  return true;
}</div>}
```
###extends
          
```
function(){
              <div class="code">class B {}
class C extends B {}
return new C() instanceof B
  &amp;&amp; B.isPrototypeOf(C);</div>}
```
###extends expressions
          
```
function(){
              <div class="code">var B;
class C extends (B = class {}) {}
return new C() instanceof B
  &amp;&amp; B.isPrototypeOf(C);</div>}
```
###extends null
          
```
function(){
              <div class="code">class C extends null {
  constructor() { return Object.create(null); }
}
return Function.prototype.isPrototypeOf(C)
  &amp;&amp; Object.getPrototypeOf(C.prototype) === null;</div>}
```
###new.target
          
```
function(){
              <div class="code">var passed = false;
new function f() {
  passed = new.target === f;
}();

class A {
  constructor() {
    passed &amp;= new.target === B;
  }
}
class B extends A {}
new B();
return passed;</div>}
```
###class statement
          
```
function(){
              <div class="code">class C {}
return typeof C === &quot;function&quot;;</div>}
```
###is block-scoped
          
```
function(){
              <div class="code">class C {}
var c1 = C;
{
  class C {}
  var c2 = C;
}
return C === c1;</div>}
```
###class expression
          
```
function(){
              <div class="code">return typeof class C {} === &quot;function&quot;;</div>}
```
###anonymous class
          
```
function(){
              <div class="code">return typeof class {} === &quot;function&quot;;</div>}
```
###constructor
          
```
function(){
              <div class="code">class C {
  constructor() { this.x = 1; }
}
return C.prototype.constructor === C
  &amp;&amp; new C().x === 1;</div>}
```
###prototype methods
          
```
function(){
              <div class="code">class C {
  method() { return 2; }
}
return typeof C.prototype.method === &quot;function&quot;
  &amp;&amp; new C().method() === 2;</div>}
```
###string-keyed methods
          
```
function(){
              <div class="code">class C {
  &quot;foo bar&quot;() { return 2; }
}
return typeof C.prototype[&quot;foo bar&quot;] === &quot;function&quot;
  &amp;&amp; new C()[&quot;foo bar&quot;]() === 2;</div>}
```
###computed prototype methods
          
```
function(){
              <div class="code">var foo = &quot;method&quot;;
class C {
  [foo]() { return 2; }
}
return typeof C.prototype.method === &quot;function&quot;
  &amp;&amp; new C().method() === 2;</div>}
```
###optional semicolons
          
```
function(){
              <div class="code">class C {
  ;
  method() { return 2; };
  method2() { return 2; }
  method3() { return 2; };
}
return typeof C.prototype.method === &quot;function&quot;
  &amp;&amp; typeof C.prototype.method2 === &quot;function&quot;
  &amp;&amp; typeof C.prototype.method3 === &quot;function&quot;;</div>}
```
###static methods
          
```
function(){
              <div class="code">class C {
  static method() { return 3; }
}
return typeof C.method === &quot;function&quot;
  &amp;&amp; C.method() === 3;</div>}
```
###computed static methods
          
```
function(){
              <div class="code">var foo = &quot;method&quot;;
class C {
  static [foo]() { return 3; }
}
return typeof C.method === &quot;function&quot;
  &amp;&amp; C.method() === 3;</div>}
```
###accessor properties
          
```
function(){
              <div class="code">var baz = false;
class C {
  get foo() { return &quot;foo&quot;; }
  set bar(x) { baz = x; }
}
new C().bar = true;
return new C().foo === &quot;foo&quot; &amp;&amp; baz;</div>}
```
###computed accessor properties
          
```
function(){
              <div class="code">var garply = &quot;foo&quot;, grault = &quot;bar&quot;, baz = false;
class C {
  get [garply]() { return &quot;foo&quot;; }
  set [grault](x) { baz = x; }
}
new C().bar = true;
return new C().foo === &quot;foo&quot; &amp;&amp; baz;</div>}
```
###static accessor properties
          
```
function(){
              <div class="code">var baz = false;
class C {
  static get foo() { return &quot;foo&quot;; }
  static set bar(x) { baz = x; }
}
C.bar = true;
return C.foo === &quot;foo&quot; &amp;&amp; baz;</div>}
```
###computed static accessor properties
          
```
function(){
              <div class="code">var garply = &quot;foo&quot;, grault = &quot;bar&quot;, baz = false;
class C {
  static get [garply]() { return &quot;foo&quot;; }
  static set [grault](x) { baz = x; }
}
C.bar = true;
return C.foo === &quot;foo&quot; &amp;&amp; baz;</div>}
```
###class name is lexically scoped
          
```
function(){
              <div class="code">class C {
  method() { return typeof C === &quot;function&quot;; }
}
var M = C.prototype.method;
C = undefined;
return C === undefined &amp;&amp; M();</div>}
```
###computed names, temporal dead zone
          
```
function(){
              <div class="code">try {
  var B = class C {
    [C](){}
  }
} catch(e) {
  return true;
}</div>}
```
###methods aren't enumerable
          
```
function(){
              <div class="code">class C {
  foo() {}
  static bar() {}
}
return !C.prototype.propertyIsEnumerable(&quot;foo&quot;) &amp;&amp; !C.propertyIsEnumerable(&quot;bar&quot;);</div>}
```
###implicit strict mode
          
```
function(){
              <div class="code">class C {
  static method() { return this === undefined; }
}
return (0,C.method)();</div>}
```
###constructor requires new
          
```
function(){
              <div class="code">class C {}
try {
  C();
}
catch(e) {
  return true;
}</div>}
```
###extends
          
```
function(){
              <div class="code">class B {}
class C extends B {}
return new C() instanceof B
  &amp;&amp; B.isPrototypeOf(C);</div>}
```
###extends expressions
          
```
function(){
              <div class="code">var B;
class C extends (B = class {}) {}
return new C() instanceof B
  &amp;&amp; B.isPrototypeOf(C);</div>}
```
###extends null
          
```
function(){
              <div class="code">class C extends null {
  constructor() { return Object.create(null); }
}
return Function.prototype.isPrototypeOf(C)
  &amp;&amp; Object.getPrototypeOf(C.prototype) === null;</div>}
```
###new.target
          
```
function(){
              <div class="code">var passed = false;
new function f() {
  passed = new.target === f;
}();

class A {
  constructor() {
    passed &amp;= new.target === B;
  }
}
class B extends A {}
new B();
return passed;</div>}
```
###class statement
          
```
function(){
              <div class="code">class C {}
return typeof C === &quot;function&quot;;</div>}
```
###is block-scoped
          
```
function(){
              <div class="code">class C {}
var c1 = C;
{
  class C {}
  var c2 = C;
}
return C === c1;</div>}
```
###class expression
          
```
function(){
              <div class="code">return typeof class C {} === &quot;function&quot;;</div>}
```
###anonymous class
          
```
function(){
              <div class="code">return typeof class {} === &quot;function&quot;;</div>}
```
###constructor
          
```
function(){
              <div class="code">class C {
  constructor() { this.x = 1; }
}
return C.prototype.constructor === C
  &amp;&amp; new C().x === 1;</div>}
```
###prototype methods
          
```
function(){
              <div class="code">class C {
  method() { return 2; }
}
return typeof C.prototype.method === &quot;function&quot;
  &amp;&amp; new C().method() === 2;</div>}
```
###string-keyed methods
          
```
function(){
              <div class="code">class C {
  &quot;foo bar&quot;() { return 2; }
}
return typeof C.prototype[&quot;foo bar&quot;] === &quot;function&quot;
  &amp;&amp; new C()[&quot;foo bar&quot;]() === 2;</div>}
```
###computed prototype methods
          
```
function(){
              <div class="code">var foo = &quot;method&quot;;
class C {
  [foo]() { return 2; }
}
return typeof C.prototype.method === &quot;function&quot;
  &amp;&amp; new C().method() === 2;</div>}
```
###optional semicolons
          
```
function(){
              <div class="code">class C {
  ;
  method() { return 2; };
  method2() { return 2; }
  method3() { return 2; };
}
return typeof C.prototype.method === &quot;function&quot;
  &amp;&amp; typeof C.prototype.method2 === &quot;function&quot;
  &amp;&amp; typeof C.prototype.method3 === &quot;function&quot;;</div>}
```
###static methods
          
```
function(){
              <div class="code">class C {
  static method() { return 3; }
}
return typeof C.method === &quot;function&quot;
  &amp;&amp; C.method() === 3;</div>}
```
###computed static methods
          
```
function(){
              <div class="code">var foo = &quot;method&quot;;
class C {
  static [foo]() { return 3; }
}
return typeof C.method === &quot;function&quot;
  &amp;&amp; C.method() === 3;</div>}
```
###accessor properties
          
```
function(){
              <div class="code">var baz = false;
class C {
  get foo() { return &quot;foo&quot;; }
  set bar(x) { baz = x; }
}
new C().bar = true;
return new C().foo === &quot;foo&quot; &amp;&amp; baz;</div>}
```
###computed accessor properties
          
```
function(){
              <div class="code">var garply = &quot;foo&quot;, grault = &quot;bar&quot;, baz = false;
class C {
  get [garply]() { return &quot;foo&quot;; }
  set [grault](x) { baz = x; }
}
new C().bar = true;
return new C().foo === &quot;foo&quot; &amp;&amp; baz;</div>}
```
###static accessor properties
          
```
function(){
              <div class="code">var baz = false;
class C {
  static get foo() { return &quot;foo&quot;; }
  static set bar(x) { baz = x; }
}
C.bar = true;
return C.foo === &quot;foo&quot; &amp;&amp; baz;</div>}
```
###computed static accessor properties
          
```
function(){
              <div class="code">var garply = &quot;foo&quot;, grault = &quot;bar&quot;, baz = false;
class C {
  static get [garply]() { return &quot;foo&quot;; }
  static set [grault](x) { baz = x; }
}
C.bar = true;
return C.foo === &quot;foo&quot; &amp;&amp; baz;</div>}
```
###class name is lexically scoped
          
```
function(){
              <div class="code">class C {
  method() { return typeof C === &quot;function&quot;; }
}
var M = C.prototype.method;
C = undefined;
return C === undefined &amp;&amp; M();</div>}
```
###computed names, temporal dead zone
          
```
function(){
              <div class="code">try {
  var B = class C {
    [C](){}
  }
} catch(e) {
  return true;
}</div>}
```
###methods aren't enumerable
          
```
function(){
              <div class="code">class C {
  foo() {}
  static bar() {}
}
return !C.prototype.propertyIsEnumerable(&quot;foo&quot;) &amp;&amp; !C.propertyIsEnumerable(&quot;bar&quot;);</div>}
```
###implicit strict mode
          
```
function(){
              <div class="code">class C {
  static method() { return this === undefined; }
}
return (0,C.method)();</div>}
```
###constructor requires new
          
```
function(){
              <div class="code">class C {}
try {
  C();
}
catch(e) {
  return true;
}</div>}
```
###extends
          
```
function(){
              <div class="code">class B {}
class C extends B {}
return new C() instanceof B
  &amp;&amp; B.isPrototypeOf(C);</div>}
```
###extends expressions
          
```
function(){
              <div class="code">var B;
class C extends (B = class {}) {}
return new C() instanceof B
  &amp;&amp; B.isPrototypeOf(C);</div>}
```
###extends null
          
```
function(){
              <div class="code">class C extends null {
  constructor() { return Object.create(null); }
}
return Function.prototype.isPrototypeOf(C)
  &amp;&amp; Object.getPrototypeOf(C.prototype) === null;</div>}
```
###new.target
          
```
function(){
              <div class="code">var passed = false;
new function f() {
  passed = new.target === f;
}();

class A {
  constructor() {
    passed &amp;= new.target === B;
  }
}
class B extends A {}
new B();
return passed;</div>}
```
###class statement
          
```
function(){
              <div class="code">class C {}
return typeof C === &quot;function&quot;;</div>}
```
###is block-scoped
          
```
function(){
              <div class="code">class C {}
var c1 = C;
{
  class C {}
  var c2 = C;
}
return C === c1;</div>}
```
###class expression
          
```
function(){
              <div class="code">return typeof class C {} === &quot;function&quot;;</div>}
```
###anonymous class
          
```
function(){
              <div class="code">return typeof class {} === &quot;function&quot;;</div>}
```
###constructor
          
```
function(){
              <div class="code">class C {
  constructor() { this.x = 1; }
}
return C.prototype.constructor === C
  &amp;&amp; new C().x === 1;</div>}
```
###prototype methods
          
```
function(){
              <div class="code">class C {
  method() { return 2; }
}
return typeof C.prototype.method === &quot;function&quot;
  &amp;&amp; new C().method() === 2;</div>}
```
###string-keyed methods
          
```
function(){
              <div class="code">class C {
  &quot;foo bar&quot;() { return 2; }
}
return typeof C.prototype[&quot;foo bar&quot;] === &quot;function&quot;
  &amp;&amp; new C()[&quot;foo bar&quot;]() === 2;</div>}
```
###computed prototype methods
          
```
function(){
              <div class="code">var foo = &quot;method&quot;;
class C {
  [foo]() { return 2; }
}
return typeof C.prototype.method === &quot;function&quot;
  &amp;&amp; new C().method() === 2;</div>}
```
###optional semicolons
          
```
function(){
              <div class="code">class C {
  ;
  method() { return 2; };
  method2() { return 2; }
  method3() { return 2; };
}
return typeof C.prototype.method === &quot;function&quot;
  &amp;&amp; typeof C.prototype.method2 === &quot;function&quot;
  &amp;&amp; typeof C.prototype.method3 === &quot;function&quot;;</div>}
```
###static methods
          
```
function(){
              <div class="code">class C {
  static method() { return 3; }
}
return typeof C.method === &quot;function&quot;
  &amp;&amp; C.method() === 3;</div>}
```
###computed static methods
          
```
function(){
              <div class="code">var foo = &quot;method&quot;;
class C {
  static [foo]() { return 3; }
}
return typeof C.method === &quot;function&quot;
  &amp;&amp; C.method() === 3;</div>}
```
###accessor properties
          
```
function(){
              <div class="code">var baz = false;
class C {
  get foo() { return &quot;foo&quot;; }
  set bar(x) { baz = x; }
}
new C().bar = true;
return new C().foo === &quot;foo&quot; &amp;&amp; baz;</div>}
```
###computed accessor properties
          
```
function(){
              <div class="code">var garply = &quot;foo&quot;, grault = &quot;bar&quot;, baz = false;
class C {
  get [garply]() { return &quot;foo&quot;; }
  set [grault](x) { baz = x; }
}
new C().bar = true;
return new C().foo === &quot;foo&quot; &amp;&amp; baz;</div>}
```
###static accessor properties
          
```
function(){
              <div class="code">var baz = false;
class C {
  static get foo() { return &quot;foo&quot;; }
  static set bar(x) { baz = x; }
}
C.bar = true;
return C.foo === &quot;foo&quot; &amp;&amp; baz;</div>}
```
###computed static accessor properties
          
```
function(){
              <div class="code">var garply = &quot;foo&quot;, grault = &quot;bar&quot;, baz = false;
class C {
  static get [garply]() { return &quot;foo&quot;; }
  static set [grault](x) { baz = x; }
}
C.bar = true;
return C.foo === &quot;foo&quot; &amp;&amp; baz;</div>}
```
###class name is lexically scoped
          
```
function(){
              <div class="code">class C {
  method() { return typeof C === &quot;function&quot;; }
}
var M = C.prototype.method;
C = undefined;
return C === undefined &amp;&amp; M();</div>}
```
###computed names, temporal dead zone
          
```
function(){
              <div class="code">try {
  var B = class C {
    [C](){}
  }
} catch(e) {
  return true;
}</div>}
```
###methods aren't enumerable
          
```
function(){
              <div class="code">class C {
  foo() {}
  static bar() {}
}
return !C.prototype.propertyIsEnumerable(&quot;foo&quot;) &amp;&amp; !C.propertyIsEnumerable(&quot;bar&quot;);</div>}
```
###implicit strict mode
          
```
function(){
              <div class="code">class C {
  static method() { return this === undefined; }
}
return (0,C.method)();</div>}
```
###constructor requires new
          
```
function(){
              <div class="code">class C {}
try {
  C();
}
catch(e) {
  return true;
}</div>}
```
###extends
          
```
function(){
              <div class="code">class B {}
class C extends B {}
return new C() instanceof B
  &amp;&amp; B.isPrototypeOf(C);</div>}
```
###extends expressions
          
```
function(){
              <div class="code">var B;
class C extends (B = class {}) {}
return new C() instanceof B
  &amp;&amp; B.isPrototypeOf(C);</div>}
```
###extends null
          
```
function(){
              <div class="code">class C extends null {
  constructor() { return Object.create(null); }
}
return Function.prototype.isPrototypeOf(C)
  &amp;&amp; Object.getPrototypeOf(C.prototype) === null;</div>}
```
###new.target
          
```
function(){
              <div class="code">var passed = false;
new function f() {
  passed = new.target === f;
}();

class A {
  constructor() {
    passed &amp;= new.target === B;
  }
}
class B extends A {}
new B();
return passed;</div>}
```
###class statement
          
```
function(){
              <div class="code">class C {}
return typeof C === &quot;function&quot;;</div>}
```
###is block-scoped
          
```
function(){
              <div class="code">class C {}
var c1 = C;
{
  class C {}
  var c2 = C;
}
return C === c1;</div>}
```
###class expression
          
```
function(){
              <div class="code">return typeof class C {} === &quot;function&quot;;</div>}
```
###anonymous class
          
```
function(){
              <div class="code">return typeof class {} === &quot;function&quot;;</div>}
```
###constructor
          
```
function(){
              <div class="code">class C {
  constructor() { this.x = 1; }
}
return C.prototype.constructor === C
  &amp;&amp; new C().x === 1;</div>}
```
###prototype methods
          
```
function(){
              <div class="code">class C {
  method() { return 2; }
}
return typeof C.prototype.method === &quot;function&quot;
  &amp;&amp; new C().method() === 2;</div>}
```
###string-keyed methods
          
```
function(){
              <div class="code">class C {
  &quot;foo bar&quot;() { return 2; }
}
return typeof C.prototype[&quot;foo bar&quot;] === &quot;function&quot;
  &amp;&amp; new C()[&quot;foo bar&quot;]() === 2;</div>}
```
###computed prototype methods
          
```
function(){
              <div class="code">var foo = &quot;method&quot;;
class C {
  [foo]() { return 2; }
}
return typeof C.prototype.method === &quot;function&quot;
  &amp;&amp; new C().method() === 2;</div>}
```
###optional semicolons
          
```
function(){
              <div class="code">class C {
  ;
  method() { return 2; };
  method2() { return 2; }
  method3() { return 2; };
}
return typeof C.prototype.method === &quot;function&quot;
  &amp;&amp; typeof C.prototype.method2 === &quot;function&quot;
  &amp;&amp; typeof C.prototype.method3 === &quot;function&quot;;</div>}
```
###static methods
          
```
function(){
              <div class="code">class C {
  static method() { return 3; }
}
return typeof C.method === &quot;function&quot;
  &amp;&amp; C.method() === 3;</div>}
```
###computed static methods
          
```
function(){
              <div class="code">var foo = &quot;method&quot;;
class C {
  static [foo]() { return 3; }
}
return typeof C.method === &quot;function&quot;
  &amp;&amp; C.method() === 3;</div>}
```
###accessor properties
          
```
function(){
              <div class="code">var baz = false;
class C {
  get foo() { return &quot;foo&quot;; }
  set bar(x) { baz = x; }
}
new C().bar = true;
return new C().foo === &quot;foo&quot; &amp;&amp; baz;</div>}
```
###computed accessor properties
          
```
function(){
              <div class="code">var garply = &quot;foo&quot;, grault = &quot;bar&quot;, baz = false;
class C {
  get [garply]() { return &quot;foo&quot;; }
  set [grault](x) { baz = x; }
}
new C().bar = true;
return new C().foo === &quot;foo&quot; &amp;&amp; baz;</div>}
```
###static accessor properties
          
```
function(){
              <div class="code">var baz = false;
class C {
  static get foo() { return &quot;foo&quot;; }
  static set bar(x) { baz = x; }
}
C.bar = true;
return C.foo === &quot;foo&quot; &amp;&amp; baz;</div>}
```
###computed static accessor properties
          
```
function(){
              <div class="code">var garply = &quot;foo&quot;, grault = &quot;bar&quot;, baz = false;
class C {
  static get [garply]() { return &quot;foo&quot;; }
  static set [grault](x) { baz = x; }
}
C.bar = true;
return C.foo === &quot;foo&quot; &amp;&amp; baz;</div>}
```
###class name is lexically scoped
          
```
function(){
              <div class="code">class C {
  method() { return typeof C === &quot;function&quot;; }
}
var M = C.prototype.method;
C = undefined;
return C === undefined &amp;&amp; M();</div>}
```
###computed names, temporal dead zone
          
```
function(){
              <div class="code">try {
  var B = class C {
    [C](){}
  }
} catch(e) {
  return true;
}</div>}
```
###methods aren't enumerable
          
```
function(){
              <div class="code">class C {
  foo() {}
  static bar() {}
}
return !C.prototype.propertyIsEnumerable(&quot;foo&quot;) &amp;&amp; !C.propertyIsEnumerable(&quot;bar&quot;);</div>}
```
###implicit strict mode
          
```
function(){
              <div class="code">class C {
  static method() { return this === undefined; }
}
return (0,C.method)();</div>}
```
###constructor requires new
          
```
function(){
              <div class="code">class C {}
try {
  C();
}
catch(e) {
  return true;
}</div>}
```
###extends
          
```
function(){
              <div class="code">class B {}
class C extends B {}
return new C() instanceof B
  &amp;&amp; B.isPrototypeOf(C);</div>}
```
###extends expressions
          
```
function(){
              <div class="code">var B;
class C extends (B = class {}) {}
return new C() instanceof B
  &amp;&amp; B.isPrototypeOf(C);</div>}
```
###extends null
          
```
function(){
              <div class="code">class C extends null {
  constructor() { return Object.create(null); }
}
return Function.prototype.isPrototypeOf(C)
  &amp;&amp; Object.getPrototypeOf(C.prototype) === null;</div>}
```
###new.target
          
```
function(){
              <div class="code">var passed = false;
new function f() {
  passed = new.target === f;
}();

class A {
  constructor() {
    passed &amp;= new.target === B;
  }
}
class B extends A {}
new B();
return passed;</div>}
```
###class statement
          
```
function(){
              <div class="code">class C {}
return typeof C === &quot;function&quot;;</div>}
```
###is block-scoped
          
```
function(){
              <div class="code">class C {}
var c1 = C;
{
  class C {}
  var c2 = C;
}
return C === c1;</div>}
```
###class expression
          
```
function(){
              <div class="code">return typeof class C {} === &quot;function&quot;;</div>}
```
###anonymous class
          
```
function(){
              <div class="code">return typeof class {} === &quot;function&quot;;</div>}
```
###constructor
          
```
function(){
              <div class="code">class C {
  constructor() { this.x = 1; }
}
return C.prototype.constructor === C
  &amp;&amp; new C().x === 1;</div>}
```
###prototype methods
          
```
function(){
              <div class="code">class C {
  method() { return 2; }
}
return typeof C.prototype.method === &quot;function&quot;
  &amp;&amp; new C().method() === 2;</div>}
```
###string-keyed methods
          
```
function(){
              <div class="code">class C {
  &quot;foo bar&quot;() { return 2; }
}
return typeof C.prototype[&quot;foo bar&quot;] === &quot;function&quot;
  &amp;&amp; new C()[&quot;foo bar&quot;]() === 2;</div>}
```
###computed prototype methods
          
```
function(){
              <div class="code">var foo = &quot;method&quot;;
class C {
  [foo]() { return 2; }
}
return typeof C.prototype.method === &quot;function&quot;
  &amp;&amp; new C().method() === 2;</div>}
```
###optional semicolons
          
```
function(){
              <div class="code">class C {
  ;
  method() { return 2; };
  method2() { return 2; }
  method3() { return 2; };
}
return typeof C.prototype.method === &quot;function&quot;
  &amp;&amp; typeof C.prototype.method2 === &quot;function&quot;
  &amp;&amp; typeof C.prototype.method3 === &quot;function&quot;;</div>}
```
###static methods
          
```
function(){
              <div class="code">class C {
  static method() { return 3; }
}
return typeof C.method === &quot;function&quot;
  &amp;&amp; C.method() === 3;</div>}
```
###computed static methods
          
```
function(){
              <div class="code">var foo = &quot;method&quot;;
class C {
  static [foo]() { return 3; }
}
return typeof C.method === &quot;function&quot;
  &amp;&amp; C.method() === 3;</div>}
```
###accessor properties
          
```
function(){
              <div class="code">var baz = false;
class C {
  get foo() { return &quot;foo&quot;; }
  set bar(x) { baz = x; }
}
new C().bar = true;
return new C().foo === &quot;foo&quot; &amp;&amp; baz;</div>}
```
###computed accessor properties
          
```
function(){
              <div class="code">var garply = &quot;foo&quot;, grault = &quot;bar&quot;, baz = false;
class C {
  get [garply]() { return &quot;foo&quot;; }
  set [grault](x) { baz = x; }
}
new C().bar = true;
return new C().foo === &quot;foo&quot; &amp;&amp; baz;</div>}
```
###static accessor properties
          
```
function(){
              <div class="code">var baz = false;
class C {
  static get foo() { return &quot;foo&quot;; }
  static set bar(x) { baz = x; }
}
C.bar = true;
return C.foo === &quot;foo&quot; &amp;&amp; baz;</div>}
```
###computed static accessor properties
          
```
function(){
              <div class="code">var garply = &quot;foo&quot;, grault = &quot;bar&quot;, baz = false;
class C {
  static get [garply]() { return &quot;foo&quot;; }
  static set [grault](x) { baz = x; }
}
C.bar = true;
return C.foo === &quot;foo&quot; &amp;&amp; baz;</div>}
```
###class name is lexically scoped
          
```
function(){
              <div class="code">class C {
  method() { return typeof C === &quot;function&quot;; }
}
var M = C.prototype.method;
C = undefined;
return C === undefined &amp;&amp; M();</div>}
```
###computed names, temporal dead zone
          
```
function(){
              <div class="code">try {
  var B = class C {
    [C](){}
  }
} catch(e) {
  return true;
}</div>}
```
###methods aren't enumerable
          
```
function(){
              <div class="code">class C {
  foo() {}
  static bar() {}
}
return !C.prototype.propertyIsEnumerable(&quot;foo&quot;) &amp;&amp; !C.propertyIsEnumerable(&quot;bar&quot;);</div>}
```
###implicit strict mode
          
```
function(){
              <div class="code">class C {
  static method() { return this === undefined; }
}
return (0,C.method)();</div>}
```
###constructor requires new
          
```
function(){
              <div class="code">class C {}
try {
  C();
}
catch(e) {
  return true;
}</div>}
```
###extends
          
```
function(){
              <div class="code">class B {}
class C extends B {}
return new C() instanceof B
  &amp;&amp; B.isPrototypeOf(C);</div>}
```
###extends expressions
          
```
function(){
              <div class="code">var B;
class C extends (B = class {}) {}
return new C() instanceof B
  &amp;&amp; B.isPrototypeOf(C);</div>}
```
###extends null
          
```
function(){
              <div class="code">class C extends null {
  constructor() { return Object.create(null); }
}
return Function.prototype.isPrototypeOf(C)
  &amp;&amp; Object.getPrototypeOf(C.prototype) === null;</div>}
```
###new.target
          
```
function(){
              <div class="code">var passed = false;
new function f() {
  passed = new.target === f;
}();

class A {
  constructor() {
    passed &amp;= new.target === B;
  }
}
class B extends A {}
new B();
return passed;</div>}
```
###class statement
          
```
function(){
              <div class="code">class C {}
return typeof C === &quot;function&quot;;</div>}
```
###is block-scoped
          
```
function(){
              <div class="code">class C {}
var c1 = C;
{
  class C {}
  var c2 = C;
}
return C === c1;</div>}
```
###class expression
          
```
function(){
              <div class="code">return typeof class C {} === &quot;function&quot;;</div>}
```
###anonymous class
          
```
function(){
              <div class="code">return typeof class {} === &quot;function&quot;;</div>}
```
###constructor
          
```
function(){
              <div class="code">class C {
  constructor() { this.x = 1; }
}
return C.prototype.constructor === C
  &amp;&amp; new C().x === 1;</div>}
```
###prototype methods
          
```
function(){
              <div class="code">class C {
  method() { return 2; }
}
return typeof C.prototype.method === &quot;function&quot;
  &amp;&amp; new C().method() === 2;</div>}
```
###string-keyed methods
          
```
function(){
              <div class="code">class C {
  &quot;foo bar&quot;() { return 2; }
}
return typeof C.prototype[&quot;foo bar&quot;] === &quot;function&quot;
  &amp;&amp; new C()[&quot;foo bar&quot;]() === 2;</div>}
```
###computed prototype methods
          
```
function(){
              <div class="code">var foo = &quot;method&quot;;
class C {
  [foo]() { return 2; }
}
return typeof C.prototype.method === &quot;function&quot;
  &amp;&amp; new C().method() === 2;</div>}
```
###optional semicolons
          
```
function(){
              <div class="code">class C {
  ;
  method() { return 2; };
  method2() { return 2; }
  method3() { return 2; };
}
return typeof C.prototype.method === &quot;function&quot;
  &amp;&amp; typeof C.prototype.method2 === &quot;function&quot;
  &amp;&amp; typeof C.prototype.method3 === &quot;function&quot;;</div>}
```
###static methods
          
```
function(){
              <div class="code">class C {
  static method() { return 3; }
}
return typeof C.method === &quot;function&quot;
  &amp;&amp; C.method() === 3;</div>}
```
###computed static methods
          
```
function(){
              <div class="code">var foo = &quot;method&quot;;
class C {
  static [foo]() { return 3; }
}
return typeof C.method === &quot;function&quot;
  &amp;&amp; C.method() === 3;</div>}
```
###accessor properties
          
```
function(){
              <div class="code">var baz = false;
class C {
  get foo() { return &quot;foo&quot;; }
  set bar(x) { baz = x; }
}
new C().bar = true;
return new C().foo === &quot;foo&quot; &amp;&amp; baz;</div>}
```
###computed accessor properties
          
```
function(){
              <div class="code">var garply = &quot;foo&quot;, grault = &quot;bar&quot;, baz = false;
class C {
  get [garply]() { return &quot;foo&quot;; }
  set [grault](x) { baz = x; }
}
new C().bar = true;
return new C().foo === &quot;foo&quot; &amp;&amp; baz;</div>}
```
###static accessor properties
          
```
function(){
              <div class="code">var baz = false;
class C {
  static get foo() { return &quot;foo&quot;; }
  static set bar(x) { baz = x; }
}
C.bar = true;
return C.foo === &quot;foo&quot; &amp;&amp; baz;</div>}
```
###computed static accessor properties
          
```
function(){
              <div class="code">var garply = &quot;foo&quot;, grault = &quot;bar&quot;, baz = false;
class C {
  static get [garply]() { return &quot;foo&quot;; }
  static set [grault](x) { baz = x; }
}
C.bar = true;
return C.foo === &quot;foo&quot; &amp;&amp; baz;</div>}
```
###class name is lexically scoped
          
```
function(){
              <div class="code">class C {
  method() { return typeof C === &quot;function&quot;; }
}
var M = C.prototype.method;
C = undefined;
return C === undefined &amp;&amp; M();</div>}
```
###computed names, temporal dead zone
          
```
function(){
              <div class="code">try {
  var B = class C {
    [C](){}
  }
} catch(e) {
  return true;
}</div>}
```
###methods aren't enumerable
          
```
function(){
              <div class="code">class C {
  foo() {}
  static bar() {}
}
return !C.prototype.propertyIsEnumerable(&quot;foo&quot;) &amp;&amp; !C.propertyIsEnumerable(&quot;bar&quot;);</div>}
```
###implicit strict mode
          
```
function(){
              <div class="code">class C {
  static method() { return this === undefined; }
}
return (0,C.method)();</div>}
```
###constructor requires new
          
```
function(){
              <div class="code">class C {}
try {
  C();
}
catch(e) {
  return true;
}</div>}
```
###extends
          
```
function(){
              <div class="code">class B {}
class C extends B {}
return new C() instanceof B
  &amp;&amp; B.isPrototypeOf(C);</div>}
```
###extends expressions
          
```
function(){
              <div class="code">var B;
class C extends (B = class {}) {}
return new C() instanceof B
  &amp;&amp; B.isPrototypeOf(C);</div>}
```
###extends null
          
```
function(){
              <div class="code">class C extends null {
  constructor() { return Object.create(null); }
}
return Function.prototype.isPrototypeOf(C)
  &amp;&amp; Object.getPrototypeOf(C.prototype) === null;</div>}
```
###new.target
          
```
function(){
              <div class="code">var passed = false;
new function f() {
  passed = new.target === f;
}();

class A {
  constructor() {
    passed &amp;= new.target === B;
  }
}
class B extends A {}
new B();
return passed;</div>}
```
###class statement
          
```
function(){
              <div class="code">class C {}
return typeof C === &quot;function&quot;;</div>}
```
###is block-scoped
          
```
function(){
              <div class="code">class C {}
var c1 = C;
{
  class C {}
  var c2 = C;
}
return C === c1;</div>}
```
###class expression
          
```
function(){
              <div class="code">return typeof class C {} === &quot;function&quot;;</div>}
```
###anonymous class
          
```
function(){
              <div class="code">return typeof class {} === &quot;function&quot;;</div>}
```
###constructor
          
```
function(){
              <div class="code">class C {
  constructor() { this.x = 1; }
}
return C.prototype.constructor === C
  &amp;&amp; new C().x === 1;</div>}
```
###prototype methods
          
```
function(){
              <div class="code">class C {
  method() { return 2; }
}
return typeof C.prototype.method === &quot;function&quot;
  &amp;&amp; new C().method() === 2;</div>}
```
###string-keyed methods
          
```
function(){
              <div class="code">class C {
  &quot;foo bar&quot;() { return 2; }
}
return typeof C.prototype[&quot;foo bar&quot;] === &quot;function&quot;
  &amp;&amp; new C()[&quot;foo bar&quot;]() === 2;</div>}
```
###computed prototype methods
          
```
function(){
              <div class="code">var foo = &quot;method&quot;;
class C {
  [foo]() { return 2; }
}
return typeof C.prototype.method === &quot;function&quot;
  &amp;&amp; new C().method() === 2;</div>}
```
###optional semicolons
          
```
function(){
              <div class="code">class C {
  ;
  method() { return 2; };
  method2() { return 2; }
  method3() { return 2; };
}
return typeof C.prototype.method === &quot;function&quot;
  &amp;&amp; typeof C.prototype.method2 === &quot;function&quot;
  &amp;&amp; typeof C.prototype.method3 === &quot;function&quot;;</div>}
```
###static methods
          
```
function(){
              <div class="code">class C {
  static method() { return 3; }
}
return typeof C.method === &quot;function&quot;
  &amp;&amp; C.method() === 3;</div>}
```
###computed static methods
          
```
function(){
              <div class="code">var foo = &quot;method&quot;;
class C {
  static [foo]() { return 3; }
}
return typeof C.method === &quot;function&quot;
  &amp;&amp; C.method() === 3;</div>}
```
###accessor properties
          
```
function(){
              <div class="code">var baz = false;
class C {
  get foo() { return &quot;foo&quot;; }
  set bar(x) { baz = x; }
}
new C().bar = true;
return new C().foo === &quot;foo&quot; &amp;&amp; baz;</div>}
```
###computed accessor properties
          
```
function(){
              <div class="code">var garply = &quot;foo&quot;, grault = &quot;bar&quot;, baz = false;
class C {
  get [garply]() { return &quot;foo&quot;; }
  set [grault](x) { baz = x; }
}
new C().bar = true;
return new C().foo === &quot;foo&quot; &amp;&amp; baz;</div>}
```
###static accessor properties
          
```
function(){
              <div class="code">var baz = false;
class C {
  static get foo() { return &quot;foo&quot;; }
  static set bar(x) { baz = x; }
}
C.bar = true;
return C.foo === &quot;foo&quot; &amp;&amp; baz;</div>}
```
###computed static accessor properties
          
```
function(){
              <div class="code">var garply = &quot;foo&quot;, grault = &quot;bar&quot;, baz = false;
class C {
  static get [garply]() { return &quot;foo&quot;; }
  static set [grault](x) { baz = x; }
}
C.bar = true;
return C.foo === &quot;foo&quot; &amp;&amp; baz;</div>}
```
###class name is lexically scoped
          
```
function(){
              <div class="code">class C {
  method() { return typeof C === &quot;function&quot;; }
}
var M = C.prototype.method;
C = undefined;
return C === undefined &amp;&amp; M();</div>}
```
###computed names, temporal dead zone
          
```
function(){
              <div class="code">try {
  var B = class C {
    [C](){}
  }
} catch(e) {
  return true;
}</div>}
```
###methods aren't enumerable
          
```
function(){
              <div class="code">class C {
  foo() {}
  static bar() {}
}
return !C.prototype.propertyIsEnumerable(&quot;foo&quot;) &amp;&amp; !C.propertyIsEnumerable(&quot;bar&quot;);</div>}
```
###implicit strict mode
          
```
function(){
              <div class="code">class C {
  static method() { return this === undefined; }
}
return (0,C.method)();</div>}
```
###constructor requires new
          
```
function(){
              <div class="code">class C {}
try {
  C();
}
catch(e) {
  return true;
}</div>}
```
###extends
          
```
function(){
              <div class="code">class B {}
class C extends B {}
return new C() instanceof B
  &amp;&amp; B.isPrototypeOf(C);</div>}
```
###extends expressions
          
```
function(){
              <div class="code">var B;
class C extends (B = class {}) {}
return new C() instanceof B
  &amp;&amp; B.isPrototypeOf(C);</div>}
```
###extends null
          
```
function(){
              <div class="code">class C extends null {
  constructor() { return Object.create(null); }
}
return Function.prototype.isPrototypeOf(C)
  &amp;&amp; Object.getPrototypeOf(C.prototype) === null;</div>}
```
###new.target
          
```
function(){
              <div class="code">var passed = false;
new function f() {
  passed = new.target === f;
}();

class A {
  constructor() {
    passed &amp;= new.target === B;
  }
}
class B extends A {}
new B();
return passed;</div>}
```
###class statement
          
```
function(){
              <div class="code">class C {}
return typeof C === &quot;function&quot;;</div>}
```
###is block-scoped
          
```
function(){
              <div class="code">class C {}
var c1 = C;
{
  class C {}
  var c2 = C;
}
return C === c1;</div>}
```
###class expression
          
```
function(){
              <div class="code">return typeof class C {} === &quot;function&quot;;</div>}
```
###anonymous class
          
```
function(){
              <div class="code">return typeof class {} === &quot;function&quot;;</div>}
```
###constructor
          
```
function(){
              <div class="code">class C {
  constructor() { this.x = 1; }
}
return C.prototype.constructor === C
  &amp;&amp; new C().x === 1;</div>}
```
###prototype methods
          
```
function(){
              <div class="code">class C {
  method() { return 2; }
}
return typeof C.prototype.method === &quot;function&quot;
  &amp;&amp; new C().method() === 2;</div>}
```
###string-keyed methods
          
```
function(){
              <div class="code">class C {
  &quot;foo bar&quot;() { return 2; }
}
return typeof C.prototype[&quot;foo bar&quot;] === &quot;function&quot;
  &amp;&amp; new C()[&quot;foo bar&quot;]() === 2;</div>}
```
###computed prototype methods
          
```
function(){
              <div class="code">var foo = &quot;method&quot;;
class C {
  [foo]() { return 2; }
}
return typeof C.prototype.method === &quot;function&quot;
  &amp;&amp; new C().method() === 2;</div>}
```
###optional semicolons
          
```
function(){
              <div class="code">class C {
  ;
  method() { return 2; };
  method2() { return 2; }
  method3() { return 2; };
}
return typeof C.prototype.method === &quot;function&quot;
  &amp;&amp; typeof C.prototype.method2 === &quot;function&quot;
  &amp;&amp; typeof C.prototype.method3 === &quot;function&quot;;</div>}
```
###static methods
          
```
function(){
              <div class="code">class C {
  static method() { return 3; }
}
return typeof C.method === &quot;function&quot;
  &amp;&amp; C.method() === 3;</div>}
```
###computed static methods
          
```
function(){
              <div class="code">var foo = &quot;method&quot;;
class C {
  static [foo]() { return 3; }
}
return typeof C.method === &quot;function&quot;
  &amp;&amp; C.method() === 3;</div>}
```
###accessor properties
          
```
function(){
              <div class="code">var baz = false;
class C {
  get foo() { return &quot;foo&quot;; }
  set bar(x) { baz = x; }
}
new C().bar = true;
return new C().foo === &quot;foo&quot; &amp;&amp; baz;</div>}
```
###computed accessor properties
          
```
function(){
              <div class="code">var garply = &quot;foo&quot;, grault = &quot;bar&quot;, baz = false;
class C {
  get [garply]() { return &quot;foo&quot;; }
  set [grault](x) { baz = x; }
}
new C().bar = true;
return new C().foo === &quot;foo&quot; &amp;&amp; baz;</div>}
```
###static accessor properties
          
```
function(){
              <div class="code">var baz = false;
class C {
  static get foo() { return &quot;foo&quot;; }
  static set bar(x) { baz = x; }
}
C.bar = true;
return C.foo === &quot;foo&quot; &amp;&amp; baz;</div>}
```
###computed static accessor properties
          
```
function(){
              <div class="code">var garply = &quot;foo&quot;, grault = &quot;bar&quot;, baz = false;
class C {
  static get [garply]() { return &quot;foo&quot;; }
  static set [grault](x) { baz = x; }
}
C.bar = true;
return C.foo === &quot;foo&quot; &amp;&amp; baz;</div>}
```
###class name is lexically scoped
          
```
function(){
              <div class="code">class C {
  method() { return typeof C === &quot;function&quot;; }
}
var M = C.prototype.method;
C = undefined;
return C === undefined &amp;&amp; M();</div>}
```
###computed names, temporal dead zone
          
```
function(){
              <div class="code">try {
  var B = class C {
    [C](){}
  }
} catch(e) {
  return true;
}</div>}
```
###methods aren't enumerable
          
```
function(){
              <div class="code">class C {
  foo() {}
  static bar() {}
}
return !C.prototype.propertyIsEnumerable(&quot;foo&quot;) &amp;&amp; !C.propertyIsEnumerable(&quot;bar&quot;);</div>}
```
###implicit strict mode
          
```
function(){
              <div class="code">class C {
  static method() { return this === undefined; }
}
return (0,C.method)();</div>}
```
###constructor requires new
          
```
function(){
              <div class="code">class C {}
try {
  C();
}
catch(e) {
  return true;
}</div>}
```
###extends
          
```
function(){
              <div class="code">class B {}
class C extends B {}
return new C() instanceof B
  &amp;&amp; B.isPrototypeOf(C);</div>}
```
###extends expressions
          
```
function(){
              <div class="code">var B;
class C extends (B = class {}) {}
return new C() instanceof B
  &amp;&amp; B.isPrototypeOf(C);</div>}
```
###extends null
          
```
function(){
              <div class="code">class C extends null {
  constructor() { return Object.create(null); }
}
return Function.prototype.isPrototypeOf(C)
  &amp;&amp; Object.getPrototypeOf(C.prototype) === null;</div>}
```
###new.target
          
```
function(){
              <div class="code">var passed = false;
new function f() {
  passed = new.target === f;
}();

class A {
  constructor() {
    passed &amp;= new.target === B;
  }
}
class B extends A {}
new B();
return passed;</div>}
```
###class statement
          
```
function(){
              <div class="code">class C {}
return typeof C === &quot;function&quot;;</div>}
```
###is block-scoped
          
```
function(){
              <div class="code">class C {}
var c1 = C;
{
  class C {}
  var c2 = C;
}
return C === c1;</div>}
```
###class expression
          
```
function(){
              <div class="code">return typeof class C {} === &quot;function&quot;;</div>}
```
###anonymous class
          
```
function(){
              <div class="code">return typeof class {} === &quot;function&quot;;</div>}
```
###constructor
          
```
function(){
              <div class="code">class C {
  constructor() { this.x = 1; }
}
return C.prototype.constructor === C
  &amp;&amp; new C().x === 1;</div>}
```
###prototype methods
          
```
function(){
              <div class="code">class C {
  method() { return 2; }
}
return typeof C.prototype.method === &quot;function&quot;
  &amp;&amp; new C().method() === 2;</div>}
```
###string-keyed methods
          
```
function(){
              <div class="code">class C {
  &quot;foo bar&quot;() { return 2; }
}
return typeof C.prototype[&quot;foo bar&quot;] === &quot;function&quot;
  &amp;&amp; new C()[&quot;foo bar&quot;]() === 2;</div>}
```
###computed prototype methods
          
```
function(){
              <div class="code">var foo = &quot;method&quot;;
class C {
  [foo]() { return 2; }
}
return typeof C.prototype.method === &quot;function&quot;
  &amp;&amp; new C().method() === 2;</div>}
```
###optional semicolons
          
```
function(){
              <div class="code">class C {
  ;
  method() { return 2; };
  method2() { return 2; }
  method3() { return 2; };
}
return typeof C.prototype.method === &quot;function&quot;
  &amp;&amp; typeof C.prototype.method2 === &quot;function&quot;
  &amp;&amp; typeof C.prototype.method3 === &quot;function&quot;;</div>}
```
###static methods
          
```
function(){
              <div class="code">class C {
  static method() { return 3; }
}
return typeof C.method === &quot;function&quot;
  &amp;&amp; C.method() === 3;</div>}
```
###computed static methods
          
```
function(){
              <div class="code">var foo = &quot;method&quot;;
class C {
  static [foo]() { return 3; }
}
return typeof C.method === &quot;function&quot;
  &amp;&amp; C.method() === 3;</div>}
```
###accessor properties
          
```
function(){
              <div class="code">var baz = false;
class C {
  get foo() { return &quot;foo&quot;; }
  set bar(x) { baz = x; }
}
new C().bar = true;
return new C().foo === &quot;foo&quot; &amp;&amp; baz;</div>}
```
###computed accessor properties
          
```
function(){
              <div class="code">var garply = &quot;foo&quot;, grault = &quot;bar&quot;, baz = false;
class C {
  get [garply]() { return &quot;foo&quot;; }
  set [grault](x) { baz = x; }
}
new C().bar = true;
return new C().foo === &quot;foo&quot; &amp;&amp; baz;</div>}
```
###static accessor properties
          
```
function(){
              <div class="code">var baz = false;
class C {
  static get foo() { return &quot;foo&quot;; }
  static set bar(x) { baz = x; }
}
C.bar = true;
return C.foo === &quot;foo&quot; &amp;&amp; baz;</div>}
```
###computed static accessor properties
          
```
function(){
              <div class="code">var garply = &quot;foo&quot;, grault = &quot;bar&quot;, baz = false;
class C {
  static get [garply]() { return &quot;foo&quot;; }
  static set [grault](x) { baz = x; }
}
C.bar = true;
return C.foo === &quot;foo&quot; &amp;&amp; baz;</div>}
```
###class name is lexically scoped
          
```
function(){
              <div class="code">class C {
  method() { return typeof C === &quot;function&quot;; }
}
var M = C.prototype.method;
C = undefined;
return C === undefined &amp;&amp; M();</div>}
```
###computed names, temporal dead zone
          
```
function(){
              <div class="code">try {
  var B = class C {
    [C](){}
  }
} catch(e) {
  return true;
}</div>}
```
###methods aren't enumerable
          
```
function(){
              <div class="code">class C {
  foo() {}
  static bar() {}
}
return !C.prototype.propertyIsEnumerable(&quot;foo&quot;) &amp;&amp; !C.propertyIsEnumerable(&quot;bar&quot;);</div>}
```
###implicit strict mode
          
```
function(){
              <div class="code">class C {
  static method() { return this === undefined; }
}
return (0,C.method)();</div>}
```
###constructor requires new
          
```
function(){
              <div class="code">class C {}
try {
  C();
}
catch(e) {
  return true;
}</div>}
```
###extends
          
```
function(){
              <div class="code">class B {}
class C extends B {}
return new C() instanceof B
  &amp;&amp; B.isPrototypeOf(C);</div>}
```
###extends expressions
          
```
function(){
              <div class="code">var B;
class C extends (B = class {}) {}
return new C() instanceof B
  &amp;&amp; B.isPrototypeOf(C);</div>}
```
###extends null
          
```
function(){
              <div class="code">class C extends null {
  constructor() { return Object.create(null); }
}
return Function.prototype.isPrototypeOf(C)
  &amp;&amp; Object.getPrototypeOf(C.prototype) === null;</div>}
```
###new.target
          
```
function(){
              <div class="code">var passed = false;
new function f() {
  passed = new.target === f;
}();

class A {
  constructor() {
    passed &amp;= new.target === B;
  }
}
class B extends A {}
new B();
return passed;</div>}
```
###class statement
          
```
function(){
              <div class="code">class C {}
return typeof C === &quot;function&quot;;</div>}
```
###is block-scoped
          
```
function(){
              <div class="code">class C {}
var c1 = C;
{
  class C {}
  var c2 = C;
}
return C === c1;</div>}
```
###class expression
          
```
function(){
              <div class="code">return typeof class C {} === &quot;function&quot;;</div>}
```
###anonymous class
          
```
function(){
              <div class="code">return typeof class {} === &quot;function&quot;;</div>}
```
###constructor
          
```
function(){
              <div class="code">class C {
  constructor() { this.x = 1; }
}
return C.prototype.constructor === C
  &amp;&amp; new C().x === 1;</div>}
```
###prototype methods
          
```
function(){
              <div class="code">class C {
  method() { return 2; }
}
return typeof C.prototype.method === &quot;function&quot;
  &amp;&amp; new C().method() === 2;</div>}
```
###string-keyed methods
          
```
function(){
              <div class="code">class C {
  &quot;foo bar&quot;() { return 2; }
}
return typeof C.prototype[&quot;foo bar&quot;] === &quot;function&quot;
  &amp;&amp; new C()[&quot;foo bar&quot;]() === 2;</div>}
```
###computed prototype methods
          
```
function(){
              <div class="code">var foo = &quot;method&quot;;
class C {
  [foo]() { return 2; }
}
return typeof C.prototype.method === &quot;function&quot;
  &amp;&amp; new C().method() === 2;</div>}
```
###optional semicolons
          
```
function(){
              <div class="code">class C {
  ;
  method() { return 2; };
  method2() { return 2; }
  method3() { return 2; };
}
return typeof C.prototype.method === &quot;function&quot;
  &amp;&amp; typeof C.prototype.method2 === &quot;function&quot;
  &amp;&amp; typeof C.prototype.method3 === &quot;function&quot;;</div>}
```
###static methods
          
```
function(){
              <div class="code">class C {
  static method() { return 3; }
}
return typeof C.method === &quot;function&quot;
  &amp;&amp; C.method() === 3;</div>}
```
###computed static methods
          
```
function(){
              <div class="code">var foo = &quot;method&quot;;
class C {
  static [foo]() { return 3; }
}
return typeof C.method === &quot;function&quot;
  &amp;&amp; C.method() === 3;</div>}
```
###accessor properties
          
```
function(){
              <div class="code">var baz = false;
class C {
  get foo() { return &quot;foo&quot;; }
  set bar(x) { baz = x; }
}
new C().bar = true;
return new C().foo === &quot;foo&quot; &amp;&amp; baz;</div>}
```
###computed accessor properties
          
```
function(){
              <div class="code">var garply = &quot;foo&quot;, grault = &quot;bar&quot;, baz = false;
class C {
  get [garply]() { return &quot;foo&quot;; }
  set [grault](x) { baz = x; }
}
new C().bar = true;
return new C().foo === &quot;foo&quot; &amp;&amp; baz;</div>}
```
###static accessor properties
          
```
function(){
              <div class="code">var baz = false;
class C {
  static get foo() { return &quot;foo&quot;; }
  static set bar(x) { baz = x; }
}
C.bar = true;
return C.foo === &quot;foo&quot; &amp;&amp; baz;</div>}
```
###computed static accessor properties
          
```
function(){
              <div class="code">var garply = &quot;foo&quot;, grault = &quot;bar&quot;, baz = false;
class C {
  static get [garply]() { return &quot;foo&quot;; }
  static set [grault](x) { baz = x; }
}
C.bar = true;
return C.foo === &quot;foo&quot; &amp;&amp; baz;</div>}
```
###class name is lexically scoped
          
```
function(){
              <div class="code">class C {
  method() { return typeof C === &quot;function&quot;; }
}
var M = C.prototype.method;
C = undefined;
return C === undefined &amp;&amp; M();</div>}
```
###computed names, temporal dead zone
          
```
function(){
              <div class="code">try {
  var B = class C {
    [C](){}
  }
} catch(e) {
  return true;
}</div>}
```
###methods aren't enumerable
          
```
function(){
              <div class="code">class C {
  foo() {}
  static bar() {}
}
return !C.prototype.propertyIsEnumerable(&quot;foo&quot;) &amp;&amp; !C.propertyIsEnumerable(&quot;bar&quot;);</div>}
```
###implicit strict mode
          
```
function(){
              <div class="code">class C {
  static method() { return this === undefined; }
}
return (0,C.method)();</div>}
```
###constructor requires new
          
```
function(){
              <div class="code">class C {}
try {
  C();
}
catch(e) {
  return true;
}</div>}
```
###extends
          
```
function(){
              <div class="code">class B {}
class C extends B {}
return new C() instanceof B
  &amp;&amp; B.isPrototypeOf(C);</div>}
```
###extends expressions
          
```
function(){
              <div class="code">var B;
class C extends (B = class {}) {}
return new C() instanceof B
  &amp;&amp; B.isPrototypeOf(C);</div>}
```
###extends null
          
```
function(){
              <div class="code">class C extends null {
  constructor() { return Object.create(null); }
}
return Function.prototype.isPrototypeOf(C)
  &amp;&amp; Object.getPrototypeOf(C.prototype) === null;</div>}
```
###new.target
          
```
function(){
              <div class="code">var passed = false;
new function f() {
  passed = new.target === f;
}();

class A {
  constructor() {
    passed &amp;= new.target === B;
  }
}
class B extends A {}
new B();
return passed;</div>}
```
###class statement
          
```
function(){
              <div class="code">class C {}
return typeof C === &quot;function&quot;;</div>}
```
###is block-scoped
          
```
function(){
              <div class="code">class C {}
var c1 = C;
{
  class C {}
  var c2 = C;
}
return C === c1;</div>}
```
###class expression
          
```
function(){
              <div class="code">return typeof class C {} === &quot;function&quot;;</div>}
```
###anonymous class
          
```
function(){
              <div class="code">return typeof class {} === &quot;function&quot;;</div>}
```
###constructor
          
```
function(){
              <div class="code">class C {
  constructor() { this.x = 1; }
}
return C.prototype.constructor === C
  &amp;&amp; new C().x === 1;</div>}
```
###prototype methods
          
```
function(){
              <div class="code">class C {
  method() { return 2; }
}
return typeof C.prototype.method === &quot;function&quot;
  &amp;&amp; new C().method() === 2;</div>}
```
###string-keyed methods
          
```
function(){
              <div class="code">class C {
  &quot;foo bar&quot;() { return 2; }
}
return typeof C.prototype[&quot;foo bar&quot;] === &quot;function&quot;
  &amp;&amp; new C()[&quot;foo bar&quot;]() === 2;</div>}
```
###computed prototype methods
          
```
function(){
              <div class="code">var foo = &quot;method&quot;;
class C {
  [foo]() { return 2; }
}
return typeof C.prototype.method === &quot;function&quot;
  &amp;&amp; new C().method() === 2;</div>}
```
###optional semicolons
          
```
function(){
              <div class="code">class C {
  ;
  method() { return 2; };
  method2() { return 2; }
  method3() { return 2; };
}
return typeof C.prototype.method === &quot;function&quot;
  &amp;&amp; typeof C.prototype.method2 === &quot;function&quot;
  &amp;&amp; typeof C.prototype.method3 === &quot;function&quot;;</div>}
```
###static methods
          
```
function(){
              <div class="code">class C {
  static method() { return 3; }
}
return typeof C.method === &quot;function&quot;
  &amp;&amp; C.method() === 3;</div>}
```
###computed static methods
          
```
function(){
              <div class="code">var foo = &quot;method&quot;;
class C {
  static [foo]() { return 3; }
}
return typeof C.method === &quot;function&quot;
  &amp;&amp; C.method() === 3;</div>}
```
###accessor properties
          
```
function(){
              <div class="code">var baz = false;
class C {
  get foo() { return &quot;foo&quot;; }
  set bar(x) { baz = x; }
}
new C().bar = true;
return new C().foo === &quot;foo&quot; &amp;&amp; baz;</div>}
```
###computed accessor properties
          
```
function(){
              <div class="code">var garply = &quot;foo&quot;, grault = &quot;bar&quot;, baz = false;
class C {
  get [garply]() { return &quot;foo&quot;; }
  set [grault](x) { baz = x; }
}
new C().bar = true;
return new C().foo === &quot;foo&quot; &amp;&amp; baz;</div>}
```
###static accessor properties
          
```
function(){
              <div class="code">var baz = false;
class C {
  static get foo() { return &quot;foo&quot;; }
  static set bar(x) { baz = x; }
}
C.bar = true;
return C.foo === &quot;foo&quot; &amp;&amp; baz;</div>}
```
###computed static accessor properties
          
```
function(){
              <div class="code">var garply = &quot;foo&quot;, grault = &quot;bar&quot;, baz = false;
class C {
  static get [garply]() { return &quot;foo&quot;; }
  static set [grault](x) { baz = x; }
}
C.bar = true;
return C.foo === &quot;foo&quot; &amp;&amp; baz;</div>}
```
###class name is lexically scoped
          
```
function(){
              <div class="code">class C {
  method() { return typeof C === &quot;function&quot;; }
}
var M = C.prototype.method;
C = undefined;
return C === undefined &amp;&amp; M();</div>}
```
###computed names, temporal dead zone
          
```
function(){
              <div class="code">try {
  var B = class C {
    [C](){}
  }
} catch(e) {
  return true;
}</div>}
```
###methods aren't enumerable
          
```
function(){
              <div class="code">class C {
  foo() {}
  static bar() {}
}
return !C.prototype.propertyIsEnumerable(&quot;foo&quot;) &amp;&amp; !C.propertyIsEnumerable(&quot;bar&quot;);</div>}
```
###implicit strict mode
          
```
function(){
              <div class="code">class C {
  static method() { return this === undefined; }
}
return (0,C.method)();</div>}
```
###constructor requires new
          
```
function(){
              <div class="code">class C {}
try {
  C();
}
catch(e) {
  return true;
}</div>}
```
###extends
          
```
function(){
              <div class="code">class B {}
class C extends B {}
return new C() instanceof B
  &amp;&amp; B.isPrototypeOf(C);</div>}
```
###extends expressions
          
```
function(){
              <div class="code">var B;
class C extends (B = class {}) {}
return new C() instanceof B
  &amp;&amp; B.isPrototypeOf(C);</div>}
```
###extends null
          
```
function(){
              <div class="code">class C extends null {
  constructor() { return Object.create(null); }
}
return Function.prototype.isPrototypeOf(C)
  &amp;&amp; Object.getPrototypeOf(C.prototype) === null;</div>}
```
###new.target
          
```
function(){
              <div class="code">var passed = false;
new function f() {
  passed = new.target === f;
}();

class A {
  constructor() {
    passed &amp;= new.target === B;
  }
}
class B extends A {}
new B();
return passed;</div>}
```
