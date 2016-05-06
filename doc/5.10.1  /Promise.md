###basic functionality
          
```
function(){
              <div class="code">var p1 = new Promise(function(resolve, reject) { resolve(&quot;foo&quot;); });
var p2 = new Promise(function(resolve, reject) { reject(&quot;quux&quot;); });
var score = 0;

function thenFn(result)  { score += (result === &quot;foo&quot;);  check(); }
function catchFn(result) { score += (result === &quot;quux&quot;); check(); }
function shouldNotRun(result)  { score = -Infinity;   }

p1.then(thenFn, shouldNotRun);
p2.then(shouldNotRun, catchFn);
p1.catch(shouldNotRun);
p2.catch(catchFn);

p1.then(function() {
  // Promise.prototype.then() should return a new Promise
  score += p1.then() !== p1;
  check();
});

function check() {
  if (score === 4) asyncTestPassed();
}</div>}
```
###constructor requires new
          
```
function(){
              <div class="code">new Promise(function(){});
try {
  Promise(function(){});
  return false;
} catch(e) {
  return true;
}</div>}
```
###Promise.prototype isn't an instance
          
```
function(){
              <div class="code">new Promise(function(){});
try {
  Promise.prototype.then(function(){});
} catch (e) {
  return true;
}</div>}
```
###Promise.all
          
```
function(){
              <div class="code">var fulfills = Promise.all([
  new Promise(function(resolve)   { setTimeout(resolve,200,&quot;foo&quot;); }),
  new Promise(function(resolve)   { setTimeout(resolve,100,&quot;bar&quot;); }),
]);
var rejects = Promise.all([
  new Promise(function(_, reject) { setTimeout(reject, 200,&quot;baz&quot;); }),
  new Promise(function(_, reject) { setTimeout(reject, 100,&quot;qux&quot;); }),
]);
var score = 0;
fulfills.then(function(result) { score += (result + &quot;&quot; === &quot;foo,bar&quot;); check(); });
rejects.catch(function(result) { score += (result === &quot;qux&quot;); check(); });

function check() {
  if (score === 2) asyncTestPassed();
}</div>}
```
###Promise.all, generic iterables
          
```
function(){
              <div class="code">var fulfills = Promise.all(global.__createIterableObject([
  new Promise(function(resolve)   { setTimeout(resolve,200,&quot;foo&quot;); }),
  new Promise(function(resolve)   { setTimeout(resolve,100,&quot;bar&quot;); }),
]));
var rejects = Promise.all(global.__createIterableObject([
  new Promise(function(_, reject) { setTimeout(reject, 200,&quot;baz&quot;); }),
  new Promise(function(_, reject) { setTimeout(reject, 100,&quot;qux&quot;); }),
]));
var score = 0;
fulfills.then(function(result) { score += (result + &quot;&quot; === &quot;foo,bar&quot;); check(); });
rejects.catch(function(result) { score += (result === &quot;qux&quot;); check(); });

function check() {
  if (score === 2) asyncTestPassed();
}</div>}
```
###Promise.race
          
```
function(){
              <div class="code">var fulfills = Promise.race([
  new Promise(function(resolve)   { setTimeout(resolve,200,&quot;foo&quot;); }),
  new Promise(function(_, reject) { setTimeout(reject, 300,&quot;bar&quot;); }),
]);
var rejects = Promise.race([
  new Promise(function(_, reject) { setTimeout(reject, 200,&quot;baz&quot;); }),
  new Promise(function(resolve)   { setTimeout(resolve,300,&quot;qux&quot;); }),
]);
var score = 0;
fulfills.then(function(result) { score += (result === &quot;foo&quot;); check(); });
rejects.catch(function(result) { score += (result === &quot;baz&quot;); check(); });

function check() {
  if (score === 2) asyncTestPassed();
}</div>}
```
###Promise.race, generic iterables
          
```
function(){
              <div class="code">var fulfills = Promise.race(global.__createIterableObject([
  new Promise(function(resolve)   { setTimeout(resolve,200,&quot;foo&quot;); }),
  new Promise(function(_, reject) { setTimeout(reject, 300,&quot;bar&quot;); }),
]));
var rejects = Promise.race(global.__createIterableObject([
  new Promise(function(_, reject) { setTimeout(reject, 200,&quot;baz&quot;); }),
  new Promise(function(resolve)   { setTimeout(resolve,300,&quot;qux&quot;); }),
]));
var score = 0;
fulfills.then(function(result) { score += (result === &quot;foo&quot;); check(); });
rejects.catch(function(result) { score += (result === &quot;baz&quot;); check(); });

function check() {
  if (score === 2) asyncTestPassed();
}</div>}
```
###basic functionality
          
```
function(){
              <div class="code">var p1 = new Promise(function(resolve, reject) { resolve(&quot;foo&quot;); });
var p2 = new Promise(function(resolve, reject) { reject(&quot;quux&quot;); });
var score = 0;

function thenFn(result)  { score += (result === &quot;foo&quot;);  check(); }
function catchFn(result) { score += (result === &quot;quux&quot;); check(); }
function shouldNotRun(result)  { score = -Infinity;   }

p1.then(thenFn, shouldNotRun);
p2.then(shouldNotRun, catchFn);
p1.catch(shouldNotRun);
p2.catch(catchFn);

p1.then(function() {
  // Promise.prototype.then() should return a new Promise
  score += p1.then() !== p1;
  check();
});

function check() {
  if (score === 4) asyncTestPassed();
}</div>}
```
###constructor requires new
          
```
function(){
              <div class="code">new Promise(function(){});
try {
  Promise(function(){});
  return false;
} catch(e) {
  return true;
}</div>}
```
###Promise.prototype isn't an instance
          
```
function(){
              <div class="code">new Promise(function(){});
try {
  Promise.prototype.then(function(){});
} catch (e) {
  return true;
}</div>}
```
###Promise.all
          
```
function(){
              <div class="code">var fulfills = Promise.all([
  new Promise(function(resolve)   { setTimeout(resolve,200,&quot;foo&quot;); }),
  new Promise(function(resolve)   { setTimeout(resolve,100,&quot;bar&quot;); }),
]);
var rejects = Promise.all([
  new Promise(function(_, reject) { setTimeout(reject, 200,&quot;baz&quot;); }),
  new Promise(function(_, reject) { setTimeout(reject, 100,&quot;qux&quot;); }),
]);
var score = 0;
fulfills.then(function(result) { score += (result + &quot;&quot; === &quot;foo,bar&quot;); check(); });
rejects.catch(function(result) { score += (result === &quot;qux&quot;); check(); });

function check() {
  if (score === 2) asyncTestPassed();
}</div>}
```
###Promise.all, generic iterables
          
```
function(){
              <div class="code">var fulfills = Promise.all(global.__createIterableObject([
  new Promise(function(resolve)   { setTimeout(resolve,200,&quot;foo&quot;); }),
  new Promise(function(resolve)   { setTimeout(resolve,100,&quot;bar&quot;); }),
]));
var rejects = Promise.all(global.__createIterableObject([
  new Promise(function(_, reject) { setTimeout(reject, 200,&quot;baz&quot;); }),
  new Promise(function(_, reject) { setTimeout(reject, 100,&quot;qux&quot;); }),
]));
var score = 0;
fulfills.then(function(result) { score += (result + &quot;&quot; === &quot;foo,bar&quot;); check(); });
rejects.catch(function(result) { score += (result === &quot;qux&quot;); check(); });

function check() {
  if (score === 2) asyncTestPassed();
}</div>}
```
###Promise.race
          
```
function(){
              <div class="code">var fulfills = Promise.race([
  new Promise(function(resolve)   { setTimeout(resolve,200,&quot;foo&quot;); }),
  new Promise(function(_, reject) { setTimeout(reject, 300,&quot;bar&quot;); }),
]);
var rejects = Promise.race([
  new Promise(function(_, reject) { setTimeout(reject, 200,&quot;baz&quot;); }),
  new Promise(function(resolve)   { setTimeout(resolve,300,&quot;qux&quot;); }),
]);
var score = 0;
fulfills.then(function(result) { score += (result === &quot;foo&quot;); check(); });
rejects.catch(function(result) { score += (result === &quot;baz&quot;); check(); });

function check() {
  if (score === 2) asyncTestPassed();
}</div>}
```
###Promise.race, generic iterables
          
