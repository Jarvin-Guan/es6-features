###Array.from, array-like objects
          
```
function(){
              <div class="code">return Array.from({ 0: &quot;foo&quot;, 1: &quot;bar&quot;, length: 2 }) + '' === &quot;foo,bar&quot;;</div>}
```
###Array.from, generator instances
          
```
function(){
              <div class="code">var iterable = (function*(){ yield 1; yield 2; yield 3; }());
return Array.from(iterable) + '' === &quot;1,2,3&quot;;</div>}
```
###Array.from, generic iterables
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([1, 2, 3]);
return Array.from(iterable) + '' === &quot;1,2,3&quot;;</div>}
```
###Array.from, instances of generic iterables
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([1, 2, 3]);
return Array.from(Object.create(iterable)) + '' === &quot;1,2,3&quot;;</div>}
```
###Array.from map function, array-like objects
          
```
function(){
              <div class="code">return Array.from({ 0: &quot;foo&quot;, 1: &quot;bar&quot;, length: 2 }, function(e, i) {
  return e + this.baz + i;
}, { baz: &quot;d&quot; }) + '' === &quot;food0,bard1&quot;;</div>}
```
###Array.from map function, generator instances
          
```
function(){
              <div class="code">var iterable = (function*(){ yield &quot;foo&quot;; yield &quot;bar&quot;; yield &quot;bal&quot;; }());
return Array.from(iterable, function(e, i) {
  return e + this.baz + i;
}, { baz: &quot;d&quot; }) + '' === &quot;food0,bard1,bald2&quot;;</div>}
```
###Array.from map function, generic iterables
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([&quot;foo&quot;, &quot;bar&quot;, &quot;bal&quot;]);
return Array.from(iterable, function(e, i) {
  return e + this.baz + i;
}, { baz: &quot;d&quot; }) + '' === &quot;food0,bard1,bald2&quot;;</div>}
```
###Array.from map function, instances of iterables
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([&quot;foo&quot;, &quot;bar&quot;, &quot;bal&quot;]);
return Array.from(Object.create(iterable), function(e, i) {
  return e + this.baz + i;
}, { baz: &quot;d&quot; }) + '' === &quot;food0,bard1,bald2&quot;;</div>}
```
###Array.of
          
```
function(){
              <div class="code">return typeof Array.of === 'function' &amp;&amp;
  Array.of(2)[0] === 2;</div>}
```
###Array.from, array-like objects
          
```
function(){
              <div class="code">return Array.from({ 0: &quot;foo&quot;, 1: &quot;bar&quot;, length: 2 }) + '' === &quot;foo,bar&quot;;</div>}
```
###Array.from, generator instances
          
```
function(){
              <div class="code">var iterable = (function*(){ yield 1; yield 2; yield 3; }());
return Array.from(iterable) + '' === &quot;1,2,3&quot;;</div>}
```
###Array.from, generic iterables
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([1, 2, 3]);
return Array.from(iterable) + '' === &quot;1,2,3&quot;;</div>}
```
###Array.from, instances of generic iterables
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([1, 2, 3]);
return Array.from(Object.create(iterable)) + '' === &quot;1,2,3&quot;;</div>}
```
###Array.from map function, array-like objects
          
```
function(){
              <div class="code">return Array.from({ 0: &quot;foo&quot;, 1: &quot;bar&quot;, length: 2 }, function(e, i) {
  return e + this.baz + i;
}, { baz: &quot;d&quot; }) + '' === &quot;food0,bard1&quot;;</div>}
```
###Array.from map function, generator instances
          
```
function(){
              <div class="code">var iterable = (function*(){ yield &quot;foo&quot;; yield &quot;bar&quot;; yield &quot;bal&quot;; }());
return Array.from(iterable, function(e, i) {
  return e + this.baz + i;
}, { baz: &quot;d&quot; }) + '' === &quot;food0,bard1,bald2&quot;;</div>}
```
###Array.from map function, generic iterables
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([&quot;foo&quot;, &quot;bar&quot;, &quot;bal&quot;]);
return Array.from(iterable, function(e, i) {
  return e + this.baz + i;
}, { baz: &quot;d&quot; }) + '' === &quot;food0,bard1,bald2&quot;;</div>}
```
###Array.from map function, instances of iterables
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([&quot;foo&quot;, &quot;bar&quot;, &quot;bal&quot;]);
return Array.from(Object.create(iterable), function(e, i) {
  return e + this.baz + i;
}, { baz: &quot;d&quot; }) + '' === &quot;food0,bard1,bald2&quot;;</div>}
```
###Array.of
          
