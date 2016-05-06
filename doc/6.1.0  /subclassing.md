###Date.prototype[Symbol.toPrimitive]
          
```
function(){
              <div class="code">var tp = Date.prototype[Symbol.toPrimitive];
return tp.call(Object(2), &quot;number&quot;) === 2
  &amp;&amp; tp.call(Object(2), &quot;string&quot;) === &quot;2&quot;
  &amp;&amp; tp.call(Object(2), &quot;default&quot;) === &quot;2&quot;;</div>}
```
###length property (accessing)
          
```
function(){
              <div class="code">class C extends Array {}
var c = new C();
var len1 = c.length;
c[2] = 'foo';
var len2 = c.length;
return len1 === 0 &amp;&amp; len2 === 3;</div>}
```
###length property (setting)
          
```
function(){
              <div class="code">class C extends Array {}
var c = new C();
c[2] = 'foo';
c.length = 1;
return c.length === 1 &amp;&amp; !(2 in c);</div>}
```
###correct prototype chain
          
```
function(){
              <div class="code">class C extends Array {}
var c = new C();
return c instanceof C &amp;&amp; c instanceof Array &amp;&amp; Object.getPrototypeOf(C) === Array;</div>}
```
###Array.isArray support
          
```
function(){
              <div class="code">class C extends Array {}
return Array.isArray(new C());</div>}
```
###Array.from
          
```
function(){
              <div class="code">class C extends Array {}
return C.from({ length: 0 }) instanceof C;</div>}
```
###Array.of
          
```
function(){
              <div class="code">class C extends Array {}
return C.of(0) instanceof C;</div>}
```
###Date.prototype[Symbol.toPrimitive]
          
```
function(){
              <div class="code">var tp = Date.prototype[Symbol.toPrimitive];
return tp.call(Object(2), &quot;number&quot;) === 2
  &amp;&amp; tp.call(Object(2), &quot;string&quot;) === &quot;2&quot;
  &amp;&amp; tp.call(Object(2), &quot;default&quot;) === &quot;2&quot;;</div>}
```
###length property (accessing)
          
```
function(){
              <div class="code">class C extends Array {}
var c = new C();
var len1 = c.length;
c[2] = 'foo';
var len2 = c.length;
return len1 === 0 &amp;&amp; len2 === 3;</div>}
```
###length property (setting)
          
```
function(){
              <div class="code">class C extends Array {}
var c = new C();
c[2] = 'foo';
c.length = 1;
return c.length === 1 &amp;&amp; !(2 in c);</div>}
```
###correct prototype chain
          
```
function(){
              <div class="code">class C extends Array {}
var c = new C();
return c instanceof C &amp;&amp; c instanceof Array &amp;&amp; Object.getPrototypeOf(C) === Array;</div>}
```
###Array.isArray support
          
```
function(){
              <div class="code">class C extends Array {}
return Array.isArray(new C());</div>}
```
###Array.from
          
```
function(){
              <div class="code">class C extends Array {}
return C.from({ length: 0 }) instanceof C;</div>}
```
###Array.of
          
```
function(){
              <div class="code">class C extends Array {}
return C.of(0) instanceof C;</div>}
```
###Date.prototype[Symbol.toPrimitive]
          
```
function(){
              <div class="code">var tp = Date.prototype[Symbol.toPrimitive];
return tp.call(Object(2), &quot;number&quot;) === 2
  &amp;&amp; tp.call(Object(2), &quot;string&quot;) === &quot;2&quot;
  &amp;&amp; tp.call(Object(2), &quot;default&quot;) === &quot;2&quot;;</div>}
```
###length property (accessing)
          
```
function(){
              <div class="code">class C extends Array {}
var c = new C();
var len1 = c.length;
c[2] = 'foo';
var len2 = c.length;
return len1 === 0 &amp;&amp; len2 === 3;</div>}
```
###length property (setting)
          
