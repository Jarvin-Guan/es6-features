###basic support
          
```
function(){
              <div class="code">const foo = 123;
return (foo === 123);</div>}
```
###is block-scoped
          
```
function(){
              <div class="code">const bar = 123;
{ const bar = 456; }
return bar === 123;</div>}
```
###cannot be in statements
          
```
function(){
              <div class="code">const bar = 1;
try {
  Function(&quot;if(true) const baz = 1;&quot;)();
} catch(e) {
  return true;
}</div>}
```
###redefining a const is an error
          
```
function(){
              <div class="code">const baz = 1;
try {
  Function(&quot;const foo = 1; foo = 2;&quot;)();
} catch(e) {
  return true;
}</div>}
```
###for loop statement scope
          
```
function(){
              <div class="code">const baz = 1;
for(const baz = 0; false;) {}
return baz === 1;</div>}
```
###for-in loop iteration scope
          
```
function(){
              <div class="code">var scopes = [];
for(const i in { a:1, b:1 }) {
  scopes.push(function(){ return i; });
}
return (scopes[0]() === &quot;a&quot; &amp;&amp; scopes[1]() === &quot;b&quot;);</div>}
```
###for-of loop iteration scope
          
```
function(){
              <div class="code">var scopes = [];
for(const i of ['a','b']) {
  scopes.push(function(){ return i; });
}
return (scopes[0]() === &quot;a&quot; &amp;&amp; scopes[1]() === &quot;b&quot;);</div>}
```
###temporal dead zone
          
```
function(){
              <div class="code">var passed = (function(){ try { qux; } catch(e) { return true; }}());
function fn() { passed &amp;= qux === 456; }
const qux = 456;
fn();
return passed;</div>}
```
###basic support (strict mode)
          
```
function(){
              <div class="code">&quot;use strict&quot;;
const foo = 123;
return (foo === 123);</div>}
```
###is block-scoped (strict mode)
          
```
function(){
              <div class="code">'use strict';
const bar = 123;
{ const bar = 456; }
return bar === 123;</div>}
```
###cannot be in statements (strict mode)
          
```
function(){
              <div class="code">'use strict';
const bar = 1;
try {
  Function(&quot;'use strict'; if(true) const baz = 1;&quot;)();
} catch(e) {
  return true;
}</div>}
```
###redefining a const (strict mode)
          
```
function(){
              <div class="code">'use strict';
const baz = 1;
try {
  Function(&quot;'use strict'; const foo = 1; foo = 2;&quot;)();
} catch(e) {
  return true;
}</div>}
```
###for loop statement scope (strict mode)
          
```
function(){
              <div class="code">'use strict';
const baz = 1;
for(const baz = 0; false;) {}
return baz === 1;</div>}
```
###for-in loop iteration scope (strict mode)
          
```
function(){
              <div class="code">'use strict';
var scopes = [];
for(const i in { a:1, b:1 }) {
  scopes.push(function(){ return i; });
}
return (scopes[0]() === &quot;a&quot; &amp;&amp; scopes[1]() === &quot;b&quot;);</div>}
```
###for-of loop iteration scope (strict mode)
          
```
function(){
              <div class="code">'use strict';
var scopes = [];
for(const i of ['a','b']) {
  scopes.push(function(){ return i; });
}
return (scopes[0]() === &quot;a&quot; &amp;&amp; scopes[1]() === &quot;b&quot;);</div>}
```
###temporal dead zone (strict mode)
          
```
function(){
              <div class="code">'use strict';
var passed = (function(){ try { qux; } catch(e) { return true; }}());
function fn() { passed &amp;= qux === 456; }
const qux = 456;
fn();
return passed;</div>}
```
###basic support
          
```
function(){
              <div class="code">const foo = 123;
return (foo === 123);</div>}
```
###is block-scoped
          
```
function(){
              <div class="code">const bar = 123;
{ const bar = 456; }
return bar === 123;</div>}
```
###cannot be in statements
          
```
function(){
              <div class="code">const bar = 1;
try {
  Function(&quot;if(true) const baz = 1;&quot;)();
} catch(e) {
  return true;
}</div>}
```
###redefining a const is an error
          
```
function(){
              <div class="code">const baz = 1;
try {
  Function(&quot;const foo = 1; foo = 2;&quot;)();
} catch(e) {
  return true;
}</div>}
```
###for loop statement scope
          
```
function(){
              <div class="code">const baz = 1;
for(const baz = 0; false;) {}
return baz === 1;</div>}
```
###for-in loop iteration scope
          
```
function(){
              <div class="code">var scopes = [];
for(const i in { a:1, b:1 }) {
  scopes.push(function(){ return i; });
}
return (scopes[0]() === &quot;a&quot; &amp;&amp; scopes[1]() === &quot;b&quot;);</div>}
```
###for-of loop iteration scope
          
```
function(){
              <div class="code">var scopes = [];
for(const i of ['a','b']) {
  scopes.push(function(){ return i; });
}
return (scopes[0]() === &quot;a&quot; &amp;&amp; scopes[1]() === &quot;b&quot;);</div>}
```
###temporal dead zone
          
```
function(){
              <div class="code">var passed = (function(){ try { qux; } catch(e) { return true; }}());
function fn() { passed &amp;= qux === 456; }
const qux = 456;
fn();
return passed;</div>}
```
###basic support (strict mode)
          
```
function(){
              <div class="code">&quot;use strict&quot;;
const foo = 123;
return (foo === 123);</div>}
```
###is block-scoped (strict mode)
          
```
function(){
              <div class="code">'use strict';
const bar = 123;
{ const bar = 456; }
return bar === 123;</div>}
```
###cannot be in statements (strict mode)
          
```
function(){
              <div class="code">'use strict';
const bar = 1;
try {
  Function(&quot;'use strict'; if(true) const baz = 1;&quot;)();
} catch(e) {
  return true;
}</div>}
```
###redefining a const (strict mode)
          
```
function(){
              <div class="code">'use strict';
const baz = 1;
try {
  Function(&quot;'use strict'; const foo = 1; foo = 2;&quot;)();
} catch(e) {
  return true;
}</div>}
```
###for loop statement scope (strict mode)
          
```
function(){
              <div class="code">'use strict';
const baz = 1;
for(const baz = 0; false;) {}
return baz === 1;</div>}
```
###for-in loop iteration scope (strict mode)
          
```
function(){
              <div class="code">'use strict';
var scopes = [];
for(const i in { a:1, b:1 }) {
  scopes.push(function(){ return i; });
}
return (scopes[0]() === &quot;a&quot; &amp;&amp; scopes[1]() === &quot;b&quot;);</div>}
```
###for-of loop iteration scope (strict mode)
          
```
function(){
              <div class="code">'use strict';
var scopes = [];
for(const i of ['a','b']) {
  scopes.push(function(){ return i; });
}
return (scopes[0]() === &quot;a&quot; &amp;&amp; scopes[1]() === &quot;b&quot;);</div>}
```
###temporal dead zone (strict mode)
          
```
function(){
              <div class="code">'use strict';
var passed = (function(){ try { qux; } catch(e) { return true; }}());
function fn() { passed &amp;= qux === 456; }
const qux = 456;
fn();
return passed;</div>}
```
###basic support
          
