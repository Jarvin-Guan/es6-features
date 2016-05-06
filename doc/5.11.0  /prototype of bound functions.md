###basic functions
          
```
function(){
              <div class="code">function correctProtoBound(proto) {
  var f = function(){};
  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(f, proto);
  }
  else {
    f.__proto__ = proto;
  }
  var boundF = Function.prototype.bind.call(f, null);
  return Object.getPrototypeOf(boundF) === proto;
}
return correctProtoBound(Function.prototype)
  &amp;&amp; correctProtoBound({})
  &amp;&amp; correctProtoBound(null);</div>}
```
###generator functions
          
```
function(){
              <div class="code">function correctProtoBound(proto) {
  var f = function*(){};
  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(f, proto);
  }
  else {
    f.__proto__ = proto;
  }
  var boundF = Function.prototype.bind.call(f, null);
  return Object.getPrototypeOf(boundF) === proto;
}
return correctProtoBound(Function.prototype)
  &amp;&amp; correctProtoBound({})
  &amp;&amp; correctProtoBound(null);</div>}
```
###arrow functions
          
```
function(){
              <div class="code">function correctProtoBound(proto) {
  var f = ()=&gt;5;
  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(f, proto);
  }
  else {
    f.__proto__ = proto;
  }
  var boundF = Function.prototype.bind.call(f, null);
  return Object.getPrototypeOf(boundF) === proto;
}
return correctProtoBound(Function.prototype)
  &amp;&amp; correctProtoBound({})
  &amp;&amp; correctProtoBound(null);</div>}
```
###basic functions
          
```
function(){
              <div class="code">function correctProtoBound(proto) {
  var f = function(){};
  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(f, proto);
  }
  else {
    f.__proto__ = proto;
  }
  var boundF = Function.prototype.bind.call(f, null);
  return Object.getPrototypeOf(boundF) === proto;
}
return correctProtoBound(Function.prototype)
  &amp;&amp; correctProtoBound({})
  &amp;&amp; correctProtoBound(null);</div>}
```
###generator functions
          
```
function(){
              <div class="code">function correctProtoBound(proto) {
  var f = function*(){};
  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(f, proto);
  }
  else {
    f.__proto__ = proto;
  }
  var boundF = Function.prototype.bind.call(f, null);
  return Object.getPrototypeOf(boundF) === proto;
}
return correctProtoBound(Function.prototype)
  &amp;&amp; correctProtoBound({})
  &amp;&amp; correctProtoBound(null);</div>}
```
###arrow functions
          
```
function(){
              <div class="code">function correctProtoBound(proto) {
  var f = ()=&gt;5;
  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(f, proto);
  }
  else {
    f.__proto__ = proto;
  }
  var boundF = Function.prototype.bind.call(f, null);
  return Object.getPrototypeOf(boundF) === proto;
}
return correctProtoBound(Function.prototype)
  &amp;&amp; correctProtoBound({})
  &amp;&amp; correctProtoBound(null);</div>}
```
###basic functions
          
```
function(){
              <div class="code">function correctProtoBound(proto) {
  var f = function(){};
  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(f, proto);
  }
  else {
    f.__proto__ = proto;
  }
  var boundF = Function.prototype.bind.call(f, null);
  return Object.getPrototypeOf(boundF) === proto;
}
return correctProtoBound(Function.prototype)
  &amp;&amp; correctProtoBound({})
  &amp;&amp; correctProtoBound(null);</div>}
```
###generator functions
          
```
function(){
              <div class="code">function correctProtoBound(proto) {
  var f = function*(){};
  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(f, proto);
  }
  else {
    f.__proto__ = proto;
  }
  var boundF = Function.prototype.bind.call(f, null);
  return Object.getPrototypeOf(boundF) === proto;
}
return correctProtoBound(Function.prototype)
  &amp;&amp; correctProtoBound({})
  &amp;&amp; correctProtoBound(null);</div>}
```
###arrow functions
          
```
function(){
              <div class="code">function correctProtoBound(proto) {
  var f = ()=&gt;5;
  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(f, proto);
  }
  else {
    f.__proto__ = proto;
  }
  var boundF = Function.prototype.bind.call(f, null);
  return Object.getPrototypeOf(boundF) === proto;
}
return correctProtoBound(Function.prototype)
  &amp;&amp; correctProtoBound({})
  &amp;&amp; correctProtoBound(null);</div>}
```
###basic functions
          
