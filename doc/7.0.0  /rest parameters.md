###basic functionality
          
```
function(){
              <div class="code">return (function (foo, ...args) {
  return args instanceof Array &amp;&amp; args + &quot;&quot; === &quot;bar,baz&quot;;
}(&quot;foo&quot;, &quot;bar&quot;, &quot;baz&quot;));</div>}
```
###function 'length' property
          
```
function(){
              <div class="code">return function(a, ...b){}.length === 1 &amp;&amp; function(...c){}.length === 0;</div>}
```
###arguments object interaction
          
```
function(){
              <div class="code">return (function (foo, ...args) {
  foo = &quot;qux&quot;;
  // The arguments object is not mapped to the
  // parameters, even outside of strict mode.
  return arguments.length === 3
    &amp;&amp; arguments[0] === &quot;foo&quot;
    &amp;&amp; arguments[1] === &quot;bar&quot;
    &amp;&amp; arguments[2] === &quot;baz&quot;;
}(&quot;foo&quot;, &quot;bar&quot;, &quot;baz&quot;));</div>}
```
###can't be used in setters
          
```
function(){
              <div class="code">return (function (...args) {
  try {
    eval(&quot;({set e(...args){}})&quot;);
  } catch(e) {
    return true;
  }
}());</div>}
```
###new Function() support
          
```
function(){
              <div class="code">return new Function(&quot;a&quot;, &quot;...b&quot;,
  &quot;return b instanceof Array &amp;&amp; a+b === 'foobar,baz';&quot;
)('foo','bar','baz');</div>}
```
###basic functionality
          
```
function(){
              <div class="code">return (function (foo, ...args) {
  return args instanceof Array &amp;&amp; args + &quot;&quot; === &quot;bar,baz&quot;;
}(&quot;foo&quot;, &quot;bar&quot;, &quot;baz&quot;));</div>}
```
###function 'length' property
          
```
function(){
              <div class="code">return function(a, ...b){}.length === 1 &amp;&amp; function(...c){}.length === 0;</div>}
```
###arguments object interaction
          
```
function(){
              <div class="code">return (function (foo, ...args) {
  foo = &quot;qux&quot;;
  // The arguments object is not mapped to the
  // parameters, even outside of strict mode.
  return arguments.length === 3
    &amp;&amp; arguments[0] === &quot;foo&quot;
    &amp;&amp; arguments[1] === &quot;bar&quot;
    &amp;&amp; arguments[2] === &quot;baz&quot;;
}(&quot;foo&quot;, &quot;bar&quot;, &quot;baz&quot;));</div>}
```
###can't be used in setters
          
```
function(){
              <div class="code">return (function (...args) {
  try {
    eval(&quot;({set e(...args){}})&quot;);
  } catch(e) {
    return true;
  }
}());</div>}
```
###new Function() support
          
```
function(){
              <div class="code">return new Function(&quot;a&quot;, &quot;...b&quot;,
  &quot;return b instanceof Array &amp;&amp; a+b === 'foobar,baz';&quot;
)('foo','bar','baz');</div>}
```
###basic functionality
          
```
function(){
              <div class="code">return (function (foo, ...args) {
  return args instanceof Array &amp;&amp; args + &quot;&quot; === &quot;bar,baz&quot;;
}(&quot;foo&quot;, &quot;bar&quot;, &quot;baz&quot;));</div>}
```
###function 'length' property
          
```
function(){
              <div class="code">return function(a, ...b){}.length === 1 &amp;&amp; function(...c){}.length === 0;</div>}
```
###arguments object interaction
          
```
function(){
              <div class="code">return (function (foo, ...args) {
  foo = &quot;qux&quot;;
  // The arguments object is not mapped to the
  // parameters, even outside of strict mode.
  return arguments.length === 3
    &amp;&amp; arguments[0] === &quot;foo&quot;
    &amp;&amp; arguments[1] === &quot;bar&quot;
    &amp;&amp; arguments[2] === &quot;baz&quot;;
}(&quot;foo&quot;, &quot;bar&quot;, &quot;baz&quot;));</div>}
```
###can't be used in setters
          
