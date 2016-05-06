###Symbol.isConcatSpreadable
          
```
function(){
              <div class="code">var a = [], b = [];
b[Symbol.isConcatSpreadable] = false;
a = a.concat(b);
return a[0] === b;</div>}
```
###Symbol.iterator, existence
          
```
function(){
              <div class="code">return &quot;iterator&quot; in Symbol;</div>}
```
###Symbol.iterator, arguments object
          
```
function(){
              <div class="code">return (function() {
  return typeof arguments[Symbol.iterator] === 'function'
    &amp;&amp; Object.hasOwnProperty.call(arguments, Symbol.iterator);
}());</div>}
```
###Symbol.replace
          
```
function(){
              <div class="code">var O = {};
O[Symbol.replace] = function(){
  return 42;
};
return ''.replace(O) === 42;</div>}
```
###Symbol.search
          
```
function(){
              <div class="code">var O = {};
O[Symbol.search] = function(){
  return 42;
};
return ''.search(O) === 42;</div>}
```
###Symbol.split
          
```
function(){
              <div class="code">var O = {};
O[Symbol.split] = function(){
  return 42;
};
return ''.split(O) === 42;</div>}
```
###Symbol.match
          
```
function(){
              <div class="code">var O = {};
O[Symbol.match] = function(){
  return 42;
};
return ''.match(O) === 42;</div>}
```
###Symbol.match, RegExp constructor
          
```
function(){
              <div class="code">var re = /./;
re[Symbol.match] = false;
var foo = {constructor: RegExp};
foo[Symbol.match] = true;
return RegExp(re) !== re &amp;&amp; RegExp(foo) === foo;</div>}
```
###Symbol.toPrimitive
          
```
function(){
              <div class="code">var a = {}, b = {}, c = {};
var passed = 0;
a[Symbol.toPrimitive] = function(hint) { passed += hint === &quot;number&quot;;  return 0; };
b[Symbol.toPrimitive] = function(hint) { passed += hint === &quot;string&quot;;  return 0; };
c[Symbol.toPrimitive] = function(hint) { passed += hint === &quot;default&quot;; return 0; };

a &gt;= 0;
b in {};
c == 0;
return passed === 3;</div>}
```
###Symbol.toStringTag
          
```
function(){
              <div class="code">var a = {};
a[Symbol.toStringTag] = &quot;foo&quot;;
return (a + &quot;&quot;) === &quot;[object foo]&quot;;</div>}
```
###Symbol.toStringTag affects existing built-ins
          
```
function(){
              <div class="code">var s = Symbol.toStringTag;
var passed = true;
[
  [Array.prototype, []],
  [String.prototype, ''],
  [arguments, arguments],
  [Function.prototype, function(){}],
  [Error.prototype, new Error()],
  [Boolean.prototype, true],
  [Number.prototype, 2],
  [Date.prototype, new Date()],
  [RegExp.prototype, /./]
].forEach(function(pair){
  pair[0][s] = &quot;foo&quot;;
  passed &amp;= (Object.prototype.toString.call(pair[1]) === &quot;[object foo]&quot;);
  delete pair[0][s];
});
return passed;</div>}
```
###Symbol.toStringTag, new built-ins
          
```
function(){
              <div class="code">var passed = true;
var s = Symbol.toStringTag;
[
  [String, &quot;String Iterator&quot;],
  [Array, &quot;Array Iterator&quot;],
  [Map, &quot;Map Iterator&quot;],
  [Set, &quot;Set Iterator&quot;]
].forEach(function(pair){
  var iterProto = Object.getPrototypeOf(new pair[0]()[Symbol.iterator]());
  passed = passed
    &amp;&amp; iterProto.hasOwnProperty(s)
    &amp;&amp; iterProto[s] === pair[1];
});
passed = passed
  &amp;&amp; Object.getPrototypeOf(function*(){})[s] === &quot;GeneratorFunction&quot;
  &amp;&amp; Object.getPrototypeOf(function*(){}())[s] === &quot;Generator&quot;
  &amp;&amp; Map.prototype[s] === &quot;Map&quot;
  &amp;&amp; Set.prototype[s] === &quot;Set&quot;
  &amp;&amp; ArrayBuffer.prototype[s] === &quot;ArrayBuffer&quot;
  &amp;&amp; DataView.prototype[s] === &quot;DataView&quot;
  &amp;&amp; Promise.prototype[s] === &quot;Promise&quot;
  &amp;&amp; Symbol.prototype[s] === &quot;Symbol&quot;
  &amp;&amp; typeof Object.getOwnPropertyDescriptor(
    Object.getPrototypeOf(Int8Array).prototype, Symbol.toStringTag).get === &quot;function&quot;;
  return passed;</div>}
```
###Symbol.toStringTag, misc. built-ins
          
```
function(){
              <div class="code">var s = Symbol.toStringTag;
return Math[s] === &quot;Math&quot;
  &amp;&amp; JSON[s] === &quot;JSON&quot;;</div>}
```
###Symbol.unscopables
          
```
function(){
              <div class="code">var a = { foo: 1, bar: 2 };
a[Symbol.unscopables] = { bar: true };
with (a) {
  return foo === 1 &amp;&amp; typeof bar === &quot;undefined&quot;;
}</div>}
```
###Symbol.isConcatSpreadable
          
```
function(){
              <div class="code">var a = [], b = [];
b[Symbol.isConcatSpreadable] = false;
a = a.concat(b);
return a[0] === b;</div>}
```
###Symbol.iterator, existence
          
```
function(){
              <div class="code">return &quot;iterator&quot; in Symbol;</div>}
```
###Symbol.iterator, arguments object
          
```
function(){
              <div class="code">return (function() {
  return typeof arguments[Symbol.iterator] === 'function'
    &amp;&amp; Object.hasOwnProperty.call(arguments, Symbol.iterator);
}());</div>}
```
###Symbol.replace
          
```
function(){
              <div class="code">var O = {};
O[Symbol.replace] = function(){
  return 42;
};
return ''.replace(O) === 42;</div>}
```
###Symbol.search
          
```
function(){
              <div class="code">var O = {};
O[Symbol.search] = function(){
  return 42;
};
return ''.search(O) === 42;</div>}
```
###Symbol.split
          
```
function(){
              <div class="code">var O = {};
O[Symbol.split] = function(){
  return 42;
};
return ''.split(O) === 42;</div>}
```
###Symbol.match
          
```
function(){
              <div class="code">var O = {};
O[Symbol.match] = function(){
  return 42;
};
return ''.match(O) === 42;</div>}
```
###Symbol.match, RegExp constructor
          
```
function(){
              <div class="code">var re = /./;
re[Symbol.match] = false;
var foo = {constructor: RegExp};
foo[Symbol.match] = true;
return RegExp(re) !== re &amp;&amp; RegExp(foo) === foo;</div>}
```
###Symbol.toPrimitive
          
```
function(){
              <div class="code">var a = {}, b = {}, c = {};
var passed = 0;
a[Symbol.toPrimitive] = function(hint) { passed += hint === &quot;number&quot;;  return 0; };
b[Symbol.toPrimitive] = function(hint) { passed += hint === &quot;string&quot;;  return 0; };
c[Symbol.toPrimitive] = function(hint) { passed += hint === &quot;default&quot;; return 0; };

a &gt;= 0;
b in {};
c == 0;
return passed === 3;</div>}
```
###Symbol.toStringTag
          
```
function(){
              <div class="code">var a = {};
a[Symbol.toStringTag] = &quot;foo&quot;;
return (a + &quot;&quot;) === &quot;[object foo]&quot;;</div>}
```
###Symbol.toStringTag affects existing built-ins
          
```
function(){
              <div class="code">var s = Symbol.toStringTag;
var passed = true;
[
  [Array.prototype, []],
  [String.prototype, ''],
  [arguments, arguments],
  [Function.prototype, function(){}],
  [Error.prototype, new Error()],
  [Boolean.prototype, true],
  [Number.prototype, 2],
  [Date.prototype, new Date()],
  [RegExp.prototype, /./]
].forEach(function(pair){
  pair[0][s] = &quot;foo&quot;;
  passed &amp;= (Object.prototype.toString.call(pair[1]) === &quot;[object foo]&quot;);
  delete pair[0][s];
});
return passed;</div>}
```
###Symbol.toStringTag, new built-ins
          
```
function(){
              <div class="code">var passed = true;
var s = Symbol.toStringTag;
[
  [String, &quot;String Iterator&quot;],
  [Array, &quot;Array Iterator&quot;],
  [Map, &quot;Map Iterator&quot;],
  [Set, &quot;Set Iterator&quot;]
].forEach(function(pair){
  var iterProto = Object.getPrototypeOf(new pair[0]()[Symbol.iterator]());
  passed = passed
    &amp;&amp; iterProto.hasOwnProperty(s)
    &amp;&amp; iterProto[s] === pair[1];
});
passed = passed
  &amp;&amp; Object.getPrototypeOf(function*(){})[s] === &quot;GeneratorFunction&quot;
  &amp;&amp; Object.getPrototypeOf(function*(){}())[s] === &quot;Generator&quot;
  &amp;&amp; Map.prototype[s] === &quot;Map&quot;
  &amp;&amp; Set.prototype[s] === &quot;Set&quot;
  &amp;&amp; ArrayBuffer.prototype[s] === &quot;ArrayBuffer&quot;
  &amp;&amp; DataView.prototype[s] === &quot;DataView&quot;
  &amp;&amp; Promise.prototype[s] === &quot;Promise&quot;
  &amp;&amp; Symbol.prototype[s] === &quot;Symbol&quot;
  &amp;&amp; typeof Object.getOwnPropertyDescriptor(
    Object.getPrototypeOf(Int8Array).prototype, Symbol.toStringTag).get === &quot;function&quot;;
  return passed;</div>}
```
###Symbol.toStringTag, misc. built-ins
          