```
function(){
              <div class="code">var fulfills = Promise.race(global.__createIterableObject([
  new Promise(function(resolve)   { setTimeout(resolve,200,&quot;foo&quot;); }),
  new Promise(function(_, reject) { setTimeout(reject, 300,&quot;bar&quot;); }),
]));
var rejects = Promise.race(global.__createIterableObject([
  new Promise(function(_, reject) { setTimeout(reject, 200,&quot;baz&quot;); }),
  new Promise(function(resolve)   { setTimeout(resolve,300,&quot;qux&quot;); }),
]));
var score = 0;
fulfills.then(function(result) { score += (result === &quot;foo&quot;); check(); });
rejects.catch(function(result) { score += (result === &quot;baz&quot;); check(); });

function check() {
  if (score === 2) asyncTestPassed();
}</div>}
```
###basic functionality
          
```
function(){
              <div class="code">var p1 = new Promise(function(resolve, reject) { resolve(&quot;foo&quot;); });
var p2 = new Promise(function(resolve, reject) { reject(&quot;quux&quot;); });
var score = 0;

function thenFn(result)  { score += (result === &quot;foo&quot;);  check(); }
function catchFn(result) { score += (result === &quot;quux&quot;); check(); }
function shouldNotRun(result)  { score = -Infinity;   }

p1.then(thenFn, shouldNotRun);
p2.then(shouldNotRun, catchFn);
p1.catch(shouldNotRun);
p2.catch(catchFn);

p1.then(function() {
  // Promise.prototype.then() should return a new Promise
  score += p1.then() !== p1;
  check();
});

function check() {
  if (score === 4) asyncTestPassed();
}</div>}
```
###constructor requires new
          
```
function(){
              <div class="code">new Promise(function(){});
try {
  Promise(function(){});
  return false;
} catch(e) {
  return true;
}</div>}
```
###Promise.prototype isn't an instance
          
```
function(){
              <div class="code">new Promise(function(){});
try {
  Promise.prototype.then(function(){});
} catch (e) {
  return true;
}</div>}
```
###Promise.all
          
```
function(){
              <div class="code">var fulfills = Promise.all([
  new Promise(function(resolve)   { setTimeout(resolve,200,&quot;foo&quot;); }),
  new Promise(function(resolve)   { setTimeout(resolve,100,&quot;bar&quot;); }),
]);
var rejects = Promise.all([
  new Promise(function(_, reject) { setTimeout(reject, 200,&quot;baz&quot;); }),
  new Promise(function(_, reject) { setTimeout(reject, 100,&quot;qux&quot;); }),
]);
var score = 0;
fulfills.then(function(result) { score += (result + &quot;&quot; === &quot;foo,bar&quot;); check(); });
rejects.catch(function(result) { score += (result === &quot;qux&quot;); check(); });

function check() {
  if (score === 2) asyncTestPassed();
}</div>}
```
###Promise.all, generic iterables
          
```
function(){
              <div class="code">var fulfills = Promise.all(global.__createIterableObject([
  new Promise(function(resolve)   { setTimeout(resolve,200,&quot;foo&quot;); }),
  new Promise(function(resolve)   { setTimeout(resolve,100,&quot;bar&quot;); }),
]));
var rejects = Promise.all(global.__createIterableObject([
  new Promise(function(_, reject) { setTimeout(reject, 200,&quot;baz&quot;); }),
  new Promise(function(_, reject) { setTimeout(reject, 100,&quot;qux&quot;); }),
]));
var score = 0;
fulfills.then(function(result) { score += (result + &quot;&quot; === &quot;foo,bar&quot;); check(); });
rejects.catch(function(result) { score += (result === &quot;qux&quot;); check(); });

function check() {
  if (score === 2) asyncTestPassed();
}</div>}
```
###Promise.race
          
```
function(){
              <div class="code">var fulfills = Promise.race([
  new Promise(function(resolve)   { setTimeout(resolve,200,&quot;foo&quot;); }),
  new Promise(function(_, reject) { setTimeout(reject, 300,&quot;bar&quot;); }),
]);
var rejects = Promise.race([
  new Promise(function(_, reject) { setTimeout(reject, 200,&quot;baz&quot;); }),
  new Promise(function(resolve)   { setTimeout(resolve,300,&quot;qux&quot;); }),
]);
var score = 0;
fulfills.then(function(result) { score += (result === &quot;foo&quot;); check(); });
rejects.catch(function(result) { score += (result === &quot;baz&quot;); check(); });

function check() {
  if (score === 2) asyncTestPassed();
}</div>}
```
###Promise.race, generic iterables
          
```
function(){
              <div class="code">var fulfills = Promise.race(global.__createIterableObject([
  new Promise(function(resolve)   { setTimeout(resolve,200,&quot;foo&quot;); }),
  new Promise(function(_, reject) { setTimeout(reject, 300,&quot;bar&quot;); }),
]));
var rejects = Promise.race(global.__createIterableObject([
  new Promise(function(_, reject) { setTimeout(reject, 200,&quot;baz&quot;); }),
  new Promise(function(resolve)   { setTimeout(resolve,300,&quot;qux&quot;); }),
]));
var score = 0;
fulfills.then(function(result) { score += (result === &quot;foo&quot;); check(); });
rejects.catch(function(result) { score += (result === &quot;baz&quot;); check(); });

function check() {
  if (score === 2) asyncTestPassed();
}</div>}
```
###basic functionality
          
```
function(){
              <div class="code">var p1 = new Promise(function(resolve, reject) { resolve(&quot;foo&quot;); });
var p2 = new Promise(function(resolve, reject) { reject(&quot;quux&quot;); });
var score = 0;

function thenFn(result)  { score += (result === &quot;foo&quot;);  check(); }
function catchFn(result) { score += (result === &quot;quux&quot;); check(); }
function shouldNotRun(result)  { score = -Infinity;   }

p1.then(thenFn, shouldNotRun);
p2.then(shouldNotRun, catchFn);
p1.catch(shouldNotRun);
p2.catch(catchFn);

p1.then(function() {
  // Promise.prototype.then() should return a new Promise
  score += p1.then() !== p1;
  check();
});

function check() {
  if (score === 4) asyncTestPassed();
}</div>}
```
###constructor requires new
          
```
function(){
              <div class="code">new Promise(function(){});
try {
  Promise(function(){});
  return false;
} catch(e) {
  return true;
}</div>}
```
###Promise.prototype isn't an instance
          
```
function(){
              <div class="code">new Promise(function(){});
try {
  Promise.prototype.then(function(){});
} catch (e) {
  return true;
}</div>}
```
###Promise.all
          
```
function(){
              <div class="code">var fulfills = Promise.all([
  new Promise(function(resolve)   { setTimeout(resolve,200,&quot;foo&quot;); }),
  new Promise(function(resolve)   { setTimeout(resolve,100,&quot;bar&quot;); }),
]);
var rejects = Promise.all([
  new Promise(function(_, reject) { setTimeout(reject, 200,&quot;baz&quot;); }),
  new Promise(function(_, reject) { setTimeout(reject, 100,&quot;qux&quot;); }),
]);
var score = 0;
fulfills.then(function(result) { score += (result + &quot;&quot; === &quot;foo,bar&quot;); check(); });
rejects.catch(function(result) { score += (result === &quot;qux&quot;); check(); });

function check() {
  if (score === 2) asyncTestPassed();
}</div>}
```
###Promise.all, generic iterables
          
```
function(){
              <div class="code">var fulfills = Promise.all(global.__createIterableObject([
  new Promise(function(resolve)   { setTimeout(resolve,200,&quot;foo&quot;); }),
  new Promise(function(resolve)   { setTimeout(resolve,100,&quot;bar&quot;); }),
]));
var rejects = Promise.all(global.__createIterableObject([
  new Promise(function(_, reject) { setTimeout(reject, 200,&quot;baz&quot;); }),
  new Promise(function(_, reject) { setTimeout(reject, 100,&quot;qux&quot;); }),
]));
var score = 0;
fulfills.then(function(result) { score += (result + &quot;&quot; === &quot;foo,bar&quot;); check(); });
rejects.catch(function(result) { score += (result === &quot;qux&quot;); check(); });

function check() {
  if (score === 2) asyncTestPassed();
}</div>}
```
###Promise.race
          
```
function(){
              <div class="code">var fulfills = Promise.race([
  new Promise(function(resolve)   { setTimeout(resolve,200,&quot;foo&quot;); }),
  new Promise(function(_, reject) { setTimeout(reject, 300,&quot;bar&quot;); }),
]);
var rejects = Promise.race([
  new Promise(function(_, reject) { setTimeout(reject, 200,&quot;baz&quot;); }),
  new Promise(function(resolve)   { setTimeout(resolve,300,&quot;qux&quot;); }),
]);
var score = 0;
fulfills.then(function(result) { score += (result === &quot;foo&quot;); check(); });
rejects.catch(function(result) { score += (result === &quot;baz&quot;); check(); });

function check() {
  if (score === 2) asyncTestPassed();
}</div>}
```
###Promise.race, generic iterables
          