```
function(){
              <div class="code">const foo = 123;
return (foo === 123);</div>}
```
###is block-scoped
          
```
function(){
              <div class="code">const bar = 123;
{ const bar = 456; }
return bar === 123;</div>}
```
###cannot be in statements
          
```
function(){
              <div class="code">const bar = 1;
try {
  Function(&quot;if(true) const baz = 1;&quot;)();
} catch(e) {
  return true;
}</div>}
```
###redefining a const is an error
          
```
function(){
              <div class="code">const baz = 1;
try {
  Function(&quot;const foo = 1; foo = 2;&quot;)();
} catch(e) {
  return true;
}</div>}
```
###for loop statement scope
          
```
function(){
              <div class="code">const baz = 1;
for(const baz = 0; false;) {}
return baz === 1;</div>}
```
###for-in loop iteration scope
          
```
function(){
              <div class="code">var scopes = [];
for(const i in { a:1, b:1 }) {
  scopes.push(function(){ return i; });
}
return (scopes[0]() === &quot;a&quot; &amp;&amp; scopes[1]() === &quot;b&quot;);</div>}
```
###for-of loop iteration scope
          
```
function(){
              <div class="code">var scopes = [];
for(const i of ['a','b']) {
  scopes.push(function(){ return i; });
}
return (scopes[0]() === &quot;a&quot; &amp;&amp; scopes[1]() === &quot;b&quot;);</div>}
```
###temporal dead zone
          
```
function(){
              <div class="code">var passed = (function(){ try { qux; } catch(e) { return true; }}());
function fn() { passed &amp;= qux === 456; }
const qux = 456;
fn();
return passed;</div>}
```
###basic support (strict mode)
          
```
function(){
              <div class="code">&quot;use strict&quot;;
const foo = 123;
return (foo === 123);</div>}
```
###is block-scoped (strict mode)
          
```
function(){
              <div class="code">'use strict';
const bar = 123;
{ const bar = 456; }
return bar === 123;</div>}
```
###cannot be in statements (strict mode)
          
```
function(){
              <div class="code">'use strict';
const bar = 1;
try {
  Function(&quot;'use strict'; if(true) const baz = 1;&quot;)();
} catch(e) {
  return true;
}</div>}
```
###redefining a const (strict mode)
          
```
function(){
              <div class="code">'use strict';
const baz = 1;
try {
  Function(&quot;'use strict'; const foo = 1; foo = 2;&quot;)();
} catch(e) {
  return true;
}</div>}
```
###for loop statement scope (strict mode)
          
```
function(){
              <div class="code">'use strict';
const baz = 1;
for(const baz = 0; false;) {}
return baz === 1;</div>}
```
###for-in loop iteration scope (strict mode)
          
```
function(){
              <div class="code">'use strict';
var scopes = [];
for(const i in { a:1, b:1 }) {
  scopes.push(function(){ return i; });
}
return (scopes[0]() === &quot;a&quot; &amp;&amp; scopes[1]() === &quot;b&quot;);</div>}
```
###for-of loop iteration scope (strict mode)
          
```
function(){
              <div class="code">'use strict';
var scopes = [];
for(const i of ['a','b']) {
  scopes.push(function(){ return i; });
}
return (scopes[0]() === &quot;a&quot; &amp;&amp; scopes[1]() === &quot;b&quot;);</div>}
```
###temporal dead zone (strict mode)
          
```
function(){
              <div class="code">'use strict';
var passed = (function(){ try { qux; } catch(e) { return true; }}());
function fn() { passed &amp;= qux === 456; }
const qux = 456;
fn();
return passed;</div>}
```
###basic support
          
```
function(){
              <div class="code">const foo = 123;
return (foo === 123);</div>}
```
###is block-scoped
          
```
function(){
              <div class="code">const bar = 123;
{ const bar = 456; }
return bar === 123;</div>}
```
###cannot be in statements
          
```
function(){
              <div class="code">const bar = 1;
try {
  Function(&quot;if(true) const baz = 1;&quot;)();
} catch(e) {
  return true;
}</div>}
```
###redefining a const is an error
          
```
function(){
              <div class="code">const baz = 1;
try {
  Function(&quot;const foo = 1; foo = 2;&quot;)();
} catch(e) {
  return true;
}</div>}
```
###for loop statement scope
          
```
function(){
              <div class="code">const baz = 1;
for(const baz = 0; false;) {}
return baz === 1;</div>}
```
###for-in loop iteration scope
          
```
function(){
              <div class="code">var scopes = [];
for(const i in { a:1, b:1 }) {
  scopes.push(function(){ return i; });
}
return (scopes[0]() === &quot;a&quot; &amp;&amp; scopes[1]() === &quot;b&quot;);</div>}
```
###for-of loop iteration scope
          
```
function(){
              <div class="code">var scopes = [];
for(const i of ['a','b']) {
  scopes.push(function(){ return i; });
}
return (scopes[0]() === &quot;a&quot; &amp;&amp; scopes[1]() === &quot;b&quot;);</div>}
```
###temporal dead zone
          
```
function(){
              <div class="code">var passed = (function(){ try { qux; } catch(e) { return true; }}());
function fn() { passed &amp;= qux === 456; }
const qux = 456;
fn();
return passed;</div>}
```
###basic support (strict mode)
          
```
function(){
              <div class="code">&quot;use strict&quot;;
const foo = 123;
return (foo === 123);</div>}
```
###is block-scoped (strict mode)
          
```
function(){
              <div class="code">'use strict';
const bar = 123;
{ const bar = 456; }
return bar === 123;</div>}
```
###cannot be in statements (strict mode)
          
```
function(){
              <div class="code">'use strict';
const bar = 1;
try {
  Function(&quot;'use strict'; if(true) const baz = 1;&quot;)();
} catch(e) {
  return true;
}</div>}
```
###redefining a const (strict mode)
          
```
function(){
              <div class="code">'use strict';
const baz = 1;
try {
  Function(&quot;'use strict'; const foo = 1; foo = 2;&quot;)();
} catch(e) {
  return true;
}</div>}
```
###for loop statement scope (strict mode)
          
```
function(){
              <div class="code">'use strict';
const baz = 1;
for(const baz = 0; false;) {}
return baz === 1;</div>}
```
###for-in loop iteration scope (strict mode)
          
```
function(){
              <div class="code">'use strict';
var scopes = [];
for(const i in { a:1, b:1 }) {
  scopes.push(function(){ return i; });
}
return (scopes[0]() === &quot;a&quot; &amp;&amp; scopes[1]() === &quot;b&quot;);</div>}
```
###for-of loop iteration scope (strict mode)
          
```
function(){
              <div class="code">'use strict';
var scopes = [];
for(const i of ['a','b']) {
  scopes.push(function(){ return i; });
}
return (scopes[0]() === &quot;a&quot; &amp;&amp; scopes[1]() === &quot;b&quot;);</div>}
```
###temporal dead zone (strict mode)
          
```
function(){
              <div class="code">'use strict';
var passed = (function(){ try { qux; } catch(e) { return true; }}());
function fn() { passed &amp;= qux === 456; }
const qux = 456;
fn();
return passed;</div>}
```
###basic support
          