```
function(){
              <div class="code">return (function (...args) {
  try {
    eval(&quot;({set e(...args){}})&quot;);
  } catch(e) {
    return true;
  }
}());</div>}
```
###new Function() support
          
```
function(){
              <div class="code">return new Function(&quot;a&quot;, &quot;...b&quot;,
  &quot;return b instanceof Array &amp;&amp; a+b === 'foobar,baz';&quot;
)('foo','bar','baz');</div>}
```
###basic functionality
          
```
function(){
              <div class="code">return (function (foo, ...args) {
  return args instanceof Array &amp;&amp; args + &quot;&quot; === &quot;bar,baz&quot;;
}(&quot;foo&quot;, &quot;bar&quot;, &quot;baz&quot;));</div>}
```
###function 'length' property
          
```
function(){
              <div class="code">return function(a, ...b){}.length === 1 &amp;&amp; function(...c){}.length === 0;</div>}
```
###arguments object interaction
          
```
function(){
              <div class="code">return (function (foo, ...args) {
  foo = &quot;qux&quot;;
  // The arguments object is not mapped to the
  // parameters, even outside of strict mode.
  return arguments.length === 3
    &amp;&amp; arguments[0] === &quot;foo&quot;
    &amp;&amp; arguments[1] === &quot;bar&quot;
    &amp;&amp; arguments[2] === &quot;baz&quot;;
}(&quot;foo&quot;, &quot;bar&quot;, &quot;baz&quot;));</div>}
```
###can't be used in setters
          
```
function(){
              <div class="code">return (function (...args) {
  try {
    eval(&quot;({set e(...args){}})&quot;);
  } catch(e) {
    return true;
  }
}());</div>}
```
###new Function() support
          
```
function(){
              <div class="code">return new Function(&quot;a&quot;, &quot;...b&quot;,
  &quot;return b instanceof Array &amp;&amp; a+b === 'foobar,baz';&quot;
)('foo','bar','baz');</div>}
```
###basic functionality
          
```
function(){
              <div class="code">return (function (foo, ...args) {
  return args instanceof Array &amp;&amp; args + &quot;&quot; === &quot;bar,baz&quot;;
}(&quot;foo&quot;, &quot;bar&quot;, &quot;baz&quot;));</div>}
```
###function 'length' property
          
```
function(){
              <div class="code">return function(a, ...b){}.length === 1 &amp;&amp; function(...c){}.length === 0;</div>}
```
###arguments object interaction
          
```
function(){
              <div class="code">return (function (foo, ...args) {
  foo = &quot;qux&quot;;
  // The arguments object is not mapped to the
  // parameters, even outside of strict mode.
  return arguments.length === 3
    &amp;&amp; arguments[0] === &quot;foo&quot;
    &amp;&amp; arguments[1] === &quot;bar&quot;
    &amp;&amp; arguments[2] === &quot;baz&quot;;
}(&quot;foo&quot;, &quot;bar&quot;, &quot;baz&quot;));</div>}
```
###can't be used in setters
          
```
function(){
              <div class="code">return (function (...args) {
  try {
    eval(&quot;({set e(...args){}})&quot;);
  } catch(e) {
    return true;
  }
}());</div>}
```
###new Function() support
          
```
function(){
              <div class="code">return new Function(&quot;a&quot;, &quot;...b&quot;,
  &quot;return b instanceof Array &amp;&amp; a+b === 'foobar,baz';&quot;
)('foo','bar','baz');</div>}
```
###basic functionality
          
```
function(){
              <div class="code">return (function (foo, ...args) {
  return args instanceof Array &amp;&amp; args + &quot;&quot; === &quot;bar,baz&quot;;
}(&quot;foo&quot;, &quot;bar&quot;, &quot;baz&quot;));</div>}
```
###function 'length' property
          
```
function(){
              <div class="code">return function(a, ...b){}.length === 1 &amp;&amp; function(...c){}.length === 0;</div>}
```
###arguments object interaction
          