```
function(){
              <div class="code">var fulfills = Promise.race(global.__createIterableObject([
  new Promise(function(resolve)   { setTimeout(resolve,200,&quot;foo&quot;); }),
  new Promise(function(_, reject) { setTimeout(reject, 300,&quot;bar&quot;); }),
]));
var rejects = Promise.race(global.__createIterableObject([
  new Promise(function(_, reject) { setTimeout(reject, 200,&quot;baz&quot;); }),
  new Promise(function(resolve)   { setTimeout(resolve,300,&quot;qux&quot;); }),
]));
var score = 0;
fulfills.then(function(result) { score += (result === &quot;foo&quot;); check(); });
rejects.catch(function(result) { score += (result === &quot;baz&quot;); check(); });

function check() {
  if (score === 2) asyncTestPassed();
}</div>}
```
###basic functionality
          
```
function(){
              <div class="code">var p1 = new Promise(function(resolve, reject) { resolve(&quot;foo&quot;); });
var p2 = new Promise(function(resolve, reject) { reject(&quot;quux&quot;); });
var score = 0;

function thenFn(result)  { score += (result === &quot;foo&quot;);  check(); }
function catchFn(result) { score += (result === &quot;quux&quot;); check(); }
function shouldNotRun(result)  { score = -Infinity;   }

p1.then(thenFn, shouldNotRun);
p2.then(shouldNotRun, catchFn);
p1.catch(shouldNotRun);
p2.catch(catchFn);

p1.then(function() {
  // Promise.prototype.then() should return a new Promise
  score += p1.then() !== p1;
  check();
});

function check() {
  if (score === 4) asyncTestPassed();
}</div>}
```
###constructor requires new
          
```
function(){
              <div class="code">new Promise(function(){});
try {
  Promise(function(){});
  return false;
} catch(e) {
  return true;
}</div>}
```
###Promise.prototype isn't an instance
          
```
function(){
              <div class="code">new Promise(function(){});
try {
  Promise.prototype.then(function(){});
} catch (e) {
  return true;
}</div>}
```
###Promise.all
          
```
function(){
              <div class="code">var fulfills = Promise.all([
  new Promise(function(resolve)   { setTimeout(resolve,200,&quot;foo&quot;); }),
  new Promise(function(resolve)   { setTimeout(resolve,100,&quot;bar&quot;); }),
]);
var rejects = Promise.all([
  new Promise(function(_, reject) { setTimeout(reject, 200,&quot;baz&quot;); }),
  new Promise(function(_, reject) { setTimeout(reject, 100,&quot;qux&quot;); }),
]);
var score = 0;
fulfills.then(function(result) { score += (result + &quot;&quot; === &quot;foo,bar&quot;); check(); });
rejects.catch(function(result) { score += (result === &quot;qux&quot;); check(); });

function check() {
  if (score === 2) asyncTestPassed();
}</div>}
```
###Promise.all, generic iterables
          
```
function(){
              <div class="code">var fulfills = Promise.all(global.__createIterableObject([
  new Promise(function(resolve)   { setTimeout(resolve,200,&quot;foo&quot;); }),
  new Promise(function(resolve)   { setTimeout(resolve,100,&quot;bar&quot;); }),
]));
var rejects = Promise.all(global.__createIterableObject([
  new Promise(function(_, reject) { setTimeout(reject, 200,&quot;baz&quot;); }),
  new Promise(function(_, reject) { setTimeout(reject, 100,&quot;qux&quot;); }),
]));
var score = 0;
fulfills.then(function(result) { score += (result + &quot;&quot; === &quot;foo,bar&quot;); check(); });
rejects.catch(function(result) { score += (result === &quot;qux&quot;); check(); });

function check() {
  if (score === 2) asyncTestPassed();
}</div>}
```
###Promise.race
          
```
function(){
              <div class="code">var fulfills = Promise.race([
  new Promise(function(resolve)   { setTimeout(resolve,200,&quot;foo&quot;); }),
  new Promise(function(_, reject) { setTimeout(reject, 300,&quot;bar&quot;); }),
]);
var rejects = Promise.race([
  new Promise(function(_, reject) { setTimeout(reject, 200,&quot;baz&quot;); }),
  new Promise(function(resolve)   { setTimeout(resolve,300,&quot;qux&quot;); }),
]);
var score = 0;
fulfills.then(function(result) { score += (result === &quot;foo&quot;); check(); });
rejects.catch(function(result) { score += (result === &quot;baz&quot;); check(); });

function check() {
  if (score === 2) asyncTestPassed();
}</div>}
```
###Promise.race, generic iterables
          
```
function(){
              <div class="code">var fulfills = Promise.race(global.__createIterableObject([
  new Promise(function(resolve)   { setTimeout(resolve,200,&quot;foo&quot;); }),
  new Promise(function(_, reject) { setTimeout(reject, 300,&quot;bar&quot;); }),
]));
var rejects = Promise.race(global.__createIterableObject([
  new Promise(function(_, reject) { setTimeout(reject, 200,&quot;baz&quot;); }),
  new Promise(function(resolve)   { setTimeout(resolve,300,&quot;qux&quot;); }),
]));
var score = 0;
fulfills.then(function(result) { score += (result === &quot;foo&quot;); check(); });
rejects.catch(function(result) { score += (result === &quot;baz&quot;); check(); });

function check() {
  if (score === 2) asyncTestPassed();
}</div>}
```
###basic functionality
          
```
function(){
              <div class="code">var p1 = new Promise(function(resolve, reject) { resolve(&quot;foo&quot;); });
var p2 = new Promise(function(resolve, reject) { reject(&quot;quux&quot;); });
var score = 0;

function thenFn(result)  { score += (result === &quot;foo&quot;);  check(); }
function catchFn(result) { score += (result === &quot;quux&quot;); check(); }
function shouldNotRun(result)  { score = -Infinity;   }

p1.then(thenFn, shouldNotRun);
p2.then(shouldNotRun, catchFn);
p1.catch(shouldNotRun);
p2.catch(catchFn);

p1.then(function() {
  // Promise.prototype.then() should return a new Promise
  score += p1.then() !== p1;
  check();
});

function check() {
  if (score === 4) asyncTestPassed();
}</div>}
```
###constructor requires new
          
```
function(){
              <div class="code">new Promise(function(){});
try {
  Promise(function(){});
  return false;
} catch(e) {
  return true;
}</div>}
```
###Promise.prototype isn't an instance
          
```
function(){
              <div class="code">new Promise(function(){});
try {
  Promise.prototype.then(function(){});
} catch (e) {
  return true;
}</div>}
```
###Promise.all
          
```
function(){
              <div class="code">var fulfills = Promise.all([
  new Promise(function(resolve)   { setTimeout(resolve,200,&quot;foo&quot;); }),
  new Promise(function(resolve)   { setTimeout(resolve,100,&quot;bar&quot;); }),
]);
var rejects = Promise.all([
  new Promise(function(_, reject) { setTimeout(reject, 200,&quot;baz&quot;); }),
  new Promise(function(_, reject) { setTimeout(reject, 100,&quot;qux&quot;); }),
]);
var score = 0;
fulfills.then(function(result) { score += (result + &quot;&quot; === &quot;foo,bar&quot;); check(); });
rejects.catch(function(result) { score += (result === &quot;qux&quot;); check(); });

function check() {
  if (score === 2) asyncTestPassed();
}</div>}
```
###Promise.all, generic iterables
          
```
function(){
              <div class="code">var fulfills = Promise.all(global.__createIterableObject([
  new Promise(function(resolve)   { setTimeout(resolve,200,&quot;foo&quot;); }),
  new Promise(function(resolve)   { setTimeout(resolve,100,&quot;bar&quot;); }),
]));
var rejects = Promise.all(global.__createIterableObject([
  new Promise(function(_, reject) { setTimeout(reject, 200,&quot;baz&quot;); }),
  new Promise(function(_, reject) { setTimeout(reject, 100,&quot;qux&quot;); }),
]));
var score = 0;
fulfills.then(function(result) { score += (result + &quot;&quot; === &quot;foo,bar&quot;); check(); });
rejects.catch(function(result) { score += (result === &quot;qux&quot;); check(); });

function check() {
  if (score === 2) asyncTestPassed();
}</div>}
```
###Promise.race
          
