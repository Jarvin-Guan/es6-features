###RegExp.prototype.compile
          
```
function(){
              <div class="code">return typeof RegExp.prototype.compile === 'function';</div>}
```
###HTML-style comments
          
```
function(){
              <div class="code">--&gt; A comment
&lt;!-- Another comment
var a = 3; &lt;!-- Another comment
return a === 3;</div>}
```
###hyphens in character sets
          
```
function(){
              <div class="code">return /[\w-_]/.exec(&quot;-&quot;)[0] === &quot;-&quot;;</div>}
```
###invalid character escapes
          
```
function(){
              <div class="code">return /\z/.exec(&quot;\\z&quot;)[0] === &quot;z&quot;
  &amp;&amp; /[\z]/.exec(&quot;[\\z]&quot;)[0] === &quot;z&quot;;</div>}
```
###invalid control-character escapes
          
```
function(){
              <div class="code">return /\c2/.exec(&quot;\\c2&quot;)[0] === &quot;\\c2&quot;;</div>}
```
###invalid Unicode escapes
          
```
function(){
              <div class="code">return /\u1/.exec(&quot;u1&quot;)[0] === &quot;u1&quot;
  &amp;&amp; /[\u1]/.exec(&quot;u&quot;)[0] === &quot;u&quot;;</div>}
```
###invalid hexadecimal escapes
          
```
function(){
              <div class="code">return /\x1/.exec(&quot;x1&quot;)[0] === &quot;x1&quot;
  &amp;&amp; /[\x1]/.exec(&quot;x&quot;)[0] === &quot;x&quot;;</div>}
```
###incomplete patterns and quantifiers
          
```
function(){
              <div class="code">return /x{1/.exec(&quot;x{1&quot;)[0] === &quot;x{1&quot;
  &amp;&amp; /x]1/.exec(&quot;x]1&quot;)[0] === &quot;x]1&quot;;</div>}
```
###octal escape sequences
          
```
function(){
              <div class="code">return /\041/.exec(&quot;!&quot;)[0] === &quot;!&quot;
  &amp;&amp; /[\041]/.exec(&quot;!&quot;)[0] === &quot;!&quot;;</div>}
```
###invalid backreferences become octal escapes
          
```
function(){
              <div class="code">return /\41/.exec(&quot;!&quot;)[0] === &quot;!&quot;
  &amp;&amp; /[\41]/.exec(&quot;!&quot;)[0] === &quot;!&quot;;</div>}
```
###RegExp.prototype.compile
          
```
function(){
              <div class="code">return typeof RegExp.prototype.compile === 'function';</div>}
```
###HTML-style comments
          
```
function(){
              <div class="code">--&gt; A comment
&lt;!-- Another comment
var a = 3; &lt;!-- Another comment
return a === 3;</div>}
```
###hyphens in character sets
          
```
function(){
              <div class="code">return /[\w-_]/.exec(&quot;-&quot;)[0] === &quot;-&quot;;</div>}
```
###invalid character escapes
          
```
function(){
              <div class="code">return /\z/.exec(&quot;\\z&quot;)[0] === &quot;z&quot;
  &amp;&amp; /[\z]/.exec(&quot;[\\z]&quot;)[0] === &quot;z&quot;;</div>}
```
###invalid control-character escapes
          
```
function(){
              <div class="code">return /\c2/.exec(&quot;\\c2&quot;)[0] === &quot;\\c2&quot;;</div>}
```
###invalid Unicode escapes
          
```
function(){
              <div class="code">return /\u1/.exec(&quot;u1&quot;)[0] === &quot;u1&quot;
  &amp;&amp; /[\u1]/.exec(&quot;u&quot;)[0] === &quot;u&quot;;</div>}
```
###invalid hexadecimal escapes
          
```
function(){
              <div class="code">return /\x1/.exec(&quot;x1&quot;)[0] === &quot;x1&quot;
  &amp;&amp; /[\x1]/.exec(&quot;x&quot;)[0] === &quot;x&quot;;</div>}
```
###incomplete patterns and quantifiers
          
```
function(){
              <div class="code">return /x{1/.exec(&quot;x{1&quot;)[0] === &quot;x{1&quot;
  &amp;&amp; /x]1/.exec(&quot;x]1&quot;)[0] === &quot;x]1&quot;;</div>}
```
###octal escape sequences
          
```
function(){
              <div class="code">return /\041/.exec(&quot;!&quot;)[0] === &quot;!&quot;
  &amp;&amp; /[\041]/.exec(&quot;!&quot;)[0] === &quot;!&quot;;</div>}
```
###invalid backreferences become octal escapes
          
