###hoisted block-level function declaration
          
```
function(){
              <div class="code">// Note: only available outside of strict mode.
if (!this) return false;
var passed = f() === 1;
function f() { return 1; }

passed &amp;= typeof g === 'undefined';
{ function g() { return 1; } }
passed &amp;= g() === 1;

passed &amp;= h() === 2;
{ function h() { return 1; } }
function h() { return 2; }
passed &amp;= h() === 1;

return passed;</div>}
```
###labeled function statements
          
```
function(){
              <div class="code">// Note: only available outside of strict mode.
if (!this) return false;

label: function foo() { return 2; }
return foo() === 2;</div>}
```
###function statements in if-statement clauses
          
```
function(){
              <div class="code">// Note: only available outside of strict mode.
if (!this) return false;

if(true) function foo() { return 2; }
if(false) {} else function bar() { return 3; }
if(true) function baz() { return 4; } else {}
if(false) function qux() { return 5; } else function qux() { return 6; }
return foo() === 2 &amp;&amp; bar() === 3 &amp;&amp; baz() === 4 &amp;&amp; qux() === 6;</div>}
```
###hoisted block-level function declaration
          
```
function(){
              <div class="code">// Note: only available outside of strict mode.
if (!this) return false;
var passed = f() === 1;
function f() { return 1; }

passed &amp;= typeof g === 'undefined';
{ function g() { return 1; } }
passed &amp;= g() === 1;

passed &amp;= h() === 2;
{ function h() { return 1; } }
function h() { return 2; }
passed &amp;= h() === 1;

return passed;</div>}
```
###labeled function statements
          
```
function(){
              <div class="code">// Note: only available outside of strict mode.
if (!this) return false;

label: function foo() { return 2; }
return foo() === 2;</div>}
```
###function statements in if-statement clauses
          
```
function(){
              <div class="code">// Note: only available outside of strict mode.
if (!this) return false;

if(true) function foo() { return 2; }
if(false) {} else function bar() { return 3; }
if(true) function baz() { return 4; } else {}
if(false) function qux() { return 5; } else function qux() { return 6; }
return foo() === 2 &amp;&amp; bar() === 3 &amp;&amp; baz() === 4 &amp;&amp; qux() === 6;</div>}
```
###hoisted block-level function declaration
          
```
function(){
              <div class="code">// Note: only available outside of strict mode.
if (!this) return false;
var passed = f() === 1;
function f() { return 1; }

passed &amp;= typeof g === 'undefined';
{ function g() { return 1; } }
passed &amp;= g() === 1;

passed &amp;= h() === 2;
{ function h() { return 1; } }
function h() { return 2; }
passed &amp;= h() === 1;

return passed;</div>}
```
###labeled function statements
          
```
function(){
              <div class="code">// Note: only available outside of strict mode.
if (!this) return false;

label: function foo() { return 2; }
return foo() === 2;</div>}
```
###function statements in if-statement clauses
          
```
function(){
              <div class="code">// Note: only available outside of strict mode.
if (!this) return false;

if(true) function foo() { return 2; }
if(false) {} else function bar() { return 3; }
if(true) function baz() { return 4; } else {}
if(false) function qux() { return 5; } else function qux() { return 6; }
return foo() === 2 &amp;&amp; bar() === 3 &amp;&amp; baz() === 4 &amp;&amp; qux() === 6;</div>}
```
###hoisted block-level function declaration
          
```
function(){
              <div class="code">// Note: only available outside of strict mode.
if (!this) return false;
var passed = f() === 1;
function f() { return 1; }

passed &amp;= typeof g === 'undefined';
{ function g() { return 1; } }
passed &amp;= g() === 1;

passed &amp;= h() === 2;
{ function h() { return 1; } }
function h() { return 2; }
passed &amp;= h() === 1;

return passed;</div>}
```
###labeled function statements
          
```
function(){
              <div class="code">// Note: only available outside of strict mode.
if (!this) return false;

label: function foo() { return 2; }
return foo() === 2;</div>}
```
###function statements in if-statement clauses
          
