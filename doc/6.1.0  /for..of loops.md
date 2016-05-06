###with arrays
          
```
function(){
              <div class="code">var arr = [5];
for (var item of arr)
  return item === 5;</div>}
```
###with sparse arrays
          
```
function(){
              <div class="code">var arr = [,,];
var count = 0;
for (var item of arr)
  count += (item === undefined);
return count === 2;</div>}
```
###with strings
          
```
function(){
              <div class="code">var str = &quot;&quot;;
for (var item of &quot;foo&quot;)
  str += item;
return str === &quot;foo&quot;;</div>}
```
###with astral plane strings
          
```
function(){
              <div class="code">var str = &quot;&quot;;
for (var item of &quot;𠮷𠮶&quot;)
  str += item + &quot; &quot;;
return str === &quot;𠮷 𠮶 &quot;;</div>}
```
###with generator instances
          
```
function(){
              <div class="code">var result = &quot;&quot;;
var iterable = (function*(){ yield 1; yield 2; yield 3; }());
for (var item of iterable) {
  result += item;
}
return result === &quot;123&quot;;</div>}
```
###with generic iterables
          
```
function(){
              <div class="code">var result = &quot;&quot;;
var iterable = global.__createIterableObject([1, 2, 3]);
for (var item of iterable) {
  result += item;
}
return result === &quot;123&quot;;</div>}
```
###with instances of generic iterables
          
```
function(){
              <div class="code">var result = &quot;&quot;;
var iterable = global.__createIterableObject([1, 2, 3]);
for (var item of Object.create(iterable)) {
  result += item;
}
return result === &quot;123&quot;;</div>}
```
###with arrays
          
```
function(){
              <div class="code">var arr = [5];
for (var item of arr)
  return item === 5;</div>}
```
###with sparse arrays
          
```
function(){
              <div class="code">var arr = [,,];
var count = 0;
for (var item of arr)
  count += (item === undefined);
return count === 2;</div>}
```
###with strings
          
```
function(){
              <div class="code">var str = &quot;&quot;;
for (var item of &quot;foo&quot;)
  str += item;
return str === &quot;foo&quot;;</div>}
```
###with astral plane strings
          
```
function(){
              <div class="code">var str = &quot;&quot;;
for (var item of &quot;𠮷𠮶&quot;)
  str += item + &quot; &quot;;
return str === &quot;𠮷 𠮶 &quot;;</div>}
```
###with generator instances
          
```
function(){
              <div class="code">var result = &quot;&quot;;
var iterable = (function*(){ yield 1; yield 2; yield 3; }());
for (var item of iterable) {
  result += item;
}
return result === &quot;123&quot;;</div>}
```
###with generic iterables
          
```
function(){
              <div class="code">var result = &quot;&quot;;
var iterable = global.__createIterableObject([1, 2, 3]);
for (var item of iterable) {
  result += item;
}
return result === &quot;123&quot;;</div>}
```
###with instances of generic iterables
          
```
function(){
              <div class="code">var result = &quot;&quot;;
var iterable = global.__createIterableObject([1, 2, 3]);
for (var item of Object.create(iterable)) {
  result += item;
}
return result === &quot;123&quot;;</div>}
```
###with arrays
          
```
function(){
              <div class="code">var arr = [5];
for (var item of arr)
  return item === 5;</div>}
```
###with sparse arrays
          
```
function(){
              <div class="code">var arr = [,,];
var count = 0;
for (var item of arr)
  count += (item === undefined);
return count === 2;</div>}
```
###with strings
          
```
function(){
              <div class="code">var str = &quot;&quot;;
for (var item of &quot;foo&quot;)
  str += item;
return str === &quot;foo&quot;;</div>}
```
###with astral plane strings
          
```
function(){
              <div class="code">var str = &quot;&quot;;
for (var item of &quot;𠮷𠮶&quot;)
  str += item + &quot; &quot;;
return str === &quot;𠮷 𠮶 &quot;;</div>}
```
###with generator instances
          
