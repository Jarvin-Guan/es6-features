###basic functionality
          
```
function(){
              <div class="code">var object = {};
var symbol = Symbol();
var value = {};
object[symbol] = value;
return object[symbol] === value;</div>}
```
###typeof support
          
```
function(){
              <div class="code">return typeof Symbol() === &quot;symbol&quot;;</div>}
```
###symbol keys are hidden to pre-ES6 code
          
```
function(){
              <div class="code">var object = {};
var symbol = Symbol();
object[symbol] = 1;

for (var x in object){}
var passed = !x;

if (Object.keys &amp;&amp; Object.getOwnPropertyNames) {
  passed &amp;= Object.keys(object).length === 0
    &amp;&amp; Object.getOwnPropertyNames(object).length === 0;
}

return passed;</div>}
```
###Object.defineProperty support
          
```
function(){
              <div class="code">var object = {};
var symbol = Symbol();
var value = {};

if (Object.defineProperty) {
  Object.defineProperty(object, symbol, { value: value });
  return object[symbol] === value;
}

return passed;</div>}
```
###symbols inherit from Symbol.prototype
          
```
function(){
              <div class="code">var symbol = Symbol();
var passed = symbol.foo === undefined;
Symbol.prototype.foo = 2;
passed &amp;= symbol.foo === 2;
delete Symbol.prototype.foo;
return passed;</div>}
```
###cannot coerce to string or number
          
```
function(){
              <div class="code">var symbol = Symbol();

try {
  symbol + &quot;&quot;;
  return false;
}
catch(e) {}

try {
  symbol + 0;
  return false;
} catch(e) {}

return true;</div>}
```
###can convert with String()
          
```
function(){
              <div class="code">return String(Symbol(&quot;foo&quot;)) === &quot;Symbol(foo)&quot;;</div>}
```
###new Symbol() throws
          
```
function(){
              <div class="code">var symbol = Symbol();
try {
  new Symbol();
} catch(e) {
  return true;
}</div>}
```
###JSON.stringify ignores symbols
          
```
function(){
              <div class="code">var object = {foo: Symbol()};
object[Symbol()] = 1;
var array = [Symbol()];
return JSON.stringify(object) === '{}' &amp;&amp; JSON.stringify(array) === '[null]' &amp;&amp; JSON.stringify(Symbol()) === undefined;</div>}
```
###global symbol registry
          
```
function(){
              <div class="code">var symbol = Symbol.for('foo');
return Symbol.for('foo') === symbol &amp;&amp;
   Symbol.keyFor(symbol) === 'foo';</div>}
```
###basic functionality
          
```
function(){
              <div class="code">var object = {};
var symbol = Symbol();
var value = {};
object[symbol] = value;
return object[symbol] === value;</div>}
```
###typeof support
          
```
function(){
              <div class="code">return typeof Symbol() === &quot;symbol&quot;;</div>}
```
###symbol keys are hidden to pre-ES6 code
          
```
function(){
              <div class="code">var object = {};
var symbol = Symbol();
object[symbol] = 1;

for (var x in object){}
var passed = !x;

if (Object.keys &amp;&amp; Object.getOwnPropertyNames) {
  passed &amp;= Object.keys(object).length === 0
    &amp;&amp; Object.getOwnPropertyNames(object).length === 0;
}

return passed;</div>}
```
###Object.defineProperty support
          
```
function(){
              <div class="code">var object = {};
var symbol = Symbol();
var value = {};

if (Object.defineProperty) {
  Object.defineProperty(object, symbol, { value: value });
  return object[symbol] === value;
}

return passed;</div>}
```
###symbols inherit from Symbol.prototype
          
```
function(){
              <div class="code">var symbol = Symbol();
var passed = symbol.foo === undefined;
Symbol.prototype.foo = 2;
passed &amp;= symbol.foo === 2;
delete Symbol.prototype.foo;
return passed;</div>}
```
###cannot coerce to string or number
          
```
function(){
              <div class="code">var symbol = Symbol();

try {
  symbol + &quot;&quot;;
  return false;
}
catch(e) {}

try {
  symbol + 0;
  return false;
} catch(e) {}

return true;</div>}
```
###can convert with String()
          
```
function(){
              <div class="code">return String(Symbol(&quot;foo&quot;)) === &quot;Symbol(foo)&quot;;</div>}
```
###new Symbol() throws
          
```
function(){
              <div class="code">var symbol = Symbol();
try {
  new Symbol();
} catch(e) {
  return true;
}</div>}
```
###JSON.stringify ignores symbols
          
```
function(){
              <div class="code">var object = {foo: Symbol()};
object[Symbol()] = 1;
var array = [Symbol()];
return JSON.stringify(object) === '{}' &amp;&amp; JSON.stringify(array) === '[null]' &amp;&amp; JSON.stringify(Symbol()) === undefined;</div>}
```
###global symbol registry
          
