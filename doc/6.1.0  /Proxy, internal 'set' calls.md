###Object.assign
          
```
function(){
              <div class="code">// Object.assign -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy({}, { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
Object.assign(p, { foo: 1, bar: 2 });
return set + '' === &quot;foo,bar&quot;;</div>}
```
###Array.from
          
```
function(){
              <div class="code">// Array.from -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy({}, { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
Array.from.call(function(){ return p; }, {length:2, 0:1, 1:2});
return set + '' === &quot;length&quot;;</div>}
```
###Array.of
          
```
function(){
              <div class="code">// Array.from -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy({}, { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
Array.of.call(function(){ return p; }, 1, 2, 3);
return set + '' === &quot;length&quot;;</div>}
```
###Array.prototype.copyWithin
          
```
function(){
              <div class="code">// Array.prototype.copyWithin -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([1,2,3,4,5,6], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.copyWithin(0, 3);
return set + '' === &quot;0,1,2&quot;;</div>}
```
###Array.prototype.fill
          
```
function(){
              <div class="code">// Array.prototype.fill -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([1,2,3,4,5,6], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.fill(0, 3);
return set + '' === &quot;3,4,5&quot;;</div>}
```
###Array.prototype.pop
          
```
function(){
              <div class="code">// Array.prototype.pop -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.pop();
return set + '' === &quot;length&quot;;</div>}
```
###Array.prototype.push
          
```
function(){
              <div class="code">// Array.prototype.push -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.push(0,0,0);
return set + '' === &quot;0,1,2,length&quot;;</div>}
```
###Array.prototype.reverse
          
```
function(){
              <div class="code">// Array.prototype.reverse -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([0,0,0,,], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.reverse();
return set + '' === &quot;3,1,2&quot;;</div>}
```
###Array.prototype.shift
          
```
function(){
              <div class="code">// Array.prototype.shift -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([0,0,,0], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.shift();
return set + '' === &quot;0,2,length&quot;;</div>}
```
###Array.prototype.splice
          
```
function(){
              <div class="code">// Array.prototype.splice -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([1,2,3], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.splice(1,0,0);
return set + '' === &quot;3,2,1,length&quot;;</div>}
```
###Array.prototype.unshift
          
```
function(){
              <div class="code">// Array.prototype.unshift -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([0,0,,0], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.unshift(0,1);
return set + '' === &quot;5,3,2,0,1,length&quot;;</div>}
```
###Object.assign
          
```
function(){
              <div class="code">// Object.assign -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy({}, { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
Object.assign(p, { foo: 1, bar: 2 });
return set + '' === &quot;foo,bar&quot;;</div>}
```
###Array.from
          
```
function(){
              <div class="code">// Array.from -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy({}, { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
Array.from.call(function(){ return p; }, {length:2, 0:1, 1:2});
return set + '' === &quot;length&quot;;</div>}
```
###Array.of
          
```
function(){
              <div class="code">// Array.from -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy({}, { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
Array.of.call(function(){ return p; }, 1, 2, 3);
return set + '' === &quot;length&quot;;</div>}
```
###Array.prototype.copyWithin
          
```
function(){
              <div class="code">// Array.prototype.copyWithin -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([1,2,3,4,5,6], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.copyWithin(0, 3);
return set + '' === &quot;0,1,2&quot;;</div>}
```
###Array.prototype.fill
          
```
function(){
              <div class="code">// Array.prototype.fill -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([1,2,3,4,5,6], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.fill(0, 3);
return set + '' === &quot;3,4,5&quot;;</div>}
```
###Array.prototype.pop
          
```
function(){
              <div class="code">// Array.prototype.pop -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.pop();
return set + '' === &quot;length&quot;;</div>}
```
###Array.prototype.push
          
```
function(){
              <div class="code">// Array.prototype.push -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.push(0,0,0);
return set + '' === &quot;0,1,2,length&quot;;</div>}
```
###Array.prototype.reverse
          
```
function(){
              <div class="code">// Array.prototype.reverse -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([0,0,0,,], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.reverse();
return set + '' === &quot;3,1,2&quot;;</div>}
```
###Array.prototype.shift
          
```
function(){
              <div class="code">// Array.prototype.shift -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([0,0,,0], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.shift();
return set + '' === &quot;0,2,length&quot;;</div>}
```
###Array.prototype.splice
          
