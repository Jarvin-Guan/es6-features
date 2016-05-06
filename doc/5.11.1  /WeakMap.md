###basic functionality
          
```
function(){
              <div class="code">var key = {};
var weakmap = new WeakMap();

weakmap.set(key, 123);

return weakmap.has(key) &amp;&amp; weakmap.get(key) === 123;</div>}
```
###constructor arguments
          
```
function(){
              <div class="code">var key1 = {};
var key2 = {};
var weakmap = new WeakMap([[key1, 123], [key2, 456]]);

return weakmap.has(key1) &amp;&amp; weakmap.get(key1) === 123 &amp;&amp;
       weakmap.has(key2) &amp;&amp; weakmap.get(key2) === 456;</div>}
```
###constructor requires new
          
```
function(){
              <div class="code">new WeakMap();
try {
  WeakMap();
  return false;
} catch(e) {
  return true;
}</div>}
```
###constructor accepts null
          
```
function(){
              <div class="code">new WeakMap(null);
return true;</div>}
```
###constructor invokes set
          
```
function(){
              <div class="code">var passed = false;
var _set = WeakMap.prototype.set;

WeakMap.prototype.set = function(k, v) {
  passed = true;
};

new WeakMap([ [{ }, 42] ]);
WeakMap.prototype.set = _set;

return passed;</div>}
```
###frozen objects as keys
          
```
function(){
              <div class="code">var f = Object.freeze({});
var m = new WeakMap;
m.set(f, 42);
return m.get(f) === 42;</div>}
```
###WeakMap.prototype.set returns this
          
```
function(){
              <div class="code">var weakmap = new WeakMap();
var key = {};
return weakmap.set(key, 0) === weakmap;</div>}
```
###WeakMap.prototype.delete
          
```
function(){
              <div class="code">return typeof WeakMap.prototype.delete === &quot;function&quot;;</div>}
```
###no WeakMap.prototype.clear method
          
```
function(){
              <div class="code">if (!(&quot;clear&quot; in WeakMap.prototype)) {
  return true;
}
var m = new WeakMap();
var key = {};
m.set(key, 2);
m.clear();
return m.has(key);</div>}
```
###.has, .get and .delete methods accept primitives
          
```
function(){
              <div class="code">var m = new WeakMap;
return m.has(1) === false
  &amp;&amp; m.get(1) === undefined
  &amp;&amp; m.delete(1) === false;</div>}
```
###WeakMap.prototype isn't an instance
          
```
function(){
              <div class="code">new WeakMap();
var obj = {};
try {
  WeakMap.prototype.has(obj);
}
catch(e) {
  return true;
}</div>}
```
###basic functionality
          
```
function(){
              <div class="code">var key = {};
var weakmap = new WeakMap();

weakmap.set(key, 123);

return weakmap.has(key) &amp;&amp; weakmap.get(key) === 123;</div>}
```
###constructor arguments
          
```
function(){
              <div class="code">var key1 = {};
var key2 = {};
var weakmap = new WeakMap([[key1, 123], [key2, 456]]);

return weakmap.has(key1) &amp;&amp; weakmap.get(key1) === 123 &amp;&amp;
       weakmap.has(key2) &amp;&amp; weakmap.get(key2) === 456;</div>}
```
###constructor requires new
          
```
function(){
              <div class="code">new WeakMap();
try {
  WeakMap();
  return false;
} catch(e) {
  return true;
}</div>}
```
###constructor accepts null
          
```
function(){
              <div class="code">new WeakMap(null);
return true;</div>}
```
###constructor invokes set
          
```
function(){
              <div class="code">var passed = false;
var _set = WeakMap.prototype.set;

WeakMap.prototype.set = function(k, v) {
  passed = true;
};

new WeakMap([ [{ }, 42] ]);
WeakMap.prototype.set = _set;

return passed;</div>}
```
###frozen objects as keys
          
```
function(){
              <div class="code">var f = Object.freeze({});
var m = new WeakMap;
m.set(f, 42);
return m.get(f) === 42;</div>}
```
###WeakMap.prototype.set returns this
          
```
function(){
              <div class="code">var weakmap = new WeakMap();
var key = {};
return weakmap.set(key, 0) === weakmap;</div>}
```
###WeakMap.prototype.delete
          
```
function(){
              <div class="code">return typeof WeakMap.prototype.delete === &quot;function&quot;;</div>}
```
###no WeakMap.prototype.clear method
          
```
function(){
              <div class="code">if (!(&quot;clear&quot; in WeakMap.prototype)) {
  return true;
}
var m = new WeakMap();
var key = {};
m.set(key, 2);
m.clear();
return m.has(key);</div>}
```
###.has, .get and .delete methods accept primitives
          
