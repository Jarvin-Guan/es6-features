###[[Set]]
          
```
function(){
              <div class="code">// [[Set]] -&gt; [[GetOwnProperty]]
var gopd = [];
var p = new Proxy({},
  { getOwnPropertyDescriptor: function(o, v) { gopd.push(v); return Object.getOwnPropertyDescriptor(o, v); }});
p.foo = 1; p.bar = 1;
return gopd + '' === &quot;foo,bar&quot;;</div>}
```
###Object.assign
          
```
function(){
              <div class="code">// Object.assign -&gt; [[GetOwnProperty]]
var gopd = [];
var p = new Proxy({foo:1, bar:2},
  { getOwnPropertyDescriptor: function(o, v) { gopd.push(v); return Object.getOwnPropertyDescriptor(o, v); }});
Object.assign({}, p);
return gopd + '' === &quot;foo,bar&quot;;</div>}
```
###Object.prototype.hasOwnProperty
          
```
function(){
              <div class="code">// Object.prototype.hasOwnProperty -&gt; HasOwnProperty -&gt; [[GetOwnProperty]]
var gopd = [];
var p = new Proxy({foo:1, bar:2},
  { getOwnPropertyDescriptor: function(o, v) { gopd.push(v); return Object.getOwnPropertyDescriptor(o, v); }});
p.hasOwnProperty('garply');
return gopd + '' === &quot;garply&quot;;</div>}
```
###Function.prototype.bind
          
```
function(){
              <div class="code">// Function.prototype.bind -&gt; HasOwnProperty -&gt; [[GetOwnProperty]]
var gopd = [];
var p = new Proxy(Function(),
  { getOwnPropertyDescriptor: function(o, v) { gopd.push(v); return Object.getOwnPropertyDescriptor(o, v); }});
p.bind();
return gopd + '' === &quot;length&quot;;</div>}
```
###[[Set]]
          
```
function(){
              <div class="code">// [[Set]] -&gt; [[GetOwnProperty]]
var gopd = [];
var p = new Proxy({},
  { getOwnPropertyDescriptor: function(o, v) { gopd.push(v); return Object.getOwnPropertyDescriptor(o, v); }});
p.foo = 1; p.bar = 1;
return gopd + '' === &quot;foo,bar&quot;;</div>}
```
###Object.assign
          
```
function(){
              <div class="code">// Object.assign -&gt; [[GetOwnProperty]]
var gopd = [];
var p = new Proxy({foo:1, bar:2},
  { getOwnPropertyDescriptor: function(o, v) { gopd.push(v); return Object.getOwnPropertyDescriptor(o, v); }});
Object.assign({}, p);
return gopd + '' === &quot;foo,bar&quot;;</div>}
```
###Object.prototype.hasOwnProperty
          
```
function(){
              <div class="code">// Object.prototype.hasOwnProperty -&gt; HasOwnProperty -&gt; [[GetOwnProperty]]
var gopd = [];
var p = new Proxy({foo:1, bar:2},
  { getOwnPropertyDescriptor: function(o, v) { gopd.push(v); return Object.getOwnPropertyDescriptor(o, v); }});
p.hasOwnProperty('garply');
return gopd + '' === &quot;garply&quot;;</div>}
```
###Function.prototype.bind
          
```
function(){
              <div class="code">// Function.prototype.bind -&gt; HasOwnProperty -&gt; [[GetOwnProperty]]
var gopd = [];
var p = new Proxy(Function(),
  { getOwnPropertyDescriptor: function(o, v) { gopd.push(v); return Object.getOwnPropertyDescriptor(o, v); }});
p.bind();
return gopd + '' === &quot;length&quot;;</div>}
```
###[[Set]]
          
