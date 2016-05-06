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
###classes
          
```
function(){
              <div class="code">function correctProtoBound(proto) {
  class C {}
  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(C, proto);
  }
  else {
    C.__proto__ = proto;
  }
  var boundF = Function.prototype.bind.call(C, null);
  return Object.getPrototypeOf(boundF) === proto;
}
return correctProtoBound(Function.prototype)
  &amp;&amp; correctProtoBound({})
  &amp;&amp; correctProtoBound(null);</div>}
```
###subclasses
          
```
function(){
              <div class="code">function correctProtoBound(superclass) {
  class C extends superclass {
    constructor() {
      return Object.create(null);
    }
  }
  var boundF = Function.prototype.bind.call(C, null);
  return Object.getPrototypeOf(boundF) === Object.getPrototypeOf(C);
}
return correctProtoBound(function(){})
  &amp;&amp; correctProtoBound(Array)
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
###classes
          
```
function(){
              <div class="code">function correctProtoBound(proto) {
  class C {}
  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(C, proto);
  }
  else {
    C.__proto__ = proto;
  }
  var boundF = Function.prototype.bind.call(C, null);
  return Object.getPrototypeOf(boundF) === proto;
}
return correctProtoBound(Function.prototype)
  &amp;&amp; correctProtoBound({})
  &amp;&amp; correctProtoBound(null);</div>}
```
###subclasses
          
```
function(){
              <div class="code">function correctProtoBound(superclass) {
  class C extends superclass {
    constructor() {
      return Object.create(null);
    }
  }
  var boundF = Function.prototype.bind.call(C, null);
  return Object.getPrototypeOf(boundF) === Object.getPrototypeOf(C);
}
return correctProtoBound(function(){})
  &amp;&amp; correctProtoBound(Array)
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
###classes
          
```
function(){
              <div class="code">function correctProtoBound(proto) {
  class C {}
  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(C, proto);
  }
  else {
    C.__proto__ = proto;
  }
  var boundF = Function.prototype.bind.call(C, null);
  return Object.getPrototypeOf(boundF) === proto;
}
return correctProtoBound(Function.prototype)
  &amp;&amp; correctProtoBound({})
  &amp;&amp; correctProtoBound(null);</div>}
```
###subclasses
          
```
function(){
              <div class="code">function correctProtoBound(superclass) {
  class C extends superclass {
    constructor() {
      return Object.create(null);
    }
  }
  var boundF = Function.prototype.bind.call(C, null);
  return Object.getPrototypeOf(boundF) === Object.getPrototypeOf(C);
}
return correctProtoBound(function(){})
  &amp;&amp; correctProtoBound(Array)
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
###classes
          
```
function(){
              <div class="code">function correctProtoBound(proto) {
  class C {}
  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(C, proto);
  }
  else {
    C.__proto__ = proto;
  }
  var boundF = Function.prototype.bind.call(C, null);
  return Object.getPrototypeOf(boundF) === proto;
}
return correctProtoBound(Function.prototype)
  &amp;&amp; correctProtoBound({})
  &amp;&amp; correctProtoBound(null);</div>}
```
###subclasses
          
```
function(){
              <div class="code">function correctProtoBound(superclass) {
  class C extends superclass {
    constructor() {
      return Object.create(null);
    }
  }
  var boundF = Function.prototype.bind.call(C, null);
  return Object.getPrototypeOf(boundF) === Object.getPrototypeOf(C);
}
return correctProtoBound(function(){})
  &amp;&amp; correctProtoBound(Array)
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
###classes
          
```
function(){
              <div class="code">function correctProtoBound(proto) {
  class C {}
  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(C, proto);
  }
  else {
    C.__proto__ = proto;
  }
  var boundF = Function.prototype.bind.call(C, null);
  return Object.getPrototypeOf(boundF) === proto;
}
return correctProtoBound(Function.prototype)
  &amp;&amp; correctProtoBound({})
  &amp;&amp; correctProtoBound(null);</div>}
```
###subclasses
          
```
function(){
              <div class="code">function correctProtoBound(superclass) {
  class C extends superclass {
    constructor() {
      return Object.create(null);
    }
  }
  var boundF = Function.prototype.bind.call(C, null);
  return Object.getPrototypeOf(boundF) === Object.getPrototypeOf(C);
}
return correctProtoBound(function(){})
  &amp;&amp; correctProtoBound(Array)
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
###classes
          
```
function(){
              <div class="code">function correctProtoBound(proto) {
  class C {}
  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(C, proto);
  }
  else {
    C.__proto__ = proto;
  }
  var boundF = Function.prototype.bind.call(C, null);
  return Object.getPrototypeOf(boundF) === proto;
}
return correctProtoBound(Function.prototype)
  &amp;&amp; correctProtoBound({})
  &amp;&amp; correctProtoBound(null);</div>}
