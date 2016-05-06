###basic functionality
          
```
function(){
              <div class="code">var a = &quot;ba&quot;, b = &quot;QUX&quot;;
return `foo bar
${a + &quot;z&quot;} ${b.toLowerCase()}` === &quot;foo bar\nbaz qux&quot;;</div>}
```
###toString conversion
          
```
function(){
              <div class="code">var a = {
  toString: function() { return &quot;foo&quot;; },
  valueOf: function() { return &quot;bar&quot;; },
};
return `${a}` === &quot;foo&quot;;</div>}
```
###tagged template literals
          
```
function(){
              <div class="code">var called = false;
function fn(parts, a, b) {
  called = true;
  return parts instanceof Array &amp;&amp;
    parts[0]     === &quot;foo&quot;      &amp;&amp;
    parts[1]     === &quot;bar\n&quot;    &amp;&amp;
    parts.raw[0] === &quot;foo&quot;      &amp;&amp;
    parts.raw[1] === &quot;bar\\n&quot;   &amp;&amp;
    a === 123                   &amp;&amp;
    b === 456;
}
return fn `foo${123}bar\n${456}` &amp;&amp; called;</div>}
```
###passed array is frozen
          
```
function(){
              <div class="code">return (function(parts) {
  return Object.isFrozen(parts) &amp;&amp; Object.isFrozen(parts.raw);
}) `foo${0}bar${0}baz`;</div>}
```
###line break normalisation
          
```
function(){
              <div class="code">var cr   = eval(&quot;`x&quot; + String.fromCharCode(13)    + &quot;y`&quot;);
var lf   = eval(&quot;`x&quot; + String.fromCharCode(10)    + &quot;y`&quot;);
var crlf = eval(&quot;`x&quot; + String.fromCharCode(13,10) + &quot;y`&quot;);

return cr.length === 3 &amp;&amp; lf.length === 3 &amp;&amp; crlf.length === 3
  &amp;&amp; cr[1] === lf[1] &amp;&amp; lf[1] === crlf[1] &amp;&amp; crlf[1] === '\n';</div>}
```
###basic functionality
          
```
function(){
              <div class="code">var a = &quot;ba&quot;, b = &quot;QUX&quot;;
return `foo bar
${a + &quot;z&quot;} ${b.toLowerCase()}` === &quot;foo bar\nbaz qux&quot;;</div>}
```
###toString conversion
          
```
function(){
              <div class="code">var a = {
  toString: function() { return &quot;foo&quot;; },
  valueOf: function() { return &quot;bar&quot;; },
};
return `${a}` === &quot;foo&quot;;</div>}
```
###tagged template literals
          
```
function(){
              <div class="code">var called = false;
function fn(parts, a, b) {
  called = true;
  return parts instanceof Array &amp;&amp;
    parts[0]     === &quot;foo&quot;      &amp;&amp;
    parts[1]     === &quot;bar\n&quot;    &amp;&amp;
    parts.raw[0] === &quot;foo&quot;      &amp;&amp;
    parts.raw[1] === &quot;bar\\n&quot;   &amp;&amp;
    a === 123                   &amp;&amp;
    b === 456;
}
return fn `foo${123}bar\n${456}` &amp;&amp; called;</div>}
```
###passed array is frozen
          
```
function(){
              <div class="code">return (function(parts) {
  return Object.isFrozen(parts) &amp;&amp; Object.isFrozen(parts.raw);
}) `foo${0}bar${0}baz`;</div>}
```
###line break normalisation
          
```
function(){
              <div class="code">var cr   = eval(&quot;`x&quot; + String.fromCharCode(13)    + &quot;y`&quot;);
var lf   = eval(&quot;`x&quot; + String.fromCharCode(10)    + &quot;y`&quot;);
var crlf = eval(&quot;`x&quot; + String.fromCharCode(13,10) + &quot;y`&quot;);

return cr.length === 3 &amp;&amp; lf.length === 3 &amp;&amp; crlf.length === 3
  &amp;&amp; cr[1] === lf[1] &amp;&amp; lf[1] === crlf[1] &amp;&amp; crlf[1] === '\n';</div>}
```
###basic functionality
          
```
function(){
              <div class="code">var a = &quot;ba&quot;, b = &quot;QUX&quot;;
return `foo bar
${a + &quot;z&quot;} ${b.toLowerCase()}` === &quot;foo bar\nbaz qux&quot;;</div>}
```
###toString conversion
          
