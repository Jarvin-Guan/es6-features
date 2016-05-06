###basic functionality
          
```
function(){
              <div class="code">var obj = {};
var set = new Set();

set.add(123);
set.add(123);

return set.has(123);</div>}
```
###constructor arguments
          
```
function(){
              <div class="code">var obj1 = {};
var obj2 = {};
var set = new Set([obj1, obj2]);

return set.has(obj1) &amp;&amp; set.has(obj2);</div>}
```
###constructor requires new
          
```
function(){
              <div class="code">new Set();
try {
  Set();
  return false;
} catch(e) {
  return true;
}</div>}
```
###constructor accepts null
          
```
function(){
              <div class="code">new Set(null);
return true;</div>}
```
###constructor invokes add
          
```
function(){
              <div class="code">var passed = false;
var _add = Set.prototype.add;

Set.prototype.add = function(v) {
  passed = true;
};

new Set([1]);
Set.prototype.add = _add;

return passed;</div>}
```
###Set.prototype.add returns this
          
```
function(){
              <div class="code">var set = new Set();
return set.add(0) === set;</div>}
```
###-0 key converts to +0
          
```
function(){
              <div class="code">var set = new Set();
set.add(-0);
var k;
set.forEach(function (value) {
  k = 1 / value;
});
return k === Infinity &amp;&amp; set.has(+0);</div>}
```
###Set.prototype.size
          
```
function(){
              <div class="code">var obj = {};
var set = new Set();

set.add(123);
set.add(123);
set.add(456);

return set.size === 2;</div>}
```
###Set.prototype.delete
          
```
function(){
              <div class="code">return typeof Set.prototype.delete === &quot;function&quot;;</div>}
```
###Set.prototype.clear
          
```
function(){
              <div class="code">return typeof Set.prototype.clear === &quot;function&quot;;</div>}
```
###Set.prototype.forEach
          
```
function(){
              <div class="code">return typeof Set.prototype.forEach === &quot;function&quot;;</div>}
```
###Set.prototype.keys
          
```
function(){
              <div class="code">return typeof Set.prototype.keys === &quot;function&quot;;</div>}
```
###Set.prototype.values
          
```
function(){
              <div class="code">return typeof Set.prototype.values === &quot;function&quot;;</div>}
```
###Set.prototype.entries
          
```
function(){
              <div class="code">return typeof Set.prototype.entries === &quot;function&quot;;</div>}
```
###Set.prototype[Symbol.iterator]
          
```
function(){
              <div class="code">return typeof Set.prototype[Symbol.iterator] === &quot;function&quot;;</div>}
```
###Set.prototype isn't an instance
          
```
function(){
              <div class="code">new Set();
var obj = {};
try {
  Set.prototype.has(obj);
}
catch(e) {
  return true;
}</div>}
```
###Set iterator prototype chain
          
```
function(){
              <div class="code">// Iterator instance
var iterator = new Set()[Symbol.iterator]();
// %SetIteratorPrototype%
var proto1 = Object.getPrototypeOf(iterator);
// %IteratorPrototype%
var proto2 = Object.getPrototypeOf(proto1);

return proto2.hasOwnProperty(Symbol.iterator) &amp;&amp;
  !proto1    .hasOwnProperty(Symbol.iterator) &amp;&amp;
  !iterator  .hasOwnProperty(Symbol.iterator) &amp;&amp;
  iterator[Symbol.iterator]() === iterator;</div>}
```
###basic functionality
          
```
function(){
              <div class="code">var obj = {};
var set = new Set();

set.add(123);
set.add(123);

return set.has(123);</div>}
```
###constructor arguments
          
```
function(){
              <div class="code">var obj1 = {};
var obj2 = {};
var set = new Set([obj1, obj2]);

return set.has(obj1) &amp;&amp; set.has(obj2);</div>}
```
###constructor requires new
          
```
function(){
              <div class="code">new Set();
try {
  Set();
  return false;
} catch(e) {
  return true;
}</div>}
```
###constructor accepts null
          
```
function(){
              <div class="code">new Set(null);
return true;</div>}
```
###constructor invokes add
          
```
function(){
              <div class="code">var passed = false;
var _add = Set.prototype.add;

Set.prototype.add = function(v) {
  passed = true;
};

new Set([1]);
Set.prototype.add = _add;

return passed;</div>}
```
###Set.prototype.add returns this
          
```
function(){
              <div class="code">var set = new Set();
return set.add(0) === set;</div>}
```
###-0 key converts to +0
          
```
function(){
              <div class="code">var set = new Set();
set.add(-0);
var k;
set.forEach(function (value) {
  k = 1 / value;
});
return k === Infinity &amp;&amp; set.has(+0);</div>}
```
###Set.prototype.size
          
```
function(){
              <div class="code">var obj = {};
var set = new Set();

set.add(123);
set.add(123);
set.add(456);

return set.size === 2;</div>}
```
###Set.prototype.delete
          
```
function(){
              <div class="code">return typeof Set.prototype.delete === &quot;function&quot;;</div>}
```
###Set.prototype.clear
          
```
function(){
              <div class="code">return typeof Set.prototype.clear === &quot;function&quot;;</div>}
```
###Set.prototype.forEach
          
```
function(){
              <div class="code">return typeof Set.prototype.forEach === &quot;function&quot;;</div>}
```
###Set.prototype.keys
          
```
function(){
              <div class="code">return typeof Set.prototype.keys === &quot;function&quot;;</div>}
```
###Set.prototype.values
          
```
function(){
              <div class="code">return typeof Set.prototype.values === &quot;function&quot;;</div>}
```
###Set.prototype.entries
          
```
function(){
              <div class="code">return typeof Set.prototype.entries === &quot;function&quot;;</div>}
```
###Set.prototype[Symbol.iterator]
          
```
function(){
              <div class="code">return typeof Set.prototype[Symbol.iterator] === &quot;function&quot;;</div>}
```
###Set.prototype isn't an instance
          
```
function(){
              <div class="code">new Set();
var obj = {};
try {
  Set.prototype.has(obj);
}
catch(e) {
  return true;
}</div>}
```
###Set iterator prototype chain
          
