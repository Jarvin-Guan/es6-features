###ToPrimitive
          
```
function(){
              <div class="code">// ToPrimitive -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({toString:Function()}, { get: function(o, k) { get.push(k); return o[k]; }});
p + 3;
return get[0] === Symbol.toPrimitive &amp;&amp; get.slice(1) + '' === &quot;valueOf,toString&quot;;</div>}
```
###CreateListFromArrayLike
          
```
function(){
              <div class="code">// CreateListFromArrayLike -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({length:2, 0:0, 1:0}, { get: function(o, k) { get.push(k); return o[k]; }});
Function.prototype.apply({}, p);
return get + '' === &quot;length,0,1&quot;;</div>}
```
###HasBinding
          
```
function(){
              <div class="code">// HasBinding -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({foo:1}, { get: function(o, k) { get.push(k); return o[k]; }});
p[Symbol.unscopables] = p;
with(p) {
  typeof foo;
}
return get[0] === Symbol.unscopables &amp;&amp; get.slice(1) + '' === &quot;foo&quot;;</div>}
```
###CreateDynamicFunction
          
```
function(){
              <div class="code">// CreateDynamicFunction -&gt; GetPrototypeFromConstructor -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy(Function, { get: function(o, k) { get.push(k); return o[k]; }});
new p;
return get + '' === &quot;prototype&quot;;</div>}
```
###ClassDefinitionEvaluation
          
```
function(){
              <div class="code">// ClassDefinitionEvaluation -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy(Function(), { get: function(o, k) { get.push(k); return o[k]; }});
class C extends p {}
return get + '' === &quot;prototype&quot;;</div>}
```
###IteratorComplete, IteratorValue
          
```
function(){
              <div class="code">// IteratorComplete -&gt; Get -&gt; [[Get]]
// IteratorValue -&gt; Get -&gt; [[Get]]
var get = [];
var iterable = {};
iterable[Symbol.iterator] = function() {
  return {
    next: function() {
      return new Proxy({ value: 2, done: false }, { get: function(o, k) { get.push(k); return o[k]; }});
    }
  };
}
var i = 0;
for(var e of iterable) {
  if (++i &gt;= 2) break;
}
return get + '' === &quot;done,value,done,value&quot;;</div>}
```
###ToPropertyDescriptor
          
```
function(){
              <div class="code">// ToPropertyDescriptor -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({
    enumerable: true, configurable: true, value: true,
    writable: true, get: Function(), set: Function()
  }, { get: function(o, k) { get.push(k); return o[k]; }});
try {
  // This will throw, since it will have true for both &quot;get&quot; and &quot;value&quot;,
  // but not before performing a Get on every property.
  Object.defineProperty({}, &quot;foo&quot;, p);
} catch(e) {
  return get + '' === &quot;enumerable,configurable,value,writable,get,set&quot;;
}</div>}
```
###Object.assign
          
```
function(){
              <div class="code">// Object.assign -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({foo:1, bar:2}, { get: function(o, k) { get.push(k); return o[k]; }});
Object.assign({}, p);
return get + '' === &quot;foo,bar&quot;;</div>}
```
###Object.defineProperties
          
```
function(){
              <div class="code">// Object.defineProperties -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({foo:{}, bar:{}}, { get: function(o, k) { get.push(k); return o[k]; }});
Object.defineProperties({}, p);
return get + '' === &quot;foo,bar&quot;;</div>}
```
###Function.prototype.bind
          
```
function(){
              <div class="code">// Function.prototype.bind -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy(Function(), { get: function(o, k) { get.push(k); return o[k]; }});
Function.prototype.bind.call(p);
return get + '' === &quot;length,name&quot;;</div>}
```
###Error.prototype.toString
          
```
function(){
              <div class="code">// Error.prototype.toString -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({}, { get: function(o, k) { get.push(k); return o[k]; }});
Error.prototype.toString.call(p);
return get + '' === &quot;name,message&quot;;</div>}
```
###String.raw
          
```
function(){
              <div class="code">// String.raw -&gt; Get -&gt; [[Get]]
var get = [];
var raw = new Proxy({length: 2, 0: '', 1: ''}, { get: function(o, k) { get.push(k); return o[k]; }});
var p = new Proxy({raw: raw}, { get: function(o, k) { get.push(k); return o[k]; }});
String.raw(p);
return get + '' === &quot;raw,length,0,1&quot;;</div>}
```
###RegExp constructor
          
```
function(){
              <div class="code">// RegExp -&gt; Get -&gt; [[Get]]
var get = [];
var re = { constructor: null };
re[Symbol.match] = true;
var p = new Proxy(re, { get: function(o, k) { get.push(k); return o[k]; }});
RegExp(p);
return get[0] === Symbol.match &amp;&amp; get.slice(1) + '' === &quot;constructor,source,flags&quot;;</div>}
```
###RegExp.prototype.flags
          
```
function(){
              <div class="code">// RegExp.prototype.flags -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({}, { get: function(o, k) { get.push(k); return o[k]; }});
Object.getOwnPropertyDescriptor(RegExp.prototype, 'flags').get.call(p);
return get + '' === &quot;global,ignoreCase,multiline,unicode,sticky&quot;;</div>}
```
###RegExp.prototype.toString
          
```
function(){
              <div class="code">// RegExp.prototype.toString -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({}, { get: function(o, k) { get.push(k); return o[k]; }});
RegExp.prototype.toString.call(p);
return get + '' === &quot;source,flags&quot;;</div>}
```
###Array.from
          
```
function(){
              <div class="code">// Array.from -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({length: 2, 0: '', 1: ''}, { get: function(o, k) { get.push(k); return o[k]; }});
Array.from(p);
return get[0] === Symbol.iterator &amp;&amp; get.slice(1) + '' === &quot;length,0,1&quot;;</div>}
```
###Array.prototype.pop
          
```
function(){
              <div class="code">// Array.prototype.pop -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy([0,1,2,3], { get: function(o, k) { get.push(k); return o[k]; }});
Array.prototype.pop.call(p);
return get + '' === &quot;length,3&quot;;</div>}
```
###Array.prototype.reverse
          
```
function(){
              <div class="code">// Array.prototype.reverse -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy([0,,2,,4,,], { get: function(o, k) { get.push(k); return o[k]; }});
Array.prototype.reverse.call(p);
return get + '' === &quot;length,0,4,2&quot;;</div>}
```
###Array.prototype.shift
          
```
function(){
              <div class="code">// Array.prototype.shift -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy([0,1,2,3], { get: function(o, k) { get.push(k); return o[k]; }});
Array.prototype.shift.call(p);
return get + '' === &quot;length,0,1,2,3&quot;;</div>}
```
###Array.prototype.toString
          
```
function(){
              <div class="code">// Array.prototype.toString -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({ join:Function() }, { get: function(o, k) { get.push(k); return o[k]; }});
Array.prototype.toString.call(p);
return get + '' === &quot;join&quot;;</div>}
```
###JSON.stringify
          
```
function(){
              <div class="code">// JSON.stringify -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({}, { get: function(o, k) { get.push(k); return o[k]; }});
JSON.stringify(p);
return get + '' === &quot;toJSON&quot;;</div>}
```
###Promise resolve functions
          
```
function(){
              <div class="code">// Promise resolve functions -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({}, { get: function(o, k) { get.push(k); return o[k]; }});
new Promise(function(resolve){ resolve(p); });
return get + '' === &quot;then&quot;;</div>}
```
###String.prototype.replace
          
```
function(){
              <div class="code">// String.prototype.replace functions -&gt; Get -&gt; [[Get]]
var get = [];
var proxied = {};
proxied[Symbol.toPrimitive] = Function();
var p = new Proxy(proxied, { get: function(o, k) { get.push(k); return o[k]; }});
&quot;&quot;.replace(p);
return get[0] === Symbol.replace &amp;&amp; get[1] === Symbol.toPrimitive &amp;&amp; get.length === 2;</div>}
```
###String.prototype.split
          
```
function(){
              <div class="code">// String.prototype.split functions -&gt; Get -&gt; [[Get]]
var get = [];
var proxied = {};
proxied[Symbol.toPrimitive] = Function();
var p = new Proxy(proxied, { get: function(o, k) { get.push(k); return o[k]; }});
&quot;&quot;.split(p);
return get[0] === Symbol.split &amp;&amp; get[1] === Symbol.toPrimitive &amp;&amp; get.length === 2;</div>}
```
###Date.prototype.toJSON
          
```
function(){
              <div class="code">// Date.prototype.toJSON -&gt; ToPrimitive -&gt; Get -&gt; [[Get]]
// Date.prototype.toJSON -&gt; Invoke -&gt; GetMethod -&gt; GetV -&gt; [[Get]]
var get = [];
var p = new Proxy({toString:Function(),toISOString:Function()}, { get: function(o, k) { get.push(k); return o[k]; }});
Date.prototype.toJSON.call(p);
return get[0] === Symbol.toPrimitive &amp;&amp; get.slice(1) + '' === &quot;valueOf,toString,toISOString&quot;;</div>}
```
###ToPrimitive
          
```
function(){
              <div class="code">// ToPrimitive -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({toString:Function()}, { get: function(o, k) { get.push(k); return o[k]; }});
p + 3;
return get[0] === Symbol.toPrimitive &amp;&amp; get.slice(1) + '' === &quot;valueOf,toString&quot;;</div>}
```
###CreateListFromArrayLike
          
```
function(){
              <div class="code">// CreateListFromArrayLike -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({length:2, 0:0, 1:0}, { get: function(o, k) { get.push(k); return o[k]; }});
Function.prototype.apply({}, p);
return get + '' === &quot;length,0,1&quot;;</div>}
```
###HasBinding
          
```
function(){
              <div class="code">// HasBinding -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({foo:1}, { get: function(o, k) { get.push(k); return o[k]; }});
p[Symbol.unscopables] = p;
with(p) {
  typeof foo;
}
return get[0] === Symbol.unscopables &amp;&amp; get.slice(1) + '' === &quot;foo&quot;;</div>}
```
###CreateDynamicFunction
          
```
function(){
              <div class="code">// CreateDynamicFunction -&gt; GetPrototypeFromConstructor -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy(Function, { get: function(o, k) { get.push(k); return o[k]; }});
new p;
return get + '' === &quot;prototype&quot;;</div>}
```
###ClassDefinitionEvaluation
          
```
function(){
              <div class="code">// ClassDefinitionEvaluation -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy(Function(), { get: function(o, k) { get.push(k); return o[k]; }});
class C extends p {}
return get + '' === &quot;prototype&quot;;</div>}
```
###IteratorComplete, IteratorValue
          
```
function(){
              <div class="code">// IteratorComplete -&gt; Get -&gt; [[Get]]
// IteratorValue -&gt; Get -&gt; [[Get]]
var get = [];
var iterable = {};
iterable[Symbol.iterator] = function() {
  return {
    next: function() {
      return new Proxy({ value: 2, done: false }, { get: function(o, k) { get.push(k); return o[k]; }});
    }
  };
}
var i = 0;
for(var e of iterable) {
  if (++i &gt;= 2) break;
}
return get + '' === &quot;done,value,done,value&quot;;</div>}
```
###ToPropertyDescriptor
          
```
function(){
              <div class="code">// ToPropertyDescriptor -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({
    enumerable: true, configurable: true, value: true,
    writable: true, get: Function(), set: Function()
  }, { get: function(o, k) { get.push(k); return o[k]; }});
try {
  // This will throw, since it will have true for both &quot;get&quot; and &quot;value&quot;,
  // but not before performing a Get on every property.
  Object.defineProperty({}, &quot;foo&quot;, p);
} catch(e) {
  return get + '' === &quot;enumerable,configurable,value,writable,get,set&quot;;
}</div>}
```
###Object.assign
          
```
function(){
              <div class="code">// Object.assign -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({foo:1, bar:2}, { get: function(o, k) { get.push(k); return o[k]; }});
Object.assign({}, p);
return get + '' === &quot;foo,bar&quot;;</div>}
```
###Object.defineProperties
          
```
function(){
              <div class="code">// Object.defineProperties -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({foo:{}, bar:{}}, { get: function(o, k) { get.push(k); return o[k]; }});
Object.defineProperties({}, p);
return get + '' === &quot;foo,bar&quot;;</div>}
```
###Function.prototype.bind
          
```
function(){
              <div class="code">// Function.prototype.bind -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy(Function(), { get: function(o, k) { get.push(k); return o[k]; }});
Function.prototype.bind.call(p);
return get + '' === &quot;length,name&quot;;</div>}
```
###Error.prototype.toString
          
```
function(){
              <div class="code">// Error.prototype.toString -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({}, { get: function(o, k) { get.push(k); return o[k]; }});
Error.prototype.toString.call(p);
return get + '' === &quot;name,message&quot;;</div>}
```
###String.raw
          
```
function(){
              <div class="code">// String.raw -&gt; Get -&gt; [[Get]]
var get = [];
var raw = new Proxy({length: 2, 0: '', 1: ''}, { get: function(o, k) { get.push(k); return o[k]; }});
var p = new Proxy({raw: raw}, { get: function(o, k) { get.push(k); return o[k]; }});
String.raw(p);
return get + '' === &quot;raw,length,0,1&quot;;</div>}
```
###RegExp constructor
          
```
function(){
              <div class="code">// RegExp -&gt; Get -&gt; [[Get]]
var get = [];
var re = { constructor: null };
re[Symbol.match] = true;
var p = new Proxy(re, { get: function(o, k) { get.push(k); return o[k]; }});
RegExp(p);
return get[0] === Symbol.match &amp;&amp; get.slice(1) + '' === &quot;constructor,source,flags&quot;;</div>}
```
###RegExp.prototype.flags
          
```
function(){
              <div class="code">// RegExp.prototype.flags -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({}, { get: function(o, k) { get.push(k); return o[k]; }});
Object.getOwnPropertyDescriptor(RegExp.prototype, 'flags').get.call(p);
return get + '' === &quot;global,ignoreCase,multiline,unicode,sticky&quot;;</div>}
```
###RegExp.prototype.toString
          
```
function(){
              <div class="code">// RegExp.prototype.toString -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({}, { get: function(o, k) { get.push(k); return o[k]; }});
RegExp.prototype.toString.call(p);
return get + '' === &quot;source,flags&quot;;</div>}
```
###Array.from
          
```
function(){
              <div class="code">// Array.from -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({length: 2, 0: '', 1: ''}, { get: function(o, k) { get.push(k); return o[k]; }});
Array.from(p);
return get[0] === Symbol.iterator &amp;&amp; get.slice(1) + '' === &quot;length,0,1&quot;;</div>}
```
###Array.prototype.pop
          
```
function(){
              <div class="code">// Array.prototype.pop -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy([0,1,2,3], { get: function(o, k) { get.push(k); return o[k]; }});
Array.prototype.pop.call(p);
return get + '' === &quot;length,3&quot;;</div>}
```
###Array.prototype.reverse
          
```
function(){
              <div class="code">// Array.prototype.reverse -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy([0,,2,,4,,], { get: function(o, k) { get.push(k); return o[k]; }});
Array.prototype.reverse.call(p);
return get + '' === &quot;length,0,4,2&quot;;</div>}
```
###Array.prototype.shift
          
```
function(){
              <div class="code">// Array.prototype.shift -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy([0,1,2,3], { get: function(o, k) { get.push(k); return o[k]; }});
Array.prototype.shift.call(p);
return get + '' === &quot;length,0,1,2,3&quot;;</div>}
```
###Array.prototype.toString
          
```
function(){
              <div class="code">// Array.prototype.toString -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({ join:Function() }, { get: function(o, k) { get.push(k); return o[k]; }});
Array.prototype.toString.call(p);
return get + '' === &quot;join&quot;;</div>}
```
###JSON.stringify
          
```
function(){
              <div class="code">// JSON.stringify -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({}, { get: function(o, k) { get.push(k); return o[k]; }});
JSON.stringify(p);
return get + '' === &quot;toJSON&quot;;</div>}
```
###Promise resolve functions
          
```
function(){
              <div class="code">// Promise resolve functions -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({}, { get: function(o, k) { get.push(k); return o[k]; }});
new Promise(function(resolve){ resolve(p); });
return get + '' === &quot;then&quot;;</div>}
```
###String.prototype.replace
          
```
function(){
              <div class="code">// String.prototype.replace functions -&gt; Get -&gt; [[Get]]
var get = [];
var proxied = {};
proxied[Symbol.toPrimitive] = Function();
var p = new Proxy(proxied, { get: function(o, k) { get.push(k); return o[k]; }});
&quot;&quot;.replace(p);
return get[0] === Symbol.replace &amp;&amp; get[1] === Symbol.toPrimitive &amp;&amp; get.length === 2;</div>}
```
###String.prototype.split
          