```
function(){
              <div class="code">// Array.prototype.splice -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([1,2,3], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.splice(1,0,0);
return set + '' === &quot;3,2,1,length&quot;;</div>}
```
###Array.prototype.unshift
          
```
function(){
              <div class="code">// Array.prototype.unshift -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([0,0,,0], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.unshift(0,1);
return set + '' === &quot;5,3,2,0,1,length&quot;;</div>}
```
###Object.assign
          
```
function(){
              <div class="code">// Object.assign -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy({}, { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
Object.assign(p, { foo: 1, bar: 2 });
return set + '' === &quot;foo,bar&quot;;</div>}
```
###Array.from
          
```
function(){
              <div class="code">// Array.from -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy({}, { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
Array.from.call(function(){ return p; }, {length:2, 0:1, 1:2});
return set + '' === &quot;length&quot;;</div>}
```
###Array.of
          
```
function(){
              <div class="code">// Array.from -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy({}, { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
Array.of.call(function(){ return p; }, 1, 2, 3);
return set + '' === &quot;length&quot;;</div>}
```
###Array.prototype.copyWithin
          
```
function(){
              <div class="code">// Array.prototype.copyWithin -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([1,2,3,4,5,6], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.copyWithin(0, 3);
return set + '' === &quot;0,1,2&quot;;</div>}
```
###Array.prototype.fill
          
```
function(){
              <div class="code">// Array.prototype.fill -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([1,2,3,4,5,6], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.fill(0, 3);
return set + '' === &quot;3,4,5&quot;;</div>}
```
###Array.prototype.pop
          
```
function(){
              <div class="code">// Array.prototype.pop -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.pop();
return set + '' === &quot;length&quot;;</div>}
```
###Array.prototype.push
          
```
function(){
              <div class="code">// Array.prototype.push -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.push(0,0,0);
return set + '' === &quot;0,1,2,length&quot;;</div>}
```
###Array.prototype.reverse
          
```
function(){
              <div class="code">// Array.prototype.reverse -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([0,0,0,,], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.reverse();
return set + '' === &quot;3,1,2&quot;;</div>}
```
###Array.prototype.shift
          
```
function(){
              <div class="code">// Array.prototype.shift -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([0,0,,0], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.shift();
return set + '' === &quot;0,2,length&quot;;</div>}
```
###Array.prototype.splice
          
```
function(){
              <div class="code">// Array.prototype.splice -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([1,2,3], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.splice(1,0,0);
return set + '' === &quot;3,2,1,length&quot;;</div>}
```
###Array.prototype.unshift
          
```
function(){
              <div class="code">// Array.prototype.unshift -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([0,0,,0], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.unshift(0,1);
return set + '' === &quot;5,3,2,0,1,length&quot;;</div>}
```
###Object.assign
          
```
function(){
              <div class="code">// Object.assign -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy({}, { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
Object.assign(p, { foo: 1, bar: 2 });
return set + '' === &quot;foo,bar&quot;;</div>}
```
###Array.from
          
```
function(){
              <div class="code">// Array.from -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy({}, { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
Array.from.call(function(){ return p; }, {length:2, 0:1, 1:2});
return set + '' === &quot;length&quot;;</div>}
```
###Array.of
          
```
function(){
              <div class="code">// Array.from -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy({}, { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
Array.of.call(function(){ return p; }, 1, 2, 3);
return set + '' === &quot;length&quot;;</div>}
```
###Array.prototype.copyWithin
          
```
function(){
              <div class="code">// Array.prototype.copyWithin -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([1,2,3,4,5,6], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.copyWithin(0, 3);
return set + '' === &quot;0,1,2&quot;;</div>}
```
###Array.prototype.fill
          
```
function(){
              <div class="code">// Array.prototype.fill -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([1,2,3,4,5,6], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.fill(0, 3);
return set + '' === &quot;3,4,5&quot;;</div>}
```
###Array.prototype.pop
          
```
function(){
              <div class="code">// Array.prototype.pop -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.pop();
return set + '' === &quot;length&quot;;</div>}
```
###Array.prototype.push
          
```
function(){
              <div class="code">// Array.prototype.push -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.push(0,0,0);
return set + '' === &quot;0,1,2,length&quot;;</div>}
```
###Array.prototype.reverse
          
```
function(){
              <div class="code">// Array.prototype.reverse -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([0,0,0,,], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.reverse();
return set + '' === &quot;3,1,2&quot;;</div>}
```
###Array.prototype.shift
          
