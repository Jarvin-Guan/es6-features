###basic functionality
          
```
function(){
              <div class="code">return (function (a = 1, b = 2) { return a === 3 &amp;&amp; b === 2; }(3));</div>}
```
###explicit undefined defers to the default
          
```
function(){
              <div class="code">return (function (a = 1, b = 2) { return a === 1 &amp;&amp; b === 3; }(undefined, 3));</div>}
```
###defaults can refer to previous params
          
```
function(){
              <div class="code">return (function (a, b = a) { return b === 5; }(5));</div>}
```
###arguments object interaction
          
```
function(){
              <div class="code">return (function (a = &quot;baz&quot;, b = &quot;qux&quot;, c = &quot;quux&quot;) {
  a = &quot;corge&quot;;
  // The arguments object is not mapped to the
  // parameters, even outside of strict mode.
  return arguments.length === 2
    &amp;&amp; arguments[0] === &quot;foo&quot;
    &amp;&amp; arguments[1] === &quot;bar&quot;;
}(&quot;foo&quot;, &quot;bar&quot;));</div>}
```
###temporal dead zone
          
```
function(){
              <div class="code">return (function(x = 1) {
  try {
    eval(&quot;(function(a=a){}())&quot;);
    return false;
  } catch(e) {}
  try {
    eval(&quot;(function(a=b,b){}())&quot;);
    return false;
  } catch(e) {}
  return true;
}());</div>}
```
###separate scope
          
```
function(){
              <div class="code">return (function(a=function(){
  return typeof b === 'undefined';
}){
  var b = 1;
  return a();
}());</div>}
```
###new Function() support
          
```
function(){
              <div class="code">return new Function(&quot;a = 1&quot;, &quot;b = 2&quot;,
  &quot;return a === 3 &amp;&amp; b === 2;&quot;
)(3);</div>}
```
###basic functionality
          
```
function(){
              <div class="code">return (function (a = 1, b = 2) { return a === 3 &amp;&amp; b === 2; }(3));</div>}
```
###explicit undefined defers to the default
          
```
function(){
              <div class="code">return (function (a = 1, b = 2) { return a === 1 &amp;&amp; b === 3; }(undefined, 3));</div>}
```
###defaults can refer to previous params
          
```
function(){
              <div class="code">return (function (a, b = a) { return b === 5; }(5));</div>}
```
###arguments object interaction
          
```
function(){
              <div class="code">return (function (a = &quot;baz&quot;, b = &quot;qux&quot;, c = &quot;quux&quot;) {
  a = &quot;corge&quot;;
  // The arguments object is not mapped to the
  // parameters, even outside of strict mode.
  return arguments.length === 2
    &amp;&amp; arguments[0] === &quot;foo&quot;
    &amp;&amp; arguments[1] === &quot;bar&quot;;
}(&quot;foo&quot;, &quot;bar&quot;));</div>}
```
###temporal dead zone
          
```
function(){
              <div class="code">return (function(x = 1) {
  try {
    eval(&quot;(function(a=a){}())&quot;);
    return false;
  } catch(e) {}
  try {
    eval(&quot;(function(a=b,b){}())&quot;);
    return false;
  } catch(e) {}
  return true;
}());</div>}
```
###separate scope
          
```
function(){
              <div class="code">return (function(a=function(){
  return typeof b === 'undefined';
}){
  var b = 1;
  return a();
}());</div>}
```
###new Function() support
          
```
function(){
              <div class="code">return new Function(&quot;a = 1&quot;, &quot;b = 2&quot;,
  &quot;return a === 3 &amp;&amp; b === 2;&quot;
)(3);</div>}
```
###basic functionality
          
```
function(){
              <div class="code">return (function (a = 1, b = 2) { return a === 3 &amp;&amp; b === 2; }(3));</div>}
```
###explicit undefined defers to the default
          
```
function(){
              <div class="code">return (function (a = 1, b = 2) { return a === 1 &amp;&amp; b === 3; }(undefined, 3));</div>}
```
###defaults can refer to previous params
          
```
function(){
              <div class="code">return (function (a, b = a) { return b === 5; }(5));</div>}
```
###arguments object interaction
          
```
function(){
              <div class="code">return (function (a = &quot;baz&quot;, b = &quot;qux&quot;, c = &quot;quux&quot;) {
  a = &quot;corge&quot;;
  // The arguments object is not mapped to the
  // parameters, even outside of strict mode.
  return arguments.length === 2
    &amp;&amp; arguments[0] === &quot;foo&quot;
    &amp;&amp; arguments[1] === &quot;bar&quot;;
}(&quot;foo&quot;, &quot;bar&quot;));</div>}
```
###temporal dead zone
          
