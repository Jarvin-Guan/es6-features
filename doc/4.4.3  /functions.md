###block-level function declaration
          
```
function(){
              <div class="code">'use strict';
function f() { return 1; }
{
  function f() { return 2; }
}
return f() === 1;</div>}
```
###0 parameters
          
```
function(){
              <div class="code">return (() =&gt; 5)() === 5;</div>}
```
###1 parameter, no brackets
          
```
function(){
              <div class="code">var b = x =&gt; x + &quot;foo&quot;;
return (b(&quot;fee fie foe &quot;) === &quot;fee fie foe foo&quot;);</div>}
```
###multiple parameters
          
```
function(){
              <div class="code">var c = (v, w, x, y, z) =&gt; &quot;&quot; + v + w + x + y + z;
return (c(6, 5, 4, 3, 2) === &quot;65432&quot;);</div>}
```
###lexical &quot;this&quot; binding
          
```
function(){
              <div class="code">var d = { x : &quot;bar&quot;, y : function() { return z =&gt; this.x + z; }}.y();
var e = { x : &quot;baz&quot;, y : d };
return d(&quot;ley&quot;) === &quot;barley&quot; &amp;&amp; e.y(&quot;ley&quot;) === &quot;barley&quot;;</div>}
```
###&quot;this&quot; unchanged by call or apply
          
```
function(){
              <div class="code">var d = { x : &quot;foo&quot;, y : function() { return () =&gt; this.x; }};
var e = { x : &quot;bar&quot; };
return d.y().call(e) === &quot;foo&quot; &amp;&amp; d.y().apply(e) === &quot;foo&quot;;</div>}
```
###can't be bound, can be curried
          
```
function(){
              <div class="code">var d = { x : &quot;bar&quot;, y : function() { return z =&gt; this.x + z; }};
var e = { x : &quot;baz&quot; };
return d.y().bind(e, &quot;ley&quot;)() === &quot;barley&quot;;</div>}
```
###lexical &quot;arguments&quot; binding
          
```
function(){
              <div class="code">var f = (function() { return z =&gt; arguments[0]; }(5));
return f(6) === 5;</div>}
```
###no line break between params and &lt;code&gt;=&gt;&lt;/code&gt;
          
```
function(){
              <div class="code">return (() =&gt; {
  try { Function(&quot;x\n =&gt; 2&quot;)(); } catch(e) { return true; }
})();</div>}
```
###no &quot;prototype&quot; property
          
```
function(){
              <div class="code">var a = () =&gt; 5;
return !a.hasOwnProperty(&quot;prototype&quot;);</div>}
```
###block-level function declaration
          
```
function(){
              <div class="code">'use strict';
function f() { return 1; }
{
  function f() { return 2; }
}
return f() === 1;</div>}
```
###0 parameters
          
```
function(){
              <div class="code">return (() =&gt; 5)() === 5;</div>}
```
###1 parameter, no brackets
          
```
function(){
              <div class="code">var b = x =&gt; x + &quot;foo&quot;;
return (b(&quot;fee fie foe &quot;) === &quot;fee fie foe foo&quot;);</div>}
```
###multiple parameters
          
```
function(){
              <div class="code">var c = (v, w, x, y, z) =&gt; &quot;&quot; + v + w + x + y + z;
return (c(6, 5, 4, 3, 2) === &quot;65432&quot;);</div>}
```
###lexical &quot;this&quot; binding
          
```
function(){
              <div class="code">var d = { x : &quot;bar&quot;, y : function() { return z =&gt; this.x + z; }}.y();
var e = { x : &quot;baz&quot;, y : d };
return d(&quot;ley&quot;) === &quot;barley&quot; &amp;&amp; e.y(&quot;ley&quot;) === &quot;barley&quot;;</div>}
```
###&quot;this&quot; unchanged by call or apply
          
```
function(){
              <div class="code">var d = { x : &quot;foo&quot;, y : function() { return () =&gt; this.x; }};
var e = { x : &quot;bar&quot; };
return d.y().call(e) === &quot;foo&quot; &amp;&amp; d.y().apply(e) === &quot;foo&quot;;</div>}
```
###can't be bound, can be curried
          
```
function(){
              <div class="code">var d = { x : &quot;bar&quot;, y : function() { return z =&gt; this.x + z; }};
var e = { x : &quot;baz&quot; };
return d.y().bind(e, &quot;ley&quot;)() === &quot;barley&quot;;</div>}
```
###lexical &quot;arguments&quot; binding
          
```
function(){
              <div class="code">var f = (function() { return z =&gt; arguments[0]; }(5));
return f(6) === 5;</div>}
```
###no line break between params and &lt;code&gt;=&gt;&lt;/code&gt;
          
