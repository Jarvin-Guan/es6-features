###can be called
          
```
function(){
              <div class="code">class C extends Function {}
var c = new C(&quot;return 'foo';&quot;);
return c() === 'foo';</div>}
```
###correct prototype chain
          
```
function(){
              <div class="code">class C extends Function {}
var c = new C(&quot;return 'foo';&quot;);
return c instanceof C &amp;&amp; c instanceof Function &amp;&amp; Object.getPrototypeOf(C) === Function;</div>}
```
###can be used with &quot;new&quot;
          
```
function(){
              <div class="code">class C extends Function {}
var c = new C(&quot;this.bar = 2;&quot;);
c.prototype.baz = 3;
return new c().bar === 2 &amp;&amp; new c().baz === 3;</div>}
```
###Function.prototype.call
          
```
function(){
              <div class="code">class C extends Function {}
var c = new C(&quot;x&quot;, &quot;return this.bar + x;&quot;);
return c.call({bar:1}, 2) === 3;</div>}
```
###Function.prototype.apply
          
```
function(){
              <div class="code">class C extends Function {}
var c = new C(&quot;x&quot;, &quot;return this.bar + x;&quot;);
return c.apply({bar:1}, [2]) === 3;</div>}
```
###Function.prototype.bind
          
```
function(){
              <div class="code">class C extends Function {}
var c = new C(&quot;x&quot;, &quot;y&quot;, &quot;return this.bar + x + y;&quot;).bind({bar:1}, 2);
return c(6) === 9 &amp;&amp; c instanceof C;</div>}
```
###can be called
          
```
function(){
              <div class="code">class C extends Function {}
var c = new C(&quot;return 'foo';&quot;);
return c() === 'foo';</div>}
```
###correct prototype chain
          
```
function(){
              <div class="code">class C extends Function {}
var c = new C(&quot;return 'foo';&quot;);
return c instanceof C &amp;&amp; c instanceof Function &amp;&amp; Object.getPrototypeOf(C) === Function;</div>}
```
###can be used with &quot;new&quot;
          
```
function(){
              <div class="code">class C extends Function {}
var c = new C(&quot;this.bar = 2;&quot;);
c.prototype.baz = 3;
return new c().bar === 2 &amp;&amp; new c().baz === 3;</div>}
```
###Function.prototype.call
          
```
function(){
              <div class="code">class C extends Function {}
var c = new C(&quot;x&quot;, &quot;return this.bar + x;&quot;);
return c.call({bar:1}, 2) === 3;</div>}
```
###Function.prototype.apply
          
```
function(){
              <div class="code">class C extends Function {}
var c = new C(&quot;x&quot;, &quot;return this.bar + x;&quot;);
return c.apply({bar:1}, [2]) === 3;</div>}
```
###Function.prototype.bind
          
```
function(){
              <div class="code">class C extends Function {}
var c = new C(&quot;x&quot;, &quot;y&quot;, &quot;return this.bar + x + y;&quot;).bind({bar:1}, 2);
return c(6) === 9 &amp;&amp; c instanceof C;</div>}
```
###can be called
          
```
function(){
              <div class="code">class C extends Function {}
var c = new C(&quot;return 'foo';&quot;);
return c() === 'foo';</div>}
```
###correct prototype chain
          
```
function(){
              <div class="code">class C extends Function {}
var c = new C(&quot;return 'foo';&quot;);
return c instanceof C &amp;&amp; c instanceof Function &amp;&amp; Object.getPrototypeOf(C) === Function;</div>}
```
###can be used with &quot;new&quot;
          
```
function(){
              <div class="code">class C extends Function {}
var c = new C(&quot;this.bar = 2;&quot;);
c.prototype.baz = 3;
return new c().bar === 2 &amp;&amp; new c().baz === 3;</div>}
```
###Function.prototype.call
          
```
function(){
              <div class="code">class C extends Function {}
var c = new C(&quot;x&quot;, &quot;return this.bar + x;&quot;);
return c.call({bar:1}, 2) === 3;</div>}
```
###Function.prototype.apply
          
```
function(){
              <div class="code">class C extends Function {}
var c = new C(&quot;x&quot;, &quot;return this.bar + x;&quot;);
return c.apply({bar:1}, [2]) === 3;</div>}
```
###Function.prototype.bind
          
```
function(){
              <div class="code">class C extends Function {}
var c = new C(&quot;x&quot;, &quot;y&quot;, &quot;return this.bar + x + y;&quot;).bind({bar:1}, 2);
return c(6) === 9 &amp;&amp; c instanceof C;</div>}
```
###can be called
          