```
function(){
              <div class="code">// [[Set]] -&gt; [[GetOwnProperty]]
var gopd = [];
var p = new Proxy({},
  { getOwnPropertyDescriptor: function(o, v) { gopd.push(v); return Object.getOwnPropertyDescriptor(o, v); }});
p.foo = 1; p.bar = 1;
return gopd + '' === &quot;foo,bar&quot;;</div>}
```
###Object.assign
          
```
function(){
              <div class="code">// Object.assign -&gt; [[GetOwnProperty]]
var gopd = [];
var p = new Proxy({foo:1, bar:2},
  { getOwnPropertyDescriptor: function(o, v) { gopd.push(v); return Object.getOwnPropertyDescriptor(o, v); }});
Object.assign({}, p);
return gopd + '' === &quot;foo,bar&quot;;</div>}
```
###Object.prototype.hasOwnProperty
          
```
function(){
              <div class="code">// Object.prototype.hasOwnProperty -&gt; HasOwnProperty -&gt; [[GetOwnProperty]]
var gopd = [];
var p = new Proxy({foo:1, bar:2},
  { getOwnPropertyDescriptor: function(o, v) { gopd.push(v); return Object.getOwnPropertyDescriptor(o, v); }});
p.hasOwnProperty('garply');
return gopd + '' === &quot;garply&quot;;</div>}
```
###Function.prototype.bind
          
```
function(){
              <div class="code">// Function.prototype.bind -&gt; HasOwnProperty -&gt; [[GetOwnProperty]]
var gopd = [];
var p = new Proxy(Function(),
  { getOwnPropertyDescriptor: function(o, v) { gopd.push(v); return Object.getOwnPropertyDescriptor(o, v); }});
p.bind();
return gopd + '' === &quot;length&quot;;</div>}
```
###[[Set]]
          
```
function(){
              <div class="code">// [[Set]] -&gt; [[GetOwnProperty]]
var gopd = [];
var p = new Proxy({},
  { getOwnPropertyDescriptor: function(o, v) { gopd.push(v); return Object.getOwnPropertyDescriptor(o, v); }});
p.foo = 1; p.bar = 1;
return gopd + '' === &quot;foo,bar&quot;;</div>}
```
###Object.assign
          
```
function(){
              <div class="code">// Object.assign -&gt; [[GetOwnProperty]]
var gopd = [];
var p = new Proxy({foo:1, bar:2},
  { getOwnPropertyDescriptor: function(o, v) { gopd.push(v); return Object.getOwnPropertyDescriptor(o, v); }});
Object.assign({}, p);
return gopd + '' === &quot;foo,bar&quot;;</div>}
```
###Object.prototype.hasOwnProperty
          
```
function(){
              <div class="code">// Object.prototype.hasOwnProperty -&gt; HasOwnProperty -&gt; [[GetOwnProperty]]
var gopd = [];
var p = new Proxy({foo:1, bar:2},
  { getOwnPropertyDescriptor: function(o, v) { gopd.push(v); return Object.getOwnPropertyDescriptor(o, v); }});
p.hasOwnProperty('garply');
return gopd + '' === &quot;garply&quot;;</div>}
```
###Function.prototype.bind
          
```
function(){
              <div class="code">// Function.prototype.bind -&gt; HasOwnProperty -&gt; [[GetOwnProperty]]
var gopd = [];
var p = new Proxy(Function(),
  { getOwnPropertyDescriptor: function(o, v) { gopd.push(v); return Object.getOwnPropertyDescriptor(o, v); }});
p.bind();
return gopd + '' === &quot;length&quot;;</div>}
```
###[[Set]]
          
```
function(){
              <div class="code">// [[Set]] -&gt; [[GetOwnProperty]]
var gopd = [];
var p = new Proxy({},
  { getOwnPropertyDescriptor: function(o, v) { gopd.push(v); return Object.getOwnPropertyDescriptor(o, v); }});
p.foo = 1; p.bar = 1;
return gopd + '' === &quot;foo,bar&quot;;</div>}
```
###Object.assign
          
