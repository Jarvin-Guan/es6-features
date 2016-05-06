###Array.prototype.copyWithin
          
```
function(){
              <div class="code">// Array.prototype.copyWithin -&gt; DeletePropertyOrThrow -&gt; [[Delete]]
var del = [];
var p = new Proxy([0,0,0,,,,], { deleteProperty: function(o, v) { del.push(v); return delete o[v]; }});
p.copyWithin(0,3);
return del + '' === &quot;0,1,2&quot;;</div>}
```
###Array.prototype.pop
          
```
function(){
              <div class="code">// Array.prototype.pop -&gt; DeletePropertyOrThrow -&gt; [[Delete]]
var del = [];
var p = new Proxy([0,0,0], { deleteProperty: function(o, v) { del.push(v); return delete o[v]; }});
p.pop();
return del + '' === &quot;2&quot;;</div>}
```
###Array.prototype.reverse
          
```
function(){
              <div class="code">// Array.prototype.reverse -&gt; DeletePropertyOrThrow -&gt; [[Delete]]
var del = [];
var p = new Proxy([0,,2,,4,,], { deleteProperty: function(o, v) { del.push(v); return delete o[v]; }});
p.reverse();
return del + '' === &quot;0,4,2&quot;;</div>}
```
###Array.prototype.shift
          
```
function(){
              <div class="code">// Array.prototype.shift -&gt; DeletePropertyOrThrow -&gt; [[Delete]]
var del = [];
var p = new Proxy([0,,0,,0,0], { deleteProperty: function(o, v) { del.push(v); return delete o[v]; }});
p.shift();
return del + '' === &quot;0,2,5&quot;;</div>}
```
###Array.prototype.splice
          
```
function(){
              <div class="code">// Array.prototype.splice -&gt; DeletePropertyOrThrow -&gt; [[Delete]]
var del = [];
var p = new Proxy([0,0,0,0,,0], { deleteProperty: function(o, v) { del.push(v); return delete o[v]; }});
p.splice(2,2,0);
return del + '' === &quot;3,5&quot;;</div>}
```
###Array.prototype.unshift
          
```
function(){
              <div class="code">// Array.prototype.unshift -&gt; DeletePropertyOrThrow -&gt; [[Delete]]
var del = [];
var p = new Proxy([0,0,,0,,0], { deleteProperty: function(o, v) { del.push(v); return delete o[v]; }});
p.unshift(0);
return del + '' === &quot;5,3&quot;;</div>}
```
###Array.prototype.copyWithin
          
```
function(){
              <div class="code">// Array.prototype.copyWithin -&gt; DeletePropertyOrThrow -&gt; [[Delete]]
var del = [];
var p = new Proxy([0,0,0,,,,], { deleteProperty: function(o, v) { del.push(v); return delete o[v]; }});
p.copyWithin(0,3);
return del + '' === &quot;0,1,2&quot;;</div>}
```
###Array.prototype.pop
          
```
function(){
              <div class="code">// Array.prototype.pop -&gt; DeletePropertyOrThrow -&gt; [[Delete]]
var del = [];
var p = new Proxy([0,0,0], { deleteProperty: function(o, v) { del.push(v); return delete o[v]; }});
p.pop();
return del + '' === &quot;2&quot;;</div>}
```
###Array.prototype.reverse
          
```
function(){
              <div class="code">// Array.prototype.reverse -&gt; DeletePropertyOrThrow -&gt; [[Delete]]
var del = [];
var p = new Proxy([0,,2,,4,,], { deleteProperty: function(o, v) { del.push(v); return delete o[v]; }});
p.reverse();
return del + '' === &quot;0,4,2&quot;;</div>}
```
###Array.prototype.shift
          
```
function(){
              <div class="code">// Array.prototype.shift -&gt; DeletePropertyOrThrow -&gt; [[Delete]]
var del = [];
var p = new Proxy([0,,0,,0,0], { deleteProperty: function(o, v) { del.push(v); return delete o[v]; }});
p.shift();
return del + '' === &quot;0,2,5&quot;;</div>}
```
###Array.prototype.splice
          
```
function(){
              <div class="code">// Array.prototype.splice -&gt; DeletePropertyOrThrow -&gt; [[Delete]]
var del = [];
var p = new Proxy([0,0,0,0,,0], { deleteProperty: function(o, v) { del.push(v); return delete o[v]; }});
p.splice(2,2,0);
return del + '' === &quot;3,5&quot;;</div>}
```
###Array.prototype.unshift
          