```
function(){
              <div class="code">return (function (foo, ...args) {
  foo = &quot;qux&quot;;
  // The arguments object is not mapped to the
  // parameters, even outside of strict mode.
  return arguments.length === 3
    &amp;&amp; arguments[0] === &quot;foo&quot;
    &amp;&amp; arguments[1] === &quot;bar&quot;
    &amp;&amp; arguments[2] === &quot;baz&quot;;
}(&quot;foo&quot;, &quot;bar&quot;, &quot;baz&quot;));</div>}
```
###can't be used in setters
          
```
function(){
              <div class="code">return (function (...args) {
  try {
    eval(&quot;({set e(...args){}})&quot;);
  } catch(e) {
    return true;
  }
}());</div>}
```
###new Function() support
          
```
function(){
              <div class="code">return new Function(&quot;a&quot;, &quot;...b&quot;,
  &quot;return b instanceof Array &amp;&amp; a+b === 'foobar,baz';&quot;
)('foo','bar','baz');</div>}
```
###basic functionality
          
```
function(){
              <div class="code">return (function (foo, ...args) {
  return args instanceof Array &amp;&amp; args + &quot;&quot; === &quot;bar,baz&quot;;
}(&quot;foo&quot;, &quot;bar&quot;, &quot;baz&quot;));</div>}
```
###function 'length' property
          
```
function(){
              <div class="code">return function(a, ...b){}.length === 1 &amp;&amp; function(...c){}.length === 0;</div>}
```
###arguments object interaction
          
```
function(){
              <div class="code">return (function (foo, ...args) {
  foo = &quot;qux&quot;;
  // The arguments object is not mapped to the
  // parameters, even outside of strict mode.
  return arguments.length === 3
    &amp;&amp; arguments[0] === &quot;foo&quot;
    &amp;&amp; arguments[1] === &quot;bar&quot;
    &amp;&amp; arguments[2] === &quot;baz&quot;;
}(&quot;foo&quot;, &quot;bar&quot;, &quot;baz&quot;));</div>}
```
###can't be used in setters
          
```
function(){
              <div class="code">return (function (...args) {
  try {
    eval(&quot;({set e(...args){}})&quot;);
  } catch(e) {
    return true;
  }
}());</div>}
```
###new Function() support
          
```
function(){
              <div class="code">return new Function(&quot;a&quot;, &quot;...b&quot;,
  &quot;return b instanceof Array &amp;&amp; a+b === 'foobar,baz';&quot;
)('foo','bar','baz');</div>}
```
###basic functionality
          
```
function(){
              <div class="code">return (function (foo, ...args) {
  return args instanceof Array &amp;&amp; args + &quot;&quot; === &quot;bar,baz&quot;;
}(&quot;foo&quot;, &quot;bar&quot;, &quot;baz&quot;));</div>}
```
###function 'length' property
          
```
function(){
              <div class="code">return function(a, ...b){}.length === 1 &amp;&amp; function(...c){}.length === 0;</div>}
```
###arguments object interaction
          
```
function(){
              <div class="code">return (function (foo, ...args) {
  foo = &quot;qux&quot;;
  // The arguments object is not mapped to the
  // parameters, even outside of strict mode.
  return arguments.length === 3
    &amp;&amp; arguments[0] === &quot;foo&quot;
    &amp;&amp; arguments[1] === &quot;bar&quot;
    &amp;&amp; arguments[2] === &quot;baz&quot;;
}(&quot;foo&quot;, &quot;bar&quot;, &quot;baz&quot;));</div>}
```
###can't be used in setters
          
```
function(){
              <div class="code">return (function (...args) {
  try {
    eval(&quot;({set e(...args){}})&quot;);
  } catch(e) {
    return true;
  }
}());</div>}
```
###new Function() support
          
```
function(){
              <div class="code">return new Function(&quot;a&quot;, &quot;...b&quot;,
  &quot;return b instanceof Array &amp;&amp; a+b === 'foobar,baz';&quot;
)('foo','bar','baz');</div>}
```
###basic functionality
          