```
function(){
              <div class="code">// Array.prototype.shift -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([0,0,,0], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.shift();
return set + '' === &quot;0,2,length&quot;;</div>}
```
###Array.prototype.splice
          
```
function(){
              <div class="code">// Array.prototype.splice -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([1,2,3], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.splice(1,0,0);
return set + '' === &quot;3,2,1,length&quot;;</div>}
```
###Array.prototype.unshift
          
```
function(){
              <div class="code">// Array.prototype.unshift -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([0,0,,0], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.unshift(0,1);
return set + '' === &quot;5,3,2,0,1,length&quot;;</div>}
```
###Object.assign
          
```
function(){
              <div class="code">// Object.assign -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy({}, { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
Object.assign(p, { foo: 1, bar: 2 });
return set + '' === &quot;foo,bar&quot;;</div>}
```
###Array.from
          
```
function(){
              <div class="code">// Array.from -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy({}, { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
Array.from.call(function(){ return p; }, {length:2, 0:1, 1:2});
return set + '' === &quot;length&quot;;</div>}
```
###Array.of
          
```
function(){
              <div class="code">// Array.from -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy({}, { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
Array.of.call(function(){ return p; }, 1, 2, 3);
return set + '' === &quot;length&quot;;</div>}
```
###Array.prototype.copyWithin
          
```
function(){
              <div class="code">// Array.prototype.copyWithin -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([1,2,3,4,5,6], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.copyWithin(0, 3);
return set + '' === &quot;0,1,2&quot;;</div>}
```
###Array.prototype.fill
          
```
function(){
              <div class="code">// Array.prototype.fill -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([1,2,3,4,5,6], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.fill(0, 3);
return set + '' === &quot;3,4,5&quot;;</div>}
```
###Array.prototype.pop
          
```
function(){
              <div class="code">// Array.prototype.pop -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.pop();
return set + '' === &quot;length&quot;;</div>}
```
###Array.prototype.push
          
```
function(){
              <div class="code">// Array.prototype.push -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.push(0,0,0);
return set + '' === &quot;0,1,2,length&quot;;</div>}
```
###Array.prototype.reverse
          
```
function(){
              <div class="code">// Array.prototype.reverse -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([0,0,0,,], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.reverse();
return set + '' === &quot;3,1,2&quot;;</div>}
```
###Array.prototype.shift
          
```
function(){
              <div class="code">// Array.prototype.shift -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([0,0,,0], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.shift();
return set + '' === &quot;0,2,length&quot;;</div>}
```
###Array.prototype.splice
          
```
function(){
              <div class="code">// Array.prototype.splice -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([1,2,3], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.splice(1,0,0);
return set + '' === &quot;3,2,1,length&quot;;</div>}
```
###Array.prototype.unshift
          
```
function(){
              <div class="code">// Array.prototype.unshift -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([0,0,,0], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.unshift(0,1);
return set + '' === &quot;5,3,2,0,1,length&quot;;</div>}
```
###Object.assign
          
```
function(){
              <div class="code">// Object.assign -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy({}, { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
Object.assign(p, { foo: 1, bar: 2 });
return set + '' === &quot;foo,bar&quot;;</div>}
```
###Array.from
          
```
function(){
              <div class="code">// Array.from -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy({}, { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
Array.from.call(function(){ return p; }, {length:2, 0:1, 1:2});
return set + '' === &quot;length&quot;;</div>}
```
###Array.of
          
```
function(){
              <div class="code">// Array.from -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy({}, { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
Array.of.call(function(){ return p; }, 1, 2, 3);
return set + '' === &quot;length&quot;;</div>}
```
###Array.prototype.copyWithin
          
```
function(){
              <div class="code">// Array.prototype.copyWithin -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([1,2,3,4,5,6], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.copyWithin(0, 3);
return set + '' === &quot;0,1,2&quot;;</div>}
```
###Array.prototype.fill
          
```
function(){
              <div class="code">// Array.prototype.fill -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([1,2,3,4,5,6], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.fill(0, 3);
return set + '' === &quot;3,4,5&quot;;</div>}
```
###Array.prototype.pop
          
```
function(){
              <div class="code">// Array.prototype.pop -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.pop();
return set + '' === &quot;length&quot;;</div>}
```
###Array.prototype.push
          
```
function(){
              <div class="code">// Array.prototype.push -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.push(0,0,0);
return set + '' === &quot;0,1,2,length&quot;;</div>}
```
###Array.prototype.reverse
          
