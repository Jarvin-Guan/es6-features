###String.prototype.codePointAt
          
```
function(){
              <div class="code">return typeof String.prototype.codePointAt === 'function';</div>}
```
###String.prototype.normalize
          
```
function(){
              <div class="code">return typeof String.prototype.normalize === &quot;function&quot;
  &amp;&amp; &quot;c\u0327\u0301&quot;.normalize(&quot;NFC&quot;) === &quot;\u1e09&quot;
  &amp;&amp; &quot;\u1e09&quot;.normalize(&quot;NFD&quot;) === &quot;c\u0327\u0301&quot;;</div>}
```
###String.prototype.repeat
          
```
function(){
              <div class="code">return typeof String.prototype.repeat === 'function'
  &amp;&amp; &quot;foo&quot;.repeat(3) === &quot;foofoofoo&quot;;</div>}
```
###String.prototype.startsWith
          
```
function(){
              <div class="code">return typeof String.prototype.startsWith === 'function'
  &amp;&amp; &quot;foobar&quot;.startsWith(&quot;foo&quot;);</div>}
```
###String.prototype.endsWith
          
```
function(){
              <div class="code">return typeof String.prototype.endsWith === 'function'
  &amp;&amp; &quot;foobar&quot;.endsWith(&quot;bar&quot;);</div>}
```
###String.prototype.includes
          
```
function(){
              <div class="code">return typeof String.prototype.includes === 'function'
  &amp;&amp; &quot;foobar&quot;.includes(&quot;oba&quot;);</div>}
```
###String.prototype[Symbol.iterator]
          
```
function(){
              <div class="code">return typeof String.prototype[Symbol.iterator] === 'function';</div>}
```
###String iterator prototype chain
          
```
function(){
              <div class="code">// Iterator instance
var iterator = ''[Symbol.iterator]();
// %StringIteratorPrototype%
var proto1 = Object.getPrototypeOf(iterator);
// %IteratorPrototype%
var proto2 = Object.getPrototypeOf(proto1);

return proto2.hasOwnProperty(Symbol.iterator) &amp;&amp;
  !proto1    .hasOwnProperty(Symbol.iterator) &amp;&amp;
  !iterator  .hasOwnProperty(Symbol.iterator) &amp;&amp;
  iterator[Symbol.iterator]() === iterator;</div>}
```
###String.prototype.codePointAt
          
```
function(){
              <div class="code">return typeof String.prototype.codePointAt === 'function';</div>}
```
###String.prototype.normalize
          
```
function(){
              <div class="code">return typeof String.prototype.normalize === &quot;function&quot;
  &amp;&amp; &quot;c\u0327\u0301&quot;.normalize(&quot;NFC&quot;) === &quot;\u1e09&quot;
  &amp;&amp; &quot;\u1e09&quot;.normalize(&quot;NFD&quot;) === &quot;c\u0327\u0301&quot;;</div>}
```
###String.prototype.repeat
          
```
function(){
              <div class="code">return typeof String.prototype.repeat === 'function'
  &amp;&amp; &quot;foo&quot;.repeat(3) === &quot;foofoofoo&quot;;</div>}
```
###String.prototype.startsWith
          
```
function(){
              <div class="code">return typeof String.prototype.startsWith === 'function'
  &amp;&amp; &quot;foobar&quot;.startsWith(&quot;foo&quot;);</div>}
```
###String.prototype.endsWith
          
```
function(){
              <div class="code">return typeof String.prototype.endsWith === 'function'
  &amp;&amp; &quot;foobar&quot;.endsWith(&quot;bar&quot;);</div>}
```
###String.prototype.includes
          
```
function(){
              <div class="code">return typeof String.prototype.includes === 'function'
  &amp;&amp; &quot;foobar&quot;.includes(&quot;oba&quot;);</div>}
```
###String.prototype[Symbol.iterator]
          
```
function(){
              <div class="code">return typeof String.prototype[Symbol.iterator] === 'function';</div>}
```
###String iterator prototype chain
          