```
function(){
              <div class="code">// String.prototype.split functions -&gt; Get -&gt; [[Get]]
var get = [];
var proxied = {};
proxied[Symbol.toPrimitive] = Function();
var p = new Proxy(proxied, { get: function(o, k) { get.push(k); return o[k]; }});
&quot;&quot;.split(p);
return get[0] === Symbol.split &amp;&amp; get[1] === Symbol.toPrimitive &amp;&amp; get.length === 2;</div>}
```
###Date.prototype.toJSON
          
```
function(){
              <div class="code">// Date.prototype.toJSON -&gt; ToPrimitive -&gt; Get -&gt; [[Get]]
// Date.prototype.toJSON -&gt; Invoke -&gt; GetMethod -&gt; GetV -&gt; [[Get]]
var get = [];
var p = new Proxy({toString:Function(),toISOString:Function()}, { get: function(o, k) { get.push(k); return o[k]; }});
Date.prototype.toJSON.call(p);
return get[0] === Symbol.toPrimitive &amp;&amp; get.slice(1) + '' === &quot;valueOf,toString,toISOString&quot;;</div>}
```
###ToPrimitive
          
```
function(){
              <div class="code">// ToPrimitive -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({toString:Function()}, { get: function(o, k) { get.push(k); return o[k]; }});
p + 3;
return get[0] === Symbol.toPrimitive &amp;&amp; get.slice(1) + '' === &quot;valueOf,toString&quot;;</div>}
```
###CreateListFromArrayLike
          
```
function(){
              <div class="code">// CreateListFromArrayLike -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({length:2, 0:0, 1:0}, { get: function(o, k) { get.push(k); return o[k]; }});
Function.prototype.apply({}, p);
return get + '' === &quot;length,0,1&quot;;</div>}
```
###HasBinding
          
```
function(){
              <div class="code">// HasBinding -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({foo:1}, { get: function(o, k) { get.push(k); return o[k]; }});
p[Symbol.unscopables] = p;
with(p) {
  typeof foo;
}
return get[0] === Symbol.unscopables &amp;&amp; get.slice(1) + '' === &quot;foo&quot;;</div>}
```
###CreateDynamicFunction
          
```
function(){
              <div class="code">// CreateDynamicFunction -&gt; GetPrototypeFromConstructor -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy(Function, { get: function(o, k) { get.push(k); return o[k]; }});
new p;
return get + '' === &quot;prototype&quot;;</div>}
```
###ClassDefinitionEvaluation
          
```
function(){
              <div class="code">// ClassDefinitionEvaluation -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy(Function(), { get: function(o, k) { get.push(k); return o[k]; }});
class C extends p {}
return get + '' === &quot;prototype&quot;;</div>}
```
###IteratorComplete, IteratorValue
          
```
function(){
              <div class="code">// IteratorComplete -&gt; Get -&gt; [[Get]]
// IteratorValue -&gt; Get -&gt; [[Get]]
var get = [];
var iterable = {};
iterable[Symbol.iterator] = function() {
  return {
    next: function() {
      return new Proxy({ value: 2, done: false }, { get: function(o, k) { get.push(k); return o[k]; }});
    }
  };
}
var i = 0;
for(var e of iterable) {
  if (++i &gt;= 2) break;
}
return get + '' === &quot;done,value,done,value&quot;;</div>}
```
###ToPropertyDescriptor
          
```
function(){
              <div class="code">// ToPropertyDescriptor -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({
    enumerable: true, configurable: true, value: true,
    writable: true, get: Function(), set: Function()
  }, { get: function(o, k) { get.push(k); return o[k]; }});
try {
  // This will throw, since it will have true for both &quot;get&quot; and &quot;value&quot;,
  // but not before performing a Get on every property.
  Object.defineProperty({}, &quot;foo&quot;, p);
} catch(e) {
  return get + '' === &quot;enumerable,configurable,value,writable,get,set&quot;;
}</div>}
```
###Object.assign
          
```
function(){
              <div class="code">// Object.assign -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({foo:1, bar:2}, { get: function(o, k) { get.push(k); return o[k]; }});
Object.assign({}, p);
return get + '' === &quot;foo,bar&quot;;</div>}
```
###Object.defineProperties
          
```
function(){
              <div class="code">// Object.defineProperties -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({foo:{}, bar:{}}, { get: function(o, k) { get.push(k); return o[k]; }});
Object.defineProperties({}, p);
return get + '' === &quot;foo,bar&quot;;</div>}
```
###Function.prototype.bind
          
```
function(){
              <div class="code">// Function.prototype.bind -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy(Function(), { get: function(o, k) { get.push(k); return o[k]; }});
Function.prototype.bind.call(p);
return get + '' === &quot;length,name&quot;;</div>}
```
###Error.prototype.toString
          
```
function(){
              <div class="code">// Error.prototype.toString -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({}, { get: function(o, k) { get.push(k); return o[k]; }});
Error.prototype.toString.call(p);
return get + '' === &quot;name,message&quot;;</div>}
```
###String.raw
          
```
function(){
              <div class="code">// String.raw -&gt; Get -&gt; [[Get]]
var get = [];
var raw = new Proxy({length: 2, 0: '', 1: ''}, { get: function(o, k) { get.push(k); return o[k]; }});
var p = new Proxy({raw: raw}, { get: function(o, k) { get.push(k); return o[k]; }});
String.raw(p);
return get + '' === &quot;raw,length,0,1&quot;;</div>}
```
###RegExp constructor
          
```
function(){
              <div class="code">// RegExp -&gt; Get -&gt; [[Get]]
var get = [];
var re = { constructor: null };
re[Symbol.match] = true;
var p = new Proxy(re, { get: function(o, k) { get.push(k); return o[k]; }});
RegExp(p);
return get[0] === Symbol.match &amp;&amp; get.slice(1) + '' === &quot;constructor,source,flags&quot;;</div>}
```
###RegExp.prototype.flags
          
```
function(){
              <div class="code">// RegExp.prototype.flags -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({}, { get: function(o, k) { get.push(k); return o[k]; }});
Object.getOwnPropertyDescriptor(RegExp.prototype, 'flags').get.call(p);
return get + '' === &quot;global,ignoreCase,multiline,unicode,sticky&quot;;</div>}
```
###RegExp.prototype.toString
          
```
function(){
              <div class="code">// RegExp.prototype.toString -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({}, { get: function(o, k) { get.push(k); return o[k]; }});
RegExp.prototype.toString.call(p);
return get + '' === &quot;source,flags&quot;;</div>}
```
###Array.from
          
```
function(){
              <div class="code">// Array.from -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({length: 2, 0: '', 1: ''}, { get: function(o, k) { get.push(k); return o[k]; }});
Array.from(p);
return get[0] === Symbol.iterator &amp;&amp; get.slice(1) + '' === &quot;length,0,1&quot;;</div>}
```
###Array.prototype.pop
          
```
function(){
              <div class="code">// Array.prototype.pop -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy([0,1,2,3], { get: function(o, k) { get.push(k); return o[k]; }});
Array.prototype.pop.call(p);
return get + '' === &quot;length,3&quot;;</div>}
```
###Array.prototype.reverse
          
```
function(){
              <div class="code">// Array.prototype.reverse -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy([0,,2,,4,,], { get: function(o, k) { get.push(k); return o[k]; }});
Array.prototype.reverse.call(p);
return get + '' === &quot;length,0,4,2&quot;;</div>}
```
###Array.prototype.shift
          
```
function(){
              <div class="code">// Array.prototype.shift -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy([0,1,2,3], { get: function(o, k) { get.push(k); return o[k]; }});
Array.prototype.shift.call(p);
return get + '' === &quot;length,0,1,2,3&quot;;</div>}
```
###Array.prototype.toString
          
```
function(){
              <div class="code">// Array.prototype.toString -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({ join:Function() }, { get: function(o, k) { get.push(k); return o[k]; }});
Array.prototype.toString.call(p);
return get + '' === &quot;join&quot;;</div>}
```
###JSON.stringify
          
```
function(){
              <div class="code">// JSON.stringify -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({}, { get: function(o, k) { get.push(k); return o[k]; }});
JSON.stringify(p);
return get + '' === &quot;toJSON&quot;;</div>}
```
###Promise resolve functions
          
```
function(){
              <div class="code">// Promise resolve functions -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({}, { get: function(o, k) { get.push(k); return o[k]; }});
new Promise(function(resolve){ resolve(p); });
return get + '' === &quot;then&quot;;</div>}
```
###String.prototype.replace
          
```
function(){
              <div class="code">// String.prototype.replace functions -&gt; Get -&gt; [[Get]]
var get = [];
var proxied = {};
proxied[Symbol.toPrimitive] = Function();
var p = new Proxy(proxied, { get: function(o, k) { get.push(k); return o[k]; }});
&quot;&quot;.replace(p);
return get[0] === Symbol.replace &amp;&amp; get[1] === Symbol.toPrimitive &amp;&amp; get.length === 2;</div>}
```
###String.prototype.split
          
```
function(){
              <div class="code">// String.prototype.split functions -&gt; Get -&gt; [[Get]]
var get = [];
var proxied = {};
proxied[Symbol.toPrimitive] = Function();
var p = new Proxy(proxied, { get: function(o, k) { get.push(k); return o[k]; }});
&quot;&quot;.split(p);
return get[0] === Symbol.split &amp;&amp; get[1] === Symbol.toPrimitive &amp;&amp; get.length === 2;</div>}
```
###Date.prototype.toJSON
          
```
function(){
              <div class="code">// Date.prototype.toJSON -&gt; ToPrimitive -&gt; Get -&gt; [[Get]]
// Date.prototype.toJSON -&gt; Invoke -&gt; GetMethod -&gt; GetV -&gt; [[Get]]
var get = [];
var p = new Proxy({toString:Function(),toISOString:Function()}, { get: function(o, k) { get.push(k); return o[k]; }});
Date.prototype.toJSON.call(p);
return get[0] === Symbol.toPrimitive &amp;&amp; get.slice(1) + '' === &quot;valueOf,toString,toISOString&quot;;</div>}
```
###ToPrimitive
          
```
function(){
              <div class="code">// ToPrimitive -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({toString:Function()}, { get: function(o, k) { get.push(k); return o[k]; }});
p + 3;
return get[0] === Symbol.toPrimitive &amp;&amp; get.slice(1) + '' === &quot;valueOf,toString&quot;;</div>}
```
###CreateListFromArrayLike
          
```
function(){
              <div class="code">// CreateListFromArrayLike -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({length:2, 0:0, 1:0}, { get: function(o, k) { get.push(k); return o[k]; }});
Function.prototype.apply({}, p);
return get + '' === &quot;length,0,1&quot;;</div>}
```
###HasBinding
          
```
function(){
              <div class="code">// HasBinding -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({foo:1}, { get: function(o, k) { get.push(k); return o[k]; }});
p[Symbol.unscopables] = p;
with(p) {
  typeof foo;
}
return get[0] === Symbol.unscopables &amp;&amp; get.slice(1) + '' === &quot;foo&quot;;</div>}
```
###CreateDynamicFunction
          
```
function(){
              <div class="code">// CreateDynamicFunction -&gt; GetPrototypeFromConstructor -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy(Function, { get: function(o, k) { get.push(k); return o[k]; }});
new p;
return get + '' === &quot;prototype&quot;;</div>}
```
###ClassDefinitionEvaluation
          
```
function(){
              <div class="code">// ClassDefinitionEvaluation -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy(Function(), { get: function(o, k) { get.push(k); return o[k]; }});
class C extends p {}
return get + '' === &quot;prototype&quot;;</div>}
```
###IteratorComplete, IteratorValue
          
```
function(){
              <div class="code">// IteratorComplete -&gt; Get -&gt; [[Get]]
// IteratorValue -&gt; Get -&gt; [[Get]]
var get = [];
var iterable = {};
iterable[Symbol.iterator] = function() {
  return {
    next: function() {
      return new Proxy({ value: 2, done: false }, { get: function(o, k) { get.push(k); return o[k]; }});
    }
  };
}
var i = 0;
for(var e of iterable) {
  if (++i &gt;= 2) break;
}
return get + '' === &quot;done,value,done,value&quot;;</div>}
```
###ToPropertyDescriptor
          
```
function(){
              <div class="code">// ToPropertyDescriptor -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({
    enumerable: true, configurable: true, value: true,
    writable: true, get: Function(), set: Function()
  }, { get: function(o, k) { get.push(k); return o[k]; }});
try {
  // This will throw, since it will have true for both &quot;get&quot; and &quot;value&quot;,
  // but not before performing a Get on every property.
  Object.defineProperty({}, &quot;foo&quot;, p);
} catch(e) {
  return get + '' === &quot;enumerable,configurable,value,writable,get,set&quot;;
}</div>}
```
###Object.assign
          
```
function(){
              <div class="code">// Object.assign -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({foo:1, bar:2}, { get: function(o, k) { get.push(k); return o[k]; }});
Object.assign({}, p);
return get + '' === &quot;foo,bar&quot;;</div>}
```
###Object.defineProperties
          
```
function(){
              <div class="code">// Object.defineProperties -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({foo:{}, bar:{}}, { get: function(o, k) { get.push(k); return o[k]; }});
Object.defineProperties({}, p);
return get + '' === &quot;foo,bar&quot;;</div>}
```
###Function.prototype.bind
          
```
function(){
              <div class="code">// Function.prototype.bind -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy(Function(), { get: function(o, k) { get.push(k); return o[k]; }});
Function.prototype.bind.call(p);
return get + '' === &quot;length,name&quot;;</div>}
```
###Error.prototype.toString
          
```
function(){
              <div class="code">// Error.prototype.toString -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({}, { get: function(o, k) { get.push(k); return o[k]; }});
Error.prototype.toString.call(p);
return get + '' === &quot;name,message&quot;;</div>}
```
###String.raw
          
```
function(){
              <div class="code">// String.raw -&gt; Get -&gt; [[Get]]
var get = [];
var raw = new Proxy({length: 2, 0: '', 1: ''}, { get: function(o, k) { get.push(k); return o[k]; }});
var p = new Proxy({raw: raw}, { get: function(o, k) { get.push(k); return o[k]; }});
String.raw(p);
return get + '' === &quot;raw,length,0,1&quot;;</div>}
```
###RegExp constructor
          
```
function(){
              <div class="code">// RegExp -&gt; Get -&gt; [[Get]]
var get = [];
var re = { constructor: null };
re[Symbol.match] = true;
var p = new Proxy(re, { get: function(o, k) { get.push(k); return o[k]; }});
RegExp(p);
return get[0] === Symbol.match &amp;&amp; get.slice(1) + '' === &quot;constructor,source,flags&quot;;</div>}
```
###RegExp.prototype.flags
          
```
function(){
              <div class="code">// RegExp.prototype.flags -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({}, { get: function(o, k) { get.push(k); return o[k]; }});
Object.getOwnPropertyDescriptor(RegExp.prototype, 'flags').get.call(p);
return get + '' === &quot;global,ignoreCase,multiline,unicode,sticky&quot;;</div>}
```
###RegExp.prototype.toString
          
```
function(){
              <div class="code">// RegExp.prototype.toString -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({}, { get: function(o, k) { get.push(k); return o[k]; }});
RegExp.prototype.toString.call(p);
return get + '' === &quot;source,flags&quot;;</div>}
```
###Array.from
          
```
function(){
              <div class="code">// Array.from -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({length: 2, 0: '', 1: ''}, { get: function(o, k) { get.push(k); return o[k]; }});
Array.from(p);
return get[0] === Symbol.iterator &amp;&amp; get.slice(1) + '' === &quot;length,0,1&quot;;</div>}
```
###Array.prototype.pop
          
```
function(){
              <div class="code">// Array.prototype.pop -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy([0,1,2,3], { get: function(o, k) { get.push(k); return o[k]; }});
Array.prototype.pop.call(p);
return get + '' === &quot;length,3&quot;;</div>}
```
###Array.prototype.reverse
          
```
function(){
              <div class="code">// Array.prototype.reverse -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy([0,,2,,4,,], { get: function(o, k) { get.push(k); return o[k]; }});
Array.prototype.reverse.call(p);
return get + '' === &quot;length,0,4,2&quot;;</div>}
```
###Array.prototype.shift
          
```
function(){
              <div class="code">// Array.prototype.shift -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy([0,1,2,3], { get: function(o, k) { get.push(k); return o[k]; }});
Array.prototype.shift.call(p);
return get + '' === &quot;length,0,1,2,3&quot;;</div>}
```
###Array.prototype.toString
          