```
function(){
              <div class="code">// Array.prototype.reverse -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([0,0,0,,], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.reverse();
return set + '' === &quot;3,1,2&quot;;</div>}
```
###Array.prototype.shift
          
```
function(){
              <div class="code">// Array.prototype.shift -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([0,0,,0], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.shift();
return set + '' === &quot;0,2,length&quot;;</div>}
```
###Array.prototype.splice
          
```
function(){
              <div class="code">// Array.prototype.splice -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([1,2,3], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.splice(1,0,0);
return set + '' === &quot;3,2,1,length&quot;;</div>}
```
###Array.prototype.unshift
          
```
function(){
              <div class="code">// Array.prototype.unshift -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([0,0,,0], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.unshift(0,1);
return set + '' === &quot;5,3,2,0,1,length&quot;;</div>}
```
###Object.assign
          
```
function(){
              <div class="code">// Object.assign -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy({}, { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
Object.assign(p, { foo: 1, bar: 2 });
return set + '' === &quot;foo,bar&quot;;</div>}
```
###Array.from
          
```
function(){
              <div class="code">// Array.from -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy({}, { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
Array.from.call(function(){ return p; }, {length:2, 0:1, 1:2});
return set + '' === &quot;length&quot;;</div>}
```
###Array.of
          
```
function(){
              <div class="code">// Array.from -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy({}, { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
Array.of.call(function(){ return p; }, 1, 2, 3);
return set + '' === &quot;length&quot;;</div>}
```
###Array.prototype.copyWithin
          
```
function(){
              <div class="code">// Array.prototype.copyWithin -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([1,2,3,4,5,6], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.copyWithin(0, 3);
return set + '' === &quot;0,1,2&quot;;</div>}
```
###Array.prototype.fill
          
```
function(){
              <div class="code">// Array.prototype.fill -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([1,2,3,4,5,6], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.fill(0, 3);
return set + '' === &quot;3,4,5&quot;;</div>}
```
###Array.prototype.pop
          
```
function(){
              <div class="code">// Array.prototype.pop -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.pop();
return set + '' === &quot;length&quot;;</div>}
```
###Array.prototype.push
          
```
function(){
              <div class="code">// Array.prototype.push -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.push(0,0,0);
return set + '' === &quot;0,1,2,length&quot;;</div>}
```
###Array.prototype.reverse
          
```
function(){
              <div class="code">// Array.prototype.reverse -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([0,0,0,,], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.reverse();
return set + '' === &quot;3,1,2&quot;;</div>}
```
###Array.prototype.shift
          
```
function(){
              <div class="code">// Array.prototype.shift -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([0,0,,0], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.shift();
return set + '' === &quot;0,2,length&quot;;</div>}
```
###Array.prototype.splice
          
```
function(){
              <div class="code">// Array.prototype.splice -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([1,2,3], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.splice(1,0,0);
return set + '' === &quot;3,2,1,length&quot;;</div>}
```
###Array.prototype.unshift
          
```
function(){
              <div class="code">// Array.prototype.unshift -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([0,0,,0], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.unshift(0,1);
return set + '' === &quot;5,3,2,0,1,length&quot;;</div>}
```
###Object.assign
          
```
function(){
              <div class="code">// Object.assign -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy({}, { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
Object.assign(p, { foo: 1, bar: 2 });
return set + '' === &quot;foo,bar&quot;;</div>}
```
###Array.from
          
```
function(){
              <div class="code">// Array.from -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy({}, { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
Array.from.call(function(){ return p; }, {length:2, 0:1, 1:2});
return set + '' === &quot;length&quot;;</div>}
```
###Array.of
          
```
function(){
              <div class="code">// Array.from -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy({}, { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
Array.of.call(function(){ return p; }, 1, 2, 3);
return set + '' === &quot;length&quot;;</div>}
```
###Array.prototype.copyWithin
          
```
function(){
              <div class="code">// Array.prototype.copyWithin -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([1,2,3,4,5,6], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.copyWithin(0, 3);
return set + '' === &quot;0,1,2&quot;;</div>}
```
###Array.prototype.fill
          
```
function(){
              <div class="code">// Array.prototype.fill -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([1,2,3,4,5,6], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.fill(0, 3);
return set + '' === &quot;3,4,5&quot;;</div>}
```
###Array.prototype.pop
          
