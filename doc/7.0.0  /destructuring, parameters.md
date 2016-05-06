###with arrays
          
```
function(){
              <div class="code">return function([a, , [b], c]) {
  return a === 5 &amp;&amp; b === 6 &amp;&amp; c === undefined;
}([5, null, [6]]);</div>}
```
###with sparse arrays
          
```
function(){
              <div class="code">return function([a, , b]) {
  return a === undefined &amp;&amp; b === undefined;
}([,,,]);</div>}
```
###with strings
          
```
function(){
              <div class="code">return function([a, b, c]) {
  return a === &quot;a&quot; &amp;&amp; b === &quot;b&quot; &amp;&amp; c === undefined;
}(&quot;ab&quot;);</div>}
```
###with astral plane strings
          
```
function(){
              <div class="code">return function([c]) {
  return c === &quot;𠮷&quot;;
}(&quot;𠮷𠮶&quot;);</div>}
```
###with generator instances
          
```
function(){
              <div class="code">return function([a, b, c]) {
  return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;
}(function*(){ yield 1; yield 2; }());</div>}
```
###with generic iterables
          
```
function(){
              <div class="code">return function([a, b, c]) {
  return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;
}(global.__createIterableObject([1, 2]));</div>}
```
###with instances of generic iterables
          
```
function(){
              <div class="code">return function([a, b, c]) {
  return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;
}(Object.create(global.__createIterableObject([1, 2])));</div>}
```
###trailing commas in iterable patterns
          
```
function(){
              <div class="code">return function([a,]) {
  return a === 1;
}([1]);</div>}
```
###with objects
          
```
function(){
              <div class="code">return function({c, x:d, e}) {
  return c === 7 &amp;&amp; d === 8 &amp;&amp; e === undefined;
}({c:7, x:8});</div>}
```
###object destructuring with primitives
          
```
function(){
              <div class="code">return function({toFixed}, {slice}) {
  return toFixed === Number.prototype.toFixed
    &amp;&amp; slice === String.prototype.slice;
}(2,'');</div>}
```
###trailing commas in object patterns
          
```
function(){
              <div class="code">return function({a,}) {
  return a === 1;
}({a:1});</div>}
```
###throws on null and undefined
          
```
function(){
              <div class="code">try {
  (function({a}){}(null));
  return false;
} catch(e) {}
try {
  (function({b}){}(undefined));
  return false;
} catch(e) {}
return true;</div>}
```
###computed properties
          
```
function(){
              <div class="code">var qux = &quot;corge&quot;;
return function({ [qux]: grault }) {
  return grault === &quot;garply&quot;;
}({ corge: &quot;garply&quot; });</div>}
```
###nested
          
```
function(){
              <div class="code">return function([e, {x:f, g}], {h, x:[i]}) {
  return e === 9 &amp;&amp; f === 10 &amp;&amp; g === undefined
    &amp;&amp; h === 11 &amp;&amp; i === 12;
}([9, {x:10}],{h:11, x:[12]});</div>}
```
###'arguments' interaction
          
```
function(){
              <div class="code">return (function({a, x:b, y:e}, [c, d]) {
  return arguments[0].a === 1 &amp;&amp; arguments[0].x === 2
    &amp;&amp; !(&quot;y&quot; in arguments[0]) &amp;&amp; arguments[1] + '' === &quot;3,4&quot;;
}({a:1, x:2}, [3, 4]));</div>}
```
###new Function() support
          
```
function(){
              <div class="code">return new Function(&quot;{a, x:b, y:e}&quot;,&quot;[c, d]&quot;,
  &quot;return a === 1 &amp;&amp; b === 2 &amp;&amp; c === 3 &amp;&amp; &quot;
  + &quot;d === 4 &amp;&amp; e === undefined;&quot;
)({a:1, x:2}, [3, 4]);</div>}
```
###in parameters, function 'length' property
          
```
function(){
              <div class="code">return function({a, b}, [c, d]){}.length === 2;</div>}
```
###rest
          
```
function(){
              <div class="code">return function([a, ...b], [c, ...d]) {
  return a === 3 &amp;&amp; b instanceof Array &amp;&amp; (b + &quot;&quot;) === &quot;4,5&quot; &amp;&amp;
     c === 6 &amp;&amp; d instanceof Array &amp;&amp; d.length === 0;
}([3, 4, 5], [6]);</div>}
```
###empty patterns
          
```
function(){
              <div class="code">return function ([],{}){
  return arguments[0] + '' === &quot;3,4&quot; &amp;&amp; arguments[1].x === &quot;foo&quot;;
}([3,4],{x:&quot;foo&quot;});</div>}
```
###defaults
          
```
function(){
              <div class="code">return (function({a = 1, b = 0, c = 3, x:d = 0, y:e = 5},
    [f = 6, g = 0, h = 8]) {
  return a === 1 &amp;&amp; b === 2 &amp;&amp; c === 3 &amp;&amp; d === 4 &amp;&amp;
    e === 5 &amp;&amp; f === 6 &amp;&amp; g === 7 &amp;&amp; h === 8;
}({b:2, c:undefined, x:4},[, 7, undefined]));</div>}
```
###defaults, separate scope
          
```
function(){
              <div class="code">return (function({a=function(){
  return typeof b === 'undefined';
}}){
  var b = 1;
  return a();
}({}));</div>}
```
###defaults, new Function() support
          
```
function(){
              <div class="code">return new Function(&quot;{a = 1, b = 0, c = 3, x:d = 0, y:e = 5}&quot;,
  &quot;return a === 1 &amp;&amp; b === 2 &amp;&amp; c === 3 &amp;&amp; d === 4 &amp;&amp; e === 5;&quot;
)({b:2, c:undefined, x:4});</div>}
```
###with arrays
          
```
function(){
              <div class="code">return function([a, , [b], c]) {
  return a === 5 &amp;&amp; b === 6 &amp;&amp; c === undefined;
}([5, null, [6]]);</div>}
```
###with sparse arrays
          
```
function(){
              <div class="code">return function([a, , b]) {
  return a === undefined &amp;&amp; b === undefined;
}([,,,]);</div>}
```
###with strings
          
```
function(){
              <div class="code">return function([a, b, c]) {
  return a === &quot;a&quot; &amp;&amp; b === &quot;b&quot; &amp;&amp; c === undefined;
}(&quot;ab&quot;);</div>}
```
###with astral plane strings
          
```
function(){
              <div class="code">return function([c]) {
  return c === &quot;𠮷&quot;;
}(&quot;𠮷𠮶&quot;);</div>}
```
###with generator instances
          
```
function(){
              <div class="code">return function([a, b, c]) {
  return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;
}(function*(){ yield 1; yield 2; }());</div>}
```
###with generic iterables
          
```
function(){
              <div class="code">return function([a, b, c]) {
  return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;
}(global.__createIterableObject([1, 2]));</div>}
```
###with instances of generic iterables
          
```
function(){
              <div class="code">return function([a, b, c]) {
  return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;
}(Object.create(global.__createIterableObject([1, 2])));</div>}
```
###trailing commas in iterable patterns
          
```
function(){
              <div class="code">return function([a,]) {
  return a === 1;
}([1]);</div>}
```
###with objects
          
```
function(){
              <div class="code">return function({c, x:d, e}) {
  return c === 7 &amp;&amp; d === 8 &amp;&amp; e === undefined;
}({c:7, x:8});</div>}
```
###object destructuring with primitives
          
```
function(){
              <div class="code">return function({toFixed}, {slice}) {
  return toFixed === Number.prototype.toFixed
    &amp;&amp; slice === String.prototype.slice;
}(2,'');</div>}
```
###trailing commas in object patterns
          
```
function(){
              <div class="code">return function({a,}) {
  return a === 1;
}({a:1});</div>}
```
###throws on null and undefined
          
```
function(){
              <div class="code">try {
  (function({a}){}(null));
  return false;
} catch(e) {}
try {
  (function({b}){}(undefined));
  return false;
} catch(e) {}
return true;</div>}
```
###computed properties
          
```
function(){
              <div class="code">var qux = &quot;corge&quot;;
return function({ [qux]: grault }) {
  return grault === &quot;garply&quot;;
}({ corge: &quot;garply&quot; });</div>}
```
###nested
          
```
function(){
              <div class="code">return function([e, {x:f, g}], {h, x:[i]}) {
  return e === 9 &amp;&amp; f === 10 &amp;&amp; g === undefined
    &amp;&amp; h === 11 &amp;&amp; i === 12;
}([9, {x:10}],{h:11, x:[12]});</div>}
```
###'arguments' interaction
          
```
function(){
              <div class="code">return (function({a, x:b, y:e}, [c, d]) {
  return arguments[0].a === 1 &amp;&amp; arguments[0].x === 2
    &amp;&amp; !(&quot;y&quot; in arguments[0]) &amp;&amp; arguments[1] + '' === &quot;3,4&quot;;
}({a:1, x:2}, [3, 4]));</div>}
```
###new Function() support
          
```
function(){
              <div class="code">return new Function(&quot;{a, x:b, y:e}&quot;,&quot;[c, d]&quot;,
  &quot;return a === 1 &amp;&amp; b === 2 &amp;&amp; c === 3 &amp;&amp; &quot;
  + &quot;d === 4 &amp;&amp; e === undefined;&quot;
)({a:1, x:2}, [3, 4]);</div>}
```
###in parameters, function 'length' property
          
```
function(){
              <div class="code">return function({a, b}, [c, d]){}.length === 2;</div>}
```
###rest
          
```
function(){
              <div class="code">return function([a, ...b], [c, ...d]) {
  return a === 3 &amp;&amp; b instanceof Array &amp;&amp; (b + &quot;&quot;) === &quot;4,5&quot; &amp;&amp;
     c === 6 &amp;&amp; d instanceof Array &amp;&amp; d.length === 0;
}([3, 4, 5], [6]);</div>}
```
###empty patterns
          
```
function(){
              <div class="code">return function ([],{}){
  return arguments[0] + '' === &quot;3,4&quot; &amp;&amp; arguments[1].x === &quot;foo&quot;;
}([3,4],{x:&quot;foo&quot;});</div>}
```
###defaults
          
```
function(){
              <div class="code">return (function({a = 1, b = 0, c = 3, x:d = 0, y:e = 5},
    [f = 6, g = 0, h = 8]) {
  return a === 1 &amp;&amp; b === 2 &amp;&amp; c === 3 &amp;&amp; d === 4 &amp;&amp;
    e === 5 &amp;&amp; f === 6 &amp;&amp; g === 7 &amp;&amp; h === 8;
}({b:2, c:undefined, x:4},[, 7, undefined]));</div>}
```
###defaults, separate scope
          
```
function(){
              <div class="code">return (function({a=function(){
  return typeof b === 'undefined';
}}){
  var b = 1;
  return a();
}({}));</div>}
```
###defaults, new Function() support
          
```
function(){
              <div class="code">return new Function(&quot;{a = 1, b = 0, c = 3, x:d = 0, y:e = 5}&quot;,
  &quot;return a === 1 &amp;&amp; b === 2 &amp;&amp; c === 3 &amp;&amp; d === 4 &amp;&amp; e === 5;&quot;
)({b:2, c:undefined, x:4});</div>}
```
###with arrays
          