```
function(){
              <div class="code">var result = &quot;&quot;;
var iterable = (function*(){ yield 1; yield 2; yield 3; }());
for (var item of iterable) {
  result += item;
}
return result === &quot;123&quot;;</div>}
```
###with generic iterables
          
```
function(){
              <div class="code">var result = &quot;&quot;;
var iterable = global.__createIterableObject([1, 2, 3]);
for (var item of iterable) {
  result += item;
}
return result === &quot;123&quot;;</div>}
```
###with instances of generic iterables
          
```
function(){
              <div class="code">var result = &quot;&quot;;
var iterable = global.__createIterableObject([1, 2, 3]);
for (var item of Object.create(iterable)) {
  result += item;
}
return result === &quot;123&quot;;</div>}
```
###with arrays
          
```
function(){
              <div class="code">var arr = [5];
for (var item of arr)
  return item === 5;</div>}
```
###with sparse arrays
          
```
function(){
              <div class="code">var arr = [,,];
var count = 0;
for (var item of arr)
  count += (item === undefined);
return count === 2;</div>}
```
###with strings
          
```
function(){
              <div class="code">var str = &quot;&quot;;
for (var item of &quot;foo&quot;)
  str += item;
return str === &quot;foo&quot;;</div>}
```
###with astral plane strings
          
```
function(){
              <div class="code">var str = &quot;&quot;;
for (var item of &quot;𠮷𠮶&quot;)
  str += item + &quot; &quot;;
return str === &quot;𠮷 𠮶 &quot;;</div>}
```
###with generator instances
          
```
function(){
              <div class="code">var result = &quot;&quot;;
var iterable = (function*(){ yield 1; yield 2; yield 3; }());
for (var item of iterable) {
  result += item;
}
return result === &quot;123&quot;;</div>}
```
###with generic iterables
          
```
function(){
              <div class="code">var result = &quot;&quot;;
var iterable = global.__createIterableObject([1, 2, 3]);
for (var item of iterable) {
  result += item;
}
return result === &quot;123&quot;;</div>}
```
###with instances of generic iterables
          
```
function(){
              <div class="code">var result = &quot;&quot;;
var iterable = global.__createIterableObject([1, 2, 3]);
for (var item of Object.create(iterable)) {
  result += item;
}
return result === &quot;123&quot;;</div>}
```
###with arrays
          
```
function(){
              <div class="code">var arr = [5];
for (var item of arr)
  return item === 5;</div>}
```
###with sparse arrays
          
```
function(){
              <div class="code">var arr = [,,];
var count = 0;
for (var item of arr)
  count += (item === undefined);
return count === 2;</div>}
```
###with strings
          
```
function(){
              <div class="code">var str = &quot;&quot;;
for (var item of &quot;foo&quot;)
  str += item;
return str === &quot;foo&quot;;</div>}
```
###with astral plane strings
          
```
function(){
              <div class="code">var str = &quot;&quot;;
for (var item of &quot;𠮷𠮶&quot;)
  str += item + &quot; &quot;;
return str === &quot;𠮷 𠮶 &quot;;</div>}
```
###with generator instances
          
```
function(){
              <div class="code">var result = &quot;&quot;;
var iterable = (function*(){ yield 1; yield 2; yield 3; }());
for (var item of iterable) {
  result += item;
}
return result === &quot;123&quot;;</div>}
```
###with generic iterables
          
```
function(){
              <div class="code">var result = &quot;&quot;;
var iterable = global.__createIterableObject([1, 2, 3]);
for (var item of iterable) {
  result += item;
}
return result === &quot;123&quot;;</div>}
```
###with instances of generic iterables
          
```
function(){
              <div class="code">var result = &quot;&quot;;
var iterable = global.__createIterableObject([1, 2, 3]);
for (var item of Object.create(iterable)) {
  result += item;
}
return result === &quot;123&quot;;</div>}
```
###with arrays
          