```
function(){
              <div class="code">// Iterator instance
var iterator = ''[Symbol.iterator]();
// %StringIteratorPrototype%
var proto1 = Object.getPrototypeOf(iterator);
// %IteratorPrototype%
var proto2 = Object.getPrototypeOf(proto1);

return proto2.hasOwnProperty(Symbol.iterator) &amp;&amp;
  !proto1    .hasOwnProperty(Symbol.iterator) &amp;&amp;
  !iterator  .hasOwnProperty(Symbol.iterator) &amp;&amp;
  iterator[Symbol.iterator]() === iterator;</div>}
```
###String.prototype.codePointAt
          
```
function(){
              <div class="code">return typeof String.prototype.codePointAt === 'function';</div>}
```
###String.prototype.normalize
          
```
function(){
              <div class="code">return typeof String.prototype.normalize === &quot;function&quot;
  &amp;&amp; &quot;c\u0327\u0301&quot;.normalize(&quot;NFC&quot;) === &quot;\u1e09&quot;
  &amp;&amp; &quot;\u1e09&quot;.normalize(&quot;NFD&quot;) === &quot;c\u0327\u0301&quot;;</div>}
```
###String.prototype.repeat
          
```
function(){
              <div class="code">return typeof String.prototype.repeat === 'function'
  &amp;&amp; &quot;foo&quot;.repeat(3) === &quot;foofoofoo&quot;;</div>}
```
###String.prototype.startsWith
          
```
function(){
              <div class="code">return typeof String.prototype.startsWith === 'function'
  &amp;&amp; &quot;foobar&quot;.startsWith(&quot;foo&quot;);</div>}
```
###String.prototype.endsWith
          
```
function(){
              <div class="code">return typeof String.prototype.endsWith === 'function'
  &amp;&amp; &quot;foobar&quot;.endsWith(&quot;bar&quot;);</div>}
```
###String.prototype.includes
          
```
function(){
              <div class="code">return typeof String.prototype.includes === 'function'
  &amp;&amp; &quot;foobar&quot;.includes(&quot;oba&quot;);</div>}
```
###String.prototype[Symbol.iterator]
          
```
function(){
              <div class="code">return typeof String.prototype[Symbol.iterator] === 'function';</div>}
```
###String iterator prototype chain
          
```
function(){
              <div class="code">// Iterator instance
var iterator = ''[Symbol.iterator]();
// %StringIteratorPrototype%
var proto1 = Object.getPrototypeOf(iterator);
// %IteratorPrototype%
var proto2 = Object.getPrototypeOf(proto1);

return proto2.hasOwnProperty(Symbol.iterator) &amp;&amp;
  !proto1    .hasOwnProperty(Symbol.iterator) &amp;&amp;
  !iterator  .hasOwnProperty(Symbol.iterator) &amp;&amp;
  iterator[Symbol.iterator]() === iterator;</div>}
```
###String.prototype.codePointAt
          
```
function(){
              <div class="code">return typeof String.prototype.codePointAt === 'function';</div>}
```
###String.prototype.normalize
          
```
function(){
              <div class="code">return typeof String.prototype.normalize === &quot;function&quot;
  &amp;&amp; &quot;c\u0327\u0301&quot;.normalize(&quot;NFC&quot;) === &quot;\u1e09&quot;
  &amp;&amp; &quot;\u1e09&quot;.normalize(&quot;NFD&quot;) === &quot;c\u0327\u0301&quot;;</div>}
```
###String.prototype.repeat
          
```
function(){
              <div class="code">return typeof String.prototype.repeat === 'function'
  &amp;&amp; &quot;foo&quot;.repeat(3) === &quot;foofoofoo&quot;;</div>}
```
###String.prototype.startsWith
          
```
function(){
              <div class="code">return typeof String.prototype.startsWith === 'function'
  &amp;&amp; &quot;foobar&quot;.startsWith(&quot;foo&quot;);</div>}
```
###String.prototype.endsWith
          
```
function(){
              <div class="code">return typeof String.prototype.endsWith === 'function'
  &amp;&amp; &quot;foobar&quot;.endsWith(&quot;bar&quot;);</div>}
```
###String.prototype.includes
          
```
function(){
              <div class="code">return typeof String.prototype.includes === 'function'
  &amp;&amp; &quot;foobar&quot;.includes(&quot;oba&quot;);</div>}
```
###String.prototype[Symbol.iterator]
          
```
function(){
              <div class="code">return typeof String.prototype[Symbol.iterator] === 'function';</div>}
```
###String iterator prototype chain
          