```
function(){
              <div class="code">// Array.prototype.pop -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.pop();
return set + '' === &quot;length&quot;;</div>}
```
###Array.prototype.push
          
```
function(){
              <div class="code">// Array.prototype.push -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.push(0,0,0);
return set + '' === &quot;0,1,2,length&quot;;</div>}
```
###Array.prototype.reverse
          
```
function(){
              <div class="code">// Array.prototype.reverse -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([0,0,0,,], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.reverse();
return set + '' === &quot;3,1,2&quot;;</div>}
```
###Array.prototype.shift
          
```
function(){
              <div class="code">// Array.prototype.shift -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([0,0,,0], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.shift();
return set + '' === &quot;0,2,length&quot;;</div>}
```
###Array.prototype.splice
          
```
function(){
              <div class="code">// Array.prototype.splice -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([1,2,3], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.splice(1,0,0);
return set + '' === &quot;3,2,1,length&quot;;</div>}
```
###Array.prototype.unshift
          
```
function(){
              <div class="code">// Array.prototype.unshift -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([0,0,,0], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.unshift(0,1);
return set + '' === &quot;5,3,2,0,1,length&quot;;</div>}
```
###Object.assign
          
```
function(){
              <div class="code">// Object.assign -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy({}, { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
Object.assign(p, { foo: 1, bar: 2 });
return set + '' === &quot;foo,bar&quot;;</div>}
```
###Array.from
          
```
function(){
              <div class="code">// Array.from -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy({}, { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
Array.from.call(function(){ return p; }, {length:2, 0:1, 1:2});
return set + '' === &quot;length&quot;;</div>}
```
###Array.of
          
```
function(){
              <div class="code">// Array.from -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy({}, { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
Array.of.call(function(){ return p; }, 1, 2, 3);
return set + '' === &quot;length&quot;;</div>}
```
###Array.prototype.copyWithin
          
```
function(){
              <div class="code">// Array.prototype.copyWithin -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([1,2,3,4,5,6], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.copyWithin(0, 3);
return set + '' === &quot;0,1,2&quot;;</div>}
```
###Array.prototype.fill
          
```
function(){
              <div class="code">// Array.prototype.fill -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([1,2,3,4,5,6], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.fill(0, 3);
return set + '' === &quot;3,4,5&quot;;</div>}
```
###Array.prototype.pop
          
```
function(){
              <div class="code">// Array.prototype.pop -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.pop();
return set + '' === &quot;length&quot;;</div>}
```
###Array.prototype.push
          
```
function(){
              <div class="code">// Array.prototype.push -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.push(0,0,0);
return set + '' === &quot;0,1,2,length&quot;;</div>}
```
###Array.prototype.reverse
          
```
function(){
              <div class="code">// Array.prototype.reverse -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([0,0,0,,], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.reverse();
return set + '' === &quot;3,1,2&quot;;</div>}
```
###Array.prototype.shift
          
```
function(){
              <div class="code">// Array.prototype.shift -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([0,0,,0], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.shift();
return set + '' === &quot;0,2,length&quot;;</div>}
```
###Array.prototype.splice
          
```
function(){
              <div class="code">// Array.prototype.splice -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([1,2,3], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.splice(1,0,0);
return set + '' === &quot;3,2,1,length&quot;;</div>}
```
###Array.prototype.unshift
          
```
function(){
              <div class="code">// Array.prototype.unshift -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([0,0,,0], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.unshift(0,1);
return set + '' === &quot;5,3,2,0,1,length&quot;;</div>}
```
###Object.assign
          
```
function(){
              <div class="code">// Object.assign -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy({}, { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
Object.assign(p, { foo: 1, bar: 2 });
return set + '' === &quot;foo,bar&quot;;</div>}
```
###Array.from
          
```
function(){
              <div class="code">// Array.from -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy({}, { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
Array.from.call(function(){ return p; }, {length:2, 0:1, 1:2});
return set + '' === &quot;length&quot;;</div>}
```
###Array.of
          
```
function(){
              <div class="code">// Array.from -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy({}, { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
Array.of.call(function(){ return p; }, 1, 2, 3);
return set + '' === &quot;length&quot;;</div>}
```
###Array.prototype.copyWithin
          
```
function(){
              <div class="code">// Array.prototype.copyWithin -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([1,2,3,4,5,6], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.copyWithin(0, 3);
return set + '' === &quot;0,1,2&quot;;</div>}
```
###Array.prototype.fill
          
