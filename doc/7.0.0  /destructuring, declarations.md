###with arrays
          
```
function(){
              <div class="code">var [a, , [b], c] = [5, null, [6]];
return a === 5 &amp;&amp; b === 6 &amp;&amp; c === undefined;</div>}
```
###with sparse arrays
          
```
function(){
              <div class="code">var [a, , b] = [,,,];
return a === undefined &amp;&amp; b === undefined;</div>}
```
###with strings
          
```
function(){
              <div class="code">var [a, b, c] = &quot;ab&quot;;
return a === &quot;a&quot; &amp;&amp; b === &quot;b&quot; &amp;&amp; c === undefined;</div>}
```
###with astral plane strings
          
```
function(){
              <div class="code">var [c] = &quot;𠮷𠮶&quot;;
return c === &quot;𠮷&quot;;</div>}
```
###with generator instances
          
```
function(){
              <div class="code">var [a, b, c] = (function*(){ yield 1; yield 2; }());
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;</div>}
```
###with generic iterables
          
```
function(){
              <div class="code">var [a, b, c] = global.__createIterableObject([1, 2]);
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;</div>}
```
###with instances of generic iterables
          
```
function(){
              <div class="code">var [a, b, c] = Object.create(global.__createIterableObject([1, 2]));
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;</div>}
```
###trailing commas in iterable patterns
          
```
function(){
              <div class="code">var [a,] = [1];
return a === 1;</div>}
```
###with objects
          
```
function(){
              <div class="code">var {c, x:d, e} = {c:7, x:8};
return c === 7 &amp;&amp; d === 8 &amp;&amp; e === undefined;</div>}
```
###object destructuring with primitives
          
```
function(){
              <div class="code">var {toFixed} = 2;
var {slice} = '';
return toFixed === Number.prototype.toFixed
  &amp;&amp; slice === String.prototype.slice;</div>}
```
###trailing commas in object patterns
          
```
function(){
              <div class="code">var {a,} = {a:1};
return a === 1;</div>}
```
###throws on null and undefined
          
```
function(){
              <div class="code">try {
  var {a} = null;
  return false;
} catch(e) {}
try {
  var {b} = undefined;
  return false;
} catch(e) {}
return true;</div>}
```
###computed properties
          
```
function(){
              <div class="code">var qux = &quot;corge&quot;;
var { [qux]: grault } = { corge: &quot;garply&quot; };
return grault === &quot;garply&quot;;</div>}
```
###multiples in a single var statement
          
```
function(){
              <div class="code">var [a,b] = [5,6], {c,d} = {c:7,d:8};
return a === 5 &amp;&amp; b === 6 &amp;&amp; c === 7 &amp;&amp; d === 8;</div>}
```
###nested
          
```
function(){
              <div class="code">var [e, {x:f, g}] = [9, {x:10}];
var {h, x:[i]} = {h:11, x:[12]};
return e === 9 &amp;&amp; f === 10 &amp;&amp; g === undefined
  &amp;&amp; h === 11 &amp;&amp; i === 12;</div>}
```
###in for-in loop heads
          
```
function(){
              <div class="code">for(var [i, j, k] in { qux: 1 }) {
  return i === &quot;q&quot; &amp;&amp; j === &quot;u&quot; &amp;&amp; k === &quot;x&quot;;
}</div>}
```
###in for-of loop heads
          
```
function(){
              <div class="code">for(var [i, j, k] of [[1,2,3]]) {
  return i === 1 &amp;&amp; j === 2 &amp;&amp; k === 3;
}</div>}
```
###in catch heads
          
```
function(){
              <div class="code">try {
  throw [1,2];
} catch([i,j]) {
  try {
    throw { k: 3, l: 4 };
  } catch({k, l}) {
    return i === 1 &amp;&amp; j === 2 &amp;&amp; k === 3 &amp;&amp; l === 4;
  }
}</div>}
```
###rest
          
```
function(){
              <div class="code">var [a, ...b] = [3, 4, 5];
var [c, ...d] = [6];
return a === 3 &amp;&amp; b instanceof Array &amp;&amp; (b + &quot;&quot;) === &quot;4,5&quot; &amp;&amp;
   c === 6 &amp;&amp; d instanceof Array &amp;&amp; d.length === 0;</div>}
```
###defaults
          
```
function(){
              <div class="code">var {a = 1, b = 0, z:c = 3} = {b:2, z:undefined};
var [d = 0, e = 5, f = 6] = [4,,undefined];
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === 3
  &amp;&amp; d === 4 &amp;&amp; e === 5 &amp;&amp; f === 6;</div>}
```
###defaults, let temporal dead zone
          
```
function(){
              <div class="code">var {a, b = 2} = {a:1};
try {
  eval(&quot;let {c = c} = {};&quot;);
  return false;
} catch(e){}
try {
  eval(&quot;let {c = d, d} = {d:1};&quot;);
  return false;
} catch(e){}
return a === 1 &amp;&amp; b === 2;</div>}
```
###with arrays
          
```
function(){
              <div class="code">var [a, , [b], c] = [5, null, [6]];
return a === 5 &amp;&amp; b === 6 &amp;&amp; c === undefined;</div>}
```
###with sparse arrays
          
```
function(){
              <div class="code">var [a, , b] = [,,,];
return a === undefined &amp;&amp; b === undefined;</div>}
```
###with strings
          
```
function(){
              <div class="code">var [a, b, c] = &quot;ab&quot;;
return a === &quot;a&quot; &amp;&amp; b === &quot;b&quot; &amp;&amp; c === undefined;</div>}
```
###with astral plane strings
          
```
function(){
              <div class="code">var [c] = &quot;𠮷𠮶&quot;;
return c === &quot;𠮷&quot;;</div>}
```
###with generator instances
          
```
function(){
              <div class="code">var [a, b, c] = (function*(){ yield 1; yield 2; }());
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;</div>}
```
###with generic iterables
          
```
function(){
              <div class="code">var [a, b, c] = global.__createIterableObject([1, 2]);
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;</div>}
```
###with instances of generic iterables
          
```
function(){
              <div class="code">var [a, b, c] = Object.create(global.__createIterableObject([1, 2]));
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;</div>}
```
###trailing commas in iterable patterns
          
```
function(){
              <div class="code">var [a,] = [1];
return a === 1;</div>}
```
###with objects
          
```
function(){
              <div class="code">var {c, x:d, e} = {c:7, x:8};
return c === 7 &amp;&amp; d === 8 &amp;&amp; e === undefined;</div>}
```
###object destructuring with primitives
          
```
function(){
              <div class="code">var {toFixed} = 2;
var {slice} = '';
return toFixed === Number.prototype.toFixed
  &amp;&amp; slice === String.prototype.slice;</div>}
```
###trailing commas in object patterns
          
```
function(){
              <div class="code">var {a,} = {a:1};
return a === 1;</div>}
```
###throws on null and undefined
          
```
function(){
              <div class="code">try {
  var {a} = null;
  return false;
} catch(e) {}
try {
  var {b} = undefined;
  return false;
} catch(e) {}
return true;</div>}
```
###computed properties
          
```
function(){
              <div class="code">var qux = &quot;corge&quot;;
var { [qux]: grault } = { corge: &quot;garply&quot; };
return grault === &quot;garply&quot;;</div>}
```
###multiples in a single var statement
          
```
function(){
              <div class="code">var [a,b] = [5,6], {c,d} = {c:7,d:8};
return a === 5 &amp;&amp; b === 6 &amp;&amp; c === 7 &amp;&amp; d === 8;</div>}
```
###nested
          
```
function(){
              <div class="code">var [e, {x:f, g}] = [9, {x:10}];
var {h, x:[i]} = {h:11, x:[12]};
return e === 9 &amp;&amp; f === 10 &amp;&amp; g === undefined
  &amp;&amp; h === 11 &amp;&amp; i === 12;</div>}
```
###in for-in loop heads
          
```
function(){
              <div class="code">for(var [i, j, k] in { qux: 1 }) {
  return i === &quot;q&quot; &amp;&amp; j === &quot;u&quot; &amp;&amp; k === &quot;x&quot;;
}</div>}
```
###in for-of loop heads
          
```
function(){
              <div class="code">for(var [i, j, k] of [[1,2,3]]) {
  return i === 1 &amp;&amp; j === 2 &amp;&amp; k === 3;
}</div>}
```
###in catch heads
          
```
function(){
              <div class="code">try {
  throw [1,2];
} catch([i,j]) {
  try {
    throw { k: 3, l: 4 };
  } catch({k, l}) {
    return i === 1 &amp;&amp; j === 2 &amp;&amp; k === 3 &amp;&amp; l === 4;
  }
}</div>}
```
###rest
          
```
function(){
              <div class="code">var [a, ...b] = [3, 4, 5];
var [c, ...d] = [6];
return a === 3 &amp;&amp; b instanceof Array &amp;&amp; (b + &quot;&quot;) === &quot;4,5&quot; &amp;&amp;
   c === 6 &amp;&amp; d instanceof Array &amp;&amp; d.length === 0;</div>}
```
###defaults
          
```
function(){
              <div class="code">var {a = 1, b = 0, z:c = 3} = {b:2, z:undefined};
var [d = 0, e = 5, f = 6] = [4,,undefined];
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === 3
  &amp;&amp; d === 4 &amp;&amp; e === 5 &amp;&amp; f === 6;</div>}
```
###defaults, let temporal dead zone
          
```
function(){
              <div class="code">var {a, b = 2} = {a:1};
try {
  eval(&quot;let {c = c} = {};&quot;);
  return false;
} catch(e){}
try {
  eval(&quot;let {c = d, d} = {d:1};&quot;);
  return false;
} catch(e){}
return a === 1 &amp;&amp; b === 2;</div>}
```
###with arrays
          
