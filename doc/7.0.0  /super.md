###statement in constructors
          
```
function(){
              <div class="code">var passed = false;
class B {
  constructor(a) { passed = (a === &quot;barbaz&quot;); }
}
class C extends B {
  constructor(a) { super(&quot;bar&quot; + a); }
}
new C(&quot;baz&quot;);
return passed;</div>}
```
###expression in constructors
          
```
function(){
              <div class="code">class B {
  constructor(a) { return [&quot;foo&quot; + a]; }
}
class C extends B {
  constructor(a) { return super(&quot;bar&quot; + a); }
}
return new C(&quot;baz&quot;)[0] === &quot;foobarbaz&quot;;</div>}
```
###in methods, property access
          
```
function(){
              <div class="code">class B {}
B.prototype.qux = &quot;foo&quot;;
B.prototype.corge = &quot;baz&quot;;
class C extends B {
  quux(a) { return super.qux + a + super[&quot;corge&quot;]; }
}
C.prototype.qux = &quot;garply&quot;;
return new C().quux(&quot;bar&quot;) === &quot;foobarbaz&quot;;</div>}
```
###in methods, method calls
          
```
function(){
              <div class="code">class B {
  qux(a) { return &quot;foo&quot; + a; }
}
class C extends B {
  qux(a) { return super.qux(&quot;bar&quot; + a); }
}
return new C().qux(&quot;baz&quot;) === &quot;foobarbaz&quot;;</div>}
```
###method calls use correct &quot;this&quot; binding
          
```
function(){
              <div class="code">class B {
  qux(a) { return this.foo + a; }
}
class C extends B {
  qux(a) { return super.qux(&quot;bar&quot; + a); }
}
var obj = new C();
obj.foo = &quot;foo&quot;;
return obj.qux(&quot;baz&quot;) === &quot;foobarbaz&quot;;</div>}
```
###constructor calls use correct &quot;new.target&quot; binding
          
```
function(){
              <div class="code">var passed;
class B {
  constructor() { passed = (new.target === C); }
}
class C extends B {
  constructor() { super(); }
}
new C();
return passed;</div>}
```
###is statically bound
          
```
function(){
              <div class="code">class B {
  qux() { return &quot;bar&quot;; }
}
class C extends B {
  qux() { return super.qux() + this.corge; }
}
var obj = {
  qux: C.prototype.qux,
  corge: &quot;ley&quot;
};
return obj.qux() === &quot;barley&quot;;</div>}
```
###super() invokes the correct constructor
          
```
function(){
              <div class="code">// checks that super() is *not* a synonym of super.constructor()
var passed;
class B {
    constructor() {
        passed = true;
    }
};
B.prototype.constructor = function () {
    passed = false;
};
class C extends B { };
new C;
return passed;</div>}
```
###statement in constructors
          
```
function(){
              <div class="code">var passed = false;
class B {
  constructor(a) { passed = (a === &quot;barbaz&quot;); }
}
class C extends B {
  constructor(a) { super(&quot;bar&quot; + a); }
}
new C(&quot;baz&quot;);
return passed;</div>}
```
###expression in constructors
          
```
function(){
              <div class="code">class B {
  constructor(a) { return [&quot;foo&quot; + a]; }
}
class C extends B {
  constructor(a) { return super(&quot;bar&quot; + a); }
}
return new C(&quot;baz&quot;)[0] === &quot;foobarbaz&quot;;</div>}
```
###in methods, property access
          
```
function(){
              <div class="code">class B {}
B.prototype.qux = &quot;foo&quot;;
B.prototype.corge = &quot;baz&quot;;
class C extends B {
  quux(a) { return super.qux + a + super[&quot;corge&quot;]; }
}
C.prototype.qux = &quot;garply&quot;;
return new C().quux(&quot;bar&quot;) === &quot;foobarbaz&quot;;</div>}
```
###in methods, method calls
          
```
function(){
              <div class="code">class B {
  qux(a) { return &quot;foo&quot; + a; }
}
class C extends B {
  qux(a) { return super.qux(&quot;bar&quot; + a); }
}
return new C().qux(&quot;baz&quot;) === &quot;foobarbaz&quot;;</div>}
```
###method calls use correct &quot;this&quot; binding
          
```
function(){
              <div class="code">class B {
  qux(a) { return this.foo + a; }
}
class C extends B {
  qux(a) { return super.qux(&quot;bar&quot; + a); }
}
var obj = new C();
obj.foo = &quot;foo&quot;;
return obj.qux(&quot;baz&quot;) === &quot;foobarbaz&quot;;</div>}
```
###constructor calls use correct &quot;new.target&quot; binding
          
```
function(){
              <div class="code">var passed;
class B {
  constructor() { passed = (new.target === C); }
}
class C extends B {
  constructor() { super(); }
}
new C();
return passed;</div>}
```
###is statically bound
          
```
function(){
              <div class="code">class B {
  qux() { return &quot;bar&quot;; }
}
class C extends B {
  qux() { return super.qux() + this.corge; }
}
var obj = {
  qux: C.prototype.qux,
  corge: &quot;ley&quot;
};
return obj.qux() === &quot;barley&quot;;</div>}
```
###super() invokes the correct constructor
          