```
function(){
              <div class="code">// Array.prototype.fill -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([1,2,3,4,5,6], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.fill(0, 3);
return set + '' === &quot;3,4,5&quot;;</div>}
```
###Array.prototype.pop
          
```
function(){
              <div class="code">// Array.prototype.pop -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.pop();
return set + '' === &quot;length&quot;;</div>}
```
###Array.prototype.push
          
```
function(){
              <div class="code">// Array.prototype.push -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.push(0,0,0);
return set + '' === &quot;0,1,2,length&quot;;</div>}
```
###Array.prototype.reverse
          
```
function(){
              <div class="code">// Array.prototype.reverse -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([0,0,0,,], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.reverse();
return set + '' === &quot;3,1,2&quot;;</div>}
```
###Array.prototype.shift
          
```
function(){
              <div class="code">// Array.prototype.shift -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([0,0,,0], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.shift();
return set + '' === &quot;0,2,length&quot;;</div>}
```
###Array.prototype.splice
          
```
function(){
              <div class="code">// Array.prototype.splice -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([1,2,3], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.splice(1,0,0);
return set + '' === &quot;3,2,1,length&quot;;</div>}
```
###Array.prototype.unshift
          
```
function(){
              <div class="code">// Array.prototype.unshift -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([0,0,,0], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.unshift(0,1);
return set + '' === &quot;5,3,2,0,1,length&quot;;</div>}
```
###Object.assign
          
```
function(){
              <div class="code">// Object.assign -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy({}, { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
Object.assign(p, { foo: 1, bar: 2 });
return set + '' === &quot;foo,bar&quot;;</div>}
```
###Array.from
          
```
function(){
              <div class="code">// Array.from -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy({}, { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
Array.from.call(function(){ return p; }, {length:2, 0:1, 1:2});
return set + '' === &quot;length&quot;;</div>}
```
###Array.of
          
```
function(){
              <div class="code">// Array.from -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy({}, { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
Array.of.call(function(){ return p; }, 1, 2, 3);
return set + '' === &quot;length&quot;;</div>}
```
###Array.prototype.copyWithin
          
```
function(){
              <div class="code">// Array.prototype.copyWithin -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([1,2,3,4,5,6], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.copyWithin(0, 3);
return set + '' === &quot;0,1,2&quot;;</div>}
```
###Array.prototype.fill
          
```
function(){
              <div class="code">// Array.prototype.fill -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([1,2,3,4,5,6], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.fill(0, 3);
return set + '' === &quot;3,4,5&quot;;</div>}
```
###Array.prototype.pop
          
```
function(){
              <div class="code">// Array.prototype.pop -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.pop();
return set + '' === &quot;length&quot;;</div>}
```
###Array.prototype.push
          
```
function(){
              <div class="code">// Array.prototype.push -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.push(0,0,0);
return set + '' === &quot;0,1,2,length&quot;;</div>}
```
###Array.prototype.reverse
          
```
function(){
              <div class="code">// Array.prototype.reverse -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([0,0,0,,], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.reverse();
return set + '' === &quot;3,1,2&quot;;</div>}
```
###Array.prototype.shift
          
```
function(){
              <div class="code">// Array.prototype.shift -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([0,0,,0], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.shift();
return set + '' === &quot;0,2,length&quot;;</div>}
```
###Array.prototype.splice
          
```
function(){
              <div class="code">// Array.prototype.splice -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([1,2,3], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.splice(1,0,0);
return set + '' === &quot;3,2,1,length&quot;;</div>}
```
###Array.prototype.unshift
          
```
function(){
              <div class="code">// Array.prototype.unshift -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([0,0,,0], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.unshift(0,1);
return set + '' === &quot;5,3,2,0,1,length&quot;;</div>}
```
###Object.assign
          
```
function(){
              <div class="code">// Object.assign -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy({}, { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
Object.assign(p, { foo: 1, bar: 2 });
return set + '' === &quot;foo,bar&quot;;</div>}
```
###Array.from
          
```
function(){
              <div class="code">// Array.from -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy({}, { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
Array.from.call(function(){ return p; }, {length:2, 0:1, 1:2});
return set + '' === &quot;length&quot;;</div>}
```
###Array.of
          
```
function(){
              <div class="code">// Array.from -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy({}, { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
Array.of.call(function(){ return p; }, 1, 2, 3);
return set + '' === &quot;length&quot;;</div>}
```
###Array.prototype.copyWithin
          
