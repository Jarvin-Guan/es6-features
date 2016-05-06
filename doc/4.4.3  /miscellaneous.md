###duplicate property names in strict mode
          
```
function(){
              <div class="code">'use strict';
return this === undefined &amp;&amp; ({ a:1, a:1 }).a === 1;</div>}
```
###no semicolon needed after do-while
          
```
function(){
              <div class="code">do {} while (false) return true;</div>}
```
###no assignments allowed in for-in head
          
```
function(){
              <div class="code">try {
  eval('for (var i = 0 in {}) {}');
}
catch(e) {
  return true;
}</div>}
```
###accessors aren't constructors
          
```
function(){
              <div class="code">try {
  new (Object.getOwnPropertyDescriptor({get a(){}}, 'a')).get;
} catch(e) {
  return true;
}</div>}
```
###Invalid Date
          
```
function(){
              <div class="code">return new Date(NaN) + &quot;&quot; === &quot;Invalid Date&quot;;</div>}
```
###function 'length' is configurable
          
```
function(){
              <div class="code">var fn = function(a, b) {};

var desc = Object.getOwnPropertyDescriptor(fn, &quot;length&quot;);
if (desc.configurable) {
  Object.defineProperty(fn, &quot;length&quot;, { value: 1 });
  return fn.length === 1;
}

return false;</div>}
```
###duplicate property names in strict mode
          
```
function(){
              <div class="code">'use strict';
return this === undefined &amp;&amp; ({ a:1, a:1 }).a === 1;</div>}
```
###no semicolon needed after do-while
          
```
function(){
              <div class="code">do {} while (false) return true;</div>}
```
###no assignments allowed in for-in head
          
```
function(){
              <div class="code">try {
  eval('for (var i = 0 in {}) {}');
}
catch(e) {
  return true;
}</div>}
```
###accessors aren't constructors
          
```
function(){
              <div class="code">try {
  new (Object.getOwnPropertyDescriptor({get a(){}}, 'a')).get;
} catch(e) {
  return true;
}</div>}
```
###Invalid Date
          
```
function(){
              <div class="code">return new Date(NaN) + &quot;&quot; === &quot;Invalid Date&quot;;</div>}
```
###function 'length' is configurable
          
```
function(){
              <div class="code">var fn = function(a, b) {};

var desc = Object.getOwnPropertyDescriptor(fn, &quot;length&quot;);
if (desc.configurable) {
  Object.defineProperty(fn, &quot;length&quot;, { value: 1 });
  return fn.length === 1;
}

return false;</div>}
```
###duplicate property names in strict mode
          
```
function(){
              <div class="code">'use strict';
return this === undefined &amp;&amp; ({ a:1, a:1 }).a === 1;</div>}
```
###no semicolon needed after do-while
          
```
function(){
              <div class="code">do {} while (false) return true;</div>}
```
###no assignments allowed in for-in head
          
```
function(){
              <div class="code">try {
  eval('for (var i = 0 in {}) {}');
}
catch(e) {
  return true;
}</div>}
```
###accessors aren't constructors
          
```
function(){
              <div class="code">try {
  new (Object.getOwnPropertyDescriptor({get a(){}}, 'a')).get;
} catch(e) {
  return true;
}</div>}
```
###Invalid Date
          
```
function(){
              <div class="code">return new Date(NaN) + &quot;&quot; === &quot;Invalid Date&quot;;</div>}
```
###function 'length' is configurable
          
```
function(){
              <div class="code">var fn = function(a, b) {};

var desc = Object.getOwnPropertyDescriptor(fn, &quot;length&quot;);
if (desc.configurable) {
  Object.defineProperty(fn, &quot;length&quot;, { value: 1 });
  return fn.length === 1;
}

return false;</div>}
```
###duplicate property names in strict mode
          
```
function(){
              <div class="code">'use strict';
return this === undefined &amp;&amp; ({ a:1, a:1 }).a === 1;</div>}
```
###no semicolon needed after do-while
          
```
function(){
              <div class="code">do {} while (false) return true;</div>}
```
###no assignments allowed in for-in head
          
```
function(){
              <div class="code">try {
  eval('for (var i = 0 in {}) {}');
}
catch(e) {
  return true;
}</div>}
```
###accessors aren't constructors
          
```
function(){
              <div class="code">try {
  new (Object.getOwnPropertyDescriptor({get a(){}}, 'a')).get;
} catch(e) {
  return true;
}</div>}
```
###Invalid Date
          
```
function(){
              <div class="code">return new Date(NaN) + &quot;&quot; === &quot;Invalid Date&quot;;</div>}
```
###function 'length' is configurable
          