```
function(){
              <div class="code">var m = new WeakMap;
return m.has(1) === false
  &amp;&amp; m.get(1) === undefined
  &amp;&amp; m.delete(1) === false;</div>}
```
###WeakMap.prototype isn't an instance
          
```
function(){
              <div class="code">new WeakMap();
var obj = {};
try {
  WeakMap.prototype.has(obj);
}
catch(e) {
  return true;
}</div>}
```
###basic functionality
          
```
function(){
              <div class="code">var key = {};
var weakmap = new WeakMap();

weakmap.set(key, 123);

return weakmap.has(key) &amp;&amp; weakmap.get(key) === 123;</div>}
```
###constructor arguments
          
```
function(){
              <div class="code">var key1 = {};
var key2 = {};
var weakmap = new WeakMap([[key1, 123], [key2, 456]]);

return weakmap.has(key1) &amp;&amp; weakmap.get(key1) === 123 &amp;&amp;
       weakmap.has(key2) &amp;&amp; weakmap.get(key2) === 456;</div>}
```
###constructor requires new
          
```
function(){
              <div class="code">new WeakMap();
try {
  WeakMap();
  return false;
} catch(e) {
  return true;
}</div>}
```
###constructor accepts null
          
```
function(){
              <div class="code">new WeakMap(null);
return true;</div>}
```
###constructor invokes set
          
```
function(){
              <div class="code">var passed = false;
var _set = WeakMap.prototype.set;

WeakMap.prototype.set = function(k, v) {
  passed = true;
};

new WeakMap([ [{ }, 42] ]);
WeakMap.prototype.set = _set;

return passed;</div>}
```
###frozen objects as keys
          
```
function(){
              <div class="code">var f = Object.freeze({});
var m = new WeakMap;
m.set(f, 42);
return m.get(f) === 42;</div>}
```
###WeakMap.prototype.set returns this
          
```
function(){
              <div class="code">var weakmap = new WeakMap();
var key = {};
return weakmap.set(key, 0) === weakmap;</div>}
```
###WeakMap.prototype.delete
          
```
function(){
              <div class="code">return typeof WeakMap.prototype.delete === &quot;function&quot;;</div>}
```
###no WeakMap.prototype.clear method
          
```
function(){
              <div class="code">if (!(&quot;clear&quot; in WeakMap.prototype)) {
  return true;
}
var m = new WeakMap();
var key = {};
m.set(key, 2);
m.clear();
return m.has(key);</div>}
```
###.has, .get and .delete methods accept primitives
          
```
function(){
              <div class="code">var m = new WeakMap;
return m.has(1) === false
  &amp;&amp; m.get(1) === undefined
  &amp;&amp; m.delete(1) === false;</div>}
```
###WeakMap.prototype isn't an instance
          
```
function(){
              <div class="code">new WeakMap();
var obj = {};
try {
  WeakMap.prototype.has(obj);
}
catch(e) {
  return true;
}</div>}
```
###basic functionality
          
```
function(){
              <div class="code">var key = {};
var weakmap = new WeakMap();

weakmap.set(key, 123);

return weakmap.has(key) &amp;&amp; weakmap.get(key) === 123;</div>}
```
###constructor arguments
          
```
function(){
              <div class="code">var key1 = {};
var key2 = {};
var weakmap = new WeakMap([[key1, 123], [key2, 456]]);

return weakmap.has(key1) &amp;&amp; weakmap.get(key1) === 123 &amp;&amp;
       weakmap.has(key2) &amp;&amp; weakmap.get(key2) === 456;</div>}
```
###constructor requires new
          
```
function(){
              <div class="code">new WeakMap();
try {
  WeakMap();
  return false;
} catch(e) {
  return true;
}</div>}
```
###constructor accepts null
          
```
function(){
              <div class="code">new WeakMap(null);
return true;</div>}
```
###constructor invokes set
          
```
function(){
              <div class="code">var passed = false;
var _set = WeakMap.prototype.set;

WeakMap.prototype.set = function(k, v) {
  passed = true;
};

new WeakMap([ [{ }, 42] ]);
WeakMap.prototype.set = _set;

return passed;</div>}
```
###frozen objects as keys
          
```
function(){
              <div class="code">var f = Object.freeze({});
var m = new WeakMap;
m.set(f, 42);
return m.get(f) === 42;</div>}
```
###WeakMap.prototype.set returns this
          
```
function(){
              <div class="code">var weakmap = new WeakMap();
var key = {};
return weakmap.set(key, 0) === weakmap;</div>}
```
###WeakMap.prototype.delete
          
```
function(){
              <div class="code">return typeof WeakMap.prototype.delete === &quot;function&quot;;</div>}
```
###no WeakMap.prototype.clear method
          