```
function(){
              <div class="code">return /\41/.exec(&quot;!&quot;)[0] === &quot;!&quot;
  &amp;&amp; /[\41]/.exec(&quot;!&quot;)[0] === &quot;!&quot;;</div>}
```
###RegExp.prototype.compile
          
```
function(){
              <div class="code">return typeof RegExp.prototype.compile === 'function';</div>}
```
###HTML-style comments
          
```
function(){
              <div class="code">--&gt; A comment
&lt;!-- Another comment
var a = 3; &lt;!-- Another comment
return a === 3;</div>}
```
###hyphens in character sets
          
```
function(){
              <div class="code">return /[\w-_]/.exec(&quot;-&quot;)[0] === &quot;-&quot;;</div>}
```
###invalid character escapes
          
```
function(){
              <div class="code">return /\z/.exec(&quot;\\z&quot;)[0] === &quot;z&quot;
  &amp;&amp; /[\z]/.exec(&quot;[\\z]&quot;)[0] === &quot;z&quot;;</div>}
```
###invalid control-character escapes
          
```
function(){
              <div class="code">return /\c2/.exec(&quot;\\c2&quot;)[0] === &quot;\\c2&quot;;</div>}
```
###invalid Unicode escapes
          
```
function(){
              <div class="code">return /\u1/.exec(&quot;u1&quot;)[0] === &quot;u1&quot;
  &amp;&amp; /[\u1]/.exec(&quot;u&quot;)[0] === &quot;u&quot;;</div>}
```
###invalid hexadecimal escapes
          
```
function(){
              <div class="code">return /\x1/.exec(&quot;x1&quot;)[0] === &quot;x1&quot;
  &amp;&amp; /[\x1]/.exec(&quot;x&quot;)[0] === &quot;x&quot;;</div>}
```
###incomplete patterns and quantifiers
          
```
function(){
              <div class="code">return /x{1/.exec(&quot;x{1&quot;)[0] === &quot;x{1&quot;
  &amp;&amp; /x]1/.exec(&quot;x]1&quot;)[0] === &quot;x]1&quot;;</div>}
```
###octal escape sequences
          
```
function(){
              <div class="code">return /\041/.exec(&quot;!&quot;)[0] === &quot;!&quot;
  &amp;&amp; /[\041]/.exec(&quot;!&quot;)[0] === &quot;!&quot;;</div>}
```
###invalid backreferences become octal escapes
          
```
function(){
              <div class="code">return /\41/.exec(&quot;!&quot;)[0] === &quot;!&quot;
  &amp;&amp; /[\41]/.exec(&quot;!&quot;)[0] === &quot;!&quot;;</div>}
```
###RegExp.prototype.compile
          
```
function(){
              <div class="code">return typeof RegExp.prototype.compile === 'function';</div>}
```
###HTML-style comments
          
```
function(){
              <div class="code">--&gt; A comment
&lt;!-- Another comment
var a = 3; &lt;!-- Another comment
return a === 3;</div>}
```
###hyphens in character sets
          
```
function(){
              <div class="code">return /[\w-_]/.exec(&quot;-&quot;)[0] === &quot;-&quot;;</div>}
```
###invalid character escapes
          
```
function(){
              <div class="code">return /\z/.exec(&quot;\\z&quot;)[0] === &quot;z&quot;
  &amp;&amp; /[\z]/.exec(&quot;[\\z]&quot;)[0] === &quot;z&quot;;</div>}
```
###invalid control-character escapes
          
```
function(){
              <div class="code">return /\c2/.exec(&quot;\\c2&quot;)[0] === &quot;\\c2&quot;;</div>}
```
###invalid Unicode escapes
          
```
function(){
              <div class="code">return /\u1/.exec(&quot;u1&quot;)[0] === &quot;u1&quot;
  &amp;&amp; /[\u1]/.exec(&quot;u&quot;)[0] === &quot;u&quot;;</div>}
```
###invalid hexadecimal escapes
          
```
function(){
              <div class="code">return /\x1/.exec(&quot;x1&quot;)[0] === &quot;x1&quot;
  &amp;&amp; /[\x1]/.exec(&quot;x&quot;)[0] === &quot;x&quot;;</div>}
```
###incomplete patterns and quantifiers
          
```
function(){
              <div class="code">return /x{1/.exec(&quot;x{1&quot;)[0] === &quot;x{1&quot;
  &amp;&amp; /x]1/.exec(&quot;x]1&quot;)[0] === &quot;x]1&quot;;</div>}
```
###octal escape sequences
          
