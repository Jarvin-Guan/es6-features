###with arrays
          
```
function(){
              <div class="code">var a,b,c;
[a, , [b], c] = [5, null, [6]];
return a === 5 &amp;&amp; b === 6 &amp;&amp; c === undefined;</div>}
```
###with sparse arrays
          
```
function(){
              <div class="code">var a, b;
[a, , b] = [,,,];
return a === undefined &amp;&amp; b === undefined;</div>}
```
###with strings
          
```
function(){
              <div class="code">var a,b,c;
[a, b, c] = &quot;ab&quot;;
return a === &quot;a&quot; &amp;&amp; b === &quot;b&quot; &amp;&amp; c === undefined;</div>}
```
###with astral plane strings
          
```
function(){
              <div class="code">var c;
[c] = &quot;𠮷𠮶&quot;;
return c === &quot;𠮷&quot;;</div>}
```
###with generator instances
          
```
function(){
              <div class="code">var a,b,c;
[a, b, c] = (function*(){ yield 1; yield 2; }());
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;</div>}
```
###with generic iterables
          
```
function(){
              <div class="code">var a,b,c;
[a, b, c] = global.__createIterableObject([1, 2]);
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;</div>}
```
###with instances of generic iterables
          
```
function(){
              <div class="code">var a,b,c;
[a, b, c] = Object.create(global.__createIterableObject([1, 2]));
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;</div>}
```
###iterable destructuring expression
          
```
function(){
              <div class="code">var a, b, iterable = [1,2];
return ([a, b] = iterable) === iterable;</div>}
```
###chained iterable destructuring
          
```
function(){
              <div class="code">var a,b,c,d;
[a,b] = [c,d] = [1,2];
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === 1 &amp;&amp; d === 2;</div>}
```
###trailing commas in iterable patterns
          
```
function(){
              <div class="code">var a;
[a,] = [1];
return a === 1;</div>}
```
###with objects
          
```
function(){
              <div class="code">var c,d,e;
({c, x:d, e} = {c:7, x:8});
return c === 7 &amp;&amp; d === 8 &amp;&amp; e === undefined;</div>}
```
###object destructuring with primitives
          
```
function(){
              <div class="code">var toFixed, slice;
({toFixed} = 2);
({slice} = '');
return toFixed === Number.prototype.toFixed
  &amp;&amp; slice === String.prototype.slice;</div>}
```
###trailing commas in object patterns
          
```
function(){
              <div class="code">var a;
({a,} = {a:1});
return a === 1;</div>}
```
###object destructuring expression
          
```
function(){
              <div class="code">var a, b, obj = { a:1, b:2 };
return ({a,b} = obj) === obj;</div>}
```
###parenthesised left-hand-side is a syntax error
          
```
function(){
              <div class="code">var a, b;
({a,b} = {a:1,b:2});
try {
  eval(&quot;({a,b}) = {a:3,b:4};&quot;);
}
catch(e) {
  return a === 1 &amp;&amp; b === 2;
}</div>}
```
###chained object destructuring
          
```
function(){
              <div class="code">var a,b,c,d;
({a,b} = {c,d} = {a:1,b:2,c:3,d:4});
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === 3 &amp;&amp; d === 4;</div>}
```
###throws on null and undefined
          
```
function(){
              <div class="code">var a,b;
try {
  ({a} = null);
  return false;
} catch(e) {}
try {
  ({b} = undefined);
  return false;
} catch(e) {}
return true;</div>}
```
###computed properties
          
```
function(){
              <div class="code">var grault, qux = &quot;corge&quot;;
({ [qux]: grault } = { corge: &quot;garply&quot; });
return grault === &quot;garply&quot;;</div>}
```
###nested
          
```
function(){
              <div class="code">var e,f,g,h,i;
[e, {x:f, g}] = [9, {x:10}];
({h, x:[i]} = {h:11, x:[12]});
return e === 9 &amp;&amp; f === 10 &amp;&amp; g === undefined
  &amp;&amp; h === 11 &amp;&amp; i === 12;</div>}
```
###rest
          
```
function(){
              <div class="code">var a,b,c,d;
[a, ...b] = [3, 4, 5];
[c, ...d] = [6];
return a === 3 &amp;&amp; b instanceof Array &amp;&amp; (b + &quot;&quot;) === &quot;4,5&quot; &amp;&amp;
   c === 6 &amp;&amp; d instanceof Array &amp;&amp; d.length === 0;</div>}
```
###nested rest
          
```
function(){
              <div class="code">var a = [1, 2, 3], first, last;
[first, ...[a[2], last]] = a;
return first === 1 &amp;&amp; last === 3 &amp;&amp; (a + &quot;&quot;) === &quot;1,2,2&quot;;</div>}
```
###empty patterns
          
```
function(){
              <div class="code">[] = [1,2];
({} = {a:1,b:2});
return true;</div>}
```
###defaults
          
```
function(){
              <div class="code">var a,b,c,d,e,f;
({a = 1, b = 0, z:c = 3} = {b:2, z:undefined});
[d = 0, e = 5, f = 6] = [4,,undefined];
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === 3
  &amp;&amp; d === 4 &amp;&amp; e === 5 &amp;&amp; f === 6;</div>}
```
###with arrays
          
```
function(){
              <div class="code">var a,b,c;
[a, , [b], c] = [5, null, [6]];
return a === 5 &amp;&amp; b === 6 &amp;&amp; c === undefined;</div>}
```
###with sparse arrays
          
```
function(){
              <div class="code">var a, b;
[a, , b] = [,,,];
return a === undefined &amp;&amp; b === undefined;</div>}
```
###with strings
          
```
function(){
              <div class="code">var a,b,c;
[a, b, c] = &quot;ab&quot;;
return a === &quot;a&quot; &amp;&amp; b === &quot;b&quot; &amp;&amp; c === undefined;</div>}
```
###with astral plane strings
          
```
function(){
              <div class="code">var c;
[c] = &quot;𠮷𠮶&quot;;
return c === &quot;𠮷&quot;;</div>}
```
###with generator instances
          
```
function(){
              <div class="code">var a,b,c;
[a, b, c] = (function*(){ yield 1; yield 2; }());
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;</div>}
```
###with generic iterables
          
```
function(){
              <div class="code">var a,b,c;
[a, b, c] = global.__createIterableObject([1, 2]);
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;</div>}
```
###with instances of generic iterables
          
```
function(){
              <div class="code">var a,b,c;
[a, b, c] = Object.create(global.__createIterableObject([1, 2]));
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;</div>}
```
###iterable destructuring expression
          
```
function(){
              <div class="code">var a, b, iterable = [1,2];
return ([a, b] = iterable) === iterable;</div>}
```
###chained iterable destructuring
          
```
function(){
              <div class="code">var a,b,c,d;
[a,b] = [c,d] = [1,2];
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === 1 &amp;&amp; d === 2;</div>}
```
###trailing commas in iterable patterns
          
```
function(){
              <div class="code">var a;
[a,] = [1];
return a === 1;</div>}
```
###with objects
          
```
function(){
              <div class="code">var c,d,e;
({c, x:d, e} = {c:7, x:8});
return c === 7 &amp;&amp; d === 8 &amp;&amp; e === undefined;</div>}
```
###object destructuring with primitives
          
```
function(){
              <div class="code">var toFixed, slice;
({toFixed} = 2);
({slice} = '');
return toFixed === Number.prototype.toFixed
  &amp;&amp; slice === String.prototype.slice;</div>}
```
###trailing commas in object patterns
          
```
function(){
              <div class="code">var a;
({a,} = {a:1});
return a === 1;</div>}
```
###object destructuring expression
          
```
function(){
              <div class="code">var a, b, obj = { a:1, b:2 };
return ({a,b} = obj) === obj;</div>}
```
###parenthesised left-hand-side is a syntax error
          
```
function(){
              <div class="code">var a, b;
({a,b} = {a:1,b:2});
try {
  eval(&quot;({a,b}) = {a:3,b:4};&quot;);
}
catch(e) {
  return a === 1 &amp;&amp; b === 2;
}</div>}
```
###chained object destructuring
          
```
function(){
              <div class="code">var a,b,c,d;
({a,b} = {c,d} = {a:1,b:2,c:3,d:4});
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === 3 &amp;&amp; d === 4;</div>}
```
###throws on null and undefined
          
```
function(){
              <div class="code">var a,b;
try {
  ({a} = null);
  return false;
} catch(e) {}
try {
  ({b} = undefined);
  return false;
} catch(e) {}
return true;</div>}
```
###computed properties
          
```
function(){
              <div class="code">var grault, qux = &quot;corge&quot;;
({ [qux]: grault } = { corge: &quot;garply&quot; });
return grault === &quot;garply&quot;;</div>}
```
###nested
          
```
function(){
              <div class="code">var e,f,g,h,i;
[e, {x:f, g}] = [9, {x:10}];
({h, x:[i]} = {h:11, x:[12]});
return e === 9 &amp;&amp; f === 10 &amp;&amp; g === undefined
  &amp;&amp; h === 11 &amp;&amp; i === 12;</div>}
```
###rest
          
```
function(){
              <div class="code">var a,b,c,d;
[a, ...b] = [3, 4, 5];
[c, ...d] = [6];
return a === 3 &amp;&amp; b instanceof Array &amp;&amp; (b + &quot;&quot;) === &quot;4,5&quot; &amp;&amp;
   c === 6 &amp;&amp; d instanceof Array &amp;&amp; d.length === 0;</div>}
```
###nested rest
          
