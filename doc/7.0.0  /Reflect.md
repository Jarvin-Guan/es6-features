###Reflect.get
          
```
function(){
              <div class="code">return Reflect.get({ qux: 987 }, &quot;qux&quot;) === 987;</div>}
```
###Reflect.set
          
```
function(){
              <div class="code">var obj = {};
Reflect.set(obj, &quot;quux&quot;, 654);
return obj.quux === 654;</div>}
```
###Reflect.has
          
```
function(){
              <div class="code">return Reflect.has({ qux: 987 }, &quot;qux&quot;);</div>}
```
###Reflect.deleteProperty
          
```
function(){
              <div class="code">var obj = { bar: 456 };
Reflect.deleteProperty(obj, &quot;bar&quot;);
return !(&quot;bar&quot; in obj);</div>}
```
###Reflect.getOwnPropertyDescriptor
          
```
function(){
              <div class="code">var obj = { baz: 789 };
var desc = Reflect.getOwnPropertyDescriptor(obj, &quot;baz&quot;);
return desc.value === 789 &amp;&amp;
  desc.configurable &amp;&amp; desc.writable &amp;&amp; desc.enumerable;</div>}
```
###Reflect.defineProperty
          
```
function(){
              <div class="code">var obj = {};
Reflect.defineProperty(obj, &quot;foo&quot;, { value: 123 });
return obj.foo === 123 &amp;&amp;
  Reflect.defineProperty(Object.freeze({}), &quot;foo&quot;, { value: 123 }) === false;</div>}
```
###Reflect.getPrototypeOf
          
```
function(){
              <div class="code">return Reflect.getPrototypeOf([]) === Array.prototype;</div>}
```
###Reflect.setPrototypeOf
          
```
function(){
              <div class="code">var obj = {};
Reflect.setPrototypeOf(obj, Array.prototype);
return obj instanceof Array;</div>}
```
###Reflect.isExtensible
          
```
function(){
              <div class="code">return Reflect.isExtensible({}) &amp;&amp;
  !Reflect.isExtensible(Object.preventExtensions({}));</div>}
```
###Reflect.preventExtensions
          
```
function(){
              <div class="code">var obj = {};
Reflect.preventExtensions(obj);
return !Object.isExtensible(obj);</div>}
```
###Reflect.ownKeys, string keys
          
```
function(){
              <div class="code">var obj = Object.create({ C: true });
obj.A = true;
Object.defineProperty(obj, 'B', { value: true, enumerable: false });

return Reflect.ownKeys(obj).sort() + '' === &quot;A,B&quot;;</div>}
```
###Reflect.ownKeys, symbol keys
          
```
function(){
              <div class="code">var s1 = Symbol(), s2 = Symbol(), s3 = Symbol();
var proto = {};
proto[s1] = true;
var obj = Object.create(proto);
obj[s2] = true;
Object.defineProperty(obj, s3, { value: true, enumerable: false });

var keys = Reflect.ownKeys(obj);
return keys.indexOf(s2) &gt;-1 &amp;&amp; keys.indexOf(s3) &gt;-1 &amp;&amp; keys.length === 2;</div>}
```
###Reflect.apply
          
```
function(){
              <div class="code">return Reflect.apply(Array.prototype.push, [1,2], [3,4,5]) === 5;</div>}
```
###Reflect.construct
          
```
function(){
              <div class="code">return Reflect.construct(function(a, b, c) {
  this.qux = a + b + c;
}, [&quot;foo&quot;, &quot;bar&quot;, &quot;baz&quot;]).qux === &quot;foobarbaz&quot;;</div>}
```
###Reflect.construct sets new.target meta-property
          
```
function(){
              <div class="code">return Reflect.construct(function(a, b, c) {
  if (new.target === Object) {
    this.qux = a + b + c;
  }
}, [&quot;foo&quot;, &quot;bar&quot;, &quot;baz&quot;], Object).qux === &quot;foobarbaz&quot;;</div>}
```
###Reflect.construct creates instances from third argument
          
```
function(){
              <div class="code">function F(){}
var obj = Reflect.construct(function(){ this.y = 1; }, [], F);
return obj.y === 1 &amp;&amp; obj instanceof F;</div>}
```
###Reflect.construct, Array subclassing
          
```
function(){
              <div class="code">function F(){}
var obj = Reflect.construct(Array, [], F);
obj[2] = 'foo';
return obj.length === 3 &amp;&amp; obj instanceof F;</div>}
```
###Reflect.construct, RegExp subclassing
          
```
function(){
              <div class="code">function F(){}
var obj = Reflect.construct(RegExp, [&quot;baz&quot;,&quot;g&quot;], F);
return RegExp.prototype.exec.call(obj, &quot;foobarbaz&quot;)[0] === &quot;baz&quot;
  &amp;&amp; obj.lastIndex === 9 &amp;&amp; obj instanceof F;</div>}
```
###Reflect.construct, Function subclassing
          
```
function(){
              <div class="code">function F(){}
var obj = Reflect.construct(Function, [&quot;return 2&quot;], F);
return obj() === 2 &amp;&amp; obj instanceof F;</div>}
```
###Reflect.construct, Promise subclassing
          
```
function(){
              <div class="code">function F(){}
var p1 = Reflect.construct(Promise,[function(resolve, reject) { resolve(&quot;foo&quot;); }], F);
var p2 = Reflect.construct(Promise,[function(resolve, reject) { reject(&quot;quux&quot;); }], F);
var score = +(p1 instanceof F &amp;&amp; p2 instanceof F);

function thenFn(result)  { score += (result === &quot;foo&quot;);  check(); }
function catchFn(result) { score += (result === &quot;quux&quot;); check(); }
function shouldNotRun(result)  { score = -Infinity;   }

p1.then = p2.then = Promise.prototype.then;
p1.catch = p2.catch = Promise.prototype.catch;

p1.then(thenFn, shouldNotRun);
p2.then(shouldNotRun, catchFn);
p1.catch(shouldNotRun);
p2.catch(catchFn);

function check() {
  if (score === 4) asyncTestPassed();
}</div>}
```
###Reflect.get
          
```
function(){
              <div class="code">return Reflect.get({ qux: 987 }, &quot;qux&quot;) === 987;</div>}
```
###Reflect.set
          
```
function(){
              <div class="code">var obj = {};
Reflect.set(obj, &quot;quux&quot;, 654);
return obj.quux === 654;</div>}
```
###Reflect.has
          
```
function(){
              <div class="code">return Reflect.has({ qux: 987 }, &quot;qux&quot;);</div>}
```
###Reflect.deleteProperty
          
```
function(){
              <div class="code">var obj = { bar: 456 };
Reflect.deleteProperty(obj, &quot;bar&quot;);
return !(&quot;bar&quot; in obj);</div>}
```
###Reflect.getOwnPropertyDescriptor
          
```
function(){
              <div class="code">var obj = { baz: 789 };
var desc = Reflect.getOwnPropertyDescriptor(obj, &quot;baz&quot;);
return desc.value === 789 &amp;&amp;
  desc.configurable &amp;&amp; desc.writable &amp;&amp; desc.enumerable;</div>}
```
###Reflect.defineProperty
          
```
function(){
              <div class="code">var obj = {};
Reflect.defineProperty(obj, &quot;foo&quot;, { value: 123 });
return obj.foo === 123 &amp;&amp;
  Reflect.defineProperty(Object.freeze({}), &quot;foo&quot;, { value: 123 }) === false;</div>}
```
###Reflect.getPrototypeOf
          
```
function(){
              <div class="code">return Reflect.getPrototypeOf([]) === Array.prototype;</div>}
```
###Reflect.setPrototypeOf
          
```
function(){
              <div class="code">var obj = {};
Reflect.setPrototypeOf(obj, Array.prototype);
return obj instanceof Array;</div>}
```
###Reflect.isExtensible
          
```
function(){
              <div class="code">return Reflect.isExtensible({}) &amp;&amp;
  !Reflect.isExtensible(Object.preventExtensions({}));</div>}
```
###Reflect.preventExtensions
          
```
function(){
              <div class="code">var obj = {};
Reflect.preventExtensions(obj);
return !Object.isExtensible(obj);</div>}
```
###Reflect.ownKeys, string keys
          
```
function(){
              <div class="code">var obj = Object.create({ C: true });
obj.A = true;
Object.defineProperty(obj, 'B', { value: true, enumerable: false });

return Reflect.ownKeys(obj).sort() + '' === &quot;A,B&quot;;</div>}
```
###Reflect.ownKeys, symbol keys
          
```
function(){
              <div class="code">var s1 = Symbol(), s2 = Symbol(), s3 = Symbol();
var proto = {};
proto[s1] = true;
var obj = Object.create(proto);
obj[s2] = true;
Object.defineProperty(obj, s3, { value: true, enumerable: false });

var keys = Reflect.ownKeys(obj);
return keys.indexOf(s2) &gt;-1 &amp;&amp; keys.indexOf(s3) &gt;-1 &amp;&amp; keys.length === 2;</div>}
```
###Reflect.apply
          
```
function(){
              <div class="code">return Reflect.apply(Array.prototype.push, [1,2], [3,4,5]) === 5;</div>}
```
###Reflect.construct
          
```
function(){
              <div class="code">return Reflect.construct(function(a, b, c) {
  this.qux = a + b + c;
}, [&quot;foo&quot;, &quot;bar&quot;, &quot;baz&quot;]).qux === &quot;foobarbaz&quot;;</div>}
```
###Reflect.construct sets new.target meta-property
          
```
function(){
              <div class="code">return Reflect.construct(function(a, b, c) {
  if (new.target === Object) {
    this.qux = a + b + c;
  }
}, [&quot;foo&quot;, &quot;bar&quot;, &quot;baz&quot;], Object).qux === &quot;foobarbaz&quot;;</div>}
```
###Reflect.construct creates instances from third argument
          
```
function(){
              <div class="code">function F(){}
var obj = Reflect.construct(function(){ this.y = 1; }, [], F);
return obj.y === 1 &amp;&amp; obj instanceof F;</div>}
```
###Reflect.construct, Array subclassing
          
```
function(){
              <div class="code">function F(){}
var obj = Reflect.construct(Array, [], F);
obj[2] = 'foo';
return obj.length === 3 &amp;&amp; obj instanceof F;</div>}
```
###Reflect.construct, RegExp subclassing
          
```
function(){
              <div class="code">function F(){}
var obj = Reflect.construct(RegExp, [&quot;baz&quot;,&quot;g&quot;], F);
return RegExp.prototype.exec.call(obj, &quot;foobarbaz&quot;)[0] === &quot;baz&quot;
  &amp;&amp; obj.lastIndex === 9 &amp;&amp; obj instanceof F;</div>}
```
###Reflect.construct, Function subclassing
          
```
function(){
              <div class="code">function F(){}
var obj = Reflect.construct(Function, [&quot;return 2&quot;], F);
return obj() === 2 &amp;&amp; obj instanceof F;</div>}
```
###Reflect.construct, Promise subclassing
          