```
function(){
              <div class="code">var s = Symbol.toStringTag;
return Math[s] === &quot;Math&quot;
  &amp;&amp; JSON[s] === &quot;JSON&quot;;</div>}
```
###Symbol.unscopables
          
```
function(){
              <div class="code">var a = { foo: 1, bar: 2 };
a[Symbol.unscopables] = { bar: true };
with (a) {
  return foo === 1 &amp;&amp; typeof bar === &quot;undefined&quot;;
}</div>}
```
###Symbol.isConcatSpreadable
          
```
function(){
              <div class="code">var a = [], b = [];
b[Symbol.isConcatSpreadable] = false;
a = a.concat(b);
return a[0] === b;</div>}
```
###Symbol.iterator, existence
          
```
function(){
              <div class="code">return &quot;iterator&quot; in Symbol;</div>}
```
###Symbol.iterator, arguments object
          
```
function(){
              <div class="code">return (function() {
  return typeof arguments[Symbol.iterator] === 'function'
    &amp;&amp; Object.hasOwnProperty.call(arguments, Symbol.iterator);
}());</div>}
```
###Symbol.replace
          
```
function(){
              <div class="code">var O = {};
O[Symbol.replace] = function(){
  return 42;
};
return ''.replace(O) === 42;</div>}
```
###Symbol.search
          
```
function(){
              <div class="code">var O = {};
O[Symbol.search] = function(){
  return 42;
};
return ''.search(O) === 42;</div>}
```
###Symbol.split
          
```
function(){
              <div class="code">var O = {};
O[Symbol.split] = function(){
  return 42;
};
return ''.split(O) === 42;</div>}
```
###Symbol.match
          
```
function(){
              <div class="code">var O = {};
O[Symbol.match] = function(){
  return 42;
};
return ''.match(O) === 42;</div>}
```
###Symbol.match, RegExp constructor
          
```
function(){
              <div class="code">var re = /./;
re[Symbol.match] = false;
var foo = {constructor: RegExp};
foo[Symbol.match] = true;
return RegExp(re) !== re &amp;&amp; RegExp(foo) === foo;</div>}
```
###Symbol.toPrimitive
          
```
function(){
              <div class="code">var a = {}, b = {}, c = {};
var passed = 0;
a[Symbol.toPrimitive] = function(hint) { passed += hint === &quot;number&quot;;  return 0; };
b[Symbol.toPrimitive] = function(hint) { passed += hint === &quot;string&quot;;  return 0; };
c[Symbol.toPrimitive] = function(hint) { passed += hint === &quot;default&quot;; return 0; };

a &gt;= 0;
b in {};
c == 0;
return passed === 3;</div>}
```
###Symbol.toStringTag
          
```
function(){
              <div class="code">var a = {};
a[Symbol.toStringTag] = &quot;foo&quot;;
return (a + &quot;&quot;) === &quot;[object foo]&quot;;</div>}
```
###Symbol.toStringTag affects existing built-ins
          
```
function(){
              <div class="code">var s = Symbol.toStringTag;
var passed = true;
[
  [Array.prototype, []],
  [String.prototype, ''],
  [arguments, arguments],
  [Function.prototype, function(){}],
  [Error.prototype, new Error()],
  [Boolean.prototype, true],
  [Number.prototype, 2],
  [Date.prototype, new Date()],
  [RegExp.prototype, /./]
].forEach(function(pair){
  pair[0][s] = &quot;foo&quot;;
  passed &amp;= (Object.prototype.toString.call(pair[1]) === &quot;[object foo]&quot;);
  delete pair[0][s];
});
return passed;</div>}
```
###Symbol.toStringTag, new built-ins
          
```
function(){
              <div class="code">var passed = true;
var s = Symbol.toStringTag;
[
  [String, &quot;String Iterator&quot;],
  [Array, &quot;Array Iterator&quot;],
  [Map, &quot;Map Iterator&quot;],
  [Set, &quot;Set Iterator&quot;]
].forEach(function(pair){
  var iterProto = Object.getPrototypeOf(new pair[0]()[Symbol.iterator]());
  passed = passed
    &amp;&amp; iterProto.hasOwnProperty(s)
    &amp;&amp; iterProto[s] === pair[1];
});
passed = passed
  &amp;&amp; Object.getPrototypeOf(function*(){})[s] === &quot;GeneratorFunction&quot;
  &amp;&amp; Object.getPrototypeOf(function*(){}())[s] === &quot;Generator&quot;
  &amp;&amp; Map.prototype[s] === &quot;Map&quot;
  &amp;&amp; Set.prototype[s] === &quot;Set&quot;
  &amp;&amp; ArrayBuffer.prototype[s] === &quot;ArrayBuffer&quot;
  &amp;&amp; DataView.prototype[s] === &quot;DataView&quot;
  &amp;&amp; Promise.prototype[s] === &quot;Promise&quot;
  &amp;&amp; Symbol.prototype[s] === &quot;Symbol&quot;
  &amp;&amp; typeof Object.getOwnPropertyDescriptor(
    Object.getPrototypeOf(Int8Array).prototype, Symbol.toStringTag).get === &quot;function&quot;;
  return passed;</div>}
```
###Symbol.toStringTag, misc. built-ins
          
```
function(){
              <div class="code">var s = Symbol.toStringTag;
return Math[s] === &quot;Math&quot;
  &amp;&amp; JSON[s] === &quot;JSON&quot;;</div>}
```
###Symbol.unscopables
          
```
function(){
              <div class="code">var a = { foo: 1, bar: 2 };
a[Symbol.unscopables] = { bar: true };
with (a) {
  return foo === 1 &amp;&amp; typeof bar === &quot;undefined&quot;;
}</div>}
```
###Symbol.isConcatSpreadable
          
```
function(){
              <div class="code">var a = [], b = [];
b[Symbol.isConcatSpreadable] = false;
a = a.concat(b);
return a[0] === b;</div>}
```
###Symbol.iterator, existence
          
```
function(){
              <div class="code">return &quot;iterator&quot; in Symbol;</div>}
```
###Symbol.iterator, arguments object
          
```
function(){
              <div class="code">return (function() {
  return typeof arguments[Symbol.iterator] === 'function'
    &amp;&amp; Object.hasOwnProperty.call(arguments, Symbol.iterator);
}());</div>}
```
###Symbol.replace
          
```
function(){
              <div class="code">var O = {};
O[Symbol.replace] = function(){
  return 42;
};
return ''.replace(O) === 42;</div>}
```
###Symbol.search
          
```
function(){
              <div class="code">var O = {};
O[Symbol.search] = function(){
  return 42;
};
return ''.search(O) === 42;</div>}
```
###Symbol.split
          
```
function(){
              <div class="code">var O = {};
O[Symbol.split] = function(){
  return 42;
};
return ''.split(O) === 42;</div>}
```
###Symbol.match
          
```
function(){
              <div class="code">var O = {};
O[Symbol.match] = function(){
  return 42;
};
return ''.match(O) === 42;</div>}
```
###Symbol.match, RegExp constructor
          
```
function(){
              <div class="code">var re = /./;
re[Symbol.match] = false;
var foo = {constructor: RegExp};
foo[Symbol.match] = true;
return RegExp(re) !== re &amp;&amp; RegExp(foo) === foo;</div>}
```
###Symbol.toPrimitive
          
```
function(){
              <div class="code">var a = {}, b = {}, c = {};
var passed = 0;
a[Symbol.toPrimitive] = function(hint) { passed += hint === &quot;number&quot;;  return 0; };
b[Symbol.toPrimitive] = function(hint) { passed += hint === &quot;string&quot;;  return 0; };
c[Symbol.toPrimitive] = function(hint) { passed += hint === &quot;default&quot;; return 0; };

a &gt;= 0;
b in {};
c == 0;
return passed === 3;</div>}
```
###Symbol.toStringTag
          
```
function(){
              <div class="code">var a = {};
a[Symbol.toStringTag] = &quot;foo&quot;;
return (a + &quot;&quot;) === &quot;[object foo]&quot;;</div>}
```
###Symbol.toStringTag affects existing built-ins
          
```
function(){
              <div class="code">var s = Symbol.toStringTag;
var passed = true;
[
  [Array.prototype, []],
  [String.prototype, ''],
  [arguments, arguments],
  [Function.prototype, function(){}],
  [Error.prototype, new Error()],
  [Boolean.prototype, true],
  [Number.prototype, 2],
  [Date.prototype, new Date()],
  [RegExp.prototype, /./]
].forEach(function(pair){
  pair[0][s] = &quot;foo&quot;;
  passed &amp;= (Object.prototype.toString.call(pair[1]) === &quot;[object foo]&quot;);
  delete pair[0][s];
});
return passed;</div>}
```
###Symbol.toStringTag, new built-ins
          