```
function(){
              <div class="code">if (!(&quot;clear&quot; in WeakMap.prototype)) {
  return true;
}
var m = new WeakMap();
var key = {};
m.set(key, 2);
m.clear();
return m.has(key);</div>}
```
###.has, .get and .delete methods accept primitives
          
```
function(){
              <div class="code">var m = new WeakMap;
return m.has(1) === false
  &amp;&amp; m.get(1) === undefined
  &amp;&amp; m.delete(1) === false;</div>}
```
###WeakMap.prototype isn't an instance
          
```
function(){
              <div class="code">new WeakMap();
var obj = {};
try {
  WeakMap.prototype.has(obj);
}
catch(e) {
  return true;
}</div>}
```
###basic functionality
          
```
function(){
              <div class="code">var key = {};
var weakmap = new WeakMap();

weakmap.set(key, 123);

return weakmap.has(key) &amp;&amp; weakmap.get(key) === 123;</div>}
```
###constructor arguments
          
```
function(){
              <div class="code">var key1 = {};
var key2 = {};
var weakmap = new WeakMap([[key1, 123], [key2, 456]]);

return weakmap.has(key1) &amp;&amp; weakmap.get(key1) === 123 &amp;&amp;
       weakmap.has(key2) &amp;&amp; weakmap.get(key2) === 456;</div>}
```
###constructor requires new
          
```
function(){
              <div class="code">new WeakMap();
try {
  WeakMap();
  return false;
} catch(e) {
  return true;
}</div>}
```
###constructor accepts null
          
```
function(){
              <div class="code">new WeakMap(null);
return true;</div>}
```
###constructor invokes set
          
```
function(){
              <div class="code">var passed = false;
var _set = WeakMap.prototype.set;

WeakMap.prototype.set = function(k, v) {
  passed = true;
};

new WeakMap([ [{ }, 42] ]);
WeakMap.prototype.set = _set;

return passed;</div>}
```
###frozen objects as keys
          
```
function(){
              <div class="code">var f = Object.freeze({});
var m = new WeakMap;
m.set(f, 42);
return m.get(f) === 42;</div>}
```
###WeakMap.prototype.set returns this
          
```
function(){
              <div class="code">var weakmap = new WeakMap();
var key = {};
return weakmap.set(key, 0) === weakmap;</div>}
```
###WeakMap.prototype.delete
          
```
function(){
              <div class="code">return typeof WeakMap.prototype.delete === &quot;function&quot;;</div>}
```
###no WeakMap.prototype.clear method
          
```
function(){
              <div class="code">if (!(&quot;clear&quot; in WeakMap.prototype)) {
  return true;
}
var m = new WeakMap();
var key = {};
m.set(key, 2);
m.clear();
return m.has(key);</div>}
```
###.has, .get and .delete methods accept primitives
          
```
function(){
              <div class="code">var m = new WeakMap;
return m.has(1) === false
  &amp;&amp; m.get(1) === undefined
  &amp;&amp; m.delete(1) === false;</div>}
```
###WeakMap.prototype isn't an instance
          
```
function(){
              <div class="code">new WeakMap();
var obj = {};
try {
  WeakMap.prototype.has(obj);
}
catch(e) {
  return true;
}</div>}
```
###basic functionality
          
```
function(){
              <div class="code">var key = {};
var weakmap = new WeakMap();

weakmap.set(key, 123);

return weakmap.has(key) &amp;&amp; weakmap.get(key) === 123;</div>}
```
###constructor arguments
          
```
function(){
              <div class="code">var key1 = {};
var key2 = {};
var weakmap = new WeakMap([[key1, 123], [key2, 456]]);

return weakmap.has(key1) &amp;&amp; weakmap.get(key1) === 123 &amp;&amp;
       weakmap.has(key2) &amp;&amp; weakmap.get(key2) === 456;</div>}
```
###constructor requires new
          
```
function(){
              <div class="code">new WeakMap();
try {
  WeakMap();
  return false;
} catch(e) {
  return true;
}</div>}
```
###constructor accepts null
          
```
function(){
              <div class="code">new WeakMap(null);
return true;</div>}
```
###constructor invokes set
          
```
function(){
              <div class="code">var passed = false;
var _set = WeakMap.prototype.set;

WeakMap.prototype.set = function(k, v) {
  passed = true;
};

new WeakMap([ [{ }, 42] ]);
WeakMap.prototype.set = _set;

return passed;</div>}
```
###frozen objects as keys
          
```
function(){
              <div class="code">var f = Object.freeze({});
var m = new WeakMap;
m.set(f, 42);
return m.get(f) === 42;</div>}
```
###WeakMap.prototype.set returns this
          
