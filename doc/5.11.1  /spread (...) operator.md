###with arrays, in function calls
          
```
function(){
              <div class="code">return Math.max(...[1, 2, 3]) === 3</div>}
```
###with arrays, in array literals
          
```
function(){
              <div class="code">return [...[1, 2, 3]][2] === 3;</div>}
```
###with sparse arrays, in function calls
          
```
function(){
              <div class="code">var a = Array(...[,,]);
return &quot;0&quot; in a &amp;&amp; &quot;1&quot; in a &amp;&amp; '' + a[0] + a[1] === &quot;undefinedundefined&quot;;</div>}
```
###with sparse arrays, in array literals
          
```
function(){
              <div class="code">var a = [...[,,]];
return &quot;0&quot; in a &amp;&amp; &quot;1&quot; in a &amp;&amp; '' + a[0] + a[1] === &quot;undefinedundefined&quot;;</div>}
```
###with strings, in function calls
          
```
function(){
              <div class="code">return Math.max(...&quot;1234&quot;) === 4;</div>}
```
###with strings, in array literals
          
```
function(){
              <div class="code">return [&quot;a&quot;, ...&quot;bcd&quot;, &quot;e&quot;][3] === &quot;d&quot;;</div>}
```
###with astral plane strings, in function calls
          
```
function(){
              <div class="code">return Array(...&quot;𠮷𠮶&quot;)[0] === &quot;𠮷&quot;;</div>}
```
###with astral plane strings, in array literals
          
```
function(){
              <div class="code">return [...&quot;𠮷𠮶&quot;][0] === &quot;𠮷&quot;;</div>}
```
###with generator instances, in calls
          
```
function(){
              <div class="code">var iterable = (function*(){ yield 1; yield 2; yield 3; }());
return Math.max(...iterable) === 3;</div>}
```
###with generator instances, in arrays
          
```
function(){
              <div class="code">var iterable = (function*(){ yield &quot;b&quot;; yield &quot;c&quot;; yield &quot;d&quot;; }());
return [&quot;a&quot;, ...iterable, &quot;e&quot;][3] === &quot;d&quot;;</div>}
```
###with generic iterables, in calls
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([1, 2, 3]);
return Math.max(...iterable) === 3;</div>}
```
###with generic iterables, in arrays
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([&quot;b&quot;, &quot;c&quot;, &quot;d&quot;]);
return [&quot;a&quot;, ...iterable, &quot;e&quot;][3] === &quot;d&quot;;</div>}
```
###with instances of iterables, in calls
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([1, 2, 3]);
return Math.max(...Object.create(iterable)) === 3;</div>}
```
###with instances of iterables, in arrays
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([&quot;b&quot;, &quot;c&quot;, &quot;d&quot;]);
return [&quot;a&quot;, ...Object.create(iterable), &quot;e&quot;][3] === &quot;d&quot;;</div>}
```
###spreading non-iterables is a runtime error
          
```
function(){
              <div class="code">try {
  Math.max(...2);
} catch(e) {
  return Math.max(...[1, 2, 3]) === 3;
}</div>}
```
###with arrays, in function calls
          
```
function(){
              <div class="code">return Math.max(...[1, 2, 3]) === 3</div>}
```
###with arrays, in array literals
          
```
function(){
              <div class="code">return [...[1, 2, 3]][2] === 3;</div>}
```
###with sparse arrays, in function calls
          
```
function(){
              <div class="code">var a = Array(...[,,]);
return &quot;0&quot; in a &amp;&amp; &quot;1&quot; in a &amp;&amp; '' + a[0] + a[1] === &quot;undefinedundefined&quot;;</div>}
```
###with sparse arrays, in array literals
          
```
function(){
              <div class="code">var a = [...[,,]];
return &quot;0&quot; in a &amp;&amp; &quot;1&quot; in a &amp;&amp; '' + a[0] + a[1] === &quot;undefinedundefined&quot;;</div>}
```
###with strings, in function calls
          
```
function(){
              <div class="code">return Math.max(...&quot;1234&quot;) === 4;</div>}
```
###with strings, in array literals
          
```
function(){
              <div class="code">return [&quot;a&quot;, ...&quot;bcd&quot;, &quot;e&quot;][3] === &quot;d&quot;;</div>}
```
###with astral plane strings, in function calls
          
```
function(){
              <div class="code">return Array(...&quot;𠮷𠮶&quot;)[0] === &quot;𠮷&quot;;</div>}
```
###with astral plane strings, in array literals
          
```
function(){
              <div class="code">return [...&quot;𠮷𠮶&quot;][0] === &quot;𠮷&quot;;</div>}
```
###with generator instances, in calls
          
```
function(){
              <div class="code">var iterable = (function*(){ yield 1; yield 2; yield 3; }());
return Math.max(...iterable) === 3;</div>}
```
###with generator instances, in arrays
          
```
function(){
              <div class="code">var iterable = (function*(){ yield &quot;b&quot;; yield &quot;c&quot;; yield &quot;d&quot;; }());
return [&quot;a&quot;, ...iterable, &quot;e&quot;][3] === &quot;d&quot;;</div>}
```
###with generic iterables, in calls
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([1, 2, 3]);
return Math.max(...iterable) === 3;</div>}
```
###with generic iterables, in arrays
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([&quot;b&quot;, &quot;c&quot;, &quot;d&quot;]);
return [&quot;a&quot;, ...iterable, &quot;e&quot;][3] === &quot;d&quot;;</div>}
```
###with instances of iterables, in calls
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([1, 2, 3]);
return Math.max(...Object.create(iterable)) === 3;</div>}
```
###with instances of iterables, in arrays
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([&quot;b&quot;, &quot;c&quot;, &quot;d&quot;]);
return [&quot;a&quot;, ...Object.create(iterable), &quot;e&quot;][3] === &quot;d&quot;;</div>}
```
###spreading non-iterables is a runtime error
          