```
function(){
              <div class="code">return typeof Array.of === 'function' &amp;&amp;
  Array.of(2)[0] === 2;</div>}
```
###Array.from, array-like objects
          
```
function(){
              <div class="code">return Array.from({ 0: &quot;foo&quot;, 1: &quot;bar&quot;, length: 2 }) + '' === &quot;foo,bar&quot;;</div>}
```
###Array.from, generator instances
          
```
function(){
              <div class="code">var iterable = (function*(){ yield 1; yield 2; yield 3; }());
return Array.from(iterable) + '' === &quot;1,2,3&quot;;</div>}
```
###Array.from, generic iterables
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([1, 2, 3]);
return Array.from(iterable) + '' === &quot;1,2,3&quot;;</div>}
```
###Array.from, instances of generic iterables
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([1, 2, 3]);
return Array.from(Object.create(iterable)) + '' === &quot;1,2,3&quot;;</div>}
```
###Array.from map function, array-like objects
          
```
function(){
              <div class="code">return Array.from({ 0: &quot;foo&quot;, 1: &quot;bar&quot;, length: 2 }, function(e, i) {
  return e + this.baz + i;
}, { baz: &quot;d&quot; }) + '' === &quot;food0,bard1&quot;;</div>}
```
###Array.from map function, generator instances
          
```
function(){
              <div class="code">var iterable = (function*(){ yield &quot;foo&quot;; yield &quot;bar&quot;; yield &quot;bal&quot;; }());
return Array.from(iterable, function(e, i) {
  return e + this.baz + i;
}, { baz: &quot;d&quot; }) + '' === &quot;food0,bard1,bald2&quot;;</div>}
```
###Array.from map function, generic iterables
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([&quot;foo&quot;, &quot;bar&quot;, &quot;bal&quot;]);
return Array.from(iterable, function(e, i) {
  return e + this.baz + i;
}, { baz: &quot;d&quot; }) + '' === &quot;food0,bard1,bald2&quot;;</div>}
```
###Array.from map function, instances of iterables
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([&quot;foo&quot;, &quot;bar&quot;, &quot;bal&quot;]);
return Array.from(Object.create(iterable), function(e, i) {
  return e + this.baz + i;
}, { baz: &quot;d&quot; }) + '' === &quot;food0,bard1,bald2&quot;;</div>}
```
###Array.of
          
```
function(){
              <div class="code">return typeof Array.of === 'function' &amp;&amp;
  Array.of(2)[0] === 2;</div>}
```
###Array.from, array-like objects
          
```
function(){
              <div class="code">return Array.from({ 0: &quot;foo&quot;, 1: &quot;bar&quot;, length: 2 }) + '' === &quot;foo,bar&quot;;</div>}
```
###Array.from, generator instances
          
```
function(){
              <div class="code">var iterable = (function*(){ yield 1; yield 2; yield 3; }());
return Array.from(iterable) + '' === &quot;1,2,3&quot;;</div>}
```
###Array.from, generic iterables
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([1, 2, 3]);
return Array.from(iterable) + '' === &quot;1,2,3&quot;;</div>}
```
###Array.from, instances of generic iterables
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([1, 2, 3]);
return Array.from(Object.create(iterable)) + '' === &quot;1,2,3&quot;;</div>}
```
###Array.from map function, array-like objects
          
```
function(){
              <div class="code">return Array.from({ 0: &quot;foo&quot;, 1: &quot;bar&quot;, length: 2 }, function(e, i) {
  return e + this.baz + i;
}, { baz: &quot;d&quot; }) + '' === &quot;food0,bard1&quot;;</div>}
```
###Array.from map function, generator instances
          
```
function(){
              <div class="code">var iterable = (function*(){ yield &quot;foo&quot;; yield &quot;bar&quot;; yield &quot;bal&quot;; }());
return Array.from(iterable, function(e, i) {
  return e + this.baz + i;
}, { baz: &quot;d&quot; }) + '' === &quot;food0,bard1,bald2&quot;;</div>}
```
###Array.from map function, generic iterables
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([&quot;foo&quot;, &quot;bar&quot;, &quot;bal&quot;]);
return Array.from(iterable, function(e, i) {
  return e + this.baz + i;
}, { baz: &quot;d&quot; }) + '' === &quot;food0,bard1,bald2&quot;;</div>}
```
###Array.from map function, instances of iterables
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([&quot;foo&quot;, &quot;bar&quot;, &quot;bal&quot;]);
return Array.from(Object.create(iterable), function(e, i) {
  return e + this.baz + i;
}, { baz: &quot;d&quot; }) + '' === &quot;food0,bard1,bald2&quot;;</div>}
```
###Array.of
          