```
function(){
              <div class="code">// Array.prototype.unshift -&gt; DeletePropertyOrThrow -&gt; [[Delete]]
var del = [];
var p = new Proxy([0,0,,0,,0], { deleteProperty: function(o, v) { del.push(v); return delete o[v]; }});
p.unshift(0);
return del + '' === &quot;5,3&quot;;</div>}
```
###Array.prototype.copyWithin
          
```
function(){
              <div class="code">// Array.prototype.copyWithin -&gt; DeletePropertyOrThrow -&gt; [[Delete]]
var del = [];
var p = new Proxy([0,0,0,,,,], { deleteProperty: function(o, v) { del.push(v); return delete o[v]; }});
p.copyWithin(0,3);
return del + '' === &quot;0,1,2&quot;;</div>}
```
###Array.prototype.pop
          
```
function(){
              <div class="code">// Array.prototype.pop -&gt; DeletePropertyOrThrow -&gt; [[Delete]]
var del = [];
var p = new Proxy([0,0,0], { deleteProperty: function(o, v) { del.push(v); return delete o[v]; }});
p.pop();
return del + '' === &quot;2&quot;;</div>}
```
###Array.prototype.reverse
          
```
function(){
              <div class="code">// Array.prototype.reverse -&gt; DeletePropertyOrThrow -&gt; [[Delete]]
var del = [];
var p = new Proxy([0,,2,,4,,], { deleteProperty: function(o, v) { del.push(v); return delete o[v]; }});
p.reverse();
return del + '' === &quot;0,4,2&quot;;</div>}
```
###Array.prototype.shift
          
```
function(){
              <div class="code">// Array.prototype.shift -&gt; DeletePropertyOrThrow -&gt; [[Delete]]
var del = [];
var p = new Proxy([0,,0,,0,0], { deleteProperty: function(o, v) { del.push(v); return delete o[v]; }});
p.shift();
return del + '' === &quot;0,2,5&quot;;</div>}
```
###Array.prototype.splice
          
```
function(){
              <div class="code">// Array.prototype.splice -&gt; DeletePropertyOrThrow -&gt; [[Delete]]
var del = [];
var p = new Proxy([0,0,0,0,,0], { deleteProperty: function(o, v) { del.push(v); return delete o[v]; }});
p.splice(2,2,0);
return del + '' === &quot;3,5&quot;;</div>}
```
###Array.prototype.unshift
          
```
function(){
              <div class="code">// Array.prototype.unshift -&gt; DeletePropertyOrThrow -&gt; [[Delete]]
var del = [];
var p = new Proxy([0,0,,0,,0], { deleteProperty: function(o, v) { del.push(v); return delete o[v]; }});
p.unshift(0);
return del + '' === &quot;5,3&quot;;</div>}
```
###Array.prototype.copyWithin
          
```
function(){
              <div class="code">// Array.prototype.copyWithin -&gt; DeletePropertyOrThrow -&gt; [[Delete]]
var del = [];
var p = new Proxy([0,0,0,,,,], { deleteProperty: function(o, v) { del.push(v); return delete o[v]; }});
p.copyWithin(0,3);
return del + '' === &quot;0,1,2&quot;;</div>}
```
###Array.prototype.pop
          
```
function(){
              <div class="code">// Array.prototype.pop -&gt; DeletePropertyOrThrow -&gt; [[Delete]]
var del = [];
var p = new Proxy([0,0,0], { deleteProperty: function(o, v) { del.push(v); return delete o[v]; }});
p.pop();
return del + '' === &quot;2&quot;;</div>}
```
###Array.prototype.reverse
          
```
function(){
              <div class="code">// Array.prototype.reverse -&gt; DeletePropertyOrThrow -&gt; [[Delete]]
var del = [];
var p = new Proxy([0,,2,,4,,], { deleteProperty: function(o, v) { del.push(v); return delete o[v]; }});
p.reverse();
return del + '' === &quot;0,4,2&quot;;</div>}
```
###Array.prototype.shift
          
```
function(){
              <div class="code">// Array.prototype.shift -&gt; DeletePropertyOrThrow -&gt; [[Delete]]
var del = [];
var p = new Proxy([0,,0,,0,0], { deleteProperty: function(o, v) { del.push(v); return delete o[v]; }});
p.shift();
return del + '' === &quot;0,2,5&quot;;</div>}
```
###Array.prototype.splice
          