```
function(){
              <div class="code">// Object.assign -&gt; [[GetOwnProperty]]
var gopd = [];
var p = new Proxy({foo:1, bar:2},
  { getOwnPropertyDescriptor: function(o, v) { gopd.push(v); return Object.getOwnPropertyDescriptor(o, v); }});
Object.assign({}, p);
return gopd + '' === &quot;foo,bar&quot;;</div>}
```
###Object.prototype.hasOwnProperty
          
```
function(){
              <div class="code">// Object.prototype.hasOwnProperty -&gt; HasOwnProperty -&gt; [[GetOwnProperty]]
var gopd = [];
var p = new Proxy({foo:1, bar:2},
  { getOwnPropertyDescriptor: function(o, v) { gopd.push(v); return Object.getOwnPropertyDescriptor(o, v); }});
p.hasOwnProperty('garply');
return gopd + '' === &quot;garply&quot;;</div>}
```
###Function.prototype.bind
          
```
function(){
              <div class="code">// Function.prototype.bind -&gt; HasOwnProperty -&gt; [[GetOwnProperty]]
var gopd = [];
var p = new Proxy(Function(),
  { getOwnPropertyDescriptor: function(o, v) { gopd.push(v); return Object.getOwnPropertyDescriptor(o, v); }});
p.bind();
return gopd + '' === &quot;length&quot;;</div>}
```
###[[Set]]
          
```
function(){
              <div class="code">// [[Set]] -&gt; [[GetOwnProperty]]
var gopd = [];
var p = new Proxy({},
  { getOwnPropertyDescriptor: function(o, v) { gopd.push(v); return Object.getOwnPropertyDescriptor(o, v); }});
p.foo = 1; p.bar = 1;
return gopd + '' === &quot;foo,bar&quot;;</div>}
```
###Object.assign
          
```
function(){
              <div class="code">// Object.assign -&gt; [[GetOwnProperty]]
var gopd = [];
var p = new Proxy({foo:1, bar:2},
  { getOwnPropertyDescriptor: function(o, v) { gopd.push(v); return Object.getOwnPropertyDescriptor(o, v); }});
Object.assign({}, p);
return gopd + '' === &quot;foo,bar&quot;;</div>}
```
###Object.prototype.hasOwnProperty
          
```
function(){
              <div class="code">// Object.prototype.hasOwnProperty -&gt; HasOwnProperty -&gt; [[GetOwnProperty]]
var gopd = [];
var p = new Proxy({foo:1, bar:2},
  { getOwnPropertyDescriptor: function(o, v) { gopd.push(v); return Object.getOwnPropertyDescriptor(o, v); }});
p.hasOwnProperty('garply');
return gopd + '' === &quot;garply&quot;;</div>}
```
###Function.prototype.bind
          
```
function(){
              <div class="code">// Function.prototype.bind -&gt; HasOwnProperty -&gt; [[GetOwnProperty]]
var gopd = [];
var p = new Proxy(Function(),
  { getOwnPropertyDescriptor: function(o, v) { gopd.push(v); return Object.getOwnPropertyDescriptor(o, v); }});
p.bind();
return gopd + '' === &quot;length&quot;;</div>}
```
###[[Set]]
          
```
function(){
              <div class="code">// [[Set]] -&gt; [[GetOwnProperty]]
var gopd = [];
var p = new Proxy({},
  { getOwnPropertyDescriptor: function(o, v) { gopd.push(v); return Object.getOwnPropertyDescriptor(o, v); }});
p.foo = 1; p.bar = 1;
return gopd + '' === &quot;foo,bar&quot;;</div>}
```
###Object.assign
          
```
function(){
              <div class="code">// Object.assign -&gt; [[GetOwnProperty]]
var gopd = [];
var p = new Proxy({foo:1, bar:2},
  { getOwnPropertyDescriptor: function(o, v) { gopd.push(v); return Object.getOwnPropertyDescriptor(o, v); }});
Object.assign({}, p);
return gopd + '' === &quot;foo,bar&quot;;</div>}
```
###Object.prototype.hasOwnProperty
          