```
function(){
              <div class="code">try {
  Math.max(...2);
} catch(e) {
  return Math.max(...[1, 2, 3]) === 3;
}</div>}
```
###with arrays, in function calls
          
```
function(){
              <div class="code">return Math.max(...[1, 2, 3]) === 3</div>}
```
###with arrays, in array literals
          
```
function(){
              <div class="code">return [...[1, 2, 3]][2] === 3;</div>}
```
###with sparse arrays, in function calls
          
```
function(){
              <div class="code">var a = Array(...[,,]);
return &quot;0&quot; in a &amp;&amp; &quot;1&quot; in a &amp;&amp; '' + a[0] + a[1] === &quot;undefinedundefined&quot;;</div>}
```
###with sparse arrays, in array literals
          
```
function(){
              <div class="code">var a = [...[,,]];
return &quot;0&quot; in a &amp;&amp; &quot;1&quot; in a &amp;&amp; '' + a[0] + a[1] === &quot;undefinedundefined&quot;;</div>}
```
###with strings, in function calls
          
```
function(){
              <div class="code">return Math.max(...&quot;1234&quot;) === 4;</div>}
```
###with strings, in array literals
          
```
function(){
              <div class="code">return [&quot;a&quot;, ...&quot;bcd&quot;, &quot;e&quot;][3] === &quot;d&quot;;</div>}
```
###with astral plane strings, in function calls
          
```
function(){
              <div class="code">return Array(...&quot;𠮷𠮶&quot;)[0] === &quot;𠮷&quot;;</div>}
```
###with astral plane strings, in array literals
          
```
function(){
              <div class="code">return [...&quot;𠮷𠮶&quot;][0] === &quot;𠮷&quot;;</div>}
```
###with generator instances, in calls
          
```
function(){
              <div class="code">var iterable = (function*(){ yield 1; yield 2; yield 3; }());
return Math.max(...iterable) === 3;</div>}
```
###with generator instances, in arrays
          
```
function(){
              <div class="code">var iterable = (function*(){ yield &quot;b&quot;; yield &quot;c&quot;; yield &quot;d&quot;; }());
return [&quot;a&quot;, ...iterable, &quot;e&quot;][3] === &quot;d&quot;;</div>}
```
###with generic iterables, in calls
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([1, 2, 3]);
return Math.max(...iterable) === 3;</div>}
```
###with generic iterables, in arrays
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([&quot;b&quot;, &quot;c&quot;, &quot;d&quot;]);
return [&quot;a&quot;, ...iterable, &quot;e&quot;][3] === &quot;d&quot;;</div>}
```
###with instances of iterables, in calls
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([1, 2, 3]);
return Math.max(...Object.create(iterable)) === 3;</div>}
```
###with instances of iterables, in arrays
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([&quot;b&quot;, &quot;c&quot;, &quot;d&quot;]);
return [&quot;a&quot;, ...Object.create(iterable), &quot;e&quot;][3] === &quot;d&quot;;</div>}
```
###spreading non-iterables is a runtime error
          
```
function(){
              <div class="code">try {
  Math.max(...2);
} catch(e) {
  return Math.max(...[1, 2, 3]) === 3;
}</div>}
```
###with arrays, in function calls
          
```
function(){
              <div class="code">return Math.max(...[1, 2, 3]) === 3</div>}
```
###with arrays, in array literals
          
```
function(){
              <div class="code">return [...[1, 2, 3]][2] === 3;</div>}
```
###with sparse arrays, in function calls
          
```
function(){
              <div class="code">var a = Array(...[,,]);
return &quot;0&quot; in a &amp;&amp; &quot;1&quot; in a &amp;&amp; '' + a[0] + a[1] === &quot;undefinedundefined&quot;;</div>}
```
###with sparse arrays, in array literals
          
```
function(){
              <div class="code">var a = [...[,,]];
return &quot;0&quot; in a &amp;&amp; &quot;1&quot; in a &amp;&amp; '' + a[0] + a[1] === &quot;undefinedundefined&quot;;</div>}
```
###with strings, in function calls
          
```
function(){
              <div class="code">return Math.max(...&quot;1234&quot;) === 4;</div>}
```
###with strings, in array literals
          
```
function(){
              <div class="code">return [&quot;a&quot;, ...&quot;bcd&quot;, &quot;e&quot;][3] === &quot;d&quot;;</div>}
```
###with astral plane strings, in function calls
          
```
function(){
              <div class="code">return Array(...&quot;𠮷𠮶&quot;)[0] === &quot;𠮷&quot;;</div>}
```
###with astral plane strings, in array literals
          
```
function(){
              <div class="code">return [...&quot;𠮷𠮶&quot;][0] === &quot;𠮷&quot;;</div>}
```
###with generator instances, in calls
          
```
function(){
              <div class="code">var iterable = (function*(){ yield 1; yield 2; yield 3; }());
return Math.max(...iterable) === 3;</div>}
```
###with generator instances, in arrays
          