```
function(){
              <div class="code">return (function(x = 1) {
  try {
    eval(&quot;(function(a=a){}())&quot;);
    return false;
  } catch(e) {}
  try {
    eval(&quot;(function(a=b,b){}())&quot;);
    return false;
  } catch(e) {}
  return true;
}());</div>}
```
###separate scope
          
```
function(){
              <div class="code">return (function(a=function(){
  return typeof b === 'undefined';
}){
  var b = 1;
  return a();
}());</div>}
```
###new Function() support
          
```
function(){
              <div class="code">return new Function(&quot;a = 1&quot;, &quot;b = 2&quot;,
  &quot;return a === 3 &amp;&amp; b === 2;&quot;
)(3);</div>}
```
###basic functionality
          
```
function(){
              <div class="code">return (function (a = 1, b = 2) { return a === 3 &amp;&amp; b === 2; }(3));</div>}
```
###explicit undefined defers to the default
          
```
function(){
              <div class="code">return (function (a = 1, b = 2) { return a === 1 &amp;&amp; b === 3; }(undefined, 3));</div>}
```
###defaults can refer to previous params
          
```
function(){
              <div class="code">return (function (a, b = a) { return b === 5; }(5));</div>}
```
###arguments object interaction
          
```
function(){
              <div class="code">return (function (a = &quot;baz&quot;, b = &quot;qux&quot;, c = &quot;quux&quot;) {
  a = &quot;corge&quot;;
  // The arguments object is not mapped to the
  // parameters, even outside of strict mode.
  return arguments.length === 2
    &amp;&amp; arguments[0] === &quot;foo&quot;
    &amp;&amp; arguments[1] === &quot;bar&quot;;
}(&quot;foo&quot;, &quot;bar&quot;));</div>}
```
###temporal dead zone
          
```
function(){
              <div class="code">return (function(x = 1) {
  try {
    eval(&quot;(function(a=a){}())&quot;);
    return false;
  } catch(e) {}
  try {
    eval(&quot;(function(a=b,b){}())&quot;);
    return false;
  } catch(e) {}
  return true;
}());</div>}
```
###separate scope
          
```
function(){
              <div class="code">return (function(a=function(){
  return typeof b === 'undefined';
}){
  var b = 1;
  return a();
}());</div>}
```
###new Function() support
          
```
function(){
              <div class="code">return new Function(&quot;a = 1&quot;, &quot;b = 2&quot;,
  &quot;return a === 3 &amp;&amp; b === 2;&quot;
)(3);</div>}
```
###basic functionality
          
```
function(){
              <div class="code">return (function (a = 1, b = 2) { return a === 3 &amp;&amp; b === 2; }(3));</div>}
```
###explicit undefined defers to the default
          
```
function(){
              <div class="code">return (function (a = 1, b = 2) { return a === 1 &amp;&amp; b === 3; }(undefined, 3));</div>}
```
###defaults can refer to previous params
          
```
function(){
              <div class="code">return (function (a, b = a) { return b === 5; }(5));</div>}
```
###arguments object interaction
          
```
function(){
              <div class="code">return (function (a = &quot;baz&quot;, b = &quot;qux&quot;, c = &quot;quux&quot;) {
  a = &quot;corge&quot;;
  // The arguments object is not mapped to the
  // parameters, even outside of strict mode.
  return arguments.length === 2
    &amp;&amp; arguments[0] === &quot;foo&quot;
    &amp;&amp; arguments[1] === &quot;bar&quot;;
}(&quot;foo&quot;, &quot;bar&quot;));</div>}
```
###temporal dead zone
          
```
function(){
              <div class="code">return (function(x = 1) {
  try {
    eval(&quot;(function(a=a){}())&quot;);
    return false;
  } catch(e) {}
  try {
    eval(&quot;(function(a=b,b){}())&quot;);
    return false;
  } catch(e) {}
  return true;
}());</div>}
```
###separate scope
          
```
function(){
              <div class="code">return (function(a=function(){
  return typeof b === 'undefined';
}){
  var b = 1;
  return a();
}());</div>}
```
###new Function() support
          
```
function(){
              <div class="code">return new Function(&quot;a = 1&quot;, &quot;b = 2&quot;,
  &quot;return a === 3 &amp;&amp; b === 2;&quot;
)(3);</div>}
```
###basic functionality
          