```
function(){
              <div class="code">return (() =&gt; {
  try { Function(&quot;x\n =&gt; 2&quot;)(); } catch(e) { return true; }
})();</div>}
```
###no &quot;prototype&quot; property
          
```
function(){
              <div class="code">var a = () =&gt; 5;
return !a.hasOwnProperty(&quot;prototype&quot;);</div>}
```
###block-level function declaration
          
```
function(){
              <div class="code">'use strict';
function f() { return 1; }
{
  function f() { return 2; }
}
return f() === 1;</div>}
```
###0 parameters
          
```
function(){
              <div class="code">return (() =&gt; 5)() === 5;</div>}
```
###1 parameter, no brackets
          
```
function(){
              <div class="code">var b = x =&gt; x + &quot;foo&quot;;
return (b(&quot;fee fie foe &quot;) === &quot;fee fie foe foo&quot;);</div>}
```
###multiple parameters
          
```
function(){
              <div class="code">var c = (v, w, x, y, z) =&gt; &quot;&quot; + v + w + x + y + z;
return (c(6, 5, 4, 3, 2) === &quot;65432&quot;);</div>}
```
###lexical &quot;this&quot; binding
          
```
function(){
              <div class="code">var d = { x : &quot;bar&quot;, y : function() { return z =&gt; this.x + z; }}.y();
var e = { x : &quot;baz&quot;, y : d };
return d(&quot;ley&quot;) === &quot;barley&quot; &amp;&amp; e.y(&quot;ley&quot;) === &quot;barley&quot;;</div>}
```
###&quot;this&quot; unchanged by call or apply
          
```
function(){
              <div class="code">var d = { x : &quot;foo&quot;, y : function() { return () =&gt; this.x; }};
var e = { x : &quot;bar&quot; };
return d.y().call(e) === &quot;foo&quot; &amp;&amp; d.y().apply(e) === &quot;foo&quot;;</div>}
```
###can't be bound, can be curried
          
```
function(){
              <div class="code">var d = { x : &quot;bar&quot;, y : function() { return z =&gt; this.x + z; }};
var e = { x : &quot;baz&quot; };
return d.y().bind(e, &quot;ley&quot;)() === &quot;barley&quot;;</div>}
```
###lexical &quot;arguments&quot; binding
          
```
function(){
              <div class="code">var f = (function() { return z =&gt; arguments[0]; }(5));
return f(6) === 5;</div>}
```
###no line break between params and &lt;code&gt;=&gt;&lt;/code&gt;
          
```
function(){
              <div class="code">return (() =&gt; {
  try { Function(&quot;x\n =&gt; 2&quot;)(); } catch(e) { return true; }
})();</div>}
```
###no &quot;prototype&quot; property
          
```
function(){
              <div class="code">var a = () =&gt; 5;
return !a.hasOwnProperty(&quot;prototype&quot;);</div>}
```
###block-level function declaration
          
```
function(){
              <div class="code">'use strict';
function f() { return 1; }
{
  function f() { return 2; }
}
return f() === 1;</div>}
```
###0 parameters
          
```
function(){
              <div class="code">return (() =&gt; 5)() === 5;</div>}
```
###1 parameter, no brackets
          
```
function(){
              <div class="code">var b = x =&gt; x + &quot;foo&quot;;
return (b(&quot;fee fie foe &quot;) === &quot;fee fie foe foo&quot;);</div>}
```
###multiple parameters
          
```
function(){
              <div class="code">var c = (v, w, x, y, z) =&gt; &quot;&quot; + v + w + x + y + z;
return (c(6, 5, 4, 3, 2) === &quot;65432&quot;);</div>}
```
###lexical &quot;this&quot; binding
          
```
function(){
              <div class="code">var d = { x : &quot;bar&quot;, y : function() { return z =&gt; this.x + z; }}.y();
var e = { x : &quot;baz&quot;, y : d };
return d(&quot;ley&quot;) === &quot;barley&quot; &amp;&amp; e.y(&quot;ley&quot;) === &quot;barley&quot;;</div>}
```
###&quot;this&quot; unchanged by call or apply
          
```
function(){
              <div class="code">var d = { x : &quot;foo&quot;, y : function() { return () =&gt; this.x; }};
var e = { x : &quot;bar&quot; };
return d.y().call(e) === &quot;foo&quot; &amp;&amp; d.y().apply(e) === &quot;foo&quot;;</div>}
```
###can't be bound, can be curried
          
```
function(){
              <div class="code">var d = { x : &quot;bar&quot;, y : function() { return z =&gt; this.x + z; }};
var e = { x : &quot;baz&quot; };
return d.y().bind(e, &quot;ley&quot;)() === &quot;barley&quot;;</div>}
```
###lexical &quot;arguments&quot; binding
          