```
function(){
              <div class="code">var a = {
  toString: function() { return &quot;foo&quot;; },
  valueOf: function() { return &quot;bar&quot;; },
};
return `${a}` === &quot;foo&quot;;</div>}
```
###tagged template literals
          
```
function(){
              <div class="code">var called = false;
function fn(parts, a, b) {
  called = true;
  return parts instanceof Array &amp;&amp;
    parts[0]     === &quot;foo&quot;      &amp;&amp;
    parts[1]     === &quot;bar\n&quot;    &amp;&amp;
    parts.raw[0] === &quot;foo&quot;      &amp;&amp;
    parts.raw[1] === &quot;bar\\n&quot;   &amp;&amp;
    a === 123                   &amp;&amp;
    b === 456;
}
return fn `foo${123}bar\n${456}` &amp;&amp; called;</div>}
```
###passed array is frozen
          
```
function(){
              <div class="code">return (function(parts) {
  return Object.isFrozen(parts) &amp;&amp; Object.isFrozen(parts.raw);
}) `foo${0}bar${0}baz`;</div>}
```
###line break normalisation
          
```
function(){
              <div class="code">var cr   = eval(&quot;`x&quot; + String.fromCharCode(13)    + &quot;y`&quot;);
var lf   = eval(&quot;`x&quot; + String.fromCharCode(10)    + &quot;y`&quot;);
var crlf = eval(&quot;`x&quot; + String.fromCharCode(13,10) + &quot;y`&quot;);

return cr.length === 3 &amp;&amp; lf.length === 3 &amp;&amp; crlf.length === 3
  &amp;&amp; cr[1] === lf[1] &amp;&amp; lf[1] === crlf[1] &amp;&amp; crlf[1] === '\n';</div>}
```
###basic functionality
          
```
function(){
              <div class="code">var a = &quot;ba&quot;, b = &quot;QUX&quot;;
return `foo bar
${a + &quot;z&quot;} ${b.toLowerCase()}` === &quot;foo bar\nbaz qux&quot;;</div>}
```
###toString conversion
          
```
function(){
              <div class="code">var a = {
  toString: function() { return &quot;foo&quot;; },
  valueOf: function() { return &quot;bar&quot;; },
};
return `${a}` === &quot;foo&quot;;</div>}
```
###tagged template literals
          
```
function(){
              <div class="code">var called = false;
function fn(parts, a, b) {
  called = true;
  return parts instanceof Array &amp;&amp;
    parts[0]     === &quot;foo&quot;      &amp;&amp;
    parts[1]     === &quot;bar\n&quot;    &amp;&amp;
    parts.raw[0] === &quot;foo&quot;      &amp;&amp;
    parts.raw[1] === &quot;bar\\n&quot;   &amp;&amp;
    a === 123                   &amp;&amp;
    b === 456;
}
return fn `foo${123}bar\n${456}` &amp;&amp; called;</div>}
```
###passed array is frozen
          
```
function(){
              <div class="code">return (function(parts) {
  return Object.isFrozen(parts) &amp;&amp; Object.isFrozen(parts.raw);
}) `foo${0}bar${0}baz`;</div>}
```
###line break normalisation
          
```
function(){
              <div class="code">var cr   = eval(&quot;`x&quot; + String.fromCharCode(13)    + &quot;y`&quot;);
var lf   = eval(&quot;`x&quot; + String.fromCharCode(10)    + &quot;y`&quot;);
var crlf = eval(&quot;`x&quot; + String.fromCharCode(13,10) + &quot;y`&quot;);

return cr.length === 3 &amp;&amp; lf.length === 3 &amp;&amp; crlf.length === 3
  &amp;&amp; cr[1] === lf[1] &amp;&amp; lf[1] === crlf[1] &amp;&amp; crlf[1] === '\n';</div>}
```
###basic functionality
          
```
function(){
              <div class="code">var a = &quot;ba&quot;, b = &quot;QUX&quot;;
return `foo bar
${a + &quot;z&quot;} ${b.toLowerCase()}` === &quot;foo bar\nbaz qux&quot;;</div>}
```
###toString conversion
          
```
function(){
              <div class="code">var a = {
  toString: function() { return &quot;foo&quot;; },
  valueOf: function() { return &quot;bar&quot;; },
};
return `${a}` === &quot;foo&quot;;</div>}
```
###tagged template literals
          