```
function(){
              <div class="code">return /\041/.exec(&quot;!&quot;)[0] === &quot;!&quot;
  &amp;&amp; /[\041]/.exec(&quot;!&quot;)[0] === &quot;!&quot;;</div>}
```
###invalid backreferences become octal escapes
          
```
function(){
              <div class="code">return /\41/.exec(&quot;!&quot;)[0] === &quot;!&quot;
  &amp;&amp; /[\41]/.exec(&quot;!&quot;)[0] === &quot;!&quot;;</div>}
```
###RegExp.prototype.compile
          
```
function(){
              <div class="code">return typeof RegExp.prototype.compile === 'function';</div>}
```
###HTML-style comments
          
```
function(){
              <div class="code">--&gt; A comment
&lt;!-- Another comment
var a = 3; &lt;!-- Another comment
return a === 3;</div>}
```
###hyphens in character sets
          
```
function(){
              <div class="code">return /[\w-_]/.exec(&quot;-&quot;)[0] === &quot;-&quot;;</div>}
```
###invalid character escapes
          
```
function(){
              <div class="code">return /\z/.exec(&quot;\\z&quot;)[0] === &quot;z&quot;
  &amp;&amp; /[\z]/.exec(&quot;[\\z]&quot;)[0] === &quot;z&quot;;</div>}
```
###invalid control-character escapes
          
```
function(){
              <div class="code">return /\c2/.exec(&quot;\\c2&quot;)[0] === &quot;\\c2&quot;;</div>}
```
###invalid Unicode escapes
          
```
function(){
              <div class="code">return /\u1/.exec(&quot;u1&quot;)[0] === &quot;u1&quot;
  &amp;&amp; /[\u1]/.exec(&quot;u&quot;)[0] === &quot;u&quot;;</div>}
```
###invalid hexadecimal escapes
          
```
function(){
              <div class="code">return /\x1/.exec(&quot;x1&quot;)[0] === &quot;x1&quot;
  &amp;&amp; /[\x1]/.exec(&quot;x&quot;)[0] === &quot;x&quot;;</div>}
```
###incomplete patterns and quantifiers
          
```
function(){
              <div class="code">return /x{1/.exec(&quot;x{1&quot;)[0] === &quot;x{1&quot;
  &amp;&amp; /x]1/.exec(&quot;x]1&quot;)[0] === &quot;x]1&quot;;</div>}
```
###octal escape sequences
          
```
function(){
              <div class="code">return /\041/.exec(&quot;!&quot;)[0] === &quot;!&quot;
  &amp;&amp; /[\041]/.exec(&quot;!&quot;)[0] === &quot;!&quot;;</div>}
```
###invalid backreferences become octal escapes
          
```
function(){
              <div class="code">return /\41/.exec(&quot;!&quot;)[0] === &quot;!&quot;
  &amp;&amp; /[\41]/.exec(&quot;!&quot;)[0] === &quot;!&quot;;</div>}
```
###RegExp.prototype.compile
          
```
function(){
              <div class="code">return typeof RegExp.prototype.compile === 'function';</div>}
```
###HTML-style comments
          
```
function(){
              <div class="code">--&gt; A comment
&lt;!-- Another comment
var a = 3; &lt;!-- Another comment
return a === 3;</div>}
```
###hyphens in character sets
          
```
function(){
              <div class="code">return /[\w-_]/.exec(&quot;-&quot;)[0] === &quot;-&quot;;</div>}
```
###invalid character escapes
          
```
function(){
              <div class="code">return /\z/.exec(&quot;\\z&quot;)[0] === &quot;z&quot;
  &amp;&amp; /[\z]/.exec(&quot;[\\z]&quot;)[0] === &quot;z&quot;;</div>}
```
###invalid control-character escapes
          
```
function(){
              <div class="code">return /\c2/.exec(&quot;\\c2&quot;)[0] === &quot;\\c2&quot;;</div>}
```
###invalid Unicode escapes
          
```
function(){
              <div class="code">return /\u1/.exec(&quot;u1&quot;)[0] === &quot;u1&quot;
  &amp;&amp; /[\u1]/.exec(&quot;u&quot;)[0] === &quot;u&quot;;</div>}
```
###invalid hexadecimal escapes
          
```
function(){
              <div class="code">return /\x1/.exec(&quot;x1&quot;)[0] === &quot;x1&quot;
  &amp;&amp; /[\x1]/.exec(&quot;x&quot;)[0] === &quot;x&quot;;</div>}
```
###incomplete patterns and quantifiers
          