```
function(){
              <div class="code">function F(){}
var p1 = Reflect.construct(Promise,[function(resolve, reject) { resolve(&quot;foo&quot;); }], F);
var p2 = Reflect.construct(Promise,[function(resolve, reject) { reject(&quot;quux&quot;); }], F);
var score = +(p1 instanceof F &amp;&amp; p2 instanceof F);

function thenFn(result)  { score += (result === &quot;foo&quot;);  check(); }
function catchFn(result) { score += (result === &quot;quux&quot;); check(); }
function shouldNotRun(result)  { score = -Infinity;   }

p1.then = p2.then = Promise.prototype.then;
p1.catch = p2.catch = Promise.prototype.catch;

p1.then(thenFn, shouldNotRun);
p2.then(shouldNotRun, catchFn);
p1.catch(shouldNotRun);
p2.catch(catchFn);

function check() {
  if (score === 4) asyncTestPassed();
}</div>}
```
###Reflect.get
          
```
function(){
              <div class="code">return Reflect.get({ qux: 987 }, &quot;qux&quot;) === 987;</div>}
```
###Reflect.set
          
```
function(){
              <div class="code">var obj = {};
Reflect.set(obj, &quot;quux&quot;, 654);
return obj.quux === 654;</div>}
```
###Reflect.has
          
```
function(){
              <div class="code">return Reflect.has({ qux: 987 }, &quot;qux&quot;);</div>}
```
###Reflect.deleteProperty
          
```
function(){
              <div class="code">var obj = { bar: 456 };
Reflect.deleteProperty(obj, &quot;bar&quot;);
return !(&quot;bar&quot; in obj);</div>}
```
###Reflect.getOwnPropertyDescriptor
          
```
function(){
              <div class="code">var obj = { baz: 789 };
var desc = Reflect.getOwnPropertyDescriptor(obj, &quot;baz&quot;);
return desc.value === 789 &amp;&amp;
  desc.configurable &amp;&amp; desc.writable &amp;&amp; desc.enumerable;</div>}
```
###Reflect.defineProperty
          
```
function(){
              <div class="code">var obj = {};
Reflect.defineProperty(obj, &quot;foo&quot;, { value: 123 });
return obj.foo === 123 &amp;&amp;
  Reflect.defineProperty(Object.freeze({}), &quot;foo&quot;, { value: 123 }) === false;</div>}
```
###Reflect.getPrototypeOf
          
```
function(){
              <div class="code">return Reflect.getPrototypeOf([]) === Array.prototype;</div>}
```
###Reflect.setPrototypeOf
          
```
function(){
              <div class="code">var obj = {};
Reflect.setPrototypeOf(obj, Array.prototype);
return obj instanceof Array;</div>}
```
###Reflect.isExtensible
          
```
function(){
              <div class="code">return Reflect.isExtensible({}) &amp;&amp;
  !Reflect.isExtensible(Object.preventExtensions({}));</div>}
```
###Reflect.preventExtensions
          
```
function(){
              <div class="code">var obj = {};
Reflect.preventExtensions(obj);
return !Object.isExtensible(obj);</div>}
```
###Reflect.ownKeys, string keys
          
```
function(){
              <div class="code">var obj = Object.create({ C: true });
obj.A = true;
Object.defineProperty(obj, 'B', { value: true, enumerable: false });

return Reflect.ownKeys(obj).sort() + '' === &quot;A,B&quot;;</div>}
```
###Reflect.ownKeys, symbol keys
          
```
function(){
              <div class="code">var s1 = Symbol(), s2 = Symbol(), s3 = Symbol();
var proto = {};
proto[s1] = true;
var obj = Object.create(proto);
obj[s2] = true;
Object.defineProperty(obj, s3, { value: true, enumerable: false });

var keys = Reflect.ownKeys(obj);
return keys.indexOf(s2) &gt;-1 &amp;&amp; keys.indexOf(s3) &gt;-1 &amp;&amp; keys.length === 2;</div>}
```
###Reflect.apply
          
```
function(){
              <div class="code">return Reflect.apply(Array.prototype.push, [1,2], [3,4,5]) === 5;</div>}
```
###Reflect.construct
          
```
function(){
              <div class="code">return Reflect.construct(function(a, b, c) {
  this.qux = a + b + c;
}, [&quot;foo&quot;, &quot;bar&quot;, &quot;baz&quot;]).qux === &quot;foobarbaz&quot;;</div>}
```
###Reflect.construct sets new.target meta-property
          
```
function(){
              <div class="code">return Reflect.construct(function(a, b, c) {
  if (new.target === Object) {
    this.qux = a + b + c;
  }
}, [&quot;foo&quot;, &quot;bar&quot;, &quot;baz&quot;], Object).qux === &quot;foobarbaz&quot;;</div>}
```
###Reflect.construct creates instances from third argument
          
```
function(){
              <div class="code">function F(){}
var obj = Reflect.construct(function(){ this.y = 1; }, [], F);
return obj.y === 1 &amp;&amp; obj instanceof F;</div>}
```
###Reflect.construct, Array subclassing
          
```
function(){
              <div class="code">function F(){}
var obj = Reflect.construct(Array, [], F);
obj[2] = 'foo';
return obj.length === 3 &amp;&amp; obj instanceof F;</div>}
```
###Reflect.construct, RegExp subclassing
          
```
function(){
              <div class="code">function F(){}
var obj = Reflect.construct(RegExp, [&quot;baz&quot;,&quot;g&quot;], F);
return RegExp.prototype.exec.call(obj, &quot;foobarbaz&quot;)[0] === &quot;baz&quot;
  &amp;&amp; obj.lastIndex === 9 &amp;&amp; obj instanceof F;</div>}
```
###Reflect.construct, Function subclassing
          
```
function(){
              <div class="code">function F(){}
var obj = Reflect.construct(Function, [&quot;return 2&quot;], F);
return obj() === 2 &amp;&amp; obj instanceof F;</div>}
```
###Reflect.construct, Promise subclassing
          
```
function(){
              <div class="code">function F(){}
var p1 = Reflect.construct(Promise,[function(resolve, reject) { resolve(&quot;foo&quot;); }], F);
var p2 = Reflect.construct(Promise,[function(resolve, reject) { reject(&quot;quux&quot;); }], F);
var score = +(p1 instanceof F &amp;&amp; p2 instanceof F);

function thenFn(result)  { score += (result === &quot;foo&quot;);  check(); }
function catchFn(result) { score += (result === &quot;quux&quot;); check(); }
function shouldNotRun(result)  { score = -Infinity;   }

p1.then = p2.then = Promise.prototype.then;
p1.catch = p2.catch = Promise.prototype.catch;

p1.then(thenFn, shouldNotRun);
p2.then(shouldNotRun, catchFn);
p1.catch(shouldNotRun);
p2.catch(catchFn);

function check() {
  if (score === 4) asyncTestPassed();
}</div>}
```
###Reflect.get
          
```
function(){
              <div class="code">return Reflect.get({ qux: 987 }, &quot;qux&quot;) === 987;</div>}
```
###Reflect.set
          
```
function(){
              <div class="code">var obj = {};
Reflect.set(obj, &quot;quux&quot;, 654);
return obj.quux === 654;</div>}
```
###Reflect.has
          
```
function(){
              <div class="code">return Reflect.has({ qux: 987 }, &quot;qux&quot;);</div>}
```
###Reflect.deleteProperty
          
```
function(){
              <div class="code">var obj = { bar: 456 };
Reflect.deleteProperty(obj, &quot;bar&quot;);
return !(&quot;bar&quot; in obj);</div>}
```
###Reflect.getOwnPropertyDescriptor
          
```
function(){
              <div class="code">var obj = { baz: 789 };
var desc = Reflect.getOwnPropertyDescriptor(obj, &quot;baz&quot;);
return desc.value === 789 &amp;&amp;
  desc.configurable &amp;&amp; desc.writable &amp;&amp; desc.enumerable;</div>}
```
###Reflect.defineProperty
          
```
function(){
              <div class="code">var obj = {};
Reflect.defineProperty(obj, &quot;foo&quot;, { value: 123 });
return obj.foo === 123 &amp;&amp;
  Reflect.defineProperty(Object.freeze({}), &quot;foo&quot;, { value: 123 }) === false;</div>}
```
###Reflect.getPrototypeOf
          
```
function(){
              <div class="code">return Reflect.getPrototypeOf([]) === Array.prototype;</div>}
```
###Reflect.setPrototypeOf
          
```
function(){
              <div class="code">var obj = {};
Reflect.setPrototypeOf(obj, Array.prototype);
return obj instanceof Array;</div>}
```
###Reflect.isExtensible
          
```
function(){
              <div class="code">return Reflect.isExtensible({}) &amp;&amp;
  !Reflect.isExtensible(Object.preventExtensions({}));</div>}
```
###Reflect.preventExtensions
          
```
function(){
              <div class="code">var obj = {};
Reflect.preventExtensions(obj);
return !Object.isExtensible(obj);</div>}
```
###Reflect.ownKeys, string keys
          
```
function(){
              <div class="code">var obj = Object.create({ C: true });
obj.A = true;
Object.defineProperty(obj, 'B', { value: true, enumerable: false });

return Reflect.ownKeys(obj).sort() + '' === &quot;A,B&quot;;</div>}
```
###Reflect.ownKeys, symbol keys
          
```
function(){
              <div class="code">var s1 = Symbol(), s2 = Symbol(), s3 = Symbol();
var proto = {};
proto[s1] = true;
var obj = Object.create(proto);
obj[s2] = true;
Object.defineProperty(obj, s3, { value: true, enumerable: false });

var keys = Reflect.ownKeys(obj);
return keys.indexOf(s2) &gt;-1 &amp;&amp; keys.indexOf(s3) &gt;-1 &amp;&amp; keys.length === 2;</div>}
```
###Reflect.apply
          
```
function(){
              <div class="code">return Reflect.apply(Array.prototype.push, [1,2], [3,4,5]) === 5;</div>}
```
###Reflect.construct
          
```
function(){
              <div class="code">return Reflect.construct(function(a, b, c) {
  this.qux = a + b + c;
}, [&quot;foo&quot;, &quot;bar&quot;, &quot;baz&quot;]).qux === &quot;foobarbaz&quot;;</div>}
```
###Reflect.construct sets new.target meta-property
          
```
function(){
              <div class="code">return Reflect.construct(function(a, b, c) {
  if (new.target === Object) {
    this.qux = a + b + c;
  }
}, [&quot;foo&quot;, &quot;bar&quot;, &quot;baz&quot;], Object).qux === &quot;foobarbaz&quot;;</div>}
```
###Reflect.construct creates instances from third argument
          
```
function(){
              <div class="code">function F(){}
var obj = Reflect.construct(function(){ this.y = 1; }, [], F);
return obj.y === 1 &amp;&amp; obj instanceof F;</div>}
```
###Reflect.construct, Array subclassing
          
```
function(){
              <div class="code">function F(){}
var obj = Reflect.construct(Array, [], F);
obj[2] = 'foo';
return obj.length === 3 &amp;&amp; obj instanceof F;</div>}
```
###Reflect.construct, RegExp subclassing
          