```
function(){
              <div class="code">var fulfills = Promise.race([
  new Promise(function(resolve)   { setTimeout(resolve,200,&quot;foo&quot;); }),
  new Promise(function(_, reject) { setTimeout(reject, 300,&quot;bar&quot;); }),
]);
var rejects = Promise.race([
  new Promise(function(_, reject) { setTimeout(reject, 200,&quot;baz&quot;); }),
  new Promise(function(resolve)   { setTimeout(resolve,300,&quot;qux&quot;); }),
]);
var score = 0;
fulfills.then(function(result) { score += (result === &quot;foo&quot;); check(); });
rejects.catch(function(result) { score += (result === &quot;baz&quot;); check(); });

function check() {
  if (score === 2) asyncTestPassed();
}</div>}
```
###Promise.race, generic iterables
          
```
function(){
              <div class="code">var fulfills = Promise.race(global.__createIterableObject([
  new Promise(function(resolve)   { setTimeout(resolve,200,&quot;foo&quot;); }),
  new Promise(function(_, reject) { setTimeout(reject, 300,&quot;bar&quot;); }),
]));
var rejects = Promise.race(global.__createIterableObject([
  new Promise(function(_, reject) { setTimeout(reject, 200,&quot;baz&quot;); }),
  new Promise(function(resolve)   { setTimeout(resolve,300,&quot;qux&quot;); }),
]));
var score = 0;
fulfills.then(function(result) { score += (result === &quot;foo&quot;); check(); });
rejects.catch(function(result) { score += (result === &quot;baz&quot;); check(); });

function check() {
  if (score === 2) asyncTestPassed();
}</div>}
```
###basic functionality
          
```
function(){
              <div class="code">var p1 = new Promise(function(resolve, reject) { resolve(&quot;foo&quot;); });
var p2 = new Promise(function(resolve, reject) { reject(&quot;quux&quot;); });
var score = 0;

function thenFn(result)  { score += (result === &quot;foo&quot;);  check(); }
function catchFn(result) { score += (result === &quot;quux&quot;); check(); }
function shouldNotRun(result)  { score = -Infinity;   }

p1.then(thenFn, shouldNotRun);
p2.then(shouldNotRun, catchFn);
p1.catch(shouldNotRun);
p2.catch(catchFn);

p1.then(function() {
  // Promise.prototype.then() should return a new Promise
  score += p1.then() !== p1;
  check();
});

function check() {
  if (score === 4) asyncTestPassed();
}</div>}
```
###constructor requires new
          
```
function(){
              <div class="code">new Promise(function(){});
try {
  Promise(function(){});
  return false;
} catch(e) {
  return true;
}</div>}
```
###Promise.prototype isn't an instance
          
```
function(){
              <div class="code">new Promise(function(){});
try {
  Promise.prototype.then(function(){});
} catch (e) {
  return true;
}</div>}
```
###Promise.all
          
```
function(){
              <div class="code">var fulfills = Promise.all([
  new Promise(function(resolve)   { setTimeout(resolve,200,&quot;foo&quot;); }),
  new Promise(function(resolve)   { setTimeout(resolve,100,&quot;bar&quot;); }),
]);
var rejects = Promise.all([
  new Promise(function(_, reject) { setTimeout(reject, 200,&quot;baz&quot;); }),
  new Promise(function(_, reject) { setTimeout(reject, 100,&quot;qux&quot;); }),
]);
var score = 0;
fulfills.then(function(result) { score += (result + &quot;&quot; === &quot;foo,bar&quot;); check(); });
rejects.catch(function(result) { score += (result === &quot;qux&quot;); check(); });

function check() {
  if (score === 2) asyncTestPassed();
}</div>}
```
###Promise.all, generic iterables
          
```
function(){
              <div class="code">var fulfills = Promise.all(global.__createIterableObject([
  new Promise(function(resolve)   { setTimeout(resolve,200,&quot;foo&quot;); }),
  new Promise(function(resolve)   { setTimeout(resolve,100,&quot;bar&quot;); }),
]));
var rejects = Promise.all(global.__createIterableObject([
  new Promise(function(_, reject) { setTimeout(reject, 200,&quot;baz&quot;); }),
  new Promise(function(_, reject) { setTimeout(reject, 100,&quot;qux&quot;); }),
]));
var score = 0;
fulfills.then(function(result) { score += (result + &quot;&quot; === &quot;foo,bar&quot;); check(); });
rejects.catch(function(result) { score += (result === &quot;qux&quot;); check(); });

function check() {
  if (score === 2) asyncTestPassed();
}</div>}
```
###Promise.race
          
```
function(){
              <div class="code">var fulfills = Promise.race([
  new Promise(function(resolve)   { setTimeout(resolve,200,&quot;foo&quot;); }),
  new Promise(function(_, reject) { setTimeout(reject, 300,&quot;bar&quot;); }),
]);
var rejects = Promise.race([
  new Promise(function(_, reject) { setTimeout(reject, 200,&quot;baz&quot;); }),
  new Promise(function(resolve)   { setTimeout(resolve,300,&quot;qux&quot;); }),
]);
var score = 0;
fulfills.then(function(result) { score += (result === &quot;foo&quot;); check(); });
rejects.catch(function(result) { score += (result === &quot;baz&quot;); check(); });

function check() {
  if (score === 2) asyncTestPassed();
}</div>}
```
###Promise.race, generic iterables
          
```
function(){
              <div class="code">var fulfills = Promise.race(global.__createIterableObject([
  new Promise(function(resolve)   { setTimeout(resolve,200,&quot;foo&quot;); }),
  new Promise(function(_, reject) { setTimeout(reject, 300,&quot;bar&quot;); }),
]));
var rejects = Promise.race(global.__createIterableObject([
  new Promise(function(_, reject) { setTimeout(reject, 200,&quot;baz&quot;); }),
  new Promise(function(resolve)   { setTimeout(resolve,300,&quot;qux&quot;); }),
]));
var score = 0;
fulfills.then(function(result) { score += (result === &quot;foo&quot;); check(); });
rejects.catch(function(result) { score += (result === &quot;baz&quot;); check(); });

function check() {
  if (score === 2) asyncTestPassed();
}</div>}
```
###basic functionality
          
```
function(){
              <div class="code">var p1 = new Promise(function(resolve, reject) { resolve(&quot;foo&quot;); });
var p2 = new Promise(function(resolve, reject) { reject(&quot;quux&quot;); });
var score = 0;

function thenFn(result)  { score += (result === &quot;foo&quot;);  check(); }
function catchFn(result) { score += (result === &quot;quux&quot;); check(); }
function shouldNotRun(result)  { score = -Infinity;   }

p1.then(thenFn, shouldNotRun);
p2.then(shouldNotRun, catchFn);
p1.catch(shouldNotRun);
p2.catch(catchFn);

p1.then(function() {
  // Promise.prototype.then() should return a new Promise
  score += p1.then() !== p1;
  check();
});

function check() {
  if (score === 4) asyncTestPassed();
}</div>}
```
###constructor requires new
          
```
function(){
              <div class="code">new Promise(function(){});
try {
  Promise(function(){});
  return false;
} catch(e) {
  return true;
}</div>}
```
###Promise.prototype isn't an instance
          
```
function(){
              <div class="code">new Promise(function(){});
try {
  Promise.prototype.then(function(){});
} catch (e) {
  return true;
}</div>}
```
###Promise.all
          
```
function(){
              <div class="code">var fulfills = Promise.all([
  new Promise(function(resolve)   { setTimeout(resolve,200,&quot;foo&quot;); }),
  new Promise(function(resolve)   { setTimeout(resolve,100,&quot;bar&quot;); }),
]);
var rejects = Promise.all([
  new Promise(function(_, reject) { setTimeout(reject, 200,&quot;baz&quot;); }),
  new Promise(function(_, reject) { setTimeout(reject, 100,&quot;qux&quot;); }),
]);
var score = 0;
fulfills.then(function(result) { score += (result + &quot;&quot; === &quot;foo,bar&quot;); check(); });
rejects.catch(function(result) { score += (result === &quot;qux&quot;); check(); });

function check() {
  if (score === 2) asyncTestPassed();
}</div>}
```
###Promise.all, generic iterables
          