```
function(){
              <div class="code">var f = (function() { return z =&gt; arguments[0]; }(5));
return f(6) === 5;</div>}
```
###no line break between params and &lt;code&gt;=&gt;&lt;/code&gt;
          
```
function(){
              <div class="code">return (() =&gt; {
  try { Function(&quot;x\n =&gt; 2&quot;)(); } catch(e) { return true; }
})();</div>}
```
###no &quot;prototype&quot; property
          
```
function(){
              <div class="code">var a = () =&gt; 5;
return !a.hasOwnProperty(&quot;prototype&quot;);</div>}
```
###block-level function declaration
          
```
function(){
              <div class="code">'use strict';
function f() { return 1; }
{
  function f() { return 2; }
}
return f() === 1;</div>}
```
###0 parameters
          
```
function(){
              <div class="code">return (() =&gt; 5)() === 5;</div>}
```
###1 parameter, no brackets
          
```
function(){
              <div class="code">var b = x =&gt; x + &quot;foo&quot;;
return (b(&quot;fee fie foe &quot;) === &quot;fee fie foe foo&quot;);</div>}
```
###multiple parameters
          
```
function(){
              <div class="code">var c = (v, w, x, y, z) =&gt; &quot;&quot; + v + w + x + y + z;
return (c(6, 5, 4, 3, 2) === &quot;65432&quot;);</div>}
```
###lexical &quot;this&quot; binding
          
```
function(){
              <div class="code">var d = { x : &quot;bar&quot;, y : function() { return z =&gt; this.x + z; }}.y();
var e = { x : &quot;baz&quot;, y : d };
return d(&quot;ley&quot;) === &quot;barley&quot; &amp;&amp; e.y(&quot;ley&quot;) === &quot;barley&quot;;</div>}
```
###&quot;this&quot; unchanged by call or apply
          
```
function(){
              <div class="code">var d = { x : &quot;foo&quot;, y : function() { return () =&gt; this.x; }};
var e = { x : &quot;bar&quot; };
return d.y().call(e) === &quot;foo&quot; &amp;&amp; d.y().apply(e) === &quot;foo&quot;;</div>}
```
###can't be bound, can be curried
          
```
function(){
              <div class="code">var d = { x : &quot;bar&quot;, y : function() { return z =&gt; this.x + z; }};
var e = { x : &quot;baz&quot; };
return d.y().bind(e, &quot;ley&quot;)() === &quot;barley&quot;;</div>}
```
###lexical &quot;arguments&quot; binding
          
```
function(){
              <div class="code">var f = (function() { return z =&gt; arguments[0]; }(5));
return f(6) === 5;</div>}
```
###no line break between params and &lt;code&gt;=&gt;&lt;/code&gt;
          
```
function(){
              <div class="code">return (() =&gt; {
  try { Function(&quot;x\n =&gt; 2&quot;)(); } catch(e) { return true; }
})();</div>}
```
###no &quot;prototype&quot; property
          
```
function(){
              <div class="code">var a = () =&gt; 5;
return !a.hasOwnProperty(&quot;prototype&quot;);</div>}
```
###block-level function declaration
          
```
function(){
              <div class="code">'use strict';
function f() { return 1; }
{
  function f() { return 2; }
}
return f() === 1;</div>}
```
###0 parameters
          
```
function(){
              <div class="code">return (() =&gt; 5)() === 5;</div>}
```
###1 parameter, no brackets
          
```
function(){
              <div class="code">var b = x =&gt; x + &quot;foo&quot;;
return (b(&quot;fee fie foe &quot;) === &quot;fee fie foe foo&quot;);</div>}
```
###multiple parameters
          
```
function(){
              <div class="code">var c = (v, w, x, y, z) =&gt; &quot;&quot; + v + w + x + y + z;
return (c(6, 5, 4, 3, 2) === &quot;65432&quot;);</div>}
```
###lexical &quot;this&quot; binding
          
```
function(){
              <div class="code">var d = { x : &quot;bar&quot;, y : function() { return z =&gt; this.x + z; }}.y();
var e = { x : &quot;baz&quot;, y : d };
return d(&quot;ley&quot;) === &quot;barley&quot; &amp;&amp; e.y(&quot;ley&quot;) === &quot;barley&quot;;</div>}
```
###&quot;this&quot; unchanged by call or apply
          
```
function(){
              <div class="code">var d = { x : &quot;foo&quot;, y : function() { return () =&gt; this.x; }};
var e = { x : &quot;bar&quot; };
return d.y().call(e) === &quot;foo&quot; &amp;&amp; d.y().apply(e) === &quot;foo&quot;;</div>}
```
###can't be bound, can be curried
          