```
function(){
              <div class="code">// Object.prototype.hasOwnProperty -&gt; HasOwnProperty -&gt; [[GetOwnProperty]]
var gopd = [];
var p = new Proxy({foo:1, bar:2},
  { getOwnPropertyDescriptor: function(o, v) { gopd.push(v); return Object.getOwnPropertyDescriptor(o, v); }});
p.hasOwnProperty('garply');
return gopd + '' === &quot;garply&quot;;</div>}
```
###Function.prototype.bind
          
```
function(){
              <div class="code">// Function.prototype.bind -&gt; HasOwnProperty -&gt; [[GetOwnProperty]]
var gopd = [];
var p = new Proxy(Function(),
  { getOwnPropertyDescriptor: function(o, v) { gopd.push(v); return Object.getOwnPropertyDescriptor(o, v); }});
p.bind();
return gopd + '' === &quot;length&quot;;</div>}
```
###[[Set]]
          
```
function(){
              <div class="code">// [[Set]] -&gt; [[GetOwnProperty]]
var gopd = [];
var p = new Proxy({},
  { getOwnPropertyDescriptor: function(o, v) { gopd.push(v); return Object.getOwnPropertyDescriptor(o, v); }});
p.foo = 1; p.bar = 1;
return gopd + '' === &quot;foo,bar&quot;;</div>}
```
###Object.assign
          
```
function(){
              <div class="code">// Object.assign -&gt; [[GetOwnProperty]]
var gopd = [];
var p = new Proxy({foo:1, bar:2},
  { getOwnPropertyDescriptor: function(o, v) { gopd.push(v); return Object.getOwnPropertyDescriptor(o, v); }});
Object.assign({}, p);
return gopd + '' === &quot;foo,bar&quot;;</div>}
```
###Object.prototype.hasOwnProperty
          
```
function(){
              <div class="code">// Object.prototype.hasOwnProperty -&gt; HasOwnProperty -&gt; [[GetOwnProperty]]
var gopd = [];
var p = new Proxy({foo:1, bar:2},
  { getOwnPropertyDescriptor: function(o, v) { gopd.push(v); return Object.getOwnPropertyDescriptor(o, v); }});
p.hasOwnProperty('garply');
return gopd + '' === &quot;garply&quot;;</div>}
```
###Function.prototype.bind
          
```
function(){
              <div class="code">// Function.prototype.bind -&gt; HasOwnProperty -&gt; [[GetOwnProperty]]
var gopd = [];
var p = new Proxy(Function(),
  { getOwnPropertyDescriptor: function(o, v) { gopd.push(v); return Object.getOwnPropertyDescriptor(o, v); }});
p.bind();
return gopd + '' === &quot;length&quot;;</div>}
```
###[[Set]]
          
```
function(){
              <div class="code">// [[Set]] -&gt; [[GetOwnProperty]]
var gopd = [];
var p = new Proxy({},
  { getOwnPropertyDescriptor: function(o, v) { gopd.push(v); return Object.getOwnPropertyDescriptor(o, v); }});
p.foo = 1; p.bar = 1;
return gopd + '' === &quot;foo,bar&quot;;</div>}
```
###Object.assign
          
```
function(){
              <div class="code">// Object.assign -&gt; [[GetOwnProperty]]
var gopd = [];
var p = new Proxy({foo:1, bar:2},
  { getOwnPropertyDescriptor: function(o, v) { gopd.push(v); return Object.getOwnPropertyDescriptor(o, v); }});
Object.assign({}, p);
return gopd + '' === &quot;foo,bar&quot;;</div>}
```
###Object.prototype.hasOwnProperty
          