```
function(){
              <div class="code">var called = false;
function fn(parts, a, b) {
  called = true;
  return parts instanceof Array &amp;&amp;
    parts[0]     === &quot;foo&quot;      &amp;&amp;
    parts[1]     === &quot;bar\n&quot;    &amp;&amp;
    parts.raw[0] === &quot;foo&quot;      &amp;&amp;
    parts.raw[1] === &quot;bar\\n&quot;   &amp;&amp;
    a === 123                   &amp;&amp;
    b === 456;
}
return fn `foo${123}bar\n${456}` &amp;&amp; called;</div>}
```
###passed array is frozen
          
```
function(){
              <div class="code">return (function(parts) {
  return Object.isFrozen(parts) &amp;&amp; Object.isFrozen(parts.raw);
}) `foo${0}bar${0}baz`;</div>}
```
###line break normalisation
          
```
function(){
              <div class="code">var cr   = eval(&quot;`x&quot; + String.fromCharCode(13)    + &quot;y`&quot;);
var lf   = eval(&quot;`x&quot; + String.fromCharCode(10)    + &quot;y`&quot;);
var crlf = eval(&quot;`x&quot; + String.fromCharCode(13,10) + &quot;y`&quot;);

return cr.length === 3 &amp;&amp; lf.length === 3 &amp;&amp; crlf.length === 3
  &amp;&amp; cr[1] === lf[1] &amp;&amp; lf[1] === crlf[1] &amp;&amp; crlf[1] === '\n';</div>}
```
###basic functionality
          
```
function(){
              <div class="code">var a = &quot;ba&quot;, b = &quot;QUX&quot;;
return `foo bar
${a + &quot;z&quot;} ${b.toLowerCase()}` === &quot;foo bar\nbaz qux&quot;;</div>}
```
###toString conversion
          
```
function(){
              <div class="code">var a = {
  toString: function() { return &quot;foo&quot;; },
  valueOf: function() { return &quot;bar&quot;; },
};
return `${a}` === &quot;foo&quot;;</div>}
```
###tagged template literals
          
```
function(){
              <div class="code">var called = false;
function fn(parts, a, b) {
  called = true;
  return parts instanceof Array &amp;&amp;
    parts[0]     === &quot;foo&quot;      &amp;&amp;
    parts[1]     === &quot;bar\n&quot;    &amp;&amp;
    parts.raw[0] === &quot;foo&quot;      &amp;&amp;
    parts.raw[1] === &quot;bar\\n&quot;   &amp;&amp;
    a === 123                   &amp;&amp;
    b === 456;
}
return fn `foo${123}bar\n${456}` &amp;&amp; called;</div>}
```
###passed array is frozen
          
```
function(){
              <div class="code">return (function(parts) {
  return Object.isFrozen(parts) &amp;&amp; Object.isFrozen(parts.raw);
}) `foo${0}bar${0}baz`;</div>}
```
###line break normalisation
          
```
function(){
              <div class="code">var cr   = eval(&quot;`x&quot; + String.fromCharCode(13)    + &quot;y`&quot;);
var lf   = eval(&quot;`x&quot; + String.fromCharCode(10)    + &quot;y`&quot;);
var crlf = eval(&quot;`x&quot; + String.fromCharCode(13,10) + &quot;y`&quot;);

return cr.length === 3 &amp;&amp; lf.length === 3 &amp;&amp; crlf.length === 3
  &amp;&amp; cr[1] === lf[1] &amp;&amp; lf[1] === crlf[1] &amp;&amp; crlf[1] === '\n';</div>}
```
###basic functionality
          
```
function(){
              <div class="code">var a = &quot;ba&quot;, b = &quot;QUX&quot;;
return `foo bar
${a + &quot;z&quot;} ${b.toLowerCase()}` === &quot;foo bar\nbaz qux&quot;;</div>}
```
###toString conversion
          
```
function(){
              <div class="code">var a = {
  toString: function() { return &quot;foo&quot;; },
  valueOf: function() { return &quot;bar&quot;; },
};
return `${a}` === &quot;foo&quot;;</div>}
```
###tagged template literals
          