```
function(){
              <div class="code">var d = { x : &quot;bar&quot;, y : function() { return z =&gt; this.x + z; }};
var e = { x : &quot;baz&quot; };
return d.y().bind(e, &quot;ley&quot;)() === &quot;barley&quot;;</div>}
```
###lexical &quot;arguments&quot; binding
          
```
function(){
              <div class="code">var f = (function() { return z =&gt; arguments[0]; }(5));
return f(6) === 5;</div>}
```
###no line break between params and &lt;code&gt;=&gt;&lt;/code&gt;
          
```
function(){
              <div class="code">return (() =&gt; {
  try { Function(&quot;x\n =&gt; 2&quot;)(); } catch(e) { return true; }
})();</div>}
```
###no &quot;prototype&quot; property
          
```
function(){
              <div class="code">var a = () =&gt; 5;
return !a.hasOwnProperty(&quot;prototype&quot;);</div>}
```
###block-level function declaration
          
```
function(){
              <div class="code">'use strict';
function f() { return 1; }
{
  function f() { return 2; }
}
return f() === 1;</div>}
```
###0 parameters
          
```
function(){
              <div class="code">return (() =&gt; 5)() === 5;</div>}
```
###1 parameter, no brackets
          
```
function(){
              <div class="code">var b = x =&gt; x + &quot;foo&quot;;
return (b(&quot;fee fie foe &quot;) === &quot;fee fie foe foo&quot;);</div>}
```
###multiple parameters
          
```
function(){
              <div class="code">var c = (v, w, x, y, z) =&gt; &quot;&quot; + v + w + x + y + z;
return (c(6, 5, 4, 3, 2) === &quot;65432&quot;);</div>}
```
###lexical &quot;this&quot; binding
          
```
function(){
              <div class="code">var d = { x : &quot;bar&quot;, y : function() { return z =&gt; this.x + z; }}.y();
var e = { x : &quot;baz&quot;, y : d };
return d(&quot;ley&quot;) === &quot;barley&quot; &amp;&amp; e.y(&quot;ley&quot;) === &quot;barley&quot;;</div>}
```
###&quot;this&quot; unchanged by call or apply
          
```
function(){
              <div class="code">var d = { x : &quot;foo&quot;, y : function() { return () =&gt; this.x; }};
var e = { x : &quot;bar&quot; };
return d.y().call(e) === &quot;foo&quot; &amp;&amp; d.y().apply(e) === &quot;foo&quot;;</div>}
```
###can't be bound, can be curried
          
```
function(){
              <div class="code">var d = { x : &quot;bar&quot;, y : function() { return z =&gt; this.x + z; }};
var e = { x : &quot;baz&quot; };
return d.y().bind(e, &quot;ley&quot;)() === &quot;barley&quot;;</div>}
```
###lexical &quot;arguments&quot; binding
          
```
function(){
              <div class="code">var f = (function() { return z =&gt; arguments[0]; }(5));
return f(6) === 5;</div>}
```
###no line break between params and &lt;code&gt;=&gt;&lt;/code&gt;
          
```
function(){
              <div class="code">return (() =&gt; {
  try { Function(&quot;x\n =&gt; 2&quot;)(); } catch(e) { return true; }
})();</div>}
```
###no &quot;prototype&quot; property
          
```
function(){
              <div class="code">var a = () =&gt; 5;
return !a.hasOwnProperty(&quot;prototype&quot;);</div>}
```
###block-level function declaration
          
```
function(){
              <div class="code">'use strict';
function f() { return 1; }
{
  function f() { return 2; }
}
return f() === 1;</div>}
```
###0 parameters
          
```
function(){
              <div class="code">return (() =&gt; 5)() === 5;</div>}
```
###1 parameter, no brackets
          
```
function(){
              <div class="code">var b = x =&gt; x + &quot;foo&quot;;
return (b(&quot;fee fie foe &quot;) === &quot;fee fie foe foo&quot;);</div>}
```
###multiple parameters
          
```
function(){
              <div class="code">var c = (v, w, x, y, z) =&gt; &quot;&quot; + v + w + x + y + z;
return (c(6, 5, 4, 3, 2) === &quot;65432&quot;);</div>}
```
###lexical &quot;this&quot; binding
          
```
function(){
              <div class="code">var d = { x : &quot;bar&quot;, y : function() { return z =&gt; this.x + z; }}.y();
var e = { x : &quot;baz&quot;, y : d };
return d(&quot;ley&quot;) === &quot;barley&quot; &amp;&amp; e.y(&quot;ley&quot;) === &quot;barley&quot;;</div>}
```
###&quot;this&quot; unchanged by call or apply
          