```
function(){
              <div class="code">var [a, , [b], c] = [5, null, [6]];
return a === 5 &amp;&amp; b === 6 &amp;&amp; c === undefined;</div>}
```
###with sparse arrays
          
```
function(){
              <div class="code">var [a, , b] = [,,,];
return a === undefined &amp;&amp; b === undefined;</div>}
```
###with strings
          
```
function(){
              <div class="code">var [a, b, c] = &quot;ab&quot;;
return a === &quot;a&quot; &amp;&amp; b === &quot;b&quot; &amp;&amp; c === undefined;</div>}
```
###with astral plane strings
          
```
function(){
              <div class="code">var [c] = &quot;𠮷𠮶&quot;;
return c === &quot;𠮷&quot;;</div>}
```
###with generator instances
          
```
function(){
              <div class="code">var [a, b, c] = (function*(){ yield 1; yield 2; }());
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;</div>}
```
###with generic iterables
          
```
function(){
              <div class="code">var [a, b, c] = global.__createIterableObject([1, 2]);
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;</div>}
```
###with instances of generic iterables
          
```
function(){
              <div class="code">var [a, b, c] = Object.create(global.__createIterableObject([1, 2]));
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;</div>}
```
###trailing commas in iterable patterns
          
```
function(){
              <div class="code">var [a,] = [1];
return a === 1;</div>}
```
###with objects
          
```
function(){
              <div class="code">var {c, x:d, e} = {c:7, x:8};
return c === 7 &amp;&amp; d === 8 &amp;&amp; e === undefined;</div>}
```
###object destructuring with primitives
          
```
function(){
              <div class="code">var {toFixed} = 2;
var {slice} = '';
return toFixed === Number.prototype.toFixed
  &amp;&amp; slice === String.prototype.slice;</div>}
```
###trailing commas in object patterns
          
```
function(){
              <div class="code">var {a,} = {a:1};
return a === 1;</div>}
```
###throws on null and undefined
          
```
function(){
              <div class="code">try {
  var {a} = null;
  return false;
} catch(e) {}
try {
  var {b} = undefined;
  return false;
} catch(e) {}
return true;</div>}
```
###computed properties
          
```
function(){
              <div class="code">var qux = &quot;corge&quot;;
var { [qux]: grault } = { corge: &quot;garply&quot; };
return grault === &quot;garply&quot;;</div>}
```
###multiples in a single var statement
          
```
function(){
              <div class="code">var [a,b] = [5,6], {c,d} = {c:7,d:8};
return a === 5 &amp;&amp; b === 6 &amp;&amp; c === 7 &amp;&amp; d === 8;</div>}
```
###nested
          
```
function(){
              <div class="code">var [e, {x:f, g}] = [9, {x:10}];
var {h, x:[i]} = {h:11, x:[12]};
return e === 9 &amp;&amp; f === 10 &amp;&amp; g === undefined
  &amp;&amp; h === 11 &amp;&amp; i === 12;</div>}
```
###in for-in loop heads
          
```
function(){
              <div class="code">for(var [i, j, k] in { qux: 1 }) {
  return i === &quot;q&quot; &amp;&amp; j === &quot;u&quot; &amp;&amp; k === &quot;x&quot;;
}</div>}
```
###in for-of loop heads
          
```
function(){
              <div class="code">for(var [i, j, k] of [[1,2,3]]) {
  return i === 1 &amp;&amp; j === 2 &amp;&amp; k === 3;
}</div>}
```
###in catch heads
          
```
function(){
              <div class="code">try {
  throw [1,2];
} catch([i,j]) {
  try {
    throw { k: 3, l: 4 };
  } catch({k, l}) {
    return i === 1 &amp;&amp; j === 2 &amp;&amp; k === 3 &amp;&amp; l === 4;
  }
}</div>}
```
###rest
          
```
function(){
              <div class="code">var [a, ...b] = [3, 4, 5];
var [c, ...d] = [6];
return a === 3 &amp;&amp; b instanceof Array &amp;&amp; (b + &quot;&quot;) === &quot;4,5&quot; &amp;&amp;
   c === 6 &amp;&amp; d instanceof Array &amp;&amp; d.length === 0;</div>}
```
###defaults
          
```
function(){
              <div class="code">var {a = 1, b = 0, z:c = 3} = {b:2, z:undefined};
var [d = 0, e = 5, f = 6] = [4,,undefined];
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === 3
  &amp;&amp; d === 4 &amp;&amp; e === 5 &amp;&amp; f === 6;</div>}
```
###defaults, let temporal dead zone
          
```
function(){
              <div class="code">var {a, b = 2} = {a:1};
try {
  eval(&quot;let {c = c} = {};&quot;);
  return false;
} catch(e){}
try {
  eval(&quot;let {c = d, d} = {d:1};&quot;);
  return false;
} catch(e){}
return a === 1 &amp;&amp; b === 2;</div>}
```
###with arrays
          
```
function(){
              <div class="code">var [a, , [b], c] = [5, null, [6]];
return a === 5 &amp;&amp; b === 6 &amp;&amp; c === undefined;</div>}
```
###with sparse arrays
          
```
function(){
              <div class="code">var [a, , b] = [,,,];
return a === undefined &amp;&amp; b === undefined;</div>}
```
###with strings
          
```
function(){
              <div class="code">var [a, b, c] = &quot;ab&quot;;
return a === &quot;a&quot; &amp;&amp; b === &quot;b&quot; &amp;&amp; c === undefined;</div>}
```
###with astral plane strings
          
```
function(){
              <div class="code">var [c] = &quot;𠮷𠮶&quot;;
return c === &quot;𠮷&quot;;</div>}
```
###with generator instances
          
```
function(){
              <div class="code">var [a, b, c] = (function*(){ yield 1; yield 2; }());
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;</div>}
```
###with generic iterables
          
```
function(){
              <div class="code">var [a, b, c] = global.__createIterableObject([1, 2]);
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;</div>}
```
###with instances of generic iterables
          
```
function(){
              <div class="code">var [a, b, c] = Object.create(global.__createIterableObject([1, 2]));
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;</div>}
```
###trailing commas in iterable patterns
          
```
function(){
              <div class="code">var [a,] = [1];
return a === 1;</div>}
```
###with objects
          
```
function(){
              <div class="code">var {c, x:d, e} = {c:7, x:8};
return c === 7 &amp;&amp; d === 8 &amp;&amp; e === undefined;</div>}
```
###object destructuring with primitives
          
```
function(){
              <div class="code">var {toFixed} = 2;
var {slice} = '';
return toFixed === Number.prototype.toFixed
  &amp;&amp; slice === String.prototype.slice;</div>}
```
###trailing commas in object patterns
          
```
function(){
              <div class="code">var {a,} = {a:1};
return a === 1;</div>}
```
###throws on null and undefined
          
```
function(){
              <div class="code">try {
  var {a} = null;
  return false;
} catch(e) {}
try {
  var {b} = undefined;
  return false;
} catch(e) {}
return true;</div>}
```
###computed properties
          
```
function(){
              <div class="code">var qux = &quot;corge&quot;;
var { [qux]: grault } = { corge: &quot;garply&quot; };
return grault === &quot;garply&quot;;</div>}
```
###multiples in a single var statement
          
```
function(){
              <div class="code">var [a,b] = [5,6], {c,d} = {c:7,d:8};
return a === 5 &amp;&amp; b === 6 &amp;&amp; c === 7 &amp;&amp; d === 8;</div>}
```
###nested
          
```
function(){
              <div class="code">var [e, {x:f, g}] = [9, {x:10}];
var {h, x:[i]} = {h:11, x:[12]};
return e === 9 &amp;&amp; f === 10 &amp;&amp; g === undefined
  &amp;&amp; h === 11 &amp;&amp; i === 12;</div>}
```
###in for-in loop heads
          
```
function(){
              <div class="code">for(var [i, j, k] in { qux: 1 }) {
  return i === &quot;q&quot; &amp;&amp; j === &quot;u&quot; &amp;&amp; k === &quot;x&quot;;
}</div>}
```
###in for-of loop heads
          
```
function(){
              <div class="code">for(var [i, j, k] of [[1,2,3]]) {
  return i === 1 &amp;&amp; j === 2 &amp;&amp; k === 3;
}</div>}
```
###in catch heads
          
```
function(){
              <div class="code">try {
  throw [1,2];
} catch([i,j]) {
  try {
    throw { k: 3, l: 4 };
  } catch({k, l}) {
    return i === 1 &amp;&amp; j === 2 &amp;&amp; k === 3 &amp;&amp; l === 4;
  }
}</div>}
```
###rest
          
```
function(){
              <div class="code">var [a, ...b] = [3, 4, 5];
var [c, ...d] = [6];
return a === 3 &amp;&amp; b instanceof Array &amp;&amp; (b + &quot;&quot;) === &quot;4,5&quot; &amp;&amp;
   c === 6 &amp;&amp; d instanceof Array &amp;&amp; d.length === 0;</div>}
```
###defaults
          
```
function(){
              <div class="code">var {a = 1, b = 0, z:c = 3} = {b:2, z:undefined};
var [d = 0, e = 5, f = 6] = [4,,undefined];
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === 3
  &amp;&amp; d === 4 &amp;&amp; e === 5 &amp;&amp; f === 6;</div>}
```
###defaults, let temporal dead zone
          
```
function(){
              <div class="code">var {a, b = 2} = {a:1};
try {
  eval(&quot;let {c = c} = {};&quot;);
  return false;
} catch(e){}
try {
  eval(&quot;let {c = d, d} = {d:1};&quot;);
  return false;
} catch(e){}
return a === 1 &amp;&amp; b === 2;</div>}
```
###with arrays
          