```
function(){
              <div class="code">function F(){}
var obj = Reflect.construct(RegExp, [&quot;baz&quot;,&quot;g&quot;], F);
return RegExp.prototype.exec.call(obj, &quot;foobarbaz&quot;)[0] === &quot;baz&quot;
  &amp;&amp; obj.lastIndex === 9 &amp;&amp; obj instanceof F;</div>}
```
###Reflect.construct, Function subclassing
          
```
function(){
              <div class="code">function F(){}
var obj = Reflect.construct(Function, [&quot;return 2&quot;], F);
return obj() === 2 &amp;&amp; obj instanceof F;</div>}
```
###Reflect.construct, Promise subclassing
          
```
function(){
              <div class="code">function F(){}
var p1 = Reflect.construct(Promise,[function(resolve, reject) { resolve(&quot;foo&quot;); }], F);
var p2 = Reflect.construct(Promise,[function(resolve, reject) { reject(&quot;quux&quot;); }], F);
var score = +(p1 instanceof F &amp;&amp; p2 instanceof F);

function thenFn(result)  { score += (result === &quot;foo&quot;);  check(); }
function catchFn(result) { score += (result === &quot;quux&quot;); check(); }
function shouldNotRun(result)  { score = -Infinity;   }

p1.then = p2.then = Promise.prototype.then;
p1.catch = p2.catch = Promise.prototype.catch;

p1.then(thenFn, shouldNotRun);
p2.then(shouldNotRun, catchFn);
p1.catch(shouldNotRun);
p2.catch(catchFn);

function check() {
  if (score === 4) asyncTestPassed();
}</div>}
```
###Reflect.get
          
```
function(){
              <div class="code">return Reflect.get({ qux: 987 }, &quot;qux&quot;) === 987;</div>}
```
###Reflect.set
          
```
function(){
              <div class="code">var obj = {};
Reflect.set(obj, &quot;quux&quot;, 654);
return obj.quux === 654;</div>}
```
###Reflect.has
          
```
function(){
              <div class="code">return Reflect.has({ qux: 987 }, &quot;qux&quot;);</div>}
```
###Reflect.deleteProperty
          
```
function(){
              <div class="code">var obj = { bar: 456 };
Reflect.deleteProperty(obj, &quot;bar&quot;);
return !(&quot;bar&quot; in obj);</div>}
```
###Reflect.getOwnPropertyDescriptor
          
```
function(){
              <div class="code">var obj = { baz: 789 };
var desc = Reflect.getOwnPropertyDescriptor(obj, &quot;baz&quot;);
return desc.value === 789 &amp;&amp;
  desc.configurable &amp;&amp; desc.writable &amp;&amp; desc.enumerable;</div>}
```
###Reflect.defineProperty
          
```
function(){
              <div class="code">var obj = {};
Reflect.defineProperty(obj, &quot;foo&quot;, { value: 123 });
return obj.foo === 123 &amp;&amp;
  Reflect.defineProperty(Object.freeze({}), &quot;foo&quot;, { value: 123 }) === false;</div>}
```
###Reflect.getPrototypeOf
          
```
function(){
              <div class="code">return Reflect.getPrototypeOf([]) === Array.prototype;</div>}
```
###Reflect.setPrototypeOf
          
```
function(){
              <div class="code">var obj = {};
Reflect.setPrototypeOf(obj, Array.prototype);
return obj instanceof Array;</div>}
```
###Reflect.isExtensible
          
```
function(){
              <div class="code">return Reflect.isExtensible({}) &amp;&amp;
  !Reflect.isExtensible(Object.preventExtensions({}));</div>}
```
###Reflect.preventExtensions
          
```
function(){
              <div class="code">var obj = {};
Reflect.preventExtensions(obj);
return !Object.isExtensible(obj);</div>}
```
###Reflect.ownKeys, string keys
          
```
function(){
              <div class="code">var obj = Object.create({ C: true });
obj.A = true;
Object.defineProperty(obj, 'B', { value: true, enumerable: false });

return Reflect.ownKeys(obj).sort() + '' === &quot;A,B&quot;;</div>}
```
###Reflect.ownKeys, symbol keys
          
```
function(){
              <div class="code">var s1 = Symbol(), s2 = Symbol(), s3 = Symbol();
var proto = {};
proto[s1] = true;
var obj = Object.create(proto);
obj[s2] = true;
Object.defineProperty(obj, s3, { value: true, enumerable: false });

var keys = Reflect.ownKeys(obj);
return keys.indexOf(s2) &gt;-1 &amp;&amp; keys.indexOf(s3) &gt;-1 &amp;&amp; keys.length === 2;</div>}
```
###Reflect.apply
          
```
function(){
              <div class="code">return Reflect.apply(Array.prototype.push, [1,2], [3,4,5]) === 5;</div>}
```
###Reflect.construct
          
```
function(){
              <div class="code">return Reflect.construct(function(a, b, c) {
  this.qux = a + b + c;
}, [&quot;foo&quot;, &quot;bar&quot;, &quot;baz&quot;]).qux === &quot;foobarbaz&quot;;</div>}
```
###Reflect.construct sets new.target meta-property
          
```
function(){
              <div class="code">return Reflect.construct(function(a, b, c) {
  if (new.target === Object) {
    this.qux = a + b + c;
  }
}, [&quot;foo&quot;, &quot;bar&quot;, &quot;baz&quot;], Object).qux === &quot;foobarbaz&quot;;</div>}
```
###Reflect.construct creates instances from third argument
          
```
function(){
              <div class="code">function F(){}
var obj = Reflect.construct(function(){ this.y = 1; }, [], F);
return obj.y === 1 &amp;&amp; obj instanceof F;</div>}
```
###Reflect.construct, Array subclassing
          
```
function(){
              <div class="code">function F(){}
var obj = Reflect.construct(Array, [], F);
obj[2] = 'foo';
return obj.length === 3 &amp;&amp; obj instanceof F;</div>}
```
###Reflect.construct, RegExp subclassing
          
```
function(){
              <div class="code">function F(){}
var obj = Reflect.construct(RegExp, [&quot;baz&quot;,&quot;g&quot;], F);
return RegExp.prototype.exec.call(obj, &quot;foobarbaz&quot;)[0] === &quot;baz&quot;
  &amp;&amp; obj.lastIndex === 9 &amp;&amp; obj instanceof F;</div>}
```
###Reflect.construct, Function subclassing
          
```
function(){
              <div class="code">function F(){}
var obj = Reflect.construct(Function, [&quot;return 2&quot;], F);
return obj() === 2 &amp;&amp; obj instanceof F;</div>}
```
###Reflect.construct, Promise subclassing
          
```
function(){
              <div class="code">function F(){}
var p1 = Reflect.construct(Promise,[function(resolve, reject) { resolve(&quot;foo&quot;); }], F);
var p2 = Reflect.construct(Promise,[function(resolve, reject) { reject(&quot;quux&quot;); }], F);
var score = +(p1 instanceof F &amp;&amp; p2 instanceof F);

function thenFn(result)  { score += (result === &quot;foo&quot;);  check(); }
function catchFn(result) { score += (result === &quot;quux&quot;); check(); }
function shouldNotRun(result)  { score = -Infinity;   }

p1.then = p2.then = Promise.prototype.then;
p1.catch = p2.catch = Promise.prototype.catch;

p1.then(thenFn, shouldNotRun);
p2.then(shouldNotRun, catchFn);
p1.catch(shouldNotRun);
p2.catch(catchFn);

function check() {
  if (score === 4) asyncTestPassed();
}</div>}
```
###Reflect.get
          
```
function(){
              <div class="code">return Reflect.get({ qux: 987 }, &quot;qux&quot;) === 987;</div>}
```
###Reflect.set
          
```
function(){
              <div class="code">var obj = {};
Reflect.set(obj, &quot;quux&quot;, 654);
return obj.quux === 654;</div>}
```
###Reflect.has
          
```
function(){
              <div class="code">return Reflect.has({ qux: 987 }, &quot;qux&quot;);</div>}
```
###Reflect.deleteProperty
          
```
function(){
              <div class="code">var obj = { bar: 456 };
Reflect.deleteProperty(obj, &quot;bar&quot;);
return !(&quot;bar&quot; in obj);</div>}
```
###Reflect.getOwnPropertyDescriptor
          
```
function(){
              <div class="code">var obj = { baz: 789 };
var desc = Reflect.getOwnPropertyDescriptor(obj, &quot;baz&quot;);
return desc.value === 789 &amp;&amp;
  desc.configurable &amp;&amp; desc.writable &amp;&amp; desc.enumerable;</div>}
```
###Reflect.defineProperty
          
```
function(){
              <div class="code">var obj = {};
Reflect.defineProperty(obj, &quot;foo&quot;, { value: 123 });
return obj.foo === 123 &amp;&amp;
  Reflect.defineProperty(Object.freeze({}), &quot;foo&quot;, { value: 123 }) === false;</div>}
```
###Reflect.getPrototypeOf
          
```
function(){
              <div class="code">return Reflect.getPrototypeOf([]) === Array.prototype;</div>}
```
###Reflect.setPrototypeOf
          
```
function(){
              <div class="code">var obj = {};
Reflect.setPrototypeOf(obj, Array.prototype);
return obj instanceof Array;</div>}
```
###Reflect.isExtensible
          
```
function(){
              <div class="code">return Reflect.isExtensible({}) &amp;&amp;
  !Reflect.isExtensible(Object.preventExtensions({}));</div>}
```
###Reflect.preventExtensions
          
```
function(){
              <div class="code">var obj = {};
Reflect.preventExtensions(obj);
return !Object.isExtensible(obj);</div>}
```
###Reflect.ownKeys, string keys
          
```
function(){
              <div class="code">var obj = Object.create({ C: true });
obj.A = true;
Object.defineProperty(obj, 'B', { value: true, enumerable: false });

return Reflect.ownKeys(obj).sort() + '' === &quot;A,B&quot;;</div>}
```
###Reflect.ownKeys, symbol keys
          
```
function(){
              <div class="code">var s1 = Symbol(), s2 = Symbol(), s3 = Symbol();
var proto = {};
proto[s1] = true;
var obj = Object.create(proto);
obj[s2] = true;
Object.defineProperty(obj, s3, { value: true, enumerable: false });

var keys = Reflect.ownKeys(obj);
return keys.indexOf(s2) &gt;-1 &amp;&amp; keys.indexOf(s3) &gt;-1 &amp;&amp; keys.length === 2;</div>}
```
###Reflect.apply
          
```
function(){
              <div class="code">return Reflect.apply(Array.prototype.push, [1,2], [3,4,5]) === 5;</div>}
```
###Reflect.construct
          
```
function(){
              <div class="code">return Reflect.construct(function(a, b, c) {
  this.qux = a + b + c;
}, [&quot;foo&quot;, &quot;bar&quot;, &quot;baz&quot;]).qux === &quot;foobarbaz&quot;;</div>}
```
###Reflect.construct sets new.target meta-property
          