```
function(){
              <div class="code">var weakmap = new WeakMap();
var key = {};
return weakmap.set(key, 0) === weakmap;</div>}
```
###WeakMap.prototype.delete
          
```
function(){
              <div class="code">return typeof WeakMap.prototype.delete === &quot;function&quot;;</div>}
```
###no WeakMap.prototype.clear method
          
```
function(){
              <div class="code">if (!(&quot;clear&quot; in WeakMap.prototype)) {
  return true;
}
var m = new WeakMap();
var key = {};
m.set(key, 2);
m.clear();
return m.has(key);</div>}
```
###.has, .get and .delete methods accept primitives
          
```
function(){
              <div class="code">var m = new WeakMap;
return m.has(1) === false
  &amp;&amp; m.get(1) === undefined
  &amp;&amp; m.delete(1) === false;</div>}
```
###WeakMap.prototype isn't an instance
          
```
function(){
              <div class="code">new WeakMap();
var obj = {};
try {
  WeakMap.prototype.has(obj);
}
catch(e) {
  return true;
}</div>}
```
###basic functionality
          
```
function(){
              <div class="code">var key = {};
var weakmap = new WeakMap();

weakmap.set(key, 123);

return weakmap.has(key) &amp;&amp; weakmap.get(key) === 123;</div>}
```
###constructor arguments
          
```
function(){
              <div class="code">var key1 = {};
var key2 = {};
var weakmap = new WeakMap([[key1, 123], [key2, 456]]);

return weakmap.has(key1) &amp;&amp; weakmap.get(key1) === 123 &amp;&amp;
       weakmap.has(key2) &amp;&amp; weakmap.get(key2) === 456;</div>}
```
###constructor requires new
          
```
function(){
              <div class="code">new WeakMap();
try {
  WeakMap();
  return false;
} catch(e) {
  return true;
}</div>}
```
###constructor accepts null
          
```
function(){
              <div class="code">new WeakMap(null);
return true;</div>}
```
###constructor invokes set
          
```
function(){
              <div class="code">var passed = false;
var _set = WeakMap.prototype.set;

WeakMap.prototype.set = function(k, v) {
  passed = true;
};

new WeakMap([ [{ }, 42] ]);
WeakMap.prototype.set = _set;

return passed;</div>}
```
###frozen objects as keys
          
```
function(){
              <div class="code">var f = Object.freeze({});
var m = new WeakMap;
m.set(f, 42);
return m.get(f) === 42;</div>}
```
###WeakMap.prototype.set returns this
          
```
function(){
              <div class="code">var weakmap = new WeakMap();
var key = {};
return weakmap.set(key, 0) === weakmap;</div>}
```
###WeakMap.prototype.delete
          
```
function(){
              <div class="code">return typeof WeakMap.prototype.delete === &quot;function&quot;;</div>}
```
###no WeakMap.prototype.clear method
          
```
function(){
              <div class="code">if (!(&quot;clear&quot; in WeakMap.prototype)) {
  return true;
}
var m = new WeakMap();
var key = {};
m.set(key, 2);
m.clear();
return m.has(key);</div>}
```
###.has, .get and .delete methods accept primitives
          
```
function(){
              <div class="code">var m = new WeakMap;
return m.has(1) === false
  &amp;&amp; m.get(1) === undefined
  &amp;&amp; m.delete(1) === false;</div>}
```
###WeakMap.prototype isn't an instance
          
```
function(){
              <div class="code">new WeakMap();
var obj = {};
try {
  WeakMap.prototype.has(obj);
}
catch(e) {
  return true;
}</div>}
```
###basic functionality
          
```
function(){
              <div class="code">var key = {};
var weakmap = new WeakMap();

weakmap.set(key, 123);

return weakmap.has(key) &amp;&amp; weakmap.get(key) === 123;</div>}
```
###constructor arguments
          
```
function(){
              <div class="code">var key1 = {};
var key2 = {};
var weakmap = new WeakMap([[key1, 123], [key2, 456]]);

return weakmap.has(key1) &amp;&amp; weakmap.get(key1) === 123 &amp;&amp;
       weakmap.has(key2) &amp;&amp; weakmap.get(key2) === 456;</div>}
```
###constructor requires new
          
```
function(){
              <div class="code">new WeakMap();
try {
  WeakMap();
  return false;
} catch(e) {
  return true;
}</div>}
```
###constructor accepts null
          
```
function(){
              <div class="code">new WeakMap(null);
return true;</div>}
```
###constructor invokes set
          
```
function(){
              <div class="code">var passed = false;
var _set = WeakMap.prototype.set;

WeakMap.prototype.set = function(k, v) {
  passed = true;
};

new WeakMap([ [{ }, 42] ]);
WeakMap.prototype.set = _set;

return passed;</div>}
```
###frozen objects as keys
          