```
function(){
              <div class="code">// Array.prototype.copyWithin -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([1,2,3,4,5,6], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.copyWithin(0, 3);
return set + '' === &quot;0,1,2&quot;;</div>}
```
###Array.prototype.fill
          
```
function(){
              <div class="code">// Array.prototype.fill -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([1,2,3,4,5,6], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.fill(0, 3);
return set + '' === &quot;3,4,5&quot;;</div>}
```
###Array.prototype.pop
          
```
function(){
              <div class="code">// Array.prototype.pop -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.pop();
return set + '' === &quot;length&quot;;</div>}
```
###Array.prototype.push
          
```
function(){
              <div class="code">// Array.prototype.push -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.push(0,0,0);
return set + '' === &quot;0,1,2,length&quot;;</div>}
```
###Array.prototype.reverse
          
```
function(){
              <div class="code">// Array.prototype.reverse -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([0,0,0,,], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.reverse();
return set + '' === &quot;3,1,2&quot;;</div>}
```
###Array.prototype.shift
          
```
function(){
              <div class="code">// Array.prototype.shift -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([0,0,,0], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.shift();
return set + '' === &quot;0,2,length&quot;;</div>}
```
###Array.prototype.splice
          
```
function(){
              <div class="code">// Array.prototype.splice -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([1,2,3], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.splice(1,0,0);
return set + '' === &quot;3,2,1,length&quot;;</div>}
```
###Array.prototype.unshift
          
```
function(){
              <div class="code">// Array.prototype.unshift -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([0,0,,0], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.unshift(0,1);
return set + '' === &quot;5,3,2,0,1,length&quot;;</div>}
```
###Object.assign
          
```
function(){
              <div class="code">// Object.assign -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy({}, { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
Object.assign(p, { foo: 1, bar: 2 });
return set + '' === &quot;foo,bar&quot;;</div>}
```
###Array.from
          
```
function(){
              <div class="code">// Array.from -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy({}, { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
Array.from.call(function(){ return p; }, {length:2, 0:1, 1:2});
return set + '' === &quot;length&quot;;</div>}
```
###Array.of
          
```
function(){
              <div class="code">// Array.from -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy({}, { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
Array.of.call(function(){ return p; }, 1, 2, 3);
return set + '' === &quot;length&quot;;</div>}
```
###Array.prototype.copyWithin
          
```
function(){
              <div class="code">// Array.prototype.copyWithin -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([1,2,3,4,5,6], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.copyWithin(0, 3);
return set + '' === &quot;0,1,2&quot;;</div>}
```
###Array.prototype.fill
          
```
function(){
              <div class="code">// Array.prototype.fill -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([1,2,3,4,5,6], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.fill(0, 3);
return set + '' === &quot;3,4,5&quot;;</div>}
```
###Array.prototype.pop
          
```
function(){
              <div class="code">// Array.prototype.pop -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.pop();
return set + '' === &quot;length&quot;;</div>}
```
###Array.prototype.push
          
```
function(){
              <div class="code">// Array.prototype.push -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.push(0,0,0);
return set + '' === &quot;0,1,2,length&quot;;</div>}
```
###Array.prototype.reverse
          
```
function(){
              <div class="code">// Array.prototype.reverse -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([0,0,0,,], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.reverse();
return set + '' === &quot;3,1,2&quot;;</div>}
```
###Array.prototype.shift
          
```
function(){
              <div class="code">// Array.prototype.shift -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([0,0,,0], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.shift();
return set + '' === &quot;0,2,length&quot;;</div>}
```
###Array.prototype.splice
          
```
function(){
              <div class="code">// Array.prototype.splice -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([1,2,3], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.splice(1,0,0);
return set + '' === &quot;3,2,1,length&quot;;</div>}
```
###Array.prototype.unshift
          
```
function(){
              <div class="code">// Array.prototype.unshift -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([0,0,,0], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.unshift(0,1);
return set + '' === &quot;5,3,2,0,1,length&quot;;</div>}
```
###Object.assign
          
```
function(){
              <div class="code">// Object.assign -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy({}, { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
Object.assign(p, { foo: 1, bar: 2 });
return set + '' === &quot;foo,bar&quot;;</div>}
```
###Array.from
          