```
function(){
              <div class="code">var [a, , [b], c] = [5, null, [6]];
return a === 5 &amp;&amp; b === 6 &amp;&amp; c === undefined;</div>}
```
###with sparse arrays
          
```
function(){
              <div class="code">var [a, , b] = [,,,];
return a === undefined &amp;&amp; b === undefined;</div>}
```
###with strings
          
```
function(){
              <div class="code">var [a, b, c] = &quot;ab&quot;;
return a === &quot;a&quot; &amp;&amp; b === &quot;b&quot; &amp;&amp; c === undefined;</div>}
```
###with astral plane strings
          
```
function(){
              <div class="code">var [c] = &quot;𠮷𠮶&quot;;
return c === &quot;𠮷&quot;;</div>}
```
###with generator instances
          
```
function(){
              <div class="code">var [a, b, c] = (function*(){ yield 1; yield 2; }());
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;</div>}
```
###with generic iterables
          
```
function(){
              <div class="code">var [a, b, c] = global.__createIterableObject([1, 2]);
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;</div>}
```
###with instances of generic iterables
          
```
function(){
              <div class="code">var [a, b, c] = Object.create(global.__createIterableObject([1, 2]));
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;</div>}
```
###trailing commas in iterable patterns
          
```
function(){
              <div class="code">var [a,] = [1];
return a === 1;</div>}
```
###with objects
          
```
function(){
              <div class="code">var {c, x:d, e} = {c:7, x:8};
return c === 7 &amp;&amp; d === 8 &amp;&amp; e === undefined;</div>}
```
###object destructuring with primitives
          
```
function(){
              <div class="code">var {toFixed} = 2;
var {slice} = '';
return toFixed === Number.prototype.toFixed
  &amp;&amp; slice === String.prototype.slice;</div>}
```
###trailing commas in object patterns
          
```
function(){
              <div class="code">var {a,} = {a:1};
return a === 1;</div>}
```
###throws on null and undefined
          
```
function(){
              <div class="code">try {
  var {a} = null;
  return false;
} catch(e) {}
try {
  var {b} = undefined;
  return false;
} catch(e) {}
return true;</div>}
```
###computed properties
          
```
function(){
              <div class="code">var qux = &quot;corge&quot;;
var { [qux]: grault } = { corge: &quot;garply&quot; };
return grault === &quot;garply&quot;;</div>}
```
###multiples in a single var statement
          
```
function(){
              <div class="code">var [a,b] = [5,6], {c,d} = {c:7,d:8};
return a === 5 &amp;&amp; b === 6 &amp;&amp; c === 7 &amp;&amp; d === 8;</div>}
```
###nested
          
```
function(){
              <div class="code">var [e, {x:f, g}] = [9, {x:10}];
var {h, x:[i]} = {h:11, x:[12]};
return e === 9 &amp;&amp; f === 10 &amp;&amp; g === undefined
  &amp;&amp; h === 11 &amp;&amp; i === 12;</div>}
```
###in for-in loop heads
          
```
function(){
              <div class="code">for(var [i, j, k] in { qux: 1 }) {
  return i === &quot;q&quot; &amp;&amp; j === &quot;u&quot; &amp;&amp; k === &quot;x&quot;;
}</div>}
```
###in for-of loop heads
          
```
function(){
              <div class="code">for(var [i, j, k] of [[1,2,3]]) {
  return i === 1 &amp;&amp; j === 2 &amp;&amp; k === 3;
}</div>}
```
###in catch heads
          
```
function(){
              <div class="code">try {
  throw [1,2];
} catch([i,j]) {
  try {
    throw { k: 3, l: 4 };
  } catch({k, l}) {
    return i === 1 &amp;&amp; j === 2 &amp;&amp; k === 3 &amp;&amp; l === 4;
  }
}</div>}
```
###rest
          
```
function(){
              <div class="code">var [a, ...b] = [3, 4, 5];
var [c, ...d] = [6];
return a === 3 &amp;&amp; b instanceof Array &amp;&amp; (b + &quot;&quot;) === &quot;4,5&quot; &amp;&amp;
   c === 6 &amp;&amp; d instanceof Array &amp;&amp; d.length === 0;</div>}
```
###defaults
          
```
function(){
              <div class="code">var {a = 1, b = 0, z:c = 3} = {b:2, z:undefined};
var [d = 0, e = 5, f = 6] = [4,,undefined];
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === 3
  &amp;&amp; d === 4 &amp;&amp; e === 5 &amp;&amp; f === 6;</div>}
```
###defaults, let temporal dead zone
          
```
function(){
              <div class="code">var {a, b = 2} = {a:1};
try {
  eval(&quot;let {c = c} = {};&quot;);
  return false;
} catch(e){}
try {
  eval(&quot;let {c = d, d} = {d:1};&quot;);
  return false;
} catch(e){}
return a === 1 &amp;&amp; b === 2;</div>}
```
###with arrays
          
```
function(){
              <div class="code">var [a, , [b], c] = [5, null, [6]];
return a === 5 &amp;&amp; b === 6 &amp;&amp; c === undefined;</div>}
```
###with sparse arrays
          
```
function(){
              <div class="code">var [a, , b] = [,,,];
return a === undefined &amp;&amp; b === undefined;</div>}
```
###with strings
          
```
function(){
              <div class="code">var [a, b, c] = &quot;ab&quot;;
return a === &quot;a&quot; &amp;&amp; b === &quot;b&quot; &amp;&amp; c === undefined;</div>}
```
###with astral plane strings
          
```
function(){
              <div class="code">var [c] = &quot;𠮷𠮶&quot;;
return c === &quot;𠮷&quot;;</div>}
```
###with generator instances
          
```
function(){
              <div class="code">var [a, b, c] = (function*(){ yield 1; yield 2; }());
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;</div>}
```
###with generic iterables
          
```
function(){
              <div class="code">var [a, b, c] = global.__createIterableObject([1, 2]);
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;</div>}
```
###with instances of generic iterables
          
```
function(){
              <div class="code">var [a, b, c] = Object.create(global.__createIterableObject([1, 2]));
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;</div>}
```
###trailing commas in iterable patterns
          
```
function(){
              <div class="code">var [a,] = [1];
return a === 1;</div>}
```
###with objects
          
```
function(){
              <div class="code">var {c, x:d, e} = {c:7, x:8};
return c === 7 &amp;&amp; d === 8 &amp;&amp; e === undefined;</div>}
```
###object destructuring with primitives
          
```
function(){
              <div class="code">var {toFixed} = 2;
var {slice} = '';
return toFixed === Number.prototype.toFixed
  &amp;&amp; slice === String.prototype.slice;</div>}
```
###trailing commas in object patterns
          
```
function(){
              <div class="code">var {a,} = {a:1};
return a === 1;</div>}
```
###throws on null and undefined
          
```
function(){
              <div class="code">try {
  var {a} = null;
  return false;
} catch(e) {}
try {
  var {b} = undefined;
  return false;
} catch(e) {}
return true;</div>}
```
###computed properties
          
```
function(){
              <div class="code">var qux = &quot;corge&quot;;
var { [qux]: grault } = { corge: &quot;garply&quot; };
return grault === &quot;garply&quot;;</div>}
```
###multiples in a single var statement
          
```
function(){
              <div class="code">var [a,b] = [5,6], {c,d} = {c:7,d:8};
return a === 5 &amp;&amp; b === 6 &amp;&amp; c === 7 &amp;&amp; d === 8;</div>}
```
###nested
          
```
function(){
              <div class="code">var [e, {x:f, g}] = [9, {x:10}];
var {h, x:[i]} = {h:11, x:[12]};
return e === 9 &amp;&amp; f === 10 &amp;&amp; g === undefined
  &amp;&amp; h === 11 &amp;&amp; i === 12;</div>}
```
###in for-in loop heads
          
```
function(){
              <div class="code">for(var [i, j, k] in { qux: 1 }) {
  return i === &quot;q&quot; &amp;&amp; j === &quot;u&quot; &amp;&amp; k === &quot;x&quot;;
}</div>}
```
###in for-of loop heads
          
```
function(){
              <div class="code">for(var [i, j, k] of [[1,2,3]]) {
  return i === 1 &amp;&amp; j === 2 &amp;&amp; k === 3;
}</div>}
```
###in catch heads
          
```
function(){
              <div class="code">try {
  throw [1,2];
} catch([i,j]) {
  try {
    throw { k: 3, l: 4 };
  } catch({k, l}) {
    return i === 1 &amp;&amp; j === 2 &amp;&amp; k === 3 &amp;&amp; l === 4;
  }
}</div>}
```
###rest
          
```
function(){
              <div class="code">var [a, ...b] = [3, 4, 5];
var [c, ...d] = [6];
return a === 3 &amp;&amp; b instanceof Array &amp;&amp; (b + &quot;&quot;) === &quot;4,5&quot; &amp;&amp;
   c === 6 &amp;&amp; d instanceof Array &amp;&amp; d.length === 0;</div>}
```
###defaults
          
```
function(){
              <div class="code">var {a = 1, b = 0, z:c = 3} = {b:2, z:undefined};
var [d = 0, e = 5, f = 6] = [4,,undefined];
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === 3
  &amp;&amp; d === 4 &amp;&amp; e === 5 &amp;&amp; f === 6;</div>}
```
###defaults, let temporal dead zone
          
```
function(){
              <div class="code">var {a, b = 2} = {a:1};
try {
  eval(&quot;let {c = c} = {};&quot;);
  return false;
} catch(e){}
try {
  eval(&quot;let {c = d, d} = {d:1};&quot;);
  return false;
} catch(e){}
return a === 1 &amp;&amp; b === 2;</div>}
```
###with arrays
          