```
function(){
              <div class="code">var d = { x : &quot;foo&quot;, y : function() { return () =&gt; this.x; }};
var e = { x : &quot;bar&quot; };
return d.y().call(e) === &quot;foo&quot; &amp;&amp; d.y().apply(e) === &quot;foo&quot;;</div>}
```
###can't be bound, can be curried
          
```
function(){
              <div class="code">var d = { x : &quot;bar&quot;, y : function() { return z =&gt; this.x + z; }};
var e = { x : &quot;baz&quot; };
return d.y().bind(e, &quot;ley&quot;)() === &quot;barley&quot;;</div>}
```
###lexical &quot;arguments&quot; binding
          
```
function(){
              <div class="code">var f = (function() { return z =&gt; arguments[0]; }(5));
return f(6) === 5;</div>}
```
###no line break between params and &lt;code&gt;=&gt;&lt;/code&gt;
          
```
function(){
              <div class="code">return (() =&gt; {
  try { Function(&quot;x\n =&gt; 2&quot;)(); } catch(e) { return true; }
})();</div>}
```
###no &quot;prototype&quot; property
          
```
function(){
              <div class="code">var a = () =&gt; 5;
return !a.hasOwnProperty(&quot;prototype&quot;);</div>}
```
###block-level function declaration
          
```
function(){
              <div class="code">'use strict';
function f() { return 1; }
{
  function f() { return 2; }
}
return f() === 1;</div>}
```
###0 parameters
          
```
function(){
              <div class="code">return (() =&gt; 5)() === 5;</div>}
```
###1 parameter, no brackets
          
```
function(){
              <div class="code">var b = x =&gt; x + &quot;foo&quot;;
return (b(&quot;fee fie foe &quot;) === &quot;fee fie foe foo&quot;);</div>}
```
###multiple parameters
          
```
function(){
              <div class="code">var c = (v, w, x, y, z) =&gt; &quot;&quot; + v + w + x + y + z;
return (c(6, 5, 4, 3, 2) === &quot;65432&quot;);</div>}
```
###lexical &quot;this&quot; binding
          
```
function(){
              <div class="code">var d = { x : &quot;bar&quot;, y : function() { return z =&gt; this.x + z; }}.y();
var e = { x : &quot;baz&quot;, y : d };
return d(&quot;ley&quot;) === &quot;barley&quot; &amp;&amp; e.y(&quot;ley&quot;) === &quot;barley&quot;;</div>}
```
###&quot;this&quot; unchanged by call or apply
          
```
function(){
              <div class="code">var d = { x : &quot;foo&quot;, y : function() { return () =&gt; this.x; }};
var e = { x : &quot;bar&quot; };
return d.y().call(e) === &quot;foo&quot; &amp;&amp; d.y().apply(e) === &quot;foo&quot;;</div>}
```
###can't be bound, can be curried
          
```
function(){
              <div class="code">var d = { x : &quot;bar&quot;, y : function() { return z =&gt; this.x + z; }};
var e = { x : &quot;baz&quot; };
return d.y().bind(e, &quot;ley&quot;)() === &quot;barley&quot;;</div>}
```
###lexical &quot;arguments&quot; binding
          
```
function(){
              <div class="code">var f = (function() { return z =&gt; arguments[0]; }(5));
return f(6) === 5;</div>}
```
###no line break between params and &lt;code&gt;=&gt;&lt;/code&gt;
          
```
function(){
              <div class="code">return (() =&gt; {
  try { Function(&quot;x\n =&gt; 2&quot;)(); } catch(e) { return true; }
})();</div>}
```
###no &quot;prototype&quot; property
          
```
function(){
              <div class="code">var a = () =&gt; 5;
return !a.hasOwnProperty(&quot;prototype&quot;);</div>}
```
###block-level function declaration
          
```
function(){
              <div class="code">'use strict';
function f() { return 1; }
{
  function f() { return 2; }
}
return f() === 1;</div>}
```
###0 parameters
          
```
function(){
              <div class="code">return (() =&gt; 5)() === 5;</div>}
```
###1 parameter, no brackets
          
```
function(){
              <div class="code">var b = x =&gt; x + &quot;foo&quot;;
return (b(&quot;fee fie foe &quot;) === &quot;fee fie foe foo&quot;);</div>}
```
###multiple parameters
          
```
function(){
              <div class="code">var c = (v, w, x, y, z) =&gt; &quot;&quot; + v + w + x + y + z;
return (c(6, 5, 4, 3, 2) === &quot;65432&quot;);</div>}
```
###lexical &quot;this&quot; binding
          