```
function(){
              <div class="code">function correctProtoBound(proto) {
  var f = function(){};
  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(f, proto);
  }
  else {
    f.__proto__ = proto;
  }
  var boundF = Function.prototype.bind.call(f, null);
  return Object.getPrototypeOf(boundF) === proto;
}
return correctProtoBound(Function.prototype)
  &amp;&amp; correctProtoBound({})
  &amp;&amp; correctProtoBound(null);</div>}
```
###generator functions
          
```
function(){
              <div class="code">function correctProtoBound(proto) {
  var f = function*(){};
  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(f, proto);
  }
  else {
    f.__proto__ = proto;
  }
  var boundF = Function.prototype.bind.call(f, null);
  return Object.getPrototypeOf(boundF) === proto;
}
return correctProtoBound(Function.prototype)
  &amp;&amp; correctProtoBound({})
  &amp;&amp; correctProtoBound(null);</div>}
```
###arrow functions
          
```
function(){
              <div class="code">function correctProtoBound(proto) {
  var f = ()=&gt;5;
  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(f, proto);
  }
  else {
    f.__proto__ = proto;
  }
  var boundF = Function.prototype.bind.call(f, null);
  return Object.getPrototypeOf(boundF) === proto;
}
return correctProtoBound(Function.prototype)
  &amp;&amp; correctProtoBound({})
  &amp;&amp; correctProtoBound(null);</div>}
```
###basic functions
          
```
function(){
              <div class="code">function correctProtoBound(proto) {
  var f = function(){};
  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(f, proto);
  }
  else {
    f.__proto__ = proto;
  }
  var boundF = Function.prototype.bind.call(f, null);
  return Object.getPrototypeOf(boundF) === proto;
}
return correctProtoBound(Function.prototype)
  &amp;&amp; correctProtoBound({})
  &amp;&amp; correctProtoBound(null);</div>}
```
###generator functions
          
```
function(){
              <div class="code">function correctProtoBound(proto) {
  var f = function*(){};
  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(f, proto);
  }
  else {
    f.__proto__ = proto;
  }
  var boundF = Function.prototype.bind.call(f, null);
  return Object.getPrototypeOf(boundF) === proto;
}
return correctProtoBound(Function.prototype)
  &amp;&amp; correctProtoBound({})
  &amp;&amp; correctProtoBound(null);</div>}
```
###arrow functions
          
```
function(){
              <div class="code">function correctProtoBound(proto) {
  var f = ()=&gt;5;
  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(f, proto);
  }
  else {
    f.__proto__ = proto;
  }
  var boundF = Function.prototype.bind.call(f, null);
  return Object.getPrototypeOf(boundF) === proto;
}
return correctProtoBound(Function.prototype)
  &amp;&amp; correctProtoBound({})
  &amp;&amp; correctProtoBound(null);</div>}
```
###basic functions
          
```
function(){
              <div class="code">function correctProtoBound(proto) {
  var f = function(){};
  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(f, proto);
  }
  else {
    f.__proto__ = proto;
  }
  var boundF = Function.prototype.bind.call(f, null);
  return Object.getPrototypeOf(boundF) === proto;
}
return correctProtoBound(Function.prototype)
  &amp;&amp; correctProtoBound({})
  &amp;&amp; correctProtoBound(null);</div>}
```
###generator functions
          
```
function(){
              <div class="code">function correctProtoBound(proto) {
  var f = function*(){};
  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(f, proto);
  }
  else {
    f.__proto__ = proto;
  }
  var boundF = Function.prototype.bind.call(f, null);
  return Object.getPrototypeOf(boundF) === proto;
}
return correctProtoBound(Function.prototype)
  &amp;&amp; correctProtoBound({})
  &amp;&amp; correctProtoBound(null);</div>}
```
###arrow functions
          
```
function(){
              <div class="code">function correctProtoBound(proto) {
  var f = ()=&gt;5;
  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(f, proto);
  }
  else {
    f.__proto__ = proto;
  }
  var boundF = Function.prototype.bind.call(f, null);
  return Object.getPrototypeOf(boundF) === proto;
}
return correctProtoBound(Function.prototype)
  &amp;&amp; correctProtoBound({})
  &amp;&amp; correctProtoBound(null);</div>}
```
###basic functions
          