```
function(){
              <div class="code">return typeof Array.of === 'function' &amp;&amp;
  Array.of(2)[0] === 2;</div>}
```
###Array.from, array-like objects
          
```
function(){
              <div class="code">return Array.from({ 0: &quot;foo&quot;, 1: &quot;bar&quot;, length: 2 }) + '' === &quot;foo,bar&quot;;</div>}
```
###Array.from, generator instances
          
```
function(){
              <div class="code">var iterable = (function*(){ yield 1; yield 2; yield 3; }());
return Array.from(iterable) + '' === &quot;1,2,3&quot;;</div>}
```
###Array.from, generic iterables
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([1, 2, 3]);
return Array.from(iterable) + '' === &quot;1,2,3&quot;;</div>}
```
###Array.from, instances of generic iterables
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([1, 2, 3]);
return Array.from(Object.create(iterable)) + '' === &quot;1,2,3&quot;;</div>}
```
###Array.from map function, array-like objects
          
```
function(){
              <div class="code">return Array.from({ 0: &quot;foo&quot;, 1: &quot;bar&quot;, length: 2 }, function(e, i) {
  return e + this.baz + i;
}, { baz: &quot;d&quot; }) + '' === &quot;food0,bard1&quot;;</div>}
```
###Array.from map function, generator instances
          
```
function(){
              <div class="code">var iterable = (function*(){ yield &quot;foo&quot;; yield &quot;bar&quot;; yield &quot;bal&quot;; }());
return Array.from(iterable, function(e, i) {
  return e + this.baz + i;
}, { baz: &quot;d&quot; }) + '' === &quot;food0,bard1,bald2&quot;;</div>}
```
###Array.from map function, generic iterables
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([&quot;foo&quot;, &quot;bar&quot;, &quot;bal&quot;]);
return Array.from(iterable, function(e, i) {
  return e + this.baz + i;
}, { baz: &quot;d&quot; }) + '' === &quot;food0,bard1,bald2&quot;;</div>}
```
###Array.from map function, instances of iterables
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([&quot;foo&quot;, &quot;bar&quot;, &quot;bal&quot;]);
return Array.from(Object.create(iterable), function(e, i) {
  return e + this.baz + i;
}, { baz: &quot;d&quot; }) + '' === &quot;food0,bard1,bald2&quot;;</div>}
```
###Array.of
          
```
function(){
              <div class="code">return typeof Array.of === 'function' &amp;&amp;
  Array.of(2)[0] === 2;</div>}
```
###Array.from, array-like objects
          
```
function(){
              <div class="code">return Array.from({ 0: &quot;foo&quot;, 1: &quot;bar&quot;, length: 2 }) + '' === &quot;foo,bar&quot;;</div>}
```
###Array.from, generator instances
          
```
function(){
              <div class="code">var iterable = (function*(){ yield 1; yield 2; yield 3; }());
return Array.from(iterable) + '' === &quot;1,2,3&quot;;</div>}
```
###Array.from, generic iterables
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([1, 2, 3]);
return Array.from(iterable) + '' === &quot;1,2,3&quot;;</div>}
```
###Array.from, instances of generic iterables
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([1, 2, 3]);
return Array.from(Object.create(iterable)) + '' === &quot;1,2,3&quot;;</div>}
```
###Array.from map function, array-like objects
          
```
function(){
              <div class="code">return Array.from({ 0: &quot;foo&quot;, 1: &quot;bar&quot;, length: 2 }, function(e, i) {
  return e + this.baz + i;
}, { baz: &quot;d&quot; }) + '' === &quot;food0,bard1&quot;;</div>}
```
###Array.from map function, generator instances
          