```
function(){
              <div class="code">return (function (foo, ...args) {
  return args instanceof Array &amp;&amp; args + &quot;&quot; === &quot;bar,baz&quot;;
}(&quot;foo&quot;, &quot;bar&quot;, &quot;baz&quot;));</div>}
```
###function 'length' property
          
```
function(){
              <div class="code">return function(a, ...b){}.length === 1 &amp;&amp; function(...c){}.length === 0;</div>}
```
###arguments object interaction
          
```
function(){
              <div class="code">return (function (foo, ...args) {
  foo = &quot;qux&quot;;
  // The arguments object is not mapped to the
  // parameters, even outside of strict mode.
  return arguments.length === 3
    &amp;&amp; arguments[0] === &quot;foo&quot;
    &amp;&amp; arguments[1] === &quot;bar&quot;
    &amp;&amp; arguments[2] === &quot;baz&quot;;
}(&quot;foo&quot;, &quot;bar&quot;, &quot;baz&quot;));</div>}
```
###can't be used in setters
          
```
function(){
              <div class="code">return (function (...args) {
  try {
    eval(&quot;({set e(...args){}})&quot;);
  } catch(e) {
    return true;
  }
}());</div>}
```
###new Function() support
          
```
function(){
              <div class="code">return new Function(&quot;a&quot;, &quot;...b&quot;,
  &quot;return b instanceof Array &amp;&amp; a+b === 'foobar,baz';&quot;
)('foo','bar','baz');</div>}
```
###basic functionality
          
```
function(){
              <div class="code">return (function (foo, ...args) {
  return args instanceof Array &amp;&amp; args + &quot;&quot; === &quot;bar,baz&quot;;
}(&quot;foo&quot;, &quot;bar&quot;, &quot;baz&quot;));</div>}
```
###function 'length' property
          
```
function(){
              <div class="code">return function(a, ...b){}.length === 1 &amp;&amp; function(...c){}.length === 0;</div>}
```
###arguments object interaction
          
```
function(){
              <div class="code">return (function (foo, ...args) {
  foo = &quot;qux&quot;;
  // The arguments object is not mapped to the
  // parameters, even outside of strict mode.
  return arguments.length === 3
    &amp;&amp; arguments[0] === &quot;foo&quot;
    &amp;&amp; arguments[1] === &quot;bar&quot;
    &amp;&amp; arguments[2] === &quot;baz&quot;;
}(&quot;foo&quot;, &quot;bar&quot;, &quot;baz&quot;));</div>}
```
###can't be used in setters
          
```
function(){
              <div class="code">return (function (...args) {
  try {
    eval(&quot;({set e(...args){}})&quot;);
  } catch(e) {
    return true;
  }
}());</div>}
```
###new Function() support
          
```
function(){
              <div class="code">return new Function(&quot;a&quot;, &quot;...b&quot;,
  &quot;return b instanceof Array &amp;&amp; a+b === 'foobar,baz';&quot;
)('foo','bar','baz');</div>}
```
###basic functionality
          
```
function(){
              <div class="code">return (function (foo, ...args) {
  return args instanceof Array &amp;&amp; args + &quot;&quot; === &quot;bar,baz&quot;;
}(&quot;foo&quot;, &quot;bar&quot;, &quot;baz&quot;));</div>}
```
###function 'length' property
          
```
function(){
              <div class="code">return function(a, ...b){}.length === 1 &amp;&amp; function(...c){}.length === 0;</div>}
```
###arguments object interaction
          
```
function(){
              <div class="code">return (function (foo, ...args) {
  foo = &quot;qux&quot;;
  // The arguments object is not mapped to the
  // parameters, even outside of strict mode.
  return arguments.length === 3
    &amp;&amp; arguments[0] === &quot;foo&quot;
    &amp;&amp; arguments[1] === &quot;bar&quot;
    &amp;&amp; arguments[2] === &quot;baz&quot;;
}(&quot;foo&quot;, &quot;bar&quot;, &quot;baz&quot;));</div>}
```
###can't be used in setters
          