```
function(){
              <div class="code">const foo = 123;
return (foo === 123);</div>}
```
###is block-scoped
          
```
function(){
              <div class="code">const bar = 123;
{ const bar = 456; }
return bar === 123;</div>}
```
###cannot be in statements
          
```
function(){
              <div class="code">const bar = 1;
try {
  Function(&quot;if(true) const baz = 1;&quot;)();
} catch(e) {
  return true;
}</div>}
```
###redefining a const is an error
          
```
function(){
              <div class="code">const baz = 1;
try {
  Function(&quot;const foo = 1; foo = 2;&quot;)();
} catch(e) {
  return true;
}</div>}
```
###for loop statement scope
          
```
function(){
              <div class="code">const baz = 1;
for(const baz = 0; false;) {}
return baz === 1;</div>}
```
###for-in loop iteration scope
          
```
function(){
              <div class="code">var scopes = [];
for(const i in { a:1, b:1 }) {
  scopes.push(function(){ return i; });
}
return (scopes[0]() === &quot;a&quot; &amp;&amp; scopes[1]() === &quot;b&quot;);</div>}
```
###for-of loop iteration scope
          
```
function(){
              <div class="code">var scopes = [];
for(const i of ['a','b']) {
  scopes.push(function(){ return i; });
}
return (scopes[0]() === &quot;a&quot; &amp;&amp; scopes[1]() === &quot;b&quot;);</div>}
```
###temporal dead zone
          
```
function(){
              <div class="code">var passed = (function(){ try { qux; } catch(e) { return true; }}());
function fn() { passed &amp;= qux === 456; }
const qux = 456;
fn();
return passed;</div>}
```
###basic support (strict mode)
          
```
function(){
              <div class="code">&quot;use strict&quot;;
const foo = 123;
return (foo === 123);</div>}
```
###is block-scoped (strict mode)
          
```
function(){
              <div class="code">'use strict';
const bar = 123;
{ const bar = 456; }
return bar === 123;</div>}
```
###cannot be in statements (strict mode)
          
```
function(){
              <div class="code">'use strict';
const bar = 1;
try {
  Function(&quot;'use strict'; if(true) const baz = 1;&quot;)();
} catch(e) {
  return true;
}</div>}
```
###redefining a const (strict mode)
          
```
function(){
              <div class="code">'use strict';
const baz = 1;
try {
  Function(&quot;'use strict'; const foo = 1; foo = 2;&quot;)();
} catch(e) {
  return true;
}</div>}
```
###for loop statement scope (strict mode)
          
```
function(){
              <div class="code">'use strict';
const baz = 1;
for(const baz = 0; false;) {}
return baz === 1;</div>}
```
###for-in loop iteration scope (strict mode)
          
```
function(){
              <div class="code">'use strict';
var scopes = [];
for(const i in { a:1, b:1 }) {
  scopes.push(function(){ return i; });
}
return (scopes[0]() === &quot;a&quot; &amp;&amp; scopes[1]() === &quot;b&quot;);</div>}
```
###for-of loop iteration scope (strict mode)
          
```
function(){
              <div class="code">'use strict';
var scopes = [];
for(const i of ['a','b']) {
  scopes.push(function(){ return i; });
}
return (scopes[0]() === &quot;a&quot; &amp;&amp; scopes[1]() === &quot;b&quot;);</div>}
```
###temporal dead zone (strict mode)
          
```
function(){
              <div class="code">'use strict';
var passed = (function(){ try { qux; } catch(e) { return true; }}());
function fn() { passed &amp;= qux === 456; }
const qux = 456;
fn();
return passed;</div>}
```
###basic support
          
```
function(){
              <div class="code">const foo = 123;
return (foo === 123);</div>}
```
###is block-scoped
          
```
function(){
              <div class="code">const bar = 123;
{ const bar = 456; }
return bar === 123;</div>}
```
###cannot be in statements
          
```
function(){
              <div class="code">const bar = 1;
try {
  Function(&quot;if(true) const baz = 1;&quot;)();
} catch(e) {
  return true;
}</div>}
```
###redefining a const is an error
          
```
function(){
              <div class="code">const baz = 1;
try {
  Function(&quot;const foo = 1; foo = 2;&quot;)();
} catch(e) {
  return true;
}</div>}
```
###for loop statement scope
          
```
function(){
              <div class="code">const baz = 1;
for(const baz = 0; false;) {}
return baz === 1;</div>}
```
###for-in loop iteration scope
          
```
function(){
              <div class="code">var scopes = [];
for(const i in { a:1, b:1 }) {
  scopes.push(function(){ return i; });
}
return (scopes[0]() === &quot;a&quot; &amp;&amp; scopes[1]() === &quot;b&quot;);</div>}
```
###for-of loop iteration scope
          
```
function(){
              <div class="code">var scopes = [];
for(const i of ['a','b']) {
  scopes.push(function(){ return i; });
}
return (scopes[0]() === &quot;a&quot; &amp;&amp; scopes[1]() === &quot;b&quot;);</div>}
```
###temporal dead zone
          
```
function(){
              <div class="code">var passed = (function(){ try { qux; } catch(e) { return true; }}());
function fn() { passed &amp;= qux === 456; }
const qux = 456;
fn();
return passed;</div>}
```
###basic support (strict mode)
          
```
function(){
              <div class="code">&quot;use strict&quot;;
const foo = 123;
return (foo === 123);</div>}
```
###is block-scoped (strict mode)
          
```
function(){
              <div class="code">'use strict';
const bar = 123;
{ const bar = 456; }
return bar === 123;</div>}
```
###cannot be in statements (strict mode)
          
```
function(){
              <div class="code">'use strict';
const bar = 1;
try {
  Function(&quot;'use strict'; if(true) const baz = 1;&quot;)();
} catch(e) {
  return true;
}</div>}
```
###redefining a const (strict mode)
          
```
function(){
              <div class="code">'use strict';
const baz = 1;
try {
  Function(&quot;'use strict'; const foo = 1; foo = 2;&quot;)();
} catch(e) {
  return true;
}</div>}
```
###for loop statement scope (strict mode)
          
```
function(){
              <div class="code">'use strict';
const baz = 1;
for(const baz = 0; false;) {}
return baz === 1;</div>}
```
###for-in loop iteration scope (strict mode)
          
```
function(){
              <div class="code">'use strict';
var scopes = [];
for(const i in { a:1, b:1 }) {
  scopes.push(function(){ return i; });
}
return (scopes[0]() === &quot;a&quot; &amp;&amp; scopes[1]() === &quot;b&quot;);</div>}
```
###for-of loop iteration scope (strict mode)
          
```
function(){
              <div class="code">'use strict';
var scopes = [];
for(const i of ['a','b']) {
  scopes.push(function(){ return i; });
}
return (scopes[0]() === &quot;a&quot; &amp;&amp; scopes[1]() === &quot;b&quot;);</div>}
```
###temporal dead zone (strict mode)
          
```
function(){
              <div class="code">'use strict';
var passed = (function(){ try { qux; } catch(e) { return true; }}());
function fn() { passed &amp;= qux === 456; }
const qux = 456;
fn();
return passed;</div>}
```
###basic support
          