```
function(){
              <div class="code">// Array.prototype.splice -&gt; DeletePropertyOrThrow -&gt; [[Delete]]
var del = [];
var p = new Proxy([0,0,0,0,,0], { deleteProperty: function(o, v) { del.push(v); return delete o[v]; }});
p.splice(2,2,0);
return del + '' === &quot;3,5&quot;;</div>}
```
###Array.prototype.unshift
          
```
function(){
              <div class="code">// Array.prototype.unshift -&gt; DeletePropertyOrThrow -&gt; [[Delete]]
var del = [];
var p = new Proxy([0,0,,0,,0], { deleteProperty: function(o, v) { del.push(v); return delete o[v]; }});
p.unshift(0);
return del + '' === &quot;5,3&quot;;</div>}
```
###Array.prototype.copyWithin
          
```
function(){
              <div class="code">// Array.prototype.copyWithin -&gt; DeletePropertyOrThrow -&gt; [[Delete]]
var del = [];
var p = new Proxy([0,0,0,,,,], { deleteProperty: function(o, v) { del.push(v); return delete o[v]; }});
p.copyWithin(0,3);
return del + '' === &quot;0,1,2&quot;;</div>}
```
###Array.prototype.pop
          
```
function(){
              <div class="code">// Array.prototype.pop -&gt; DeletePropertyOrThrow -&gt; [[Delete]]
var del = [];
var p = new Proxy([0,0,0], { deleteProperty: function(o, v) { del.push(v); return delete o[v]; }});
p.pop();
return del + '' === &quot;2&quot;;</div>}
```
###Array.prototype.reverse
          
```
function(){
              <div class="code">// Array.prototype.reverse -&gt; DeletePropertyOrThrow -&gt; [[Delete]]
var del = [];
var p = new Proxy([0,,2,,4,,], { deleteProperty: function(o, v) { del.push(v); return delete o[v]; }});
p.reverse();
return del + '' === &quot;0,4,2&quot;;</div>}
```
###Array.prototype.shift
          
```
function(){
              <div class="code">// Array.prototype.shift -&gt; DeletePropertyOrThrow -&gt; [[Delete]]
var del = [];
var p = new Proxy([0,,0,,0,0], { deleteProperty: function(o, v) { del.push(v); return delete o[v]; }});
p.shift();
return del + '' === &quot;0,2,5&quot;;</div>}
```
###Array.prototype.splice
          
```
function(){
              <div class="code">// Array.prototype.splice -&gt; DeletePropertyOrThrow -&gt; [[Delete]]
var del = [];
var p = new Proxy([0,0,0,0,,0], { deleteProperty: function(o, v) { del.push(v); return delete o[v]; }});
p.splice(2,2,0);
return del + '' === &quot;3,5&quot;;</div>}
```
###Array.prototype.unshift
          
```
function(){
              <div class="code">// Array.prototype.unshift -&gt; DeletePropertyOrThrow -&gt; [[Delete]]
var del = [];
var p = new Proxy([0,0,,0,,0], { deleteProperty: function(o, v) { del.push(v); return delete o[v]; }});
p.unshift(0);
return del + '' === &quot;5,3&quot;;</div>}
```
###Array.prototype.copyWithin
          
```
function(){
              <div class="code">// Array.prototype.copyWithin -&gt; DeletePropertyOrThrow -&gt; [[Delete]]
var del = [];
var p = new Proxy([0,0,0,,,,], { deleteProperty: function(o, v) { del.push(v); return delete o[v]; }});
p.copyWithin(0,3);
return del + '' === &quot;0,1,2&quot;;</div>}
```
###Array.prototype.pop
          
```
function(){
              <div class="code">// Array.prototype.pop -&gt; DeletePropertyOrThrow -&gt; [[Delete]]
var del = [];
var p = new Proxy([0,0,0], { deleteProperty: function(o, v) { del.push(v); return delete o[v]; }});
p.pop();
return del + '' === &quot;2&quot;;</div>}
```
###Array.prototype.reverse
          
```
function(){
              <div class="code">// Array.prototype.reverse -&gt; DeletePropertyOrThrow -&gt; [[Delete]]
var del = [];
var p = new Proxy([0,,2,,4,,], { deleteProperty: function(o, v) { del.push(v); return delete o[v]; }});
p.reverse();
return del + '' === &quot;0,4,2&quot;;</div>}
```
###Array.prototype.shift
          
```
function(){
              <div class="code">// Array.prototype.shift -&gt; DeletePropertyOrThrow -&gt; [[Delete]]
var del = [];
var p = new Proxy([0,,0,,0,0], { deleteProperty: function(o, v) { del.push(v); return delete o[v]; }});
p.shift();
return del + '' === &quot;0,2,5&quot;;</div>}
```
###Array.prototype.splice
          