```
function(){
              <div class="code">var arr = [5];
for (var item of arr)
  return item === 5;</div>}
```
###with sparse arrays
          
```
function(){
              <div class="code">var arr = [,,];
var count = 0;
for (var item of arr)
  count += (item === undefined);
return count === 2;</div>}
```
###with strings
          
```
function(){
              <div class="code">var str = &quot;&quot;;
for (var item of &quot;foo&quot;)
  str += item;
return str === &quot;foo&quot;;</div>}
```
###with astral plane strings
          
```
function(){
              <div class="code">var str = &quot;&quot;;
for (var item of &quot;𠮷𠮶&quot;)
  str += item + &quot; &quot;;
return str === &quot;𠮷 𠮶 &quot;;</div>}
```
###with generator instances
          
```
function(){
              <div class="code">var result = &quot;&quot;;
var iterable = (function*(){ yield 1; yield 2; yield 3; }());
for (var item of iterable) {
  result += item;
}
return result === &quot;123&quot;;</div>}
```
###with generic iterables
          
```
function(){
              <div class="code">var result = &quot;&quot;;
var iterable = global.__createIterableObject([1, 2, 3]);
for (var item of iterable) {
  result += item;
}
return result === &quot;123&quot;;</div>}
```
###with instances of generic iterables
          
```
function(){
              <div class="code">var result = &quot;&quot;;
var iterable = global.__createIterableObject([1, 2, 3]);
for (var item of Object.create(iterable)) {
  result += item;
}
return result === &quot;123&quot;;</div>}
```
###with arrays
          
```
function(){
              <div class="code">var arr = [5];
for (var item of arr)
  return item === 5;</div>}
```
###with sparse arrays
          
```
function(){
              <div class="code">var arr = [,,];
var count = 0;
for (var item of arr)
  count += (item === undefined);
return count === 2;</div>}
```
###with strings
          
```
function(){
              <div class="code">var str = &quot;&quot;;
for (var item of &quot;foo&quot;)
  str += item;
return str === &quot;foo&quot;;</div>}
```
###with astral plane strings
          
```
function(){
              <div class="code">var str = &quot;&quot;;
for (var item of &quot;𠮷𠮶&quot;)
  str += item + &quot; &quot;;
return str === &quot;𠮷 𠮶 &quot;;</div>}
```
###with generator instances
          
```
function(){
              <div class="code">var result = &quot;&quot;;
var iterable = (function*(){ yield 1; yield 2; yield 3; }());
for (var item of iterable) {
  result += item;
}
return result === &quot;123&quot;;</div>}
```
###with generic iterables
          
```
function(){
              <div class="code">var result = &quot;&quot;;
var iterable = global.__createIterableObject([1, 2, 3]);
for (var item of iterable) {
  result += item;
}
return result === &quot;123&quot;;</div>}
```
###with instances of generic iterables
          
```
function(){
              <div class="code">var result = &quot;&quot;;
var iterable = global.__createIterableObject([1, 2, 3]);
for (var item of Object.create(iterable)) {
  result += item;
}
return result === &quot;123&quot;;</div>}
```
###with arrays
          
```
function(){
              <div class="code">var arr = [5];
for (var item of arr)
  return item === 5;</div>}
```
###with sparse arrays
          
```
function(){
              <div class="code">var arr = [,,];
var count = 0;
for (var item of arr)
  count += (item === undefined);
return count === 2;</div>}
```
###with strings
          
```
function(){
              <div class="code">var str = &quot;&quot;;
for (var item of &quot;foo&quot;)
  str += item;
return str === &quot;foo&quot;;</div>}
```
###with astral plane strings
          
```
function(){
              <div class="code">var str = &quot;&quot;;
for (var item of &quot;𠮷𠮶&quot;)
  str += item + &quot; &quot;;
return str === &quot;𠮷 𠮶 &quot;;</div>}
```
###with generator instances
          