```
function(){
              <div class="code">var a = [1, 2, 3], first, last;
[first, ...[a[2], last]] = a;
return first === 1 &amp;&amp; last === 3 &amp;&amp; (a + &quot;&quot;) === &quot;1,2,2&quot;;</div>}
```
###empty patterns
          
```
function(){
              <div class="code">[] = [1,2];
({} = {a:1,b:2});
return true;</div>}
```
###defaults
          
```
function(){
              <div class="code">var a,b,c,d,e,f;
({a = 1, b = 0, z:c = 3} = {b:2, z:undefined});
[d = 0, e = 5, f = 6] = [4,,undefined];
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === 3
  &amp;&amp; d === 4 &amp;&amp; e === 5 &amp;&amp; f === 6;</div>}
```
###with arrays
          
```
function(){
              <div class="code">var a,b,c;
[a, , [b], c] = [5, null, [6]];
return a === 5 &amp;&amp; b === 6 &amp;&amp; c === undefined;</div>}
```
###with sparse arrays
          
```
function(){
              <div class="code">var a, b;
[a, , b] = [,,,];
return a === undefined &amp;&amp; b === undefined;</div>}
```
###with strings
          
```
function(){
              <div class="code">var a,b,c;
[a, b, c] = &quot;ab&quot;;
return a === &quot;a&quot; &amp;&amp; b === &quot;b&quot; &amp;&amp; c === undefined;</div>}
```
###with astral plane strings
          
```
function(){
              <div class="code">var c;
[c] = &quot;𠮷𠮶&quot;;
return c === &quot;𠮷&quot;;</div>}
```
###with generator instances
          
```
function(){
              <div class="code">var a,b,c;
[a, b, c] = (function*(){ yield 1; yield 2; }());
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;</div>}
```
###with generic iterables
          
```
function(){
              <div class="code">var a,b,c;
[a, b, c] = global.__createIterableObject([1, 2]);
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;</div>}
```
###with instances of generic iterables
          
```
function(){
              <div class="code">var a,b,c;
[a, b, c] = Object.create(global.__createIterableObject([1, 2]));
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;</div>}
```
###iterable destructuring expression
          
```
function(){
              <div class="code">var a, b, iterable = [1,2];
return ([a, b] = iterable) === iterable;</div>}
```
###chained iterable destructuring
          
```
function(){
              <div class="code">var a,b,c,d;
[a,b] = [c,d] = [1,2];
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === 1 &amp;&amp; d === 2;</div>}
```
###trailing commas in iterable patterns
          
```
function(){
              <div class="code">var a;
[a,] = [1];
return a === 1;</div>}
```
###with objects
          
```
function(){
              <div class="code">var c,d,e;
({c, x:d, e} = {c:7, x:8});
return c === 7 &amp;&amp; d === 8 &amp;&amp; e === undefined;</div>}
```
###object destructuring with primitives
          
```
function(){
              <div class="code">var toFixed, slice;
({toFixed} = 2);
({slice} = '');
return toFixed === Number.prototype.toFixed
  &amp;&amp; slice === String.prototype.slice;</div>}
```
###trailing commas in object patterns
          
```
function(){
              <div class="code">var a;
({a,} = {a:1});
return a === 1;</div>}
```
###object destructuring expression
          
```
function(){
              <div class="code">var a, b, obj = { a:1, b:2 };
return ({a,b} = obj) === obj;</div>}
```
###parenthesised left-hand-side is a syntax error
          
```
function(){
              <div class="code">var a, b;
({a,b} = {a:1,b:2});
try {
  eval(&quot;({a,b}) = {a:3,b:4};&quot;);
}
catch(e) {
  return a === 1 &amp;&amp; b === 2;
}</div>}
```
###chained object destructuring
          
```
function(){
              <div class="code">var a,b,c,d;
({a,b} = {c,d} = {a:1,b:2,c:3,d:4});
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === 3 &amp;&amp; d === 4;</div>}
```
###throws on null and undefined
          
```
function(){
              <div class="code">var a,b;
try {
  ({a} = null);
  return false;
} catch(e) {}
try {
  ({b} = undefined);
  return false;
} catch(e) {}
return true;</div>}
```
###computed properties
          
```
function(){
              <div class="code">var grault, qux = &quot;corge&quot;;
({ [qux]: grault } = { corge: &quot;garply&quot; });
return grault === &quot;garply&quot;;</div>}
```
###nested
          
```
function(){
              <div class="code">var e,f,g,h,i;
[e, {x:f, g}] = [9, {x:10}];
({h, x:[i]} = {h:11, x:[12]});
return e === 9 &amp;&amp; f === 10 &amp;&amp; g === undefined
  &amp;&amp; h === 11 &amp;&amp; i === 12;</div>}
```
###rest
          
```
function(){
              <div class="code">var a,b,c,d;
[a, ...b] = [3, 4, 5];
[c, ...d] = [6];
return a === 3 &amp;&amp; b instanceof Array &amp;&amp; (b + &quot;&quot;) === &quot;4,5&quot; &amp;&amp;
   c === 6 &amp;&amp; d instanceof Array &amp;&amp; d.length === 0;</div>}
```
###nested rest
          
```
function(){
              <div class="code">var a = [1, 2, 3], first, last;
[first, ...[a[2], last]] = a;
return first === 1 &amp;&amp; last === 3 &amp;&amp; (a + &quot;&quot;) === &quot;1,2,2&quot;;</div>}
```
###empty patterns
          
```
function(){
              <div class="code">[] = [1,2];
({} = {a:1,b:2});
return true;</div>}
```
###defaults
          
```
function(){
              <div class="code">var a,b,c,d,e,f;
({a = 1, b = 0, z:c = 3} = {b:2, z:undefined});
[d = 0, e = 5, f = 6] = [4,,undefined];
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === 3
  &amp;&amp; d === 4 &amp;&amp; e === 5 &amp;&amp; f === 6;</div>}
```
###with arrays
          
```
function(){
              <div class="code">var a,b,c;
[a, , [b], c] = [5, null, [6]];
return a === 5 &amp;&amp; b === 6 &amp;&amp; c === undefined;</div>}
```
###with sparse arrays
          
```
function(){
              <div class="code">var a, b;
[a, , b] = [,,,];
return a === undefined &amp;&amp; b === undefined;</div>}
```
###with strings
          
```
function(){
              <div class="code">var a,b,c;
[a, b, c] = &quot;ab&quot;;
return a === &quot;a&quot; &amp;&amp; b === &quot;b&quot; &amp;&amp; c === undefined;</div>}
```
###with astral plane strings
          
```
function(){
              <div class="code">var c;
[c] = &quot;𠮷𠮶&quot;;
return c === &quot;𠮷&quot;;</div>}
```
###with generator instances
          
```
function(){
              <div class="code">var a,b,c;
[a, b, c] = (function*(){ yield 1; yield 2; }());
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;</div>}
```
###with generic iterables
          
```
function(){
              <div class="code">var a,b,c;
[a, b, c] = global.__createIterableObject([1, 2]);
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;</div>}
```
###with instances of generic iterables
          
```
function(){
              <div class="code">var a,b,c;
[a, b, c] = Object.create(global.__createIterableObject([1, 2]));
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;</div>}
```
###iterable destructuring expression
          
```
function(){
              <div class="code">var a, b, iterable = [1,2];
return ([a, b] = iterable) === iterable;</div>}
```
###chained iterable destructuring
          
```
function(){
              <div class="code">var a,b,c,d;
[a,b] = [c,d] = [1,2];
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === 1 &amp;&amp; d === 2;</div>}
```
###trailing commas in iterable patterns
          
```
function(){
              <div class="code">var a;
[a,] = [1];
return a === 1;</div>}
```
###with objects
          
```
function(){
              <div class="code">var c,d,e;
({c, x:d, e} = {c:7, x:8});
return c === 7 &amp;&amp; d === 8 &amp;&amp; e === undefined;</div>}
```
###object destructuring with primitives
          
```
function(){
              <div class="code">var toFixed, slice;
({toFixed} = 2);
({slice} = '');
return toFixed === Number.prototype.toFixed
  &amp;&amp; slice === String.prototype.slice;</div>}
```
###trailing commas in object patterns
          
```
function(){
              <div class="code">var a;
({a,} = {a:1});
return a === 1;</div>}
```
###object destructuring expression
          
```
function(){
              <div class="code">var a, b, obj = { a:1, b:2 };
return ({a,b} = obj) === obj;</div>}
```
###parenthesised left-hand-side is a syntax error
          
```
function(){
              <div class="code">var a, b;
({a,b} = {a:1,b:2});
try {
  eval(&quot;({a,b}) = {a:3,b:4};&quot;);
}
catch(e) {
  return a === 1 &amp;&amp; b === 2;
}</div>}
```
###chained object destructuring
          
```
function(){
              <div class="code">var a,b,c,d;
({a,b} = {c,d} = {a:1,b:2,c:3,d:4});
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === 3 &amp;&amp; d === 4;</div>}
```
###throws on null and undefined
          
```
function(){
              <div class="code">var a,b;
try {
  ({a} = null);
  return false;
} catch(e) {}
try {
  ({b} = undefined);
  return false;
} catch(e) {}
return true;</div>}
```
###computed properties
          
```
function(){
              <div class="code">var grault, qux = &quot;corge&quot;;
({ [qux]: grault } = { corge: &quot;garply&quot; });
return grault === &quot;garply&quot;;</div>}
```
###nested
          
```
function(){
              <div class="code">var e,f,g,h,i;
[e, {x:f, g}] = [9, {x:10}];
({h, x:[i]} = {h:11, x:[12]});
return e === 9 &amp;&amp; f === 10 &amp;&amp; g === undefined
  &amp;&amp; h === 11 &amp;&amp; i === 12;</div>}
```
###rest
          