```
function(){
              <div class="code">var fulfills = Promise.all(global.__createIterableObject([
  new Promise(function(resolve)   { setTimeout(resolve,200,&quot;foo&quot;); }),
  new Promise(function(resolve)   { setTimeout(resolve,100,&quot;bar&quot;); }),
]));
var rejects = Promise.all(global.__createIterableObject([
  new Promise(function(_, reject) { setTimeout(reject, 200,&quot;baz&quot;); }),
  new Promise(function(_, reject) { setTimeout(reject, 100,&quot;qux&quot;); }),
]));
var score = 0;
fulfills.then(function(result) { score += (result + &quot;&quot; === &quot;foo,bar&quot;); check(); });
rejects.catch(function(result) { score += (result === &quot;qux&quot;); check(); });

function check() {
  if (score === 2) asyncTestPassed();
}</div>}
```
###Promise.race
          
```
function(){
              <div class="code">var fulfills = Promise.race([
  new Promise(function(resolve)   { setTimeout(resolve,200,&quot;foo&quot;); }),
  new Promise(function(_, reject) { setTimeout(reject, 300,&quot;bar&quot;); }),
]);
var rejects = Promise.race([
  new Promise(function(_, reject) { setTimeout(reject, 200,&quot;baz&quot;); }),
  new Promise(function(resolve)   { setTimeout(resolve,300,&quot;qux&quot;); }),
]);
var score = 0;
fulfills.then(function(result) { score += (result === &quot;foo&quot;); check(); });
rejects.catch(function(result) { score += (result === &quot;baz&quot;); check(); });

function check() {
  if (score === 2) asyncTestPassed();
}</div>}
```
###Promise.race, generic iterables
          
```
function(){
              <div class="code">var fulfills = Promise.race(global.__createIterableObject([
  new Promise(function(resolve)   { setTimeout(resolve,200,&quot;foo&quot;); }),
  new Promise(function(_, reject) { setTimeout(reject, 300,&quot;bar&quot;); }),
]));
var rejects = Promise.race(global.__createIterableObject([
  new Promise(function(_, reject) { setTimeout(reject, 200,&quot;baz&quot;); }),
  new Promise(function(resolve)   { setTimeout(resolve,300,&quot;qux&quot;); }),
]));
var score = 0;
fulfills.then(function(result) { score += (result === &quot;foo&quot;); check(); });
rejects.catch(function(result) { score += (result === &quot;baz&quot;); check(); });

function check() {
  if (score === 2) asyncTestPassed();
}</div>}
```
###basic functionality
          
```
function(){
              <div class="code">var p1 = new Promise(function(resolve, reject) { resolve(&quot;foo&quot;); });
var p2 = new Promise(function(resolve, reject) { reject(&quot;quux&quot;); });
var score = 0;

function thenFn(result)  { score += (result === &quot;foo&quot;);  check(); }
function catchFn(result) { score += (result === &quot;quux&quot;); check(); }
function shouldNotRun(result)  { score = -Infinity;   }

p1.then(thenFn, shouldNotRun);
p2.then(shouldNotRun, catchFn);
p1.catch(shouldNotRun);
p2.catch(catchFn);

p1.then(function() {
  // Promise.prototype.then() should return a new Promise
  score += p1.then() !== p1;
  check();
});

function check() {
  if (score === 4) asyncTestPassed();
}</div>}
```
###constructor requires new
          
```
function(){
              <div class="code">new Promise(function(){});
try {
  Promise(function(){});
  return false;
} catch(e) {
  return true;
}</div>}
```
###Promise.prototype isn't an instance
          
```
function(){
              <div class="code">new Promise(function(){});
try {
  Promise.prototype.then(function(){});
} catch (e) {
  return true;
}</div>}
```
###Promise.all
          
```
function(){
              <div class="code">var fulfills = Promise.all([
  new Promise(function(resolve)   { setTimeout(resolve,200,&quot;foo&quot;); }),
  new Promise(function(resolve)   { setTimeout(resolve,100,&quot;bar&quot;); }),
]);
var rejects = Promise.all([
  new Promise(function(_, reject) { setTimeout(reject, 200,&quot;baz&quot;); }),
  new Promise(function(_, reject) { setTimeout(reject, 100,&quot;qux&quot;); }),
]);
var score = 0;
fulfills.then(function(result) { score += (result + &quot;&quot; === &quot;foo,bar&quot;); check(); });
rejects.catch(function(result) { score += (result === &quot;qux&quot;); check(); });

function check() {
  if (score === 2) asyncTestPassed();
}</div>}
```
###Promise.all, generic iterables
          
```
function(){
              <div class="code">var fulfills = Promise.all(global.__createIterableObject([
  new Promise(function(resolve)   { setTimeout(resolve,200,&quot;foo&quot;); }),
  new Promise(function(resolve)   { setTimeout(resolve,100,&quot;bar&quot;); }),
]));
var rejects = Promise.all(global.__createIterableObject([
  new Promise(function(_, reject) { setTimeout(reject, 200,&quot;baz&quot;); }),
  new Promise(function(_, reject) { setTimeout(reject, 100,&quot;qux&quot;); }),
]));
var score = 0;
fulfills.then(function(result) { score += (result + &quot;&quot; === &quot;foo,bar&quot;); check(); });
rejects.catch(function(result) { score += (result === &quot;qux&quot;); check(); });

function check() {
  if (score === 2) asyncTestPassed();
}</div>}
```
###Promise.race
          
```
function(){
              <div class="code">var fulfills = Promise.race([
  new Promise(function(resolve)   { setTimeout(resolve,200,&quot;foo&quot;); }),
  new Promise(function(_, reject) { setTimeout(reject, 300,&quot;bar&quot;); }),
]);
var rejects = Promise.race([
  new Promise(function(_, reject) { setTimeout(reject, 200,&quot;baz&quot;); }),
  new Promise(function(resolve)   { setTimeout(resolve,300,&quot;qux&quot;); }),
]);
var score = 0;
fulfills.then(function(result) { score += (result === &quot;foo&quot;); check(); });
rejects.catch(function(result) { score += (result === &quot;baz&quot;); check(); });

function check() {
  if (score === 2) asyncTestPassed();
}</div>}
```
###Promise.race, generic iterables
          
```
function(){
              <div class="code">var fulfills = Promise.race(global.__createIterableObject([
  new Promise(function(resolve)   { setTimeout(resolve,200,&quot;foo&quot;); }),
  new Promise(function(_, reject) { setTimeout(reject, 300,&quot;bar&quot;); }),
]));
var rejects = Promise.race(global.__createIterableObject([
  new Promise(function(_, reject) { setTimeout(reject, 200,&quot;baz&quot;); }),
  new Promise(function(resolve)   { setTimeout(resolve,300,&quot;qux&quot;); }),
]));
var score = 0;
fulfills.then(function(result) { score += (result === &quot;foo&quot;); check(); });
rejects.catch(function(result) { score += (result === &quot;baz&quot;); check(); });

function check() {
  if (score === 2) asyncTestPassed();
}</div>}
```
###basic functionality
          
```
function(){
              <div class="code">var p1 = new Promise(function(resolve, reject) { resolve(&quot;foo&quot;); });
var p2 = new Promise(function(resolve, reject) { reject(&quot;quux&quot;); });
var score = 0;

function thenFn(result)  { score += (result === &quot;foo&quot;);  check(); }
function catchFn(result) { score += (result === &quot;quux&quot;); check(); }
function shouldNotRun(result)  { score = -Infinity;   }

p1.then(thenFn, shouldNotRun);
p2.then(shouldNotRun, catchFn);
p1.catch(shouldNotRun);
p2.catch(catchFn);

p1.then(function() {
  // Promise.prototype.then() should return a new Promise
  score += p1.then() !== p1;
  check();
});

function check() {
  if (score === 4) asyncTestPassed();
}</div>}
```
###constructor requires new
          
```
function(){
              <div class="code">new Promise(function(){});
try {
  Promise(function(){});
  return false;
} catch(e) {
  return true;
}</div>}
```
###Promise.prototype isn't an instance
          
```
function(){
              <div class="code">new Promise(function(){});
try {
  Promise.prototype.then(function(){});
} catch (e) {
  return true;
}</div>}
```
###Promise.all
          
```
function(){
              <div class="code">var fulfills = Promise.all([
  new Promise(function(resolve)   { setTimeout(resolve,200,&quot;foo&quot;); }),
  new Promise(function(resolve)   { setTimeout(resolve,100,&quot;bar&quot;); }),
]);
var rejects = Promise.all([
  new Promise(function(_, reject) { setTimeout(reject, 200,&quot;baz&quot;); }),
  new Promise(function(_, reject) { setTimeout(reject, 100,&quot;qux&quot;); }),
]);
var score = 0;
fulfills.then(function(result) { score += (result + &quot;&quot; === &quot;foo,bar&quot;); check(); });
rejects.catch(function(result) { score += (result === &quot;qux&quot;); check(); });

function check() {
  if (score === 2) asyncTestPassed();
}</div>}
```
###Promise.all, generic iterables
          