```
function(){
              <div class="code">var symbol = Symbol.for('foo');
return Symbol.for('foo') === symbol &amp;&amp;
   Symbol.keyFor(symbol) === 'foo';</div>}
```
###basic functionality
          
```
function(){
              <div class="code">var object = {};
var symbol = Symbol();
var value = {};
object[symbol] = value;
return object[symbol] === value;</div>}
```
###typeof support
          
```
function(){
              <div class="code">return typeof Symbol() === &quot;symbol&quot;;</div>}
```
###symbol keys are hidden to pre-ES6 code
          
```
function(){
              <div class="code">var object = {};
var symbol = Symbol();
object[symbol] = 1;

for (var x in object){}
var passed = !x;

if (Object.keys &amp;&amp; Object.getOwnPropertyNames) {
  passed &amp;= Object.keys(object).length === 0
    &amp;&amp; Object.getOwnPropertyNames(object).length === 0;
}

return passed;</div>}
```
###Object.defineProperty support
          
```
function(){
              <div class="code">var object = {};
var symbol = Symbol();
var value = {};

if (Object.defineProperty) {
  Object.defineProperty(object, symbol, { value: value });
  return object[symbol] === value;
}

return passed;</div>}
```
###symbols inherit from Symbol.prototype
          
```
function(){
              <div class="code">var symbol = Symbol();
var passed = symbol.foo === undefined;
Symbol.prototype.foo = 2;
passed &amp;= symbol.foo === 2;
delete Symbol.prototype.foo;
return passed;</div>}
```
###cannot coerce to string or number
          
```
function(){
              <div class="code">var symbol = Symbol();

try {
  symbol + &quot;&quot;;
  return false;
}
catch(e) {}

try {
  symbol + 0;
  return false;
} catch(e) {}

return true;</div>}
```
###can convert with String()
          
```
function(){
              <div class="code">return String(Symbol(&quot;foo&quot;)) === &quot;Symbol(foo)&quot;;</div>}
```
###new Symbol() throws
          
```
function(){
              <div class="code">var symbol = Symbol();
try {
  new Symbol();
} catch(e) {
  return true;
}</div>}
```
###JSON.stringify ignores symbols
          
```
function(){
              <div class="code">var object = {foo: Symbol()};
object[Symbol()] = 1;
var array = [Symbol()];
return JSON.stringify(object) === '{}' &amp;&amp; JSON.stringify(array) === '[null]' &amp;&amp; JSON.stringify(Symbol()) === undefined;</div>}
```
###global symbol registry
          
```
function(){
              <div class="code">var symbol = Symbol.for('foo');
return Symbol.for('foo') === symbol &amp;&amp;
   Symbol.keyFor(symbol) === 'foo';</div>}
```
###basic functionality
          
```
function(){
              <div class="code">var object = {};
var symbol = Symbol();
var value = {};
object[symbol] = value;
return object[symbol] === value;</div>}
```
###typeof support
          
```
function(){
              <div class="code">return typeof Symbol() === &quot;symbol&quot;;</div>}
```
###symbol keys are hidden to pre-ES6 code
          
```
function(){
              <div class="code">var object = {};
var symbol = Symbol();
object[symbol] = 1;

for (var x in object){}
var passed = !x;

if (Object.keys &amp;&amp; Object.getOwnPropertyNames) {
  passed &amp;= Object.keys(object).length === 0
    &amp;&amp; Object.getOwnPropertyNames(object).length === 0;
}

return passed;</div>}
```
###Object.defineProperty support
          
```
function(){
              <div class="code">var object = {};
var symbol = Symbol();
var value = {};

if (Object.defineProperty) {
  Object.defineProperty(object, symbol, { value: value });
  return object[symbol] === value;
}

return passed;</div>}
```
###symbols inherit from Symbol.prototype
          
```
function(){
              <div class="code">var symbol = Symbol();
var passed = symbol.foo === undefined;
Symbol.prototype.foo = 2;
passed &amp;= symbol.foo === 2;
delete Symbol.prototype.foo;
return passed;</div>}
```
###cannot coerce to string or number
          
```
function(){
              <div class="code">var symbol = Symbol();

try {
  symbol + &quot;&quot;;
  return false;
}
catch(e) {}

try {
  symbol + 0;
  return false;
} catch(e) {}

return true;</div>}
```
###can convert with String()
          
```
function(){
              <div class="code">return String(Symbol(&quot;foo&quot;)) === &quot;Symbol(foo)&quot;;</div>}
```
###new Symbol() throws
          