```
function(){
              <div class="code">// Object.prototype.hasOwnProperty -&gt; HasOwnProperty -&gt; [[GetOwnProperty]]
var gopd = [];
var p = new Proxy({foo:1, bar:2},
  { getOwnPropertyDescriptor: function(o, v) { gopd.push(v); return Object.getOwnPropertyDescriptor(o, v); }});
p.hasOwnProperty('garply');
return gopd + '' === &quot;garply&quot;;</div>}
```
###Function.prototype.bind
          
```
function(){
              <div class="code">// Function.prototype.bind -&gt; HasOwnProperty -&gt; [[GetOwnProperty]]
var gopd = [];
var p = new Proxy(Function(),
  { getOwnPropertyDescriptor: function(o, v) { gopd.push(v); return Object.getOwnPropertyDescriptor(o, v); }});
p.bind();
return gopd + '' === &quot;length&quot;;</div>}
```
###[[Set]]
          
```
function(){
              <div class="code">// [[Set]] -&gt; [[GetOwnProperty]]
var gopd = [];
var p = new Proxy({},
  { getOwnPropertyDescriptor: function(o, v) { gopd.push(v); return Object.getOwnPropertyDescriptor(o, v); }});
p.foo = 1; p.bar = 1;
return gopd + '' === &quot;foo,bar&quot;;</div>}
```
###Object.assign
          
```
function(){
              <div class="code">// Object.assign -&gt; [[GetOwnProperty]]
var gopd = [];
var p = new Proxy({foo:1, bar:2},
  { getOwnPropertyDescriptor: function(o, v) { gopd.push(v); return Object.getOwnPropertyDescriptor(o, v); }});
Object.assign({}, p);
return gopd + '' === &quot;foo,bar&quot;;</div>}
```
###Object.prototype.hasOwnProperty
          
```
function(){
              <div class="code">// Object.prototype.hasOwnProperty -&gt; HasOwnProperty -&gt; [[GetOwnProperty]]
var gopd = [];
var p = new Proxy({foo:1, bar:2},
  { getOwnPropertyDescriptor: function(o, v) { gopd.push(v); return Object.getOwnPropertyDescriptor(o, v); }});
p.hasOwnProperty('garply');
return gopd + '' === &quot;garply&quot;;</div>}
```
###Function.prototype.bind
          
```
function(){
              <div class="code">// Function.prototype.bind -&gt; HasOwnProperty -&gt; [[GetOwnProperty]]
var gopd = [];
var p = new Proxy(Function(),
  { getOwnPropertyDescriptor: function(o, v) { gopd.push(v); return Object.getOwnPropertyDescriptor(o, v); }});
p.bind();
return gopd + '' === &quot;length&quot;;</div>}
```
###[[Set]]
          
```
function(){
              <div class="code">// [[Set]] -&gt; [[GetOwnProperty]]
var gopd = [];
var p = new Proxy({},
  { getOwnPropertyDescriptor: function(o, v) { gopd.push(v); return Object.getOwnPropertyDescriptor(o, v); }});
p.foo = 1; p.bar = 1;
return gopd + '' === &quot;foo,bar&quot;;</div>}
```
###Object.assign
          
```
function(){
              <div class="code">// Object.assign -&gt; [[GetOwnProperty]]
var gopd = [];
var p = new Proxy({foo:1, bar:2},
  { getOwnPropertyDescriptor: function(o, v) { gopd.push(v); return Object.getOwnPropertyDescriptor(o, v); }});
Object.assign({}, p);
return gopd + '' === &quot;foo,bar&quot;;</div>}
```
###Object.prototype.hasOwnProperty
          
```
function(){
              <div class="code">// Object.prototype.hasOwnProperty -&gt; HasOwnProperty -&gt; [[GetOwnProperty]]
var gopd = [];
var p = new Proxy({foo:1, bar:2},
  { getOwnPropertyDescriptor: function(o, v) { gopd.push(v); return Object.getOwnPropertyDescriptor(o, v); }});
p.hasOwnProperty('garply');
return gopd + '' === &quot;garply&quot;;</div>}
```
###Function.prototype.bind
          