```
function(){
              <div class="code">// Iterator instance
var iterator = ''[Symbol.iterator]();
// %StringIteratorPrototype%
var proto1 = Object.getPrototypeOf(iterator);
// %IteratorPrototype%
var proto2 = Object.getPrototypeOf(proto1);

return proto2.hasOwnProperty(Symbol.iterator) &amp;&amp;
  !proto1    .hasOwnProperty(Symbol.iterator) &amp;&amp;
  !iterator  .hasOwnProperty(Symbol.iterator) &amp;&amp;
  iterator[Symbol.iterator]() === iterator;</div>}
```
###String.prototype.codePointAt
          
```
function(){
              <div class="code">return typeof String.prototype.codePointAt === 'function';</div>}
```
###String.prototype.normalize
          
```
function(){
              <div class="code">return typeof String.prototype.normalize === &quot;function&quot;
  &amp;&amp; &quot;c\u0327\u0301&quot;.normalize(&quot;NFC&quot;) === &quot;\u1e09&quot;
  &amp;&amp; &quot;\u1e09&quot;.normalize(&quot;NFD&quot;) === &quot;c\u0327\u0301&quot;;</div>}
```
###String.prototype.repeat
          
```
function(){
              <div class="code">return typeof String.prototype.repeat === 'function'
  &amp;&amp; &quot;foo&quot;.repeat(3) === &quot;foofoofoo&quot;;</div>}
```
###String.prototype.startsWith
          
```
function(){
              <div class="code">return typeof String.prototype.startsWith === 'function'
  &amp;&amp; &quot;foobar&quot;.startsWith(&quot;foo&quot;);</div>}
```
###String.prototype.endsWith
          
```
function(){
              <div class="code">return typeof String.prototype.endsWith === 'function'
  &amp;&amp; &quot;foobar&quot;.endsWith(&quot;bar&quot;);</div>}
```
###String.prototype.includes
          
```
function(){
              <div class="code">return typeof String.prototype.includes === 'function'
  &amp;&amp; &quot;foobar&quot;.includes(&quot;oba&quot;);</div>}
```
###String.prototype[Symbol.iterator]
          
```
function(){
              <div class="code">return typeof String.prototype[Symbol.iterator] === 'function';</div>}
```
###String iterator prototype chain
          
```
function(){
              <div class="code">// Iterator instance
var iterator = ''[Symbol.iterator]();
// %StringIteratorPrototype%
var proto1 = Object.getPrototypeOf(iterator);
// %IteratorPrototype%
var proto2 = Object.getPrototypeOf(proto1);

return proto2.hasOwnProperty(Symbol.iterator) &amp;&amp;
  !proto1    .hasOwnProperty(Symbol.iterator) &amp;&amp;
  !iterator  .hasOwnProperty(Symbol.iterator) &amp;&amp;
  iterator[Symbol.iterator]() === iterator;</div>}
```
###String.prototype.codePointAt
          
```
function(){
              <div class="code">return typeof String.prototype.codePointAt === 'function';</div>}
```
###String.prototype.normalize
          
```
function(){
              <div class="code">return typeof String.prototype.normalize === &quot;function&quot;
  &amp;&amp; &quot;c\u0327\u0301&quot;.normalize(&quot;NFC&quot;) === &quot;\u1e09&quot;
  &amp;&amp; &quot;\u1e09&quot;.normalize(&quot;NFD&quot;) === &quot;c\u0327\u0301&quot;;</div>}
```
###String.prototype.repeat
          
```
function(){
              <div class="code">return typeof String.prototype.repeat === 'function'
  &amp;&amp; &quot;foo&quot;.repeat(3) === &quot;foofoofoo&quot;;</div>}
```
###String.prototype.startsWith
          
```
function(){
              <div class="code">return typeof String.prototype.startsWith === 'function'
  &amp;&amp; &quot;foobar&quot;.startsWith(&quot;foo&quot;);</div>}
```
###String.prototype.endsWith
          
```
function(){
              <div class="code">return typeof String.prototype.endsWith === 'function'
  &amp;&amp; &quot;foobar&quot;.endsWith(&quot;bar&quot;);</div>}
```
###String.prototype.includes
          