```
function(){
              <div class="code">// Note: only available outside of strict mode.
if (!this) return false;

if(true) function foo() { return 2; }
if(false) {} else function bar() { return 3; }
if(true) function baz() { return 4; } else {}
if(false) function qux() { return 5; } else function qux() { return 6; }
return foo() === 2 &amp;&amp; bar() === 3 &amp;&amp; baz() === 4 &amp;&amp; qux() === 6;</div>}
```
###hoisted block-level function declaration
          
```
function(){
              <div class="code">// Note: only available outside of strict mode.
if (!this) return false;
var passed = f() === 1;
function f() { return 1; }

passed &amp;= typeof g === 'undefined';
{ function g() { return 1; } }
passed &amp;= g() === 1;

passed &amp;= h() === 2;
{ function h() { return 1; } }
function h() { return 2; }
passed &amp;= h() === 1;

return passed;</div>}
```
###labeled function statements
          
```
function(){
              <div class="code">// Note: only available outside of strict mode.
if (!this) return false;

label: function foo() { return 2; }
return foo() === 2;</div>}
```
###function statements in if-statement clauses
          
```
function(){
              <div class="code">// Note: only available outside of strict mode.
if (!this) return false;

if(true) function foo() { return 2; }
if(false) {} else function bar() { return 3; }
if(true) function baz() { return 4; } else {}
if(false) function qux() { return 5; } else function qux() { return 6; }
return foo() === 2 &amp;&amp; bar() === 3 &amp;&amp; baz() === 4 &amp;&amp; qux() === 6;</div>}
```
###hoisted block-level function declaration
          
```
function(){
              <div class="code">// Note: only available outside of strict mode.
if (!this) return false;
var passed = f() === 1;
function f() { return 1; }

passed &amp;= typeof g === 'undefined';
{ function g() { return 1; } }
passed &amp;= g() === 1;

passed &amp;= h() === 2;
{ function h() { return 1; } }
function h() { return 2; }
passed &amp;= h() === 1;

return passed;</div>}
```
###labeled function statements
          
```
function(){
              <div class="code">// Note: only available outside of strict mode.
if (!this) return false;

label: function foo() { return 2; }
return foo() === 2;</div>}
```
###function statements in if-statement clauses
          
```
function(){
              <div class="code">// Note: only available outside of strict mode.
if (!this) return false;

if(true) function foo() { return 2; }
if(false) {} else function bar() { return 3; }
if(true) function baz() { return 4; } else {}
if(false) function qux() { return 5; } else function qux() { return 6; }
return foo() === 2 &amp;&amp; bar() === 3 &amp;&amp; baz() === 4 &amp;&amp; qux() === 6;</div>}
```
###hoisted block-level function declaration
          
```
function(){
              <div class="code">// Note: only available outside of strict mode.
if (!this) return false;
var passed = f() === 1;
function f() { return 1; }

passed &amp;= typeof g === 'undefined';
{ function g() { return 1; } }
passed &amp;= g() === 1;

passed &amp;= h() === 2;
{ function h() { return 1; } }
function h() { return 2; }
passed &amp;= h() === 1;

return passed;</div>}
```
###labeled function statements
          
```
function(){
              <div class="code">// Note: only available outside of strict mode.
if (!this) return false;

label: function foo() { return 2; }
return foo() === 2;</div>}
```
###function statements in if-statement clauses
          
```
function(){
              <div class="code">// Note: only available outside of strict mode.
if (!this) return false;

if(true) function foo() { return 2; }
if(false) {} else function bar() { return 3; }
if(true) function baz() { return 4; } else {}
if(false) function qux() { return 5; } else function qux() { return 6; }
return foo() === 2 &amp;&amp; bar() === 3 &amp;&amp; baz() === 4 &amp;&amp; qux() === 6;</div>}
```
###hoisted block-level function declaration
          
```
function(){
              <div class="code">// Note: only available outside of strict mode.
if (!this) return false;
var passed = f() === 1;
function f() { return 1; }

passed &amp;= typeof g === 'undefined';
{ function g() { return 1; } }
passed &amp;= g() === 1;

passed &amp;= h() === 2;
{ function h() { return 1; } }
function h() { return 2; }
passed &amp;= h() === 1;

return passed;</div>}
```
###labeled function statements
          