```
function(){
              <div class="code">return Reflect.construct(function(a, b, c) {
  if (new.target === Object) {
    this.qux = a + b + c;
  }
}, [&quot;foo&quot;, &quot;bar&quot;, &quot;baz&quot;], Object).qux === &quot;foobarbaz&quot;;</div>}
```
###Reflect.construct creates instances from third argument
          
```
function(){
              <div class="code">function F(){}
var obj = Reflect.construct(function(){ this.y = 1; }, [], F);
return obj.y === 1 &amp;&amp; obj instanceof F;</div>}
```
###Reflect.construct, Array subclassing
          
```
function(){
              <div class="code">function F(){}
var obj = Reflect.construct(Array, [], F);
obj[2] = 'foo';
return obj.length === 3 &amp;&amp; obj instanceof F;</div>}
```
###Reflect.construct, RegExp subclassing
          
```
function(){
              <div class="code">function F(){}
var obj = Reflect.construct(RegExp, [&quot;baz&quot;,&quot;g&quot;], F);
return RegExp.prototype.exec.call(obj, &quot;foobarbaz&quot;)[0] === &quot;baz&quot;
  &amp;&amp; obj.lastIndex === 9 &amp;&amp; obj instanceof F;</div>}
```
###Reflect.construct, Function subclassing
          
```
function(){
              <div class="code">function F(){}
var obj = Reflect.construct(Function, [&quot;return 2&quot;], F);
return obj() === 2 &amp;&amp; obj instanceof F;</div>}
```
###Reflect.construct, Promise subclassing
          
```
function(){
              <div class="code">function F(){}
var p1 = Reflect.construct(Promise,[function(resolve, reject) { resolve(&quot;foo&quot;); }], F);
var p2 = Reflect.construct(Promise,[function(resolve, reject) { reject(&quot;quux&quot;); }], F);
var score = +(p1 instanceof F &amp;&amp; p2 instanceof F);

function thenFn(result)  { score += (result === &quot;foo&quot;);  check(); }
function catchFn(result) { score += (result === &quot;quux&quot;); check(); }
function shouldNotRun(result)  { score = -Infinity;   }

p1.then = p2.then = Promise.prototype.then;
p1.catch = p2.catch = Promise.prototype.catch;

p1.then(thenFn, shouldNotRun);
p2.then(shouldNotRun, catchFn);
p1.catch(shouldNotRun);
p2.catch(catchFn);

function check() {
  if (score === 4) asyncTestPassed();
}</div>}
```
###Reflect.get
          
```
function(){
              <div class="code">return Reflect.get({ qux: 987 }, &quot;qux&quot;) === 987;</div>}
```
###Reflect.set
          
```
function(){
              <div class="code">var obj = {};
Reflect.set(obj, &quot;quux&quot;, 654);
return obj.quux === 654;</div>}
```
###Reflect.has
          
```
function(){
              <div class="code">return Reflect.has({ qux: 987 }, &quot;qux&quot;);</div>}
```
###Reflect.deleteProperty
          
```
function(){
              <div class="code">var obj = { bar: 456 };
Reflect.deleteProperty(obj, &quot;bar&quot;);
return !(&quot;bar&quot; in obj);</div>}
```
###Reflect.getOwnPropertyDescriptor
          
```
function(){
              <div class="code">var obj = { baz: 789 };
var desc = Reflect.getOwnPropertyDescriptor(obj, &quot;baz&quot;);
return desc.value === 789 &amp;&amp;
  desc.configurable &amp;&amp; desc.writable &amp;&amp; desc.enumerable;</div>}
```
###Reflect.defineProperty
          
```
function(){
              <div class="code">var obj = {};
Reflect.defineProperty(obj, &quot;foo&quot;, { value: 123 });
return obj.foo === 123 &amp;&amp;
  Reflect.defineProperty(Object.freeze({}), &quot;foo&quot;, { value: 123 }) === false;</div>}
```
###Reflect.getPrototypeOf
          
```
function(){
              <div class="code">return Reflect.getPrototypeOf([]) === Array.prototype;</div>}
```
###Reflect.setPrototypeOf
          
```
function(){
              <div class="code">var obj = {};
Reflect.setPrototypeOf(obj, Array.prototype);
return obj instanceof Array;</div>}
```
###Reflect.isExtensible
          
```
function(){
              <div class="code">return Reflect.isExtensible({}) &amp;&amp;
  !Reflect.isExtensible(Object.preventExtensions({}));</div>}
```
###Reflect.preventExtensions
          
```
function(){
              <div class="code">var obj = {};
Reflect.preventExtensions(obj);
return !Object.isExtensible(obj);</div>}
```
###Reflect.ownKeys, string keys
          
```
function(){
              <div class="code">var obj = Object.create({ C: true });
obj.A = true;
Object.defineProperty(obj, 'B', { value: true, enumerable: false });

return Reflect.ownKeys(obj).sort() + '' === &quot;A,B&quot;;</div>}
```
###Reflect.ownKeys, symbol keys
          
```
function(){
              <div class="code">var s1 = Symbol(), s2 = Symbol(), s3 = Symbol();
var proto = {};
proto[s1] = true;
var obj = Object.create(proto);
obj[s2] = true;
Object.defineProperty(obj, s3, { value: true, enumerable: false });

var keys = Reflect.ownKeys(obj);
return keys.indexOf(s2) &gt;-1 &amp;&amp; keys.indexOf(s3) &gt;-1 &amp;&amp; keys.length === 2;</div>}
```
###Reflect.apply
          
```
function(){
              <div class="code">return Reflect.apply(Array.prototype.push, [1,2], [3,4,5]) === 5;</div>}
```
###Reflect.construct
          
```
function(){
              <div class="code">return Reflect.construct(function(a, b, c) {
  this.qux = a + b + c;
}, [&quot;foo&quot;, &quot;bar&quot;, &quot;baz&quot;]).qux === &quot;foobarbaz&quot;;</div>}
```
###Reflect.construct sets new.target meta-property
          
```
function(){
              <div class="code">return Reflect.construct(function(a, b, c) {
  if (new.target === Object) {
    this.qux = a + b + c;
  }
}, [&quot;foo&quot;, &quot;bar&quot;, &quot;baz&quot;], Object).qux === &quot;foobarbaz&quot;;</div>}
```
###Reflect.construct creates instances from third argument
          
```
function(){
              <div class="code">function F(){}
var obj = Reflect.construct(function(){ this.y = 1; }, [], F);
return obj.y === 1 &amp;&amp; obj instanceof F;</div>}
```
###Reflect.construct, Array subclassing
          
```
function(){
              <div class="code">function F(){}
var obj = Reflect.construct(Array, [], F);
obj[2] = 'foo';
return obj.length === 3 &amp;&amp; obj instanceof F;</div>}
```
###Reflect.construct, RegExp subclassing
          
```
function(){
              <div class="code">function F(){}
var obj = Reflect.construct(RegExp, [&quot;baz&quot;,&quot;g&quot;], F);
return RegExp.prototype.exec.call(obj, &quot;foobarbaz&quot;)[0] === &quot;baz&quot;
  &amp;&amp; obj.lastIndex === 9 &amp;&amp; obj instanceof F;</div>}
```
###Reflect.construct, Function subclassing
          
```
function(){
              <div class="code">function F(){}
var obj = Reflect.construct(Function, [&quot;return 2&quot;], F);
return obj() === 2 &amp;&amp; obj instanceof F;</div>}
```
###Reflect.construct, Promise subclassing
          
```
function(){
              <div class="code">function F(){}
var p1 = Reflect.construct(Promise,[function(resolve, reject) { resolve(&quot;foo&quot;); }], F);
var p2 = Reflect.construct(Promise,[function(resolve, reject) { reject(&quot;quux&quot;); }], F);
var score = +(p1 instanceof F &amp;&amp; p2 instanceof F);

function thenFn(result)  { score += (result === &quot;foo&quot;);  check(); }
function catchFn(result) { score += (result === &quot;quux&quot;); check(); }
function shouldNotRun(result)  { score = -Infinity;   }

p1.then = p2.then = Promise.prototype.then;
p1.catch = p2.catch = Promise.prototype.catch;

p1.then(thenFn, shouldNotRun);
p2.then(shouldNotRun, catchFn);
p1.catch(shouldNotRun);
p2.catch(catchFn);

function check() {
  if (score === 4) asyncTestPassed();
}</div>}
```
###Reflect.get
          
```
function(){
              <div class="code">return Reflect.get({ qux: 987 }, &quot;qux&quot;) === 987;</div>}
```
###Reflect.set
          
```
function(){
              <div class="code">var obj = {};
Reflect.set(obj, &quot;quux&quot;, 654);
return obj.quux === 654;</div>}
```
###Reflect.has
          
```
function(){
              <div class="code">return Reflect.has({ qux: 987 }, &quot;qux&quot;);</div>}
```
###Reflect.deleteProperty
          
```
function(){
              <div class="code">var obj = { bar: 456 };
Reflect.deleteProperty(obj, &quot;bar&quot;);
return !(&quot;bar&quot; in obj);</div>}
```
###Reflect.getOwnPropertyDescriptor
          
```
function(){
              <div class="code">var obj = { baz: 789 };
var desc = Reflect.getOwnPropertyDescriptor(obj, &quot;baz&quot;);
return desc.value === 789 &amp;&amp;
  desc.configurable &amp;&amp; desc.writable &amp;&amp; desc.enumerable;</div>}
```
###Reflect.defineProperty
          
```
function(){
              <div class="code">var obj = {};
Reflect.defineProperty(obj, &quot;foo&quot;, { value: 123 });
return obj.foo === 123 &amp;&amp;
  Reflect.defineProperty(Object.freeze({}), &quot;foo&quot;, { value: 123 }) === false;</div>}
```
###Reflect.getPrototypeOf
          
```
function(){
              <div class="code">return Reflect.getPrototypeOf([]) === Array.prototype;</div>}
```
###Reflect.setPrototypeOf
          
```
function(){
              <div class="code">var obj = {};
Reflect.setPrototypeOf(obj, Array.prototype);
return obj instanceof Array;</div>}
```
###Reflect.isExtensible
          
```
function(){
              <div class="code">return Reflect.isExtensible({}) &amp;&amp;
  !Reflect.isExtensible(Object.preventExtensions({}));</div>}
```
###Reflect.preventExtensions
          
```
function(){
              <div class="code">var obj = {};
Reflect.preventExtensions(obj);
return !Object.isExtensible(obj);</div>}
```
###Reflect.ownKeys, string keys
          
```
function(){
              <div class="code">var obj = Object.create({ C: true });
obj.A = true;
Object.defineProperty(obj, 'B', { value: true, enumerable: false });

return Reflect.ownKeys(obj).sort() + '' === &quot;A,B&quot;;</div>}
```
###Reflect.ownKeys, symbol keys
          
```
function(){
              <div class="code">var s1 = Symbol(), s2 = Symbol(), s3 = Symbol();
var proto = {};
proto[s1] = true;
var obj = Object.create(proto);
obj[s2] = true;
Object.defineProperty(obj, s3, { value: true, enumerable: false });

var keys = Reflect.ownKeys(obj);
return keys.indexOf(s2) &gt;-1 &amp;&amp; keys.indexOf(s3) &gt;-1 &amp;&amp; keys.length === 2;</div>}
```
###Reflect.apply
          