```
function(){
              <div class="code">var passed = true;
var s = Symbol.toStringTag;
[
  [String, &quot;String Iterator&quot;],
  [Array, &quot;Array Iterator&quot;],
  [Map, &quot;Map Iterator&quot;],
  [Set, &quot;Set Iterator&quot;]
].forEach(function(pair){
  var iterProto = Object.getPrototypeOf(new pair[0]()[Symbol.iterator]());
  passed = passed
    &amp;&amp; iterProto.hasOwnProperty(s)
    &amp;&amp; iterProto[s] === pair[1];
});
passed = passed
  &amp;&amp; Object.getPrototypeOf(function*(){})[s] === &quot;GeneratorFunction&quot;
  &amp;&amp; Object.getPrototypeOf(function*(){}())[s] === &quot;Generator&quot;
  &amp;&amp; Map.prototype[s] === &quot;Map&quot;
  &amp;&amp; Set.prototype[s] === &quot;Set&quot;
  &amp;&amp; ArrayBuffer.prototype[s] === &quot;ArrayBuffer&quot;
  &amp;&amp; DataView.prototype[s] === &quot;DataView&quot;
  &amp;&amp; Promise.prototype[s] === &quot;Promise&quot;
  &amp;&amp; Symbol.prototype[s] === &quot;Symbol&quot;
  &amp;&amp; typeof Object.getOwnPropertyDescriptor(
    Object.getPrototypeOf(Int8Array).prototype, Symbol.toStringTag).get === &quot;function&quot;;
  return passed;</div>}
```
###Symbol.toStringTag, misc. built-ins
          
```
function(){
              <div class="code">var s = Symbol.toStringTag;
return Math[s] === &quot;Math&quot;
  &amp;&amp; JSON[s] === &quot;JSON&quot;;</div>}
```
###Symbol.unscopables
          
```
function(){
              <div class="code">var a = { foo: 1, bar: 2 };
a[Symbol.unscopables] = { bar: true };
with (a) {
  return foo === 1 &amp;&amp; typeof bar === &quot;undefined&quot;;
}</div>}
```
###Symbol.isConcatSpreadable
          
```
function(){
              <div class="code">var a = [], b = [];
b[Symbol.isConcatSpreadable] = false;
a = a.concat(b);
return a[0] === b;</div>}
```
###Symbol.iterator, existence
          
```
function(){
              <div class="code">return &quot;iterator&quot; in Symbol;</div>}
```
###Symbol.iterator, arguments object
          
```
function(){
              <div class="code">return (function() {
  return typeof arguments[Symbol.iterator] === 'function'
    &amp;&amp; Object.hasOwnProperty.call(arguments, Symbol.iterator);
}());</div>}
```
###Symbol.replace
          
```
function(){
              <div class="code">var O = {};
O[Symbol.replace] = function(){
  return 42;
};
return ''.replace(O) === 42;</div>}
```
###Symbol.search
          
```
function(){
              <div class="code">var O = {};
O[Symbol.search] = function(){
  return 42;
};
return ''.search(O) === 42;</div>}
```
###Symbol.split
          
```
function(){
              <div class="code">var O = {};
O[Symbol.split] = function(){
  return 42;
};
return ''.split(O) === 42;</div>}
```
###Symbol.match
          
```
function(){
              <div class="code">var O = {};
O[Symbol.match] = function(){
  return 42;
};
return ''.match(O) === 42;</div>}
```
###Symbol.match, RegExp constructor
          
```
function(){
              <div class="code">var re = /./;
re[Symbol.match] = false;
var foo = {constructor: RegExp};
foo[Symbol.match] = true;
return RegExp(re) !== re &amp;&amp; RegExp(foo) === foo;</div>}
```
###Symbol.toPrimitive
          
```
function(){
              <div class="code">var a = {}, b = {}, c = {};
var passed = 0;
a[Symbol.toPrimitive] = function(hint) { passed += hint === &quot;number&quot;;  return 0; };
b[Symbol.toPrimitive] = function(hint) { passed += hint === &quot;string&quot;;  return 0; };
c[Symbol.toPrimitive] = function(hint) { passed += hint === &quot;default&quot;; return 0; };

a &gt;= 0;
b in {};
c == 0;
return passed === 3;</div>}
```
###Symbol.toStringTag
          
```
function(){
              <div class="code">var a = {};
a[Symbol.toStringTag] = &quot;foo&quot;;
return (a + &quot;&quot;) === &quot;[object foo]&quot;;</div>}
```
###Symbol.toStringTag affects existing built-ins
          
```
function(){
              <div class="code">var s = Symbol.toStringTag;
var passed = true;
[
  [Array.prototype, []],
  [String.prototype, ''],
  [arguments, arguments],
  [Function.prototype, function(){}],
  [Error.prototype, new Error()],
  [Boolean.prototype, true],
  [Number.prototype, 2],
  [Date.prototype, new Date()],
  [RegExp.prototype, /./]
].forEach(function(pair){
  pair[0][s] = &quot;foo&quot;;
  passed &amp;= (Object.prototype.toString.call(pair[1]) === &quot;[object foo]&quot;);
  delete pair[0][s];
});
return passed;</div>}
```
###Symbol.toStringTag, new built-ins
          
```
function(){
              <div class="code">var passed = true;
var s = Symbol.toStringTag;
[
  [String, &quot;String Iterator&quot;],
  [Array, &quot;Array Iterator&quot;],
  [Map, &quot;Map Iterator&quot;],
  [Set, &quot;Set Iterator&quot;]
].forEach(function(pair){
  var iterProto = Object.getPrototypeOf(new pair[0]()[Symbol.iterator]());
  passed = passed
    &amp;&amp; iterProto.hasOwnProperty(s)
    &amp;&amp; iterProto[s] === pair[1];
});
passed = passed
  &amp;&amp; Object.getPrototypeOf(function*(){})[s] === &quot;GeneratorFunction&quot;
  &amp;&amp; Object.getPrototypeOf(function*(){}())[s] === &quot;Generator&quot;
  &amp;&amp; Map.prototype[s] === &quot;Map&quot;
  &amp;&amp; Set.prototype[s] === &quot;Set&quot;
  &amp;&amp; ArrayBuffer.prototype[s] === &quot;ArrayBuffer&quot;
  &amp;&amp; DataView.prototype[s] === &quot;DataView&quot;
  &amp;&amp; Promise.prototype[s] === &quot;Promise&quot;
  &amp;&amp; Symbol.prototype[s] === &quot;Symbol&quot;
  &amp;&amp; typeof Object.getOwnPropertyDescriptor(
    Object.getPrototypeOf(Int8Array).prototype, Symbol.toStringTag).get === &quot;function&quot;;
  return passed;</div>}
```
###Symbol.toStringTag, misc. built-ins
          
```
function(){
              <div class="code">var s = Symbol.toStringTag;
return Math[s] === &quot;Math&quot;
  &amp;&amp; JSON[s] === &quot;JSON&quot;;</div>}
```
###Symbol.unscopables
          
```
function(){
              <div class="code">var a = { foo: 1, bar: 2 };
a[Symbol.unscopables] = { bar: true };
with (a) {
  return foo === 1 &amp;&amp; typeof bar === &quot;undefined&quot;;
}</div>}
```
###Symbol.isConcatSpreadable
          
```
function(){
              <div class="code">var a = [], b = [];
b[Symbol.isConcatSpreadable] = false;
a = a.concat(b);
return a[0] === b;</div>}
```
###Symbol.iterator, existence
          
```
function(){
              <div class="code">return &quot;iterator&quot; in Symbol;</div>}
```
###Symbol.iterator, arguments object
          
```
function(){
              <div class="code">return (function() {
  return typeof arguments[Symbol.iterator] === 'function'
    &amp;&amp; Object.hasOwnProperty.call(arguments, Symbol.iterator);
}());</div>}
```
###Symbol.replace
          
```
function(){
              <div class="code">var O = {};
O[Symbol.replace] = function(){
  return 42;
};
return ''.replace(O) === 42;</div>}
```
###Symbol.search
          
```
function(){
              <div class="code">var O = {};
O[Symbol.search] = function(){
  return 42;
};
return ''.search(O) === 42;</div>}
```
###Symbol.split
          
```
function(){
              <div class="code">var O = {};
O[Symbol.split] = function(){
  return 42;
};
return ''.split(O) === 42;</div>}
```
###Symbol.match
          
```
function(){
              <div class="code">var O = {};
O[Symbol.match] = function(){
  return 42;
};
return ''.match(O) === 42;</div>}
```
###Symbol.match, RegExp constructor
          
```
function(){
              <div class="code">var re = /./;
re[Symbol.match] = false;
var foo = {constructor: RegExp};
foo[Symbol.match] = true;
return RegExp(re) !== re &amp;&amp; RegExp(foo) === foo;</div>}
```
###Symbol.toPrimitive
          
```
function(){
              <div class="code">var a = {}, b = {}, c = {};
var passed = 0;
a[Symbol.toPrimitive] = function(hint) { passed += hint === &quot;number&quot;;  return 0; };
b[Symbol.toPrimitive] = function(hint) { passed += hint === &quot;string&quot;;  return 0; };
c[Symbol.toPrimitive] = function(hint) { passed += hint === &quot;default&quot;; return 0; };

a &gt;= 0;
b in {};
c == 0;
return passed === 3;</div>}
```
###Symbol.toStringTag
          
```
function(){
              <div class="code">var a = {};
a[Symbol.toStringTag] = &quot;foo&quot;;
return (a + &quot;&quot;) === &quot;[object foo]&quot;;</div>}
```
###Symbol.toStringTag affects existing built-ins
          
```
function(){
              <div class="code">var s = Symbol.toStringTag;
var passed = true;
[
  [Array.prototype, []],
  [String.prototype, ''],
  [arguments, arguments],
  [Function.prototype, function(){}],
  [Error.prototype, new Error()],
  [Boolean.prototype, true],
  [Number.prototype, 2],
  [Date.prototype, new Date()],
  [RegExp.prototype, /./]
].forEach(function(pair){
  pair[0][s] = &quot;foo&quot;;
  passed &amp;= (Object.prototype.toString.call(pair[1]) === &quot;[object foo]&quot;);
  delete pair[0][s];
});
return passed;</div>}
```
###Symbol.toStringTag, new built-ins
          