```
function(){
              <div class="code">return (function (...args) {
  try {
    eval(&quot;({set e(...args){}})&quot;);
  } catch(e) {
    return true;
  }
}());</div>}
```
###new Function() support
          
```
function(){
              <div class="code">return new Function(&quot;a&quot;, &quot;...b&quot;,
  &quot;return b instanceof Array &amp;&amp; a+b === 'foobar,baz';&quot;
)('foo','bar','baz');</div>}
```
###basic functionality
          
```
function(){
              <div class="code">return (function (foo, ...args) {
  return args instanceof Array &amp;&amp; args + &quot;&quot; === &quot;bar,baz&quot;;
}(&quot;foo&quot;, &quot;bar&quot;, &quot;baz&quot;));</div>}
```
###function 'length' property
          
```
function(){
              <div class="code">return function(a, ...b){}.length === 1 &amp;&amp; function(...c){}.length === 0;</div>}
```
###arguments object interaction
          
```
function(){
              <div class="code">return (function (foo, ...args) {
  foo = &quot;qux&quot;;
  // The arguments object is not mapped to the
  // parameters, even outside of strict mode.
  return arguments.length === 3
    &amp;&amp; arguments[0] === &quot;foo&quot;
    &amp;&amp; arguments[1] === &quot;bar&quot;
    &amp;&amp; arguments[2] === &quot;baz&quot;;
}(&quot;foo&quot;, &quot;bar&quot;, &quot;baz&quot;));</div>}
```
###can't be used in setters
          
```
function(){
              <div class="code">return (function (...args) {
  try {
    eval(&quot;({set e(...args){}})&quot;);
  } catch(e) {
    return true;
  }
}());</div>}
```
###new Function() support
          
```
function(){
              <div class="code">return new Function(&quot;a&quot;, &quot;...b&quot;,
  &quot;return b instanceof Array &amp;&amp; a+b === 'foobar,baz';&quot;
)('foo','bar','baz');</div>}
```
###basic functionality
          
```
function(){
              <div class="code">return (function (foo, ...args) {
  return args instanceof Array &amp;&amp; args + &quot;&quot; === &quot;bar,baz&quot;;
}(&quot;foo&quot;, &quot;bar&quot;, &quot;baz&quot;));</div>}
```
###function 'length' property
          
```
function(){
              <div class="code">return function(a, ...b){}.length === 1 &amp;&amp; function(...c){}.length === 0;</div>}
```
###arguments object interaction
          
```
function(){
              <div class="code">return (function (foo, ...args) {
  foo = &quot;qux&quot;;
  // The arguments object is not mapped to the
  // parameters, even outside of strict mode.
  return arguments.length === 3
    &amp;&amp; arguments[0] === &quot;foo&quot;
    &amp;&amp; arguments[1] === &quot;bar&quot;
    &amp;&amp; arguments[2] === &quot;baz&quot;;
}(&quot;foo&quot;, &quot;bar&quot;, &quot;baz&quot;));</div>}
```
###can't be used in setters
          
```
function(){
              <div class="code">return (function (...args) {
  try {
    eval(&quot;({set e(...args){}})&quot;);
  } catch(e) {
    return true;
  }
}());</div>}
```
###new Function() support
          
```
function(){
              <div class="code">return new Function(&quot;a&quot;, &quot;...b&quot;,
  &quot;return b instanceof Array &amp;&amp; a+b === 'foobar,baz';&quot;
)('foo','bar','baz');</div>}
```
###basic functionality
          
```
function(){
              <div class="code">return (function (foo, ...args) {
  return args instanceof Array &amp;&amp; args + &quot;&quot; === &quot;bar,baz&quot;;
}(&quot;foo&quot;, &quot;bar&quot;, &quot;baz&quot;));</div>}
```
###function 'length' property
          
```
function(){
              <div class="code">return function(a, ...b){}.length === 1 &amp;&amp; function(...c){}.length === 0;</div>}
```
###arguments object interaction
          