```
function(){
              <div class="code">function correctProtoBound(proto) {
  var f = function(){};
  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(f, proto);
  }
  else {
    f.__proto__ = proto;
  }
  var boundF = Function.prototype.bind.call(f, null);
  return Object.getPrototypeOf(boundF) === proto;
}
return correctProtoBound(Function.prototype)
  &amp;&amp; correctProtoBound({})
  &amp;&amp; correctProtoBound(null);</div>}
```
###generator functions
          
```
function(){
              <div class="code">function correctProtoBound(proto) {
  var f = function*(){};
  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(f, proto);
  }
  else {
    f.__proto__ = proto;
  }
  var boundF = Function.prototype.bind.call(f, null);
  return Object.getPrototypeOf(boundF) === proto;
}
return correctProtoBound(Function.prototype)
  &amp;&amp; correctProtoBound({})
  &amp;&amp; correctProtoBound(null);</div>}
```
###arrow functions
          
```
function(){
              <div class="code">function correctProtoBound(proto) {
  var f = ()=&gt;5;
  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(f, proto);
  }
  else {
    f.__proto__ = proto;
  }
  var boundF = Function.prototype.bind.call(f, null);
  return Object.getPrototypeOf(boundF) === proto;
}
return correctProtoBound(Function.prototype)
  &amp;&amp; correctProtoBound({})
  &amp;&amp; correctProtoBound(null);</div>}
```
###basic functions
          
```
function(){
              <div class="code">function correctProtoBound(proto) {
  var f = function(){};
  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(f, proto);
  }
  else {
    f.__proto__ = proto;
  }
  var boundF = Function.prototype.bind.call(f, null);
  return Object.getPrototypeOf(boundF) === proto;
}
return correctProtoBound(Function.prototype)
  &amp;&amp; correctProtoBound({})
  &amp;&amp; correctProtoBound(null);</div>}
```
###generator functions
          
```
function(){
              <div class="code">function correctProtoBound(proto) {
  var f = function*(){};
  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(f, proto);
  }
  else {
    f.__proto__ = proto;
  }
  var boundF = Function.prototype.bind.call(f, null);
  return Object.getPrototypeOf(boundF) === proto;
}
return correctProtoBound(Function.prototype)
  &amp;&amp; correctProtoBound({})
  &amp;&amp; correctProtoBound(null);</div>}
```
###arrow functions
          
```
function(){
              <div class="code">function correctProtoBound(proto) {
  var f = ()=&gt;5;
  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(f, proto);
  }
  else {
    f.__proto__ = proto;
  }
  var boundF = Function.prototype.bind.call(f, null);
  return Object.getPrototypeOf(boundF) === proto;
}
return correctProtoBound(Function.prototype)
  &amp;&amp; correctProtoBound({})
  &amp;&amp; correctProtoBound(null);</div>}
```
###basic functions
          
```
function(){
              <div class="code">function correctProtoBound(proto) {
  var f = function(){};
  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(f, proto);
  }
  else {
    f.__proto__ = proto;
  }
  var boundF = Function.prototype.bind.call(f, null);
  return Object.getPrototypeOf(boundF) === proto;
}
return correctProtoBound(Function.prototype)
  &amp;&amp; correctProtoBound({})
  &amp;&amp; correctProtoBound(null);</div>}
```
###generator functions
          
```
function(){
              <div class="code">function correctProtoBound(proto) {
  var f = function*(){};
  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(f, proto);
  }
  else {
    f.__proto__ = proto;
  }
  var boundF = Function.prototype.bind.call(f, null);
  return Object.getPrototypeOf(boundF) === proto;
}
return correctProtoBound(Function.prototype)
  &amp;&amp; correctProtoBound({})
  &amp;&amp; correctProtoBound(null);</div>}
```
###arrow functions
          
```
function(){
              <div class="code">function correctProtoBound(proto) {
  var f = ()=&gt;5;
  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(f, proto);
  }
  else {
    f.__proto__ = proto;
  }
  var boundF = Function.prototype.bind.call(f, null);
  return Object.getPrototypeOf(boundF) === proto;
}
return correctProtoBound(Function.prototype)
  &amp;&amp; correctProtoBound({})
  &amp;&amp; correctProtoBound(null);</div>}
```
###basic functions
          