```
function(){
              <div class="code">var iterable = (function*(){ yield &quot;foo&quot;; yield &quot;bar&quot;; yield &quot;bal&quot;; }());
return Array.from(iterable, function(e, i) {
  return e + this.baz + i;
}, { baz: &quot;d&quot; }) + '' === &quot;food0,bard1,bald2&quot;;</div>}
```
###Array.from map function, generic iterables
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([&quot;foo&quot;, &quot;bar&quot;, &quot;bal&quot;]);
return Array.from(iterable, function(e, i) {
  return e + this.baz + i;
}, { baz: &quot;d&quot; }) + '' === &quot;food0,bard1,bald2&quot;;</div>}
```
###Array.from map function, instances of iterables
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([&quot;foo&quot;, &quot;bar&quot;, &quot;bal&quot;]);
return Array.from(Object.create(iterable), function(e, i) {
  return e + this.baz + i;
}, { baz: &quot;d&quot; }) + '' === &quot;food0,bard1,bald2&quot;;</div>}
```
###Array.of
          
```
function(){
              <div class="code">return typeof Array.of === 'function' &amp;&amp;
  Array.of(2)[0] === 2;</div>}
```
###Array.from, array-like objects
          
```
function(){
              <div class="code">return Array.from({ 0: &quot;foo&quot;, 1: &quot;bar&quot;, length: 2 }) + '' === &quot;foo,bar&quot;;</div>}
```
###Array.from, generator instances
          
```
function(){
              <div class="code">var iterable = (function*(){ yield 1; yield 2; yield 3; }());
return Array.from(iterable) + '' === &quot;1,2,3&quot;;</div>}
```
###Array.from, generic iterables
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([1, 2, 3]);
return Array.from(iterable) + '' === &quot;1,2,3&quot;;</div>}
```
###Array.from, instances of generic iterables
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([1, 2, 3]);
return Array.from(Object.create(iterable)) + '' === &quot;1,2,3&quot;;</div>}
```
###Array.from map function, array-like objects
          
```
function(){
              <div class="code">return Array.from({ 0: &quot;foo&quot;, 1: &quot;bar&quot;, length: 2 }, function(e, i) {
  return e + this.baz + i;
}, { baz: &quot;d&quot; }) + '' === &quot;food0,bard1&quot;;</div>}
```
###Array.from map function, generator instances
          
```
function(){
              <div class="code">var iterable = (function*(){ yield &quot;foo&quot;; yield &quot;bar&quot;; yield &quot;bal&quot;; }());
return Array.from(iterable, function(e, i) {
  return e + this.baz + i;
}, { baz: &quot;d&quot; }) + '' === &quot;food0,bard1,bald2&quot;;</div>}
```
###Array.from map function, generic iterables
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([&quot;foo&quot;, &quot;bar&quot;, &quot;bal&quot;]);
return Array.from(iterable, function(e, i) {
  return e + this.baz + i;
}, { baz: &quot;d&quot; }) + '' === &quot;food0,bard1,bald2&quot;;</div>}
```
###Array.from map function, instances of iterables
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([&quot;foo&quot;, &quot;bar&quot;, &quot;bal&quot;]);
return Array.from(Object.create(iterable), function(e, i) {
  return e + this.baz + i;
}, { baz: &quot;d&quot; }) + '' === &quot;food0,bard1,bald2&quot;;</div>}
```
###Array.of
          
```
function(){
              <div class="code">return typeof Array.of === 'function' &amp;&amp;
  Array.of(2)[0] === 2;</div>}
```
###Array.from, array-like objects
          
```
function(){
              <div class="code">return Array.from({ 0: &quot;foo&quot;, 1: &quot;bar&quot;, length: 2 }) + '' === &quot;foo,bar&quot;;</div>}
```
###Array.from, generator instances
          
```
function(){
              <div class="code">var iterable = (function*(){ yield 1; yield 2; yield 3; }());
return Array.from(iterable) + '' === &quot;1,2,3&quot;;</div>}
```
###Array.from, generic iterables
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([1, 2, 3]);
return Array.from(iterable) + '' === &quot;1,2,3&quot;;</div>}
```
###Array.from, instances of generic iterables
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([1, 2, 3]);
return Array.from(Object.create(iterable)) + '' === &quot;1,2,3&quot;;</div>}
```
###Array.from map function, array-like objects
          
```
function(){
              <div class="code">return Array.from({ 0: &quot;foo&quot;, 1: &quot;bar&quot;, length: 2 }, function(e, i) {
  return e + this.baz + i;
}, { baz: &quot;d&quot; }) + '' === &quot;food0,bard1&quot;;</div>}
```
###Array.from map function, generator instances
          