```
function(){
              <div class="code">return (function (a = 1, b = 2) { return a === 3 &amp;&amp; b === 2; }(3));</div>}
```
###explicit undefined defers to the default
          
```
function(){
              <div class="code">return (function (a = 1, b = 2) { return a === 1 &amp;&amp; b === 3; }(undefined, 3));</div>}
```
###defaults can refer to previous params
          
```
function(){
              <div class="code">return (function (a, b = a) { return b === 5; }(5));</div>}
```
###arguments object interaction
          
```
function(){
              <div class="code">return (function (a = &quot;baz&quot;, b = &quot;qux&quot;, c = &quot;quux&quot;) {
  a = &quot;corge&quot;;
  // The arguments object is not mapped to the
  // parameters, even outside of strict mode.
  return arguments.length === 2
    &amp;&amp; arguments[0] === &quot;foo&quot;
    &amp;&amp; arguments[1] === &quot;bar&quot;;
}(&quot;foo&quot;, &quot;bar&quot;));</div>}
```
###temporal dead zone
          
```
function(){
              <div class="code">return (function(x = 1) {
  try {
    eval(&quot;(function(a=a){}())&quot;);
    return false;
  } catch(e) {}
  try {
    eval(&quot;(function(a=b,b){}())&quot;);
    return false;
  } catch(e) {}
  return true;
}());</div>}
```
###separate scope
          
```
function(){
              <div class="code">return (function(a=function(){
  return typeof b === 'undefined';
}){
  var b = 1;
  return a();
}());</div>}
```
###new Function() support
          
```
function(){
              <div class="code">return new Function(&quot;a = 1&quot;, &quot;b = 2&quot;,
  &quot;return a === 3 &amp;&amp; b === 2;&quot;
)(3);</div>}
```
###basic functionality
          
```
function(){
              <div class="code">return (function (a = 1, b = 2) { return a === 3 &amp;&amp; b === 2; }(3));</div>}
```
###explicit undefined defers to the default
          
```
function(){
              <div class="code">return (function (a = 1, b = 2) { return a === 1 &amp;&amp; b === 3; }(undefined, 3));</div>}
```
###defaults can refer to previous params
          
```
function(){
              <div class="code">return (function (a, b = a) { return b === 5; }(5));</div>}
```
###arguments object interaction
          
```
function(){
              <div class="code">return (function (a = &quot;baz&quot;, b = &quot;qux&quot;, c = &quot;quux&quot;) {
  a = &quot;corge&quot;;
  // The arguments object is not mapped to the
  // parameters, even outside of strict mode.
  return arguments.length === 2
    &amp;&amp; arguments[0] === &quot;foo&quot;
    &amp;&amp; arguments[1] === &quot;bar&quot;;
}(&quot;foo&quot;, &quot;bar&quot;));</div>}
```
###temporal dead zone
          
```
function(){
              <div class="code">return (function(x = 1) {
  try {
    eval(&quot;(function(a=a){}())&quot;);
    return false;
  } catch(e) {}
  try {
    eval(&quot;(function(a=b,b){}())&quot;);
    return false;
  } catch(e) {}
  return true;
}());</div>}
```
###separate scope
          
```
function(){
              <div class="code">return (function(a=function(){
  return typeof b === 'undefined';
}){
  var b = 1;
  return a();
}());</div>}
```
###new Function() support
          
```
function(){
              <div class="code">return new Function(&quot;a = 1&quot;, &quot;b = 2&quot;,
  &quot;return a === 3 &amp;&amp; b === 2;&quot;
)(3);</div>}
```
###basic functionality
          
```
function(){
              <div class="code">return (function (a = 1, b = 2) { return a === 3 &amp;&amp; b === 2; }(3));</div>}
```
###explicit undefined defers to the default
          
```
function(){
              <div class="code">return (function (a = 1, b = 2) { return a === 1 &amp;&amp; b === 3; }(undefined, 3));</div>}
```
###defaults can refer to previous params
          
```
function(){
              <div class="code">return (function (a, b = a) { return b === 5; }(5));</div>}
```
###arguments object interaction
          
```
function(){
              <div class="code">return (function (a = &quot;baz&quot;, b = &quot;qux&quot;, c = &quot;quux&quot;) {
  a = &quot;corge&quot;;
  // The arguments object is not mapped to the
  // parameters, even outside of strict mode.
  return arguments.length === 2
    &amp;&amp; arguments[0] === &quot;foo&quot;
    &amp;&amp; arguments[1] === &quot;bar&quot;;
}(&quot;foo&quot;, &quot;bar&quot;));</div>}
```
###temporal dead zone
          