```
function(){
              <div class="code">var called = false;
function fn(parts, a, b) {
  called = true;
  return parts instanceof Array &amp;&amp;
    parts[0]     === &quot;foo&quot;      &amp;&amp;
    parts[1]     === &quot;bar\n&quot;    &amp;&amp;
    parts.raw[0] === &quot;foo&quot;      &amp;&amp;
    parts.raw[1] === &quot;bar\\n&quot;   &amp;&amp;
    a === 123                   &amp;&amp;
    b === 456;
}
return fn `foo${123}bar\n${456}` &amp;&amp; called;</div>}
```
###passed array is frozen
          
```
function(){
              <div class="code">return (function(parts) {
  return Object.isFrozen(parts) &amp;&amp; Object.isFrozen(parts.raw);
}) `foo${0}bar${0}baz`;</div>}
```
###line break normalisation
          
```
function(){
              <div class="code">var cr   = eval(&quot;`x&quot; + String.fromCharCode(13)    + &quot;y`&quot;);
var lf   = eval(&quot;`x&quot; + String.fromCharCode(10)    + &quot;y`&quot;);
var crlf = eval(&quot;`x&quot; + String.fromCharCode(13,10) + &quot;y`&quot;);

return cr.length === 3 &amp;&amp; lf.length === 3 &amp;&amp; crlf.length === 3
  &amp;&amp; cr[1] === lf[1] &amp;&amp; lf[1] === crlf[1] &amp;&amp; crlf[1] === '\n';</div>}
```
###basic functionality
          
```
function(){
              <div class="code">var a = &quot;ba&quot;, b = &quot;QUX&quot;;
return `foo bar
${a + &quot;z&quot;} ${b.toLowerCase()}` === &quot;foo bar\nbaz qux&quot;;</div>}
```
###toString conversion
          
```
function(){
              <div class="code">var a = {
  toString: function() { return &quot;foo&quot;; },
  valueOf: function() { return &quot;bar&quot;; },
};
return `${a}` === &quot;foo&quot;;</div>}
```
###tagged template literals
          
```
function(){
              <div class="code">var called = false;
function fn(parts, a, b) {
  called = true;
  return parts instanceof Array &amp;&amp;
    parts[0]     === &quot;foo&quot;      &amp;&amp;
    parts[1]     === &quot;bar\n&quot;    &amp;&amp;
    parts.raw[0] === &quot;foo&quot;      &amp;&amp;
    parts.raw[1] === &quot;bar\\n&quot;   &amp;&amp;
    a === 123                   &amp;&amp;
    b === 456;
}
return fn `foo${123}bar\n${456}` &amp;&amp; called;</div>}
```
###passed array is frozen
          
```
function(){
              <div class="code">return (function(parts) {
  return Object.isFrozen(parts) &amp;&amp; Object.isFrozen(parts.raw);
}) `foo${0}bar${0}baz`;</div>}
```
###line break normalisation
          
```
function(){
              <div class="code">var cr   = eval(&quot;`x&quot; + String.fromCharCode(13)    + &quot;y`&quot;);
var lf   = eval(&quot;`x&quot; + String.fromCharCode(10)    + &quot;y`&quot;);
var crlf = eval(&quot;`x&quot; + String.fromCharCode(13,10) + &quot;y`&quot;);

return cr.length === 3 &amp;&amp; lf.length === 3 &amp;&amp; crlf.length === 3
  &amp;&amp; cr[1] === lf[1] &amp;&amp; lf[1] === crlf[1] &amp;&amp; crlf[1] === '\n';</div>}
```
###basic functionality
          
```
function(){
              <div class="code">var a = &quot;ba&quot;, b = &quot;QUX&quot;;
return `foo bar
${a + &quot;z&quot;} ${b.toLowerCase()}` === &quot;foo bar\nbaz qux&quot;;</div>}
```
###toString conversion
          
```
function(){
              <div class="code">var a = {
  toString: function() { return &quot;foo&quot;; },
  valueOf: function() { return &quot;bar&quot;; },
};
return `${a}` === &quot;foo&quot;;</div>}
```
###tagged template literals
          
```
function(){
              <div class="code">var called = false;
function fn(parts, a, b) {
  called = true;
  return parts instanceof Array &amp;&amp;
    parts[0]     === &quot;foo&quot;      &amp;&amp;
    parts[1]     === &quot;bar\n&quot;    &amp;&amp;
    parts.raw[0] === &quot;foo&quot;      &amp;&amp;
    parts.raw[1] === &quot;bar\\n&quot;   &amp;&amp;
    a === 123                   &amp;&amp;
    b === 456;
}
return fn `foo${123}bar\n${456}` &amp;&amp; called;</div>}
```
###passed array is frozen
          