```
function(){
              <div class="code">class C extends Array {}
var c = new C();
c[2] = 'foo';
c.length = 1;
return c.length === 1 &amp;&amp; !(2 in c);</div>}
```
###correct prototype chain
          
```
function(){
              <div class="code">class C extends Array {}
var c = new C();
return c instanceof C &amp;&amp; c instanceof Array &amp;&amp; Object.getPrototypeOf(C) === Array;</div>}
```
###Array.isArray support
          
```
function(){
              <div class="code">class C extends Array {}
return Array.isArray(new C());</div>}
```
###Array.from
          
```
function(){
              <div class="code">class C extends Array {}
return C.from({ length: 0 }) instanceof C;</div>}
```
###Array.of
          
```
function(){
              <div class="code">class C extends Array {}
return C.of(0) instanceof C;</div>}
```
###Date.prototype[Symbol.toPrimitive]
          
```
function(){
              <div class="code">var tp = Date.prototype[Symbol.toPrimitive];
return tp.call(Object(2), &quot;number&quot;) === 2
  &amp;&amp; tp.call(Object(2), &quot;string&quot;) === &quot;2&quot;
  &amp;&amp; tp.call(Object(2), &quot;default&quot;) === &quot;2&quot;;</div>}
```
###length property (accessing)
          
```
function(){
              <div class="code">class C extends Array {}
var c = new C();
var len1 = c.length;
c[2] = 'foo';
var len2 = c.length;
return len1 === 0 &amp;&amp; len2 === 3;</div>}
```
###length property (setting)
          
```
function(){
              <div class="code">class C extends Array {}
var c = new C();
c[2] = 'foo';
c.length = 1;
return c.length === 1 &amp;&amp; !(2 in c);</div>}
```
###correct prototype chain
          
```
function(){
              <div class="code">class C extends Array {}
var c = new C();
return c instanceof C &amp;&amp; c instanceof Array &amp;&amp; Object.getPrototypeOf(C) === Array;</div>}
```
###Array.isArray support
          
```
function(){
              <div class="code">class C extends Array {}
return Array.isArray(new C());</div>}
```
###Array.from
          
```
function(){
              <div class="code">class C extends Array {}
return C.from({ length: 0 }) instanceof C;</div>}
```
###Array.of
          
```
function(){
              <div class="code">class C extends Array {}
return C.of(0) instanceof C;</div>}
```
###Date.prototype[Symbol.toPrimitive]
          
```
function(){
              <div class="code">var tp = Date.prototype[Symbol.toPrimitive];
return tp.call(Object(2), &quot;number&quot;) === 2
  &amp;&amp; tp.call(Object(2), &quot;string&quot;) === &quot;2&quot;
  &amp;&amp; tp.call(Object(2), &quot;default&quot;) === &quot;2&quot;;</div>}
```
###length property (accessing)
          
```
function(){
              <div class="code">class C extends Array {}
var c = new C();
var len1 = c.length;
c[2] = 'foo';
var len2 = c.length;
return len1 === 0 &amp;&amp; len2 === 3;</div>}
```
###length property (setting)
          
```
function(){
              <div class="code">class C extends Array {}
var c = new C();
c[2] = 'foo';
c.length = 1;
return c.length === 1 &amp;&amp; !(2 in c);</div>}
```
###correct prototype chain
          
```
function(){
              <div class="code">class C extends Array {}
var c = new C();
return c instanceof C &amp;&amp; c instanceof Array &amp;&amp; Object.getPrototypeOf(C) === Array;</div>}
```
###Array.isArray support
          
```
function(){
              <div class="code">class C extends Array {}
return Array.isArray(new C());</div>}
```
###Array.from
          
```
function(){
              <div class="code">class C extends Array {}
return C.from({ length: 0 }) instanceof C;</div>}
```
###Array.of
          