```
function(){
              <div class="code">// Array.prototype.splice -&gt; DeletePropertyOrThrow -&gt; [[Delete]]
var del = [];
var p = new Proxy([0,0,0,0,,0], { deleteProperty: function(o, v) { del.push(v); return delete o[v]; }});
p.splice(2,2,0);
return del + '' === &quot;3,5&quot;;</div>}
```
###Array.prototype.unshift
          
```
function(){
              <div class="code">// Array.prototype.unshift -&gt; DeletePropertyOrThrow -&gt; [[Delete]]
var del = [];
var p = new Proxy([0,0,,0,,0], { deleteProperty: function(o, v) { del.push(v); return delete o[v]; }});
p.unshift(0);
return del + '' === &quot;5,3&quot;;</div>}
```
###Array.prototype.copyWithin
          
```
function(){
              <div class="code">// Array.prototype.copyWithin -&gt; DeletePropertyOrThrow -&gt; [[Delete]]
var del = [];
var p = new Proxy([0,0,0,,,,], { deleteProperty: function(o, v) { del.push(v); return delete o[v]; }});
p.copyWithin(0,3);
return del + '' === &quot;0,1,2&quot;;</div>}
```
###Array.prototype.pop
          
```
function(){
              <div class="code">// Array.prototype.pop -&gt; DeletePropertyOrThrow -&gt; [[Delete]]
var del = [];
var p = new Proxy([0,0,0], { deleteProperty: function(o, v) { del.push(v); return delete o[v]; }});
p.pop();
return del + '' === &quot;2&quot;;</div>}
```
###Array.prototype.reverse
          
```
function(){
              <div class="code">// Array.prototype.reverse -&gt; DeletePropertyOrThrow -&gt; [[Delete]]
var del = [];
var p = new Proxy([0,,2,,4,,], { deleteProperty: function(o, v) { del.push(v); return delete o[v]; }});
p.reverse();
return del + '' === &quot;0,4,2&quot;;</div>}
```
###Array.prototype.shift
          
```
function(){
              <div class="code">// Array.prototype.shift -&gt; DeletePropertyOrThrow -&gt; [[Delete]]
var del = [];
var p = new Proxy([0,,0,,0,0], { deleteProperty: function(o, v) { del.push(v); return delete o[v]; }});
p.shift();
return del + '' === &quot;0,2,5&quot;;</div>}
```
###Array.prototype.splice
          
```
function(){
              <div class="code">// Array.prototype.splice -&gt; DeletePropertyOrThrow -&gt; [[Delete]]
var del = [];
var p = new Proxy([0,0,0,0,,0], { deleteProperty: function(o, v) { del.push(v); return delete o[v]; }});
p.splice(2,2,0);
return del + '' === &quot;3,5&quot;;</div>}
```
###Array.prototype.unshift
          
```
function(){
              <div class="code">// Array.prototype.unshift -&gt; DeletePropertyOrThrow -&gt; [[Delete]]
var del = [];
var p = new Proxy([0,0,,0,,0], { deleteProperty: function(o, v) { del.push(v); return delete o[v]; }});
p.unshift(0);
return del + '' === &quot;5,3&quot;;</div>}
```
###Array.prototype.copyWithin
          
```
function(){
              <div class="code">// Array.prototype.copyWithin -&gt; DeletePropertyOrThrow -&gt; [[Delete]]
var del = [];
var p = new Proxy([0,0,0,,,,], { deleteProperty: function(o, v) { del.push(v); return delete o[v]; }});
p.copyWithin(0,3);
return del + '' === &quot;0,1,2&quot;;</div>}
```
###Array.prototype.pop
          
```
function(){
              <div class="code">// Array.prototype.pop -&gt; DeletePropertyOrThrow -&gt; [[Delete]]
var del = [];
var p = new Proxy([0,0,0], { deleteProperty: function(o, v) { del.push(v); return delete o[v]; }});
p.pop();
return del + '' === &quot;2&quot;;</div>}
```
###Array.prototype.reverse
          
```
function(){
              <div class="code">// Array.prototype.reverse -&gt; DeletePropertyOrThrow -&gt; [[Delete]]
var del = [];
var p = new Proxy([0,,2,,4,,], { deleteProperty: function(o, v) { del.push(v); return delete o[v]; }});
p.reverse();
return del + '' === &quot;0,4,2&quot;;</div>}
```
###Array.prototype.shift
          