```
function(){
              <div class="code">var symbol = Symbol();
try {
  new Symbol();
} catch(e) {
  return true;
}</div>}
```
###JSON.stringify ignores symbols
          
```
function(){
              <div class="code">var object = {foo: Symbol()};
object[Symbol()] = 1;
var array = [Symbol()];
return JSON.stringify(object) === '{}' &amp;&amp; JSON.stringify(array) === '[null]' &amp;&amp; JSON.stringify(Symbol()) === undefined;</div>}
```
###global symbol registry
          
```
function(){
              <div class="code">var symbol = Symbol.for('foo');
return Symbol.for('foo') === symbol &amp;&amp;
   Symbol.keyFor(symbol) === 'foo';</div>}
```
###basic functionality
          
```
function(){
              <div class="code">var object = {};
var symbol = Symbol();
var value = {};
object[symbol] = value;
return object[symbol] === value;</div>}
```
###typeof support
          
```
function(){
              <div class="code">return typeof Symbol() === &quot;symbol&quot;;</div>}
```
###symbol keys are hidden to pre-ES6 code
          
```
function(){
              <div class="code">var object = {};
var symbol = Symbol();
object[symbol] = 1;

for (var x in object){}
var passed = !x;

if (Object.keys &amp;&amp; Object.getOwnPropertyNames) {
  passed &amp;= Object.keys(object).length === 0
    &amp;&amp; Object.getOwnPropertyNames(object).length === 0;
}

return passed;</div>}
```
###Object.defineProperty support
          
```
function(){
              <div class="code">var object = {};
var symbol = Symbol();
var value = {};

if (Object.defineProperty) {
  Object.defineProperty(object, symbol, { value: value });
  return object[symbol] === value;
}

return passed;</div>}
```
###symbols inherit from Symbol.prototype
          
```
function(){
              <div class="code">var symbol = Symbol();
var passed = symbol.foo === undefined;
Symbol.prototype.foo = 2;
passed &amp;= symbol.foo === 2;
delete Symbol.prototype.foo;
return passed;</div>}
```
###cannot coerce to string or number
          
```
function(){
              <div class="code">var symbol = Symbol();

try {
  symbol + &quot;&quot;;
  return false;
}
catch(e) {}

try {
  symbol + 0;
  return false;
} catch(e) {}

return true;</div>}
```
###can convert with String()
          
```
function(){
              <div class="code">return String(Symbol(&quot;foo&quot;)) === &quot;Symbol(foo)&quot;;</div>}
```
###new Symbol() throws
          
```
function(){
              <div class="code">var symbol = Symbol();
try {
  new Symbol();
} catch(e) {
  return true;
}</div>}
```
###JSON.stringify ignores symbols
          
```
function(){
              <div class="code">var object = {foo: Symbol()};
object[Symbol()] = 1;
var array = [Symbol()];
return JSON.stringify(object) === '{}' &amp;&amp; JSON.stringify(array) === '[null]' &amp;&amp; JSON.stringify(Symbol()) === undefined;</div>}
```
###global symbol registry
          
```
function(){
              <div class="code">var symbol = Symbol.for('foo');
return Symbol.for('foo') === symbol &amp;&amp;
   Symbol.keyFor(symbol) === 'foo';</div>}
```
###basic functionality
          
```
function(){
              <div class="code">var object = {};
var symbol = Symbol();
var value = {};
object[symbol] = value;
return object[symbol] === value;</div>}
```
###typeof support
          
```
function(){
              <div class="code">return typeof Symbol() === &quot;symbol&quot;;</div>}
```
###symbol keys are hidden to pre-ES6 code
          
```
function(){
              <div class="code">var object = {};
var symbol = Symbol();
object[symbol] = 1;

for (var x in object){}
var passed = !x;

if (Object.keys &amp;&amp; Object.getOwnPropertyNames) {
  passed &amp;= Object.keys(object).length === 0
    &amp;&amp; Object.getOwnPropertyNames(object).length === 0;
}

return passed;</div>}
```
###Object.defineProperty support
          
```
function(){
              <div class="code">var object = {};
var symbol = Symbol();
var value = {};

if (Object.defineProperty) {
  Object.defineProperty(object, symbol, { value: value });
  return object[symbol] === value;
}

return passed;</div>}
```
###symbols inherit from Symbol.prototype
          
```
function(){
              <div class="code">var symbol = Symbol();
var passed = symbol.foo === undefined;
Symbol.prototype.foo = 2;
passed &amp;= symbol.foo === 2;
delete Symbol.prototype.foo;
return passed;</div>}
```
###cannot coerce to string or number
          
```
function(){
              <div class="code">var symbol = Symbol();

try {
  symbol + &quot;&quot;;
  return false;
}
catch(e) {}

try {
  symbol + 0;
  return false;
} catch(e) {}

return true;</div>}
```
###can convert with String()
          