```
function(){
              <div class="code">var iterable = (function*(){ yield &quot;b&quot;; yield &quot;c&quot;; yield &quot;d&quot;; }());
return [&quot;a&quot;, ...iterable, &quot;e&quot;][3] === &quot;d&quot;;</div>}
```
###with generic iterables, in calls
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([1, 2, 3]);
return Math.max(...iterable) === 3;</div>}
```
###with generic iterables, in arrays
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([&quot;b&quot;, &quot;c&quot;, &quot;d&quot;]);
return [&quot;a&quot;, ...iterable, &quot;e&quot;][3] === &quot;d&quot;;</div>}
```
###with instances of iterables, in calls
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([1, 2, 3]);
return Math.max(...Object.create(iterable)) === 3;</div>}
```
###with instances of iterables, in arrays
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([&quot;b&quot;, &quot;c&quot;, &quot;d&quot;]);
return [&quot;a&quot;, ...Object.create(iterable), &quot;e&quot;][3] === &quot;d&quot;;</div>}
```
###spreading non-iterables is a runtime error
          
```
function(){
              <div class="code">try {
  Math.max(...2);
} catch(e) {
  return Math.max(...[1, 2, 3]) === 3;
}</div>}
```
###with arrays, in function calls
          
```
function(){
              <div class="code">return Math.max(...[1, 2, 3]) === 3</div>}
```
###with arrays, in array literals
          
```
function(){
              <div class="code">return [...[1, 2, 3]][2] === 3;</div>}
```
###with sparse arrays, in function calls
          
```
function(){
              <div class="code">var a = Array(...[,,]);
return &quot;0&quot; in a &amp;&amp; &quot;1&quot; in a &amp;&amp; '' + a[0] + a[1] === &quot;undefinedundefined&quot;;</div>}
```
###with sparse arrays, in array literals
          
```
function(){
              <div class="code">var a = [...[,,]];
return &quot;0&quot; in a &amp;&amp; &quot;1&quot; in a &amp;&amp; '' + a[0] + a[1] === &quot;undefinedundefined&quot;;</div>}
```
###with strings, in function calls
          
```
function(){
              <div class="code">return Math.max(...&quot;1234&quot;) === 4;</div>}
```
###with strings, in array literals
          
```
function(){
              <div class="code">return [&quot;a&quot;, ...&quot;bcd&quot;, &quot;e&quot;][3] === &quot;d&quot;;</div>}
```
###with astral plane strings, in function calls
          
```
function(){
              <div class="code">return Array(...&quot;𠮷𠮶&quot;)[0] === &quot;𠮷&quot;;</div>}
```
###with astral plane strings, in array literals
          
```
function(){
              <div class="code">return [...&quot;𠮷𠮶&quot;][0] === &quot;𠮷&quot;;</div>}
```
###with generator instances, in calls
          
```
function(){
              <div class="code">var iterable = (function*(){ yield 1; yield 2; yield 3; }());
return Math.max(...iterable) === 3;</div>}
```
###with generator instances, in arrays
          
```
function(){
              <div class="code">var iterable = (function*(){ yield &quot;b&quot;; yield &quot;c&quot;; yield &quot;d&quot;; }());
return [&quot;a&quot;, ...iterable, &quot;e&quot;][3] === &quot;d&quot;;</div>}
```
###with generic iterables, in calls
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([1, 2, 3]);
return Math.max(...iterable) === 3;</div>}
```
###with generic iterables, in arrays
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([&quot;b&quot;, &quot;c&quot;, &quot;d&quot;]);
return [&quot;a&quot;, ...iterable, &quot;e&quot;][3] === &quot;d&quot;;</div>}
```
###with instances of iterables, in calls
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([1, 2, 3]);
return Math.max(...Object.create(iterable)) === 3;</div>}
```
###with instances of iterables, in arrays
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([&quot;b&quot;, &quot;c&quot;, &quot;d&quot;]);
return [&quot;a&quot;, ...Object.create(iterable), &quot;e&quot;][3] === &quot;d&quot;;</div>}
```
###spreading non-iterables is a runtime error
          
```
function(){
              <div class="code">try {
  Math.max(...2);
} catch(e) {
  return Math.max(...[1, 2, 3]) === 3;
}</div>}
```
###with arrays, in function calls
          
```
function(){
              <div class="code">return Math.max(...[1, 2, 3]) === 3</div>}
```
###with arrays, in array literals
          
```
function(){
              <div class="code">return [...[1, 2, 3]][2] === 3;</div>}
```
###with sparse arrays, in function calls
          
```
function(){
              <div class="code">var a = Array(...[,,]);
return &quot;0&quot; in a &amp;&amp; &quot;1&quot; in a &amp;&amp; '' + a[0] + a[1] === &quot;undefinedundefined&quot;;</div>}
```
###with sparse arrays, in array literals
          
```
function(){
              <div class="code">var a = [...[,,]];
return &quot;0&quot; in a &amp;&amp; &quot;1&quot; in a &amp;&amp; '' + a[0] + a[1] === &quot;undefinedundefined&quot;;</div>}
```
###with strings, in function calls
          
```
function(){
              <div class="code">return Math.max(...&quot;1234&quot;) === 4;</div>}
```
###with strings, in array literals
          
```
function(){
              <div class="code">return [&quot;a&quot;, ...&quot;bcd&quot;, &quot;e&quot;][3] === &quot;d&quot;;</div>}
```
###with astral plane strings, in function calls
          
```
function(){
              <div class="code">return Array(...&quot;𠮷𠮶&quot;)[0] === &quot;𠮷&quot;;</div>}
```
###with astral plane strings, in array literals
          
```
function(){
              <div class="code">return [...&quot;𠮷𠮶&quot;][0] === &quot;𠮷&quot;;</div>}
```
###with generator instances, in calls
          
```
function(){
              <div class="code">var iterable = (function*(){ yield 1; yield 2; yield 3; }());
return Math.max(...iterable) === 3;</div>}
```
###with generator instances, in arrays
          