```
function(){
              <div class="code">var a,b,c,d;
[a, ...b] = [3, 4, 5];
[c, ...d] = [6];
return a === 3 &amp;&amp; b instanceof Array &amp;&amp; (b + &quot;&quot;) === &quot;4,5&quot; &amp;&amp;
   c === 6 &amp;&amp; d instanceof Array &amp;&amp; d.length === 0;</div>}
```
###nested rest
          
```
function(){
              <div class="code">var a = [1, 2, 3], first, last;
[first, ...[a[2], last]] = a;
return first === 1 &amp;&amp; last === 3 &amp;&amp; (a + &quot;&quot;) === &quot;1,2,2&quot;;</div>}
```
###empty patterns
          
```
function(){
              <div class="code">[] = [1,2];
({} = {a:1,b:2});
return true;</div>}
```
###defaults
          
```
function(){
              <div class="code">var a,b,c,d,e,f;
({a = 1, b = 0, z:c = 3} = {b:2, z:undefined});
[d = 0, e = 5, f = 6] = [4,,undefined];
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === 3
  &amp;&amp; d === 4 &amp;&amp; e === 5 &amp;&amp; f === 6;</div>}
```
###with arrays
          
```
function(){
              <div class="code">var a,b,c;
[a, , [b], c] = [5, null, [6]];
return a === 5 &amp;&amp; b === 6 &amp;&amp; c === undefined;</div>}
```
###with sparse arrays
          
```
function(){
              <div class="code">var a, b;
[a, , b] = [,,,];
return a === undefined &amp;&amp; b === undefined;</div>}
```
###with strings
          
```
function(){
              <div class="code">var a,b,c;
[a, b, c] = &quot;ab&quot;;
return a === &quot;a&quot; &amp;&amp; b === &quot;b&quot; &amp;&amp; c === undefined;</div>}
```
###with astral plane strings
          
```
function(){
              <div class="code">var c;
[c] = &quot;𠮷𠮶&quot;;
return c === &quot;𠮷&quot;;</div>}
```
###with generator instances
          
```
function(){
              <div class="code">var a,b,c;
[a, b, c] = (function*(){ yield 1; yield 2; }());
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;</div>}
```
###with generic iterables
          
```
function(){
              <div class="code">var a,b,c;
[a, b, c] = global.__createIterableObject([1, 2]);
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;</div>}
```
###with instances of generic iterables
          
```
function(){
              <div class="code">var a,b,c;
[a, b, c] = Object.create(global.__createIterableObject([1, 2]));
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;</div>}
```
###iterable destructuring expression
          
```
function(){
              <div class="code">var a, b, iterable = [1,2];
return ([a, b] = iterable) === iterable;</div>}
```
###chained iterable destructuring
          
```
function(){
              <div class="code">var a,b,c,d;
[a,b] = [c,d] = [1,2];
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === 1 &amp;&amp; d === 2;</div>}
```
###trailing commas in iterable patterns
          
```
function(){
              <div class="code">var a;
[a,] = [1];
return a === 1;</div>}
```
###with objects
          
```
function(){
              <div class="code">var c,d,e;
({c, x:d, e} = {c:7, x:8});
return c === 7 &amp;&amp; d === 8 &amp;&amp; e === undefined;</div>}
```
###object destructuring with primitives
          
```
function(){
              <div class="code">var toFixed, slice;
({toFixed} = 2);
({slice} = '');
return toFixed === Number.prototype.toFixed
  &amp;&amp; slice === String.prototype.slice;</div>}
```
###trailing commas in object patterns
          
```
function(){
              <div class="code">var a;
({a,} = {a:1});
return a === 1;</div>}
```
###object destructuring expression
          
```
function(){
              <div class="code">var a, b, obj = { a:1, b:2 };
return ({a,b} = obj) === obj;</div>}
```
###parenthesised left-hand-side is a syntax error
          
```
function(){
              <div class="code">var a, b;
({a,b} = {a:1,b:2});
try {
  eval(&quot;({a,b}) = {a:3,b:4};&quot;);
}
catch(e) {
  return a === 1 &amp;&amp; b === 2;
}</div>}
```
###chained object destructuring
          
```
function(){
              <div class="code">var a,b,c,d;
({a,b} = {c,d} = {a:1,b:2,c:3,d:4});
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === 3 &amp;&amp; d === 4;</div>}
```
###throws on null and undefined
          
```
function(){
              <div class="code">var a,b;
try {
  ({a} = null);
  return false;
} catch(e) {}
try {
  ({b} = undefined);
  return false;
} catch(e) {}
return true;</div>}
```
###computed properties
          
```
function(){
              <div class="code">var grault, qux = &quot;corge&quot;;
({ [qux]: grault } = { corge: &quot;garply&quot; });
return grault === &quot;garply&quot;;</div>}
```
###nested
          
```
function(){
              <div class="code">var e,f,g,h,i;
[e, {x:f, g}] = [9, {x:10}];
({h, x:[i]} = {h:11, x:[12]});
return e === 9 &amp;&amp; f === 10 &amp;&amp; g === undefined
  &amp;&amp; h === 11 &amp;&amp; i === 12;</div>}
```
###rest
          
```
function(){
              <div class="code">var a,b,c,d;
[a, ...b] = [3, 4, 5];
[c, ...d] = [6];
return a === 3 &amp;&amp; b instanceof Array &amp;&amp; (b + &quot;&quot;) === &quot;4,5&quot; &amp;&amp;
   c === 6 &amp;&amp; d instanceof Array &amp;&amp; d.length === 0;</div>}
```
###nested rest
          
```
function(){
              <div class="code">var a = [1, 2, 3], first, last;
[first, ...[a[2], last]] = a;
return first === 1 &amp;&amp; last === 3 &amp;&amp; (a + &quot;&quot;) === &quot;1,2,2&quot;;</div>}
```
###empty patterns
          
```
function(){
              <div class="code">[] = [1,2];
({} = {a:1,b:2});
return true;</div>}
```
###defaults
          
```
function(){
              <div class="code">var a,b,c,d,e,f;
({a = 1, b = 0, z:c = 3} = {b:2, z:undefined});
[d = 0, e = 5, f = 6] = [4,,undefined];
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === 3
  &amp;&amp; d === 4 &amp;&amp; e === 5 &amp;&amp; f === 6;</div>}
```
###with arrays
          
```
function(){
              <div class="code">var a,b,c;
[a, , [b], c] = [5, null, [6]];
return a === 5 &amp;&amp; b === 6 &amp;&amp; c === undefined;</div>}
```
###with sparse arrays
          
```
function(){
              <div class="code">var a, b;
[a, , b] = [,,,];
return a === undefined &amp;&amp; b === undefined;</div>}
```
###with strings
          
```
function(){
              <div class="code">var a,b,c;
[a, b, c] = &quot;ab&quot;;
return a === &quot;a&quot; &amp;&amp; b === &quot;b&quot; &amp;&amp; c === undefined;</div>}
```
###with astral plane strings
          
```
function(){
              <div class="code">var c;
[c] = &quot;𠮷𠮶&quot;;
return c === &quot;𠮷&quot;;</div>}
```
###with generator instances
          
```
function(){
              <div class="code">var a,b,c;
[a, b, c] = (function*(){ yield 1; yield 2; }());
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;</div>}
```
###with generic iterables
          
```
function(){
              <div class="code">var a,b,c;
[a, b, c] = global.__createIterableObject([1, 2]);
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;</div>}
```
###with instances of generic iterables
          
```
function(){
              <div class="code">var a,b,c;
[a, b, c] = Object.create(global.__createIterableObject([1, 2]));
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;</div>}
```
###iterable destructuring expression
          
```
function(){
              <div class="code">var a, b, iterable = [1,2];
return ([a, b] = iterable) === iterable;</div>}
```
###chained iterable destructuring
          
```
function(){
              <div class="code">var a,b,c,d;
[a,b] = [c,d] = [1,2];
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === 1 &amp;&amp; d === 2;</div>}
```
###trailing commas in iterable patterns
          
```
function(){
              <div class="code">var a;
[a,] = [1];
return a === 1;</div>}
```
###with objects
          
```
function(){
              <div class="code">var c,d,e;
({c, x:d, e} = {c:7, x:8});
return c === 7 &amp;&amp; d === 8 &amp;&amp; e === undefined;</div>}
```
###object destructuring with primitives
          
```
function(){
              <div class="code">var toFixed, slice;
({toFixed} = 2);
({slice} = '');
return toFixed === Number.prototype.toFixed
  &amp;&amp; slice === String.prototype.slice;</div>}
```
###trailing commas in object patterns
          
```
function(){
              <div class="code">var a;
({a,} = {a:1});
return a === 1;</div>}
```
###object destructuring expression
          
```
function(){
              <div class="code">var a, b, obj = { a:1, b:2 };
return ({a,b} = obj) === obj;</div>}
```
###parenthesised left-hand-side is a syntax error
          
```
function(){
              <div class="code">var a, b;
({a,b} = {a:1,b:2});
try {
  eval(&quot;({a,b}) = {a:3,b:4};&quot;);
}
catch(e) {
  return a === 1 &amp;&amp; b === 2;
}</div>}
```
###chained object destructuring
          
```
function(){
              <div class="code">var a,b,c,d;
({a,b} = {c,d} = {a:1,b:2,c:3,d:4});
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === 3 &amp;&amp; d === 4;</div>}
```
###throws on null and undefined
          