```
function(){
              <div class="code">// checks that super() is *not* a synonym of super.constructor()
var passed;
class B {
    constructor() {
        passed = true;
    }
};
B.prototype.constructor = function () {
    passed = false;
};
class C extends B { };
new C;
return passed;</div>}
```
###statement in constructors
          
```
function(){
              <div class="code">var passed = false;
class B {
  constructor(a) { passed = (a === &quot;barbaz&quot;); }
}
class C extends B {
  constructor(a) { super(&quot;bar&quot; + a); }
}
new C(&quot;baz&quot;);
return passed;</div>}
```
###expression in constructors
          
```
function(){
              <div class="code">class B {
  constructor(a) { return [&quot;foo&quot; + a]; }
}
class C extends B {
  constructor(a) { return super(&quot;bar&quot; + a); }
}
return new C(&quot;baz&quot;)[0] === &quot;foobarbaz&quot;;</div>}
```
###in methods, property access
          
```
function(){
              <div class="code">class B {}
B.prototype.qux = &quot;foo&quot;;
B.prototype.corge = &quot;baz&quot;;
class C extends B {
  quux(a) { return super.qux + a + super[&quot;corge&quot;]; }
}
C.prototype.qux = &quot;garply&quot;;
return new C().quux(&quot;bar&quot;) === &quot;foobarbaz&quot;;</div>}
```
###in methods, method calls
          
```
function(){
              <div class="code">class B {
  qux(a) { return &quot;foo&quot; + a; }
}
class C extends B {
  qux(a) { return super.qux(&quot;bar&quot; + a); }
}
return new C().qux(&quot;baz&quot;) === &quot;foobarbaz&quot;;</div>}
```
###method calls use correct &quot;this&quot; binding
          
```
function(){
              <div class="code">class B {
  qux(a) { return this.foo + a; }
}
class C extends B {
  qux(a) { return super.qux(&quot;bar&quot; + a); }
}
var obj = new C();
obj.foo = &quot;foo&quot;;
return obj.qux(&quot;baz&quot;) === &quot;foobarbaz&quot;;</div>}
```
###constructor calls use correct &quot;new.target&quot; binding
          
```
function(){
              <div class="code">var passed;
class B {
  constructor() { passed = (new.target === C); }
}
class C extends B {
  constructor() { super(); }
}
new C();
return passed;</div>}
```
###is statically bound
          
```
function(){
              <div class="code">class B {
  qux() { return &quot;bar&quot;; }
}
class C extends B {
  qux() { return super.qux() + this.corge; }
}
var obj = {
  qux: C.prototype.qux,
  corge: &quot;ley&quot;
};
return obj.qux() === &quot;barley&quot;;</div>}
```
###super() invokes the correct constructor
          
```
function(){
              <div class="code">// checks that super() is *not* a synonym of super.constructor()
var passed;
class B {
    constructor() {
        passed = true;
    }
};
B.prototype.constructor = function () {
    passed = false;
};
class C extends B { };
new C;
return passed;</div>}
```
###statement in constructors
          
```
function(){
              <div class="code">var passed = false;
class B {
  constructor(a) { passed = (a === &quot;barbaz&quot;); }
}
class C extends B {
  constructor(a) { super(&quot;bar&quot; + a); }
}
new C(&quot;baz&quot;);
return passed;</div>}
```
###expression in constructors
          
```
function(){
              <div class="code">class B {
  constructor(a) { return [&quot;foo&quot; + a]; }
}
class C extends B {
  constructor(a) { return super(&quot;bar&quot; + a); }
}
return new C(&quot;baz&quot;)[0] === &quot;foobarbaz&quot;;</div>}
```
###in methods, property access
          
```
function(){
              <div class="code">class B {}
B.prototype.qux = &quot;foo&quot;;
B.prototype.corge = &quot;baz&quot;;
class C extends B {
  quux(a) { return super.qux + a + super[&quot;corge&quot;]; }
}
C.prototype.qux = &quot;garply&quot;;
return new C().quux(&quot;bar&quot;) === &quot;foobarbaz&quot;;</div>}
```
###in methods, method calls
          
```
function(){
              <div class="code">class B {
  qux(a) { return &quot;foo&quot; + a; }
}
class C extends B {
  qux(a) { return super.qux(&quot;bar&quot; + a); }
}
return new C().qux(&quot;baz&quot;) === &quot;foobarbaz&quot;;</div>}
```
###method calls use correct &quot;this&quot; binding
          
```
function(){
              <div class="code">class B {
  qux(a) { return this.foo + a; }
}
class C extends B {
  qux(a) { return super.qux(&quot;bar&quot; + a); }
}
var obj = new C();
obj.foo = &quot;foo&quot;;
return obj.qux(&quot;baz&quot;) === &quot;foobarbaz&quot;;</div>}
```
###constructor calls use correct &quot;new.target&quot; binding
          
```
function(){
              <div class="code">var passed;
class B {
  constructor() { passed = (new.target === C); }
}
class C extends B {
  constructor() { super(); }
}
new C();
return passed;</div>}
```
###is statically bound
          