```
function(){
              <div class="code">var fulfills = Promise.all(global.__createIterableObject([
  new Promise(function(resolve)   { setTimeout(resolve,200,&quot;foo&quot;); }),
  new Promise(function(resolve)   { setTimeout(resolve,100,&quot;bar&quot;); }),
]));
var rejects = Promise.all(global.__createIterableObject([
  new Promise(function(_, reject) { setTimeout(reject, 200,&quot;baz&quot;); }),
  new Promise(function(_, reject) { setTimeout(reject, 100,&quot;qux&quot;); }),
]));
var score = 0;
fulfills.then(function(result) { score += (result + &quot;&quot; === &quot;foo,bar&quot;); check(); });
rejects.catch(function(result) { score += (result === &quot;qux&quot;); check(); });

function check() {
  if (score === 2) asyncTestPassed();
}</div>}
```
###Promise.race
          
```
function(){
              <div class="code">var fulfills = Promise.race([
  new Promise(function(resolve)   { setTimeout(resolve,200,&quot;foo&quot;); }),
  new Promise(function(_, reject) { setTimeout(reject, 300,&quot;bar&quot;); }),
]);
var rejects = Promise.race([
  new Promise(function(_, reject) { setTimeout(reject, 200,&quot;baz&quot;); }),
  new Promise(function(resolve)   { setTimeout(resolve,300,&quot;qux&quot;); }),
]);
var score = 0;
fulfills.then(function(result) { score += (result === &quot;foo&quot;); check(); });
rejects.catch(function(result) { score += (result === &quot;baz&quot;); check(); });

function check() {
  if (score === 2) asyncTestPassed();
}</div>}
```
###Promise.race, generic iterables
          
```
function(){
              <div class="code">var fulfills = Promise.race(global.__createIterableObject([
  new Promise(function(resolve)   { setTimeout(resolve,200,&quot;foo&quot;); }),
  new Promise(function(_, reject) { setTimeout(reject, 300,&quot;bar&quot;); }),
]));
var rejects = Promise.race(global.__createIterableObject([
  new Promise(function(_, reject) { setTimeout(reject, 200,&quot;baz&quot;); }),
  new Promise(function(resolve)   { setTimeout(resolve,300,&quot;qux&quot;); }),
]));
var score = 0;
fulfills.then(function(result) { score += (result === &quot;foo&quot;); check(); });
rejects.catch(function(result) { score += (result === &quot;baz&quot;); check(); });

function check() {
  if (score === 2) asyncTestPassed();
}</div>}
```
###basic functionality
          
```
function(){
              <div class="code">var p1 = new Promise(function(resolve, reject) { resolve(&quot;foo&quot;); });
var p2 = new Promise(function(resolve, reject) { reject(&quot;quux&quot;); });
var score = 0;

function thenFn(result)  { score += (result === &quot;foo&quot;);  check(); }
function catchFn(result) { score += (result === &quot;quux&quot;); check(); }
function shouldNotRun(result)  { score = -Infinity;   }

p1.then(thenFn, shouldNotRun);
p2.then(shouldNotRun, catchFn);
p1.catch(shouldNotRun);
p2.catch(catchFn);

p1.then(function() {
  // Promise.prototype.then() should return a new Promise
  score += p1.then() !== p1;
  check();
});

function check() {
  if (score === 4) asyncTestPassed();
}</div>}
```
###constructor requires new
          
```
function(){
              <div class="code">new Promise(function(){});
try {
  Promise(function(){});
  return false;
} catch(e) {
  return true;
}</div>}
```
###Promise.prototype isn't an instance
          
```
function(){
              <div class="code">new Promise(function(){});
try {
  Promise.prototype.then(function(){});
} catch (e) {
  return true;
}</div>}
```
###Promise.all
          
```
function(){
              <div class="code">var fulfills = Promise.all([
  new Promise(function(resolve)   { setTimeout(resolve,200,&quot;foo&quot;); }),
  new Promise(function(resolve)   { setTimeout(resolve,100,&quot;bar&quot;); }),
]);
var rejects = Promise.all([
  new Promise(function(_, reject) { setTimeout(reject, 200,&quot;baz&quot;); }),
  new Promise(function(_, reject) { setTimeout(reject, 100,&quot;qux&quot;); }),
]);
var score = 0;
fulfills.then(function(result) { score += (result + &quot;&quot; === &quot;foo,bar&quot;); check(); });
rejects.catch(function(result) { score += (result === &quot;qux&quot;); check(); });

function check() {
  if (score === 2) asyncTestPassed();
}</div>}
```
###Promise.all, generic iterables
          
```
function(){
              <div class="code">var fulfills = Promise.all(global.__createIterableObject([
  new Promise(function(resolve)   { setTimeout(resolve,200,&quot;foo&quot;); }),
  new Promise(function(resolve)   { setTimeout(resolve,100,&quot;bar&quot;); }),
]));
var rejects = Promise.all(global.__createIterableObject([
  new Promise(function(_, reject) { setTimeout(reject, 200,&quot;baz&quot;); }),
  new Promise(function(_, reject) { setTimeout(reject, 100,&quot;qux&quot;); }),
]));
var score = 0;
fulfills.then(function(result) { score += (result + &quot;&quot; === &quot;foo,bar&quot;); check(); });
rejects.catch(function(result) { score += (result === &quot;qux&quot;); check(); });

function check() {
  if (score === 2) asyncTestPassed();
}</div>}
```
###Promise.race
          
```
function(){
              <div class="code">var fulfills = Promise.race([
  new Promise(function(resolve)   { setTimeout(resolve,200,&quot;foo&quot;); }),
  new Promise(function(_, reject) { setTimeout(reject, 300,&quot;bar&quot;); }),
]);
var rejects = Promise.race([
  new Promise(function(_, reject) { setTimeout(reject, 200,&quot;baz&quot;); }),
  new Promise(function(resolve)   { setTimeout(resolve,300,&quot;qux&quot;); }),
]);
var score = 0;
fulfills.then(function(result) { score += (result === &quot;foo&quot;); check(); });
rejects.catch(function(result) { score += (result === &quot;baz&quot;); check(); });

function check() {
  if (score === 2) asyncTestPassed();
}</div>}
```
###Promise.race, generic iterables
          
```
function(){
              <div class="code">var fulfills = Promise.race(global.__createIterableObject([
  new Promise(function(resolve)   { setTimeout(resolve,200,&quot;foo&quot;); }),
  new Promise(function(_, reject) { setTimeout(reject, 300,&quot;bar&quot;); }),
]));
var rejects = Promise.race(global.__createIterableObject([
  new Promise(function(_, reject) { setTimeout(reject, 200,&quot;baz&quot;); }),
  new Promise(function(resolve)   { setTimeout(resolve,300,&quot;qux&quot;); }),
]));
var score = 0;
fulfills.then(function(result) { score += (result === &quot;foo&quot;); check(); });
rejects.catch(function(result) { score += (result === &quot;baz&quot;); check(); });

function check() {
  if (score === 2) asyncTestPassed();
}</div>}
```
###basic functionality
          
```
function(){
              <div class="code">var p1 = new Promise(function(resolve, reject) { resolve(&quot;foo&quot;); });
var p2 = new Promise(function(resolve, reject) { reject(&quot;quux&quot;); });
var score = 0;

function thenFn(result)  { score += (result === &quot;foo&quot;);  check(); }
function catchFn(result) { score += (result === &quot;quux&quot;); check(); }
function shouldNotRun(result)  { score = -Infinity;   }

p1.then(thenFn, shouldNotRun);
p2.then(shouldNotRun, catchFn);
p1.catch(shouldNotRun);
p2.catch(catchFn);

p1.then(function() {
  // Promise.prototype.then() should return a new Promise
  score += p1.then() !== p1;
  check();
});

function check() {
  if (score === 4) asyncTestPassed();
}</div>}
```
###constructor requires new
          
```
function(){
              <div class="code">new Promise(function(){});
try {
  Promise(function(){});
  return false;
} catch(e) {
  return true;
}</div>}
```
###Promise.prototype isn't an instance
          