```
function(){
              <div class="code">var [a, , [b], c] = [5, null, [6]];
return a === 5 &amp;&amp; b === 6 &amp;&amp; c === undefined;</div>}
```
###with sparse arrays
          
```
function(){
              <div class="code">var [a, , b] = [,,,];
return a === undefined &amp;&amp; b === undefined;</div>}
```
###with strings
          
```
function(){
              <div class="code">var [a, b, c] = &quot;ab&quot;;
return a === &quot;a&quot; &amp;&amp; b === &quot;b&quot; &amp;&amp; c === undefined;</div>}
```
###with astral plane strings
          
```
function(){
              <div class="code">var [c] = &quot;𠮷𠮶&quot;;
return c === &quot;𠮷&quot;;</div>}
```
###with generator instances
          
```
function(){
              <div class="code">var [a, b, c] = (function*(){ yield 1; yield 2; }());
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;</div>}
```
###with generic iterables
          
```
function(){
              <div class="code">var [a, b, c] = global.__createIterableObject([1, 2]);
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;</div>}
```
###with instances of generic iterables
          
```
function(){
              <div class="code">var [a, b, c] = Object.create(global.__createIterableObject([1, 2]));
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;</div>}
```
###trailing commas in iterable patterns
          
```
function(){
              <div class="code">var [a,] = [1];
return a === 1;</div>}
```
###with objects
          
```
function(){
              <div class="code">var {c, x:d, e} = {c:7, x:8};
return c === 7 &amp;&amp; d === 8 &amp;&amp; e === undefined;</div>}
```
###object destructuring with primitives
          
```
function(){
              <div class="code">var {toFixed} = 2;
var {slice} = '';
return toFixed === Number.prototype.toFixed
  &amp;&amp; slice === String.prototype.slice;</div>}
```
###trailing commas in object patterns
          
```
function(){
              <div class="code">var {a,} = {a:1};
return a === 1;</div>}
```
###throws on null and undefined
          
```
function(){
              <div class="code">try {
  var {a} = null;
  return false;
} catch(e) {}
try {
  var {b} = undefined;
  return false;
} catch(e) {}
return true;</div>}
```
###computed properties
          
```
function(){
              <div class="code">var qux = &quot;corge&quot;;
var { [qux]: grault } = { corge: &quot;garply&quot; };
return grault === &quot;garply&quot;;</div>}
```
###multiples in a single var statement
          
```
function(){
              <div class="code">var [a,b] = [5,6], {c,d} = {c:7,d:8};
return a === 5 &amp;&amp; b === 6 &amp;&amp; c === 7 &amp;&amp; d === 8;</div>}
```
###nested
          
```
function(){
              <div class="code">var [e, {x:f, g}] = [9, {x:10}];
var {h, x:[i]} = {h:11, x:[12]};
return e === 9 &amp;&amp; f === 10 &amp;&amp; g === undefined
  &amp;&amp; h === 11 &amp;&amp; i === 12;</div>}
```
###in for-in loop heads
          
```
function(){
              <div class="code">for(var [i, j, k] in { qux: 1 }) {
  return i === &quot;q&quot; &amp;&amp; j === &quot;u&quot; &amp;&amp; k === &quot;x&quot;;
}</div>}
```
###in for-of loop heads
          
```
function(){
              <div class="code">for(var [i, j, k] of [[1,2,3]]) {
  return i === 1 &amp;&amp; j === 2 &amp;&amp; k === 3;
}</div>}
```
###in catch heads
          
```
function(){
              <div class="code">try {
  throw [1,2];
} catch([i,j]) {
  try {
    throw { k: 3, l: 4 };
  } catch({k, l}) {
    return i === 1 &amp;&amp; j === 2 &amp;&amp; k === 3 &amp;&amp; l === 4;
  }
}</div>}
```
###rest
          
```
function(){
              <div class="code">var [a, ...b] = [3, 4, 5];
var [c, ...d] = [6];
return a === 3 &amp;&amp; b instanceof Array &amp;&amp; (b + &quot;&quot;) === &quot;4,5&quot; &amp;&amp;
   c === 6 &amp;&amp; d instanceof Array &amp;&amp; d.length === 0;</div>}
```
###defaults
          
```
function(){
              <div class="code">var {a = 1, b = 0, z:c = 3} = {b:2, z:undefined};
var [d = 0, e = 5, f = 6] = [4,,undefined];
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === 3
  &amp;&amp; d === 4 &amp;&amp; e === 5 &amp;&amp; f === 6;</div>}
```
###defaults, let temporal dead zone
          
```
function(){
              <div class="code">var {a, b = 2} = {a:1};
try {
  eval(&quot;let {c = c} = {};&quot;);
  return false;
} catch(e){}
try {
  eval(&quot;let {c = d, d} = {d:1};&quot;);
  return false;
} catch(e){}
return a === 1 &amp;&amp; b === 2;</div>}
```
###with arrays
          
```
function(){
              <div class="code">var [a, , [b], c] = [5, null, [6]];
return a === 5 &amp;&amp; b === 6 &amp;&amp; c === undefined;</div>}
```
###with sparse arrays
          
```
function(){
              <div class="code">var [a, , b] = [,,,];
return a === undefined &amp;&amp; b === undefined;</div>}
```
###with strings
          
```
function(){
              <div class="code">var [a, b, c] = &quot;ab&quot;;
return a === &quot;a&quot; &amp;&amp; b === &quot;b&quot; &amp;&amp; c === undefined;</div>}
```
###with astral plane strings
          
```
function(){
              <div class="code">var [c] = &quot;𠮷𠮶&quot;;
return c === &quot;𠮷&quot;;</div>}
```
###with generator instances
          
```
function(){
              <div class="code">var [a, b, c] = (function*(){ yield 1; yield 2; }());
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;</div>}
```
###with generic iterables
          
```
function(){
              <div class="code">var [a, b, c] = global.__createIterableObject([1, 2]);
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;</div>}
```
###with instances of generic iterables
          
```
function(){
              <div class="code">var [a, b, c] = Object.create(global.__createIterableObject([1, 2]));
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;</div>}
```
###trailing commas in iterable patterns
          
```
function(){
              <div class="code">var [a,] = [1];
return a === 1;</div>}
```
###with objects
          
```
function(){
              <div class="code">var {c, x:d, e} = {c:7, x:8};
return c === 7 &amp;&amp; d === 8 &amp;&amp; e === undefined;</div>}
```
###object destructuring with primitives
          
```
function(){
              <div class="code">var {toFixed} = 2;
var {slice} = '';
return toFixed === Number.prototype.toFixed
  &amp;&amp; slice === String.prototype.slice;</div>}
```
###trailing commas in object patterns
          
```
function(){
              <div class="code">var {a,} = {a:1};
return a === 1;</div>}
```
###throws on null and undefined
          
```
function(){
              <div class="code">try {
  var {a} = null;
  return false;
} catch(e) {}
try {
  var {b} = undefined;
  return false;
} catch(e) {}
return true;</div>}
```
###computed properties
          
```
function(){
              <div class="code">var qux = &quot;corge&quot;;
var { [qux]: grault } = { corge: &quot;garply&quot; };
return grault === &quot;garply&quot;;</div>}
```
###multiples in a single var statement
          
```
function(){
              <div class="code">var [a,b] = [5,6], {c,d} = {c:7,d:8};
return a === 5 &amp;&amp; b === 6 &amp;&amp; c === 7 &amp;&amp; d === 8;</div>}
```
###nested
          
```
function(){
              <div class="code">var [e, {x:f, g}] = [9, {x:10}];
var {h, x:[i]} = {h:11, x:[12]};
return e === 9 &amp;&amp; f === 10 &amp;&amp; g === undefined
  &amp;&amp; h === 11 &amp;&amp; i === 12;</div>}
```
###in for-in loop heads
          
```
function(){
              <div class="code">for(var [i, j, k] in { qux: 1 }) {
  return i === &quot;q&quot; &amp;&amp; j === &quot;u&quot; &amp;&amp; k === &quot;x&quot;;
}</div>}
```
###in for-of loop heads
          
```
function(){
              <div class="code">for(var [i, j, k] of [[1,2,3]]) {
  return i === 1 &amp;&amp; j === 2 &amp;&amp; k === 3;
}</div>}
```
###in catch heads
          
```
function(){
              <div class="code">try {
  throw [1,2];
} catch([i,j]) {
  try {
    throw { k: 3, l: 4 };
  } catch({k, l}) {
    return i === 1 &amp;&amp; j === 2 &amp;&amp; k === 3 &amp;&amp; l === 4;
  }
}</div>}
```
###rest
          
```
function(){
              <div class="code">var [a, ...b] = [3, 4, 5];
var [c, ...d] = [6];
return a === 3 &amp;&amp; b instanceof Array &amp;&amp; (b + &quot;&quot;) === &quot;4,5&quot; &amp;&amp;
   c === 6 &amp;&amp; d instanceof Array &amp;&amp; d.length === 0;</div>}
```
###defaults
          
```
function(){
              <div class="code">var {a = 1, b = 0, z:c = 3} = {b:2, z:undefined};
var [d = 0, e = 5, f = 6] = [4,,undefined];
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === 3
  &amp;&amp; d === 4 &amp;&amp; e === 5 &amp;&amp; f === 6;</div>}
```
###defaults, let temporal dead zone
          
```
function(){
              <div class="code">var {a, b = 2} = {a:1};
try {
  eval(&quot;let {c = c} = {};&quot;);
  return false;
} catch(e){}
try {
  eval(&quot;let {c = d, d} = {d:1};&quot;);
  return false;
} catch(e){}
return a === 1 &amp;&amp; b === 2;</div>}
```
###with arrays
          