```
function(){
              <div class="code">var result = &quot;&quot;;
var iterable = (function*(){ yield 1; yield 2; yield 3; }());
for (var item of iterable) {
  result += item;
}
return result === &quot;123&quot;;</div>}
```
###with generic iterables
          
```
function(){
              <div class="code">var result = &quot;&quot;;
var iterable = global.__createIterableObject([1, 2, 3]);
for (var item of iterable) {
  result += item;
}
return result === &quot;123&quot;;</div>}
```
###with instances of generic iterables
          
```
function(){
              <div class="code">var result = &quot;&quot;;
var iterable = global.__createIterableObject([1, 2, 3]);
for (var item of Object.create(iterable)) {
  result += item;
}
return result === &quot;123&quot;;</div>}
```
###with arrays
          
```
function(){
              <div class="code">var arr = [5];
for (var item of arr)
  return item === 5;</div>}
```
###with sparse arrays
          
```
function(){
              <div class="code">var arr = [,,];
var count = 0;
for (var item of arr)
  count += (item === undefined);
return count === 2;</div>}
```
###with strings
          
```
function(){
              <div class="code">var str = &quot;&quot;;
for (var item of &quot;foo&quot;)
  str += item;
return str === &quot;foo&quot;;</div>}
```
###with astral plane strings
          
```
function(){
              <div class="code">var str = &quot;&quot;;
for (var item of &quot;𠮷𠮶&quot;)
  str += item + &quot; &quot;;
return str === &quot;𠮷 𠮶 &quot;;</div>}
```
###with generator instances
          
```
function(){
              <div class="code">var result = &quot;&quot;;
var iterable = (function*(){ yield 1; yield 2; yield 3; }());
for (var item of iterable) {
  result += item;
}
return result === &quot;123&quot;;</div>}
```
###with generic iterables
          
```
function(){
              <div class="code">var result = &quot;&quot;;
var iterable = global.__createIterableObject([1, 2, 3]);
for (var item of iterable) {
  result += item;
}
return result === &quot;123&quot;;</div>}
```
###with instances of generic iterables
          
```
function(){
              <div class="code">var result = &quot;&quot;;
var iterable = global.__createIterableObject([1, 2, 3]);
for (var item of Object.create(iterable)) {
  result += item;
}
return result === &quot;123&quot;;</div>}
```
###with arrays
          
```
function(){
              <div class="code">var arr = [5];
for (var item of arr)
  return item === 5;</div>}
```
###with sparse arrays
          
```
function(){
              <div class="code">var arr = [,,];
var count = 0;
for (var item of arr)
  count += (item === undefined);
return count === 2;</div>}
```
###with strings
          
```
function(){
              <div class="code">var str = &quot;&quot;;
for (var item of &quot;foo&quot;)
  str += item;
return str === &quot;foo&quot;;</div>}
```
###with astral plane strings
          
```
function(){
              <div class="code">var str = &quot;&quot;;
for (var item of &quot;𠮷𠮶&quot;)
  str += item + &quot; &quot;;
return str === &quot;𠮷 𠮶 &quot;;</div>}
```
###with generator instances
          
```
function(){
              <div class="code">var result = &quot;&quot;;
var iterable = (function*(){ yield 1; yield 2; yield 3; }());
for (var item of iterable) {
  result += item;
}
return result === &quot;123&quot;;</div>}
```
###with generic iterables
          
```
function(){
              <div class="code">var result = &quot;&quot;;
var iterable = global.__createIterableObject([1, 2, 3]);
for (var item of iterable) {
  result += item;
}
return result === &quot;123&quot;;</div>}
```
###with instances of generic iterables
          
```
function(){
              <div class="code">var result = &quot;&quot;;
var iterable = global.__createIterableObject([1, 2, 3]);
for (var item of Object.create(iterable)) {
  result += item;
}
return result === &quot;123&quot;;</div>}
```
###with arrays
          