```
function(){
              <div class="code">class C extends Array {}
return C.of(0) instanceof C;</div>}
```
###Date.prototype[Symbol.toPrimitive]
          
```
function(){
              <div class="code">var tp = Date.prototype[Symbol.toPrimitive];
return tp.call(Object(2), &quot;number&quot;) === 2
  &amp;&amp; tp.call(Object(2), &quot;string&quot;) === &quot;2&quot;
  &amp;&amp; tp.call(Object(2), &quot;default&quot;) === &quot;2&quot;;</div>}
```
###length property (accessing)
          
```
function(){
              <div class="code">class C extends Array {}
var c = new C();
var len1 = c.length;
c[2] = 'foo';
var len2 = c.length;
return len1 === 0 &amp;&amp; len2 === 3;</div>}
```
###length property (setting)
          
```
function(){
              <div class="code">class C extends Array {}
var c = new C();
c[2] = 'foo';
c.length = 1;
return c.length === 1 &amp;&amp; !(2 in c);</div>}
```
###correct prototype chain
          
```
function(){
              <div class="code">class C extends Array {}
var c = new C();
return c instanceof C &amp;&amp; c instanceof Array &amp;&amp; Object.getPrototypeOf(C) === Array;</div>}
```
###Array.isArray support
          
```
function(){
              <div class="code">class C extends Array {}
return Array.isArray(new C());</div>}
```
###Array.from
          
```
function(){
              <div class="code">class C extends Array {}
return C.from({ length: 0 }) instanceof C;</div>}
```
###Array.of
          
```
function(){
              <div class="code">class C extends Array {}
return C.of(0) instanceof C;</div>}
```
###Date.prototype[Symbol.toPrimitive]
          
```
function(){
              <div class="code">var tp = Date.prototype[Symbol.toPrimitive];
return tp.call(Object(2), &quot;number&quot;) === 2
  &amp;&amp; tp.call(Object(2), &quot;string&quot;) === &quot;2&quot;
  &amp;&amp; tp.call(Object(2), &quot;default&quot;) === &quot;2&quot;;</div>}
```
###length property (accessing)
          
```
function(){
              <div class="code">class C extends Array {}
var c = new C();
var len1 = c.length;
c[2] = 'foo';
var len2 = c.length;
return len1 === 0 &amp;&amp; len2 === 3;</div>}
```
###length property (setting)
          
```
function(){
              <div class="code">class C extends Array {}
var c = new C();
c[2] = 'foo';
c.length = 1;
return c.length === 1 &amp;&amp; !(2 in c);</div>}
```
###correct prototype chain
          
```
function(){
              <div class="code">class C extends Array {}
var c = new C();
return c instanceof C &amp;&amp; c instanceof Array &amp;&amp; Object.getPrototypeOf(C) === Array;</div>}
```
###Array.isArray support
          
```
function(){
              <div class="code">class C extends Array {}
return Array.isArray(new C());</div>}
```
###Array.from
          
```
function(){
              <div class="code">class C extends Array {}
return C.from({ length: 0 }) instanceof C;</div>}
```
###Array.of
          
```
function(){
              <div class="code">class C extends Array {}
return C.of(0) instanceof C;</div>}
```
###Date.prototype[Symbol.toPrimitive]
          
```
function(){
              <div class="code">var tp = Date.prototype[Symbol.toPrimitive];
return tp.call(Object(2), &quot;number&quot;) === 2
  &amp;&amp; tp.call(Object(2), &quot;string&quot;) === &quot;2&quot;
  &amp;&amp; tp.call(Object(2), &quot;default&quot;) === &quot;2&quot;;</div>}
```
###length property (accessing)
          
```
function(){
              <div class="code">class C extends Array {}
var c = new C();
var len1 = c.length;
c[2] = 'foo';
var len2 = c.length;
return len1 === 0 &amp;&amp; len2 === 3;</div>}
```
###length property (setting)
          