```
function(){
              <div class="code">const foo = 123;
return (foo === 123);</div>}
```
###is block-scoped
          
```
function(){
              <div class="code">const bar = 123;
{ const bar = 456; }
return bar === 123;</div>}
```
###cannot be in statements
          
```
function(){
              <div class="code">const bar = 1;
try {
  Function(&quot;if(true) const baz = 1;&quot;)();
} catch(e) {
  return true;
}</div>}
```
###redefining a const is an error
          
```
function(){
              <div class="code">const baz = 1;
try {
  Function(&quot;const foo = 1; foo = 2;&quot;)();
} catch(e) {
  return true;
}</div>}
```
###for loop statement scope
          
```
function(){
              <div class="code">const baz = 1;
for(const baz = 0; false;) {}
return baz === 1;</div>}
```
###for-in loop iteration scope
          
```
function(){
              <div class="code">var scopes = [];
for(const i in { a:1, b:1 }) {
  scopes.push(function(){ return i; });
}
return (scopes[0]() === &quot;a&quot; &amp;&amp; scopes[1]() === &quot;b&quot;);</div>}
```
###for-of loop iteration scope
          
```
function(){
              <div class="code">var scopes = [];
for(const i of ['a','b']) {
  scopes.push(function(){ return i; });
}
return (scopes[0]() === &quot;a&quot; &amp;&amp; scopes[1]() === &quot;b&quot;);</div>}
```
###temporal dead zone
          
```
function(){
              <div class="code">var passed = (function(){ try { qux; } catch(e) { return true; }}());
function fn() { passed &amp;= qux === 456; }
const qux = 456;
fn();
return passed;</div>}
```
###basic support (strict mode)
          
```
function(){
              <div class="code">&quot;use strict&quot;;
const foo = 123;
return (foo === 123);</div>}
```
###is block-scoped (strict mode)
          
```
function(){
              <div class="code">'use strict';
const bar = 123;
{ const bar = 456; }
return bar === 123;</div>}
```
###cannot be in statements (strict mode)
          
```
function(){
              <div class="code">'use strict';
const bar = 1;
try {
  Function(&quot;'use strict'; if(true) const baz = 1;&quot;)();
} catch(e) {
  return true;
}</div>}
```
###redefining a const (strict mode)
          
```
function(){
              <div class="code">'use strict';
const baz = 1;
try {
  Function(&quot;'use strict'; const foo = 1; foo = 2;&quot;)();
} catch(e) {
  return true;
}</div>}
```
###for loop statement scope (strict mode)
          
```
function(){
              <div class="code">'use strict';
const baz = 1;
for(const baz = 0; false;) {}
return baz === 1;</div>}
```
###for-in loop iteration scope (strict mode)
          
```
function(){
              <div class="code">'use strict';
var scopes = [];
for(const i in { a:1, b:1 }) {
  scopes.push(function(){ return i; });
}
return (scopes[0]() === &quot;a&quot; &amp;&amp; scopes[1]() === &quot;b&quot;);</div>}
```
###for-of loop iteration scope (strict mode)
          
```
function(){
              <div class="code">'use strict';
var scopes = [];
for(const i of ['a','b']) {
  scopes.push(function(){ return i; });
}
return (scopes[0]() === &quot;a&quot; &amp;&amp; scopes[1]() === &quot;b&quot;);</div>}
```
###temporal dead zone (strict mode)
          
```
function(){
              <div class="code">'use strict';
var passed = (function(){ try { qux; } catch(e) { return true; }}());
function fn() { passed &amp;= qux === 456; }
const qux = 456;
fn();
return passed;</div>}
```
###basic support
          
```
function(){
              <div class="code">const foo = 123;
return (foo === 123);</div>}
```
###is block-scoped
          
```
function(){
              <div class="code">const bar = 123;
{ const bar = 456; }
return bar === 123;</div>}
```
###cannot be in statements
          
```
function(){
              <div class="code">const bar = 1;
try {
  Function(&quot;if(true) const baz = 1;&quot;)();
} catch(e) {
  return true;
}</div>}
```
###redefining a const is an error
          
```
function(){
              <div class="code">const baz = 1;
try {
  Function(&quot;const foo = 1; foo = 2;&quot;)();
} catch(e) {
  return true;
}</div>}
```
###for loop statement scope
          
```
function(){
              <div class="code">const baz = 1;
for(const baz = 0; false;) {}
return baz === 1;</div>}
```
###for-in loop iteration scope
          
```
function(){
              <div class="code">var scopes = [];
for(const i in { a:1, b:1 }) {
  scopes.push(function(){ return i; });
}
return (scopes[0]() === &quot;a&quot; &amp;&amp; scopes[1]() === &quot;b&quot;);</div>}
```
###for-of loop iteration scope
          
```
function(){
              <div class="code">var scopes = [];
for(const i of ['a','b']) {
  scopes.push(function(){ return i; });
}
return (scopes[0]() === &quot;a&quot; &amp;&amp; scopes[1]() === &quot;b&quot;);</div>}
```
###temporal dead zone
          
```
function(){
              <div class="code">var passed = (function(){ try { qux; } catch(e) { return true; }}());
function fn() { passed &amp;= qux === 456; }
const qux = 456;
fn();
return passed;</div>}
```
###basic support (strict mode)
          
```
function(){
              <div class="code">&quot;use strict&quot;;
const foo = 123;
return (foo === 123);</div>}
```
###is block-scoped (strict mode)
          
```
function(){
              <div class="code">'use strict';
const bar = 123;
{ const bar = 456; }
return bar === 123;</div>}
```
###cannot be in statements (strict mode)
          
```
function(){
              <div class="code">'use strict';
const bar = 1;
try {
  Function(&quot;'use strict'; if(true) const baz = 1;&quot;)();
} catch(e) {
  return true;
}</div>}
```
###redefining a const (strict mode)
          
```
function(){
              <div class="code">'use strict';
const baz = 1;
try {
  Function(&quot;'use strict'; const foo = 1; foo = 2;&quot;)();
} catch(e) {
  return true;
}</div>}
```
###for loop statement scope (strict mode)
          
```
function(){
              <div class="code">'use strict';
const baz = 1;
for(const baz = 0; false;) {}
return baz === 1;</div>}
```
###for-in loop iteration scope (strict mode)
          
```
function(){
              <div class="code">'use strict';
var scopes = [];
for(const i in { a:1, b:1 }) {
  scopes.push(function(){ return i; });
}
return (scopes[0]() === &quot;a&quot; &amp;&amp; scopes[1]() === &quot;b&quot;);</div>}
```
###for-of loop iteration scope (strict mode)
          
```
function(){
              <div class="code">'use strict';
var scopes = [];
for(const i of ['a','b']) {
  scopes.push(function(){ return i; });
}
return (scopes[0]() === &quot;a&quot; &amp;&amp; scopes[1]() === &quot;b&quot;);</div>}
```
###temporal dead zone (strict mode)
          
```
function(){
              <div class="code">'use strict';
var passed = (function(){ try { qux; } catch(e) { return true; }}());
function fn() { passed &amp;= qux === 456; }
const qux = 456;
fn();
return passed;</div>}
```
###basic support
          