```
function(){
              <div class="code">// Array.from -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy({}, { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
Array.from.call(function(){ return p; }, {length:2, 0:1, 1:2});
return set + '' === &quot;length&quot;;</div>}
```
###Array.of
          
```
function(){
              <div class="code">// Array.from -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy({}, { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
Array.of.call(function(){ return p; }, 1, 2, 3);
return set + '' === &quot;length&quot;;</div>}
```
###Array.prototype.copyWithin
          
```
function(){
              <div class="code">// Array.prototype.copyWithin -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([1,2,3,4,5,6], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.copyWithin(0, 3);
return set + '' === &quot;0,1,2&quot;;</div>}
```
###Array.prototype.fill
          
```
function(){
              <div class="code">// Array.prototype.fill -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([1,2,3,4,5,6], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.fill(0, 3);
return set + '' === &quot;3,4,5&quot;;</div>}
```
###Array.prototype.pop
          
```
function(){
              <div class="code">// Array.prototype.pop -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.pop();
return set + '' === &quot;length&quot;;</div>}
```
###Array.prototype.push
          
```
function(){
              <div class="code">// Array.prototype.push -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.push(0,0,0);
return set + '' === &quot;0,1,2,length&quot;;</div>}
```
###Array.prototype.reverse
          
```
function(){
              <div class="code">// Array.prototype.reverse -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([0,0,0,,], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.reverse();
return set + '' === &quot;3,1,2&quot;;</div>}
```
###Array.prototype.shift
          
```
function(){
              <div class="code">// Array.prototype.shift -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([0,0,,0], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.shift();
return set + '' === &quot;0,2,length&quot;;</div>}
```
###Array.prototype.splice
          
```
function(){
              <div class="code">// Array.prototype.splice -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([1,2,3], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.splice(1,0,0);
return set + '' === &quot;3,2,1,length&quot;;</div>}
```
###Array.prototype.unshift
          
```
function(){
              <div class="code">// Array.prototype.unshift -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([0,0,,0], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.unshift(0,1);
return set + '' === &quot;5,3,2,0,1,length&quot;;</div>}
```
###Object.assign
          
```
function(){
              <div class="code">// Object.assign -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy({}, { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
Object.assign(p, { foo: 1, bar: 2 });
return set + '' === &quot;foo,bar&quot;;</div>}
```
###Array.from
          
```
function(){
              <div class="code">// Array.from -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy({}, { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
Array.from.call(function(){ return p; }, {length:2, 0:1, 1:2});
return set + '' === &quot;length&quot;;</div>}
```
###Array.of
          
```
function(){
              <div class="code">// Array.from -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy({}, { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
Array.of.call(function(){ return p; }, 1, 2, 3);
return set + '' === &quot;length&quot;;</div>}
```
###Array.prototype.copyWithin
          
```
function(){
              <div class="code">// Array.prototype.copyWithin -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([1,2,3,4,5,6], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.copyWithin(0, 3);
return set + '' === &quot;0,1,2&quot;;</div>}
```
###Array.prototype.fill
          
```
function(){
              <div class="code">// Array.prototype.fill -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([1,2,3,4,5,6], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.fill(0, 3);
return set + '' === &quot;3,4,5&quot;;</div>}
```
###Array.prototype.pop
          
```
function(){
              <div class="code">// Array.prototype.pop -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.pop();
return set + '' === &quot;length&quot;;</div>}
```
###Array.prototype.push
          
```
function(){
              <div class="code">// Array.prototype.push -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.push(0,0,0);
return set + '' === &quot;0,1,2,length&quot;;</div>}
```
###Array.prototype.reverse
          
```
function(){
              <div class="code">// Array.prototype.reverse -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([0,0,0,,], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.reverse();
return set + '' === &quot;3,1,2&quot;;</div>}
```
###Array.prototype.shift
          
```
function(){
              <div class="code">// Array.prototype.shift -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([0,0,,0], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.shift();
return set + '' === &quot;0,2,length&quot;;</div>}
```
###Array.prototype.splice
          
```
function(){
              <div class="code">// Array.prototype.splice -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([1,2,3], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.splice(1,0,0);
return set + '' === &quot;3,2,1,length&quot;;</div>}
```
###Array.prototype.unshift
          
```
function(){
              <div class="code">// Array.prototype.unshift -&gt; Set -&gt; [[Set]]
var set = [];
var p = new Proxy([0,0,,0], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.unshift(0,1);
return set + '' === &quot;5,3,2,0,1,length&quot;;</div>}
```
