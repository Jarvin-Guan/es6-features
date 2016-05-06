###basic functionality
          
```
function(){
              <div class="code">var obj1 = {};
var weakset = new WeakSet();

weakset.add(obj1);
weakset.add(obj1);

return weakset.has(obj1);</div>}
```
###constructor arguments
          
```
function(){
              <div class="code">var obj1 = {}, obj2 = {};
var weakset = new WeakSet([obj1, obj2]);

return weakset.has(obj1) &amp;&amp; weakset.has(obj2);</div>}
```
###constructor requires new
          
```
function(){
              <div class="code">new WeakSet();
try {
  WeakSet();
  return false;
} catch(e) {
  return true;
}</div>}
```
###constructor accepts null
          
```
function(){
              <div class="code">new WeakSet(null);
return true;</div>}
```
###constructor invokes add
          
```
function(){
              <div class="code">var passed = false;
var _add = WeakSet.prototype.add;

WeakSet.prototype.add = function(v) {
  passed = true;
};

new WeakSet([ { } ]);
WeakSet.prototype.add = _add;

return passed;</div>}
```
###WeakSet.prototype.add returns this
          
```
function(){
              <div class="code">var weakset = new WeakSet();
var obj = {};
return weakset.add(obj) === weakset;</div>}
```
###WeakSet.prototype.delete
          
```
function(){
              <div class="code">return typeof WeakSet.prototype.delete === &quot;function&quot;;</div>}
```
###WeakSet.prototype isn't an instance
          
```
function(){
              <div class="code">new WeakSet();
var obj = {};
try {
  WeakSet.prototype.has(obj);
}
catch(e) {
  return true;
}</div>}
```
###basic functionality
          
```
function(){
              <div class="code">var obj1 = {};
var weakset = new WeakSet();

weakset.add(obj1);
weakset.add(obj1);

return weakset.has(obj1);</div>}
```
###constructor arguments
          
```
function(){
              <div class="code">var obj1 = {}, obj2 = {};
var weakset = new WeakSet([obj1, obj2]);

return weakset.has(obj1) &amp;&amp; weakset.has(obj2);</div>}
```
###constructor requires new
          
```
function(){
              <div class="code">new WeakSet();
try {
  WeakSet();
  return false;
} catch(e) {
  return true;
}</div>}
```
###constructor accepts null
          
```
function(){
              <div class="code">new WeakSet(null);
return true;</div>}
```
###constructor invokes add
          
```
function(){
              <div class="code">var passed = false;
var _add = WeakSet.prototype.add;

WeakSet.prototype.add = function(v) {
  passed = true;
};

new WeakSet([ { } ]);
WeakSet.prototype.add = _add;

return passed;</div>}
```
###WeakSet.prototype.add returns this
          
```
function(){
              <div class="code">var weakset = new WeakSet();
var obj = {};
return weakset.add(obj) === weakset;</div>}
```
###WeakSet.prototype.delete
          
```
function(){
              <div class="code">return typeof WeakSet.prototype.delete === &quot;function&quot;;</div>}
```
###WeakSet.prototype isn't an instance
          
```
function(){
              <div class="code">new WeakSet();
var obj = {};
try {
  WeakSet.prototype.has(obj);
}
catch(e) {
  return true;
}</div>}
```
###basic functionality
          
```
function(){
              <div class="code">var obj1 = {};
var weakset = new WeakSet();

weakset.add(obj1);
weakset.add(obj1);

return weakset.has(obj1);</div>}
```
###constructor arguments
          
```
function(){
              <div class="code">var obj1 = {}, obj2 = {};
var weakset = new WeakSet([obj1, obj2]);

return weakset.has(obj1) &amp;&amp; weakset.has(obj2);</div>}
```
###constructor requires new
          
```
function(){
              <div class="code">new WeakSet();
try {
  WeakSet();
  return false;
} catch(e) {
  return true;
}</div>}
```
###constructor accepts null
          
```
function(){
              <div class="code">new WeakSet(null);
return true;</div>}
```
###constructor invokes add
          