```
function(){
              <div class="code">return String(Symbol(&quot;foo&quot;)) === &quot;Symbol(foo)&quot;;</div>}
```
###new Symbol() throws
          
```
function(){
              <div class="code">var symbol = Symbol();
try {
  new Symbol();
} catch(e) {
  return true;
}</div>}
```
###JSON.stringify ignores symbols
          
```
function(){
              <div class="code">var object = {foo: Symbol()};
object[Symbol()] = 1;
var array = [Symbol()];
return JSON.stringify(object) === '{}' &amp;&amp; JSON.stringify(array) === '[null]' &amp;&amp; JSON.stringify(Symbol()) === undefined;</div>}
```
###global symbol registry
          
```
function(){
              <div class="code">var symbol = Symbol.for('foo');
return Symbol.for('foo') === symbol &amp;&amp;
   Symbol.keyFor(symbol) === 'foo';</div>}
```
###basic functionality
          
```
function(){
              <div class="code">var object = {};
var symbol = Symbol();
var value = {};
object[symbol] = value;
return object[symbol] === value;</div>}
```
###typeof support
          
```
function(){
              <div class="code">return typeof Symbol() === &quot;symbol&quot;;</div>}
```
###symbol keys are hidden to pre-ES6 code
          
```
function(){
              <div class="code">var object = {};
var symbol = Symbol();
object[symbol] = 1;

for (var x in object){}
var passed = !x;

if (Object.keys &amp;&amp; Object.getOwnPropertyNames) {
  passed &amp;= Object.keys(object).length === 0
    &amp;&amp; Object.getOwnPropertyNames(object).length === 0;
}

return passed;</div>}
```
###Object.defineProperty support
          
```
function(){
              <div class="code">var object = {};
var symbol = Symbol();
var value = {};

if (Object.defineProperty) {
  Object.defineProperty(object, symbol, { value: value });
  return object[symbol] === value;
}

return passed;</div>}
```
###symbols inherit from Symbol.prototype
          
```
function(){
              <div class="code">var symbol = Symbol();
var passed = symbol.foo === undefined;
Symbol.prototype.foo = 2;
passed &amp;= symbol.foo === 2;
delete Symbol.prototype.foo;
return passed;</div>}
```
###cannot coerce to string or number
          
```
function(){
              <div class="code">var symbol = Symbol();

try {
  symbol + &quot;&quot;;
  return false;
}
catch(e) {}

try {
  symbol + 0;
  return false;
} catch(e) {}

return true;</div>}
```
###can convert with String()
          
```
function(){
              <div class="code">return String(Symbol(&quot;foo&quot;)) === &quot;Symbol(foo)&quot;;</div>}
```
###new Symbol() throws
          
```
function(){
              <div class="code">var symbol = Symbol();
try {
  new Symbol();
} catch(e) {
  return true;
}</div>}
```
###JSON.stringify ignores symbols
          
```
function(){
              <div class="code">var object = {foo: Symbol()};
object[Symbol()] = 1;
var array = [Symbol()];
return JSON.stringify(object) === '{}' &amp;&amp; JSON.stringify(array) === '[null]' &amp;&amp; JSON.stringify(Symbol()) === undefined;</div>}
```
###global symbol registry
          
```
function(){
              <div class="code">var symbol = Symbol.for('foo');
return Symbol.for('foo') === symbol &amp;&amp;
   Symbol.keyFor(symbol) === 'foo';</div>}
```
###basic functionality
          
```
function(){
              <div class="code">var object = {};
var symbol = Symbol();
var value = {};
object[symbol] = value;
return object[symbol] === value;</div>}
```
###typeof support
          
```
function(){
              <div class="code">return typeof Symbol() === &quot;symbol&quot;;</div>}
```
###symbol keys are hidden to pre-ES6 code
          
```
function(){
              <div class="code">var object = {};
var symbol = Symbol();
object[symbol] = 1;

for (var x in object){}
var passed = !x;

if (Object.keys &amp;&amp; Object.getOwnPropertyNames) {
  passed &amp;= Object.keys(object).length === 0
    &amp;&amp; Object.getOwnPropertyNames(object).length === 0;
}

return passed;</div>}
```
###Object.defineProperty support
          
```
function(){
              <div class="code">var object = {};
var symbol = Symbol();
var value = {};

if (Object.defineProperty) {
  Object.defineProperty(object, symbol, { value: value });
  return object[symbol] === value;
}

return passed;</div>}
```
###symbols inherit from Symbol.prototype
          
```
function(){
              <div class="code">var symbol = Symbol();
var passed = symbol.foo === undefined;
Symbol.prototype.foo = 2;
passed &amp;= symbol.foo === 2;
delete Symbol.prototype.foo;
return passed;</div>}
```
###cannot coerce to string or number
          