```
function(){
              <div class="code">return typeof String.prototype.includes === 'function'
  &amp;&amp; &quot;foobar&quot;.includes(&quot;oba&quot;);</div>}
```
###String.prototype[Symbol.iterator]
          
```
function(){
              <div class="code">return typeof String.prototype[Symbol.iterator] === 'function';</div>}
```
###String iterator prototype chain
          
```
function(){
              <div class="code">// Iterator instance
var iterator = ''[Symbol.iterator]();
// %StringIteratorPrototype%
var proto1 = Object.getPrototypeOf(iterator);
// %IteratorPrototype%
var proto2 = Object.getPrototypeOf(proto1);

return proto2.hasOwnProperty(Symbol.iterator) &amp;&amp;
  !proto1    .hasOwnProperty(Symbol.iterator) &amp;&amp;
  !iterator  .hasOwnProperty(Symbol.iterator) &amp;&amp;
  iterator[Symbol.iterator]() === iterator;</div>}
```
###String.prototype.codePointAt
          
```
function(){
              <div class="code">return typeof String.prototype.codePointAt === 'function';</div>}
```
###String.prototype.normalize
          
```
function(){
              <div class="code">return typeof String.prototype.normalize === &quot;function&quot;
  &amp;&amp; &quot;c\u0327\u0301&quot;.normalize(&quot;NFC&quot;) === &quot;\u1e09&quot;
  &amp;&amp; &quot;\u1e09&quot;.normalize(&quot;NFD&quot;) === &quot;c\u0327\u0301&quot;;</div>}
```
###String.prototype.repeat
          
```
function(){
              <div class="code">return typeof String.prototype.repeat === 'function'
  &amp;&amp; &quot;foo&quot;.repeat(3) === &quot;foofoofoo&quot;;</div>}
```
###String.prototype.startsWith
          
```
function(){
              <div class="code">return typeof String.prototype.startsWith === 'function'
  &amp;&amp; &quot;foobar&quot;.startsWith(&quot;foo&quot;);</div>}
```
###String.prototype.endsWith
          
```
function(){
              <div class="code">return typeof String.prototype.endsWith === 'function'
  &amp;&amp; &quot;foobar&quot;.endsWith(&quot;bar&quot;);</div>}
```
###String.prototype.includes
          
```
function(){
              <div class="code">return typeof String.prototype.includes === 'function'
  &amp;&amp; &quot;foobar&quot;.includes(&quot;oba&quot;);</div>}
```
###String.prototype[Symbol.iterator]
          
```
function(){
              <div class="code">return typeof String.prototype[Symbol.iterator] === 'function';</div>}
```
###String iterator prototype chain
          
```
function(){
              <div class="code">// Iterator instance
var iterator = ''[Symbol.iterator]();
// %StringIteratorPrototype%
var proto1 = Object.getPrototypeOf(iterator);
// %IteratorPrototype%
var proto2 = Object.getPrototypeOf(proto1);

return proto2.hasOwnProperty(Symbol.iterator) &amp;&amp;
  !proto1    .hasOwnProperty(Symbol.iterator) &amp;&amp;
  !iterator  .hasOwnProperty(Symbol.iterator) &amp;&amp;
  iterator[Symbol.iterator]() === iterator;</div>}
```
###String.prototype.codePointAt
          
```
function(){
              <div class="code">return typeof String.prototype.codePointAt === 'function';</div>}
```
###String.prototype.normalize
          
```
function(){
              <div class="code">return typeof String.prototype.normalize === &quot;function&quot;
  &amp;&amp; &quot;c\u0327\u0301&quot;.normalize(&quot;NFC&quot;) === &quot;\u1e09&quot;
  &amp;&amp; &quot;\u1e09&quot;.normalize(&quot;NFD&quot;) === &quot;c\u0327\u0301&quot;;</div>}
```
###String.prototype.repeat
          
```
function(){
              <div class="code">return typeof String.prototype.repeat === 'function'
  &amp;&amp; &quot;foo&quot;.repeat(3) === &quot;foofoofoo&quot;;</div>}
```
###String.prototype.startsWith
          
```
function(){
              <div class="code">return typeof String.prototype.startsWith === 'function'
  &amp;&amp; &quot;foobar&quot;.startsWith(&quot;foo&quot;);</div>}
```
###String.prototype.endsWith
          