```
function(){
              <div class="code">return function([a, , [b], c]) {
  return a === 5 &amp;&amp; b === 6 &amp;&amp; c === undefined;
}([5, null, [6]]);</div>}
```
###with sparse arrays
          
```
function(){
              <div class="code">return function([a, , b]) {
  return a === undefined &amp;&amp; b === undefined;
}([,,,]);</div>}
```
###with strings
          
```
function(){
              <div class="code">return function([a, b, c]) {
  return a === &quot;a&quot; &amp;&amp; b === &quot;b&quot; &amp;&amp; c === undefined;
}(&quot;ab&quot;);</div>}
```
###with astral plane strings
          
```
function(){
              <div class="code">return function([c]) {
  return c === &quot;𠮷&quot;;
}(&quot;𠮷𠮶&quot;);</div>}
```
###with generator instances
          
```
function(){
              <div class="code">return function([a, b, c]) {
  return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;
}(function*(){ yield 1; yield 2; }());</div>}
```
###with generic iterables
          
```
function(){
              <div class="code">return function([a, b, c]) {
  return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;
}(global.__createIterableObject([1, 2]));</div>}
```
###with instances of generic iterables
          
```
function(){
              <div class="code">return function([a, b, c]) {
  return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;
}(Object.create(global.__createIterableObject([1, 2])));</div>}
```
###trailing commas in iterable patterns
          
```
function(){
              <div class="code">return function([a,]) {
  return a === 1;
}([1]);</div>}
```
###with objects
          
```
function(){
              <div class="code">return function({c, x:d, e}) {
  return c === 7 &amp;&amp; d === 8 &amp;&amp; e === undefined;
}({c:7, x:8});</div>}
```
###object destructuring with primitives
          
```
function(){
              <div class="code">return function({toFixed}, {slice}) {
  return toFixed === Number.prototype.toFixed
    &amp;&amp; slice === String.prototype.slice;
}(2,'');</div>}
```
###trailing commas in object patterns
          
```
function(){
              <div class="code">return function({a,}) {
  return a === 1;
}({a:1});</div>}
```
###throws on null and undefined
          
```
function(){
              <div class="code">try {
  (function({a}){}(null));
  return false;
} catch(e) {}
try {
  (function({b}){}(undefined));
  return false;
} catch(e) {}
return true;</div>}
```
###computed properties
          
```
function(){
              <div class="code">var qux = &quot;corge&quot;;
return function({ [qux]: grault }) {
  return grault === &quot;garply&quot;;
}({ corge: &quot;garply&quot; });</div>}
```
###nested
          
```
function(){
              <div class="code">return function([e, {x:f, g}], {h, x:[i]}) {
  return e === 9 &amp;&amp; f === 10 &amp;&amp; g === undefined
    &amp;&amp; h === 11 &amp;&amp; i === 12;
}([9, {x:10}],{h:11, x:[12]});</div>}
```
###'arguments' interaction
          
```
function(){
              <div class="code">return (function({a, x:b, y:e}, [c, d]) {
  return arguments[0].a === 1 &amp;&amp; arguments[0].x === 2
    &amp;&amp; !(&quot;y&quot; in arguments[0]) &amp;&amp; arguments[1] + '' === &quot;3,4&quot;;
}({a:1, x:2}, [3, 4]));</div>}
```
###new Function() support
          
```
function(){
              <div class="code">return new Function(&quot;{a, x:b, y:e}&quot;,&quot;[c, d]&quot;,
  &quot;return a === 1 &amp;&amp; b === 2 &amp;&amp; c === 3 &amp;&amp; &quot;
  + &quot;d === 4 &amp;&amp; e === undefined;&quot;
)({a:1, x:2}, [3, 4]);</div>}
```
###in parameters, function 'length' property
          
```
function(){
              <div class="code">return function({a, b}, [c, d]){}.length === 2;</div>}
```
###rest
          
```
function(){
              <div class="code">return function([a, ...b], [c, ...d]) {
  return a === 3 &amp;&amp; b instanceof Array &amp;&amp; (b + &quot;&quot;) === &quot;4,5&quot; &amp;&amp;
     c === 6 &amp;&amp; d instanceof Array &amp;&amp; d.length === 0;
}([3, 4, 5], [6]);</div>}
```
###empty patterns
          
```
function(){
              <div class="code">return function ([],{}){
  return arguments[0] + '' === &quot;3,4&quot; &amp;&amp; arguments[1].x === &quot;foo&quot;;
}([3,4],{x:&quot;foo&quot;});</div>}
```
###defaults
          
```
function(){
              <div class="code">return (function({a = 1, b = 0, c = 3, x:d = 0, y:e = 5},
    [f = 6, g = 0, h = 8]) {
  return a === 1 &amp;&amp; b === 2 &amp;&amp; c === 3 &amp;&amp; d === 4 &amp;&amp;
    e === 5 &amp;&amp; f === 6 &amp;&amp; g === 7 &amp;&amp; h === 8;
}({b:2, c:undefined, x:4},[, 7, undefined]));</div>}
```
###defaults, separate scope
          
```
function(){
              <div class="code">return (function({a=function(){
  return typeof b === 'undefined';
}}){
  var b = 1;
  return a();
}({}));</div>}
```
###defaults, new Function() support
          
```
function(){
              <div class="code">return new Function(&quot;{a = 1, b = 0, c = 3, x:d = 0, y:e = 5}&quot;,
  &quot;return a === 1 &amp;&amp; b === 2 &amp;&amp; c === 3 &amp;&amp; d === 4 &amp;&amp; e === 5;&quot;
)({b:2, c:undefined, x:4});</div>}
```
###with arrays
          
```
function(){
              <div class="code">return function([a, , [b], c]) {
  return a === 5 &amp;&amp; b === 6 &amp;&amp; c === undefined;
}([5, null, [6]]);</div>}
```
###with sparse arrays
          
```
function(){
              <div class="code">return function([a, , b]) {
  return a === undefined &amp;&amp; b === undefined;
}([,,,]);</div>}
```
###with strings
          
```
function(){
              <div class="code">return function([a, b, c]) {
  return a === &quot;a&quot; &amp;&amp; b === &quot;b&quot; &amp;&amp; c === undefined;
}(&quot;ab&quot;);</div>}
```
###with astral plane strings
          
```
function(){
              <div class="code">return function([c]) {
  return c === &quot;𠮷&quot;;
}(&quot;𠮷𠮶&quot;);</div>}
```
###with generator instances
          
```
function(){
              <div class="code">return function([a, b, c]) {
  return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;
}(function*(){ yield 1; yield 2; }());</div>}
```
###with generic iterables
          
```
function(){
              <div class="code">return function([a, b, c]) {
  return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;
}(global.__createIterableObject([1, 2]));</div>}
```
###with instances of generic iterables
          
```
function(){
              <div class="code">return function([a, b, c]) {
  return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;
}(Object.create(global.__createIterableObject([1, 2])));</div>}
```
###trailing commas in iterable patterns
          
```
function(){
              <div class="code">return function([a,]) {
  return a === 1;
}([1]);</div>}
```
###with objects
          
```
function(){
              <div class="code">return function({c, x:d, e}) {
  return c === 7 &amp;&amp; d === 8 &amp;&amp; e === undefined;
}({c:7, x:8});</div>}
```
###object destructuring with primitives
          
```
function(){
              <div class="code">return function({toFixed}, {slice}) {
  return toFixed === Number.prototype.toFixed
    &amp;&amp; slice === String.prototype.slice;
}(2,'');</div>}
```
###trailing commas in object patterns
          
```
function(){
              <div class="code">return function({a,}) {
  return a === 1;
}({a:1});</div>}
```
###throws on null and undefined
          
```
function(){
              <div class="code">try {
  (function({a}){}(null));
  return false;
} catch(e) {}
try {
  (function({b}){}(undefined));
  return false;
} catch(e) {}
return true;</div>}
```
###computed properties
          
```
function(){
              <div class="code">var qux = &quot;corge&quot;;
return function({ [qux]: grault }) {
  return grault === &quot;garply&quot;;
}({ corge: &quot;garply&quot; });</div>}
```
###nested
          
```
function(){
              <div class="code">return function([e, {x:f, g}], {h, x:[i]}) {
  return e === 9 &amp;&amp; f === 10 &amp;&amp; g === undefined
    &amp;&amp; h === 11 &amp;&amp; i === 12;
}([9, {x:10}],{h:11, x:[12]});</div>}
```
###'arguments' interaction
          
```
function(){
              <div class="code">return (function({a, x:b, y:e}, [c, d]) {
  return arguments[0].a === 1 &amp;&amp; arguments[0].x === 2
    &amp;&amp; !(&quot;y&quot; in arguments[0]) &amp;&amp; arguments[1] + '' === &quot;3,4&quot;;
}({a:1, x:2}, [3, 4]));</div>}
```
###new Function() support
          
```
function(){
              <div class="code">return new Function(&quot;{a, x:b, y:e}&quot;,&quot;[c, d]&quot;,
  &quot;return a === 1 &amp;&amp; b === 2 &amp;&amp; c === 3 &amp;&amp; &quot;
  + &quot;d === 4 &amp;&amp; e === undefined;&quot;
)({a:1, x:2}, [3, 4]);</div>}
```
###in parameters, function 'length' property
          
```
function(){
              <div class="code">return function({a, b}, [c, d]){}.length === 2;</div>}
```
###rest
          
```
function(){
              <div class="code">return function([a, ...b], [c, ...d]) {
  return a === 3 &amp;&amp; b instanceof Array &amp;&amp; (b + &quot;&quot;) === &quot;4,5&quot; &amp;&amp;
     c === 6 &amp;&amp; d instanceof Array &amp;&amp; d.length === 0;
}([3, 4, 5], [6]);</div>}
```
###empty patterns
          
```
function(){
              <div class="code">return function ([],{}){
  return arguments[0] + '' === &quot;3,4&quot; &amp;&amp; arguments[1].x === &quot;foo&quot;;
}([3,4],{x:&quot;foo&quot;});</div>}
```
###defaults
          
```
function(){
              <div class="code">return (function({a = 1, b = 0, c = 3, x:d = 0, y:e = 5},
    [f = 6, g = 0, h = 8]) {
  return a === 1 &amp;&amp; b === 2 &amp;&amp; c === 3 &amp;&amp; d === 4 &amp;&amp;
    e === 5 &amp;&amp; f === 6 &amp;&amp; g === 7 &amp;&amp; h === 8;
}({b:2, c:undefined, x:4},[, 7, undefined]));</div>}
```
###defaults, separate scope
          
```
function(){
              <div class="code">return (function({a=function(){
  return typeof b === 'undefined';
}}){
  var b = 1;
  return a();
}({}));</div>}
```
###defaults, new Function() support
          
```
function(){
              <div class="code">return new Function(&quot;{a = 1, b = 0, c = 3, x:d = 0, y:e = 5}&quot;,
  &quot;return a === 1 &amp;&amp; b === 2 &amp;&amp; c === 3 &amp;&amp; d === 4 &amp;&amp; e === 5;&quot;
)({b:2, c:undefined, x:4});</div>}
```
###with arrays
          