```
function(){
              <div class="code">// Function.prototype.bind -&gt; HasOwnProperty -&gt; [[GetOwnProperty]]
var gopd = [];
var p = new Proxy(Function(),
  { getOwnPropertyDescriptor: function(o, v) { gopd.push(v); return Object.getOwnPropertyDescriptor(o, v); }});
p.bind();
return gopd + '' === &quot;length&quot;;</div>}
```
###[[Set]]
          
```
function(){
              <div class="code">// [[Set]] -&gt; [[GetOwnProperty]]
var gopd = [];
var p = new Proxy({},
  { getOwnPropertyDescriptor: function(o, v) { gopd.push(v); return Object.getOwnPropertyDescriptor(o, v); }});
p.foo = 1; p.bar = 1;
return gopd + '' === &quot;foo,bar&quot;;</div>}
```
###Object.assign
          
```
function(){
              <div class="code">// Object.assign -&gt; [[GetOwnProperty]]
var gopd = [];
var p = new Proxy({foo:1, bar:2},
  { getOwnPropertyDescriptor: function(o, v) { gopd.push(v); return Object.getOwnPropertyDescriptor(o, v); }});
Object.assign({}, p);
return gopd + '' === &quot;foo,bar&quot;;</div>}
```
###Object.prototype.hasOwnProperty
          
```
function(){
              <div class="code">// Object.prototype.hasOwnProperty -&gt; HasOwnProperty -&gt; [[GetOwnProperty]]
var gopd = [];
var p = new Proxy({foo:1, bar:2},
  { getOwnPropertyDescriptor: function(o, v) { gopd.push(v); return Object.getOwnPropertyDescriptor(o, v); }});
p.hasOwnProperty('garply');
return gopd + '' === &quot;garply&quot;;</div>}
```
###Function.prototype.bind
          
```
function(){
              <div class="code">// Function.prototype.bind -&gt; HasOwnProperty -&gt; [[GetOwnProperty]]
var gopd = [];
var p = new Proxy(Function(),
  { getOwnPropertyDescriptor: function(o, v) { gopd.push(v); return Object.getOwnPropertyDescriptor(o, v); }});
p.bind();
return gopd + '' === &quot;length&quot;;</div>}
```
###[[Set]]
          
```
function(){
              <div class="code">// [[Set]] -&gt; [[GetOwnProperty]]
var gopd = [];
var p = new Proxy({},
  { getOwnPropertyDescriptor: function(o, v) { gopd.push(v); return Object.getOwnPropertyDescriptor(o, v); }});
p.foo = 1; p.bar = 1;
return gopd + '' === &quot;foo,bar&quot;;</div>}
```
###Object.assign
          
```
function(){
              <div class="code">// Object.assign -&gt; [[GetOwnProperty]]
var gopd = [];
var p = new Proxy({foo:1, bar:2},
  { getOwnPropertyDescriptor: function(o, v) { gopd.push(v); return Object.getOwnPropertyDescriptor(o, v); }});
Object.assign({}, p);
return gopd + '' === &quot;foo,bar&quot;;</div>}
```
###Object.prototype.hasOwnProperty
          
```
function(){
              <div class="code">// Object.prototype.hasOwnProperty -&gt; HasOwnProperty -&gt; [[GetOwnProperty]]
var gopd = [];
var p = new Proxy({foo:1, bar:2},
  { getOwnPropertyDescriptor: function(o, v) { gopd.push(v); return Object.getOwnPropertyDescriptor(o, v); }});
p.hasOwnProperty('garply');
return gopd + '' === &quot;garply&quot;;</div>}
```
###Function.prototype.bind
          
