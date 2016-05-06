###basic support (strict mode)
          
```
function(){
              <div class="code">'use strict';
let foo = 123;
return (foo === 123);</div>}
```
###is block-scoped (strict mode)
          
```
function(){
              <div class="code">'use strict';
let bar = 123;
{ let bar = 456; }
return bar === 123;</div>}
```
###cannot be in statements (strict mode)
          
```
function(){
              <div class="code">'use strict';
let bar = 1;
try {
  Function(&quot;'use strict'; if(true) let baz = 1;&quot;)();
} catch(e) {
  return true;
}</div>}
```
###for loop statement scope (strict mode)
          
```
function(){
              <div class="code">'use strict';
let baz = 1;
for(let baz = 0; false;) {}
return baz === 1;</div>}
```
###temporal dead zone (strict mode)
          
```
function(){
              <div class="code">'use strict';
var passed = (function(){ try {  qux; } catch(e) { return true; }}());
function fn() { passed &amp;= qux === 456; }
let qux = 456;
fn();
return passed;</div>}
```
###for/for-in loop iteration scope (strict mode)
          
```
function(){
              <div class="code">'use strict';
let scopes = [];
for(let i = 0; i &lt; 2; i++) {
  scopes.push(function(){ return i; });
}
let passed = (scopes[0]() === 0 &amp;&amp; scopes[1]() === 1);

scopes = [];
for(let i in { a:1, b:1 }) {
  scopes.push(function(){ return i; });
}
passed &amp;= (scopes[0]() === &quot;a&quot; &amp;&amp; scopes[1]() === &quot;b&quot;);
return passed;</div>}
```
###basic support (strict mode)
          
```
function(){
              <div class="code">'use strict';
let foo = 123;
return (foo === 123);</div>}
```
###is block-scoped (strict mode)
          
```
function(){
              <div class="code">'use strict';
let bar = 123;
{ let bar = 456; }
return bar === 123;</div>}
```
###cannot be in statements (strict mode)
          
```
function(){
              <div class="code">'use strict';
let bar = 1;
try {
  Function(&quot;'use strict'; if(true) let baz = 1;&quot;)();
} catch(e) {
  return true;
}</div>}
```
###for loop statement scope (strict mode)
          
```
function(){
              <div class="code">'use strict';
let baz = 1;
for(let baz = 0; false;) {}
return baz === 1;</div>}
```
###temporal dead zone (strict mode)
          
```
function(){
              <div class="code">'use strict';
var passed = (function(){ try {  qux; } catch(e) { return true; }}());
function fn() { passed &amp;= qux === 456; }
let qux = 456;
fn();
return passed;</div>}
```
###for/for-in loop iteration scope (strict mode)
          
```
function(){
              <div class="code">'use strict';
let scopes = [];
for(let i = 0; i &lt; 2; i++) {
  scopes.push(function(){ return i; });
}
let passed = (scopes[0]() === 0 &amp;&amp; scopes[1]() === 1);

scopes = [];
for(let i in { a:1, b:1 }) {
  scopes.push(function(){ return i; });
}
passed &amp;= (scopes[0]() === &quot;a&quot; &amp;&amp; scopes[1]() === &quot;b&quot;);
return passed;</div>}
```
###basic support (strict mode)
          
```
function(){
              <div class="code">'use strict';
let foo = 123;
return (foo === 123);</div>}
```
###is block-scoped (strict mode)
          
```
function(){
              <div class="code">'use strict';
let bar = 123;
{ let bar = 456; }
return bar === 123;</div>}
```
###cannot be in statements (strict mode)
          
```
function(){
              <div class="code">'use strict';
let bar = 1;
try {
  Function(&quot;'use strict'; if(true) let baz = 1;&quot;)();
} catch(e) {
  return true;
}</div>}
```
###for loop statement scope (strict mode)
          
```
function(){
              <div class="code">'use strict';
let baz = 1;
for(let baz = 0; false;) {}
return baz === 1;</div>}
```
###temporal dead zone (strict mode)
          