```
function(){
              <div class="code">var a,b;
try {
  ({a} = null);
  return false;
} catch(e) {}
try {
  ({b} = undefined);
  return false;
} catch(e) {}
return true;</div>}
```
###computed properties
          
```
function(){
              <div class="code">var grault, qux = &quot;corge&quot;;
({ [qux]: grault } = { corge: &quot;garply&quot; });
return grault === &quot;garply&quot;;</div>}
```
###nested
          
```
function(){
              <div class="code">var e,f,g,h,i;
[e, {x:f, g}] = [9, {x:10}];
({h, x:[i]} = {h:11, x:[12]});
return e === 9 &amp;&amp; f === 10 &amp;&amp; g === undefined
  &amp;&amp; h === 11 &amp;&amp; i === 12;</div>}
```
###rest
          
```
function(){
              <div class="code">var a,b,c,d;
[a, ...b] = [3, 4, 5];
[c, ...d] = [6];
return a === 3 &amp;&amp; b instanceof Array &amp;&amp; (b + &quot;&quot;) === &quot;4,5&quot; &amp;&amp;
   c === 6 &amp;&amp; d instanceof Array &amp;&amp; d.length === 0;</div>}
```
###nested rest
          
```
function(){
              <div class="code">var a = [1, 2, 3], first, last;
[first, ...[a[2], last]] = a;
return first === 1 &amp;&amp; last === 3 &amp;&amp; (a + &quot;&quot;) === &quot;1,2,2&quot;;</div>}
```
###empty patterns
          
```
function(){
              <div class="code">[] = [1,2];
({} = {a:1,b:2});
return true;</div>}
```
###defaults
          
```
function(){
              <div class="code">var a,b,c,d,e,f;
({a = 1, b = 0, z:c = 3} = {b:2, z:undefined});
[d = 0, e = 5, f = 6] = [4,,undefined];
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === 3
  &amp;&amp; d === 4 &amp;&amp; e === 5 &amp;&amp; f === 6;</div>}
```
###with arrays
          
```
function(){
              <div class="code">var a,b,c;
[a, , [b], c] = [5, null, [6]];
return a === 5 &amp;&amp; b === 6 &amp;&amp; c === undefined;</div>}
```
###with sparse arrays
          
```
function(){
              <div class="code">var a, b;
[a, , b] = [,,,];
return a === undefined &amp;&amp; b === undefined;</div>}
```
###with strings
          
```
function(){
              <div class="code">var a,b,c;
[a, b, c] = &quot;ab&quot;;
return a === &quot;a&quot; &amp;&amp; b === &quot;b&quot; &amp;&amp; c === undefined;</div>}
```
###with astral plane strings
          
```
function(){
              <div class="code">var c;
[c] = &quot;𠮷𠮶&quot;;
return c === &quot;𠮷&quot;;</div>}
```
###with generator instances
          
```
function(){
              <div class="code">var a,b,c;
[a, b, c] = (function*(){ yield 1; yield 2; }());
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;</div>}
```
###with generic iterables
          
```
function(){
              <div class="code">var a,b,c;
[a, b, c] = global.__createIterableObject([1, 2]);
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;</div>}
```
###with instances of generic iterables
          
```
function(){
              <div class="code">var a,b,c;
[a, b, c] = Object.create(global.__createIterableObject([1, 2]));
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;</div>}
```
###iterable destructuring expression
          
```
function(){
              <div class="code">var a, b, iterable = [1,2];
return ([a, b] = iterable) === iterable;</div>}
```
###chained iterable destructuring
          
```
function(){
              <div class="code">var a,b,c,d;
[a,b] = [c,d] = [1,2];
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === 1 &amp;&amp; d === 2;</div>}
```
###trailing commas in iterable patterns
          
```
function(){
              <div class="code">var a;
[a,] = [1];
return a === 1;</div>}
```
###with objects
          
```
function(){
              <div class="code">var c,d,e;
({c, x:d, e} = {c:7, x:8});
return c === 7 &amp;&amp; d === 8 &amp;&amp; e === undefined;</div>}
```
###object destructuring with primitives
          
```
function(){
              <div class="code">var toFixed, slice;
({toFixed} = 2);
({slice} = '');
return toFixed === Number.prototype.toFixed
  &amp;&amp; slice === String.prototype.slice;</div>}
```
###trailing commas in object patterns
          
```
function(){
              <div class="code">var a;
({a,} = {a:1});
return a === 1;</div>}
```
###object destructuring expression
          
```
function(){
              <div class="code">var a, b, obj = { a:1, b:2 };
return ({a,b} = obj) === obj;</div>}
```
###parenthesised left-hand-side is a syntax error
          
```
function(){
              <div class="code">var a, b;
({a,b} = {a:1,b:2});
try {
  eval(&quot;({a,b}) = {a:3,b:4};&quot;);
}
catch(e) {
  return a === 1 &amp;&amp; b === 2;
}</div>}
```
###chained object destructuring
          
```
function(){
              <div class="code">var a,b,c,d;
({a,b} = {c,d} = {a:1,b:2,c:3,d:4});
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === 3 &amp;&amp; d === 4;</div>}
```
###throws on null and undefined
          
```
function(){
              <div class="code">var a,b;
try {
  ({a} = null);
  return false;
} catch(e) {}
try {
  ({b} = undefined);
  return false;
} catch(e) {}
return true;</div>}
```
###computed properties
          
```
function(){
              <div class="code">var grault, qux = &quot;corge&quot;;
({ [qux]: grault } = { corge: &quot;garply&quot; });
return grault === &quot;garply&quot;;</div>}
```
###nested
          
```
function(){
              <div class="code">var e,f,g,h,i;
[e, {x:f, g}] = [9, {x:10}];
({h, x:[i]} = {h:11, x:[12]});
return e === 9 &amp;&amp; f === 10 &amp;&amp; g === undefined
  &amp;&amp; h === 11 &amp;&amp; i === 12;</div>}
```
###rest
          
```
function(){
              <div class="code">var a,b,c,d;
[a, ...b] = [3, 4, 5];
[c, ...d] = [6];
return a === 3 &amp;&amp; b instanceof Array &amp;&amp; (b + &quot;&quot;) === &quot;4,5&quot; &amp;&amp;
   c === 6 &amp;&amp; d instanceof Array &amp;&amp; d.length === 0;</div>}
```
###nested rest
          
```
function(){
              <div class="code">var a = [1, 2, 3], first, last;
[first, ...[a[2], last]] = a;
return first === 1 &amp;&amp; last === 3 &amp;&amp; (a + &quot;&quot;) === &quot;1,2,2&quot;;</div>}
```
###empty patterns
          
```
function(){
              <div class="code">[] = [1,2];
({} = {a:1,b:2});
return true;</div>}
```
###defaults
          
```
function(){
              <div class="code">var a,b,c,d,e,f;
({a = 1, b = 0, z:c = 3} = {b:2, z:undefined});
[d = 0, e = 5, f = 6] = [4,,undefined];
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === 3
  &amp;&amp; d === 4 &amp;&amp; e === 5 &amp;&amp; f === 6;</div>}
```
###with arrays
          
```
function(){
              <div class="code">var a,b,c;
[a, , [b], c] = [5, null, [6]];
return a === 5 &amp;&amp; b === 6 &amp;&amp; c === undefined;</div>}
```
###with sparse arrays
          
```
function(){
              <div class="code">var a, b;
[a, , b] = [,,,];
return a === undefined &amp;&amp; b === undefined;</div>}
```
###with strings
          
```
function(){
              <div class="code">var a,b,c;
[a, b, c] = &quot;ab&quot;;
return a === &quot;a&quot; &amp;&amp; b === &quot;b&quot; &amp;&amp; c === undefined;</div>}
```
###with astral plane strings
          
```
function(){
              <div class="code">var c;
[c] = &quot;𠮷𠮶&quot;;
return c === &quot;𠮷&quot;;</div>}
```
###with generator instances
          
```
function(){
              <div class="code">var a,b,c;
[a, b, c] = (function*(){ yield 1; yield 2; }());
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;</div>}
```
###with generic iterables
          
```
function(){
              <div class="code">var a,b,c;
[a, b, c] = global.__createIterableObject([1, 2]);
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;</div>}
```
###with instances of generic iterables
          
```
function(){
              <div class="code">var a,b,c;
[a, b, c] = Object.create(global.__createIterableObject([1, 2]));
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;</div>}
```
###iterable destructuring expression
          
```
function(){
              <div class="code">var a, b, iterable = [1,2];
return ([a, b] = iterable) === iterable;</div>}
```
###chained iterable destructuring
          
```
function(){
              <div class="code">var a,b,c,d;
[a,b] = [c,d] = [1,2];
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === 1 &amp;&amp; d === 2;</div>}
```
###trailing commas in iterable patterns
          
```
function(){
              <div class="code">var a;
[a,] = [1];
return a === 1;</div>}
```
###with objects
          
```
function(){
              <div class="code">var c,d,e;
({c, x:d, e} = {c:7, x:8});
return c === 7 &amp;&amp; d === 8 &amp;&amp; e === undefined;</div>}
```
###object destructuring with primitives
          
```
function(){
              <div class="code">var toFixed, slice;
({toFixed} = 2);
({slice} = '');
return toFixed === Number.prototype.toFixed
  &amp;&amp; slice === String.prototype.slice;</div>}
```
###trailing commas in object patterns
          
```
function(){
              <div class="code">var a;
({a,} = {a:1});
return a === 1;</div>}
```
###object destructuring expression
          
```
function(){
              <div class="code">var a, b, obj = { a:1, b:2 };
return ({a,b} = obj) === obj;</div>}
```
###parenthesised left-hand-side is a syntax error
          