```
function(){
              <div class="code">const foo = 123;
return (foo === 123);</div>}
```
###is block-scoped
          
```
function(){
              <div class="code">const bar = 123;
{ const bar = 456; }
return bar === 123;</div>}
```
###cannot be in statements
          
```
function(){
              <div class="code">const bar = 1;
try {
  Function(&quot;if(true) const baz = 1;&quot;)();
} catch(e) {
  return true;
}</div>}
```
###redefining a const is an error
          
```
function(){
              <div class="code">const baz = 1;
try {
  Function(&quot;const foo = 1; foo = 2;&quot;)();
} catch(e) {
  return true;
}</div>}
```
###for loop statement scope
          
```
function(){
              <div class="code">const baz = 1;
for(const baz = 0; false;) {}
return baz === 1;</div>}
```
###for-in loop iteration scope
          
```
function(){
              <div class="code">var scopes = [];
for(const i in { a:1, b:1 }) {
  scopes.push(function(){ return i; });
}
return (scopes[0]() === &quot;a&quot; &amp;&amp; scopes[1]() === &quot;b&quot;);</div>}
```
###for-of loop iteration scope
          
```
function(){
              <div class="code">var scopes = [];
for(const i of ['a','b']) {
  scopes.push(function(){ return i; });
}
return (scopes[0]() === &quot;a&quot; &amp;&amp; scopes[1]() === &quot;b&quot;);</div>}
```
###temporal dead zone
          
```
function(){
              <div class="code">var passed = (function(){ try { qux; } catch(e) { return true; }}());
function fn() { passed &amp;= qux === 456; }
const qux = 456;
fn();
return passed;</div>}
```
###basic support (strict mode)
          
```
function(){
              <div class="code">&quot;use strict&quot;;
const foo = 123;
return (foo === 123);</div>}
```
###is block-scoped (strict mode)
          
```
function(){
              <div class="code">'use strict';
const bar = 123;
{ const bar = 456; }
return bar === 123;</div>}
```
###cannot be in statements (strict mode)
          
```
function(){
              <div class="code">'use strict';
const bar = 1;
try {
  Function(&quot;'use strict'; if(true) const baz = 1;&quot;)();
} catch(e) {
  return true;
}</div>}
```
###redefining a const (strict mode)
          
```
function(){
              <div class="code">'use strict';
const baz = 1;
try {
  Function(&quot;'use strict'; const foo = 1; foo = 2;&quot;)();
} catch(e) {
  return true;
}</div>}
```
###for loop statement scope (strict mode)
          
```
function(){
              <div class="code">'use strict';
const baz = 1;
for(const baz = 0; false;) {}
return baz === 1;</div>}
```
###for-in loop iteration scope (strict mode)
          
```
function(){
              <div class="code">'use strict';
var scopes = [];
for(const i in { a:1, b:1 }) {
  scopes.push(function(){ return i; });
}
return (scopes[0]() === &quot;a&quot; &amp;&amp; scopes[1]() === &quot;b&quot;);</div>}
```
###for-of loop iteration scope (strict mode)
          
```
function(){
              <div class="code">'use strict';
var scopes = [];
for(const i of ['a','b']) {
  scopes.push(function(){ return i; });
}
return (scopes[0]() === &quot;a&quot; &amp;&amp; scopes[1]() === &quot;b&quot;);</div>}
```
###temporal dead zone (strict mode)
          
```
function(){
              <div class="code">'use strict';
var passed = (function(){ try { qux; } catch(e) { return true; }}());
function fn() { passed &amp;= qux === 456; }
const qux = 456;
fn();
return passed;</div>}
```
###basic support
          
```
function(){
              <div class="code">const foo = 123;
return (foo === 123);</div>}
```
###is block-scoped
          
```
function(){
              <div class="code">const bar = 123;
{ const bar = 456; }
return bar === 123;</div>}
```
###cannot be in statements
          
```
function(){
              <div class="code">const bar = 1;
try {
  Function(&quot;if(true) const baz = 1;&quot;)();
} catch(e) {
  return true;
}</div>}
```
###redefining a const is an error
          
```
function(){
              <div class="code">const baz = 1;
try {
  Function(&quot;const foo = 1; foo = 2;&quot;)();
} catch(e) {
  return true;
}</div>}
```
###for loop statement scope
          
```
function(){
              <div class="code">const baz = 1;
for(const baz = 0; false;) {}
return baz === 1;</div>}
```
###for-in loop iteration scope
          
```
function(){
              <div class="code">var scopes = [];
for(const i in { a:1, b:1 }) {
  scopes.push(function(){ return i; });
}
return (scopes[0]() === &quot;a&quot; &amp;&amp; scopes[1]() === &quot;b&quot;);</div>}
```
###for-of loop iteration scope
          
```
function(){
              <div class="code">var scopes = [];
for(const i of ['a','b']) {
  scopes.push(function(){ return i; });
}
return (scopes[0]() === &quot;a&quot; &amp;&amp; scopes[1]() === &quot;b&quot;);</div>}
```
###temporal dead zone
          
```
function(){
              <div class="code">var passed = (function(){ try { qux; } catch(e) { return true; }}());
function fn() { passed &amp;= qux === 456; }
const qux = 456;
fn();
return passed;</div>}
```
###basic support (strict mode)
          
```
function(){
              <div class="code">&quot;use strict&quot;;
const foo = 123;
return (foo === 123);</div>}
```
###is block-scoped (strict mode)
          
```
function(){
              <div class="code">'use strict';
const bar = 123;
{ const bar = 456; }
return bar === 123;</div>}
```
###cannot be in statements (strict mode)
          
```
function(){
              <div class="code">'use strict';
const bar = 1;
try {
  Function(&quot;'use strict'; if(true) const baz = 1;&quot;)();
} catch(e) {
  return true;
}</div>}
```
###redefining a const (strict mode)
          
```
function(){
              <div class="code">'use strict';
const baz = 1;
try {
  Function(&quot;'use strict'; const foo = 1; foo = 2;&quot;)();
} catch(e) {
  return true;
}</div>}
```
###for loop statement scope (strict mode)
          
```
function(){
              <div class="code">'use strict';
const baz = 1;
for(const baz = 0; false;) {}
return baz === 1;</div>}
```
###for-in loop iteration scope (strict mode)
          
```
function(){
              <div class="code">'use strict';
var scopes = [];
for(const i in { a:1, b:1 }) {
  scopes.push(function(){ return i; });
}
return (scopes[0]() === &quot;a&quot; &amp;&amp; scopes[1]() === &quot;b&quot;);</div>}
```
###for-of loop iteration scope (strict mode)
          
```
function(){
              <div class="code">'use strict';
var scopes = [];
for(const i of ['a','b']) {
  scopes.push(function(){ return i; });
}
return (scopes[0]() === &quot;a&quot; &amp;&amp; scopes[1]() === &quot;b&quot;);</div>}
```
###temporal dead zone (strict mode)
          
```
function(){
              <div class="code">'use strict';
var passed = (function(){ try { qux; } catch(e) { return true; }}());
function fn() { passed &amp;= qux === 456; }
const qux = 456;
fn();
return passed;</div>}
```
###basic support
          