```
function(){
              <div class="code">var iterable = (function*(){ yield &quot;foo&quot;; yield &quot;bar&quot;; yield &quot;bal&quot;; }());
return Array.from(iterable, function(e, i) {
  return e + this.baz + i;
}, { baz: &quot;d&quot; }) + '' === &quot;food0,bard1,bald2&quot;;</div>}
```
###Array.from map function, generic iterables
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([&quot;foo&quot;, &quot;bar&quot;, &quot;bal&quot;]);
return Array.from(iterable, function(e, i) {
  return e + this.baz + i;
}, { baz: &quot;d&quot; }) + '' === &quot;food0,bard1,bald2&quot;;</div>}
```
###Array.from map function, instances of iterables
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([&quot;foo&quot;, &quot;bar&quot;, &quot;bal&quot;]);
return Array.from(Object.create(iterable), function(e, i) {
  return e + this.baz + i;
}, { baz: &quot;d&quot; }) + '' === &quot;food0,bard1,bald2&quot;;</div>}
```
###Array.of
          
```
function(){
              <div class="code">return typeof Array.of === 'function' &amp;&amp;
  Array.of(2)[0] === 2;</div>}
```
###Array.from, array-like objects
          
```
function(){
              <div class="code">return Array.from({ 0: &quot;foo&quot;, 1: &quot;bar&quot;, length: 2 }) + '' === &quot;foo,bar&quot;;</div>}
```
###Array.from, generator instances
          
```
function(){
              <div class="code">var iterable = (function*(){ yield 1; yield 2; yield 3; }());
return Array.from(iterable) + '' === &quot;1,2,3&quot;;</div>}
```
###Array.from, generic iterables
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([1, 2, 3]);
return Array.from(iterable) + '' === &quot;1,2,3&quot;;</div>}
```
###Array.from, instances of generic iterables
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([1, 2, 3]);
return Array.from(Object.create(iterable)) + '' === &quot;1,2,3&quot;;</div>}
```
###Array.from map function, array-like objects
          
```
function(){
              <div class="code">return Array.from({ 0: &quot;foo&quot;, 1: &quot;bar&quot;, length: 2 }, function(e, i) {
  return e + this.baz + i;
}, { baz: &quot;d&quot; }) + '' === &quot;food0,bard1&quot;;</div>}
```
###Array.from map function, generator instances
          
```
function(){
              <div class="code">var iterable = (function*(){ yield &quot;foo&quot;; yield &quot;bar&quot;; yield &quot;bal&quot;; }());
return Array.from(iterable, function(e, i) {
  return e + this.baz + i;
}, { baz: &quot;d&quot; }) + '' === &quot;food0,bard1,bald2&quot;;</div>}
```
###Array.from map function, generic iterables
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([&quot;foo&quot;, &quot;bar&quot;, &quot;bal&quot;]);
return Array.from(iterable, function(e, i) {
  return e + this.baz + i;
}, { baz: &quot;d&quot; }) + '' === &quot;food0,bard1,bald2&quot;;</div>}
```
###Array.from map function, instances of iterables
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([&quot;foo&quot;, &quot;bar&quot;, &quot;bal&quot;]);
return Array.from(Object.create(iterable), function(e, i) {
  return e + this.baz + i;
}, { baz: &quot;d&quot; }) + '' === &quot;food0,bard1,bald2&quot;;</div>}
```
###Array.of
          
```
function(){
              <div class="code">return typeof Array.of === 'function' &amp;&amp;
  Array.of(2)[0] === 2;</div>}
```
###Array.from, array-like objects
          
```
function(){
              <div class="code">return Array.from({ 0: &quot;foo&quot;, 1: &quot;bar&quot;, length: 2 }) + '' === &quot;foo,bar&quot;;</div>}
```
###Array.from, generator instances
          
```
function(){
              <div class="code">var iterable = (function*(){ yield 1; yield 2; yield 3; }());
return Array.from(iterable) + '' === &quot;1,2,3&quot;;</div>}
```
###Array.from, generic iterables
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([1, 2, 3]);
return Array.from(iterable) + '' === &quot;1,2,3&quot;;</div>}
```
###Array.from, instances of generic iterables
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([1, 2, 3]);
return Array.from(Object.create(iterable)) + '' === &quot;1,2,3&quot;;</div>}
```
###Array.from map function, array-like objects
          
