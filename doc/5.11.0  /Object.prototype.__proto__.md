###get prototype
          
```
function(){
              <div class="code">var A = function(){};
return (new A()).__proto__ === A.prototype;</div>}
```
###set prototype
          
```
function(){
              <div class="code">var o = {};
o.__proto__ = Array.prototype;
return o instanceof Array;</div>}
```
###absent from Object.create(null)
          
```
function(){
              <div class="code">var o = Object.create(null), p = {};
o.__proto__ = p;
return Object.getPrototypeOf(o) !== p;</div>}
```
###present in hasOwnProperty()
          
```
function(){
              <div class="code">return Object.prototype.hasOwnProperty('__proto__');</div>}
```
###correct property descriptor
          
```
function(){
              <div class="code">var desc = Object.getOwnPropertyDescriptor(Object.prototype,&quot;__proto__&quot;);
var A = function(){};

return (desc
  &amp;&amp; &quot;get&quot; in desc
  &amp;&amp; &quot;set&quot; in desc
  &amp;&amp; desc.configurable
  &amp;&amp; !desc.enumerable);</div>}
```
###present in Object.getOwnPropertyNames()
          
```
function(){
              <div class="code">return Object.getOwnPropertyNames(Object.prototype).indexOf('__proto__') &gt; -1;</div>}
```
###get prototype
          
```
function(){
              <div class="code">var A = function(){};
return (new A()).__proto__ === A.prototype;</div>}
```
###set prototype
          
```
function(){
              <div class="code">var o = {};
o.__proto__ = Array.prototype;
return o instanceof Array;</div>}
```
###absent from Object.create(null)
          
```
function(){
              <div class="code">var o = Object.create(null), p = {};
o.__proto__ = p;
return Object.getPrototypeOf(o) !== p;</div>}
```
###present in hasOwnProperty()
          
```
function(){
              <div class="code">return Object.prototype.hasOwnProperty('__proto__');</div>}
```
###correct property descriptor
          
```
function(){
              <div class="code">var desc = Object.getOwnPropertyDescriptor(Object.prototype,&quot;__proto__&quot;);
var A = function(){};

return (desc
  &amp;&amp; &quot;get&quot; in desc
  &amp;&amp; &quot;set&quot; in desc
  &amp;&amp; desc.configurable
  &amp;&amp; !desc.enumerable);</div>}
```
###present in Object.getOwnPropertyNames()
          
```
function(){
              <div class="code">return Object.getOwnPropertyNames(Object.prototype).indexOf('__proto__') &gt; -1;</div>}
```
###get prototype
          
```
function(){
              <div class="code">var A = function(){};
return (new A()).__proto__ === A.prototype;</div>}
```
###set prototype
          
```
function(){
              <div class="code">var o = {};
o.__proto__ = Array.prototype;
return o instanceof Array;</div>}
```
###absent from Object.create(null)
          
```
function(){
              <div class="code">var o = Object.create(null), p = {};
o.__proto__ = p;
return Object.getPrototypeOf(o) !== p;</div>}
```
###present in hasOwnProperty()
          
```
function(){
              <div class="code">return Object.prototype.hasOwnProperty('__proto__');</div>}
```
###correct property descriptor
          
```
function(){
              <div class="code">var desc = Object.getOwnPropertyDescriptor(Object.prototype,&quot;__proto__&quot;);
var A = function(){};

return (desc
  &amp;&amp; &quot;get&quot; in desc
  &amp;&amp; &quot;set&quot; in desc
  &amp;&amp; desc.configurable
  &amp;&amp; !desc.enumerable);</div>}
```
###present in Object.getOwnPropertyNames()
          
```
function(){
              <div class="code">return Object.getOwnPropertyNames(Object.prototype).indexOf('__proto__') &gt; -1;</div>}
```
###get prototype
          
```
function(){
              <div class="code">var A = function(){};
return (new A()).__proto__ === A.prototype;</div>}
```
###set prototype
          
```
function(){
              <div class="code">var o = {};
o.__proto__ = Array.prototype;
return o instanceof Array;</div>}
```
###absent from Object.create(null)
          
```
function(){
              <div class="code">var o = Object.create(null), p = {};
o.__proto__ = p;
return Object.getPrototypeOf(o) !== p;</div>}
```
###present in hasOwnProperty()
          
```
function(){
              <div class="code">return Object.prototype.hasOwnProperty('__proto__');</div>}
```
###correct property descriptor
          
```
function(){
              <div class="code">var desc = Object.getOwnPropertyDescriptor(Object.prototype,&quot;__proto__&quot;);
var A = function(){};

return (desc
  &amp;&amp; &quot;get&quot; in desc
  &amp;&amp; &quot;set&quot; in desc
  &amp;&amp; desc.configurable
  &amp;&amp; !desc.enumerable);</div>}
```
###present in Object.getOwnPropertyNames()
          