```
function(){
              <div class="code">var iterable = (function*(){ yield &quot;b&quot;; yield &quot;c&quot;; yield &quot;d&quot;; }());
return [&quot;a&quot;, ...iterable, &quot;e&quot;][3] === &quot;d&quot;;</div>}
```
###with generic iterables, in calls
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([1, 2, 3]);
return Math.max(...iterable) === 3;</div>}
```
###with generic iterables, in arrays
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([&quot;b&quot;, &quot;c&quot;, &quot;d&quot;]);
return [&quot;a&quot;, ...iterable, &quot;e&quot;][3] === &quot;d&quot;;</div>}
```
###with instances of iterables, in calls
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([1, 2, 3]);
return Math.max(...Object.create(iterable)) === 3;</div>}
```
###with instances of iterables, in arrays
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([&quot;b&quot;, &quot;c&quot;, &quot;d&quot;]);
return [&quot;a&quot;, ...Object.create(iterable), &quot;e&quot;][3] === &quot;d&quot;;</div>}
```
###spreading non-iterables is a runtime error
          
```
function(){
              <div class="code">try {
  Math.max(...2);
} catch(e) {
  return Math.max(...[1, 2, 3]) === 3;
}</div>}
```
###with arrays, in function calls
          
```
function(){
              <div class="code">return Math.max(...[1, 2, 3]) === 3</div>}
```
###with arrays, in array literals
          
```
function(){
              <div class="code">return [...[1, 2, 3]][2] === 3;</div>}
```
###with sparse arrays, in function calls
          
```
function(){
              <div class="code">var a = Array(...[,,]);
return &quot;0&quot; in a &amp;&amp; &quot;1&quot; in a &amp;&amp; '' + a[0] + a[1] === &quot;undefinedundefined&quot;;</div>}
```
###with sparse arrays, in array literals
          
```
function(){
              <div class="code">var a = [...[,,]];
return &quot;0&quot; in a &amp;&amp; &quot;1&quot; in a &amp;&amp; '' + a[0] + a[1] === &quot;undefinedundefined&quot;;</div>}
```
###with strings, in function calls
          
```
function(){
              <div class="code">return Math.max(...&quot;1234&quot;) === 4;</div>}
```
###with strings, in array literals
          
```
function(){
              <div class="code">return [&quot;a&quot;, ...&quot;bcd&quot;, &quot;e&quot;][3] === &quot;d&quot;;</div>}
```
###with astral plane strings, in function calls
          
```
function(){
              <div class="code">return Array(...&quot;𠮷𠮶&quot;)[0] === &quot;𠮷&quot;;</div>}
```
###with astral plane strings, in array literals
          
```
function(){
              <div class="code">return [...&quot;𠮷𠮶&quot;][0] === &quot;𠮷&quot;;</div>}
```
###with generator instances, in calls
          
```
function(){
              <div class="code">var iterable = (function*(){ yield 1; yield 2; yield 3; }());
return Math.max(...iterable) === 3;</div>}
```
###with generator instances, in arrays
          
```
function(){
              <div class="code">var iterable = (function*(){ yield &quot;b&quot;; yield &quot;c&quot;; yield &quot;d&quot;; }());
return [&quot;a&quot;, ...iterable, &quot;e&quot;][3] === &quot;d&quot;;</div>}
```
###with generic iterables, in calls
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([1, 2, 3]);
return Math.max(...iterable) === 3;</div>}
```
###with generic iterables, in arrays
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([&quot;b&quot;, &quot;c&quot;, &quot;d&quot;]);
return [&quot;a&quot;, ...iterable, &quot;e&quot;][3] === &quot;d&quot;;</div>}
```
###with instances of iterables, in calls
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([1, 2, 3]);
return Math.max(...Object.create(iterable)) === 3;</div>}
```
###with instances of iterables, in arrays
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([&quot;b&quot;, &quot;c&quot;, &quot;d&quot;]);
return [&quot;a&quot;, ...Object.create(iterable), &quot;e&quot;][3] === &quot;d&quot;;</div>}
```
###spreading non-iterables is a runtime error
          
```
function(){
              <div class="code">try {
  Math.max(...2);
} catch(e) {
  return Math.max(...[1, 2, 3]) === 3;
}</div>}
```
###with arrays, in function calls
          
```
function(){
              <div class="code">return Math.max(...[1, 2, 3]) === 3</div>}
```
###with arrays, in array literals
          
```
function(){
              <div class="code">return [...[1, 2, 3]][2] === 3;</div>}
```
###with sparse arrays, in function calls
          
```
function(){
              <div class="code">var a = Array(...[,,]);
return &quot;0&quot; in a &amp;&amp; &quot;1&quot; in a &amp;&amp; '' + a[0] + a[1] === &quot;undefinedundefined&quot;;</div>}
```
###with sparse arrays, in array literals
          
```
function(){
              <div class="code">var a = [...[,,]];
return &quot;0&quot; in a &amp;&amp; &quot;1&quot; in a &amp;&amp; '' + a[0] + a[1] === &quot;undefinedundefined&quot;;</div>}
```
###with strings, in function calls
          
```
function(){
              <div class="code">return Math.max(...&quot;1234&quot;) === 4;</div>}
```
###with strings, in array literals
          
```
function(){
              <div class="code">return [&quot;a&quot;, ...&quot;bcd&quot;, &quot;e&quot;][3] === &quot;d&quot;;</div>}
```
###with astral plane strings, in function calls
          
```
function(){
              <div class="code">return Array(...&quot;𠮷𠮶&quot;)[0] === &quot;𠮷&quot;;</div>}
```
###with astral plane strings, in array literals
          