```
function(){
              <div class="code">// Array.prototype.shift -&gt; DeletePropertyOrThrow -&gt; [[Delete]]
var del = [];
var p = new Proxy([0,,0,,0,0], { deleteProperty: function(o, v) { del.push(v); return delete o[v]; }});
p.shift();
return del + '' === &quot;0,2,5&quot;;</div>}
```
###Array.prototype.splice
          
```
function(){
              <div class="code">// Array.prototype.splice -&gt; DeletePropertyOrThrow -&gt; [[Delete]]
var del = [];
var p = new Proxy([0,0,0,0,,0], { deleteProperty: function(o, v) { del.push(v); return delete o[v]; }});
p.splice(2,2,0);
return del + '' === &quot;3,5&quot;;</div>}
```
###Array.prototype.unshift
          
```
function(){
              <div class="code">// Array.prototype.unshift -&gt; DeletePropertyOrThrow -&gt; [[Delete]]
var del = [];
var p = new Proxy([0,0,,0,,0], { deleteProperty: function(o, v) { del.push(v); return delete o[v]; }});
p.unshift(0);
return del + '' === &quot;5,3&quot;;</div>}
```
###Array.prototype.copyWithin
          
```
function(){
              <div class="code">// Array.prototype.copyWithin -&gt; DeletePropertyOrThrow -&gt; [[Delete]]
var del = [];
var p = new Proxy([0,0,0,,,,], { deleteProperty: function(o, v) { del.push(v); return delete o[v]; }});
p.copyWithin(0,3);
return del + '' === &quot;0,1,2&quot;;</div>}
```
###Array.prototype.pop
          
```
function(){
              <div class="code">// Array.prototype.pop -&gt; DeletePropertyOrThrow -&gt; [[Delete]]
var del = [];
var p = new Proxy([0,0,0], { deleteProperty: function(o, v) { del.push(v); return delete o[v]; }});
p.pop();
return del + '' === &quot;2&quot;;</div>}
```
###Array.prototype.reverse
          
```
function(){
              <div class="code">// Array.prototype.reverse -&gt; DeletePropertyOrThrow -&gt; [[Delete]]
var del = [];
var p = new Proxy([0,,2,,4,,], { deleteProperty: function(o, v) { del.push(v); return delete o[v]; }});
p.reverse();
return del + '' === &quot;0,4,2&quot;;</div>}
```
###Array.prototype.shift
          
```
function(){
              <div class="code">// Array.prototype.shift -&gt; DeletePropertyOrThrow -&gt; [[Delete]]
var del = [];
var p = new Proxy([0,,0,,0,0], { deleteProperty: function(o, v) { del.push(v); return delete o[v]; }});
p.shift();
return del + '' === &quot;0,2,5&quot;;</div>}
```
###Array.prototype.splice
          
```
function(){
              <div class="code">// Array.prototype.splice -&gt; DeletePropertyOrThrow -&gt; [[Delete]]
var del = [];
var p = new Proxy([0,0,0,0,,0], { deleteProperty: function(o, v) { del.push(v); return delete o[v]; }});
p.splice(2,2,0);
return del + '' === &quot;3,5&quot;;</div>}
```
###Array.prototype.unshift
          
```
function(){
              <div class="code">// Array.prototype.unshift -&gt; DeletePropertyOrThrow -&gt; [[Delete]]
var del = [];
var p = new Proxy([0,0,,0,,0], { deleteProperty: function(o, v) { del.push(v); return delete o[v]; }});
p.unshift(0);
return del + '' === &quot;5,3&quot;;</div>}
```
###Array.prototype.copyWithin
          
```
function(){
              <div class="code">// Array.prototype.copyWithin -&gt; DeletePropertyOrThrow -&gt; [[Delete]]
var del = [];
var p = new Proxy([0,0,0,,,,], { deleteProperty: function(o, v) { del.push(v); return delete o[v]; }});
p.copyWithin(0,3);
return del + '' === &quot;0,1,2&quot;;</div>}
```
###Array.prototype.pop
          
```
function(){
              <div class="code">// Array.prototype.pop -&gt; DeletePropertyOrThrow -&gt; [[Delete]]
var del = [];
var p = new Proxy([0,0,0], { deleteProperty: function(o, v) { del.push(v); return delete o[v]; }});
p.pop();
return del + '' === &quot;2&quot;;</div>}
```
###Array.prototype.reverse
          