```
function(){
              <div class="code">return Reflect.apply(Array.prototype.push, [1,2], [3,4,5]) === 5;</div>}
```
###Reflect.construct
          
```
function(){
              <div class="code">return Reflect.construct(function(a, b, c) {
  this.qux = a + b + c;
}, [&quot;foo&quot;, &quot;bar&quot;, &quot;baz&quot;]).qux === &quot;foobarbaz&quot;;</div>}
```
###Reflect.construct sets new.target meta-property
          
```
function(){
              <div class="code">return Reflect.construct(function(a, b, c) {
  if (new.target === Object) {
    this.qux = a + b + c;
  }
}, [&quot;foo&quot;, &quot;bar&quot;, &quot;baz&quot;], Object).qux === &quot;foobarbaz&quot;;</div>}
```
###Reflect.construct creates instances from third argument
          
```
function(){
              <div class="code">function F(){}
var obj = Reflect.construct(function(){ this.y = 1; }, [], F);
return obj.y === 1 &amp;&amp; obj instanceof F;</div>}
```
###Reflect.construct, Array subclassing
          
```
function(){
              <div class="code">function F(){}
var obj = Reflect.construct(Array, [], F);
obj[2] = 'foo';
return obj.length === 3 &amp;&amp; obj instanceof F;</div>}
```
###Reflect.construct, RegExp subclassing
          
```
function(){
              <div class="code">function F(){}
var obj = Reflect.construct(RegExp, [&quot;baz&quot;,&quot;g&quot;], F);
return RegExp.prototype.exec.call(obj, &quot;foobarbaz&quot;)[0] === &quot;baz&quot;
  &amp;&amp; obj.lastIndex === 9 &amp;&amp; obj instanceof F;</div>}
```
###Reflect.construct, Function subclassing
          
```
function(){
              <div class="code">function F(){}
var obj = Reflect.construct(Function, [&quot;return 2&quot;], F);
return obj() === 2 &amp;&amp; obj instanceof F;</div>}
```
###Reflect.construct, Promise subclassing
          
```
function(){
              <div class="code">function F(){}
var p1 = Reflect.construct(Promise,[function(resolve, reject) { resolve(&quot;foo&quot;); }], F);
var p2 = Reflect.construct(Promise,[function(resolve, reject) { reject(&quot;quux&quot;); }], F);
var score = +(p1 instanceof F &amp;&amp; p2 instanceof F);

function thenFn(result)  { score += (result === &quot;foo&quot;);  check(); }
function catchFn(result) { score += (result === &quot;quux&quot;); check(); }
function shouldNotRun(result)  { score = -Infinity;   }

p1.then = p2.then = Promise.prototype.then;
p1.catch = p2.catch = Promise.prototype.catch;

p1.then(thenFn, shouldNotRun);
p2.then(shouldNotRun, catchFn);
p1.catch(shouldNotRun);
p2.catch(catchFn);

function check() {
  if (score === 4) asyncTestPassed();
}</div>}
```
###Reflect.get
          
```
function(){
              <div class="code">return Reflect.get({ qux: 987 }, &quot;qux&quot;) === 987;</div>}
```
###Reflect.set
          
```
function(){
              <div class="code">var obj = {};
Reflect.set(obj, &quot;quux&quot;, 654);
return obj.quux === 654;</div>}
```
###Reflect.has
          
```
function(){
              <div class="code">return Reflect.has({ qux: 987 }, &quot;qux&quot;);</div>}
```
###Reflect.deleteProperty
          
```
function(){
              <div class="code">var obj = { bar: 456 };
Reflect.deleteProperty(obj, &quot;bar&quot;);
return !(&quot;bar&quot; in obj);</div>}
```
###Reflect.getOwnPropertyDescriptor
          
```
function(){
              <div class="code">var obj = { baz: 789 };
var desc = Reflect.getOwnPropertyDescriptor(obj, &quot;baz&quot;);
return desc.value === 789 &amp;&amp;
  desc.configurable &amp;&amp; desc.writable &amp;&amp; desc.enumerable;</div>}
```
###Reflect.defineProperty
          
```
function(){
              <div class="code">var obj = {};
Reflect.defineProperty(obj, &quot;foo&quot;, { value: 123 });
return obj.foo === 123 &amp;&amp;
  Reflect.defineProperty(Object.freeze({}), &quot;foo&quot;, { value: 123 }) === false;</div>}
```
###Reflect.getPrototypeOf
          
```
function(){
              <div class="code">return Reflect.getPrototypeOf([]) === Array.prototype;</div>}
```
###Reflect.setPrototypeOf
          
```
function(){
              <div class="code">var obj = {};
Reflect.setPrototypeOf(obj, Array.prototype);
return obj instanceof Array;</div>}
```
###Reflect.isExtensible
          
```
function(){
              <div class="code">return Reflect.isExtensible({}) &amp;&amp;
  !Reflect.isExtensible(Object.preventExtensions({}));</div>}
```
###Reflect.preventExtensions
          
```
function(){
              <div class="code">var obj = {};
Reflect.preventExtensions(obj);
return !Object.isExtensible(obj);</div>}
```
###Reflect.ownKeys, string keys
          
```
function(){
              <div class="code">var obj = Object.create({ C: true });
obj.A = true;
Object.defineProperty(obj, 'B', { value: true, enumerable: false });

return Reflect.ownKeys(obj).sort() + '' === &quot;A,B&quot;;</div>}
```
###Reflect.ownKeys, symbol keys
          
```
function(){
              <div class="code">var s1 = Symbol(), s2 = Symbol(), s3 = Symbol();
var proto = {};
proto[s1] = true;
var obj = Object.create(proto);
obj[s2] = true;
Object.defineProperty(obj, s3, { value: true, enumerable: false });

var keys = Reflect.ownKeys(obj);
return keys.indexOf(s2) &gt;-1 &amp;&amp; keys.indexOf(s3) &gt;-1 &amp;&amp; keys.length === 2;</div>}
```
###Reflect.apply
          
```
function(){
              <div class="code">return Reflect.apply(Array.prototype.push, [1,2], [3,4,5]) === 5;</div>}
```
###Reflect.construct
          
```
function(){
              <div class="code">return Reflect.construct(function(a, b, c) {
  this.qux = a + b + c;
}, [&quot;foo&quot;, &quot;bar&quot;, &quot;baz&quot;]).qux === &quot;foobarbaz&quot;;</div>}
```
###Reflect.construct sets new.target meta-property
          
```
function(){
              <div class="code">return Reflect.construct(function(a, b, c) {
  if (new.target === Object) {
    this.qux = a + b + c;
  }
}, [&quot;foo&quot;, &quot;bar&quot;, &quot;baz&quot;], Object).qux === &quot;foobarbaz&quot;;</div>}
```
###Reflect.construct creates instances from third argument
          
```
function(){
              <div class="code">function F(){}
var obj = Reflect.construct(function(){ this.y = 1; }, [], F);
return obj.y === 1 &amp;&amp; obj instanceof F;</div>}
```
###Reflect.construct, Array subclassing
          
```
function(){
              <div class="code">function F(){}
var obj = Reflect.construct(Array, [], F);
obj[2] = 'foo';
return obj.length === 3 &amp;&amp; obj instanceof F;</div>}
```
###Reflect.construct, RegExp subclassing
          
```
function(){
              <div class="code">function F(){}
var obj = Reflect.construct(RegExp, [&quot;baz&quot;,&quot;g&quot;], F);
return RegExp.prototype.exec.call(obj, &quot;foobarbaz&quot;)[0] === &quot;baz&quot;
  &amp;&amp; obj.lastIndex === 9 &amp;&amp; obj instanceof F;</div>}
```
###Reflect.construct, Function subclassing
          
```
function(){
              <div class="code">function F(){}
var obj = Reflect.construct(Function, [&quot;return 2&quot;], F);
return obj() === 2 &amp;&amp; obj instanceof F;</div>}
```
###Reflect.construct, Promise subclassing
          
```
function(){
              <div class="code">function F(){}
var p1 = Reflect.construct(Promise,[function(resolve, reject) { resolve(&quot;foo&quot;); }], F);
var p2 = Reflect.construct(Promise,[function(resolve, reject) { reject(&quot;quux&quot;); }], F);
var score = +(p1 instanceof F &amp;&amp; p2 instanceof F);

function thenFn(result)  { score += (result === &quot;foo&quot;);  check(); }
function catchFn(result) { score += (result === &quot;quux&quot;); check(); }
function shouldNotRun(result)  { score = -Infinity;   }

p1.then = p2.then = Promise.prototype.then;
p1.catch = p2.catch = Promise.prototype.catch;

p1.then(thenFn, shouldNotRun);
p2.then(shouldNotRun, catchFn);
p1.catch(shouldNotRun);
p2.catch(catchFn);

function check() {
  if (score === 4) asyncTestPassed();
}</div>}
```
###Reflect.get
          
```
function(){
              <div class="code">return Reflect.get({ qux: 987 }, &quot;qux&quot;) === 987;</div>}
```
###Reflect.set
          
```
function(){
              <div class="code">var obj = {};
Reflect.set(obj, &quot;quux&quot;, 654);
return obj.quux === 654;</div>}
```
###Reflect.has
          
```
function(){
              <div class="code">return Reflect.has({ qux: 987 }, &quot;qux&quot;);</div>}
```
###Reflect.deleteProperty
          
```
function(){
              <div class="code">var obj = { bar: 456 };
Reflect.deleteProperty(obj, &quot;bar&quot;);
return !(&quot;bar&quot; in obj);</div>}
```
###Reflect.getOwnPropertyDescriptor
          
```
function(){
              <div class="code">var obj = { baz: 789 };
var desc = Reflect.getOwnPropertyDescriptor(obj, &quot;baz&quot;);
return desc.value === 789 &amp;&amp;
  desc.configurable &amp;&amp; desc.writable &amp;&amp; desc.enumerable;</div>}
```
###Reflect.defineProperty
          
```
function(){
              <div class="code">var obj = {};
Reflect.defineProperty(obj, &quot;foo&quot;, { value: 123 });
return obj.foo === 123 &amp;&amp;
  Reflect.defineProperty(Object.freeze({}), &quot;foo&quot;, { value: 123 }) === false;</div>}
```
###Reflect.getPrototypeOf
          
```
function(){
              <div class="code">return Reflect.getPrototypeOf([]) === Array.prototype;</div>}
```
###Reflect.setPrototypeOf
          
```
function(){
              <div class="code">var obj = {};
Reflect.setPrototypeOf(obj, Array.prototype);
return obj instanceof Array;</div>}
```
###Reflect.isExtensible
          
```
function(){
              <div class="code">return Reflect.isExtensible({}) &amp;&amp;
  !Reflect.isExtensible(Object.preventExtensions({}));</div>}
```
###Reflect.preventExtensions
          
```
function(){
              <div class="code">var obj = {};
Reflect.preventExtensions(obj);
return !Object.isExtensible(obj);</div>}
```
###Reflect.ownKeys, string keys
          