```
function(){
              <div class="code">class B {
  qux() { return &quot;bar&quot;; }
}
class C extends B {
  qux() { return super.qux() + this.corge; }
}
var obj = {
  qux: C.prototype.qux,
  corge: &quot;ley&quot;
};
return obj.qux() === &quot;barley&quot;;</div>}
```
###super() invokes the correct constructor
          
```
function(){
              <div class="code">// checks that super() is *not* a synonym of super.constructor()
var passed;
class B {
    constructor() {
        passed = true;
    }
};
B.prototype.constructor = function () {
    passed = false;
};
class C extends B { };
new C;
return passed;</div>}
```
###statement in constructors
          
```
function(){
              <div class="code">var passed = false;
class B {
  constructor(a) { passed = (a === &quot;barbaz&quot;); }
}
class C extends B {
  constructor(a) { super(&quot;bar&quot; + a); }
}
new C(&quot;baz&quot;);
return passed;</div>}
```
###expression in constructors
          
```
function(){
              <div class="code">class B {
  constructor(a) { return [&quot;foo&quot; + a]; }
}
class C extends B {
  constructor(a) { return super(&quot;bar&quot; + a); }
}
return new C(&quot;baz&quot;)[0] === &quot;foobarbaz&quot;;</div>}
```
###in methods, property access
          
```
function(){
              <div class="code">class B {}
B.prototype.qux = &quot;foo&quot;;
B.prototype.corge = &quot;baz&quot;;
class C extends B {
  quux(a) { return super.qux + a + super[&quot;corge&quot;]; }
}
C.prototype.qux = &quot;garply&quot;;
return new C().quux(&quot;bar&quot;) === &quot;foobarbaz&quot;;</div>}
```
###in methods, method calls
          
```
function(){
              <div class="code">class B {
  qux(a) { return &quot;foo&quot; + a; }
}
class C extends B {
  qux(a) { return super.qux(&quot;bar&quot; + a); }
}
return new C().qux(&quot;baz&quot;) === &quot;foobarbaz&quot;;</div>}
```
###method calls use correct &quot;this&quot; binding
          
```
function(){
              <div class="code">class B {
  qux(a) { return this.foo + a; }
}
class C extends B {
  qux(a) { return super.qux(&quot;bar&quot; + a); }
}
var obj = new C();
obj.foo = &quot;foo&quot;;
return obj.qux(&quot;baz&quot;) === &quot;foobarbaz&quot;;</div>}
```
###constructor calls use correct &quot;new.target&quot; binding
          
```
function(){
              <div class="code">var passed;
class B {
  constructor() { passed = (new.target === C); }
}
class C extends B {
  constructor() { super(); }
}
new C();
return passed;</div>}
```
###is statically bound
          
```
function(){
              <div class="code">class B {
  qux() { return &quot;bar&quot;; }
}
class C extends B {
  qux() { return super.qux() + this.corge; }
}
var obj = {
  qux: C.prototype.qux,
  corge: &quot;ley&quot;
};
return obj.qux() === &quot;barley&quot;;</div>}
```
###super() invokes the correct constructor
          
```
function(){
              <div class="code">// checks that super() is *not* a synonym of super.constructor()
var passed;
class B {
    constructor() {
        passed = true;
    }
};
B.prototype.constructor = function () {
    passed = false;
};
class C extends B { };
new C;
return passed;</div>}
```
###statement in constructors
          
```
function(){
              <div class="code">var passed = false;
class B {
  constructor(a) { passed = (a === &quot;barbaz&quot;); }
}
class C extends B {
  constructor(a) { super(&quot;bar&quot; + a); }
}
new C(&quot;baz&quot;);
return passed;</div>}
```
###expression in constructors
          
```
function(){
              <div class="code">class B {
  constructor(a) { return [&quot;foo&quot; + a]; }
}
class C extends B {
  constructor(a) { return super(&quot;bar&quot; + a); }
}
return new C(&quot;baz&quot;)[0] === &quot;foobarbaz&quot;;</div>}
```
###in methods, property access
          
```
function(){
              <div class="code">class B {}
B.prototype.qux = &quot;foo&quot;;
B.prototype.corge = &quot;baz&quot;;
class C extends B {
  quux(a) { return super.qux + a + super[&quot;corge&quot;]; }
}
C.prototype.qux = &quot;garply&quot;;
return new C().quux(&quot;bar&quot;) === &quot;foobarbaz&quot;;</div>}
```
###in methods, method calls
          
```
function(){
              <div class="code">class B {
  qux(a) { return &quot;foo&quot; + a; }
}
class C extends B {
  qux(a) { return super.qux(&quot;bar&quot; + a); }
}
return new C().qux(&quot;baz&quot;) === &quot;foobarbaz&quot;;</div>}
```
###method calls use correct &quot;this&quot; binding
          
```
function(){
              <div class="code">class B {
  qux(a) { return this.foo + a; }
}
class C extends B {
  qux(a) { return super.qux(&quot;bar&quot; + a); }
}
var obj = new C();
obj.foo = &quot;foo&quot;;
return obj.qux(&quot;baz&quot;) === &quot;foobarbaz&quot;;</div>}
```
###constructor calls use correct &quot;new.target&quot; binding
          