```
function(){
              <div class="code">// Array.prototype.toString -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({ join:Function() }, { get: function(o, k) { get.push(k); return o[k]; }});
Array.prototype.toString.call(p);
return get + '' === &quot;join&quot;;</div>}
```
###JSON.stringify
          
```
function(){
              <div class="code">// JSON.stringify -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({}, { get: function(o, k) { get.push(k); return o[k]; }});
JSON.stringify(p);
return get + '' === &quot;toJSON&quot;;</div>}
```
###Promise resolve functions
          
```
function(){
              <div class="code">// Promise resolve functions -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({}, { get: function(o, k) { get.push(k); return o[k]; }});
new Promise(function(resolve){ resolve(p); });
return get + '' === &quot;then&quot;;</div>}
```
###String.prototype.replace
          
```
function(){
              <div class="code">// String.prototype.replace functions -&gt; Get -&gt; [[Get]]
var get = [];
var proxied = {};
proxied[Symbol.toPrimitive] = Function();
var p = new Proxy(proxied, { get: function(o, k) { get.push(k); return o[k]; }});
&quot;&quot;.replace(p);
return get[0] === Symbol.replace &amp;&amp; get[1] === Symbol.toPrimitive &amp;&amp; get.length === 2;</div>}
```
###String.prototype.split
          
```
function(){
              <div class="code">// String.prototype.split functions -&gt; Get -&gt; [[Get]]
var get = [];
var proxied = {};
proxied[Symbol.toPrimitive] = Function();
var p = new Proxy(proxied, { get: function(o, k) { get.push(k); return o[k]; }});
&quot;&quot;.split(p);
return get[0] === Symbol.split &amp;&amp; get[1] === Symbol.toPrimitive &amp;&amp; get.length === 2;</div>}
```
###Date.prototype.toJSON
          
```
function(){
              <div class="code">// Date.prototype.toJSON -&gt; ToPrimitive -&gt; Get -&gt; [[Get]]
// Date.prototype.toJSON -&gt; Invoke -&gt; GetMethod -&gt; GetV -&gt; [[Get]]
var get = [];
var p = new Proxy({toString:Function(),toISOString:Function()}, { get: function(o, k) { get.push(k); return o[k]; }});
Date.prototype.toJSON.call(p);
return get[0] === Symbol.toPrimitive &amp;&amp; get.slice(1) + '' === &quot;valueOf,toString,toISOString&quot;;</div>}
```
###ToPrimitive
          
```
function(){
              <div class="code">// ToPrimitive -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({toString:Function()}, { get: function(o, k) { get.push(k); return o[k]; }});
p + 3;
return get[0] === Symbol.toPrimitive &amp;&amp; get.slice(1) + '' === &quot;valueOf,toString&quot;;</div>}
```
###CreateListFromArrayLike
          
```
function(){
              <div class="code">// CreateListFromArrayLike -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({length:2, 0:0, 1:0}, { get: function(o, k) { get.push(k); return o[k]; }});
Function.prototype.apply({}, p);
return get + '' === &quot;length,0,1&quot;;</div>}
```
###HasBinding
          
```
function(){
              <div class="code">// HasBinding -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({foo:1}, { get: function(o, k) { get.push(k); return o[k]; }});
p[Symbol.unscopables] = p;
with(p) {
  typeof foo;
}
return get[0] === Symbol.unscopables &amp;&amp; get.slice(1) + '' === &quot;foo&quot;;</div>}
```
###CreateDynamicFunction
          
```
function(){
              <div class="code">// CreateDynamicFunction -&gt; GetPrototypeFromConstructor -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy(Function, { get: function(o, k) { get.push(k); return o[k]; }});
new p;
return get + '' === &quot;prototype&quot;;</div>}
```
###ClassDefinitionEvaluation
          
```
function(){
              <div class="code">// ClassDefinitionEvaluation -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy(Function(), { get: function(o, k) { get.push(k); return o[k]; }});
class C extends p {}
return get + '' === &quot;prototype&quot;;</div>}
```
###IteratorComplete, IteratorValue
          
```
function(){
              <div class="code">// IteratorComplete -&gt; Get -&gt; [[Get]]
// IteratorValue -&gt; Get -&gt; [[Get]]
var get = [];
var iterable = {};
iterable[Symbol.iterator] = function() {
  return {
    next: function() {
      return new Proxy({ value: 2, done: false }, { get: function(o, k) { get.push(k); return o[k]; }});
    }
  };
}
var i = 0;
for(var e of iterable) {
  if (++i &gt;= 2) break;
}
return get + '' === &quot;done,value,done,value&quot;;</div>}
```
###ToPropertyDescriptor
          
```
function(){
              <div class="code">// ToPropertyDescriptor -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({
    enumerable: true, configurable: true, value: true,
    writable: true, get: Function(), set: Function()
  }, { get: function(o, k) { get.push(k); return o[k]; }});
try {
  // This will throw, since it will have true for both &quot;get&quot; and &quot;value&quot;,
  // but not before performing a Get on every property.
  Object.defineProperty({}, &quot;foo&quot;, p);
} catch(e) {
  return get + '' === &quot;enumerable,configurable,value,writable,get,set&quot;;
}</div>}
```
###Object.assign
          
```
function(){
              <div class="code">// Object.assign -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({foo:1, bar:2}, { get: function(o, k) { get.push(k); return o[k]; }});
Object.assign({}, p);
return get + '' === &quot;foo,bar&quot;;</div>}
```
###Object.defineProperties
          
```
function(){
              <div class="code">// Object.defineProperties -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({foo:{}, bar:{}}, { get: function(o, k) { get.push(k); return o[k]; }});
Object.defineProperties({}, p);
return get + '' === &quot;foo,bar&quot;;</div>}
```
###Function.prototype.bind
          
```
function(){
              <div class="code">// Function.prototype.bind -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy(Function(), { get: function(o, k) { get.push(k); return o[k]; }});
Function.prototype.bind.call(p);
return get + '' === &quot;length,name&quot;;</div>}
```
###Error.prototype.toString
          
```
function(){
              <div class="code">// Error.prototype.toString -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({}, { get: function(o, k) { get.push(k); return o[k]; }});
Error.prototype.toString.call(p);
return get + '' === &quot;name,message&quot;;</div>}
```
###String.raw
          
```
function(){
              <div class="code">// String.raw -&gt; Get -&gt; [[Get]]
var get = [];
var raw = new Proxy({length: 2, 0: '', 1: ''}, { get: function(o, k) { get.push(k); return o[k]; }});
var p = new Proxy({raw: raw}, { get: function(o, k) { get.push(k); return o[k]; }});
String.raw(p);
return get + '' === &quot;raw,length,0,1&quot;;</div>}
```
###RegExp constructor
          
```
function(){
              <div class="code">// RegExp -&gt; Get -&gt; [[Get]]
var get = [];
var re = { constructor: null };
re[Symbol.match] = true;
var p = new Proxy(re, { get: function(o, k) { get.push(k); return o[k]; }});
RegExp(p);
return get[0] === Symbol.match &amp;&amp; get.slice(1) + '' === &quot;constructor,source,flags&quot;;</div>}
```
###RegExp.prototype.flags
          
```
function(){
              <div class="code">// RegExp.prototype.flags -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({}, { get: function(o, k) { get.push(k); return o[k]; }});
Object.getOwnPropertyDescriptor(RegExp.prototype, 'flags').get.call(p);
return get + '' === &quot;global,ignoreCase,multiline,unicode,sticky&quot;;</div>}
```
###RegExp.prototype.toString
          
```
function(){
              <div class="code">// RegExp.prototype.toString -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({}, { get: function(o, k) { get.push(k); return o[k]; }});
RegExp.prototype.toString.call(p);
return get + '' === &quot;source,flags&quot;;</div>}
```
###Array.from
          
```
function(){
              <div class="code">// Array.from -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({length: 2, 0: '', 1: ''}, { get: function(o, k) { get.push(k); return o[k]; }});
Array.from(p);
return get[0] === Symbol.iterator &amp;&amp; get.slice(1) + '' === &quot;length,0,1&quot;;</div>}
```
###Array.prototype.pop
          
```
function(){
              <div class="code">// Array.prototype.pop -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy([0,1,2,3], { get: function(o, k) { get.push(k); return o[k]; }});
Array.prototype.pop.call(p);
return get + '' === &quot;length,3&quot;;</div>}
```
###Array.prototype.reverse
          
```
function(){
              <div class="code">// Array.prototype.reverse -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy([0,,2,,4,,], { get: function(o, k) { get.push(k); return o[k]; }});
Array.prototype.reverse.call(p);
return get + '' === &quot;length,0,4,2&quot;;</div>}
```
###Array.prototype.shift
          
```
function(){
              <div class="code">// Array.prototype.shift -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy([0,1,2,3], { get: function(o, k) { get.push(k); return o[k]; }});
Array.prototype.shift.call(p);
return get + '' === &quot;length,0,1,2,3&quot;;</div>}
```
###Array.prototype.toString
          
```
function(){
              <div class="code">// Array.prototype.toString -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({ join:Function() }, { get: function(o, k) { get.push(k); return o[k]; }});
Array.prototype.toString.call(p);
return get + '' === &quot;join&quot;;</div>}
```
###JSON.stringify
          
```
function(){
              <div class="code">// JSON.stringify -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({}, { get: function(o, k) { get.push(k); return o[k]; }});
JSON.stringify(p);
return get + '' === &quot;toJSON&quot;;</div>}
```
###Promise resolve functions
          
```
function(){
              <div class="code">// Promise resolve functions -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({}, { get: function(o, k) { get.push(k); return o[k]; }});
new Promise(function(resolve){ resolve(p); });
return get + '' === &quot;then&quot;;</div>}
```
###String.prototype.replace
          
```
function(){
              <div class="code">// String.prototype.replace functions -&gt; Get -&gt; [[Get]]
var get = [];
var proxied = {};
proxied[Symbol.toPrimitive] = Function();
var p = new Proxy(proxied, { get: function(o, k) { get.push(k); return o[k]; }});
&quot;&quot;.replace(p);
return get[0] === Symbol.replace &amp;&amp; get[1] === Symbol.toPrimitive &amp;&amp; get.length === 2;</div>}
```
###String.prototype.split
          
```
function(){
              <div class="code">// String.prototype.split functions -&gt; Get -&gt; [[Get]]
var get = [];
var proxied = {};
proxied[Symbol.toPrimitive] = Function();
var p = new Proxy(proxied, { get: function(o, k) { get.push(k); return o[k]; }});
&quot;&quot;.split(p);
return get[0] === Symbol.split &amp;&amp; get[1] === Symbol.toPrimitive &amp;&amp; get.length === 2;</div>}
```
###Date.prototype.toJSON
          
```
function(){
              <div class="code">// Date.prototype.toJSON -&gt; ToPrimitive -&gt; Get -&gt; [[Get]]
// Date.prototype.toJSON -&gt; Invoke -&gt; GetMethod -&gt; GetV -&gt; [[Get]]
var get = [];
var p = new Proxy({toString:Function(),toISOString:Function()}, { get: function(o, k) { get.push(k); return o[k]; }});
Date.prototype.toJSON.call(p);
return get[0] === Symbol.toPrimitive &amp;&amp; get.slice(1) + '' === &quot;valueOf,toString,toISOString&quot;;</div>}
```
###ToPrimitive
          
```
function(){
              <div class="code">// ToPrimitive -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({toString:Function()}, { get: function(o, k) { get.push(k); return o[k]; }});
p + 3;
return get[0] === Symbol.toPrimitive &amp;&amp; get.slice(1) + '' === &quot;valueOf,toString&quot;;</div>}
```
###CreateListFromArrayLike
          
```
function(){
              <div class="code">// CreateListFromArrayLike -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({length:2, 0:0, 1:0}, { get: function(o, k) { get.push(k); return o[k]; }});
Function.prototype.apply({}, p);
return get + '' === &quot;length,0,1&quot;;</div>}
```
###HasBinding
          
```
function(){
              <div class="code">// HasBinding -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({foo:1}, { get: function(o, k) { get.push(k); return o[k]; }});
p[Symbol.unscopables] = p;
with(p) {
  typeof foo;
}
return get[0] === Symbol.unscopables &amp;&amp; get.slice(1) + '' === &quot;foo&quot;;</div>}
```
###CreateDynamicFunction
          
```
function(){
              <div class="code">// CreateDynamicFunction -&gt; GetPrototypeFromConstructor -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy(Function, { get: function(o, k) { get.push(k); return o[k]; }});
new p;
return get + '' === &quot;prototype&quot;;</div>}
```
###ClassDefinitionEvaluation
          
```
function(){
              <div class="code">// ClassDefinitionEvaluation -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy(Function(), { get: function(o, k) { get.push(k); return o[k]; }});
class C extends p {}
return get + '' === &quot;prototype&quot;;</div>}
```
###IteratorComplete, IteratorValue
          
```
function(){
              <div class="code">// IteratorComplete -&gt; Get -&gt; [[Get]]
// IteratorValue -&gt; Get -&gt; [[Get]]
var get = [];
var iterable = {};
iterable[Symbol.iterator] = function() {
  return {
    next: function() {
      return new Proxy({ value: 2, done: false }, { get: function(o, k) { get.push(k); return o[k]; }});
    }
  };
}
var i = 0;
for(var e of iterable) {
  if (++i &gt;= 2) break;
}
return get + '' === &quot;done,value,done,value&quot;;</div>}
```
###ToPropertyDescriptor
          
```
function(){
              <div class="code">// ToPropertyDescriptor -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({
    enumerable: true, configurable: true, value: true,
    writable: true, get: Function(), set: Function()
  }, { get: function(o, k) { get.push(k); return o[k]; }});
try {
  // This will throw, since it will have true for both &quot;get&quot; and &quot;value&quot;,
  // but not before performing a Get on every property.
  Object.defineProperty({}, &quot;foo&quot;, p);
} catch(e) {
  return get + '' === &quot;enumerable,configurable,value,writable,get,set&quot;;
}</div>}
```
###Object.assign
          
```
function(){
              <div class="code">// Object.assign -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({foo:1, bar:2}, { get: function(o, k) { get.push(k); return o[k]; }});
Object.assign({}, p);
return get + '' === &quot;foo,bar&quot;;</div>}
```
###Object.defineProperties
          
```
function(){
              <div class="code">// Object.defineProperties -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({foo:{}, bar:{}}, { get: function(o, k) { get.push(k); return o[k]; }});
Object.defineProperties({}, p);
return get + '' === &quot;foo,bar&quot;;</div>}
```
###Function.prototype.bind
          
```
function(){
              <div class="code">// Function.prototype.bind -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy(Function(), { get: function(o, k) { get.push(k); return o[k]; }});
Function.prototype.bind.call(p);
return get + '' === &quot;length,name&quot;;</div>}
```
###Error.prototype.toString
          
```
function(){
              <div class="code">// Error.prototype.toString -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({}, { get: function(o, k) { get.push(k); return o[k]; }});
Error.prototype.toString.call(p);
return get + '' === &quot;name,message&quot;;</div>}
```
###String.raw
          
```
function(){
              <div class="code">// String.raw -&gt; Get -&gt; [[Get]]
var get = [];
var raw = new Proxy({length: 2, 0: '', 1: ''}, { get: function(o, k) { get.push(k); return o[k]; }});
var p = new Proxy({raw: raw}, { get: function(o, k) { get.push(k); return o[k]; }});
String.raw(p);
return get + '' === &quot;raw,length,0,1&quot;;</div>}
```
###RegExp constructor
          
```
function(){
              <div class="code">// RegExp -&gt; Get -&gt; [[Get]]
var get = [];
var re = { constructor: null };
re[Symbol.match] = true;
var p = new Proxy(re, { get: function(o, k) { get.push(k); return o[k]; }});
RegExp(p);
return get[0] === Symbol.match &amp;&amp; get.slice(1) + '' === &quot;constructor,source,flags&quot;;</div>}
```
###RegExp.prototype.flags
          
```
function(){
              <div class="code">// RegExp.prototype.flags -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({}, { get: function(o, k) { get.push(k); return o[k]; }});
Object.getOwnPropertyDescriptor(RegExp.prototype, 'flags').get.call(p);
return get + '' === &quot;global,ignoreCase,multiline,unicode,sticky&quot;;</div>}
```
###RegExp.prototype.toString
          
```
function(){
              <div class="code">// RegExp.prototype.toString -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({}, { get: function(o, k) { get.push(k); return o[k]; }});
RegExp.prototype.toString.call(p);
return get + '' === &quot;source,flags&quot;;</div>}
```
###Array.from
          
```
function(){
              <div class="code">// Array.from -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({length: 2, 0: '', 1: ''}, { get: function(o, k) { get.push(k); return o[k]; }});
Array.from(p);
return get[0] === Symbol.iterator &amp;&amp; get.slice(1) + '' === &quot;length,0,1&quot;;</div>}
```
###Array.prototype.pop
          
