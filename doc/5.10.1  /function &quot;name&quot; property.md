###function statements
          
```
function(){
              <div class="code">function foo(){};
return foo.name === 'foo' &amp;&amp;
  (function(){}).name === '';</div>}
```
###function expressions
          
```
function(){
              <div class="code">return (function foo(){}).name === 'foo' &amp;&amp;
  (function(){}).name === '';</div>}
```
###bound functions
          
```
function(){
              <div class="code">function foo() {};
return foo.bind({}).name === &quot;bound foo&quot; &amp;&amp;
  (function(){}).bind({}).name === &quot;bound &quot;;</div>}
```
###shorthand methods
          
```
function(){
              <div class="code">var o = { foo(){} };
return o.foo.name === &quot;foo&quot;;</div>}
```
###shorthand methods (no lexical binding)
          
```
function(){
              <div class="code">var f = &quot;foo&quot;;
return ({f() { return f; }}).f() === &quot;foo&quot;;</div>}
```
###isn't writable, is configurable
          
```
function(){
              <div class="code">var descriptor = Object.getOwnPropertyDescriptor(function f(){},&quot;name&quot;);
return descriptor.enumerable   === false &amp;&amp;
       descriptor.writable     === false &amp;&amp;
       descriptor.configurable === true;</div>}
```
###function statements
          
```
function(){
              <div class="code">function foo(){};
return foo.name === 'foo' &amp;&amp;
  (function(){}).name === '';</div>}
```
###function expressions
          
```
function(){
              <div class="code">return (function foo(){}).name === 'foo' &amp;&amp;
  (function(){}).name === '';</div>}
```
###bound functions
          
```
function(){
              <div class="code">function foo() {};
return foo.bind({}).name === &quot;bound foo&quot; &amp;&amp;
  (function(){}).bind({}).name === &quot;bound &quot;;</div>}
```
###shorthand methods
          
```
function(){
              <div class="code">var o = { foo(){} };
return o.foo.name === &quot;foo&quot;;</div>}
```
###shorthand methods (no lexical binding)
          
```
function(){
              <div class="code">var f = &quot;foo&quot;;
return ({f() { return f; }}).f() === &quot;foo&quot;;</div>}
```
###isn't writable, is configurable
          
```
function(){
              <div class="code">var descriptor = Object.getOwnPropertyDescriptor(function f(){},&quot;name&quot;);
return descriptor.enumerable   === false &amp;&amp;
       descriptor.writable     === false &amp;&amp;
       descriptor.configurable === true;</div>}
```
###function statements
          
```
function(){
              <div class="code">function foo(){};
return foo.name === 'foo' &amp;&amp;
  (function(){}).name === '';</div>}
```
###function expressions
          
```
function(){
              <div class="code">return (function foo(){}).name === 'foo' &amp;&amp;
  (function(){}).name === '';</div>}
```
###bound functions
          
```
function(){
              <div class="code">function foo() {};
return foo.bind({}).name === &quot;bound foo&quot; &amp;&amp;
  (function(){}).bind({}).name === &quot;bound &quot;;</div>}
```
###shorthand methods
          
```
function(){
              <div class="code">var o = { foo(){} };
return o.foo.name === &quot;foo&quot;;</div>}
```
###shorthand methods (no lexical binding)
          
```
function(){
              <div class="code">var f = &quot;foo&quot;;
return ({f() { return f; }}).f() === &quot;foo&quot;;</div>}
```
###isn't writable, is configurable
          
```
function(){
              <div class="code">var descriptor = Object.getOwnPropertyDescriptor(function f(){},&quot;name&quot;);
return descriptor.enumerable   === false &amp;&amp;
       descriptor.writable     === false &amp;&amp;
       descriptor.configurable === true;</div>}
```
###function statements
          
```
function(){
              <div class="code">function foo(){};
return foo.name === 'foo' &amp;&amp;
  (function(){}).name === '';</div>}
```
###function expressions
          
```
function(){
              <div class="code">return (function foo(){}).name === 'foo' &amp;&amp;
  (function(){}).name === '';</div>}
```
###bound functions
          
```
function(){
              <div class="code">function foo() {};
return foo.bind({}).name === &quot;bound foo&quot; &amp;&amp;
  (function(){}).bind({}).name === &quot;bound &quot;;</div>}
```
###shorthand methods
          
```
function(){
              <div class="code">var o = { foo(){} };
return o.foo.name === &quot;foo&quot;;</div>}
```
###shorthand methods (no lexical binding)
          
```
function(){
              <div class="code">var f = &quot;foo&quot;;
return ({f() { return f; }}).f() === &quot;foo&quot;;</div>}
```
###isn't writable, is configurable
          