```
function(){
              <div class="code">var [a, , [b], c] = [5, null, [6]];
return a === 5 &amp;&amp; b === 6 &amp;&amp; c === undefined;</div>}
```
###with sparse arrays
          
```
function(){
              <div class="code">var [a, , b] = [,,,];
return a === undefined &amp;&amp; b === undefined;</div>}
```
###with strings
          
```
function(){
              <div class="code">var [a, b, c] = &quot;ab&quot;;
return a === &quot;a&quot; &amp;&amp; b === &quot;b&quot; &amp;&amp; c === undefined;</div>}
```
###with astral plane strings
          
```
function(){
              <div class="code">var [c] = &quot;𠮷𠮶&quot;;
return c === &quot;𠮷&quot;;</div>}
```
###with generator instances
          
```
function(){
              <div class="code">var [a, b, c] = (function*(){ yield 1; yield 2; }());
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;</div>}
```
###with generic iterables
          
```
function(){
              <div class="code">var [a, b, c] = global.__createIterableObject([1, 2]);
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;</div>}
```
###with instances of generic iterables
          
```
function(){
              <div class="code">var [a, b, c] = Object.create(global.__createIterableObject([1, 2]));
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;</div>}
```
###trailing commas in iterable patterns
          
```
function(){
              <div class="code">var [a,] = [1];
return a === 1;</div>}
```
###with objects
          
```
function(){
              <div class="code">var {c, x:d, e} = {c:7, x:8};
return c === 7 &amp;&amp; d === 8 &amp;&amp; e === undefined;</div>}
```
###object destructuring with primitives
          
```
function(){
              <div class="code">var {toFixed} = 2;
var {slice} = '';
return toFixed === Number.prototype.toFixed
  &amp;&amp; slice === String.prototype.slice;</div>}
```
###trailing commas in object patterns
          
```
function(){
              <div class="code">var {a,} = {a:1};
return a === 1;</div>}
```
###throws on null and undefined
          
```
function(){
              <div class="code">try {
  var {a} = null;
  return false;
} catch(e) {}
try {
  var {b} = undefined;
  return false;
} catch(e) {}
return true;</div>}
```
###computed properties
          
```
function(){
              <div class="code">var qux = &quot;corge&quot;;
var { [qux]: grault } = { corge: &quot;garply&quot; };
return grault === &quot;garply&quot;;</div>}
```
###multiples in a single var statement
          
```
function(){
              <div class="code">var [a,b] = [5,6], {c,d} = {c:7,d:8};
return a === 5 &amp;&amp; b === 6 &amp;&amp; c === 7 &amp;&amp; d === 8;</div>}
```
###nested
          
```
function(){
              <div class="code">var [e, {x:f, g}] = [9, {x:10}];
var {h, x:[i]} = {h:11, x:[12]};
return e === 9 &amp;&amp; f === 10 &amp;&amp; g === undefined
  &amp;&amp; h === 11 &amp;&amp; i === 12;</div>}
```
###in for-in loop heads
          
```
function(){
              <div class="code">for(var [i, j, k] in { qux: 1 }) {
  return i === &quot;q&quot; &amp;&amp; j === &quot;u&quot; &amp;&amp; k === &quot;x&quot;;
}</div>}
```
###in for-of loop heads
          
```
function(){
              <div class="code">for(var [i, j, k] of [[1,2,3]]) {
  return i === 1 &amp;&amp; j === 2 &amp;&amp; k === 3;
}</div>}
```
###in catch heads
          
```
function(){
              <div class="code">try {
  throw [1,2];
} catch([i,j]) {
  try {
    throw { k: 3, l: 4 };
  } catch({k, l}) {
    return i === 1 &amp;&amp; j === 2 &amp;&amp; k === 3 &amp;&amp; l === 4;
  }
}</div>}
```
###rest
          
```
function(){
              <div class="code">var [a, ...b] = [3, 4, 5];
var [c, ...d] = [6];
return a === 3 &amp;&amp; b instanceof Array &amp;&amp; (b + &quot;&quot;) === &quot;4,5&quot; &amp;&amp;
   c === 6 &amp;&amp; d instanceof Array &amp;&amp; d.length === 0;</div>}
```
###defaults
          
```
function(){
              <div class="code">var {a = 1, b = 0, z:c = 3} = {b:2, z:undefined};
var [d = 0, e = 5, f = 6] = [4,,undefined];
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === 3
  &amp;&amp; d === 4 &amp;&amp; e === 5 &amp;&amp; f === 6;</div>}
```
###defaults, let temporal dead zone
          
```
function(){
              <div class="code">var {a, b = 2} = {a:1};
try {
  eval(&quot;let {c = c} = {};&quot;);
  return false;
} catch(e){}
try {
  eval(&quot;let {c = d, d} = {d:1};&quot;);
  return false;
} catch(e){}
return a === 1 &amp;&amp; b === 2;</div>}
```
###with arrays
          
```
function(){
              <div class="code">var [a, , [b], c] = [5, null, [6]];
return a === 5 &amp;&amp; b === 6 &amp;&amp; c === undefined;</div>}
```
###with sparse arrays
          
```
function(){
              <div class="code">var [a, , b] = [,,,];
return a === undefined &amp;&amp; b === undefined;</div>}
```
###with strings
          
```
function(){
              <div class="code">var [a, b, c] = &quot;ab&quot;;
return a === &quot;a&quot; &amp;&amp; b === &quot;b&quot; &amp;&amp; c === undefined;</div>}
```
###with astral plane strings
          
```
function(){
              <div class="code">var [c] = &quot;𠮷𠮶&quot;;
return c === &quot;𠮷&quot;;</div>}
```
###with generator instances
          
```
function(){
              <div class="code">var [a, b, c] = (function*(){ yield 1; yield 2; }());
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;</div>}
```
###with generic iterables
          
```
function(){
              <div class="code">var [a, b, c] = global.__createIterableObject([1, 2]);
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;</div>}
```
###with instances of generic iterables
          
```
function(){
              <div class="code">var [a, b, c] = Object.create(global.__createIterableObject([1, 2]));
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;</div>}
```
###trailing commas in iterable patterns
          
```
function(){
              <div class="code">var [a,] = [1];
return a === 1;</div>}
```
###with objects
          
```
function(){
              <div class="code">var {c, x:d, e} = {c:7, x:8};
return c === 7 &amp;&amp; d === 8 &amp;&amp; e === undefined;</div>}
```
###object destructuring with primitives
          
```
function(){
              <div class="code">var {toFixed} = 2;
var {slice} = '';
return toFixed === Number.prototype.toFixed
  &amp;&amp; slice === String.prototype.slice;</div>}
```
###trailing commas in object patterns
          
```
function(){
              <div class="code">var {a,} = {a:1};
return a === 1;</div>}
```
###throws on null and undefined
          
```
function(){
              <div class="code">try {
  var {a} = null;
  return false;
} catch(e) {}
try {
  var {b} = undefined;
  return false;
} catch(e) {}
return true;</div>}
```
###computed properties
          
```
function(){
              <div class="code">var qux = &quot;corge&quot;;
var { [qux]: grault } = { corge: &quot;garply&quot; };
return grault === &quot;garply&quot;;</div>}
```
###multiples in a single var statement
          
```
function(){
              <div class="code">var [a,b] = [5,6], {c,d} = {c:7,d:8};
return a === 5 &amp;&amp; b === 6 &amp;&amp; c === 7 &amp;&amp; d === 8;</div>}
```
###nested
          
```
function(){
              <div class="code">var [e, {x:f, g}] = [9, {x:10}];
var {h, x:[i]} = {h:11, x:[12]};
return e === 9 &amp;&amp; f === 10 &amp;&amp; g === undefined
  &amp;&amp; h === 11 &amp;&amp; i === 12;</div>}
```
###in for-in loop heads
          
```
function(){
              <div class="code">for(var [i, j, k] in { qux: 1 }) {
  return i === &quot;q&quot; &amp;&amp; j === &quot;u&quot; &amp;&amp; k === &quot;x&quot;;
}</div>}
```
###in for-of loop heads
          
```
function(){
              <div class="code">for(var [i, j, k] of [[1,2,3]]) {
  return i === 1 &amp;&amp; j === 2 &amp;&amp; k === 3;
}</div>}
```
###in catch heads
          
```
function(){
              <div class="code">try {
  throw [1,2];
} catch([i,j]) {
  try {
    throw { k: 3, l: 4 };
  } catch({k, l}) {
    return i === 1 &amp;&amp; j === 2 &amp;&amp; k === 3 &amp;&amp; l === 4;
  }
}</div>}
```
###rest
          
```
function(){
              <div class="code">var [a, ...b] = [3, 4, 5];
var [c, ...d] = [6];
return a === 3 &amp;&amp; b instanceof Array &amp;&amp; (b + &quot;&quot;) === &quot;4,5&quot; &amp;&amp;
   c === 6 &amp;&amp; d instanceof Array &amp;&amp; d.length === 0;</div>}
```
###defaults
          
```
function(){
              <div class="code">var {a = 1, b = 0, z:c = 3} = {b:2, z:undefined};
var [d = 0, e = 5, f = 6] = [4,,undefined];
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === 3
  &amp;&amp; d === 4 &amp;&amp; e === 5 &amp;&amp; f === 6;</div>}
```
###defaults, let temporal dead zone
          
```
function(){
              <div class="code">var {a, b = 2} = {a:1};
try {
  eval(&quot;let {c = c} = {};&quot;);
  return false;
} catch(e){}
try {
  eval(&quot;let {c = d, d} = {d:1};&quot;);
  return false;
} catch(e){}
return a === 1 &amp;&amp; b === 2;</div>}
```
###with arrays
          