```
function(){
              <div class="code">var fn = function(a, b) {};

var desc = Object.getOwnPropertyDescriptor(fn, &quot;length&quot;);
if (desc.configurable) {
  Object.defineProperty(fn, &quot;length&quot;, { value: 1 });
  return fn.length === 1;
}

return false;</div>}
```
###duplicate property names in strict mode
          
```
function(){
              <div class="code">'use strict';
return this === undefined &amp;&amp; ({ a:1, a:1 }).a === 1;</div>}
```
###no semicolon needed after do-while
          
```
function(){
              <div class="code">do {} while (false) return true;</div>}
```
###no assignments allowed in for-in head
          
```
function(){
              <div class="code">try {
  eval('for (var i = 0 in {}) {}');
}
catch(e) {
  return true;
}</div>}
```
###accessors aren't constructors
          
```
function(){
              <div class="code">try {
  new (Object.getOwnPropertyDescriptor({get a(){}}, 'a')).get;
} catch(e) {
  return true;
}</div>}
```
###Invalid Date
          
```
function(){
              <div class="code">return new Date(NaN) + &quot;&quot; === &quot;Invalid Date&quot;;</div>}
```
###function 'length' is configurable
          
```
function(){
              <div class="code">var fn = function(a, b) {};

var desc = Object.getOwnPropertyDescriptor(fn, &quot;length&quot;);
if (desc.configurable) {
  Object.defineProperty(fn, &quot;length&quot;, { value: 1 });
  return fn.length === 1;
}

return false;</div>}
```
###duplicate property names in strict mode
          
```
function(){
              <div class="code">'use strict';
return this === undefined &amp;&amp; ({ a:1, a:1 }).a === 1;</div>}
```
###no semicolon needed after do-while
          
```
function(){
              <div class="code">do {} while (false) return true;</div>}
```
###no assignments allowed in for-in head
          
```
function(){
              <div class="code">try {
  eval('for (var i = 0 in {}) {}');
}
catch(e) {
  return true;
}</div>}
```
###accessors aren't constructors
          
```
function(){
              <div class="code">try {
  new (Object.getOwnPropertyDescriptor({get a(){}}, 'a')).get;
} catch(e) {
  return true;
}</div>}
```
###Invalid Date
          
```
function(){
              <div class="code">return new Date(NaN) + &quot;&quot; === &quot;Invalid Date&quot;;</div>}
```
###function 'length' is configurable
          
```
function(){
              <div class="code">var fn = function(a, b) {};

var desc = Object.getOwnPropertyDescriptor(fn, &quot;length&quot;);
if (desc.configurable) {
  Object.defineProperty(fn, &quot;length&quot;, { value: 1 });
  return fn.length === 1;
}

return false;</div>}
```
###duplicate property names in strict mode
          
```
function(){
              <div class="code">'use strict';
return this === undefined &amp;&amp; ({ a:1, a:1 }).a === 1;</div>}
```
###no semicolon needed after do-while
          
```
function(){
              <div class="code">do {} while (false) return true;</div>}
```
###no assignments allowed in for-in head
          
```
function(){
              <div class="code">try {
  eval('for (var i = 0 in {}) {}');
}
catch(e) {
  return true;
}</div>}
```
###accessors aren't constructors
          
```
function(){
              <div class="code">try {
  new (Object.getOwnPropertyDescriptor({get a(){}}, 'a')).get;
} catch(e) {
  return true;
}</div>}
```
###Invalid Date
          
```
function(){
              <div class="code">return new Date(NaN) + &quot;&quot; === &quot;Invalid Date&quot;;</div>}
```
###function 'length' is configurable
          
```
function(){
              <div class="code">var fn = function(a, b) {};

var desc = Object.getOwnPropertyDescriptor(fn, &quot;length&quot;);
if (desc.configurable) {
  Object.defineProperty(fn, &quot;length&quot;, { value: 1 });
  return fn.length === 1;
}

return false;</div>}
```
###duplicate property names in strict mode
          
```
function(){
              <div class="code">'use strict';
return this === undefined &amp;&amp; ({ a:1, a:1 }).a === 1;</div>}
```
###no semicolon needed after do-while
          
```
function(){
              <div class="code">do {} while (false) return true;</div>}
```
###no assignments allowed in for-in head
          
```
function(){
              <div class="code">try {
  eval('for (var i = 0 in {}) {}');
}
catch(e) {
  return true;
}</div>}
```
###accessors aren't constructors
          