```
function(){
              <div class="code">class C extends Function {}
var c = new C(&quot;return 'foo';&quot;);
return c() === 'foo';</div>}
```
###correct prototype chain
          
```
function(){
              <div class="code">class C extends Function {}
var c = new C(&quot;return 'foo';&quot;);
return c instanceof C &amp;&amp; c instanceof Function &amp;&amp; Object.getPrototypeOf(C) === Function;</div>}
```
###can be used with &quot;new&quot;
          
```
function(){
              <div class="code">class C extends Function {}
var c = new C(&quot;this.bar = 2;&quot;);
c.prototype.baz = 3;
return new c().bar === 2 &amp;&amp; new c().baz === 3;</div>}
```
###Function.prototype.call
          
```
function(){
              <div class="code">class C extends Function {}
var c = new C(&quot;x&quot;, &quot;return this.bar + x;&quot;);
return c.call({bar:1}, 2) === 3;</div>}
```
###Function.prototype.apply
          
```
function(){
              <div class="code">class C extends Function {}
var c = new C(&quot;x&quot;, &quot;return this.bar + x;&quot;);
return c.apply({bar:1}, [2]) === 3;</div>}
```
###Function.prototype.bind
          
```
function(){
              <div class="code">class C extends Function {}
var c = new C(&quot;x&quot;, &quot;y&quot;, &quot;return this.bar + x + y;&quot;).bind({bar:1}, 2);
return c(6) === 9 &amp;&amp; c instanceof C;</div>}
```
###can be called
          
```
function(){
              <div class="code">class C extends Function {}
var c = new C(&quot;return 'foo';&quot;);
return c() === 'foo';</div>}
```
###correct prototype chain
          
```
function(){
              <div class="code">class C extends Function {}
var c = new C(&quot;return 'foo';&quot;);
return c instanceof C &amp;&amp; c instanceof Function &amp;&amp; Object.getPrototypeOf(C) === Function;</div>}
```
###can be used with &quot;new&quot;
          
```
function(){
              <div class="code">class C extends Function {}
var c = new C(&quot;this.bar = 2;&quot;);
c.prototype.baz = 3;
return new c().bar === 2 &amp;&amp; new c().baz === 3;</div>}
```
###Function.prototype.call
          
```
function(){
              <div class="code">class C extends Function {}
var c = new C(&quot;x&quot;, &quot;return this.bar + x;&quot;);
return c.call({bar:1}, 2) === 3;</div>}
```
###Function.prototype.apply
          
```
function(){
              <div class="code">class C extends Function {}
var c = new C(&quot;x&quot;, &quot;return this.bar + x;&quot;);
return c.apply({bar:1}, [2]) === 3;</div>}
```
###Function.prototype.bind
          
```
function(){
              <div class="code">class C extends Function {}
var c = new C(&quot;x&quot;, &quot;y&quot;, &quot;return this.bar + x + y;&quot;).bind({bar:1}, 2);
return c(6) === 9 &amp;&amp; c instanceof C;</div>}
```
###can be called
          
```
function(){
              <div class="code">class C extends Function {}
var c = new C(&quot;return 'foo';&quot;);
return c() === 'foo';</div>}
```
###correct prototype chain
          
```
function(){
              <div class="code">class C extends Function {}
var c = new C(&quot;return 'foo';&quot;);
return c instanceof C &amp;&amp; c instanceof Function &amp;&amp; Object.getPrototypeOf(C) === Function;</div>}
```
###can be used with &quot;new&quot;
          
```
function(){
              <div class="code">class C extends Function {}
var c = new C(&quot;this.bar = 2;&quot;);
c.prototype.baz = 3;
return new c().bar === 2 &amp;&amp; new c().baz === 3;</div>}
```
###Function.prototype.call
          
```
function(){
              <div class="code">class C extends Function {}
var c = new C(&quot;x&quot;, &quot;return this.bar + x;&quot;);
return c.call({bar:1}, 2) === 3;</div>}
```
###Function.prototype.apply
          
```
function(){
              <div class="code">class C extends Function {}
var c = new C(&quot;x&quot;, &quot;return this.bar + x;&quot;);
return c.apply({bar:1}, [2]) === 3;</div>}
```
###Function.prototype.bind
          
```
function(){
              <div class="code">class C extends Function {}
var c = new C(&quot;x&quot;, &quot;y&quot;, &quot;return this.bar + x + y;&quot;).bind({bar:1}, 2);
return c(6) === 9 &amp;&amp; c instanceof C;</div>}
```
###can be called
          