```
function(){
              <div class="code">var [a, , [b], c] = [5, null, [6]];
return a === 5 &amp;&amp; b === 6 &amp;&amp; c === undefined;</div>}
```
###with sparse arrays
          
```
function(){
              <div class="code">var [a, , b] = [,,,];
return a === undefined &amp;&amp; b === undefined;</div>}
```
###with strings
          
```
function(){
              <div class="code">var [a, b, c] = &quot;ab&quot;;
return a === &quot;a&quot; &amp;&amp; b === &quot;b&quot; &amp;&amp; c === undefined;</div>}
```
###with astral plane strings
          
```
function(){
              <div class="code">var [c] = &quot;𠮷𠮶&quot;;
return c === &quot;𠮷&quot;;</div>}
```
###with generator instances
          
```
function(){
              <div class="code">var [a, b, c] = (function*(){ yield 1; yield 2; }());
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;</div>}
```
###with generic iterables
          
```
function(){
              <div class="code">var [a, b, c] = global.__createIterableObject([1, 2]);
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;</div>}
```
###with instances of generic iterables
          
```
function(){
              <div class="code">var [a, b, c] = Object.create(global.__createIterableObject([1, 2]));
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;</div>}
```
###trailing commas in iterable patterns
          
```
function(){
              <div class="code">var [a,] = [1];
return a === 1;</div>}
```
###with objects
          
```
function(){
              <div class="code">var {c, x:d, e} = {c:7, x:8};
return c === 7 &amp;&amp; d === 8 &amp;&amp; e === undefined;</div>}
```
###object destructuring with primitives
          
```
function(){
              <div class="code">var {toFixed} = 2;
var {slice} = '';
return toFixed === Number.prototype.toFixed
  &amp;&amp; slice === String.prototype.slice;</div>}
```
###trailing commas in object patterns
          
```
function(){
              <div class="code">var {a,} = {a:1};
return a === 1;</div>}
```
###throws on null and undefined
          
```
function(){
              <div class="code">try {
  var {a} = null;
  return false;
} catch(e) {}
try {
  var {b} = undefined;
  return false;
} catch(e) {}
return true;</div>}
```
###computed properties
          
```
function(){
              <div class="code">var qux = &quot;corge&quot;;
var { [qux]: grault } = { corge: &quot;garply&quot; };
return grault === &quot;garply&quot;;</div>}
```
###multiples in a single var statement
          
```
function(){
              <div class="code">var [a,b] = [5,6], {c,d} = {c:7,d:8};
return a === 5 &amp;&amp; b === 6 &amp;&amp; c === 7 &amp;&amp; d === 8;</div>}
```
###nested
          
```
function(){
              <div class="code">var [e, {x:f, g}] = [9, {x:10}];
var {h, x:[i]} = {h:11, x:[12]};
return e === 9 &amp;&amp; f === 10 &amp;&amp; g === undefined
  &amp;&amp; h === 11 &amp;&amp; i === 12;</div>}
```
###in for-in loop heads
          
```
function(){
              <div class="code">for(var [i, j, k] in { qux: 1 }) {
  return i === &quot;q&quot; &amp;&amp; j === &quot;u&quot; &amp;&amp; k === &quot;x&quot;;
}</div>}
```
###in for-of loop heads
          
```
function(){
              <div class="code">for(var [i, j, k] of [[1,2,3]]) {
  return i === 1 &amp;&amp; j === 2 &amp;&amp; k === 3;
}</div>}
```
###in catch heads
          
```
function(){
              <div class="code">try {
  throw [1,2];
} catch([i,j]) {
  try {
    throw { k: 3, l: 4 };
  } catch({k, l}) {
    return i === 1 &amp;&amp; j === 2 &amp;&amp; k === 3 &amp;&amp; l === 4;
  }
}</div>}
```
###rest
          
```
function(){
              <div class="code">var [a, ...b] = [3, 4, 5];
var [c, ...d] = [6];
return a === 3 &amp;&amp; b instanceof Array &amp;&amp; (b + &quot;&quot;) === &quot;4,5&quot; &amp;&amp;
   c === 6 &amp;&amp; d instanceof Array &amp;&amp; d.length === 0;</div>}
```
###defaults
          
```
function(){
              <div class="code">var {a = 1, b = 0, z:c = 3} = {b:2, z:undefined};
var [d = 0, e = 5, f = 6] = [4,,undefined];
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === 3
  &amp;&amp; d === 4 &amp;&amp; e === 5 &amp;&amp; f === 6;</div>}
```
###defaults, let temporal dead zone
          
```
function(){
              <div class="code">var {a, b = 2} = {a:1};
try {
  eval(&quot;let {c = c} = {};&quot;);
  return false;
} catch(e){}
try {
  eval(&quot;let {c = d, d} = {d:1};&quot;);
  return false;
} catch(e){}
return a === 1 &amp;&amp; b === 2;</div>}
```
###with arrays
          
```
function(){
              <div class="code">var [a, , [b], c] = [5, null, [6]];
return a === 5 &amp;&amp; b === 6 &amp;&amp; c === undefined;</div>}
```
###with sparse arrays
          
```
function(){
              <div class="code">var [a, , b] = [,,,];
return a === undefined &amp;&amp; b === undefined;</div>}
```
###with strings
          
```
function(){
              <div class="code">var [a, b, c] = &quot;ab&quot;;
return a === &quot;a&quot; &amp;&amp; b === &quot;b&quot; &amp;&amp; c === undefined;</div>}
```
###with astral plane strings
          
```
function(){
              <div class="code">var [c] = &quot;𠮷𠮶&quot;;
return c === &quot;𠮷&quot;;</div>}
```
###with generator instances
          
```
function(){
              <div class="code">var [a, b, c] = (function*(){ yield 1; yield 2; }());
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;</div>}
```
###with generic iterables
          
```
function(){
              <div class="code">var [a, b, c] = global.__createIterableObject([1, 2]);
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;</div>}
```
###with instances of generic iterables
          
```
function(){
              <div class="code">var [a, b, c] = Object.create(global.__createIterableObject([1, 2]));
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;</div>}
```
###trailing commas in iterable patterns
          
```
function(){
              <div class="code">var [a,] = [1];
return a === 1;</div>}
```
###with objects
          
```
function(){
              <div class="code">var {c, x:d, e} = {c:7, x:8};
return c === 7 &amp;&amp; d === 8 &amp;&amp; e === undefined;</div>}
```
###object destructuring with primitives
          
```
function(){
              <div class="code">var {toFixed} = 2;
var {slice} = '';
return toFixed === Number.prototype.toFixed
  &amp;&amp; slice === String.prototype.slice;</div>}
```
###trailing commas in object patterns
          
```
function(){
              <div class="code">var {a,} = {a:1};
return a === 1;</div>}
```
###throws on null and undefined
          
```
function(){
              <div class="code">try {
  var {a} = null;
  return false;
} catch(e) {}
try {
  var {b} = undefined;
  return false;
} catch(e) {}
return true;</div>}
```
###computed properties
          
```
function(){
              <div class="code">var qux = &quot;corge&quot;;
var { [qux]: grault } = { corge: &quot;garply&quot; };
return grault === &quot;garply&quot;;</div>}
```
###multiples in a single var statement
          
```
function(){
              <div class="code">var [a,b] = [5,6], {c,d} = {c:7,d:8};
return a === 5 &amp;&amp; b === 6 &amp;&amp; c === 7 &amp;&amp; d === 8;</div>}
```
###nested
          
```
function(){
              <div class="code">var [e, {x:f, g}] = [9, {x:10}];
var {h, x:[i]} = {h:11, x:[12]};
return e === 9 &amp;&amp; f === 10 &amp;&amp; g === undefined
  &amp;&amp; h === 11 &amp;&amp; i === 12;</div>}
```
###in for-in loop heads
          
```
function(){
              <div class="code">for(var [i, j, k] in { qux: 1 }) {
  return i === &quot;q&quot; &amp;&amp; j === &quot;u&quot; &amp;&amp; k === &quot;x&quot;;
}</div>}
```
###in for-of loop heads
          
```
function(){
              <div class="code">for(var [i, j, k] of [[1,2,3]]) {
  return i === 1 &amp;&amp; j === 2 &amp;&amp; k === 3;
}</div>}
```
###in catch heads
          
```
function(){
              <div class="code">try {
  throw [1,2];
} catch([i,j]) {
  try {
    throw { k: 3, l: 4 };
  } catch({k, l}) {
    return i === 1 &amp;&amp; j === 2 &amp;&amp; k === 3 &amp;&amp; l === 4;
  }
}</div>}
```
###rest
          
```
function(){
              <div class="code">var [a, ...b] = [3, 4, 5];
var [c, ...d] = [6];
return a === 3 &amp;&amp; b instanceof Array &amp;&amp; (b + &quot;&quot;) === &quot;4,5&quot; &amp;&amp;
   c === 6 &amp;&amp; d instanceof Array &amp;&amp; d.length === 0;</div>}
```
###defaults
          
```
function(){
              <div class="code">var {a = 1, b = 0, z:c = 3} = {b:2, z:undefined};
var [d = 0, e = 5, f = 6] = [4,,undefined];
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === 3
  &amp;&amp; d === 4 &amp;&amp; e === 5 &amp;&amp; f === 6;</div>}
```
###defaults, let temporal dead zone
          
```
function(){
              <div class="code">var {a, b = 2} = {a:1};
try {
  eval(&quot;let {c = c} = {};&quot;);
  return false;
} catch(e){}
try {
  eval(&quot;let {c = d, d} = {d:1};&quot;);
  return false;
} catch(e){}
return a === 1 &amp;&amp; b === 2;</div>}
```
###with arrays
          