```
function(){
              <div class="code">var passed;
class B {
  constructor() { passed = (new.target === C); }
}
class C extends B {
  constructor() { super(); }
}
new C();
return passed;</div>}
```
###is statically bound
          
```
function(){
              <div class="code">class B {
  qux() { return &quot;bar&quot;; }
}
class C extends B {
  qux() { return super.qux() + this.corge; }
}
var obj = {
  qux: C.prototype.qux,
  corge: &quot;ley&quot;
};
return obj.qux() === &quot;barley&quot;;</div>}
```
###super() invokes the correct constructor
          
```
function(){
              <div class="code">// checks that super() is *not* a synonym of super.constructor()
var passed;
class B {
    constructor() {
        passed = true;
    }
};
B.prototype.constructor = function () {
    passed = false;
};
class C extends B { };
new C;
return passed;</div>}
```
###statement in constructors
          
```
function(){
              <div class="code">var passed = false;
class B {
  constructor(a) { passed = (a === &quot;barbaz&quot;); }
}
class C extends B {
  constructor(a) { super(&quot;bar&quot; + a); }
}
new C(&quot;baz&quot;);
return passed;</div>}
```
###expression in constructors
          
```
function(){
              <div class="code">class B {
  constructor(a) { return [&quot;foo&quot; + a]; }
}
class C extends B {
  constructor(a) { return super(&quot;bar&quot; + a); }
}
return new C(&quot;baz&quot;)[0] === &quot;foobarbaz&quot;;</div>}
```
###in methods, property access
          
```
function(){
              <div class="code">class B {}
B.prototype.qux = &quot;foo&quot;;
B.prototype.corge = &quot;baz&quot;;
class C extends B {
  quux(a) { return super.qux + a + super[&quot;corge&quot;]; }
}
C.prototype.qux = &quot;garply&quot;;
return new C().quux(&quot;bar&quot;) === &quot;foobarbaz&quot;;</div>}
```
###in methods, method calls
          
```
function(){
              <div class="code">class B {
  qux(a) { return &quot;foo&quot; + a; }
}
class C extends B {
  qux(a) { return super.qux(&quot;bar&quot; + a); }
}
return new C().qux(&quot;baz&quot;) === &quot;foobarbaz&quot;;</div>}
```
###method calls use correct &quot;this&quot; binding
          
```
function(){
              <div class="code">class B {
  qux(a) { return this.foo + a; }
}
class C extends B {
  qux(a) { return super.qux(&quot;bar&quot; + a); }
}
var obj = new C();
obj.foo = &quot;foo&quot;;
return obj.qux(&quot;baz&quot;) === &quot;foobarbaz&quot;;</div>}
```
###constructor calls use correct &quot;new.target&quot; binding
          
```
function(){
              <div class="code">var passed;
class B {
  constructor() { passed = (new.target === C); }
}
class C extends B {
  constructor() { super(); }
}
new C();
return passed;</div>}
```
###is statically bound
          
```
function(){
              <div class="code">class B {
  qux() { return &quot;bar&quot;; }
}
class C extends B {
  qux() { return super.qux() + this.corge; }
}
var obj = {
  qux: C.prototype.qux,
  corge: &quot;ley&quot;
};
return obj.qux() === &quot;barley&quot;;</div>}
```
###super() invokes the correct constructor
          
```
function(){
              <div class="code">// checks that super() is *not* a synonym of super.constructor()
var passed;
class B {
    constructor() {
        passed = true;
    }
};
B.prototype.constructor = function () {
    passed = false;
};
class C extends B { };
new C;
return passed;</div>}
```
###statement in constructors
          
```
function(){
              <div class="code">var passed = false;
class B {
  constructor(a) { passed = (a === &quot;barbaz&quot;); }
}
class C extends B {
  constructor(a) { super(&quot;bar&quot; + a); }
}
new C(&quot;baz&quot;);
return passed;</div>}
```
###expression in constructors
          
```
function(){
              <div class="code">class B {
  constructor(a) { return [&quot;foo&quot; + a]; }
}
class C extends B {
  constructor(a) { return super(&quot;bar&quot; + a); }
}
return new C(&quot;baz&quot;)[0] === &quot;foobarbaz&quot;;</div>}
```
###in methods, property access
          
```
function(){
              <div class="code">class B {}
B.prototype.qux = &quot;foo&quot;;
B.prototype.corge = &quot;baz&quot;;
class C extends B {
  quux(a) { return super.qux + a + super[&quot;corge&quot;]; }
}
C.prototype.qux = &quot;garply&quot;;
return new C().quux(&quot;bar&quot;) === &quot;foobarbaz&quot;;</div>}
```
###in methods, method calls
          
```
function(){
              <div class="code">class B {
  qux(a) { return &quot;foo&quot; + a; }
}
class C extends B {
  qux(a) { return super.qux(&quot;bar&quot; + a); }
}
return new C().qux(&quot;baz&quot;) === &quot;foobarbaz&quot;;</div>}
```
###method calls use correct &quot;this&quot; binding
          