```
function(){
              <div class="code">'use strict';
var passed = (function(){ try {  qux; } catch(e) { return true; }}());
function fn() { passed &amp;= qux === 456; }
let qux = 456;
fn();
return passed;</div>}
```
###for/for-in loop iteration scope (strict mode)
          
```
function(){
              <div class="code">'use strict';
let scopes = [];
for(let i = 0; i &lt; 2; i++) {
  scopes.push(function(){ return i; });
}
let passed = (scopes[0]() === 0 &amp;&amp; scopes[1]() === 1);

scopes = [];
for(let i in { a:1, b:1 }) {
  scopes.push(function(){ return i; });
}
passed &amp;= (scopes[0]() === &quot;a&quot; &amp;&amp; scopes[1]() === &quot;b&quot;);
return passed;</div>}
```
###basic support (strict mode)
          
```
function(){
              <div class="code">'use strict';
let foo = 123;
return (foo === 123);</div>}
```
###is block-scoped (strict mode)
          
```
function(){
              <div class="code">'use strict';
let bar = 123;
{ let bar = 456; }
return bar === 123;</div>}
```
###cannot be in statements (strict mode)
          
```
function(){
              <div class="code">'use strict';
let bar = 1;
try {
  Function(&quot;'use strict'; if(true) let baz = 1;&quot;)();
} catch(e) {
  return true;
}</div>}
```
###for loop statement scope (strict mode)
          
```
function(){
              <div class="code">'use strict';
let baz = 1;
for(let baz = 0; false;) {}
return baz === 1;</div>}
```
###temporal dead zone (strict mode)
          
```
function(){
              <div class="code">'use strict';
var passed = (function(){ try {  qux; } catch(e) { return true; }}());
function fn() { passed &amp;= qux === 456; }
let qux = 456;
fn();
return passed;</div>}
```
###for/for-in loop iteration scope (strict mode)
          
```
function(){
              <div class="code">'use strict';
let scopes = [];
for(let i = 0; i &lt; 2; i++) {
  scopes.push(function(){ return i; });
}
let passed = (scopes[0]() === 0 &amp;&amp; scopes[1]() === 1);

scopes = [];
for(let i in { a:1, b:1 }) {
  scopes.push(function(){ return i; });
}
passed &amp;= (scopes[0]() === &quot;a&quot; &amp;&amp; scopes[1]() === &quot;b&quot;);
return passed;</div>}
```
###basic support (strict mode)
          
```
function(){
              <div class="code">'use strict';
let foo = 123;
return (foo === 123);</div>}
```
###is block-scoped (strict mode)
          
```
function(){
              <div class="code">'use strict';
let bar = 123;
{ let bar = 456; }
return bar === 123;</div>}
```
###cannot be in statements (strict mode)
          
```
function(){
              <div class="code">'use strict';
let bar = 1;
try {
  Function(&quot;'use strict'; if(true) let baz = 1;&quot;)();
} catch(e) {
  return true;
}</div>}
```
###for loop statement scope (strict mode)
          
```
function(){
              <div class="code">'use strict';
let baz = 1;
for(let baz = 0; false;) {}
return baz === 1;</div>}
```
###temporal dead zone (strict mode)
          
```
function(){
              <div class="code">'use strict';
var passed = (function(){ try {  qux; } catch(e) { return true; }}());
function fn() { passed &amp;= qux === 456; }
let qux = 456;
fn();
return passed;</div>}
```
###for/for-in loop iteration scope (strict mode)
          
```
function(){
              <div class="code">'use strict';
let scopes = [];
for(let i = 0; i &lt; 2; i++) {
  scopes.push(function(){ return i; });
}
let passed = (scopes[0]() === 0 &amp;&amp; scopes[1]() === 1);

scopes = [];
for(let i in { a:1, b:1 }) {
  scopes.push(function(){ return i; });
}
passed &amp;= (scopes[0]() === &quot;a&quot; &amp;&amp; scopes[1]() === &quot;b&quot;);
return passed;</div>}
```
###basic support (strict mode)
          