```
function(){
              <div class="code">// Iterator instance
var iterator = new Set()[Symbol.iterator]();
// %SetIteratorPrototype%
var proto1 = Object.getPrototypeOf(iterator);
// %IteratorPrototype%
var proto2 = Object.getPrototypeOf(proto1);

return proto2.hasOwnProperty(Symbol.iterator) &amp;&amp;
  !proto1    .hasOwnProperty(Symbol.iterator) &amp;&amp;
  !iterator  .hasOwnProperty(Symbol.iterator) &amp;&amp;
  iterator[Symbol.iterator]() === iterator;</div>}
```
###basic functionality
          
```
function(){
              <div class="code">var obj = {};
var set = new Set();

set.add(123);
set.add(123);

return set.has(123);</div>}
```
###constructor arguments
          
```
function(){
              <div class="code">var obj1 = {};
var obj2 = {};
var set = new Set([obj1, obj2]);

return set.has(obj1) &amp;&amp; set.has(obj2);</div>}
```
###constructor requires new
          
```
function(){
              <div class="code">new Set();
try {
  Set();
  return false;
} catch(e) {
  return true;
}</div>}
```
###constructor accepts null
          
```
function(){
              <div class="code">new Set(null);
return true;</div>}
```
###constructor invokes add
          
```
function(){
              <div class="code">var passed = false;
var _add = Set.prototype.add;

Set.prototype.add = function(v) {
  passed = true;
};

new Set([1]);
Set.prototype.add = _add;

return passed;</div>}
```
###Set.prototype.add returns this
          
```
function(){
              <div class="code">var set = new Set();
return set.add(0) === set;</div>}
```
###-0 key converts to +0
          
```
function(){
              <div class="code">var set = new Set();
set.add(-0);
var k;
set.forEach(function (value) {
  k = 1 / value;
});
return k === Infinity &amp;&amp; set.has(+0);</div>}
```
###Set.prototype.size
          
```
function(){
              <div class="code">var obj = {};
var set = new Set();

set.add(123);
set.add(123);
set.add(456);

return set.size === 2;</div>}
```
###Set.prototype.delete
          
```
function(){
              <div class="code">return typeof Set.prototype.delete === &quot;function&quot;;</div>}
```
###Set.prototype.clear
          
```
function(){
              <div class="code">return typeof Set.prototype.clear === &quot;function&quot;;</div>}
```
###Set.prototype.forEach
          
```
function(){
              <div class="code">return typeof Set.prototype.forEach === &quot;function&quot;;</div>}
```
###Set.prototype.keys
          
```
function(){
              <div class="code">return typeof Set.prototype.keys === &quot;function&quot;;</div>}
```
###Set.prototype.values
          
```
function(){
              <div class="code">return typeof Set.prototype.values === &quot;function&quot;;</div>}
```
###Set.prototype.entries
          
```
function(){
              <div class="code">return typeof Set.prototype.entries === &quot;function&quot;;</div>}
```
###Set.prototype[Symbol.iterator]
          
```
function(){
              <div class="code">return typeof Set.prototype[Symbol.iterator] === &quot;function&quot;;</div>}
```
###Set.prototype isn't an instance
          
```
function(){
              <div class="code">new Set();
var obj = {};
try {
  Set.prototype.has(obj);
}
catch(e) {
  return true;
}</div>}
```
###Set iterator prototype chain
          
```
function(){
              <div class="code">// Iterator instance
var iterator = new Set()[Symbol.iterator]();
// %SetIteratorPrototype%
var proto1 = Object.getPrototypeOf(iterator);
// %IteratorPrototype%
var proto2 = Object.getPrototypeOf(proto1);

return proto2.hasOwnProperty(Symbol.iterator) &amp;&amp;
  !proto1    .hasOwnProperty(Symbol.iterator) &amp;&amp;
  !iterator  .hasOwnProperty(Symbol.iterator) &amp;&amp;
  iterator[Symbol.iterator]() === iterator;</div>}
```
###basic functionality
          
```
function(){
              <div class="code">var obj = {};
var set = new Set();

set.add(123);
set.add(123);

return set.has(123);</div>}
```
###constructor arguments
          
```
function(){
              <div class="code">var obj1 = {};
var obj2 = {};
var set = new Set([obj1, obj2]);

return set.has(obj1) &amp;&amp; set.has(obj2);</div>}
```
###constructor requires new
          
```
function(){
              <div class="code">new Set();
try {
  Set();
  return false;
} catch(e) {
  return true;
}</div>}
```
###constructor accepts null
          
```
function(){
              <div class="code">new Set(null);
return true;</div>}
```
###constructor invokes add
          
```
function(){
              <div class="code">var passed = false;
var _add = Set.prototype.add;

Set.prototype.add = function(v) {
  passed = true;
};

new Set([1]);
Set.prototype.add = _add;

return passed;</div>}
```
###Set.prototype.add returns this
          
```
function(){
              <div class="code">var set = new Set();
return set.add(0) === set;</div>}
```
###-0 key converts to +0
          
```
function(){
              <div class="code">var set = new Set();
set.add(-0);
var k;
set.forEach(function (value) {
  k = 1 / value;
});
return k === Infinity &amp;&amp; set.has(+0);</div>}
```
###Set.prototype.size
          
```
function(){
              <div class="code">var obj = {};
var set = new Set();

set.add(123);
set.add(123);
set.add(456);

return set.size === 2;</div>}
```
###Set.prototype.delete
          
```
function(){
              <div class="code">return typeof Set.prototype.delete === &quot;function&quot;;</div>}
```
###Set.prototype.clear
          
```
function(){
              <div class="code">return typeof Set.prototype.clear === &quot;function&quot;;</div>}
```
###Set.prototype.forEach
          
```
function(){
              <div class="code">return typeof Set.prototype.forEach === &quot;function&quot;;</div>}
```
###Set.prototype.keys
          
```
function(){
              <div class="code">return typeof Set.prototype.keys === &quot;function&quot;;</div>}
```
###Set.prototype.values
          
```
function(){
              <div class="code">return typeof Set.prototype.values === &quot;function&quot;;</div>}
```
###Set.prototype.entries
          
```
function(){
              <div class="code">return typeof Set.prototype.entries === &quot;function&quot;;</div>}
```
###Set.prototype[Symbol.iterator]
          