```
function(){
              <div class="code">return (function (foo, ...args) {
  foo = &quot;qux&quot;;
  // The arguments object is not mapped to the
  // parameters, even outside of strict mode.
  return arguments.length === 3
    &amp;&amp; arguments[0] === &quot;foo&quot;
    &amp;&amp; arguments[1] === &quot;bar&quot;
    &amp;&amp; arguments[2] === &quot;baz&quot;;
}(&quot;foo&quot;, &quot;bar&quot;, &quot;baz&quot;));</div>}
```
###can't be used in setters
          
```
function(){
              <div class="code">return (function (...args) {
  try {
    eval(&quot;({set e(...args){}})&quot;);
  } catch(e) {
    return true;
  }
}());</div>}
```
###new Function() support
          
```
function(){
              <div class="code">return new Function(&quot;a&quot;, &quot;...b&quot;,
  &quot;return b instanceof Array &amp;&amp; a+b === 'foobar,baz';&quot;
)('foo','bar','baz');</div>}
```
###basic functionality
          
```
function(){
              <div class="code">return (function (foo, ...args) {
  return args instanceof Array &amp;&amp; args + &quot;&quot; === &quot;bar,baz&quot;;
}(&quot;foo&quot;, &quot;bar&quot;, &quot;baz&quot;));</div>}
```
###function 'length' property
          
```
function(){
              <div class="code">return function(a, ...b){}.length === 1 &amp;&amp; function(...c){}.length === 0;</div>}
```
###arguments object interaction
          
```
function(){
              <div class="code">return (function (foo, ...args) {
  foo = &quot;qux&quot;;
  // The arguments object is not mapped to the
  // parameters, even outside of strict mode.
  return arguments.length === 3
    &amp;&amp; arguments[0] === &quot;foo&quot;
    &amp;&amp; arguments[1] === &quot;bar&quot;
    &amp;&amp; arguments[2] === &quot;baz&quot;;
}(&quot;foo&quot;, &quot;bar&quot;, &quot;baz&quot;));</div>}
```
###can't be used in setters
          
```
function(){
              <div class="code">return (function (...args) {
  try {
    eval(&quot;({set e(...args){}})&quot;);
  } catch(e) {
    return true;
  }
}());</div>}
```
###new Function() support
          
```
function(){
              <div class="code">return new Function(&quot;a&quot;, &quot;...b&quot;,
  &quot;return b instanceof Array &amp;&amp; a+b === 'foobar,baz';&quot;
)('foo','bar','baz');</div>}
```
###basic functionality
          
```
function(){
              <div class="code">return (function (foo, ...args) {
  return args instanceof Array &amp;&amp; args + &quot;&quot; === &quot;bar,baz&quot;;
}(&quot;foo&quot;, &quot;bar&quot;, &quot;baz&quot;));</div>}
```
###function 'length' property
          
```
function(){
              <div class="code">return function(a, ...b){}.length === 1 &amp;&amp; function(...c){}.length === 0;</div>}
```
###arguments object interaction
          
```
function(){
              <div class="code">return (function (foo, ...args) {
  foo = &quot;qux&quot;;
  // The arguments object is not mapped to the
  // parameters, even outside of strict mode.
  return arguments.length === 3
    &amp;&amp; arguments[0] === &quot;foo&quot;
    &amp;&amp; arguments[1] === &quot;bar&quot;
    &amp;&amp; arguments[2] === &quot;baz&quot;;
}(&quot;foo&quot;, &quot;bar&quot;, &quot;baz&quot;));</div>}
```
###can't be used in setters
          
```
function(){
              <div class="code">return (function (...args) {
  try {
    eval(&quot;({set e(...args){}})&quot;);
  } catch(e) {
    return true;
  }
}());</div>}
```
###new Function() support
          
```
function(){
              <div class="code">return new Function(&quot;a&quot;, &quot;...b&quot;,
  &quot;return b instanceof Array &amp;&amp; a+b === 'foobar,baz';&quot;
)('foo','bar','baz');</div>}
```