```
function(){
              <div class="code">return /x{1/.exec(&quot;x{1&quot;)[0] === &quot;x{1&quot;
  &amp;&amp; /x]1/.exec(&quot;x]1&quot;)[0] === &quot;x]1&quot;;</div>}
```
###octal escape sequences
          
```
function(){
              <div class="code">return /\041/.exec(&quot;!&quot;)[0] === &quot;!&quot;
  &amp;&amp; /[\041]/.exec(&quot;!&quot;)[0] === &quot;!&quot;;</div>}
```
###invalid backreferences become octal escapes
          
```
function(){
              <div class="code">return /\41/.exec(&quot;!&quot;)[0] === &quot;!&quot;
  &amp;&amp; /[\41]/.exec(&quot;!&quot;)[0] === &quot;!&quot;;</div>}
```
###RegExp.prototype.compile
          
```
function(){
              <div class="code">return typeof RegExp.prototype.compile === 'function';</div>}
```
###HTML-style comments
          
```
function(){
              <div class="code">--&gt; A comment
&lt;!-- Another comment
var a = 3; &lt;!-- Another comment
return a === 3;</div>}
```
###hyphens in character sets
          
```
function(){
              <div class="code">return /[\w-_]/.exec(&quot;-&quot;)[0] === &quot;-&quot;;</div>}
```
###invalid character escapes
          
```
function(){
              <div class="code">return /\z/.exec(&quot;\\z&quot;)[0] === &quot;z&quot;
  &amp;&amp; /[\z]/.exec(&quot;[\\z]&quot;)[0] === &quot;z&quot;;</div>}
```
###invalid control-character escapes
          
```
function(){
              <div class="code">return /\c2/.exec(&quot;\\c2&quot;)[0] === &quot;\\c2&quot;;</div>}
```
###invalid Unicode escapes
          
```
function(){
              <div class="code">return /\u1/.exec(&quot;u1&quot;)[0] === &quot;u1&quot;
  &amp;&amp; /[\u1]/.exec(&quot;u&quot;)[0] === &quot;u&quot;;</div>}
```
###invalid hexadecimal escapes
          
```
function(){
              <div class="code">return /\x1/.exec(&quot;x1&quot;)[0] === &quot;x1&quot;
  &amp;&amp; /[\x1]/.exec(&quot;x&quot;)[0] === &quot;x&quot;;</div>}
```
###incomplete patterns and quantifiers
          
```
function(){
              <div class="code">return /x{1/.exec(&quot;x{1&quot;)[0] === &quot;x{1&quot;
  &amp;&amp; /x]1/.exec(&quot;x]1&quot;)[0] === &quot;x]1&quot;;</div>}
```
###octal escape sequences
          
```
function(){
              <div class="code">return /\041/.exec(&quot;!&quot;)[0] === &quot;!&quot;
  &amp;&amp; /[\041]/.exec(&quot;!&quot;)[0] === &quot;!&quot;;</div>}
```
###invalid backreferences become octal escapes
          
```
function(){
              <div class="code">return /\41/.exec(&quot;!&quot;)[0] === &quot;!&quot;
  &amp;&amp; /[\41]/.exec(&quot;!&quot;)[0] === &quot;!&quot;;</div>}
```
###RegExp.prototype.compile
          
```
function(){
              <div class="code">return typeof RegExp.prototype.compile === 'function';</div>}
```
###HTML-style comments
          
```
function(){
              <div class="code">--&gt; A comment
&lt;!-- Another comment
var a = 3; &lt;!-- Another comment
return a === 3;</div>}
```
###hyphens in character sets
          
```
function(){
              <div class="code">return /[\w-_]/.exec(&quot;-&quot;)[0] === &quot;-&quot;;</div>}
```
###invalid character escapes
          
```
function(){
              <div class="code">return /\z/.exec(&quot;\\z&quot;)[0] === &quot;z&quot;
  &amp;&amp; /[\z]/.exec(&quot;[\\z]&quot;)[0] === &quot;z&quot;;</div>}
```
###invalid control-character escapes
          
```
function(){
              <div class="code">return /\c2/.exec(&quot;\\c2&quot;)[0] === &quot;\\c2&quot;;</div>}
```
###invalid Unicode escapes
          
```
function(){
              <div class="code">return /\u1/.exec(&quot;u1&quot;)[0] === &quot;u1&quot;
  &amp;&amp; /[\u1]/.exec(&quot;u&quot;)[0] === &quot;u&quot;;</div>}
```
###invalid hexadecimal escapes
          