```
function(){
              <div class="code">'use strict';
let foo = 123;
return (foo === 123);</div>}
```
###is block-scoped (strict mode)
          
```
function(){
              <div class="code">'use strict';
let bar = 123;
{ let bar = 456; }
return bar === 123;</div>}
```
###cannot be in statements (strict mode)
          
```
function(){
              <div class="code">'use strict';
let bar = 1;
try {
  Function(&quot;'use strict'; if(true) let baz = 1;&quot;)();
} catch(e) {
  return true;
}</div>}
```
###for loop statement scope (strict mode)
          
```
function(){
              <div class="code">'use strict';
let baz = 1;
for(let baz = 0; false;) {}
return baz === 1;</div>}
```
###temporal dead zone (strict mode)
          
```
function(){
              <div class="code">'use strict';
var passed = (function(){ try {  qux; } catch(e) { return true; }}());
function fn() { passed &amp;= qux === 456; }
let qux = 456;
fn();
return passed;</div>}
```
###for/for-in loop iteration scope (strict mode)
          
```
function(){
              <div class="code">'use strict';
let scopes = [];
for(let i = 0; i &lt; 2; i++) {
  scopes.push(function(){ return i; });
}
let passed = (scopes[0]() === 0 &amp;&amp; scopes[1]() === 1);

scopes = [];
for(let i in { a:1, b:1 }) {
  scopes.push(function(){ return i; });
}
passed &amp;= (scopes[0]() === &quot;a&quot; &amp;&amp; scopes[1]() === &quot;b&quot;);
return passed;</div>}
```
###basic support (strict mode)
          
```
function(){
              <div class="code">'use strict';
let foo = 123;
return (foo === 123);</div>}
```
###is block-scoped (strict mode)
          
```
function(){
              <div class="code">'use strict';
let bar = 123;
{ let bar = 456; }
return bar === 123;</div>}
```
###cannot be in statements (strict mode)
          
```
function(){
              <div class="code">'use strict';
let bar = 1;
try {
  Function(&quot;'use strict'; if(true) let baz = 1;&quot;)();
} catch(e) {
  return true;
}</div>}
```
###for loop statement scope (strict mode)
          
```
function(){
              <div class="code">'use strict';
let baz = 1;
for(let baz = 0; false;) {}
return baz === 1;</div>}
```
###temporal dead zone (strict mode)
          
```
function(){
              <div class="code">'use strict';
var passed = (function(){ try {  qux; } catch(e) { return true; }}());
function fn() { passed &amp;= qux === 456; }
let qux = 456;
fn();
return passed;</div>}
```
###for/for-in loop iteration scope (strict mode)
          
```
function(){
              <div class="code">'use strict';
let scopes = [];
for(let i = 0; i &lt; 2; i++) {
  scopes.push(function(){ return i; });
}
let passed = (scopes[0]() === 0 &amp;&amp; scopes[1]() === 1);

scopes = [];
for(let i in { a:1, b:1 }) {
  scopes.push(function(){ return i; });
}
passed &amp;= (scopes[0]() === &quot;a&quot; &amp;&amp; scopes[1]() === &quot;b&quot;);
return passed;</div>}
```
###basic support (strict mode)
          
```
function(){
              <div class="code">'use strict';
let foo = 123;
return (foo === 123);</div>}
```
###is block-scoped (strict mode)
          
```
function(){
              <div class="code">'use strict';
let bar = 123;
{ let bar = 456; }
return bar === 123;</div>}
```
###cannot be in statements (strict mode)
          
```
function(){
              <div class="code">'use strict';
let bar = 1;
try {
  Function(&quot;'use strict'; if(true) let baz = 1;&quot;)();
} catch(e) {
  return true;
}</div>}
```
###for loop statement scope (strict mode)
          
```
function(){
              <div class="code">'use strict';
let baz = 1;
for(let baz = 0; false;) {}
return baz === 1;</div>}
```
###temporal dead zone (strict mode)
          