```
function(){
              <div class="code">var arr = [5];
for (var item of arr)
  return item === 5;</div>}
```
###with sparse arrays
          
```
function(){
              <div class="code">var arr = [,,];
var count = 0;
for (var item of arr)
  count += (item === undefined);
return count === 2;</div>}
```
###with strings
          
```
function(){
              <div class="code">var str = &quot;&quot;;
for (var item of &quot;foo&quot;)
  str += item;
return str === &quot;foo&quot;;</div>}
```
###with astral plane strings
          
```
function(){
              <div class="code">var str = &quot;&quot;;
for (var item of &quot;𠮷𠮶&quot;)
  str += item + &quot; &quot;;
return str === &quot;𠮷 𠮶 &quot;;</div>}
```
###with generator instances
          
```
function(){
              <div class="code">var result = &quot;&quot;;
var iterable = (function*(){ yield 1; yield 2; yield 3; }());
for (var item of iterable) {
  result += item;
}
return result === &quot;123&quot;;</div>}
```
###with generic iterables
          
```
function(){
              <div class="code">var result = &quot;&quot;;
var iterable = global.__createIterableObject([1, 2, 3]);
for (var item of iterable) {
  result += item;
}
return result === &quot;123&quot;;</div>}
```
###with instances of generic iterables
          
```
function(){
              <div class="code">var result = &quot;&quot;;
var iterable = global.__createIterableObject([1, 2, 3]);
for (var item of Object.create(iterable)) {
  result += item;
}
return result === &quot;123&quot;;</div>}
```
###with arrays
          
```
function(){
              <div class="code">var arr = [5];
for (var item of arr)
  return item === 5;</div>}
```
###with sparse arrays
          
```
function(){
              <div class="code">var arr = [,,];
var count = 0;
for (var item of arr)
  count += (item === undefined);
return count === 2;</div>}
```
###with strings
          
```
function(){
              <div class="code">var str = &quot;&quot;;
for (var item of &quot;foo&quot;)
  str += item;
return str === &quot;foo&quot;;</div>}
```
###with astral plane strings
          
```
function(){
              <div class="code">var str = &quot;&quot;;
for (var item of &quot;𠮷𠮶&quot;)
  str += item + &quot; &quot;;
return str === &quot;𠮷 𠮶 &quot;;</div>}
```
###with generator instances
          
```
function(){
              <div class="code">var result = &quot;&quot;;
var iterable = (function*(){ yield 1; yield 2; yield 3; }());
for (var item of iterable) {
  result += item;
}
return result === &quot;123&quot;;</div>}
```
###with generic iterables
          
```
function(){
              <div class="code">var result = &quot;&quot;;
var iterable = global.__createIterableObject([1, 2, 3]);
for (var item of iterable) {
  result += item;
}
return result === &quot;123&quot;;</div>}
```
###with instances of generic iterables
          
```
function(){
              <div class="code">var result = &quot;&quot;;
var iterable = global.__createIterableObject([1, 2, 3]);
for (var item of Object.create(iterable)) {
  result += item;
}
return result === &quot;123&quot;;</div>}
```
###with arrays
          
```
function(){
              <div class="code">var arr = [5];
for (var item of arr)
  return item === 5;</div>}
```
###with sparse arrays
          
```
function(){
              <div class="code">var arr = [,,];
var count = 0;
for (var item of arr)
  count += (item === undefined);
return count === 2;</div>}
```
###with strings
          
```
function(){
              <div class="code">var str = &quot;&quot;;
for (var item of &quot;foo&quot;)
  str += item;
return str === &quot;foo&quot;;</div>}
```
###with astral plane strings
          
```
function(){
              <div class="code">var str = &quot;&quot;;
for (var item of &quot;𠮷𠮶&quot;)
  str += item + &quot; &quot;;
return str === &quot;𠮷 𠮶 &quot;;</div>}
```
###with generator instances
          