```
function(){
              <div class="code">return (function(parts) {
  return Object.isFrozen(parts) &amp;&amp; Object.isFrozen(parts.raw);
}) `foo${0}bar${0}baz`;</div>}
```
###line break normalisation
          
```
function(){
              <div class="code">var cr   = eval(&quot;`x&quot; + String.fromCharCode(13)    + &quot;y`&quot;);
var lf   = eval(&quot;`x&quot; + String.fromCharCode(10)    + &quot;y`&quot;);
var crlf = eval(&quot;`x&quot; + String.fromCharCode(13,10) + &quot;y`&quot;);

return cr.length === 3 &amp;&amp; lf.length === 3 &amp;&amp; crlf.length === 3
  &amp;&amp; cr[1] === lf[1] &amp;&amp; lf[1] === crlf[1] &amp;&amp; crlf[1] === '\n';</div>}
```
###basic functionality
          
```
function(){
              <div class="code">var a = &quot;ba&quot;, b = &quot;QUX&quot;;
return `foo bar
${a + &quot;z&quot;} ${b.toLowerCase()}` === &quot;foo bar\nbaz qux&quot;;</div>}
```
###toString conversion
          
```
function(){
              <div class="code">var a = {
  toString: function() { return &quot;foo&quot;; },
  valueOf: function() { return &quot;bar&quot;; },
};
return `${a}` === &quot;foo&quot;;</div>}
```
###tagged template literals
          
```
function(){
              <div class="code">var called = false;
function fn(parts, a, b) {
  called = true;
  return parts instanceof Array &amp;&amp;
    parts[0]     === &quot;foo&quot;      &amp;&amp;
    parts[1]     === &quot;bar\n&quot;    &amp;&amp;
    parts.raw[0] === &quot;foo&quot;      &amp;&amp;
    parts.raw[1] === &quot;bar\\n&quot;   &amp;&amp;
    a === 123                   &amp;&amp;
    b === 456;
}
return fn `foo${123}bar\n${456}` &amp;&amp; called;</div>}
```
###passed array is frozen
          
```
function(){
              <div class="code">return (function(parts) {
  return Object.isFrozen(parts) &amp;&amp; Object.isFrozen(parts.raw);
}) `foo${0}bar${0}baz`;</div>}
```
###line break normalisation
          
```
function(){
              <div class="code">var cr   = eval(&quot;`x&quot; + String.fromCharCode(13)    + &quot;y`&quot;);
var lf   = eval(&quot;`x&quot; + String.fromCharCode(10)    + &quot;y`&quot;);
var crlf = eval(&quot;`x&quot; + String.fromCharCode(13,10) + &quot;y`&quot;);

return cr.length === 3 &amp;&amp; lf.length === 3 &amp;&amp; crlf.length === 3
  &amp;&amp; cr[1] === lf[1] &amp;&amp; lf[1] === crlf[1] &amp;&amp; crlf[1] === '\n';</div>}
```
###basic functionality
          
```
function(){
              <div class="code">var a = &quot;ba&quot;, b = &quot;QUX&quot;;
return `foo bar
${a + &quot;z&quot;} ${b.toLowerCase()}` === &quot;foo bar\nbaz qux&quot;;</div>}
```
###toString conversion
          
```
function(){
              <div class="code">var a = {
  toString: function() { return &quot;foo&quot;; },
  valueOf: function() { return &quot;bar&quot;; },
};
return `${a}` === &quot;foo&quot;;</div>}
```
###tagged template literals
          
```
function(){
              <div class="code">var called = false;
function fn(parts, a, b) {
  called = true;
  return parts instanceof Array &amp;&amp;
    parts[0]     === &quot;foo&quot;      &amp;&amp;
    parts[1]     === &quot;bar\n&quot;    &amp;&amp;
    parts.raw[0] === &quot;foo&quot;      &amp;&amp;
    parts.raw[1] === &quot;bar\\n&quot;   &amp;&amp;
    a === 123                   &amp;&amp;
    b === 456;
}
return fn `foo${123}bar\n${456}` &amp;&amp; called;</div>}
```
###passed array is frozen
          
```
function(){
              <div class="code">return (function(parts) {
  return Object.isFrozen(parts) &amp;&amp; Object.isFrozen(parts.raw);
}) `foo${0}bar${0}baz`;</div>}
```
###line break normalisation
          