```
function(){
              <div class="code">var f = Object.freeze({});
var m = new WeakMap;
m.set(f, 42);
return m.get(f) === 42;</div>}
```
###WeakMap.prototype.set returns this
          
```
function(){
              <div class="code">var weakmap = new WeakMap();
var key = {};
return weakmap.set(key, 0) === weakmap;</div>}
```
###WeakMap.prototype.delete
          
```
function(){
              <div class="code">return typeof WeakMap.prototype.delete === &quot;function&quot;;</div>}
```
###no WeakMap.prototype.clear method
          
```
function(){
              <div class="code">if (!(&quot;clear&quot; in WeakMap.prototype)) {
  return true;
}
var m = new WeakMap();
var key = {};
m.set(key, 2);
m.clear();
return m.has(key);</div>}
```
###.has, .get and .delete methods accept primitives
          
```
function(){
              <div class="code">var m = new WeakMap;
return m.has(1) === false
  &amp;&amp; m.get(1) === undefined
  &amp;&amp; m.delete(1) === false;</div>}
```
###WeakMap.prototype isn't an instance
          
```
function(){
              <div class="code">new WeakMap();
var obj = {};
try {
  WeakMap.prototype.has(obj);
}
catch(e) {
  return true;
}</div>}
```
###basic functionality
          
```
function(){
              <div class="code">var key = {};
var weakmap = new WeakMap();

weakmap.set(key, 123);

return weakmap.has(key) &amp;&amp; weakmap.get(key) === 123;</div>}
```
###constructor arguments
          
```
function(){
              <div class="code">var key1 = {};
var key2 = {};
var weakmap = new WeakMap([[key1, 123], [key2, 456]]);

return weakmap.has(key1) &amp;&amp; weakmap.get(key1) === 123 &amp;&amp;
       weakmap.has(key2) &amp;&amp; weakmap.get(key2) === 456;</div>}
```
###constructor requires new
          
```
function(){
              <div class="code">new WeakMap();
try {
  WeakMap();
  return false;
} catch(e) {
  return true;
}</div>}
```
###constructor accepts null
          
```
function(){
              <div class="code">new WeakMap(null);
return true;</div>}
```
###constructor invokes set
          
```
function(){
              <div class="code">var passed = false;
var _set = WeakMap.prototype.set;

WeakMap.prototype.set = function(k, v) {
  passed = true;
};

new WeakMap([ [{ }, 42] ]);
WeakMap.prototype.set = _set;

return passed;</div>}
```
###frozen objects as keys
          
```
function(){
              <div class="code">var f = Object.freeze({});
var m = new WeakMap;
m.set(f, 42);
return m.get(f) === 42;</div>}
```
###WeakMap.prototype.set returns this
          
```
function(){
              <div class="code">var weakmap = new WeakMap();
var key = {};
return weakmap.set(key, 0) === weakmap;</div>}
```
###WeakMap.prototype.delete
          
```
function(){
              <div class="code">return typeof WeakMap.prototype.delete === &quot;function&quot;;</div>}
```
###no WeakMap.prototype.clear method
          
```
function(){
              <div class="code">if (!(&quot;clear&quot; in WeakMap.prototype)) {
  return true;
}
var m = new WeakMap();
var key = {};
m.set(key, 2);
m.clear();
return m.has(key);</div>}
```
###.has, .get and .delete methods accept primitives
          
```
function(){
              <div class="code">var m = new WeakMap;
return m.has(1) === false
  &amp;&amp; m.get(1) === undefined
  &amp;&amp; m.delete(1) === false;</div>}
```
###WeakMap.prototype isn't an instance
          
```
function(){
              <div class="code">new WeakMap();
var obj = {};
try {
  WeakMap.prototype.has(obj);
}
catch(e) {
  return true;
}</div>}
```
###basic functionality
          
```
function(){
              <div class="code">var key = {};
var weakmap = new WeakMap();

weakmap.set(key, 123);

return weakmap.has(key) &amp;&amp; weakmap.get(key) === 123;</div>}
```
###constructor arguments
          
```
function(){
              <div class="code">var key1 = {};
var key2 = {};
var weakmap = new WeakMap([[key1, 123], [key2, 456]]);

return weakmap.has(key1) &amp;&amp; weakmap.get(key1) === 123 &amp;&amp;
       weakmap.has(key2) &amp;&amp; weakmap.get(key2) === 456;</div>}
```
###constructor requires new
          
```
function(){
              <div class="code">new WeakMap();
try {
  WeakMap();
  return false;
} catch(e) {
  return true;
}</div>}
```
###constructor accepts null
          
```
function(){
              <div class="code">new WeakMap(null);
return true;</div>}
```
###constructor invokes set
          