```
function(){
              <div class="code">var a, b;
({a,b} = {a:1,b:2});
try {
  eval(&quot;({a,b}) = {a:3,b:4};&quot;);
}
catch(e) {
  return a === 1 &amp;&amp; b === 2;
}</div>}
```
###chained object destructuring
          
```
function(){
              <div class="code">var a,b,c,d;
({a,b} = {c,d} = {a:1,b:2,c:3,d:4});
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === 3 &amp;&amp; d === 4;</div>}
```
###throws on null and undefined
          
```
function(){
              <div class="code">var a,b;
try {
  ({a} = null);
  return false;
} catch(e) {}
try {
  ({b} = undefined);
  return false;
} catch(e) {}
return true;</div>}
```
###computed properties
          
```
function(){
              <div class="code">var grault, qux = &quot;corge&quot;;
({ [qux]: grault } = { corge: &quot;garply&quot; });
return grault === &quot;garply&quot;;</div>}
```
###nested
          
```
function(){
              <div class="code">var e,f,g,h,i;
[e, {x:f, g}] = [9, {x:10}];
({h, x:[i]} = {h:11, x:[12]});
return e === 9 &amp;&amp; f === 10 &amp;&amp; g === undefined
  &amp;&amp; h === 11 &amp;&amp; i === 12;</div>}
```
###rest
          
```
function(){
              <div class="code">var a,b,c,d;
[a, ...b] = [3, 4, 5];
[c, ...d] = [6];
return a === 3 &amp;&amp; b instanceof Array &amp;&amp; (b + &quot;&quot;) === &quot;4,5&quot; &amp;&amp;
   c === 6 &amp;&amp; d instanceof Array &amp;&amp; d.length === 0;</div>}
```
###nested rest
          
```
function(){
              <div class="code">var a = [1, 2, 3], first, last;
[first, ...[a[2], last]] = a;
return first === 1 &amp;&amp; last === 3 &amp;&amp; (a + &quot;&quot;) === &quot;1,2,2&quot;;</div>}
```
###empty patterns
          
```
function(){
              <div class="code">[] = [1,2];
({} = {a:1,b:2});
return true;</div>}
```
###defaults
          
```
function(){
              <div class="code">var a,b,c,d,e,f;
({a = 1, b = 0, z:c = 3} = {b:2, z:undefined});
[d = 0, e = 5, f = 6] = [4,,undefined];
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === 3
  &amp;&amp; d === 4 &amp;&amp; e === 5 &amp;&amp; f === 6;</div>}
```
###with arrays
          
```
function(){
              <div class="code">var a,b,c;
[a, , [b], c] = [5, null, [6]];
return a === 5 &amp;&amp; b === 6 &amp;&amp; c === undefined;</div>}
```
###with sparse arrays
          
```
function(){
              <div class="code">var a, b;
[a, , b] = [,,,];
return a === undefined &amp;&amp; b === undefined;</div>}
```
###with strings
          
```
function(){
              <div class="code">var a,b,c;
[a, b, c] = &quot;ab&quot;;
return a === &quot;a&quot; &amp;&amp; b === &quot;b&quot; &amp;&amp; c === undefined;</div>}
```
###with astral plane strings
          
```
function(){
              <div class="code">var c;
[c] = &quot;𠮷𠮶&quot;;
return c === &quot;𠮷&quot;;</div>}
```
###with generator instances
          
```
function(){
              <div class="code">var a,b,c;
[a, b, c] = (function*(){ yield 1; yield 2; }());
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;</div>}
```
###with generic iterables
          
```
function(){
              <div class="code">var a,b,c;
[a, b, c] = global.__createIterableObject([1, 2]);
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;</div>}
```
###with instances of generic iterables
          
```
function(){
              <div class="code">var a,b,c;
[a, b, c] = Object.create(global.__createIterableObject([1, 2]));
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;</div>}
```
###iterable destructuring expression
          
```
function(){
              <div class="code">var a, b, iterable = [1,2];
return ([a, b] = iterable) === iterable;</div>}
```
###chained iterable destructuring
          
```
function(){
              <div class="code">var a,b,c,d;
[a,b] = [c,d] = [1,2];
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === 1 &amp;&amp; d === 2;</div>}
```
###trailing commas in iterable patterns
          
```
function(){
              <div class="code">var a;
[a,] = [1];
return a === 1;</div>}
```
###with objects
          
```
function(){
              <div class="code">var c,d,e;
({c, x:d, e} = {c:7, x:8});
return c === 7 &amp;&amp; d === 8 &amp;&amp; e === undefined;</div>}
```
###object destructuring with primitives
          
```
function(){
              <div class="code">var toFixed, slice;
({toFixed} = 2);
({slice} = '');
return toFixed === Number.prototype.toFixed
  &amp;&amp; slice === String.prototype.slice;</div>}
```
###trailing commas in object patterns
          
```
function(){
              <div class="code">var a;
({a,} = {a:1});
return a === 1;</div>}
```
###object destructuring expression
          
```
function(){
              <div class="code">var a, b, obj = { a:1, b:2 };
return ({a,b} = obj) === obj;</div>}
```
###parenthesised left-hand-side is a syntax error
          
```
function(){
              <div class="code">var a, b;
({a,b} = {a:1,b:2});
try {
  eval(&quot;({a,b}) = {a:3,b:4};&quot;);
}
catch(e) {
  return a === 1 &amp;&amp; b === 2;
}</div>}
```
###chained object destructuring
          
```
function(){
              <div class="code">var a,b,c,d;
({a,b} = {c,d} = {a:1,b:2,c:3,d:4});
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === 3 &amp;&amp; d === 4;</div>}
```
###throws on null and undefined
          
```
function(){
              <div class="code">var a,b;
try {
  ({a} = null);
  return false;
} catch(e) {}
try {
  ({b} = undefined);
  return false;
} catch(e) {}
return true;</div>}
```
###computed properties
          
```
function(){
              <div class="code">var grault, qux = &quot;corge&quot;;
({ [qux]: grault } = { corge: &quot;garply&quot; });
return grault === &quot;garply&quot;;</div>}
```
###nested
          
```
function(){
              <div class="code">var e,f,g,h,i;
[e, {x:f, g}] = [9, {x:10}];
({h, x:[i]} = {h:11, x:[12]});
return e === 9 &amp;&amp; f === 10 &amp;&amp; g === undefined
  &amp;&amp; h === 11 &amp;&amp; i === 12;</div>}
```
###rest
          
```
function(){
              <div class="code">var a,b,c,d;
[a, ...b] = [3, 4, 5];
[c, ...d] = [6];
return a === 3 &amp;&amp; b instanceof Array &amp;&amp; (b + &quot;&quot;) === &quot;4,5&quot; &amp;&amp;
   c === 6 &amp;&amp; d instanceof Array &amp;&amp; d.length === 0;</div>}
```
###nested rest
          
```
function(){
              <div class="code">var a = [1, 2, 3], first, last;
[first, ...[a[2], last]] = a;
return first === 1 &amp;&amp; last === 3 &amp;&amp; (a + &quot;&quot;) === &quot;1,2,2&quot;;</div>}
```
###empty patterns
          
```
function(){
              <div class="code">[] = [1,2];
({} = {a:1,b:2});
return true;</div>}
```
###defaults
          
```
function(){
              <div class="code">var a,b,c,d,e,f;
({a = 1, b = 0, z:c = 3} = {b:2, z:undefined});
[d = 0, e = 5, f = 6] = [4,,undefined];
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === 3
  &amp;&amp; d === 4 &amp;&amp; e === 5 &amp;&amp; f === 6;</div>}
```
###with arrays
          
```
function(){
              <div class="code">var a,b,c;
[a, , [b], c] = [5, null, [6]];
return a === 5 &amp;&amp; b === 6 &amp;&amp; c === undefined;</div>}
```
###with sparse arrays
          
```
function(){
              <div class="code">var a, b;
[a, , b] = [,,,];
return a === undefined &amp;&amp; b === undefined;</div>}
```
###with strings
          
```
function(){
              <div class="code">var a,b,c;
[a, b, c] = &quot;ab&quot;;
return a === &quot;a&quot; &amp;&amp; b === &quot;b&quot; &amp;&amp; c === undefined;</div>}
```
###with astral plane strings
          
```
function(){
              <div class="code">var c;
[c] = &quot;𠮷𠮶&quot;;
return c === &quot;𠮷&quot;;</div>}
```
###with generator instances
          
```
function(){
              <div class="code">var a,b,c;
[a, b, c] = (function*(){ yield 1; yield 2; }());
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;</div>}
```
###with generic iterables
          
```
function(){
              <div class="code">var a,b,c;
[a, b, c] = global.__createIterableObject([1, 2]);
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;</div>}
```
###with instances of generic iterables
          
```
function(){
              <div class="code">var a,b,c;
[a, b, c] = Object.create(global.__createIterableObject([1, 2]));
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;</div>}
```
###iterable destructuring expression
          
```
function(){
              <div class="code">var a, b, iterable = [1,2];
return ([a, b] = iterable) === iterable;</div>}
```
###chained iterable destructuring
          
```
function(){
              <div class="code">var a,b,c,d;
[a,b] = [c,d] = [1,2];
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === 1 &amp;&amp; d === 2;</div>}
```
###trailing commas in iterable patterns
          
```
function(){
              <div class="code">var a;
[a,] = [1];
return a === 1;</div>}
```
###with objects
          