```
function(){
              <div class="code">new Promise(function(){});
try {
  Promise.prototype.then(function(){});
} catch (e) {
  return true;
}</div>}
```
###Promise.all
          
```
function(){
              <div class="code">var fulfills = Promise.all([
  new Promise(function(resolve)   { setTimeout(resolve,200,&quot;foo&quot;); }),
  new Promise(function(resolve)   { setTimeout(resolve,100,&quot;bar&quot;); }),
]);
var rejects = Promise.all([
  new Promise(function(_, reject) { setTimeout(reject, 200,&quot;baz&quot;); }),
  new Promise(function(_, reject) { setTimeout(reject, 100,&quot;qux&quot;); }),
]);
var score = 0;
fulfills.then(function(result) { score += (result + &quot;&quot; === &quot;foo,bar&quot;); check(); });
rejects.catch(function(result) { score += (result === &quot;qux&quot;); check(); });

function check() {
  if (score === 2) asyncTestPassed();
}</div>}
```
###Promise.all, generic iterables
          
```
function(){
              <div class="code">var fulfills = Promise.all(global.__createIterableObject([
  new Promise(function(resolve)   { setTimeout(resolve,200,&quot;foo&quot;); }),
  new Promise(function(resolve)   { setTimeout(resolve,100,&quot;bar&quot;); }),
]));
var rejects = Promise.all(global.__createIterableObject([
  new Promise(function(_, reject) { setTimeout(reject, 200,&quot;baz&quot;); }),
  new Promise(function(_, reject) { setTimeout(reject, 100,&quot;qux&quot;); }),
]));
var score = 0;
fulfills.then(function(result) { score += (result + &quot;&quot; === &quot;foo,bar&quot;); check(); });
rejects.catch(function(result) { score += (result === &quot;qux&quot;); check(); });

function check() {
  if (score === 2) asyncTestPassed();
}</div>}
```
###Promise.race
          
```
function(){
              <div class="code">var fulfills = Promise.race([
  new Promise(function(resolve)   { setTimeout(resolve,200,&quot;foo&quot;); }),
  new Promise(function(_, reject) { setTimeout(reject, 300,&quot;bar&quot;); }),
]);
var rejects = Promise.race([
  new Promise(function(_, reject) { setTimeout(reject, 200,&quot;baz&quot;); }),
  new Promise(function(resolve)   { setTimeout(resolve,300,&quot;qux&quot;); }),
]);
var score = 0;
fulfills.then(function(result) { score += (result === &quot;foo&quot;); check(); });
rejects.catch(function(result) { score += (result === &quot;baz&quot;); check(); });

function check() {
  if (score === 2) asyncTestPassed();
}</div>}
```
###Promise.race, generic iterables
          
```
function(){
              <div class="code">var fulfills = Promise.race(global.__createIterableObject([
  new Promise(function(resolve)   { setTimeout(resolve,200,&quot;foo&quot;); }),
  new Promise(function(_, reject) { setTimeout(reject, 300,&quot;bar&quot;); }),
]));
var rejects = Promise.race(global.__createIterableObject([
  new Promise(function(_, reject) { setTimeout(reject, 200,&quot;baz&quot;); }),
  new Promise(function(resolve)   { setTimeout(resolve,300,&quot;qux&quot;); }),
]));
var score = 0;
fulfills.then(function(result) { score += (result === &quot;foo&quot;); check(); });
rejects.catch(function(result) { score += (result === &quot;baz&quot;); check(); });

function check() {
  if (score === 2) asyncTestPassed();
}</div>}
```
###basic functionality
          
```
function(){
              <div class="code">var p1 = new Promise(function(resolve, reject) { resolve(&quot;foo&quot;); });
var p2 = new Promise(function(resolve, reject) { reject(&quot;quux&quot;); });
var score = 0;

function thenFn(result)  { score += (result === &quot;foo&quot;);  check(); }
function catchFn(result) { score += (result === &quot;quux&quot;); check(); }
function shouldNotRun(result)  { score = -Infinity;   }

p1.then(thenFn, shouldNotRun);
p2.then(shouldNotRun, catchFn);
p1.catch(shouldNotRun);
p2.catch(catchFn);

p1.then(function() {
  // Promise.prototype.then() should return a new Promise
  score += p1.then() !== p1;
  check();
});

function check() {
  if (score === 4) asyncTestPassed();
}</div>}
```
###constructor requires new
          
```
function(){
              <div class="code">new Promise(function(){});
try {
  Promise(function(){});
  return false;
} catch(e) {
  return true;
}</div>}
```
###Promise.prototype isn't an instance
          
```
function(){
              <div class="code">new Promise(function(){});
try {
  Promise.prototype.then(function(){});
} catch (e) {
  return true;
}</div>}
```
###Promise.all
          
```
function(){
              <div class="code">var fulfills = Promise.all([
  new Promise(function(resolve)   { setTimeout(resolve,200,&quot;foo&quot;); }),
  new Promise(function(resolve)   { setTimeout(resolve,100,&quot;bar&quot;); }),
]);
var rejects = Promise.all([
  new Promise(function(_, reject) { setTimeout(reject, 200,&quot;baz&quot;); }),
  new Promise(function(_, reject) { setTimeout(reject, 100,&quot;qux&quot;); }),
]);
var score = 0;
fulfills.then(function(result) { score += (result + &quot;&quot; === &quot;foo,bar&quot;); check(); });
rejects.catch(function(result) { score += (result === &quot;qux&quot;); check(); });

function check() {
  if (score === 2) asyncTestPassed();
}</div>}
```
###Promise.all, generic iterables
          
```
function(){
              <div class="code">var fulfills = Promise.all(global.__createIterableObject([
  new Promise(function(resolve)   { setTimeout(resolve,200,&quot;foo&quot;); }),
  new Promise(function(resolve)   { setTimeout(resolve,100,&quot;bar&quot;); }),
]));
var rejects = Promise.all(global.__createIterableObject([
  new Promise(function(_, reject) { setTimeout(reject, 200,&quot;baz&quot;); }),
  new Promise(function(_, reject) { setTimeout(reject, 100,&quot;qux&quot;); }),
]));
var score = 0;
fulfills.then(function(result) { score += (result + &quot;&quot; === &quot;foo,bar&quot;); check(); });
rejects.catch(function(result) { score += (result === &quot;qux&quot;); check(); });

function check() {
  if (score === 2) asyncTestPassed();
}</div>}
```
###Promise.race
          
```
function(){
              <div class="code">var fulfills = Promise.race([
  new Promise(function(resolve)   { setTimeout(resolve,200,&quot;foo&quot;); }),
  new Promise(function(_, reject) { setTimeout(reject, 300,&quot;bar&quot;); }),
]);
var rejects = Promise.race([
  new Promise(function(_, reject) { setTimeout(reject, 200,&quot;baz&quot;); }),
  new Promise(function(resolve)   { setTimeout(resolve,300,&quot;qux&quot;); }),
]);
var score = 0;
fulfills.then(function(result) { score += (result === &quot;foo&quot;); check(); });
rejects.catch(function(result) { score += (result === &quot;baz&quot;); check(); });

function check() {
  if (score === 2) asyncTestPassed();
}</div>}
```
###Promise.race, generic iterables
          
```
function(){
              <div class="code">var fulfills = Promise.race(global.__createIterableObject([
  new Promise(function(resolve)   { setTimeout(resolve,200,&quot;foo&quot;); }),
  new Promise(function(_, reject) { setTimeout(reject, 300,&quot;bar&quot;); }),
]));
var rejects = Promise.race(global.__createIterableObject([
  new Promise(function(_, reject) { setTimeout(reject, 200,&quot;baz&quot;); }),
  new Promise(function(resolve)   { setTimeout(resolve,300,&quot;qux&quot;); }),
]));
var score = 0;
fulfills.then(function(result) { score += (result === &quot;foo&quot;); check(); });
rejects.catch(function(result) { score += (result === &quot;baz&quot;); check(); });

function check() {
  if (score === 2) asyncTestPassed();
}</div>}
```
###basic functionality
          
```
function(){
              <div class="code">var p1 = new Promise(function(resolve, reject) { resolve(&quot;foo&quot;); });
var p2 = new Promise(function(resolve, reject) { reject(&quot;quux&quot;); });
var score = 0;

function thenFn(result)  { score += (result === &quot;foo&quot;);  check(); }
function catchFn(result) { score += (result === &quot;quux&quot;); check(); }
function shouldNotRun(result)  { score = -Infinity;   }

p1.then(thenFn, shouldNotRun);
p2.then(shouldNotRun, catchFn);
p1.catch(shouldNotRun);
p2.catch(catchFn);

p1.then(function() {
  // Promise.prototype.then() should return a new Promise
  score += p1.then() !== p1;
  check();
});

function check() {
  if (score === 4) asyncTestPassed();
}</div>}
```
###constructor requires new
          