```
function(){
              <div class="code">var [a, , [b], c] = [5, null, [6]];
return a === 5 &amp;&amp; b === 6 &amp;&amp; c === undefined;</div>}
```
###with sparse arrays
          
```
function(){
              <div class="code">var [a, , b] = [,,,];
return a === undefined &amp;&amp; b === undefined;</div>}
```
###with strings
          
```
function(){
              <div class="code">var [a, b, c] = &quot;ab&quot;;
return a === &quot;a&quot; &amp;&amp; b === &quot;b&quot; &amp;&amp; c === undefined;</div>}
```
###with astral plane strings
          
```
function(){
              <div class="code">var [c] = &quot;𠮷𠮶&quot;;
return c === &quot;𠮷&quot;;</div>}
```
###with generator instances
          
```
function(){
              <div class="code">var [a, b, c] = (function*(){ yield 1; yield 2; }());
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;</div>}
```
###with generic iterables
          
```
function(){
              <div class="code">var [a, b, c] = global.__createIterableObject([1, 2]);
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;</div>}
```
###with instances of generic iterables
          
```
function(){
              <div class="code">var [a, b, c] = Object.create(global.__createIterableObject([1, 2]));
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;</div>}
```
###trailing commas in iterable patterns
          
```
function(){
              <div class="code">var [a,] = [1];
return a === 1;</div>}
```
###with objects
          
```
function(){
              <div class="code">var {c, x:d, e} = {c:7, x:8};
return c === 7 &amp;&amp; d === 8 &amp;&amp; e === undefined;</div>}
```
###object destructuring with primitives
          
```
function(){
              <div class="code">var {toFixed} = 2;
var {slice} = '';
return toFixed === Number.prototype.toFixed
  &amp;&amp; slice === String.prototype.slice;</div>}
```
###trailing commas in object patterns
          
```
function(){
              <div class="code">var {a,} = {a:1};
return a === 1;</div>}
```
###throws on null and undefined
          
```
function(){
              <div class="code">try {
  var {a} = null;
  return false;
} catch(e) {}
try {
  var {b} = undefined;
  return false;
} catch(e) {}
return true;</div>}
```
###computed properties
          
```
function(){
              <div class="code">var qux = &quot;corge&quot;;
var { [qux]: grault } = { corge: &quot;garply&quot; };
return grault === &quot;garply&quot;;</div>}
```
###multiples in a single var statement
          
```
function(){
              <div class="code">var [a,b] = [5,6], {c,d} = {c:7,d:8};
return a === 5 &amp;&amp; b === 6 &amp;&amp; c === 7 &amp;&amp; d === 8;</div>}
```
###nested
          
```
function(){
              <div class="code">var [e, {x:f, g}] = [9, {x:10}];
var {h, x:[i]} = {h:11, x:[12]};
return e === 9 &amp;&amp; f === 10 &amp;&amp; g === undefined
  &amp;&amp; h === 11 &amp;&amp; i === 12;</div>}
```
###in for-in loop heads
          
```
function(){
              <div class="code">for(var [i, j, k] in { qux: 1 }) {
  return i === &quot;q&quot; &amp;&amp; j === &quot;u&quot; &amp;&amp; k === &quot;x&quot;;
}</div>}
```
###in for-of loop heads
          
```
function(){
              <div class="code">for(var [i, j, k] of [[1,2,3]]) {
  return i === 1 &amp;&amp; j === 2 &amp;&amp; k === 3;
}</div>}
```
###in catch heads
          
```
function(){
              <div class="code">try {
  throw [1,2];
} catch([i,j]) {
  try {
    throw { k: 3, l: 4 };
  } catch({k, l}) {
    return i === 1 &amp;&amp; j === 2 &amp;&amp; k === 3 &amp;&amp; l === 4;
  }
}</div>}
```
###rest
          
```
function(){
              <div class="code">var [a, ...b] = [3, 4, 5];
var [c, ...d] = [6];
return a === 3 &amp;&amp; b instanceof Array &amp;&amp; (b + &quot;&quot;) === &quot;4,5&quot; &amp;&amp;
   c === 6 &amp;&amp; d instanceof Array &amp;&amp; d.length === 0;</div>}
```
###defaults
          
```
function(){
              <div class="code">var {a = 1, b = 0, z:c = 3} = {b:2, z:undefined};
var [d = 0, e = 5, f = 6] = [4,,undefined];
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === 3
  &amp;&amp; d === 4 &amp;&amp; e === 5 &amp;&amp; f === 6;</div>}
```
###defaults, let temporal dead zone
          
```
function(){
              <div class="code">var {a, b = 2} = {a:1};
try {
  eval(&quot;let {c = c} = {};&quot;);
  return false;
} catch(e){}
try {
  eval(&quot;let {c = d, d} = {d:1};&quot;);
  return false;
} catch(e){}
return a === 1 &amp;&amp; b === 2;</div>}
```
###with arrays
          
```
function(){
              <div class="code">var [a, , [b], c] = [5, null, [6]];
return a === 5 &amp;&amp; b === 6 &amp;&amp; c === undefined;</div>}
```
###with sparse arrays
          
```
function(){
              <div class="code">var [a, , b] = [,,,];
return a === undefined &amp;&amp; b === undefined;</div>}
```
###with strings
          
```
function(){
              <div class="code">var [a, b, c] = &quot;ab&quot;;
return a === &quot;a&quot; &amp;&amp; b === &quot;b&quot; &amp;&amp; c === undefined;</div>}
```
###with astral plane strings
          
```
function(){
              <div class="code">var [c] = &quot;𠮷𠮶&quot;;
return c === &quot;𠮷&quot;;</div>}
```
###with generator instances
          
```
function(){
              <div class="code">var [a, b, c] = (function*(){ yield 1; yield 2; }());
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;</div>}
```
###with generic iterables
          
```
function(){
              <div class="code">var [a, b, c] = global.__createIterableObject([1, 2]);
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;</div>}
```
###with instances of generic iterables
          
```
function(){
              <div class="code">var [a, b, c] = Object.create(global.__createIterableObject([1, 2]));
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;</div>}
```
###trailing commas in iterable patterns
          
```
function(){
              <div class="code">var [a,] = [1];
return a === 1;</div>}
```
###with objects
          
```
function(){
              <div class="code">var {c, x:d, e} = {c:7, x:8};
return c === 7 &amp;&amp; d === 8 &amp;&amp; e === undefined;</div>}
```
###object destructuring with primitives
          
```
function(){
              <div class="code">var {toFixed} = 2;
var {slice} = '';
return toFixed === Number.prototype.toFixed
  &amp;&amp; slice === String.prototype.slice;</div>}
```
###trailing commas in object patterns
          
```
function(){
              <div class="code">var {a,} = {a:1};
return a === 1;</div>}
```
###throws on null and undefined
          
```
function(){
              <div class="code">try {
  var {a} = null;
  return false;
} catch(e) {}
try {
  var {b} = undefined;
  return false;
} catch(e) {}
return true;</div>}
```
###computed properties
          
```
function(){
              <div class="code">var qux = &quot;corge&quot;;
var { [qux]: grault } = { corge: &quot;garply&quot; };
return grault === &quot;garply&quot;;</div>}
```
###multiples in a single var statement
          
```
function(){
              <div class="code">var [a,b] = [5,6], {c,d} = {c:7,d:8};
return a === 5 &amp;&amp; b === 6 &amp;&amp; c === 7 &amp;&amp; d === 8;</div>}
```
###nested
          
```
function(){
              <div class="code">var [e, {x:f, g}] = [9, {x:10}];
var {h, x:[i]} = {h:11, x:[12]};
return e === 9 &amp;&amp; f === 10 &amp;&amp; g === undefined
  &amp;&amp; h === 11 &amp;&amp; i === 12;</div>}
```
###in for-in loop heads
          
```
function(){
              <div class="code">for(var [i, j, k] in { qux: 1 }) {
  return i === &quot;q&quot; &amp;&amp; j === &quot;u&quot; &amp;&amp; k === &quot;x&quot;;
}</div>}
```
###in for-of loop heads
          
```
function(){
              <div class="code">for(var [i, j, k] of [[1,2,3]]) {
  return i === 1 &amp;&amp; j === 2 &amp;&amp; k === 3;
}</div>}
```
###in catch heads
          
```
function(){
              <div class="code">try {
  throw [1,2];
} catch([i,j]) {
  try {
    throw { k: 3, l: 4 };
  } catch({k, l}) {
    return i === 1 &amp;&amp; j === 2 &amp;&amp; k === 3 &amp;&amp; l === 4;
  }
}</div>}
```
###rest
          
```
function(){
              <div class="code">var [a, ...b] = [3, 4, 5];
var [c, ...d] = [6];
return a === 3 &amp;&amp; b instanceof Array &amp;&amp; (b + &quot;&quot;) === &quot;4,5&quot; &amp;&amp;
   c === 6 &amp;&amp; d instanceof Array &amp;&amp; d.length === 0;</div>}
```
###defaults
          
```
function(){
              <div class="code">var {a = 1, b = 0, z:c = 3} = {b:2, z:undefined};
var [d = 0, e = 5, f = 6] = [4,,undefined];
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === 3
  &amp;&amp; d === 4 &amp;&amp; e === 5 &amp;&amp; f === 6;</div>}
```
###defaults, let temporal dead zone
          
```
function(){
              <div class="code">var {a, b = 2} = {a:1};
try {
  eval(&quot;let {c = c} = {};&quot;);
  return false;
} catch(e){}
try {
  eval(&quot;let {c = d, d} = {d:1};&quot;);
  return false;
} catch(e){}
return a === 1 &amp;&amp; b === 2;</div>}
```
###with arrays
          