```
function(){
              <div class="code">return function([a, , [b], c]) {
  return a === 5 &amp;&amp; b === 6 &amp;&amp; c === undefined;
}([5, null, [6]]);</div>}
```
###with sparse arrays
          
```
function(){
              <div class="code">return function([a, , b]) {
  return a === undefined &amp;&amp; b === undefined;
}([,,,]);</div>}
```
###with strings
          
```
function(){
              <div class="code">return function([a, b, c]) {
  return a === &quot;a&quot; &amp;&amp; b === &quot;b&quot; &amp;&amp; c === undefined;
}(&quot;ab&quot;);</div>}
```
###with astral plane strings
          
```
function(){
              <div class="code">return function([c]) {
  return c === &quot;𠮷&quot;;
}(&quot;𠮷𠮶&quot;);</div>}
```
###with generator instances
          
```
function(){
              <div class="code">return function([a, b, c]) {
  return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;
}(function*(){ yield 1; yield 2; }());</div>}
```
###with generic iterables
          
```
function(){
              <div class="code">return function([a, b, c]) {
  return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;
}(global.__createIterableObject([1, 2]));</div>}
```
###with instances of generic iterables
          
```
function(){
              <div class="code">return function([a, b, c]) {
  return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;
}(Object.create(global.__createIterableObject([1, 2])));</div>}
```
###trailing commas in iterable patterns
          
```
function(){
              <div class="code">return function([a,]) {
  return a === 1;
}([1]);</div>}
```
###with objects
          
```
function(){
              <div class="code">return function({c, x:d, e}) {
  return c === 7 &amp;&amp; d === 8 &amp;&amp; e === undefined;
}({c:7, x:8});</div>}
```
###object destructuring with primitives
          
```
function(){
              <div class="code">return function({toFixed}, {slice}) {
  return toFixed === Number.prototype.toFixed
    &amp;&amp; slice === String.prototype.slice;
}(2,'');</div>}
```
###trailing commas in object patterns
          
```
function(){
              <div class="code">return function({a,}) {
  return a === 1;
}({a:1});</div>}
```
###throws on null and undefined
          
```
function(){
              <div class="code">try {
  (function({a}){}(null));
  return false;
} catch(e) {}
try {
  (function({b}){}(undefined));
  return false;
} catch(e) {}
return true;</div>}
```
###computed properties
          
```
function(){
              <div class="code">var qux = &quot;corge&quot;;
return function({ [qux]: grault }) {
  return grault === &quot;garply&quot;;
}({ corge: &quot;garply&quot; });</div>}
```
###nested
          
```
function(){
              <div class="code">return function([e, {x:f, g}], {h, x:[i]}) {
  return e === 9 &amp;&amp; f === 10 &amp;&amp; g === undefined
    &amp;&amp; h === 11 &amp;&amp; i === 12;
}([9, {x:10}],{h:11, x:[12]});</div>}
```
###'arguments' interaction
          
```
function(){
              <div class="code">return (function({a, x:b, y:e}, [c, d]) {
  return arguments[0].a === 1 &amp;&amp; arguments[0].x === 2
    &amp;&amp; !(&quot;y&quot; in arguments[0]) &amp;&amp; arguments[1] + '' === &quot;3,4&quot;;
}({a:1, x:2}, [3, 4]));</div>}
```
###new Function() support
          
```
function(){
              <div class="code">return new Function(&quot;{a, x:b, y:e}&quot;,&quot;[c, d]&quot;,
  &quot;return a === 1 &amp;&amp; b === 2 &amp;&amp; c === 3 &amp;&amp; &quot;
  + &quot;d === 4 &amp;&amp; e === undefined;&quot;
)({a:1, x:2}, [3, 4]);</div>}
```
###in parameters, function 'length' property
          
```
function(){
              <div class="code">return function({a, b}, [c, d]){}.length === 2;</div>}
```
###rest
          
```
function(){
              <div class="code">return function([a, ...b], [c, ...d]) {
  return a === 3 &amp;&amp; b instanceof Array &amp;&amp; (b + &quot;&quot;) === &quot;4,5&quot; &amp;&amp;
     c === 6 &amp;&amp; d instanceof Array &amp;&amp; d.length === 0;
}([3, 4, 5], [6]);</div>}
```
###empty patterns
          
```
function(){
              <div class="code">return function ([],{}){
  return arguments[0] + '' === &quot;3,4&quot; &amp;&amp; arguments[1].x === &quot;foo&quot;;
}([3,4],{x:&quot;foo&quot;});</div>}
```
###defaults
          
```
function(){
              <div class="code">return (function({a = 1, b = 0, c = 3, x:d = 0, y:e = 5},
    [f = 6, g = 0, h = 8]) {
  return a === 1 &amp;&amp; b === 2 &amp;&amp; c === 3 &amp;&amp; d === 4 &amp;&amp;
    e === 5 &amp;&amp; f === 6 &amp;&amp; g === 7 &amp;&amp; h === 8;
}({b:2, c:undefined, x:4},[, 7, undefined]));</div>}
```
###defaults, separate scope
          
```
function(){
              <div class="code">return (function({a=function(){
  return typeof b === 'undefined';
}}){
  var b = 1;
  return a();
}({}));</div>}
```
###defaults, new Function() support
          
```
function(){
              <div class="code">return new Function(&quot;{a = 1, b = 0, c = 3, x:d = 0, y:e = 5}&quot;,
  &quot;return a === 1 &amp;&amp; b === 2 &amp;&amp; c === 3 &amp;&amp; d === 4 &amp;&amp; e === 5;&quot;
)({b:2, c:undefined, x:4});</div>}
```
###with arrays
          
```
function(){
              <div class="code">return function([a, , [b], c]) {
  return a === 5 &amp;&amp; b === 6 &amp;&amp; c === undefined;
}([5, null, [6]]);</div>}
```
###with sparse arrays
          
```
function(){
              <div class="code">return function([a, , b]) {
  return a === undefined &amp;&amp; b === undefined;
}([,,,]);</div>}
```
###with strings
          
```
function(){
              <div class="code">return function([a, b, c]) {
  return a === &quot;a&quot; &amp;&amp; b === &quot;b&quot; &amp;&amp; c === undefined;
}(&quot;ab&quot;);</div>}
```
###with astral plane strings
          
```
function(){
              <div class="code">return function([c]) {
  return c === &quot;𠮷&quot;;
}(&quot;𠮷𠮶&quot;);</div>}
```
###with generator instances
          
```
function(){
              <div class="code">return function([a, b, c]) {
  return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;
}(function*(){ yield 1; yield 2; }());</div>}
```
###with generic iterables
          
```
function(){
              <div class="code">return function([a, b, c]) {
  return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;
}(global.__createIterableObject([1, 2]));</div>}
```
###with instances of generic iterables
          
```
function(){
              <div class="code">return function([a, b, c]) {
  return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;
}(Object.create(global.__createIterableObject([1, 2])));</div>}
```
###trailing commas in iterable patterns
          
```
function(){
              <div class="code">return function([a,]) {
  return a === 1;
}([1]);</div>}
```
###with objects
          
```
function(){
              <div class="code">return function({c, x:d, e}) {
  return c === 7 &amp;&amp; d === 8 &amp;&amp; e === undefined;
}({c:7, x:8});</div>}
```
###object destructuring with primitives
          
```
function(){
              <div class="code">return function({toFixed}, {slice}) {
  return toFixed === Number.prototype.toFixed
    &amp;&amp; slice === String.prototype.slice;
}(2,'');</div>}
```
###trailing commas in object patterns
          
```
function(){
              <div class="code">return function({a,}) {
  return a === 1;
}({a:1});</div>}
```
###throws on null and undefined
          
```
function(){
              <div class="code">try {
  (function({a}){}(null));
  return false;
} catch(e) {}
try {
  (function({b}){}(undefined));
  return false;
} catch(e) {}
return true;</div>}
```
###computed properties
          
```
function(){
              <div class="code">var qux = &quot;corge&quot;;
return function({ [qux]: grault }) {
  return grault === &quot;garply&quot;;
}({ corge: &quot;garply&quot; });</div>}
```
###nested
          
```
function(){
              <div class="code">return function([e, {x:f, g}], {h, x:[i]}) {
  return e === 9 &amp;&amp; f === 10 &amp;&amp; g === undefined
    &amp;&amp; h === 11 &amp;&amp; i === 12;
}([9, {x:10}],{h:11, x:[12]});</div>}
```
###'arguments' interaction
          
```
function(){
              <div class="code">return (function({a, x:b, y:e}, [c, d]) {
  return arguments[0].a === 1 &amp;&amp; arguments[0].x === 2
    &amp;&amp; !(&quot;y&quot; in arguments[0]) &amp;&amp; arguments[1] + '' === &quot;3,4&quot;;
}({a:1, x:2}, [3, 4]));</div>}
```
###new Function() support
          
```
function(){
              <div class="code">return new Function(&quot;{a, x:b, y:e}&quot;,&quot;[c, d]&quot;,
  &quot;return a === 1 &amp;&amp; b === 2 &amp;&amp; c === 3 &amp;&amp; &quot;
  + &quot;d === 4 &amp;&amp; e === undefined;&quot;
)({a:1, x:2}, [3, 4]);</div>}
```
###in parameters, function 'length' property
          
```
function(){
              <div class="code">return function({a, b}, [c, d]){}.length === 2;</div>}
```
###rest
          
```
function(){
              <div class="code">return function([a, ...b], [c, ...d]) {
  return a === 3 &amp;&amp; b instanceof Array &amp;&amp; (b + &quot;&quot;) === &quot;4,5&quot; &amp;&amp;
     c === 6 &amp;&amp; d instanceof Array &amp;&amp; d.length === 0;
}([3, 4, 5], [6]);</div>}
```
###empty patterns
          
```
function(){
              <div class="code">return function ([],{}){
  return arguments[0] + '' === &quot;3,4&quot; &amp;&amp; arguments[1].x === &quot;foo&quot;;
}([3,4],{x:&quot;foo&quot;});</div>}
```
###defaults
          
```
function(){
              <div class="code">return (function({a = 1, b = 0, c = 3, x:d = 0, y:e = 5},
    [f = 6, g = 0, h = 8]) {
  return a === 1 &amp;&amp; b === 2 &amp;&amp; c === 3 &amp;&amp; d === 4 &amp;&amp;
    e === 5 &amp;&amp; f === 6 &amp;&amp; g === 7 &amp;&amp; h === 8;
}({b:2, c:undefined, x:4},[, 7, undefined]));</div>}
```
###defaults, separate scope
          
```
function(){
              <div class="code">return (function({a=function(){
  return typeof b === 'undefined';
}}){
  var b = 1;
  return a();
}({}));</div>}
```
###defaults, new Function() support
          
```
function(){
              <div class="code">return new Function(&quot;{a = 1, b = 0, c = 3, x:d = 0, y:e = 5}&quot;,
  &quot;return a === 1 &amp;&amp; b === 2 &amp;&amp; c === 3 &amp;&amp; d === 4 &amp;&amp; e === 5;&quot;
)({b:2, c:undefined, x:4});</div>}
```
###with arrays
          