```
function(){
              <div class="code">return [...&quot;𠮷𠮶&quot;][0] === &quot;𠮷&quot;;</div>}
```
###with generator instances, in calls
          
```
function(){
              <div class="code">var iterable = (function*(){ yield 1; yield 2; yield 3; }());
return Math.max(...iterable) === 3;</div>}
```
###with generator instances, in arrays
          
```
function(){
              <div class="code">var iterable = (function*(){ yield &quot;b&quot;; yield &quot;c&quot;; yield &quot;d&quot;; }());
return [&quot;a&quot;, ...iterable, &quot;e&quot;][3] === &quot;d&quot;;</div>}
```
###with generic iterables, in calls
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([1, 2, 3]);
return Math.max(...iterable) === 3;</div>}
```
###with generic iterables, in arrays
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([&quot;b&quot;, &quot;c&quot;, &quot;d&quot;]);
return [&quot;a&quot;, ...iterable, &quot;e&quot;][3] === &quot;d&quot;;</div>}
```
###with instances of iterables, in calls
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([1, 2, 3]);
return Math.max(...Object.create(iterable)) === 3;</div>}
```
###with instances of iterables, in arrays
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([&quot;b&quot;, &quot;c&quot;, &quot;d&quot;]);
return [&quot;a&quot;, ...Object.create(iterable), &quot;e&quot;][3] === &quot;d&quot;;</div>}
```
###spreading non-iterables is a runtime error
          
```
function(){
              <div class="code">try {
  Math.max(...2);
} catch(e) {
  return Math.max(...[1, 2, 3]) === 3;
}</div>}
```
###with arrays, in function calls
          
```
function(){
              <div class="code">return Math.max(...[1, 2, 3]) === 3</div>}
```
###with arrays, in array literals
          
```
function(){
              <div class="code">return [...[1, 2, 3]][2] === 3;</div>}
```
###with sparse arrays, in function calls
          
```
function(){
              <div class="code">var a = Array(...[,,]);
return &quot;0&quot; in a &amp;&amp; &quot;1&quot; in a &amp;&amp; '' + a[0] + a[1] === &quot;undefinedundefined&quot;;</div>}
```
###with sparse arrays, in array literals
          
```
function(){
              <div class="code">var a = [...[,,]];
return &quot;0&quot; in a &amp;&amp; &quot;1&quot; in a &amp;&amp; '' + a[0] + a[1] === &quot;undefinedundefined&quot;;</div>}
```
###with strings, in function calls
          
```
function(){
              <div class="code">return Math.max(...&quot;1234&quot;) === 4;</div>}
```
###with strings, in array literals
          
```
function(){
              <div class="code">return [&quot;a&quot;, ...&quot;bcd&quot;, &quot;e&quot;][3] === &quot;d&quot;;</div>}
```
###with astral plane strings, in function calls
          
```
function(){
              <div class="code">return Array(...&quot;𠮷𠮶&quot;)[0] === &quot;𠮷&quot;;</div>}
```
###with astral plane strings, in array literals
          
```
function(){
              <div class="code">return [...&quot;𠮷𠮶&quot;][0] === &quot;𠮷&quot;;</div>}
```
###with generator instances, in calls
          
```
function(){
              <div class="code">var iterable = (function*(){ yield 1; yield 2; yield 3; }());
return Math.max(...iterable) === 3;</div>}
```
###with generator instances, in arrays
          
```
function(){
              <div class="code">var iterable = (function*(){ yield &quot;b&quot;; yield &quot;c&quot;; yield &quot;d&quot;; }());
return [&quot;a&quot;, ...iterable, &quot;e&quot;][3] === &quot;d&quot;;</div>}
```
###with generic iterables, in calls
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([1, 2, 3]);
return Math.max(...iterable) === 3;</div>}
```
###with generic iterables, in arrays
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([&quot;b&quot;, &quot;c&quot;, &quot;d&quot;]);
return [&quot;a&quot;, ...iterable, &quot;e&quot;][3] === &quot;d&quot;;</div>}
```
###with instances of iterables, in calls
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([1, 2, 3]);
return Math.max(...Object.create(iterable)) === 3;</div>}
```
###with instances of iterables, in arrays
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([&quot;b&quot;, &quot;c&quot;, &quot;d&quot;]);
return [&quot;a&quot;, ...Object.create(iterable), &quot;e&quot;][3] === &quot;d&quot;;</div>}
```
###spreading non-iterables is a runtime error
          
```
function(){
              <div class="code">try {
  Math.max(...2);
} catch(e) {
  return Math.max(...[1, 2, 3]) === 3;
}</div>}
```
###with arrays, in function calls
          
```
function(){
              <div class="code">return Math.max(...[1, 2, 3]) === 3</div>}
```
###with arrays, in array literals
          
```
function(){
              <div class="code">return [...[1, 2, 3]][2] === 3;</div>}
```
###with sparse arrays, in function calls
          
```
function(){
              <div class="code">var a = Array(...[,,]);
return &quot;0&quot; in a &amp;&amp; &quot;1&quot; in a &amp;&amp; '' + a[0] + a[1] === &quot;undefinedundefined&quot;;</div>}
```
###with sparse arrays, in array literals
          
```
function(){
              <div class="code">var a = [...[,,]];
return &quot;0&quot; in a &amp;&amp; &quot;1&quot; in a &amp;&amp; '' + a[0] + a[1] === &quot;undefinedundefined&quot;;</div>}
```
###with strings, in function calls
          
```
function(){
              <div class="code">return Math.max(...&quot;1234&quot;) === 4;</div>}
```
###with strings, in array literals
          