```
function(){
              <div class="code">var [a, , [b], c] = [5, null, [6]];
return a === 5 &amp;&amp; b === 6 &amp;&amp; c === undefined;</div>}
```
###with sparse arrays
          
```
function(){
              <div class="code">var [a, , b] = [,,,];
return a === undefined &amp;&amp; b === undefined;</div>}
```
###with strings
          
```
function(){
              <div class="code">var [a, b, c] = &quot;ab&quot;;
return a === &quot;a&quot; &amp;&amp; b === &quot;b&quot; &amp;&amp; c === undefined;</div>}
```
###with astral plane strings
          
```
function(){
              <div class="code">var [c] = &quot;𠮷𠮶&quot;;
return c === &quot;𠮷&quot;;</div>}
```
###with generator instances
          
```
function(){
              <div class="code">var [a, b, c] = (function*(){ yield 1; yield 2; }());
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;</div>}
```
###with generic iterables
          
```
function(){
              <div class="code">var [a, b, c] = global.__createIterableObject([1, 2]);
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;</div>}
```
###with instances of generic iterables
          
```
function(){
              <div class="code">var [a, b, c] = Object.create(global.__createIterableObject([1, 2]));
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;</div>}
```
###trailing commas in iterable patterns
          
```
function(){
              <div class="code">var [a,] = [1];
return a === 1;</div>}
```
###with objects
          
```
function(){
              <div class="code">var {c, x:d, e} = {c:7, x:8};
return c === 7 &amp;&amp; d === 8 &amp;&amp; e === undefined;</div>}
```
###object destructuring with primitives
          
```
function(){
              <div class="code">var {toFixed} = 2;
var {slice} = '';
return toFixed === Number.prototype.toFixed
  &amp;&amp; slice === String.prototype.slice;</div>}
```
###trailing commas in object patterns
          
```
function(){
              <div class="code">var {a,} = {a:1};
return a === 1;</div>}
```
###throws on null and undefined
          
```
function(){
              <div class="code">try {
  var {a} = null;
  return false;
} catch(e) {}
try {
  var {b} = undefined;
  return false;
} catch(e) {}
return true;</div>}
```
###computed properties
          
```
function(){
              <div class="code">var qux = &quot;corge&quot;;
var { [qux]: grault } = { corge: &quot;garply&quot; };
return grault === &quot;garply&quot;;</div>}
```
###multiples in a single var statement
          
```
function(){
              <div class="code">var [a,b] = [5,6], {c,d} = {c:7,d:8};
return a === 5 &amp;&amp; b === 6 &amp;&amp; c === 7 &amp;&amp; d === 8;</div>}
```
###nested
          
```
function(){
              <div class="code">var [e, {x:f, g}] = [9, {x:10}];
var {h, x:[i]} = {h:11, x:[12]};
return e === 9 &amp;&amp; f === 10 &amp;&amp; g === undefined
  &amp;&amp; h === 11 &amp;&amp; i === 12;</div>}
```
###in for-in loop heads
          
```
function(){
              <div class="code">for(var [i, j, k] in { qux: 1 }) {
  return i === &quot;q&quot; &amp;&amp; j === &quot;u&quot; &amp;&amp; k === &quot;x&quot;;
}</div>}
```
###in for-of loop heads
          
```
function(){
              <div class="code">for(var [i, j, k] of [[1,2,3]]) {
  return i === 1 &amp;&amp; j === 2 &amp;&amp; k === 3;
}</div>}
```
###in catch heads
          
```
function(){
              <div class="code">try {
  throw [1,2];
} catch([i,j]) {
  try {
    throw { k: 3, l: 4 };
  } catch({k, l}) {
    return i === 1 &amp;&amp; j === 2 &amp;&amp; k === 3 &amp;&amp; l === 4;
  }
}</div>}
```
###rest
          
```
function(){
              <div class="code">var [a, ...b] = [3, 4, 5];
var [c, ...d] = [6];
return a === 3 &amp;&amp; b instanceof Array &amp;&amp; (b + &quot;&quot;) === &quot;4,5&quot; &amp;&amp;
   c === 6 &amp;&amp; d instanceof Array &amp;&amp; d.length === 0;</div>}
```
###defaults
          
```
function(){
              <div class="code">var {a = 1, b = 0, z:c = 3} = {b:2, z:undefined};
var [d = 0, e = 5, f = 6] = [4,,undefined];
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === 3
  &amp;&amp; d === 4 &amp;&amp; e === 5 &amp;&amp; f === 6;</div>}
```
###defaults, let temporal dead zone
          
```
function(){
              <div class="code">var {a, b = 2} = {a:1};
try {
  eval(&quot;let {c = c} = {};&quot;);
  return false;
} catch(e){}
try {
  eval(&quot;let {c = d, d} = {d:1};&quot;);
  return false;
} catch(e){}
return a === 1 &amp;&amp; b === 2;</div>}
```
###with arrays
          
```
function(){
              <div class="code">var [a, , [b], c] = [5, null, [6]];
return a === 5 &amp;&amp; b === 6 &amp;&amp; c === undefined;</div>}
```
###with sparse arrays
          
```
function(){
              <div class="code">var [a, , b] = [,,,];
return a === undefined &amp;&amp; b === undefined;</div>}
```
###with strings
          
```
function(){
              <div class="code">var [a, b, c] = &quot;ab&quot;;
return a === &quot;a&quot; &amp;&amp; b === &quot;b&quot; &amp;&amp; c === undefined;</div>}
```
###with astral plane strings
          
```
function(){
              <div class="code">var [c] = &quot;𠮷𠮶&quot;;
return c === &quot;𠮷&quot;;</div>}
```
###with generator instances
          
```
function(){
              <div class="code">var [a, b, c] = (function*(){ yield 1; yield 2; }());
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;</div>}
```
###with generic iterables
          
```
function(){
              <div class="code">var [a, b, c] = global.__createIterableObject([1, 2]);
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;</div>}
```
###with instances of generic iterables
          
```
function(){
              <div class="code">var [a, b, c] = Object.create(global.__createIterableObject([1, 2]));
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;</div>}
```
###trailing commas in iterable patterns
          
```
function(){
              <div class="code">var [a,] = [1];
return a === 1;</div>}
```
###with objects
          
```
function(){
              <div class="code">var {c, x:d, e} = {c:7, x:8};
return c === 7 &amp;&amp; d === 8 &amp;&amp; e === undefined;</div>}
```
###object destructuring with primitives
          
```
function(){
              <div class="code">var {toFixed} = 2;
var {slice} = '';
return toFixed === Number.prototype.toFixed
  &amp;&amp; slice === String.prototype.slice;</div>}
```
###trailing commas in object patterns
          
```
function(){
              <div class="code">var {a,} = {a:1};
return a === 1;</div>}
```
###throws on null and undefined
          
```
function(){
              <div class="code">try {
  var {a} = null;
  return false;
} catch(e) {}
try {
  var {b} = undefined;
  return false;
} catch(e) {}
return true;</div>}
```
###computed properties
          
```
function(){
              <div class="code">var qux = &quot;corge&quot;;
var { [qux]: grault } = { corge: &quot;garply&quot; };
return grault === &quot;garply&quot;;</div>}
```
###multiples in a single var statement
          
```
function(){
              <div class="code">var [a,b] = [5,6], {c,d} = {c:7,d:8};
return a === 5 &amp;&amp; b === 6 &amp;&amp; c === 7 &amp;&amp; d === 8;</div>}
```
###nested
          
```
function(){
              <div class="code">var [e, {x:f, g}] = [9, {x:10}];
var {h, x:[i]} = {h:11, x:[12]};
return e === 9 &amp;&amp; f === 10 &amp;&amp; g === undefined
  &amp;&amp; h === 11 &amp;&amp; i === 12;</div>}
```
###in for-in loop heads
          
```
function(){
              <div class="code">for(var [i, j, k] in { qux: 1 }) {
  return i === &quot;q&quot; &amp;&amp; j === &quot;u&quot; &amp;&amp; k === &quot;x&quot;;
}</div>}
```
###in for-of loop heads
          
```
function(){
              <div class="code">for(var [i, j, k] of [[1,2,3]]) {
  return i === 1 &amp;&amp; j === 2 &amp;&amp; k === 3;
}</div>}
```
###in catch heads
          
```
function(){
              <div class="code">try {
  throw [1,2];
} catch([i,j]) {
  try {
    throw { k: 3, l: 4 };
  } catch({k, l}) {
    return i === 1 &amp;&amp; j === 2 &amp;&amp; k === 3 &amp;&amp; l === 4;
  }
}</div>}
```
###rest
          
```
function(){
              <div class="code">var [a, ...b] = [3, 4, 5];
var [c, ...d] = [6];
return a === 3 &amp;&amp; b instanceof Array &amp;&amp; (b + &quot;&quot;) === &quot;4,5&quot; &amp;&amp;
   c === 6 &amp;&amp; d instanceof Array &amp;&amp; d.length === 0;</div>}
```
###defaults
          
```
function(){
              <div class="code">var {a = 1, b = 0, z:c = 3} = {b:2, z:undefined};
var [d = 0, e = 5, f = 6] = [4,,undefined];
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === 3
  &amp;&amp; d === 4 &amp;&amp; e === 5 &amp;&amp; f === 6;</div>}
```
###defaults, let temporal dead zone
          
```
function(){
              <div class="code">var {a, b = 2} = {a:1};
try {
  eval(&quot;let {c = c} = {};&quot;);
  return false;
} catch(e){}
try {
  eval(&quot;let {c = d, d} = {d:1};&quot;);
  return false;
} catch(e){}
return a === 1 &amp;&amp; b === 2;</div>}
```