```
function(){
              <div class="code">// Array.prototype.reverse -&gt; DeletePropertyOrThrow -&gt; [[Delete]]
var del = [];
var p = new Proxy([0,,2,,4,,], { deleteProperty: function(o, v) { del.push(v); return delete o[v]; }});
p.reverse();
return del + '' === &quot;0,4,2&quot;;</div>}
```
###Array.prototype.shift
          
```
function(){
              <div class="code">// Array.prototype.shift -&gt; DeletePropertyOrThrow -&gt; [[Delete]]
var del = [];
var p = new Proxy([0,,0,,0,0], { deleteProperty: function(o, v) { del.push(v); return delete o[v]; }});
p.shift();
return del + '' === &quot;0,2,5&quot;;</div>}
```
###Array.prototype.splice
          
```
function(){
              <div class="code">// Array.prototype.splice -&gt; DeletePropertyOrThrow -&gt; [[Delete]]
var del = [];
var p = new Proxy([0,0,0,0,,0], { deleteProperty: function(o, v) { del.push(v); return delete o[v]; }});
p.splice(2,2,0);
return del + '' === &quot;3,5&quot;;</div>}
```
###Array.prototype.unshift
          
```
function(){
              <div class="code">// Array.prototype.unshift -&gt; DeletePropertyOrThrow -&gt; [[Delete]]
var del = [];
var p = new Proxy([0,0,,0,,0], { deleteProperty: function(o, v) { del.push(v); return delete o[v]; }});
p.unshift(0);
return del + '' === &quot;5,3&quot;;</div>}
```
###Array.prototype.copyWithin
          
```
function(){
              <div class="code">// Array.prototype.copyWithin -&gt; DeletePropertyOrThrow -&gt; [[Delete]]
var del = [];
var p = new Proxy([0,0,0,,,,], { deleteProperty: function(o, v) { del.push(v); return delete o[v]; }});
p.copyWithin(0,3);
return del + '' === &quot;0,1,2&quot;;</div>}
```
###Array.prototype.pop
          
```
function(){
              <div class="code">// Array.prototype.pop -&gt; DeletePropertyOrThrow -&gt; [[Delete]]
var del = [];
var p = new Proxy([0,0,0], { deleteProperty: function(o, v) { del.push(v); return delete o[v]; }});
p.pop();
return del + '' === &quot;2&quot;;</div>}
```
###Array.prototype.reverse
          
```
function(){
              <div class="code">// Array.prototype.reverse -&gt; DeletePropertyOrThrow -&gt; [[Delete]]
var del = [];
var p = new Proxy([0,,2,,4,,], { deleteProperty: function(o, v) { del.push(v); return delete o[v]; }});
p.reverse();
return del + '' === &quot;0,4,2&quot;;</div>}
```
###Array.prototype.shift
          
```
function(){
              <div class="code">// Array.prototype.shift -&gt; DeletePropertyOrThrow -&gt; [[Delete]]
var del = [];
var p = new Proxy([0,,0,,0,0], { deleteProperty: function(o, v) { del.push(v); return delete o[v]; }});
p.shift();
return del + '' === &quot;0,2,5&quot;;</div>}
```
###Array.prototype.splice
          
```
function(){
              <div class="code">// Array.prototype.splice -&gt; DeletePropertyOrThrow -&gt; [[Delete]]
var del = [];
var p = new Proxy([0,0,0,0,,0], { deleteProperty: function(o, v) { del.push(v); return delete o[v]; }});
p.splice(2,2,0);
return del + '' === &quot;3,5&quot;;</div>}
```
###Array.prototype.unshift
          
```
function(){
              <div class="code">// Array.prototype.unshift -&gt; DeletePropertyOrThrow -&gt; [[Delete]]
var del = [];
var p = new Proxy([0,0,,0,,0], { deleteProperty: function(o, v) { del.push(v); return delete o[v]; }});
p.unshift(0);
return del + '' === &quot;5,3&quot;;</div>}
```
###Array.prototype.copyWithin
          
```
function(){
              <div class="code">// Array.prototype.copyWithin -&gt; DeletePropertyOrThrow -&gt; [[Delete]]
var del = [];
var p = new Proxy([0,0,0,,,,], { deleteProperty: function(o, v) { del.push(v); return delete o[v]; }});
p.copyWithin(0,3);
return del + '' === &quot;0,1,2&quot;;</div>}
```
###Array.prototype.pop
          