```
function(){
              <div class="code">return typeof String.prototype.endsWith === 'function'
  &amp;&amp; &quot;foobar&quot;.endsWith(&quot;bar&quot;);</div>}
```
###String.prototype.includes
          
```
function(){
              <div class="code">return typeof String.prototype.includes === 'function'
  &amp;&amp; &quot;foobar&quot;.includes(&quot;oba&quot;);</div>}
```
###String.prototype[Symbol.iterator]
          
```
function(){
              <div class="code">return typeof String.prototype[Symbol.iterator] === 'function';</div>}
```
###String iterator prototype chain
          
```
function(){
              <div class="code">// Iterator instance
var iterator = ''[Symbol.iterator]();
// %StringIteratorPrototype%
var proto1 = Object.getPrototypeOf(iterator);
// %IteratorPrototype%
var proto2 = Object.getPrototypeOf(proto1);

return proto2.hasOwnProperty(Symbol.iterator) &amp;&amp;
  !proto1    .hasOwnProperty(Symbol.iterator) &amp;&amp;
  !iterator  .hasOwnProperty(Symbol.iterator) &amp;&amp;
  iterator[Symbol.iterator]() === iterator;</div>}
```
###String.prototype.codePointAt
          
```
function(){
              <div class="code">return typeof String.prototype.codePointAt === 'function';</div>}
```
###String.prototype.normalize
          
```
function(){
              <div class="code">return typeof String.prototype.normalize === &quot;function&quot;
  &amp;&amp; &quot;c\u0327\u0301&quot;.normalize(&quot;NFC&quot;) === &quot;\u1e09&quot;
  &amp;&amp; &quot;\u1e09&quot;.normalize(&quot;NFD&quot;) === &quot;c\u0327\u0301&quot;;</div>}
```
###String.prototype.repeat
          
```
function(){
              <div class="code">return typeof String.prototype.repeat === 'function'
  &amp;&amp; &quot;foo&quot;.repeat(3) === &quot;foofoofoo&quot;;</div>}
```
###String.prototype.startsWith
          
```
function(){
              <div class="code">return typeof String.prototype.startsWith === 'function'
  &amp;&amp; &quot;foobar&quot;.startsWith(&quot;foo&quot;);</div>}
```
###String.prototype.endsWith
          
```
function(){
              <div class="code">return typeof String.prototype.endsWith === 'function'
  &amp;&amp; &quot;foobar&quot;.endsWith(&quot;bar&quot;);</div>}
```
###String.prototype.includes
          
```
function(){
              <div class="code">return typeof String.prototype.includes === 'function'
  &amp;&amp; &quot;foobar&quot;.includes(&quot;oba&quot;);</div>}
```
###String.prototype[Symbol.iterator]
          
```
function(){
              <div class="code">return typeof String.prototype[Symbol.iterator] === 'function';</div>}
```
###String iterator prototype chain
          
```
function(){
              <div class="code">// Iterator instance
var iterator = ''[Symbol.iterator]();
// %StringIteratorPrototype%
var proto1 = Object.getPrototypeOf(iterator);
// %IteratorPrototype%
var proto2 = Object.getPrototypeOf(proto1);

return proto2.hasOwnProperty(Symbol.iterator) &amp;&amp;
  !proto1    .hasOwnProperty(Symbol.iterator) &amp;&amp;
  !iterator  .hasOwnProperty(Symbol.iterator) &amp;&amp;
  iterator[Symbol.iterator]() === iterator;</div>}
```
###String.prototype.codePointAt
          
```
function(){
              <div class="code">return typeof String.prototype.codePointAt === 'function';</div>}
```
###String.prototype.normalize
          
```
function(){
              <div class="code">return typeof String.prototype.normalize === &quot;function&quot;
  &amp;&amp; &quot;c\u0327\u0301&quot;.normalize(&quot;NFC&quot;) === &quot;\u1e09&quot;
  &amp;&amp; &quot;\u1e09&quot;.normalize(&quot;NFD&quot;) === &quot;c\u0327\u0301&quot;;</div>}
```
###String.prototype.repeat
          
```
function(){
              <div class="code">return typeof String.prototype.repeat === 'function'
  &amp;&amp; &quot;foo&quot;.repeat(3) === &quot;foofoofoo&quot;;</div>}
```
###String.prototype.startsWith
          