```
function(){
              <div class="code">return typeof Set.prototype[Symbol.iterator] === &quot;function&quot;;</div>}
```
###Set.prototype isn't an instance
          
```
function(){
              <div class="code">new Set();
var obj = {};
try {
  Set.prototype.has(obj);
}
catch(e) {
  return true;
}</div>}
```
###Set iterator prototype chain
          
```
function(){
              <div class="code">// Iterator instance
var iterator = new Set()[Symbol.iterator]();
// %SetIteratorPrototype%
var proto1 = Object.getPrototypeOf(iterator);
// %IteratorPrototype%
var proto2 = Object.getPrototypeOf(proto1);

return proto2.hasOwnProperty(Symbol.iterator) &amp;&amp;
  !proto1    .hasOwnProperty(Symbol.iterator) &amp;&amp;
  !iterator  .hasOwnProperty(Symbol.iterator) &amp;&amp;
  iterator[Symbol.iterator]() === iterator;</div>}
```
###basic functionality
          
```
function(){
              <div class="code">var obj = {};
var set = new Set();

set.add(123);
set.add(123);

return set.has(123);</div>}
```
###constructor arguments
          
```
function(){
              <div class="code">var obj1 = {};
var obj2 = {};
var set = new Set([obj1, obj2]);

return set.has(obj1) &amp;&amp; set.has(obj2);</div>}
```
###constructor requires new
          
```
function(){
              <div class="code">new Set();
try {
  Set();
  return false;
} catch(e) {
  return true;
}</div>}
```
###constructor accepts null
          
```
function(){
              <div class="code">new Set(null);
return true;</div>}
```
###constructor invokes add
          
```
function(){
              <div class="code">var passed = false;
var _add = Set.prototype.add;

Set.prototype.add = function(v) {
  passed = true;
};

new Set([1]);
Set.prototype.add = _add;

return passed;</div>}
```
###Set.prototype.add returns this
          
```
function(){
              <div class="code">var set = new Set();
return set.add(0) === set;</div>}
```
###-0 key converts to +0
          
```
function(){
              <div class="code">var set = new Set();
set.add(-0);
var k;
set.forEach(function (value) {
  k = 1 / value;
});
return k === Infinity &amp;&amp; set.has(+0);</div>}
```
###Set.prototype.size
          
```
function(){
              <div class="code">var obj = {};
var set = new Set();

set.add(123);
set.add(123);
set.add(456);

return set.size === 2;</div>}
```
###Set.prototype.delete
          
```
function(){
              <div class="code">return typeof Set.prototype.delete === &quot;function&quot;;</div>}
```
###Set.prototype.clear
          
```
function(){
              <div class="code">return typeof Set.prototype.clear === &quot;function&quot;;</div>}
```
###Set.prototype.forEach
          
```
function(){
              <div class="code">return typeof Set.prototype.forEach === &quot;function&quot;;</div>}
```
###Set.prototype.keys
          
```
function(){
              <div class="code">return typeof Set.prototype.keys === &quot;function&quot;;</div>}
```
###Set.prototype.values
          
```
function(){
              <div class="code">return typeof Set.prototype.values === &quot;function&quot;;</div>}
```
###Set.prototype.entries
          
```
function(){
              <div class="code">return typeof Set.prototype.entries === &quot;function&quot;;</div>}
```
###Set.prototype[Symbol.iterator]
          
```
function(){
              <div class="code">return typeof Set.prototype[Symbol.iterator] === &quot;function&quot;;</div>}
```
###Set.prototype isn't an instance
          
```
function(){
              <div class="code">new Set();
var obj = {};
try {
  Set.prototype.has(obj);
}
catch(e) {
  return true;
}</div>}
```
###Set iterator prototype chain
          
```
function(){
              <div class="code">// Iterator instance
var iterator = new Set()[Symbol.iterator]();
// %SetIteratorPrototype%
var proto1 = Object.getPrototypeOf(iterator);
// %IteratorPrototype%
var proto2 = Object.getPrototypeOf(proto1);

return proto2.hasOwnProperty(Symbol.iterator) &amp;&amp;
  !proto1    .hasOwnProperty(Symbol.iterator) &amp;&amp;
  !iterator  .hasOwnProperty(Symbol.iterator) &amp;&amp;
  iterator[Symbol.iterator]() === iterator;</div>}
```
###basic functionality
          
```
function(){
              <div class="code">var obj = {};
var set = new Set();

set.add(123);
set.add(123);

return set.has(123);</div>}
```
###constructor arguments
          
```
function(){
              <div class="code">var obj1 = {};
var obj2 = {};
var set = new Set([obj1, obj2]);

return set.has(obj1) &amp;&amp; set.has(obj2);</div>}
```
###constructor requires new
          
```
function(){
              <div class="code">new Set();
try {
  Set();
  return false;
} catch(e) {
  return true;
}</div>}
```
###constructor accepts null
          
```
function(){
              <div class="code">new Set(null);
return true;</div>}
```
###constructor invokes add
          
```
function(){
              <div class="code">var passed = false;
var _add = Set.prototype.add;

Set.prototype.add = function(v) {
  passed = true;
};

new Set([1]);
Set.prototype.add = _add;

return passed;</div>}
```
###Set.prototype.add returns this
          
```
function(){
              <div class="code">var set = new Set();
return set.add(0) === set;</div>}
```
###-0 key converts to +0
          
```
function(){
              <div class="code">var set = new Set();
set.add(-0);
var k;
set.forEach(function (value) {
  k = 1 / value;
});
return k === Infinity &amp;&amp; set.has(+0);</div>}
```
###Set.prototype.size
          
```
function(){
              <div class="code">var obj = {};
var set = new Set();

set.add(123);
set.add(123);
set.add(456);

return set.size === 2;</div>}
```
###Set.prototype.delete
          
```
function(){
              <div class="code">return typeof Set.prototype.delete === &quot;function&quot;;</div>}
```
###Set.prototype.clear
          
```
function(){
              <div class="code">return typeof Set.prototype.clear === &quot;function&quot;;</div>}
```
###Set.prototype.forEach
          
```
function(){
              <div class="code">return typeof Set.prototype.forEach === &quot;function&quot;;</div>}
```
###Set.prototype.keys
          
```
function(){
              <div class="code">return typeof Set.prototype.keys === &quot;function&quot;;</div>}
```
###Set.prototype.values
          
