###basic functionality
          
```
function(){
              <div class="code">var key = {};
var map = new Map();

map.set(key, 123);

return map.has(key) &amp;&amp; map.get(key) === 123;</div>}
```
###constructor arguments
          
```
function(){
              <div class="code">var key1 = {};
var key2 = {};
var map = new Map([[key1, 123], [key2, 456]]);

return map.has(key1) &amp;&amp; map.get(key1) === 123 &amp;&amp;
       map.has(key2) &amp;&amp; map.get(key2) === 456;</div>}
```
###constructor requires new
          
```
function(){
              <div class="code">new Map();
try {
  Map();
  return false;
} catch(e) {
  return true;
}</div>}
```
###constructor accepts null
          
```
function(){
              <div class="code">new Map(null);
return true;</div>}
```
###constructor invokes set
          
```
function(){
              <div class="code">var passed = false;
var _set = Map.prototype.set;

Map.prototype.set = function(k, v) {
  passed = true;
};

new Map([ [1, 2] ]);
Map.prototype.set = _set;

return passed;</div>}
```
###Map.prototype.set returns this
          
```
function(){
              <div class="code">var map = new Map();
return map.set(0, 0) === map;</div>}
```
###Map.prototype.size
          
```
function(){
              <div class="code">var key = {};
var map = new Map();

map.set(key, 123);

return map.size === 1;</div>}
```
###Map.prototype.delete
          
```
function(){
              <div class="code">return typeof Map.prototype.delete === &quot;function&quot;;</div>}
```
###Map.prototype.clear
          
```
function(){
              <div class="code">return typeof Map.prototype.clear === &quot;function&quot;;</div>}
```
###Map.prototype.forEach
          
```
function(){
              <div class="code">return typeof Map.prototype.forEach === &quot;function&quot;;</div>}
```
###Map.prototype.keys
          
```
function(){
              <div class="code">return typeof Map.prototype.keys === &quot;function&quot;;</div>}
```
###Map.prototype.values
          
```
function(){
              <div class="code">return typeof Map.prototype.values === &quot;function&quot;;</div>}
```
###Map.prototype.entries
          
```
function(){
              <div class="code">return typeof Map.prototype.entries === &quot;function&quot;;</div>}
```
###Map.prototype[Symbol.iterator]
          
```
function(){
              <div class="code">return typeof Map.prototype[Symbol.iterator] === &quot;function&quot;;</div>}
```
###Map.prototype isn't an instance
          
```
function(){
              <div class="code">new Map();
var obj = {};
try {
  Map.prototype.has(obj);
}
catch(e) {
  return true;
}</div>}
```
###basic functionality
          
```
function(){
              <div class="code">var key = {};
var map = new Map();

map.set(key, 123);

return map.has(key) &amp;&amp; map.get(key) === 123;</div>}
```
###constructor arguments
          
```
function(){
              <div class="code">var key1 = {};
var key2 = {};
var map = new Map([[key1, 123], [key2, 456]]);

return map.has(key1) &amp;&amp; map.get(key1) === 123 &amp;&amp;
       map.has(key2) &amp;&amp; map.get(key2) === 456;</div>}
```
###constructor requires new
          
```
function(){
              <div class="code">new Map();
try {
  Map();
  return false;
} catch(e) {
  return true;
}</div>}
```
###constructor accepts null
          
```
function(){
              <div class="code">new Map(null);
return true;</div>}
```
###constructor invokes set
          
```
function(){
              <div class="code">var passed = false;
var _set = Map.prototype.set;

Map.prototype.set = function(k, v) {
  passed = true;
};

new Map([ [1, 2] ]);
Map.prototype.set = _set;

return passed;</div>}
```
###Map.prototype.set returns this
          
```
function(){
              <div class="code">var map = new Map();
return map.set(0, 0) === map;</div>}
```
###Map.prototype.size
          
```
function(){
              <div class="code">var key = {};
var map = new Map();

map.set(key, 123);

return map.size === 1;</div>}
```
###Map.prototype.delete
          
```
function(){
              <div class="code">return typeof Map.prototype.delete === &quot;function&quot;;</div>}
```
###Map.prototype.clear
          
```
function(){
              <div class="code">return typeof Map.prototype.clear === &quot;function&quot;;</div>}
```
###Map.prototype.forEach
          
```
function(){
              <div class="code">return typeof Map.prototype.forEach === &quot;function&quot;;</div>}
```
###Map.prototype.keys
          
```
function(){
              <div class="code">return typeof Map.prototype.keys === &quot;function&quot;;</div>}
```
###Map.prototype.values
          
```
function(){
              <div class="code">return typeof Map.prototype.values === &quot;function&quot;;</div>}
```
###Map.prototype.entries
          
```
function(){
              <div class="code">return typeof Map.prototype.entries === &quot;function&quot;;</div>}
```
###Map.prototype[Symbol.iterator]
          