```
function(){
              <div class="code">var symbol = Symbol();

try {
  symbol + &quot;&quot;;
  return false;
}
catch(e) {}

try {
  symbol + 0;
  return false;
} catch(e) {}

return true;</div>}
```
###can convert with String()
          
```
function(){
              <div class="code">return String(Symbol(&quot;foo&quot;)) === &quot;Symbol(foo)&quot;;</div>}
```
###new Symbol() throws
          
```
function(){
              <div class="code">var symbol = Symbol();
try {
  new Symbol();
} catch(e) {
  return true;
}</div>}
```
###JSON.stringify ignores symbols
          
```
function(){
              <div class="code">var object = {foo: Symbol()};
object[Symbol()] = 1;
var array = [Symbol()];
return JSON.stringify(object) === '{}' &amp;&amp; JSON.stringify(array) === '[null]' &amp;&amp; JSON.stringify(Symbol()) === undefined;</div>}
```
###global symbol registry
          
```
function(){
              <div class="code">var symbol = Symbol.for('foo');
return Symbol.for('foo') === symbol &amp;&amp;
   Symbol.keyFor(symbol) === 'foo';</div>}
```
###basic functionality
          
```
function(){
              <div class="code">var object = {};
var symbol = Symbol();
var value = {};
object[symbol] = value;
return object[symbol] === value;</div>}
```
###typeof support
          
```
function(){
              <div class="code">return typeof Symbol() === &quot;symbol&quot;;</div>}
```
###symbol keys are hidden to pre-ES6 code
          
```
function(){
              <div class="code">var object = {};
var symbol = Symbol();
object[symbol] = 1;

for (var x in object){}
var passed = !x;

if (Object.keys &amp;&amp; Object.getOwnPropertyNames) {
  passed &amp;= Object.keys(object).length === 0
    &amp;&amp; Object.getOwnPropertyNames(object).length === 0;
}

return passed;</div>}
```
###Object.defineProperty support
          
```
function(){
              <div class="code">var object = {};
var symbol = Symbol();
var value = {};

if (Object.defineProperty) {
  Object.defineProperty(object, symbol, { value: value });
  return object[symbol] === value;
}

return passed;</div>}
```
###symbols inherit from Symbol.prototype
          
```
function(){
              <div class="code">var symbol = Symbol();
var passed = symbol.foo === undefined;
Symbol.prototype.foo = 2;
passed &amp;= symbol.foo === 2;
delete Symbol.prototype.foo;
return passed;</div>}
```
###cannot coerce to string or number
          
```
function(){
              <div class="code">var symbol = Symbol();

try {
  symbol + &quot;&quot;;
  return false;
}
catch(e) {}

try {
  symbol + 0;
  return false;
} catch(e) {}

return true;</div>}
```
###can convert with String()
          
```
function(){
              <div class="code">return String(Symbol(&quot;foo&quot;)) === &quot;Symbol(foo)&quot;;</div>}
```
###new Symbol() throws
          
```
function(){
              <div class="code">var symbol = Symbol();
try {
  new Symbol();
} catch(e) {
  return true;
}</div>}
```
###JSON.stringify ignores symbols
          
```
function(){
              <div class="code">var object = {foo: Symbol()};
object[Symbol()] = 1;
var array = [Symbol()];
return JSON.stringify(object) === '{}' &amp;&amp; JSON.stringify(array) === '[null]' &amp;&amp; JSON.stringify(Symbol()) === undefined;</div>}
```
###global symbol registry
          
```
function(){
              <div class="code">var symbol = Symbol.for('foo');
return Symbol.for('foo') === symbol &amp;&amp;
   Symbol.keyFor(symbol) === 'foo';</div>}
```
###basic functionality
          
```
function(){
              <div class="code">var object = {};
var symbol = Symbol();
var value = {};
object[symbol] = value;
return object[symbol] === value;</div>}
```
###typeof support
          
```
function(){
              <div class="code">return typeof Symbol() === &quot;symbol&quot;;</div>}
```
###symbol keys are hidden to pre-ES6 code
          
```
function(){
              <div class="code">var object = {};
var symbol = Symbol();
object[symbol] = 1;

for (var x in object){}
var passed = !x;

if (Object.keys &amp;&amp; Object.getOwnPropertyNames) {
  passed &amp;= Object.keys(object).length === 0
    &amp;&amp; Object.getOwnPropertyNames(object).length === 0;
}

return passed;</div>}
```
###Object.defineProperty support
          
```
function(){
              <div class="code">var object = {};
var symbol = Symbol();
var value = {};

if (Object.defineProperty) {
  Object.defineProperty(object, symbol, { value: value });
  return object[symbol] === value;
}

return passed;</div>}
```
###symbols inherit from Symbol.prototype
          