```
function(){
              <div class="code">function correctProtoBound(proto) {
  var f = function(){};
  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(f, proto);
  }
  else {
    f.__proto__ = proto;
  }
  var boundF = Function.prototype.bind.call(f, null);
  return Object.getPrototypeOf(boundF) === proto;
}
return correctProtoBound(Function.prototype)
  &amp;&amp; correctProtoBound({})
  &amp;&amp; correctProtoBound(null);</div>}
```
###generator functions
          
```
function(){
              <div class="code">function correctProtoBound(proto) {
  var f = function*(){};
  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(f, proto);
  }
  else {
    f.__proto__ = proto;
  }
  var boundF = Function.prototype.bind.call(f, null);
  return Object.getPrototypeOf(boundF) === proto;
}
return correctProtoBound(Function.prototype)
  &amp;&amp; correctProtoBound({})
  &amp;&amp; correctProtoBound(null);</div>}
```
###arrow functions
          
```
function(){
              <div class="code">function correctProtoBound(proto) {
  var f = ()=&gt;5;
  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(f, proto);
  }
  else {
    f.__proto__ = proto;
  }
  var boundF = Function.prototype.bind.call(f, null);
  return Object.getPrototypeOf(boundF) === proto;
}
return correctProtoBound(Function.prototype)
  &amp;&amp; correctProtoBound({})
  &amp;&amp; correctProtoBound(null);</div>}
```
###basic functions
          
```
function(){
              <div class="code">function correctProtoBound(proto) {
  var f = function(){};
  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(f, proto);
  }
  else {
    f.__proto__ = proto;
  }
  var boundF = Function.prototype.bind.call(f, null);
  return Object.getPrototypeOf(boundF) === proto;
}
return correctProtoBound(Function.prototype)
  &amp;&amp; correctProtoBound({})
  &amp;&amp; correctProtoBound(null);</div>}
```
###generator functions
          
```
function(){
              <div class="code">function correctProtoBound(proto) {
  var f = function*(){};
  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(f, proto);
  }
  else {
    f.__proto__ = proto;
  }
  var boundF = Function.prototype.bind.call(f, null);
  return Object.getPrototypeOf(boundF) === proto;
}
return correctProtoBound(Function.prototype)
  &amp;&amp; correctProtoBound({})
  &amp;&amp; correctProtoBound(null);</div>}
```
###arrow functions
          
```
function(){
              <div class="code">function correctProtoBound(proto) {
  var f = ()=&gt;5;
  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(f, proto);
  }
  else {
    f.__proto__ = proto;
  }
  var boundF = Function.prototype.bind.call(f, null);
  return Object.getPrototypeOf(boundF) === proto;
}
return correctProtoBound(Function.prototype)
  &amp;&amp; correctProtoBound({})
  &amp;&amp; correctProtoBound(null);</div>}
```
###basic functions
          
```
function(){
              <div class="code">function correctProtoBound(proto) {
  var f = function(){};
  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(f, proto);
  }
  else {
    f.__proto__ = proto;
  }
  var boundF = Function.prototype.bind.call(f, null);
  return Object.getPrototypeOf(boundF) === proto;
}
return correctProtoBound(Function.prototype)
  &amp;&amp; correctProtoBound({})
  &amp;&amp; correctProtoBound(null);</div>}
```
###generator functions
          
```
function(){
              <div class="code">function correctProtoBound(proto) {
  var f = function*(){};
  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(f, proto);
  }
  else {
    f.__proto__ = proto;
  }
  var boundF = Function.prototype.bind.call(f, null);
  return Object.getPrototypeOf(boundF) === proto;
}
return correctProtoBound(Function.prototype)
  &amp;&amp; correctProtoBound({})
  &amp;&amp; correctProtoBound(null);</div>}
```
###arrow functions
          
```
function(){
              <div class="code">function correctProtoBound(proto) {
  var f = ()=&gt;5;
  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(f, proto);
  }
  else {
    f.__proto__ = proto;
  }
  var boundF = Function.prototype.bind.call(f, null);
  return Object.getPrototypeOf(boundF) === proto;
}
return correctProtoBound(Function.prototype)
  &amp;&amp; correctProtoBound({})
  &amp;&amp; correctProtoBound(null);</div>}
```
###basic functions
          