```
function(){
              <div class="code">return Object.getOwnPropertyNames(Object.prototype).indexOf('__proto__') &gt; -1;</div>}
```
###get prototype
          
```
function(){
              <div class="code">var A = function(){};
return (new A()).__proto__ === A.prototype;</div>}
```
###set prototype
          
```
function(){
              <div class="code">var o = {};
o.__proto__ = Array.prototype;
return o instanceof Array;</div>}
```
###absent from Object.create(null)
          
```
function(){
              <div class="code">var o = Object.create(null), p = {};
o.__proto__ = p;
return Object.getPrototypeOf(o) !== p;</div>}
```
###present in hasOwnProperty()
          
```
function(){
              <div class="code">return Object.prototype.hasOwnProperty('__proto__');</div>}
```
###correct property descriptor
          
```
function(){
              <div class="code">var desc = Object.getOwnPropertyDescriptor(Object.prototype,&quot;__proto__&quot;);
var A = function(){};

return (desc
  &amp;&amp; &quot;get&quot; in desc
  &amp;&amp; &quot;set&quot; in desc
  &amp;&amp; desc.configurable
  &amp;&amp; !desc.enumerable);</div>}
```
###present in Object.getOwnPropertyNames()
          
```
function(){
              <div class="code">return Object.getOwnPropertyNames(Object.prototype).indexOf('__proto__') &gt; -1;</div>}
```
###get prototype
          
```
function(){
              <div class="code">var A = function(){};
return (new A()).__proto__ === A.prototype;</div>}
```
###set prototype
          
```
function(){
              <div class="code">var o = {};
o.__proto__ = Array.prototype;
return o instanceof Array;</div>}
```
###absent from Object.create(null)
          
```
function(){
              <div class="code">var o = Object.create(null), p = {};
o.__proto__ = p;
return Object.getPrototypeOf(o) !== p;</div>}
```
###present in hasOwnProperty()
          
```
function(){
              <div class="code">return Object.prototype.hasOwnProperty('__proto__');</div>}
```
###correct property descriptor
          
```
function(){
              <div class="code">var desc = Object.getOwnPropertyDescriptor(Object.prototype,&quot;__proto__&quot;);
var A = function(){};

return (desc
  &amp;&amp; &quot;get&quot; in desc
  &amp;&amp; &quot;set&quot; in desc
  &amp;&amp; desc.configurable
  &amp;&amp; !desc.enumerable);</div>}
```
###present in Object.getOwnPropertyNames()
          
```
function(){
              <div class="code">return Object.getOwnPropertyNames(Object.prototype).indexOf('__proto__') &gt; -1;</div>}
```
###get prototype
          
```
function(){
              <div class="code">var A = function(){};
return (new A()).__proto__ === A.prototype;</div>}
```
###set prototype
          
```
function(){
              <div class="code">var o = {};
o.__proto__ = Array.prototype;
return o instanceof Array;</div>}
```
###absent from Object.create(null)
          
```
function(){
              <div class="code">var o = Object.create(null), p = {};
o.__proto__ = p;
return Object.getPrototypeOf(o) !== p;</div>}
```
###present in hasOwnProperty()
          
```
function(){
              <div class="code">return Object.prototype.hasOwnProperty('__proto__');</div>}
```
###correct property descriptor
          
```
function(){
              <div class="code">var desc = Object.getOwnPropertyDescriptor(Object.prototype,&quot;__proto__&quot;);
var A = function(){};

return (desc
  &amp;&amp; &quot;get&quot; in desc
  &amp;&amp; &quot;set&quot; in desc
  &amp;&amp; desc.configurable
  &amp;&amp; !desc.enumerable);</div>}
```
###present in Object.getOwnPropertyNames()
          
```
function(){
              <div class="code">return Object.getOwnPropertyNames(Object.prototype).indexOf('__proto__') &gt; -1;</div>}
```
###get prototype
          
```
function(){
              <div class="code">var A = function(){};
return (new A()).__proto__ === A.prototype;</div>}
```
###set prototype
          
```
function(){
              <div class="code">var o = {};
o.__proto__ = Array.prototype;
return o instanceof Array;</div>}
```
###absent from Object.create(null)
          
```
function(){
              <div class="code">var o = Object.create(null), p = {};
o.__proto__ = p;
return Object.getPrototypeOf(o) !== p;</div>}
```
###present in hasOwnProperty()
          