```
function(){
              <div class="code">// Note: only available outside of strict mode.
if (!this) return false;

label: function foo() { return 2; }
return foo() === 2;</div>}
```
###function statements in if-statement clauses
          
```
function(){
              <div class="code">// Note: only available outside of strict mode.
if (!this) return false;

if(true) function foo() { return 2; }
if(false) {} else function bar() { return 3; }
if(true) function baz() { return 4; } else {}
if(false) function qux() { return 5; } else function qux() { return 6; }
return foo() === 2 &amp;&amp; bar() === 3 &amp;&amp; baz() === 4 &amp;&amp; qux() === 6;</div>}
```
###hoisted block-level function declaration
          
```
function(){
              <div class="code">// Note: only available outside of strict mode.
if (!this) return false;
var passed = f() === 1;
function f() { return 1; }

passed &amp;= typeof g === 'undefined';
{ function g() { return 1; } }
passed &amp;= g() === 1;

passed &amp;= h() === 2;
{ function h() { return 1; } }
function h() { return 2; }
passed &amp;= h() === 1;

return passed;</div>}
```
###labeled function statements
          
```
function(){
              <div class="code">// Note: only available outside of strict mode.
if (!this) return false;

label: function foo() { return 2; }
return foo() === 2;</div>}
```
###function statements in if-statement clauses
          
```
function(){
              <div class="code">// Note: only available outside of strict mode.
if (!this) return false;

if(true) function foo() { return 2; }
if(false) {} else function bar() { return 3; }
if(true) function baz() { return 4; } else {}
if(false) function qux() { return 5; } else function qux() { return 6; }
return foo() === 2 &amp;&amp; bar() === 3 &amp;&amp; baz() === 4 &amp;&amp; qux() === 6;</div>}
```
###hoisted block-level function declaration
          
```
function(){
              <div class="code">// Note: only available outside of strict mode.
if (!this) return false;
var passed = f() === 1;
function f() { return 1; }

passed &amp;= typeof g === 'undefined';
{ function g() { return 1; } }
passed &amp;= g() === 1;

passed &amp;= h() === 2;
{ function h() { return 1; } }
function h() { return 2; }
passed &amp;= h() === 1;

return passed;</div>}
```
###labeled function statements
          
```
function(){
              <div class="code">// Note: only available outside of strict mode.
if (!this) return false;

label: function foo() { return 2; }
return foo() === 2;</div>}
```
###function statements in if-statement clauses
          
```
function(){
              <div class="code">// Note: only available outside of strict mode.
if (!this) return false;

if(true) function foo() { return 2; }
if(false) {} else function bar() { return 3; }
if(true) function baz() { return 4; } else {}
if(false) function qux() { return 5; } else function qux() { return 6; }
return foo() === 2 &amp;&amp; bar() === 3 &amp;&amp; baz() === 4 &amp;&amp; qux() === 6;</div>}
```
###hoisted block-level function declaration
          
```
function(){
              <div class="code">// Note: only available outside of strict mode.
if (!this) return false;
var passed = f() === 1;
function f() { return 1; }

passed &amp;= typeof g === 'undefined';
{ function g() { return 1; } }
passed &amp;= g() === 1;

passed &amp;= h() === 2;
{ function h() { return 1; } }
function h() { return 2; }
passed &amp;= h() === 1;

return passed;</div>}
```
###labeled function statements
          
```
function(){
              <div class="code">// Note: only available outside of strict mode.
if (!this) return false;

label: function foo() { return 2; }
return foo() === 2;</div>}
```
###function statements in if-statement clauses
          
```
function(){
              <div class="code">// Note: only available outside of strict mode.
if (!this) return false;

if(true) function foo() { return 2; }
if(false) {} else function bar() { return 3; }
if(true) function baz() { return 4; } else {}
if(false) function qux() { return 5; } else function qux() { return 6; }
return foo() === 2 &amp;&amp; bar() === 3 &amp;&amp; baz() === 4 &amp;&amp; qux() === 6;</div>}
```
###hoisted block-level function declaration
          
```
function(){
              <div class="code">// Note: only available outside of strict mode.
if (!this) return false;
var passed = f() === 1;
function f() { return 1; }

passed &amp;= typeof g === 'undefined';
{ function g() { return 1; } }
passed &amp;= g() === 1;

passed &amp;= h() === 2;
{ function h() { return 1; } }
function h() { return 2; }
passed &amp;= h() === 1;

return passed;</div>}
```
###labeled function statements
          