```
function(){
              <div class="code">function correctProtoBound(proto) {
  var f = function(){};
  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(f, proto);
  }
  else {
    f.__proto__ = proto;
  }
  var boundF = Function.prototype.bind.call(f, null);
  return Object.getPrototypeOf(boundF) === proto;
}
return correctProtoBound(Function.prototype)
  &amp;&amp; correctProtoBound({})
  &amp;&amp; correctProtoBound(null);</div>}
```
###generator functions
          
```
function(){
              <div class="code">function correctProtoBound(proto) {
  var f = function*(){};
  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(f, proto);
  }
  else {
    f.__proto__ = proto;
  }
  var boundF = Function.prototype.bind.call(f, null);
  return Object.getPrototypeOf(boundF) === proto;
}
return correctProtoBound(Function.prototype)
  &amp;&amp; correctProtoBound({})
  &amp;&amp; correctProtoBound(null);</div>}
```
###arrow functions
          
```
function(){
              <div class="code">function correctProtoBound(proto) {
  var f = ()=&gt;5;
  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(f, proto);
  }
  else {
    f.__proto__ = proto;
  }
  var boundF = Function.prototype.bind.call(f, null);
  return Object.getPrototypeOf(boundF) === proto;
}
return correctProtoBound(Function.prototype)
  &amp;&amp; correctProtoBound({})
  &amp;&amp; correctProtoBound(null);</div>}
```
###basic functions
          
```
function(){
              <div class="code">function correctProtoBound(proto) {
  var f = function(){};
  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(f, proto);
  }
  else {
    f.__proto__ = proto;
  }
  var boundF = Function.prototype.bind.call(f, null);
  return Object.getPrototypeOf(boundF) === proto;
}
return correctProtoBound(Function.prototype)
  &amp;&amp; correctProtoBound({})
  &amp;&amp; correctProtoBound(null);</div>}
```
###generator functions
          
```
function(){
              <div class="code">function correctProtoBound(proto) {
  var f = function*(){};
  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(f, proto);
  }
  else {
    f.__proto__ = proto;
  }
  var boundF = Function.prototype.bind.call(f, null);
  return Object.getPrototypeOf(boundF) === proto;
}
return correctProtoBound(Function.prototype)
  &amp;&amp; correctProtoBound({})
  &amp;&amp; correctProtoBound(null);</div>}
```
###arrow functions
          
```
function(){
              <div class="code">function correctProtoBound(proto) {
  var f = ()=&gt;5;
  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(f, proto);
  }
  else {
    f.__proto__ = proto;
  }
  var boundF = Function.prototype.bind.call(f, null);
  return Object.getPrototypeOf(boundF) === proto;
}
return correctProtoBound(Function.prototype)
  &amp;&amp; correctProtoBound({})
  &amp;&amp; correctProtoBound(null);</div>}
```
###basic functions
          
```
function(){
              <div class="code">function correctProtoBound(proto) {
  var f = function(){};
  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(f, proto);
  }
  else {
    f.__proto__ = proto;
  }
  var boundF = Function.prototype.bind.call(f, null);
  return Object.getPrototypeOf(boundF) === proto;
}
return correctProtoBound(Function.prototype)
  &amp;&amp; correctProtoBound({})
  &amp;&amp; correctProtoBound(null);</div>}
```
###generator functions
          
```
function(){
              <div class="code">function correctProtoBound(proto) {
  var f = function*(){};
  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(f, proto);
  }
  else {
    f.__proto__ = proto;
  }
  var boundF = Function.prototype.bind.call(f, null);
  return Object.getPrototypeOf(boundF) === proto;
}
return correctProtoBound(Function.prototype)
  &amp;&amp; correctProtoBound({})
  &amp;&amp; correctProtoBound(null);</div>}
```
###arrow functions
          
```
function(){
              <div class="code">function correctProtoBound(proto) {
  var f = ()=&gt;5;
  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(f, proto);
  }
  else {
    f.__proto__ = proto;
  }
  var boundF = Function.prototype.bind.call(f, null);
  return Object.getPrototypeOf(boundF) === proto;
}
return correctProtoBound(Function.prototype)
  &amp;&amp; correctProtoBound({})
  &amp;&amp; correctProtoBound(null);</div>}
```