```
function(){
              <div class="code">var passed = false;
var _set = WeakMap.prototype.set;

WeakMap.prototype.set = function(k, v) {
  passed = true;
};

new WeakMap([ [{ }, 42] ]);
WeakMap.prototype.set = _set;

return passed;</div>}
```
###frozen objects as keys
          
```
function(){
              <div class="code">var f = Object.freeze({});
var m = new WeakMap;
m.set(f, 42);
return m.get(f) === 42;</div>}
```
###WeakMap.prototype.set returns this
          
```
function(){
              <div class="code">var weakmap = new WeakMap();
var key = {};
return weakmap.set(key, 0) === weakmap;</div>}
```
###WeakMap.prototype.delete
          
```
function(){
              <div class="code">return typeof WeakMap.prototype.delete === &quot;function&quot;;</div>}
```
###no WeakMap.prototype.clear method
          
```
function(){
              <div class="code">if (!(&quot;clear&quot; in WeakMap.prototype)) {
  return true;
}
var m = new WeakMap();
var key = {};
m.set(key, 2);
m.clear();
return m.has(key);</div>}
```
###.has, .get and .delete methods accept primitives
          
```
function(){
              <div class="code">var m = new WeakMap;
return m.has(1) === false
  &amp;&amp; m.get(1) === undefined
  &amp;&amp; m.delete(1) === false;</div>}
```
###WeakMap.prototype isn't an instance
          
```
function(){
              <div class="code">new WeakMap();
var obj = {};
try {
  WeakMap.prototype.has(obj);
}
catch(e) {
  return true;
}</div>}
```
###basic functionality
          
```
function(){
              <div class="code">var key = {};
var weakmap = new WeakMap();

weakmap.set(key, 123);

return weakmap.has(key) &amp;&amp; weakmap.get(key) === 123;</div>}
```
###constructor arguments
          
```
function(){
              <div class="code">var key1 = {};
var key2 = {};
var weakmap = new WeakMap([[key1, 123], [key2, 456]]);

return weakmap.has(key1) &amp;&amp; weakmap.get(key1) === 123 &amp;&amp;
       weakmap.has(key2) &amp;&amp; weakmap.get(key2) === 456;</div>}
```
###constructor requires new
          
```
function(){
              <div class="code">new WeakMap();
try {
  WeakMap();
  return false;
} catch(e) {
  return true;
}</div>}
```
###constructor accepts null
          
```
function(){
              <div class="code">new WeakMap(null);
return true;</div>}
```
###constructor invokes set
          
```
function(){
              <div class="code">var passed = false;
var _set = WeakMap.prototype.set;

WeakMap.prototype.set = function(k, v) {
  passed = true;
};

new WeakMap([ [{ }, 42] ]);
WeakMap.prototype.set = _set;

return passed;</div>}
```
###frozen objects as keys
          
```
function(){
              <div class="code">var f = Object.freeze({});
var m = new WeakMap;
m.set(f, 42);
return m.get(f) === 42;</div>}
```
###WeakMap.prototype.set returns this
          
```
function(){
              <div class="code">var weakmap = new WeakMap();
var key = {};
return weakmap.set(key, 0) === weakmap;</div>}
```
###WeakMap.prototype.delete
          
```
function(){
              <div class="code">return typeof WeakMap.prototype.delete === &quot;function&quot;;</div>}
```
###no WeakMap.prototype.clear method
          
```
function(){
              <div class="code">if (!(&quot;clear&quot; in WeakMap.prototype)) {
  return true;
}
var m = new WeakMap();
var key = {};
m.set(key, 2);
m.clear();
return m.has(key);</div>}
```
###.has, .get and .delete methods accept primitives
          
```
function(){
              <div class="code">var m = new WeakMap;
return m.has(1) === false
  &amp;&amp; m.get(1) === undefined
  &amp;&amp; m.delete(1) === false;</div>}
```
###WeakMap.prototype isn't an instance
          
```
function(){
              <div class="code">new WeakMap();
var obj = {};
try {
  WeakMap.prototype.has(obj);
}
catch(e) {
  return true;
}</div>}
```
###basic functionality
          
```
function(){
              <div class="code">var key = {};
var weakmap = new WeakMap();

weakmap.set(key, 123);

return weakmap.has(key) &amp;&amp; weakmap.get(key) === 123;</div>}
```
###constructor arguments
          
```
function(){
              <div class="code">var key1 = {};
var key2 = {};
var weakmap = new WeakMap([[key1, 123], [key2, 456]]);

return weakmap.has(key1) &amp;&amp; weakmap.get(key1) === 123 &amp;&amp;
       weakmap.has(key2) &amp;&amp; weakmap.get(key2) === 456;</div>}
```
###constructor requires new
          