```
function(){
              <div class="code">return typeof Set.prototype.values === &quot;function&quot;;</div>}
```
###Set.prototype.entries
          
```
function(){
              <div class="code">return typeof Set.prototype.entries === &quot;function&quot;;</div>}
```
###Set.prototype[Symbol.iterator]
          
```
function(){
              <div class="code">return typeof Set.prototype[Symbol.iterator] === &quot;function&quot;;</div>}
```
###Set.prototype isn't an instance
          
```
function(){
              <div class="code">new Set();
var obj = {};
try {
  Set.prototype.has(obj);
}
catch(e) {
  return true;
}</div>}
```
###Set iterator prototype chain
          
```
function(){
              <div class="code">// Iterator instance
var iterator = new Set()[Symbol.iterator]();
// %SetIteratorPrototype%
var proto1 = Object.getPrototypeOf(iterator);
// %IteratorPrototype%
var proto2 = Object.getPrototypeOf(proto1);

return proto2.hasOwnProperty(Symbol.iterator) &amp;&amp;
  !proto1    .hasOwnProperty(Symbol.iterator) &amp;&amp;
  !iterator  .hasOwnProperty(Symbol.iterator) &amp;&amp;
  iterator[Symbol.iterator]() === iterator;</div>}
```
###basic functionality
          
```
function(){
              <div class="code">var obj = {};
var set = new Set();

set.add(123);
set.add(123);

return set.has(123);</div>}
```
###constructor arguments
          
```
function(){
              <div class="code">var obj1 = {};
var obj2 = {};
var set = new Set([obj1, obj2]);

return set.has(obj1) &amp;&amp; set.has(obj2);</div>}
```
###constructor requires new
          
```
function(){
              <div class="code">new Set();
try {
  Set();
  return false;
} catch(e) {
  return true;
}</div>}
```
###constructor accepts null
          
```
function(){
              <div class="code">new Set(null);
return true;</div>}
```
###constructor invokes add
          
```
function(){
              <div class="code">var passed = false;
var _add = Set.prototype.add;

Set.prototype.add = function(v) {
  passed = true;
};

new Set([1]);
Set.prototype.add = _add;

return passed;</div>}
```
###Set.prototype.add returns this
          
```
function(){
              <div class="code">var set = new Set();
return set.add(0) === set;</div>}
```
###-0 key converts to +0
          
```
function(){
              <div class="code">var set = new Set();
set.add(-0);
var k;
set.forEach(function (value) {
  k = 1 / value;
});
return k === Infinity &amp;&amp; set.has(+0);</div>}
```
###Set.prototype.size
          
```
function(){
              <div class="code">var obj = {};
var set = new Set();

set.add(123);
set.add(123);
set.add(456);

return set.size === 2;</div>}
```
###Set.prototype.delete
          
```
function(){
              <div class="code">return typeof Set.prototype.delete === &quot;function&quot;;</div>}
```
###Set.prototype.clear
          
```
function(){
              <div class="code">return typeof Set.prototype.clear === &quot;function&quot;;</div>}
```
###Set.prototype.forEach
          
```
function(){
              <div class="code">return typeof Set.prototype.forEach === &quot;function&quot;;</div>}
```
###Set.prototype.keys
          
```
function(){
              <div class="code">return typeof Set.prototype.keys === &quot;function&quot;;</div>}
```
###Set.prototype.values
          
```
function(){
              <div class="code">return typeof Set.prototype.values === &quot;function&quot;;</div>}
```
###Set.prototype.entries
          
```
function(){
              <div class="code">return typeof Set.prototype.entries === &quot;function&quot;;</div>}
```
###Set.prototype[Symbol.iterator]
          
```
function(){
              <div class="code">return typeof Set.prototype[Symbol.iterator] === &quot;function&quot;;</div>}
```
###Set.prototype isn't an instance
          
```
function(){
              <div class="code">new Set();
var obj = {};
try {
  Set.prototype.has(obj);
}
catch(e) {
  return true;
}</div>}
```
###Set iterator prototype chain
          
```
function(){
              <div class="code">// Iterator instance
var iterator = new Set()[Symbol.iterator]();
// %SetIteratorPrototype%
var proto1 = Object.getPrototypeOf(iterator);
// %IteratorPrototype%
var proto2 = Object.getPrototypeOf(proto1);

return proto2.hasOwnProperty(Symbol.iterator) &amp;&amp;
  !proto1    .hasOwnProperty(Symbol.iterator) &amp;&amp;
  !iterator  .hasOwnProperty(Symbol.iterator) &amp;&amp;
  iterator[Symbol.iterator]() === iterator;</div>}
```
###basic functionality
          
```
function(){
              <div class="code">var obj = {};
var set = new Set();

set.add(123);
set.add(123);

return set.has(123);</div>}
```
###constructor arguments
          
```
function(){
              <div class="code">var obj1 = {};
var obj2 = {};
var set = new Set([obj1, obj2]);

return set.has(obj1) &amp;&amp; set.has(obj2);</div>}
```
###constructor requires new
          
```
function(){
              <div class="code">new Set();
try {
  Set();
  return false;
} catch(e) {
  return true;
}</div>}
```
###constructor accepts null
          
```
function(){
              <div class="code">new Set(null);
return true;</div>}
```
###constructor invokes add
          
```
function(){
              <div class="code">var passed = false;
var _add = Set.prototype.add;

Set.prototype.add = function(v) {
  passed = true;
};

new Set([1]);
Set.prototype.add = _add;

return passed;</div>}
```
###Set.prototype.add returns this
          
```
function(){
              <div class="code">var set = new Set();
return set.add(0) === set;</div>}
```
###-0 key converts to +0
          
```
function(){
              <div class="code">var set = new Set();
set.add(-0);
var k;
set.forEach(function (value) {
  k = 1 / value;
});
return k === Infinity &amp;&amp; set.has(+0);</div>}
```
###Set.prototype.size
          
```
function(){
              <div class="code">var obj = {};
var set = new Set();

set.add(123);
set.add(123);
set.add(456);

return set.size === 2;</div>}
```
###Set.prototype.delete
          
```
function(){
              <div class="code">return typeof Set.prototype.delete === &quot;function&quot;;</div>}
```
###Set.prototype.clear
          