```
function(){
              <div class="code">return typeof Map.prototype[Symbol.iterator] === &quot;function&quot;;</div>}
```
###Map.prototype isn't an instance
          
```
function(){
              <div class="code">new Map();
var obj = {};
try {
  Map.prototype.has(obj);
}
catch(e) {
  return true;
}</div>}
```
###basic functionality
          
```
function(){
              <div class="code">var key = {};
var map = new Map();

map.set(key, 123);

return map.has(key) &amp;&amp; map.get(key) === 123;</div>}
```
###constructor arguments
          
```
function(){
              <div class="code">var key1 = {};
var key2 = {};
var map = new Map([[key1, 123], [key2, 456]]);

return map.has(key1) &amp;&amp; map.get(key1) === 123 &amp;&amp;
       map.has(key2) &amp;&amp; map.get(key2) === 456;</div>}
```
###constructor requires new
          
```
function(){
              <div class="code">new Map();
try {
  Map();
  return false;
} catch(e) {
  return true;
}</div>}
```
###constructor accepts null
          
```
function(){
              <div class="code">new Map(null);
return true;</div>}
```
###constructor invokes set
          
```
function(){
              <div class="code">var passed = false;
var _set = Map.prototype.set;

Map.prototype.set = function(k, v) {
  passed = true;
};

new Map([ [1, 2] ]);
Map.prototype.set = _set;

return passed;</div>}
```
###Map.prototype.set returns this
          
```
function(){
              <div class="code">var map = new Map();
return map.set(0, 0) === map;</div>}
```
###Map.prototype.size
          
```
function(){
              <div class="code">var key = {};
var map = new Map();

map.set(key, 123);

return map.size === 1;</div>}
```
###Map.prototype.delete
          
```
function(){
              <div class="code">return typeof Map.prototype.delete === &quot;function&quot;;</div>}
```
###Map.prototype.clear
          
```
function(){
              <div class="code">return typeof Map.prototype.clear === &quot;function&quot;;</div>}
```
###Map.prototype.forEach
          
```
function(){
              <div class="code">return typeof Map.prototype.forEach === &quot;function&quot;;</div>}
```
###Map.prototype.keys
          
```
function(){
              <div class="code">return typeof Map.prototype.keys === &quot;function&quot;;</div>}
```
###Map.prototype.values
          
```
function(){
              <div class="code">return typeof Map.prototype.values === &quot;function&quot;;</div>}
```
###Map.prototype.entries
          
```
function(){
              <div class="code">return typeof Map.prototype.entries === &quot;function&quot;;</div>}
```
###Map.prototype[Symbol.iterator]
          
```
function(){
              <div class="code">return typeof Map.prototype[Symbol.iterator] === &quot;function&quot;;</div>}
```
###Map.prototype isn't an instance
          
```
function(){
              <div class="code">new Map();
var obj = {};
try {
  Map.prototype.has(obj);
}
catch(e) {
  return true;
}</div>}
```
###basic functionality
          
```
function(){
              <div class="code">var key = {};
var map = new Map();

map.set(key, 123);

return map.has(key) &amp;&amp; map.get(key) === 123;</div>}
```
###constructor arguments
          
```
function(){
              <div class="code">var key1 = {};
var key2 = {};
var map = new Map([[key1, 123], [key2, 456]]);

return map.has(key1) &amp;&amp; map.get(key1) === 123 &amp;&amp;
       map.has(key2) &amp;&amp; map.get(key2) === 456;</div>}
```
###constructor requires new
          
```
function(){
              <div class="code">new Map();
try {
  Map();
  return false;
} catch(e) {
  return true;
}</div>}
```
###constructor accepts null
          
```
function(){
              <div class="code">new Map(null);
return true;</div>}
```
###constructor invokes set
          
```
function(){
              <div class="code">var passed = false;
var _set = Map.prototype.set;

Map.prototype.set = function(k, v) {
  passed = true;
};

new Map([ [1, 2] ]);
Map.prototype.set = _set;

return passed;</div>}
```
###Map.prototype.set returns this
          
```
function(){
              <div class="code">var map = new Map();
return map.set(0, 0) === map;</div>}
```
###Map.prototype.size
          
```
function(){
              <div class="code">var key = {};
var map = new Map();

map.set(key, 123);

return map.size === 1;</div>}
```
###Map.prototype.delete
          
```
function(){
              <div class="code">return typeof Map.prototype.delete === &quot;function&quot;;</div>}
```
###Map.prototype.clear
          
```
function(){
              <div class="code">return typeof Map.prototype.clear === &quot;function&quot;;</div>}
```
###Map.prototype.forEach
          
```
function(){
              <div class="code">return typeof Map.prototype.forEach === &quot;function&quot;;</div>}
```
###Map.prototype.keys
          
```
function(){
              <div class="code">return typeof Map.prototype.keys === &quot;function&quot;;</div>}
```
###Map.prototype.values
          