```
function(){
              <div class="code">try {
  new (Object.getOwnPropertyDescriptor({get a(){}}, 'a')).get;
} catch(e) {
  return true;
}</div>}
```
###Invalid Date
          
```
function(){
              <div class="code">return new Date(NaN) + &quot;&quot; === &quot;Invalid Date&quot;;</div>}
```
###function 'length' is configurable
          
```
function(){
              <div class="code">var fn = function(a, b) {};

var desc = Object.getOwnPropertyDescriptor(fn, &quot;length&quot;);
if (desc.configurable) {
  Object.defineProperty(fn, &quot;length&quot;, { value: 1 });
  return fn.length === 1;
}

return false;</div>}
```
###duplicate property names in strict mode
          
```
function(){
              <div class="code">'use strict';
return this === undefined &amp;&amp; ({ a:1, a:1 }).a === 1;</div>}
```
###no semicolon needed after do-while
          
```
function(){
              <div class="code">do {} while (false) return true;</div>}
```
###no assignments allowed in for-in head
          
```
function(){
              <div class="code">try {
  eval('for (var i = 0 in {}) {}');
}
catch(e) {
  return true;
}</div>}
```
###accessors aren't constructors
          
```
function(){
              <div class="code">try {
  new (Object.getOwnPropertyDescriptor({get a(){}}, 'a')).get;
} catch(e) {
  return true;
}</div>}
```
###Invalid Date
          
```
function(){
              <div class="code">return new Date(NaN) + &quot;&quot; === &quot;Invalid Date&quot;;</div>}
```
###function 'length' is configurable
          
```
function(){
              <div class="code">var fn = function(a, b) {};

var desc = Object.getOwnPropertyDescriptor(fn, &quot;length&quot;);
if (desc.configurable) {
  Object.defineProperty(fn, &quot;length&quot;, { value: 1 });
  return fn.length === 1;
}

return false;</div>}
```
###duplicate property names in strict mode
          
```
function(){
              <div class="code">'use strict';
return this === undefined &amp;&amp; ({ a:1, a:1 }).a === 1;</div>}
```
###no semicolon needed after do-while
          
```
function(){
              <div class="code">do {} while (false) return true;</div>}
```
###no assignments allowed in for-in head
          
```
function(){
              <div class="code">try {
  eval('for (var i = 0 in {}) {}');
}
catch(e) {
  return true;
}</div>}
```
###accessors aren't constructors
          
```
function(){
              <div class="code">try {
  new (Object.getOwnPropertyDescriptor({get a(){}}, 'a')).get;
} catch(e) {
  return true;
}</div>}
```
###Invalid Date
          
```
function(){
              <div class="code">return new Date(NaN) + &quot;&quot; === &quot;Invalid Date&quot;;</div>}
```
###function 'length' is configurable
          
```
function(){
              <div class="code">var fn = function(a, b) {};

var desc = Object.getOwnPropertyDescriptor(fn, &quot;length&quot;);
if (desc.configurable) {
  Object.defineProperty(fn, &quot;length&quot;, { value: 1 });
  return fn.length === 1;
}

return false;</div>}
```
###duplicate property names in strict mode
          
```
function(){
              <div class="code">'use strict';
return this === undefined &amp;&amp; ({ a:1, a:1 }).a === 1;</div>}
```
###no semicolon needed after do-while
          
```
function(){
              <div class="code">do {} while (false) return true;</div>}
```
###no assignments allowed in for-in head
          
```
function(){
              <div class="code">try {
  eval('for (var i = 0 in {}) {}');
}
catch(e) {
  return true;
}</div>}
```
###accessors aren't constructors
          
```
function(){
              <div class="code">try {
  new (Object.getOwnPropertyDescriptor({get a(){}}, 'a')).get;
} catch(e) {
  return true;
}</div>}
```
###Invalid Date
          
```
function(){
              <div class="code">return new Date(NaN) + &quot;&quot; === &quot;Invalid Date&quot;;</div>}
```
###function 'length' is configurable
          
```
function(){
              <div class="code">var fn = function(a, b) {};

var desc = Object.getOwnPropertyDescriptor(fn, &quot;length&quot;);
if (desc.configurable) {
  Object.defineProperty(fn, &quot;length&quot;, { value: 1 });
  return fn.length === 1;
}

return false;</div>}
```
###duplicate property names in strict mode
          
```
function(){
              <div class="code">'use strict';
return this === undefined &amp;&amp; ({ a:1, a:1 }).a === 1;</div>}
```
###no semicolon needed after do-while
          
