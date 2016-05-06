###basic functionality
          
```
function(){
              <div class="code">class P extends Promise {}
var p1 = new P(function(resolve, reject) { resolve(&quot;foo&quot;); });
var p2 = new P(function(resolve, reject) { reject(&quot;quux&quot;); });
var score = +(p1 instanceof P);

function thenFn(result)  { score += (result === &quot;foo&quot;);  check(); }
function catchFn(result) { score += (result === &quot;quux&quot;); check(); }
function shouldNotRun(result)  { score = -Infinity;   }

p1.then(thenFn, shouldNotRun);
p2.then(shouldNotRun, catchFn);
p1.catch(shouldNotRun);
p2.catch(catchFn);

p1.then(function() {
  // P.prototype.then() should return a new P
  score += p1.then() instanceof P &amp;&amp; p1.then() !== p1;
  check();
});

function check() {
  if (score === 5) asyncTestPassed();
}</div>}
```
###correct prototype chain
          
```
function(){
              <div class="code">class C extends Promise {}
var c = new C(function(resolve, reject) { resolve(&quot;foo&quot;); });
return c instanceof C &amp;&amp; c instanceof Promise &amp;&amp; Object.getPrototypeOf(C) === Promise;</div>}
```
###Promise.all
          
```
function(){
              <div class="code">class P extends Promise {}
var fulfills = P.all([
  new Promise(function(resolve)   { setTimeout(resolve,200,&quot;foo&quot;); }),
  new Promise(function(resolve)   { setTimeout(resolve,100,&quot;bar&quot;); }),
]);
var rejects = P.all([
  new Promise(function(_, reject) { setTimeout(reject, 200,&quot;baz&quot;); }),
  new Promise(function(_, reject) { setTimeout(reject, 100,&quot;qux&quot;); }),
]);
var score = +(fulfills instanceof P);
fulfills.then(function(result) { score += (result + &quot;&quot; === &quot;foo,bar&quot;); check(); });
rejects.catch(function(result) { score += (result === &quot;qux&quot;); check(); });

function check() {
  if (score === 3) asyncTestPassed();
}</div>}
```
###Promise.race
          
```
function(){
              <div class="code">class P extends Promise {}
var fulfills = P.race([
  new Promise(function(resolve)   { setTimeout(resolve,200,&quot;foo&quot;); }),
  new Promise(function(_, reject) { setTimeout(reject, 300,&quot;bar&quot;); }),
]);
var rejects = P.race([
  new Promise(function(_, reject) { setTimeout(reject, 200,&quot;baz&quot;); }),
  new Promise(function(resolve)   { setTimeout(resolve,300,&quot;qux&quot;); }),
]);
var score = +(fulfills instanceof P);
fulfills.then(function(result) { score += (result === &quot;foo&quot;); check(); });
rejects.catch(function(result) { score += (result === &quot;baz&quot;); check(); });

function check() {
  if (score === 3) asyncTestPassed();
}</div>}
```
###basic functionality
          
```
function(){
              <div class="code">class P extends Promise {}
var p1 = new P(function(resolve, reject) { resolve(&quot;foo&quot;); });
var p2 = new P(function(resolve, reject) { reject(&quot;quux&quot;); });
var score = +(p1 instanceof P);

function thenFn(result)  { score += (result === &quot;foo&quot;);  check(); }
function catchFn(result) { score += (result === &quot;quux&quot;); check(); }
function shouldNotRun(result)  { score = -Infinity;   }

p1.then(thenFn, shouldNotRun);
p2.then(shouldNotRun, catchFn);
p1.catch(shouldNotRun);
p2.catch(catchFn);

p1.then(function() {
  // P.prototype.then() should return a new P
  score += p1.then() instanceof P &amp;&amp; p1.then() !== p1;
  check();
});

function check() {
  if (score === 5) asyncTestPassed();
}</div>}
```
###correct prototype chain
          
```
function(){
              <div class="code">class C extends Promise {}
var c = new C(function(resolve, reject) { resolve(&quot;foo&quot;); });
return c instanceof C &amp;&amp; c instanceof Promise &amp;&amp; Object.getPrototypeOf(C) === Promise;</div>}
```
###Promise.all
          
```
function(){
              <div class="code">class P extends Promise {}
var fulfills = P.all([
  new Promise(function(resolve)   { setTimeout(resolve,200,&quot;foo&quot;); }),
  new Promise(function(resolve)   { setTimeout(resolve,100,&quot;bar&quot;); }),
]);
var rejects = P.all([
  new Promise(function(_, reject) { setTimeout(reject, 200,&quot;baz&quot;); }),
  new Promise(function(_, reject) { setTimeout(reject, 100,&quot;qux&quot;); }),
]);
var score = +(fulfills instanceof P);
fulfills.then(function(result) { score += (result + &quot;&quot; === &quot;foo,bar&quot;); check(); });
rejects.catch(function(result) { score += (result === &quot;qux&quot;); check(); });

function check() {
  if (score === 3) asyncTestPassed();
}</div>}
```
###Promise.race
          
```
function(){
              <div class="code">class P extends Promise {}
var fulfills = P.race([
  new Promise(function(resolve)   { setTimeout(resolve,200,&quot;foo&quot;); }),
  new Promise(function(_, reject) { setTimeout(reject, 300,&quot;bar&quot;); }),
]);
var rejects = P.race([
  new Promise(function(_, reject) { setTimeout(reject, 200,&quot;baz&quot;); }),
  new Promise(function(resolve)   { setTimeout(resolve,300,&quot;qux&quot;); }),
]);
var score = +(fulfills instanceof P);
fulfills.then(function(result) { score += (result === &quot;foo&quot;); check(); });
rejects.catch(function(result) { score += (result === &quot;baz&quot;); check(); });

function check() {
  if (score === 3) asyncTestPassed();
}</div>}
```
###basic functionality
          