```
function(){
              <div class="code">return function([a, , [b], c]) {
  return a === 5 &amp;&amp; b === 6 &amp;&amp; c === undefined;
}([5, null, [6]]);</div>}
```
###with sparse arrays
          
```
function(){
              <div class="code">return function([a, , b]) {
  return a === undefined &amp;&amp; b === undefined;
}([,,,]);</div>}
```
###with strings
          
```
function(){
              <div class="code">return function([a, b, c]) {
  return a === &quot;a&quot; &amp;&amp; b === &quot;b&quot; &amp;&amp; c === undefined;
}(&quot;ab&quot;);</div>}
```
###with astral plane strings
          
```
function(){
              <div class="code">return function([c]) {
  return c === &quot;𠮷&quot;;
}(&quot;𠮷𠮶&quot;);</div>}
```
###with generator instances
          
```
function(){
              <div class="code">return function([a, b, c]) {
  return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;
}(function*(){ yield 1; yield 2; }());</div>}
```
###with generic iterables
          
```
function(){
              <div class="code">return function([a, b, c]) {
  return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;
}(global.__createIterableObject([1, 2]));</div>}
```
###with instances of generic iterables
          
```
function(){
              <div class="code">return function([a, b, c]) {
  return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;
}(Object.create(global.__createIterableObject([1, 2])));</div>}
```
###trailing commas in iterable patterns
          
```
function(){
              <div class="code">return function([a,]) {
  return a === 1;
}([1]);</div>}
```
###with objects
          
```
function(){
              <div class="code">return function({c, x:d, e}) {
  return c === 7 &amp;&amp; d === 8 &amp;&amp; e === undefined;
}({c:7, x:8});</div>}
```
###object destructuring with primitives
          
```
function(){
              <div class="code">return function({toFixed}, {slice}) {
  return toFixed === Number.prototype.toFixed
    &amp;&amp; slice === String.prototype.slice;
}(2,'');</div>}
```
###trailing commas in object patterns
          
```
function(){
              <div class="code">return function({a,}) {
  return a === 1;
}({a:1});</div>}
```
###throws on null and undefined
          
```
function(){
              <div class="code">try {
  (function({a}){}(null));
  return false;
} catch(e) {}
try {
  (function({b}){}(undefined));
  return false;
} catch(e) {}
return true;</div>}
```
###computed properties
          
```
function(){
              <div class="code">var qux = &quot;corge&quot;;
return function({ [qux]: grault }) {
  return grault === &quot;garply&quot;;
}({ corge: &quot;garply&quot; });</div>}
```
###nested
          
```
function(){
              <div class="code">return function([e, {x:f, g}], {h, x:[i]}) {
  return e === 9 &amp;&amp; f === 10 &amp;&amp; g === undefined
    &amp;&amp; h === 11 &amp;&amp; i === 12;
}([9, {x:10}],{h:11, x:[12]});</div>}
```
###'arguments' interaction
          
```
function(){
              <div class="code">return (function({a, x:b, y:e}, [c, d]) {
  return arguments[0].a === 1 &amp;&amp; arguments[0].x === 2
    &amp;&amp; !(&quot;y&quot; in arguments[0]) &amp;&amp; arguments[1] + '' === &quot;3,4&quot;;
}({a:1, x:2}, [3, 4]));</div>}
```
###new Function() support
          
```
function(){
              <div class="code">return new Function(&quot;{a, x:b, y:e}&quot;,&quot;[c, d]&quot;,
  &quot;return a === 1 &amp;&amp; b === 2 &amp;&amp; c === 3 &amp;&amp; &quot;
  + &quot;d === 4 &amp;&amp; e === undefined;&quot;
)({a:1, x:2}, [3, 4]);</div>}
```
###in parameters, function 'length' property
          
```
function(){
              <div class="code">return function({a, b}, [c, d]){}.length === 2;</div>}
```
###rest
          
```
function(){
              <div class="code">return function([a, ...b], [c, ...d]) {
  return a === 3 &amp;&amp; b instanceof Array &amp;&amp; (b + &quot;&quot;) === &quot;4,5&quot; &amp;&amp;
     c === 6 &amp;&amp; d instanceof Array &amp;&amp; d.length === 0;
}([3, 4, 5], [6]);</div>}
```
###empty patterns
          
```
function(){
              <div class="code">return function ([],{}){
  return arguments[0] + '' === &quot;3,4&quot; &amp;&amp; arguments[1].x === &quot;foo&quot;;
}([3,4],{x:&quot;foo&quot;});</div>}
```
###defaults
          
```
function(){
              <div class="code">return (function({a = 1, b = 0, c = 3, x:d = 0, y:e = 5},
    [f = 6, g = 0, h = 8]) {
  return a === 1 &amp;&amp; b === 2 &amp;&amp; c === 3 &amp;&amp; d === 4 &amp;&amp;
    e === 5 &amp;&amp; f === 6 &amp;&amp; g === 7 &amp;&amp; h === 8;
}({b:2, c:undefined, x:4},[, 7, undefined]));</div>}
```
###defaults, separate scope
          
```
function(){
              <div class="code">return (function({a=function(){
  return typeof b === 'undefined';
}}){
  var b = 1;
  return a();
}({}));</div>}
```
###defaults, new Function() support
          
```
function(){
              <div class="code">return new Function(&quot;{a = 1, b = 0, c = 3, x:d = 0, y:e = 5}&quot;,
  &quot;return a === 1 &amp;&amp; b === 2 &amp;&amp; c === 3 &amp;&amp; d === 4 &amp;&amp; e === 5;&quot;
)({b:2, c:undefined, x:4});</div>}
```
###with arrays
          
```
function(){
              <div class="code">return function([a, , [b], c]) {
  return a === 5 &amp;&amp; b === 6 &amp;&amp; c === undefined;
}([5, null, [6]]);</div>}
```
###with sparse arrays
          
```
function(){
              <div class="code">return function([a, , b]) {
  return a === undefined &amp;&amp; b === undefined;
}([,,,]);</div>}
```
###with strings
          
```
function(){
              <div class="code">return function([a, b, c]) {
  return a === &quot;a&quot; &amp;&amp; b === &quot;b&quot; &amp;&amp; c === undefined;
}(&quot;ab&quot;);</div>}
```
###with astral plane strings
          
```
function(){
              <div class="code">return function([c]) {
  return c === &quot;𠮷&quot;;
}(&quot;𠮷𠮶&quot;);</div>}
```
###with generator instances
          
```
function(){
              <div class="code">return function([a, b, c]) {
  return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;
}(function*(){ yield 1; yield 2; }());</div>}
```
###with generic iterables
          
```
function(){
              <div class="code">return function([a, b, c]) {
  return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;
}(global.__createIterableObject([1, 2]));</div>}
```
###with instances of generic iterables
          
```
function(){
              <div class="code">return function([a, b, c]) {
  return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;
}(Object.create(global.__createIterableObject([1, 2])));</div>}
```
###trailing commas in iterable patterns
          
```
function(){
              <div class="code">return function([a,]) {
  return a === 1;
}([1]);</div>}
```
###with objects
          
```
function(){
              <div class="code">return function({c, x:d, e}) {
  return c === 7 &amp;&amp; d === 8 &amp;&amp; e === undefined;
}({c:7, x:8});</div>}
```
###object destructuring with primitives
          
```
function(){
              <div class="code">return function({toFixed}, {slice}) {
  return toFixed === Number.prototype.toFixed
    &amp;&amp; slice === String.prototype.slice;
}(2,'');</div>}
```
###trailing commas in object patterns
          
```
function(){
              <div class="code">return function({a,}) {
  return a === 1;
}({a:1});</div>}
```
###throws on null and undefined
          
```
function(){
              <div class="code">try {
  (function({a}){}(null));
  return false;
} catch(e) {}
try {
  (function({b}){}(undefined));
  return false;
} catch(e) {}
return true;</div>}
```
###computed properties
          
```
function(){
              <div class="code">var qux = &quot;corge&quot;;
return function({ [qux]: grault }) {
  return grault === &quot;garply&quot;;
}({ corge: &quot;garply&quot; });</div>}
```
###nested
          
```
function(){
              <div class="code">return function([e, {x:f, g}], {h, x:[i]}) {
  return e === 9 &amp;&amp; f === 10 &amp;&amp; g === undefined
    &amp;&amp; h === 11 &amp;&amp; i === 12;
}([9, {x:10}],{h:11, x:[12]});</div>}
```
###'arguments' interaction
          
```
function(){
              <div class="code">return (function({a, x:b, y:e}, [c, d]) {
  return arguments[0].a === 1 &amp;&amp; arguments[0].x === 2
    &amp;&amp; !(&quot;y&quot; in arguments[0]) &amp;&amp; arguments[1] + '' === &quot;3,4&quot;;
}({a:1, x:2}, [3, 4]));</div>}
```
###new Function() support
          
```
function(){
              <div class="code">return new Function(&quot;{a, x:b, y:e}&quot;,&quot;[c, d]&quot;,
  &quot;return a === 1 &amp;&amp; b === 2 &amp;&amp; c === 3 &amp;&amp; &quot;
  + &quot;d === 4 &amp;&amp; e === undefined;&quot;
)({a:1, x:2}, [3, 4]);</div>}
```
###in parameters, function 'length' property
          
```
function(){
              <div class="code">return function({a, b}, [c, d]){}.length === 2;</div>}
```
###rest
          
```
function(){
              <div class="code">return function([a, ...b], [c, ...d]) {
  return a === 3 &amp;&amp; b instanceof Array &amp;&amp; (b + &quot;&quot;) === &quot;4,5&quot; &amp;&amp;
     c === 6 &amp;&amp; d instanceof Array &amp;&amp; d.length === 0;
}([3, 4, 5], [6]);</div>}
```
###empty patterns
          
```
function(){
              <div class="code">return function ([],{}){
  return arguments[0] + '' === &quot;3,4&quot; &amp;&amp; arguments[1].x === &quot;foo&quot;;
}([3,4],{x:&quot;foo&quot;});</div>}
```
###defaults
          
```
function(){
              <div class="code">return (function({a = 1, b = 0, c = 3, x:d = 0, y:e = 5},
    [f = 6, g = 0, h = 8]) {
  return a === 1 &amp;&amp; b === 2 &amp;&amp; c === 3 &amp;&amp; d === 4 &amp;&amp;
    e === 5 &amp;&amp; f === 6 &amp;&amp; g === 7 &amp;&amp; h === 8;
}({b:2, c:undefined, x:4},[, 7, undefined]));</div>}
```
###defaults, separate scope
          
```
function(){
              <div class="code">return (function({a=function(){
  return typeof b === 'undefined';
}}){
  var b = 1;
  return a();
}({}));</div>}
```
###defaults, new Function() support
          
```
function(){
              <div class="code">return new Function(&quot;{a = 1, b = 0, c = 3, x:d = 0, y:e = 5}&quot;,
  &quot;return a === 1 &amp;&amp; b === 2 &amp;&amp; c === 3 &amp;&amp; d === 4 &amp;&amp; e === 5;&quot;
)({b:2, c:undefined, x:4});</div>}
```
###with arrays
          