```
function(){
              <div class="code">class B {
  qux(a) { return this.foo + a; }
}
class C extends B {
  qux(a) { return super.qux(&quot;bar&quot; + a); }
}
var obj = new C();
obj.foo = &quot;foo&quot;;
return obj.qux(&quot;baz&quot;) === &quot;foobarbaz&quot;;</div>}
```
###constructor calls use correct &quot;new.target&quot; binding
          
```
function(){
              <div class="code">var passed;
class B {
  constructor() { passed = (new.target === C); }
}
class C extends B {
  constructor() { super(); }
}
new C();
return passed;</div>}
```
###is statically bound
          
```
function(){
              <div class="code">class B {
  qux() { return &quot;bar&quot;; }
}
class C extends B {
  qux() { return super.qux() + this.corge; }
}
var obj = {
  qux: C.prototype.qux,
  corge: &quot;ley&quot;
};
return obj.qux() === &quot;barley&quot;;</div>}
```
###super() invokes the correct constructor
          
```
function(){
              <div class="code">// checks that super() is *not* a synonym of super.constructor()
var passed;
class B {
    constructor() {
        passed = true;
    }
};
B.prototype.constructor = function () {
    passed = false;
};
class C extends B { };
new C;
return passed;</div>}
```
###statement in constructors
          
```
function(){
              <div class="code">var passed = false;
class B {
  constructor(a) { passed = (a === &quot;barbaz&quot;); }
}
class C extends B {
  constructor(a) { super(&quot;bar&quot; + a); }
}
new C(&quot;baz&quot;);
return passed;</div>}
```
###expression in constructors
          
```
function(){
              <div class="code">class B {
  constructor(a) { return [&quot;foo&quot; + a]; }
}
class C extends B {
  constructor(a) { return super(&quot;bar&quot; + a); }
}
return new C(&quot;baz&quot;)[0] === &quot;foobarbaz&quot;;</div>}
```
###in methods, property access
          
```
function(){
              <div class="code">class B {}
B.prototype.qux = &quot;foo&quot;;
B.prototype.corge = &quot;baz&quot;;
class C extends B {
  quux(a) { return super.qux + a + super[&quot;corge&quot;]; }
}
C.prototype.qux = &quot;garply&quot;;
return new C().quux(&quot;bar&quot;) === &quot;foobarbaz&quot;;</div>}
```
###in methods, method calls
          
```
function(){
              <div class="code">class B {
  qux(a) { return &quot;foo&quot; + a; }
}
class C extends B {
  qux(a) { return super.qux(&quot;bar&quot; + a); }
}
return new C().qux(&quot;baz&quot;) === &quot;foobarbaz&quot;;</div>}
```
###method calls use correct &quot;this&quot; binding
          
```
function(){
              <div class="code">class B {
  qux(a) { return this.foo + a; }
}
class C extends B {
  qux(a) { return super.qux(&quot;bar&quot; + a); }
}
var obj = new C();
obj.foo = &quot;foo&quot;;
return obj.qux(&quot;baz&quot;) === &quot;foobarbaz&quot;;</div>}
```
###constructor calls use correct &quot;new.target&quot; binding
          
```
function(){
              <div class="code">var passed;
class B {
  constructor() { passed = (new.target === C); }
}
class C extends B {
  constructor() { super(); }
}
new C();
return passed;</div>}
```
###is statically bound
          
```
function(){
              <div class="code">class B {
  qux() { return &quot;bar&quot;; }
}
class C extends B {
  qux() { return super.qux() + this.corge; }
}
var obj = {
  qux: C.prototype.qux,
  corge: &quot;ley&quot;
};
return obj.qux() === &quot;barley&quot;;</div>}
```
###super() invokes the correct constructor
          
```
function(){
              <div class="code">// checks that super() is *not* a synonym of super.constructor()
var passed;
class B {
    constructor() {
        passed = true;
    }
};
B.prototype.constructor = function () {
    passed = false;
};
class C extends B { };
new C;
return passed;</div>}
```
###statement in constructors
          
```
function(){
              <div class="code">var passed = false;
class B {
  constructor(a) { passed = (a === &quot;barbaz&quot;); }
}
class C extends B {
  constructor(a) { super(&quot;bar&quot; + a); }
}
new C(&quot;baz&quot;);
return passed;</div>}
```
###expression in constructors
          
```
function(){
              <div class="code">class B {
  constructor(a) { return [&quot;foo&quot; + a]; }
}
class C extends B {
  constructor(a) { return super(&quot;bar&quot; + a); }
}
return new C(&quot;baz&quot;)[0] === &quot;foobarbaz&quot;;</div>}
```
###in methods, property access
          
```
function(){
              <div class="code">class B {}
B.prototype.qux = &quot;foo&quot;;
B.prototype.corge = &quot;baz&quot;;
class C extends B {
  quux(a) { return super.qux + a + super[&quot;corge&quot;]; }
}
C.prototype.qux = &quot;garply&quot;;
return new C().quux(&quot;bar&quot;) === &quot;foobarbaz&quot;;</div>}
```
###in methods, method calls
          