```
function(){
              <div class="code">return typeof Map.prototype.values === &quot;function&quot;;</div>}
```
###Map.prototype.entries
          
```
function(){
              <div class="code">return typeof Map.prototype.entries === &quot;function&quot;;</div>}
```
###Map.prototype[Symbol.iterator]
          
```
function(){
              <div class="code">return typeof Map.prototype[Symbol.iterator] === &quot;function&quot;;</div>}
```
###Map.prototype isn't an instance
          
```
function(){
              <div class="code">new Map();
var obj = {};
try {
  Map.prototype.has(obj);
}
catch(e) {
  return true;
}</div>}
```
###basic functionality
          
```
function(){
              <div class="code">var key = {};
var map = new Map();

map.set(key, 123);

return map.has(key) &amp;&amp; map.get(key) === 123;</div>}
```
###constructor arguments
          
```
function(){
              <div class="code">var key1 = {};
var key2 = {};
var map = new Map([[key1, 123], [key2, 456]]);

return map.has(key1) &amp;&amp; map.get(key1) === 123 &amp;&amp;
       map.has(key2) &amp;&amp; map.get(key2) === 456;</div>}
```
###constructor requires new
          
```
function(){
              <div class="code">new Map();
try {
  Map();
  return false;
} catch(e) {
  return true;
}</div>}
```
###constructor accepts null
          
```
function(){
              <div class="code">new Map(null);
return true;</div>}
```
###constructor invokes set
          
```
function(){
              <div class="code">var passed = false;
var _set = Map.prototype.set;

Map.prototype.set = function(k, v) {
  passed = true;
};

new Map([ [1, 2] ]);
Map.prototype.set = _set;

return passed;</div>}
```
###Map.prototype.set returns this
          
```
function(){
              <div class="code">var map = new Map();
return map.set(0, 0) === map;</div>}
```
###Map.prototype.size
          
```
function(){
              <div class="code">var key = {};
var map = new Map();

map.set(key, 123);

return map.size === 1;</div>}
```
###Map.prototype.delete
          
```
function(){
              <div class="code">return typeof Map.prototype.delete === &quot;function&quot;;</div>}
```
###Map.prototype.clear
          
```
function(){
              <div class="code">return typeof Map.prototype.clear === &quot;function&quot;;</div>}
```
###Map.prototype.forEach
          
```
function(){
              <div class="code">return typeof Map.prototype.forEach === &quot;function&quot;;</div>}
```
###Map.prototype.keys
          
```
function(){
              <div class="code">return typeof Map.prototype.keys === &quot;function&quot;;</div>}
```
###Map.prototype.values
          
```
function(){
              <div class="code">return typeof Map.prototype.values === &quot;function&quot;;</div>}
```
###Map.prototype.entries
          
```
function(){
              <div class="code">return typeof Map.prototype.entries === &quot;function&quot;;</div>}
```
###Map.prototype[Symbol.iterator]
          
```
function(){
              <div class="code">return typeof Map.prototype[Symbol.iterator] === &quot;function&quot;;</div>}
```
###Map.prototype isn't an instance
          
```
function(){
              <div class="code">new Map();
var obj = {};
try {
  Map.prototype.has(obj);
}
catch(e) {
  return true;
}</div>}
```
###basic functionality
          
```
function(){
              <div class="code">var key = {};
var map = new Map();

map.set(key, 123);

return map.has(key) &amp;&amp; map.get(key) === 123;</div>}
```
###constructor arguments
          
```
function(){
              <div class="code">var key1 = {};
var key2 = {};
var map = new Map([[key1, 123], [key2, 456]]);

return map.has(key1) &amp;&amp; map.get(key1) === 123 &amp;&amp;
       map.has(key2) &amp;&amp; map.get(key2) === 456;</div>}
```
###constructor requires new
          
```
function(){
              <div class="code">new Map();
try {
  Map();
  return false;
} catch(e) {
  return true;
}</div>}
```
###constructor accepts null
          
```
function(){
              <div class="code">new Map(null);
return true;</div>}
```
###constructor invokes set
          
```
function(){
              <div class="code">var passed = false;
var _set = Map.prototype.set;

Map.prototype.set = function(k, v) {
  passed = true;
};

new Map([ [1, 2] ]);
Map.prototype.set = _set;

return passed;</div>}
```
###Map.prototype.set returns this
          
```
function(){
              <div class="code">var map = new Map();
return map.set(0, 0) === map;</div>}
```
###Map.prototype.size
          
```
function(){
              <div class="code">var key = {};
var map = new Map();

map.set(key, 123);

return map.size === 1;</div>}
```
###Map.prototype.delete
          
```
function(){
              <div class="code">return typeof Map.prototype.delete === &quot;function&quot;;</div>}
```
###Map.prototype.clear
          
```
function(){
              <div class="code">return typeof Map.prototype.clear === &quot;function&quot;;</div>}
```
###Map.prototype.forEach
          