```
function(){
              <div class="code">return function([a, , [b], c]) {
  return a === 5 &amp;&amp; b === 6 &amp;&amp; c === undefined;
}([5, null, [6]]);</div>}
```
###with sparse arrays
          
```
function(){
              <div class="code">return function([a, , b]) {
  return a === undefined &amp;&amp; b === undefined;
}([,,,]);</div>}
```
###with strings
          
```
function(){
              <div class="code">return function([a, b, c]) {
  return a === &quot;a&quot; &amp;&amp; b === &quot;b&quot; &amp;&amp; c === undefined;
}(&quot;ab&quot;);</div>}
```
###with astral plane strings
          
```
function(){
              <div class="code">return function([c]) {
  return c === &quot;𠮷&quot;;
}(&quot;𠮷𠮶&quot;);</div>}
```
###with generator instances
          
```
function(){
              <div class="code">return function([a, b, c]) {
  return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;
}(function*(){ yield 1; yield 2; }());</div>}
```
###with generic iterables
          
```
function(){
              <div class="code">return function([a, b, c]) {
  return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;
}(global.__createIterableObject([1, 2]));</div>}
```
###with instances of generic iterables
          
```
function(){
              <div class="code">return function([a, b, c]) {
  return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;
}(Object.create(global.__createIterableObject([1, 2])));</div>}
```
###trailing commas in iterable patterns
          
```
function(){
              <div class="code">return function([a,]) {
  return a === 1;
}([1]);</div>}
```
###with objects
          
```
function(){
              <div class="code">return function({c, x:d, e}) {
  return c === 7 &amp;&amp; d === 8 &amp;&amp; e === undefined;
}({c:7, x:8});</div>}
```
###object destructuring with primitives
          
```
function(){
              <div class="code">return function({toFixed}, {slice}) {
  return toFixed === Number.prototype.toFixed
    &amp;&amp; slice === String.prototype.slice;
}(2,'');</div>}
```
###trailing commas in object patterns
          
```
function(){
              <div class="code">return function({a,}) {
  return a === 1;
}({a:1});</div>}
```
###throws on null and undefined
          
```
function(){
              <div class="code">try {
  (function({a}){}(null));
  return false;
} catch(e) {}
try {
  (function({b}){}(undefined));
  return false;
} catch(e) {}
return true;</div>}
```
###computed properties
          
```
function(){
              <div class="code">var qux = &quot;corge&quot;;
return function({ [qux]: grault }) {
  return grault === &quot;garply&quot;;
}({ corge: &quot;garply&quot; });</div>}
```
###nested
          
```
function(){
              <div class="code">return function([e, {x:f, g}], {h, x:[i]}) {
  return e === 9 &amp;&amp; f === 10 &amp;&amp; g === undefined
    &amp;&amp; h === 11 &amp;&amp; i === 12;
}([9, {x:10}],{h:11, x:[12]});</div>}
```
###'arguments' interaction
          
```
function(){
              <div class="code">return (function({a, x:b, y:e}, [c, d]) {
  return arguments[0].a === 1 &amp;&amp; arguments[0].x === 2
    &amp;&amp; !(&quot;y&quot; in arguments[0]) &amp;&amp; arguments[1] + '' === &quot;3,4&quot;;
}({a:1, x:2}, [3, 4]));</div>}
```
###new Function() support
          
```
function(){
              <div class="code">return new Function(&quot;{a, x:b, y:e}&quot;,&quot;[c, d]&quot;,
  &quot;return a === 1 &amp;&amp; b === 2 &amp;&amp; c === 3 &amp;&amp; &quot;
  + &quot;d === 4 &amp;&amp; e === undefined;&quot;
)({a:1, x:2}, [3, 4]);</div>}
```
###in parameters, function 'length' property
          
```
function(){
              <div class="code">return function({a, b}, [c, d]){}.length === 2;</div>}
```
###rest
          
```
function(){
              <div class="code">return function([a, ...b], [c, ...d]) {
  return a === 3 &amp;&amp; b instanceof Array &amp;&amp; (b + &quot;&quot;) === &quot;4,5&quot; &amp;&amp;
     c === 6 &amp;&amp; d instanceof Array &amp;&amp; d.length === 0;
}([3, 4, 5], [6]);</div>}
```
###empty patterns
          
```
function(){
              <div class="code">return function ([],{}){
  return arguments[0] + '' === &quot;3,4&quot; &amp;&amp; arguments[1].x === &quot;foo&quot;;
}([3,4],{x:&quot;foo&quot;});</div>}
```
###defaults
          
```
function(){
              <div class="code">return (function({a = 1, b = 0, c = 3, x:d = 0, y:e = 5},
    [f = 6, g = 0, h = 8]) {
  return a === 1 &amp;&amp; b === 2 &amp;&amp; c === 3 &amp;&amp; d === 4 &amp;&amp;
    e === 5 &amp;&amp; f === 6 &amp;&amp; g === 7 &amp;&amp; h === 8;
}({b:2, c:undefined, x:4},[, 7, undefined]));</div>}
```
###defaults, separate scope
          
```
function(){
              <div class="code">return (function({a=function(){
  return typeof b === 'undefined';
}}){
  var b = 1;
  return a();
}({}));</div>}
```
###defaults, new Function() support
          
```
function(){
              <div class="code">return new Function(&quot;{a = 1, b = 0, c = 3, x:d = 0, y:e = 5}&quot;,
  &quot;return a === 1 &amp;&amp; b === 2 &amp;&amp; c === 3 &amp;&amp; d === 4 &amp;&amp; e === 5;&quot;
)({b:2, c:undefined, x:4});</div>}
```
###with arrays
          
```
function(){
              <div class="code">return function([a, , [b], c]) {
  return a === 5 &amp;&amp; b === 6 &amp;&amp; c === undefined;
}([5, null, [6]]);</div>}
```
###with sparse arrays
          
```
function(){
              <div class="code">return function([a, , b]) {
  return a === undefined &amp;&amp; b === undefined;
}([,,,]);</div>}
```
###with strings
          
```
function(){
              <div class="code">return function([a, b, c]) {
  return a === &quot;a&quot; &amp;&amp; b === &quot;b&quot; &amp;&amp; c === undefined;
}(&quot;ab&quot;);</div>}
```
###with astral plane strings
          
```
function(){
              <div class="code">return function([c]) {
  return c === &quot;𠮷&quot;;
}(&quot;𠮷𠮶&quot;);</div>}
```
###with generator instances
          
```
function(){
              <div class="code">return function([a, b, c]) {
  return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;
}(function*(){ yield 1; yield 2; }());</div>}
```
###with generic iterables
          
```
function(){
              <div class="code">return function([a, b, c]) {
  return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;
}(global.__createIterableObject([1, 2]));</div>}
```
###with instances of generic iterables
          
```
function(){
              <div class="code">return function([a, b, c]) {
  return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;
}(Object.create(global.__createIterableObject([1, 2])));</div>}
```
###trailing commas in iterable patterns
          
```
function(){
              <div class="code">return function([a,]) {
  return a === 1;
}([1]);</div>}
```
###with objects
          
```
function(){
              <div class="code">return function({c, x:d, e}) {
  return c === 7 &amp;&amp; d === 8 &amp;&amp; e === undefined;
}({c:7, x:8});</div>}
```
###object destructuring with primitives
          
```
function(){
              <div class="code">return function({toFixed}, {slice}) {
  return toFixed === Number.prototype.toFixed
    &amp;&amp; slice === String.prototype.slice;
}(2,'');</div>}
```
###trailing commas in object patterns
          
```
function(){
              <div class="code">return function({a,}) {
  return a === 1;
}({a:1});</div>}
```
###throws on null and undefined
          
```
function(){
              <div class="code">try {
  (function({a}){}(null));
  return false;
} catch(e) {}
try {
  (function({b}){}(undefined));
  return false;
} catch(e) {}
return true;</div>}
```
###computed properties
          
```
function(){
              <div class="code">var qux = &quot;corge&quot;;
return function({ [qux]: grault }) {
  return grault === &quot;garply&quot;;
}({ corge: &quot;garply&quot; });</div>}
```
###nested
          
```
function(){
              <div class="code">return function([e, {x:f, g}], {h, x:[i]}) {
  return e === 9 &amp;&amp; f === 10 &amp;&amp; g === undefined
    &amp;&amp; h === 11 &amp;&amp; i === 12;
}([9, {x:10}],{h:11, x:[12]});</div>}
```
###'arguments' interaction
          
```
function(){
              <div class="code">return (function({a, x:b, y:e}, [c, d]) {
  return arguments[0].a === 1 &amp;&amp; arguments[0].x === 2
    &amp;&amp; !(&quot;y&quot; in arguments[0]) &amp;&amp; arguments[1] + '' === &quot;3,4&quot;;
}({a:1, x:2}, [3, 4]));</div>}
```
###new Function() support
          
```
function(){
              <div class="code">return new Function(&quot;{a, x:b, y:e}&quot;,&quot;[c, d]&quot;,
  &quot;return a === 1 &amp;&amp; b === 2 &amp;&amp; c === 3 &amp;&amp; &quot;
  + &quot;d === 4 &amp;&amp; e === undefined;&quot;
)({a:1, x:2}, [3, 4]);</div>}
```
###in parameters, function 'length' property
          
```
function(){
              <div class="code">return function({a, b}, [c, d]){}.length === 2;</div>}
```
###rest
          
```
function(){
              <div class="code">return function([a, ...b], [c, ...d]) {
  return a === 3 &amp;&amp; b instanceof Array &amp;&amp; (b + &quot;&quot;) === &quot;4,5&quot; &amp;&amp;
     c === 6 &amp;&amp; d instanceof Array &amp;&amp; d.length === 0;
}([3, 4, 5], [6]);</div>}
```
###empty patterns
          
```
function(){
              <div class="code">return function ([],{}){
  return arguments[0] + '' === &quot;3,4&quot; &amp;&amp; arguments[1].x === &quot;foo&quot;;
}([3,4],{x:&quot;foo&quot;});</div>}
```
###defaults
          
```
function(){
              <div class="code">return (function({a = 1, b = 0, c = 3, x:d = 0, y:e = 5},
    [f = 6, g = 0, h = 8]) {
  return a === 1 &amp;&amp; b === 2 &amp;&amp; c === 3 &amp;&amp; d === 4 &amp;&amp;
    e === 5 &amp;&amp; f === 6 &amp;&amp; g === 7 &amp;&amp; h === 8;
}({b:2, c:undefined, x:4},[, 7, undefined]));</div>}
```
###defaults, separate scope
          
```
function(){
              <div class="code">return (function({a=function(){
  return typeof b === 'undefined';
}}){
  var b = 1;
  return a();
}({}));</div>}
```
###defaults, new Function() support
          
```
function(){
              <div class="code">return new Function(&quot;{a = 1, b = 0, c = 3, x:d = 0, y:e = 5}&quot;,
  &quot;return a === 1 &amp;&amp; b === 2 &amp;&amp; c === 3 &amp;&amp; d === 4 &amp;&amp; e === 5;&quot;
)({b:2, c:undefined, x:4});</div>}
```
###with arrays
          