```
function(){
              <div class="code">var passed = true;
var s = Symbol.toStringTag;
[
  [String, &quot;String Iterator&quot;],
  [Array, &quot;Array Iterator&quot;],
  [Map, &quot;Map Iterator&quot;],
  [Set, &quot;Set Iterator&quot;]
].forEach(function(pair){
  var iterProto = Object.getPrototypeOf(new pair[0]()[Symbol.iterator]());
  passed = passed
    &amp;&amp; iterProto.hasOwnProperty(s)
    &amp;&amp; iterProto[s] === pair[1];
});
passed = passed
  &amp;&amp; Object.getPrototypeOf(function*(){})[s] === &quot;GeneratorFunction&quot;
  &amp;&amp; Object.getPrototypeOf(function*(){}())[s] === &quot;Generator&quot;
  &amp;&amp; Map.prototype[s] === &quot;Map&quot;
  &amp;&amp; Set.prototype[s] === &quot;Set&quot;
  &amp;&amp; ArrayBuffer.prototype[s] === &quot;ArrayBuffer&quot;
  &amp;&amp; DataView.prototype[s] === &quot;DataView&quot;
  &amp;&amp; Promise.prototype[s] === &quot;Promise&quot;
  &amp;&amp; Symbol.prototype[s] === &quot;Symbol&quot;
  &amp;&amp; typeof Object.getOwnPropertyDescriptor(
    Object.getPrototypeOf(Int8Array).prototype, Symbol.toStringTag).get === &quot;function&quot;;
  return passed;</div>}
```
###Symbol.toStringTag, misc. built-ins
          
```
function(){
              <div class="code">var s = Symbol.toStringTag;
return Math[s] === &quot;Math&quot;
  &amp;&amp; JSON[s] === &quot;JSON&quot;;</div>}
```
###Symbol.unscopables
          
```
function(){
              <div class="code">var a = { foo: 1, bar: 2 };
a[Symbol.unscopables] = { bar: true };
with (a) {
  return foo === 1 &amp;&amp; typeof bar === &quot;undefined&quot;;
}</div>}
```
###Symbol.isConcatSpreadable
          
```
function(){
              <div class="code">var a = [], b = [];
b[Symbol.isConcatSpreadable] = false;
a = a.concat(b);
return a[0] === b;</div>}
```
###Symbol.iterator, existence
          
```
function(){
              <div class="code">return &quot;iterator&quot; in Symbol;</div>}
```
###Symbol.iterator, arguments object
          
```
function(){
              <div class="code">return (function() {
  return typeof arguments[Symbol.iterator] === 'function'
    &amp;&amp; Object.hasOwnProperty.call(arguments, Symbol.iterator);
}());</div>}
```
###Symbol.replace
          
```
function(){
              <div class="code">var O = {};
O[Symbol.replace] = function(){
  return 42;
};
return ''.replace(O) === 42;</div>}
```
###Symbol.search
          
```
function(){
              <div class="code">var O = {};
O[Symbol.search] = function(){
  return 42;
};
return ''.search(O) === 42;</div>}
```
###Symbol.split
          
```
function(){
              <div class="code">var O = {};
O[Symbol.split] = function(){
  return 42;
};
return ''.split(O) === 42;</div>}
```
###Symbol.match
          
```
function(){
              <div class="code">var O = {};
O[Symbol.match] = function(){
  return 42;
};
return ''.match(O) === 42;</div>}
```
###Symbol.match, RegExp constructor
          
```
function(){
              <div class="code">var re = /./;
re[Symbol.match] = false;
var foo = {constructor: RegExp};
foo[Symbol.match] = true;
return RegExp(re) !== re &amp;&amp; RegExp(foo) === foo;</div>}
```
###Symbol.toPrimitive
          
```
function(){
              <div class="code">var a = {}, b = {}, c = {};
var passed = 0;
a[Symbol.toPrimitive] = function(hint) { passed += hint === &quot;number&quot;;  return 0; };
b[Symbol.toPrimitive] = function(hint) { passed += hint === &quot;string&quot;;  return 0; };
c[Symbol.toPrimitive] = function(hint) { passed += hint === &quot;default&quot;; return 0; };

a &gt;= 0;
b in {};
c == 0;
return passed === 3;</div>}
```
###Symbol.toStringTag
          
```
function(){
              <div class="code">var a = {};
a[Symbol.toStringTag] = &quot;foo&quot;;
return (a + &quot;&quot;) === &quot;[object foo]&quot;;</div>}
```
###Symbol.toStringTag affects existing built-ins
          
```
function(){
              <div class="code">var s = Symbol.toStringTag;
var passed = true;
[
  [Array.prototype, []],
  [String.prototype, ''],
  [arguments, arguments],
  [Function.prototype, function(){}],
  [Error.prototype, new Error()],
  [Boolean.prototype, true],
  [Number.prototype, 2],
  [Date.prototype, new Date()],
  [RegExp.prototype, /./]
].forEach(function(pair){
  pair[0][s] = &quot;foo&quot;;
  passed &amp;= (Object.prototype.toString.call(pair[1]) === &quot;[object foo]&quot;);
  delete pair[0][s];
});
return passed;</div>}
```
###Symbol.toStringTag, new built-ins
          
```
function(){
              <div class="code">var passed = true;
var s = Symbol.toStringTag;
[
  [String, &quot;String Iterator&quot;],
  [Array, &quot;Array Iterator&quot;],
  [Map, &quot;Map Iterator&quot;],
  [Set, &quot;Set Iterator&quot;]
].forEach(function(pair){
  var iterProto = Object.getPrototypeOf(new pair[0]()[Symbol.iterator]());
  passed = passed
    &amp;&amp; iterProto.hasOwnProperty(s)
    &amp;&amp; iterProto[s] === pair[1];
});
passed = passed
  &amp;&amp; Object.getPrototypeOf(function*(){})[s] === &quot;GeneratorFunction&quot;
  &amp;&amp; Object.getPrototypeOf(function*(){}())[s] === &quot;Generator&quot;
  &amp;&amp; Map.prototype[s] === &quot;Map&quot;
  &amp;&amp; Set.prototype[s] === &quot;Set&quot;
  &amp;&amp; ArrayBuffer.prototype[s] === &quot;ArrayBuffer&quot;
  &amp;&amp; DataView.prototype[s] === &quot;DataView&quot;
  &amp;&amp; Promise.prototype[s] === &quot;Promise&quot;
  &amp;&amp; Symbol.prototype[s] === &quot;Symbol&quot;
  &amp;&amp; typeof Object.getOwnPropertyDescriptor(
    Object.getPrototypeOf(Int8Array).prototype, Symbol.toStringTag).get === &quot;function&quot;;
  return passed;</div>}
```
###Symbol.toStringTag, misc. built-ins
          
```
function(){
              <div class="code">var s = Symbol.toStringTag;
return Math[s] === &quot;Math&quot;
  &amp;&amp; JSON[s] === &quot;JSON&quot;;</div>}
```
###Symbol.unscopables
          
```
function(){
              <div class="code">var a = { foo: 1, bar: 2 };
a[Symbol.unscopables] = { bar: true };
with (a) {
  return foo === 1 &amp;&amp; typeof bar === &quot;undefined&quot;;
}</div>}
```
###Symbol.isConcatSpreadable
          
```
function(){
              <div class="code">var a = [], b = [];
b[Symbol.isConcatSpreadable] = false;
a = a.concat(b);
return a[0] === b;</div>}
```
###Symbol.iterator, existence
          
```
function(){
              <div class="code">return &quot;iterator&quot; in Symbol;</div>}
```
###Symbol.iterator, arguments object
          
```
function(){
              <div class="code">return (function() {
  return typeof arguments[Symbol.iterator] === 'function'
    &amp;&amp; Object.hasOwnProperty.call(arguments, Symbol.iterator);
}());</div>}
```
###Symbol.replace
          
```
function(){
              <div class="code">var O = {};
O[Symbol.replace] = function(){
  return 42;
};
return ''.replace(O) === 42;</div>}
```
###Symbol.search
          
```
function(){
              <div class="code">var O = {};
O[Symbol.search] = function(){
  return 42;
};
return ''.search(O) === 42;</div>}
```
###Symbol.split
          
```
function(){
              <div class="code">var O = {};
O[Symbol.split] = function(){
  return 42;
};
return ''.split(O) === 42;</div>}
```
###Symbol.match
          
```
function(){
              <div class="code">var O = {};
O[Symbol.match] = function(){
  return 42;
};
return ''.match(O) === 42;</div>}
```
###Symbol.match, RegExp constructor
          
```
function(){
              <div class="code">var re = /./;
re[Symbol.match] = false;
var foo = {constructor: RegExp};
foo[Symbol.match] = true;
return RegExp(re) !== re &amp;&amp; RegExp(foo) === foo;</div>}
```
###Symbol.toPrimitive
          
```
function(){
              <div class="code">var a = {}, b = {}, c = {};
var passed = 0;
a[Symbol.toPrimitive] = function(hint) { passed += hint === &quot;number&quot;;  return 0; };
b[Symbol.toPrimitive] = function(hint) { passed += hint === &quot;string&quot;;  return 0; };
c[Symbol.toPrimitive] = function(hint) { passed += hint === &quot;default&quot;; return 0; };

a &gt;= 0;
b in {};
c == 0;
return passed === 3;</div>}
```
###Symbol.toStringTag
          
```
function(){
              <div class="code">var a = {};
a[Symbol.toStringTag] = &quot;foo&quot;;
return (a + &quot;&quot;) === &quot;[object foo]&quot;;</div>}
```
###Symbol.toStringTag affects existing built-ins
          