```
function(){
              <div class="code">var obj = Object.create({ C: true });
obj.A = true;
Object.defineProperty(obj, 'B', { value: true, enumerable: false });

return Reflect.ownKeys(obj).sort() + '' === &quot;A,B&quot;;</div>}
```
###Reflect.ownKeys, symbol keys
          
```
function(){
              <div class="code">var s1 = Symbol(), s2 = Symbol(), s3 = Symbol();
var proto = {};
proto[s1] = true;
var obj = Object.create(proto);
obj[s2] = true;
Object.defineProperty(obj, s3, { value: true, enumerable: false });

var keys = Reflect.ownKeys(obj);
return keys.indexOf(s2) &gt;-1 &amp;&amp; keys.indexOf(s3) &gt;-1 &amp;&amp; keys.length === 2;</div>}
```
###Reflect.apply
          
```
function(){
              <div class="code">return Reflect.apply(Array.prototype.push, [1,2], [3,4,5]) === 5;</div>}
```
###Reflect.construct
          
```
function(){
              <div class="code">return Reflect.construct(function(a, b, c) {
  this.qux = a + b + c;
}, [&quot;foo&quot;, &quot;bar&quot;, &quot;baz&quot;]).qux === &quot;foobarbaz&quot;;</div>}
```
###Reflect.construct sets new.target meta-property
          
```
function(){
              <div class="code">return Reflect.construct(function(a, b, c) {
  if (new.target === Object) {
    this.qux = a + b + c;
  }
}, [&quot;foo&quot;, &quot;bar&quot;, &quot;baz&quot;], Object).qux === &quot;foobarbaz&quot;;</div>}
```
###Reflect.construct creates instances from third argument
          
```
function(){
              <div class="code">function F(){}
var obj = Reflect.construct(function(){ this.y = 1; }, [], F);
return obj.y === 1 &amp;&amp; obj instanceof F;</div>}
```
###Reflect.construct, Array subclassing
          
```
function(){
              <div class="code">function F(){}
var obj = Reflect.construct(Array, [], F);
obj[2] = 'foo';
return obj.length === 3 &amp;&amp; obj instanceof F;</div>}
```
###Reflect.construct, RegExp subclassing
          
```
function(){
              <div class="code">function F(){}
var obj = Reflect.construct(RegExp, [&quot;baz&quot;,&quot;g&quot;], F);
return RegExp.prototype.exec.call(obj, &quot;foobarbaz&quot;)[0] === &quot;baz&quot;
  &amp;&amp; obj.lastIndex === 9 &amp;&amp; obj instanceof F;</div>}
```
###Reflect.construct, Function subclassing
          
```
function(){
              <div class="code">function F(){}
var obj = Reflect.construct(Function, [&quot;return 2&quot;], F);
return obj() === 2 &amp;&amp; obj instanceof F;</div>}
```
###Reflect.construct, Promise subclassing
          
```
function(){
              <div class="code">function F(){}
var p1 = Reflect.construct(Promise,[function(resolve, reject) { resolve(&quot;foo&quot;); }], F);
var p2 = Reflect.construct(Promise,[function(resolve, reject) { reject(&quot;quux&quot;); }], F);
var score = +(p1 instanceof F &amp;&amp; p2 instanceof F);

function thenFn(result)  { score += (result === &quot;foo&quot;);  check(); }
function catchFn(result) { score += (result === &quot;quux&quot;); check(); }
function shouldNotRun(result)  { score = -Infinity;   }

p1.then = p2.then = Promise.prototype.then;
p1.catch = p2.catch = Promise.prototype.catch;

p1.then(thenFn, shouldNotRun);
p2.then(shouldNotRun, catchFn);
p1.catch(shouldNotRun);
p2.catch(catchFn);

function check() {
  if (score === 4) asyncTestPassed();
}</div>}
```
###Reflect.get
          
```
function(){
              <div class="code">return Reflect.get({ qux: 987 }, &quot;qux&quot;) === 987;</div>}
```
###Reflect.set
          
```
function(){
              <div class="code">var obj = {};
Reflect.set(obj, &quot;quux&quot;, 654);
return obj.quux === 654;</div>}
```
###Reflect.has
          
```
function(){
              <div class="code">return Reflect.has({ qux: 987 }, &quot;qux&quot;);</div>}
```
###Reflect.deleteProperty
          
```
function(){
              <div class="code">var obj = { bar: 456 };
Reflect.deleteProperty(obj, &quot;bar&quot;);
return !(&quot;bar&quot; in obj);</div>}
```
###Reflect.getOwnPropertyDescriptor
          
```
function(){
              <div class="code">var obj = { baz: 789 };
var desc = Reflect.getOwnPropertyDescriptor(obj, &quot;baz&quot;);
return desc.value === 789 &amp;&amp;
  desc.configurable &amp;&amp; desc.writable &amp;&amp; desc.enumerable;</div>}
```
###Reflect.defineProperty
          
```
function(){
              <div class="code">var obj = {};
Reflect.defineProperty(obj, &quot;foo&quot;, { value: 123 });
return obj.foo === 123 &amp;&amp;
  Reflect.defineProperty(Object.freeze({}), &quot;foo&quot;, { value: 123 }) === false;</div>}
```
###Reflect.getPrototypeOf
          
```
function(){
              <div class="code">return Reflect.getPrototypeOf([]) === Array.prototype;</div>}
```
###Reflect.setPrototypeOf
          
```
function(){
              <div class="code">var obj = {};
Reflect.setPrototypeOf(obj, Array.prototype);
return obj instanceof Array;</div>}
```
###Reflect.isExtensible
          
```
function(){
              <div class="code">return Reflect.isExtensible({}) &amp;&amp;
  !Reflect.isExtensible(Object.preventExtensions({}));</div>}
```
###Reflect.preventExtensions
          
```
function(){
              <div class="code">var obj = {};
Reflect.preventExtensions(obj);
return !Object.isExtensible(obj);</div>}
```
###Reflect.ownKeys, string keys
          
```
function(){
              <div class="code">var obj = Object.create({ C: true });
obj.A = true;
Object.defineProperty(obj, 'B', { value: true, enumerable: false });

return Reflect.ownKeys(obj).sort() + '' === &quot;A,B&quot;;</div>}
```
###Reflect.ownKeys, symbol keys
          
```
function(){
              <div class="code">var s1 = Symbol(), s2 = Symbol(), s3 = Symbol();
var proto = {};
proto[s1] = true;
var obj = Object.create(proto);
obj[s2] = true;
Object.defineProperty(obj, s3, { value: true, enumerable: false });

var keys = Reflect.ownKeys(obj);
return keys.indexOf(s2) &gt;-1 &amp;&amp; keys.indexOf(s3) &gt;-1 &amp;&amp; keys.length === 2;</div>}
```
###Reflect.apply
          
```
function(){
              <div class="code">return Reflect.apply(Array.prototype.push, [1,2], [3,4,5]) === 5;</div>}
```
###Reflect.construct
          
```
function(){
              <div class="code">return Reflect.construct(function(a, b, c) {
  this.qux = a + b + c;
}, [&quot;foo&quot;, &quot;bar&quot;, &quot;baz&quot;]).qux === &quot;foobarbaz&quot;;</div>}
```
###Reflect.construct sets new.target meta-property
          
```
function(){
              <div class="code">return Reflect.construct(function(a, b, c) {
  if (new.target === Object) {
    this.qux = a + b + c;
  }
}, [&quot;foo&quot;, &quot;bar&quot;, &quot;baz&quot;], Object).qux === &quot;foobarbaz&quot;;</div>}
```
###Reflect.construct creates instances from third argument
          
```
function(){
              <div class="code">function F(){}
var obj = Reflect.construct(function(){ this.y = 1; }, [], F);
return obj.y === 1 &amp;&amp; obj instanceof F;</div>}
```
###Reflect.construct, Array subclassing
          
```
function(){
              <div class="code">function F(){}
var obj = Reflect.construct(Array, [], F);
obj[2] = 'foo';
return obj.length === 3 &amp;&amp; obj instanceof F;</div>}
```
###Reflect.construct, RegExp subclassing
          
```
function(){
              <div class="code">function F(){}
var obj = Reflect.construct(RegExp, [&quot;baz&quot;,&quot;g&quot;], F);
return RegExp.prototype.exec.call(obj, &quot;foobarbaz&quot;)[0] === &quot;baz&quot;
  &amp;&amp; obj.lastIndex === 9 &amp;&amp; obj instanceof F;</div>}
```
###Reflect.construct, Function subclassing
          
```
function(){
              <div class="code">function F(){}
var obj = Reflect.construct(Function, [&quot;return 2&quot;], F);
return obj() === 2 &amp;&amp; obj instanceof F;</div>}
```
###Reflect.construct, Promise subclassing
          
```
function(){
              <div class="code">function F(){}
var p1 = Reflect.construct(Promise,[function(resolve, reject) { resolve(&quot;foo&quot;); }], F);
var p2 = Reflect.construct(Promise,[function(resolve, reject) { reject(&quot;quux&quot;); }], F);
var score = +(p1 instanceof F &amp;&amp; p2 instanceof F);

function thenFn(result)  { score += (result === &quot;foo&quot;);  check(); }
function catchFn(result) { score += (result === &quot;quux&quot;); check(); }
function shouldNotRun(result)  { score = -Infinity;   }

p1.then = p2.then = Promise.prototype.then;
p1.catch = p2.catch = Promise.prototype.catch;

p1.then(thenFn, shouldNotRun);
p2.then(shouldNotRun, catchFn);
p1.catch(shouldNotRun);
p2.catch(catchFn);

function check() {
  if (score === 4) asyncTestPassed();
}</div>}
```
###Reflect.get
          
```
function(){
              <div class="code">return Reflect.get({ qux: 987 }, &quot;qux&quot;) === 987;</div>}
```
###Reflect.set
          
```
function(){
              <div class="code">var obj = {};
Reflect.set(obj, &quot;quux&quot;, 654);
return obj.quux === 654;</div>}
```
###Reflect.has
          
```
function(){
              <div class="code">return Reflect.has({ qux: 987 }, &quot;qux&quot;);</div>}
```
###Reflect.deleteProperty
          
```
function(){
              <div class="code">var obj = { bar: 456 };
Reflect.deleteProperty(obj, &quot;bar&quot;);
return !(&quot;bar&quot; in obj);</div>}
```
###Reflect.getOwnPropertyDescriptor
          
```
function(){
              <div class="code">var obj = { baz: 789 };
var desc = Reflect.getOwnPropertyDescriptor(obj, &quot;baz&quot;);
return desc.value === 789 &amp;&amp;
  desc.configurable &amp;&amp; desc.writable &amp;&amp; desc.enumerable;</div>}
```
###Reflect.defineProperty
          
```
function(){
              <div class="code">var obj = {};
Reflect.defineProperty(obj, &quot;foo&quot;, { value: 123 });
return obj.foo === 123 &amp;&amp;
  Reflect.defineProperty(Object.freeze({}), &quot;foo&quot;, { value: 123 }) === false;</div>}
```
###Reflect.getPrototypeOf
          