```
function(){
              <div class="code">return /\x1/.exec(&quot;x1&quot;)[0] === &quot;x1&quot;
  &amp;&amp; /[\x1]/.exec(&quot;x&quot;)[0] === &quot;x&quot;;</div>}
```
###incomplete patterns and quantifiers
          
```
function(){
              <div class="code">return /x{1/.exec(&quot;x{1&quot;)[0] === &quot;x{1&quot;
  &amp;&amp; /x]1/.exec(&quot;x]1&quot;)[0] === &quot;x]1&quot;;</div>}
```
###octal escape sequences
          
```
function(){
              <div class="code">return /\041/.exec(&quot;!&quot;)[0] === &quot;!&quot;
  &amp;&amp; /[\041]/.exec(&quot;!&quot;)[0] === &quot;!&quot;;</div>}
```
###invalid backreferences become octal escapes
          
```
function(){
              <div class="code">return /\41/.exec(&quot;!&quot;)[0] === &quot;!&quot;
  &amp;&amp; /[\41]/.exec(&quot;!&quot;)[0] === &quot;!&quot;;</div>}
```
###RegExp.prototype.compile
          
```
function(){
              <div class="code">return typeof RegExp.prototype.compile === 'function';</div>}
```
###HTML-style comments
          
```
function(){
              <div class="code">--&gt; A comment
&lt;!-- Another comment
var a = 3; &lt;!-- Another comment
return a === 3;</div>}
```
###hyphens in character sets
          
```
function(){
              <div class="code">return /[\w-_]/.exec(&quot;-&quot;)[0] === &quot;-&quot;;</div>}
```
###invalid character escapes
          
```
function(){
              <div class="code">return /\z/.exec(&quot;\\z&quot;)[0] === &quot;z&quot;
  &amp;&amp; /[\z]/.exec(&quot;[\\z]&quot;)[0] === &quot;z&quot;;</div>}
```
###invalid control-character escapes
          
```
function(){
              <div class="code">return /\c2/.exec(&quot;\\c2&quot;)[0] === &quot;\\c2&quot;;</div>}
```
###invalid Unicode escapes
          
```
function(){
              <div class="code">return /\u1/.exec(&quot;u1&quot;)[0] === &quot;u1&quot;
  &amp;&amp; /[\u1]/.exec(&quot;u&quot;)[0] === &quot;u&quot;;</div>}
```
###invalid hexadecimal escapes
          
```
function(){
              <div class="code">return /\x1/.exec(&quot;x1&quot;)[0] === &quot;x1&quot;
  &amp;&amp; /[\x1]/.exec(&quot;x&quot;)[0] === &quot;x&quot;;</div>}
```
###incomplete patterns and quantifiers
          
```
function(){
              <div class="code">return /x{1/.exec(&quot;x{1&quot;)[0] === &quot;x{1&quot;
  &amp;&amp; /x]1/.exec(&quot;x]1&quot;)[0] === &quot;x]1&quot;;</div>}
```
###octal escape sequences
          
```
function(){
              <div class="code">return /\041/.exec(&quot;!&quot;)[0] === &quot;!&quot;
  &amp;&amp; /[\041]/.exec(&quot;!&quot;)[0] === &quot;!&quot;;</div>}
```
###invalid backreferences become octal escapes
          
```
function(){
              <div class="code">return /\41/.exec(&quot;!&quot;)[0] === &quot;!&quot;
  &amp;&amp; /[\41]/.exec(&quot;!&quot;)[0] === &quot;!&quot;;</div>}
```
###RegExp.prototype.compile
          
```
function(){
              <div class="code">return typeof RegExp.prototype.compile === 'function';</div>}
```
###HTML-style comments
          
```
function(){
              <div class="code">--&gt; A comment
&lt;!-- Another comment
var a = 3; &lt;!-- Another comment
return a === 3;</div>}
```
###hyphens in character sets
          
```
function(){
              <div class="code">return /[\w-_]/.exec(&quot;-&quot;)[0] === &quot;-&quot;;</div>}
```
###invalid character escapes
          
```
function(){
              <div class="code">return /\z/.exec(&quot;\\z&quot;)[0] === &quot;z&quot;
  &amp;&amp; /[\z]/.exec(&quot;[\\z]&quot;)[0] === &quot;z&quot;;</div>}
```
###invalid control-character escapes
          