```
function(){
              <div class="code">var s = Symbol.toStringTag;
var passed = true;
[
  [Array.prototype, []],
  [String.prototype, ''],
  [arguments, arguments],
  [Function.prototype, function(){}],
  [Error.prototype, new Error()],
  [Boolean.prototype, true],
  [Number.prototype, 2],
  [Date.prototype, new Date()],
  [RegExp.prototype, /./]
].forEach(function(pair){
  pair[0][s] = &quot;foo&quot;;
  passed &amp;= (Object.prototype.toString.call(pair[1]) === &quot;[object foo]&quot;);
  delete pair[0][s];
});
return passed;</div>}
```
###Symbol.toStringTag, new built-ins
          
```
function(){
              <div class="code">var passed = true;
var s = Symbol.toStringTag;
[
  [String, &quot;String Iterator&quot;],
  [Array, &quot;Array Iterator&quot;],
  [Map, &quot;Map Iterator&quot;],
  [Set, &quot;Set Iterator&quot;]
].forEach(function(pair){
  var iterProto = Object.getPrototypeOf(new pair[0]()[Symbol.iterator]());
  passed = passed
    &amp;&amp; iterProto.hasOwnProperty(s)
    &amp;&amp; iterProto[s] === pair[1];
});
passed = passed
  &amp;&amp; Object.getPrototypeOf(function*(){})[s] === &quot;GeneratorFunction&quot;
  &amp;&amp; Object.getPrototypeOf(function*(){}())[s] === &quot;Generator&quot;
  &amp;&amp; Map.prototype[s] === &quot;Map&quot;
  &amp;&amp; Set.prototype[s] === &quot;Set&quot;
  &amp;&amp; ArrayBuffer.prototype[s] === &quot;ArrayBuffer&quot;
  &amp;&amp; DataView.prototype[s] === &quot;DataView&quot;
  &amp;&amp; Promise.prototype[s] === &quot;Promise&quot;
  &amp;&amp; Symbol.prototype[s] === &quot;Symbol&quot;
  &amp;&amp; typeof Object.getOwnPropertyDescriptor(
    Object.getPrototypeOf(Int8Array).prototype, Symbol.toStringTag).get === &quot;function&quot;;
  return passed;</div>}
```
###Symbol.toStringTag, misc. built-ins
          
```
function(){
              <div class="code">var s = Symbol.toStringTag;
return Math[s] === &quot;Math&quot;
  &amp;&amp; JSON[s] === &quot;JSON&quot;;</div>}
```
###Symbol.unscopables
          
```
function(){
              <div class="code">var a = { foo: 1, bar: 2 };
a[Symbol.unscopables] = { bar: true };
with (a) {
  return foo === 1 &amp;&amp; typeof bar === &quot;undefined&quot;;
}</div>}
```
###Symbol.isConcatSpreadable
          
```
function(){
              <div class="code">var a = [], b = [];
b[Symbol.isConcatSpreadable] = false;
a = a.concat(b);
return a[0] === b;</div>}
```
###Symbol.iterator, existence
          
```
function(){
              <div class="code">return &quot;iterator&quot; in Symbol;</div>}
```
###Symbol.iterator, arguments object
          
```
function(){
              <div class="code">return (function() {
  return typeof arguments[Symbol.iterator] === 'function'
    &amp;&amp; Object.hasOwnProperty.call(arguments, Symbol.iterator);
}());</div>}
```
###Symbol.replace
          
```
function(){
              <div class="code">var O = {};
O[Symbol.replace] = function(){
  return 42;
};
return ''.replace(O) === 42;</div>}
```
###Symbol.search
          
```
function(){
              <div class="code">var O = {};
O[Symbol.search] = function(){
  return 42;
};
return ''.search(O) === 42;</div>}
```
###Symbol.split
          
```
function(){
              <div class="code">var O = {};
O[Symbol.split] = function(){
  return 42;
};
return ''.split(O) === 42;</div>}
```
###Symbol.match
          
```
function(){
              <div class="code">var O = {};
O[Symbol.match] = function(){
  return 42;
};
return ''.match(O) === 42;</div>}
```
###Symbol.match, RegExp constructor
          
```
function(){
              <div class="code">var re = /./;
re[Symbol.match] = false;
var foo = {constructor: RegExp};
foo[Symbol.match] = true;
return RegExp(re) !== re &amp;&amp; RegExp(foo) === foo;</div>}
```
###Symbol.toPrimitive
          
```
function(){
              <div class="code">var a = {}, b = {}, c = {};
var passed = 0;
a[Symbol.toPrimitive] = function(hint) { passed += hint === &quot;number&quot;;  return 0; };
b[Symbol.toPrimitive] = function(hint) { passed += hint === &quot;string&quot;;  return 0; };
c[Symbol.toPrimitive] = function(hint) { passed += hint === &quot;default&quot;; return 0; };

a &gt;= 0;
b in {};
c == 0;
return passed === 3;</div>}
```
###Symbol.toStringTag
          
```
function(){
              <div class="code">var a = {};
a[Symbol.toStringTag] = &quot;foo&quot;;
return (a + &quot;&quot;) === &quot;[object foo]&quot;;</div>}
```
###Symbol.toStringTag affects existing built-ins
          
```
function(){
              <div class="code">var s = Symbol.toStringTag;
var passed = true;
[
  [Array.prototype, []],
  [String.prototype, ''],
  [arguments, arguments],
  [Function.prototype, function(){}],
  [Error.prototype, new Error()],
  [Boolean.prototype, true],
  [Number.prototype, 2],
  [Date.prototype, new Date()],
  [RegExp.prototype, /./]
].forEach(function(pair){
  pair[0][s] = &quot;foo&quot;;
  passed &amp;= (Object.prototype.toString.call(pair[1]) === &quot;[object foo]&quot;);
  delete pair[0][s];
});
return passed;</div>}
```
###Symbol.toStringTag, new built-ins
          
```
function(){
              <div class="code">var passed = true;
var s = Symbol.toStringTag;
[
  [String, &quot;String Iterator&quot;],
  [Array, &quot;Array Iterator&quot;],
  [Map, &quot;Map Iterator&quot;],
  [Set, &quot;Set Iterator&quot;]
].forEach(function(pair){
  var iterProto = Object.getPrototypeOf(new pair[0]()[Symbol.iterator]());
  passed = passed
    &amp;&amp; iterProto.hasOwnProperty(s)
    &amp;&amp; iterProto[s] === pair[1];
});
passed = passed
  &amp;&amp; Object.getPrototypeOf(function*(){})[s] === &quot;GeneratorFunction&quot;
  &amp;&amp; Object.getPrototypeOf(function*(){}())[s] === &quot;Generator&quot;
  &amp;&amp; Map.prototype[s] === &quot;Map&quot;
  &amp;&amp; Set.prototype[s] === &quot;Set&quot;
  &amp;&amp; ArrayBuffer.prototype[s] === &quot;ArrayBuffer&quot;
  &amp;&amp; DataView.prototype[s] === &quot;DataView&quot;
  &amp;&amp; Promise.prototype[s] === &quot;Promise&quot;
  &amp;&amp; Symbol.prototype[s] === &quot;Symbol&quot;
  &amp;&amp; typeof Object.getOwnPropertyDescriptor(
    Object.getPrototypeOf(Int8Array).prototype, Symbol.toStringTag).get === &quot;function&quot;;
  return passed;</div>}
```
###Symbol.toStringTag, misc. built-ins
          
```
function(){
              <div class="code">var s = Symbol.toStringTag;
return Math[s] === &quot;Math&quot;
  &amp;&amp; JSON[s] === &quot;JSON&quot;;</div>}
```
###Symbol.unscopables
          
```
function(){
              <div class="code">var a = { foo: 1, bar: 2 };
a[Symbol.unscopables] = { bar: true };
with (a) {
  return foo === 1 &amp;&amp; typeof bar === &quot;undefined&quot;;
}</div>}
```
###Symbol.isConcatSpreadable
          
```
function(){
              <div class="code">var a = [], b = [];
b[Symbol.isConcatSpreadable] = false;
a = a.concat(b);
return a[0] === b;</div>}
```
###Symbol.iterator, existence
          
```
function(){
              <div class="code">return &quot;iterator&quot; in Symbol;</div>}
```
###Symbol.iterator, arguments object
          
```
function(){
              <div class="code">return (function() {
  return typeof arguments[Symbol.iterator] === 'function'
    &amp;&amp; Object.hasOwnProperty.call(arguments, Symbol.iterator);
}());</div>}
```
###Symbol.replace
          
```
function(){
              <div class="code">var O = {};
O[Symbol.replace] = function(){
  return 42;
};
return ''.replace(O) === 42;</div>}
```
###Symbol.search
          
```
function(){
              <div class="code">var O = {};
O[Symbol.search] = function(){
  return 42;
};
return ''.search(O) === 42;</div>}
```
###Symbol.split
          
```
function(){
              <div class="code">var O = {};
O[Symbol.split] = function(){
  return 42;
};
return ''.split(O) === 42;</div>}
```
###Symbol.match
          
```
function(){
              <div class="code">var O = {};
O[Symbol.match] = function(){
  return 42;
};
return ''.match(O) === 42;</div>}
```
###Symbol.match, RegExp constructor
          
```
function(){
              <div class="code">var re = /./;
re[Symbol.match] = false;
var foo = {constructor: RegExp};
foo[Symbol.match] = true;
return RegExp(re) !== re &amp;&amp; RegExp(foo) === foo;</div>}
```
###Symbol.toPrimitive
          
```
function(){
              <div class="code">var a = {}, b = {}, c = {};
var passed = 0;
a[Symbol.toPrimitive] = function(hint) { passed += hint === &quot;number&quot;;  return 0; };
b[Symbol.toPrimitive] = function(hint) { passed += hint === &quot;string&quot;;  return 0; };
c[Symbol.toPrimitive] = function(hint) { passed += hint === &quot;default&quot;; return 0; };

a &gt;= 0;
b in {};
c == 0;
return passed === 3;</div>}
```
###Symbol.toStringTag
          