```
function(){
              <div class="code">return typeof String.prototype.startsWith === 'function'
  &amp;&amp; &quot;foobar&quot;.startsWith(&quot;foo&quot;);</div>}
```
###String.prototype.endsWith
          
```
function(){
              <div class="code">return typeof String.prototype.endsWith === 'function'
  &amp;&amp; &quot;foobar&quot;.endsWith(&quot;bar&quot;);</div>}
```
###String.prototype.includes
          
```
function(){
              <div class="code">return typeof String.prototype.includes === 'function'
  &amp;&amp; &quot;foobar&quot;.includes(&quot;oba&quot;);</div>}
```
###String.prototype[Symbol.iterator]
          
```
function(){
              <div class="code">return typeof String.prototype[Symbol.iterator] === 'function';</div>}
```
###String iterator prototype chain
          
```
function(){
              <div class="code">// Iterator instance
var iterator = ''[Symbol.iterator]();
// %StringIteratorPrototype%
var proto1 = Object.getPrototypeOf(iterator);
// %IteratorPrototype%
var proto2 = Object.getPrototypeOf(proto1);

return proto2.hasOwnProperty(Symbol.iterator) &amp;&amp;
  !proto1    .hasOwnProperty(Symbol.iterator) &amp;&amp;
  !iterator  .hasOwnProperty(Symbol.iterator) &amp;&amp;
  iterator[Symbol.iterator]() === iterator;</div>}
```
###String.prototype.codePointAt
          
```
function(){
              <div class="code">return typeof String.prototype.codePointAt === 'function';</div>}
```
###String.prototype.normalize
          
```
function(){
              <div class="code">return typeof String.prototype.normalize === &quot;function&quot;
  &amp;&amp; &quot;c\u0327\u0301&quot;.normalize(&quot;NFC&quot;) === &quot;\u1e09&quot;
  &amp;&amp; &quot;\u1e09&quot;.normalize(&quot;NFD&quot;) === &quot;c\u0327\u0301&quot;;</div>}
```
###String.prototype.repeat
          
```
function(){
              <div class="code">return typeof String.prototype.repeat === 'function'
  &amp;&amp; &quot;foo&quot;.repeat(3) === &quot;foofoofoo&quot;;</div>}
```
###String.prototype.startsWith
          
```
function(){
              <div class="code">return typeof String.prototype.startsWith === 'function'
  &amp;&amp; &quot;foobar&quot;.startsWith(&quot;foo&quot;);</div>}
```
###String.prototype.endsWith
          
```
function(){
              <div class="code">return typeof String.prototype.endsWith === 'function'
  &amp;&amp; &quot;foobar&quot;.endsWith(&quot;bar&quot;);</div>}
```
###String.prototype.includes
          
```
function(){
              <div class="code">return typeof String.prototype.includes === 'function'
  &amp;&amp; &quot;foobar&quot;.includes(&quot;oba&quot;);</div>}
```
###String.prototype[Symbol.iterator]
          
```
function(){
              <div class="code">return typeof String.prototype[Symbol.iterator] === 'function';</div>}
```
###String iterator prototype chain
          
```
function(){
              <div class="code">// Iterator instance
var iterator = ''[Symbol.iterator]();
// %StringIteratorPrototype%
var proto1 = Object.getPrototypeOf(iterator);
// %IteratorPrototype%
var proto2 = Object.getPrototypeOf(proto1);

return proto2.hasOwnProperty(Symbol.iterator) &amp;&amp;
  !proto1    .hasOwnProperty(Symbol.iterator) &amp;&amp;
  !iterator  .hasOwnProperty(Symbol.iterator) &amp;&amp;
  iterator[Symbol.iterator]() === iterator;</div>}
```
###String.prototype.codePointAt
          
```
function(){
              <div class="code">return typeof String.prototype.codePointAt === 'function';</div>}
```
###String.prototype.normalize
          
```
function(){
              <div class="code">return typeof String.prototype.normalize === &quot;function&quot;
  &amp;&amp; &quot;c\u0327\u0301&quot;.normalize(&quot;NFC&quot;) === &quot;\u1e09&quot;
  &amp;&amp; &quot;\u1e09&quot;.normalize(&quot;NFD&quot;) === &quot;c\u0327\u0301&quot;;</div>}
```
###String.prototype.repeat
          