```
function(){
              <div class="code">return function([a, , [b], c]) {
  return a === 5 &amp;&amp; b === 6 &amp;&amp; c === undefined;
}([5, null, [6]]);</div>}
```
###with sparse arrays
          
```
function(){
              <div class="code">return function([a, , b]) {
  return a === undefined &amp;&amp; b === undefined;
}([,,,]);</div>}
```
###with strings
          
```
function(){
              <div class="code">return function([a, b, c]) {
  return a === &quot;a&quot; &amp;&amp; b === &quot;b&quot; &amp;&amp; c === undefined;
}(&quot;ab&quot;);</div>}
```
###with astral plane strings
          
```
function(){
              <div class="code">return function([c]) {
  return c === &quot;𠮷&quot;;
}(&quot;𠮷𠮶&quot;);</div>}
```
###with generator instances
          
```
function(){
              <div class="code">return function([a, b, c]) {
  return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;
}(function*(){ yield 1; yield 2; }());</div>}
```
###with generic iterables
          
```
function(){
              <div class="code">return function([a, b, c]) {
  return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;
}(global.__createIterableObject([1, 2]));</div>}
```
###with instances of generic iterables
          
```
function(){
              <div class="code">return function([a, b, c]) {
  return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;
}(Object.create(global.__createIterableObject([1, 2])));</div>}
```
###trailing commas in iterable patterns
          
```
function(){
              <div class="code">return function([a,]) {
  return a === 1;
}([1]);</div>}
```
###with objects
          
```
function(){
              <div class="code">return function({c, x:d, e}) {
  return c === 7 &amp;&amp; d === 8 &amp;&amp; e === undefined;
}({c:7, x:8});</div>}
```
###object destructuring with primitives
          
```
function(){
              <div class="code">return function({toFixed}, {slice}) {
  return toFixed === Number.prototype.toFixed
    &amp;&amp; slice === String.prototype.slice;
}(2,'');</div>}
```
###trailing commas in object patterns
          
```
function(){
              <div class="code">return function({a,}) {
  return a === 1;
}({a:1});</div>}
```
###throws on null and undefined
          
```
function(){
              <div class="code">try {
  (function({a}){}(null));
  return false;
} catch(e) {}
try {
  (function({b}){}(undefined));
  return false;
} catch(e) {}
return true;</div>}
```
###computed properties
          
```
function(){
              <div class="code">var qux = &quot;corge&quot;;
return function({ [qux]: grault }) {
  return grault === &quot;garply&quot;;
}({ corge: &quot;garply&quot; });</div>}
```
###nested
          
```
function(){
              <div class="code">return function([e, {x:f, g}], {h, x:[i]}) {
  return e === 9 &amp;&amp; f === 10 &amp;&amp; g === undefined
    &amp;&amp; h === 11 &amp;&amp; i === 12;
}([9, {x:10}],{h:11, x:[12]});</div>}
```
###'arguments' interaction
          
```
function(){
              <div class="code">return (function({a, x:b, y:e}, [c, d]) {
  return arguments[0].a === 1 &amp;&amp; arguments[0].x === 2
    &amp;&amp; !(&quot;y&quot; in arguments[0]) &amp;&amp; arguments[1] + '' === &quot;3,4&quot;;
}({a:1, x:2}, [3, 4]));</div>}
```
###new Function() support
          
```
function(){
              <div class="code">return new Function(&quot;{a, x:b, y:e}&quot;,&quot;[c, d]&quot;,
  &quot;return a === 1 &amp;&amp; b === 2 &amp;&amp; c === 3 &amp;&amp; &quot;
  + &quot;d === 4 &amp;&amp; e === undefined;&quot;
)({a:1, x:2}, [3, 4]);</div>}
```
###in parameters, function 'length' property
          
```
function(){
              <div class="code">return function({a, b}, [c, d]){}.length === 2;</div>}
```
###rest
          
```
function(){
              <div class="code">return function([a, ...b], [c, ...d]) {
  return a === 3 &amp;&amp; b instanceof Array &amp;&amp; (b + &quot;&quot;) === &quot;4,5&quot; &amp;&amp;
     c === 6 &amp;&amp; d instanceof Array &amp;&amp; d.length === 0;
}([3, 4, 5], [6]);</div>}
```
###empty patterns
          
```
function(){
              <div class="code">return function ([],{}){
  return arguments[0] + '' === &quot;3,4&quot; &amp;&amp; arguments[1].x === &quot;foo&quot;;
}([3,4],{x:&quot;foo&quot;});</div>}
```
###defaults
          
```
function(){
              <div class="code">return (function({a = 1, b = 0, c = 3, x:d = 0, y:e = 5},
    [f = 6, g = 0, h = 8]) {
  return a === 1 &amp;&amp; b === 2 &amp;&amp; c === 3 &amp;&amp; d === 4 &amp;&amp;
    e === 5 &amp;&amp; f === 6 &amp;&amp; g === 7 &amp;&amp; h === 8;
}({b:2, c:undefined, x:4},[, 7, undefined]));</div>}
```
###defaults, separate scope
          
```
function(){
              <div class="code">return (function({a=function(){
  return typeof b === 'undefined';
}}){
  var b = 1;
  return a();
}({}));</div>}
```
###defaults, new Function() support
          
```
function(){
              <div class="code">return new Function(&quot;{a = 1, b = 0, c = 3, x:d = 0, y:e = 5}&quot;,
  &quot;return a === 1 &amp;&amp; b === 2 &amp;&amp; c === 3 &amp;&amp; d === 4 &amp;&amp; e === 5;&quot;
)({b:2, c:undefined, x:4});</div>}
```
###with arrays
          
```
function(){
              <div class="code">return function([a, , [b], c]) {
  return a === 5 &amp;&amp; b === 6 &amp;&amp; c === undefined;
}([5, null, [6]]);</div>}
```
###with sparse arrays
          
```
function(){
              <div class="code">return function([a, , b]) {
  return a === undefined &amp;&amp; b === undefined;
}([,,,]);</div>}
```
###with strings
          
```
function(){
              <div class="code">return function([a, b, c]) {
  return a === &quot;a&quot; &amp;&amp; b === &quot;b&quot; &amp;&amp; c === undefined;
}(&quot;ab&quot;);</div>}
```
###with astral plane strings
          
```
function(){
              <div class="code">return function([c]) {
  return c === &quot;𠮷&quot;;
}(&quot;𠮷𠮶&quot;);</div>}
```
###with generator instances
          
```
function(){
              <div class="code">return function([a, b, c]) {
  return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;
}(function*(){ yield 1; yield 2; }());</div>}
```
###with generic iterables
          
```
function(){
              <div class="code">return function([a, b, c]) {
  return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;
}(global.__createIterableObject([1, 2]));</div>}
```
###with instances of generic iterables
          
```
function(){
              <div class="code">return function([a, b, c]) {
  return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;
}(Object.create(global.__createIterableObject([1, 2])));</div>}
```
###trailing commas in iterable patterns
          
```
function(){
              <div class="code">return function([a,]) {
  return a === 1;
}([1]);</div>}
```
###with objects
          
```
function(){
              <div class="code">return function({c, x:d, e}) {
  return c === 7 &amp;&amp; d === 8 &amp;&amp; e === undefined;
}({c:7, x:8});</div>}
```
###object destructuring with primitives
          
```
function(){
              <div class="code">return function({toFixed}, {slice}) {
  return toFixed === Number.prototype.toFixed
    &amp;&amp; slice === String.prototype.slice;
}(2,'');</div>}
```
###trailing commas in object patterns
          
```
function(){
              <div class="code">return function({a,}) {
  return a === 1;
}({a:1});</div>}
```
###throws on null and undefined
          
```
function(){
              <div class="code">try {
  (function({a}){}(null));
  return false;
} catch(e) {}
try {
  (function({b}){}(undefined));
  return false;
} catch(e) {}
return true;</div>}
```
###computed properties
          
```
function(){
              <div class="code">var qux = &quot;corge&quot;;
return function({ [qux]: grault }) {
  return grault === &quot;garply&quot;;
}({ corge: &quot;garply&quot; });</div>}
```
###nested
          
```
function(){
              <div class="code">return function([e, {x:f, g}], {h, x:[i]}) {
  return e === 9 &amp;&amp; f === 10 &amp;&amp; g === undefined
    &amp;&amp; h === 11 &amp;&amp; i === 12;
}([9, {x:10}],{h:11, x:[12]});</div>}
```
###'arguments' interaction
          
```
function(){
              <div class="code">return (function({a, x:b, y:e}, [c, d]) {
  return arguments[0].a === 1 &amp;&amp; arguments[0].x === 2
    &amp;&amp; !(&quot;y&quot; in arguments[0]) &amp;&amp; arguments[1] + '' === &quot;3,4&quot;;
}({a:1, x:2}, [3, 4]));</div>}
```
###new Function() support
          
```
function(){
              <div class="code">return new Function(&quot;{a, x:b, y:e}&quot;,&quot;[c, d]&quot;,
  &quot;return a === 1 &amp;&amp; b === 2 &amp;&amp; c === 3 &amp;&amp; &quot;
  + &quot;d === 4 &amp;&amp; e === undefined;&quot;
)({a:1, x:2}, [3, 4]);</div>}
```
###in parameters, function 'length' property
          
```
function(){
              <div class="code">return function({a, b}, [c, d]){}.length === 2;</div>}
```
###rest
          
```
function(){
              <div class="code">return function([a, ...b], [c, ...d]) {
  return a === 3 &amp;&amp; b instanceof Array &amp;&amp; (b + &quot;&quot;) === &quot;4,5&quot; &amp;&amp;
     c === 6 &amp;&amp; d instanceof Array &amp;&amp; d.length === 0;
}([3, 4, 5], [6]);</div>}
```
###empty patterns
          
```
function(){
              <div class="code">return function ([],{}){
  return arguments[0] + '' === &quot;3,4&quot; &amp;&amp; arguments[1].x === &quot;foo&quot;;
}([3,4],{x:&quot;foo&quot;});</div>}
```
###defaults
          
```
function(){
              <div class="code">return (function({a = 1, b = 0, c = 3, x:d = 0, y:e = 5},
    [f = 6, g = 0, h = 8]) {
  return a === 1 &amp;&amp; b === 2 &amp;&amp; c === 3 &amp;&amp; d === 4 &amp;&amp;
    e === 5 &amp;&amp; f === 6 &amp;&amp; g === 7 &amp;&amp; h === 8;
}({b:2, c:undefined, x:4},[, 7, undefined]));</div>}
```
###defaults, separate scope
          
```
function(){
              <div class="code">return (function({a=function(){
  return typeof b === 'undefined';
}}){
  var b = 1;
  return a();
}({}));</div>}
```
###defaults, new Function() support
          
```
function(){
              <div class="code">return new Function(&quot;{a = 1, b = 0, c = 3, x:d = 0, y:e = 5}&quot;,
  &quot;return a === 1 &amp;&amp; b === 2 &amp;&amp; c === 3 &amp;&amp; d === 4 &amp;&amp; e === 5;&quot;
)({b:2, c:undefined, x:4});</div>}
```
###with arrays
          