```
function(){
              <div class="code">var a = {};
a[Symbol.toStringTag] = &quot;foo&quot;;
return (a + &quot;&quot;) === &quot;[object foo]&quot;;</div>}
```
###Symbol.toStringTag affects existing built-ins
          
```
function(){
              <div class="code">var s = Symbol.toStringTag;
var passed = true;
[
  [Array.prototype, []],
  [String.prototype, ''],
  [arguments, arguments],
  [Function.prototype, function(){}],
  [Error.prototype, new Error()],
  [Boolean.prototype, true],
  [Number.prototype, 2],
  [Date.prototype, new Date()],
  [RegExp.prototype, /./]
].forEach(function(pair){
  pair[0][s] = &quot;foo&quot;;
  passed &amp;= (Object.prototype.toString.call(pair[1]) === &quot;[object foo]&quot;);
  delete pair[0][s];
});
return passed;</div>}
```
###Symbol.toStringTag, new built-ins
          
```
function(){
              <div class="code">var passed = true;
var s = Symbol.toStringTag;
[
  [String, &quot;String Iterator&quot;],
  [Array, &quot;Array Iterator&quot;],
  [Map, &quot;Map Iterator&quot;],
  [Set, &quot;Set Iterator&quot;]
].forEach(function(pair){
  var iterProto = Object.getPrototypeOf(new pair[0]()[Symbol.iterator]());
  passed = passed
    &amp;&amp; iterProto.hasOwnProperty(s)
    &amp;&amp; iterProto[s] === pair[1];
});
passed = passed
  &amp;&amp; Object.getPrototypeOf(function*(){})[s] === &quot;GeneratorFunction&quot;
  &amp;&amp; Object.getPrototypeOf(function*(){}())[s] === &quot;Generator&quot;
  &amp;&amp; Map.prototype[s] === &quot;Map&quot;
  &amp;&amp; Set.prototype[s] === &quot;Set&quot;
  &amp;&amp; ArrayBuffer.prototype[s] === &quot;ArrayBuffer&quot;
  &amp;&amp; DataView.prototype[s] === &quot;DataView&quot;
  &amp;&amp; Promise.prototype[s] === &quot;Promise&quot;
  &amp;&amp; Symbol.prototype[s] === &quot;Symbol&quot;
  &amp;&amp; typeof Object.getOwnPropertyDescriptor(
    Object.getPrototypeOf(Int8Array).prototype, Symbol.toStringTag).get === &quot;function&quot;;
  return passed;</div>}
```
###Symbol.toStringTag, misc. built-ins
          
```
function(){
              <div class="code">var s = Symbol.toStringTag;
return Math[s] === &quot;Math&quot;
  &amp;&amp; JSON[s] === &quot;JSON&quot;;</div>}
```
###Symbol.unscopables
          
```
function(){
              <div class="code">var a = { foo: 1, bar: 2 };
a[Symbol.unscopables] = { bar: true };
with (a) {
  return foo === 1 &amp;&amp; typeof bar === &quot;undefined&quot;;
}</div>}
```
###Symbol.isConcatSpreadable
          
```
function(){
              <div class="code">var a = [], b = [];
b[Symbol.isConcatSpreadable] = false;
a = a.concat(b);
return a[0] === b;</div>}
```
###Symbol.iterator, existence
          
```
function(){
              <div class="code">return &quot;iterator&quot; in Symbol;</div>}
```
###Symbol.iterator, arguments object
          
```
function(){
              <div class="code">return (function() {
  return typeof arguments[Symbol.iterator] === 'function'
    &amp;&amp; Object.hasOwnProperty.call(arguments, Symbol.iterator);
}());</div>}
```
###Symbol.replace
          
```
function(){
              <div class="code">var O = {};
O[Symbol.replace] = function(){
  return 42;
};
return ''.replace(O) === 42;</div>}
```
###Symbol.search
          
```
function(){
              <div class="code">var O = {};
O[Symbol.search] = function(){
  return 42;
};
return ''.search(O) === 42;</div>}
```
###Symbol.split
          
```
function(){
              <div class="code">var O = {};
O[Symbol.split] = function(){
  return 42;
};
return ''.split(O) === 42;</div>}
```
###Symbol.match
          
```
function(){
              <div class="code">var O = {};
O[Symbol.match] = function(){
  return 42;
};
return ''.match(O) === 42;</div>}
```
###Symbol.match, RegExp constructor
          
```
function(){
              <div class="code">var re = /./;
re[Symbol.match] = false;
var foo = {constructor: RegExp};
foo[Symbol.match] = true;
return RegExp(re) !== re &amp;&amp; RegExp(foo) === foo;</div>}
```
###Symbol.toPrimitive
          
```
function(){
              <div class="code">var a = {}, b = {}, c = {};
var passed = 0;
a[Symbol.toPrimitive] = function(hint) { passed += hint === &quot;number&quot;;  return 0; };
b[Symbol.toPrimitive] = function(hint) { passed += hint === &quot;string&quot;;  return 0; };
c[Symbol.toPrimitive] = function(hint) { passed += hint === &quot;default&quot;; return 0; };

a &gt;= 0;
b in {};
c == 0;
return passed === 3;</div>}
```
###Symbol.toStringTag
          
```
function(){
              <div class="code">var a = {};
a[Symbol.toStringTag] = &quot;foo&quot;;
return (a + &quot;&quot;) === &quot;[object foo]&quot;;</div>}
```
###Symbol.toStringTag affects existing built-ins
          
```
function(){
              <div class="code">var s = Symbol.toStringTag;
var passed = true;
[
  [Array.prototype, []],
  [String.prototype, ''],
  [arguments, arguments],
  [Function.prototype, function(){}],
  [Error.prototype, new Error()],
  [Boolean.prototype, true],
  [Number.prototype, 2],
  [Date.prototype, new Date()],
  [RegExp.prototype, /./]
].forEach(function(pair){
  pair[0][s] = &quot;foo&quot;;
  passed &amp;= (Object.prototype.toString.call(pair[1]) === &quot;[object foo]&quot;);
  delete pair[0][s];
});
return passed;</div>}
```
###Symbol.toStringTag, new built-ins
          
```
function(){
              <div class="code">var passed = true;
var s = Symbol.toStringTag;
[
  [String, &quot;String Iterator&quot;],
  [Array, &quot;Array Iterator&quot;],
  [Map, &quot;Map Iterator&quot;],
  [Set, &quot;Set Iterator&quot;]
].forEach(function(pair){
  var iterProto = Object.getPrototypeOf(new pair[0]()[Symbol.iterator]());
  passed = passed
    &amp;&amp; iterProto.hasOwnProperty(s)
    &amp;&amp; iterProto[s] === pair[1];
});
passed = passed
  &amp;&amp; Object.getPrototypeOf(function*(){})[s] === &quot;GeneratorFunction&quot;
  &amp;&amp; Object.getPrototypeOf(function*(){}())[s] === &quot;Generator&quot;
  &amp;&amp; Map.prototype[s] === &quot;Map&quot;
  &amp;&amp; Set.prototype[s] === &quot;Set&quot;
  &amp;&amp; ArrayBuffer.prototype[s] === &quot;ArrayBuffer&quot;
  &amp;&amp; DataView.prototype[s] === &quot;DataView&quot;
  &amp;&amp; Promise.prototype[s] === &quot;Promise&quot;
  &amp;&amp; Symbol.prototype[s] === &quot;Symbol&quot;
  &amp;&amp; typeof Object.getOwnPropertyDescriptor(
    Object.getPrototypeOf(Int8Array).prototype, Symbol.toStringTag).get === &quot;function&quot;;
  return passed;</div>}
```
###Symbol.toStringTag, misc. built-ins
          
```
function(){
              <div class="code">var s = Symbol.toStringTag;
return Math[s] === &quot;Math&quot;
  &amp;&amp; JSON[s] === &quot;JSON&quot;;</div>}
```
###Symbol.unscopables
          
```
function(){
              <div class="code">var a = { foo: 1, bar: 2 };
a[Symbol.unscopables] = { bar: true };
with (a) {
  return foo === 1 &amp;&amp; typeof bar === &quot;undefined&quot;;
}</div>}
```
###Symbol.isConcatSpreadable
          
```
function(){
              <div class="code">var a = [], b = [];
b[Symbol.isConcatSpreadable] = false;
a = a.concat(b);
return a[0] === b;</div>}
```
###Symbol.iterator, existence
          
```
function(){
              <div class="code">return &quot;iterator&quot; in Symbol;</div>}
```
###Symbol.iterator, arguments object
          
```
function(){
              <div class="code">return (function() {
  return typeof arguments[Symbol.iterator] === 'function'
    &amp;&amp; Object.hasOwnProperty.call(arguments, Symbol.iterator);
}());</div>}
```
###Symbol.replace
          
```
function(){
              <div class="code">var O = {};
O[Symbol.replace] = function(){
  return 42;
};
return ''.replace(O) === 42;</div>}
```
###Symbol.search
          
```
function(){
              <div class="code">var O = {};
O[Symbol.search] = function(){
  return 42;
};
return ''.search(O) === 42;</div>}
```
###Symbol.split
          
```
function(){
              <div class="code">var O = {};
O[Symbol.split] = function(){
  return 42;
};
return ''.split(O) === 42;</div>}
```
###Symbol.match
          
```
function(){
              <div class="code">var O = {};
O[Symbol.match] = function(){
  return 42;
};
return ''.match(O) === 42;</div>}
```
###Symbol.match, RegExp constructor
          