```
function(){
              <div class="code">class C extends Array {}
var c = new C();
c[2] = 'foo';
c.length = 1;
return c.length === 1 &amp;&amp; !(2 in c);</div>}
```
###correct prototype chain
          
```
function(){
              <div class="code">class C extends Array {}
var c = new C();
return c instanceof C &amp;&amp; c instanceof Array &amp;&amp; Object.getPrototypeOf(C) === Array;</div>}
```
###Array.isArray support
          
```
function(){
              <div class="code">class C extends Array {}
return Array.isArray(new C());</div>}
```
###Array.from
          
```
function(){
              <div class="code">class C extends Array {}
return C.from({ length: 0 }) instanceof C;</div>}
```
###Array.of
          
```
function(){
              <div class="code">class C extends Array {}
return C.of(0) instanceof C;</div>}
```
###Date.prototype[Symbol.toPrimitive]
          
```
function(){
              <div class="code">var tp = Date.prototype[Symbol.toPrimitive];
return tp.call(Object(2), &quot;number&quot;) === 2
  &amp;&amp; tp.call(Object(2), &quot;string&quot;) === &quot;2&quot;
  &amp;&amp; tp.call(Object(2), &quot;default&quot;) === &quot;2&quot;;</div>}
```
###length property (accessing)
          
```
function(){
              <div class="code">class C extends Array {}
var c = new C();
var len1 = c.length;
c[2] = 'foo';
var len2 = c.length;
return len1 === 0 &amp;&amp; len2 === 3;</div>}
```
###length property (setting)
          
```
function(){
              <div class="code">class C extends Array {}
var c = new C();
c[2] = 'foo';
c.length = 1;
return c.length === 1 &amp;&amp; !(2 in c);</div>}
```
###correct prototype chain
          
```
function(){
              <div class="code">class C extends Array {}
var c = new C();
return c instanceof C &amp;&amp; c instanceof Array &amp;&amp; Object.getPrototypeOf(C) === Array;</div>}
```
###Array.isArray support
          
```
function(){
              <div class="code">class C extends Array {}
return Array.isArray(new C());</div>}
```
###Array.from
          
```
function(){
              <div class="code">class C extends Array {}
return C.from({ length: 0 }) instanceof C;</div>}
```
###Array.of
          
```
function(){
              <div class="code">class C extends Array {}
return C.of(0) instanceof C;</div>}
```
###Date.prototype[Symbol.toPrimitive]
          
```
function(){
              <div class="code">var tp = Date.prototype[Symbol.toPrimitive];
return tp.call(Object(2), &quot;number&quot;) === 2
  &amp;&amp; tp.call(Object(2), &quot;string&quot;) === &quot;2&quot;
  &amp;&amp; tp.call(Object(2), &quot;default&quot;) === &quot;2&quot;;</div>}
```
###length property (accessing)
          
```
function(){
              <div class="code">class C extends Array {}
var c = new C();
var len1 = c.length;
c[2] = 'foo';
var len2 = c.length;
return len1 === 0 &amp;&amp; len2 === 3;</div>}
```
###length property (setting)
          
```
function(){
              <div class="code">class C extends Array {}
var c = new C();
c[2] = 'foo';
c.length = 1;
return c.length === 1 &amp;&amp; !(2 in c);</div>}
```
###correct prototype chain
          
```
function(){
              <div class="code">class C extends Array {}
var c = new C();
return c instanceof C &amp;&amp; c instanceof Array &amp;&amp; Object.getPrototypeOf(C) === Array;</div>}
```
###Array.isArray support
          
```
function(){
              <div class="code">class C extends Array {}
return Array.isArray(new C());</div>}
```
###Array.from
          
```
function(){
              <div class="code">class C extends Array {}
return C.from({ length: 0 }) instanceof C;</div>}
```
###Array.of
          