```
function(){
              <div class="code">return Object.prototype.hasOwnProperty('__proto__');</div>}
```
###correct property descriptor
          
```
function(){
              <div class="code">var desc = Object.getOwnPropertyDescriptor(Object.prototype,&quot;__proto__&quot;);
var A = function(){};

return (desc
  &amp;&amp; &quot;get&quot; in desc
  &amp;&amp; &quot;set&quot; in desc
  &amp;&amp; desc.configurable
  &amp;&amp; !desc.enumerable);</div>}
```
###present in Object.getOwnPropertyNames()
          
```
function(){
              <div class="code">return Object.getOwnPropertyNames(Object.prototype).indexOf('__proto__') &gt; -1;</div>}
```
###get prototype
          
```
function(){
              <div class="code">var A = function(){};
return (new A()).__proto__ === A.prototype;</div>}
```
###set prototype
          
```
function(){
              <div class="code">var o = {};
o.__proto__ = Array.prototype;
return o instanceof Array;</div>}
```
###absent from Object.create(null)
          
```
function(){
              <div class="code">var o = Object.create(null), p = {};
o.__proto__ = p;
return Object.getPrototypeOf(o) !== p;</div>}
```
###present in hasOwnProperty()
          
```
function(){
              <div class="code">return Object.prototype.hasOwnProperty('__proto__');</div>}
```
###correct property descriptor
          
```
function(){
              <div class="code">var desc = Object.getOwnPropertyDescriptor(Object.prototype,&quot;__proto__&quot;);
var A = function(){};

return (desc
  &amp;&amp; &quot;get&quot; in desc
  &amp;&amp; &quot;set&quot; in desc
  &amp;&amp; desc.configurable
  &amp;&amp; !desc.enumerable);</div>}
```
###present in Object.getOwnPropertyNames()
          
```
function(){
              <div class="code">return Object.getOwnPropertyNames(Object.prototype).indexOf('__proto__') &gt; -1;</div>}
```
###get prototype
          
```
function(){
              <div class="code">var A = function(){};
return (new A()).__proto__ === A.prototype;</div>}
```
###set prototype
          
```
function(){
              <div class="code">var o = {};
o.__proto__ = Array.prototype;
return o instanceof Array;</div>}
```
###absent from Object.create(null)
          
```
function(){
              <div class="code">var o = Object.create(null), p = {};
o.__proto__ = p;
return Object.getPrototypeOf(o) !== p;</div>}
```
###present in hasOwnProperty()
          
```
function(){
              <div class="code">return Object.prototype.hasOwnProperty('__proto__');</div>}
```
###correct property descriptor
          
```
function(){
              <div class="code">var desc = Object.getOwnPropertyDescriptor(Object.prototype,&quot;__proto__&quot;);
var A = function(){};

return (desc
  &amp;&amp; &quot;get&quot; in desc
  &amp;&amp; &quot;set&quot; in desc
  &amp;&amp; desc.configurable
  &amp;&amp; !desc.enumerable);</div>}
```
###present in Object.getOwnPropertyNames()
          
```
function(){
              <div class="code">return Object.getOwnPropertyNames(Object.prototype).indexOf('__proto__') &gt; -1;</div>}
```
###get prototype
          
```
function(){
              <div class="code">var A = function(){};
return (new A()).__proto__ === A.prototype;</div>}
```
###set prototype
          
```
function(){
              <div class="code">var o = {};
o.__proto__ = Array.prototype;
return o instanceof Array;</div>}
```
###absent from Object.create(null)
          
```
function(){
              <div class="code">var o = Object.create(null), p = {};
o.__proto__ = p;
return Object.getPrototypeOf(o) !== p;</div>}
```
###present in hasOwnProperty()
          
```
function(){
              <div class="code">return Object.prototype.hasOwnProperty('__proto__');</div>}
```
###correct property descriptor
          
```
function(){
              <div class="code">var desc = Object.getOwnPropertyDescriptor(Object.prototype,&quot;__proto__&quot;);
var A = function(){};

return (desc
  &amp;&amp; &quot;get&quot; in desc
  &amp;&amp; &quot;set&quot; in desc
  &amp;&amp; desc.configurable
  &amp;&amp; !desc.enumerable);</div>}
```
###present in Object.getOwnPropertyNames()
          
```
function(){
              <div class="code">return Object.getOwnPropertyNames(Object.prototype).indexOf('__proto__') &gt; -1;</div>}
```
###get prototype
          
```
function(){
              <div class="code">var A = function(){};
return (new A()).__proto__ === A.prototype;</div>}
```
###set prototype
          
```
function(){
              <div class="code">var o = {};
o.__proto__ = Array.prototype;
return o instanceof Array;</div>}
```
###absent from Object.create(null)
          