```
function(){
              <div class="code">return typeof Set.prototype.clear === &quot;function&quot;;</div>}
```
###Set.prototype.forEach
          
```
function(){
              <div class="code">return typeof Set.prototype.forEach === &quot;function&quot;;</div>}
```
###Set.prototype.keys
          
```
function(){
              <div class="code">return typeof Set.prototype.keys === &quot;function&quot;;</div>}
```
###Set.prototype.values
          
```
function(){
              <div class="code">return typeof Set.prototype.values === &quot;function&quot;;</div>}
```
###Set.prototype.entries
          
```
function(){
              <div class="code">return typeof Set.prototype.entries === &quot;function&quot;;</div>}
```
###Set.prototype[Symbol.iterator]
          
```
function(){
              <div class="code">return typeof Set.prototype[Symbol.iterator] === &quot;function&quot;;</div>}
```
###Set.prototype isn't an instance
          
```
function(){
              <div class="code">new Set();
var obj = {};
try {
  Set.prototype.has(obj);
}
catch(e) {
  return true;
}</div>}
```
###Set iterator prototype chain
          
```
function(){
              <div class="code">// Iterator instance
var iterator = new Set()[Symbol.iterator]();
// %SetIteratorPrototype%
var proto1 = Object.getPrototypeOf(iterator);
// %IteratorPrototype%
var proto2 = Object.getPrototypeOf(proto1);

return proto2.hasOwnProperty(Symbol.iterator) &amp;&amp;
  !proto1    .hasOwnProperty(Symbol.iterator) &amp;&amp;
  !iterator  .hasOwnProperty(Symbol.iterator) &amp;&amp;
  iterator[Symbol.iterator]() === iterator;</div>}
```
###basic functionality
          
```
function(){
              <div class="code">var obj = {};
var set = new Set();

set.add(123);
set.add(123);

return set.has(123);</div>}
```
###constructor arguments
          
```
function(){
              <div class="code">var obj1 = {};
var obj2 = {};
var set = new Set([obj1, obj2]);

return set.has(obj1) &amp;&amp; set.has(obj2);</div>}
```
###constructor requires new
          
```
function(){
              <div class="code">new Set();
try {
  Set();
  return false;
} catch(e) {
  return true;
}</div>}
```
###constructor accepts null
          
```
function(){
              <div class="code">new Set(null);
return true;</div>}
```
###constructor invokes add
          
```
function(){
              <div class="code">var passed = false;
var _add = Set.prototype.add;

Set.prototype.add = function(v) {
  passed = true;
};

new Set([1]);
Set.prototype.add = _add;

return passed;</div>}
```
###Set.prototype.add returns this
          
```
function(){
              <div class="code">var set = new Set();
return set.add(0) === set;</div>}
```
###-0 key converts to +0
          
```
function(){
              <div class="code">var set = new Set();
set.add(-0);
var k;
set.forEach(function (value) {
  k = 1 / value;
});
return k === Infinity &amp;&amp; set.has(+0);</div>}
```
###Set.prototype.size
          
```
function(){
              <div class="code">var obj = {};
var set = new Set();

set.add(123);
set.add(123);
set.add(456);

return set.size === 2;</div>}
```
###Set.prototype.delete
          
```
function(){
              <div class="code">return typeof Set.prototype.delete === &quot;function&quot;;</div>}
```
###Set.prototype.clear
          
```
function(){
              <div class="code">return typeof Set.prototype.clear === &quot;function&quot;;</div>}
```
###Set.prototype.forEach
          
```
function(){
              <div class="code">return typeof Set.prototype.forEach === &quot;function&quot;;</div>}
```
###Set.prototype.keys
          
```
function(){
              <div class="code">return typeof Set.prototype.keys === &quot;function&quot;;</div>}
```
###Set.prototype.values
          
```
function(){
              <div class="code">return typeof Set.prototype.values === &quot;function&quot;;</div>}
```
###Set.prototype.entries
          
```
function(){
              <div class="code">return typeof Set.prototype.entries === &quot;function&quot;;</div>}
```
###Set.prototype[Symbol.iterator]
          
```
function(){
              <div class="code">return typeof Set.prototype[Symbol.iterator] === &quot;function&quot;;</div>}
```
###Set.prototype isn't an instance
          
```
function(){
              <div class="code">new Set();
var obj = {};
try {
  Set.prototype.has(obj);
}
catch(e) {
  return true;
}</div>}
```
###Set iterator prototype chain
          
```
function(){
              <div class="code">// Iterator instance
var iterator = new Set()[Symbol.iterator]();
// %SetIteratorPrototype%
var proto1 = Object.getPrototypeOf(iterator);
// %IteratorPrototype%
var proto2 = Object.getPrototypeOf(proto1);

return proto2.hasOwnProperty(Symbol.iterator) &amp;&amp;
  !proto1    .hasOwnProperty(Symbol.iterator) &amp;&amp;
  !iterator  .hasOwnProperty(Symbol.iterator) &amp;&amp;
  iterator[Symbol.iterator]() === iterator;</div>}
```
###basic functionality
          
```
function(){
              <div class="code">var obj = {};
var set = new Set();

set.add(123);
set.add(123);

return set.has(123);</div>}
```
###constructor arguments
          
```
function(){
              <div class="code">var obj1 = {};
var obj2 = {};
var set = new Set([obj1, obj2]);

return set.has(obj1) &amp;&amp; set.has(obj2);</div>}
```
###constructor requires new
          
```
function(){
              <div class="code">new Set();
try {
  Set();
  return false;
} catch(e) {
  return true;
}</div>}
```
###constructor accepts null
          
```
function(){
              <div class="code">new Set(null);
return true;</div>}
```
###constructor invokes add
          
```
function(){
              <div class="code">var passed = false;
var _add = Set.prototype.add;

Set.prototype.add = function(v) {
  passed = true;
};

new Set([1]);
Set.prototype.add = _add;

return passed;</div>}
```
###Set.prototype.add returns this
          
```
function(){
              <div class="code">var set = new Set();
return set.add(0) === set;</div>}
```
###-0 key converts to +0
          
```
function(){
              <div class="code">var set = new Set();
set.add(-0);
var k;
set.forEach(function (value) {
  k = 1 / value;
});
return k === Infinity &amp;&amp; set.has(+0);</div>}
```
###Set.prototype.size
          