```
function(){
              <div class="code">'use strict';
var passed = (function(){ try {  qux; } catch(e) { return true; }}());
function fn() { passed &amp;= qux === 456; }
let qux = 456;
fn();
return passed;</div>}
```
###for/for-in loop iteration scope (strict mode)
          
```
function(){
              <div class="code">'use strict';
let scopes = [];
for(let i = 0; i &lt; 2; i++) {
  scopes.push(function(){ return i; });
}
let passed = (scopes[0]() === 0 &amp;&amp; scopes[1]() === 1);

scopes = [];
for(let i in { a:1, b:1 }) {
  scopes.push(function(){ return i; });
}
passed &amp;= (scopes[0]() === &quot;a&quot; &amp;&amp; scopes[1]() === &quot;b&quot;);
return passed;</div>}
```
###basic support (strict mode)
          
```
function(){
              <div class="code">'use strict';
let foo = 123;
return (foo === 123);</div>}
```
###is block-scoped (strict mode)
          
```
function(){
              <div class="code">'use strict';
let bar = 123;
{ let bar = 456; }
return bar === 123;</div>}
```
###cannot be in statements (strict mode)
          
```
function(){
              <div class="code">'use strict';
let bar = 1;
try {
  Function(&quot;'use strict'; if(true) let baz = 1;&quot;)();
} catch(e) {
  return true;
}</div>}
```
###for loop statement scope (strict mode)
          
```
function(){
              <div class="code">'use strict';
let baz = 1;
for(let baz = 0; false;) {}
return baz === 1;</div>}
```
###temporal dead zone (strict mode)
          
```
function(){
              <div class="code">'use strict';
var passed = (function(){ try {  qux; } catch(e) { return true; }}());
function fn() { passed &amp;= qux === 456; }
let qux = 456;
fn();
return passed;</div>}
```
###for/for-in loop iteration scope (strict mode)
          
```
function(){
              <div class="code">'use strict';
let scopes = [];
for(let i = 0; i &lt; 2; i++) {
  scopes.push(function(){ return i; });
}
let passed = (scopes[0]() === 0 &amp;&amp; scopes[1]() === 1);

scopes = [];
for(let i in { a:1, b:1 }) {
  scopes.push(function(){ return i; });
}
passed &amp;= (scopes[0]() === &quot;a&quot; &amp;&amp; scopes[1]() === &quot;b&quot;);
return passed;</div>}
```
###basic support (strict mode)
          
```
function(){
              <div class="code">'use strict';
let foo = 123;
return (foo === 123);</div>}
```
###is block-scoped (strict mode)
          
```
function(){
              <div class="code">'use strict';
let bar = 123;
{ let bar = 456; }
return bar === 123;</div>}
```
###cannot be in statements (strict mode)
          
```
function(){
              <div class="code">'use strict';
let bar = 1;
try {
  Function(&quot;'use strict'; if(true) let baz = 1;&quot;)();
} catch(e) {
  return true;
}</div>}
```
###for loop statement scope (strict mode)
          
```
function(){
              <div class="code">'use strict';
let baz = 1;
for(let baz = 0; false;) {}
return baz === 1;</div>}
```
###temporal dead zone (strict mode)
          
```
function(){
              <div class="code">'use strict';
var passed = (function(){ try {  qux; } catch(e) { return true; }}());
function fn() { passed &amp;= qux === 456; }
let qux = 456;
fn();
return passed;</div>}
```
###for/for-in loop iteration scope (strict mode)
          
```
function(){
              <div class="code">'use strict';
let scopes = [];
for(let i = 0; i &lt; 2; i++) {
  scopes.push(function(){ return i; });
}
let passed = (scopes[0]() === 0 &amp;&amp; scopes[1]() === 1);

scopes = [];
for(let i in { a:1, b:1 }) {
  scopes.push(function(){ return i; });
}
passed &amp;= (scopes[0]() === &quot;a&quot; &amp;&amp; scopes[1]() === &quot;b&quot;);
return passed;</div>}
```
###basic support (strict mode)
          