```
function(){
              <div class="code">class P extends Promise {}
var p1 = new P(function(resolve, reject) { resolve(&quot;foo&quot;); });
var p2 = new P(function(resolve, reject) { reject(&quot;quux&quot;); });
var score = +(p1 instanceof P);

function thenFn(result)  { score += (result === &quot;foo&quot;);  check(); }
function catchFn(result) { score += (result === &quot;quux&quot;); check(); }
function shouldNotRun(result)  { score = -Infinity;   }

p1.then(thenFn, shouldNotRun);
p2.then(shouldNotRun, catchFn);
p1.catch(shouldNotRun);
p2.catch(catchFn);

p1.then(function() {
  // P.prototype.then() should return a new P
  score += p1.then() instanceof P &amp;&amp; p1.then() !== p1;
  check();
});

function check() {
  if (score === 5) asyncTestPassed();
}</div>}
```
###correct prototype chain
          
```
function(){
              <div class="code">class C extends Promise {}
var c = new C(function(resolve, reject) { resolve(&quot;foo&quot;); });
return c instanceof C &amp;&amp; c instanceof Promise &amp;&amp; Object.getPrototypeOf(C) === Promise;</div>}
```
###Promise.all
          
```
function(){
              <div class="code">class P extends Promise {}
var fulfills = P.all([
  new Promise(function(resolve)   { setTimeout(resolve,200,&quot;foo&quot;); }),
  new Promise(function(resolve)   { setTimeout(resolve,100,&quot;bar&quot;); }),
]);
var rejects = P.all([
  new Promise(function(_, reject) { setTimeout(reject, 200,&quot;baz&quot;); }),
  new Promise(function(_, reject) { setTimeout(reject, 100,&quot;qux&quot;); }),
]);
var score = +(fulfills instanceof P);
fulfills.then(function(result) { score += (result + &quot;&quot; === &quot;foo,bar&quot;); check(); });
rejects.catch(function(result) { score += (result === &quot;qux&quot;); check(); });

function check() {
  if (score === 3) asyncTestPassed();
}</div>}
```
###Promise.race
          
```
function(){
              <div class="code">class P extends Promise {}
var fulfills = P.race([
  new Promise(function(resolve)   { setTimeout(resolve,200,&quot;foo&quot;); }),
  new Promise(function(_, reject) { setTimeout(reject, 300,&quot;bar&quot;); }),
]);
var rejects = P.race([
  new Promise(function(_, reject) { setTimeout(reject, 200,&quot;baz&quot;); }),
  new Promise(function(resolve)   { setTimeout(resolve,300,&quot;qux&quot;); }),
]);
var score = +(fulfills instanceof P);
fulfills.then(function(result) { score += (result === &quot;foo&quot;); check(); });
rejects.catch(function(result) { score += (result === &quot;baz&quot;); check(); });

function check() {
  if (score === 3) asyncTestPassed();
}</div>}
```
###basic functionality
          
```
function(){
              <div class="code">class P extends Promise {}
var p1 = new P(function(resolve, reject) { resolve(&quot;foo&quot;); });
var p2 = new P(function(resolve, reject) { reject(&quot;quux&quot;); });
var score = +(p1 instanceof P);

function thenFn(result)  { score += (result === &quot;foo&quot;);  check(); }
function catchFn(result) { score += (result === &quot;quux&quot;); check(); }
function shouldNotRun(result)  { score = -Infinity;   }

p1.then(thenFn, shouldNotRun);
p2.then(shouldNotRun, catchFn);
p1.catch(shouldNotRun);
p2.catch(catchFn);

p1.then(function() {
  // P.prototype.then() should return a new P
  score += p1.then() instanceof P &amp;&amp; p1.then() !== p1;
  check();
});

function check() {
  if (score === 5) asyncTestPassed();
}</div>}
```
###correct prototype chain
          
```
function(){
              <div class="code">class C extends Promise {}
var c = new C(function(resolve, reject) { resolve(&quot;foo&quot;); });
return c instanceof C &amp;&amp; c instanceof Promise &amp;&amp; Object.getPrototypeOf(C) === Promise;</div>}
```
###Promise.all
          
```
function(){
              <div class="code">class P extends Promise {}
var fulfills = P.all([
  new Promise(function(resolve)   { setTimeout(resolve,200,&quot;foo&quot;); }),
  new Promise(function(resolve)   { setTimeout(resolve,100,&quot;bar&quot;); }),
]);
var rejects = P.all([
  new Promise(function(_, reject) { setTimeout(reject, 200,&quot;baz&quot;); }),
  new Promise(function(_, reject) { setTimeout(reject, 100,&quot;qux&quot;); }),
]);
var score = +(fulfills instanceof P);
fulfills.then(function(result) { score += (result + &quot;&quot; === &quot;foo,bar&quot;); check(); });
rejects.catch(function(result) { score += (result === &quot;qux&quot;); check(); });

function check() {
  if (score === 3) asyncTestPassed();
}</div>}
```
###Promise.race
          