```
function(){
              <div class="code">class B {
  qux(a) { return &quot;foo&quot; + a; }
}
class C extends B {
  qux(a) { return super.qux(&quot;bar&quot; + a); }
}
return new C().qux(&quot;baz&quot;) === &quot;foobarbaz&quot;;</div>}
```
###method calls use correct &quot;this&quot; binding
          
```
function(){
              <div class="code">class B {
  qux(a) { return this.foo + a; }
}
class C extends B {
  qux(a) { return super.qux(&quot;bar&quot; + a); }
}
var obj = new C();
obj.foo = &quot;foo&quot;;
return obj.qux(&quot;baz&quot;) === &quot;foobarbaz&quot;;</div>}
```
###constructor calls use correct &quot;new.target&quot; binding
          
```
function(){
              <div class="code">var passed;
class B {
  constructor() { passed = (new.target === C); }
}
class C extends B {
  constructor() { super(); }
}
new C();
return passed;</div>}
```
###is statically bound
          
```
function(){
              <div class="code">class B {
  qux() { return &quot;bar&quot;; }
}
class C extends B {
  qux() { return super.qux() + this.corge; }
}
var obj = {
  qux: C.prototype.qux,
  corge: &quot;ley&quot;
};
return obj.qux() === &quot;barley&quot;;</div>}
```
###super() invokes the correct constructor
          
```
function(){
              <div class="code">// checks that super() is *not* a synonym of super.constructor()
var passed;
class B {
    constructor() {
        passed = true;
    }
};
B.prototype.constructor = function () {
    passed = false;
};
class C extends B { };
new C;
return passed;</div>}
```
###statement in constructors
          
```
function(){
              <div class="code">var passed = false;
class B {
  constructor(a) { passed = (a === &quot;barbaz&quot;); }
}
class C extends B {
  constructor(a) { super(&quot;bar&quot; + a); }
}
new C(&quot;baz&quot;);
return passed;</div>}
```
###expression in constructors
          
```
function(){
              <div class="code">class B {
  constructor(a) { return [&quot;foo&quot; + a]; }
}
class C extends B {
  constructor(a) { return super(&quot;bar&quot; + a); }
}
return new C(&quot;baz&quot;)[0] === &quot;foobarbaz&quot;;</div>}
```
###in methods, property access
          
```
function(){
              <div class="code">class B {}
B.prototype.qux = &quot;foo&quot;;
B.prototype.corge = &quot;baz&quot;;
class C extends B {
  quux(a) { return super.qux + a + super[&quot;corge&quot;]; }
}
C.prototype.qux = &quot;garply&quot;;
return new C().quux(&quot;bar&quot;) === &quot;foobarbaz&quot;;</div>}
```
###in methods, method calls
          
```
function(){
              <div class="code">class B {
  qux(a) { return &quot;foo&quot; + a; }
}
class C extends B {
  qux(a) { return super.qux(&quot;bar&quot; + a); }
}
return new C().qux(&quot;baz&quot;) === &quot;foobarbaz&quot;;</div>}
```
###method calls use correct &quot;this&quot; binding
          
```
function(){
              <div class="code">class B {
  qux(a) { return this.foo + a; }
}
class C extends B {
  qux(a) { return super.qux(&quot;bar&quot; + a); }
}
var obj = new C();
obj.foo = &quot;foo&quot;;
return obj.qux(&quot;baz&quot;) === &quot;foobarbaz&quot;;</div>}
```
###constructor calls use correct &quot;new.target&quot; binding
          
```
function(){
              <div class="code">var passed;
class B {
  constructor() { passed = (new.target === C); }
}
class C extends B {
  constructor() { super(); }
}
new C();
return passed;</div>}
```
###is statically bound
          
```
function(){
              <div class="code">class B {
  qux() { return &quot;bar&quot;; }
}
class C extends B {
  qux() { return super.qux() + this.corge; }
}
var obj = {
  qux: C.prototype.qux,
  corge: &quot;ley&quot;
};
return obj.qux() === &quot;barley&quot;;</div>}
```
###super() invokes the correct constructor
          
```
function(){
              <div class="code">// checks that super() is *not* a synonym of super.constructor()
var passed;
class B {
    constructor() {
        passed = true;
    }
};
B.prototype.constructor = function () {
    passed = false;
};
class C extends B { };
new C;
return passed;</div>}
```
###statement in constructors
          
```
function(){
              <div class="code">var passed = false;
class B {
  constructor(a) { passed = (a === &quot;barbaz&quot;); }
}
class C extends B {
  constructor(a) { super(&quot;bar&quot; + a); }
}
new C(&quot;baz&quot;);
return passed;</div>}
```
###expression in constructors
          
```
function(){
              <div class="code">class B {
  constructor(a) { return [&quot;foo&quot; + a]; }
}
class C extends B {
  constructor(a) { return super(&quot;bar&quot; + a); }
}
return new C(&quot;baz&quot;)[0] === &quot;foobarbaz&quot;;</div>}
```
###in methods, property access
          