```
function(){
              <div class="code">var c,d,e;
({c, x:d, e} = {c:7, x:8});
return c === 7 &amp;&amp; d === 8 &amp;&amp; e === undefined;</div>}
```
###object destructuring with primitives
          
```
function(){
              <div class="code">var toFixed, slice;
({toFixed} = 2);
({slice} = '');
return toFixed === Number.prototype.toFixed
  &amp;&amp; slice === String.prototype.slice;</div>}
```
###trailing commas in object patterns
          
```
function(){
              <div class="code">var a;
({a,} = {a:1});
return a === 1;</div>}
```
###object destructuring expression
          
```
function(){
              <div class="code">var a, b, obj = { a:1, b:2 };
return ({a,b} = obj) === obj;</div>}
```
###parenthesised left-hand-side is a syntax error
          
```
function(){
              <div class="code">var a, b;
({a,b} = {a:1,b:2});
try {
  eval(&quot;({a,b}) = {a:3,b:4};&quot;);
}
catch(e) {
  return a === 1 &amp;&amp; b === 2;
}</div>}
```
###chained object destructuring
          
```
function(){
              <div class="code">var a,b,c,d;
({a,b} = {c,d} = {a:1,b:2,c:3,d:4});
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === 3 &amp;&amp; d === 4;</div>}
```
###throws on null and undefined
          
```
function(){
              <div class="code">var a,b;
try {
  ({a} = null);
  return false;
} catch(e) {}
try {
  ({b} = undefined);
  return false;
} catch(e) {}
return true;</div>}
```
###computed properties
          
```
function(){
              <div class="code">var grault, qux = &quot;corge&quot;;
({ [qux]: grault } = { corge: &quot;garply&quot; });
return grault === &quot;garply&quot;;</div>}
```
###nested
          
```
function(){
              <div class="code">var e,f,g,h,i;
[e, {x:f, g}] = [9, {x:10}];
({h, x:[i]} = {h:11, x:[12]});
return e === 9 &amp;&amp; f === 10 &amp;&amp; g === undefined
  &amp;&amp; h === 11 &amp;&amp; i === 12;</div>}
```
###rest
          
```
function(){
              <div class="code">var a,b,c,d;
[a, ...b] = [3, 4, 5];
[c, ...d] = [6];
return a === 3 &amp;&amp; b instanceof Array &amp;&amp; (b + &quot;&quot;) === &quot;4,5&quot; &amp;&amp;
   c === 6 &amp;&amp; d instanceof Array &amp;&amp; d.length === 0;</div>}
```
###nested rest
          
```
function(){
              <div class="code">var a = [1, 2, 3], first, last;
[first, ...[a[2], last]] = a;
return first === 1 &amp;&amp; last === 3 &amp;&amp; (a + &quot;&quot;) === &quot;1,2,2&quot;;</div>}
```
###empty patterns
          
```
function(){
              <div class="code">[] = [1,2];
({} = {a:1,b:2});
return true;</div>}
```
###defaults
          
```
function(){
              <div class="code">var a,b,c,d,e,f;
({a = 1, b = 0, z:c = 3} = {b:2, z:undefined});
[d = 0, e = 5, f = 6] = [4,,undefined];
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === 3
  &amp;&amp; d === 4 &amp;&amp; e === 5 &amp;&amp; f === 6;</div>}
```
###with arrays
          
```
function(){
              <div class="code">var a,b,c;
[a, , [b], c] = [5, null, [6]];
return a === 5 &amp;&amp; b === 6 &amp;&amp; c === undefined;</div>}
```
###with sparse arrays
          
```
function(){
              <div class="code">var a, b;
[a, , b] = [,,,];
return a === undefined &amp;&amp; b === undefined;</div>}
```
###with strings
          
```
function(){
              <div class="code">var a,b,c;
[a, b, c] = &quot;ab&quot;;
return a === &quot;a&quot; &amp;&amp; b === &quot;b&quot; &amp;&amp; c === undefined;</div>}
```
###with astral plane strings
          
```
function(){
              <div class="code">var c;
[c] = &quot;𠮷𠮶&quot;;
return c === &quot;𠮷&quot;;</div>}
```
###with generator instances
          
```
function(){
              <div class="code">var a,b,c;
[a, b, c] = (function*(){ yield 1; yield 2; }());
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;</div>}
```
###with generic iterables
          
```
function(){
              <div class="code">var a,b,c;
[a, b, c] = global.__createIterableObject([1, 2]);
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;</div>}
```
###with instances of generic iterables
          
```
function(){
              <div class="code">var a,b,c;
[a, b, c] = Object.create(global.__createIterableObject([1, 2]));
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;</div>}
```
###iterable destructuring expression
          
```
function(){
              <div class="code">var a, b, iterable = [1,2];
return ([a, b] = iterable) === iterable;</div>}
```
###chained iterable destructuring
          
```
function(){
              <div class="code">var a,b,c,d;
[a,b] = [c,d] = [1,2];
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === 1 &amp;&amp; d === 2;</div>}
```
###trailing commas in iterable patterns
          
```
function(){
              <div class="code">var a;
[a,] = [1];
return a === 1;</div>}
```
###with objects
          
```
function(){
              <div class="code">var c,d,e;
({c, x:d, e} = {c:7, x:8});
return c === 7 &amp;&amp; d === 8 &amp;&amp; e === undefined;</div>}
```
###object destructuring with primitives
          
```
function(){
              <div class="code">var toFixed, slice;
({toFixed} = 2);
({slice} = '');
return toFixed === Number.prototype.toFixed
  &amp;&amp; slice === String.prototype.slice;</div>}
```
###trailing commas in object patterns
          
```
function(){
              <div class="code">var a;
({a,} = {a:1});
return a === 1;</div>}
```
###object destructuring expression
          
```
function(){
              <div class="code">var a, b, obj = { a:1, b:2 };
return ({a,b} = obj) === obj;</div>}
```
###parenthesised left-hand-side is a syntax error
          
```
function(){
              <div class="code">var a, b;
({a,b} = {a:1,b:2});
try {
  eval(&quot;({a,b}) = {a:3,b:4};&quot;);
}
catch(e) {
  return a === 1 &amp;&amp; b === 2;
}</div>}
```
###chained object destructuring
          
```
function(){
              <div class="code">var a,b,c,d;
({a,b} = {c,d} = {a:1,b:2,c:3,d:4});
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === 3 &amp;&amp; d === 4;</div>}
```
###throws on null and undefined
          
```
function(){
              <div class="code">var a,b;
try {
  ({a} = null);
  return false;
} catch(e) {}
try {
  ({b} = undefined);
  return false;
} catch(e) {}
return true;</div>}
```
###computed properties
          
```
function(){
              <div class="code">var grault, qux = &quot;corge&quot;;
({ [qux]: grault } = { corge: &quot;garply&quot; });
return grault === &quot;garply&quot;;</div>}
```
###nested
          
```
function(){
              <div class="code">var e,f,g,h,i;
[e, {x:f, g}] = [9, {x:10}];
({h, x:[i]} = {h:11, x:[12]});
return e === 9 &amp;&amp; f === 10 &amp;&amp; g === undefined
  &amp;&amp; h === 11 &amp;&amp; i === 12;</div>}
```
###rest
          
```
function(){
              <div class="code">var a,b,c,d;
[a, ...b] = [3, 4, 5];
[c, ...d] = [6];
return a === 3 &amp;&amp; b instanceof Array &amp;&amp; (b + &quot;&quot;) === &quot;4,5&quot; &amp;&amp;
   c === 6 &amp;&amp; d instanceof Array &amp;&amp; d.length === 0;</div>}
```
###nested rest
          
```
function(){
              <div class="code">var a = [1, 2, 3], first, last;
[first, ...[a[2], last]] = a;
return first === 1 &amp;&amp; last === 3 &amp;&amp; (a + &quot;&quot;) === &quot;1,2,2&quot;;</div>}
```
###empty patterns
          
```
function(){
              <div class="code">[] = [1,2];
({} = {a:1,b:2});
return true;</div>}
```
###defaults
          
```
function(){
              <div class="code">var a,b,c,d,e,f;
({a = 1, b = 0, z:c = 3} = {b:2, z:undefined});
[d = 0, e = 5, f = 6] = [4,,undefined];
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === 3
  &amp;&amp; d === 4 &amp;&amp; e === 5 &amp;&amp; f === 6;</div>}
```
###with arrays
          
```
function(){
              <div class="code">var a,b,c;
[a, , [b], c] = [5, null, [6]];
return a === 5 &amp;&amp; b === 6 &amp;&amp; c === undefined;</div>}
```
###with sparse arrays
          
```
function(){
              <div class="code">var a, b;
[a, , b] = [,,,];
return a === undefined &amp;&amp; b === undefined;</div>}
```
###with strings
          
```
function(){
              <div class="code">var a,b,c;
[a, b, c] = &quot;ab&quot;;
return a === &quot;a&quot; &amp;&amp; b === &quot;b&quot; &amp;&amp; c === undefined;</div>}
```
###with astral plane strings
          
```
function(){
              <div class="code">var c;
[c] = &quot;𠮷𠮶&quot;;
return c === &quot;𠮷&quot;;</div>}
```
###with generator instances
          
```
function(){
              <div class="code">var a,b,c;
[a, b, c] = (function*(){ yield 1; yield 2; }());
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;</div>}
```
###with generic iterables
          
```
function(){
              <div class="code">var a,b,c;
[a, b, c] = global.__createIterableObject([1, 2]);
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;</div>}
```
###with instances of generic iterables
          
```
function(){
              <div class="code">var a,b,c;
[a, b, c] = Object.create(global.__createIterableObject([1, 2]));
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;</div>}
```
###iterable destructuring expression
          