```
function(){
              <div class="code">var cr   = eval(&quot;`x&quot; + String.fromCharCode(13)    + &quot;y`&quot;);
var lf   = eval(&quot;`x&quot; + String.fromCharCode(10)    + &quot;y`&quot;);
var crlf = eval(&quot;`x&quot; + String.fromCharCode(13,10) + &quot;y`&quot;);

return cr.length === 3 &amp;&amp; lf.length === 3 &amp;&amp; crlf.length === 3
  &amp;&amp; cr[1] === lf[1] &amp;&amp; lf[1] === crlf[1] &amp;&amp; crlf[1] === '\n';</div>}
```
###basic functionality
          
```
function(){
              <div class="code">var a = &quot;ba&quot;, b = &quot;QUX&quot;;
return `foo bar
${a + &quot;z&quot;} ${b.toLowerCase()}` === &quot;foo bar\nbaz qux&quot;;</div>}
```
###toString conversion
          
```
function(){
              <div class="code">var a = {
  toString: function() { return &quot;foo&quot;; },
  valueOf: function() { return &quot;bar&quot;; },
};
return `${a}` === &quot;foo&quot;;</div>}
```
###tagged template literals
          
```
function(){
              <div class="code">var called = false;
function fn(parts, a, b) {
  called = true;
  return parts instanceof Array &amp;&amp;
    parts[0]     === &quot;foo&quot;      &amp;&amp;
    parts[1]     === &quot;bar\n&quot;    &amp;&amp;
    parts.raw[0] === &quot;foo&quot;      &amp;&amp;
    parts.raw[1] === &quot;bar\\n&quot;   &amp;&amp;
    a === 123                   &amp;&amp;
    b === 456;
}
return fn `foo${123}bar\n${456}` &amp;&amp; called;</div>}
```
###passed array is frozen
          
```
function(){
              <div class="code">return (function(parts) {
  return Object.isFrozen(parts) &amp;&amp; Object.isFrozen(parts.raw);
}) `foo${0}bar${0}baz`;</div>}
```
###line break normalisation
          
```
function(){
              <div class="code">var cr   = eval(&quot;`x&quot; + String.fromCharCode(13)    + &quot;y`&quot;);
var lf   = eval(&quot;`x&quot; + String.fromCharCode(10)    + &quot;y`&quot;);
var crlf = eval(&quot;`x&quot; + String.fromCharCode(13,10) + &quot;y`&quot;);

return cr.length === 3 &amp;&amp; lf.length === 3 &amp;&amp; crlf.length === 3
  &amp;&amp; cr[1] === lf[1] &amp;&amp; lf[1] === crlf[1] &amp;&amp; crlf[1] === '\n';</div>}
```
###basic functionality
          
```
function(){
              <div class="code">var a = &quot;ba&quot;, b = &quot;QUX&quot;;
return `foo bar
${a + &quot;z&quot;} ${b.toLowerCase()}` === &quot;foo bar\nbaz qux&quot;;</div>}
```
###toString conversion
          
```
function(){
              <div class="code">var a = {
  toString: function() { return &quot;foo&quot;; },
  valueOf: function() { return &quot;bar&quot;; },
};
return `${a}` === &quot;foo&quot;;</div>}
```
###tagged template literals
          
```
function(){
              <div class="code">var called = false;
function fn(parts, a, b) {
  called = true;
  return parts instanceof Array &amp;&amp;
    parts[0]     === &quot;foo&quot;      &amp;&amp;
    parts[1]     === &quot;bar\n&quot;    &amp;&amp;
    parts.raw[0] === &quot;foo&quot;      &amp;&amp;
    parts.raw[1] === &quot;bar\\n&quot;   &amp;&amp;
    a === 123                   &amp;&amp;
    b === 456;
}
return fn `foo${123}bar\n${456}` &amp;&amp; called;</div>}
```
###passed array is frozen
          
```
function(){
              <div class="code">return (function(parts) {
  return Object.isFrozen(parts) &amp;&amp; Object.isFrozen(parts.raw);
}) `foo${0}bar${0}baz`;</div>}
```
###line break normalisation
          
```
function(){
              <div class="code">var cr   = eval(&quot;`x&quot; + String.fromCharCode(13)    + &quot;y`&quot;);
var lf   = eval(&quot;`x&quot; + String.fromCharCode(10)    + &quot;y`&quot;);
var crlf = eval(&quot;`x&quot; + String.fromCharCode(13,10) + &quot;y`&quot;);

return cr.length === 3 &amp;&amp; lf.length === 3 &amp;&amp; crlf.length === 3
  &amp;&amp; cr[1] === lf[1] &amp;&amp; lf[1] === crlf[1] &amp;&amp; crlf[1] === '\n';</div>}
```
###basic functionality
          