```
function(){
              <div class="code">var symbol = Symbol();
var passed = symbol.foo === undefined;
Symbol.prototype.foo = 2;
passed &amp;= symbol.foo === 2;
delete Symbol.prototype.foo;
return passed;</div>}
```
###cannot coerce to string or number
          
```
function(){
              <div class="code">var symbol = Symbol();

try {
  symbol + &quot;&quot;;
  return false;
}
catch(e) {}

try {
  symbol + 0;
  return false;
} catch(e) {}

return true;</div>}
```
###can convert with String()
          
```
function(){
              <div class="code">return String(Symbol(&quot;foo&quot;)) === &quot;Symbol(foo)&quot;;</div>}
```
###new Symbol() throws
          
```
function(){
              <div class="code">var symbol = Symbol();
try {
  new Symbol();
} catch(e) {
  return true;
}</div>}
```
###JSON.stringify ignores symbols
          
```
function(){
              <div class="code">var object = {foo: Symbol()};
object[Symbol()] = 1;
var array = [Symbol()];
return JSON.stringify(object) === '{}' &amp;&amp; JSON.stringify(array) === '[null]' &amp;&amp; JSON.stringify(Symbol()) === undefined;</div>}
```
###global symbol registry
          
```
function(){
              <div class="code">var symbol = Symbol.for('foo');
return Symbol.for('foo') === symbol &amp;&amp;
   Symbol.keyFor(symbol) === 'foo';</div>}
```
###basic functionality
          
```
function(){
              <div class="code">var object = {};
var symbol = Symbol();
var value = {};
object[symbol] = value;
return object[symbol] === value;</div>}
```
###typeof support
          
```
function(){
              <div class="code">return typeof Symbol() === &quot;symbol&quot;;</div>}
```
###symbol keys are hidden to pre-ES6 code
          
```
function(){
              <div class="code">var object = {};
var symbol = Symbol();
object[symbol] = 1;

for (var x in object){}
var passed = !x;

if (Object.keys &amp;&amp; Object.getOwnPropertyNames) {
  passed &amp;= Object.keys(object).length === 0
    &amp;&amp; Object.getOwnPropertyNames(object).length === 0;
}

return passed;</div>}
```
###Object.defineProperty support
          
```
function(){
              <div class="code">var object = {};
var symbol = Symbol();
var value = {};

if (Object.defineProperty) {
  Object.defineProperty(object, symbol, { value: value });
  return object[symbol] === value;
}

return passed;</div>}
```
###symbols inherit from Symbol.prototype
          
```
function(){
              <div class="code">var symbol = Symbol();
var passed = symbol.foo === undefined;
Symbol.prototype.foo = 2;
passed &amp;= symbol.foo === 2;
delete Symbol.prototype.foo;
return passed;</div>}
```
###cannot coerce to string or number
          
```
function(){
              <div class="code">var symbol = Symbol();

try {
  symbol + &quot;&quot;;
  return false;
}
catch(e) {}

try {
  symbol + 0;
  return false;
} catch(e) {}

return true;</div>}
```
###can convert with String()
          
```
function(){
              <div class="code">return String(Symbol(&quot;foo&quot;)) === &quot;Symbol(foo)&quot;;</div>}
```
###new Symbol() throws
          
```
function(){
              <div class="code">var symbol = Symbol();
try {
  new Symbol();
} catch(e) {
  return true;
}</div>}
```
###JSON.stringify ignores symbols
          
```
function(){
              <div class="code">var object = {foo: Symbol()};
object[Symbol()] = 1;
var array = [Symbol()];
return JSON.stringify(object) === '{}' &amp;&amp; JSON.stringify(array) === '[null]' &amp;&amp; JSON.stringify(Symbol()) === undefined;</div>}
```
###global symbol registry
          
```
function(){
              <div class="code">var symbol = Symbol.for('foo');
return Symbol.for('foo') === symbol &amp;&amp;
   Symbol.keyFor(symbol) === 'foo';</div>}
```
###basic functionality
          
```
function(){
              <div class="code">var object = {};
var symbol = Symbol();
var value = {};
object[symbol] = value;
return object[symbol] === value;</div>}
```
###typeof support
          
```
function(){
              <div class="code">return typeof Symbol() === &quot;symbol&quot;;</div>}
```
###symbol keys are hidden to pre-ES6 code
          
```
function(){
              <div class="code">var object = {};
var symbol = Symbol();
object[symbol] = 1;

for (var x in object){}
var passed = !x;

if (Object.keys &amp;&amp; Object.getOwnPropertyNames) {
  passed &amp;= Object.keys(object).length === 0
    &amp;&amp; Object.getOwnPropertyNames(object).length === 0;
}

return passed;</div>}
```
###Object.defineProperty support
          