```
function(){
              <div class="code">class C extends Function {}
var c = new C(&quot;return 'foo';&quot;);
return c() === 'foo';</div>}
```
###correct prototype chain
          
```
function(){
              <div class="code">class C extends Function {}
var c = new C(&quot;return 'foo';&quot;);
return c instanceof C &amp;&amp; c instanceof Function &amp;&amp; Object.getPrototypeOf(C) === Function;</div>}
```
###can be used with &quot;new&quot;
          
```
function(){
              <div class="code">class C extends Function {}
var c = new C(&quot;this.bar = 2;&quot;);
c.prototype.baz = 3;
return new c().bar === 2 &amp;&amp; new c().baz === 3;</div>}
```
###Function.prototype.call
          
```
function(){
              <div class="code">class C extends Function {}
var c = new C(&quot;x&quot;, &quot;return this.bar + x;&quot;);
return c.call({bar:1}, 2) === 3;</div>}
```
###Function.prototype.apply
          
```
function(){
              <div class="code">class C extends Function {}
var c = new C(&quot;x&quot;, &quot;return this.bar + x;&quot;);
return c.apply({bar:1}, [2]) === 3;</div>}
```
###Function.prototype.bind
          
```
function(){
              <div class="code">class C extends Function {}
var c = new C(&quot;x&quot;, &quot;y&quot;, &quot;return this.bar + x + y;&quot;).bind({bar:1}, 2);
return c(6) === 9 &amp;&amp; c instanceof C;</div>}
```
###can be called
          
```
function(){
              <div class="code">class C extends Function {}
var c = new C(&quot;return 'foo';&quot;);
return c() === 'foo';</div>}
```
###correct prototype chain
          
```
function(){
              <div class="code">class C extends Function {}
var c = new C(&quot;return 'foo';&quot;);
return c instanceof C &amp;&amp; c instanceof Function &amp;&amp; Object.getPrototypeOf(C) === Function;</div>}
```
###can be used with &quot;new&quot;
          
```
function(){
              <div class="code">class C extends Function {}
var c = new C(&quot;this.bar = 2;&quot;);
c.prototype.baz = 3;
return new c().bar === 2 &amp;&amp; new c().baz === 3;</div>}
```
###Function.prototype.call
          
```
function(){
              <div class="code">class C extends Function {}
var c = new C(&quot;x&quot;, &quot;return this.bar + x;&quot;);
return c.call({bar:1}, 2) === 3;</div>}
```
###Function.prototype.apply
          
```
function(){
              <div class="code">class C extends Function {}
var c = new C(&quot;x&quot;, &quot;return this.bar + x;&quot;);
return c.apply({bar:1}, [2]) === 3;</div>}
```
###Function.prototype.bind
          
```
function(){
              <div class="code">class C extends Function {}
var c = new C(&quot;x&quot;, &quot;y&quot;, &quot;return this.bar + x + y;&quot;).bind({bar:1}, 2);
return c(6) === 9 &amp;&amp; c instanceof C;</div>}
```
###can be called
          
```
function(){
              <div class="code">class C extends Function {}
var c = new C(&quot;return 'foo';&quot;);
return c() === 'foo';</div>}
```
###correct prototype chain
          
```
function(){
              <div class="code">class C extends Function {}
var c = new C(&quot;return 'foo';&quot;);
return c instanceof C &amp;&amp; c instanceof Function &amp;&amp; Object.getPrototypeOf(C) === Function;</div>}
```
###can be used with &quot;new&quot;
          
```
function(){
              <div class="code">class C extends Function {}
var c = new C(&quot;this.bar = 2;&quot;);
c.prototype.baz = 3;
return new c().bar === 2 &amp;&amp; new c().baz === 3;</div>}
```
###Function.prototype.call
          
```
function(){
              <div class="code">class C extends Function {}
var c = new C(&quot;x&quot;, &quot;return this.bar + x;&quot;);
return c.call({bar:1}, 2) === 3;</div>}
```
###Function.prototype.apply
          
```
function(){
              <div class="code">class C extends Function {}
var c = new C(&quot;x&quot;, &quot;return this.bar + x;&quot;);
return c.apply({bar:1}, [2]) === 3;</div>}
```
###Function.prototype.bind
          
```
function(){
              <div class="code">class C extends Function {}
var c = new C(&quot;x&quot;, &quot;y&quot;, &quot;return this.bar + x + y;&quot;).bind({bar:1}, 2);
return c(6) === 9 &amp;&amp; c instanceof C;</div>}
```
###can be called
          