```
function(){
              <div class="code">return /\c2/.exec(&quot;\\c2&quot;)[0] === &quot;\\c2&quot;;</div>}
```
###invalid Unicode escapes
          
```
function(){
              <div class="code">return /\u1/.exec(&quot;u1&quot;)[0] === &quot;u1&quot;
  &amp;&amp; /[\u1]/.exec(&quot;u&quot;)[0] === &quot;u&quot;;</div>}
```
###invalid hexadecimal escapes
          
```
function(){
              <div class="code">return /\x1/.exec(&quot;x1&quot;)[0] === &quot;x1&quot;
  &amp;&amp; /[\x1]/.exec(&quot;x&quot;)[0] === &quot;x&quot;;</div>}
```
###incomplete patterns and quantifiers
          
```
function(){
              <div class="code">return /x{1/.exec(&quot;x{1&quot;)[0] === &quot;x{1&quot;
  &amp;&amp; /x]1/.exec(&quot;x]1&quot;)[0] === &quot;x]1&quot;;</div>}
```
###octal escape sequences
          
```
function(){
              <div class="code">return /\041/.exec(&quot;!&quot;)[0] === &quot;!&quot;
  &amp;&amp; /[\041]/.exec(&quot;!&quot;)[0] === &quot;!&quot;;</div>}
```
###invalid backreferences become octal escapes
          
```
function(){
              <div class="code">return /\41/.exec(&quot;!&quot;)[0] === &quot;!&quot;
  &amp;&amp; /[\41]/.exec(&quot;!&quot;)[0] === &quot;!&quot;;</div>}
```
###RegExp.prototype.compile
          
```
function(){
              <div class="code">return typeof RegExp.prototype.compile === 'function';</div>}
```
###HTML-style comments
          
```
function(){
              <div class="code">--&gt; A comment
&lt;!-- Another comment
var a = 3; &lt;!-- Another comment
return a === 3;</div>}
```
###hyphens in character sets
          
```
function(){
              <div class="code">return /[\w-_]/.exec(&quot;-&quot;)[0] === &quot;-&quot;;</div>}
```
###invalid character escapes
          
```
function(){
              <div class="code">return /\z/.exec(&quot;\\z&quot;)[0] === &quot;z&quot;
  &amp;&amp; /[\z]/.exec(&quot;[\\z]&quot;)[0] === &quot;z&quot;;</div>}
```
###invalid control-character escapes
          
```
function(){
              <div class="code">return /\c2/.exec(&quot;\\c2&quot;)[0] === &quot;\\c2&quot;;</div>}
```
###invalid Unicode escapes
          
```
function(){
              <div class="code">return /\u1/.exec(&quot;u1&quot;)[0] === &quot;u1&quot;
  &amp;&amp; /[\u1]/.exec(&quot;u&quot;)[0] === &quot;u&quot;;</div>}
```
###invalid hexadecimal escapes
          
```
function(){
              <div class="code">return /\x1/.exec(&quot;x1&quot;)[0] === &quot;x1&quot;
  &amp;&amp; /[\x1]/.exec(&quot;x&quot;)[0] === &quot;x&quot;;</div>}
```
###incomplete patterns and quantifiers
          
```
function(){
              <div class="code">return /x{1/.exec(&quot;x{1&quot;)[0] === &quot;x{1&quot;
  &amp;&amp; /x]1/.exec(&quot;x]1&quot;)[0] === &quot;x]1&quot;;</div>}
```
###octal escape sequences
          
```
function(){
              <div class="code">return /\041/.exec(&quot;!&quot;)[0] === &quot;!&quot;
  &amp;&amp; /[\041]/.exec(&quot;!&quot;)[0] === &quot;!&quot;;</div>}
```
###invalid backreferences become octal escapes
          
```
function(){
              <div class="code">return /\41/.exec(&quot;!&quot;)[0] === &quot;!&quot;
  &amp;&amp; /[\41]/.exec(&quot;!&quot;)[0] === &quot;!&quot;;</div>}
```
###RegExp.prototype.compile
          
```
function(){
              <div class="code">return typeof RegExp.prototype.compile === 'function';</div>}
```
###HTML-style comments
          
```
function(){
              <div class="code">--&gt; A comment
&lt;!-- Another comment
var a = 3; &lt;!-- Another comment
return a === 3;</div>}
```
###hyphens in character sets
          
```
function(){
              <div class="code">return /[\w-_]/.exec(&quot;-&quot;)[0] === &quot;-&quot;;</div>}
```
###invalid character escapes
          