```
function(){
              <div class="code">return (function(x = 1) {
  try {
    eval(&quot;(function(a=a){}())&quot;);
    return false;
  } catch(e) {}
  try {
    eval(&quot;(function(a=b,b){}())&quot;);
    return false;
  } catch(e) {}
  return true;
}());</div>}
```
###separate scope
          
```
function(){
              <div class="code">return (function(a=function(){
  return typeof b === 'undefined';
}){
  var b = 1;
  return a();
}());</div>}
```
###new Function() support
          
```
function(){
              <div class="code">return new Function(&quot;a = 1&quot;, &quot;b = 2&quot;,
  &quot;return a === 3 &amp;&amp; b === 2;&quot;
)(3);</div>}
```
###basic functionality
          
```
function(){
              <div class="code">return (function (a = 1, b = 2) { return a === 3 &amp;&amp; b === 2; }(3));</div>}
```
###explicit undefined defers to the default
          
```
function(){
              <div class="code">return (function (a = 1, b = 2) { return a === 1 &amp;&amp; b === 3; }(undefined, 3));</div>}
```
###defaults can refer to previous params
          
```
function(){
              <div class="code">return (function (a, b = a) { return b === 5; }(5));</div>}
```
###arguments object interaction
          
```
function(){
              <div class="code">return (function (a = &quot;baz&quot;, b = &quot;qux&quot;, c = &quot;quux&quot;) {
  a = &quot;corge&quot;;
  // The arguments object is not mapped to the
  // parameters, even outside of strict mode.
  return arguments.length === 2
    &amp;&amp; arguments[0] === &quot;foo&quot;
    &amp;&amp; arguments[1] === &quot;bar&quot;;
}(&quot;foo&quot;, &quot;bar&quot;));</div>}
```
###temporal dead zone
          
```
function(){
              <div class="code">return (function(x = 1) {
  try {
    eval(&quot;(function(a=a){}())&quot;);
    return false;
  } catch(e) {}
  try {
    eval(&quot;(function(a=b,b){}())&quot;);
    return false;
  } catch(e) {}
  return true;
}());</div>}
```
###separate scope
          
```
function(){
              <div class="code">return (function(a=function(){
  return typeof b === 'undefined';
}){
  var b = 1;
  return a();
}());</div>}
```
###new Function() support
          
```
function(){
              <div class="code">return new Function(&quot;a = 1&quot;, &quot;b = 2&quot;,
  &quot;return a === 3 &amp;&amp; b === 2;&quot;
)(3);</div>}
```
###basic functionality
          
```
function(){
              <div class="code">return (function (a = 1, b = 2) { return a === 3 &amp;&amp; b === 2; }(3));</div>}
```
###explicit undefined defers to the default
          
```
function(){
              <div class="code">return (function (a = 1, b = 2) { return a === 1 &amp;&amp; b === 3; }(undefined, 3));</div>}
```
###defaults can refer to previous params
          
```
function(){
              <div class="code">return (function (a, b = a) { return b === 5; }(5));</div>}
```
###arguments object interaction
          
```
function(){
              <div class="code">return (function (a = &quot;baz&quot;, b = &quot;qux&quot;, c = &quot;quux&quot;) {
  a = &quot;corge&quot;;
  // The arguments object is not mapped to the
  // parameters, even outside of strict mode.
  return arguments.length === 2
    &amp;&amp; arguments[0] === &quot;foo&quot;
    &amp;&amp; arguments[1] === &quot;bar&quot;;
}(&quot;foo&quot;, &quot;bar&quot;));</div>}
```
###temporal dead zone
          
```
function(){
              <div class="code">return (function(x = 1) {
  try {
    eval(&quot;(function(a=a){}())&quot;);
    return false;
  } catch(e) {}
  try {
    eval(&quot;(function(a=b,b){}())&quot;);
    return false;
  } catch(e) {}
  return true;
}());</div>}
```
###separate scope
          
```
function(){
              <div class="code">return (function(a=function(){
  return typeof b === 'undefined';
}){
  var b = 1;
  return a();
}());</div>}
```
###new Function() support
          
```
function(){
              <div class="code">return new Function(&quot;a = 1&quot;, &quot;b = 2&quot;,
  &quot;return a === 3 &amp;&amp; b === 2;&quot;
)(3);</div>}
```
###basic functionality
          