```
function(){
              <div class="code">var result = &quot;&quot;;
var iterable = (function*(){ yield 1; yield 2; yield 3; }());
for (var item of iterable) {
  result += item;
}
return result === &quot;123&quot;;</div>}
```
###with generic iterables
          
```
function(){
              <div class="code">var result = &quot;&quot;;
var iterable = global.__createIterableObject([1, 2, 3]);
for (var item of iterable) {
  result += item;
}
return result === &quot;123&quot;;</div>}
```
###with instances of generic iterables
          
```
function(){
              <div class="code">var result = &quot;&quot;;
var iterable = global.__createIterableObject([1, 2, 3]);
for (var item of Object.create(iterable)) {
  result += item;
}
return result === &quot;123&quot;;</div>}
```
###with arrays
          
```
function(){
              <div class="code">var arr = [5];
for (var item of arr)
  return item === 5;</div>}
```
###with sparse arrays
          
```
function(){
              <div class="code">var arr = [,,];
var count = 0;
for (var item of arr)
  count += (item === undefined);
return count === 2;</div>}
```
###with strings
          
```
function(){
              <div class="code">var str = &quot;&quot;;
for (var item of &quot;foo&quot;)
  str += item;
return str === &quot;foo&quot;;</div>}
```
###with astral plane strings
          
```
function(){
              <div class="code">var str = &quot;&quot;;
for (var item of &quot;𠮷𠮶&quot;)
  str += item + &quot; &quot;;
return str === &quot;𠮷 𠮶 &quot;;</div>}
```
###with generator instances
          
```
function(){
              <div class="code">var result = &quot;&quot;;
var iterable = (function*(){ yield 1; yield 2; yield 3; }());
for (var item of iterable) {
  result += item;
}
return result === &quot;123&quot;;</div>}
```
###with generic iterables
          
```
function(){
              <div class="code">var result = &quot;&quot;;
var iterable = global.__createIterableObject([1, 2, 3]);
for (var item of iterable) {
  result += item;
}
return result === &quot;123&quot;;</div>}
```
###with instances of generic iterables
          
```
function(){
              <div class="code">var result = &quot;&quot;;
var iterable = global.__createIterableObject([1, 2, 3]);
for (var item of Object.create(iterable)) {
  result += item;
}
return result === &quot;123&quot;;</div>}
```
###with arrays
          
```
function(){
              <div class="code">var arr = [5];
for (var item of arr)
  return item === 5;</div>}
```
###with sparse arrays
          
```
function(){
              <div class="code">var arr = [,,];
var count = 0;
for (var item of arr)
  count += (item === undefined);
return count === 2;</div>}
```
###with strings
          
```
function(){
              <div class="code">var str = &quot;&quot;;
for (var item of &quot;foo&quot;)
  str += item;
return str === &quot;foo&quot;;</div>}
```
###with astral plane strings
          
```
function(){
              <div class="code">var str = &quot;&quot;;
for (var item of &quot;𠮷𠮶&quot;)
  str += item + &quot; &quot;;
return str === &quot;𠮷 𠮶 &quot;;</div>}
```
###with generator instances
          
```
function(){
              <div class="code">var result = &quot;&quot;;
var iterable = (function*(){ yield 1; yield 2; yield 3; }());
for (var item of iterable) {
  result += item;
}
return result === &quot;123&quot;;</div>}
```
###with generic iterables
          
```
function(){
              <div class="code">var result = &quot;&quot;;
var iterable = global.__createIterableObject([1, 2, 3]);
for (var item of iterable) {
  result += item;
}
return result === &quot;123&quot;;</div>}
```
###with instances of generic iterables
          
```
function(){
              <div class="code">var result = &quot;&quot;;
var iterable = global.__createIterableObject([1, 2, 3]);
for (var item of Object.create(iterable)) {
  result += item;
}
return result === &quot;123&quot;;</div>}
```
