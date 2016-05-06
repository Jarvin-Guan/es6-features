###basic functionality
          
```
function(){
              <div class="code">function * generator(){
  yield 5; yield 6;
};
var iterator = generator();
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###generator function expressions
          
```
function(){
              <div class="code">var generator = function * (){
  yield 5; yield 6;
};
var iterator = generator();
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###correct &quot;this&quot; binding
          
```
function(){
              <div class="code">function * generator(){
  yield this.x; yield this.y;
};
var iterator = { g: generator, x: 5, y: 6 }.g();
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###sending
          
```
function(){
              <div class="code">var sent;
function * generator(){
  sent = [yield 5, yield 6];
};
var iterator = generator();
iterator.next();
iterator.next(&quot;foo&quot;);
iterator.next(&quot;bar&quot;);
return sent[0] === &quot;foo&quot; &amp;&amp; sent[1] === &quot;bar&quot;;</div>}
```
###%GeneratorPrototype%
          
```
function(){
              <div class="code">function * generatorFn(){}
var ownProto = Object.getPrototypeOf(generatorFn());
var passed = ownProto === generatorFn.prototype;

var sharedProto = Object.getPrototypeOf(ownProto);
passed &amp;= sharedProto !== Object.prototype &amp;&amp;
  sharedProto === Object.getPrototypeOf(function*(){}.prototype) &amp;&amp;
  sharedProto.hasOwnProperty('next');

return passed;</div>}
```
###%GeneratorPrototype% prototype chain
          
```
function(){
              <div class="code">function * generatorFn(){}
var g = generatorFn();
var ownProto = Object.getPrototypeOf(g);
var passed = ownProto === generatorFn.prototype;

var sharedProto = Object.getPrototypeOf(ownProto);
var iterProto = Object.getPrototypeOf(sharedProto);

passed &amp;= iterProto.hasOwnProperty(Symbol.iterator) &amp;&amp;
  !sharedProto     .hasOwnProperty(Symbol.iterator) &amp;&amp;
  !ownProto        .hasOwnProperty(Symbol.iterator) &amp;&amp;
  g[Symbol.iterator]() === g;

return passed;</div>}
```
###%GeneratorPrototype%.constructor
          
```
function(){
              <div class="code">function * g (){}
var iterator = new g.constructor(&quot;a&quot;,&quot;b&quot;,&quot;c&quot;,&quot;yield a; yield b; yield c;&quot;)(5,6,7);
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 7 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;

passed &amp;= g.constructor === (function*(){}).constructor;
return passed;</div>}
```
###%GeneratorPrototype%.throw
          
```
function(){
              <div class="code">var passed = false;
function * generator(){
  try {
    yield 5; yield 6;
  } catch(e) {
    passed = (e === &quot;foo&quot;);
  }
};
var iterator = generator();
iterator.next();
iterator.throw(&quot;foo&quot;);
return passed;</div>}
```
###yield operator precedence
          
```
function(){
              <div class="code">var passed;
function * generator(){
  passed = yield 0 ? true : false;
};
var iterator = generator();
iterator.next();
iterator.next(true);
return passed;</div>}
```
###yield *, arrays
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * [5, 6];
}());
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###yield *, sparse arrays
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * [,,];
}());
var item = iterator.next();
var passed = item.value === undefined &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###yield *, strings
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * &quot;56&quot;;
}());
var item = iterator.next();
var passed = item.value === &quot;5&quot; &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === &quot;6&quot; &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###yield *, astral plane strings
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * &quot;𠮷𠮶&quot;;
}());
var item = iterator.next();
var passed = item.value === &quot;𠮷&quot; &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === &quot;𠮶&quot; &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###yield *, generator instances
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * (function*(){ yield 5; yield 6; yield 7; }());
}());
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 7 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###yield *, generic iterables
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * global.__createIterableObject([5, 6, 7]);
}());
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 7 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###yield *, instances of iterables
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * Object.create(__createIterableObject([5, 6, 7]));
}());
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 7 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###yield * on non-iterables is a runtime error
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * [5];
}());
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
iterator = (function * generator() {
  yield * 5;
}());
try {
  iterator.next();
} catch (e) {
  return passed;
}</div>}
```
###shorthand generator methods
          
```
function(){
              <div class="code">var o = {
  * generator() {
    yield 5; yield 6;
  },
};
var iterator = o.generator();
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###string-keyed shorthand generator methods
          
```
function(){
              <div class="code">var o = {
  * &quot;foo bar&quot;() {
    yield 5; yield 6;
  },
};
var iterator = o[&quot;foo bar&quot;]();
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###computed shorthand generators
          
```
function(){
              <div class="code">var garply = &quot;generator&quot;;
var o = {
  * [garply] () {
    yield 5; yield 6;
  },
};
var iterator = o.generator();
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###basic functionality
          
```
function(){
              <div class="code">function * generator(){
  yield 5; yield 6;
};
var iterator = generator();
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###generator function expressions
          
```
function(){
              <div class="code">var generator = function * (){
  yield 5; yield 6;
};
var iterator = generator();
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###correct &quot;this&quot; binding
          
```
function(){
              <div class="code">function * generator(){
  yield this.x; yield this.y;
};
var iterator = { g: generator, x: 5, y: 6 }.g();
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###sending
          
```
function(){
              <div class="code">var sent;
function * generator(){
  sent = [yield 5, yield 6];
};
var iterator = generator();
iterator.next();
iterator.next(&quot;foo&quot;);
iterator.next(&quot;bar&quot;);
return sent[0] === &quot;foo&quot; &amp;&amp; sent[1] === &quot;bar&quot;;</div>}
```
###%GeneratorPrototype%
          
```
function(){
              <div class="code">function * generatorFn(){}
var ownProto = Object.getPrototypeOf(generatorFn());
var passed = ownProto === generatorFn.prototype;

var sharedProto = Object.getPrototypeOf(ownProto);
passed &amp;= sharedProto !== Object.prototype &amp;&amp;
  sharedProto === Object.getPrototypeOf(function*(){}.prototype) &amp;&amp;
  sharedProto.hasOwnProperty('next');

return passed;</div>}
```
###%GeneratorPrototype% prototype chain
          
```
function(){
              <div class="code">function * generatorFn(){}
var g = generatorFn();
var ownProto = Object.getPrototypeOf(g);
var passed = ownProto === generatorFn.prototype;

var sharedProto = Object.getPrototypeOf(ownProto);
var iterProto = Object.getPrototypeOf(sharedProto);

passed &amp;= iterProto.hasOwnProperty(Symbol.iterator) &amp;&amp;
  !sharedProto     .hasOwnProperty(Symbol.iterator) &amp;&amp;
  !ownProto        .hasOwnProperty(Symbol.iterator) &amp;&amp;
  g[Symbol.iterator]() === g;

return passed;</div>}
```
###%GeneratorPrototype%.constructor
          
```
function(){
              <div class="code">function * g (){}
var iterator = new g.constructor(&quot;a&quot;,&quot;b&quot;,&quot;c&quot;,&quot;yield a; yield b; yield c;&quot;)(5,6,7);
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 7 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;

passed &amp;= g.constructor === (function*(){}).constructor;
return passed;</div>}
```
###%GeneratorPrototype%.throw
          
```
function(){
              <div class="code">var passed = false;
function * generator(){
  try {
    yield 5; yield 6;
  } catch(e) {
    passed = (e === &quot;foo&quot;);
  }
};
var iterator = generator();
iterator.next();
iterator.throw(&quot;foo&quot;);
return passed;</div>}
```
###yield operator precedence
          
```
function(){
              <div class="code">var passed;
function * generator(){
  passed = yield 0 ? true : false;
};
var iterator = generator();
iterator.next();
iterator.next(true);
return passed;</div>}
```
###yield *, arrays
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * [5, 6];
}());
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###yield *, sparse arrays
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * [,,];
}());
var item = iterator.next();
var passed = item.value === undefined &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###yield *, strings
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * &quot;56&quot;;
}());
var item = iterator.next();
var passed = item.value === &quot;5&quot; &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === &quot;6&quot; &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###yield *, astral plane strings
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * &quot;𠮷𠮶&quot;;
}());
var item = iterator.next();
var passed = item.value === &quot;𠮷&quot; &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === &quot;𠮶&quot; &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###yield *, generator instances
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * (function*(){ yield 5; yield 6; yield 7; }());
}());
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 7 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###yield *, generic iterables
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * global.__createIterableObject([5, 6, 7]);
}());
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 7 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###yield *, instances of iterables
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * Object.create(__createIterableObject([5, 6, 7]));
}());
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 7 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###yield * on non-iterables is a runtime error
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * [5];
}());
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
iterator = (function * generator() {
  yield * 5;
}());
try {
  iterator.next();
} catch (e) {
  return passed;
}</div>}
```
###shorthand generator methods
          
```
function(){
              <div class="code">var o = {
  * generator() {
    yield 5; yield 6;
  },
};
var iterator = o.generator();
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###string-keyed shorthand generator methods
          
```
function(){
              <div class="code">var o = {
  * &quot;foo bar&quot;() {
    yield 5; yield 6;
  },
};
var iterator = o[&quot;foo bar&quot;]();
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###computed shorthand generators
          
```
function(){
              <div class="code">var garply = &quot;generator&quot;;
var o = {
  * [garply] () {
    yield 5; yield 6;
  },
};
var iterator = o.generator();
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###basic functionality
          
```
function(){
              <div class="code">function * generator(){
  yield 5; yield 6;
};
var iterator = generator();
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###generator function expressions
          
```
function(){
              <div class="code">var generator = function * (){
  yield 5; yield 6;
};
var iterator = generator();
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###correct &quot;this&quot; binding
          
```
function(){
              <div class="code">function * generator(){
  yield this.x; yield this.y;
};
var iterator = { g: generator, x: 5, y: 6 }.g();
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###sending
          
```
function(){
              <div class="code">var sent;
function * generator(){
  sent = [yield 5, yield 6];
};
var iterator = generator();
iterator.next();
iterator.next(&quot;foo&quot;);
iterator.next(&quot;bar&quot;);
return sent[0] === &quot;foo&quot; &amp;&amp; sent[1] === &quot;bar&quot;;</div>}
```
###%GeneratorPrototype%
          
```
function(){
              <div class="code">function * generatorFn(){}
var ownProto = Object.getPrototypeOf(generatorFn());
var passed = ownProto === generatorFn.prototype;

var sharedProto = Object.getPrototypeOf(ownProto);
passed &amp;= sharedProto !== Object.prototype &amp;&amp;
  sharedProto === Object.getPrototypeOf(function*(){}.prototype) &amp;&amp;
  sharedProto.hasOwnProperty('next');

return passed;</div>}
```
###%GeneratorPrototype% prototype chain
          
```
function(){
              <div class="code">function * generatorFn(){}
var g = generatorFn();
var ownProto = Object.getPrototypeOf(g);
var passed = ownProto === generatorFn.prototype;

var sharedProto = Object.getPrototypeOf(ownProto);
var iterProto = Object.getPrototypeOf(sharedProto);

passed &amp;= iterProto.hasOwnProperty(Symbol.iterator) &amp;&amp;
  !sharedProto     .hasOwnProperty(Symbol.iterator) &amp;&amp;
  !ownProto        .hasOwnProperty(Symbol.iterator) &amp;&amp;
  g[Symbol.iterator]() === g;

return passed;</div>}
```
###%GeneratorPrototype%.constructor
          
```
function(){
              <div class="code">function * g (){}
var iterator = new g.constructor(&quot;a&quot;,&quot;b&quot;,&quot;c&quot;,&quot;yield a; yield b; yield c;&quot;)(5,6,7);
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 7 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;

passed &amp;= g.constructor === (function*(){}).constructor;
return passed;</div>}
```
###%GeneratorPrototype%.throw
          
```
function(){
              <div class="code">var passed = false;
function * generator(){
  try {
    yield 5; yield 6;
  } catch(e) {
    passed = (e === &quot;foo&quot;);
  }
};
var iterator = generator();
iterator.next();
iterator.throw(&quot;foo&quot;);
return passed;</div>}
```
###yield operator precedence
          
```
function(){
              <div class="code">var passed;
function * generator(){
  passed = yield 0 ? true : false;
};
var iterator = generator();
iterator.next();
iterator.next(true);
return passed;</div>}
```
###yield *, arrays
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * [5, 6];
}());
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###yield *, sparse arrays
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * [,,];
}());
var item = iterator.next();
var passed = item.value === undefined &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###yield *, strings
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * &quot;56&quot;;
}());
var item = iterator.next();
var passed = item.value === &quot;5&quot; &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === &quot;6&quot; &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###yield *, astral plane strings
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * &quot;𠮷𠮶&quot;;
}());
var item = iterator.next();
var passed = item.value === &quot;𠮷&quot; &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === &quot;𠮶&quot; &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###yield *, generator instances
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * (function*(){ yield 5; yield 6; yield 7; }());
}());
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 7 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###yield *, generic iterables
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * global.__createIterableObject([5, 6, 7]);
}());
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 7 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###yield *, instances of iterables
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * Object.create(__createIterableObject([5, 6, 7]));
}());
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 7 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###yield * on non-iterables is a runtime error
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * [5];
}());
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
iterator = (function * generator() {
  yield * 5;
}());
try {
  iterator.next();
} catch (e) {
  return passed;
}</div>}
```
###shorthand generator methods
          
```
function(){
              <div class="code">var o = {
  * generator() {
    yield 5; yield 6;
  },
};
var iterator = o.generator();
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###string-keyed shorthand generator methods
          
```
function(){
              <div class="code">var o = {
  * &quot;foo bar&quot;() {
    yield 5; yield 6;
  },
};
var iterator = o[&quot;foo bar&quot;]();
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###computed shorthand generators
          
```
function(){
              <div class="code">var garply = &quot;generator&quot;;
var o = {
  * [garply] () {
    yield 5; yield 6;
  },
};
var iterator = o.generator();
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###basic functionality
          
```
function(){
              <div class="code">function * generator(){
  yield 5; yield 6;
};
var iterator = generator();
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###generator function expressions
          
```
function(){
              <div class="code">var generator = function * (){
  yield 5; yield 6;
};
var iterator = generator();
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###correct &quot;this&quot; binding
          
```
function(){
              <div class="code">function * generator(){
  yield this.x; yield this.y;
};
var iterator = { g: generator, x: 5, y: 6 }.g();
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###sending
          
```
function(){
              <div class="code">var sent;
function * generator(){
  sent = [yield 5, yield 6];
};
var iterator = generator();
iterator.next();
iterator.next(&quot;foo&quot;);
iterator.next(&quot;bar&quot;);
return sent[0] === &quot;foo&quot; &amp;&amp; sent[1] === &quot;bar&quot;;</div>}
```
###%GeneratorPrototype%
          
```
function(){
              <div class="code">function * generatorFn(){}
var ownProto = Object.getPrototypeOf(generatorFn());
var passed = ownProto === generatorFn.prototype;

var sharedProto = Object.getPrototypeOf(ownProto);
passed &amp;= sharedProto !== Object.prototype &amp;&amp;
  sharedProto === Object.getPrototypeOf(function*(){}.prototype) &amp;&amp;
  sharedProto.hasOwnProperty('next');

return passed;</div>}
```
###%GeneratorPrototype% prototype chain
          
```
function(){
              <div class="code">function * generatorFn(){}
var g = generatorFn();
var ownProto = Object.getPrototypeOf(g);
var passed = ownProto === generatorFn.prototype;

var sharedProto = Object.getPrototypeOf(ownProto);
var iterProto = Object.getPrototypeOf(sharedProto);

passed &amp;= iterProto.hasOwnProperty(Symbol.iterator) &amp;&amp;
  !sharedProto     .hasOwnProperty(Symbol.iterator) &amp;&amp;
  !ownProto        .hasOwnProperty(Symbol.iterator) &amp;&amp;
  g[Symbol.iterator]() === g;

return passed;</div>}
```
###%GeneratorPrototype%.constructor
          
```
function(){
              <div class="code">function * g (){}
var iterator = new g.constructor(&quot;a&quot;,&quot;b&quot;,&quot;c&quot;,&quot;yield a; yield b; yield c;&quot;)(5,6,7);
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 7 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;

passed &amp;= g.constructor === (function*(){}).constructor;
return passed;</div>}
```
###%GeneratorPrototype%.throw
          
```
function(){
              <div class="code">var passed = false;
function * generator(){
  try {
    yield 5; yield 6;
  } catch(e) {
    passed = (e === &quot;foo&quot;);
  }
};
var iterator = generator();
iterator.next();
iterator.throw(&quot;foo&quot;);
return passed;</div>}
```
###yield operator precedence
          
```
function(){
              <div class="code">var passed;
function * generator(){
  passed = yield 0 ? true : false;
};
var iterator = generator();
iterator.next();
iterator.next(true);
return passed;</div>}
```
###yield *, arrays
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * [5, 6];
}());
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###yield *, sparse arrays
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * [,,];
}());
var item = iterator.next();
var passed = item.value === undefined &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###yield *, strings
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * &quot;56&quot;;
}());
var item = iterator.next();
var passed = item.value === &quot;5&quot; &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === &quot;6&quot; &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###yield *, astral plane strings
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * &quot;𠮷𠮶&quot;;
}());
var item = iterator.next();
var passed = item.value === &quot;𠮷&quot; &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === &quot;𠮶&quot; &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###yield *, generator instances
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * (function*(){ yield 5; yield 6; yield 7; }());
}());
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 7 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###yield *, generic iterables
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * global.__createIterableObject([5, 6, 7]);
}());
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 7 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###yield *, instances of iterables
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * Object.create(__createIterableObject([5, 6, 7]));
}());
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 7 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###yield * on non-iterables is a runtime error
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * [5];
}());
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
iterator = (function * generator() {
  yield * 5;
}());
try {
  iterator.next();
} catch (e) {
  return passed;
}</div>}
```
###shorthand generator methods
          
```
function(){
              <div class="code">var o = {
  * generator() {
    yield 5; yield 6;
  },
};
var iterator = o.generator();
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###string-keyed shorthand generator methods
          
```
function(){
              <div class="code">var o = {
  * &quot;foo bar&quot;() {
    yield 5; yield 6;
  },
};
var iterator = o[&quot;foo bar&quot;]();
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###computed shorthand generators
          
```
function(){
              <div class="code">var garply = &quot;generator&quot;;
var o = {
  * [garply] () {
    yield 5; yield 6;
  },
};
var iterator = o.generator();
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###basic functionality
          
```
function(){
              <div class="code">function * generator(){
  yield 5; yield 6;
};
var iterator = generator();
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###generator function expressions
          
```
function(){
              <div class="code">var generator = function * (){
  yield 5; yield 6;
};
var iterator = generator();
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###correct &quot;this&quot; binding
          
```
function(){
              <div class="code">function * generator(){
  yield this.x; yield this.y;
};
var iterator = { g: generator, x: 5, y: 6 }.g();
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###sending
          
```
function(){
              <div class="code">var sent;
function * generator(){
  sent = [yield 5, yield 6];
};
var iterator = generator();
iterator.next();
iterator.next(&quot;foo&quot;);
iterator.next(&quot;bar&quot;);
return sent[0] === &quot;foo&quot; &amp;&amp; sent[1] === &quot;bar&quot;;</div>}
```
###%GeneratorPrototype%
          
```
function(){
              <div class="code">function * generatorFn(){}
var ownProto = Object.getPrototypeOf(generatorFn());
var passed = ownProto === generatorFn.prototype;

var sharedProto = Object.getPrototypeOf(ownProto);
passed &amp;= sharedProto !== Object.prototype &amp;&amp;
  sharedProto === Object.getPrototypeOf(function*(){}.prototype) &amp;&amp;
  sharedProto.hasOwnProperty('next');

return passed;</div>}
```
###%GeneratorPrototype% prototype chain
          
```
function(){
              <div class="code">function * generatorFn(){}
var g = generatorFn();
var ownProto = Object.getPrototypeOf(g);
var passed = ownProto === generatorFn.prototype;

var sharedProto = Object.getPrototypeOf(ownProto);
var iterProto = Object.getPrototypeOf(sharedProto);

passed &amp;= iterProto.hasOwnProperty(Symbol.iterator) &amp;&amp;
  !sharedProto     .hasOwnProperty(Symbol.iterator) &amp;&amp;
  !ownProto        .hasOwnProperty(Symbol.iterator) &amp;&amp;
  g[Symbol.iterator]() === g;

return passed;</div>}
```
###%GeneratorPrototype%.constructor
          
```
function(){
              <div class="code">function * g (){}
var iterator = new g.constructor(&quot;a&quot;,&quot;b&quot;,&quot;c&quot;,&quot;yield a; yield b; yield c;&quot;)(5,6,7);
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 7 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;

passed &amp;= g.constructor === (function*(){}).constructor;
return passed;</div>}
```
###%GeneratorPrototype%.throw
          
```
function(){
              <div class="code">var passed = false;
function * generator(){
  try {
    yield 5; yield 6;
  } catch(e) {
    passed = (e === &quot;foo&quot;);
  }
};
var iterator = generator();
iterator.next();
iterator.throw(&quot;foo&quot;);
return passed;</div>}
```
###yield operator precedence
          
```
function(){
              <div class="code">var passed;
function * generator(){
  passed = yield 0 ? true : false;
};
var iterator = generator();
iterator.next();
iterator.next(true);
return passed;</div>}
```
###yield *, arrays
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * [5, 6];
}());
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###yield *, sparse arrays
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * [,,];
}());
var item = iterator.next();
var passed = item.value === undefined &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###yield *, strings
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * &quot;56&quot;;
}());
var item = iterator.next();
var passed = item.value === &quot;5&quot; &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === &quot;6&quot; &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###yield *, astral plane strings
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * &quot;𠮷𠮶&quot;;
}());
var item = iterator.next();
var passed = item.value === &quot;𠮷&quot; &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === &quot;𠮶&quot; &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###yield *, generator instances
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * (function*(){ yield 5; yield 6; yield 7; }());
}());
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 7 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###yield *, generic iterables
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * global.__createIterableObject([5, 6, 7]);
}());
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 7 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###yield *, instances of iterables
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * Object.create(__createIterableObject([5, 6, 7]));
}());
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 7 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###yield * on non-iterables is a runtime error
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * [5];
}());
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
iterator = (function * generator() {
  yield * 5;
}());
try {
  iterator.next();
} catch (e) {
  return passed;
}</div>}
```
###shorthand generator methods
          
```
function(){
              <div class="code">var o = {
  * generator() {
    yield 5; yield 6;
  },
};
var iterator = o.generator();
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###string-keyed shorthand generator methods
          
```
function(){
              <div class="code">var o = {
  * &quot;foo bar&quot;() {
    yield 5; yield 6;
  },
};
var iterator = o[&quot;foo bar&quot;]();
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###computed shorthand generators
          
```
function(){
              <div class="code">var garply = &quot;generator&quot;;
var o = {
  * [garply] () {
    yield 5; yield 6;
  },
};
var iterator = o.generator();
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###basic functionality
          
```
function(){
              <div class="code">function * generator(){
  yield 5; yield 6;
};
var iterator = generator();
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###generator function expressions
          
```
function(){
              <div class="code">var generator = function * (){
  yield 5; yield 6;
};
var iterator = generator();
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###correct &quot;this&quot; binding
          
```
function(){
              <div class="code">function * generator(){
  yield this.x; yield this.y;
};
var iterator = { g: generator, x: 5, y: 6 }.g();
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###sending
          
```
function(){
              <div class="code">var sent;
function * generator(){
  sent = [yield 5, yield 6];
};
var iterator = generator();
iterator.next();
iterator.next(&quot;foo&quot;);
iterator.next(&quot;bar&quot;);
return sent[0] === &quot;foo&quot; &amp;&amp; sent[1] === &quot;bar&quot;;</div>}
```
###%GeneratorPrototype%
          
```
function(){
              <div class="code">function * generatorFn(){}
var ownProto = Object.getPrototypeOf(generatorFn());
var passed = ownProto === generatorFn.prototype;

var sharedProto = Object.getPrototypeOf(ownProto);
passed &amp;= sharedProto !== Object.prototype &amp;&amp;
  sharedProto === Object.getPrototypeOf(function*(){}.prototype) &amp;&amp;
  sharedProto.hasOwnProperty('next');

return passed;</div>}
```
###%GeneratorPrototype% prototype chain
          
```
function(){
              <div class="code">function * generatorFn(){}
var g = generatorFn();
var ownProto = Object.getPrototypeOf(g);
var passed = ownProto === generatorFn.prototype;

var sharedProto = Object.getPrototypeOf(ownProto);
var iterProto = Object.getPrototypeOf(sharedProto);

passed &amp;= iterProto.hasOwnProperty(Symbol.iterator) &amp;&amp;
  !sharedProto     .hasOwnProperty(Symbol.iterator) &amp;&amp;
  !ownProto        .hasOwnProperty(Symbol.iterator) &amp;&amp;
  g[Symbol.iterator]() === g;

return passed;</div>}
```
###%GeneratorPrototype%.constructor
          
```
function(){
              <div class="code">function * g (){}
var iterator = new g.constructor(&quot;a&quot;,&quot;b&quot;,&quot;c&quot;,&quot;yield a; yield b; yield c;&quot;)(5,6,7);
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 7 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;

passed &amp;= g.constructor === (function*(){}).constructor;
return passed;</div>}
```
###%GeneratorPrototype%.throw
          
```
function(){
              <div class="code">var passed = false;
function * generator(){
  try {
    yield 5; yield 6;
  } catch(e) {
    passed = (e === &quot;foo&quot;);
  }
};
var iterator = generator();
iterator.next();
iterator.throw(&quot;foo&quot;);
return passed;</div>}
```
###yield operator precedence
          
```
function(){
              <div class="code">var passed;
function * generator(){
  passed = yield 0 ? true : false;
};
var iterator = generator();
iterator.next();
iterator.next(true);
return passed;</div>}
```
###yield *, arrays
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * [5, 6];
}());
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###yield *, sparse arrays
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * [,,];
}());
var item = iterator.next();
var passed = item.value === undefined &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###yield *, strings
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * &quot;56&quot;;
}());
var item = iterator.next();
var passed = item.value === &quot;5&quot; &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === &quot;6&quot; &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###yield *, astral plane strings
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * &quot;𠮷𠮶&quot;;
}());
var item = iterator.next();
var passed = item.value === &quot;𠮷&quot; &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === &quot;𠮶&quot; &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###yield *, generator instances
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * (function*(){ yield 5; yield 6; yield 7; }());
}());
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 7 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###yield *, generic iterables
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * global.__createIterableObject([5, 6, 7]);
}());
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 7 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###yield *, instances of iterables
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * Object.create(__createIterableObject([5, 6, 7]));
}());
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 7 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###yield * on non-iterables is a runtime error
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * [5];
}());
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
iterator = (function * generator() {
  yield * 5;
}());
try {
  iterator.next();
} catch (e) {
  return passed;
}</div>}
```
###shorthand generator methods
          
```
function(){
              <div class="code">var o = {
  * generator() {
    yield 5; yield 6;
  },
};
var iterator = o.generator();
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###string-keyed shorthand generator methods
          
```
function(){
              <div class="code">var o = {
  * &quot;foo bar&quot;() {
    yield 5; yield 6;
  },
};
var iterator = o[&quot;foo bar&quot;]();
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###computed shorthand generators
          
```
function(){
              <div class="code">var garply = &quot;generator&quot;;
var o = {
  * [garply] () {
    yield 5; yield 6;
  },
};
var iterator = o.generator();
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###basic functionality
          
```
function(){
              <div class="code">function * generator(){
  yield 5; yield 6;
};
var iterator = generator();
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###generator function expressions
          
```
function(){
              <div class="code">var generator = function * (){
  yield 5; yield 6;
};
var iterator = generator();
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###correct &quot;this&quot; binding
          
```
function(){
              <div class="code">function * generator(){
  yield this.x; yield this.y;
};
var iterator = { g: generator, x: 5, y: 6 }.g();
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###sending
          
```
function(){
              <div class="code">var sent;
function * generator(){
  sent = [yield 5, yield 6];
};
var iterator = generator();
iterator.next();
iterator.next(&quot;foo&quot;);
iterator.next(&quot;bar&quot;);
return sent[0] === &quot;foo&quot; &amp;&amp; sent[1] === &quot;bar&quot;;</div>}
```
###%GeneratorPrototype%
          
```
function(){
              <div class="code">function * generatorFn(){}
var ownProto = Object.getPrototypeOf(generatorFn());
var passed = ownProto === generatorFn.prototype;

var sharedProto = Object.getPrototypeOf(ownProto);
passed &amp;= sharedProto !== Object.prototype &amp;&amp;
  sharedProto === Object.getPrototypeOf(function*(){}.prototype) &amp;&amp;
  sharedProto.hasOwnProperty('next');

return passed;</div>}
```
###%GeneratorPrototype% prototype chain
          
```
function(){
              <div class="code">function * generatorFn(){}
var g = generatorFn();
var ownProto = Object.getPrototypeOf(g);
var passed = ownProto === generatorFn.prototype;

var sharedProto = Object.getPrototypeOf(ownProto);
var iterProto = Object.getPrototypeOf(sharedProto);

passed &amp;= iterProto.hasOwnProperty(Symbol.iterator) &amp;&amp;
  !sharedProto     .hasOwnProperty(Symbol.iterator) &amp;&amp;
  !ownProto        .hasOwnProperty(Symbol.iterator) &amp;&amp;
  g[Symbol.iterator]() === g;

return passed;</div>}
```
###%GeneratorPrototype%.constructor
          
```
function(){
              <div class="code">function * g (){}
var iterator = new g.constructor(&quot;a&quot;,&quot;b&quot;,&quot;c&quot;,&quot;yield a; yield b; yield c;&quot;)(5,6,7);
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 7 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;

passed &amp;= g.constructor === (function*(){}).constructor;
return passed;</div>}
```
###%GeneratorPrototype%.throw
          
```
function(){
              <div class="code">var passed = false;
function * generator(){
  try {
    yield 5; yield 6;
  } catch(e) {
    passed = (e === &quot;foo&quot;);
  }
};
var iterator = generator();
iterator.next();
iterator.throw(&quot;foo&quot;);
return passed;</div>}
```
###yield operator precedence
          
```
function(){
              <div class="code">var passed;
function * generator(){
  passed = yield 0 ? true : false;
};
var iterator = generator();
iterator.next();
iterator.next(true);
return passed;</div>}
```
###yield *, arrays
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * [5, 6];
}());
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###yield *, sparse arrays
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * [,,];
}());
var item = iterator.next();
var passed = item.value === undefined &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###yield *, strings
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * &quot;56&quot;;
}());
var item = iterator.next();
var passed = item.value === &quot;5&quot; &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === &quot;6&quot; &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###yield *, astral plane strings
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * &quot;𠮷𠮶&quot;;
}());
var item = iterator.next();
var passed = item.value === &quot;𠮷&quot; &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === &quot;𠮶&quot; &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###yield *, generator instances
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * (function*(){ yield 5; yield 6; yield 7; }());
}());
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 7 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###yield *, generic iterables
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * global.__createIterableObject([5, 6, 7]);
}());
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 7 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###yield *, instances of iterables
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * Object.create(__createIterableObject([5, 6, 7]));
}());
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 7 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###yield * on non-iterables is a runtime error
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * [5];
}());
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
iterator = (function * generator() {
  yield * 5;
}());
try {
  iterator.next();
} catch (e) {
  return passed;
}</div>}
```
###shorthand generator methods
          
```
function(){
              <div class="code">var o = {
  * generator() {
    yield 5; yield 6;
  },
};
var iterator = o.generator();
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###string-keyed shorthand generator methods
          
```
function(){
              <div class="code">var o = {
  * &quot;foo bar&quot;() {
    yield 5; yield 6;
  },
};
var iterator = o[&quot;foo bar&quot;]();
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###computed shorthand generators
          
```
function(){
              <div class="code">var garply = &quot;generator&quot;;
var o = {
  * [garply] () {
    yield 5; yield 6;
  },
};
var iterator = o.generator();
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###basic functionality
          
```
function(){
              <div class="code">function * generator(){
  yield 5; yield 6;
};
var iterator = generator();
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###generator function expressions
          
```
function(){
              <div class="code">var generator = function * (){
  yield 5; yield 6;
};
var iterator = generator();
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###correct &quot;this&quot; binding
          
```
function(){
              <div class="code">function * generator(){
  yield this.x; yield this.y;
};
var iterator = { g: generator, x: 5, y: 6 }.g();
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###sending
          
```
function(){
              <div class="code">var sent;
function * generator(){
  sent = [yield 5, yield 6];
};
var iterator = generator();
iterator.next();
iterator.next(&quot;foo&quot;);
iterator.next(&quot;bar&quot;);
return sent[0] === &quot;foo&quot; &amp;&amp; sent[1] === &quot;bar&quot;;</div>}
```
###%GeneratorPrototype%
          
```
function(){
              <div class="code">function * generatorFn(){}
var ownProto = Object.getPrototypeOf(generatorFn());
var passed = ownProto === generatorFn.prototype;

var sharedProto = Object.getPrototypeOf(ownProto);
passed &amp;= sharedProto !== Object.prototype &amp;&amp;
  sharedProto === Object.getPrototypeOf(function*(){}.prototype) &amp;&amp;
  sharedProto.hasOwnProperty('next');

return passed;</div>}
```
###%GeneratorPrototype% prototype chain
          
```
function(){
              <div class="code">function * generatorFn(){}
var g = generatorFn();
var ownProto = Object.getPrototypeOf(g);
var passed = ownProto === generatorFn.prototype;

var sharedProto = Object.getPrototypeOf(ownProto);
var iterProto = Object.getPrototypeOf(sharedProto);

passed &amp;= iterProto.hasOwnProperty(Symbol.iterator) &amp;&amp;
  !sharedProto     .hasOwnProperty(Symbol.iterator) &amp;&amp;
  !ownProto        .hasOwnProperty(Symbol.iterator) &amp;&amp;
  g[Symbol.iterator]() === g;

return passed;</div>}
```
###%GeneratorPrototype%.constructor
          
```
function(){
              <div class="code">function * g (){}
var iterator = new g.constructor(&quot;a&quot;,&quot;b&quot;,&quot;c&quot;,&quot;yield a; yield b; yield c;&quot;)(5,6,7);
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 7 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;

passed &amp;= g.constructor === (function*(){}).constructor;
return passed;</div>}
```
###%GeneratorPrototype%.throw
          
```
function(){
              <div class="code">var passed = false;
function * generator(){
  try {
    yield 5; yield 6;
  } catch(e) {
    passed = (e === &quot;foo&quot;);
  }
};
var iterator = generator();
iterator.next();
iterator.throw(&quot;foo&quot;);
return passed;</div>}
```
###yield operator precedence
          
```
function(){
              <div class="code">var passed;
function * generator(){
  passed = yield 0 ? true : false;
};
var iterator = generator();
iterator.next();
iterator.next(true);
return passed;</div>}
```
###yield *, arrays
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * [5, 6];
}());
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###yield *, sparse arrays
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * [,,];
}());
var item = iterator.next();
var passed = item.value === undefined &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###yield *, strings
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * &quot;56&quot;;
}());
var item = iterator.next();
var passed = item.value === &quot;5&quot; &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === &quot;6&quot; &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###yield *, astral plane strings
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * &quot;𠮷𠮶&quot;;
}());
var item = iterator.next();
var passed = item.value === &quot;𠮷&quot; &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === &quot;𠮶&quot; &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###yield *, generator instances
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * (function*(){ yield 5; yield 6; yield 7; }());
}());
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 7 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###yield *, generic iterables
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * global.__createIterableObject([5, 6, 7]);
}());
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 7 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###yield *, instances of iterables
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * Object.create(__createIterableObject([5, 6, 7]));
}());
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 7 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###yield * on non-iterables is a runtime error
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * [5];
}());
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
iterator = (function * generator() {
  yield * 5;
}());
try {
  iterator.next();
} catch (e) {
  return passed;
}</div>}
```
###shorthand generator methods
          
```
function(){
              <div class="code">var o = {
  * generator() {
    yield 5; yield 6;
  },
};
var iterator = o.generator();
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###string-keyed shorthand generator methods
          
```
function(){
              <div class="code">var o = {
  * &quot;foo bar&quot;() {
    yield 5; yield 6;
  },
};
var iterator = o[&quot;foo bar&quot;]();
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###computed shorthand generators
          
```
function(){
              <div class="code">var garply = &quot;generator&quot;;
var o = {
  * [garply] () {
    yield 5; yield 6;
  },
};
var iterator = o.generator();
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###basic functionality
          
```
function(){
              <div class="code">function * generator(){
  yield 5; yield 6;
};
var iterator = generator();
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###generator function expressions
          
```
function(){
              <div class="code">var generator = function * (){
  yield 5; yield 6;
};
var iterator = generator();
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###correct &quot;this&quot; binding
          
```
function(){
              <div class="code">function * generator(){
  yield this.x; yield this.y;
};
var iterator = { g: generator, x: 5, y: 6 }.g();
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###sending
          
```
function(){
              <div class="code">var sent;
function * generator(){
  sent = [yield 5, yield 6];
};
var iterator = generator();
iterator.next();
iterator.next(&quot;foo&quot;);
iterator.next(&quot;bar&quot;);
return sent[0] === &quot;foo&quot; &amp;&amp; sent[1] === &quot;bar&quot;;</div>}
```
###%GeneratorPrototype%
          
```
function(){
              <div class="code">function * generatorFn(){}
var ownProto = Object.getPrototypeOf(generatorFn());
var passed = ownProto === generatorFn.prototype;

var sharedProto = Object.getPrototypeOf(ownProto);
passed &amp;= sharedProto !== Object.prototype &amp;&amp;
  sharedProto === Object.getPrototypeOf(function*(){}.prototype) &amp;&amp;
  sharedProto.hasOwnProperty('next');

return passed;</div>}
```
###%GeneratorPrototype% prototype chain
          
```
function(){
              <div class="code">function * generatorFn(){}
var g = generatorFn();
var ownProto = Object.getPrototypeOf(g);
var passed = ownProto === generatorFn.prototype;

var sharedProto = Object.getPrototypeOf(ownProto);
var iterProto = Object.getPrototypeOf(sharedProto);

passed &amp;= iterProto.hasOwnProperty(Symbol.iterator) &amp;&amp;
  !sharedProto     .hasOwnProperty(Symbol.iterator) &amp;&amp;
  !ownProto        .hasOwnProperty(Symbol.iterator) &amp;&amp;
  g[Symbol.iterator]() === g;

return passed;</div>}
```
###%GeneratorPrototype%.constructor
          
```
function(){
              <div class="code">function * g (){}
var iterator = new g.constructor(&quot;a&quot;,&quot;b&quot;,&quot;c&quot;,&quot;yield a; yield b; yield c;&quot;)(5,6,7);
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 7 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;

passed &amp;= g.constructor === (function*(){}).constructor;
return passed;</div>}
```
###%GeneratorPrototype%.throw
          
```
function(){
              <div class="code">var passed = false;
function * generator(){
  try {
    yield 5; yield 6;
  } catch(e) {
    passed = (e === &quot;foo&quot;);
  }
};
var iterator = generator();
iterator.next();
iterator.throw(&quot;foo&quot;);
return passed;</div>}
```
###yield operator precedence
          
```
function(){
              <div class="code">var passed;
function * generator(){
  passed = yield 0 ? true : false;
};
var iterator = generator();
iterator.next();
iterator.next(true);
return passed;</div>}
```
###yield *, arrays
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * [5, 6];
}());
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###yield *, sparse arrays
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * [,,];
}());
var item = iterator.next();
var passed = item.value === undefined &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###yield *, strings
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * &quot;56&quot;;
}());
var item = iterator.next();
var passed = item.value === &quot;5&quot; &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === &quot;6&quot; &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###yield *, astral plane strings
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * &quot;𠮷𠮶&quot;;
}());
var item = iterator.next();
var passed = item.value === &quot;𠮷&quot; &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === &quot;𠮶&quot; &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###yield *, generator instances
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * (function*(){ yield 5; yield 6; yield 7; }());
}());
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 7 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###yield *, generic iterables
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * global.__createIterableObject([5, 6, 7]);
}());
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 7 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###yield *, instances of iterables
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * Object.create(__createIterableObject([5, 6, 7]));
}());
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 7 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###yield * on non-iterables is a runtime error
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * [5];
}());
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
iterator = (function * generator() {
  yield * 5;
}());
try {
  iterator.next();
} catch (e) {
  return passed;
}</div>}
```
###shorthand generator methods
          
```
function(){
              <div class="code">var o = {
  * generator() {
    yield 5; yield 6;
  },
};
var iterator = o.generator();
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###string-keyed shorthand generator methods
          
```
function(){
              <div class="code">var o = {
  * &quot;foo bar&quot;() {
    yield 5; yield 6;
  },
};
var iterator = o[&quot;foo bar&quot;]();
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###computed shorthand generators
          
```
function(){
              <div class="code">var garply = &quot;generator&quot;;
var o = {
  * [garply] () {
    yield 5; yield 6;
  },
};
var iterator = o.generator();
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###basic functionality
          
```
function(){
              <div class="code">function * generator(){
  yield 5; yield 6;
};
var iterator = generator();
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###generator function expressions
          
```
function(){
              <div class="code">var generator = function * (){
  yield 5; yield 6;
};
var iterator = generator();
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###correct &quot;this&quot; binding
          
```
function(){
              <div class="code">function * generator(){
  yield this.x; yield this.y;
};
var iterator = { g: generator, x: 5, y: 6 }.g();
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###sending
          
```
function(){
              <div class="code">var sent;
function * generator(){
  sent = [yield 5, yield 6];
};
var iterator = generator();
iterator.next();
iterator.next(&quot;foo&quot;);
iterator.next(&quot;bar&quot;);
return sent[0] === &quot;foo&quot; &amp;&amp; sent[1] === &quot;bar&quot;;</div>}
```
###%GeneratorPrototype%
          
```
function(){
              <div class="code">function * generatorFn(){}
var ownProto = Object.getPrototypeOf(generatorFn());
var passed = ownProto === generatorFn.prototype;

var sharedProto = Object.getPrototypeOf(ownProto);
passed &amp;= sharedProto !== Object.prototype &amp;&amp;
  sharedProto === Object.getPrototypeOf(function*(){}.prototype) &amp;&amp;
  sharedProto.hasOwnProperty('next');

return passed;</div>}
```
###%GeneratorPrototype% prototype chain
          
```
function(){
              <div class="code">function * generatorFn(){}
var g = generatorFn();
var ownProto = Object.getPrototypeOf(g);
var passed = ownProto === generatorFn.prototype;

var sharedProto = Object.getPrototypeOf(ownProto);
var iterProto = Object.getPrototypeOf(sharedProto);

passed &amp;= iterProto.hasOwnProperty(Symbol.iterator) &amp;&amp;
  !sharedProto     .hasOwnProperty(Symbol.iterator) &amp;&amp;
  !ownProto        .hasOwnProperty(Symbol.iterator) &amp;&amp;
  g[Symbol.iterator]() === g;

return passed;</div>}
```
###%GeneratorPrototype%.constructor
          
```
function(){
              <div class="code">function * g (){}
var iterator = new g.constructor(&quot;a&quot;,&quot;b&quot;,&quot;c&quot;,&quot;yield a; yield b; yield c;&quot;)(5,6,7);
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 7 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;

passed &amp;= g.constructor === (function*(){}).constructor;
return passed;</div>}
```
###%GeneratorPrototype%.throw
          
```
function(){
              <div class="code">var passed = false;
function * generator(){
  try {
    yield 5; yield 6;
  } catch(e) {
    passed = (e === &quot;foo&quot;);
  }
};
var iterator = generator();
iterator.next();
iterator.throw(&quot;foo&quot;);
return passed;</div>}
```
###yield operator precedence
          
```
function(){
              <div class="code">var passed;
function * generator(){
  passed = yield 0 ? true : false;
};
var iterator = generator();
iterator.next();
iterator.next(true);
return passed;</div>}
```
###yield *, arrays
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * [5, 6];
}());
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###yield *, sparse arrays
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * [,,];
}());
var item = iterator.next();
var passed = item.value === undefined &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###yield *, strings
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * &quot;56&quot;;
}());
var item = iterator.next();
var passed = item.value === &quot;5&quot; &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === &quot;6&quot; &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###yield *, astral plane strings
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * &quot;𠮷𠮶&quot;;
}());
var item = iterator.next();
var passed = item.value === &quot;𠮷&quot; &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === &quot;𠮶&quot; &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###yield *, generator instances
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * (function*(){ yield 5; yield 6; yield 7; }());
}());
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 7 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###yield *, generic iterables
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * global.__createIterableObject([5, 6, 7]);
}());
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 7 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###yield *, instances of iterables
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * Object.create(__createIterableObject([5, 6, 7]));
}());
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 7 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###yield * on non-iterables is a runtime error
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * [5];
}());
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
iterator = (function * generator() {
  yield * 5;
}());
try {
  iterator.next();
} catch (e) {
  return passed;
}</div>}
```
###shorthand generator methods
          
```
function(){
              <div class="code">var o = {
  * generator() {
    yield 5; yield 6;
  },
};
var iterator = o.generator();
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###string-keyed shorthand generator methods
          
```
function(){
              <div class="code">var o = {
  * &quot;foo bar&quot;() {
    yield 5; yield 6;
  },
};
var iterator = o[&quot;foo bar&quot;]();
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###computed shorthand generators
          
```
function(){
              <div class="code">var garply = &quot;generator&quot;;
var o = {
  * [garply] () {
    yield 5; yield 6;
  },
};
var iterator = o.generator();
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###basic functionality
          
```
function(){
              <div class="code">function * generator(){
  yield 5; yield 6;
};
var iterator = generator();
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###generator function expressions
          
```
function(){
              <div class="code">var generator = function * (){
  yield 5; yield 6;
};
var iterator = generator();
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###correct &quot;this&quot; binding
          
```
function(){
              <div class="code">function * generator(){
  yield this.x; yield this.y;
};
var iterator = { g: generator, x: 5, y: 6 }.g();
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###sending
          
```
function(){
              <div class="code">var sent;
function * generator(){
  sent = [yield 5, yield 6];
};
var iterator = generator();
iterator.next();
iterator.next(&quot;foo&quot;);
iterator.next(&quot;bar&quot;);
return sent[0] === &quot;foo&quot; &amp;&amp; sent[1] === &quot;bar&quot;;</div>}
```
###%GeneratorPrototype%
          
```
function(){
              <div class="code">function * generatorFn(){}
var ownProto = Object.getPrototypeOf(generatorFn());
var passed = ownProto === generatorFn.prototype;

var sharedProto = Object.getPrototypeOf(ownProto);
passed &amp;= sharedProto !== Object.prototype &amp;&amp;
  sharedProto === Object.getPrototypeOf(function*(){}.prototype) &amp;&amp;
  sharedProto.hasOwnProperty('next');

return passed;</div>}
```
###%GeneratorPrototype% prototype chain
          
```
function(){
              <div class="code">function * generatorFn(){}
var g = generatorFn();
var ownProto = Object.getPrototypeOf(g);
var passed = ownProto === generatorFn.prototype;

var sharedProto = Object.getPrototypeOf(ownProto);
var iterProto = Object.getPrototypeOf(sharedProto);

passed &amp;= iterProto.hasOwnProperty(Symbol.iterator) &amp;&amp;
  !sharedProto     .hasOwnProperty(Symbol.iterator) &amp;&amp;
  !ownProto        .hasOwnProperty(Symbol.iterator) &amp;&amp;
  g[Symbol.iterator]() === g;

return passed;</div>}
```
###%GeneratorPrototype%.constructor
          
```
function(){
              <div class="code">function * g (){}
var iterator = new g.constructor(&quot;a&quot;,&quot;b&quot;,&quot;c&quot;,&quot;yield a; yield b; yield c;&quot;)(5,6,7);
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 7 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;

passed &amp;= g.constructor === (function*(){}).constructor;
return passed;</div>}
```
###%GeneratorPrototype%.throw
          
```
function(){
              <div class="code">var passed = false;
function * generator(){
  try {
    yield 5; yield 6;
  } catch(e) {
    passed = (e === &quot;foo&quot;);
  }
};
var iterator = generator();
iterator.next();
iterator.throw(&quot;foo&quot;);
return passed;</div>}
```
###yield operator precedence
          
```
function(){
              <div class="code">var passed;
function * generator(){
  passed = yield 0 ? true : false;
};
var iterator = generator();
iterator.next();
iterator.next(true);
return passed;</div>}
```
###yield *, arrays
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * [5, 6];
}());
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###yield *, sparse arrays
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * [,,];
}());
var item = iterator.next();
var passed = item.value === undefined &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###yield *, strings
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * &quot;56&quot;;
}());
var item = iterator.next();
var passed = item.value === &quot;5&quot; &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === &quot;6&quot; &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###yield *, astral plane strings
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * &quot;𠮷𠮶&quot;;
}());
var item = iterator.next();
var passed = item.value === &quot;𠮷&quot; &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === &quot;𠮶&quot; &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###yield *, generator instances
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * (function*(){ yield 5; yield 6; yield 7; }());
}());
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 7 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###yield *, generic iterables
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * global.__createIterableObject([5, 6, 7]);
}());
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 7 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###yield *, instances of iterables
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * Object.create(__createIterableObject([5, 6, 7]));
}());
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 7 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###yield * on non-iterables is a runtime error
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * [5];
}());
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
iterator = (function * generator() {
  yield * 5;
}());
try {
  iterator.next();
} catch (e) {
  return passed;
}</div>}
```
###shorthand generator methods
          
```
function(){
              <div class="code">var o = {
  * generator() {
    yield 5; yield 6;
  },
};
var iterator = o.generator();
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###string-keyed shorthand generator methods
          
```
function(){
              <div class="code">var o = {
  * &quot;foo bar&quot;() {
    yield 5; yield 6;
  },
};
var iterator = o[&quot;foo bar&quot;]();
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###computed shorthand generators
          
```
function(){
              <div class="code">var garply = &quot;generator&quot;;
var o = {
  * [garply] () {
    yield 5; yield 6;
  },
};
var iterator = o.generator();
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###basic functionality
          
```
function(){
              <div class="code">function * generator(){
  yield 5; yield 6;
};
var iterator = generator();
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###generator function expressions
          
```
function(){
              <div class="code">var generator = function * (){
  yield 5; yield 6;
};
var iterator = generator();
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###correct &quot;this&quot; binding
          
```
function(){
              <div class="code">function * generator(){
  yield this.x; yield this.y;
};
var iterator = { g: generator, x: 5, y: 6 }.g();
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###sending
          
```
function(){
              <div class="code">var sent;
function * generator(){
  sent = [yield 5, yield 6];
};
var iterator = generator();
iterator.next();
iterator.next(&quot;foo&quot;);
iterator.next(&quot;bar&quot;);
return sent[0] === &quot;foo&quot; &amp;&amp; sent[1] === &quot;bar&quot;;</div>}
```
###%GeneratorPrototype%
          
```
function(){
              <div class="code">function * generatorFn(){}
var ownProto = Object.getPrototypeOf(generatorFn());
var passed = ownProto === generatorFn.prototype;

var sharedProto = Object.getPrototypeOf(ownProto);
passed &amp;= sharedProto !== Object.prototype &amp;&amp;
  sharedProto === Object.getPrototypeOf(function*(){}.prototype) &amp;&amp;
  sharedProto.hasOwnProperty('next');

return passed;</div>}
```
###%GeneratorPrototype% prototype chain
          
```
function(){
              <div class="code">function * generatorFn(){}
var g = generatorFn();
var ownProto = Object.getPrototypeOf(g);
var passed = ownProto === generatorFn.prototype;

var sharedProto = Object.getPrototypeOf(ownProto);
var iterProto = Object.getPrototypeOf(sharedProto);

passed &amp;= iterProto.hasOwnProperty(Symbol.iterator) &amp;&amp;
  !sharedProto     .hasOwnProperty(Symbol.iterator) &amp;&amp;
  !ownProto        .hasOwnProperty(Symbol.iterator) &amp;&amp;
  g[Symbol.iterator]() === g;

return passed;</div>}
```
###%GeneratorPrototype%.constructor
          
```
function(){
              <div class="code">function * g (){}
var iterator = new g.constructor(&quot;a&quot;,&quot;b&quot;,&quot;c&quot;,&quot;yield a; yield b; yield c;&quot;)(5,6,7);
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 7 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;

passed &amp;= g.constructor === (function*(){}).constructor;
return passed;</div>}
```
###%GeneratorPrototype%.throw
          
```
function(){
              <div class="code">var passed = false;
function * generator(){
  try {
    yield 5; yield 6;
  } catch(e) {
    passed = (e === &quot;foo&quot;);
  }
};
var iterator = generator();
iterator.next();
iterator.throw(&quot;foo&quot;);
return passed;</div>}
```
###yield operator precedence
          
```
function(){
              <div class="code">var passed;
function * generator(){
  passed = yield 0 ? true : false;
};
var iterator = generator();
iterator.next();
iterator.next(true);
return passed;</div>}
```
###yield *, arrays
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * [5, 6];
}());
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###yield *, sparse arrays
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * [,,];
}());
var item = iterator.next();
var passed = item.value === undefined &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###yield *, strings
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * &quot;56&quot;;
}());
var item = iterator.next();
var passed = item.value === &quot;5&quot; &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === &quot;6&quot; &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###yield *, astral plane strings
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * &quot;𠮷𠮶&quot;;
}());
var item = iterator.next();
var passed = item.value === &quot;𠮷&quot; &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === &quot;𠮶&quot; &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###yield *, generator instances
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * (function*(){ yield 5; yield 6; yield 7; }());
}());
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 7 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###yield *, generic iterables
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * global.__createIterableObject([5, 6, 7]);
}());
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 7 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###yield *, instances of iterables
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * Object.create(__createIterableObject([5, 6, 7]));
}());
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 7 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###yield * on non-iterables is a runtime error
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * [5];
}());
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
iterator = (function * generator() {
  yield * 5;
}());
try {
  iterator.next();
} catch (e) {
  return passed;
}</div>}
```
###shorthand generator methods
          
```
function(){
              <div class="code">var o = {
  * generator() {
    yield 5; yield 6;
  },
};
var iterator = o.generator();
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###string-keyed shorthand generator methods
          
```
function(){
              <div class="code">var o = {
  * &quot;foo bar&quot;() {
    yield 5; yield 6;
  },
};
var iterator = o[&quot;foo bar&quot;]();
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###computed shorthand generators
          
```
function(){
              <div class="code">var garply = &quot;generator&quot;;
var o = {
  * [garply] () {
    yield 5; yield 6;
  },
};
var iterator = o.generator();
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###basic functionality
          
```
function(){
              <div class="code">function * generator(){
  yield 5; yield 6;
};
var iterator = generator();
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###generator function expressions
          
```
function(){
              <div class="code">var generator = function * (){
  yield 5; yield 6;
};
var iterator = generator();
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###correct &quot;this&quot; binding
          
```
function(){
              <div class="code">function * generator(){
  yield this.x; yield this.y;
};
var iterator = { g: generator, x: 5, y: 6 }.g();
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###sending
          
```
function(){
              <div class="code">var sent;
function * generator(){
  sent = [yield 5, yield 6];
};
var iterator = generator();
iterator.next();
iterator.next(&quot;foo&quot;);
iterator.next(&quot;bar&quot;);
return sent[0] === &quot;foo&quot; &amp;&amp; sent[1] === &quot;bar&quot;;</div>}
```
###%GeneratorPrototype%
          
```
function(){
              <div class="code">function * generatorFn(){}
var ownProto = Object.getPrototypeOf(generatorFn());
var passed = ownProto === generatorFn.prototype;

var sharedProto = Object.getPrototypeOf(ownProto);
passed &amp;= sharedProto !== Object.prototype &amp;&amp;
  sharedProto === Object.getPrototypeOf(function*(){}.prototype) &amp;&amp;
  sharedProto.hasOwnProperty('next');

return passed;</div>}
```
###%GeneratorPrototype% prototype chain
          
```
function(){
              <div class="code">function * generatorFn(){}
var g = generatorFn();
var ownProto = Object.getPrototypeOf(g);
var passed = ownProto === generatorFn.prototype;

var sharedProto = Object.getPrototypeOf(ownProto);
var iterProto = Object.getPrototypeOf(sharedProto);

passed &amp;= iterProto.hasOwnProperty(Symbol.iterator) &amp;&amp;
  !sharedProto     .hasOwnProperty(Symbol.iterator) &amp;&amp;
  !ownProto        .hasOwnProperty(Symbol.iterator) &amp;&amp;
  g[Symbol.iterator]() === g;

return passed;</div>}
```
###%GeneratorPrototype%.constructor
          
```
function(){
              <div class="code">function * g (){}
var iterator = new g.constructor(&quot;a&quot;,&quot;b&quot;,&quot;c&quot;,&quot;yield a; yield b; yield c;&quot;)(5,6,7);
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 7 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;

passed &amp;= g.constructor === (function*(){}).constructor;
return passed;</div>}
```
###%GeneratorPrototype%.throw
          
```
function(){
              <div class="code">var passed = false;
function * generator(){
  try {
    yield 5; yield 6;
  } catch(e) {
    passed = (e === &quot;foo&quot;);
  }
};
var iterator = generator();
iterator.next();
iterator.throw(&quot;foo&quot;);
return passed;</div>}
```
###yield operator precedence
          
```
function(){
              <div class="code">var passed;
function * generator(){
  passed = yield 0 ? true : false;
};
var iterator = generator();
iterator.next();
iterator.next(true);
return passed;</div>}
```
###yield *, arrays
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * [5, 6];
}());
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###yield *, sparse arrays
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * [,,];
}());
var item = iterator.next();
var passed = item.value === undefined &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###yield *, strings
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * &quot;56&quot;;
}());
var item = iterator.next();
var passed = item.value === &quot;5&quot; &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === &quot;6&quot; &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###yield *, astral plane strings
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * &quot;𠮷𠮶&quot;;
}());
var item = iterator.next();
var passed = item.value === &quot;𠮷&quot; &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === &quot;𠮶&quot; &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###yield *, generator instances
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * (function*(){ yield 5; yield 6; yield 7; }());
}());
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 7 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###yield *, generic iterables
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * global.__createIterableObject([5, 6, 7]);
}());
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 7 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###yield *, instances of iterables
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * Object.create(__createIterableObject([5, 6, 7]));
}());
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 7 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###yield * on non-iterables is a runtime error
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * [5];
}());
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
iterator = (function * generator() {
  yield * 5;
}());
try {
  iterator.next();
} catch (e) {
  return passed;
}</div>}
```
###shorthand generator methods
          
```
function(){
              <div class="code">var o = {
  * generator() {
    yield 5; yield 6;
  },
};
var iterator = o.generator();
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###string-keyed shorthand generator methods
          
```
function(){
              <div class="code">var o = {
  * &quot;foo bar&quot;() {
    yield 5; yield 6;
  },
};
var iterator = o[&quot;foo bar&quot;]();
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###computed shorthand generators
          
```
function(){
              <div class="code">var garply = &quot;generator&quot;;
var o = {
  * [garply] () {
    yield 5; yield 6;
  },
};
var iterator = o.generator();
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###basic functionality
          
```
function(){
              <div class="code">function * generator(){
  yield 5; yield 6;
};
var iterator = generator();
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###generator function expressions
          
```
function(){
              <div class="code">var generator = function * (){
  yield 5; yield 6;
};
var iterator = generator();
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###correct &quot;this&quot; binding
          
```
function(){
              <div class="code">function * generator(){
  yield this.x; yield this.y;
};
var iterator = { g: generator, x: 5, y: 6 }.g();
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###sending
          
```
function(){
              <div class="code">var sent;
function * generator(){
  sent = [yield 5, yield 6];
};
var iterator = generator();
iterator.next();
iterator.next(&quot;foo&quot;);
iterator.next(&quot;bar&quot;);
return sent[0] === &quot;foo&quot; &amp;&amp; sent[1] === &quot;bar&quot;;</div>}
```
###%GeneratorPrototype%
          
```
function(){
              <div class="code">function * generatorFn(){}
var ownProto = Object.getPrototypeOf(generatorFn());
var passed = ownProto === generatorFn.prototype;

var sharedProto = Object.getPrototypeOf(ownProto);
passed &amp;= sharedProto !== Object.prototype &amp;&amp;
  sharedProto === Object.getPrototypeOf(function*(){}.prototype) &amp;&amp;
  sharedProto.hasOwnProperty('next');

return passed;</div>}
```
###%GeneratorPrototype% prototype chain
          
```
function(){
              <div class="code">function * generatorFn(){}
var g = generatorFn();
var ownProto = Object.getPrototypeOf(g);
var passed = ownProto === generatorFn.prototype;

var sharedProto = Object.getPrototypeOf(ownProto);
var iterProto = Object.getPrototypeOf(sharedProto);

passed &amp;= iterProto.hasOwnProperty(Symbol.iterator) &amp;&amp;
  !sharedProto     .hasOwnProperty(Symbol.iterator) &amp;&amp;
  !ownProto        .hasOwnProperty(Symbol.iterator) &amp;&amp;
  g[Symbol.iterator]() === g;

return passed;</div>}
```
###%GeneratorPrototype%.constructor
          
```
function(){
              <div class="code">function * g (){}
var iterator = new g.constructor(&quot;a&quot;,&quot;b&quot;,&quot;c&quot;,&quot;yield a; yield b; yield c;&quot;)(5,6,7);
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 7 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;

passed &amp;= g.constructor === (function*(){}).constructor;
return passed;</div>}
```
###%GeneratorPrototype%.throw
          
```
function(){
              <div class="code">var passed = false;
function * generator(){
  try {
    yield 5; yield 6;
  } catch(e) {
    passed = (e === &quot;foo&quot;);
  }
};
var iterator = generator();
iterator.next();
iterator.throw(&quot;foo&quot;);
return passed;</div>}
```
###yield operator precedence
          
```
function(){
              <div class="code">var passed;
function * generator(){
  passed = yield 0 ? true : false;
};
var iterator = generator();
iterator.next();
iterator.next(true);
return passed;</div>}
```
###yield *, arrays
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * [5, 6];
}());
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###yield *, sparse arrays
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * [,,];
}());
var item = iterator.next();
var passed = item.value === undefined &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###yield *, strings
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * &quot;56&quot;;
}());
var item = iterator.next();
var passed = item.value === &quot;5&quot; &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === &quot;6&quot; &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###yield *, astral plane strings
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * &quot;𠮷𠮶&quot;;
}());
var item = iterator.next();
var passed = item.value === &quot;𠮷&quot; &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === &quot;𠮶&quot; &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###yield *, generator instances
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * (function*(){ yield 5; yield 6; yield 7; }());
}());
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 7 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###yield *, generic iterables
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * global.__createIterableObject([5, 6, 7]);
}());
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 7 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###yield *, instances of iterables
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * Object.create(__createIterableObject([5, 6, 7]));
}());
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 7 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###yield * on non-iterables is a runtime error
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * [5];
}());
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
iterator = (function * generator() {
  yield * 5;
}());
try {
  iterator.next();
} catch (e) {
  return passed;
}</div>}
```
###shorthand generator methods
          
```
function(){
              <div class="code">var o = {
  * generator() {
    yield 5; yield 6;
  },
};
var iterator = o.generator();
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###string-keyed shorthand generator methods
          
```
function(){
              <div class="code">var o = {
  * &quot;foo bar&quot;() {
    yield 5; yield 6;
  },
};
var iterator = o[&quot;foo bar&quot;]();
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###computed shorthand generators
          
```
function(){
              <div class="code">var garply = &quot;generator&quot;;
var o = {
  * [garply] () {
    yield 5; yield 6;
  },
};
var iterator = o.generator();
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###basic functionality
          
```
function(){
              <div class="code">function * generator(){
  yield 5; yield 6;
};
var iterator = generator();
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###generator function expressions
          
```
function(){
              <div class="code">var generator = function * (){
  yield 5; yield 6;
};
var iterator = generator();
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###correct &quot;this&quot; binding
          
```
function(){
              <div class="code">function * generator(){
  yield this.x; yield this.y;
};
var iterator = { g: generator, x: 5, y: 6 }.g();
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###sending
          
```
function(){
              <div class="code">var sent;
function * generator(){
  sent = [yield 5, yield 6];
};
var iterator = generator();
iterator.next();
iterator.next(&quot;foo&quot;);
iterator.next(&quot;bar&quot;);
return sent[0] === &quot;foo&quot; &amp;&amp; sent[1] === &quot;bar&quot;;</div>}
```
###%GeneratorPrototype%
          
```
function(){
              <div class="code">function * generatorFn(){}
var ownProto = Object.getPrototypeOf(generatorFn());
var passed = ownProto === generatorFn.prototype;

var sharedProto = Object.getPrototypeOf(ownProto);
passed &amp;= sharedProto !== Object.prototype &amp;&amp;
  sharedProto === Object.getPrototypeOf(function*(){}.prototype) &amp;&amp;
  sharedProto.hasOwnProperty('next');

return passed;</div>}
```
###%GeneratorPrototype% prototype chain
          
```
function(){
              <div class="code">function * generatorFn(){}
var g = generatorFn();
var ownProto = Object.getPrototypeOf(g);
var passed = ownProto === generatorFn.prototype;

var sharedProto = Object.getPrototypeOf(ownProto);
var iterProto = Object.getPrototypeOf(sharedProto);

passed &amp;= iterProto.hasOwnProperty(Symbol.iterator) &amp;&amp;
  !sharedProto     .hasOwnProperty(Symbol.iterator) &amp;&amp;
  !ownProto        .hasOwnProperty(Symbol.iterator) &amp;&amp;
  g[Symbol.iterator]() === g;

return passed;</div>}
```
###%GeneratorPrototype%.constructor
          
```
function(){
              <div class="code">function * g (){}
var iterator = new g.constructor(&quot;a&quot;,&quot;b&quot;,&quot;c&quot;,&quot;yield a; yield b; yield c;&quot;)(5,6,7);
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 7 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;

passed &amp;= g.constructor === (function*(){}).constructor;
return passed;</div>}
```
###%GeneratorPrototype%.throw
          
```
function(){
              <div class="code">var passed = false;
function * generator(){
  try {
    yield 5; yield 6;
  } catch(e) {
    passed = (e === &quot;foo&quot;);
  }
};
var iterator = generator();
iterator.next();
iterator.throw(&quot;foo&quot;);
return passed;</div>}
```
###yield operator precedence
          
```
function(){
              <div class="code">var passed;
function * generator(){
  passed = yield 0 ? true : false;
};
var iterator = generator();
iterator.next();
iterator.next(true);
return passed;</div>}
```
###yield *, arrays
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * [5, 6];
}());
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###yield *, sparse arrays
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * [,,];
}());
var item = iterator.next();
var passed = item.value === undefined &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###yield *, strings
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * &quot;56&quot;;
}());
var item = iterator.next();
var passed = item.value === &quot;5&quot; &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === &quot;6&quot; &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###yield *, astral plane strings
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * &quot;𠮷𠮶&quot;;
}());
var item = iterator.next();
var passed = item.value === &quot;𠮷&quot; &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === &quot;𠮶&quot; &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###yield *, generator instances
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * (function*(){ yield 5; yield 6; yield 7; }());
}());
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 7 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###yield *, generic iterables
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * global.__createIterableObject([5, 6, 7]);
}());
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 7 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###yield *, instances of iterables
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * Object.create(__createIterableObject([5, 6, 7]));
}());
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 7 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###yield * on non-iterables is a runtime error
          
```
function(){
              <div class="code">var iterator = (function * generator() {
  yield * [5];
}());
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
iterator = (function * generator() {
  yield * 5;
}());
try {
  iterator.next();
} catch (e) {
  return passed;
}</div>}
```
###shorthand generator methods
          
```
function(){
              <div class="code">var o = {
  * generator() {
    yield 5; yield 6;
  },
};
var iterator = o.generator();
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###string-keyed shorthand generator methods
          
```
function(){
              <div class="code">var o = {
  * &quot;foo bar&quot;() {
    yield 5; yield 6;
  },
};
var iterator = o[&quot;foo bar&quot;]();
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
###computed shorthand generators
          
```
function(){
              <div class="code">var garply = &quot;generator&quot;;
var o = {
  * [garply] () {
    yield 5; yield 6;
  },
};
var iterator = o.generator();
var item = iterator.next();
var passed = item.value === 5 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === 6 &amp;&amp; item.done === false;
item = iterator.next();
passed    &amp;= item.value === undefined &amp;&amp; item.done === true;
return passed;</div>}
```