```
function(){
              <div class="code">return typeof Map.prototype.forEach === &quot;function&quot;;</div>}
```
###Map.prototype.keys
          
```
function(){
              <div class="code">return typeof Map.prototype.keys === &quot;function&quot;;</div>}
```
###Map.prototype.values
          
```
function(){
              <div class="code">return typeof Map.prototype.values === &quot;function&quot;;</div>}
```
###Map.prototype.entries
          
```
function(){
              <div class="code">return typeof Map.prototype.entries === &quot;function&quot;;</div>}
```
###Map.prototype[Symbol.iterator]
          
```
function(){
              <div class="code">return typeof Map.prototype[Symbol.iterator] === &quot;function&quot;;</div>}
```
###Map.prototype isn't an instance
          
```
function(){
              <div class="code">new Map();
var obj = {};
try {
  Map.prototype.has(obj);
}
catch(e) {
  return true;
}</div>}
```
###basic functionality
          
```
function(){
              <div class="code">var key = {};
var map = new Map();

map.set(key, 123);

return map.has(key) &amp;&amp; map.get(key) === 123;</div>}
```
###constructor arguments
          
```
function(){
              <div class="code">var key1 = {};
var key2 = {};
var map = new Map([[key1, 123], [key2, 456]]);

return map.has(key1) &amp;&amp; map.get(key1) === 123 &amp;&amp;
       map.has(key2) &amp;&amp; map.get(key2) === 456;</div>}
```
###constructor requires new
          
```
function(){
              <div class="code">new Map();
try {
  Map();
  return false;
} catch(e) {
  return true;
}</div>}
```
###constructor accepts null
          
```
function(){
              <div class="code">new Map(null);
return true;</div>}
```
###constructor invokes set
          
```
function(){
              <div class="code">var passed = false;
var _set = Map.prototype.set;

Map.prototype.set = function(k, v) {
  passed = true;
};

new Map([ [1, 2] ]);
Map.prototype.set = _set;

return passed;</div>}
```
###Map.prototype.set returns this
          
```
function(){
              <div class="code">var map = new Map();
return map.set(0, 0) === map;</div>}
```
###Map.prototype.size
          
```
function(){
              <div class="code">var key = {};
var map = new Map();

map.set(key, 123);

return map.size === 1;</div>}
```
###Map.prototype.delete
          
```
function(){
              <div class="code">return typeof Map.prototype.delete === &quot;function&quot;;</div>}
```
###Map.prototype.clear
          
```
function(){
              <div class="code">return typeof Map.prototype.clear === &quot;function&quot;;</div>}
```
###Map.prototype.forEach
          
```
function(){
              <div class="code">return typeof Map.prototype.forEach === &quot;function&quot;;</div>}
```
###Map.prototype.keys
          
```
function(){
              <div class="code">return typeof Map.prototype.keys === &quot;function&quot;;</div>}
```
###Map.prototype.values
          
```
function(){
              <div class="code">return typeof Map.prototype.values === &quot;function&quot;;</div>}
```
###Map.prototype.entries
          
```
function(){
              <div class="code">return typeof Map.prototype.entries === &quot;function&quot;;</div>}
```
###Map.prototype[Symbol.iterator]
          
```
function(){
              <div class="code">return typeof Map.prototype[Symbol.iterator] === &quot;function&quot;;</div>}
```
###Map.prototype isn't an instance
          
```
function(){
              <div class="code">new Map();
var obj = {};
try {
  Map.prototype.has(obj);
}
catch(e) {
  return true;
}</div>}
```
###basic functionality
          
```
function(){
              <div class="code">var key = {};
var map = new Map();

map.set(key, 123);

return map.has(key) &amp;&amp; map.get(key) === 123;</div>}
```
###constructor arguments
          
```
function(){
              <div class="code">var key1 = {};
var key2 = {};
var map = new Map([[key1, 123], [key2, 456]]);

return map.has(key1) &amp;&amp; map.get(key1) === 123 &amp;&amp;
       map.has(key2) &amp;&amp; map.get(key2) === 456;</div>}
```
###constructor requires new
          
```
function(){
              <div class="code">new Map();
try {
  Map();
  return false;
} catch(e) {
  return true;
}</div>}
```
###constructor accepts null
          
```
function(){
              <div class="code">new Map(null);
return true;</div>}
```
###constructor invokes set
          
```
function(){
              <div class="code">var passed = false;
var _set = Map.prototype.set;

Map.prototype.set = function(k, v) {
  passed = true;
};

new Map([ [1, 2] ]);
Map.prototype.set = _set;

return passed;</div>}
```
###Map.prototype.set returns this
          
```
function(){
              <div class="code">var map = new Map();
return map.set(0, 0) === map;</div>}
```
###Map.prototype.size
          