```
function(){
              <div class="code">return (function (a = 1, b = 2) { return a === 3 &amp;&amp; b === 2; }(3));</div>}
```
###explicit undefined defers to the default
          
```
function(){
              <div class="code">return (function (a = 1, b = 2) { return a === 1 &amp;&amp; b === 3; }(undefined, 3));</div>}
```
###defaults can refer to previous params
          
```
function(){
              <div class="code">return (function (a, b = a) { return b === 5; }(5));</div>}
```
###arguments object interaction
          
```
function(){
              <div class="code">return (function (a = &quot;baz&quot;, b = &quot;qux&quot;, c = &quot;quux&quot;) {
  a = &quot;corge&quot;;
  // The arguments object is not mapped to the
  // parameters, even outside of strict mode.
  return arguments.length === 2
    &amp;&amp; arguments[0] === &quot;foo&quot;
    &amp;&amp; arguments[1] === &quot;bar&quot;;
}(&quot;foo&quot;, &quot;bar&quot;));</div>}
```
###temporal dead zone
          
```
function(){
              <div class="code">return (function(x = 1) {
  try {
    eval(&quot;(function(a=a){}())&quot;);
    return false;
  } catch(e) {}
  try {
    eval(&quot;(function(a=b,b){}())&quot;);
    return false;
  } catch(e) {}
  return true;
}());</div>}
```
###separate scope
          
```
function(){
              <div class="code">return (function(a=function(){
  return typeof b === 'undefined';
}){
  var b = 1;
  return a();
}());</div>}
```
###new Function() support
          
```
function(){
              <div class="code">return new Function(&quot;a = 1&quot;, &quot;b = 2&quot;,
  &quot;return a === 3 &amp;&amp; b === 2;&quot;
)(3);</div>}
```
###basic functionality
          
```
function(){
              <div class="code">return (function (a = 1, b = 2) { return a === 3 &amp;&amp; b === 2; }(3));</div>}
```
###explicit undefined defers to the default
          
```
function(){
              <div class="code">return (function (a = 1, b = 2) { return a === 1 &amp;&amp; b === 3; }(undefined, 3));</div>}
```
###defaults can refer to previous params
          
```
function(){
              <div class="code">return (function (a, b = a) { return b === 5; }(5));</div>}
```
###arguments object interaction
          
```
function(){
              <div class="code">return (function (a = &quot;baz&quot;, b = &quot;qux&quot;, c = &quot;quux&quot;) {
  a = &quot;corge&quot;;
  // The arguments object is not mapped to the
  // parameters, even outside of strict mode.
  return arguments.length === 2
    &amp;&amp; arguments[0] === &quot;foo&quot;
    &amp;&amp; arguments[1] === &quot;bar&quot;;
}(&quot;foo&quot;, &quot;bar&quot;));</div>}
```
###temporal dead zone
          
```
function(){
              <div class="code">return (function(x = 1) {
  try {
    eval(&quot;(function(a=a){}())&quot;);
    return false;
  } catch(e) {}
  try {
    eval(&quot;(function(a=b,b){}())&quot;);
    return false;
  } catch(e) {}
  return true;
}());</div>}
```
###separate scope
          
```
function(){
              <div class="code">return (function(a=function(){
  return typeof b === 'undefined';
}){
  var b = 1;
  return a();
}());</div>}
```
###new Function() support
          
```
function(){
              <div class="code">return new Function(&quot;a = 1&quot;, &quot;b = 2&quot;,
  &quot;return a === 3 &amp;&amp; b === 2;&quot;
)(3);</div>}
```
###basic functionality
          
```
function(){
              <div class="code">return (function (a = 1, b = 2) { return a === 3 &amp;&amp; b === 2; }(3));</div>}
```
###explicit undefined defers to the default
          
```
function(){
              <div class="code">return (function (a = 1, b = 2) { return a === 1 &amp;&amp; b === 3; }(undefined, 3));</div>}
```
###defaults can refer to previous params
          
```
function(){
              <div class="code">return (function (a, b = a) { return b === 5; }(5));</div>}
```
###arguments object interaction
          
```
function(){
              <div class="code">return (function (a = &quot;baz&quot;, b = &quot;qux&quot;, c = &quot;quux&quot;) {
  a = &quot;corge&quot;;
  // The arguments object is not mapped to the
  // parameters, even outside of strict mode.
  return arguments.length === 2
    &amp;&amp; arguments[0] === &quot;foo&quot;
    &amp;&amp; arguments[1] === &quot;bar&quot;;
}(&quot;foo&quot;, &quot;bar&quot;));</div>}
```
###temporal dead zone
          