```
function(){
              <div class="code">return Reflect.getPrototypeOf([]) === Array.prototype;</div>}
```
###Reflect.setPrototypeOf
          
```
function(){
              <div class="code">var obj = {};
Reflect.setPrototypeOf(obj, Array.prototype);
return obj instanceof Array;</div>}
```
###Reflect.isExtensible
          
```
function(){
              <div class="code">return Reflect.isExtensible({}) &amp;&amp;
  !Reflect.isExtensible(Object.preventExtensions({}));</div>}
```
###Reflect.preventExtensions
          
```
function(){
              <div class="code">var obj = {};
Reflect.preventExtensions(obj);
return !Object.isExtensible(obj);</div>}
```
###Reflect.ownKeys, string keys
          
```
function(){
              <div class="code">var obj = Object.create({ C: true });
obj.A = true;
Object.defineProperty(obj, 'B', { value: true, enumerable: false });

return Reflect.ownKeys(obj).sort() + '' === &quot;A,B&quot;;</div>}
```
###Reflect.ownKeys, symbol keys
          
```
function(){
              <div class="code">var s1 = Symbol(), s2 = Symbol(), s3 = Symbol();
var proto = {};
proto[s1] = true;
var obj = Object.create(proto);
obj[s2] = true;
Object.defineProperty(obj, s3, { value: true, enumerable: false });

var keys = Reflect.ownKeys(obj);
return keys.indexOf(s2) &gt;-1 &amp;&amp; keys.indexOf(s3) &gt;-1 &amp;&amp; keys.length === 2;</div>}
```
###Reflect.apply
          
```
function(){
              <div class="code">return Reflect.apply(Array.prototype.push, [1,2], [3,4,5]) === 5;</div>}
```
###Reflect.construct
          
```
function(){
              <div class="code">return Reflect.construct(function(a, b, c) {
  this.qux = a + b + c;
}, [&quot;foo&quot;, &quot;bar&quot;, &quot;baz&quot;]).qux === &quot;foobarbaz&quot;;</div>}
```
###Reflect.construct sets new.target meta-property
          
```
function(){
              <div class="code">return Reflect.construct(function(a, b, c) {
  if (new.target === Object) {
    this.qux = a + b + c;
  }
}, [&quot;foo&quot;, &quot;bar&quot;, &quot;baz&quot;], Object).qux === &quot;foobarbaz&quot;;</div>}
```
###Reflect.construct creates instances from third argument
          
```
function(){
              <div class="code">function F(){}
var obj = Reflect.construct(function(){ this.y = 1; }, [], F);
return obj.y === 1 &amp;&amp; obj instanceof F;</div>}
```
###Reflect.construct, Array subclassing
          
```
function(){
              <div class="code">function F(){}
var obj = Reflect.construct(Array, [], F);
obj[2] = 'foo';
return obj.length === 3 &amp;&amp; obj instanceof F;</div>}
```
###Reflect.construct, RegExp subclassing
          
```
function(){
              <div class="code">function F(){}
var obj = Reflect.construct(RegExp, [&quot;baz&quot;,&quot;g&quot;], F);
return RegExp.prototype.exec.call(obj, &quot;foobarbaz&quot;)[0] === &quot;baz&quot;
  &amp;&amp; obj.lastIndex === 9 &amp;&amp; obj instanceof F;</div>}
```
###Reflect.construct, Function subclassing
          
```
function(){
              <div class="code">function F(){}
var obj = Reflect.construct(Function, [&quot;return 2&quot;], F);
return obj() === 2 &amp;&amp; obj instanceof F;</div>}
```
###Reflect.construct, Promise subclassing
          
```
function(){
              <div class="code">function F(){}
var p1 = Reflect.construct(Promise,[function(resolve, reject) { resolve(&quot;foo&quot;); }], F);
var p2 = Reflect.construct(Promise,[function(resolve, reject) { reject(&quot;quux&quot;); }], F);
var score = +(p1 instanceof F &amp;&amp; p2 instanceof F);

function thenFn(result)  { score += (result === &quot;foo&quot;);  check(); }
function catchFn(result) { score += (result === &quot;quux&quot;); check(); }
function shouldNotRun(result)  { score = -Infinity;   }

p1.then = p2.then = Promise.prototype.then;
p1.catch = p2.catch = Promise.prototype.catch;

p1.then(thenFn, shouldNotRun);
p2.then(shouldNotRun, catchFn);
p1.catch(shouldNotRun);
p2.catch(catchFn);

function check() {
  if (score === 4) asyncTestPassed();
}</div>}
```
###Reflect.get
          
```
function(){
              <div class="code">return Reflect.get({ qux: 987 }, &quot;qux&quot;) === 987;</div>}
```
###Reflect.set
          
```
function(){
              <div class="code">var obj = {};
Reflect.set(obj, &quot;quux&quot;, 654);
return obj.quux === 654;</div>}
```
###Reflect.has
          
```
function(){
              <div class="code">return Reflect.has({ qux: 987 }, &quot;qux&quot;);</div>}
```
###Reflect.deleteProperty
          
```
function(){
              <div class="code">var obj = { bar: 456 };
Reflect.deleteProperty(obj, &quot;bar&quot;);
return !(&quot;bar&quot; in obj);</div>}
```
###Reflect.getOwnPropertyDescriptor
          
```
function(){
              <div class="code">var obj = { baz: 789 };
var desc = Reflect.getOwnPropertyDescriptor(obj, &quot;baz&quot;);
return desc.value === 789 &amp;&amp;
  desc.configurable &amp;&amp; desc.writable &amp;&amp; desc.enumerable;</div>}
```
###Reflect.defineProperty
          
```
function(){
              <div class="code">var obj = {};
Reflect.defineProperty(obj, &quot;foo&quot;, { value: 123 });
return obj.foo === 123 &amp;&amp;
  Reflect.defineProperty(Object.freeze({}), &quot;foo&quot;, { value: 123 }) === false;</div>}
```
###Reflect.getPrototypeOf
          
```
function(){
              <div class="code">return Reflect.getPrototypeOf([]) === Array.prototype;</div>}
```
###Reflect.setPrototypeOf
          
```
function(){
              <div class="code">var obj = {};
Reflect.setPrototypeOf(obj, Array.prototype);
return obj instanceof Array;</div>}
```
###Reflect.isExtensible
          
```
function(){
              <div class="code">return Reflect.isExtensible({}) &amp;&amp;
  !Reflect.isExtensible(Object.preventExtensions({}));</div>}
```
###Reflect.preventExtensions
          
```
function(){
              <div class="code">var obj = {};
Reflect.preventExtensions(obj);
return !Object.isExtensible(obj);</div>}
```
###Reflect.ownKeys, string keys
          
```
function(){
              <div class="code">var obj = Object.create({ C: true });
obj.A = true;
Object.defineProperty(obj, 'B', { value: true, enumerable: false });

return Reflect.ownKeys(obj).sort() + '' === &quot;A,B&quot;;</div>}
```
###Reflect.ownKeys, symbol keys
          
```
function(){
              <div class="code">var s1 = Symbol(), s2 = Symbol(), s3 = Symbol();
var proto = {};
proto[s1] = true;
var obj = Object.create(proto);
obj[s2] = true;
Object.defineProperty(obj, s3, { value: true, enumerable: false });

var keys = Reflect.ownKeys(obj);
return keys.indexOf(s2) &gt;-1 &amp;&amp; keys.indexOf(s3) &gt;-1 &amp;&amp; keys.length === 2;</div>}
```
###Reflect.apply
          
```
function(){
              <div class="code">return Reflect.apply(Array.prototype.push, [1,2], [3,4,5]) === 5;</div>}
```
###Reflect.construct
          
```
function(){
              <div class="code">return Reflect.construct(function(a, b, c) {
  this.qux = a + b + c;
}, [&quot;foo&quot;, &quot;bar&quot;, &quot;baz&quot;]).qux === &quot;foobarbaz&quot;;</div>}
```
###Reflect.construct sets new.target meta-property
          
```
function(){
              <div class="code">return Reflect.construct(function(a, b, c) {
  if (new.target === Object) {
    this.qux = a + b + c;
  }
}, [&quot;foo&quot;, &quot;bar&quot;, &quot;baz&quot;], Object).qux === &quot;foobarbaz&quot;;</div>}
```
###Reflect.construct creates instances from third argument
          
```
function(){
              <div class="code">function F(){}
var obj = Reflect.construct(function(){ this.y = 1; }, [], F);
return obj.y === 1 &amp;&amp; obj instanceof F;</div>}
```
###Reflect.construct, Array subclassing
          
```
function(){
              <div class="code">function F(){}
var obj = Reflect.construct(Array, [], F);
obj[2] = 'foo';
return obj.length === 3 &amp;&amp; obj instanceof F;</div>}
```
###Reflect.construct, RegExp subclassing
          
```
function(){
              <div class="code">function F(){}
var obj = Reflect.construct(RegExp, [&quot;baz&quot;,&quot;g&quot;], F);
return RegExp.prototype.exec.call(obj, &quot;foobarbaz&quot;)[0] === &quot;baz&quot;
  &amp;&amp; obj.lastIndex === 9 &amp;&amp; obj instanceof F;</div>}
```
###Reflect.construct, Function subclassing
          
```
function(){
              <div class="code">function F(){}
var obj = Reflect.construct(Function, [&quot;return 2&quot;], F);
return obj() === 2 &amp;&amp; obj instanceof F;</div>}
```
###Reflect.construct, Promise subclassing
          
```
function(){
              <div class="code">function F(){}
var p1 = Reflect.construct(Promise,[function(resolve, reject) { resolve(&quot;foo&quot;); }], F);
var p2 = Reflect.construct(Promise,[function(resolve, reject) { reject(&quot;quux&quot;); }], F);
var score = +(p1 instanceof F &amp;&amp; p2 instanceof F);

function thenFn(result)  { score += (result === &quot;foo&quot;);  check(); }
function catchFn(result) { score += (result === &quot;quux&quot;); check(); }
function shouldNotRun(result)  { score = -Infinity;   }

p1.then = p2.then = Promise.prototype.then;
p1.catch = p2.catch = Promise.prototype.catch;

p1.then(thenFn, shouldNotRun);
p2.then(shouldNotRun, catchFn);
p1.catch(shouldNotRun);
p2.catch(catchFn);

function check() {
  if (score === 4) asyncTestPassed();
}</div>}
```
###Reflect.get
          
```
function(){
              <div class="code">return Reflect.get({ qux: 987 }, &quot;qux&quot;) === 987;</div>}
```
###Reflect.set
          
```
function(){
              <div class="code">var obj = {};
Reflect.set(obj, &quot;quux&quot;, 654);
return obj.quux === 654;</div>}
```
###Reflect.has
          
```
function(){
              <div class="code">return Reflect.has({ qux: 987 }, &quot;qux&quot;);</div>}
```
###Reflect.deleteProperty
          
```
function(){
              <div class="code">var obj = { bar: 456 };
Reflect.deleteProperty(obj, &quot;bar&quot;);
return !(&quot;bar&quot; in obj);</div>}
```
###Reflect.getOwnPropertyDescriptor
          