```
function(){
              <div class="code">var re = /./;
re[Symbol.match] = false;
var foo = {constructor: RegExp};
foo[Symbol.match] = true;
return RegExp(re) !== re &amp;&amp; RegExp(foo) === foo;</div>}
```
###Symbol.toPrimitive
          
```
function(){
              <div class="code">var a = {}, b = {}, c = {};
var passed = 0;
a[Symbol.toPrimitive] = function(hint) { passed += hint === &quot;number&quot;;  return 0; };
b[Symbol.toPrimitive] = function(hint) { passed += hint === &quot;string&quot;;  return 0; };
c[Symbol.toPrimitive] = function(hint) { passed += hint === &quot;default&quot;; return 0; };

a &gt;= 0;
b in {};
c == 0;
return passed === 3;</div>}
```
###Symbol.toStringTag
          
```
function(){
              <div class="code">var a = {};
a[Symbol.toStringTag] = &quot;foo&quot;;
return (a + &quot;&quot;) === &quot;[object foo]&quot;;</div>}
```
###Symbol.toStringTag affects existing built-ins
          
```
function(){
              <div class="code">var s = Symbol.toStringTag;
var passed = true;
[
  [Array.prototype, []],
  [String.prototype, ''],
  [arguments, arguments],
  [Function.prototype, function(){}],
  [Error.prototype, new Error()],
  [Boolean.prototype, true],
  [Number.prototype, 2],
  [Date.prototype, new Date()],
  [RegExp.prototype, /./]
].forEach(function(pair){
  pair[0][s] = &quot;foo&quot;;
  passed &amp;= (Object.prototype.toString.call(pair[1]) === &quot;[object foo]&quot;);
  delete pair[0][s];
});
return passed;</div>}
```
###Symbol.toStringTag, new built-ins
          
```
function(){
              <div class="code">var passed = true;
var s = Symbol.toStringTag;
[
  [String, &quot;String Iterator&quot;],
  [Array, &quot;Array Iterator&quot;],
  [Map, &quot;Map Iterator&quot;],
  [Set, &quot;Set Iterator&quot;]
].forEach(function(pair){
  var iterProto = Object.getPrototypeOf(new pair[0]()[Symbol.iterator]());
  passed = passed
    &amp;&amp; iterProto.hasOwnProperty(s)
    &amp;&amp; iterProto[s] === pair[1];
});
passed = passed
  &amp;&amp; Object.getPrototypeOf(function*(){})[s] === &quot;GeneratorFunction&quot;
  &amp;&amp; Object.getPrototypeOf(function*(){}())[s] === &quot;Generator&quot;
  &amp;&amp; Map.prototype[s] === &quot;Map&quot;
  &amp;&amp; Set.prototype[s] === &quot;Set&quot;
  &amp;&amp; ArrayBuffer.prototype[s] === &quot;ArrayBuffer&quot;
  &amp;&amp; DataView.prototype[s] === &quot;DataView&quot;
  &amp;&amp; Promise.prototype[s] === &quot;Promise&quot;
  &amp;&amp; Symbol.prototype[s] === &quot;Symbol&quot;
  &amp;&amp; typeof Object.getOwnPropertyDescriptor(
    Object.getPrototypeOf(Int8Array).prototype, Symbol.toStringTag).get === &quot;function&quot;;
  return passed;</div>}
```
###Symbol.toStringTag, misc. built-ins
          
```
function(){
              <div class="code">var s = Symbol.toStringTag;
return Math[s] === &quot;Math&quot;
  &amp;&amp; JSON[s] === &quot;JSON&quot;;</div>}
```
###Symbol.unscopables
          
```
function(){
              <div class="code">var a = { foo: 1, bar: 2 };
a[Symbol.unscopables] = { bar: true };
with (a) {
  return foo === 1 &amp;&amp; typeof bar === &quot;undefined&quot;;
}</div>}
```
###Symbol.isConcatSpreadable
          
```
function(){
              <div class="code">var a = [], b = [];
b[Symbol.isConcatSpreadable] = false;
a = a.concat(b);
return a[0] === b;</div>}
```
###Symbol.iterator, existence
          
```
function(){
              <div class="code">return &quot;iterator&quot; in Symbol;</div>}
```
###Symbol.iterator, arguments object
          
```
function(){
              <div class="code">return (function() {
  return typeof arguments[Symbol.iterator] === 'function'
    &amp;&amp; Object.hasOwnProperty.call(arguments, Symbol.iterator);
}());</div>}
```
###Symbol.replace
          
```
function(){
              <div class="code">var O = {};
O[Symbol.replace] = function(){
  return 42;
};
return ''.replace(O) === 42;</div>}
```
###Symbol.search
          
```
function(){
              <div class="code">var O = {};
O[Symbol.search] = function(){
  return 42;
};
return ''.search(O) === 42;</div>}
```
###Symbol.split
          
```
function(){
              <div class="code">var O = {};
O[Symbol.split] = function(){
  return 42;
};
return ''.split(O) === 42;</div>}
```
###Symbol.match
          
```
function(){
              <div class="code">var O = {};
O[Symbol.match] = function(){
  return 42;
};
return ''.match(O) === 42;</div>}
```
###Symbol.match, RegExp constructor
          
```
function(){
              <div class="code">var re = /./;
re[Symbol.match] = false;
var foo = {constructor: RegExp};
foo[Symbol.match] = true;
return RegExp(re) !== re &amp;&amp; RegExp(foo) === foo;</div>}
```
###Symbol.toPrimitive
          
```
function(){
              <div class="code">var a = {}, b = {}, c = {};
var passed = 0;
a[Symbol.toPrimitive] = function(hint) { passed += hint === &quot;number&quot;;  return 0; };
b[Symbol.toPrimitive] = function(hint) { passed += hint === &quot;string&quot;;  return 0; };
c[Symbol.toPrimitive] = function(hint) { passed += hint === &quot;default&quot;; return 0; };

a &gt;= 0;
b in {};
c == 0;
return passed === 3;</div>}
```
###Symbol.toStringTag
          
```
function(){
              <div class="code">var a = {};
a[Symbol.toStringTag] = &quot;foo&quot;;
return (a + &quot;&quot;) === &quot;[object foo]&quot;;</div>}
```
###Symbol.toStringTag affects existing built-ins
          
```
function(){
              <div class="code">var s = Symbol.toStringTag;
var passed = true;
[
  [Array.prototype, []],
  [String.prototype, ''],
  [arguments, arguments],
  [Function.prototype, function(){}],
  [Error.prototype, new Error()],
  [Boolean.prototype, true],
  [Number.prototype, 2],
  [Date.prototype, new Date()],
  [RegExp.prototype, /./]
].forEach(function(pair){
  pair[0][s] = &quot;foo&quot;;
  passed &amp;= (Object.prototype.toString.call(pair[1]) === &quot;[object foo]&quot;);
  delete pair[0][s];
});
return passed;</div>}
```
###Symbol.toStringTag, new built-ins
          
```
function(){
              <div class="code">var passed = true;
var s = Symbol.toStringTag;
[
  [String, &quot;String Iterator&quot;],
  [Array, &quot;Array Iterator&quot;],
  [Map, &quot;Map Iterator&quot;],
  [Set, &quot;Set Iterator&quot;]
].forEach(function(pair){
  var iterProto = Object.getPrototypeOf(new pair[0]()[Symbol.iterator]());
  passed = passed
    &amp;&amp; iterProto.hasOwnProperty(s)
    &amp;&amp; iterProto[s] === pair[1];
});
passed = passed
  &amp;&amp; Object.getPrototypeOf(function*(){})[s] === &quot;GeneratorFunction&quot;
  &amp;&amp; Object.getPrototypeOf(function*(){}())[s] === &quot;Generator&quot;
  &amp;&amp; Map.prototype[s] === &quot;Map&quot;
  &amp;&amp; Set.prototype[s] === &quot;Set&quot;
  &amp;&amp; ArrayBuffer.prototype[s] === &quot;ArrayBuffer&quot;
  &amp;&amp; DataView.prototype[s] === &quot;DataView&quot;
  &amp;&amp; Promise.prototype[s] === &quot;Promise&quot;
  &amp;&amp; Symbol.prototype[s] === &quot;Symbol&quot;
  &amp;&amp; typeof Object.getOwnPropertyDescriptor(
    Object.getPrototypeOf(Int8Array).prototype, Symbol.toStringTag).get === &quot;function&quot;;
  return passed;</div>}
```
###Symbol.toStringTag, misc. built-ins
          
```
function(){
              <div class="code">var s = Symbol.toStringTag;
return Math[s] === &quot;Math&quot;
  &amp;&amp; JSON[s] === &quot;JSON&quot;;</div>}
```
###Symbol.unscopables
          
```
function(){
              <div class="code">var a = { foo: 1, bar: 2 };
a[Symbol.unscopables] = { bar: true };
with (a) {
  return foo === 1 &amp;&amp; typeof bar === &quot;undefined&quot;;
}</div>}
```
###Symbol.isConcatSpreadable
          
```
function(){
              <div class="code">var a = [], b = [];
b[Symbol.isConcatSpreadable] = false;
a = a.concat(b);
return a[0] === b;</div>}
```
###Symbol.iterator, existence
          
```
function(){
              <div class="code">return &quot;iterator&quot; in Symbol;</div>}
```
###Symbol.iterator, arguments object
          
```
function(){
              <div class="code">return (function() {
  return typeof arguments[Symbol.iterator] === 'function'
    &amp;&amp; Object.hasOwnProperty.call(arguments, Symbol.iterator);
}());</div>}
```
###Symbol.replace
          