```
function(){
              <div class="code">var passed = false;
var _add = WeakSet.prototype.add;

WeakSet.prototype.add = function(v) {
  passed = true;
};

new WeakSet([ { } ]);
WeakSet.prototype.add = _add;

return passed;</div>}
```
###WeakSet.prototype.add returns this
          
```
function(){
              <div class="code">var weakset = new WeakSet();
var obj = {};
return weakset.add(obj) === weakset;</div>}
```
###WeakSet.prototype.delete
          
```
function(){
              <div class="code">return typeof WeakSet.prototype.delete === &quot;function&quot;;</div>}
```
###WeakSet.prototype isn't an instance
          
```
function(){
              <div class="code">new WeakSet();
var obj = {};
try {
  WeakSet.prototype.has(obj);
}
catch(e) {
  return true;
}</div>}
```
###basic functionality
          
```
function(){
              <div class="code">var obj1 = {};
var weakset = new WeakSet();

weakset.add(obj1);
weakset.add(obj1);

return weakset.has(obj1);</div>}
```
###constructor arguments
          
```
function(){
              <div class="code">var obj1 = {}, obj2 = {};
var weakset = new WeakSet([obj1, obj2]);

return weakset.has(obj1) &amp;&amp; weakset.has(obj2);</div>}
```
###constructor requires new
          
```
function(){
              <div class="code">new WeakSet();
try {
  WeakSet();
  return false;
} catch(e) {
  return true;
}</div>}
```
###constructor accepts null
          
```
function(){
              <div class="code">new WeakSet(null);
return true;</div>}
```
###constructor invokes add
          
```
function(){
              <div class="code">var passed = false;
var _add = WeakSet.prototype.add;

WeakSet.prototype.add = function(v) {
  passed = true;
};

new WeakSet([ { } ]);
WeakSet.prototype.add = _add;

return passed;</div>}
```
###WeakSet.prototype.add returns this
          
```
function(){
              <div class="code">var weakset = new WeakSet();
var obj = {};
return weakset.add(obj) === weakset;</div>}
```
###WeakSet.prototype.delete
          
```
function(){
              <div class="code">return typeof WeakSet.prototype.delete === &quot;function&quot;;</div>}
```
###WeakSet.prototype isn't an instance
          
```
function(){
              <div class="code">new WeakSet();
var obj = {};
try {
  WeakSet.prototype.has(obj);
}
catch(e) {
  return true;
}</div>}
```
###basic functionality
          
```
function(){
              <div class="code">var obj1 = {};
var weakset = new WeakSet();

weakset.add(obj1);
weakset.add(obj1);

return weakset.has(obj1);</div>}
```
###constructor arguments
          
```
function(){
              <div class="code">var obj1 = {}, obj2 = {};
var weakset = new WeakSet([obj1, obj2]);

return weakset.has(obj1) &amp;&amp; weakset.has(obj2);</div>}
```
###constructor requires new
          
```
function(){
              <div class="code">new WeakSet();
try {
  WeakSet();
  return false;
} catch(e) {
  return true;
}</div>}
```
###constructor accepts null
          
```
function(){
              <div class="code">new WeakSet(null);
return true;</div>}
```
###constructor invokes add
          
```
function(){
              <div class="code">var passed = false;
var _add = WeakSet.prototype.add;

WeakSet.prototype.add = function(v) {
  passed = true;
};

new WeakSet([ { } ]);
WeakSet.prototype.add = _add;

return passed;</div>}
```
###WeakSet.prototype.add returns this
          
```
function(){
              <div class="code">var weakset = new WeakSet();
var obj = {};
return weakset.add(obj) === weakset;</div>}
```
###WeakSet.prototype.delete
          
```
function(){
              <div class="code">return typeof WeakSet.prototype.delete === &quot;function&quot;;</div>}
```
###WeakSet.prototype isn't an instance
          
```
function(){
              <div class="code">new WeakSet();
var obj = {};
try {
  WeakSet.prototype.has(obj);
}
catch(e) {
  return true;
}</div>}
```
###basic functionality
          