```
function(){
              <div class="code">const foo = 123;
return (foo === 123);</div>}
```
###is block-scoped
          
```
function(){
              <div class="code">const bar = 123;
{ const bar = 456; }
return bar === 123;</div>}
```
###cannot be in statements
          
```
function(){
              <div class="code">const bar = 1;
try {
  Function(&quot;if(true) const baz = 1;&quot;)();
} catch(e) {
  return true;
}</div>}
```
###redefining a const is an error
          
```
function(){
              <div class="code">const baz = 1;
try {
  Function(&quot;const foo = 1; foo = 2;&quot;)();
} catch(e) {
  return true;
}</div>}
```
###for loop statement scope
          
```
function(){
              <div class="code">const baz = 1;
for(const baz = 0; false;) {}
return baz === 1;</div>}
```
###for-in loop iteration scope
          
```
function(){
              <div class="code">var scopes = [];
for(const i in { a:1, b:1 }) {
  scopes.push(function(){ return i; });
}
return (scopes[0]() === &quot;a&quot; &amp;&amp; scopes[1]() === &quot;b&quot;);</div>}
```
###for-of loop iteration scope
          
```
function(){
              <div class="code">var scopes = [];
for(const i of ['a','b']) {
  scopes.push(function(){ return i; });
}
return (scopes[0]() === &quot;a&quot; &amp;&amp; scopes[1]() === &quot;b&quot;);</div>}
```
###temporal dead zone
          
```
function(){
              <div class="code">var passed = (function(){ try { qux; } catch(e) { return true; }}());
function fn() { passed &amp;= qux === 456; }
const qux = 456;
fn();
return passed;</div>}
```
###basic support (strict mode)
          
```
function(){
              <div class="code">&quot;use strict&quot;;
const foo = 123;
return (foo === 123);</div>}
```
###is block-scoped (strict mode)
          
```
function(){
              <div class="code">'use strict';
const bar = 123;
{ const bar = 456; }
return bar === 123;</div>}
```
###cannot be in statements (strict mode)
          
```
function(){
              <div class="code">'use strict';
const bar = 1;
try {
  Function(&quot;'use strict'; if(true) const baz = 1;&quot;)();
} catch(e) {
  return true;
}</div>}
```
###redefining a const (strict mode)
          
```
function(){
              <div class="code">'use strict';
const baz = 1;
try {
  Function(&quot;'use strict'; const foo = 1; foo = 2;&quot;)();
} catch(e) {
  return true;
}</div>}
```
###for loop statement scope (strict mode)
          
```
function(){
              <div class="code">'use strict';
const baz = 1;
for(const baz = 0; false;) {}
return baz === 1;</div>}
```
###for-in loop iteration scope (strict mode)
          
```
function(){
              <div class="code">'use strict';
var scopes = [];
for(const i in { a:1, b:1 }) {
  scopes.push(function(){ return i; });
}
return (scopes[0]() === &quot;a&quot; &amp;&amp; scopes[1]() === &quot;b&quot;);</div>}
```
###for-of loop iteration scope (strict mode)
          
```
function(){
              <div class="code">'use strict';
var scopes = [];
for(const i of ['a','b']) {
  scopes.push(function(){ return i; });
}
return (scopes[0]() === &quot;a&quot; &amp;&amp; scopes[1]() === &quot;b&quot;);</div>}
```
###temporal dead zone (strict mode)
          
```
function(){
              <div class="code">'use strict';
var passed = (function(){ try { qux; } catch(e) { return true; }}());
function fn() { passed &amp;= qux === 456; }
const qux = 456;
fn();
return passed;</div>}
```
###basic support
          
```
function(){
              <div class="code">const foo = 123;
return (foo === 123);</div>}
```
###is block-scoped
          
```
function(){
              <div class="code">const bar = 123;
{ const bar = 456; }
return bar === 123;</div>}
```
###cannot be in statements
          
```
function(){
              <div class="code">const bar = 1;
try {
  Function(&quot;if(true) const baz = 1;&quot;)();
} catch(e) {
  return true;
}</div>}
```
###redefining a const is an error
          
```
function(){
              <div class="code">const baz = 1;
try {
  Function(&quot;const foo = 1; foo = 2;&quot;)();
} catch(e) {
  return true;
}</div>}
```
###for loop statement scope
          
```
function(){
              <div class="code">const baz = 1;
for(const baz = 0; false;) {}
return baz === 1;</div>}
```
###for-in loop iteration scope
          
```
function(){
              <div class="code">var scopes = [];
for(const i in { a:1, b:1 }) {
  scopes.push(function(){ return i; });
}
return (scopes[0]() === &quot;a&quot; &amp;&amp; scopes[1]() === &quot;b&quot;);</div>}
```
###for-of loop iteration scope
          
```
function(){
              <div class="code">var scopes = [];
for(const i of ['a','b']) {
  scopes.push(function(){ return i; });
}
return (scopes[0]() === &quot;a&quot; &amp;&amp; scopes[1]() === &quot;b&quot;);</div>}
```
###temporal dead zone
          
```
function(){
              <div class="code">var passed = (function(){ try { qux; } catch(e) { return true; }}());
function fn() { passed &amp;= qux === 456; }
const qux = 456;
fn();
return passed;</div>}
```
###basic support (strict mode)
          
```
function(){
              <div class="code">&quot;use strict&quot;;
const foo = 123;
return (foo === 123);</div>}
```
###is block-scoped (strict mode)
          
```
function(){
              <div class="code">'use strict';
const bar = 123;
{ const bar = 456; }
return bar === 123;</div>}
```
###cannot be in statements (strict mode)
          
```
function(){
              <div class="code">'use strict';
const bar = 1;
try {
  Function(&quot;'use strict'; if(true) const baz = 1;&quot;)();
} catch(e) {
  return true;
}</div>}
```
###redefining a const (strict mode)
          
```
function(){
              <div class="code">'use strict';
const baz = 1;
try {
  Function(&quot;'use strict'; const foo = 1; foo = 2;&quot;)();
} catch(e) {
  return true;
}</div>}
```
###for loop statement scope (strict mode)
          
```
function(){
              <div class="code">'use strict';
const baz = 1;
for(const baz = 0; false;) {}
return baz === 1;</div>}
```
###for-in loop iteration scope (strict mode)
          
```
function(){
              <div class="code">'use strict';
var scopes = [];
for(const i in { a:1, b:1 }) {
  scopes.push(function(){ return i; });
}
return (scopes[0]() === &quot;a&quot; &amp;&amp; scopes[1]() === &quot;b&quot;);</div>}
```
###for-of loop iteration scope (strict mode)
          
```
function(){
              <div class="code">'use strict';
var scopes = [];
for(const i of ['a','b']) {
  scopes.push(function(){ return i; });
}
return (scopes[0]() === &quot;a&quot; &amp;&amp; scopes[1]() === &quot;b&quot;);</div>}
```
###temporal dead zone (strict mode)
          
```
function(){
              <div class="code">'use strict';
var passed = (function(){ try { qux; } catch(e) { return true; }}());
function fn() { passed &amp;= qux === 456; }
const qux = 456;
fn();
return passed;</div>}
```
###basic support
          