```
function(){
              <div class="code">class B {}
B.prototype.qux = &quot;foo&quot;;
B.prototype.corge = &quot;baz&quot;;
class C extends B {
  quux(a) { return super.qux + a + super[&quot;corge&quot;]; }
}
C.prototype.qux = &quot;garply&quot;;
return new C().quux(&quot;bar&quot;) === &quot;foobarbaz&quot;;</div>}
```
###in methods, method calls
          
```
function(){
              <div class="code">class B {
  qux(a) { return &quot;foo&quot; + a; }
}
class C extends B {
  qux(a) { return super.qux(&quot;bar&quot; + a); }
}
return new C().qux(&quot;baz&quot;) === &quot;foobarbaz&quot;;</div>}
```
###method calls use correct &quot;this&quot; binding
          
```
function(){
              <div class="code">class B {
  qux(a) { return this.foo + a; }
}
class C extends B {
  qux(a) { return super.qux(&quot;bar&quot; + a); }
}
var obj = new C();
obj.foo = &quot;foo&quot;;
return obj.qux(&quot;baz&quot;) === &quot;foobarbaz&quot;;</div>}
```
###constructor calls use correct &quot;new.target&quot; binding
          
```
function(){
              <div class="code">var passed;
class B {
  constructor() { passed = (new.target === C); }
}
class C extends B {
  constructor() { super(); }
}
new C();
return passed;</div>}
```
###is statically bound
          
```
function(){
              <div class="code">class B {
  qux() { return &quot;bar&quot;; }
}
class C extends B {
  qux() { return super.qux() + this.corge; }
}
var obj = {
  qux: C.prototype.qux,
  corge: &quot;ley&quot;
};
return obj.qux() === &quot;barley&quot;;</div>}
```
###super() invokes the correct constructor
          
```
function(){
              <div class="code">// checks that super() is *not* a synonym of super.constructor()
var passed;
class B {
    constructor() {
        passed = true;
    }
};
B.prototype.constructor = function () {
    passed = false;
};
class C extends B { };
new C;
return passed;</div>}
```
###statement in constructors
          
```
function(){
              <div class="code">var passed = false;
class B {
  constructor(a) { passed = (a === &quot;barbaz&quot;); }
}
class C extends B {
  constructor(a) { super(&quot;bar&quot; + a); }
}
new C(&quot;baz&quot;);
return passed;</div>}
```
###expression in constructors
          
```
function(){
              <div class="code">class B {
  constructor(a) { return [&quot;foo&quot; + a]; }
}
class C extends B {
  constructor(a) { return super(&quot;bar&quot; + a); }
}
return new C(&quot;baz&quot;)[0] === &quot;foobarbaz&quot;;</div>}
```
###in methods, property access
          
```
function(){
              <div class="code">class B {}
B.prototype.qux = &quot;foo&quot;;
B.prototype.corge = &quot;baz&quot;;
class C extends B {
  quux(a) { return super.qux + a + super[&quot;corge&quot;]; }
}
C.prototype.qux = &quot;garply&quot;;
return new C().quux(&quot;bar&quot;) === &quot;foobarbaz&quot;;</div>}
```
###in methods, method calls
          
```
function(){
              <div class="code">class B {
  qux(a) { return &quot;foo&quot; + a; }
}
class C extends B {
  qux(a) { return super.qux(&quot;bar&quot; + a); }
}
return new C().qux(&quot;baz&quot;) === &quot;foobarbaz&quot;;</div>}
```
###method calls use correct &quot;this&quot; binding
          
```
function(){
              <div class="code">class B {
  qux(a) { return this.foo + a; }
}
class C extends B {
  qux(a) { return super.qux(&quot;bar&quot; + a); }
}
var obj = new C();
obj.foo = &quot;foo&quot;;
return obj.qux(&quot;baz&quot;) === &quot;foobarbaz&quot;;</div>}
```
###constructor calls use correct &quot;new.target&quot; binding
          
```
function(){
              <div class="code">var passed;
class B {
  constructor() { passed = (new.target === C); }
}
class C extends B {
  constructor() { super(); }
}
new C();
return passed;</div>}
```
###is statically bound
          
```
function(){
              <div class="code">class B {
  qux() { return &quot;bar&quot;; }
}
class C extends B {
  qux() { return super.qux() + this.corge; }
}
var obj = {
  qux: C.prototype.qux,
  corge: &quot;ley&quot;
};
return obj.qux() === &quot;barley&quot;;</div>}
```
###super() invokes the correct constructor
          
```
function(){
              <div class="code">// checks that super() is *not* a synonym of super.constructor()
var passed;
class B {
    constructor() {
        passed = true;
    }
};
B.prototype.constructor = function () {
    passed = false;
};
class C extends B { };
new C;
return passed;</div>}
```
###statement in constructors
          
```
function(){
              <div class="code">var passed = false;
class B {
  constructor(a) { passed = (a === &quot;barbaz&quot;); }
}
class C extends B {
  constructor(a) { super(&quot;bar&quot; + a); }
}
new C(&quot;baz&quot;);
return passed;</div>}
```
###expression in constructors
          