```
function(){
              <div class="code">var obj1 = {};
var weakset = new WeakSet();

weakset.add(obj1);
weakset.add(obj1);

return weakset.has(obj1);</div>}
```
###constructor arguments
          
```
function(){
              <div class="code">var obj1 = {}, obj2 = {};
var weakset = new WeakSet([obj1, obj2]);

return weakset.has(obj1) &amp;&amp; weakset.has(obj2);</div>}
```
###constructor requires new
          
```
function(){
              <div class="code">new WeakSet();
try {
  WeakSet();
  return false;
} catch(e) {
  return true;
}</div>}
```
###constructor accepts null
          
```
function(){
              <div class="code">new WeakSet(null);
return true;</div>}
```
###constructor invokes add
          
```
function(){
              <div class="code">var passed = false;
var _add = WeakSet.prototype.add;

WeakSet.prototype.add = function(v) {
  passed = true;
};

new WeakSet([ { } ]);
WeakSet.prototype.add = _add;

return passed;</div>}
```
###WeakSet.prototype.add returns this
          
```
function(){
              <div class="code">var weakset = new WeakSet();
var obj = {};
return weakset.add(obj) === weakset;</div>}
```
###WeakSet.prototype.delete
          
```
function(){
              <div class="code">return typeof WeakSet.prototype.delete === &quot;function&quot;;</div>}
```
###WeakSet.prototype isn't an instance
          
```
function(){
              <div class="code">new WeakSet();
var obj = {};
try {
  WeakSet.prototype.has(obj);
}
catch(e) {
  return true;
}</div>}
```
###basic functionality
          
```
function(){
              <div class="code">var obj1 = {};
var weakset = new WeakSet();

weakset.add(obj1);
weakset.add(obj1);

return weakset.has(obj1);</div>}
```
###constructor arguments
          
```
function(){
              <div class="code">var obj1 = {}, obj2 = {};
var weakset = new WeakSet([obj1, obj2]);

return weakset.has(obj1) &amp;&amp; weakset.has(obj2);</div>}
```
###constructor requires new
          
```
function(){
              <div class="code">new WeakSet();
try {
  WeakSet();
  return false;
} catch(e) {
  return true;
}</div>}
```
###constructor accepts null
          
```
function(){
              <div class="code">new WeakSet(null);
return true;</div>}
```
###constructor invokes add
          
```
function(){
              <div class="code">var passed = false;
var _add = WeakSet.prototype.add;

WeakSet.prototype.add = function(v) {
  passed = true;
};

new WeakSet([ { } ]);
WeakSet.prototype.add = _add;

return passed;</div>}
```
###WeakSet.prototype.add returns this
          
```
function(){
              <div class="code">var weakset = new WeakSet();
var obj = {};
return weakset.add(obj) === weakset;</div>}
```
###WeakSet.prototype.delete
          
```
function(){
              <div class="code">return typeof WeakSet.prototype.delete === &quot;function&quot;;</div>}
```
###WeakSet.prototype isn't an instance
          
```
function(){
              <div class="code">new WeakSet();
var obj = {};
try {
  WeakSet.prototype.has(obj);
}
catch(e) {
  return true;
}</div>}
```
###basic functionality
          
```
function(){
              <div class="code">var obj1 = {};
var weakset = new WeakSet();

weakset.add(obj1);
weakset.add(obj1);

return weakset.has(obj1);</div>}
```
###constructor arguments
          
```
function(){
              <div class="code">var obj1 = {}, obj2 = {};
var weakset = new WeakSet([obj1, obj2]);

return weakset.has(obj1) &amp;&amp; weakset.has(obj2);</div>}
```
###constructor requires new
          
```
function(){
              <div class="code">new WeakSet();
try {
  WeakSet();
  return false;
} catch(e) {
  return true;
}</div>}
```
###constructor accepts null
          
```
function(){
              <div class="code">new WeakSet(null);
return true;</div>}
```
###constructor invokes add
          