```
function(){
              <div class="code">class C extends Function {}
var c = new C(&quot;return 'foo';&quot;);
return c() === 'foo';</div>}
```
###correct prototype chain
          
```
function(){
              <div class="code">class C extends Function {}
var c = new C(&quot;return 'foo';&quot;);
return c instanceof C &amp;&amp; c instanceof Function &amp;&amp; Object.getPrototypeOf(C) === Function;</div>}
```
###can be used with &quot;new&quot;
          
```
function(){
              <div class="code">class C extends Function {}
var c = new C(&quot;this.bar = 2;&quot;);
c.prototype.baz = 3;
return new c().bar === 2 &amp;&amp; new c().baz === 3;</div>}
```
###Function.prototype.call
          
```
function(){
              <div class="code">class C extends Function {}
var c = new C(&quot;x&quot;, &quot;return this.bar + x;&quot;);
return c.call({bar:1}, 2) === 3;</div>}
```
###Function.prototype.apply
          
```
function(){
              <div class="code">class C extends Function {}
var c = new C(&quot;x&quot;, &quot;return this.bar + x;&quot;);
return c.apply({bar:1}, [2]) === 3;</div>}
```
###Function.prototype.bind
          
```
function(){
              <div class="code">class C extends Function {}
var c = new C(&quot;x&quot;, &quot;y&quot;, &quot;return this.bar + x + y;&quot;).bind({bar:1}, 2);
return c(6) === 9 &amp;&amp; c instanceof C;</div>}
```
###can be called
          
```
function(){
              <div class="code">class C extends Function {}
var c = new C(&quot;return 'foo';&quot;);
return c() === 'foo';</div>}
```
###correct prototype chain
          
```
function(){
              <div class="code">class C extends Function {}
var c = new C(&quot;return 'foo';&quot;);
return c instanceof C &amp;&amp; c instanceof Function &amp;&amp; Object.getPrototypeOf(C) === Function;</div>}
```
###can be used with &quot;new&quot;
          
```
function(){
              <div class="code">class C extends Function {}
var c = new C(&quot;this.bar = 2;&quot;);
c.prototype.baz = 3;
return new c().bar === 2 &amp;&amp; new c().baz === 3;</div>}
```
###Function.prototype.call
          
```
function(){
              <div class="code">class C extends Function {}
var c = new C(&quot;x&quot;, &quot;return this.bar + x;&quot;);
return c.call({bar:1}, 2) === 3;</div>}
```
###Function.prototype.apply
          
```
function(){
              <div class="code">class C extends Function {}
var c = new C(&quot;x&quot;, &quot;return this.bar + x;&quot;);
return c.apply({bar:1}, [2]) === 3;</div>}
```
###Function.prototype.bind
          
```
function(){
              <div class="code">class C extends Function {}
var c = new C(&quot;x&quot;, &quot;y&quot;, &quot;return this.bar + x + y;&quot;).bind({bar:1}, 2);
return c(6) === 9 &amp;&amp; c instanceof C;</div>}
```
###can be called
          
```
function(){
              <div class="code">class C extends Function {}
var c = new C(&quot;return 'foo';&quot;);
return c() === 'foo';</div>}
```
###correct prototype chain
          
```
function(){
              <div class="code">class C extends Function {}
var c = new C(&quot;return 'foo';&quot;);
return c instanceof C &amp;&amp; c instanceof Function &amp;&amp; Object.getPrototypeOf(C) === Function;</div>}
```
###can be used with &quot;new&quot;
          
```
function(){
              <div class="code">class C extends Function {}
var c = new C(&quot;this.bar = 2;&quot;);
c.prototype.baz = 3;
return new c().bar === 2 &amp;&amp; new c().baz === 3;</div>}
```
###Function.prototype.call
          
```
function(){
              <div class="code">class C extends Function {}
var c = new C(&quot;x&quot;, &quot;return this.bar + x;&quot;);
return c.call({bar:1}, 2) === 3;</div>}
```
###Function.prototype.apply
          
```
function(){
              <div class="code">class C extends Function {}
var c = new C(&quot;x&quot;, &quot;return this.bar + x;&quot;);
return c.apply({bar:1}, [2]) === 3;</div>}
```
###Function.prototype.bind
          
```
function(){
              <div class="code">class C extends Function {}
var c = new C(&quot;x&quot;, &quot;y&quot;, &quot;return this.bar + x + y;&quot;).bind({bar:1}, 2);
return c(6) === 9 &amp;&amp; c instanceof C;</div>}
```
###can be called
          