```
function(){
              <div class="code">// Array.prototype.pop -&gt; DeletePropertyOrThrow -&gt; [[Delete]]
var del = [];
var p = new Proxy([0,0,0], { deleteProperty: function(o, v) { del.push(v); return delete o[v]; }});
p.pop();
return del + '' === &quot;2&quot;;</div>}
```
###Array.prototype.reverse
          
```
function(){
              <div class="code">// Array.prototype.reverse -&gt; DeletePropertyOrThrow -&gt; [[Delete]]
var del = [];
var p = new Proxy([0,,2,,4,,], { deleteProperty: function(o, v) { del.push(v); return delete o[v]; }});
p.reverse();
return del + '' === &quot;0,4,2&quot;;</div>}
```
###Array.prototype.shift
          
```
function(){
              <div class="code">// Array.prototype.shift -&gt; DeletePropertyOrThrow -&gt; [[Delete]]
var del = [];
var p = new Proxy([0,,0,,0,0], { deleteProperty: function(o, v) { del.push(v); return delete o[v]; }});
p.shift();
return del + '' === &quot;0,2,5&quot;;</div>}
```
###Array.prototype.splice
          
```
function(){
              <div class="code">// Array.prototype.splice -&gt; DeletePropertyOrThrow -&gt; [[Delete]]
var del = [];
var p = new Proxy([0,0,0,0,,0], { deleteProperty: function(o, v) { del.push(v); return delete o[v]; }});
p.splice(2,2,0);
return del + '' === &quot;3,5&quot;;</div>}
```
###Array.prototype.unshift
          
```
function(){
              <div class="code">// Array.prototype.unshift -&gt; DeletePropertyOrThrow -&gt; [[Delete]]
var del = [];
var p = new Proxy([0,0,,0,,0], { deleteProperty: function(o, v) { del.push(v); return delete o[v]; }});
p.unshift(0);
return del + '' === &quot;5,3&quot;;</div>}
```
###Array.prototype.copyWithin
          
```
function(){
              <div class="code">// Array.prototype.copyWithin -&gt; DeletePropertyOrThrow -&gt; [[Delete]]
var del = [];
var p = new Proxy([0,0,0,,,,], { deleteProperty: function(o, v) { del.push(v); return delete o[v]; }});
p.copyWithin(0,3);
return del + '' === &quot;0,1,2&quot;;</div>}
```
###Array.prototype.pop
          
```
function(){
              <div class="code">// Array.prototype.pop -&gt; DeletePropertyOrThrow -&gt; [[Delete]]
var del = [];
var p = new Proxy([0,0,0], { deleteProperty: function(o, v) { del.push(v); return delete o[v]; }});
p.pop();
return del + '' === &quot;2&quot;;</div>}
```
###Array.prototype.reverse
          
```
function(){
              <div class="code">// Array.prototype.reverse -&gt; DeletePropertyOrThrow -&gt; [[Delete]]
var del = [];
var p = new Proxy([0,,2,,4,,], { deleteProperty: function(o, v) { del.push(v); return delete o[v]; }});
p.reverse();
return del + '' === &quot;0,4,2&quot;;</div>}
```
###Array.prototype.shift
          
```
function(){
              <div class="code">// Array.prototype.shift -&gt; DeletePropertyOrThrow -&gt; [[Delete]]
var del = [];
var p = new Proxy([0,,0,,0,0], { deleteProperty: function(o, v) { del.push(v); return delete o[v]; }});
p.shift();
return del + '' === &quot;0,2,5&quot;;</div>}
```
###Array.prototype.splice
          
```
function(){
              <div class="code">// Array.prototype.splice -&gt; DeletePropertyOrThrow -&gt; [[Delete]]
var del = [];
var p = new Proxy([0,0,0,0,,0], { deleteProperty: function(o, v) { del.push(v); return delete o[v]; }});
p.splice(2,2,0);
return del + '' === &quot;3,5&quot;;</div>}
```
###Array.prototype.unshift
          
```
function(){
              <div class="code">// Array.prototype.unshift -&gt; DeletePropertyOrThrow -&gt; [[Delete]]
var del = [];
var p = new Proxy([0,0,,0,,0], { deleteProperty: function(o, v) { del.push(v); return delete o[v]; }});
p.unshift(0);
return del + '' === &quot;5,3&quot;;</div>}
```
###Array.prototype.copyWithin
          
```
function(){
              <div class="code">// Array.prototype.copyWithin -&gt; DeletePropertyOrThrow -&gt; [[Delete]]
var del = [];
var p = new Proxy([0,0,0,,,,], { deleteProperty: function(o, v) { del.push(v); return delete o[v]; }});
p.copyWithin(0,3);
return del + '' === &quot;0,1,2&quot;;</div>}
```
###Array.prototype.pop
          