```
function(){
              <div class="code">return [&quot;a&quot;, ...&quot;bcd&quot;, &quot;e&quot;][3] === &quot;d&quot;;</div>}
```
###with astral plane strings, in function calls
          
```
function(){
              <div class="code">return Array(...&quot;𠮷𠮶&quot;)[0] === &quot;𠮷&quot;;</div>}
```
###with astral plane strings, in array literals
          
```
function(){
              <div class="code">return [...&quot;𠮷𠮶&quot;][0] === &quot;𠮷&quot;;</div>}
```
###with generator instances, in calls
          
```
function(){
              <div class="code">var iterable = (function*(){ yield 1; yield 2; yield 3; }());
return Math.max(...iterable) === 3;</div>}
```
###with generator instances, in arrays
          
```
function(){
              <div class="code">var iterable = (function*(){ yield &quot;b&quot;; yield &quot;c&quot;; yield &quot;d&quot;; }());
return [&quot;a&quot;, ...iterable, &quot;e&quot;][3] === &quot;d&quot;;</div>}
```
###with generic iterables, in calls
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([1, 2, 3]);
return Math.max(...iterable) === 3;</div>}
```
###with generic iterables, in arrays
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([&quot;b&quot;, &quot;c&quot;, &quot;d&quot;]);
return [&quot;a&quot;, ...iterable, &quot;e&quot;][3] === &quot;d&quot;;</div>}
```
###with instances of iterables, in calls
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([1, 2, 3]);
return Math.max(...Object.create(iterable)) === 3;</div>}
```
###with instances of iterables, in arrays
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([&quot;b&quot;, &quot;c&quot;, &quot;d&quot;]);
return [&quot;a&quot;, ...Object.create(iterable), &quot;e&quot;][3] === &quot;d&quot;;</div>}
```
###spreading non-iterables is a runtime error
          
```
function(){
              <div class="code">try {
  Math.max(...2);
} catch(e) {
  return Math.max(...[1, 2, 3]) === 3;
}</div>}
```
###with arrays, in function calls
          
```
function(){
              <div class="code">return Math.max(...[1, 2, 3]) === 3</div>}
```
###with arrays, in array literals
          
```
function(){
              <div class="code">return [...[1, 2, 3]][2] === 3;</div>}
```
###with sparse arrays, in function calls
          
```
function(){
              <div class="code">var a = Array(...[,,]);
return &quot;0&quot; in a &amp;&amp; &quot;1&quot; in a &amp;&amp; '' + a[0] + a[1] === &quot;undefinedundefined&quot;;</div>}
```
###with sparse arrays, in array literals
          
```
function(){
              <div class="code">var a = [...[,,]];
return &quot;0&quot; in a &amp;&amp; &quot;1&quot; in a &amp;&amp; '' + a[0] + a[1] === &quot;undefinedundefined&quot;;</div>}
```
###with strings, in function calls
          
```
function(){
              <div class="code">return Math.max(...&quot;1234&quot;) === 4;</div>}
```
###with strings, in array literals
          
```
function(){
              <div class="code">return [&quot;a&quot;, ...&quot;bcd&quot;, &quot;e&quot;][3] === &quot;d&quot;;</div>}
```
###with astral plane strings, in function calls
          
```
function(){
              <div class="code">return Array(...&quot;𠮷𠮶&quot;)[0] === &quot;𠮷&quot;;</div>}
```
###with astral plane strings, in array literals
          
```
function(){
              <div class="code">return [...&quot;𠮷𠮶&quot;][0] === &quot;𠮷&quot;;</div>}
```
###with generator instances, in calls
          
```
function(){
              <div class="code">var iterable = (function*(){ yield 1; yield 2; yield 3; }());
return Math.max(...iterable) === 3;</div>}
```
###with generator instances, in arrays
          
```
function(){
              <div class="code">var iterable = (function*(){ yield &quot;b&quot;; yield &quot;c&quot;; yield &quot;d&quot;; }());
return [&quot;a&quot;, ...iterable, &quot;e&quot;][3] === &quot;d&quot;;</div>}
```
###with generic iterables, in calls
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([1, 2, 3]);
return Math.max(...iterable) === 3;</div>}
```
###with generic iterables, in arrays
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([&quot;b&quot;, &quot;c&quot;, &quot;d&quot;]);
return [&quot;a&quot;, ...iterable, &quot;e&quot;][3] === &quot;d&quot;;</div>}
```
###with instances of iterables, in calls
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([1, 2, 3]);
return Math.max(...Object.create(iterable)) === 3;</div>}
```
###with instances of iterables, in arrays
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([&quot;b&quot;, &quot;c&quot;, &quot;d&quot;]);
return [&quot;a&quot;, ...Object.create(iterable), &quot;e&quot;][3] === &quot;d&quot;;</div>}
```
###spreading non-iterables is a runtime error
          
```
function(){
              <div class="code">try {
  Math.max(...2);
} catch(e) {
  return Math.max(...[1, 2, 3]) === 3;
}</div>}
```
###with arrays, in function calls
          
```
function(){
              <div class="code">return Math.max(...[1, 2, 3]) === 3</div>}
```
###with arrays, in array literals
          
```
function(){
              <div class="code">return [...[1, 2, 3]][2] === 3;</div>}
```
###with sparse arrays, in function calls
          
```
function(){
              <div class="code">var a = Array(...[,,]);
return &quot;0&quot; in a &amp;&amp; &quot;1&quot; in a &amp;&amp; '' + a[0] + a[1] === &quot;undefinedundefined&quot;;</div>}
```
###with sparse arrays, in array literals
          
```
function(){
              <div class="code">var a = [...[,,]];
return &quot;0&quot; in a &amp;&amp; &quot;1&quot; in a &amp;&amp; '' + a[0] + a[1] === &quot;undefinedundefined&quot;;</div>}
```
###with strings, in function calls
          