```
function(){
              <div class="code">class C extends Array {}
return C.of(0) instanceof C;</div>}
```
###Date.prototype[Symbol.toPrimitive]
          
```
function(){
              <div class="code">var tp = Date.prototype[Symbol.toPrimitive];
return tp.call(Object(2), &quot;number&quot;) === 2
  &amp;&amp; tp.call(Object(2), &quot;string&quot;) === &quot;2&quot;
  &amp;&amp; tp.call(Object(2), &quot;default&quot;) === &quot;2&quot;;</div>}
```
###length property (accessing)
          
```
function(){
              <div class="code">class C extends Array {}
var c = new C();
var len1 = c.length;
c[2] = 'foo';
var len2 = c.length;
return len1 === 0 &amp;&amp; len2 === 3;</div>}
```
###length property (setting)
          
```
function(){
              <div class="code">class C extends Array {}
var c = new C();
c[2] = 'foo';
c.length = 1;
return c.length === 1 &amp;&amp; !(2 in c);</div>}
```
###correct prototype chain
          
```
function(){
              <div class="code">class C extends Array {}
var c = new C();
return c instanceof C &amp;&amp; c instanceof Array &amp;&amp; Object.getPrototypeOf(C) === Array;</div>}
```
###Array.isArray support
          
```
function(){
              <div class="code">class C extends Array {}
return Array.isArray(new C());</div>}
```
###Array.from
          
```
function(){
              <div class="code">class C extends Array {}
return C.from({ length: 0 }) instanceof C;</div>}
```
###Array.of
          
```
function(){
              <div class="code">class C extends Array {}
return C.of(0) instanceof C;</div>}
```
###Date.prototype[Symbol.toPrimitive]
          
```
function(){
              <div class="code">var tp = Date.prototype[Symbol.toPrimitive];
return tp.call(Object(2), &quot;number&quot;) === 2
  &amp;&amp; tp.call(Object(2), &quot;string&quot;) === &quot;2&quot;
  &amp;&amp; tp.call(Object(2), &quot;default&quot;) === &quot;2&quot;;</div>}
```
###length property (accessing)
          
```
function(){
              <div class="code">class C extends Array {}
var c = new C();
var len1 = c.length;
c[2] = 'foo';
var len2 = c.length;
return len1 === 0 &amp;&amp; len2 === 3;</div>}
```
###length property (setting)
          
```
function(){
              <div class="code">class C extends Array {}
var c = new C();
c[2] = 'foo';
c.length = 1;
return c.length === 1 &amp;&amp; !(2 in c);</div>}
```
###correct prototype chain
          
```
function(){
              <div class="code">class C extends Array {}
var c = new C();
return c instanceof C &amp;&amp; c instanceof Array &amp;&amp; Object.getPrototypeOf(C) === Array;</div>}
```
###Array.isArray support
          
```
function(){
              <div class="code">class C extends Array {}
return Array.isArray(new C());</div>}
```
###Array.from
          
```
function(){
              <div class="code">class C extends Array {}
return C.from({ length: 0 }) instanceof C;</div>}
```
###Array.of
          
```
function(){
              <div class="code">class C extends Array {}
return C.of(0) instanceof C;</div>}
```
###Date.prototype[Symbol.toPrimitive]
          
```
function(){
              <div class="code">var tp = Date.prototype[Symbol.toPrimitive];
return tp.call(Object(2), &quot;number&quot;) === 2
  &amp;&amp; tp.call(Object(2), &quot;string&quot;) === &quot;2&quot;
  &amp;&amp; tp.call(Object(2), &quot;default&quot;) === &quot;2&quot;;</div>}
```
###length property (accessing)
          
```
function(){
              <div class="code">class C extends Array {}
var c = new C();
var len1 = c.length;
c[2] = 'foo';
var len2 = c.length;
return len1 === 0 &amp;&amp; len2 === 3;</div>}
```
###length property (setting)
          