```
function(){
              <div class="code">class P extends Promise {}
var fulfills = P.race([
  new Promise(function(resolve)   { setTimeout(resolve,200,&quot;foo&quot;); }),
  new Promise(function(_, reject) { setTimeout(reject, 300,&quot;bar&quot;); }),
]);
var rejects = P.race([
  new Promise(function(_, reject) { setTimeout(reject, 200,&quot;baz&quot;); }),
  new Promise(function(resolve)   { setTimeout(resolve,300,&quot;qux&quot;); }),
]);
var score = +(fulfills instanceof P);
fulfills.then(function(result) { score += (result === &quot;foo&quot;); check(); });
rejects.catch(function(result) { score += (result === &quot;baz&quot;); check(); });

function check() {
  if (score === 3) asyncTestPassed();
}</div>}
```
###basic functionality
          
```
function(){
              <div class="code">class P extends Promise {}
var p1 = new P(function(resolve, reject) { resolve(&quot;foo&quot;); });
var p2 = new P(function(resolve, reject) { reject(&quot;quux&quot;); });
var score = +(p1 instanceof P);

function thenFn(result)  { score += (result === &quot;foo&quot;);  check(); }
function catchFn(result) { score += (result === &quot;quux&quot;); check(); }
function shouldNotRun(result)  { score = -Infinity;   }

p1.then(thenFn, shouldNotRun);
p2.then(shouldNotRun, catchFn);
p1.catch(shouldNotRun);
p2.catch(catchFn);

p1.then(function() {
  // P.prototype.then() should return a new P
  score += p1.then() instanceof P &amp;&amp; p1.then() !== p1;
  check();
});

function check() {
  if (score === 5) asyncTestPassed();
}</div>}
```
###correct prototype chain
          
```
function(){
              <div class="code">class C extends Promise {}
var c = new C(function(resolve, reject) { resolve(&quot;foo&quot;); });
return c instanceof C &amp;&amp; c instanceof Promise &amp;&amp; Object.getPrototypeOf(C) === Promise;</div>}
```
###Promise.all
          
```
function(){
              <div class="code">class P extends Promise {}
var fulfills = P.all([
  new Promise(function(resolve)   { setTimeout(resolve,200,&quot;foo&quot;); }),
  new Promise(function(resolve)   { setTimeout(resolve,100,&quot;bar&quot;); }),
]);
var rejects = P.all([
  new Promise(function(_, reject) { setTimeout(reject, 200,&quot;baz&quot;); }),
  new Promise(function(_, reject) { setTimeout(reject, 100,&quot;qux&quot;); }),
]);
var score = +(fulfills instanceof P);
fulfills.then(function(result) { score += (result + &quot;&quot; === &quot;foo,bar&quot;); check(); });
rejects.catch(function(result) { score += (result === &quot;qux&quot;); check(); });

function check() {
  if (score === 3) asyncTestPassed();
}</div>}
```
###Promise.race
          
```
function(){
              <div class="code">class P extends Promise {}
var fulfills = P.race([
  new Promise(function(resolve)   { setTimeout(resolve,200,&quot;foo&quot;); }),
  new Promise(function(_, reject) { setTimeout(reject, 300,&quot;bar&quot;); }),
]);
var rejects = P.race([
  new Promise(function(_, reject) { setTimeout(reject, 200,&quot;baz&quot;); }),
  new Promise(function(resolve)   { setTimeout(resolve,300,&quot;qux&quot;); }),
]);
var score = +(fulfills instanceof P);
fulfills.then(function(result) { score += (result === &quot;foo&quot;); check(); });
rejects.catch(function(result) { score += (result === &quot;baz&quot;); check(); });

function check() {
  if (score === 3) asyncTestPassed();
}</div>}
```
###basic functionality
          
```
function(){
              <div class="code">class P extends Promise {}
var p1 = new P(function(resolve, reject) { resolve(&quot;foo&quot;); });
var p2 = new P(function(resolve, reject) { reject(&quot;quux&quot;); });
var score = +(p1 instanceof P);

function thenFn(result)  { score += (result === &quot;foo&quot;);  check(); }
function catchFn(result) { score += (result === &quot;quux&quot;); check(); }
function shouldNotRun(result)  { score = -Infinity;   }

p1.then(thenFn, shouldNotRun);
p2.then(shouldNotRun, catchFn);
p1.catch(shouldNotRun);
p2.catch(catchFn);

p1.then(function() {
  // P.prototype.then() should return a new P
  score += p1.then() instanceof P &amp;&amp; p1.then() !== p1;
  check();
});

function check() {
  if (score === 5) asyncTestPassed();
}</div>}
```
###correct prototype chain
          
```
function(){
              <div class="code">class C extends Promise {}
var c = new C(function(resolve, reject) { resolve(&quot;foo&quot;); });
return c instanceof C &amp;&amp; c instanceof Promise &amp;&amp; Object.getPrototypeOf(C) === Promise;</div>}
```
###Promise.all
          
```
function(){
              <div class="code">class P extends Promise {}
var fulfills = P.all([
  new Promise(function(resolve)   { setTimeout(resolve,200,&quot;foo&quot;); }),
  new Promise(function(resolve)   { setTimeout(resolve,100,&quot;bar&quot;); }),
]);
var rejects = P.all([
  new Promise(function(_, reject) { setTimeout(reject, 200,&quot;baz&quot;); }),
  new Promise(function(_, reject) { setTimeout(reject, 100,&quot;qux&quot;); }),
]);
var score = +(fulfills instanceof P);
fulfills.then(function(result) { score += (result + &quot;&quot; === &quot;foo,bar&quot;); check(); });
rejects.catch(function(result) { score += (result === &quot;qux&quot;); check(); });

function check() {
  if (score === 3) asyncTestPassed();
}</div>}
```
###Promise.race
          