```
###subclasses
          
```
function(){
              <div class="code">function correctProtoBound(superclass) {
  class C extends superclass {
    constructor() {
      return Object.create(null);
    }
  }
  var boundF = Function.prototype.bind.call(C, null);
  return Object.getPrototypeOf(boundF) === Object.getPrototypeOf(C);
}
return correctProtoBound(function(){})
  &amp;&amp; correctProtoBound(Array)
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
###classes
          
```
function(){
              <div class="code">function correctProtoBound(proto) {
  class C {}
  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(C, proto);
  }
  else {
    C.__proto__ = proto;
  }
  var boundF = Function.prototype.bind.call(C, null);
  return Object.getPrototypeOf(boundF) === proto;
}
return correctProtoBound(Function.prototype)
  &amp;&amp; correctProtoBound({})
  &amp;&amp; correctProtoBound(null);</div>}
```
###subclasses
          
```
function(){
              <div class="code">function correctProtoBound(superclass) {
  class C extends superclass {
    constructor() {
      return Object.create(null);
    }
  }
  var boundF = Function.prototype.bind.call(C, null);
  return Object.getPrototypeOf(boundF) === Object.getPrototypeOf(C);
}
return correctProtoBound(function(){})
  &amp;&amp; correctProtoBound(Array)
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
###classes
          
```
function(){
              <div class="code">function correctProtoBound(proto) {
  class C {}
  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(C, proto);
  }
  else {
    C.__proto__ = proto;
  }
  var boundF = Function.prototype.bind.call(C, null);
  return Object.getPrototypeOf(boundF) === proto;
}
return correctProtoBound(Function.prototype)
  &amp;&amp; correctProtoBound({})
  &amp;&amp; correctProtoBound(null);</div>}
```
###subclasses
          
```
function(){
              <div class="code">function correctProtoBound(superclass) {
  class C extends superclass {
    constructor() {
      return Object.create(null);
    }
  }
  var boundF = Function.prototype.bind.call(C, null);
  return Object.getPrototypeOf(boundF) === Object.getPrototypeOf(C);
}
return correctProtoBound(function(){})
  &amp;&amp; correctProtoBound(Array)
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
###classes
          
```
function(){
              <div class="code">function correctProtoBound(proto) {
  class C {}
  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(C, proto);
  }
  else {
    C.__proto__ = proto;
  }
  var boundF = Function.prototype.bind.call(C, null);
  return Object.getPrototypeOf(boundF) === proto;
}
return correctProtoBound(Function.prototype)
  &amp;&amp; correctProtoBound({})
  &amp;&amp; correctProtoBound(null);</div>}
```
###subclasses
          
```
function(){
              <div class="code">function correctProtoBound(superclass) {
  class C extends superclass {
    constructor() {
      return Object.create(null);
    }
  }
  var boundF = Function.prototype.bind.call(C, null);
  return Object.getPrototypeOf(boundF) === Object.getPrototypeOf(C);
}
return correctProtoBound(function(){})
  &amp;&amp; correctProtoBound(Array)
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
###classes
          
```
function(){
              <div class="code">function correctProtoBound(proto) {
  class C {}
  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(C, proto);
  }
  else {
    C.__proto__ = proto;
  }
  var boundF = Function.prototype.bind.call(C, null);
  return Object.getPrototypeOf(boundF) === proto;
}
return correctProtoBound(Function.prototype)
  &amp;&amp; correctProtoBound({})
  &amp;&amp; correctProtoBound(null);</div>}