```
function(){
              <div class="code">// Note: only available outside of strict mode.
if (!this) return false;

label: function foo() { return 2; }
return foo() === 2;</div>}
```
###function statements in if-statement clauses
          
```
function(){
              <div class="code">// Note: only available outside of strict mode.
if (!this) return false;

if(true) function foo() { return 2; }
if(false) {} else function bar() { return 3; }
if(true) function baz() { return 4; } else {}
if(false) function qux() { return 5; } else function qux() { return 6; }
return foo() === 2 &amp;&amp; bar() === 3 &amp;&amp; baz() === 4 &amp;&amp; qux() === 6;</div>}
```
###hoisted block-level function declaration
          
```
function(){
              <div class="code">// Note: only available outside of strict mode.
if (!this) return false;
var passed = f() === 1;
function f() { return 1; }

passed &amp;= typeof g === 'undefined';
{ function g() { return 1; } }
passed &amp;= g() === 1;

passed &amp;= h() === 2;
{ function h() { return 1; } }
function h() { return 2; }
passed &amp;= h() === 1;

return passed;</div>}
```
###labeled function statements
          
```
function(){
              <div class="code">// Note: only available outside of strict mode.
if (!this) return false;

label: function foo() { return 2; }
return foo() === 2;</div>}
```
###function statements in if-statement clauses
          
```
function(){
              <div class="code">// Note: only available outside of strict mode.
if (!this) return false;

if(true) function foo() { return 2; }
if(false) {} else function bar() { return 3; }
if(true) function baz() { return 4; } else {}
if(false) function qux() { return 5; } else function qux() { return 6; }
return foo() === 2 &amp;&amp; bar() === 3 &amp;&amp; baz() === 4 &amp;&amp; qux() === 6;</div>}
```
###hoisted block-level function declaration
          
```
function(){
              <div class="code">// Note: only available outside of strict mode.
if (!this) return false;
var passed = f() === 1;
function f() { return 1; }

passed &amp;= typeof g === 'undefined';
{ function g() { return 1; } }
passed &amp;= g() === 1;

passed &amp;= h() === 2;
{ function h() { return 1; } }
function h() { return 2; }
passed &amp;= h() === 1;

return passed;</div>}
```
###labeled function statements
          
```
function(){
              <div class="code">// Note: only available outside of strict mode.
if (!this) return false;

label: function foo() { return 2; }
return foo() === 2;</div>}
```
###function statements in if-statement clauses
          
```
function(){
              <div class="code">// Note: only available outside of strict mode.
if (!this) return false;

if(true) function foo() { return 2; }
if(false) {} else function bar() { return 3; }
if(true) function baz() { return 4; } else {}
if(false) function qux() { return 5; } else function qux() { return 6; }
return foo() === 2 &amp;&amp; bar() === 3 &amp;&amp; baz() === 4 &amp;&amp; qux() === 6;</div>}
```
###hoisted block-level function declaration
          
```
function(){
              <div class="code">// Note: only available outside of strict mode.
if (!this) return false;
var passed = f() === 1;
function f() { return 1; }

passed &amp;= typeof g === 'undefined';
{ function g() { return 1; } }
passed &amp;= g() === 1;

passed &amp;= h() === 2;
{ function h() { return 1; } }
function h() { return 2; }
passed &amp;= h() === 1;

return passed;</div>}
```
###labeled function statements
          
```
function(){
              <div class="code">// Note: only available outside of strict mode.
if (!this) return false;

label: function foo() { return 2; }
return foo() === 2;</div>}
```
###function statements in if-statement clauses
          
```
function(){
              <div class="code">// Note: only available outside of strict mode.
if (!this) return false;

if(true) function foo() { return 2; }
if(false) {} else function bar() { return 3; }
if(true) function baz() { return 4; } else {}
if(false) function qux() { return 5; } else function qux() { return 6; }
return foo() === 2 &amp;&amp; bar() === 3 &amp;&amp; baz() === 4 &amp;&amp; qux() === 6;</div>}
```