```
function(){
              <div class="code">return typeof String.prototype.repeat === 'function'
  &amp;&amp; &quot;foo&quot;.repeat(3) === &quot;foofoofoo&quot;;</div>}
```
###String.prototype.startsWith
          
```
function(){
              <div class="code">return typeof String.prototype.startsWith === 'function'
  &amp;&amp; &quot;foobar&quot;.startsWith(&quot;foo&quot;);</div>}
```
###String.prototype.endsWith
          
```
function(){
              <div class="code">return typeof String.prototype.endsWith === 'function'
  &amp;&amp; &quot;foobar&quot;.endsWith(&quot;bar&quot;);</div>}
```
###String.prototype.includes
          
```
function(){
              <div class="code">return typeof String.prototype.includes === 'function'
  &amp;&amp; &quot;foobar&quot;.includes(&quot;oba&quot;);</div>}
```
###String.prototype[Symbol.iterator]
          
```
function(){
              <div class="code">return typeof String.prototype[Symbol.iterator] === 'function';</div>}
```
###String iterator prototype chain
          
```
function(){
              <div class="code">// Iterator instance
var iterator = ''[Symbol.iterator]();
// %StringIteratorPrototype%
var proto1 = Object.getPrototypeOf(iterator);
// %IteratorPrototype%
var proto2 = Object.getPrototypeOf(proto1);

return proto2.hasOwnProperty(Symbol.iterator) &amp;&amp;
  !proto1    .hasOwnProperty(Symbol.iterator) &amp;&amp;
  !iterator  .hasOwnProperty(Symbol.iterator) &amp;&amp;
  iterator[Symbol.iterator]() === iterator;</div>}
```
###String.prototype.codePointAt
          
```
function(){
              <div class="code">return typeof String.prototype.codePointAt === 'function';</div>}
```
###String.prototype.normalize
          
```
function(){
              <div class="code">return typeof String.prototype.normalize === &quot;function&quot;
  &amp;&amp; &quot;c\u0327\u0301&quot;.normalize(&quot;NFC&quot;) === &quot;\u1e09&quot;
  &amp;&amp; &quot;\u1e09&quot;.normalize(&quot;NFD&quot;) === &quot;c\u0327\u0301&quot;;</div>}
```
###String.prototype.repeat
          
```
function(){
              <div class="code">return typeof String.prototype.repeat === 'function'
  &amp;&amp; &quot;foo&quot;.repeat(3) === &quot;foofoofoo&quot;;</div>}
```
###String.prototype.startsWith
          
```
function(){
              <div class="code">return typeof String.prototype.startsWith === 'function'
  &amp;&amp; &quot;foobar&quot;.startsWith(&quot;foo&quot;);</div>}
```
###String.prototype.endsWith
          
```
function(){
              <div class="code">return typeof String.prototype.endsWith === 'function'
  &amp;&amp; &quot;foobar&quot;.endsWith(&quot;bar&quot;);</div>}
```
###String.prototype.includes
          
```
function(){
              <div class="code">return typeof String.prototype.includes === 'function'
  &amp;&amp; &quot;foobar&quot;.includes(&quot;oba&quot;);</div>}
```
###String.prototype[Symbol.iterator]
          
```
function(){
              <div class="code">return typeof String.prototype[Symbol.iterator] === 'function';</div>}
```
###String iterator prototype chain
          
```
function(){
              <div class="code">// Iterator instance
var iterator = ''[Symbol.iterator]();
// %StringIteratorPrototype%
var proto1 = Object.getPrototypeOf(iterator);
// %IteratorPrototype%
var proto2 = Object.getPrototypeOf(proto1);

return proto2.hasOwnProperty(Symbol.iterator) &amp;&amp;
  !proto1    .hasOwnProperty(Symbol.iterator) &amp;&amp;
  !iterator  .hasOwnProperty(Symbol.iterator) &amp;&amp;
  iterator[Symbol.iterator]() === iterator;</div>}
```
###String.prototype.codePointAt
          
```
function(){
              <div class="code">return typeof String.prototype.codePointAt === 'function';</div>}
```
###String.prototype.normalize
          