```
function(){
              <div class="code">var obj = {};
var set = new Set();

set.add(123);
set.add(123);
set.add(456);

return set.size === 2;</div>}
```
###Set.prototype.delete
          
```
function(){
              <div class="code">return typeof Set.prototype.delete === &quot;function&quot;;</div>}
```
###Set.prototype.clear
          
```
function(){
              <div class="code">return typeof Set.prototype.clear === &quot;function&quot;;</div>}
```
###Set.prototype.forEach
          
```
function(){
              <div class="code">return typeof Set.prototype.forEach === &quot;function&quot;;</div>}
```
###Set.prototype.keys
          
```
function(){
              <div class="code">return typeof Set.prototype.keys === &quot;function&quot;;</div>}
```
###Set.prototype.values
          
```
function(){
              <div class="code">return typeof Set.prototype.values === &quot;function&quot;;</div>}
```
###Set.prototype.entries
          
```
function(){
              <div class="code">return typeof Set.prototype.entries === &quot;function&quot;;</div>}
```
###Set.prototype[Symbol.iterator]
          
```
function(){
              <div class="code">return typeof Set.prototype[Symbol.iterator] === &quot;function&quot;;</div>}
```
###Set.prototype isn't an instance
          
```
function(){
              <div class="code">new Set();
var obj = {};
try {
  Set.prototype.has(obj);
}
catch(e) {
  return true;
}</div>}
```
###Set iterator prototype chain
          
```
function(){
              <div class="code">// Iterator instance
var iterator = new Set()[Symbol.iterator]();
// %SetIteratorPrototype%
var proto1 = Object.getPrototypeOf(iterator);
// %IteratorPrototype%
var proto2 = Object.getPrototypeOf(proto1);

return proto2.hasOwnProperty(Symbol.iterator) &amp;&amp;
  !proto1    .hasOwnProperty(Symbol.iterator) &amp;&amp;
  !iterator  .hasOwnProperty(Symbol.iterator) &amp;&amp;
  iterator[Symbol.iterator]() === iterator;</div>}
```
###basic functionality
          
```
function(){
              <div class="code">var obj = {};
var set = new Set();

set.add(123);
set.add(123);

return set.has(123);</div>}
```
###constructor arguments
          
```
function(){
              <div class="code">var obj1 = {};
var obj2 = {};
var set = new Set([obj1, obj2]);

return set.has(obj1) &amp;&amp; set.has(obj2);</div>}
```
###constructor requires new
          
```
function(){
              <div class="code">new Set();
try {
  Set();
  return false;
} catch(e) {
  return true;
}</div>}
```
###constructor accepts null
          
```
function(){
              <div class="code">new Set(null);
return true;</div>}
```
###constructor invokes add
          
```
function(){
              <div class="code">var passed = false;
var _add = Set.prototype.add;

Set.prototype.add = function(v) {
  passed = true;
};

new Set([1]);
Set.prototype.add = _add;

return passed;</div>}
```
###Set.prototype.add returns this
          
```
function(){
              <div class="code">var set = new Set();
return set.add(0) === set;</div>}
```
###-0 key converts to +0
          
```
function(){
              <div class="code">var set = new Set();
set.add(-0);
var k;
set.forEach(function (value) {
  k = 1 / value;
});
return k === Infinity &amp;&amp; set.has(+0);</div>}
```
###Set.prototype.size
          
```
function(){
              <div class="code">var obj = {};
var set = new Set();

set.add(123);
set.add(123);
set.add(456);

return set.size === 2;</div>}
```
###Set.prototype.delete
          
```
function(){
              <div class="code">return typeof Set.prototype.delete === &quot;function&quot;;</div>}
```
###Set.prototype.clear
          
```
function(){
              <div class="code">return typeof Set.prototype.clear === &quot;function&quot;;</div>}
```
###Set.prototype.forEach
          
```
function(){
              <div class="code">return typeof Set.prototype.forEach === &quot;function&quot;;</div>}
```
###Set.prototype.keys
          
```
function(){
              <div class="code">return typeof Set.prototype.keys === &quot;function&quot;;</div>}
```
###Set.prototype.values
          
```
function(){
              <div class="code">return typeof Set.prototype.values === &quot;function&quot;;</div>}
```
###Set.prototype.entries
          
```
function(){
              <div class="code">return typeof Set.prototype.entries === &quot;function&quot;;</div>}
```
###Set.prototype[Symbol.iterator]
          
```
function(){
              <div class="code">return typeof Set.prototype[Symbol.iterator] === &quot;function&quot;;</div>}
```
###Set.prototype isn't an instance
          
```
function(){
              <div class="code">new Set();
var obj = {};
try {
  Set.prototype.has(obj);
}
catch(e) {
  return true;
}</div>}
```
###Set iterator prototype chain
          
```
function(){
              <div class="code">// Iterator instance
var iterator = new Set()[Symbol.iterator]();
// %SetIteratorPrototype%
var proto1 = Object.getPrototypeOf(iterator);
// %IteratorPrototype%
var proto2 = Object.getPrototypeOf(proto1);

return proto2.hasOwnProperty(Symbol.iterator) &amp;&amp;
  !proto1    .hasOwnProperty(Symbol.iterator) &amp;&amp;
  !iterator  .hasOwnProperty(Symbol.iterator) &amp;&amp;
  iterator[Symbol.iterator]() === iterator;</div>}
```
###basic functionality
          
```
function(){
              <div class="code">var obj = {};
var set = new Set();

set.add(123);
set.add(123);

return set.has(123);</div>}
```
###constructor arguments
          
```
function(){
              <div class="code">var obj1 = {};
var obj2 = {};
var set = new Set([obj1, obj2]);

return set.has(obj1) &amp;&amp; set.has(obj2);</div>}
```
###constructor requires new
          
```
function(){
              <div class="code">new Set();
try {
  Set();
  return false;
} catch(e) {
  return true;
}</div>}
```
###constructor accepts null
          
```
function(){
              <div class="code">new Set(null);
return true;</div>}
```
###constructor invokes add
          
```
function(){
              <div class="code">var passed = false;
var _add = Set.prototype.add;

Set.prototype.add = function(v) {
  passed = true;
};

new Set([1]);
Set.prototype.add = _add;

return passed;</div>}
```
###Set.prototype.add returns this
          