```
function(){
              <div class="code">var descriptor = Object.getOwnPropertyDescriptor(function f(){},&quot;name&quot;);
return descriptor.enumerable   === false &amp;&amp;
       descriptor.writable     === false &amp;&amp;
       descriptor.configurable === true;</div>}
```
###function statements
          
```
function(){
              <div class="code">function foo(){};
return foo.name === 'foo' &amp;&amp;
  (function(){}).name === '';</div>}
```
###function expressions
          
```
function(){
              <div class="code">return (function foo(){}).name === 'foo' &amp;&amp;
  (function(){}).name === '';</div>}
```
###bound functions
          
```
function(){
              <div class="code">function foo() {};
return foo.bind({}).name === &quot;bound foo&quot; &amp;&amp;
  (function(){}).bind({}).name === &quot;bound &quot;;</div>}
```
###shorthand methods
          
```
function(){
              <div class="code">var o = { foo(){} };
return o.foo.name === &quot;foo&quot;;</div>}
```
###shorthand methods (no lexical binding)
          
```
function(){
              <div class="code">var f = &quot;foo&quot;;
return ({f() { return f; }}).f() === &quot;foo&quot;;</div>}
```
###isn't writable, is configurable
          
```
function(){
              <div class="code">var descriptor = Object.getOwnPropertyDescriptor(function f(){},&quot;name&quot;);
return descriptor.enumerable   === false &amp;&amp;
       descriptor.writable     === false &amp;&amp;
       descriptor.configurable === true;</div>}
```
###function statements
          
```
function(){
              <div class="code">function foo(){};
return foo.name === 'foo' &amp;&amp;
  (function(){}).name === '';</div>}
```
###function expressions
          
```
function(){
              <div class="code">return (function foo(){}).name === 'foo' &amp;&amp;
  (function(){}).name === '';</div>}
```
###bound functions
          
```
function(){
              <div class="code">function foo() {};
return foo.bind({}).name === &quot;bound foo&quot; &amp;&amp;
  (function(){}).bind({}).name === &quot;bound &quot;;</div>}
```
###shorthand methods
          
```
function(){
              <div class="code">var o = { foo(){} };
return o.foo.name === &quot;foo&quot;;</div>}
```
###shorthand methods (no lexical binding)
          
```
function(){
              <div class="code">var f = &quot;foo&quot;;
return ({f() { return f; }}).f() === &quot;foo&quot;;</div>}
```
###isn't writable, is configurable
          
```
function(){
              <div class="code">var descriptor = Object.getOwnPropertyDescriptor(function f(){},&quot;name&quot;);
return descriptor.enumerable   === false &amp;&amp;
       descriptor.writable     === false &amp;&amp;
       descriptor.configurable === true;</div>}
```
###function statements
          
```
function(){
              <div class="code">function foo(){};
return foo.name === 'foo' &amp;&amp;
  (function(){}).name === '';</div>}
```
###function expressions
          
```
function(){
              <div class="code">return (function foo(){}).name === 'foo' &amp;&amp;
  (function(){}).name === '';</div>}
```
###bound functions
          
```
function(){
              <div class="code">function foo() {};
return foo.bind({}).name === &quot;bound foo&quot; &amp;&amp;
  (function(){}).bind({}).name === &quot;bound &quot;;</div>}
```
###shorthand methods
          
```
function(){
              <div class="code">var o = { foo(){} };
return o.foo.name === &quot;foo&quot;;</div>}
```
###shorthand methods (no lexical binding)
          
```
function(){
              <div class="code">var f = &quot;foo&quot;;
return ({f() { return f; }}).f() === &quot;foo&quot;;</div>}
```
###isn't writable, is configurable
          
```
function(){
              <div class="code">var descriptor = Object.getOwnPropertyDescriptor(function f(){},&quot;name&quot;);
return descriptor.enumerable   === false &amp;&amp;
       descriptor.writable     === false &amp;&amp;
       descriptor.configurable === true;</div>}
```
###function statements
          
```
function(){
              <div class="code">function foo(){};
return foo.name === 'foo' &amp;&amp;
  (function(){}).name === '';</div>}
```
###function expressions
          
```
function(){
              <div class="code">return (function foo(){}).name === 'foo' &amp;&amp;
  (function(){}).name === '';</div>}
```
###bound functions
          
```
function(){
              <div class="code">function foo() {};
return foo.bind({}).name === &quot;bound foo&quot; &amp;&amp;
  (function(){}).bind({}).name === &quot;bound &quot;;</div>}
```
###shorthand methods
          