```
function(){
              <div class="code">// Array.prototype.pop -&gt; DeletePropertyOrThrow -&gt; [[Delete]]
var del = [];
var p = new Proxy([0,0,0], { deleteProperty: function(o, v) { del.push(v); return delete o[v]; }});
p.pop();
return del + '' === &quot;2&quot;;</div>}
```
###Array.prototype.reverse
          
```
function(){
              <div class="code">// Array.prototype.reverse -&gt; DeletePropertyOrThrow -&gt; [[Delete]]
var del = [];
var p = new Proxy([0,,2,,4,,], { deleteProperty: function(o, v) { del.push(v); return delete o[v]; }});
p.reverse();
return del + '' === &quot;0,4,2&quot;;</div>}
```
###Array.prototype.shift
          
```
function(){
              <div class="code">// Array.prototype.shift -&gt; DeletePropertyOrThrow -&gt; [[Delete]]
var del = [];
var p = new Proxy([0,,0,,0,0], { deleteProperty: function(o, v) { del.push(v); return delete o[v]; }});
p.shift();
return del + '' === &quot;0,2,5&quot;;</div>}
```
###Array.prototype.splice
          
```
function(){
              <div class="code">// Array.prototype.splice -&gt; DeletePropertyOrThrow -&gt; [[Delete]]
var del = [];
var p = new Proxy([0,0,0,0,,0], { deleteProperty: function(o, v) { del.push(v); return delete o[v]; }});
p.splice(2,2,0);
return del + '' === &quot;3,5&quot;;</div>}
```
###Array.prototype.unshift
          
```
function(){
              <div class="code">// Array.prototype.unshift -&gt; DeletePropertyOrThrow -&gt; [[Delete]]
var del = [];
var p = new Proxy([0,0,,0,,0], { deleteProperty: function(o, v) { del.push(v); return delete o[v]; }});
p.unshift(0);
return del + '' === &quot;5,3&quot;;</div>}
```
###Array.prototype.copyWithin
          
```
function(){
              <div class="code">// Array.prototype.copyWithin -&gt; DeletePropertyOrThrow -&gt; [[Delete]]
var del = [];
var p = new Proxy([0,0,0,,,,], { deleteProperty: function(o, v) { del.push(v); return delete o[v]; }});
p.copyWithin(0,3);
return del + '' === &quot;0,1,2&quot;;</div>}
```
###Array.prototype.pop
          
```
function(){
              <div class="code">// Array.prototype.pop -&gt; DeletePropertyOrThrow -&gt; [[Delete]]
var del = [];
var p = new Proxy([0,0,0], { deleteProperty: function(o, v) { del.push(v); return delete o[v]; }});
p.pop();
return del + '' === &quot;2&quot;;</div>}
```
###Array.prototype.reverse
          
```
function(){
              <div class="code">// Array.prototype.reverse -&gt; DeletePropertyOrThrow -&gt; [[Delete]]
var del = [];
var p = new Proxy([0,,2,,4,,], { deleteProperty: function(o, v) { del.push(v); return delete o[v]; }});
p.reverse();
return del + '' === &quot;0,4,2&quot;;</div>}
```
###Array.prototype.shift
          
```
function(){
              <div class="code">// Array.prototype.shift -&gt; DeletePropertyOrThrow -&gt; [[Delete]]
var del = [];
var p = new Proxy([0,,0,,0,0], { deleteProperty: function(o, v) { del.push(v); return delete o[v]; }});
p.shift();
return del + '' === &quot;0,2,5&quot;;</div>}
```
###Array.prototype.splice
          
```
function(){
              <div class="code">// Array.prototype.splice -&gt; DeletePropertyOrThrow -&gt; [[Delete]]
var del = [];
var p = new Proxy([0,0,0,0,,0], { deleteProperty: function(o, v) { del.push(v); return delete o[v]; }});
p.splice(2,2,0);
return del + '' === &quot;3,5&quot;;</div>}
```
###Array.prototype.unshift
          
```
function(){
              <div class="code">// Array.prototype.unshift -&gt; DeletePropertyOrThrow -&gt; [[Delete]]
var del = [];
var p = new Proxy([0,0,,0,,0], { deleteProperty: function(o, v) { del.push(v); return delete o[v]; }});
p.unshift(0);
return del + '' === &quot;5,3&quot;;</div>}
```