```
function(){
              <div class="code">var obj = { baz: 789 };
var desc = Reflect.getOwnPropertyDescriptor(obj, &quot;baz&quot;);
return desc.value === 789 &amp;&amp;
  desc.configurable &amp;&amp; desc.writable &amp;&amp; desc.enumerable;</div>}
```
###Reflect.defineProperty
          
```
function(){
              <div class="code">var obj = {};
Reflect.defineProperty(obj, &quot;foo&quot;, { value: 123 });
return obj.foo === 123 &amp;&amp;
  Reflect.defineProperty(Object.freeze({}), &quot;foo&quot;, { value: 123 }) === false;</div>}
```
###Reflect.getPrototypeOf
          
```
function(){
              <div class="code">return Reflect.getPrototypeOf([]) === Array.prototype;</div>}
```
###Reflect.setPrototypeOf
          
```
function(){
              <div class="code">var obj = {};
Reflect.setPrototypeOf(obj, Array.prototype);
return obj instanceof Array;</div>}
```
###Reflect.isExtensible
          
```
function(){
              <div class="code">return Reflect.isExtensible({}) &amp;&amp;
  !Reflect.isExtensible(Object.preventExtensions({}));</div>}
```
###Reflect.preventExtensions
          
```
function(){
              <div class="code">var obj = {};
Reflect.preventExtensions(obj);
return !Object.isExtensible(obj);</div>}
```
###Reflect.ownKeys, string keys
          
```
function(){
              <div class="code">var obj = Object.create({ C: true });
obj.A = true;
Object.defineProperty(obj, 'B', { value: true, enumerable: false });

return Reflect.ownKeys(obj).sort() + '' === &quot;A,B&quot;;</div>}
```
###Reflect.ownKeys, symbol keys
          
```
function(){
              <div class="code">var s1 = Symbol(), s2 = Symbol(), s3 = Symbol();
var proto = {};
proto[s1] = true;
var obj = Object.create(proto);
obj[s2] = true;
Object.defineProperty(obj, s3, { value: true, enumerable: false });

var keys = Reflect.ownKeys(obj);
return keys.indexOf(s2) &gt;-1 &amp;&amp; keys.indexOf(s3) &gt;-1 &amp;&amp; keys.length === 2;</div>}
```
###Reflect.apply
          
```
function(){
              <div class="code">return Reflect.apply(Array.prototype.push, [1,2], [3,4,5]) === 5;</div>}
```
###Reflect.construct
          
```
function(){
              <div class="code">return Reflect.construct(function(a, b, c) {
  this.qux = a + b + c;
}, [&quot;foo&quot;, &quot;bar&quot;, &quot;baz&quot;]).qux === &quot;foobarbaz&quot;;</div>}
```
###Reflect.construct sets new.target meta-property
          
```
function(){
              <div class="code">return Reflect.construct(function(a, b, c) {
  if (new.target === Object) {
    this.qux = a + b + c;
  }
}, [&quot;foo&quot;, &quot;bar&quot;, &quot;baz&quot;], Object).qux === &quot;foobarbaz&quot;;</div>}
```
###Reflect.construct creates instances from third argument
          
```
function(){
              <div class="code">function F(){}
var obj = Reflect.construct(function(){ this.y = 1; }, [], F);
return obj.y === 1 &amp;&amp; obj instanceof F;</div>}
```
###Reflect.construct, Array subclassing
          
```
function(){
              <div class="code">function F(){}
var obj = Reflect.construct(Array, [], F);
obj[2] = 'foo';
return obj.length === 3 &amp;&amp; obj instanceof F;</div>}
```
###Reflect.construct, RegExp subclassing
          
```
function(){
              <div class="code">function F(){}
var obj = Reflect.construct(RegExp, [&quot;baz&quot;,&quot;g&quot;], F);
return RegExp.prototype.exec.call(obj, &quot;foobarbaz&quot;)[0] === &quot;baz&quot;
  &amp;&amp; obj.lastIndex === 9 &amp;&amp; obj instanceof F;</div>}
```
###Reflect.construct, Function subclassing
          
```
function(){
              <div class="code">function F(){}
var obj = Reflect.construct(Function, [&quot;return 2&quot;], F);
return obj() === 2 &amp;&amp; obj instanceof F;</div>}
```
###Reflect.construct, Promise subclassing
          
```
function(){
              <div class="code">function F(){}
var p1 = Reflect.construct(Promise,[function(resolve, reject) { resolve(&quot;foo&quot;); }], F);
var p2 = Reflect.construct(Promise,[function(resolve, reject) { reject(&quot;quux&quot;); }], F);
var score = +(p1 instanceof F &amp;&amp; p2 instanceof F);

function thenFn(result)  { score += (result === &quot;foo&quot;);  check(); }
function catchFn(result) { score += (result === &quot;quux&quot;); check(); }
function shouldNotRun(result)  { score = -Infinity;   }

p1.then = p2.then = Promise.prototype.then;
p1.catch = p2.catch = Promise.prototype.catch;

p1.then(thenFn, shouldNotRun);
p2.then(shouldNotRun, catchFn);
p1.catch(shouldNotRun);
p2.catch(catchFn);

function check() {
  if (score === 4) asyncTestPassed();
}</div>}
```
###Reflect.get
          
```
function(){
              <div class="code">return Reflect.get({ qux: 987 }, &quot;qux&quot;) === 987;</div>}
```
###Reflect.set
          
```
function(){
              <div class="code">var obj = {};
Reflect.set(obj, &quot;quux&quot;, 654);
return obj.quux === 654;</div>}
```
###Reflect.has
          
```
function(){
              <div class="code">return Reflect.has({ qux: 987 }, &quot;qux&quot;);</div>}
```
###Reflect.deleteProperty
          
```
function(){
              <div class="code">var obj = { bar: 456 };
Reflect.deleteProperty(obj, &quot;bar&quot;);
return !(&quot;bar&quot; in obj);</div>}
```
###Reflect.getOwnPropertyDescriptor
          
```
function(){
              <div class="code">var obj = { baz: 789 };
var desc = Reflect.getOwnPropertyDescriptor(obj, &quot;baz&quot;);
return desc.value === 789 &amp;&amp;
  desc.configurable &amp;&amp; desc.writable &amp;&amp; desc.enumerable;</div>}
```
###Reflect.defineProperty
          
```
function(){
              <div class="code">var obj = {};
Reflect.defineProperty(obj, &quot;foo&quot;, { value: 123 });
return obj.foo === 123 &amp;&amp;
  Reflect.defineProperty(Object.freeze({}), &quot;foo&quot;, { value: 123 }) === false;</div>}
```
###Reflect.getPrototypeOf
          
```
function(){
              <div class="code">return Reflect.getPrototypeOf([]) === Array.prototype;</div>}
```
###Reflect.setPrototypeOf
          
```
function(){
              <div class="code">var obj = {};
Reflect.setPrototypeOf(obj, Array.prototype);
return obj instanceof Array;</div>}
```
###Reflect.isExtensible
          
```
function(){
              <div class="code">return Reflect.isExtensible({}) &amp;&amp;
  !Reflect.isExtensible(Object.preventExtensions({}));</div>}
```
###Reflect.preventExtensions
          
```
function(){
              <div class="code">var obj = {};
Reflect.preventExtensions(obj);
return !Object.isExtensible(obj);</div>}
```
###Reflect.ownKeys, string keys
          
```
function(){
              <div class="code">var obj = Object.create({ C: true });
obj.A = true;
Object.defineProperty(obj, 'B', { value: true, enumerable: false });

return Reflect.ownKeys(obj).sort() + '' === &quot;A,B&quot;;</div>}
```
###Reflect.ownKeys, symbol keys
          
```
function(){
              <div class="code">var s1 = Symbol(), s2 = Symbol(), s3 = Symbol();
var proto = {};
proto[s1] = true;
var obj = Object.create(proto);
obj[s2] = true;
Object.defineProperty(obj, s3, { value: true, enumerable: false });

var keys = Reflect.ownKeys(obj);
return keys.indexOf(s2) &gt;-1 &amp;&amp; keys.indexOf(s3) &gt;-1 &amp;&amp; keys.length === 2;</div>}
```
###Reflect.apply
          
```
function(){
              <div class="code">return Reflect.apply(Array.prototype.push, [1,2], [3,4,5]) === 5;</div>}
```
###Reflect.construct
          
```
function(){
              <div class="code">return Reflect.construct(function(a, b, c) {
  this.qux = a + b + c;
}, [&quot;foo&quot;, &quot;bar&quot;, &quot;baz&quot;]).qux === &quot;foobarbaz&quot;;</div>}
```
###Reflect.construct sets new.target meta-property
          
```
function(){
              <div class="code">return Reflect.construct(function(a, b, c) {
  if (new.target === Object) {
    this.qux = a + b + c;
  }
}, [&quot;foo&quot;, &quot;bar&quot;, &quot;baz&quot;], Object).qux === &quot;foobarbaz&quot;;</div>}
```
###Reflect.construct creates instances from third argument
          
```
function(){
              <div class="code">function F(){}
var obj = Reflect.construct(function(){ this.y = 1; }, [], F);
return obj.y === 1 &amp;&amp; obj instanceof F;</div>}
```
###Reflect.construct, Array subclassing
          
```
function(){
              <div class="code">function F(){}
var obj = Reflect.construct(Array, [], F);
obj[2] = 'foo';
return obj.length === 3 &amp;&amp; obj instanceof F;</div>}
```
###Reflect.construct, RegExp subclassing
          
```
function(){
              <div class="code">function F(){}
var obj = Reflect.construct(RegExp, [&quot;baz&quot;,&quot;g&quot;], F);
return RegExp.prototype.exec.call(obj, &quot;foobarbaz&quot;)[0] === &quot;baz&quot;
  &amp;&amp; obj.lastIndex === 9 &amp;&amp; obj instanceof F;</div>}
```
###Reflect.construct, Function subclassing
          
```
function(){
              <div class="code">function F(){}
var obj = Reflect.construct(Function, [&quot;return 2&quot;], F);
return obj() === 2 &amp;&amp; obj instanceof F;</div>}
```
###Reflect.construct, Promise subclassing
          
```
function(){
              <div class="code">function F(){}
var p1 = Reflect.construct(Promise,[function(resolve, reject) { resolve(&quot;foo&quot;); }], F);
var p2 = Reflect.construct(Promise,[function(resolve, reject) { reject(&quot;quux&quot;); }], F);
var score = +(p1 instanceof F &amp;&amp; p2 instanceof F);

function thenFn(result)  { score += (result === &quot;foo&quot;);  check(); }
function catchFn(result) { score += (result === &quot;quux&quot;); check(); }
function shouldNotRun(result)  { score = -Infinity;   }

p1.then = p2.then = Promise.prototype.then;
p1.catch = p2.catch = Promise.prototype.catch;

p1.then(thenFn, shouldNotRun);
p2.then(shouldNotRun, catchFn);
p1.catch(shouldNotRun);
p2.catch(catchFn);

function check() {
  if (score === 4) asyncTestPassed();
}</div>}
```