```
function(){
              <div class="code">var key = {};
var map = new Map();

map.set(key, 123);

return map.size === 1;</div>}
```
###Map.prototype.delete
          
```
function(){
              <div class="code">return typeof Map.prototype.delete === &quot;function&quot;;</div>}
```
###Map.prototype.clear
          
```
function(){
              <div class="code">return typeof Map.prototype.clear === &quot;function&quot;;</div>}
```
###Map.prototype.forEach
          
```
function(){
              <div class="code">return typeof Map.prototype.forEach === &quot;function&quot;;</div>}
```
###Map.prototype.keys
          
```
function(){
              <div class="code">return typeof Map.prototype.keys === &quot;function&quot;;</div>}
```
###Map.prototype.values
          
```
function(){
              <div class="code">return typeof Map.prototype.values === &quot;function&quot;;</div>}
```
###Map.prototype.entries
          
```
function(){
              <div class="code">return typeof Map.prototype.entries === &quot;function&quot;;</div>}
```
###Map.prototype[Symbol.iterator]
          
```
function(){
              <div class="code">return typeof Map.prototype[Symbol.iterator] === &quot;function&quot;;</div>}
```
###Map.prototype isn't an instance
          
```
function(){
              <div class="code">new Map();
var obj = {};
try {
  Map.prototype.has(obj);
}
catch(e) {
  return true;
}</div>}
```
###basic functionality
          
```
function(){
              <div class="code">var key = {};
var map = new Map();

map.set(key, 123);

return map.has(key) &amp;&amp; map.get(key) === 123;</div>}
```
###constructor arguments
          
```
function(){
              <div class="code">var key1 = {};
var key2 = {};
var map = new Map([[key1, 123], [key2, 456]]);

return map.has(key1) &amp;&amp; map.get(key1) === 123 &amp;&amp;
       map.has(key2) &amp;&amp; map.get(key2) === 456;</div>}
```
###constructor requires new
          
```
function(){
              <div class="code">new Map();
try {
  Map();
  return false;
} catch(e) {
  return true;
}</div>}
```
###constructor accepts null
          
```
function(){
              <div class="code">new Map(null);
return true;</div>}
```
###constructor invokes set
          
```
function(){
              <div class="code">var passed = false;
var _set = Map.prototype.set;

Map.prototype.set = function(k, v) {
  passed = true;
};

new Map([ [1, 2] ]);
Map.prototype.set = _set;

return passed;</div>}
```
###Map.prototype.set returns this
          
```
function(){
              <div class="code">var map = new Map();
return map.set(0, 0) === map;</div>}
```
###Map.prototype.size
          
```
function(){
              <div class="code">var key = {};
var map = new Map();

map.set(key, 123);

return map.size === 1;</div>}
```
###Map.prototype.delete
          
```
function(){
              <div class="code">return typeof Map.prototype.delete === &quot;function&quot;;</div>}
```
###Map.prototype.clear
          
```
function(){
              <div class="code">return typeof Map.prototype.clear === &quot;function&quot;;</div>}
```
###Map.prototype.forEach
          
```
function(){
              <div class="code">return typeof Map.prototype.forEach === &quot;function&quot;;</div>}
```
###Map.prototype.keys
          
```
function(){
              <div class="code">return typeof Map.prototype.keys === &quot;function&quot;;</div>}
```
###Map.prototype.values
          
```
function(){
              <div class="code">return typeof Map.prototype.values === &quot;function&quot;;</div>}
```
###Map.prototype.entries
          
```
function(){
              <div class="code">return typeof Map.prototype.entries === &quot;function&quot;;</div>}
```
###Map.prototype[Symbol.iterator]
          
```
function(){
              <div class="code">return typeof Map.prototype[Symbol.iterator] === &quot;function&quot;;</div>}
```
###Map.prototype isn't an instance
          
```
function(){
              <div class="code">new Map();
var obj = {};
try {
  Map.prototype.has(obj);
}
catch(e) {
  return true;
}</div>}
```
###basic functionality
          
```
function(){
              <div class="code">var key = {};
var map = new Map();

map.set(key, 123);

return map.has(key) &amp;&amp; map.get(key) === 123;</div>}
```
###constructor arguments
          
```
function(){
              <div class="code">var key1 = {};
var key2 = {};
var map = new Map([[key1, 123], [key2, 456]]);

return map.has(key1) &amp;&amp; map.get(key1) === 123 &amp;&amp;
       map.has(key2) &amp;&amp; map.get(key2) === 456;</div>}
```
###constructor requires new
          
```
function(){
              <div class="code">new Map();
try {
  Map();
  return false;
} catch(e) {
  return true;
}</div>}
```
###constructor accepts null
          
```
function(){
              <div class="code">new Map(null);
return true;</div>}
```
###constructor invokes set
          
```
function(){
              <div class="code">var passed = false;
var _set = Map.prototype.set;

Map.prototype.set = function(k, v) {
  passed = true;
};

new Map([ [1, 2] ]);
Map.prototype.set = _set;

return passed;</div>}
```
###Map.prototype.set returns this
          