```
function(){
              <div class="code">var o = { foo(){} };
return o.foo.name === &quot;foo&quot;;</div>}
```
###shorthand methods (no lexical binding)
          
```
function(){
              <div class="code">var f = &quot;foo&quot;;
return ({f() { return f; }}).f() === &quot;foo&quot;;</div>}
```
###isn't writable, is configurable
          
```
function(){
              <div class="code">var descriptor = Object.getOwnPropertyDescriptor(function f(){},&quot;name&quot;);
return descriptor.enumerable   === false &amp;&amp;
       descriptor.writable     === false &amp;&amp;
       descriptor.configurable === true;</div>}
```
###function statements
          
```
function(){
              <div class="code">function foo(){};
return foo.name === 'foo' &amp;&amp;
  (function(){}).name === '';</div>}
```
###function expressions
          
```
function(){
              <div class="code">return (function foo(){}).name === 'foo' &amp;&amp;
  (function(){}).name === '';</div>}
```
###bound functions
          
```
function(){
              <div class="code">function foo() {};
return foo.bind({}).name === &quot;bound foo&quot; &amp;&amp;
  (function(){}).bind({}).name === &quot;bound &quot;;</div>}
```
###shorthand methods
          
```
function(){
              <div class="code">var o = { foo(){} };
return o.foo.name === &quot;foo&quot;;</div>}
```
###shorthand methods (no lexical binding)
          
```
function(){
              <div class="code">var f = &quot;foo&quot;;
return ({f() { return f; }}).f() === &quot;foo&quot;;</div>}
```
###isn't writable, is configurable
          
```
function(){
              <div class="code">var descriptor = Object.getOwnPropertyDescriptor(function f(){},&quot;name&quot;);
return descriptor.enumerable   === false &amp;&amp;
       descriptor.writable     === false &amp;&amp;
       descriptor.configurable === true;</div>}
```
###function statements
          
```
function(){
              <div class="code">function foo(){};
return foo.name === 'foo' &amp;&amp;
  (function(){}).name === '';</div>}
```
###function expressions
          
```
function(){
              <div class="code">return (function foo(){}).name === 'foo' &amp;&amp;
  (function(){}).name === '';</div>}
```
###bound functions
          
```
function(){
              <div class="code">function foo() {};
return foo.bind({}).name === &quot;bound foo&quot; &amp;&amp;
  (function(){}).bind({}).name === &quot;bound &quot;;</div>}
```
###shorthand methods
          
```
function(){
              <div class="code">var o = { foo(){} };
return o.foo.name === &quot;foo&quot;;</div>}
```
###shorthand methods (no lexical binding)
          
```
function(){
              <div class="code">var f = &quot;foo&quot;;
return ({f() { return f; }}).f() === &quot;foo&quot;;</div>}
```
###isn't writable, is configurable
          
```
function(){
              <div class="code">var descriptor = Object.getOwnPropertyDescriptor(function f(){},&quot;name&quot;);
return descriptor.enumerable   === false &amp;&amp;
       descriptor.writable     === false &amp;&amp;
       descriptor.configurable === true;</div>}
```
###function statements
          
```
function(){
              <div class="code">function foo(){};
return foo.name === 'foo' &amp;&amp;
  (function(){}).name === '';</div>}
```
###function expressions
          
```
function(){
              <div class="code">return (function foo(){}).name === 'foo' &amp;&amp;
  (function(){}).name === '';</div>}
```
###bound functions
          
```
function(){
              <div class="code">function foo() {};
return foo.bind({}).name === &quot;bound foo&quot; &amp;&amp;
  (function(){}).bind({}).name === &quot;bound &quot;;</div>}
```
###shorthand methods
          
```
function(){
              <div class="code">var o = { foo(){} };
return o.foo.name === &quot;foo&quot;;</div>}
```
###shorthand methods (no lexical binding)
          
```
function(){
              <div class="code">var f = &quot;foo&quot;;
return ({f() { return f; }}).f() === &quot;foo&quot;;</div>}
```
###isn't writable, is configurable
          
```
function(){
              <div class="code">var descriptor = Object.getOwnPropertyDescriptor(function f(){},&quot;name&quot;);
return descriptor.enumerable   === false &amp;&amp;
       descriptor.writable     === false &amp;&amp;
       descriptor.configurable === true;</div>}
```
###function statements
          
```
function(){
              <div class="code">function foo(){};
return foo.name === 'foo' &amp;&amp;
  (function(){}).name === '';</div>}
```
###function expressions
          
```
function(){
              <div class="code">return (function foo(){}).name === 'foo' &amp;&amp;
  (function(){}).name === '';</div>}
```
###bound functions
          