```
function(){
              <div class="code">var a, b, iterable = [1,2];
return ([a, b] = iterable) === iterable;</div>}
```
###chained iterable destructuring
          
```
function(){
              <div class="code">var a,b,c,d;
[a,b] = [c,d] = [1,2];
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === 1 &amp;&amp; d === 2;</div>}
```
###trailing commas in iterable patterns
          
```
function(){
              <div class="code">var a;
[a,] = [1];
return a === 1;</div>}
```
###with objects
          
```
function(){
              <div class="code">var c,d,e;
({c, x:d, e} = {c:7, x:8});
return c === 7 &amp;&amp; d === 8 &amp;&amp; e === undefined;</div>}
```
###object destructuring with primitives
          
```
function(){
              <div class="code">var toFixed, slice;
({toFixed} = 2);
({slice} = '');
return toFixed === Number.prototype.toFixed
  &amp;&amp; slice === String.prototype.slice;</div>}
```
###trailing commas in object patterns
          
```
function(){
              <div class="code">var a;
({a,} = {a:1});
return a === 1;</div>}
```
###object destructuring expression
          
```
function(){
              <div class="code">var a, b, obj = { a:1, b:2 };
return ({a,b} = obj) === obj;</div>}
```
###parenthesised left-hand-side is a syntax error
          
```
function(){
              <div class="code">var a, b;
({a,b} = {a:1,b:2});
try {
  eval(&quot;({a,b}) = {a:3,b:4};&quot;);
}
catch(e) {
  return a === 1 &amp;&amp; b === 2;
}</div>}
```
###chained object destructuring
          
```
function(){
              <div class="code">var a,b,c,d;
({a,b} = {c,d} = {a:1,b:2,c:3,d:4});
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === 3 &amp;&amp; d === 4;</div>}
```
###throws on null and undefined
          
```
function(){
              <div class="code">var a,b;
try {
  ({a} = null);
  return false;
} catch(e) {}
try {
  ({b} = undefined);
  return false;
} catch(e) {}
return true;</div>}
```
###computed properties
          
```
function(){
              <div class="code">var grault, qux = &quot;corge&quot;;
({ [qux]: grault } = { corge: &quot;garply&quot; });
return grault === &quot;garply&quot;;</div>}
```
###nested
          
```
function(){
              <div class="code">var e,f,g,h,i;
[e, {x:f, g}] = [9, {x:10}];
({h, x:[i]} = {h:11, x:[12]});
return e === 9 &amp;&amp; f === 10 &amp;&amp; g === undefined
  &amp;&amp; h === 11 &amp;&amp; i === 12;</div>}
```
###rest
          
```
function(){
              <div class="code">var a,b,c,d;
[a, ...b] = [3, 4, 5];
[c, ...d] = [6];
return a === 3 &amp;&amp; b instanceof Array &amp;&amp; (b + &quot;&quot;) === &quot;4,5&quot; &amp;&amp;
   c === 6 &amp;&amp; d instanceof Array &amp;&amp; d.length === 0;</div>}
```
###nested rest
          
```
function(){
              <div class="code">var a = [1, 2, 3], first, last;
[first, ...[a[2], last]] = a;
return first === 1 &amp;&amp; last === 3 &amp;&amp; (a + &quot;&quot;) === &quot;1,2,2&quot;;</div>}
```
###empty patterns
          
```
function(){
              <div class="code">[] = [1,2];
({} = {a:1,b:2});
return true;</div>}
```
###defaults
          
```
function(){
              <div class="code">var a,b,c,d,e,f;
({a = 1, b = 0, z:c = 3} = {b:2, z:undefined});
[d = 0, e = 5, f = 6] = [4,,undefined];
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === 3
  &amp;&amp; d === 4 &amp;&amp; e === 5 &amp;&amp; f === 6;</div>}
```
###with arrays
          
```
function(){
              <div class="code">var a,b,c;
[a, , [b], c] = [5, null, [6]];
return a === 5 &amp;&amp; b === 6 &amp;&amp; c === undefined;</div>}
```
###with sparse arrays
          
```
function(){
              <div class="code">var a, b;
[a, , b] = [,,,];
return a === undefined &amp;&amp; b === undefined;</div>}
```
###with strings
          
```
function(){
              <div class="code">var a,b,c;
[a, b, c] = &quot;ab&quot;;
return a === &quot;a&quot; &amp;&amp; b === &quot;b&quot; &amp;&amp; c === undefined;</div>}
```
###with astral plane strings
          
```
function(){
              <div class="code">var c;
[c] = &quot;𠮷𠮶&quot;;
return c === &quot;𠮷&quot;;</div>}
```
###with generator instances
          
```
function(){
              <div class="code">var a,b,c;
[a, b, c] = (function*(){ yield 1; yield 2; }());
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;</div>}
```
###with generic iterables
          
```
function(){
              <div class="code">var a,b,c;
[a, b, c] = global.__createIterableObject([1, 2]);
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;</div>}
```
###with instances of generic iterables
          
```
function(){
              <div class="code">var a,b,c;
[a, b, c] = Object.create(global.__createIterableObject([1, 2]));
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;</div>}
```
###iterable destructuring expression
          
```
function(){
              <div class="code">var a, b, iterable = [1,2];
return ([a, b] = iterable) === iterable;</div>}
```
###chained iterable destructuring
          
```
function(){
              <div class="code">var a,b,c,d;
[a,b] = [c,d] = [1,2];
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === 1 &amp;&amp; d === 2;</div>}
```
###trailing commas in iterable patterns
          
```
function(){
              <div class="code">var a;
[a,] = [1];
return a === 1;</div>}
```
###with objects
          
```
function(){
              <div class="code">var c,d,e;
({c, x:d, e} = {c:7, x:8});
return c === 7 &amp;&amp; d === 8 &amp;&amp; e === undefined;</div>}
```
###object destructuring with primitives
          
```
function(){
              <div class="code">var toFixed, slice;
({toFixed} = 2);
({slice} = '');
return toFixed === Number.prototype.toFixed
  &amp;&amp; slice === String.prototype.slice;</div>}
```
###trailing commas in object patterns
          
```
function(){
              <div class="code">var a;
({a,} = {a:1});
return a === 1;</div>}
```
###object destructuring expression
          
```
function(){
              <div class="code">var a, b, obj = { a:1, b:2 };
return ({a,b} = obj) === obj;</div>}
```
###parenthesised left-hand-side is a syntax error
          
```
function(){
              <div class="code">var a, b;
({a,b} = {a:1,b:2});
try {
  eval(&quot;({a,b}) = {a:3,b:4};&quot;);
}
catch(e) {
  return a === 1 &amp;&amp; b === 2;
}</div>}
```
###chained object destructuring
          
```
function(){
              <div class="code">var a,b,c,d;
({a,b} = {c,d} = {a:1,b:2,c:3,d:4});
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === 3 &amp;&amp; d === 4;</div>}
```
###throws on null and undefined
          
```
function(){
              <div class="code">var a,b;
try {
  ({a} = null);
  return false;
} catch(e) {}
try {
  ({b} = undefined);
  return false;
} catch(e) {}
return true;</div>}
```
###computed properties
          
```
function(){
              <div class="code">var grault, qux = &quot;corge&quot;;
({ [qux]: grault } = { corge: &quot;garply&quot; });
return grault === &quot;garply&quot;;</div>}
```
###nested
          
```
function(){
              <div class="code">var e,f,g,h,i;
[e, {x:f, g}] = [9, {x:10}];
({h, x:[i]} = {h:11, x:[12]});
return e === 9 &amp;&amp; f === 10 &amp;&amp; g === undefined
  &amp;&amp; h === 11 &amp;&amp; i === 12;</div>}
```
###rest
          
```
function(){
              <div class="code">var a,b,c,d;
[a, ...b] = [3, 4, 5];
[c, ...d] = [6];
return a === 3 &amp;&amp; b instanceof Array &amp;&amp; (b + &quot;&quot;) === &quot;4,5&quot; &amp;&amp;
   c === 6 &amp;&amp; d instanceof Array &amp;&amp; d.length === 0;</div>}
```
###nested rest
          
```
function(){
              <div class="code">var a = [1, 2, 3], first, last;
[first, ...[a[2], last]] = a;
return first === 1 &amp;&amp; last === 3 &amp;&amp; (a + &quot;&quot;) === &quot;1,2,2&quot;;</div>}
```
###empty patterns
          
```
function(){
              <div class="code">[] = [1,2];
({} = {a:1,b:2});
return true;</div>}
```
###defaults
          
```
function(){
              <div class="code">var a,b,c,d,e,f;
({a = 1, b = 0, z:c = 3} = {b:2, z:undefined});
[d = 0, e = 5, f = 6] = [4,,undefined];
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === 3
  &amp;&amp; d === 4 &amp;&amp; e === 5 &amp;&amp; f === 6;</div>}
```
###with arrays
          
```
function(){
              <div class="code">var a,b,c;
[a, , [b], c] = [5, null, [6]];
return a === 5 &amp;&amp; b === 6 &amp;&amp; c === undefined;</div>}
```
###with sparse arrays
          
```
function(){
              <div class="code">var a, b;
[a, , b] = [,,,];
return a === undefined &amp;&amp; b === undefined;</div>}
```
###with strings
          
```
function(){
              <div class="code">var a,b,c;
[a, b, c] = &quot;ab&quot;;
return a === &quot;a&quot; &amp;&amp; b === &quot;b&quot; &amp;&amp; c === undefined;</div>}
```
###with astral plane strings
          