```
function(){
              <div class="code">var passed = false;
var _add = WeakSet.prototype.add;

WeakSet.prototype.add = function(v) {
  passed = true;
};

new WeakSet([ { } ]);
WeakSet.prototype.add = _add;

return passed;</div>}
```
###WeakSet.prototype.add returns this
          
```
function(){
              <div class="code">var weakset = new WeakSet();
var obj = {};
return weakset.add(obj) === weakset;</div>}
```
###WeakSet.prototype.delete
          
```
function(){
              <div class="code">return typeof WeakSet.prototype.delete === &quot;function&quot;;</div>}
```
###WeakSet.prototype isn't an instance
          
```
function(){
              <div class="code">new WeakSet();
var obj = {};
try {
  WeakSet.prototype.has(obj);
}
catch(e) {
  return true;
}</div>}
```
###basic functionality
          
```
function(){
              <div class="code">var obj1 = {};
var weakset = new WeakSet();

weakset.add(obj1);
weakset.add(obj1);

return weakset.has(obj1);</div>}
```
###constructor arguments
          
```
function(){
              <div class="code">var obj1 = {}, obj2 = {};
var weakset = new WeakSet([obj1, obj2]);

return weakset.has(obj1) &amp;&amp; weakset.has(obj2);</div>}
```
###constructor requires new
          
```
function(){
              <div class="code">new WeakSet();
try {
  WeakSet();
  return false;
} catch(e) {
  return true;
}</div>}
```
###constructor accepts null
          
```
function(){
              <div class="code">new WeakSet(null);
return true;</div>}
```
###constructor invokes add
          
```
function(){
              <div class="code">var passed = false;
var _add = WeakSet.prototype.add;

WeakSet.prototype.add = function(v) {
  passed = true;
};

new WeakSet([ { } ]);
WeakSet.prototype.add = _add;

return passed;</div>}
```
###WeakSet.prototype.add returns this
          
```
function(){
              <div class="code">var weakset = new WeakSet();
var obj = {};
return weakset.add(obj) === weakset;</div>}
```
###WeakSet.prototype.delete
          
```
function(){
              <div class="code">return typeof WeakSet.prototype.delete === &quot;function&quot;;</div>}
```
###WeakSet.prototype isn't an instance
          
```
function(){
              <div class="code">new WeakSet();
var obj = {};
try {
  WeakSet.prototype.has(obj);
}
catch(e) {
  return true;
}</div>}
```
###basic functionality
          
```
function(){
              <div class="code">var obj1 = {};
var weakset = new WeakSet();

weakset.add(obj1);
weakset.add(obj1);

return weakset.has(obj1);</div>}
```
###constructor arguments
          
```
function(){
              <div class="code">var obj1 = {}, obj2 = {};
var weakset = new WeakSet([obj1, obj2]);

return weakset.has(obj1) &amp;&amp; weakset.has(obj2);</div>}
```
###constructor requires new
          
```
function(){
              <div class="code">new WeakSet();
try {
  WeakSet();
  return false;
} catch(e) {
  return true;
}</div>}
```
###constructor accepts null
          
```
function(){
              <div class="code">new WeakSet(null);
return true;</div>}
```
###constructor invokes add
          
```
function(){
              <div class="code">var passed = false;
var _add = WeakSet.prototype.add;

WeakSet.prototype.add = function(v) {
  passed = true;
};

new WeakSet([ { } ]);
WeakSet.prototype.add = _add;

return passed;</div>}
```
###WeakSet.prototype.add returns this
          
```
function(){
              <div class="code">var weakset = new WeakSet();
var obj = {};
return weakset.add(obj) === weakset;</div>}
```
###WeakSet.prototype.delete
          
```
function(){
              <div class="code">return typeof WeakSet.prototype.delete === &quot;function&quot;;</div>}
```
###WeakSet.prototype isn't an instance
          
```
function(){
              <div class="code">new WeakSet();
var obj = {};
try {
  WeakSet.prototype.has(obj);
}
catch(e) {
  return true;
}</div>}
```
###basic functionality
          