```
function(){
              <div class="code">return Math.max(...&quot;1234&quot;) === 4;</div>}
```
###with strings, in array literals
          
```
function(){
              <div class="code">return [&quot;a&quot;, ...&quot;bcd&quot;, &quot;e&quot;][3] === &quot;d&quot;;</div>}
```
###with astral plane strings, in function calls
          
```
function(){
              <div class="code">return Array(...&quot;𠮷𠮶&quot;)[0] === &quot;𠮷&quot;;</div>}
```
###with astral plane strings, in array literals
          
```
function(){
              <div class="code">return [...&quot;𠮷𠮶&quot;][0] === &quot;𠮷&quot;;</div>}
```
###with generator instances, in calls
          
```
function(){
              <div class="code">var iterable = (function*(){ yield 1; yield 2; yield 3; }());
return Math.max(...iterable) === 3;</div>}
```
###with generator instances, in arrays
          
```
function(){
              <div class="code">var iterable = (function*(){ yield &quot;b&quot;; yield &quot;c&quot;; yield &quot;d&quot;; }());
return [&quot;a&quot;, ...iterable, &quot;e&quot;][3] === &quot;d&quot;;</div>}
```
###with generic iterables, in calls
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([1, 2, 3]);
return Math.max(...iterable) === 3;</div>}
```
###with generic iterables, in arrays
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([&quot;b&quot;, &quot;c&quot;, &quot;d&quot;]);
return [&quot;a&quot;, ...iterable, &quot;e&quot;][3] === &quot;d&quot;;</div>}
```
###with instances of iterables, in calls
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([1, 2, 3]);
return Math.max(...Object.create(iterable)) === 3;</div>}
```
###with instances of iterables, in arrays
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([&quot;b&quot;, &quot;c&quot;, &quot;d&quot;]);
return [&quot;a&quot;, ...Object.create(iterable), &quot;e&quot;][3] === &quot;d&quot;;</div>}
```
###spreading non-iterables is a runtime error
          
```
function(){
              <div class="code">try {
  Math.max(...2);
} catch(e) {
  return Math.max(...[1, 2, 3]) === 3;
}</div>}
```
###with arrays, in function calls
          
```
function(){
              <div class="code">return Math.max(...[1, 2, 3]) === 3</div>}
```
###with arrays, in array literals
          
```
function(){
              <div class="code">return [...[1, 2, 3]][2] === 3;</div>}
```
###with sparse arrays, in function calls
          
```
function(){
              <div class="code">var a = Array(...[,,]);
return &quot;0&quot; in a &amp;&amp; &quot;1&quot; in a &amp;&amp; '' + a[0] + a[1] === &quot;undefinedundefined&quot;;</div>}
```
###with sparse arrays, in array literals
          
```
function(){
              <div class="code">var a = [...[,,]];
return &quot;0&quot; in a &amp;&amp; &quot;1&quot; in a &amp;&amp; '' + a[0] + a[1] === &quot;undefinedundefined&quot;;</div>}
```
###with strings, in function calls
          
```
function(){
              <div class="code">return Math.max(...&quot;1234&quot;) === 4;</div>}
```
###with strings, in array literals
          
```
function(){
              <div class="code">return [&quot;a&quot;, ...&quot;bcd&quot;, &quot;e&quot;][3] === &quot;d&quot;;</div>}
```
###with astral plane strings, in function calls
          
```
function(){
              <div class="code">return Array(...&quot;𠮷𠮶&quot;)[0] === &quot;𠮷&quot;;</div>}
```
###with astral plane strings, in array literals
          
```
function(){
              <div class="code">return [...&quot;𠮷𠮶&quot;][0] === &quot;𠮷&quot;;</div>}
```
###with generator instances, in calls
          
```
function(){
              <div class="code">var iterable = (function*(){ yield 1; yield 2; yield 3; }());
return Math.max(...iterable) === 3;</div>}
```
###with generator instances, in arrays
          
```
function(){
              <div class="code">var iterable = (function*(){ yield &quot;b&quot;; yield &quot;c&quot;; yield &quot;d&quot;; }());
return [&quot;a&quot;, ...iterable, &quot;e&quot;][3] === &quot;d&quot;;</div>}
```
###with generic iterables, in calls
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([1, 2, 3]);
return Math.max(...iterable) === 3;</div>}
```
###with generic iterables, in arrays
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([&quot;b&quot;, &quot;c&quot;, &quot;d&quot;]);
return [&quot;a&quot;, ...iterable, &quot;e&quot;][3] === &quot;d&quot;;</div>}
```
###with instances of iterables, in calls
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([1, 2, 3]);
return Math.max(...Object.create(iterable)) === 3;</div>}
```
###with instances of iterables, in arrays
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([&quot;b&quot;, &quot;c&quot;, &quot;d&quot;]);
return [&quot;a&quot;, ...Object.create(iterable), &quot;e&quot;][3] === &quot;d&quot;;</div>}
```
###spreading non-iterables is a runtime error
          
```
function(){
              <div class="code">try {
  Math.max(...2);
} catch(e) {
  return Math.max(...[1, 2, 3]) === 3;
}</div>}
```
###with arrays, in function calls
          
```
function(){
              <div class="code">return Math.max(...[1, 2, 3]) === 3</div>}
```
###with arrays, in array literals
          
```
function(){
              <div class="code">return [...[1, 2, 3]][2] === 3;</div>}
```
###with sparse arrays, in function calls
          