```
function(){
              <div class="code">return function([a, , [b], c]) {
  return a === 5 &amp;&amp; b === 6 &amp;&amp; c === undefined;
}([5, null, [6]]);</div>}
```
###with sparse arrays
          
```
function(){
              <div class="code">return function([a, , b]) {
  return a === undefined &amp;&amp; b === undefined;
}([,,,]);</div>}
```
###with strings
          
```
function(){
              <div class="code">return function([a, b, c]) {
  return a === &quot;a&quot; &amp;&amp; b === &quot;b&quot; &amp;&amp; c === undefined;
}(&quot;ab&quot;);</div>}
```
###with astral plane strings
          
```
function(){
              <div class="code">return function([c]) {
  return c === &quot;𠮷&quot;;
}(&quot;𠮷𠮶&quot;);</div>}
```
###with generator instances
          
```
function(){
              <div class="code">return function([a, b, c]) {
  return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;
}(function*(){ yield 1; yield 2; }());</div>}
```
###with generic iterables
          
```
function(){
              <div class="code">return function([a, b, c]) {
  return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;
}(global.__createIterableObject([1, 2]));</div>}
```
###with instances of generic iterables
          
```
function(){
              <div class="code">return function([a, b, c]) {
  return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;
}(Object.create(global.__createIterableObject([1, 2])));</div>}
```
###trailing commas in iterable patterns
          
```
function(){
              <div class="code">return function([a,]) {
  return a === 1;
}([1]);</div>}
```
###with objects
          
```
function(){
              <div class="code">return function({c, x:d, e}) {
  return c === 7 &amp;&amp; d === 8 &amp;&amp; e === undefined;
}({c:7, x:8});</div>}
```
###object destructuring with primitives
          
```
function(){
              <div class="code">return function({toFixed}, {slice}) {
  return toFixed === Number.prototype.toFixed
    &amp;&amp; slice === String.prototype.slice;
}(2,'');</div>}
```
###trailing commas in object patterns
          
```
function(){
              <div class="code">return function({a,}) {
  return a === 1;
}({a:1});</div>}
```
###throws on null and undefined
          
```
function(){
              <div class="code">try {
  (function({a}){}(null));
  return false;
} catch(e) {}
try {
  (function({b}){}(undefined));
  return false;
} catch(e) {}
return true;</div>}
```
###computed properties
          
```
function(){
              <div class="code">var qux = &quot;corge&quot;;
return function({ [qux]: grault }) {
  return grault === &quot;garply&quot;;
}({ corge: &quot;garply&quot; });</div>}
```
###nested
          
```
function(){
              <div class="code">return function([e, {x:f, g}], {h, x:[i]}) {
  return e === 9 &amp;&amp; f === 10 &amp;&amp; g === undefined
    &amp;&amp; h === 11 &amp;&amp; i === 12;
}([9, {x:10}],{h:11, x:[12]});</div>}
```
###'arguments' interaction
          
```
function(){
              <div class="code">return (function({a, x:b, y:e}, [c, d]) {
  return arguments[0].a === 1 &amp;&amp; arguments[0].x === 2
    &amp;&amp; !(&quot;y&quot; in arguments[0]) &amp;&amp; arguments[1] + '' === &quot;3,4&quot;;
}({a:1, x:2}, [3, 4]));</div>}
```
###new Function() support
          
```
function(){
              <div class="code">return new Function(&quot;{a, x:b, y:e}&quot;,&quot;[c, d]&quot;,
  &quot;return a === 1 &amp;&amp; b === 2 &amp;&amp; c === 3 &amp;&amp; &quot;
  + &quot;d === 4 &amp;&amp; e === undefined;&quot;
)({a:1, x:2}, [3, 4]);</div>}
```
###in parameters, function 'length' property
          
```
function(){
              <div class="code">return function({a, b}, [c, d]){}.length === 2;</div>}
```
###rest
          
```
function(){
              <div class="code">return function([a, ...b], [c, ...d]) {
  return a === 3 &amp;&amp; b instanceof Array &amp;&amp; (b + &quot;&quot;) === &quot;4,5&quot; &amp;&amp;
     c === 6 &amp;&amp; d instanceof Array &amp;&amp; d.length === 0;
}([3, 4, 5], [6]);</div>}
```
###empty patterns
          
```
function(){
              <div class="code">return function ([],{}){
  return arguments[0] + '' === &quot;3,4&quot; &amp;&amp; arguments[1].x === &quot;foo&quot;;
}([3,4],{x:&quot;foo&quot;});</div>}
```
###defaults
          
```
function(){
              <div class="code">return (function({a = 1, b = 0, c = 3, x:d = 0, y:e = 5},
    [f = 6, g = 0, h = 8]) {
  return a === 1 &amp;&amp; b === 2 &amp;&amp; c === 3 &amp;&amp; d === 4 &amp;&amp;
    e === 5 &amp;&amp; f === 6 &amp;&amp; g === 7 &amp;&amp; h === 8;
}({b:2, c:undefined, x:4},[, 7, undefined]));</div>}
```
###defaults, separate scope
          
```
function(){
              <div class="code">return (function({a=function(){
  return typeof b === 'undefined';
}}){
  var b = 1;
  return a();
}({}));</div>}
```
###defaults, new Function() support
          
```
function(){
              <div class="code">return new Function(&quot;{a = 1, b = 0, c = 3, x:d = 0, y:e = 5}&quot;,
  &quot;return a === 1 &amp;&amp; b === 2 &amp;&amp; c === 3 &amp;&amp; d === 4 &amp;&amp; e === 5;&quot;
)({b:2, c:undefined, x:4});</div>}
```
###with arrays
          
```
function(){
              <div class="code">return function([a, , [b], c]) {
  return a === 5 &amp;&amp; b === 6 &amp;&amp; c === undefined;
}([5, null, [6]]);</div>}
```
###with sparse arrays
          
```
function(){
              <div class="code">return function([a, , b]) {
  return a === undefined &amp;&amp; b === undefined;
}([,,,]);</div>}
```
###with strings
          
```
function(){
              <div class="code">return function([a, b, c]) {
  return a === &quot;a&quot; &amp;&amp; b === &quot;b&quot; &amp;&amp; c === undefined;
}(&quot;ab&quot;);</div>}
```
###with astral plane strings
          
```
function(){
              <div class="code">return function([c]) {
  return c === &quot;𠮷&quot;;
}(&quot;𠮷𠮶&quot;);</div>}
```
###with generator instances
          
```
function(){
              <div class="code">return function([a, b, c]) {
  return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;
}(function*(){ yield 1; yield 2; }());</div>}
```
###with generic iterables
          
```
function(){
              <div class="code">return function([a, b, c]) {
  return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;
}(global.__createIterableObject([1, 2]));</div>}
```
###with instances of generic iterables
          
```
function(){
              <div class="code">return function([a, b, c]) {
  return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;
}(Object.create(global.__createIterableObject([1, 2])));</div>}
```
###trailing commas in iterable patterns
          
```
function(){
              <div class="code">return function([a,]) {
  return a === 1;
}([1]);</div>}
```
###with objects
          
```
function(){
              <div class="code">return function({c, x:d, e}) {
  return c === 7 &amp;&amp; d === 8 &amp;&amp; e === undefined;
}({c:7, x:8});</div>}
```
###object destructuring with primitives
          
```
function(){
              <div class="code">return function({toFixed}, {slice}) {
  return toFixed === Number.prototype.toFixed
    &amp;&amp; slice === String.prototype.slice;
}(2,'');</div>}
```
###trailing commas in object patterns
          
```
function(){
              <div class="code">return function({a,}) {
  return a === 1;
}({a:1});</div>}
```
###throws on null and undefined
          
```
function(){
              <div class="code">try {
  (function({a}){}(null));
  return false;
} catch(e) {}
try {
  (function({b}){}(undefined));
  return false;
} catch(e) {}
return true;</div>}
```
###computed properties
          
```
function(){
              <div class="code">var qux = &quot;corge&quot;;
return function({ [qux]: grault }) {
  return grault === &quot;garply&quot;;
}({ corge: &quot;garply&quot; });</div>}
```
###nested
          
```
function(){
              <div class="code">return function([e, {x:f, g}], {h, x:[i]}) {
  return e === 9 &amp;&amp; f === 10 &amp;&amp; g === undefined
    &amp;&amp; h === 11 &amp;&amp; i === 12;
}([9, {x:10}],{h:11, x:[12]});</div>}
```
###'arguments' interaction
          
```
function(){
              <div class="code">return (function({a, x:b, y:e}, [c, d]) {
  return arguments[0].a === 1 &amp;&amp; arguments[0].x === 2
    &amp;&amp; !(&quot;y&quot; in arguments[0]) &amp;&amp; arguments[1] + '' === &quot;3,4&quot;;
}({a:1, x:2}, [3, 4]));</div>}
```
###new Function() support
          
```
function(){
              <div class="code">return new Function(&quot;{a, x:b, y:e}&quot;,&quot;[c, d]&quot;,
  &quot;return a === 1 &amp;&amp; b === 2 &amp;&amp; c === 3 &amp;&amp; &quot;
  + &quot;d === 4 &amp;&amp; e === undefined;&quot;
)({a:1, x:2}, [3, 4]);</div>}
```
###in parameters, function 'length' property
          
```
function(){
              <div class="code">return function({a, b}, [c, d]){}.length === 2;</div>}
```
###rest
          
```
function(){
              <div class="code">return function([a, ...b], [c, ...d]) {
  return a === 3 &amp;&amp; b instanceof Array &amp;&amp; (b + &quot;&quot;) === &quot;4,5&quot; &amp;&amp;
     c === 6 &amp;&amp; d instanceof Array &amp;&amp; d.length === 0;
}([3, 4, 5], [6]);</div>}
```
###empty patterns
          
```
function(){
              <div class="code">return function ([],{}){
  return arguments[0] + '' === &quot;3,4&quot; &amp;&amp; arguments[1].x === &quot;foo&quot;;
}([3,4],{x:&quot;foo&quot;});</div>}
```
###defaults
          
```
function(){
              <div class="code">return (function({a = 1, b = 0, c = 3, x:d = 0, y:e = 5},
    [f = 6, g = 0, h = 8]) {
  return a === 1 &amp;&amp; b === 2 &amp;&amp; c === 3 &amp;&amp; d === 4 &amp;&amp;
    e === 5 &amp;&amp; f === 6 &amp;&amp; g === 7 &amp;&amp; h === 8;
}({b:2, c:undefined, x:4},[, 7, undefined]));</div>}
```
###defaults, separate scope
          
```
function(){
              <div class="code">return (function({a=function(){
  return typeof b === 'undefined';
}}){
  var b = 1;
  return a();
}({}));</div>}
```
###defaults, new Function() support
          
```
function(){
              <div class="code">return new Function(&quot;{a = 1, b = 0, c = 3, x:d = 0, y:e = 5}&quot;,
  &quot;return a === 1 &amp;&amp; b === 2 &amp;&amp; c === 3 &amp;&amp; d === 4 &amp;&amp; e === 5;&quot;
)({b:2, c:undefined, x:4});</div>}
```
###with arrays
          