```
function(){
              <div class="code">// Array.prototype.pop -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy([0,1,2,3], { get: function(o, k) { get.push(k); return o[k]; }});
Array.prototype.pop.call(p);
return get + '' === &quot;length,3&quot;;</div>}
```
###Array.prototype.reverse
          
```
function(){
              <div class="code">// Array.prototype.reverse -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy([0,,2,,4,,], { get: function(o, k) { get.push(k); return o[k]; }});
Array.prototype.reverse.call(p);
return get + '' === &quot;length,0,4,2&quot;;</div>}
```
###Array.prototype.shift
          
```
function(){
              <div class="code">// Array.prototype.shift -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy([0,1,2,3], { get: function(o, k) { get.push(k); return o[k]; }});
Array.prototype.shift.call(p);
return get + '' === &quot;length,0,1,2,3&quot;;</div>}
```
###Array.prototype.toString
          
```
function(){
              <div class="code">// Array.prototype.toString -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({ join:Function() }, { get: function(o, k) { get.push(k); return o[k]; }});
Array.prototype.toString.call(p);
return get + '' === &quot;join&quot;;</div>}
```
###JSON.stringify
          
```
function(){
              <div class="code">// JSON.stringify -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({}, { get: function(o, k) { get.push(k); return o[k]; }});
JSON.stringify(p);
return get + '' === &quot;toJSON&quot;;</div>}
```
###Promise resolve functions
          
```
function(){
              <div class="code">// Promise resolve functions -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({}, { get: function(o, k) { get.push(k); return o[k]; }});
new Promise(function(resolve){ resolve(p); });
return get + '' === &quot;then&quot;;</div>}
```
###String.prototype.replace
          
```
function(){
              <div class="code">// String.prototype.replace functions -&gt; Get -&gt; [[Get]]
var get = [];
var proxied = {};
proxied[Symbol.toPrimitive] = Function();
var p = new Proxy(proxied, { get: function(o, k) { get.push(k); return o[k]; }});
&quot;&quot;.replace(p);
return get[0] === Symbol.replace &amp;&amp; get[1] === Symbol.toPrimitive &amp;&amp; get.length === 2;</div>}
```
###String.prototype.split
          
```
function(){
              <div class="code">// String.prototype.split functions -&gt; Get -&gt; [[Get]]
var get = [];
var proxied = {};
proxied[Symbol.toPrimitive] = Function();
var p = new Proxy(proxied, { get: function(o, k) { get.push(k); return o[k]; }});
&quot;&quot;.split(p);
return get[0] === Symbol.split &amp;&amp; get[1] === Symbol.toPrimitive &amp;&amp; get.length === 2;</div>}
```
###Date.prototype.toJSON
          
```
function(){
              <div class="code">// Date.prototype.toJSON -&gt; ToPrimitive -&gt; Get -&gt; [[Get]]
// Date.prototype.toJSON -&gt; Invoke -&gt; GetMethod -&gt; GetV -&gt; [[Get]]
var get = [];
var p = new Proxy({toString:Function(),toISOString:Function()}, { get: function(o, k) { get.push(k); return o[k]; }});
Date.prototype.toJSON.call(p);
return get[0] === Symbol.toPrimitive &amp;&amp; get.slice(1) + '' === &quot;valueOf,toString,toISOString&quot;;</div>}
```
###ToPrimitive
          
```
function(){
              <div class="code">// ToPrimitive -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({toString:Function()}, { get: function(o, k) { get.push(k); return o[k]; }});
p + 3;
return get[0] === Symbol.toPrimitive &amp;&amp; get.slice(1) + '' === &quot;valueOf,toString&quot;;</div>}
```
###CreateListFromArrayLike
          
```
function(){
              <div class="code">// CreateListFromArrayLike -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({length:2, 0:0, 1:0}, { get: function(o, k) { get.push(k); return o[k]; }});
Function.prototype.apply({}, p);
return get + '' === &quot;length,0,1&quot;;</div>}
```
###HasBinding
          
```
function(){
              <div class="code">// HasBinding -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({foo:1}, { get: function(o, k) { get.push(k); return o[k]; }});
p[Symbol.unscopables] = p;
with(p) {
  typeof foo;
}
return get[0] === Symbol.unscopables &amp;&amp; get.slice(1) + '' === &quot;foo&quot;;</div>}
```
###CreateDynamicFunction
          
```
function(){
              <div class="code">// CreateDynamicFunction -&gt; GetPrototypeFromConstructor -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy(Function, { get: function(o, k) { get.push(k); return o[k]; }});
new p;
return get + '' === &quot;prototype&quot;;</div>}
```
###ClassDefinitionEvaluation
          
```
function(){
              <div class="code">// ClassDefinitionEvaluation -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy(Function(), { get: function(o, k) { get.push(k); return o[k]; }});
class C extends p {}
return get + '' === &quot;prototype&quot;;</div>}
```
###IteratorComplete, IteratorValue
          
```
function(){
              <div class="code">// IteratorComplete -&gt; Get -&gt; [[Get]]
// IteratorValue -&gt; Get -&gt; [[Get]]
var get = [];
var iterable = {};
iterable[Symbol.iterator] = function() {
  return {
    next: function() {
      return new Proxy({ value: 2, done: false }, { get: function(o, k) { get.push(k); return o[k]; }});
    }
  };
}
var i = 0;
for(var e of iterable) {
  if (++i &gt;= 2) break;
}
return get + '' === &quot;done,value,done,value&quot;;</div>}
```
###ToPropertyDescriptor
          
```
function(){
              <div class="code">// ToPropertyDescriptor -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({
    enumerable: true, configurable: true, value: true,
    writable: true, get: Function(), set: Function()
  }, { get: function(o, k) { get.push(k); return o[k]; }});
try {
  // This will throw, since it will have true for both &quot;get&quot; and &quot;value&quot;,
  // but not before performing a Get on every property.
  Object.defineProperty({}, &quot;foo&quot;, p);
} catch(e) {
  return get + '' === &quot;enumerable,configurable,value,writable,get,set&quot;;
}</div>}
```
###Object.assign
          
```
function(){
              <div class="code">// Object.assign -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({foo:1, bar:2}, { get: function(o, k) { get.push(k); return o[k]; }});
Object.assign({}, p);
return get + '' === &quot;foo,bar&quot;;</div>}
```
###Object.defineProperties
          
```
function(){
              <div class="code">// Object.defineProperties -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({foo:{}, bar:{}}, { get: function(o, k) { get.push(k); return o[k]; }});
Object.defineProperties({}, p);
return get + '' === &quot;foo,bar&quot;;</div>}
```
###Function.prototype.bind
          
```
function(){
              <div class="code">// Function.prototype.bind -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy(Function(), { get: function(o, k) { get.push(k); return o[k]; }});
Function.prototype.bind.call(p);
return get + '' === &quot;length,name&quot;;</div>}
```
###Error.prototype.toString
          
```
function(){
              <div class="code">// Error.prototype.toString -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({}, { get: function(o, k) { get.push(k); return o[k]; }});
Error.prototype.toString.call(p);
return get + '' === &quot;name,message&quot;;</div>}
```
###String.raw
          
```
function(){
              <div class="code">// String.raw -&gt; Get -&gt; [[Get]]
var get = [];
var raw = new Proxy({length: 2, 0: '', 1: ''}, { get: function(o, k) { get.push(k); return o[k]; }});
var p = new Proxy({raw: raw}, { get: function(o, k) { get.push(k); return o[k]; }});
String.raw(p);
return get + '' === &quot;raw,length,0,1&quot;;</div>}
```
###RegExp constructor
          
```
function(){
              <div class="code">// RegExp -&gt; Get -&gt; [[Get]]
var get = [];
var re = { constructor: null };
re[Symbol.match] = true;
var p = new Proxy(re, { get: function(o, k) { get.push(k); return o[k]; }});
RegExp(p);
return get[0] === Symbol.match &amp;&amp; get.slice(1) + '' === &quot;constructor,source,flags&quot;;</div>}
```
###RegExp.prototype.flags
          
```
function(){
              <div class="code">// RegExp.prototype.flags -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({}, { get: function(o, k) { get.push(k); return o[k]; }});
Object.getOwnPropertyDescriptor(RegExp.prototype, 'flags').get.call(p);
return get + '' === &quot;global,ignoreCase,multiline,unicode,sticky&quot;;</div>}
```
###RegExp.prototype.toString
          
```
function(){
              <div class="code">// RegExp.prototype.toString -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({}, { get: function(o, k) { get.push(k); return o[k]; }});
RegExp.prototype.toString.call(p);
return get + '' === &quot;source,flags&quot;;</div>}
```
###Array.from
          
```
function(){
              <div class="code">// Array.from -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({length: 2, 0: '', 1: ''}, { get: function(o, k) { get.push(k); return o[k]; }});
Array.from(p);
return get[0] === Symbol.iterator &amp;&amp; get.slice(1) + '' === &quot;length,0,1&quot;;</div>}
```
###Array.prototype.pop
          
```
function(){
              <div class="code">// Array.prototype.pop -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy([0,1,2,3], { get: function(o, k) { get.push(k); return o[k]; }});
Array.prototype.pop.call(p);
return get + '' === &quot;length,3&quot;;</div>}
```
###Array.prototype.reverse
          
```
function(){
              <div class="code">// Array.prototype.reverse -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy([0,,2,,4,,], { get: function(o, k) { get.push(k); return o[k]; }});
Array.prototype.reverse.call(p);
return get + '' === &quot;length,0,4,2&quot;;</div>}
```
###Array.prototype.shift
          
```
function(){
              <div class="code">// Array.prototype.shift -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy([0,1,2,3], { get: function(o, k) { get.push(k); return o[k]; }});
Array.prototype.shift.call(p);
return get + '' === &quot;length,0,1,2,3&quot;;</div>}
```
###Array.prototype.toString
          
```
function(){
              <div class="code">// Array.prototype.toString -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({ join:Function() }, { get: function(o, k) { get.push(k); return o[k]; }});
Array.prototype.toString.call(p);
return get + '' === &quot;join&quot;;</div>}
```
###JSON.stringify
          
```
function(){
              <div class="code">// JSON.stringify -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({}, { get: function(o, k) { get.push(k); return o[k]; }});
JSON.stringify(p);
return get + '' === &quot;toJSON&quot;;</div>}
```
###Promise resolve functions
          
```
function(){
              <div class="code">// Promise resolve functions -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({}, { get: function(o, k) { get.push(k); return o[k]; }});
new Promise(function(resolve){ resolve(p); });
return get + '' === &quot;then&quot;;</div>}
```
###String.prototype.replace
          
```
function(){
              <div class="code">// String.prototype.replace functions -&gt; Get -&gt; [[Get]]
var get = [];
var proxied = {};
proxied[Symbol.toPrimitive] = Function();
var p = new Proxy(proxied, { get: function(o, k) { get.push(k); return o[k]; }});
&quot;&quot;.replace(p);
return get[0] === Symbol.replace &amp;&amp; get[1] === Symbol.toPrimitive &amp;&amp; get.length === 2;</div>}
```
###String.prototype.split
          
```
function(){
              <div class="code">// String.prototype.split functions -&gt; Get -&gt; [[Get]]
var get = [];
var proxied = {};
proxied[Symbol.toPrimitive] = Function();
var p = new Proxy(proxied, { get: function(o, k) { get.push(k); return o[k]; }});
&quot;&quot;.split(p);
return get[0] === Symbol.split &amp;&amp; get[1] === Symbol.toPrimitive &amp;&amp; get.length === 2;</div>}
```
###Date.prototype.toJSON
          
```
function(){
              <div class="code">// Date.prototype.toJSON -&gt; ToPrimitive -&gt; Get -&gt; [[Get]]
// Date.prototype.toJSON -&gt; Invoke -&gt; GetMethod -&gt; GetV -&gt; [[Get]]
var get = [];
var p = new Proxy({toString:Function(),toISOString:Function()}, { get: function(o, k) { get.push(k); return o[k]; }});
Date.prototype.toJSON.call(p);
return get[0] === Symbol.toPrimitive &amp;&amp; get.slice(1) + '' === &quot;valueOf,toString,toISOString&quot;;</div>}
```
###ToPrimitive
          
```
function(){
              <div class="code">// ToPrimitive -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({toString:Function()}, { get: function(o, k) { get.push(k); return o[k]; }});
p + 3;
return get[0] === Symbol.toPrimitive &amp;&amp; get.slice(1) + '' === &quot;valueOf,toString&quot;;</div>}
```
###CreateListFromArrayLike
          
```
function(){
              <div class="code">// CreateListFromArrayLike -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({length:2, 0:0, 1:0}, { get: function(o, k) { get.push(k); return o[k]; }});
Function.prototype.apply({}, p);
return get + '' === &quot;length,0,1&quot;;</div>}
```
###HasBinding
          
```
function(){
              <div class="code">// HasBinding -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({foo:1}, { get: function(o, k) { get.push(k); return o[k]; }});
p[Symbol.unscopables] = p;
with(p) {
  typeof foo;
}
return get[0] === Symbol.unscopables &amp;&amp; get.slice(1) + '' === &quot;foo&quot;;</div>}
```
###CreateDynamicFunction
          
```
function(){
              <div class="code">// CreateDynamicFunction -&gt; GetPrototypeFromConstructor -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy(Function, { get: function(o, k) { get.push(k); return o[k]; }});
new p;
return get + '' === &quot;prototype&quot;;</div>}
```
###ClassDefinitionEvaluation
          
```
function(){
              <div class="code">// ClassDefinitionEvaluation -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy(Function(), { get: function(o, k) { get.push(k); return o[k]; }});
class C extends p {}
return get + '' === &quot;prototype&quot;;</div>}
```
###IteratorComplete, IteratorValue
          
```
function(){
              <div class="code">// IteratorComplete -&gt; Get -&gt; [[Get]]
// IteratorValue -&gt; Get -&gt; [[Get]]
var get = [];
var iterable = {};
iterable[Symbol.iterator] = function() {
  return {
    next: function() {
      return new Proxy({ value: 2, done: false }, { get: function(o, k) { get.push(k); return o[k]; }});
    }
  };
}
var i = 0;
for(var e of iterable) {
  if (++i &gt;= 2) break;
}
return get + '' === &quot;done,value,done,value&quot;;</div>}
```
###ToPropertyDescriptor
          
```
function(){
              <div class="code">// ToPropertyDescriptor -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({
    enumerable: true, configurable: true, value: true,
    writable: true, get: Function(), set: Function()
  }, { get: function(o, k) { get.push(k); return o[k]; }});
try {
  // This will throw, since it will have true for both &quot;get&quot; and &quot;value&quot;,
  // but not before performing a Get on every property.
  Object.defineProperty({}, &quot;foo&quot;, p);
} catch(e) {
  return get + '' === &quot;enumerable,configurable,value,writable,get,set&quot;;
}</div>}
```
###Object.assign
          
```
function(){
              <div class="code">// Object.assign -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({foo:1, bar:2}, { get: function(o, k) { get.push(k); return o[k]; }});
Object.assign({}, p);
return get + '' === &quot;foo,bar&quot;;</div>}
```
###Object.defineProperties
          
```
function(){
              <div class="code">// Object.defineProperties -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({foo:{}, bar:{}}, { get: function(o, k) { get.push(k); return o[k]; }});
Object.defineProperties({}, p);
return get + '' === &quot;foo,bar&quot;;</div>}
```
###Function.prototype.bind
          
```
function(){
              <div class="code">// Function.prototype.bind -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy(Function(), { get: function(o, k) { get.push(k); return o[k]; }});
Function.prototype.bind.call(p);
return get + '' === &quot;length,name&quot;;</div>}
```
###Error.prototype.toString
          
```
function(){
              <div class="code">// Error.prototype.toString -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({}, { get: function(o, k) { get.push(k); return o[k]; }});
Error.prototype.toString.call(p);
return get + '' === &quot;name,message&quot;;</div>}
```
###String.raw
          
```
function(){
              <div class="code">// String.raw -&gt; Get -&gt; [[Get]]
var get = [];
var raw = new Proxy({length: 2, 0: '', 1: ''}, { get: function(o, k) { get.push(k); return o[k]; }});
var p = new Proxy({raw: raw}, { get: function(o, k) { get.push(k); return o[k]; }});
String.raw(p);
return get + '' === &quot;raw,length,0,1&quot;;</div>}
```
###RegExp constructor
          