```
function(){
              <div class="code">var c;
[c] = &quot;𠮷𠮶&quot;;
return c === &quot;𠮷&quot;;</div>}
```
###with generator instances
          
```
function(){
              <div class="code">var a,b,c;
[a, b, c] = (function*(){ yield 1; yield 2; }());
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;</div>}
```
###with generic iterables
          
```
function(){
              <div class="code">var a,b,c;
[a, b, c] = global.__createIterableObject([1, 2]);
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;</div>}
```
###with instances of generic iterables
          
```
function(){
              <div class="code">var a,b,c;
[a, b, c] = Object.create(global.__createIterableObject([1, 2]));
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;</div>}
```
###iterable destructuring expression
          
```
function(){
              <div class="code">var a, b, iterable = [1,2];
return ([a, b] = iterable) === iterable;</div>}
```
###chained iterable destructuring
          
```
function(){
              <div class="code">var a,b,c,d;
[a,b] = [c,d] = [1,2];
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === 1 &amp;&amp; d === 2;</div>}
```
###trailing commas in iterable patterns
          
```
function(){
              <div class="code">var a;
[a,] = [1];
return a === 1;</div>}
```
###with objects
          
```
function(){
              <div class="code">var c,d,e;
({c, x:d, e} = {c:7, x:8});
return c === 7 &amp;&amp; d === 8 &amp;&amp; e === undefined;</div>}
```
###object destructuring with primitives
          
```
function(){
              <div class="code">var toFixed, slice;
({toFixed} = 2);
({slice} = '');
return toFixed === Number.prototype.toFixed
  &amp;&amp; slice === String.prototype.slice;</div>}
```
###trailing commas in object patterns
          
```
function(){
              <div class="code">var a;
({a,} = {a:1});
return a === 1;</div>}
```
###object destructuring expression
          
```
function(){
              <div class="code">var a, b, obj = { a:1, b:2 };
return ({a,b} = obj) === obj;</div>}
```
###parenthesised left-hand-side is a syntax error
          
```
function(){
              <div class="code">var a, b;
({a,b} = {a:1,b:2});
try {
  eval(&quot;({a,b}) = {a:3,b:4};&quot;);
}
catch(e) {
  return a === 1 &amp;&amp; b === 2;
}</div>}
```
###chained object destructuring
          
```
function(){
              <div class="code">var a,b,c,d;
({a,b} = {c,d} = {a:1,b:2,c:3,d:4});
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === 3 &amp;&amp; d === 4;</div>}
```
###throws on null and undefined
          
```
function(){
              <div class="code">var a,b;
try {
  ({a} = null);
  return false;
} catch(e) {}
try {
  ({b} = undefined);
  return false;
} catch(e) {}
return true;</div>}
```
###computed properties
          
```
function(){
              <div class="code">var grault, qux = &quot;corge&quot;;
({ [qux]: grault } = { corge: &quot;garply&quot; });
return grault === &quot;garply&quot;;</div>}
```
###nested
          
```
function(){
              <div class="code">var e,f,g,h,i;
[e, {x:f, g}] = [9, {x:10}];
({h, x:[i]} = {h:11, x:[12]});
return e === 9 &amp;&amp; f === 10 &amp;&amp; g === undefined
  &amp;&amp; h === 11 &amp;&amp; i === 12;</div>}
```
###rest
          
```
function(){
              <div class="code">var a,b,c,d;
[a, ...b] = [3, 4, 5];
[c, ...d] = [6];
return a === 3 &amp;&amp; b instanceof Array &amp;&amp; (b + &quot;&quot;) === &quot;4,5&quot; &amp;&amp;
   c === 6 &amp;&amp; d instanceof Array &amp;&amp; d.length === 0;</div>}
```
###nested rest
          
```
function(){
              <div class="code">var a = [1, 2, 3], first, last;
[first, ...[a[2], last]] = a;
return first === 1 &amp;&amp; last === 3 &amp;&amp; (a + &quot;&quot;) === &quot;1,2,2&quot;;</div>}
```
###empty patterns
          
```
function(){
              <div class="code">[] = [1,2];
({} = {a:1,b:2});
return true;</div>}
```
###defaults
          
```
function(){
              <div class="code">var a,b,c,d,e,f;
({a = 1, b = 0, z:c = 3} = {b:2, z:undefined});
[d = 0, e = 5, f = 6] = [4,,undefined];
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === 3
  &amp;&amp; d === 4 &amp;&amp; e === 5 &amp;&amp; f === 6;</div>}
```
###with arrays
          
```
function(){
              <div class="code">var a,b,c;
[a, , [b], c] = [5, null, [6]];
return a === 5 &amp;&amp; b === 6 &amp;&amp; c === undefined;</div>}
```
###with sparse arrays
          
```
function(){
              <div class="code">var a, b;
[a, , b] = [,,,];
return a === undefined &amp;&amp; b === undefined;</div>}
```
###with strings
          
```
function(){
              <div class="code">var a,b,c;
[a, b, c] = &quot;ab&quot;;
return a === &quot;a&quot; &amp;&amp; b === &quot;b&quot; &amp;&amp; c === undefined;</div>}
```
###with astral plane strings
          
```
function(){
              <div class="code">var c;
[c] = &quot;𠮷𠮶&quot;;
return c === &quot;𠮷&quot;;</div>}
```
###with generator instances
          
```
function(){
              <div class="code">var a,b,c;
[a, b, c] = (function*(){ yield 1; yield 2; }());
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;</div>}
```
###with generic iterables
          
```
function(){
              <div class="code">var a,b,c;
[a, b, c] = global.__createIterableObject([1, 2]);
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;</div>}
```
###with instances of generic iterables
          
```
function(){
              <div class="code">var a,b,c;
[a, b, c] = Object.create(global.__createIterableObject([1, 2]));
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;</div>}
```
###iterable destructuring expression
          
```
function(){
              <div class="code">var a, b, iterable = [1,2];
return ([a, b] = iterable) === iterable;</div>}
```
###chained iterable destructuring
          
```
function(){
              <div class="code">var a,b,c,d;
[a,b] = [c,d] = [1,2];
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === 1 &amp;&amp; d === 2;</div>}
```
###trailing commas in iterable patterns
          
```
function(){
              <div class="code">var a;
[a,] = [1];
return a === 1;</div>}
```
###with objects
          
```
function(){
              <div class="code">var c,d,e;
({c, x:d, e} = {c:7, x:8});
return c === 7 &amp;&amp; d === 8 &amp;&amp; e === undefined;</div>}
```
###object destructuring with primitives
          
```
function(){
              <div class="code">var toFixed, slice;
({toFixed} = 2);
({slice} = '');
return toFixed === Number.prototype.toFixed
  &amp;&amp; slice === String.prototype.slice;</div>}
```
###trailing commas in object patterns
          
```
function(){
              <div class="code">var a;
({a,} = {a:1});
return a === 1;</div>}
```
###object destructuring expression
          
```
function(){
              <div class="code">var a, b, obj = { a:1, b:2 };
return ({a,b} = obj) === obj;</div>}
```
###parenthesised left-hand-side is a syntax error
          
```
function(){
              <div class="code">var a, b;
({a,b} = {a:1,b:2});
try {
  eval(&quot;({a,b}) = {a:3,b:4};&quot;);
}
catch(e) {
  return a === 1 &amp;&amp; b === 2;
}</div>}
```
###chained object destructuring
          
```
function(){
              <div class="code">var a,b,c,d;
({a,b} = {c,d} = {a:1,b:2,c:3,d:4});
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === 3 &amp;&amp; d === 4;</div>}
```
###throws on null and undefined
          
```
function(){
              <div class="code">var a,b;
try {
  ({a} = null);
  return false;
} catch(e) {}
try {
  ({b} = undefined);
  return false;
} catch(e) {}
return true;</div>}
```
###computed properties
          
```
function(){
              <div class="code">var grault, qux = &quot;corge&quot;;
({ [qux]: grault } = { corge: &quot;garply&quot; });
return grault === &quot;garply&quot;;</div>}
```
###nested
          
```
function(){
              <div class="code">var e,f,g,h,i;
[e, {x:f, g}] = [9, {x:10}];
({h, x:[i]} = {h:11, x:[12]});
return e === 9 &amp;&amp; f === 10 &amp;&amp; g === undefined
  &amp;&amp; h === 11 &amp;&amp; i === 12;</div>}
```
###rest
          
```
function(){
              <div class="code">var a,b,c,d;
[a, ...b] = [3, 4, 5];
[c, ...d] = [6];
return a === 3 &amp;&amp; b instanceof Array &amp;&amp; (b + &quot;&quot;) === &quot;4,5&quot; &amp;&amp;
   c === 6 &amp;&amp; d instanceof Array &amp;&amp; d.length === 0;</div>}
```
###nested rest
          
```
function(){
              <div class="code">var a = [1, 2, 3], first, last;
[first, ...[a[2], last]] = a;
return first === 1 &amp;&amp; last === 3 &amp;&amp; (a + &quot;&quot;) === &quot;1,2,2&quot;;</div>}
```
###empty patterns
          
```
function(){
              <div class="code">[] = [1,2];
({} = {a:1,b:2});
return true;</div>}
```
###defaults
          
```
function(){
              <div class="code">var a,b,c,d,e,f;
({a = 1, b = 0, z:c = 3} = {b:2, z:undefined});
[d = 0, e = 5, f = 6] = [4,,undefined];
return a === 1 &amp;&amp; b === 2 &amp;&amp; c === 3
  &amp;&amp; d === 4 &amp;&amp; e === 5 &amp;&amp; f === 6;</div>}
```