```
function(){
              <div class="code">'use strict';
let foo = 123;
return (foo === 123);</div>}
```
###is block-scoped (strict mode)
          
```
function(){
              <div class="code">'use strict';
let bar = 123;
{ let bar = 456; }
return bar === 123;</div>}
```
###cannot be in statements (strict mode)
          
```
function(){
              <div class="code">'use strict';
let bar = 1;
try {
  Function(&quot;'use strict'; if(true) let baz = 1;&quot;)();
} catch(e) {
  return true;
}</div>}
```
###for loop statement scope (strict mode)
          
```
function(){
              <div class="code">'use strict';
let baz = 1;
for(let baz = 0; false;) {}
return baz === 1;</div>}
```
###temporal dead zone (strict mode)
          
```
function(){
              <div class="code">'use strict';
var passed = (function(){ try {  qux; } catch(e) { return true; }}());
function fn() { passed &amp;= qux === 456; }
let qux = 456;
fn();
return passed;</div>}
```
###for/for-in loop iteration scope (strict mode)
          
```
function(){
              <div class="code">'use strict';
let scopes = [];
for(let i = 0; i &lt; 2; i++) {
  scopes.push(function(){ return i; });
}
let passed = (scopes[0]() === 0 &amp;&amp; scopes[1]() === 1);

scopes = [];
for(let i in { a:1, b:1 }) {
  scopes.push(function(){ return i; });
}
passed &amp;= (scopes[0]() === &quot;a&quot; &amp;&amp; scopes[1]() === &quot;b&quot;);
return passed;</div>}
```
###basic support (strict mode)
          
```
function(){
              <div class="code">'use strict';
let foo = 123;
return (foo === 123);</div>}
```
###is block-scoped (strict mode)
          
```
function(){
              <div class="code">'use strict';
let bar = 123;
{ let bar = 456; }
return bar === 123;</div>}
```
###cannot be in statements (strict mode)
          
```
function(){
              <div class="code">'use strict';
let bar = 1;
try {
  Function(&quot;'use strict'; if(true) let baz = 1;&quot;)();
} catch(e) {
  return true;
}</div>}
```
###for loop statement scope (strict mode)
          
```
function(){
              <div class="code">'use strict';
let baz = 1;
for(let baz = 0; false;) {}
return baz === 1;</div>}
```
###temporal dead zone (strict mode)
          
```
function(){
              <div class="code">'use strict';
var passed = (function(){ try {  qux; } catch(e) { return true; }}());
function fn() { passed &amp;= qux === 456; }
let qux = 456;
fn();
return passed;</div>}
```
###for/for-in loop iteration scope (strict mode)
          
```
function(){
              <div class="code">'use strict';
let scopes = [];
for(let i = 0; i &lt; 2; i++) {
  scopes.push(function(){ return i; });
}
let passed = (scopes[0]() === 0 &amp;&amp; scopes[1]() === 1);

scopes = [];
for(let i in { a:1, b:1 }) {
  scopes.push(function(){ return i; });
}
passed &amp;= (scopes[0]() === &quot;a&quot; &amp;&amp; scopes[1]() === &quot;b&quot;);
return passed;</div>}
```
###basic support (strict mode)
          
```
function(){
              <div class="code">'use strict';
let foo = 123;
return (foo === 123);</div>}
```
###is block-scoped (strict mode)
          
```
function(){
              <div class="code">'use strict';
let bar = 123;
{ let bar = 456; }
return bar === 123;</div>}
```
###cannot be in statements (strict mode)
          
```
function(){
              <div class="code">'use strict';
let bar = 1;
try {
  Function(&quot;'use strict'; if(true) let baz = 1;&quot;)();
} catch(e) {
  return true;
}</div>}
```
###for loop statement scope (strict mode)
          
```
function(){
              <div class="code">'use strict';
let baz = 1;
for(let baz = 0; false;) {}
return baz === 1;</div>}
```
###temporal dead zone (strict mode)
          