```
function(){
              <div class="code">return (function(x = 1) {
  try {
    eval(&quot;(function(a=a){}())&quot;);
    return false;
  } catch(e) {}
  try {
    eval(&quot;(function(a=b,b){}())&quot;);
    return false;
  } catch(e) {}
  return true;
}());</div>}
```
###separate scope
          
```
function(){
              <div class="code">return (function(a=function(){
  return typeof b === 'undefined';
}){
  var b = 1;
  return a();
}());</div>}
```
###new Function() support
          
```
function(){
              <div class="code">return new Function(&quot;a = 1&quot;, &quot;b = 2&quot;,
  &quot;return a === 3 &amp;&amp; b === 2;&quot;
)(3);</div>}
```
###basic functionality
          
```
function(){
              <div class="code">return (function (a = 1, b = 2) { return a === 3 &amp;&amp; b === 2; }(3));</div>}
```
###explicit undefined defers to the default
          
```
function(){
              <div class="code">return (function (a = 1, b = 2) { return a === 1 &amp;&amp; b === 3; }(undefined, 3));</div>}
```
###defaults can refer to previous params
          
```
function(){
              <div class="code">return (function (a, b = a) { return b === 5; }(5));</div>}
```
###arguments object interaction
          
```
function(){
              <div class="code">return (function (a = &quot;baz&quot;, b = &quot;qux&quot;, c = &quot;quux&quot;) {
  a = &quot;corge&quot;;
  // The arguments object is not mapped to the
  // parameters, even outside of strict mode.
  return arguments.length === 2
    &amp;&amp; arguments[0] === &quot;foo&quot;
    &amp;&amp; arguments[1] === &quot;bar&quot;;
}(&quot;foo&quot;, &quot;bar&quot;));</div>}
```
###temporal dead zone
          
```
function(){
              <div class="code">return (function(x = 1) {
  try {
    eval(&quot;(function(a=a){}())&quot;);
    return false;
  } catch(e) {}
  try {
    eval(&quot;(function(a=b,b){}())&quot;);
    return false;
  } catch(e) {}
  return true;
}());</div>}
```
###separate scope
          
```
function(){
              <div class="code">return (function(a=function(){
  return typeof b === 'undefined';
}){
  var b = 1;
  return a();
}());</div>}
```
###new Function() support
          
```
function(){
              <div class="code">return new Function(&quot;a = 1&quot;, &quot;b = 2&quot;,
  &quot;return a === 3 &amp;&amp; b === 2;&quot;
)(3);</div>}
```
###basic functionality
          
```
function(){
              <div class="code">return (function (a = 1, b = 2) { return a === 3 &amp;&amp; b === 2; }(3));</div>}
```
###explicit undefined defers to the default
          
```
function(){
              <div class="code">return (function (a = 1, b = 2) { return a === 1 &amp;&amp; b === 3; }(undefined, 3));</div>}
```
###defaults can refer to previous params
          
```
function(){
              <div class="code">return (function (a, b = a) { return b === 5; }(5));</div>}
```
###arguments object interaction
          
```
function(){
              <div class="code">return (function (a = &quot;baz&quot;, b = &quot;qux&quot;, c = &quot;quux&quot;) {
  a = &quot;corge&quot;;
  // The arguments object is not mapped to the
  // parameters, even outside of strict mode.
  return arguments.length === 2
    &amp;&amp; arguments[0] === &quot;foo&quot;
    &amp;&amp; arguments[1] === &quot;bar&quot;;
}(&quot;foo&quot;, &quot;bar&quot;));</div>}
```
###temporal dead zone
          
```
function(){
              <div class="code">return (function(x = 1) {
  try {
    eval(&quot;(function(a=a){}())&quot;);
    return false;
  } catch(e) {}
  try {
    eval(&quot;(function(a=b,b){}())&quot;);
    return false;
  } catch(e) {}
  return true;
}());</div>}
```
###separate scope
          
```
function(){
              <div class="code">return (function(a=function(){
  return typeof b === 'undefined';
}){
  var b = 1;
  return a();
}());</div>}
```
###new Function() support
          
```
function(){
              <div class="code">return new Function(&quot;a = 1&quot;, &quot;b = 2&quot;,
  &quot;return a === 3 &amp;&amp; b === 2;&quot;
)(3);</div>}
```