```
function(){
              <div class="code">class P extends Promise {}
var fulfills = P.race([
  new Promise(function(resolve)   { setTimeout(resolve,200,&quot;foo&quot;); }),
  new Promise(function(_, reject) { setTimeout(reject, 300,&quot;bar&quot;); }),
]);
var rejects = P.race([
  new Promise(function(_, reject) { setTimeout(reject, 200,&quot;baz&quot;); }),
  new Promise(function(resolve)   { setTimeout(resolve,300,&quot;qux&quot;); }),
]);
var score = +(fulfills instanceof P);
fulfills.then(function(result) { score += (result === &quot;foo&quot;); check(); });
rejects.catch(function(result) { score += (result === &quot;baz&quot;); check(); });

function check() {
  if (score === 3) asyncTestPassed();
}</div>}
```
###basic functionality
          
```
function(){
              <div class="code">class P extends Promise {}
var p1 = new P(function(resolve, reject) { resolve(&quot;foo&quot;); });
var p2 = new P(function(resolve, reject) { reject(&quot;quux&quot;); });
var score = +(p1 instanceof P);

function thenFn(result)  { score += (result === &quot;foo&quot;);  check(); }
function catchFn(result) { score += (result === &quot;quux&quot;); check(); }
function shouldNotRun(result)  { score = -Infinity;   }

p1.then(thenFn, shouldNotRun);
p2.then(shouldNotRun, catchFn);
p1.catch(shouldNotRun);
p2.catch(catchFn);

p1.then(function() {
  // P.prototype.then() should return a new P
  score += p1.then() instanceof P &amp;&amp; p1.then() !== p1;
  check();
});

function check() {
  if (score === 5) asyncTestPassed();
}</div>}
```
###correct prototype chain
          
```
function(){
              <div class="code">class C extends Promise {}
var c = new C(function(resolve, reject) { resolve(&quot;foo&quot;); });
return c instanceof C &amp;&amp; c instanceof Promise &amp;&amp; Object.getPrototypeOf(C) === Promise;</div>}
```
###Promise.all
          
```
function(){
              <div class="code">class P extends Promise {}
var fulfills = P.all([
  new Promise(function(resolve)   { setTimeout(resolve,200,&quot;foo&quot;); }),
  new Promise(function(resolve)   { setTimeout(resolve,100,&quot;bar&quot;); }),
]);
var rejects = P.all([
  new Promise(function(_, reject) { setTimeout(reject, 200,&quot;baz&quot;); }),
  new Promise(function(_, reject) { setTimeout(reject, 100,&quot;qux&quot;); }),
]);
var score = +(fulfills instanceof P);
fulfills.then(function(result) { score += (result + &quot;&quot; === &quot;foo,bar&quot;); check(); });
rejects.catch(function(result) { score += (result === &quot;qux&quot;); check(); });

function check() {
  if (score === 3) asyncTestPassed();
}</div>}
```
###Promise.race
          
```
function(){
              <div class="code">class P extends Promise {}
var fulfills = P.race([
  new Promise(function(resolve)   { setTimeout(resolve,200,&quot;foo&quot;); }),
  new Promise(function(_, reject) { setTimeout(reject, 300,&quot;bar&quot;); }),
]);
var rejects = P.race([
  new Promise(function(_, reject) { setTimeout(reject, 200,&quot;baz&quot;); }),
  new Promise(function(resolve)   { setTimeout(resolve,300,&quot;qux&quot;); }),
]);
var score = +(fulfills instanceof P);
fulfills.then(function(result) { score += (result === &quot;foo&quot;); check(); });
rejects.catch(function(result) { score += (result === &quot;baz&quot;); check(); });

function check() {
  if (score === 3) asyncTestPassed();
}</div>}
```
###basic functionality
          
```
function(){
              <div class="code">class P extends Promise {}
var p1 = new P(function(resolve, reject) { resolve(&quot;foo&quot;); });
var p2 = new P(function(resolve, reject) { reject(&quot;quux&quot;); });
var score = +(p1 instanceof P);

function thenFn(result)  { score += (result === &quot;foo&quot;);  check(); }
function catchFn(result) { score += (result === &quot;quux&quot;); check(); }
function shouldNotRun(result)  { score = -Infinity;   }

p1.then(thenFn, shouldNotRun);
p2.then(shouldNotRun, catchFn);
p1.catch(shouldNotRun);
p2.catch(catchFn);

p1.then(function() {
  // P.prototype.then() should return a new P
  score += p1.then() instanceof P &amp;&amp; p1.then() !== p1;
  check();
});

function check() {
  if (score === 5) asyncTestPassed();
}</div>}
```
###correct prototype chain
          
```
function(){
              <div class="code">class C extends Promise {}
var c = new C(function(resolve, reject) { resolve(&quot;foo&quot;); });
return c instanceof C &amp;&amp; c instanceof Promise &amp;&amp; Object.getPrototypeOf(C) === Promise;</div>}
```
###Promise.all
          