```
function(){
              <div class="code">// RegExp -&gt; Get -&gt; [[Get]]
var get = [];
var re = { constructor: null };
re[Symbol.match] = true;
var p = new Proxy(re, { get: function(o, k) { get.push(k); return o[k]; }});
RegExp(p);
return get[0] === Symbol.match &amp;&amp; get.slice(1) + '' === &quot;constructor,source,flags&quot;;</div>}
```
###RegExp.prototype.flags
          
```
function(){
              <div class="code">// RegExp.prototype.flags -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({}, { get: function(o, k) { get.push(k); return o[k]; }});
Object.getOwnPropertyDescriptor(RegExp.prototype, 'flags').get.call(p);
return get + '' === &quot;global,ignoreCase,multiline,unicode,sticky&quot;;</div>}
```
###RegExp.prototype.toString
          
```
function(){
              <div class="code">// RegExp.prototype.toString -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({}, { get: function(o, k) { get.push(k); return o[k]; }});
RegExp.prototype.toString.call(p);
return get + '' === &quot;source,flags&quot;;</div>}
```
###Array.from
          
```
function(){
              <div class="code">// Array.from -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({length: 2, 0: '', 1: ''}, { get: function(o, k) { get.push(k); return o[k]; }});
Array.from(p);
return get[0] === Symbol.iterator &amp;&amp; get.slice(1) + '' === &quot;length,0,1&quot;;</div>}
```
###Array.prototype.pop
          
```
function(){
              <div class="code">// Array.prototype.pop -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy([0,1,2,3], { get: function(o, k) { get.push(k); return o[k]; }});
Array.prototype.pop.call(p);
return get + '' === &quot;length,3&quot;;</div>}
```
###Array.prototype.reverse
          
```
function(){
              <div class="code">// Array.prototype.reverse -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy([0,,2,,4,,], { get: function(o, k) { get.push(k); return o[k]; }});
Array.prototype.reverse.call(p);
return get + '' === &quot;length,0,4,2&quot;;</div>}
```
###Array.prototype.shift
          
```
function(){
              <div class="code">// Array.prototype.shift -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy([0,1,2,3], { get: function(o, k) { get.push(k); return o[k]; }});
Array.prototype.shift.call(p);
return get + '' === &quot;length,0,1,2,3&quot;;</div>}
```
###Array.prototype.toString
          
```
function(){
              <div class="code">// Array.prototype.toString -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({ join:Function() }, { get: function(o, k) { get.push(k); return o[k]; }});
Array.prototype.toString.call(p);
return get + '' === &quot;join&quot;;</div>}
```
###JSON.stringify
          
```
function(){
              <div class="code">// JSON.stringify -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({}, { get: function(o, k) { get.push(k); return o[k]; }});
JSON.stringify(p);
return get + '' === &quot;toJSON&quot;;</div>}
```
###Promise resolve functions
          
```
function(){
              <div class="code">// Promise resolve functions -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({}, { get: function(o, k) { get.push(k); return o[k]; }});
new Promise(function(resolve){ resolve(p); });
return get + '' === &quot;then&quot;;</div>}
```
###String.prototype.replace
          
```
function(){
              <div class="code">// String.prototype.replace functions -&gt; Get -&gt; [[Get]]
var get = [];
var proxied = {};
proxied[Symbol.toPrimitive] = Function();
var p = new Proxy(proxied, { get: function(o, k) { get.push(k); return o[k]; }});
&quot;&quot;.replace(p);
return get[0] === Symbol.replace &amp;&amp; get[1] === Symbol.toPrimitive &amp;&amp; get.length === 2;</div>}
```
###String.prototype.split
          
```
function(){
              <div class="code">// String.prototype.split functions -&gt; Get -&gt; [[Get]]
var get = [];
var proxied = {};
proxied[Symbol.toPrimitive] = Function();
var p = new Proxy(proxied, { get: function(o, k) { get.push(k); return o[k]; }});
&quot;&quot;.split(p);
return get[0] === Symbol.split &amp;&amp; get[1] === Symbol.toPrimitive &amp;&amp; get.length === 2;</div>}
```
###Date.prototype.toJSON
          
```
function(){
              <div class="code">// Date.prototype.toJSON -&gt; ToPrimitive -&gt; Get -&gt; [[Get]]
// Date.prototype.toJSON -&gt; Invoke -&gt; GetMethod -&gt; GetV -&gt; [[Get]]
var get = [];
var p = new Proxy({toString:Function(),toISOString:Function()}, { get: function(o, k) { get.push(k); return o[k]; }});
Date.prototype.toJSON.call(p);
return get[0] === Symbol.toPrimitive &amp;&amp; get.slice(1) + '' === &quot;valueOf,toString,toISOString&quot;;</div>}
```
###ToPrimitive
          
```
function(){
              <div class="code">// ToPrimitive -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({toString:Function()}, { get: function(o, k) { get.push(k); return o[k]; }});
p + 3;
return get[0] === Symbol.toPrimitive &amp;&amp; get.slice(1) + '' === &quot;valueOf,toString&quot;;</div>}
```
###CreateListFromArrayLike
          
```
function(){
              <div class="code">// CreateListFromArrayLike -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({length:2, 0:0, 1:0}, { get: function(o, k) { get.push(k); return o[k]; }});
Function.prototype.apply({}, p);
return get + '' === &quot;length,0,1&quot;;</div>}
```
###HasBinding
          
```
function(){
              <div class="code">// HasBinding -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({foo:1}, { get: function(o, k) { get.push(k); return o[k]; }});
p[Symbol.unscopables] = p;
with(p) {
  typeof foo;
}
return get[0] === Symbol.unscopables &amp;&amp; get.slice(1) + '' === &quot;foo&quot;;</div>}
```
###CreateDynamicFunction
          
```
function(){
              <div class="code">// CreateDynamicFunction -&gt; GetPrototypeFromConstructor -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy(Function, { get: function(o, k) { get.push(k); return o[k]; }});
new p;
return get + '' === &quot;prototype&quot;;</div>}
```
###ClassDefinitionEvaluation
          
```
function(){
              <div class="code">// ClassDefinitionEvaluation -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy(Function(), { get: function(o, k) { get.push(k); return o[k]; }});
class C extends p {}
return get + '' === &quot;prototype&quot;;</div>}
```
###IteratorComplete, IteratorValue
          
```
function(){
              <div class="code">// IteratorComplete -&gt; Get -&gt; [[Get]]
// IteratorValue -&gt; Get -&gt; [[Get]]
var get = [];
var iterable = {};
iterable[Symbol.iterator] = function() {
  return {
    next: function() {
      return new Proxy({ value: 2, done: false }, { get: function(o, k) { get.push(k); return o[k]; }});
    }
  };
}
var i = 0;
for(var e of iterable) {
  if (++i &gt;= 2) break;
}
return get + '' === &quot;done,value,done,value&quot;;</div>}
```
###ToPropertyDescriptor
          
```
function(){
              <div class="code">// ToPropertyDescriptor -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({
    enumerable: true, configurable: true, value: true,
    writable: true, get: Function(), set: Function()
  }, { get: function(o, k) { get.push(k); return o[k]; }});
try {
  // This will throw, since it will have true for both &quot;get&quot; and &quot;value&quot;,
  // but not before performing a Get on every property.
  Object.defineProperty({}, &quot;foo&quot;, p);
} catch(e) {
  return get + '' === &quot;enumerable,configurable,value,writable,get,set&quot;;
}</div>}
```
###Object.assign
          
```
function(){
              <div class="code">// Object.assign -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({foo:1, bar:2}, { get: function(o, k) { get.push(k); return o[k]; }});
Object.assign({}, p);
return get + '' === &quot;foo,bar&quot;;</div>}
```
###Object.defineProperties
          
```
function(){
              <div class="code">// Object.defineProperties -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({foo:{}, bar:{}}, { get: function(o, k) { get.push(k); return o[k]; }});
Object.defineProperties({}, p);
return get + '' === &quot;foo,bar&quot;;</div>}
```
###Function.prototype.bind
          
```
function(){
              <div class="code">// Function.prototype.bind -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy(Function(), { get: function(o, k) { get.push(k); return o[k]; }});
Function.prototype.bind.call(p);
return get + '' === &quot;length,name&quot;;</div>}
```
###Error.prototype.toString
          
```
function(){
              <div class="code">// Error.prototype.toString -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({}, { get: function(o, k) { get.push(k); return o[k]; }});
Error.prototype.toString.call(p);
return get + '' === &quot;name,message&quot;;</div>}
```
###String.raw
          
```
function(){
              <div class="code">// String.raw -&gt; Get -&gt; [[Get]]
var get = [];
var raw = new Proxy({length: 2, 0: '', 1: ''}, { get: function(o, k) { get.push(k); return o[k]; }});
var p = new Proxy({raw: raw}, { get: function(o, k) { get.push(k); return o[k]; }});
String.raw(p);
return get + '' === &quot;raw,length,0,1&quot;;</div>}
```
###RegExp constructor
          
```
function(){
              <div class="code">// RegExp -&gt; Get -&gt; [[Get]]
var get = [];
var re = { constructor: null };
re[Symbol.match] = true;
var p = new Proxy(re, { get: function(o, k) { get.push(k); return o[k]; }});
RegExp(p);
return get[0] === Symbol.match &amp;&amp; get.slice(1) + '' === &quot;constructor,source,flags&quot;;</div>}
```
###RegExp.prototype.flags
          
```
function(){
              <div class="code">// RegExp.prototype.flags -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({}, { get: function(o, k) { get.push(k); return o[k]; }});
Object.getOwnPropertyDescriptor(RegExp.prototype, 'flags').get.call(p);
return get + '' === &quot;global,ignoreCase,multiline,unicode,sticky&quot;;</div>}
```
###RegExp.prototype.toString
          
```
function(){
              <div class="code">// RegExp.prototype.toString -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({}, { get: function(o, k) { get.push(k); return o[k]; }});
RegExp.prototype.toString.call(p);
return get + '' === &quot;source,flags&quot;;</div>}
```
###Array.from
          
```
function(){
              <div class="code">// Array.from -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({length: 2, 0: '', 1: ''}, { get: function(o, k) { get.push(k); return o[k]; }});
Array.from(p);
return get[0] === Symbol.iterator &amp;&amp; get.slice(1) + '' === &quot;length,0,1&quot;;</div>}
```
###Array.prototype.pop
          
```
function(){
              <div class="code">// Array.prototype.pop -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy([0,1,2,3], { get: function(o, k) { get.push(k); return o[k]; }});
Array.prototype.pop.call(p);
return get + '' === &quot;length,3&quot;;</div>}
```
###Array.prototype.reverse
          
```
function(){
              <div class="code">// Array.prototype.reverse -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy([0,,2,,4,,], { get: function(o, k) { get.push(k); return o[k]; }});
Array.prototype.reverse.call(p);
return get + '' === &quot;length,0,4,2&quot;;</div>}
```
###Array.prototype.shift
          
```
function(){
              <div class="code">// Array.prototype.shift -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy([0,1,2,3], { get: function(o, k) { get.push(k); return o[k]; }});
Array.prototype.shift.call(p);
return get + '' === &quot;length,0,1,2,3&quot;;</div>}
```
###Array.prototype.toString
          
```
function(){
              <div class="code">// Array.prototype.toString -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({ join:Function() }, { get: function(o, k) { get.push(k); return o[k]; }});
Array.prototype.toString.call(p);
return get + '' === &quot;join&quot;;</div>}
```
###JSON.stringify
          
```
function(){
              <div class="code">// JSON.stringify -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({}, { get: function(o, k) { get.push(k); return o[k]; }});
JSON.stringify(p);
return get + '' === &quot;toJSON&quot;;</div>}
```
###Promise resolve functions
          
```
function(){
              <div class="code">// Promise resolve functions -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({}, { get: function(o, k) { get.push(k); return o[k]; }});
new Promise(function(resolve){ resolve(p); });
return get + '' === &quot;then&quot;;</div>}
```
###String.prototype.replace
          
```
function(){
              <div class="code">// String.prototype.replace functions -&gt; Get -&gt; [[Get]]
var get = [];
var proxied = {};
proxied[Symbol.toPrimitive] = Function();
var p = new Proxy(proxied, { get: function(o, k) { get.push(k); return o[k]; }});
&quot;&quot;.replace(p);
return get[0] === Symbol.replace &amp;&amp; get[1] === Symbol.toPrimitive &amp;&amp; get.length === 2;</div>}
```
###String.prototype.split
          
```
function(){
              <div class="code">// String.prototype.split functions -&gt; Get -&gt; [[Get]]
var get = [];
var proxied = {};
proxied[Symbol.toPrimitive] = Function();
var p = new Proxy(proxied, { get: function(o, k) { get.push(k); return o[k]; }});
&quot;&quot;.split(p);
return get[0] === Symbol.split &amp;&amp; get[1] === Symbol.toPrimitive &amp;&amp; get.length === 2;</div>}
```
###Date.prototype.toJSON
          
```
function(){
              <div class="code">// Date.prototype.toJSON -&gt; ToPrimitive -&gt; Get -&gt; [[Get]]
// Date.prototype.toJSON -&gt; Invoke -&gt; GetMethod -&gt; GetV -&gt; [[Get]]
var get = [];
var p = new Proxy({toString:Function(),toISOString:Function()}, { get: function(o, k) { get.push(k); return o[k]; }});
Date.prototype.toJSON.call(p);
return get[0] === Symbol.toPrimitive &amp;&amp; get.slice(1) + '' === &quot;valueOf,toString,toISOString&quot;;</div>}
```
###ToPrimitive
          
```
function(){
              <div class="code">// ToPrimitive -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({toString:Function()}, { get: function(o, k) { get.push(k); return o[k]; }});
p + 3;
return get[0] === Symbol.toPrimitive &amp;&amp; get.slice(1) + '' === &quot;valueOf,toString&quot;;</div>}
```
###CreateListFromArrayLike
          
```
function(){
              <div class="code">// CreateListFromArrayLike -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({length:2, 0:0, 1:0}, { get: function(o, k) { get.push(k); return o[k]; }});
Function.prototype.apply({}, p);
return get + '' === &quot;length,0,1&quot;;</div>}
```
###HasBinding
          
```
function(){
              <div class="code">// HasBinding -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({foo:1}, { get: function(o, k) { get.push(k); return o[k]; }});
p[Symbol.unscopables] = p;
with(p) {
  typeof foo;
}
return get[0] === Symbol.unscopables &amp;&amp; get.slice(1) + '' === &quot;foo&quot;;</div>}
```
###CreateDynamicFunction
          
```
function(){
              <div class="code">// CreateDynamicFunction -&gt; GetPrototypeFromConstructor -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy(Function, { get: function(o, k) { get.push(k); return o[k]; }});
new p;
return get + '' === &quot;prototype&quot;;</div>}
```
###ClassDefinitionEvaluation
          
```
function(){
              <div class="code">// ClassDefinitionEvaluation -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy(Function(), { get: function(o, k) { get.push(k); return o[k]; }});
class C extends p {}
return get + '' === &quot;prototype&quot;;</div>}
```
###IteratorComplete, IteratorValue
          
```
function(){
              <div class="code">// IteratorComplete -&gt; Get -&gt; [[Get]]
// IteratorValue -&gt; Get -&gt; [[Get]]
var get = [];
var iterable = {};
iterable[Symbol.iterator] = function() {
  return {
    next: function() {
      return new Proxy({ value: 2, done: false }, { get: function(o, k) { get.push(k); return o[k]; }});
    }
  };
}
var i = 0;
for(var e of iterable) {
  if (++i &gt;= 2) break;
}
return get + '' === &quot;done,value,done,value&quot;;</div>}
```
###ToPropertyDescriptor
          
```
function(){
              <div class="code">// ToPropertyDescriptor -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({
    enumerable: true, configurable: true, value: true,
    writable: true, get: Function(), set: Function()
  }, { get: function(o, k) { get.push(k); return o[k]; }});
try {
  // This will throw, since it will have true for both &quot;get&quot; and &quot;value&quot;,
  // but not before performing a Get on every property.
  Object.defineProperty({}, &quot;foo&quot;, p);
} catch(e) {
  return get + '' === &quot;enumerable,configurable,value,writable,get,set&quot;;
}</div>}
```
###Object.assign
          
```
function(){
              <div class="code">// Object.assign -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({foo:1, bar:2}, { get: function(o, k) { get.push(k); return o[k]; }});
Object.assign({}, p);
return get + '' === &quot;foo,bar&quot;;</div>}
```
###Object.defineProperties
          
```
function(){
              <div class="code">// Object.defineProperties -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({foo:{}, bar:{}}, { get: function(o, k) { get.push(k); return o[k]; }});
Object.defineProperties({}, p);
return get + '' === &quot;foo,bar&quot;;</div>}
```
###Function.prototype.bind
          