```
function(){
              <div class="code">return function([a, , [b], c]) {
  return a === 5 &amp;&amp; b === 6 &amp;&amp; c === undefined;
}([5, null, [6]]);</div>}
```
###with sparse arrays
          
```
function(){
              <div class="code">return function([a, , b]) {
  return a === undefined &amp;&amp; b === undefined;
}([,,,]);</div>}
```
###with strings
          
```
function(){
              <div class="code">return function([a, b, c]) {
  return a === &quot;a&quot; &amp;&amp; b === &quot;b&quot; &amp;&amp; c === undefined;
}(&quot;ab&quot;);</div>}
```
###with astral plane strings
          
```
function(){
              <div class="code">return function([c]) {
  return c === &quot;𠮷&quot;;
}(&quot;𠮷𠮶&quot;);</div>}
```
###with generator instances
          
```
function(){
              <div class="code">return function([a, b, c]) {
  return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;
}(function*(){ yield 1; yield 2; }());</div>}
```
###with generic iterables
          
```
function(){
              <div class="code">return function([a, b, c]) {
  return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;
}(global.__createIterableObject([1, 2]));</div>}
```
###with instances of generic iterables
          
```
function(){
              <div class="code">return function([a, b, c]) {
  return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;
}(Object.create(global.__createIterableObject([1, 2])));</div>}
```
###trailing commas in iterable patterns
          
```
function(){
              <div class="code">return function([a,]) {
  return a === 1;
}([1]);</div>}
```
###with objects
          
```
function(){
              <div class="code">return function({c, x:d, e}) {
  return c === 7 &amp;&amp; d === 8 &amp;&amp; e === undefined;
}({c:7, x:8});</div>}
```
###object destructuring with primitives
          
```
function(){
              <div class="code">return function({toFixed}, {slice}) {
  return toFixed === Number.prototype.toFixed
    &amp;&amp; slice === String.prototype.slice;
}(2,'');</div>}
```
###trailing commas in object patterns
          
```
function(){
              <div class="code">return function({a,}) {
  return a === 1;
}({a:1});</div>}
```
###throws on null and undefined
          
```
function(){
              <div class="code">try {
  (function({a}){}(null));
  return false;
} catch(e) {}
try {
  (function({b}){}(undefined));
  return false;
} catch(e) {}
return true;</div>}
```
###computed properties
          
```
function(){
              <div class="code">var qux = &quot;corge&quot;;
return function({ [qux]: grault }) {
  return grault === &quot;garply&quot;;
}({ corge: &quot;garply&quot; });</div>}
```
###nested
          
```
function(){
              <div class="code">return function([e, {x:f, g}], {h, x:[i]}) {
  return e === 9 &amp;&amp; f === 10 &amp;&amp; g === undefined
    &amp;&amp; h === 11 &amp;&amp; i === 12;
}([9, {x:10}],{h:11, x:[12]});</div>}
```
###'arguments' interaction
          
```
function(){
              <div class="code">return (function({a, x:b, y:e}, [c, d]) {
  return arguments[0].a === 1 &amp;&amp; arguments[0].x === 2
    &amp;&amp; !(&quot;y&quot; in arguments[0]) &amp;&amp; arguments[1] + '' === &quot;3,4&quot;;
}({a:1, x:2}, [3, 4]));</div>}
```
###new Function() support
          
```
function(){
              <div class="code">return new Function(&quot;{a, x:b, y:e}&quot;,&quot;[c, d]&quot;,
  &quot;return a === 1 &amp;&amp; b === 2 &amp;&amp; c === 3 &amp;&amp; &quot;
  + &quot;d === 4 &amp;&amp; e === undefined;&quot;
)({a:1, x:2}, [3, 4]);</div>}
```
###in parameters, function 'length' property
          
```
function(){
              <div class="code">return function({a, b}, [c, d]){}.length === 2;</div>}
```
###rest
          
```
function(){
              <div class="code">return function([a, ...b], [c, ...d]) {
  return a === 3 &amp;&amp; b instanceof Array &amp;&amp; (b + &quot;&quot;) === &quot;4,5&quot; &amp;&amp;
     c === 6 &amp;&amp; d instanceof Array &amp;&amp; d.length === 0;
}([3, 4, 5], [6]);</div>}
```
###empty patterns
          
```
function(){
              <div class="code">return function ([],{}){
  return arguments[0] + '' === &quot;3,4&quot; &amp;&amp; arguments[1].x === &quot;foo&quot;;
}([3,4],{x:&quot;foo&quot;});</div>}
```
###defaults
          
```
function(){
              <div class="code">return (function({a = 1, b = 0, c = 3, x:d = 0, y:e = 5},
    [f = 6, g = 0, h = 8]) {
  return a === 1 &amp;&amp; b === 2 &amp;&amp; c === 3 &amp;&amp; d === 4 &amp;&amp;
    e === 5 &amp;&amp; f === 6 &amp;&amp; g === 7 &amp;&amp; h === 8;
}({b:2, c:undefined, x:4},[, 7, undefined]));</div>}
```
###defaults, separate scope
          
```
function(){
              <div class="code">return (function({a=function(){
  return typeof b === 'undefined';
}}){
  var b = 1;
  return a();
}({}));</div>}
```
###defaults, new Function() support
          
```
function(){
              <div class="code">return new Function(&quot;{a = 1, b = 0, c = 3, x:d = 0, y:e = 5}&quot;,
  &quot;return a === 1 &amp;&amp; b === 2 &amp;&amp; c === 3 &amp;&amp; d === 4 &amp;&amp; e === 5;&quot;
)({b:2, c:undefined, x:4});</div>}
```
###with arrays
          
```
function(){
              <div class="code">return function([a, , [b], c]) {
  return a === 5 &amp;&amp; b === 6 &amp;&amp; c === undefined;
}([5, null, [6]]);</div>}
```
###with sparse arrays
          
```
function(){
              <div class="code">return function([a, , b]) {
  return a === undefined &amp;&amp; b === undefined;
}([,,,]);</div>}
```
###with strings
          
```
function(){
              <div class="code">return function([a, b, c]) {
  return a === &quot;a&quot; &amp;&amp; b === &quot;b&quot; &amp;&amp; c === undefined;
}(&quot;ab&quot;);</div>}
```
###with astral plane strings
          
```
function(){
              <div class="code">return function([c]) {
  return c === &quot;𠮷&quot;;
}(&quot;𠮷𠮶&quot;);</div>}
```
###with generator instances
          
```
function(){
              <div class="code">return function([a, b, c]) {
  return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;
}(function*(){ yield 1; yield 2; }());</div>}
```
###with generic iterables
          
```
function(){
              <div class="code">return function([a, b, c]) {
  return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;
}(global.__createIterableObject([1, 2]));</div>}
```
###with instances of generic iterables
          
```
function(){
              <div class="code">return function([a, b, c]) {
  return a === 1 &amp;&amp; b === 2 &amp;&amp; c === undefined;
}(Object.create(global.__createIterableObject([1, 2])));</div>}
```
###trailing commas in iterable patterns
          
```
function(){
              <div class="code">return function([a,]) {
  return a === 1;
}([1]);</div>}
```
###with objects
          
```
function(){
              <div class="code">return function({c, x:d, e}) {
  return c === 7 &amp;&amp; d === 8 &amp;&amp; e === undefined;
}({c:7, x:8});</div>}
```
###object destructuring with primitives
          
```
function(){
              <div class="code">return function({toFixed}, {slice}) {
  return toFixed === Number.prototype.toFixed
    &amp;&amp; slice === String.prototype.slice;
}(2,'');</div>}
```
###trailing commas in object patterns
          
```
function(){
              <div class="code">return function({a,}) {
  return a === 1;
}({a:1});</div>}
```
###throws on null and undefined
          
```
function(){
              <div class="code">try {
  (function({a}){}(null));
  return false;
} catch(e) {}
try {
  (function({b}){}(undefined));
  return false;
} catch(e) {}
return true;</div>}
```
###computed properties
          
```
function(){
              <div class="code">var qux = &quot;corge&quot;;
return function({ [qux]: grault }) {
  return grault === &quot;garply&quot;;
}({ corge: &quot;garply&quot; });</div>}
```
###nested
          
```
function(){
              <div class="code">return function([e, {x:f, g}], {h, x:[i]}) {
  return e === 9 &amp;&amp; f === 10 &amp;&amp; g === undefined
    &amp;&amp; h === 11 &amp;&amp; i === 12;
}([9, {x:10}],{h:11, x:[12]});</div>}
```
###'arguments' interaction
          
```
function(){
              <div class="code">return (function({a, x:b, y:e}, [c, d]) {
  return arguments[0].a === 1 &amp;&amp; arguments[0].x === 2
    &amp;&amp; !(&quot;y&quot; in arguments[0]) &amp;&amp; arguments[1] + '' === &quot;3,4&quot;;
}({a:1, x:2}, [3, 4]));</div>}
```
###new Function() support
          
```
function(){
              <div class="code">return new Function(&quot;{a, x:b, y:e}&quot;,&quot;[c, d]&quot;,
  &quot;return a === 1 &amp;&amp; b === 2 &amp;&amp; c === 3 &amp;&amp; &quot;
  + &quot;d === 4 &amp;&amp; e === undefined;&quot;
)({a:1, x:2}, [3, 4]);</div>}
```
###in parameters, function 'length' property
          
```
function(){
              <div class="code">return function({a, b}, [c, d]){}.length === 2;</div>}
```
###rest
          
```
function(){
              <div class="code">return function([a, ...b], [c, ...d]) {
  return a === 3 &amp;&amp; b instanceof Array &amp;&amp; (b + &quot;&quot;) === &quot;4,5&quot; &amp;&amp;
     c === 6 &amp;&amp; d instanceof Array &amp;&amp; d.length === 0;
}([3, 4, 5], [6]);</div>}
```
###empty patterns
          
```
function(){
              <div class="code">return function ([],{}){
  return arguments[0] + '' === &quot;3,4&quot; &amp;&amp; arguments[1].x === &quot;foo&quot;;
}([3,4],{x:&quot;foo&quot;});</div>}
```
###defaults
          
```
function(){
              <div class="code">return (function({a = 1, b = 0, c = 3, x:d = 0, y:e = 5},
    [f = 6, g = 0, h = 8]) {
  return a === 1 &amp;&amp; b === 2 &amp;&amp; c === 3 &amp;&amp; d === 4 &amp;&amp;
    e === 5 &amp;&amp; f === 6 &amp;&amp; g === 7 &amp;&amp; h === 8;
}({b:2, c:undefined, x:4},[, 7, undefined]));</div>}
```
###defaults, separate scope
          
```
function(){
              <div class="code">return (function({a=function(){
  return typeof b === 'undefined';
}}){
  var b = 1;
  return a();
}({}));</div>}
```
###defaults, new Function() support
          
```
function(){
              <div class="code">return new Function(&quot;{a = 1, b = 0, c = 3, x:d = 0, y:e = 5}&quot;,
  &quot;return a === 1 &amp;&amp; b === 2 &amp;&amp; c === 3 &amp;&amp; d === 4 &amp;&amp; e === 5;&quot;
)({b:2, c:undefined, x:4});</div>}
```