```
function(){
              <div class="code">var o = Object.create(null), p = {};
o.__proto__ = p;
return Object.getPrototypeOf(o) !== p;</div>}
```
###present in hasOwnProperty()
          
```
function(){
              <div class="code">return Object.prototype.hasOwnProperty('__proto__');</div>}
```
###correct property descriptor
          
```
function(){
              <div class="code">var desc = Object.getOwnPropertyDescriptor(Object.prototype,&quot;__proto__&quot;);
var A = function(){};

return (desc
  &amp;&amp; &quot;get&quot; in desc
  &amp;&amp; &quot;set&quot; in desc
  &amp;&amp; desc.configurable
  &amp;&amp; !desc.enumerable);</div>}
```
###present in Object.getOwnPropertyNames()
          
```
function(){
              <div class="code">return Object.getOwnPropertyNames(Object.prototype).indexOf('__proto__') &gt; -1;</div>}
```
###get prototype
          
```
function(){
              <div class="code">var A = function(){};
return (new A()).__proto__ === A.prototype;</div>}
```
###set prototype
          
```
function(){
              <div class="code">var o = {};
o.__proto__ = Array.prototype;
return o instanceof Array;</div>}
```
###absent from Object.create(null)
          
```
function(){
              <div class="code">var o = Object.create(null), p = {};
o.__proto__ = p;
return Object.getPrototypeOf(o) !== p;</div>}
```
###present in hasOwnProperty()
          
```
function(){
              <div class="code">return Object.prototype.hasOwnProperty('__proto__');</div>}
```
###correct property descriptor
          
```
function(){
              <div class="code">var desc = Object.getOwnPropertyDescriptor(Object.prototype,&quot;__proto__&quot;);
var A = function(){};

return (desc
  &amp;&amp; &quot;get&quot; in desc
  &amp;&amp; &quot;set&quot; in desc
  &amp;&amp; desc.configurable
  &amp;&amp; !desc.enumerable);</div>}
```
###present in Object.getOwnPropertyNames()
          
```
function(){
              <div class="code">return Object.getOwnPropertyNames(Object.prototype).indexOf('__proto__') &gt; -1;</div>}
```
###get prototype
          
```
function(){
              <div class="code">var A = function(){};
return (new A()).__proto__ === A.prototype;</div>}
```
###set prototype
          
```
function(){
              <div class="code">var o = {};
o.__proto__ = Array.prototype;
return o instanceof Array;</div>}
```
###absent from Object.create(null)
          
```
function(){
              <div class="code">var o = Object.create(null), p = {};
o.__proto__ = p;
return Object.getPrototypeOf(o) !== p;</div>}
```
###present in hasOwnProperty()
          
```
function(){
              <div class="code">return Object.prototype.hasOwnProperty('__proto__');</div>}
```
###correct property descriptor
          
```
function(){
              <div class="code">var desc = Object.getOwnPropertyDescriptor(Object.prototype,&quot;__proto__&quot;);
var A = function(){};

return (desc
  &amp;&amp; &quot;get&quot; in desc
  &amp;&amp; &quot;set&quot; in desc
  &amp;&amp; desc.configurable
  &amp;&amp; !desc.enumerable);</div>}
```
###present in Object.getOwnPropertyNames()
          
```
function(){
              <div class="code">return Object.getOwnPropertyNames(Object.prototype).indexOf('__proto__') &gt; -1;</div>}
```
###get prototype
          
```
function(){
              <div class="code">var A = function(){};
return (new A()).__proto__ === A.prototype;</div>}
```
###set prototype
          
```
function(){
              <div class="code">var o = {};
o.__proto__ = Array.prototype;
return o instanceof Array;</div>}
```
###absent from Object.create(null)
          
```
function(){
              <div class="code">var o = Object.create(null), p = {};
o.__proto__ = p;
return Object.getPrototypeOf(o) !== p;</div>}
```
###present in hasOwnProperty()
          
```
function(){
              <div class="code">return Object.prototype.hasOwnProperty('__proto__');</div>}
```
###correct property descriptor
          
```
function(){
              <div class="code">var desc = Object.getOwnPropertyDescriptor(Object.prototype,&quot;__proto__&quot;);
var A = function(){};

return (desc
  &amp;&amp; &quot;get&quot; in desc
  &amp;&amp; &quot;set&quot; in desc
  &amp;&amp; desc.configurable
  &amp;&amp; !desc.enumerable);</div>}
```
###present in Object.getOwnPropertyNames()
          
```
function(){
              <div class="code">return Object.getOwnPropertyNames(Object.prototype).indexOf('__proto__') &gt; -1;</div>}
```