```
function(){
              <div class="code">// Function.prototype.bind -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy(Function(), { get: function(o, k) { get.push(k); return o[k]; }});
Function.prototype.bind.call(p);
return get + '' === &quot;length,name&quot;;</div>}
```
###Error.prototype.toString
          
```
function(){
              <div class="code">// Error.prototype.toString -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({}, { get: function(o, k) { get.push(k); return o[k]; }});
Error.prototype.toString.call(p);
return get + '' === &quot;name,message&quot;;</div>}
```
###String.raw
          
```
function(){
              <div class="code">// String.raw -&gt; Get -&gt; [[Get]]
var get = [];
var raw = new Proxy({length: 2, 0: '', 1: ''}, { get: function(o, k) { get.push(k); return o[k]; }});
var p = new Proxy({raw: raw}, { get: function(o, k) { get.push(k); return o[k]; }});
String.raw(p);
return get + '' === &quot;raw,length,0,1&quot;;</div>}
```
###RegExp constructor
          
```
function(){
              <div class="code">// RegExp -&gt; Get -&gt; [[Get]]
var get = [];
var re = { constructor: null };
re[Symbol.match] = true;
var p = new Proxy(re, { get: function(o, k) { get.push(k); return o[k]; }});
RegExp(p);
return get[0] === Symbol.match &amp;&amp; get.slice(1) + '' === &quot;constructor,source,flags&quot;;</div>}
```
###RegExp.prototype.flags
          
```
function(){
              <div class="code">// RegExp.prototype.flags -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({}, { get: function(o, k) { get.push(k); return o[k]; }});
Object.getOwnPropertyDescriptor(RegExp.prototype, 'flags').get.call(p);
return get + '' === &quot;global,ignoreCase,multiline,unicode,sticky&quot;;</div>}
```
###RegExp.prototype.toString
          
```
function(){
              <div class="code">// RegExp.prototype.toString -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({}, { get: function(o, k) { get.push(k); return o[k]; }});
RegExp.prototype.toString.call(p);
return get + '' === &quot;source,flags&quot;;</div>}
```
###Array.from
          
```
function(){
              <div class="code">// Array.from -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({length: 2, 0: '', 1: ''}, { get: function(o, k) { get.push(k); return o[k]; }});
Array.from(p);
return get[0] === Symbol.iterator &amp;&amp; get.slice(1) + '' === &quot;length,0,1&quot;;</div>}
```
###Array.prototype.pop
          
```
function(){
              <div class="code">// Array.prototype.pop -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy([0,1,2,3], { get: function(o, k) { get.push(k); return o[k]; }});
Array.prototype.pop.call(p);
return get + '' === &quot;length,3&quot;;</div>}
```
###Array.prototype.reverse
          
```
function(){
              <div class="code">// Array.prototype.reverse -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy([0,,2,,4,,], { get: function(o, k) { get.push(k); return o[k]; }});
Array.prototype.reverse.call(p);
return get + '' === &quot;length,0,4,2&quot;;</div>}
```
###Array.prototype.shift
          
```
function(){
              <div class="code">// Array.prototype.shift -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy([0,1,2,3], { get: function(o, k) { get.push(k); return o[k]; }});
Array.prototype.shift.call(p);
return get + '' === &quot;length,0,1,2,3&quot;;</div>}
```
###Array.prototype.toString
          
```
function(){
              <div class="code">// Array.prototype.toString -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({ join:Function() }, { get: function(o, k) { get.push(k); return o[k]; }});
Array.prototype.toString.call(p);
return get + '' === &quot;join&quot;;</div>}
```
###JSON.stringify
          
```
function(){
              <div class="code">// JSON.stringify -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({}, { get: function(o, k) { get.push(k); return o[k]; }});
JSON.stringify(p);
return get + '' === &quot;toJSON&quot;;</div>}
```
###Promise resolve functions
          
```
function(){
              <div class="code">// Promise resolve functions -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({}, { get: function(o, k) { get.push(k); return o[k]; }});
new Promise(function(resolve){ resolve(p); });
return get + '' === &quot;then&quot;;</div>}
```
###String.prototype.replace
          
```
function(){
              <div class="code">// String.prototype.replace functions -&gt; Get -&gt; [[Get]]
var get = [];
var proxied = {};
proxied[Symbol.toPrimitive] = Function();
var p = new Proxy(proxied, { get: function(o, k) { get.push(k); return o[k]; }});
&quot;&quot;.replace(p);
return get[0] === Symbol.replace &amp;&amp; get[1] === Symbol.toPrimitive &amp;&amp; get.length === 2;</div>}
```
###String.prototype.split
          
```
function(){
              <div class="code">// String.prototype.split functions -&gt; Get -&gt; [[Get]]
var get = [];
var proxied = {};
proxied[Symbol.toPrimitive] = Function();
var p = new Proxy(proxied, { get: function(o, k) { get.push(k); return o[k]; }});
&quot;&quot;.split(p);
return get[0] === Symbol.split &amp;&amp; get[1] === Symbol.toPrimitive &amp;&amp; get.length === 2;</div>}
```
###Date.prototype.toJSON
          
```
function(){
              <div class="code">// Date.prototype.toJSON -&gt; ToPrimitive -&gt; Get -&gt; [[Get]]
// Date.prototype.toJSON -&gt; Invoke -&gt; GetMethod -&gt; GetV -&gt; [[Get]]
var get = [];
var p = new Proxy({toString:Function(),toISOString:Function()}, { get: function(o, k) { get.push(k); return o[k]; }});
Date.prototype.toJSON.call(p);
return get[0] === Symbol.toPrimitive &amp;&amp; get.slice(1) + '' === &quot;valueOf,toString,toISOString&quot;;</div>}
```
###ToPrimitive
          
```
function(){
              <div class="code">// ToPrimitive -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({toString:Function()}, { get: function(o, k) { get.push(k); return o[k]; }});
p + 3;
return get[0] === Symbol.toPrimitive &amp;&amp; get.slice(1) + '' === &quot;valueOf,toString&quot;;</div>}
```
###CreateListFromArrayLike
          
```
function(){
              <div class="code">// CreateListFromArrayLike -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({length:2, 0:0, 1:0}, { get: function(o, k) { get.push(k); return o[k]; }});
Function.prototype.apply({}, p);
return get + '' === &quot;length,0,1&quot;;</div>}
```
###HasBinding
          
```
function(){
              <div class="code">// HasBinding -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({foo:1}, { get: function(o, k) { get.push(k); return o[k]; }});
p[Symbol.unscopables] = p;
with(p) {
  typeof foo;
}
return get[0] === Symbol.unscopables &amp;&amp; get.slice(1) + '' === &quot;foo&quot;;</div>}
```
###CreateDynamicFunction
          
```
function(){
              <div class="code">// CreateDynamicFunction -&gt; GetPrototypeFromConstructor -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy(Function, { get: function(o, k) { get.push(k); return o[k]; }});
new p;
return get + '' === &quot;prototype&quot;;</div>}
```
###ClassDefinitionEvaluation
          
```
function(){
              <div class="code">// ClassDefinitionEvaluation -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy(Function(), { get: function(o, k) { get.push(k); return o[k]; }});
class C extends p {}
return get + '' === &quot;prototype&quot;;</div>}
```
###IteratorComplete, IteratorValue
          
```
function(){
              <div class="code">// IteratorComplete -&gt; Get -&gt; [[Get]]
// IteratorValue -&gt; Get -&gt; [[Get]]
var get = [];
var iterable = {};
iterable[Symbol.iterator] = function() {
  return {
    next: function() {
      return new Proxy({ value: 2, done: false }, { get: function(o, k) { get.push(k); return o[k]; }});
    }
  };
}
var i = 0;
for(var e of iterable) {
  if (++i &gt;= 2) break;
}
return get + '' === &quot;done,value,done,value&quot;;</div>}
```
###ToPropertyDescriptor
          
```
function(){
              <div class="code">// ToPropertyDescriptor -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({
    enumerable: true, configurable: true, value: true,
    writable: true, get: Function(), set: Function()
  }, { get: function(o, k) { get.push(k); return o[k]; }});
try {
  // This will throw, since it will have true for both &quot;get&quot; and &quot;value&quot;,
  // but not before performing a Get on every property.
  Object.defineProperty({}, &quot;foo&quot;, p);
} catch(e) {
  return get + '' === &quot;enumerable,configurable,value,writable,get,set&quot;;
}</div>}
```
###Object.assign
          
```
function(){
              <div class="code">// Object.assign -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({foo:1, bar:2}, { get: function(o, k) { get.push(k); return o[k]; }});
Object.assign({}, p);
return get + '' === &quot;foo,bar&quot;;</div>}
```
###Object.defineProperties
          
```
function(){
              <div class="code">// Object.defineProperties -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({foo:{}, bar:{}}, { get: function(o, k) { get.push(k); return o[k]; }});
Object.defineProperties({}, p);
return get + '' === &quot;foo,bar&quot;;</div>}
```
###Function.prototype.bind
          
```
function(){
              <div class="code">// Function.prototype.bind -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy(Function(), { get: function(o, k) { get.push(k); return o[k]; }});
Function.prototype.bind.call(p);
return get + '' === &quot;length,name&quot;;</div>}
```
###Error.prototype.toString
          
```
function(){
              <div class="code">// Error.prototype.toString -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({}, { get: function(o, k) { get.push(k); return o[k]; }});
Error.prototype.toString.call(p);
return get + '' === &quot;name,message&quot;;</div>}
```
###String.raw
          
```
function(){
              <div class="code">// String.raw -&gt; Get -&gt; [[Get]]
var get = [];
var raw = new Proxy({length: 2, 0: '', 1: ''}, { get: function(o, k) { get.push(k); return o[k]; }});
var p = new Proxy({raw: raw}, { get: function(o, k) { get.push(k); return o[k]; }});
String.raw(p);
return get + '' === &quot;raw,length,0,1&quot;;</div>}
```
###RegExp constructor
          
```
function(){
              <div class="code">// RegExp -&gt; Get -&gt; [[Get]]
var get = [];
var re = { constructor: null };
re[Symbol.match] = true;
var p = new Proxy(re, { get: function(o, k) { get.push(k); return o[k]; }});
RegExp(p);
return get[0] === Symbol.match &amp;&amp; get.slice(1) + '' === &quot;constructor,source,flags&quot;;</div>}
```
###RegExp.prototype.flags
          
```
function(){
              <div class="code">// RegExp.prototype.flags -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({}, { get: function(o, k) { get.push(k); return o[k]; }});
Object.getOwnPropertyDescriptor(RegExp.prototype, 'flags').get.call(p);
return get + '' === &quot;global,ignoreCase,multiline,unicode,sticky&quot;;</div>}
```
###RegExp.prototype.toString
          
```
function(){
              <div class="code">// RegExp.prototype.toString -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({}, { get: function(o, k) { get.push(k); return o[k]; }});
RegExp.prototype.toString.call(p);
return get + '' === &quot;source,flags&quot;;</div>}
```
###Array.from
          
```
function(){
              <div class="code">// Array.from -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({length: 2, 0: '', 1: ''}, { get: function(o, k) { get.push(k); return o[k]; }});
Array.from(p);
return get[0] === Symbol.iterator &amp;&amp; get.slice(1) + '' === &quot;length,0,1&quot;;</div>}
```
###Array.prototype.pop
          
```
function(){
              <div class="code">// Array.prototype.pop -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy([0,1,2,3], { get: function(o, k) { get.push(k); return o[k]; }});
Array.prototype.pop.call(p);
return get + '' === &quot;length,3&quot;;</div>}
```
###Array.prototype.reverse
          
```
function(){
              <div class="code">// Array.prototype.reverse -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy([0,,2,,4,,], { get: function(o, k) { get.push(k); return o[k]; }});
Array.prototype.reverse.call(p);
return get + '' === &quot;length,0,4,2&quot;;</div>}
```
###Array.prototype.shift
          
```
function(){
              <div class="code">// Array.prototype.shift -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy([0,1,2,3], { get: function(o, k) { get.push(k); return o[k]; }});
Array.prototype.shift.call(p);
return get + '' === &quot;length,0,1,2,3&quot;;</div>}
```
###Array.prototype.toString
          
```
function(){
              <div class="code">// Array.prototype.toString -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({ join:Function() }, { get: function(o, k) { get.push(k); return o[k]; }});
Array.prototype.toString.call(p);
return get + '' === &quot;join&quot;;</div>}
```
###JSON.stringify
          
```
function(){
              <div class="code">// JSON.stringify -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({}, { get: function(o, k) { get.push(k); return o[k]; }});
JSON.stringify(p);
return get + '' === &quot;toJSON&quot;;</div>}
```
###Promise resolve functions
          
```
function(){
              <div class="code">// Promise resolve functions -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({}, { get: function(o, k) { get.push(k); return o[k]; }});
new Promise(function(resolve){ resolve(p); });
return get + '' === &quot;then&quot;;</div>}
```
###String.prototype.replace
          
```
function(){
              <div class="code">// String.prototype.replace functions -&gt; Get -&gt; [[Get]]
var get = [];
var proxied = {};
proxied[Symbol.toPrimitive] = Function();
var p = new Proxy(proxied, { get: function(o, k) { get.push(k); return o[k]; }});
&quot;&quot;.replace(p);
return get[0] === Symbol.replace &amp;&amp; get[1] === Symbol.toPrimitive &amp;&amp; get.length === 2;</div>}
```
###String.prototype.split
          
```
function(){
              <div class="code">// String.prototype.split functions -&gt; Get -&gt; [[Get]]
var get = [];
var proxied = {};
proxied[Symbol.toPrimitive] = Function();
var p = new Proxy(proxied, { get: function(o, k) { get.push(k); return o[k]; }});
&quot;&quot;.split(p);
return get[0] === Symbol.split &amp;&amp; get[1] === Symbol.toPrimitive &amp;&amp; get.length === 2;</div>}
```
###Date.prototype.toJSON
          
```
function(){
              <div class="code">// Date.prototype.toJSON -&gt; ToPrimitive -&gt; Get -&gt; [[Get]]
// Date.prototype.toJSON -&gt; Invoke -&gt; GetMethod -&gt; GetV -&gt; [[Get]]
var get = [];
var p = new Proxy({toString:Function(),toISOString:Function()}, { get: function(o, k) { get.push(k); return o[k]; }});
Date.prototype.toJSON.call(p);
return get[0] === Symbol.toPrimitive &amp;&amp; get.slice(1) + '' === &quot;valueOf,toString,toISOString&quot;;</div>}
```
###ToPrimitive
          
```
function(){
              <div class="code">// ToPrimitive -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({toString:Function()}, { get: function(o, k) { get.push(k); return o[k]; }});
p + 3;
return get[0] === Symbol.toPrimitive &amp;&amp; get.slice(1) + '' === &quot;valueOf,toString&quot;;</div>}
```
###CreateListFromArrayLike
          
```
function(){
              <div class="code">// CreateListFromArrayLike -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({length:2, 0:0, 1:0}, { get: function(o, k) { get.push(k); return o[k]; }});
Function.prototype.apply({}, p);
return get + '' === &quot;length,0,1&quot;;</div>}
```
###HasBinding
          
```
function(){
              <div class="code">// HasBinding -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({foo:1}, { get: function(o, k) { get.push(k); return o[k]; }});
p[Symbol.unscopables] = p;
with(p) {
  typeof foo;
}
return get[0] === Symbol.unscopables &amp;&amp; get.slice(1) + '' === &quot;foo&quot;;</div>}
```
###CreateDynamicFunction
          
```
function(){
              <div class="code">// CreateDynamicFunction -&gt; GetPrototypeFromConstructor -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy(Function, { get: function(o, k) { get.push(k); return o[k]; }});
new p;
return get + '' === &quot;prototype&quot;;</div>}
```
###ClassDefinitionEvaluation
          
```
function(){
              <div class="code">// ClassDefinitionEvaluation -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy(Function(), { get: function(o, k) { get.push(k); return o[k]; }});
class C extends p {}
return get + '' === &quot;prototype&quot;;</div>}
```
###IteratorComplete, IteratorValue
          
```
function(){
              <div class="code">// IteratorComplete -&gt; Get -&gt; [[Get]]
// IteratorValue -&gt; Get -&gt; [[Get]]
var get = [];
var iterable = {};
iterable[Symbol.iterator] = function() {
  return {
    next: function() {
      return new Proxy({ value: 2, done: false }, { get: function(o, k) { get.push(k); return o[k]; }});
    }
  };
}
var i = 0;
for(var e of iterable) {
  if (++i &gt;= 2) break;
}
return get + '' === &quot;done,value,done,value&quot;;</div>}
```
###ToPropertyDescriptor
          