```
function(){
              <div class="code">class B {
  constructor(a) { return [&quot;foo&quot; + a]; }
}
class C extends B {
  constructor(a) { return super(&quot;bar&quot; + a); }
}
return new C(&quot;baz&quot;)[0] === &quot;foobarbaz&quot;;</div>}
```
###in methods, property access
          
```
function(){
              <div class="code">class B {}
B.prototype.qux = &quot;foo&quot;;
B.prototype.corge = &quot;baz&quot;;
class C extends B {
  quux(a) { return super.qux + a + super[&quot;corge&quot;]; }
}
C.prototype.qux = &quot;garply&quot;;
return new C().quux(&quot;bar&quot;) === &quot;foobarbaz&quot;;</div>}
```
###in methods, method calls
          
```
function(){
              <div class="code">class B {
  qux(a) { return &quot;foo&quot; + a; }
}
class C extends B {
  qux(a) { return super.qux(&quot;bar&quot; + a); }
}
return new C().qux(&quot;baz&quot;) === &quot;foobarbaz&quot;;</div>}
```
###method calls use correct &quot;this&quot; binding
          
```
function(){
              <div class="code">class B {
  qux(a) { return this.foo + a; }
}
class C extends B {
  qux(a) { return super.qux(&quot;bar&quot; + a); }
}
var obj = new C();
obj.foo = &quot;foo&quot;;
return obj.qux(&quot;baz&quot;) === &quot;foobarbaz&quot;;</div>}
```
###constructor calls use correct &quot;new.target&quot; binding
          
```
function(){
              <div class="code">var passed;
class B {
  constructor() { passed = (new.target === C); }
}
class C extends B {
  constructor() { super(); }
}
new C();
return passed;</div>}
```
###is statically bound
          
```
function(){
              <div class="code">class B {
  qux() { return &quot;bar&quot;; }
}
class C extends B {
  qux() { return super.qux() + this.corge; }
}
var obj = {
  qux: C.prototype.qux,
  corge: &quot;ley&quot;
};
return obj.qux() === &quot;barley&quot;;</div>}
```
###super() invokes the correct constructor
          
```
function(){
              <div class="code">// checks that super() is *not* a synonym of super.constructor()
var passed;
class B {
    constructor() {
        passed = true;
    }
};
B.prototype.constructor = function () {
    passed = false;
};
class C extends B { };
new C;
return passed;</div>}
```
###statement in constructors
          
```
function(){
              <div class="code">var passed = false;
class B {
  constructor(a) { passed = (a === &quot;barbaz&quot;); }
}
class C extends B {
  constructor(a) { super(&quot;bar&quot; + a); }
}
new C(&quot;baz&quot;);
return passed;</div>}
```
###expression in constructors
          
```
function(){
              <div class="code">class B {
  constructor(a) { return [&quot;foo&quot; + a]; }
}
class C extends B {
  constructor(a) { return super(&quot;bar&quot; + a); }
}
return new C(&quot;baz&quot;)[0] === &quot;foobarbaz&quot;;</div>}
```
###in methods, property access
          
```
function(){
              <div class="code">class B {}
B.prototype.qux = &quot;foo&quot;;
B.prototype.corge = &quot;baz&quot;;
class C extends B {
  quux(a) { return super.qux + a + super[&quot;corge&quot;]; }
}
C.prototype.qux = &quot;garply&quot;;
return new C().quux(&quot;bar&quot;) === &quot;foobarbaz&quot;;</div>}
```
###in methods, method calls
          
```
function(){
              <div class="code">class B {
  qux(a) { return &quot;foo&quot; + a; }
}
class C extends B {
  qux(a) { return super.qux(&quot;bar&quot; + a); }
}
return new C().qux(&quot;baz&quot;) === &quot;foobarbaz&quot;;</div>}
```
###method calls use correct &quot;this&quot; binding
          
```
function(){
              <div class="code">class B {
  qux(a) { return this.foo + a; }
}
class C extends B {
  qux(a) { return super.qux(&quot;bar&quot; + a); }
}
var obj = new C();
obj.foo = &quot;foo&quot;;
return obj.qux(&quot;baz&quot;) === &quot;foobarbaz&quot;;</div>}
```
###constructor calls use correct &quot;new.target&quot; binding
          
```
function(){
              <div class="code">var passed;
class B {
  constructor() { passed = (new.target === C); }
}
class C extends B {
  constructor() { super(); }
}
new C();
return passed;</div>}
```
###is statically bound
          
```
function(){
              <div class="code">class B {
  qux() { return &quot;bar&quot;; }
}
class C extends B {
  qux() { return super.qux() + this.corge; }
}
var obj = {
  qux: C.prototype.qux,
  corge: &quot;ley&quot;
};
return obj.qux() === &quot;barley&quot;;</div>}
```
###super() invokes the correct constructor
          
```
function(){
              <div class="code">// checks that super() is *not* a synonym of super.constructor()
var passed;
class B {
    constructor() {
        passed = true;
    }
};
B.prototype.constructor = function () {
    passed = false;
};
class C extends B { };
new C;
return passed;</div>}
```