```
function(){
              <div class="code">return /\z/.exec(&quot;\\z&quot;)[0] === &quot;z&quot;
  &amp;&amp; /[\z]/.exec(&quot;[\\z]&quot;)[0] === &quot;z&quot;;</div>}
```
###invalid control-character escapes
          
```
function(){
              <div class="code">return /\c2/.exec(&quot;\\c2&quot;)[0] === &quot;\\c2&quot;;</div>}
```
###invalid Unicode escapes
          
```
function(){
              <div class="code">return /\u1/.exec(&quot;u1&quot;)[0] === &quot;u1&quot;
  &amp;&amp; /[\u1]/.exec(&quot;u&quot;)[0] === &quot;u&quot;;</div>}
```
###invalid hexadecimal escapes
          
```
function(){
              <div class="code">return /\x1/.exec(&quot;x1&quot;)[0] === &quot;x1&quot;
  &amp;&amp; /[\x1]/.exec(&quot;x&quot;)[0] === &quot;x&quot;;</div>}
```
###incomplete patterns and quantifiers
          
```
function(){
              <div class="code">return /x{1/.exec(&quot;x{1&quot;)[0] === &quot;x{1&quot;
  &amp;&amp; /x]1/.exec(&quot;x]1&quot;)[0] === &quot;x]1&quot;;</div>}
```
###octal escape sequences
          
```
function(){
              <div class="code">return /\041/.exec(&quot;!&quot;)[0] === &quot;!&quot;
  &amp;&amp; /[\041]/.exec(&quot;!&quot;)[0] === &quot;!&quot;;</div>}
```
###invalid backreferences become octal escapes
          
```
function(){
              <div class="code">return /\41/.exec(&quot;!&quot;)[0] === &quot;!&quot;
  &amp;&amp; /[\41]/.exec(&quot;!&quot;)[0] === &quot;!&quot;;</div>}
```
###RegExp.prototype.compile
          
```
function(){
              <div class="code">return typeof RegExp.prototype.compile === 'function';</div>}
```
###HTML-style comments
          
```
function(){
              <div class="code">--&gt; A comment
&lt;!-- Another comment
var a = 3; &lt;!-- Another comment
return a === 3;</div>}
```
###hyphens in character sets
          
```
function(){
              <div class="code">return /[\w-_]/.exec(&quot;-&quot;)[0] === &quot;-&quot;;</div>}
```
###invalid character escapes
          
```
function(){
              <div class="code">return /\z/.exec(&quot;\\z&quot;)[0] === &quot;z&quot;
  &amp;&amp; /[\z]/.exec(&quot;[\\z]&quot;)[0] === &quot;z&quot;;</div>}
```
###invalid control-character escapes
          
```
function(){
              <div class="code">return /\c2/.exec(&quot;\\c2&quot;)[0] === &quot;\\c2&quot;;</div>}
```
###invalid Unicode escapes
          
```
function(){
              <div class="code">return /\u1/.exec(&quot;u1&quot;)[0] === &quot;u1&quot;
  &amp;&amp; /[\u1]/.exec(&quot;u&quot;)[0] === &quot;u&quot;;</div>}
```
###invalid hexadecimal escapes
          
```
function(){
              <div class="code">return /\x1/.exec(&quot;x1&quot;)[0] === &quot;x1&quot;
  &amp;&amp; /[\x1]/.exec(&quot;x&quot;)[0] === &quot;x&quot;;</div>}
```
###incomplete patterns and quantifiers
          
```
function(){
              <div class="code">return /x{1/.exec(&quot;x{1&quot;)[0] === &quot;x{1&quot;
  &amp;&amp; /x]1/.exec(&quot;x]1&quot;)[0] === &quot;x]1&quot;;</div>}
```
###octal escape sequences
          
```
function(){
              <div class="code">return /\041/.exec(&quot;!&quot;)[0] === &quot;!&quot;
  &amp;&amp; /[\041]/.exec(&quot;!&quot;)[0] === &quot;!&quot;;</div>}
```
###invalid backreferences become octal escapes
          
```
function(){
              <div class="code">return /\41/.exec(&quot;!&quot;)[0] === &quot;!&quot;
  &amp;&amp; /[\41]/.exec(&quot;!&quot;)[0] === &quot;!&quot;;</div>}
```
###RegExp.prototype.compile
          
```
function(){
              <div class="code">return typeof RegExp.prototype.compile === 'function';</div>}
```
###HTML-style comments
          
```
function(){
              <div class="code">--&gt; A comment
&lt;!-- Another comment
var a = 3; &lt;!-- Another comment
return a === 3;</div>}
```
###hyphens in character sets
          