```
function(){
              <div class="code">var d = { x : &quot;bar&quot;, y : function() { return z =&gt; this.x + z; }}.y();
var e = { x : &quot;baz&quot;, y : d };
return d(&quot;ley&quot;) === &quot;barley&quot; &amp;&amp; e.y(&quot;ley&quot;) === &quot;barley&quot;;</div>}
```
###&quot;this&quot; unchanged by call or apply
          
```
function(){
              <div class="code">var d = { x : &quot;foo&quot;, y : function() { return () =&gt; this.x; }};
var e = { x : &quot;bar&quot; };
return d.y().call(e) === &quot;foo&quot; &amp;&amp; d.y().apply(e) === &quot;foo&quot;;</div>}
```
###can't be bound, can be curried
          
```
function(){
              <div class="code">var d = { x : &quot;bar&quot;, y : function() { return z =&gt; this.x + z; }};
var e = { x : &quot;baz&quot; };
return d.y().bind(e, &quot;ley&quot;)() === &quot;barley&quot;;</div>}
```
###lexical &quot;arguments&quot; binding
          
```
function(){
              <div class="code">var f = (function() { return z =&gt; arguments[0]; }(5));
return f(6) === 5;</div>}
```
###no line break between params and &lt;code&gt;=&gt;&lt;/code&gt;
          
```
function(){
              <div class="code">return (() =&gt; {
  try { Function(&quot;x\n =&gt; 2&quot;)(); } catch(e) { return true; }
})();</div>}
```
###no &quot;prototype&quot; property
          
```
function(){
              <div class="code">var a = () =&gt; 5;
return !a.hasOwnProperty(&quot;prototype&quot;);</div>}
```
###block-level function declaration
          
```
function(){
              <div class="code">'use strict';
function f() { return 1; }
{
  function f() { return 2; }
}
return f() === 1;</div>}
```
###0 parameters
          
```
function(){
              <div class="code">return (() =&gt; 5)() === 5;</div>}
```
###1 parameter, no brackets
          
```
function(){
              <div class="code">var b = x =&gt; x + &quot;foo&quot;;
return (b(&quot;fee fie foe &quot;) === &quot;fee fie foe foo&quot;);</div>}
```
###multiple parameters
          
```
function(){
              <div class="code">var c = (v, w, x, y, z) =&gt; &quot;&quot; + v + w + x + y + z;
return (c(6, 5, 4, 3, 2) === &quot;65432&quot;);</div>}
```
###lexical &quot;this&quot; binding
          
```
function(){
              <div class="code">var d = { x : &quot;bar&quot;, y : function() { return z =&gt; this.x + z; }}.y();
var e = { x : &quot;baz&quot;, y : d };
return d(&quot;ley&quot;) === &quot;barley&quot; &amp;&amp; e.y(&quot;ley&quot;) === &quot;barley&quot;;</div>}
```
###&quot;this&quot; unchanged by call or apply
          
```
function(){
              <div class="code">var d = { x : &quot;foo&quot;, y : function() { return () =&gt; this.x; }};
var e = { x : &quot;bar&quot; };
return d.y().call(e) === &quot;foo&quot; &amp;&amp; d.y().apply(e) === &quot;foo&quot;;</div>}
```
###can't be bound, can be curried
          
```
function(){
              <div class="code">var d = { x : &quot;bar&quot;, y : function() { return z =&gt; this.x + z; }};
var e = { x : &quot;baz&quot; };
return d.y().bind(e, &quot;ley&quot;)() === &quot;barley&quot;;</div>}
```
###lexical &quot;arguments&quot; binding
          
```
function(){
              <div class="code">var f = (function() { return z =&gt; arguments[0]; }(5));
return f(6) === 5;</div>}
```
###no line break between params and &lt;code&gt;=&gt;&lt;/code&gt;
          
```
function(){
              <div class="code">return (() =&gt; {
  try { Function(&quot;x\n =&gt; 2&quot;)(); } catch(e) { return true; }
})();</div>}
```
###no &quot;prototype&quot; property
          
```
function(){
              <div class="code">var a = () =&gt; 5;
return !a.hasOwnProperty(&quot;prototype&quot;);</div>}
```
###block-level function declaration
          
```
function(){
              <div class="code">'use strict';
function f() { return 1; }
{
  function f() { return 2; }
}
return f() === 1;</div>}
```
###0 parameters
          
```
function(){
              <div class="code">return (() =&gt; 5)() === 5;</div>}
```
###1 parameter, no brackets
          
```
function(){
              <div class="code">var b = x =&gt; x + &quot;foo&quot;;
return (b(&quot;fee fie foe &quot;) === &quot;fee fie foe foo&quot;);</div>}
```
###multiple parameters
          