```
function(){
              <div class="code">var obj1 = {};
var weakset = new WeakSet();

weakset.add(obj1);
weakset.add(obj1);

return weakset.has(obj1);</div>}
```
###constructor arguments
          
```
function(){
              <div class="code">var obj1 = {}, obj2 = {};
var weakset = new WeakSet([obj1, obj2]);

return weakset.has(obj1) &amp;&amp; weakset.has(obj2);</div>}
```
###constructor requires new
          
```
function(){
              <div class="code">new WeakSet();
try {
  WeakSet();
  return false;
} catch(e) {
  return true;
}</div>}
```
###constructor accepts null
          
```
function(){
              <div class="code">new WeakSet(null);
return true;</div>}
```
###constructor invokes add
          
```
function(){
              <div class="code">var passed = false;
var _add = WeakSet.prototype.add;

WeakSet.prototype.add = function(v) {
  passed = true;
};

new WeakSet([ { } ]);
WeakSet.prototype.add = _add;

return passed;</div>}
```
###WeakSet.prototype.add returns this
          
```
function(){
              <div class="code">var weakset = new WeakSet();
var obj = {};
return weakset.add(obj) === weakset;</div>}
```
###WeakSet.prototype.delete
          
```
function(){
              <div class="code">return typeof WeakSet.prototype.delete === &quot;function&quot;;</div>}
```
###WeakSet.prototype isn't an instance
          
```
function(){
              <div class="code">new WeakSet();
var obj = {};
try {
  WeakSet.prototype.has(obj);
}
catch(e) {
  return true;
}</div>}
```
###basic functionality
          
```
function(){
              <div class="code">var obj1 = {};
var weakset = new WeakSet();

weakset.add(obj1);
weakset.add(obj1);

return weakset.has(obj1);</div>}
```
###constructor arguments
          
```
function(){
              <div class="code">var obj1 = {}, obj2 = {};
var weakset = new WeakSet([obj1, obj2]);

return weakset.has(obj1) &amp;&amp; weakset.has(obj2);</div>}
```
###constructor requires new
          
```
function(){
              <div class="code">new WeakSet();
try {
  WeakSet();
  return false;
} catch(e) {
  return true;
}</div>}
```
###constructor accepts null
          
```
function(){
              <div class="code">new WeakSet(null);
return true;</div>}
```
###constructor invokes add
          
```
function(){
              <div class="code">var passed = false;
var _add = WeakSet.prototype.add;

WeakSet.prototype.add = function(v) {
  passed = true;
};

new WeakSet([ { } ]);
WeakSet.prototype.add = _add;

return passed;</div>}
```
###WeakSet.prototype.add returns this
          
```
function(){
              <div class="code">var weakset = new WeakSet();
var obj = {};
return weakset.add(obj) === weakset;</div>}
```
###WeakSet.prototype.delete
          
```
function(){
              <div class="code">return typeof WeakSet.prototype.delete === &quot;function&quot;;</div>}
```
###WeakSet.prototype isn't an instance
          
```
function(){
              <div class="code">new WeakSet();
var obj = {};
try {
  WeakSet.prototype.has(obj);
}
catch(e) {
  return true;
}</div>}
```
###basic functionality
          
```
function(){
              <div class="code">var obj1 = {};
var weakset = new WeakSet();

weakset.add(obj1);
weakset.add(obj1);

return weakset.has(obj1);</div>}
```
###constructor arguments
          
```
function(){
              <div class="code">var obj1 = {}, obj2 = {};
var weakset = new WeakSet([obj1, obj2]);

return weakset.has(obj1) &amp;&amp; weakset.has(obj2);</div>}
```
###constructor requires new
          
```
function(){
              <div class="code">new WeakSet();
try {
  WeakSet();
  return false;
} catch(e) {
  return true;
}</div>}
```
###constructor accepts null
          
```
function(){
              <div class="code">new WeakSet(null);
return true;</div>}
```
###constructor invokes add
          