```
function(){
              <div class="code">class P extends Promise {}
var fulfills = P.all([
  new Promise(function(resolve)   { setTimeout(resolve,200,&quot;foo&quot;); }),
  new Promise(function(resolve)   { setTimeout(resolve,100,&quot;bar&quot;); }),
]);
var rejects = P.all([
  new Promise(function(_, reject) { setTimeout(reject, 200,&quot;baz&quot;); }),
  new Promise(function(_, reject) { setTimeout(reject, 100,&quot;qux&quot;); }),
]);
var score = +(fulfills instanceof P);
fulfills.then(function(result) { score += (result + &quot;&quot; === &quot;foo,bar&quot;); check(); });
rejects.catch(function(result) { score += (result === &quot;qux&quot;); check(); });

function check() {
  if (score === 3) asyncTestPassed();
}</div>}
```
###Promise.race
          
```
function(){
              <div class="code">class P extends Promise {}
var fulfills = P.race([
  new Promise(function(resolve)   { setTimeout(resolve,200,&quot;foo&quot;); }),
  new Promise(function(_, reject) { setTimeout(reject, 300,&quot;bar&quot;); }),
]);
var rejects = P.race([
  new Promise(function(_, reject) { setTimeout(reject, 200,&quot;baz&quot;); }),
  new Promise(function(resolve)   { setTimeout(resolve,300,&quot;qux&quot;); }),
]);
var score = +(fulfills instanceof P);
fulfills.then(function(result) { score += (result === &quot;foo&quot;); check(); });
rejects.catch(function(result) { score += (result === &quot;baz&quot;); check(); });

function check() {
  if (score === 3) asyncTestPassed();
}</div>}
```
###basic functionality
          
```
function(){
              <div class="code">class P extends Promise {}
var p1 = new P(function(resolve, reject) { resolve(&quot;foo&quot;); });
var p2 = new P(function(resolve, reject) { reject(&quot;quux&quot;); });
var score = +(p1 instanceof P);

function thenFn(result)  { score += (result === &quot;foo&quot;);  check(); }
function catchFn(result) { score += (result === &quot;quux&quot;); check(); }
function shouldNotRun(result)  { score = -Infinity;   }

p1.then(thenFn, shouldNotRun);
p2.then(shouldNotRun, catchFn);
p1.catch(shouldNotRun);
p2.catch(catchFn);

p1.then(function() {
  // P.prototype.then() should return a new P
  score += p1.then() instanceof P &amp;&amp; p1.then() !== p1;
  check();
});

function check() {
  if (score === 5) asyncTestPassed();
}</div>}
```
###correct prototype chain
          
```
function(){
              <div class="code">class C extends Promise {}
var c = new C(function(resolve, reject) { resolve(&quot;foo&quot;); });
return c instanceof C &amp;&amp; c instanceof Promise &amp;&amp; Object.getPrototypeOf(C) === Promise;</div>}
```
###Promise.all
          
```
function(){
              <div class="code">class P extends Promise {}
var fulfills = P.all([
  new Promise(function(resolve)   { setTimeout(resolve,200,&quot;foo&quot;); }),
  new Promise(function(resolve)   { setTimeout(resolve,100,&quot;bar&quot;); }),
]);
var rejects = P.all([
  new Promise(function(_, reject) { setTimeout(reject, 200,&quot;baz&quot;); }),
  new Promise(function(_, reject) { setTimeout(reject, 100,&quot;qux&quot;); }),
]);
var score = +(fulfills instanceof P);
fulfills.then(function(result) { score += (result + &quot;&quot; === &quot;foo,bar&quot;); check(); });
rejects.catch(function(result) { score += (result === &quot;qux&quot;); check(); });

function check() {
  if (score === 3) asyncTestPassed();
}</div>}
```
###Promise.race
          
```
function(){
              <div class="code">class P extends Promise {}
var fulfills = P.race([
  new Promise(function(resolve)   { setTimeout(resolve,200,&quot;foo&quot;); }),
  new Promise(function(_, reject) { setTimeout(reject, 300,&quot;bar&quot;); }),
]);
var rejects = P.race([
  new Promise(function(_, reject) { setTimeout(reject, 200,&quot;baz&quot;); }),
  new Promise(function(resolve)   { setTimeout(resolve,300,&quot;qux&quot;); }),
]);
var score = +(fulfills instanceof P);
fulfills.then(function(result) { score += (result === &quot;foo&quot;); check(); });
rejects.catch(function(result) { score += (result === &quot;baz&quot;); check(); });

function check() {
  if (score === 3) asyncTestPassed();
}</div>}
```
###basic functionality
          
```
function(){
              <div class="code">class P extends Promise {}
var p1 = new P(function(resolve, reject) { resolve(&quot;foo&quot;); });
var p2 = new P(function(resolve, reject) { reject(&quot;quux&quot;); });
var score = +(p1 instanceof P);

function thenFn(result)  { score += (result === &quot;foo&quot;);  check(); }
function catchFn(result) { score += (result === &quot;quux&quot;); check(); }
function shouldNotRun(result)  { score = -Infinity;   }

p1.then(thenFn, shouldNotRun);
p2.then(shouldNotRun, catchFn);
p1.catch(shouldNotRun);
p2.catch(catchFn);

p1.then(function() {
  // P.prototype.then() should return a new P
  score += p1.then() instanceof P &amp;&amp; p1.then() !== p1;
  check();
});

function check() {
  if (score === 5) asyncTestPassed();
}</div>}
```
###correct prototype chain
          