```
function(){
              <div class="code">var object = {};
var symbol = Symbol();
var value = {};

if (Object.defineProperty) {
  Object.defineProperty(object, symbol, { value: value });
  return object[symbol] === value;
}

return passed;</div>}
```
###symbols inherit from Symbol.prototype
          
```
function(){
              <div class="code">var symbol = Symbol();
var passed = symbol.foo === undefined;
Symbol.prototype.foo = 2;
passed &amp;= symbol.foo === 2;
delete Symbol.prototype.foo;
return passed;</div>}
```
###cannot coerce to string or number
          
```
function(){
              <div class="code">var symbol = Symbol();

try {
  symbol + &quot;&quot;;
  return false;
}
catch(e) {}

try {
  symbol + 0;
  return false;
} catch(e) {}

return true;</div>}
```
###can convert with String()
          
```
function(){
              <div class="code">return String(Symbol(&quot;foo&quot;)) === &quot;Symbol(foo)&quot;;</div>}
```
###new Symbol() throws
          
```
function(){
              <div class="code">var symbol = Symbol();
try {
  new Symbol();
} catch(e) {
  return true;
}</div>}
```
###JSON.stringify ignores symbols
          
```
function(){
              <div class="code">var object = {foo: Symbol()};
object[Symbol()] = 1;
var array = [Symbol()];
return JSON.stringify(object) === '{}' &amp;&amp; JSON.stringify(array) === '[null]' &amp;&amp; JSON.stringify(Symbol()) === undefined;</div>}
```
###global symbol registry
          
```
function(){
              <div class="code">var symbol = Symbol.for('foo');
return Symbol.for('foo') === symbol &amp;&amp;
   Symbol.keyFor(symbol) === 'foo';</div>}
```
###basic functionality
          
```
function(){
              <div class="code">var object = {};
var symbol = Symbol();
var value = {};
object[symbol] = value;
return object[symbol] === value;</div>}
```
###typeof support
          
```
function(){
              <div class="code">return typeof Symbol() === &quot;symbol&quot;;</div>}
```
###symbol keys are hidden to pre-ES6 code
          
```
function(){
              <div class="code">var object = {};
var symbol = Symbol();
object[symbol] = 1;

for (var x in object){}
var passed = !x;

if (Object.keys &amp;&amp; Object.getOwnPropertyNames) {
  passed &amp;= Object.keys(object).length === 0
    &amp;&amp; Object.getOwnPropertyNames(object).length === 0;
}

return passed;</div>}
```
###Object.defineProperty support
          
```
function(){
              <div class="code">var object = {};
var symbol = Symbol();
var value = {};

if (Object.defineProperty) {
  Object.defineProperty(object, symbol, { value: value });
  return object[symbol] === value;
}

return passed;</div>}
```
###symbols inherit from Symbol.prototype
          
```
function(){
              <div class="code">var symbol = Symbol();
var passed = symbol.foo === undefined;
Symbol.prototype.foo = 2;
passed &amp;= symbol.foo === 2;
delete Symbol.prototype.foo;
return passed;</div>}
```
###cannot coerce to string or number
          
```
function(){
              <div class="code">var symbol = Symbol();

try {
  symbol + &quot;&quot;;
  return false;
}
catch(e) {}

try {
  symbol + 0;
  return false;
} catch(e) {}

return true;</div>}
```
###can convert with String()
          
```
function(){
              <div class="code">return String(Symbol(&quot;foo&quot;)) === &quot;Symbol(foo)&quot;;</div>}
```
###new Symbol() throws
          
```
function(){
              <div class="code">var symbol = Symbol();
try {
  new Symbol();
} catch(e) {
  return true;
}</div>}
```
###JSON.stringify ignores symbols
          
```
function(){
              <div class="code">var object = {foo: Symbol()};
object[Symbol()] = 1;
var array = [Symbol()];
return JSON.stringify(object) === '{}' &amp;&amp; JSON.stringify(array) === '[null]' &amp;&amp; JSON.stringify(Symbol()) === undefined;</div>}
```
###global symbol registry
          
```
function(){
              <div class="code">var symbol = Symbol.for('foo');
return Symbol.for('foo') === symbol &amp;&amp;
   Symbol.keyFor(symbol) === 'foo';</div>}
```
###basic functionality
          
```
function(){
              <div class="code">var object = {};
var symbol = Symbol();
var value = {};
object[symbol] = value;
return object[symbol] === value;</div>}
```
###typeof support
          
```
function(){
              <div class="code">return typeof Symbol() === &quot;symbol&quot;;</div>}
```
###symbol keys are hidden to pre-ES6 code
          