```
function(){
              <div class="code">return Array.from({ 0: &quot;foo&quot;, 1: &quot;bar&quot;, length: 2 }, function(e, i) {
  return e + this.baz + i;
}, { baz: &quot;d&quot; }) + '' === &quot;food0,bard1&quot;;</div>}
```
###Array.from map function, generator instances
          
```
function(){
              <div class="code">var iterable = (function*(){ yield &quot;foo&quot;; yield &quot;bar&quot;; yield &quot;bal&quot;; }());
return Array.from(iterable, function(e, i) {
  return e + this.baz + i;
}, { baz: &quot;d&quot; }) + '' === &quot;food0,bard1,bald2&quot;;</div>}
```
###Array.from map function, generic iterables
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([&quot;foo&quot;, &quot;bar&quot;, &quot;bal&quot;]);
return Array.from(iterable, function(e, i) {
  return e + this.baz + i;
}, { baz: &quot;d&quot; }) + '' === &quot;food0,bard1,bald2&quot;;</div>}
```
###Array.from map function, instances of iterables
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([&quot;foo&quot;, &quot;bar&quot;, &quot;bal&quot;]);
return Array.from(Object.create(iterable), function(e, i) {
  return e + this.baz + i;
}, { baz: &quot;d&quot; }) + '' === &quot;food0,bard1,bald2&quot;;</div>}
```
###Array.of
          
```
function(){
              <div class="code">return typeof Array.of === 'function' &amp;&amp;
  Array.of(2)[0] === 2;</div>}
```
###Array.from, array-like objects
          
```
function(){
              <div class="code">return Array.from({ 0: &quot;foo&quot;, 1: &quot;bar&quot;, length: 2 }) + '' === &quot;foo,bar&quot;;</div>}
```
###Array.from, generator instances
          
```
function(){
              <div class="code">var iterable = (function*(){ yield 1; yield 2; yield 3; }());
return Array.from(iterable) + '' === &quot;1,2,3&quot;;</div>}
```
###Array.from, generic iterables
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([1, 2, 3]);
return Array.from(iterable) + '' === &quot;1,2,3&quot;;</div>}
```
###Array.from, instances of generic iterables
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([1, 2, 3]);
return Array.from(Object.create(iterable)) + '' === &quot;1,2,3&quot;;</div>}
```
###Array.from map function, array-like objects
          
```
function(){
              <div class="code">return Array.from({ 0: &quot;foo&quot;, 1: &quot;bar&quot;, length: 2 }, function(e, i) {
  return e + this.baz + i;
}, { baz: &quot;d&quot; }) + '' === &quot;food0,bard1&quot;;</div>}
```
###Array.from map function, generator instances
          
```
function(){
              <div class="code">var iterable = (function*(){ yield &quot;foo&quot;; yield &quot;bar&quot;; yield &quot;bal&quot;; }());
return Array.from(iterable, function(e, i) {
  return e + this.baz + i;
}, { baz: &quot;d&quot; }) + '' === &quot;food0,bard1,bald2&quot;;</div>}
```
###Array.from map function, generic iterables
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([&quot;foo&quot;, &quot;bar&quot;, &quot;bal&quot;]);
return Array.from(iterable, function(e, i) {
  return e + this.baz + i;
}, { baz: &quot;d&quot; }) + '' === &quot;food0,bard1,bald2&quot;;</div>}
```
###Array.from map function, instances of iterables
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([&quot;foo&quot;, &quot;bar&quot;, &quot;bal&quot;]);
return Array.from(Object.create(iterable), function(e, i) {
  return e + this.baz + i;
}, { baz: &quot;d&quot; }) + '' === &quot;food0,bard1,bald2&quot;;</div>}
```
###Array.of
          
```
function(){
              <div class="code">return typeof Array.of === 'function' &amp;&amp;
  Array.of(2)[0] === 2;</div>}
```
###Array.from, array-like objects
          
```
function(){
              <div class="code">return Array.from({ 0: &quot;foo&quot;, 1: &quot;bar&quot;, length: 2 }) + '' === &quot;foo,bar&quot;;</div>}
```
###Array.from, generator instances
          
```
function(){
              <div class="code">var iterable = (function*(){ yield 1; yield 2; yield 3; }());
return Array.from(iterable) + '' === &quot;1,2,3&quot;;</div>}
```
###Array.from, generic iterables
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([1, 2, 3]);
return Array.from(iterable) + '' === &quot;1,2,3&quot;;</div>}
```
###Array.from, instances of generic iterables
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([1, 2, 3]);
return Array.from(Object.create(iterable)) + '' === &quot;1,2,3&quot;;</div>}
```
###Array.from map function, array-like objects
          