```
function(){
              <div class="code">class C extends Promise {}
var c = new C(function(resolve, reject) { resolve(&quot;foo&quot;); });
return c instanceof C &amp;&amp; c instanceof Promise &amp;&amp; Object.getPrototypeOf(C) === Promise;</div>}
```
###Promise.all
          
```
function(){
              <div class="code">class P extends Promise {}
var fulfills = P.all([
  new Promise(function(resolve)   { setTimeout(resolve,200,&quot;foo&quot;); }),
  new Promise(function(resolve)   { setTimeout(resolve,100,&quot;bar&quot;); }),
]);
var rejects = P.all([
  new Promise(function(_, reject) { setTimeout(reject, 200,&quot;baz&quot;); }),
  new Promise(function(_, reject) { setTimeout(reject, 100,&quot;qux&quot;); }),
]);
var score = +(fulfills instanceof P);
fulfills.then(function(result) { score += (result + &quot;&quot; === &quot;foo,bar&quot;); check(); });
rejects.catch(function(result) { score += (result === &quot;qux&quot;); check(); });

function check() {
  if (score === 3) asyncTestPassed();
}</div>}
```
###Promise.race
          
```
function(){
              <div class="code">class P extends Promise {}
var fulfills = P.race([
  new Promise(function(resolve)   { setTimeout(resolve,200,&quot;foo&quot;); }),
  new Promise(function(_, reject) { setTimeout(reject, 300,&quot;bar&quot;); }),
]);
var rejects = P.race([
  new Promise(function(_, reject) { setTimeout(reject, 200,&quot;baz&quot;); }),
  new Promise(function(resolve)   { setTimeout(resolve,300,&quot;qux&quot;); }),
]);
var score = +(fulfills instanceof P);
fulfills.then(function(result) { score += (result === &quot;foo&quot;); check(); });
rejects.catch(function(result) { score += (result === &quot;baz&quot;); check(); });

function check() {
  if (score === 3) asyncTestPassed();
}</div>}
```
###basic functionality
          
```
function(){
              <div class="code">class P extends Promise {}
var p1 = new P(function(resolve, reject) { resolve(&quot;foo&quot;); });
var p2 = new P(function(resolve, reject) { reject(&quot;quux&quot;); });
var score = +(p1 instanceof P);

function thenFn(result)  { score += (result === &quot;foo&quot;);  check(); }
function catchFn(result) { score += (result === &quot;quux&quot;); check(); }
function shouldNotRun(result)  { score = -Infinity;   }

p1.then(thenFn, shouldNotRun);
p2.then(shouldNotRun, catchFn);
p1.catch(shouldNotRun);
p2.catch(catchFn);

p1.then(function() {
  // P.prototype.then() should return a new P
  score += p1.then() instanceof P &amp;&amp; p1.then() !== p1;
  check();
});

function check() {
  if (score === 5) asyncTestPassed();
}</div>}
```
###correct prototype chain
          
```
function(){
              <div class="code">class C extends Promise {}
var c = new C(function(resolve, reject) { resolve(&quot;foo&quot;); });
return c instanceof C &amp;&amp; c instanceof Promise &amp;&amp; Object.getPrototypeOf(C) === Promise;</div>}
```
###Promise.all
          
```
function(){
              <div class="code">class P extends Promise {}
var fulfills = P.all([
  new Promise(function(resolve)   { setTimeout(resolve,200,&quot;foo&quot;); }),
  new Promise(function(resolve)   { setTimeout(resolve,100,&quot;bar&quot;); }),
]);
var rejects = P.all([
  new Promise(function(_, reject) { setTimeout(reject, 200,&quot;baz&quot;); }),
  new Promise(function(_, reject) { setTimeout(reject, 100,&quot;qux&quot;); }),
]);
var score = +(fulfills instanceof P);
fulfills.then(function(result) { score += (result + &quot;&quot; === &quot;foo,bar&quot;); check(); });
rejects.catch(function(result) { score += (result === &quot;qux&quot;); check(); });

function check() {
  if (score === 3) asyncTestPassed();
}</div>}
```
###Promise.race
          
```
function(){
              <div class="code">class P extends Promise {}
var fulfills = P.race([
  new Promise(function(resolve)   { setTimeout(resolve,200,&quot;foo&quot;); }),
  new Promise(function(_, reject) { setTimeout(reject, 300,&quot;bar&quot;); }),
]);
var rejects = P.race([
  new Promise(function(_, reject) { setTimeout(reject, 200,&quot;baz&quot;); }),
  new Promise(function(resolve)   { setTimeout(resolve,300,&quot;qux&quot;); }),
]);
var score = +(fulfills instanceof P);
fulfills.then(function(result) { score += (result === &quot;foo&quot;); check(); });
rejects.catch(function(result) { score += (result === &quot;baz&quot;); check(); });

function check() {
  if (score === 3) asyncTestPassed();
}</div>}
```
###basic functionality
          
```
function(){
              <div class="code">class P extends Promise {}
var p1 = new P(function(resolve, reject) { resolve(&quot;foo&quot;); });
var p2 = new P(function(resolve, reject) { reject(&quot;quux&quot;); });
var score = +(p1 instanceof P);

function thenFn(result)  { score += (result === &quot;foo&quot;);  check(); }
function catchFn(result) { score += (result === &quot;quux&quot;); check(); }
function shouldNotRun(result)  { score = -Infinity;   }

p1.then(thenFn, shouldNotRun);
p2.then(shouldNotRun, catchFn);
p1.catch(shouldNotRun);
p2.catch(catchFn);

p1.then(function() {
  // P.prototype.then() should return a new P
  score += p1.then() instanceof P &amp;&amp; p1.then() !== p1;
  check();
});

function check() {
  if (score === 5) asyncTestPassed();
}</div>}
```
###correct prototype chain
          