```
function(){
              <div class="code">var set = new Set();
return set.add(0) === set;</div>}
```
###-0 key converts to +0
          
```
function(){
              <div class="code">var set = new Set();
set.add(-0);
var k;
set.forEach(function (value) {
  k = 1 / value;
});
return k === Infinity &amp;&amp; set.has(+0);</div>}
```
###Set.prototype.size
          
```
function(){
              <div class="code">var obj = {};
var set = new Set();

set.add(123);
set.add(123);
set.add(456);

return set.size === 2;</div>}
```
###Set.prototype.delete
          
```
function(){
              <div class="code">return typeof Set.prototype.delete === &quot;function&quot;;</div>}
```
###Set.prototype.clear
          
```
function(){
              <div class="code">return typeof Set.prototype.clear === &quot;function&quot;;</div>}
```
###Set.prototype.forEach
          
```
function(){
              <div class="code">return typeof Set.prototype.forEach === &quot;function&quot;;</div>}
```
###Set.prototype.keys
          
```
function(){
              <div class="code">return typeof Set.prototype.keys === &quot;function&quot;;</div>}
```
###Set.prototype.values
          
```
function(){
              <div class="code">return typeof Set.prototype.values === &quot;function&quot;;</div>}
```
###Set.prototype.entries
          
```
function(){
              <div class="code">return typeof Set.prototype.entries === &quot;function&quot;;</div>}
```
###Set.prototype[Symbol.iterator]
          
```
function(){
              <div class="code">return typeof Set.prototype[Symbol.iterator] === &quot;function&quot;;</div>}
```
###Set.prototype isn't an instance
          
```
function(){
              <div class="code">new Set();
var obj = {};
try {
  Set.prototype.has(obj);
}
catch(e) {
  return true;
}</div>}
```
###Set iterator prototype chain
          
```
function(){
              <div class="code">// Iterator instance
var iterator = new Set()[Symbol.iterator]();
// %SetIteratorPrototype%
var proto1 = Object.getPrototypeOf(iterator);
// %IteratorPrototype%
var proto2 = Object.getPrototypeOf(proto1);

return proto2.hasOwnProperty(Symbol.iterator) &amp;&amp;
  !proto1    .hasOwnProperty(Symbol.iterator) &amp;&amp;
  !iterator  .hasOwnProperty(Symbol.iterator) &amp;&amp;
  iterator[Symbol.iterator]() === iterator;</div>}
```
###basic functionality
          
```
function(){
              <div class="code">var obj = {};
var set = new Set();

set.add(123);
set.add(123);

return set.has(123);</div>}
```
###constructor arguments
          
```
function(){
              <div class="code">var obj1 = {};
var obj2 = {};
var set = new Set([obj1, obj2]);

return set.has(obj1) &amp;&amp; set.has(obj2);</div>}
```
###constructor requires new
          
```
function(){
              <div class="code">new Set();
try {
  Set();
  return false;
} catch(e) {
  return true;
}</div>}
```
###constructor accepts null
          
```
function(){
              <div class="code">new Set(null);
return true;</div>}
```
###constructor invokes add
          
```
function(){
              <div class="code">var passed = false;
var _add = Set.prototype.add;

Set.prototype.add = function(v) {
  passed = true;
};

new Set([1]);
Set.prototype.add = _add;

return passed;</div>}
```
###Set.prototype.add returns this
          
```
function(){
              <div class="code">var set = new Set();
return set.add(0) === set;</div>}
```
###-0 key converts to +0
          
```
function(){
              <div class="code">var set = new Set();
set.add(-0);
var k;
set.forEach(function (value) {
  k = 1 / value;
});
return k === Infinity &amp;&amp; set.has(+0);</div>}
```
###Set.prototype.size
          
```
function(){
              <div class="code">var obj = {};
var set = new Set();

set.add(123);
set.add(123);
set.add(456);

return set.size === 2;</div>}
```
###Set.prototype.delete
          
```
function(){
              <div class="code">return typeof Set.prototype.delete === &quot;function&quot;;</div>}
```
###Set.prototype.clear
          
```
function(){
              <div class="code">return typeof Set.prototype.clear === &quot;function&quot;;</div>}
```
###Set.prototype.forEach
          
```
function(){
              <div class="code">return typeof Set.prototype.forEach === &quot;function&quot;;</div>}
```
###Set.prototype.keys
          
```
function(){
              <div class="code">return typeof Set.prototype.keys === &quot;function&quot;;</div>}
```
###Set.prototype.values
          
```
function(){
              <div class="code">return typeof Set.prototype.values === &quot;function&quot;;</div>}
```
###Set.prototype.entries
          
```
function(){
              <div class="code">return typeof Set.prototype.entries === &quot;function&quot;;</div>}
```
###Set.prototype[Symbol.iterator]
          
```
function(){
              <div class="code">return typeof Set.prototype[Symbol.iterator] === &quot;function&quot;;</div>}
```
###Set.prototype isn't an instance
          
```
function(){
              <div class="code">new Set();
var obj = {};
try {
  Set.prototype.has(obj);
}
catch(e) {
  return true;
}</div>}
```
###Set iterator prototype chain
          
```
function(){
              <div class="code">// Iterator instance
var iterator = new Set()[Symbol.iterator]();
// %SetIteratorPrototype%
var proto1 = Object.getPrototypeOf(iterator);
// %IteratorPrototype%
var proto2 = Object.getPrototypeOf(proto1);

return proto2.hasOwnProperty(Symbol.iterator) &amp;&amp;
  !proto1    .hasOwnProperty(Symbol.iterator) &amp;&amp;
  !iterator  .hasOwnProperty(Symbol.iterator) &amp;&amp;
  iterator[Symbol.iterator]() === iterator;</div>}
```
###basic functionality
          
```
function(){
              <div class="code">var obj = {};
var set = new Set();

set.add(123);
set.add(123);

return set.has(123);</div>}
```
###constructor arguments
          
```
function(){
              <div class="code">var obj1 = {};
var obj2 = {};
var set = new Set([obj1, obj2]);

return set.has(obj1) &amp;&amp; set.has(obj2);</div>}
```
###constructor requires new
          