```
function(){
              <div class="code">do {} while (false) return true;</div>}
```
###no assignments allowed in for-in head
          
```
function(){
              <div class="code">try {
  eval('for (var i = 0 in {}) {}');
}
catch(e) {
  return true;
}</div>}
```
###accessors aren't constructors
          
```
function(){
              <div class="code">try {
  new (Object.getOwnPropertyDescriptor({get a(){}}, 'a')).get;
} catch(e) {
  return true;
}</div>}
```
###Invalid Date
          
```
function(){
              <div class="code">return new Date(NaN) + &quot;&quot; === &quot;Invalid Date&quot;;</div>}
```
###function 'length' is configurable
          
```
function(){
              <div class="code">var fn = function(a, b) {};

var desc = Object.getOwnPropertyDescriptor(fn, &quot;length&quot;);
if (desc.configurable) {
  Object.defineProperty(fn, &quot;length&quot;, { value: 1 });
  return fn.length === 1;
}

return false;</div>}
```
###duplicate property names in strict mode
          
```
function(){
              <div class="code">'use strict';
return this === undefined &amp;&amp; ({ a:1, a:1 }).a === 1;</div>}
```
###no semicolon needed after do-while
          
```
function(){
              <div class="code">do {} while (false) return true;</div>}
```
###no assignments allowed in for-in head
          
```
function(){
              <div class="code">try {
  eval('for (var i = 0 in {}) {}');
}
catch(e) {
  return true;
}</div>}
```
###accessors aren't constructors
          
```
function(){
              <div class="code">try {
  new (Object.getOwnPropertyDescriptor({get a(){}}, 'a')).get;
} catch(e) {
  return true;
}</div>}
```
###Invalid Date
          
```
function(){
              <div class="code">return new Date(NaN) + &quot;&quot; === &quot;Invalid Date&quot;;</div>}
```
###function 'length' is configurable
          
```
function(){
              <div class="code">var fn = function(a, b) {};

var desc = Object.getOwnPropertyDescriptor(fn, &quot;length&quot;);
if (desc.configurable) {
  Object.defineProperty(fn, &quot;length&quot;, { value: 1 });
  return fn.length === 1;
}

return false;</div>}
```
###duplicate property names in strict mode
          
```
function(){
              <div class="code">'use strict';
return this === undefined &amp;&amp; ({ a:1, a:1 }).a === 1;</div>}
```
###no semicolon needed after do-while
          
```
function(){
              <div class="code">do {} while (false) return true;</div>}
```
###no assignments allowed in for-in head
          
```
function(){
              <div class="code">try {
  eval('for (var i = 0 in {}) {}');
}
catch(e) {
  return true;
}</div>}
```
###accessors aren't constructors
          
```
function(){
              <div class="code">try {
  new (Object.getOwnPropertyDescriptor({get a(){}}, 'a')).get;
} catch(e) {
  return true;
}</div>}
```
###Invalid Date
          
```
function(){
              <div class="code">return new Date(NaN) + &quot;&quot; === &quot;Invalid Date&quot;;</div>}
```
###function 'length' is configurable
          
```
function(){
              <div class="code">var fn = function(a, b) {};

var desc = Object.getOwnPropertyDescriptor(fn, &quot;length&quot;);
if (desc.configurable) {
  Object.defineProperty(fn, &quot;length&quot;, { value: 1 });
  return fn.length === 1;
}

return false;</div>}
```
###duplicate property names in strict mode
          
```
function(){
              <div class="code">'use strict';
return this === undefined &amp;&amp; ({ a:1, a:1 }).a === 1;</div>}
```
###no semicolon needed after do-while
          
```
function(){
              <div class="code">do {} while (false) return true;</div>}
```
###no assignments allowed in for-in head
          
```
function(){
              <div class="code">try {
  eval('for (var i = 0 in {}) {}');
}
catch(e) {
  return true;
}</div>}
```
###accessors aren't constructors
          
```
function(){
              <div class="code">try {
  new (Object.getOwnPropertyDescriptor({get a(){}}, 'a')).get;
} catch(e) {
  return true;
}</div>}
```
###Invalid Date
          
```
function(){
              <div class="code">return new Date(NaN) + &quot;&quot; === &quot;Invalid Date&quot;;</div>}
```
###function 'length' is configurable
          
```
function(){
              <div class="code">var fn = function(a, b) {};

var desc = Object.getOwnPropertyDescriptor(fn, &quot;length&quot;);
if (desc.configurable) {
  Object.defineProperty(fn, &quot;length&quot;, { value: 1 });
  return fn.length === 1;
}

return false;</div>}
```