```
function(){
              <div class="code">const foo = 123;
return (foo === 123);</div>}
```
###is block-scoped
          
```
function(){
              <div class="code">const bar = 123;
{ const bar = 456; }
return bar === 123;</div>}
```
###cannot be in statements
          
```
function(){
              <div class="code">const bar = 1;
try {
  Function(&quot;if(true) const baz = 1;&quot;)();
} catch(e) {
  return true;
}</div>}
```
###redefining a const is an error
          
```
function(){
              <div class="code">const baz = 1;
try {
  Function(&quot;const foo = 1; foo = 2;&quot;)();
} catch(e) {
  return true;
}</div>}
```
###for loop statement scope
          
```
function(){
              <div class="code">const baz = 1;
for(const baz = 0; false;) {}
return baz === 1;</div>}
```
###for-in loop iteration scope
          
```
function(){
              <div class="code">var scopes = [];
for(const i in { a:1, b:1 }) {
  scopes.push(function(){ return i; });
}
return (scopes[0]() === &quot;a&quot; &amp;&amp; scopes[1]() === &quot;b&quot;);</div>}
```
###for-of loop iteration scope
          
```
function(){
              <div class="code">var scopes = [];
for(const i of ['a','b']) {
  scopes.push(function(){ return i; });
}
return (scopes[0]() === &quot;a&quot; &amp;&amp; scopes[1]() === &quot;b&quot;);</div>}
```
###temporal dead zone
          
```
function(){
              <div class="code">var passed = (function(){ try { qux; } catch(e) { return true; }}());
function fn() { passed &amp;= qux === 456; }
const qux = 456;
fn();
return passed;</div>}
```
###basic support (strict mode)
          
```
function(){
              <div class="code">&quot;use strict&quot;;
const foo = 123;
return (foo === 123);</div>}
```
###is block-scoped (strict mode)
          
```
function(){
              <div class="code">'use strict';
const bar = 123;
{ const bar = 456; }
return bar === 123;</div>}
```
###cannot be in statements (strict mode)
          
```
function(){
              <div class="code">'use strict';
const bar = 1;
try {
  Function(&quot;'use strict'; if(true) const baz = 1;&quot;)();
} catch(e) {
  return true;
}</div>}
```
###redefining a const (strict mode)
          
```
function(){
              <div class="code">'use strict';
const baz = 1;
try {
  Function(&quot;'use strict'; const foo = 1; foo = 2;&quot;)();
} catch(e) {
  return true;
}</div>}
```
###for loop statement scope (strict mode)
          
```
function(){
              <div class="code">'use strict';
const baz = 1;
for(const baz = 0; false;) {}
return baz === 1;</div>}
```
###for-in loop iteration scope (strict mode)
          
```
function(){
              <div class="code">'use strict';
var scopes = [];
for(const i in { a:1, b:1 }) {
  scopes.push(function(){ return i; });
}
return (scopes[0]() === &quot;a&quot; &amp;&amp; scopes[1]() === &quot;b&quot;);</div>}
```
###for-of loop iteration scope (strict mode)
          
```
function(){
              <div class="code">'use strict';
var scopes = [];
for(const i of ['a','b']) {
  scopes.push(function(){ return i; });
}
return (scopes[0]() === &quot;a&quot; &amp;&amp; scopes[1]() === &quot;b&quot;);</div>}
```
###temporal dead zone (strict mode)
          
```
function(){
              <div class="code">'use strict';
var passed = (function(){ try { qux; } catch(e) { return true; }}());
function fn() { passed &amp;= qux === 456; }
const qux = 456;
fn();
return passed;</div>}
```
###basic support
          
```
function(){
              <div class="code">const foo = 123;
return (foo === 123);</div>}
```
###is block-scoped
          
```
function(){
              <div class="code">const bar = 123;
{ const bar = 456; }
return bar === 123;</div>}
```
###cannot be in statements
          
```
function(){
              <div class="code">const bar = 1;
try {
  Function(&quot;if(true) const baz = 1;&quot;)();
} catch(e) {
  return true;
}</div>}
```
###redefining a const is an error
          
```
function(){
              <div class="code">const baz = 1;
try {
  Function(&quot;const foo = 1; foo = 2;&quot;)();
} catch(e) {
  return true;
}</div>}
```
###for loop statement scope
          
```
function(){
              <div class="code">const baz = 1;
for(const baz = 0; false;) {}
return baz === 1;</div>}
```
###for-in loop iteration scope
          
```
function(){
              <div class="code">var scopes = [];
for(const i in { a:1, b:1 }) {
  scopes.push(function(){ return i; });
}
return (scopes[0]() === &quot;a&quot; &amp;&amp; scopes[1]() === &quot;b&quot;);</div>}
```
###for-of loop iteration scope
          
```
function(){
              <div class="code">var scopes = [];
for(const i of ['a','b']) {
  scopes.push(function(){ return i; });
}
return (scopes[0]() === &quot;a&quot; &amp;&amp; scopes[1]() === &quot;b&quot;);</div>}
```
###temporal dead zone
          
```
function(){
              <div class="code">var passed = (function(){ try { qux; } catch(e) { return true; }}());
function fn() { passed &amp;= qux === 456; }
const qux = 456;
fn();
return passed;</div>}
```
###basic support (strict mode)
          
```
function(){
              <div class="code">&quot;use strict&quot;;
const foo = 123;
return (foo === 123);</div>}
```
###is block-scoped (strict mode)
          
```
function(){
              <div class="code">'use strict';
const bar = 123;
{ const bar = 456; }
return bar === 123;</div>}
```
###cannot be in statements (strict mode)
          
```
function(){
              <div class="code">'use strict';
const bar = 1;
try {
  Function(&quot;'use strict'; if(true) const baz = 1;&quot;)();
} catch(e) {
  return true;
}</div>}
```
###redefining a const (strict mode)
          
```
function(){
              <div class="code">'use strict';
const baz = 1;
try {
  Function(&quot;'use strict'; const foo = 1; foo = 2;&quot;)();
} catch(e) {
  return true;
}</div>}
```
###for loop statement scope (strict mode)
          
```
function(){
              <div class="code">'use strict';
const baz = 1;
for(const baz = 0; false;) {}
return baz === 1;</div>}
```
###for-in loop iteration scope (strict mode)
          
```
function(){
              <div class="code">'use strict';
var scopes = [];
for(const i in { a:1, b:1 }) {
  scopes.push(function(){ return i; });
}
return (scopes[0]() === &quot;a&quot; &amp;&amp; scopes[1]() === &quot;b&quot;);</div>}
```
###for-of loop iteration scope (strict mode)
          
```
function(){
              <div class="code">'use strict';
var scopes = [];
for(const i of ['a','b']) {
  scopes.push(function(){ return i; });
}
return (scopes[0]() === &quot;a&quot; &amp;&amp; scopes[1]() === &quot;b&quot;);</div>}
```
###temporal dead zone (strict mode)
          
```
function(){
              <div class="code">'use strict';
var passed = (function(){ try { qux; } catch(e) { return true; }}());
function fn() { passed &amp;= qux === 456; }
const qux = 456;
fn();
return passed;</div>}
```
###basic support
          