```
function(){
              <div class="code">var object = {};
var symbol = Symbol();
object[symbol] = 1;

for (var x in object){}
var passed = !x;

if (Object.keys &amp;&amp; Object.getOwnPropertyNames) {
  passed &amp;= Object.keys(object).length === 0
    &amp;&amp; Object.getOwnPropertyNames(object).length === 0;
}

return passed;</div>}
```
###Object.defineProperty support
          
```
function(){
              <div class="code">var object = {};
var symbol = Symbol();
var value = {};

if (Object.defineProperty) {
  Object.defineProperty(object, symbol, { value: value });
  return object[symbol] === value;
}

return passed;</div>}
```
###symbols inherit from Symbol.prototype
          
```
function(){
              <div class="code">var symbol = Symbol();
var passed = symbol.foo === undefined;
Symbol.prototype.foo = 2;
passed &amp;= symbol.foo === 2;
delete Symbol.prototype.foo;
return passed;</div>}
```
###cannot coerce to string or number
          
```
function(){
              <div class="code">var symbol = Symbol();

try {
  symbol + &quot;&quot;;
  return false;
}
catch(e) {}

try {
  symbol + 0;
  return false;
} catch(e) {}

return true;</div>}
```
###can convert with String()
          
```
function(){
              <div class="code">return String(Symbol(&quot;foo&quot;)) === &quot;Symbol(foo)&quot;;</div>}
```
###new Symbol() throws
          
```
function(){
              <div class="code">var symbol = Symbol();
try {
  new Symbol();
} catch(e) {
  return true;
}</div>}
```
###JSON.stringify ignores symbols
          
```
function(){
              <div class="code">var object = {foo: Symbol()};
object[Symbol()] = 1;
var array = [Symbol()];
return JSON.stringify(object) === '{}' &amp;&amp; JSON.stringify(array) === '[null]' &amp;&amp; JSON.stringify(Symbol()) === undefined;</div>}
```
###global symbol registry
          
```
function(){
              <div class="code">var symbol = Symbol.for('foo');
return Symbol.for('foo') === symbol &amp;&amp;
   Symbol.keyFor(symbol) === 'foo';</div>}
```
###basic functionality
          
```
function(){
              <div class="code">var object = {};
var symbol = Symbol();
var value = {};
object[symbol] = value;
return object[symbol] === value;</div>}
```
###typeof support
          
```
function(){
              <div class="code">return typeof Symbol() === &quot;symbol&quot;;</div>}
```
###symbol keys are hidden to pre-ES6 code
          
```
function(){
              <div class="code">var object = {};
var symbol = Symbol();
object[symbol] = 1;

for (var x in object){}
var passed = !x;

if (Object.keys &amp;&amp; Object.getOwnPropertyNames) {
  passed &amp;= Object.keys(object).length === 0
    &amp;&amp; Object.getOwnPropertyNames(object).length === 0;
}

return passed;</div>}
```
###Object.defineProperty support
          
```
function(){
              <div class="code">var object = {};
var symbol = Symbol();
var value = {};

if (Object.defineProperty) {
  Object.defineProperty(object, symbol, { value: value });
  return object[symbol] === value;
}

return passed;</div>}
```
###symbols inherit from Symbol.prototype
          
```
function(){
              <div class="code">var symbol = Symbol();
var passed = symbol.foo === undefined;
Symbol.prototype.foo = 2;
passed &amp;= symbol.foo === 2;
delete Symbol.prototype.foo;
return passed;</div>}
```
###cannot coerce to string or number
          
```
function(){
              <div class="code">var symbol = Symbol();

try {
  symbol + &quot;&quot;;
  return false;
}
catch(e) {}

try {
  symbol + 0;
  return false;
} catch(e) {}

return true;</div>}
```
###can convert with String()
          
```
function(){
              <div class="code">return String(Symbol(&quot;foo&quot;)) === &quot;Symbol(foo)&quot;;</div>}
```
###new Symbol() throws
          
```
function(){
              <div class="code">var symbol = Symbol();
try {
  new Symbol();
} catch(e) {
  return true;
}</div>}
```
###JSON.stringify ignores symbols
          
```
function(){
              <div class="code">var object = {foo: Symbol()};
object[Symbol()] = 1;
var array = [Symbol()];
return JSON.stringify(object) === '{}' &amp;&amp; JSON.stringify(array) === '[null]' &amp;&amp; JSON.stringify(Symbol()) === undefined;</div>}
```
###global symbol registry
          
```
function(){
              <div class="code">var symbol = Symbol.for('foo');
return Symbol.for('foo') === symbol &amp;&amp;
   Symbol.keyFor(symbol) === 'foo';</div>}
```