```
function(){
              <div class="code">// Function.prototype.bind -&gt; HasOwnProperty -&gt; [[GetOwnProperty]]
var gopd = [];
var p = new Proxy(Function(),
  { getOwnPropertyDescriptor: function(o, v) { gopd.push(v); return Object.getOwnPropertyDescriptor(o, v); }});
p.bind();
return gopd + '' === &quot;length&quot;;</div>}
```
###[[Set]]
          
```
function(){
              <div class="code">// [[Set]] -&gt; [[GetOwnProperty]]
var gopd = [];
var p = new Proxy({},
  { getOwnPropertyDescriptor: function(o, v) { gopd.push(v); return Object.getOwnPropertyDescriptor(o, v); }});
p.foo = 1; p.bar = 1;
return gopd + '' === &quot;foo,bar&quot;;</div>}
```
###Object.assign
          
```
function(){
              <div class="code">// Object.assign -&gt; [[GetOwnProperty]]
var gopd = [];
var p = new Proxy({foo:1, bar:2},
  { getOwnPropertyDescriptor: function(o, v) { gopd.push(v); return Object.getOwnPropertyDescriptor(o, v); }});
Object.assign({}, p);
return gopd + '' === &quot;foo,bar&quot;;</div>}
```
###Object.prototype.hasOwnProperty
          
```
function(){
              <div class="code">// Object.prototype.hasOwnProperty -&gt; HasOwnProperty -&gt; [[GetOwnProperty]]
var gopd = [];
var p = new Proxy({foo:1, bar:2},
  { getOwnPropertyDescriptor: function(o, v) { gopd.push(v); return Object.getOwnPropertyDescriptor(o, v); }});
p.hasOwnProperty('garply');
return gopd + '' === &quot;garply&quot;;</div>}
```
###Function.prototype.bind
          
```
function(){
              <div class="code">// Function.prototype.bind -&gt; HasOwnProperty -&gt; [[GetOwnProperty]]
var gopd = [];
var p = new Proxy(Function(),
  { getOwnPropertyDescriptor: function(o, v) { gopd.push(v); return Object.getOwnPropertyDescriptor(o, v); }});
p.bind();
return gopd + '' === &quot;length&quot;;</div>}
```
###[[Set]]
          
```
function(){
              <div class="code">// [[Set]] -&gt; [[GetOwnProperty]]
var gopd = [];
var p = new Proxy({},
  { getOwnPropertyDescriptor: function(o, v) { gopd.push(v); return Object.getOwnPropertyDescriptor(o, v); }});
p.foo = 1; p.bar = 1;
return gopd + '' === &quot;foo,bar&quot;;</div>}
```
###Object.assign
          
```
function(){
              <div class="code">// Object.assign -&gt; [[GetOwnProperty]]
var gopd = [];
var p = new Proxy({foo:1, bar:2},
  { getOwnPropertyDescriptor: function(o, v) { gopd.push(v); return Object.getOwnPropertyDescriptor(o, v); }});
Object.assign({}, p);
return gopd + '' === &quot;foo,bar&quot;;</div>}
```
###Object.prototype.hasOwnProperty
          
```
function(){
              <div class="code">// Object.prototype.hasOwnProperty -&gt; HasOwnProperty -&gt; [[GetOwnProperty]]
var gopd = [];
var p = new Proxy({foo:1, bar:2},
  { getOwnPropertyDescriptor: function(o, v) { gopd.push(v); return Object.getOwnPropertyDescriptor(o, v); }});
p.hasOwnProperty('garply');
return gopd + '' === &quot;garply&quot;;</div>}
```
###Function.prototype.bind
          
```
function(){
              <div class="code">// Function.prototype.bind -&gt; HasOwnProperty -&gt; [[GetOwnProperty]]
var gopd = [];
var p = new Proxy(Function(),
  { getOwnPropertyDescriptor: function(o, v) { gopd.push(v); return Object.getOwnPropertyDescriptor(o, v); }});
p.bind();
return gopd + '' === &quot;length&quot;;</div>}
```