```
function(){
              <div class="code">class C extends Promise {}
var c = new C(function(resolve, reject) { resolve(&quot;foo&quot;); });
return c instanceof C &amp;&amp; c instanceof Promise &amp;&amp; Object.getPrototypeOf(C) === Promise;</div>}
```
###Promise.all
          
```
function(){
              <div class="code">class P extends Promise {}
var fulfills = P.all([
  new Promise(function(resolve)   { setTimeout(resolve,200,&quot;foo&quot;); }),
  new Promise(function(resolve)   { setTimeout(resolve,100,&quot;bar&quot;); }),
]);
var rejects = P.all([
  new Promise(function(_, reject) { setTimeout(reject, 200,&quot;baz&quot;); }),
  new Promise(function(_, reject) { setTimeout(reject, 100,&quot;qux&quot;); }),
]);
var score = +(fulfills instanceof P);
fulfills.then(function(result) { score += (result + &quot;&quot; === &quot;foo,bar&quot;); check(); });
rejects.catch(function(result) { score += (result === &quot;qux&quot;); check(); });

function check() {
  if (score === 3) asyncTestPassed();
}</div>}
```
###Promise.race
          
```
function(){
              <div class="code">class P extends Promise {}
var fulfills = P.race([
  new Promise(function(resolve)   { setTimeout(resolve,200,&quot;foo&quot;); }),
  new Promise(function(_, reject) { setTimeout(reject, 300,&quot;bar&quot;); }),
]);
var rejects = P.race([
  new Promise(function(_, reject) { setTimeout(reject, 200,&quot;baz&quot;); }),
  new Promise(function(resolve)   { setTimeout(resolve,300,&quot;qux&quot;); }),
]);
var score = +(fulfills instanceof P);
fulfills.then(function(result) { score += (result === &quot;foo&quot;); check(); });
rejects.catch(function(result) { score += (result === &quot;baz&quot;); check(); });

function check() {
  if (score === 3) asyncTestPassed();
}</div>}
```
###basic functionality
          
```
function(){
              <div class="code">class P extends Promise {}
var p1 = new P(function(resolve, reject) { resolve(&quot;foo&quot;); });
var p2 = new P(function(resolve, reject) { reject(&quot;quux&quot;); });
var score = +(p1 instanceof P);

function thenFn(result)  { score += (result === &quot;foo&quot;);  check(); }
function catchFn(result) { score += (result === &quot;quux&quot;); check(); }
function shouldNotRun(result)  { score = -Infinity;   }

p1.then(thenFn, shouldNotRun);
p2.then(shouldNotRun, catchFn);
p1.catch(shouldNotRun);
p2.catch(catchFn);

p1.then(function() {
  // P.prototype.then() should return a new P
  score += p1.then() instanceof P &amp;&amp; p1.then() !== p1;
  check();
});

function check() {
  if (score === 5) asyncTestPassed();
}</div>}
```
###correct prototype chain
          
```
function(){
              <div class="code">class C extends Promise {}
var c = new C(function(resolve, reject) { resolve(&quot;foo&quot;); });
return c instanceof C &amp;&amp; c instanceof Promise &amp;&amp; Object.getPrototypeOf(C) === Promise;</div>}
```
###Promise.all
          
```
function(){
              <div class="code">class P extends Promise {}
var fulfills = P.all([
  new Promise(function(resolve)   { setTimeout(resolve,200,&quot;foo&quot;); }),
  new Promise(function(resolve)   { setTimeout(resolve,100,&quot;bar&quot;); }),
]);
var rejects = P.all([
  new Promise(function(_, reject) { setTimeout(reject, 200,&quot;baz&quot;); }),
  new Promise(function(_, reject) { setTimeout(reject, 100,&quot;qux&quot;); }),
]);
var score = +(fulfills instanceof P);
fulfills.then(function(result) { score += (result + &quot;&quot; === &quot;foo,bar&quot;); check(); });
rejects.catch(function(result) { score += (result === &quot;qux&quot;); check(); });

function check() {
  if (score === 3) asyncTestPassed();
}</div>}
```
###Promise.race
          
```
function(){
              <div class="code">class P extends Promise {}
var fulfills = P.race([
  new Promise(function(resolve)   { setTimeout(resolve,200,&quot;foo&quot;); }),
  new Promise(function(_, reject) { setTimeout(reject, 300,&quot;bar&quot;); }),
]);
var rejects = P.race([
  new Promise(function(_, reject) { setTimeout(reject, 200,&quot;baz&quot;); }),
  new Promise(function(resolve)   { setTimeout(resolve,300,&quot;qux&quot;); }),
]);
var score = +(fulfills instanceof P);
fulfills.then(function(result) { score += (result === &quot;foo&quot;); check(); });
rejects.catch(function(result) { score += (result === &quot;baz&quot;); check(); });

function check() {
  if (score === 3) asyncTestPassed();
}</div>}
```
###basic functionality
          