```
function(){
              <div class="code">var c = (v, w, x, y, z) =&gt; &quot;&quot; + v + w + x + y + z;
return (c(6, 5, 4, 3, 2) === &quot;65432&quot;);</div>}
```
###lexical &quot;this&quot; binding
          
```
function(){
              <div class="code">var d = { x : &quot;bar&quot;, y : function() { return z =&gt; this.x + z; }}.y();
var e = { x : &quot;baz&quot;, y : d };
return d(&quot;ley&quot;) === &quot;barley&quot; &amp;&amp; e.y(&quot;ley&quot;) === &quot;barley&quot;;</div>}
```
###&quot;this&quot; unchanged by call or apply
          
```
function(){
              <div class="code">var d = { x : &quot;foo&quot;, y : function() { return () =&gt; this.x; }};
var e = { x : &quot;bar&quot; };
return d.y().call(e) === &quot;foo&quot; &amp;&amp; d.y().apply(e) === &quot;foo&quot;;</div>}
```
###can't be bound, can be curried
          
```
function(){
              <div class="code">var d = { x : &quot;bar&quot;, y : function() { return z =&gt; this.x + z; }};
var e = { x : &quot;baz&quot; };
return d.y().bind(e, &quot;ley&quot;)() === &quot;barley&quot;;</div>}
```
###lexical &quot;arguments&quot; binding
          
```
function(){
              <div class="code">var f = (function() { return z =&gt; arguments[0]; }(5));
return f(6) === 5;</div>}
```
###no line break between params and &lt;code&gt;=&gt;&lt;/code&gt;
          
```
function(){
              <div class="code">return (() =&gt; {
  try { Function(&quot;x\n =&gt; 2&quot;)(); } catch(e) { return true; }
})();</div>}
```
###no &quot;prototype&quot; property
          
```
function(){
              <div class="code">var a = () =&gt; 5;
return !a.hasOwnProperty(&quot;prototype&quot;);</div>}
```
###block-level function declaration
          
```
function(){
              <div class="code">'use strict';
function f() { return 1; }
{
  function f() { return 2; }
}
return f() === 1;</div>}
```
###0 parameters
          
```
function(){
              <div class="code">return (() =&gt; 5)() === 5;</div>}
```
###1 parameter, no brackets
          
```
function(){
              <div class="code">var b = x =&gt; x + &quot;foo&quot;;
return (b(&quot;fee fie foe &quot;) === &quot;fee fie foe foo&quot;);</div>}
```
###multiple parameters
          
```
function(){
              <div class="code">var c = (v, w, x, y, z) =&gt; &quot;&quot; + v + w + x + y + z;
return (c(6, 5, 4, 3, 2) === &quot;65432&quot;);</div>}
```
###lexical &quot;this&quot; binding
          
```
function(){
              <div class="code">var d = { x : &quot;bar&quot;, y : function() { return z =&gt; this.x + z; }}.y();
var e = { x : &quot;baz&quot;, y : d };
return d(&quot;ley&quot;) === &quot;barley&quot; &amp;&amp; e.y(&quot;ley&quot;) === &quot;barley&quot;;</div>}
```
###&quot;this&quot; unchanged by call or apply
          
```
function(){
              <div class="code">var d = { x : &quot;foo&quot;, y : function() { return () =&gt; this.x; }};
var e = { x : &quot;bar&quot; };
return d.y().call(e) === &quot;foo&quot; &amp;&amp; d.y().apply(e) === &quot;foo&quot;;</div>}
```
###can't be bound, can be curried
          
```
function(){
              <div class="code">var d = { x : &quot;bar&quot;, y : function() { return z =&gt; this.x + z; }};
var e = { x : &quot;baz&quot; };
return d.y().bind(e, &quot;ley&quot;)() === &quot;barley&quot;;</div>}
```
###lexical &quot;arguments&quot; binding
          
```
function(){
              <div class="code">var f = (function() { return z =&gt; arguments[0]; }(5));
return f(6) === 5;</div>}
```
###no line break between params and &lt;code&gt;=&gt;&lt;/code&gt;
          
```
function(){
              <div class="code">return (() =&gt; {
  try { Function(&quot;x\n =&gt; 2&quot;)(); } catch(e) { return true; }
})();</div>}
```
###no &quot;prototype&quot; property
          
```
function(){
              <div class="code">var a = () =&gt; 5;
return !a.hasOwnProperty(&quot;prototype&quot;);</div>}
```
###block-level function declaration
          
```
function(){
              <div class="code">'use strict';
function f() { return 1; }
{
  function f() { return 2; }
}
return f() === 1;</div>}
```
###0 parameters
          
```
function(){
              <div class="code">return (() =&gt; 5)() === 5;</div>}
```
###1 parameter, no brackets
          