```
function(){
              <div class="code">new WeakMap();
try {
  WeakMap();
  return false;
} catch(e) {
  return true;
}</div>}
```
###constructor accepts null
          
```
function(){
              <div class="code">new WeakMap(null);
return true;</div>}
```
###constructor invokes set
          
```
function(){
              <div class="code">var passed = false;
var _set = WeakMap.prototype.set;

WeakMap.prototype.set = function(k, v) {
  passed = true;
};

new WeakMap([ [{ }, 42] ]);
WeakMap.prototype.set = _set;

return passed;</div>}
```
###frozen objects as keys
          
```
function(){
              <div class="code">var f = Object.freeze({});
var m = new WeakMap;
m.set(f, 42);
return m.get(f) === 42;</div>}
```
###WeakMap.prototype.set returns this
          
```
function(){
              <div class="code">var weakmap = new WeakMap();
var key = {};
return weakmap.set(key, 0) === weakmap;</div>}
```
###WeakMap.prototype.delete
          
```
function(){
              <div class="code">return typeof WeakMap.prototype.delete === &quot;function&quot;;</div>}
```
###no WeakMap.prototype.clear method
          
```
function(){
              <div class="code">if (!(&quot;clear&quot; in WeakMap.prototype)) {
  return true;
}
var m = new WeakMap();
var key = {};
m.set(key, 2);
m.clear();
return m.has(key);</div>}
```
###.has, .get and .delete methods accept primitives
          
```
function(){
              <div class="code">var m = new WeakMap;
return m.has(1) === false
  &amp;&amp; m.get(1) === undefined
  &amp;&amp; m.delete(1) === false;</div>}
```
###WeakMap.prototype isn't an instance
          
```
function(){
              <div class="code">new WeakMap();
var obj = {};
try {
  WeakMap.prototype.has(obj);
}
catch(e) {
  return true;
}</div>}
```
###basic functionality
          
```
function(){
              <div class="code">var key = {};
var weakmap = new WeakMap();

weakmap.set(key, 123);

return weakmap.has(key) &amp;&amp; weakmap.get(key) === 123;</div>}
```
###constructor arguments
          
```
function(){
              <div class="code">var key1 = {};
var key2 = {};
var weakmap = new WeakMap([[key1, 123], [key2, 456]]);

return weakmap.has(key1) &amp;&amp; weakmap.get(key1) === 123 &amp;&amp;
       weakmap.has(key2) &amp;&amp; weakmap.get(key2) === 456;</div>}
```
###constructor requires new
          
```
function(){
              <div class="code">new WeakMap();
try {
  WeakMap();
  return false;
} catch(e) {
  return true;
}</div>}
```
###constructor accepts null
          
```
function(){
              <div class="code">new WeakMap(null);
return true;</div>}
```
###constructor invokes set
          
```
function(){
              <div class="code">var passed = false;
var _set = WeakMap.prototype.set;

WeakMap.prototype.set = function(k, v) {
  passed = true;
};

new WeakMap([ [{ }, 42] ]);
WeakMap.prototype.set = _set;

return passed;</div>}
```
###frozen objects as keys
          
```
function(){
              <div class="code">var f = Object.freeze({});
var m = new WeakMap;
m.set(f, 42);
return m.get(f) === 42;</div>}
```
###WeakMap.prototype.set returns this
          
```
function(){
              <div class="code">var weakmap = new WeakMap();
var key = {};
return weakmap.set(key, 0) === weakmap;</div>}
```
###WeakMap.prototype.delete
          
```
function(){
              <div class="code">return typeof WeakMap.prototype.delete === &quot;function&quot;;</div>}
```
###no WeakMap.prototype.clear method
          
```
function(){
              <div class="code">if (!(&quot;clear&quot; in WeakMap.prototype)) {
  return true;
}
var m = new WeakMap();
var key = {};
m.set(key, 2);
m.clear();
return m.has(key);</div>}
```
###.has, .get and .delete methods accept primitives
          
```
function(){
              <div class="code">var m = new WeakMap;
return m.has(1) === false
  &amp;&amp; m.get(1) === undefined
  &amp;&amp; m.delete(1) === false;</div>}
```
###WeakMap.prototype isn't an instance
          
```
function(){
              <div class="code">new WeakMap();
var obj = {};
try {
  WeakMap.prototype.has(obj);
}
catch(e) {
  return true;
}</div>}
```
###basic functionality
          
```
function(){
              <div class="code">var key = {};
var weakmap = new WeakMap();

weakmap.set(key, 123);

return weakmap.has(key) &amp;&amp; weakmap.get(key) === 123;</div>}
```
###constructor arguments
          