```
###subclasses
          
```
function(){
              <div class="code">function correctProtoBound(superclass) {
  class C extends superclass {
    constructor() {
      return Object.create(null);
    }
  }
  var boundF = Function.prototype.bind.call(C, null);
  return Object.getPrototypeOf(boundF) === Object.getPrototypeOf(C);
}
return correctProtoBound(function(){})
  &amp;&amp; correctProtoBound(Array)
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
###classes
          
```
function(){
              <div class="code">function correctProtoBound(proto) {
  class C {}
  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(C, proto);
  }
  else {
    C.__proto__ = proto;
  }
  var boundF = Function.prototype.bind.call(C, null);
  return Object.getPrototypeOf(boundF) === proto;
}
return correctProtoBound(Function.prototype)
  &amp;&amp; correctProtoBound({})
  &amp;&amp; correctProtoBound(null);</div>}
```
###subclasses
          
```
function(){
              <div class="code">function correctProtoBound(superclass) {
  class C extends superclass {
    constructor() {
      return Object.create(null);
    }
  }
  var boundF = Function.prototype.bind.call(C, null);
  return Object.getPrototypeOf(boundF) === Object.getPrototypeOf(C);
}
return correctProtoBound(function(){})
  &amp;&amp; correctProtoBound(Array)
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
###classes
          
```
function(){
              <div class="code">function correctProtoBound(proto) {
  class C {}
  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(C, proto);
  }
  else {
    C.__proto__ = proto;
  }
  var boundF = Function.prototype.bind.call(C, null);
  return Object.getPrototypeOf(boundF) === proto;
}
return correctProtoBound(Function.prototype)
  &amp;&amp; correctProtoBound({})
  &amp;&amp; correctProtoBound(null);</div>}
```
###subclasses
          
```
function(){
              <div class="code">function correctProtoBound(superclass) {
  class C extends superclass {
    constructor() {
      return Object.create(null);
    }
  }
  var boundF = Function.prototype.bind.call(C, null);
  return Object.getPrototypeOf(boundF) === Object.getPrototypeOf(C);
}
return correctProtoBound(function(){})
  &amp;&amp; correctProtoBound(Array)
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
###classes
          
```
function(){
              <div class="code">function correctProtoBound(proto) {
  class C {}
  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(C, proto);
  }
  else {
    C.__proto__ = proto;
  }
  var boundF = Function.prototype.bind.call(C, null);
  return Object.getPrototypeOf(boundF) === proto;
}
return correctProtoBound(Function.prototype)
  &amp;&amp; correctProtoBound({})
  &amp;&amp; correctProtoBound(null);</div>}
```
###subclasses
          
```
function(){
              <div class="code">function correctProtoBound(superclass) {
  class C extends superclass {
    constructor() {
      return Object.create(null);
    }
  }
  var boundF = Function.prototype.bind.call(C, null);
  return Object.getPrototypeOf(boundF) === Object.getPrototypeOf(C);
}
return correctProtoBound(function(){})
  &amp;&amp; correctProtoBound(Array)
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
###classes
          
```
function(){
              <div class="code">function correctProtoBound(proto) {
  class C {}
  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(C, proto);
  }
  else {
    C.__proto__ = proto;
  }
  var boundF = Function.prototype.bind.call(C, null);
  return Object.getPrototypeOf(boundF) === proto;
}
return correctProtoBound(Function.prototype)
  &amp;&amp; correctProtoBound({})
  &amp;&amp; correctProtoBound(null);</div>}
```
###subclasses
          
```
function(){
              <div class="code">function correctProtoBound(superclass) {
  class C extends superclass {
    constructor() {
      return Object.create(null);
    }
  }
  var boundF = Function.prototype.bind.call(C, null);
  return Object.getPrototypeOf(boundF) === Object.getPrototypeOf(C);
}
return correctProtoBound(function(){})
  &amp;&amp; correctProtoBound(Array)
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
###classes
          
```
function(){
              <div class="code">function correctProtoBound(proto) {
  class C {}
  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(C, proto);
  }
  else {
    C.__proto__ = proto;
  }
  var boundF = Function.prototype.bind.call(C, null);
  return Object.getPrototypeOf(boundF) === proto;
}
return correctProtoBound(Function.prototype)
  &amp;&amp; correctProtoBound({})
  &amp;&amp; correctProtoBound(null);</div>}
```
###subclasses
          
```
function(){
              <div class="code">function correctProtoBound(superclass) {
  class C extends superclass {
    constructor() {
      return Object.create(null);
    }
  }
  var boundF = Function.prototype.bind.call(C, null);
  return Object.getPrototypeOf(boundF) === Object.getPrototypeOf(C);
}
return correctProtoBound(function(){})
  &amp;&amp; correctProtoBound(Array)
  &amp;&amp; correctProtoBound(null);</div>}
```