```
function(){
              <div class="code">return Array.from({ 0: &quot;foo&quot;, 1: &quot;bar&quot;, length: 2 }, function(e, i) {
  return e + this.baz + i;
}, { baz: &quot;d&quot; }) + '' === &quot;food0,bard1&quot;;</div>}
```
###Array.from map function, generator instances
          
```
function(){
              <div class="code">var iterable = (function*(){ yield &quot;foo&quot;; yield &quot;bar&quot;; yield &quot;bal&quot;; }());
return Array.from(iterable, function(e, i) {
  return e + this.baz + i;
}, { baz: &quot;d&quot; }) + '' === &quot;food0,bard1,bald2&quot;;</div>}
```
###Array.from map function, generic iterables
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([&quot;foo&quot;, &quot;bar&quot;, &quot;bal&quot;]);
return Array.from(iterable, function(e, i) {
  return e + this.baz + i;
}, { baz: &quot;d&quot; }) + '' === &quot;food0,bard1,bald2&quot;;</div>}
```
###Array.from map function, instances of iterables
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([&quot;foo&quot;, &quot;bar&quot;, &quot;bal&quot;]);
return Array.from(Object.create(iterable), function(e, i) {
  return e + this.baz + i;
}, { baz: &quot;d&quot; }) + '' === &quot;food0,bard1,bald2&quot;;</div>}
```
###Array.of
          
```
function(){
              <div class="code">return typeof Array.of === 'function' &amp;&amp;
  Array.of(2)[0] === 2;</div>}
```
###Array.from, array-like objects
          
```
function(){
              <div class="code">return Array.from({ 0: &quot;foo&quot;, 1: &quot;bar&quot;, length: 2 }) + '' === &quot;foo,bar&quot;;</div>}
```
###Array.from, generator instances
          
```
function(){
              <div class="code">var iterable = (function*(){ yield 1; yield 2; yield 3; }());
return Array.from(iterable) + '' === &quot;1,2,3&quot;;</div>}
```
###Array.from, generic iterables
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([1, 2, 3]);
return Array.from(iterable) + '' === &quot;1,2,3&quot;;</div>}
```
###Array.from, instances of generic iterables
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([1, 2, 3]);
return Array.from(Object.create(iterable)) + '' === &quot;1,2,3&quot;;</div>}
```
###Array.from map function, array-like objects
          
```
function(){
              <div class="code">return Array.from({ 0: &quot;foo&quot;, 1: &quot;bar&quot;, length: 2 }, function(e, i) {
  return e + this.baz + i;
}, { baz: &quot;d&quot; }) + '' === &quot;food0,bard1&quot;;</div>}
```
###Array.from map function, generator instances
          
```
function(){
              <div class="code">var iterable = (function*(){ yield &quot;foo&quot;; yield &quot;bar&quot;; yield &quot;bal&quot;; }());
return Array.from(iterable, function(e, i) {
  return e + this.baz + i;
}, { baz: &quot;d&quot; }) + '' === &quot;food0,bard1,bald2&quot;;</div>}
```
###Array.from map function, generic iterables
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([&quot;foo&quot;, &quot;bar&quot;, &quot;bal&quot;]);
return Array.from(iterable, function(e, i) {
  return e + this.baz + i;
}, { baz: &quot;d&quot; }) + '' === &quot;food0,bard1,bald2&quot;;</div>}
```
###Array.from map function, instances of iterables
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([&quot;foo&quot;, &quot;bar&quot;, &quot;bal&quot;]);
return Array.from(Object.create(iterable), function(e, i) {
  return e + this.baz + i;
}, { baz: &quot;d&quot; }) + '' === &quot;food0,bard1,bald2&quot;;</div>}
```
###Array.of
          
```
function(){
              <div class="code">return typeof Array.of === 'function' &amp;&amp;
  Array.of(2)[0] === 2;</div>}
```
###Array.from, array-like objects
          
```
function(){
              <div class="code">return Array.from({ 0: &quot;foo&quot;, 1: &quot;bar&quot;, length: 2 }) + '' === &quot;foo,bar&quot;;</div>}
```
###Array.from, generator instances
          