```
function(){
              <div class="code">new Promise(function(){});
try {
  Promise(function(){});
  return false;
} catch(e) {
  return true;
}</div>}
```
###Promise.prototype isn't an instance
          
```
function(){
              <div class="code">new Promise(function(){});
try {
  Promise.prototype.then(function(){});
} catch (e) {
  return true;
}</div>}
```
###Promise.all
          
```
function(){
              <div class="code">var fulfills = Promise.all([
  new Promise(function(resolve)   { setTimeout(resolve,200,&quot;foo&quot;); }),
  new Promise(function(resolve)   { setTimeout(resolve,100,&quot;bar&quot;); }),
]);
var rejects = Promise.all([
  new Promise(function(_, reject) { setTimeout(reject, 200,&quot;baz&quot;); }),
  new Promise(function(_, reject) { setTimeout(reject, 100,&quot;qux&quot;); }),
]);
var score = 0;
fulfills.then(function(result) { score += (result + &quot;&quot; === &quot;foo,bar&quot;); check(); });
rejects.catch(function(result) { score += (result === &quot;qux&quot;); check(); });

function check() {
  if (score === 2) asyncTestPassed();
}</div>}
```
###Promise.all, generic iterables
          
```
function(){
              <div class="code">var fulfills = Promise.all(global.__createIterableObject([
  new Promise(function(resolve)   { setTimeout(resolve,200,&quot;foo&quot;); }),
  new Promise(function(resolve)   { setTimeout(resolve,100,&quot;bar&quot;); }),
]));
var rejects = Promise.all(global.__createIterableObject([
  new Promise(function(_, reject) { setTimeout(reject, 200,&quot;baz&quot;); }),
  new Promise(function(_, reject) { setTimeout(reject, 100,&quot;qux&quot;); }),
]));
var score = 0;
fulfills.then(function(result) { score += (result + &quot;&quot; === &quot;foo,bar&quot;); check(); });
rejects.catch(function(result) { score += (result === &quot;qux&quot;); check(); });

function check() {
  if (score === 2) asyncTestPassed();
}</div>}
```
###Promise.race
          
```
function(){
              <div class="code">var fulfills = Promise.race([
  new Promise(function(resolve)   { setTimeout(resolve,200,&quot;foo&quot;); }),
  new Promise(function(_, reject) { setTimeout(reject, 300,&quot;bar&quot;); }),
]);
var rejects = Promise.race([
  new Promise(function(_, reject) { setTimeout(reject, 200,&quot;baz&quot;); }),
  new Promise(function(resolve)   { setTimeout(resolve,300,&quot;qux&quot;); }),
]);
var score = 0;
fulfills.then(function(result) { score += (result === &quot;foo&quot;); check(); });
rejects.catch(function(result) { score += (result === &quot;baz&quot;); check(); });

function check() {
  if (score === 2) asyncTestPassed();
}</div>}
```
###Promise.race, generic iterables
          
```
function(){
              <div class="code">var fulfills = Promise.race(global.__createIterableObject([
  new Promise(function(resolve)   { setTimeout(resolve,200,&quot;foo&quot;); }),
  new Promise(function(_, reject) { setTimeout(reject, 300,&quot;bar&quot;); }),
]));
var rejects = Promise.race(global.__createIterableObject([
  new Promise(function(_, reject) { setTimeout(reject, 200,&quot;baz&quot;); }),
  new Promise(function(resolve)   { setTimeout(resolve,300,&quot;qux&quot;); }),
]));
var score = 0;
fulfills.then(function(result) { score += (result === &quot;foo&quot;); check(); });
rejects.catch(function(result) { score += (result === &quot;baz&quot;); check(); });

function check() {
  if (score === 2) asyncTestPassed();
}</div>}
```
###basic functionality
          
```
function(){
              <div class="code">var p1 = new Promise(function(resolve, reject) { resolve(&quot;foo&quot;); });
var p2 = new Promise(function(resolve, reject) { reject(&quot;quux&quot;); });
var score = 0;

function thenFn(result)  { score += (result === &quot;foo&quot;);  check(); }
function catchFn(result) { score += (result === &quot;quux&quot;); check(); }
function shouldNotRun(result)  { score = -Infinity;   }

p1.then(thenFn, shouldNotRun);
p2.then(shouldNotRun, catchFn);
p1.catch(shouldNotRun);
p2.catch(catchFn);

p1.then(function() {
  // Promise.prototype.then() should return a new Promise
  score += p1.then() !== p1;
  check();
});

function check() {
  if (score === 4) asyncTestPassed();
}</div>}
```
###constructor requires new
          
```
function(){
              <div class="code">new Promise(function(){});
try {
  Promise(function(){});
  return false;
} catch(e) {
  return true;
}</div>}
```
###Promise.prototype isn't an instance
          
```
function(){
              <div class="code">new Promise(function(){});
try {
  Promise.prototype.then(function(){});
} catch (e) {
  return true;
}</div>}
```
###Promise.all
          
```
function(){
              <div class="code">var fulfills = Promise.all([
  new Promise(function(resolve)   { setTimeout(resolve,200,&quot;foo&quot;); }),
  new Promise(function(resolve)   { setTimeout(resolve,100,&quot;bar&quot;); }),
]);
var rejects = Promise.all([
  new Promise(function(_, reject) { setTimeout(reject, 200,&quot;baz&quot;); }),
  new Promise(function(_, reject) { setTimeout(reject, 100,&quot;qux&quot;); }),
]);
var score = 0;
fulfills.then(function(result) { score += (result + &quot;&quot; === &quot;foo,bar&quot;); check(); });
rejects.catch(function(result) { score += (result === &quot;qux&quot;); check(); });

function check() {
  if (score === 2) asyncTestPassed();
}</div>}
```
###Promise.all, generic iterables
          
```
function(){
              <div class="code">var fulfills = Promise.all(global.__createIterableObject([
  new Promise(function(resolve)   { setTimeout(resolve,200,&quot;foo&quot;); }),
  new Promise(function(resolve)   { setTimeout(resolve,100,&quot;bar&quot;); }),
]));
var rejects = Promise.all(global.__createIterableObject([
  new Promise(function(_, reject) { setTimeout(reject, 200,&quot;baz&quot;); }),
  new Promise(function(_, reject) { setTimeout(reject, 100,&quot;qux&quot;); }),
]));
var score = 0;
fulfills.then(function(result) { score += (result + &quot;&quot; === &quot;foo,bar&quot;); check(); });
rejects.catch(function(result) { score += (result === &quot;qux&quot;); check(); });

function check() {
  if (score === 2) asyncTestPassed();
}</div>}
```
###Promise.race
          
```
function(){
              <div class="code">var fulfills = Promise.race([
  new Promise(function(resolve)   { setTimeout(resolve,200,&quot;foo&quot;); }),
  new Promise(function(_, reject) { setTimeout(reject, 300,&quot;bar&quot;); }),
]);
var rejects = Promise.race([
  new Promise(function(_, reject) { setTimeout(reject, 200,&quot;baz&quot;); }),
  new Promise(function(resolve)   { setTimeout(resolve,300,&quot;qux&quot;); }),
]);
var score = 0;
fulfills.then(function(result) { score += (result === &quot;foo&quot;); check(); });
rejects.catch(function(result) { score += (result === &quot;baz&quot;); check(); });

function check() {
  if (score === 2) asyncTestPassed();
}</div>}
```
###Promise.race, generic iterables
          
```
function(){
              <div class="code">var fulfills = Promise.race(global.__createIterableObject([
  new Promise(function(resolve)   { setTimeout(resolve,200,&quot;foo&quot;); }),
  new Promise(function(_, reject) { setTimeout(reject, 300,&quot;bar&quot;); }),
]));
var rejects = Promise.race(global.__createIterableObject([
  new Promise(function(_, reject) { setTimeout(reject, 200,&quot;baz&quot;); }),
  new Promise(function(resolve)   { setTimeout(resolve,300,&quot;qux&quot;); }),
]));
var score = 0;
fulfills.then(function(result) { score += (result === &quot;foo&quot;); check(); });
rejects.catch(function(result) { score += (result === &quot;baz&quot;); check(); });

function check() {
  if (score === 2) asyncTestPassed();
}</div>}
```