```
function(){
              <div class="code">var O = {};
O[Symbol.replace] = function(){
  return 42;
};
return ''.replace(O) === 42;</div>}
```
###Symbol.search
          
```
function(){
              <div class="code">var O = {};
O[Symbol.search] = function(){
  return 42;
};
return ''.search(O) === 42;</div>}
```
###Symbol.split
          
```
function(){
              <div class="code">var O = {};
O[Symbol.split] = function(){
  return 42;
};
return ''.split(O) === 42;</div>}
```
###Symbol.match
          
```
function(){
              <div class="code">var O = {};
O[Symbol.match] = function(){
  return 42;
};
return ''.match(O) === 42;</div>}
```
###Symbol.match, RegExp constructor
          
```
function(){
              <div class="code">var re = /./;
re[Symbol.match] = false;
var foo = {constructor: RegExp};
foo[Symbol.match] = true;
return RegExp(re) !== re &amp;&amp; RegExp(foo) === foo;</div>}
```
###Symbol.toPrimitive
          
```
function(){
              <div class="code">var a = {}, b = {}, c = {};
var passed = 0;
a[Symbol.toPrimitive] = function(hint) { passed += hint === &quot;number&quot;;  return 0; };
b[Symbol.toPrimitive] = function(hint) { passed += hint === &quot;string&quot;;  return 0; };
c[Symbol.toPrimitive] = function(hint) { passed += hint === &quot;default&quot;; return 0; };

a &gt;= 0;
b in {};
c == 0;
return passed === 3;</div>}
```
###Symbol.toStringTag
          
```
function(){
              <div class="code">var a = {};
a[Symbol.toStringTag] = &quot;foo&quot;;
return (a + &quot;&quot;) === &quot;[object foo]&quot;;</div>}
```
###Symbol.toStringTag affects existing built-ins
          
```
function(){
              <div class="code">var s = Symbol.toStringTag;
var passed = true;
[
  [Array.prototype, []],
  [String.prototype, ''],
  [arguments, arguments],
  [Function.prototype, function(){}],
  [Error.prototype, new Error()],
  [Boolean.prototype, true],
  [Number.prototype, 2],
  [Date.prototype, new Date()],
  [RegExp.prototype, /./]
].forEach(function(pair){
  pair[0][s] = &quot;foo&quot;;
  passed &amp;= (Object.prototype.toString.call(pair[1]) === &quot;[object foo]&quot;);
  delete pair[0][s];
});
return passed;</div>}
```
###Symbol.toStringTag, new built-ins
          
```
function(){
              <div class="code">var passed = true;
var s = Symbol.toStringTag;
[
  [String, &quot;String Iterator&quot;],
  [Array, &quot;Array Iterator&quot;],
  [Map, &quot;Map Iterator&quot;],
  [Set, &quot;Set Iterator&quot;]
].forEach(function(pair){
  var iterProto = Object.getPrototypeOf(new pair[0]()[Symbol.iterator]());
  passed = passed
    &amp;&amp; iterProto.hasOwnProperty(s)
    &amp;&amp; iterProto[s] === pair[1];
});
passed = passed
  &amp;&amp; Object.getPrototypeOf(function*(){})[s] === &quot;GeneratorFunction&quot;
  &amp;&amp; Object.getPrototypeOf(function*(){}())[s] === &quot;Generator&quot;
  &amp;&amp; Map.prototype[s] === &quot;Map&quot;
  &amp;&amp; Set.prototype[s] === &quot;Set&quot;
  &amp;&amp; ArrayBuffer.prototype[s] === &quot;ArrayBuffer&quot;
  &amp;&amp; DataView.prototype[s] === &quot;DataView&quot;
  &amp;&amp; Promise.prototype[s] === &quot;Promise&quot;
  &amp;&amp; Symbol.prototype[s] === &quot;Symbol&quot;
  &amp;&amp; typeof Object.getOwnPropertyDescriptor(
    Object.getPrototypeOf(Int8Array).prototype, Symbol.toStringTag).get === &quot;function&quot;;
  return passed;</div>}
```
###Symbol.toStringTag, misc. built-ins
          
```
function(){
              <div class="code">var s = Symbol.toStringTag;
return Math[s] === &quot;Math&quot;
  &amp;&amp; JSON[s] === &quot;JSON&quot;;</div>}
```
###Symbol.unscopables
          
```
function(){
              <div class="code">var a = { foo: 1, bar: 2 };
a[Symbol.unscopables] = { bar: true };
with (a) {
  return foo === 1 &amp;&amp; typeof bar === &quot;undefined&quot;;
}</div>}
```
###Symbol.isConcatSpreadable
          
```
function(){
              <div class="code">var a = [], b = [];
b[Symbol.isConcatSpreadable] = false;
a = a.concat(b);
return a[0] === b;</div>}
```
###Symbol.iterator, existence
          
```
function(){
              <div class="code">return &quot;iterator&quot; in Symbol;</div>}
```
###Symbol.iterator, arguments object
          
```
function(){
              <div class="code">return (function() {
  return typeof arguments[Symbol.iterator] === 'function'
    &amp;&amp; Object.hasOwnProperty.call(arguments, Symbol.iterator);
}());</div>}
```
###Symbol.replace
          
```
function(){
              <div class="code">var O = {};
O[Symbol.replace] = function(){
  return 42;
};
return ''.replace(O) === 42;</div>}
```
###Symbol.search
          
```
function(){
              <div class="code">var O = {};
O[Symbol.search] = function(){
  return 42;
};
return ''.search(O) === 42;</div>}
```
###Symbol.split
          
```
function(){
              <div class="code">var O = {};
O[Symbol.split] = function(){
  return 42;
};
return ''.split(O) === 42;</div>}
```
###Symbol.match
          
```
function(){
              <div class="code">var O = {};
O[Symbol.match] = function(){
  return 42;
};
return ''.match(O) === 42;</div>}
```
###Symbol.match, RegExp constructor
          
```
function(){
              <div class="code">var re = /./;
re[Symbol.match] = false;
var foo = {constructor: RegExp};
foo[Symbol.match] = true;
return RegExp(re) !== re &amp;&amp; RegExp(foo) === foo;</div>}
```
###Symbol.toPrimitive
          
```
function(){
              <div class="code">var a = {}, b = {}, c = {};
var passed = 0;
a[Symbol.toPrimitive] = function(hint) { passed += hint === &quot;number&quot;;  return 0; };
b[Symbol.toPrimitive] = function(hint) { passed += hint === &quot;string&quot;;  return 0; };
c[Symbol.toPrimitive] = function(hint) { passed += hint === &quot;default&quot;; return 0; };

a &gt;= 0;
b in {};
c == 0;
return passed === 3;</div>}
```
###Symbol.toStringTag
          
```
function(){
              <div class="code">var a = {};
a[Symbol.toStringTag] = &quot;foo&quot;;
return (a + &quot;&quot;) === &quot;[object foo]&quot;;</div>}
```
###Symbol.toStringTag affects existing built-ins
          
```
function(){
              <div class="code">var s = Symbol.toStringTag;
var passed = true;
[
  [Array.prototype, []],
  [String.prototype, ''],
  [arguments, arguments],
  [Function.prototype, function(){}],
  [Error.prototype, new Error()],
  [Boolean.prototype, true],
  [Number.prototype, 2],
  [Date.prototype, new Date()],
  [RegExp.prototype, /./]
].forEach(function(pair){
  pair[0][s] = &quot;foo&quot;;
  passed &amp;= (Object.prototype.toString.call(pair[1]) === &quot;[object foo]&quot;);
  delete pair[0][s];
});
return passed;</div>}
```
###Symbol.toStringTag, new built-ins
          
```
function(){
              <div class="code">var passed = true;
var s = Symbol.toStringTag;
[
  [String, &quot;String Iterator&quot;],
  [Array, &quot;Array Iterator&quot;],
  [Map, &quot;Map Iterator&quot;],
  [Set, &quot;Set Iterator&quot;]
].forEach(function(pair){
  var iterProto = Object.getPrototypeOf(new pair[0]()[Symbol.iterator]());
  passed = passed
    &amp;&amp; iterProto.hasOwnProperty(s)
    &amp;&amp; iterProto[s] === pair[1];
});
passed = passed
  &amp;&amp; Object.getPrototypeOf(function*(){})[s] === &quot;GeneratorFunction&quot;
  &amp;&amp; Object.getPrototypeOf(function*(){}())[s] === &quot;Generator&quot;
  &amp;&amp; Map.prototype[s] === &quot;Map&quot;
  &amp;&amp; Set.prototype[s] === &quot;Set&quot;
  &amp;&amp; ArrayBuffer.prototype[s] === &quot;ArrayBuffer&quot;
  &amp;&amp; DataView.prototype[s] === &quot;DataView&quot;
  &amp;&amp; Promise.prototype[s] === &quot;Promise&quot;
  &amp;&amp; Symbol.prototype[s] === &quot;Symbol&quot;
  &amp;&amp; typeof Object.getOwnPropertyDescriptor(
    Object.getPrototypeOf(Int8Array).prototype, Symbol.toStringTag).get === &quot;function&quot;;
  return passed;</div>}
```
###Symbol.toStringTag, misc. built-ins
          
```
function(){
              <div class="code">var s = Symbol.toStringTag;
return Math[s] === &quot;Math&quot;
  &amp;&amp; JSON[s] === &quot;JSON&quot;;</div>}
```
###Symbol.unscopables
          
```
function(){
              <div class="code">var a = { foo: 1, bar: 2 };
a[Symbol.unscopables] = { bar: true };
with (a) {
  return foo === 1 &amp;&amp; typeof bar === &quot;undefined&quot;;
}</div>}
```