```
function(){
              <div class="code">'use strict';
var passed = (function(){ try {  qux; } catch(e) { return true; }}());
function fn() { passed &amp;= qux === 456; }
let qux = 456;
fn();
return passed;</div>}
```
###for/for-in loop iteration scope (strict mode)
          
```
function(){
              <div class="code">'use strict';
let scopes = [];
for(let i = 0; i &lt; 2; i++) {
  scopes.push(function(){ return i; });
}
let passed = (scopes[0]() === 0 &amp;&amp; scopes[1]() === 1);

scopes = [];
for(let i in { a:1, b:1 }) {
  scopes.push(function(){ return i; });
}
passed &amp;= (scopes[0]() === &quot;a&quot; &amp;&amp; scopes[1]() === &quot;b&quot;);
return passed;</div>}
```
###basic support (strict mode)
          
```
function(){
              <div class="code">'use strict';
let foo = 123;
return (foo === 123);</div>}
```
###is block-scoped (strict mode)
          
```
function(){
              <div class="code">'use strict';
let bar = 123;
{ let bar = 456; }
return bar === 123;</div>}
```
###cannot be in statements (strict mode)
          
```
function(){
              <div class="code">'use strict';
let bar = 1;
try {
  Function(&quot;'use strict'; if(true) let baz = 1;&quot;)();
} catch(e) {
  return true;
}</div>}
```
###for loop statement scope (strict mode)
          
```
function(){
              <div class="code">'use strict';
let baz = 1;
for(let baz = 0; false;) {}
return baz === 1;</div>}
```
###temporal dead zone (strict mode)
          
```
function(){
              <div class="code">'use strict';
var passed = (function(){ try {  qux; } catch(e) { return true; }}());
function fn() { passed &amp;= qux === 456; }
let qux = 456;
fn();
return passed;</div>}
```
###for/for-in loop iteration scope (strict mode)
          
```
function(){
              <div class="code">'use strict';
let scopes = [];
for(let i = 0; i &lt; 2; i++) {
  scopes.push(function(){ return i; });
}
let passed = (scopes[0]() === 0 &amp;&amp; scopes[1]() === 1);

scopes = [];
for(let i in { a:1, b:1 }) {
  scopes.push(function(){ return i; });
}
passed &amp;= (scopes[0]() === &quot;a&quot; &amp;&amp; scopes[1]() === &quot;b&quot;);
return passed;</div>}
```
###basic support (strict mode)
          
```
function(){
              <div class="code">'use strict';
let foo = 123;
return (foo === 123);</div>}
```
###is block-scoped (strict mode)
          
```
function(){
              <div class="code">'use strict';
let bar = 123;
{ let bar = 456; }
return bar === 123;</div>}
```
###cannot be in statements (strict mode)
          
```
function(){
              <div class="code">'use strict';
let bar = 1;
try {
  Function(&quot;'use strict'; if(true) let baz = 1;&quot;)();
} catch(e) {
  return true;
}</div>}
```
###for loop statement scope (strict mode)
          
```
function(){
              <div class="code">'use strict';
let baz = 1;
for(let baz = 0; false;) {}
return baz === 1;</div>}
```
###temporal dead zone (strict mode)
          
```
function(){
              <div class="code">'use strict';
var passed = (function(){ try {  qux; } catch(e) { return true; }}());
function fn() { passed &amp;= qux === 456; }
let qux = 456;
fn();
return passed;</div>}
```
###for/for-in loop iteration scope (strict mode)
          
```
function(){
              <div class="code">'use strict';
let scopes = [];
for(let i = 0; i &lt; 2; i++) {
  scopes.push(function(){ return i; });
}
let passed = (scopes[0]() === 0 &amp;&amp; scopes[1]() === 1);

scopes = [];
for(let i in { a:1, b:1 }) {
  scopes.push(function(){ return i; });
}
passed &amp;= (scopes[0]() === &quot;a&quot; &amp;&amp; scopes[1]() === &quot;b&quot;);
return passed;</div>}
```