```
function(){
              <div class="code">const foo = 123;
return (foo === 123);</div>}
```
###is block-scoped
          
```
function(){
              <div class="code">const bar = 123;
{ const bar = 456; }
return bar === 123;</div>}
```
###cannot be in statements
          
```
function(){
              <div class="code">const bar = 1;
try {
  Function(&quot;if(true) const baz = 1;&quot;)();
} catch(e) {
  return true;
}</div>}
```
###redefining a const is an error
          
```
function(){
              <div class="code">const baz = 1;
try {
  Function(&quot;const foo = 1; foo = 2;&quot;)();
} catch(e) {
  return true;
}</div>}
```
###for loop statement scope
          
```
function(){
              <div class="code">const baz = 1;
for(const baz = 0; false;) {}
return baz === 1;</div>}
```
###for-in loop iteration scope
          
```
function(){
              <div class="code">var scopes = [];
for(const i in { a:1, b:1 }) {
  scopes.push(function(){ return i; });
}
return (scopes[0]() === &quot;a&quot; &amp;&amp; scopes[1]() === &quot;b&quot;);</div>}
```
###for-of loop iteration scope
          
```
function(){
              <div class="code">var scopes = [];
for(const i of ['a','b']) {
  scopes.push(function(){ return i; });
}
return (scopes[0]() === &quot;a&quot; &amp;&amp; scopes[1]() === &quot;b&quot;);</div>}
```
###temporal dead zone
          
```
function(){
              <div class="code">var passed = (function(){ try { qux; } catch(e) { return true; }}());
function fn() { passed &amp;= qux === 456; }
const qux = 456;
fn();
return passed;</div>}
```
###basic support (strict mode)
          
```
function(){
              <div class="code">&quot;use strict&quot;;
const foo = 123;
return (foo === 123);</div>}
```
###is block-scoped (strict mode)
          
```
function(){
              <div class="code">'use strict';
const bar = 123;
{ const bar = 456; }
return bar === 123;</div>}
```
###cannot be in statements (strict mode)
          
```
function(){
              <div class="code">'use strict';
const bar = 1;
try {
  Function(&quot;'use strict'; if(true) const baz = 1;&quot;)();
} catch(e) {
  return true;
}</div>}
```
###redefining a const (strict mode)
          
```
function(){
              <div class="code">'use strict';
const baz = 1;
try {
  Function(&quot;'use strict'; const foo = 1; foo = 2;&quot;)();
} catch(e) {
  return true;
}</div>}
```
###for loop statement scope (strict mode)
          
```
function(){
              <div class="code">'use strict';
const baz = 1;
for(const baz = 0; false;) {}
return baz === 1;</div>}
```
###for-in loop iteration scope (strict mode)
          
```
function(){
              <div class="code">'use strict';
var scopes = [];
for(const i in { a:1, b:1 }) {
  scopes.push(function(){ return i; });
}
return (scopes[0]() === &quot;a&quot; &amp;&amp; scopes[1]() === &quot;b&quot;);</div>}
```
###for-of loop iteration scope (strict mode)
          
```
function(){
              <div class="code">'use strict';
var scopes = [];
for(const i of ['a','b']) {
  scopes.push(function(){ return i; });
}
return (scopes[0]() === &quot;a&quot; &amp;&amp; scopes[1]() === &quot;b&quot;);</div>}
```
###temporal dead zone (strict mode)
          
```
function(){
              <div class="code">'use strict';
var passed = (function(){ try { qux; } catch(e) { return true; }}());
function fn() { passed &amp;= qux === 456; }
const qux = 456;
fn();
return passed;</div>}
```
###basic support
          
```
function(){
              <div class="code">const foo = 123;
return (foo === 123);</div>}
```
###is block-scoped
          
```
function(){
              <div class="code">const bar = 123;
{ const bar = 456; }
return bar === 123;</div>}
```
###cannot be in statements
          
```
function(){
              <div class="code">const bar = 1;
try {
  Function(&quot;if(true) const baz = 1;&quot;)();
} catch(e) {
  return true;
}</div>}
```
###redefining a const is an error
          
```
function(){
              <div class="code">const baz = 1;
try {
  Function(&quot;const foo = 1; foo = 2;&quot;)();
} catch(e) {
  return true;
}</div>}
```
###for loop statement scope
          
```
function(){
              <div class="code">const baz = 1;
for(const baz = 0; false;) {}
return baz === 1;</div>}
```
###for-in loop iteration scope
          
```
function(){
              <div class="code">var scopes = [];
for(const i in { a:1, b:1 }) {
  scopes.push(function(){ return i; });
}
return (scopes[0]() === &quot;a&quot; &amp;&amp; scopes[1]() === &quot;b&quot;);</div>}
```
###for-of loop iteration scope
          
```
function(){
              <div class="code">var scopes = [];
for(const i of ['a','b']) {
  scopes.push(function(){ return i; });
}
return (scopes[0]() === &quot;a&quot; &amp;&amp; scopes[1]() === &quot;b&quot;);</div>}
```
###temporal dead zone
          
```
function(){
              <div class="code">var passed = (function(){ try { qux; } catch(e) { return true; }}());
function fn() { passed &amp;= qux === 456; }
const qux = 456;
fn();
return passed;</div>}
```
###basic support (strict mode)
          
```
function(){
              <div class="code">&quot;use strict&quot;;
const foo = 123;
return (foo === 123);</div>}
```
###is block-scoped (strict mode)
          
```
function(){
              <div class="code">'use strict';
const bar = 123;
{ const bar = 456; }
return bar === 123;</div>}
```
###cannot be in statements (strict mode)
          
```
function(){
              <div class="code">'use strict';
const bar = 1;
try {
  Function(&quot;'use strict'; if(true) const baz = 1;&quot;)();
} catch(e) {
  return true;
}</div>}
```
###redefining a const (strict mode)
          
```
function(){
              <div class="code">'use strict';
const baz = 1;
try {
  Function(&quot;'use strict'; const foo = 1; foo = 2;&quot;)();
} catch(e) {
  return true;
}</div>}
```
###for loop statement scope (strict mode)
          
```
function(){
              <div class="code">'use strict';
const baz = 1;
for(const baz = 0; false;) {}
return baz === 1;</div>}
```
###for-in loop iteration scope (strict mode)
          
```
function(){
              <div class="code">'use strict';
var scopes = [];
for(const i in { a:1, b:1 }) {
  scopes.push(function(){ return i; });
}
return (scopes[0]() === &quot;a&quot; &amp;&amp; scopes[1]() === &quot;b&quot;);</div>}
```
###for-of loop iteration scope (strict mode)
          
```
function(){
              <div class="code">'use strict';
var scopes = [];
for(const i of ['a','b']) {
  scopes.push(function(){ return i; });
}
return (scopes[0]() === &quot;a&quot; &amp;&amp; scopes[1]() === &quot;b&quot;);</div>}
```
###temporal dead zone (strict mode)
          
```
function(){
              <div class="code">'use strict';
var passed = (function(){ try { qux; } catch(e) { return true; }}());
function fn() { passed &amp;= qux === 456; }
const qux = 456;
fn();
return passed;</div>}
```