```
function(){
              <div class="code">class C extends Array {}
var c = new C();
c[2] = 'foo';
c.length = 1;
return c.length === 1 &amp;&amp; !(2 in c);</div>}
```
###correct prototype chain
          
```
function(){
              <div class="code">class C extends Array {}
var c = new C();
return c instanceof C &amp;&amp; c instanceof Array &amp;&amp; Object.getPrototypeOf(C) === Array;</div>}
```
###Array.isArray support
          
```
function(){
              <div class="code">class C extends Array {}
return Array.isArray(new C());</div>}
```
###Array.from
          
```
function(){
              <div class="code">class C extends Array {}
return C.from({ length: 0 }) instanceof C;</div>}
```
###Array.of
          
```
function(){
              <div class="code">class C extends Array {}
return C.of(0) instanceof C;</div>}
```
###Date.prototype[Symbol.toPrimitive]
          
```
function(){
              <div class="code">var tp = Date.prototype[Symbol.toPrimitive];
return tp.call(Object(2), &quot;number&quot;) === 2
  &amp;&amp; tp.call(Object(2), &quot;string&quot;) === &quot;2&quot;
  &amp;&amp; tp.call(Object(2), &quot;default&quot;) === &quot;2&quot;;</div>}
```
###length property (accessing)
          
```
function(){
              <div class="code">class C extends Array {}
var c = new C();
var len1 = c.length;
c[2] = 'foo';
var len2 = c.length;
return len1 === 0 &amp;&amp; len2 === 3;</div>}
```
###length property (setting)
          
```
function(){
              <div class="code">class C extends Array {}
var c = new C();
c[2] = 'foo';
c.length = 1;
return c.length === 1 &amp;&amp; !(2 in c);</div>}
```
###correct prototype chain
          
```
function(){
              <div class="code">class C extends Array {}
var c = new C();
return c instanceof C &amp;&amp; c instanceof Array &amp;&amp; Object.getPrototypeOf(C) === Array;</div>}
```
###Array.isArray support
          
```
function(){
              <div class="code">class C extends Array {}
return Array.isArray(new C());</div>}
```
###Array.from
          
```
function(){
              <div class="code">class C extends Array {}
return C.from({ length: 0 }) instanceof C;</div>}
```
###Array.of
          
```
function(){
              <div class="code">class C extends Array {}
return C.of(0) instanceof C;</div>}
```
###Date.prototype[Symbol.toPrimitive]
          
```
function(){
              <div class="code">var tp = Date.prototype[Symbol.toPrimitive];
return tp.call(Object(2), &quot;number&quot;) === 2
  &amp;&amp; tp.call(Object(2), &quot;string&quot;) === &quot;2&quot;
  &amp;&amp; tp.call(Object(2), &quot;default&quot;) === &quot;2&quot;;</div>}
```
###length property (accessing)
          
```
function(){
              <div class="code">class C extends Array {}
var c = new C();
var len1 = c.length;
c[2] = 'foo';
var len2 = c.length;
return len1 === 0 &amp;&amp; len2 === 3;</div>}
```
###length property (setting)
          
```
function(){
              <div class="code">class C extends Array {}
var c = new C();
c[2] = 'foo';
c.length = 1;
return c.length === 1 &amp;&amp; !(2 in c);</div>}
```
###correct prototype chain
          
```
function(){
              <div class="code">class C extends Array {}
var c = new C();
return c instanceof C &amp;&amp; c instanceof Array &amp;&amp; Object.getPrototypeOf(C) === Array;</div>}
```
###Array.isArray support
          
```
function(){
              <div class="code">class C extends Array {}
return Array.isArray(new C());</div>}
```
###Array.from
          
```
function(){
              <div class="code">class C extends Array {}
return C.from({ length: 0 }) instanceof C;</div>}
```
###Array.of
          
```
function(){
              <div class="code">class C extends Array {}
return C.of(0) instanceof C;</div>}
```