```
function(){
              <div class="code">return /[\w-_]/.exec(&quot;-&quot;)[0] === &quot;-&quot;;</div>}
```
###invalid character escapes
          
```
function(){
              <div class="code">return /\z/.exec(&quot;\\z&quot;)[0] === &quot;z&quot;
  &amp;&amp; /[\z]/.exec(&quot;[\\z]&quot;)[0] === &quot;z&quot;;</div>}
```
###invalid control-character escapes
          
```
function(){
              <div class="code">return /\c2/.exec(&quot;\\c2&quot;)[0] === &quot;\\c2&quot;;</div>}
```
###invalid Unicode escapes
          
```
function(){
              <div class="code">return /\u1/.exec(&quot;u1&quot;)[0] === &quot;u1&quot;
  &amp;&amp; /[\u1]/.exec(&quot;u&quot;)[0] === &quot;u&quot;;</div>}
```
###invalid hexadecimal escapes
          
```
function(){
              <div class="code">return /\x1/.exec(&quot;x1&quot;)[0] === &quot;x1&quot;
  &amp;&amp; /[\x1]/.exec(&quot;x&quot;)[0] === &quot;x&quot;;</div>}
```
###incomplete patterns and quantifiers
          
```
function(){
              <div class="code">return /x{1/.exec(&quot;x{1&quot;)[0] === &quot;x{1&quot;
  &amp;&amp; /x]1/.exec(&quot;x]1&quot;)[0] === &quot;x]1&quot;;</div>}
```
###octal escape sequences
          
```
function(){
              <div class="code">return /\041/.exec(&quot;!&quot;)[0] === &quot;!&quot;
  &amp;&amp; /[\041]/.exec(&quot;!&quot;)[0] === &quot;!&quot;;</div>}
```
###invalid backreferences become octal escapes
          
```
function(){
              <div class="code">return /\41/.exec(&quot;!&quot;)[0] === &quot;!&quot;
  &amp;&amp; /[\41]/.exec(&quot;!&quot;)[0] === &quot;!&quot;;</div>}
```
###RegExp.prototype.compile
          
```
function(){
              <div class="code">return typeof RegExp.prototype.compile === 'function';</div>}
```
###HTML-style comments
          
```
function(){
              <div class="code">--&gt; A comment
&lt;!-- Another comment
var a = 3; &lt;!-- Another comment
return a === 3;</div>}
```
###hyphens in character sets
          
```
function(){
              <div class="code">return /[\w-_]/.exec(&quot;-&quot;)[0] === &quot;-&quot;;</div>}
```
###invalid character escapes
          
```
function(){
              <div class="code">return /\z/.exec(&quot;\\z&quot;)[0] === &quot;z&quot;
  &amp;&amp; /[\z]/.exec(&quot;[\\z]&quot;)[0] === &quot;z&quot;;</div>}
```
###invalid control-character escapes
          
```
function(){
              <div class="code">return /\c2/.exec(&quot;\\c2&quot;)[0] === &quot;\\c2&quot;;</div>}
```
###invalid Unicode escapes
          
```
function(){
              <div class="code">return /\u1/.exec(&quot;u1&quot;)[0] === &quot;u1&quot;
  &amp;&amp; /[\u1]/.exec(&quot;u&quot;)[0] === &quot;u&quot;;</div>}
```
###invalid hexadecimal escapes
          
```
function(){
              <div class="code">return /\x1/.exec(&quot;x1&quot;)[0] === &quot;x1&quot;
  &amp;&amp; /[\x1]/.exec(&quot;x&quot;)[0] === &quot;x&quot;;</div>}
```
###incomplete patterns and quantifiers
          
```
function(){
              <div class="code">return /x{1/.exec(&quot;x{1&quot;)[0] === &quot;x{1&quot;
  &amp;&amp; /x]1/.exec(&quot;x]1&quot;)[0] === &quot;x]1&quot;;</div>}
```
###octal escape sequences
          
```
function(){
              <div class="code">return /\041/.exec(&quot;!&quot;)[0] === &quot;!&quot;
  &amp;&amp; /[\041]/.exec(&quot;!&quot;)[0] === &quot;!&quot;;</div>}
```
###invalid backreferences become octal escapes
          
```
function(){
              <div class="code">return /\41/.exec(&quot;!&quot;)[0] === &quot;!&quot;
  &amp;&amp; /[\41]/.exec(&quot;!&quot;)[0] === &quot;!&quot;;</div>}
```