```
function(){
              <div class="code">var map = new Map();
return map.set(0, 0) === map;</div>}
```
###Map.prototype.size
          
```
function(){
              <div class="code">var key = {};
var map = new Map();

map.set(key, 123);

return map.size === 1;</div>}
```
###Map.prototype.delete
          
```
function(){
              <div class="code">return typeof Map.prototype.delete === &quot;function&quot;;</div>}
```
###Map.prototype.clear
          
```
function(){
              <div class="code">return typeof Map.prototype.clear === &quot;function&quot;;</div>}
```
###Map.prototype.forEach
          
```
function(){
              <div class="code">return typeof Map.prototype.forEach === &quot;function&quot;;</div>}
```
###Map.prototype.keys
          
```
function(){
              <div class="code">return typeof Map.prototype.keys === &quot;function&quot;;</div>}
```
###Map.prototype.values
          
```
function(){
              <div class="code">return typeof Map.prototype.values === &quot;function&quot;;</div>}
```
###Map.prototype.entries
          
```
function(){
              <div class="code">return typeof Map.prototype.entries === &quot;function&quot;;</div>}
```
###Map.prototype[Symbol.iterator]
          
```
function(){
              <div class="code">return typeof Map.prototype[Symbol.iterator] === &quot;function&quot;;</div>}
```
###Map.prototype isn't an instance
          
```
function(){
              <div class="code">new Map();
var obj = {};
try {
  Map.prototype.has(obj);
}
catch(e) {
  return true;
}</div>}
```
###basic functionality
          
```
function(){
              <div class="code">var key = {};
var map = new Map();

map.set(key, 123);

return map.has(key) &amp;&amp; map.get(key) === 123;</div>}
```
###constructor arguments
          
```
function(){
              <div class="code">var key1 = {};
var key2 = {};
var map = new Map([[key1, 123], [key2, 456]]);

return map.has(key1) &amp;&amp; map.get(key1) === 123 &amp;&amp;
       map.has(key2) &amp;&amp; map.get(key2) === 456;</div>}
```
###constructor requires new
          
```
function(){
              <div class="code">new Map();
try {
  Map();
  return false;
} catch(e) {
  return true;
}</div>}
```
###constructor accepts null
          
```
function(){
              <div class="code">new Map(null);
return true;</div>}
```
###constructor invokes set
          
```
function(){
              <div class="code">var passed = false;
var _set = Map.prototype.set;

Map.prototype.set = function(k, v) {
  passed = true;
};

new Map([ [1, 2] ]);
Map.prototype.set = _set;

return passed;</div>}
```
###Map.prototype.set returns this
          
```
function(){
              <div class="code">var map = new Map();
return map.set(0, 0) === map;</div>}
```
###Map.prototype.size
          
```
function(){
              <div class="code">var key = {};
var map = new Map();

map.set(key, 123);

return map.size === 1;</div>}
```
###Map.prototype.delete
          
```
function(){
              <div class="code">return typeof Map.prototype.delete === &quot;function&quot;;</div>}
```
###Map.prototype.clear
          
```
function(){
              <div class="code">return typeof Map.prototype.clear === &quot;function&quot;;</div>}
```
###Map.prototype.forEach
          
```
function(){
              <div class="code">return typeof Map.prototype.forEach === &quot;function&quot;;</div>}
```
###Map.prototype.keys
          
```
function(){
              <div class="code">return typeof Map.prototype.keys === &quot;function&quot;;</div>}
```
###Map.prototype.values
          
```
function(){
              <div class="code">return typeof Map.prototype.values === &quot;function&quot;;</div>}
```
###Map.prototype.entries
          
```
function(){
              <div class="code">return typeof Map.prototype.entries === &quot;function&quot;;</div>}
```
###Map.prototype[Symbol.iterator]
          
```
function(){
              <div class="code">return typeof Map.prototype[Symbol.iterator] === &quot;function&quot;;</div>}
```
###Map.prototype isn't an instance
          
```
function(){
              <div class="code">new Map();
var obj = {};
try {
  Map.prototype.has(obj);
}
catch(e) {
  return true;
}</div>}
```
###basic functionality
          
```
function(){
              <div class="code">var key = {};
var map = new Map();

map.set(key, 123);

return map.has(key) &amp;&amp; map.get(key) === 123;</div>}
```
###constructor arguments
          
```
function(){
              <div class="code">var key1 = {};
var key2 = {};
var map = new Map([[key1, 123], [key2, 456]]);

return map.has(key1) &amp;&amp; map.get(key1) === 123 &amp;&amp;
       map.has(key2) &amp;&amp; map.get(key2) === 456;</div>}
```
###constructor requires new
          
```
function(){
              <div class="code">new Map();
try {
  Map();
  return false;
} catch(e) {
  return true;
}</div>}
```
###constructor accepts null
          