```
function(){
              <div class="code">var a = &quot;ba&quot;, b = &quot;QUX&quot;;
return `foo bar
${a + &quot;z&quot;} ${b.toLowerCase()}` === &quot;foo bar\nbaz qux&quot;;</div>}
```
###toString conversion
          
```
function(){
              <div class="code">var a = {
  toString: function() { return &quot;foo&quot;; },
  valueOf: function() { return &quot;bar&quot;; },
};
return `${a}` === &quot;foo&quot;;</div>}
```
###tagged template literals
          
```
function(){
              <div class="code">var called = false;
function fn(parts, a, b) {
  called = true;
  return parts instanceof Array &amp;&amp;
    parts[0]     === &quot;foo&quot;      &amp;&amp;
    parts[1]     === &quot;bar\n&quot;    &amp;&amp;
    parts.raw[0] === &quot;foo&quot;      &amp;&amp;
    parts.raw[1] === &quot;bar\\n&quot;   &amp;&amp;
    a === 123                   &amp;&amp;
    b === 456;
}
return fn `foo${123}bar\n${456}` &amp;&amp; called;</div>}
```
###passed array is frozen
          
```
function(){
              <div class="code">return (function(parts) {
  return Object.isFrozen(parts) &amp;&amp; Object.isFrozen(parts.raw);
}) `foo${0}bar${0}baz`;</div>}
```
###line break normalisation
          
```
function(){
              <div class="code">var cr   = eval(&quot;`x&quot; + String.fromCharCode(13)    + &quot;y`&quot;);
var lf   = eval(&quot;`x&quot; + String.fromCharCode(10)    + &quot;y`&quot;);
var crlf = eval(&quot;`x&quot; + String.fromCharCode(13,10) + &quot;y`&quot;);

return cr.length === 3 &amp;&amp; lf.length === 3 &amp;&amp; crlf.length === 3
  &amp;&amp; cr[1] === lf[1] &amp;&amp; lf[1] === crlf[1] &amp;&amp; crlf[1] === '\n';</div>}
```
###basic functionality
          
```
function(){
              <div class="code">var a = &quot;ba&quot;, b = &quot;QUX&quot;;
return `foo bar
${a + &quot;z&quot;} ${b.toLowerCase()}` === &quot;foo bar\nbaz qux&quot;;</div>}
```
###toString conversion
          
```
function(){
              <div class="code">var a = {
  toString: function() { return &quot;foo&quot;; },
  valueOf: function() { return &quot;bar&quot;; },
};
return `${a}` === &quot;foo&quot;;</div>}
```
###tagged template literals
          
```
function(){
              <div class="code">var called = false;
function fn(parts, a, b) {
  called = true;
  return parts instanceof Array &amp;&amp;
    parts[0]     === &quot;foo&quot;      &amp;&amp;
    parts[1]     === &quot;bar\n&quot;    &amp;&amp;
    parts.raw[0] === &quot;foo&quot;      &amp;&amp;
    parts.raw[1] === &quot;bar\\n&quot;   &amp;&amp;
    a === 123                   &amp;&amp;
    b === 456;
}
return fn `foo${123}bar\n${456}` &amp;&amp; called;</div>}
```
###passed array is frozen
          
```
function(){
              <div class="code">return (function(parts) {
  return Object.isFrozen(parts) &amp;&amp; Object.isFrozen(parts.raw);
}) `foo${0}bar${0}baz`;</div>}
```
###line break normalisation
          
```
function(){
              <div class="code">var cr   = eval(&quot;`x&quot; + String.fromCharCode(13)    + &quot;y`&quot;);
var lf   = eval(&quot;`x&quot; + String.fromCharCode(10)    + &quot;y`&quot;);
var crlf = eval(&quot;`x&quot; + String.fromCharCode(13,10) + &quot;y`&quot;);

return cr.length === 3 &amp;&amp; lf.length === 3 &amp;&amp; crlf.length === 3
  &amp;&amp; cr[1] === lf[1] &amp;&amp; lf[1] === crlf[1] &amp;&amp; crlf[1] === '\n';</div>}
```