```
function(){
              <div class="code">var b = x =&gt; x + &quot;foo&quot;;
return (b(&quot;fee fie foe &quot;) === &quot;fee fie foe foo&quot;);</div>}
```
###multiple parameters
          
```
function(){
              <div class="code">var c = (v, w, x, y, z) =&gt; &quot;&quot; + v + w + x + y + z;
return (c(6, 5, 4, 3, 2) === &quot;65432&quot;);</div>}
```
###lexical &quot;this&quot; binding
          
```
function(){
              <div class="code">var d = { x : &quot;bar&quot;, y : function() { return z =&gt; this.x + z; }}.y();
var e = { x : &quot;baz&quot;, y : d };
return d(&quot;ley&quot;) === &quot;barley&quot; &amp;&amp; e.y(&quot;ley&quot;) === &quot;barley&quot;;</div>}
```
###&quot;this&quot; unchanged by call or apply
          
```
function(){
              <div class="code">var d = { x : &quot;foo&quot;, y : function() { return () =&gt; this.x; }};
var e = { x : &quot;bar&quot; };
return d.y().call(e) === &quot;foo&quot; &amp;&amp; d.y().apply(e) === &quot;foo&quot;;</div>}
```
###can't be bound, can be curried
          
```
function(){
              <div class="code">var d = { x : &quot;bar&quot;, y : function() { return z =&gt; this.x + z; }};
var e = { x : &quot;baz&quot; };
return d.y().bind(e, &quot;ley&quot;)() === &quot;barley&quot;;</div>}
```
###lexical &quot;arguments&quot; binding
          
```
function(){
              <div class="code">var f = (function() { return z =&gt; arguments[0]; }(5));
return f(6) === 5;</div>}
```
###no line break between params and &lt;code&gt;=&gt;&lt;/code&gt;
          
```
function(){
              <div class="code">return (() =&gt; {
  try { Function(&quot;x\n =&gt; 2&quot;)(); } catch(e) { return true; }
})();</div>}
```
###no &quot;prototype&quot; property
          
```
function(){
              <div class="code">var a = () =&gt; 5;
return !a.hasOwnProperty(&quot;prototype&quot;);</div>}
```
###block-level function declaration
          
```
function(){
              <div class="code">'use strict';
function f() { return 1; }
{
  function f() { return 2; }
}
return f() === 1;</div>}
```
###0 parameters
          
```
function(){
              <div class="code">return (() =&gt; 5)() === 5;</div>}
```
###1 parameter, no brackets
          
```
function(){
              <div class="code">var b = x =&gt; x + &quot;foo&quot;;
return (b(&quot;fee fie foe &quot;) === &quot;fee fie foe foo&quot;);</div>}
```
###multiple parameters
          
```
function(){
              <div class="code">var c = (v, w, x, y, z) =&gt; &quot;&quot; + v + w + x + y + z;
return (c(6, 5, 4, 3, 2) === &quot;65432&quot;);</div>}
```
###lexical &quot;this&quot; binding
          
```
function(){
              <div class="code">var d = { x : &quot;bar&quot;, y : function() { return z =&gt; this.x + z; }}.y();
var e = { x : &quot;baz&quot;, y : d };
return d(&quot;ley&quot;) === &quot;barley&quot; &amp;&amp; e.y(&quot;ley&quot;) === &quot;barley&quot;;</div>}
```
###&quot;this&quot; unchanged by call or apply
          
```
function(){
              <div class="code">var d = { x : &quot;foo&quot;, y : function() { return () =&gt; this.x; }};
var e = { x : &quot;bar&quot; };
return d.y().call(e) === &quot;foo&quot; &amp;&amp; d.y().apply(e) === &quot;foo&quot;;</div>}
```
###can't be bound, can be curried
          
```
function(){
              <div class="code">var d = { x : &quot;bar&quot;, y : function() { return z =&gt; this.x + z; }};
var e = { x : &quot;baz&quot; };
return d.y().bind(e, &quot;ley&quot;)() === &quot;barley&quot;;</div>}
```
###lexical &quot;arguments&quot; binding
          
```
function(){
              <div class="code">var f = (function() { return z =&gt; arguments[0]; }(5));
return f(6) === 5;</div>}
```
###no line break between params and &lt;code&gt;=&gt;&lt;/code&gt;
          
```
function(){
              <div class="code">return (() =&gt; {
  try { Function(&quot;x\n =&gt; 2&quot;)(); } catch(e) { return true; }
})();</div>}
```
###no &quot;prototype&quot; property
          
```
function(){
              <div class="code">var a = () =&gt; 5;
return !a.hasOwnProperty(&quot;prototype&quot;);</div>}
```