```
function(){
              <div class="code">return typeof String.prototype.normalize === &quot;function&quot;
  &amp;&amp; &quot;c\u0327\u0301&quot;.normalize(&quot;NFC&quot;) === &quot;\u1e09&quot;
  &amp;&amp; &quot;\u1e09&quot;.normalize(&quot;NFD&quot;) === &quot;c\u0327\u0301&quot;;</div>}
```
###String.prototype.repeat
          
```
function(){
              <div class="code">return typeof String.prototype.repeat === 'function'
  &amp;&amp; &quot;foo&quot;.repeat(3) === &quot;foofoofoo&quot;;</div>}
```
###String.prototype.startsWith
          
```
function(){
              <div class="code">return typeof String.prototype.startsWith === 'function'
  &amp;&amp; &quot;foobar&quot;.startsWith(&quot;foo&quot;);</div>}
```
###String.prototype.endsWith
          
```
function(){
              <div class="code">return typeof String.prototype.endsWith === 'function'
  &amp;&amp; &quot;foobar&quot;.endsWith(&quot;bar&quot;);</div>}
```
###String.prototype.includes
          
```
function(){
              <div class="code">return typeof String.prototype.includes === 'function'
  &amp;&amp; &quot;foobar&quot;.includes(&quot;oba&quot;);</div>}
```
###String.prototype[Symbol.iterator]
          
```
function(){
              <div class="code">return typeof String.prototype[Symbol.iterator] === 'function';</div>}
```
###String iterator prototype chain
          
```
function(){
              <div class="code">// Iterator instance
var iterator = ''[Symbol.iterator]();
// %StringIteratorPrototype%
var proto1 = Object.getPrototypeOf(iterator);
// %IteratorPrototype%
var proto2 = Object.getPrototypeOf(proto1);

return proto2.hasOwnProperty(Symbol.iterator) &amp;&amp;
  !proto1    .hasOwnProperty(Symbol.iterator) &amp;&amp;
  !iterator  .hasOwnProperty(Symbol.iterator) &amp;&amp;
  iterator[Symbol.iterator]() === iterator;</div>}
```
###String.prototype.codePointAt
          
```
function(){
              <div class="code">return typeof String.prototype.codePointAt === 'function';</div>}
```
###String.prototype.normalize
          
```
function(){
              <div class="code">return typeof String.prototype.normalize === &quot;function&quot;
  &amp;&amp; &quot;c\u0327\u0301&quot;.normalize(&quot;NFC&quot;) === &quot;\u1e09&quot;
  &amp;&amp; &quot;\u1e09&quot;.normalize(&quot;NFD&quot;) === &quot;c\u0327\u0301&quot;;</div>}
```
###String.prototype.repeat
          
```
function(){
              <div class="code">return typeof String.prototype.repeat === 'function'
  &amp;&amp; &quot;foo&quot;.repeat(3) === &quot;foofoofoo&quot;;</div>}
```
###String.prototype.startsWith
          
```
function(){
              <div class="code">return typeof String.prototype.startsWith === 'function'
  &amp;&amp; &quot;foobar&quot;.startsWith(&quot;foo&quot;);</div>}
```
###String.prototype.endsWith
          
```
function(){
              <div class="code">return typeof String.prototype.endsWith === 'function'
  &amp;&amp; &quot;foobar&quot;.endsWith(&quot;bar&quot;);</div>}
```
###String.prototype.includes
          
```
function(){
              <div class="code">return typeof String.prototype.includes === 'function'
  &amp;&amp; &quot;foobar&quot;.includes(&quot;oba&quot;);</div>}
```
###String.prototype[Symbol.iterator]
          
```
function(){
              <div class="code">return typeof String.prototype[Symbol.iterator] === 'function';</div>}
```
###String iterator prototype chain
          
```
function(){
              <div class="code">// Iterator instance
var iterator = ''[Symbol.iterator]();
// %StringIteratorPrototype%
var proto1 = Object.getPrototypeOf(iterator);
// %IteratorPrototype%
var proto2 = Object.getPrototypeOf(proto1);

return proto2.hasOwnProperty(Symbol.iterator) &amp;&amp;
  !proto1    .hasOwnProperty(Symbol.iterator) &amp;&amp;
  !iterator  .hasOwnProperty(Symbol.iterator) &amp;&amp;
  iterator[Symbol.iterator]() === iterator;</div>}
```