```
function(){
              <div class="code">var a = Array(...[,,]);
return &quot;0&quot; in a &amp;&amp; &quot;1&quot; in a &amp;&amp; '' + a[0] + a[1] === &quot;undefinedundefined&quot;;</div>}
```
###with sparse arrays, in array literals
          
```
function(){
              <div class="code">var a = [...[,,]];
return &quot;0&quot; in a &amp;&amp; &quot;1&quot; in a &amp;&amp; '' + a[0] + a[1] === &quot;undefinedundefined&quot;;</div>}
```
###with strings, in function calls
          
```
function(){
              <div class="code">return Math.max(...&quot;1234&quot;) === 4;</div>}
```
###with strings, in array literals
          
```
function(){
              <div class="code">return [&quot;a&quot;, ...&quot;bcd&quot;, &quot;e&quot;][3] === &quot;d&quot;;</div>}
```
###with astral plane strings, in function calls
          
```
function(){
              <div class="code">return Array(...&quot;𠮷𠮶&quot;)[0] === &quot;𠮷&quot;;</div>}
```
###with astral plane strings, in array literals
          
```
function(){
              <div class="code">return [...&quot;𠮷𠮶&quot;][0] === &quot;𠮷&quot;;</div>}
```
###with generator instances, in calls
          
```
function(){
              <div class="code">var iterable = (function*(){ yield 1; yield 2; yield 3; }());
return Math.max(...iterable) === 3;</div>}
```
###with generator instances, in arrays
          
```
function(){
              <div class="code">var iterable = (function*(){ yield &quot;b&quot;; yield &quot;c&quot;; yield &quot;d&quot;; }());
return [&quot;a&quot;, ...iterable, &quot;e&quot;][3] === &quot;d&quot;;</div>}
```
###with generic iterables, in calls
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([1, 2, 3]);
return Math.max(...iterable) === 3;</div>}
```
###with generic iterables, in arrays
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([&quot;b&quot;, &quot;c&quot;, &quot;d&quot;]);
return [&quot;a&quot;, ...iterable, &quot;e&quot;][3] === &quot;d&quot;;</div>}
```
###with instances of iterables, in calls
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([1, 2, 3]);
return Math.max(...Object.create(iterable)) === 3;</div>}
```
###with instances of iterables, in arrays
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([&quot;b&quot;, &quot;c&quot;, &quot;d&quot;]);
return [&quot;a&quot;, ...Object.create(iterable), &quot;e&quot;][3] === &quot;d&quot;;</div>}
```
###spreading non-iterables is a runtime error
          
```
function(){
              <div class="code">try {
  Math.max(...2);
} catch(e) {
  return Math.max(...[1, 2, 3]) === 3;
}</div>}
```
###with arrays, in function calls
          
```
function(){
              <div class="code">return Math.max(...[1, 2, 3]) === 3</div>}
```
###with arrays, in array literals
          
```
function(){
              <div class="code">return [...[1, 2, 3]][2] === 3;</div>}
```
###with sparse arrays, in function calls
          
```
function(){
              <div class="code">var a = Array(...[,,]);
return &quot;0&quot; in a &amp;&amp; &quot;1&quot; in a &amp;&amp; '' + a[0] + a[1] === &quot;undefinedundefined&quot;;</div>}
```
###with sparse arrays, in array literals
          
```
function(){
              <div class="code">var a = [...[,,]];
return &quot;0&quot; in a &amp;&amp; &quot;1&quot; in a &amp;&amp; '' + a[0] + a[1] === &quot;undefinedundefined&quot;;</div>}
```
###with strings, in function calls
          
```
function(){
              <div class="code">return Math.max(...&quot;1234&quot;) === 4;</div>}
```
###with strings, in array literals
          
```
function(){
              <div class="code">return [&quot;a&quot;, ...&quot;bcd&quot;, &quot;e&quot;][3] === &quot;d&quot;;</div>}
```
###with astral plane strings, in function calls
          
```
function(){
              <div class="code">return Array(...&quot;𠮷𠮶&quot;)[0] === &quot;𠮷&quot;;</div>}
```
###with astral plane strings, in array literals
          
```
function(){
              <div class="code">return [...&quot;𠮷𠮶&quot;][0] === &quot;𠮷&quot;;</div>}
```
###with generator instances, in calls
          
```
function(){
              <div class="code">var iterable = (function*(){ yield 1; yield 2; yield 3; }());
return Math.max(...iterable) === 3;</div>}
```
###with generator instances, in arrays
          
```
function(){
              <div class="code">var iterable = (function*(){ yield &quot;b&quot;; yield &quot;c&quot;; yield &quot;d&quot;; }());
return [&quot;a&quot;, ...iterable, &quot;e&quot;][3] === &quot;d&quot;;</div>}
```
###with generic iterables, in calls
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([1, 2, 3]);
return Math.max(...iterable) === 3;</div>}
```
###with generic iterables, in arrays
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([&quot;b&quot;, &quot;c&quot;, &quot;d&quot;]);
return [&quot;a&quot;, ...iterable, &quot;e&quot;][3] === &quot;d&quot;;</div>}
```
###with instances of iterables, in calls
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([1, 2, 3]);
return Math.max(...Object.create(iterable)) === 3;</div>}
```
###with instances of iterables, in arrays
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([&quot;b&quot;, &quot;c&quot;, &quot;d&quot;]);
return [&quot;a&quot;, ...Object.create(iterable), &quot;e&quot;][3] === &quot;d&quot;;</div>}
```
###spreading non-iterables is a runtime error
          
```
function(){
              <div class="code">try {
  Math.max(...2);
} catch(e) {
  return Math.max(...[1, 2, 3]) === 3;
}</div>}
```