```
function(){
              <div class="code">var passed = false;
var _add = WeakSet.prototype.add;

WeakSet.prototype.add = function(v) {
  passed = true;
};

new WeakSet([ { } ]);
WeakSet.prototype.add = _add;

return passed;</div>}
```
###WeakSet.prototype.add returns this
          
```
function(){
              <div class="code">var weakset = new WeakSet();
var obj = {};
return weakset.add(obj) === weakset;</div>}
```
###WeakSet.prototype.delete
          
```
function(){
              <div class="code">return typeof WeakSet.prototype.delete === &quot;function&quot;;</div>}
```
###WeakSet.prototype isn't an instance
          
```
function(){
              <div class="code">new WeakSet();
var obj = {};
try {
  WeakSet.prototype.has(obj);
}
catch(e) {
  return true;
}</div>}
```
###basic functionality
          
```
function(){
              <div class="code">var obj1 = {};
var weakset = new WeakSet();

weakset.add(obj1);
weakset.add(obj1);

return weakset.has(obj1);</div>}
```
###constructor arguments
          
```
function(){
              <div class="code">var obj1 = {}, obj2 = {};
var weakset = new WeakSet([obj1, obj2]);

return weakset.has(obj1) &amp;&amp; weakset.has(obj2);</div>}
```
###constructor requires new
          
```
function(){
              <div class="code">new WeakSet();
try {
  WeakSet();
  return false;
} catch(e) {
  return true;
}</div>}
```
###constructor accepts null
          
```
function(){
              <div class="code">new WeakSet(null);
return true;</div>}
```
###constructor invokes add
          
```
function(){
              <div class="code">var passed = false;
var _add = WeakSet.prototype.add;

WeakSet.prototype.add = function(v) {
  passed = true;
};

new WeakSet([ { } ]);
WeakSet.prototype.add = _add;

return passed;</div>}
```
###WeakSet.prototype.add returns this
          
```
function(){
              <div class="code">var weakset = new WeakSet();
var obj = {};
return weakset.add(obj) === weakset;</div>}
```
###WeakSet.prototype.delete
          
```
function(){
              <div class="code">return typeof WeakSet.prototype.delete === &quot;function&quot;;</div>}
```
###WeakSet.prototype isn't an instance
          
```
function(){
              <div class="code">new WeakSet();
var obj = {};
try {
  WeakSet.prototype.has(obj);
}
catch(e) {
  return true;
}</div>}
```
###basic functionality
          
```
function(){
              <div class="code">var obj1 = {};
var weakset = new WeakSet();

weakset.add(obj1);
weakset.add(obj1);

return weakset.has(obj1);</div>}
```
###constructor arguments
          
```
function(){
              <div class="code">var obj1 = {}, obj2 = {};
var weakset = new WeakSet([obj1, obj2]);

return weakset.has(obj1) &amp;&amp; weakset.has(obj2);</div>}
```
###constructor requires new
          
```
function(){
              <div class="code">new WeakSet();
try {
  WeakSet();
  return false;
} catch(e) {
  return true;
}</div>}
```
###constructor accepts null
          
```
function(){
              <div class="code">new WeakSet(null);
return true;</div>}
```
###constructor invokes add
          
```
function(){
              <div class="code">var passed = false;
var _add = WeakSet.prototype.add;

WeakSet.prototype.add = function(v) {
  passed = true;
};

new WeakSet([ { } ]);
WeakSet.prototype.add = _add;

return passed;</div>}
```
###WeakSet.prototype.add returns this
          
```
function(){
              <div class="code">var weakset = new WeakSet();
var obj = {};
return weakset.add(obj) === weakset;</div>}
```
###WeakSet.prototype.delete
          
```
function(){
              <div class="code">return typeof WeakSet.prototype.delete === &quot;function&quot;;</div>}
```
###WeakSet.prototype isn't an instance
          
```
function(){
              <div class="code">new WeakSet();
var obj = {};
try {
  WeakSet.prototype.has(obj);
}
catch(e) {
  return true;
}</div>}
```