```
function(){
              <div class="code">new Map(null);
return true;</div>}
```
###constructor invokes set
          
```
function(){
              <div class="code">var passed = false;
var _set = Map.prototype.set;

Map.prototype.set = function(k, v) {
  passed = true;
};

new Map([ [1, 2] ]);
Map.prototype.set = _set;

return passed;</div>}
```
###Map.prototype.set returns this
          
```
function(){
              <div class="code">var map = new Map();
return map.set(0, 0) === map;</div>}
```
###Map.prototype.size
          
```
function(){
              <div class="code">var key = {};
var map = new Map();

map.set(key, 123);

return map.size === 1;</div>}
```
###Map.prototype.delete
          
```
function(){
              <div class="code">return typeof Map.prototype.delete === &quot;function&quot;;</div>}
```
###Map.prototype.clear
          
```
function(){
              <div class="code">return typeof Map.prototype.clear === &quot;function&quot;;</div>}
```
###Map.prototype.forEach
          
```
function(){
              <div class="code">return typeof Map.prototype.forEach === &quot;function&quot;;</div>}
```
###Map.prototype.keys
          
```
function(){
              <div class="code">return typeof Map.prototype.keys === &quot;function&quot;;</div>}
```
###Map.prototype.values
          
```
function(){
              <div class="code">return typeof Map.prototype.values === &quot;function&quot;;</div>}
```
###Map.prototype.entries
          
```
function(){
              <div class="code">return typeof Map.prototype.entries === &quot;function&quot;;</div>}
```
###Map.prototype[Symbol.iterator]
          
```
function(){
              <div class="code">return typeof Map.prototype[Symbol.iterator] === &quot;function&quot;;</div>}
```
###Map.prototype isn't an instance
          
```
function(){
              <div class="code">new Map();
var obj = {};
try {
  Map.prototype.has(obj);
}
catch(e) {
  return true;
}</div>}
```
###basic functionality
          
```
function(){
              <div class="code">var key = {};
var map = new Map();

map.set(key, 123);

return map.has(key) &amp;&amp; map.get(key) === 123;</div>}
```
###constructor arguments
          
```
function(){
              <div class="code">var key1 = {};
var key2 = {};
var map = new Map([[key1, 123], [key2, 456]]);

return map.has(key1) &amp;&amp; map.get(key1) === 123 &amp;&amp;
       map.has(key2) &amp;&amp; map.get(key2) === 456;</div>}
```
###constructor requires new
          
```
function(){
              <div class="code">new Map();
try {
  Map();
  return false;
} catch(e) {
  return true;
}</div>}
```
###constructor accepts null
          
```
function(){
              <div class="code">new Map(null);
return true;</div>}
```
###constructor invokes set
          
```
function(){
              <div class="code">var passed = false;
var _set = Map.prototype.set;

Map.prototype.set = function(k, v) {
  passed = true;
};

new Map([ [1, 2] ]);
Map.prototype.set = _set;

return passed;</div>}
```
###Map.prototype.set returns this
          
```
function(){
              <div class="code">var map = new Map();
return map.set(0, 0) === map;</div>}
```
###Map.prototype.size
          
```
function(){
              <div class="code">var key = {};
var map = new Map();

map.set(key, 123);

return map.size === 1;</div>}
```
###Map.prototype.delete
          
```
function(){
              <div class="code">return typeof Map.prototype.delete === &quot;function&quot;;</div>}
```
###Map.prototype.clear
          
```
function(){
              <div class="code">return typeof Map.prototype.clear === &quot;function&quot;;</div>}
```
###Map.prototype.forEach
          
```
function(){
              <div class="code">return typeof Map.prototype.forEach === &quot;function&quot;;</div>}
```
###Map.prototype.keys
          
```
function(){
              <div class="code">return typeof Map.prototype.keys === &quot;function&quot;;</div>}
```
###Map.prototype.values
          
```
function(){
              <div class="code">return typeof Map.prototype.values === &quot;function&quot;;</div>}
```
###Map.prototype.entries
          
```
function(){
              <div class="code">return typeof Map.prototype.entries === &quot;function&quot;;</div>}
```
###Map.prototype[Symbol.iterator]
          
```
function(){
              <div class="code">return typeof Map.prototype[Symbol.iterator] === &quot;function&quot;;</div>}
```
###Map.prototype isn't an instance
          
```
function(){
              <div class="code">new Map();
var obj = {};
try {
  Map.prototype.has(obj);
}
catch(e) {
  return true;
}</div>}
```
###basic functionality
          
```
function(){
              <div class="code">var key = {};
var map = new Map();

map.set(key, 123);

return map.has(key) &amp;&amp; map.get(key) === 123;</div>}
```
###constructor arguments
          