```
function(){
              <div class="code">class P extends Promise {}
var p1 = new P(function(resolve, reject) { resolve(&quot;foo&quot;); });
var p2 = new P(function(resolve, reject) { reject(&quot;quux&quot;); });
var score = +(p1 instanceof P);

function thenFn(result)  { score += (result === &quot;foo&quot;);  check(); }
function catchFn(result) { score += (result === &quot;quux&quot;); check(); }
function shouldNotRun(result)  { score = -Infinity;   }

p1.then(thenFn, shouldNotRun);
p2.then(shouldNotRun, catchFn);
p1.catch(shouldNotRun);
p2.catch(catchFn);

p1.then(function() {
  // P.prototype.then() should return a new P
  score += p1.then() instanceof P &amp;&amp; p1.then() !== p1;
  check();
});

function check() {
  if (score === 5) asyncTestPassed();
}</div>}
```
###correct prototype chain
          
```
function(){
              <div class="code">class C extends Promise {}
var c = new C(function(resolve, reject) { resolve(&quot;foo&quot;); });
return c instanceof C &amp;&amp; c instanceof Promise &amp;&amp; Object.getPrototypeOf(C) === Promise;</div>}
```
###Promise.all
          
```
function(){
              <div class="code">class P extends Promise {}
var fulfills = P.all([
  new Promise(function(resolve)   { setTimeout(resolve,200,&quot;foo&quot;); }),
  new Promise(function(resolve)   { setTimeout(resolve,100,&quot;bar&quot;); }),
]);
var rejects = P.all([
  new Promise(function(_, reject) { setTimeout(reject, 200,&quot;baz&quot;); }),
  new Promise(function(_, reject) { setTimeout(reject, 100,&quot;qux&quot;); }),
]);
var score = +(fulfills instanceof P);
fulfills.then(function(result) { score += (result + &quot;&quot; === &quot;foo,bar&quot;); check(); });
rejects.catch(function(result) { score += (result === &quot;qux&quot;); check(); });

function check() {
  if (score === 3) asyncTestPassed();
}</div>}
```
###Promise.race
          
```
function(){
              <div class="code">class P extends Promise {}
var fulfills = P.race([
  new Promise(function(resolve)   { setTimeout(resolve,200,&quot;foo&quot;); }),
  new Promise(function(_, reject) { setTimeout(reject, 300,&quot;bar&quot;); }),
]);
var rejects = P.race([
  new Promise(function(_, reject) { setTimeout(reject, 200,&quot;baz&quot;); }),
  new Promise(function(resolve)   { setTimeout(resolve,300,&quot;qux&quot;); }),
]);
var score = +(fulfills instanceof P);
fulfills.then(function(result) { score += (result === &quot;foo&quot;); check(); });
rejects.catch(function(result) { score += (result === &quot;baz&quot;); check(); });

function check() {
  if (score === 3) asyncTestPassed();
}</div>}
```
###basic functionality
          
```
function(){
              <div class="code">class P extends Promise {}
var p1 = new P(function(resolve, reject) { resolve(&quot;foo&quot;); });
var p2 = new P(function(resolve, reject) { reject(&quot;quux&quot;); });
var score = +(p1 instanceof P);

function thenFn(result)  { score += (result === &quot;foo&quot;);  check(); }
function catchFn(result) { score += (result === &quot;quux&quot;); check(); }
function shouldNotRun(result)  { score = -Infinity;   }

p1.then(thenFn, shouldNotRun);
p2.then(shouldNotRun, catchFn);
p1.catch(shouldNotRun);
p2.catch(catchFn);

p1.then(function() {
  // P.prototype.then() should return a new P
  score += p1.then() instanceof P &amp;&amp; p1.then() !== p1;
  check();
});

function check() {
  if (score === 5) asyncTestPassed();
}</div>}
```
###correct prototype chain
          
```
function(){
              <div class="code">class C extends Promise {}
var c = new C(function(resolve, reject) { resolve(&quot;foo&quot;); });
return c instanceof C &amp;&amp; c instanceof Promise &amp;&amp; Object.getPrototypeOf(C) === Promise;</div>}
```
###Promise.all
          
```
function(){
              <div class="code">class P extends Promise {}
var fulfills = P.all([
  new Promise(function(resolve)   { setTimeout(resolve,200,&quot;foo&quot;); }),
  new Promise(function(resolve)   { setTimeout(resolve,100,&quot;bar&quot;); }),
]);
var rejects = P.all([
  new Promise(function(_, reject) { setTimeout(reject, 200,&quot;baz&quot;); }),
  new Promise(function(_, reject) { setTimeout(reject, 100,&quot;qux&quot;); }),
]);
var score = +(fulfills instanceof P);
fulfills.then(function(result) { score += (result + &quot;&quot; === &quot;foo,bar&quot;); check(); });
rejects.catch(function(result) { score += (result === &quot;qux&quot;); check(); });

function check() {
  if (score === 3) asyncTestPassed();
}</div>}
```
###Promise.race
          
```
function(){
              <div class="code">class P extends Promise {}
var fulfills = P.race([
  new Promise(function(resolve)   { setTimeout(resolve,200,&quot;foo&quot;); }),
  new Promise(function(_, reject) { setTimeout(reject, 300,&quot;bar&quot;); }),
]);
var rejects = P.race([
  new Promise(function(_, reject) { setTimeout(reject, 200,&quot;baz&quot;); }),
  new Promise(function(resolve)   { setTimeout(resolve,300,&quot;qux&quot;); }),
]);
var score = +(fulfills instanceof P);
fulfills.then(function(result) { score += (result === &quot;foo&quot;); check(); });
rejects.catch(function(result) { score += (result === &quot;baz&quot;); check(); });

function check() {
  if (score === 3) asyncTestPassed();
}</div>}
```