```
function(){
              <div class="code">// ToPropertyDescriptor -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({
    enumerable: true, configurable: true, value: true,
    writable: true, get: Function(), set: Function()
  }, { get: function(o, k) { get.push(k); return o[k]; }});
try {
  // This will throw, since it will have true for both &quot;get&quot; and &quot;value&quot;,
  // but not before performing a Get on every property.
  Object.defineProperty({}, &quot;foo&quot;, p);
} catch(e) {
  return get + '' === &quot;enumerable,configurable,value,writable,get,set&quot;;
}</div>}
```
###Object.assign
          
```
function(){
              <div class="code">// Object.assign -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({foo:1, bar:2}, { get: function(o, k) { get.push(k); return o[k]; }});
Object.assign({}, p);
return get + '' === &quot;foo,bar&quot;;</div>}
```
###Object.defineProperties
          
```
function(){
              <div class="code">// Object.defineProperties -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({foo:{}, bar:{}}, { get: function(o, k) { get.push(k); return o[k]; }});
Object.defineProperties({}, p);
return get + '' === &quot;foo,bar&quot;;</div>}
```
###Function.prototype.bind
          
```
function(){
              <div class="code">// Function.prototype.bind -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy(Function(), { get: function(o, k) { get.push(k); return o[k]; }});
Function.prototype.bind.call(p);
return get + '' === &quot;length,name&quot;;</div>}
```
###Error.prototype.toString
          
```
function(){
              <div class="code">// Error.prototype.toString -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({}, { get: function(o, k) { get.push(k); return o[k]; }});
Error.prototype.toString.call(p);
return get + '' === &quot;name,message&quot;;</div>}
```
###String.raw
          
```
function(){
              <div class="code">// String.raw -&gt; Get -&gt; [[Get]]
var get = [];
var raw = new Proxy({length: 2, 0: '', 1: ''}, { get: function(o, k) { get.push(k); return o[k]; }});
var p = new Proxy({raw: raw}, { get: function(o, k) { get.push(k); return o[k]; }});
String.raw(p);
return get + '' === &quot;raw,length,0,1&quot;;</div>}
```
###RegExp constructor
          
```
function(){
              <div class="code">// RegExp -&gt; Get -&gt; [[Get]]
var get = [];
var re = { constructor: null };
re[Symbol.match] = true;
var p = new Proxy(re, { get: function(o, k) { get.push(k); return o[k]; }});
RegExp(p);
return get[0] === Symbol.match &amp;&amp; get.slice(1) + '' === &quot;constructor,source,flags&quot;;</div>}
```
###RegExp.prototype.flags
          
```
function(){
              <div class="code">// RegExp.prototype.flags -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({}, { get: function(o, k) { get.push(k); return o[k]; }});
Object.getOwnPropertyDescriptor(RegExp.prototype, 'flags').get.call(p);
return get + '' === &quot;global,ignoreCase,multiline,unicode,sticky&quot;;</div>}
```
###RegExp.prototype.toString
          
```
function(){
              <div class="code">// RegExp.prototype.toString -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({}, { get: function(o, k) { get.push(k); return o[k]; }});
RegExp.prototype.toString.call(p);
return get + '' === &quot;source,flags&quot;;</div>}
```
###Array.from
          
```
function(){
              <div class="code">// Array.from -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({length: 2, 0: '', 1: ''}, { get: function(o, k) { get.push(k); return o[k]; }});
Array.from(p);
return get[0] === Symbol.iterator &amp;&amp; get.slice(1) + '' === &quot;length,0,1&quot;;</div>}
```
###Array.prototype.pop
          
```
function(){
              <div class="code">// Array.prototype.pop -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy([0,1,2,3], { get: function(o, k) { get.push(k); return o[k]; }});
Array.prototype.pop.call(p);
return get + '' === &quot;length,3&quot;;</div>}
```
###Array.prototype.reverse
          
```
function(){
              <div class="code">// Array.prototype.reverse -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy([0,,2,,4,,], { get: function(o, k) { get.push(k); return o[k]; }});
Array.prototype.reverse.call(p);
return get + '' === &quot;length,0,4,2&quot;;</div>}
```
###Array.prototype.shift
          
```
function(){
              <div class="code">// Array.prototype.shift -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy([0,1,2,3], { get: function(o, k) { get.push(k); return o[k]; }});
Array.prototype.shift.call(p);
return get + '' === &quot;length,0,1,2,3&quot;;</div>}
```
###Array.prototype.toString
          
```
function(){
              <div class="code">// Array.prototype.toString -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({ join:Function() }, { get: function(o, k) { get.push(k); return o[k]; }});
Array.prototype.toString.call(p);
return get + '' === &quot;join&quot;;</div>}
```
###JSON.stringify
          
```
function(){
              <div class="code">// JSON.stringify -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({}, { get: function(o, k) { get.push(k); return o[k]; }});
JSON.stringify(p);
return get + '' === &quot;toJSON&quot;;</div>}
```
###Promise resolve functions
          
```
function(){
              <div class="code">// Promise resolve functions -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({}, { get: function(o, k) { get.push(k); return o[k]; }});
new Promise(function(resolve){ resolve(p); });
return get + '' === &quot;then&quot;;</div>}
```
###String.prototype.replace
          
```
function(){
              <div class="code">// String.prototype.replace functions -&gt; Get -&gt; [[Get]]
var get = [];
var proxied = {};
proxied[Symbol.toPrimitive] = Function();
var p = new Proxy(proxied, { get: function(o, k) { get.push(k); return o[k]; }});
&quot;&quot;.replace(p);
return get[0] === Symbol.replace &amp;&amp; get[1] === Symbol.toPrimitive &amp;&amp; get.length === 2;</div>}
```
###String.prototype.split
          
```
function(){
              <div class="code">// String.prototype.split functions -&gt; Get -&gt; [[Get]]
var get = [];
var proxied = {};
proxied[Symbol.toPrimitive] = Function();
var p = new Proxy(proxied, { get: function(o, k) { get.push(k); return o[k]; }});
&quot;&quot;.split(p);
return get[0] === Symbol.split &amp;&amp; get[1] === Symbol.toPrimitive &amp;&amp; get.length === 2;</div>}
```
###Date.prototype.toJSON
          
```
function(){
              <div class="code">// Date.prototype.toJSON -&gt; ToPrimitive -&gt; Get -&gt; [[Get]]
// Date.prototype.toJSON -&gt; Invoke -&gt; GetMethod -&gt; GetV -&gt; [[Get]]
var get = [];
var p = new Proxy({toString:Function(),toISOString:Function()}, { get: function(o, k) { get.push(k); return o[k]; }});
Date.prototype.toJSON.call(p);
return get[0] === Symbol.toPrimitive &amp;&amp; get.slice(1) + '' === &quot;valueOf,toString,toISOString&quot;;</div>}
```
###ToPrimitive
          
```
function(){
              <div class="code">// ToPrimitive -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({toString:Function()}, { get: function(o, k) { get.push(k); return o[k]; }});
p + 3;
return get[0] === Symbol.toPrimitive &amp;&amp; get.slice(1) + '' === &quot;valueOf,toString&quot;;</div>}
```
###CreateListFromArrayLike
          
```
function(){
              <div class="code">// CreateListFromArrayLike -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({length:2, 0:0, 1:0}, { get: function(o, k) { get.push(k); return o[k]; }});
Function.prototype.apply({}, p);
return get + '' === &quot;length,0,1&quot;;</div>}
```
###HasBinding
          
```
function(){
              <div class="code">// HasBinding -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({foo:1}, { get: function(o, k) { get.push(k); return o[k]; }});
p[Symbol.unscopables] = p;
with(p) {
  typeof foo;
}
return get[0] === Symbol.unscopables &amp;&amp; get.slice(1) + '' === &quot;foo&quot;;</div>}
```
###CreateDynamicFunction
          
```
function(){
              <div class="code">// CreateDynamicFunction -&gt; GetPrototypeFromConstructor -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy(Function, { get: function(o, k) { get.push(k); return o[k]; }});
new p;
return get + '' === &quot;prototype&quot;;</div>}
```
###ClassDefinitionEvaluation
          
```
function(){
              <div class="code">// ClassDefinitionEvaluation -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy(Function(), { get: function(o, k) { get.push(k); return o[k]; }});
class C extends p {}
return get + '' === &quot;prototype&quot;;</div>}
```
###IteratorComplete, IteratorValue
          
```
function(){
              <div class="code">// IteratorComplete -&gt; Get -&gt; [[Get]]
// IteratorValue -&gt; Get -&gt; [[Get]]
var get = [];
var iterable = {};
iterable[Symbol.iterator] = function() {
  return {
    next: function() {
      return new Proxy({ value: 2, done: false }, { get: function(o, k) { get.push(k); return o[k]; }});
    }
  };
}
var i = 0;
for(var e of iterable) {
  if (++i &gt;= 2) break;
}
return get + '' === &quot;done,value,done,value&quot;;</div>}
```
###ToPropertyDescriptor
          
```
function(){
              <div class="code">// ToPropertyDescriptor -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({
    enumerable: true, configurable: true, value: true,
    writable: true, get: Function(), set: Function()
  }, { get: function(o, k) { get.push(k); return o[k]; }});
try {
  // This will throw, since it will have true for both &quot;get&quot; and &quot;value&quot;,
  // but not before performing a Get on every property.
  Object.defineProperty({}, &quot;foo&quot;, p);
} catch(e) {
  return get + '' === &quot;enumerable,configurable,value,writable,get,set&quot;;
}</div>}
```
###Object.assign
          
```
function(){
              <div class="code">// Object.assign -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({foo:1, bar:2}, { get: function(o, k) { get.push(k); return o[k]; }});
Object.assign({}, p);
return get + '' === &quot;foo,bar&quot;;</div>}
```
###Object.defineProperties
          
```
function(){
              <div class="code">// Object.defineProperties -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({foo:{}, bar:{}}, { get: function(o, k) { get.push(k); return o[k]; }});
Object.defineProperties({}, p);
return get + '' === &quot;foo,bar&quot;;</div>}
```
###Function.prototype.bind
          
```
function(){
              <div class="code">// Function.prototype.bind -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy(Function(), { get: function(o, k) { get.push(k); return o[k]; }});
Function.prototype.bind.call(p);
return get + '' === &quot;length,name&quot;;</div>}
```
###Error.prototype.toString
          
```
function(){
              <div class="code">// Error.prototype.toString -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({}, { get: function(o, k) { get.push(k); return o[k]; }});
Error.prototype.toString.call(p);
return get + '' === &quot;name,message&quot;;</div>}
```
###String.raw
          
```
function(){
              <div class="code">// String.raw -&gt; Get -&gt; [[Get]]
var get = [];
var raw = new Proxy({length: 2, 0: '', 1: ''}, { get: function(o, k) { get.push(k); return o[k]; }});
var p = new Proxy({raw: raw}, { get: function(o, k) { get.push(k); return o[k]; }});
String.raw(p);
return get + '' === &quot;raw,length,0,1&quot;;</div>}
```
###RegExp constructor
          
```
function(){
              <div class="code">// RegExp -&gt; Get -&gt; [[Get]]
var get = [];
var re = { constructor: null };
re[Symbol.match] = true;
var p = new Proxy(re, { get: function(o, k) { get.push(k); return o[k]; }});
RegExp(p);
return get[0] === Symbol.match &amp;&amp; get.slice(1) + '' === &quot;constructor,source,flags&quot;;</div>}
```
###RegExp.prototype.flags
          
```
function(){
              <div class="code">// RegExp.prototype.flags -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({}, { get: function(o, k) { get.push(k); return o[k]; }});
Object.getOwnPropertyDescriptor(RegExp.prototype, 'flags').get.call(p);
return get + '' === &quot;global,ignoreCase,multiline,unicode,sticky&quot;;</div>}
```
###RegExp.prototype.toString
          
```
function(){
              <div class="code">// RegExp.prototype.toString -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({}, { get: function(o, k) { get.push(k); return o[k]; }});
RegExp.prototype.toString.call(p);
return get + '' === &quot;source,flags&quot;;</div>}
```
###Array.from
          
```
function(){
              <div class="code">// Array.from -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({length: 2, 0: '', 1: ''}, { get: function(o, k) { get.push(k); return o[k]; }});
Array.from(p);
return get[0] === Symbol.iterator &amp;&amp; get.slice(1) + '' === &quot;length,0,1&quot;;</div>}
```
###Array.prototype.pop
          
```
function(){
              <div class="code">// Array.prototype.pop -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy([0,1,2,3], { get: function(o, k) { get.push(k); return o[k]; }});
Array.prototype.pop.call(p);
return get + '' === &quot;length,3&quot;;</div>}
```
###Array.prototype.reverse
          
```
function(){
              <div class="code">// Array.prototype.reverse -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy([0,,2,,4,,], { get: function(o, k) { get.push(k); return o[k]; }});
Array.prototype.reverse.call(p);
return get + '' === &quot;length,0,4,2&quot;;</div>}
```
###Array.prototype.shift
          
```
function(){
              <div class="code">// Array.prototype.shift -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy([0,1,2,3], { get: function(o, k) { get.push(k); return o[k]; }});
Array.prototype.shift.call(p);
return get + '' === &quot;length,0,1,2,3&quot;;</div>}
```
###Array.prototype.toString
          
```
function(){
              <div class="code">// Array.prototype.toString -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({ join:Function() }, { get: function(o, k) { get.push(k); return o[k]; }});
Array.prototype.toString.call(p);
return get + '' === &quot;join&quot;;</div>}
```
###JSON.stringify
          
```
function(){
              <div class="code">// JSON.stringify -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({}, { get: function(o, k) { get.push(k); return o[k]; }});
JSON.stringify(p);
return get + '' === &quot;toJSON&quot;;</div>}
```
###Promise resolve functions
          
```
function(){
              <div class="code">// Promise resolve functions -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({}, { get: function(o, k) { get.push(k); return o[k]; }});
new Promise(function(resolve){ resolve(p); });
return get + '' === &quot;then&quot;;</div>}
```
###String.prototype.replace
          
```
function(){
              <div class="code">// String.prototype.replace functions -&gt; Get -&gt; [[Get]]
var get = [];
var proxied = {};
proxied[Symbol.toPrimitive] = Function();
var p = new Proxy(proxied, { get: function(o, k) { get.push(k); return o[k]; }});
&quot;&quot;.replace(p);
return get[0] === Symbol.replace &amp;&amp; get[1] === Symbol.toPrimitive &amp;&amp; get.length === 2;</div>}
```
###String.prototype.split
          
```
function(){
              <div class="code">// String.prototype.split functions -&gt; Get -&gt; [[Get]]
var get = [];
var proxied = {};
proxied[Symbol.toPrimitive] = Function();
var p = new Proxy(proxied, { get: function(o, k) { get.push(k); return o[k]; }});
&quot;&quot;.split(p);
return get[0] === Symbol.split &amp;&amp; get[1] === Symbol.toPrimitive &amp;&amp; get.length === 2;</div>}
```
###Date.prototype.toJSON
          
```
function(){
              <div class="code">// Date.prototype.toJSON -&gt; ToPrimitive -&gt; Get -&gt; [[Get]]
// Date.prototype.toJSON -&gt; Invoke -&gt; GetMethod -&gt; GetV -&gt; [[Get]]
var get = [];
var p = new Proxy({toString:Function(),toISOString:Function()}, { get: function(o, k) { get.push(k); return o[k]; }});
Date.prototype.toJSON.call(p);
return get[0] === Symbol.toPrimitive &amp;&amp; get.slice(1) + '' === &quot;valueOf,toString,toISOString&quot;;</div>}
```
###ToPrimitive
          
```
function(){
              <div class="code">// ToPrimitive -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({toString:Function()}, { get: function(o, k) { get.push(k); return o[k]; }});
p + 3;
return get[0] === Symbol.toPrimitive &amp;&amp; get.slice(1) + '' === &quot;valueOf,toString&quot;;</div>}
```
###CreateListFromArrayLike
          
```
function(){
              <div class="code">// CreateListFromArrayLike -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({length:2, 0:0, 1:0}, { get: function(o, k) { get.push(k); return o[k]; }});
Function.prototype.apply({}, p);
return get + '' === &quot;length,0,1&quot;;</div>}
```
###HasBinding
          
```
function(){
              <div class="code">// HasBinding -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({foo:1}, { get: function(o, k) { get.push(k); return o[k]; }});
p[Symbol.unscopables] = p;
with(p) {
  typeof foo;
}
return get[0] === Symbol.unscopables &amp;&amp; get.slice(1) + '' === &quot;foo&quot;;</div>}
```
###CreateDynamicFunction
          
```
function(){
              <div class="code">// CreateDynamicFunction -&gt; GetPrototypeFromConstructor -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy(Function, { get: function(o, k) { get.push(k); return o[k]; }});
new p;
return get + '' === &quot;prototype&quot;;</div>}
```
###ClassDefinitionEvaluation
          