```
function(){
              <div class="code">new Set();
try {
  Set();
  return false;
} catch(e) {
  return true;
}</div>}
```
###constructor accepts null
          
```
function(){
              <div class="code">new Set(null);
return true;</div>}
```
###constructor invokes add
          
```
function(){
              <div class="code">var passed = false;
var _add = Set.prototype.add;

Set.prototype.add = function(v) {
  passed = true;
};

new Set([1]);
Set.prototype.add = _add;

return passed;</div>}
```
###Set.prototype.add returns this
          
```
function(){
              <div class="code">var set = new Set();
return set.add(0) === set;</div>}
```
###-0 key converts to +0
          
```
function(){
              <div class="code">var set = new Set();
set.add(-0);
var k;
set.forEach(function (value) {
  k = 1 / value;
});
return k === Infinity &amp;&amp; set.has(+0);</div>}
```
###Set.prototype.size
          
```
function(){
              <div class="code">var obj = {};
var set = new Set();

set.add(123);
set.add(123);
set.add(456);

return set.size === 2;</div>}
```
###Set.prototype.delete
          
```
function(){
              <div class="code">return typeof Set.prototype.delete === &quot;function&quot;;</div>}
```
###Set.prototype.clear
          
```
function(){
              <div class="code">return typeof Set.prototype.clear === &quot;function&quot;;</div>}
```
###Set.prototype.forEach
          
```
function(){
              <div class="code">return typeof Set.prototype.forEach === &quot;function&quot;;</div>}
```
###Set.prototype.keys
          
```
function(){
              <div class="code">return typeof Set.prototype.keys === &quot;function&quot;;</div>}
```
###Set.prototype.values
          
```
function(){
              <div class="code">return typeof Set.prototype.values === &quot;function&quot;;</div>}
```
###Set.prototype.entries
          
```
function(){
              <div class="code">return typeof Set.prototype.entries === &quot;function&quot;;</div>}
```
###Set.prototype[Symbol.iterator]
          
```
function(){
              <div class="code">return typeof Set.prototype[Symbol.iterator] === &quot;function&quot;;</div>}
```
###Set.prototype isn't an instance
          
```
function(){
              <div class="code">new Set();
var obj = {};
try {
  Set.prototype.has(obj);
}
catch(e) {
  return true;
}</div>}
```
###Set iterator prototype chain
          
```
function(){
              <div class="code">// Iterator instance
var iterator = new Set()[Symbol.iterator]();
// %SetIteratorPrototype%
var proto1 = Object.getPrototypeOf(iterator);
// %IteratorPrototype%
var proto2 = Object.getPrototypeOf(proto1);

return proto2.hasOwnProperty(Symbol.iterator) &amp;&amp;
  !proto1    .hasOwnProperty(Symbol.iterator) &amp;&amp;
  !iterator  .hasOwnProperty(Symbol.iterator) &amp;&amp;
  iterator[Symbol.iterator]() === iterator;</div>}
```
###basic functionality
          
```
function(){
              <div class="code">var obj = {};
var set = new Set();

set.add(123);
set.add(123);

return set.has(123);</div>}
```
###constructor arguments
          
```
function(){
              <div class="code">var obj1 = {};
var obj2 = {};
var set = new Set([obj1, obj2]);

return set.has(obj1) &amp;&amp; set.has(obj2);</div>}
```
###constructor requires new
          
```
function(){
              <div class="code">new Set();
try {
  Set();
  return false;
} catch(e) {
  return true;
}</div>}
```
###constructor accepts null
          
```
function(){
              <div class="code">new Set(null);
return true;</div>}
```
###constructor invokes add
          
```
function(){
              <div class="code">var passed = false;
var _add = Set.prototype.add;

Set.prototype.add = function(v) {
  passed = true;
};

new Set([1]);
Set.prototype.add = _add;

return passed;</div>}
```
###Set.prototype.add returns this
          
```
function(){
              <div class="code">var set = new Set();
return set.add(0) === set;</div>}
```
###-0 key converts to +0
          
```
function(){
              <div class="code">var set = new Set();
set.add(-0);
var k;
set.forEach(function (value) {
  k = 1 / value;
});
return k === Infinity &amp;&amp; set.has(+0);</div>}
```
###Set.prototype.size
          
```
function(){
              <div class="code">var obj = {};
var set = new Set();

set.add(123);
set.add(123);
set.add(456);

return set.size === 2;</div>}
```
###Set.prototype.delete
          
```
function(){
              <div class="code">return typeof Set.prototype.delete === &quot;function&quot;;</div>}
```
###Set.prototype.clear
          
```
function(){
              <div class="code">return typeof Set.prototype.clear === &quot;function&quot;;</div>}
```
###Set.prototype.forEach
          
```
function(){
              <div class="code">return typeof Set.prototype.forEach === &quot;function&quot;;</div>}
```
###Set.prototype.keys
          
```
function(){
              <div class="code">return typeof Set.prototype.keys === &quot;function&quot;;</div>}
```
###Set.prototype.values
          
```
function(){
              <div class="code">return typeof Set.prototype.values === &quot;function&quot;;</div>}
```
###Set.prototype.entries
          
```
function(){
              <div class="code">return typeof Set.prototype.entries === &quot;function&quot;;</div>}
```
###Set.prototype[Symbol.iterator]
          
```
function(){
              <div class="code">return typeof Set.prototype[Symbol.iterator] === &quot;function&quot;;</div>}
```
###Set.prototype isn't an instance
          
```
function(){
              <div class="code">new Set();
var obj = {};
try {
  Set.prototype.has(obj);
}
catch(e) {
  return true;
}</div>}
```
###Set iterator prototype chain
          
```
function(){
              <div class="code">// Iterator instance
var iterator = new Set()[Symbol.iterator]();
// %SetIteratorPrototype%
var proto1 = Object.getPrototypeOf(iterator);
// %IteratorPrototype%
var proto2 = Object.getPrototypeOf(proto1);

return proto2.hasOwnProperty(Symbol.iterator) &amp;&amp;
  !proto1    .hasOwnProperty(Symbol.iterator) &amp;&amp;
  !iterator  .hasOwnProperty(Symbol.iterator) &amp;&amp;
  iterator[Symbol.iterator]() === iterator;</div>}
```