```
function(){
              <div class="code">class C extends Function {}
var c = new C(&quot;return 'foo';&quot;);
return c() === 'foo';</div>}
```
###correct prototype chain
          
```
function(){
              <div class="code">class C extends Function {}
var c = new C(&quot;return 'foo';&quot;);
return c instanceof C &amp;&amp; c instanceof Function &amp;&amp; Object.getPrototypeOf(C) === Function;</div>}
```
###can be used with &quot;new&quot;
          
```
function(){
              <div class="code">class C extends Function {}
var c = new C(&quot;this.bar = 2;&quot;);
c.prototype.baz = 3;
return new c().bar === 2 &amp;&amp; new c().baz === 3;</div>}
```
###Function.prototype.call
          
```
function(){
              <div class="code">class C extends Function {}
var c = new C(&quot;x&quot;, &quot;return this.bar + x;&quot;);
return c.call({bar:1}, 2) === 3;</div>}
```
###Function.prototype.apply
          
```
function(){
              <div class="code">class C extends Function {}
var c = new C(&quot;x&quot;, &quot;return this.bar + x;&quot;);
return c.apply({bar:1}, [2]) === 3;</div>}
```
###Function.prototype.bind
          
```
function(){
              <div class="code">class C extends Function {}
var c = new C(&quot;x&quot;, &quot;y&quot;, &quot;return this.bar + x + y;&quot;).bind({bar:1}, 2);
return c(6) === 9 &amp;&amp; c instanceof C;</div>}
```
###can be called
          
```
function(){
              <div class="code">class C extends Function {}
var c = new C(&quot;return 'foo';&quot;);
return c() === 'foo';</div>}
```
###correct prototype chain
          
```
function(){
              <div class="code">class C extends Function {}
var c = new C(&quot;return 'foo';&quot;);
return c instanceof C &amp;&amp; c instanceof Function &amp;&amp; Object.getPrototypeOf(C) === Function;</div>}
```
###can be used with &quot;new&quot;
          
```
function(){
              <div class="code">class C extends Function {}
var c = new C(&quot;this.bar = 2;&quot;);
c.prototype.baz = 3;
return new c().bar === 2 &amp;&amp; new c().baz === 3;</div>}
```
###Function.prototype.call
          
```
function(){
              <div class="code">class C extends Function {}
var c = new C(&quot;x&quot;, &quot;return this.bar + x;&quot;);
return c.call({bar:1}, 2) === 3;</div>}
```
###Function.prototype.apply
          
```
function(){
              <div class="code">class C extends Function {}
var c = new C(&quot;x&quot;, &quot;return this.bar + x;&quot;);
return c.apply({bar:1}, [2]) === 3;</div>}
```
###Function.prototype.bind
          
```
function(){
              <div class="code">class C extends Function {}
var c = new C(&quot;x&quot;, &quot;y&quot;, &quot;return this.bar + x + y;&quot;).bind({bar:1}, 2);
return c(6) === 9 &amp;&amp; c instanceof C;</div>}
```
###can be called
          
```
function(){
              <div class="code">class C extends Function {}
var c = new C(&quot;return 'foo';&quot;);
return c() === 'foo';</div>}
```
###correct prototype chain
          
```
function(){
              <div class="code">class C extends Function {}
var c = new C(&quot;return 'foo';&quot;);
return c instanceof C &amp;&amp; c instanceof Function &amp;&amp; Object.getPrototypeOf(C) === Function;</div>}
```
###can be used with &quot;new&quot;
          
```
function(){
              <div class="code">class C extends Function {}
var c = new C(&quot;this.bar = 2;&quot;);
c.prototype.baz = 3;
return new c().bar === 2 &amp;&amp; new c().baz === 3;</div>}
```
###Function.prototype.call
          
```
function(){
              <div class="code">class C extends Function {}
var c = new C(&quot;x&quot;, &quot;return this.bar + x;&quot;);
return c.call({bar:1}, 2) === 3;</div>}
```
###Function.prototype.apply
          
```
function(){
              <div class="code">class C extends Function {}
var c = new C(&quot;x&quot;, &quot;return this.bar + x;&quot;);
return c.apply({bar:1}, [2]) === 3;</div>}
```
###Function.prototype.bind
          
```
function(){
              <div class="code">class C extends Function {}
var c = new C(&quot;x&quot;, &quot;y&quot;, &quot;return this.bar + x + y;&quot;).bind({bar:1}, 2);
return c(6) === 9 &amp;&amp; c instanceof C;</div>}
```