```
function(){
              <div class="code">var key1 = {};
var key2 = {};
var map = new Map([[key1, 123], [key2, 456]]);

return map.has(key1) &amp;&amp; map.get(key1) === 123 &amp;&amp;
       map.has(key2) &amp;&amp; map.get(key2) === 456;</div>}
```
###constructor requires new
          
```
function(){
              <div class="code">new Map();
try {
  Map();
  return false;
} catch(e) {
  return true;
}</div>}
```
###constructor accepts null
          
```
function(){
              <div class="code">new Map(null);
return true;</div>}
```
###constructor invokes set
          
```
function(){
              <div class="code">var passed = false;
var _set = Map.prototype.set;

Map.prototype.set = function(k, v) {
  passed = true;
};

new Map([ [1, 2] ]);
Map.prototype.set = _set;

return passed;</div>}
```
###Map.prototype.set returns this
          
```
function(){
              <div class="code">var map = new Map();
return map.set(0, 0) === map;</div>}
```
###Map.prototype.size
          
```
function(){
              <div class="code">var key = {};
var map = new Map();

map.set(key, 123);

return map.size === 1;</div>}
```
###Map.prototype.delete
          
```
function(){
              <div class="code">return typeof Map.prototype.delete === &quot;function&quot;;</div>}
```
###Map.prototype.clear
          
```
function(){
              <div class="code">return typeof Map.prototype.clear === &quot;function&quot;;</div>}
```
###Map.prototype.forEach
          
```
function(){
              <div class="code">return typeof Map.prototype.forEach === &quot;function&quot;;</div>}
```
###Map.prototype.keys
          
```
function(){
              <div class="code">return typeof Map.prototype.keys === &quot;function&quot;;</div>}
```
###Map.prototype.values
          
```
function(){
              <div class="code">return typeof Map.prototype.values === &quot;function&quot;;</div>}
```
###Map.prototype.entries
          
```
function(){
              <div class="code">return typeof Map.prototype.entries === &quot;function&quot;;</div>}
```
###Map.prototype[Symbol.iterator]
          
```
function(){
              <div class="code">return typeof Map.prototype[Symbol.iterator] === &quot;function&quot;;</div>}
```
###Map.prototype isn't an instance
          
```
function(){
              <div class="code">new Map();
var obj = {};
try {
  Map.prototype.has(obj);
}
catch(e) {
  return true;
}</div>}
```
###basic functionality
          
```
function(){
              <div class="code">var key = {};
var map = new Map();

map.set(key, 123);

return map.has(key) &amp;&amp; map.get(key) === 123;</div>}
```
###constructor arguments
          
```
function(){
              <div class="code">var key1 = {};
var key2 = {};
var map = new Map([[key1, 123], [key2, 456]]);

return map.has(key1) &amp;&amp; map.get(key1) === 123 &amp;&amp;
       map.has(key2) &amp;&amp; map.get(key2) === 456;</div>}
```
###constructor requires new
          
```
function(){
              <div class="code">new Map();
try {
  Map();
  return false;
} catch(e) {
  return true;
}</div>}
```
###constructor accepts null
          
```
function(){
              <div class="code">new Map(null);
return true;</div>}
```
###constructor invokes set
          
```
function(){
              <div class="code">var passed = false;
var _set = Map.prototype.set;

Map.prototype.set = function(k, v) {
  passed = true;
};

new Map([ [1, 2] ]);
Map.prototype.set = _set;

return passed;</div>}
```
###Map.prototype.set returns this
          
```
function(){
              <div class="code">var map = new Map();
return map.set(0, 0) === map;</div>}
```
###Map.prototype.size
          
```
function(){
              <div class="code">var key = {};
var map = new Map();

map.set(key, 123);

return map.size === 1;</div>}
```
###Map.prototype.delete
          
```
function(){
              <div class="code">return typeof Map.prototype.delete === &quot;function&quot;;</div>}
```
###Map.prototype.clear
          
```
function(){
              <div class="code">return typeof Map.prototype.clear === &quot;function&quot;;</div>}
```
###Map.prototype.forEach
          
```
function(){
              <div class="code">return typeof Map.prototype.forEach === &quot;function&quot;;</div>}
```
###Map.prototype.keys
          
```
function(){
              <div class="code">return typeof Map.prototype.keys === &quot;function&quot;;</div>}
```
###Map.prototype.values
          
```
function(){
              <div class="code">return typeof Map.prototype.values === &quot;function&quot;;</div>}
```
###Map.prototype.entries
          
```
function(){
              <div class="code">return typeof Map.prototype.entries === &quot;function&quot;;</div>}
```
###Map.prototype[Symbol.iterator]
          
```
function(){
              <div class="code">return typeof Map.prototype[Symbol.iterator] === &quot;function&quot;;</div>}
```
###Map.prototype isn't an instance
          
```
function(){
              <div class="code">new Map();
var obj = {};
try {
  Map.prototype.has(obj);
}
catch(e) {
  return true;
}</div>}
```