```
function(){
              <div class="code">var key1 = {};
var key2 = {};
var weakmap = new WeakMap([[key1, 123], [key2, 456]]);

return weakmap.has(key1) &amp;&amp; weakmap.get(key1) === 123 &amp;&amp;
       weakmap.has(key2) &amp;&amp; weakmap.get(key2) === 456;</div>}
```
###constructor requires new
          
```
function(){
              <div class="code">new WeakMap();
try {
  WeakMap();
  return false;
} catch(e) {
  return true;
}</div>}
```
###constructor accepts null
          
```
function(){
              <div class="code">new WeakMap(null);
return true;</div>}
```
###constructor invokes set
          
```
function(){
              <div class="code">var passed = false;
var _set = WeakMap.prototype.set;

WeakMap.prototype.set = function(k, v) {
  passed = true;
};

new WeakMap([ [{ }, 42] ]);
WeakMap.prototype.set = _set;

return passed;</div>}
```
###frozen objects as keys
          
```
function(){
              <div class="code">var f = Object.freeze({});
var m = new WeakMap;
m.set(f, 42);
return m.get(f) === 42;</div>}
```
###WeakMap.prototype.set returns this
          
```
function(){
              <div class="code">var weakmap = new WeakMap();
var key = {};
return weakmap.set(key, 0) === weakmap;</div>}
```
###WeakMap.prototype.delete
          
```
function(){
              <div class="code">return typeof WeakMap.prototype.delete === &quot;function&quot;;</div>}
```
###no WeakMap.prototype.clear method
          
```
function(){
              <div class="code">if (!(&quot;clear&quot; in WeakMap.prototype)) {
  return true;
}
var m = new WeakMap();
var key = {};
m.set(key, 2);
m.clear();
return m.has(key);</div>}
```
###.has, .get and .delete methods accept primitives
          
```
function(){
              <div class="code">var m = new WeakMap;
return m.has(1) === false
  &amp;&amp; m.get(1) === undefined
  &amp;&amp; m.delete(1) === false;</div>}
```
###WeakMap.prototype isn't an instance
          
```
function(){
              <div class="code">new WeakMap();
var obj = {};
try {
  WeakMap.prototype.has(obj);
}
catch(e) {
  return true;
}</div>}
```
###basic functionality
          
```
function(){
              <div class="code">var key = {};
var weakmap = new WeakMap();

weakmap.set(key, 123);

return weakmap.has(key) &amp;&amp; weakmap.get(key) === 123;</div>}
```
###constructor arguments
          
```
function(){
              <div class="code">var key1 = {};
var key2 = {};
var weakmap = new WeakMap([[key1, 123], [key2, 456]]);

return weakmap.has(key1) &amp;&amp; weakmap.get(key1) === 123 &amp;&amp;
       weakmap.has(key2) &amp;&amp; weakmap.get(key2) === 456;</div>}
```
###constructor requires new
          
```
function(){
              <div class="code">new WeakMap();
try {
  WeakMap();
  return false;
} catch(e) {
  return true;
}</div>}
```
###constructor accepts null
          
```
function(){
              <div class="code">new WeakMap(null);
return true;</div>}
```
###constructor invokes set
          
```
function(){
              <div class="code">var passed = false;
var _set = WeakMap.prototype.set;

WeakMap.prototype.set = function(k, v) {
  passed = true;
};

new WeakMap([ [{ }, 42] ]);
WeakMap.prototype.set = _set;

return passed;</div>}
```
###frozen objects as keys
          
```
function(){
              <div class="code">var f = Object.freeze({});
var m = new WeakMap;
m.set(f, 42);
return m.get(f) === 42;</div>}
```
###WeakMap.prototype.set returns this
          
```
function(){
              <div class="code">var weakmap = new WeakMap();
var key = {};
return weakmap.set(key, 0) === weakmap;</div>}
```
###WeakMap.prototype.delete
          
```
function(){
              <div class="code">return typeof WeakMap.prototype.delete === &quot;function&quot;;</div>}
```
###no WeakMap.prototype.clear method
          
```
function(){
              <div class="code">if (!(&quot;clear&quot; in WeakMap.prototype)) {
  return true;
}
var m = new WeakMap();
var key = {};
m.set(key, 2);
m.clear();
return m.has(key);</div>}
```
###.has, .get and .delete methods accept primitives
          
```
function(){
              <div class="code">var m = new WeakMap;
return m.has(1) === false
  &amp;&amp; m.get(1) === undefined
  &amp;&amp; m.delete(1) === false;</div>}
```
###WeakMap.prototype isn't an instance
          
```
function(){
              <div class="code">new WeakMap();
var obj = {};
try {
  WeakMap.prototype.has(obj);
}
catch(e) {
  return true;
}</div>}
```