```
function(){
              <div class="code">var iterable = (function*(){ yield 1; yield 2; yield 3; }());
return Array.from(iterable) + '' === &quot;1,2,3&quot;;</div>}
```
###Array.from, generic iterables
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([1, 2, 3]);
return Array.from(iterable) + '' === &quot;1,2,3&quot;;</div>}
```
###Array.from, instances of generic iterables
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([1, 2, 3]);
return Array.from(Object.create(iterable)) + '' === &quot;1,2,3&quot;;</div>}
```
###Array.from map function, array-like objects
          
```
function(){
              <div class="code">return Array.from({ 0: &quot;foo&quot;, 1: &quot;bar&quot;, length: 2 }, function(e, i) {
  return e + this.baz + i;
}, { baz: &quot;d&quot; }) + '' === &quot;food0,bard1&quot;;</div>}
```
###Array.from map function, generator instances
          
```
function(){
              <div class="code">var iterable = (function*(){ yield &quot;foo&quot;; yield &quot;bar&quot;; yield &quot;bal&quot;; }());
return Array.from(iterable, function(e, i) {
  return e + this.baz + i;
}, { baz: &quot;d&quot; }) + '' === &quot;food0,bard1,bald2&quot;;</div>}
```
###Array.from map function, generic iterables
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([&quot;foo&quot;, &quot;bar&quot;, &quot;bal&quot;]);
return Array.from(iterable, function(e, i) {
  return e + this.baz + i;
}, { baz: &quot;d&quot; }) + '' === &quot;food0,bard1,bald2&quot;;</div>}
```
###Array.from map function, instances of iterables
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([&quot;foo&quot;, &quot;bar&quot;, &quot;bal&quot;]);
return Array.from(Object.create(iterable), function(e, i) {
  return e + this.baz + i;
}, { baz: &quot;d&quot; }) + '' === &quot;food0,bard1,bald2&quot;;</div>}
```
###Array.of
          
```
function(){
              <div class="code">return typeof Array.of === 'function' &amp;&amp;
  Array.of(2)[0] === 2;</div>}
```
###Array.from, array-like objects
          
```
function(){
              <div class="code">return Array.from({ 0: &quot;foo&quot;, 1: &quot;bar&quot;, length: 2 }) + '' === &quot;foo,bar&quot;;</div>}
```
###Array.from, generator instances
          
```
function(){
              <div class="code">var iterable = (function*(){ yield 1; yield 2; yield 3; }());
return Array.from(iterable) + '' === &quot;1,2,3&quot;;</div>}
```
###Array.from, generic iterables
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([1, 2, 3]);
return Array.from(iterable) + '' === &quot;1,2,3&quot;;</div>}
```
###Array.from, instances of generic iterables
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([1, 2, 3]);
return Array.from(Object.create(iterable)) + '' === &quot;1,2,3&quot;;</div>}
```
###Array.from map function, array-like objects
          
```
function(){
              <div class="code">return Array.from({ 0: &quot;foo&quot;, 1: &quot;bar&quot;, length: 2 }, function(e, i) {
  return e + this.baz + i;
}, { baz: &quot;d&quot; }) + '' === &quot;food0,bard1&quot;;</div>}
```
###Array.from map function, generator instances
          
```
function(){
              <div class="code">var iterable = (function*(){ yield &quot;foo&quot;; yield &quot;bar&quot;; yield &quot;bal&quot;; }());
return Array.from(iterable, function(e, i) {
  return e + this.baz + i;
}, { baz: &quot;d&quot; }) + '' === &quot;food0,bard1,bald2&quot;;</div>}
```
###Array.from map function, generic iterables
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([&quot;foo&quot;, &quot;bar&quot;, &quot;bal&quot;]);
return Array.from(iterable, function(e, i) {
  return e + this.baz + i;
}, { baz: &quot;d&quot; }) + '' === &quot;food0,bard1,bald2&quot;;</div>}
```
###Array.from map function, instances of iterables
          
```
function(){
              <div class="code">var iterable = global.__createIterableObject([&quot;foo&quot;, &quot;bar&quot;, &quot;bal&quot;]);
return Array.from(Object.create(iterable), function(e, i) {
  return e + this.baz + i;
}, { baz: &quot;d&quot; }) + '' === &quot;food0,bard1,bald2&quot;;</div>}
```
###Array.of
          
```
function(){
              <div class="code">return typeof Array.of === 'function' &amp;&amp;
  Array.of(2)[0] === 2;</div>}
```