```
function(){
              <div class="code">function foo() {};
return foo.bind({}).name === &quot;bound foo&quot; &amp;&amp;
  (function(){}).bind({}).name === &quot;bound &quot;;</div>}
```
###shorthand methods
          
```
function(){
              <div class="code">var o = { foo(){} };
return o.foo.name === &quot;foo&quot;;</div>}
```
###shorthand methods (no lexical binding)
          
```
function(){
              <div class="code">var f = &quot;foo&quot;;
return ({f() { return f; }}).f() === &quot;foo&quot;;</div>}
```
###isn't writable, is configurable
          
```
function(){
              <div class="code">var descriptor = Object.getOwnPropertyDescriptor(function f(){},&quot;name&quot;);
return descriptor.enumerable   === false &amp;&amp;
       descriptor.writable     === false &amp;&amp;
       descriptor.configurable === true;</div>}
```
###function statements
          
```
function(){
              <div class="code">function foo(){};
return foo.name === 'foo' &amp;&amp;
  (function(){}).name === '';</div>}
```
###function expressions
          
```
function(){
              <div class="code">return (function foo(){}).name === 'foo' &amp;&amp;
  (function(){}).name === '';</div>}
```
###bound functions
          
```
function(){
              <div class="code">function foo() {};
return foo.bind({}).name === &quot;bound foo&quot; &amp;&amp;
  (function(){}).bind({}).name === &quot;bound &quot;;</div>}
```
###shorthand methods
          
```
function(){
              <div class="code">var o = { foo(){} };
return o.foo.name === &quot;foo&quot;;</div>}
```
###shorthand methods (no lexical binding)
          
```
function(){
              <div class="code">var f = &quot;foo&quot;;
return ({f() { return f; }}).f() === &quot;foo&quot;;</div>}
```
###isn't writable, is configurable
          
```
function(){
              <div class="code">var descriptor = Object.getOwnPropertyDescriptor(function f(){},&quot;name&quot;);
return descriptor.enumerable   === false &amp;&amp;
       descriptor.writable     === false &amp;&amp;
       descriptor.configurable === true;</div>}
```
###function statements
          
```
function(){
              <div class="code">function foo(){};
return foo.name === 'foo' &amp;&amp;
  (function(){}).name === '';</div>}
```
###function expressions
          
```
function(){
              <div class="code">return (function foo(){}).name === 'foo' &amp;&amp;
  (function(){}).name === '';</div>}
```
###bound functions
          
```
function(){
              <div class="code">function foo() {};
return foo.bind({}).name === &quot;bound foo&quot; &amp;&amp;
  (function(){}).bind({}).name === &quot;bound &quot;;</div>}
```
###shorthand methods
          
```
function(){
              <div class="code">var o = { foo(){} };
return o.foo.name === &quot;foo&quot;;</div>}
```
###shorthand methods (no lexical binding)
          
```
function(){
              <div class="code">var f = &quot;foo&quot;;
return ({f() { return f; }}).f() === &quot;foo&quot;;</div>}
```
###isn't writable, is configurable
          
```
function(){
              <div class="code">var descriptor = Object.getOwnPropertyDescriptor(function f(){},&quot;name&quot;);
return descriptor.enumerable   === false &amp;&amp;
       descriptor.writable     === false &amp;&amp;
       descriptor.configurable === true;</div>}
```
###function statements
          
```
function(){
              <div class="code">function foo(){};
return foo.name === 'foo' &amp;&amp;
  (function(){}).name === '';</div>}
```
###function expressions
          
```
function(){
              <div class="code">return (function foo(){}).name === 'foo' &amp;&amp;
  (function(){}).name === '';</div>}
```
###bound functions
          
```
function(){
              <div class="code">function foo() {};
return foo.bind({}).name === &quot;bound foo&quot; &amp;&amp;
  (function(){}).bind({}).name === &quot;bound &quot;;</div>}
```
###shorthand methods
          
```
function(){
              <div class="code">var o = { foo(){} };
return o.foo.name === &quot;foo&quot;;</div>}
```
###shorthand methods (no lexical binding)
          
```
function(){
              <div class="code">var f = &quot;foo&quot;;
return ({f() { return f; }}).f() === &quot;foo&quot;;</div>}
```
###isn't writable, is configurable
          
```
function(){
              <div class="code">var descriptor = Object.getOwnPropertyDescriptor(function f(){},&quot;name&quot;);
return descriptor.enumerable   === false &amp;&amp;
       descriptor.writable     === false &amp;&amp;
       descriptor.configurable === true;</div>}
```