```
function(){
              <div class="code">// ClassDefinitionEvaluation -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy(Function(), { get: function(o, k) { get.push(k); return o[k]; }});
class C extends p {}
return get + '' === &quot;prototype&quot;;</div>}
```
###IteratorComplete, IteratorValue
          
```
function(){
              <div class="code">// IteratorComplete -&gt; Get -&gt; [[Get]]
// IteratorValue -&gt; Get -&gt; [[Get]]
var get = [];
var iterable = {};
iterable[Symbol.iterator] = function() {
  return {
    next: function() {
      return new Proxy({ value: 2, done: false }, { get: function(o, k) { get.push(k); return o[k]; }});
    }
  };
}
var i = 0;
for(var e of iterable) {
  if (++i &gt;= 2) break;
}
return get + '' === &quot;done,value,done,value&quot;;</div>}
```
###ToPropertyDescriptor
          
```
function(){
              <div class="code">// ToPropertyDescriptor -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({
    enumerable: true, configurable: true, value: true,
    writable: true, get: Function(), set: Function()
  }, { get: function(o, k) { get.push(k); return o[k]; }});
try {
  // This will throw, since it will have true for both &quot;get&quot; and &quot;value&quot;,
  // but not before performing a Get on every property.
  Object.defineProperty({}, &quot;foo&quot;, p);
} catch(e) {
  return get + '' === &quot;enumerable,configurable,value,writable,get,set&quot;;
}</div>}
```
###Object.assign
          
```
function(){
              <div class="code">// Object.assign -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({foo:1, bar:2}, { get: function(o, k) { get.push(k); return o[k]; }});
Object.assign({}, p);
return get + '' === &quot;foo,bar&quot;;</div>}
```
###Object.defineProperties
          
```
function(){
              <div class="code">// Object.defineProperties -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({foo:{}, bar:{}}, { get: function(o, k) { get.push(k); return o[k]; }});
Object.defineProperties({}, p);
return get + '' === &quot;foo,bar&quot;;</div>}
```
###Function.prototype.bind
          
```
function(){
              <div class="code">// Function.prototype.bind -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy(Function(), { get: function(o, k) { get.push(k); return o[k]; }});
Function.prototype.bind.call(p);
return get + '' === &quot;length,name&quot;;</div>}
```
###Error.prototype.toString
          
```
function(){
              <div class="code">// Error.prototype.toString -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({}, { get: function(o, k) { get.push(k); return o[k]; }});
Error.prototype.toString.call(p);
return get + '' === &quot;name,message&quot;;</div>}
```
###String.raw
          
```
function(){
              <div class="code">// String.raw -&gt; Get -&gt; [[Get]]
var get = [];
var raw = new Proxy({length: 2, 0: '', 1: ''}, { get: function(o, k) { get.push(k); return o[k]; }});
var p = new Proxy({raw: raw}, { get: function(o, k) { get.push(k); return o[k]; }});
String.raw(p);
return get + '' === &quot;raw,length,0,1&quot;;</div>}
```
###RegExp constructor
          
```
function(){
              <div class="code">// RegExp -&gt; Get -&gt; [[Get]]
var get = [];
var re = { constructor: null };
re[Symbol.match] = true;
var p = new Proxy(re, { get: function(o, k) { get.push(k); return o[k]; }});
RegExp(p);
return get[0] === Symbol.match &amp;&amp; get.slice(1) + '' === &quot;constructor,source,flags&quot;;</div>}
```
###RegExp.prototype.flags
          
```
function(){
              <div class="code">// RegExp.prototype.flags -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({}, { get: function(o, k) { get.push(k); return o[k]; }});
Object.getOwnPropertyDescriptor(RegExp.prototype, 'flags').get.call(p);
return get + '' === &quot;global,ignoreCase,multiline,unicode,sticky&quot;;</div>}
```
###RegExp.prototype.toString
          
```
function(){
              <div class="code">// RegExp.prototype.toString -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({}, { get: function(o, k) { get.push(k); return o[k]; }});
RegExp.prototype.toString.call(p);
return get + '' === &quot;source,flags&quot;;</div>}
```
###Array.from
          
```
function(){
              <div class="code">// Array.from -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({length: 2, 0: '', 1: ''}, { get: function(o, k) { get.push(k); return o[k]; }});
Array.from(p);
return get[0] === Symbol.iterator &amp;&amp; get.slice(1) + '' === &quot;length,0,1&quot;;</div>}
```
###Array.prototype.pop
          
```
function(){
              <div class="code">// Array.prototype.pop -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy([0,1,2,3], { get: function(o, k) { get.push(k); return o[k]; }});
Array.prototype.pop.call(p);
return get + '' === &quot;length,3&quot;;</div>}
```
###Array.prototype.reverse
          
```
function(){
              <div class="code">// Array.prototype.reverse -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy([0,,2,,4,,], { get: function(o, k) { get.push(k); return o[k]; }});
Array.prototype.reverse.call(p);
return get + '' === &quot;length,0,4,2&quot;;</div>}
```
###Array.prototype.shift
          
```
function(){
              <div class="code">// Array.prototype.shift -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy([0,1,2,3], { get: function(o, k) { get.push(k); return o[k]; }});
Array.prototype.shift.call(p);
return get + '' === &quot;length,0,1,2,3&quot;;</div>}
```
###Array.prototype.toString
          
```
function(){
              <div class="code">// Array.prototype.toString -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({ join:Function() }, { get: function(o, k) { get.push(k); return o[k]; }});
Array.prototype.toString.call(p);
return get + '' === &quot;join&quot;;</div>}
```
###JSON.stringify
          
```
function(){
              <div class="code">// JSON.stringify -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({}, { get: function(o, k) { get.push(k); return o[k]; }});
JSON.stringify(p);
return get + '' === &quot;toJSON&quot;;</div>}
```
###Promise resolve functions
          
```
function(){
              <div class="code">// Promise resolve functions -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({}, { get: function(o, k) { get.push(k); return o[k]; }});
new Promise(function(resolve){ resolve(p); });
return get + '' === &quot;then&quot;;</div>}
```
###String.prototype.replace
          
```
function(){
              <div class="code">// String.prototype.replace functions -&gt; Get -&gt; [[Get]]
var get = [];
var proxied = {};
proxied[Symbol.toPrimitive] = Function();
var p = new Proxy(proxied, { get: function(o, k) { get.push(k); return o[k]; }});
&quot;&quot;.replace(p);
return get[0] === Symbol.replace &amp;&amp; get[1] === Symbol.toPrimitive &amp;&amp; get.length === 2;</div>}
```
###String.prototype.split
          
```
function(){
              <div class="code">// String.prototype.split functions -&gt; Get -&gt; [[Get]]
var get = [];
var proxied = {};
proxied[Symbol.toPrimitive] = Function();
var p = new Proxy(proxied, { get: function(o, k) { get.push(k); return o[k]; }});
&quot;&quot;.split(p);
return get[0] === Symbol.split &amp;&amp; get[1] === Symbol.toPrimitive &amp;&amp; get.length === 2;</div>}
```
###Date.prototype.toJSON
          
```
function(){
              <div class="code">// Date.prototype.toJSON -&gt; ToPrimitive -&gt; Get -&gt; [[Get]]
// Date.prototype.toJSON -&gt; Invoke -&gt; GetMethod -&gt; GetV -&gt; [[Get]]
var get = [];
var p = new Proxy({toString:Function(),toISOString:Function()}, { get: function(o, k) { get.push(k); return o[k]; }});
Date.prototype.toJSON.call(p);
return get[0] === Symbol.toPrimitive &amp;&amp; get.slice(1) + '' === &quot;valueOf,toString,toISOString&quot;;</div>}
```
###ToPrimitive
          
```
function(){
              <div class="code">// ToPrimitive -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({toString:Function()}, { get: function(o, k) { get.push(k); return o[k]; }});
p + 3;
return get[0] === Symbol.toPrimitive &amp;&amp; get.slice(1) + '' === &quot;valueOf,toString&quot;;</div>}
```
###CreateListFromArrayLike
          
```
function(){
              <div class="code">// CreateListFromArrayLike -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({length:2, 0:0, 1:0}, { get: function(o, k) { get.push(k); return o[k]; }});
Function.prototype.apply({}, p);
return get + '' === &quot;length,0,1&quot;;</div>}
```
###HasBinding
          
```
function(){
              <div class="code">// HasBinding -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({foo:1}, { get: function(o, k) { get.push(k); return o[k]; }});
p[Symbol.unscopables] = p;
with(p) {
  typeof foo;
}
return get[0] === Symbol.unscopables &amp;&amp; get.slice(1) + '' === &quot;foo&quot;;</div>}
```
###CreateDynamicFunction
          
```
function(){
              <div class="code">// CreateDynamicFunction -&gt; GetPrototypeFromConstructor -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy(Function, { get: function(o, k) { get.push(k); return o[k]; }});
new p;
return get + '' === &quot;prototype&quot;;</div>}
```
###ClassDefinitionEvaluation
          
```
function(){
              <div class="code">// ClassDefinitionEvaluation -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy(Function(), { get: function(o, k) { get.push(k); return o[k]; }});
class C extends p {}
return get + '' === &quot;prototype&quot;;</div>}
```
###IteratorComplete, IteratorValue
          
```
function(){
              <div class="code">// IteratorComplete -&gt; Get -&gt; [[Get]]
// IteratorValue -&gt; Get -&gt; [[Get]]
var get = [];
var iterable = {};
iterable[Symbol.iterator] = function() {
  return {
    next: function() {
      return new Proxy({ value: 2, done: false }, { get: function(o, k) { get.push(k); return o[k]; }});
    }
  };
}
var i = 0;
for(var e of iterable) {
  if (++i &gt;= 2) break;
}
return get + '' === &quot;done,value,done,value&quot;;</div>}
```
###ToPropertyDescriptor
          
```
function(){
              <div class="code">// ToPropertyDescriptor -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({
    enumerable: true, configurable: true, value: true,
    writable: true, get: Function(), set: Function()
  }, { get: function(o, k) { get.push(k); return o[k]; }});
try {
  // This will throw, since it will have true for both &quot;get&quot; and &quot;value&quot;,
  // but not before performing a Get on every property.
  Object.defineProperty({}, &quot;foo&quot;, p);
} catch(e) {
  return get + '' === &quot;enumerable,configurable,value,writable,get,set&quot;;
}</div>}
```
###Object.assign
          
```
function(){
              <div class="code">// Object.assign -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({foo:1, bar:2}, { get: function(o, k) { get.push(k); return o[k]; }});
Object.assign({}, p);
return get + '' === &quot;foo,bar&quot;;</div>}
```
###Object.defineProperties
          
```
function(){
              <div class="code">// Object.defineProperties -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({foo:{}, bar:{}}, { get: function(o, k) { get.push(k); return o[k]; }});
Object.defineProperties({}, p);
return get + '' === &quot;foo,bar&quot;;</div>}
```
###Function.prototype.bind
          
```
function(){
              <div class="code">// Function.prototype.bind -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy(Function(), { get: function(o, k) { get.push(k); return o[k]; }});
Function.prototype.bind.call(p);
return get + '' === &quot;length,name&quot;;</div>}
```
###Error.prototype.toString
          
```
function(){
              <div class="code">// Error.prototype.toString -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({}, { get: function(o, k) { get.push(k); return o[k]; }});
Error.prototype.toString.call(p);
return get + '' === &quot;name,message&quot;;</div>}
```
###String.raw
          
```
function(){
              <div class="code">// String.raw -&gt; Get -&gt; [[Get]]
var get = [];
var raw = new Proxy({length: 2, 0: '', 1: ''}, { get: function(o, k) { get.push(k); return o[k]; }});
var p = new Proxy({raw: raw}, { get: function(o, k) { get.push(k); return o[k]; }});
String.raw(p);
return get + '' === &quot;raw,length,0,1&quot;;</div>}
```
###RegExp constructor
          
```
function(){
              <div class="code">// RegExp -&gt; Get -&gt; [[Get]]
var get = [];
var re = { constructor: null };
re[Symbol.match] = true;
var p = new Proxy(re, { get: function(o, k) { get.push(k); return o[k]; }});
RegExp(p);
return get[0] === Symbol.match &amp;&amp; get.slice(1) + '' === &quot;constructor,source,flags&quot;;</div>}
```
###RegExp.prototype.flags
          
```
function(){
              <div class="code">// RegExp.prototype.flags -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({}, { get: function(o, k) { get.push(k); return o[k]; }});
Object.getOwnPropertyDescriptor(RegExp.prototype, 'flags').get.call(p);
return get + '' === &quot;global,ignoreCase,multiline,unicode,sticky&quot;;</div>}
```
###RegExp.prototype.toString
          
```
function(){
              <div class="code">// RegExp.prototype.toString -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({}, { get: function(o, k) { get.push(k); return o[k]; }});
RegExp.prototype.toString.call(p);
return get + '' === &quot;source,flags&quot;;</div>}
```
###Array.from
          
```
function(){
              <div class="code">// Array.from -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({length: 2, 0: '', 1: ''}, { get: function(o, k) { get.push(k); return o[k]; }});
Array.from(p);
return get[0] === Symbol.iterator &amp;&amp; get.slice(1) + '' === &quot;length,0,1&quot;;</div>}
```
###Array.prototype.pop
          
```
function(){
              <div class="code">// Array.prototype.pop -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy([0,1,2,3], { get: function(o, k) { get.push(k); return o[k]; }});
Array.prototype.pop.call(p);
return get + '' === &quot;length,3&quot;;</div>}
```
###Array.prototype.reverse
          
```
function(){
              <div class="code">// Array.prototype.reverse -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy([0,,2,,4,,], { get: function(o, k) { get.push(k); return o[k]; }});
Array.prototype.reverse.call(p);
return get + '' === &quot;length,0,4,2&quot;;</div>}
```
###Array.prototype.shift
          
```
function(){
              <div class="code">// Array.prototype.shift -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy([0,1,2,3], { get: function(o, k) { get.push(k); return o[k]; }});
Array.prototype.shift.call(p);
return get + '' === &quot;length,0,1,2,3&quot;;</div>}
```
###Array.prototype.toString
          
```
function(){
              <div class="code">// Array.prototype.toString -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({ join:Function() }, { get: function(o, k) { get.push(k); return o[k]; }});
Array.prototype.toString.call(p);
return get + '' === &quot;join&quot;;</div>}
```
###JSON.stringify
          
```
function(){
              <div class="code">// JSON.stringify -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({}, { get: function(o, k) { get.push(k); return o[k]; }});
JSON.stringify(p);
return get + '' === &quot;toJSON&quot;;</div>}
```
###Promise resolve functions
          
```
function(){
              <div class="code">// Promise resolve functions -&gt; Get -&gt; [[Get]]
var get = [];
var p = new Proxy({}, { get: function(o, k) { get.push(k); return o[k]; }});
new Promise(function(resolve){ resolve(p); });
return get + '' === &quot;then&quot;;</div>}
```
###String.prototype.replace
          
```
function(){
              <div class="code">// String.prototype.replace functions -&gt; Get -&gt; [[Get]]
var get = [];
var proxied = {};
proxied[Symbol.toPrimitive] = Function();
var p = new Proxy(proxied, { get: function(o, k) { get.push(k); return o[k]; }});
&quot;&quot;.replace(p);
return get[0] === Symbol.replace &amp;&amp; get[1] === Symbol.toPrimitive &amp;&amp; get.length === 2;</div>}
```
###String.prototype.split
          
```
function(){
              <div class="code">// String.prototype.split functions -&gt; Get -&gt; [[Get]]
var get = [];
var proxied = {};
proxied[Symbol.toPrimitive] = Function();
var p = new Proxy(proxied, { get: function(o, k) { get.push(k); return o[k]; }});
&quot;&quot;.split(p);
return get[0] === Symbol.split &amp;&amp; get[1] === Symbol.toPrimitive &amp;&amp; get.length === 2;</div>}
```
###Date.prototype.toJSON
          
```
function(){
              <div class="code">// Date.prototype.toJSON -&gt; ToPrimitive -&gt; Get -&gt; [[Get]]
// Date.prototype.toJSON -&gt; Invoke -&gt; GetMethod -&gt; GetV -&gt; [[Get]]
var get = [];
var p = new Proxy({toString:Function(),toISOString:Function()}, { get: function(o, k) { get.push(k); return o[k]; }});
Date.prototype.toJSON.call(p);
return get[0] === Symbol.toPrimitive &amp;&amp; get.slice(1) + '' === &quot;valueOf,toString,toISOString&quot;;</div>}
```
