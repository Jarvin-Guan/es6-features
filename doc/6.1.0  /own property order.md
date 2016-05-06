###Object.keys
          
```
function(){
              <div class="code">var obj = {
  // Non-negative integer names appear first in value order
  2:    true,
  0:    true,
  1:    true,
  // Other string names appear in source order
  ' ':  true,
  // Non-negative integers are sorted above other names
  9:    true,
  D:    true,
  B:    true,
  // Negative integers are treated as other names
  '-1': true,
};
// Other string names are added in order of creation
obj.A = true;
// Non-negative integer names, conversely, ignore order of creation
obj[3] = true;
// Having a total of 20+ properties doesn't affect property order
&quot;EFGHIJKLMNOPQRSTUVWXYZ&quot;.split('').forEach(function(key){
  obj[key] = true;
});
// Object.defineProperty doesn't affect the above rules
Object.defineProperty(obj, 'C', { value: true, enumerable: true });
Object.defineProperty(obj, '4', { value: true, enumerable: true });
// Deleting and reinserting a property doesn't preserve its position
delete obj[2];
obj[2] = true;

var forInOrder = '';
for(var key in obj)forInOrder += key;

return Object.keys(obj).join('') === forInOrder;</div>}
```
###Object.getOwnPropertyNames
          
```
function(){
              <div class="code">var obj = {
  2:    true,
  0:    true,
  1:    true,
  ' ':  true,
  9:    true,
  D:    true,
  B:    true,
  '-1': true
};
obj.A = true;
obj[3] = true;
&quot;EFGHIJKLMNOPQRSTUVWXYZ&quot;.split('').forEach(function(key){
  obj[key] = true;
});
Object.defineProperty(obj, 'C', { value: true, enumerable: true });
Object.defineProperty(obj, '4', { value: true, enumerable: true });
delete obj[2];
obj[2] = true;

return Object.getOwnPropertyNames(obj).join('') === &quot;012349 DB-1AEFGHIJKLMNOPQRSTUVWXYZC&quot;;</div>}
```
###Object.assign
          
```
function(){
              <div class="code">var result = '';
var target = {};

&quot;012349 DBACEFGHIJKLMNOPQRST&quot;.split('').concat(-1).forEach(function(key){
  Object.defineProperty(target, key, {
    set: function(){
      result += key;
    }
  })
});

var obj = {2: 2, 0: 0, 1: 1, ' ': ' ', 9: 9, D: 'D', B: 'B', '-1': '-1'};
Object.defineProperty(obj, 'A', {value: 'A',  enumerable: true});
Object.defineProperty(obj, '3', {value: '3',  enumerable: true});
Object.defineProperty(obj, 'C', {value: 'C',  enumerable: true});
Object.defineProperty(obj, '4', {value: '4',  enumerable: true});
delete obj[2];
obj[2] = true;

&quot;EFGHIJKLMNOPQRST&quot;.split('').forEach(function(key){
  obj[key] = key;
});

Object.assign(target, obj);

return result === &quot;012349 DB-1ACEFGHIJKLMNOPQRST&quot;;</div>}
```
###JSON.stringify
          
```
function(){
              <div class="code">var obj = {
  2:    true,
  0:    true,
  1:    true,
  ' ':  true,
  9:    true,
  D:    true,
  B:    true,
  '-1': true
};
obj.A = true;
obj[3] = true;
&quot;EFGHIJKLMNOPQRSTUVWXYZ&quot;.split('').forEach(function(key){
  obj[key] = true;
});
Object.defineProperty(obj, 'C', { value: true, enumerable: true });
Object.defineProperty(obj, '4', { value: true, enumerable: true });
delete obj[2];
obj[2] = true;

return JSON.stringify(obj) ===
  '{&quot;0&quot;:true,&quot;1&quot;:true,&quot;2&quot;:true,&quot;3&quot;:true,&quot;4&quot;:true,&quot;9&quot;:true,&quot; &quot;:true,&quot;D&quot;:true,&quot;B&quot;:true,&quot;-1&quot;:true,&quot;A&quot;:true,&quot;E&quot;:true,&quot;F&quot;:true,&quot;G&quot;:true,&quot;H&quot;:true,&quot;I&quot;:true,&quot;J&quot;:true,&quot;K&quot;:true,&quot;L&quot;:true,&quot;M&quot;:true,&quot;N&quot;:true,&quot;O&quot;:true,&quot;P&quot;:true,&quot;Q&quot;:true,&quot;R&quot;:true,&quot;S&quot;:true,&quot;T&quot;:true,&quot;U&quot;:true,&quot;V&quot;:true,&quot;W&quot;:true,&quot;X&quot;:true,&quot;Y&quot;:true,&quot;Z&quot;:true,&quot;C&quot;:true}';</div>}
```
###JSON.parse
          
```
function(){
              <div class="code">var result = '';
JSON.parse(
  '{&quot;0&quot;:true,&quot;1&quot;:true,&quot;2&quot;:true,&quot;3&quot;:true,&quot;4&quot;:true,&quot;9&quot;:true,&quot; &quot;:true,&quot;D&quot;:true,&quot;B&quot;:true,&quot;-1&quot;:true,&quot;E&quot;:true,&quot;F&quot;:true,&quot;G&quot;:true,&quot;H&quot;:true,&quot;I&quot;:true,&quot;J&quot;:true,&quot;K&quot;:true,&quot;L&quot;:true,&quot;A&quot;:true,&quot;C&quot;:true}',
  function reviver(k,v) {
    result += k;
    return v;
  }
);
return result === &quot;012349 DB-1EFGHIJKLAC&quot;;</div>}
```
###Reflect.ownKeys, string key order
          
```
function(){
              <div class="code">var obj = {
  2:    true,
  0:    true,
  1:    true,
  ' ':  true,
  9:    true,
  D:    true,
  B:    true,
  '-1': true
};
obj.A = true;
obj[3] = true;
&quot;EFGHIJKLMNOPQRSTUVWXYZ&quot;.split('').forEach(function(key){
  obj[key] = true;
});
Object.defineProperty(obj, 'C', { value: true, enumerable: true });
Object.defineProperty(obj, '4', { value: true, enumerable: true });
delete obj[2];
obj[2] = true;

return Reflect.ownKeys(obj).join('') === &quot;012349 DB-1AEFGHIJKLMNOPQRSTUVWXYZC&quot;;</div>}
```
###Reflect.ownKeys, symbol key order
          
```
function(){
              <div class="code">var sym1 = Symbol(), sym2 = Symbol(), sym3 = Symbol();
var obj = {
  1:    true,
  A:    true,
};
obj.B = true;
obj[sym1] = true;
obj[2] = true;
obj[sym2] = true;
Object.defineProperty(obj, 'C', { value: true, enumerable: true });
Object.defineProperty(obj, sym3,{ value: true, enumerable: true });
Object.defineProperty(obj, 'D', { value: true, enumerable: true });

var result = Reflect.ownKeys(obj);
var l = result.length;
return result[l-3] === sym1 &amp;&amp; result[l-2] === sym2 &amp;&amp; result[l-1] === sym3;</div>}
```
###Object.keys
          
```
function(){
              <div class="code">var obj = {
  // Non-negative integer names appear first in value order
  2:    true,
  0:    true,
  1:    true,
  // Other string names appear in source order
  ' ':  true,
  // Non-negative integers are sorted above other names
  9:    true,
  D:    true,
  B:    true,
  // Negative integers are treated as other names
  '-1': true,
};
// Other string names are added in order of creation
obj.A = true;
// Non-negative integer names, conversely, ignore order of creation
obj[3] = true;
// Having a total of 20+ properties doesn't affect property order
&quot;EFGHIJKLMNOPQRSTUVWXYZ&quot;.split('').forEach(function(key){
  obj[key] = true;
});
// Object.defineProperty doesn't affect the above rules
Object.defineProperty(obj, 'C', { value: true, enumerable: true });
Object.defineProperty(obj, '4', { value: true, enumerable: true });
// Deleting and reinserting a property doesn't preserve its position
delete obj[2];
obj[2] = true;

var forInOrder = '';
for(var key in obj)forInOrder += key;

return Object.keys(obj).join('') === forInOrder;</div>}
```
###Object.getOwnPropertyNames
          
```
function(){
              <div class="code">var obj = {
  2:    true,
  0:    true,
  1:    true,
  ' ':  true,
  9:    true,
  D:    true,
  B:    true,
  '-1': true
};
obj.A = true;
obj[3] = true;
&quot;EFGHIJKLMNOPQRSTUVWXYZ&quot;.split('').forEach(function(key){
  obj[key] = true;
});
Object.defineProperty(obj, 'C', { value: true, enumerable: true });
Object.defineProperty(obj, '4', { value: true, enumerable: true });
delete obj[2];
obj[2] = true;

return Object.getOwnPropertyNames(obj).join('') === &quot;012349 DB-1AEFGHIJKLMNOPQRSTUVWXYZC&quot;;</div>}
```
###Object.assign
          
```
function(){
              <div class="code">var result = '';
var target = {};

&quot;012349 DBACEFGHIJKLMNOPQRST&quot;.split('').concat(-1).forEach(function(key){
  Object.defineProperty(target, key, {
    set: function(){
      result += key;
    }
  })
});

var obj = {2: 2, 0: 0, 1: 1, ' ': ' ', 9: 9, D: 'D', B: 'B', '-1': '-1'};
Object.defineProperty(obj, 'A', {value: 'A',  enumerable: true});
Object.defineProperty(obj, '3', {value: '3',  enumerable: true});
Object.defineProperty(obj, 'C', {value: 'C',  enumerable: true});
Object.defineProperty(obj, '4', {value: '4',  enumerable: true});
delete obj[2];
obj[2] = true;

&quot;EFGHIJKLMNOPQRST&quot;.split('').forEach(function(key){
  obj[key] = key;
});

Object.assign(target, obj);

return result === &quot;012349 DB-1ACEFGHIJKLMNOPQRST&quot;;</div>}
```
###JSON.stringify
          
```
function(){
              <div class="code">var obj = {
  2:    true,
  0:    true,
  1:    true,
  ' ':  true,
  9:    true,
  D:    true,
  B:    true,
  '-1': true
};
obj.A = true;
obj[3] = true;
&quot;EFGHIJKLMNOPQRSTUVWXYZ&quot;.split('').forEach(function(key){
  obj[key] = true;
});
Object.defineProperty(obj, 'C', { value: true, enumerable: true });
Object.defineProperty(obj, '4', { value: true, enumerable: true });
delete obj[2];
obj[2] = true;

return JSON.stringify(obj) ===
  '{&quot;0&quot;:true,&quot;1&quot;:true,&quot;2&quot;:true,&quot;3&quot;:true,&quot;4&quot;:true,&quot;9&quot;:true,&quot; &quot;:true,&quot;D&quot;:true,&quot;B&quot;:true,&quot;-1&quot;:true,&quot;A&quot;:true,&quot;E&quot;:true,&quot;F&quot;:true,&quot;G&quot;:true,&quot;H&quot;:true,&quot;I&quot;:true,&quot;J&quot;:true,&quot;K&quot;:true,&quot;L&quot;:true,&quot;M&quot;:true,&quot;N&quot;:true,&quot;O&quot;:true,&quot;P&quot;:true,&quot;Q&quot;:true,&quot;R&quot;:true,&quot;S&quot;:true,&quot;T&quot;:true,&quot;U&quot;:true,&quot;V&quot;:true,&quot;W&quot;:true,&quot;X&quot;:true,&quot;Y&quot;:true,&quot;Z&quot;:true,&quot;C&quot;:true}';</div>}
```
###JSON.parse
          
```
function(){
              <div class="code">var result = '';
JSON.parse(
  '{&quot;0&quot;:true,&quot;1&quot;:true,&quot;2&quot;:true,&quot;3&quot;:true,&quot;4&quot;:true,&quot;9&quot;:true,&quot; &quot;:true,&quot;D&quot;:true,&quot;B&quot;:true,&quot;-1&quot;:true,&quot;E&quot;:true,&quot;F&quot;:true,&quot;G&quot;:true,&quot;H&quot;:true,&quot;I&quot;:true,&quot;J&quot;:true,&quot;K&quot;:true,&quot;L&quot;:true,&quot;A&quot;:true,&quot;C&quot;:true}',
  function reviver(k,v) {
    result += k;
    return v;
  }
);
return result === &quot;012349 DB-1EFGHIJKLAC&quot;;</div>}
```
###Reflect.ownKeys, string key order
          
```
function(){
              <div class="code">var obj = {
  2:    true,
  0:    true,
  1:    true,
  ' ':  true,
  9:    true,
  D:    true,
  B:    true,
  '-1': true
};
obj.A = true;
obj[3] = true;
&quot;EFGHIJKLMNOPQRSTUVWXYZ&quot;.split('').forEach(function(key){
  obj[key] = true;
});
Object.defineProperty(obj, 'C', { value: true, enumerable: true });
Object.defineProperty(obj, '4', { value: true, enumerable: true });
delete obj[2];
obj[2] = true;

return Reflect.ownKeys(obj).join('') === &quot;012349 DB-1AEFGHIJKLMNOPQRSTUVWXYZC&quot;;</div>}
```
###Reflect.ownKeys, symbol key order
          
```
function(){
              <div class="code">var sym1 = Symbol(), sym2 = Symbol(), sym3 = Symbol();
var obj = {
  1:    true,
  A:    true,
};
obj.B = true;
obj[sym1] = true;
obj[2] = true;
obj[sym2] = true;
Object.defineProperty(obj, 'C', { value: true, enumerable: true });
Object.defineProperty(obj, sym3,{ value: true, enumerable: true });
Object.defineProperty(obj, 'D', { value: true, enumerable: true });

var result = Reflect.ownKeys(obj);
var l = result.length;
return result[l-3] === sym1 &amp;&amp; result[l-2] === sym2 &amp;&amp; result[l-1] === sym3;</div>}
```
###Object.keys
          
```
function(){
              <div class="code">var obj = {
  // Non-negative integer names appear first in value order
  2:    true,
  0:    true,
  1:    true,
  // Other string names appear in source order
  ' ':  true,
  // Non-negative integers are sorted above other names
  9:    true,
  D:    true,
  B:    true,
  // Negative integers are treated as other names
  '-1': true,
};
// Other string names are added in order of creation
obj.A = true;
// Non-negative integer names, conversely, ignore order of creation
obj[3] = true;
// Having a total of 20+ properties doesn't affect property order
&quot;EFGHIJKLMNOPQRSTUVWXYZ&quot;.split('').forEach(function(key){
  obj[key] = true;
});
// Object.defineProperty doesn't affect the above rules
Object.defineProperty(obj, 'C', { value: true, enumerable: true });
Object.defineProperty(obj, '4', { value: true, enumerable: true });
// Deleting and reinserting a property doesn't preserve its position
delete obj[2];
obj[2] = true;

var forInOrder = '';
for(var key in obj)forInOrder += key;

return Object.keys(obj).join('') === forInOrder;</div>}
```
###Object.getOwnPropertyNames
          
```
function(){
              <div class="code">var obj = {
  2:    true,
  0:    true,
  1:    true,
  ' ':  true,
  9:    true,
  D:    true,
  B:    true,
  '-1': true
};
obj.A = true;
obj[3] = true;
&quot;EFGHIJKLMNOPQRSTUVWXYZ&quot;.split('').forEach(function(key){
  obj[key] = true;
});
Object.defineProperty(obj, 'C', { value: true, enumerable: true });
Object.defineProperty(obj, '4', { value: true, enumerable: true });
delete obj[2];
obj[2] = true;

return Object.getOwnPropertyNames(obj).join('') === &quot;012349 DB-1AEFGHIJKLMNOPQRSTUVWXYZC&quot;;</div>}
```
###Object.assign
          
```
function(){
              <div class="code">var result = '';
var target = {};

&quot;012349 DBACEFGHIJKLMNOPQRST&quot;.split('').concat(-1).forEach(function(key){
  Object.defineProperty(target, key, {
    set: function(){
      result += key;
    }
  })
});

var obj = {2: 2, 0: 0, 1: 1, ' ': ' ', 9: 9, D: 'D', B: 'B', '-1': '-1'};
Object.defineProperty(obj, 'A', {value: 'A',  enumerable: true});
Object.defineProperty(obj, '3', {value: '3',  enumerable: true});
Object.defineProperty(obj, 'C', {value: 'C',  enumerable: true});
Object.defineProperty(obj, '4', {value: '4',  enumerable: true});
delete obj[2];
obj[2] = true;

&quot;EFGHIJKLMNOPQRST&quot;.split('').forEach(function(key){
  obj[key] = key;
});

Object.assign(target, obj);

return result === &quot;012349 DB-1ACEFGHIJKLMNOPQRST&quot;;</div>}
```
###JSON.stringify
          
```
function(){
              <div class="code">var obj = {
  2:    true,
  0:    true,
  1:    true,
  ' ':  true,
  9:    true,
  D:    true,
  B:    true,
  '-1': true
};
obj.A = true;
obj[3] = true;
&quot;EFGHIJKLMNOPQRSTUVWXYZ&quot;.split('').forEach(function(key){
  obj[key] = true;
});
Object.defineProperty(obj, 'C', { value: true, enumerable: true });
Object.defineProperty(obj, '4', { value: true, enumerable: true });
delete obj[2];
obj[2] = true;

return JSON.stringify(obj) ===
  '{&quot;0&quot;:true,&quot;1&quot;:true,&quot;2&quot;:true,&quot;3&quot;:true,&quot;4&quot;:true,&quot;9&quot;:true,&quot; &quot;:true,&quot;D&quot;:true,&quot;B&quot;:true,&quot;-1&quot;:true,&quot;A&quot;:true,&quot;E&quot;:true,&quot;F&quot;:true,&quot;G&quot;:true,&quot;H&quot;:true,&quot;I&quot;:true,&quot;J&quot;:true,&quot;K&quot;:true,&quot;L&quot;:true,&quot;M&quot;:true,&quot;N&quot;:true,&quot;O&quot;:true,&quot;P&quot;:true,&quot;Q&quot;:true,&quot;R&quot;:true,&quot;S&quot;:true,&quot;T&quot;:true,&quot;U&quot;:true,&quot;V&quot;:true,&quot;W&quot;:true,&quot;X&quot;:true,&quot;Y&quot;:true,&quot;Z&quot;:true,&quot;C&quot;:true}';</div>}
```
###JSON.parse
          
```
function(){
              <div class="code">var result = '';
JSON.parse(
  '{&quot;0&quot;:true,&quot;1&quot;:true,&quot;2&quot;:true,&quot;3&quot;:true,&quot;4&quot;:true,&quot;9&quot;:true,&quot; &quot;:true,&quot;D&quot;:true,&quot;B&quot;:true,&quot;-1&quot;:true,&quot;E&quot;:true,&quot;F&quot;:true,&quot;G&quot;:true,&quot;H&quot;:true,&quot;I&quot;:true,&quot;J&quot;:true,&quot;K&quot;:true,&quot;L&quot;:true,&quot;A&quot;:true,&quot;C&quot;:true}',
  function reviver(k,v) {
    result += k;
    return v;
  }
);
return result === &quot;012349 DB-1EFGHIJKLAC&quot;;</div>}
```
###Reflect.ownKeys, string key order
          
```
function(){
              <div class="code">var obj = {
  2:    true,
  0:    true,
  1:    true,
  ' ':  true,
  9:    true,
  D:    true,
  B:    true,
  '-1': true
};
obj.A = true;
obj[3] = true;
&quot;EFGHIJKLMNOPQRSTUVWXYZ&quot;.split('').forEach(function(key){
  obj[key] = true;
});
Object.defineProperty(obj, 'C', { value: true, enumerable: true });
Object.defineProperty(obj, '4', { value: true, enumerable: true });
delete obj[2];
obj[2] = true;

return Reflect.ownKeys(obj).join('') === &quot;012349 DB-1AEFGHIJKLMNOPQRSTUVWXYZC&quot;;</div>}
```
###Reflect.ownKeys, symbol key order
          
```
function(){
              <div class="code">var sym1 = Symbol(), sym2 = Symbol(), sym3 = Symbol();
var obj = {
  1:    true,
  A:    true,
};
obj.B = true;
obj[sym1] = true;
obj[2] = true;
obj[sym2] = true;
Object.defineProperty(obj, 'C', { value: true, enumerable: true });
Object.defineProperty(obj, sym3,{ value: true, enumerable: true });
Object.defineProperty(obj, 'D', { value: true, enumerable: true });

var result = Reflect.ownKeys(obj);
var l = result.length;
return result[l-3] === sym1 &amp;&amp; result[l-2] === sym2 &amp;&amp; result[l-1] === sym3;</div>}
```
###Object.keys
          
```
function(){
              <div class="code">var obj = {
  // Non-negative integer names appear first in value order
  2:    true,
  0:    true,
  1:    true,
  // Other string names appear in source order
  ' ':  true,
  // Non-negative integers are sorted above other names
  9:    true,
  D:    true,
  B:    true,
  // Negative integers are treated as other names
  '-1': true,
};
// Other string names are added in order of creation
obj.A = true;
// Non-negative integer names, conversely, ignore order of creation
obj[3] = true;
// Having a total of 20+ properties doesn't affect property order
&quot;EFGHIJKLMNOPQRSTUVWXYZ&quot;.split('').forEach(function(key){
  obj[key] = true;
});
// Object.defineProperty doesn't affect the above rules
Object.defineProperty(obj, 'C', { value: true, enumerable: true });
Object.defineProperty(obj, '4', { value: true, enumerable: true });
// Deleting and reinserting a property doesn't preserve its position
delete obj[2];
obj[2] = true;

var forInOrder = '';
for(var key in obj)forInOrder += key;

return Object.keys(obj).join('') === forInOrder;</div>}
```
###Object.getOwnPropertyNames
          
```
function(){
              <div class="code">var obj = {
  2:    true,
  0:    true,
  1:    true,
  ' ':  true,
  9:    true,
  D:    true,
  B:    true,
  '-1': true
};
obj.A = true;
obj[3] = true;
&quot;EFGHIJKLMNOPQRSTUVWXYZ&quot;.split('').forEach(function(key){
  obj[key] = true;
});
Object.defineProperty(obj, 'C', { value: true, enumerable: true });
Object.defineProperty(obj, '4', { value: true, enumerable: true });
delete obj[2];
obj[2] = true;

return Object.getOwnPropertyNames(obj).join('') === &quot;012349 DB-1AEFGHIJKLMNOPQRSTUVWXYZC&quot;;</div>}
```
###Object.assign
          
```
function(){
              <div class="code">var result = '';
var target = {};

&quot;012349 DBACEFGHIJKLMNOPQRST&quot;.split('').concat(-1).forEach(function(key){
  Object.defineProperty(target, key, {
    set: function(){
      result += key;
    }
  })
});

var obj = {2: 2, 0: 0, 1: 1, ' ': ' ', 9: 9, D: 'D', B: 'B', '-1': '-1'};
Object.defineProperty(obj, 'A', {value: 'A',  enumerable: true});
Object.defineProperty(obj, '3', {value: '3',  enumerable: true});
Object.defineProperty(obj, 'C', {value: 'C',  enumerable: true});
Object.defineProperty(obj, '4', {value: '4',  enumerable: true});
delete obj[2];
obj[2] = true;

&quot;EFGHIJKLMNOPQRST&quot;.split('').forEach(function(key){
  obj[key] = key;
});

Object.assign(target, obj);

return result === &quot;012349 DB-1ACEFGHIJKLMNOPQRST&quot;;</div>}
```
###JSON.stringify
          
```
function(){
              <div class="code">var obj = {
  2:    true,
  0:    true,
  1:    true,
  ' ':  true,
  9:    true,
  D:    true,
  B:    true,
  '-1': true
};
obj.A = true;
obj[3] = true;
&quot;EFGHIJKLMNOPQRSTUVWXYZ&quot;.split('').forEach(function(key){
  obj[key] = true;
});
Object.defineProperty(obj, 'C', { value: true, enumerable: true });
Object.defineProperty(obj, '4', { value: true, enumerable: true });
delete obj[2];
obj[2] = true;

return JSON.stringify(obj) ===
  '{&quot;0&quot;:true,&quot;1&quot;:true,&quot;2&quot;:true,&quot;3&quot;:true,&quot;4&quot;:true,&quot;9&quot;:true,&quot; &quot;:true,&quot;D&quot;:true,&quot;B&quot;:true,&quot;-1&quot;:true,&quot;A&quot;:true,&quot;E&quot;:true,&quot;F&quot;:true,&quot;G&quot;:true,&quot;H&quot;:true,&quot;I&quot;:true,&quot;J&quot;:true,&quot;K&quot;:true,&quot;L&quot;:true,&quot;M&quot;:true,&quot;N&quot;:true,&quot;O&quot;:true,&quot;P&quot;:true,&quot;Q&quot;:true,&quot;R&quot;:true,&quot;S&quot;:true,&quot;T&quot;:true,&quot;U&quot;:true,&quot;V&quot;:true,&quot;W&quot;:true,&quot;X&quot;:true,&quot;Y&quot;:true,&quot;Z&quot;:true,&quot;C&quot;:true}';</div>}
```
###JSON.parse
          
```
function(){
              <div class="code">var result = '';
JSON.parse(
  '{&quot;0&quot;:true,&quot;1&quot;:true,&quot;2&quot;:true,&quot;3&quot;:true,&quot;4&quot;:true,&quot;9&quot;:true,&quot; &quot;:true,&quot;D&quot;:true,&quot;B&quot;:true,&quot;-1&quot;:true,&quot;E&quot;:true,&quot;F&quot;:true,&quot;G&quot;:true,&quot;H&quot;:true,&quot;I&quot;:true,&quot;J&quot;:true,&quot;K&quot;:true,&quot;L&quot;:true,&quot;A&quot;:true,&quot;C&quot;:true}',
  function reviver(k,v) {
    result += k;
    return v;
  }
);
return result === &quot;012349 DB-1EFGHIJKLAC&quot;;</div>}
```
###Reflect.ownKeys, string key order
          
```
function(){
              <div class="code">var obj = {
  2:    true,
  0:    true,
  1:    true,
  ' ':  true,
  9:    true,
  D:    true,
  B:    true,
  '-1': true
};
obj.A = true;
obj[3] = true;
&quot;EFGHIJKLMNOPQRSTUVWXYZ&quot;.split('').forEach(function(key){
  obj[key] = true;
});
Object.defineProperty(obj, 'C', { value: true, enumerable: true });
Object.defineProperty(obj, '4', { value: true, enumerable: true });
delete obj[2];
obj[2] = true;

return Reflect.ownKeys(obj).join('') === &quot;012349 DB-1AEFGHIJKLMNOPQRSTUVWXYZC&quot;;</div>}
```
###Reflect.ownKeys, symbol key order
          
```
function(){
              <div class="code">var sym1 = Symbol(), sym2 = Symbol(), sym3 = Symbol();
var obj = {
  1:    true,
  A:    true,
};
obj.B = true;
obj[sym1] = true;
obj[2] = true;
obj[sym2] = true;
Object.defineProperty(obj, 'C', { value: true, enumerable: true });
Object.defineProperty(obj, sym3,{ value: true, enumerable: true });
Object.defineProperty(obj, 'D', { value: true, enumerable: true });

var result = Reflect.ownKeys(obj);
var l = result.length;
return result[l-3] === sym1 &amp;&amp; result[l-2] === sym2 &amp;&amp; result[l-1] === sym3;</div>}
```
###Object.keys
          
```
function(){
              <div class="code">var obj = {
  // Non-negative integer names appear first in value order
  2:    true,
  0:    true,
  1:    true,
  // Other string names appear in source order
  ' ':  true,
  // Non-negative integers are sorted above other names
  9:    true,
  D:    true,
  B:    true,
  // Negative integers are treated as other names
  '-1': true,
};
// Other string names are added in order of creation
obj.A = true;
// Non-negative integer names, conversely, ignore order of creation
obj[3] = true;
// Having a total of 20+ properties doesn't affect property order
&quot;EFGHIJKLMNOPQRSTUVWXYZ&quot;.split('').forEach(function(key){
  obj[key] = true;
});
// Object.defineProperty doesn't affect the above rules
Object.defineProperty(obj, 'C', { value: true, enumerable: true });
Object.defineProperty(obj, '4', { value: true, enumerable: true });
// Deleting and reinserting a property doesn't preserve its position
delete obj[2];
obj[2] = true;

var forInOrder = '';
for(var key in obj)forInOrder += key;

return Object.keys(obj).join('') === forInOrder;</div>}
```
###Object.getOwnPropertyNames
          
```
function(){
              <div class="code">var obj = {
  2:    true,
  0:    true,
  1:    true,
  ' ':  true,
  9:    true,
  D:    true,
  B:    true,
  '-1': true
};
obj.A = true;
obj[3] = true;
&quot;EFGHIJKLMNOPQRSTUVWXYZ&quot;.split('').forEach(function(key){
  obj[key] = true;
});
Object.defineProperty(obj, 'C', { value: true, enumerable: true });
Object.defineProperty(obj, '4', { value: true, enumerable: true });
delete obj[2];
obj[2] = true;

return Object.getOwnPropertyNames(obj).join('') === &quot;012349 DB-1AEFGHIJKLMNOPQRSTUVWXYZC&quot;;</div>}
```
###Object.assign
          
```
function(){
              <div class="code">var result = '';
var target = {};

&quot;012349 DBACEFGHIJKLMNOPQRST&quot;.split('').concat(-1).forEach(function(key){
  Object.defineProperty(target, key, {
    set: function(){
      result += key;
    }
  })
});

var obj = {2: 2, 0: 0, 1: 1, ' ': ' ', 9: 9, D: 'D', B: 'B', '-1': '-1'};
Object.defineProperty(obj, 'A', {value: 'A',  enumerable: true});
Object.defineProperty(obj, '3', {value: '3',  enumerable: true});
Object.defineProperty(obj, 'C', {value: 'C',  enumerable: true});
Object.defineProperty(obj, '4', {value: '4',  enumerable: true});
delete obj[2];
obj[2] = true;

&quot;EFGHIJKLMNOPQRST&quot;.split('').forEach(function(key){
  obj[key] = key;
});

Object.assign(target, obj);

return result === &quot;012349 DB-1ACEFGHIJKLMNOPQRST&quot;;</div>}
```
###JSON.stringify
          
```
function(){
              <div class="code">var obj = {
  2:    true,
  0:    true,
  1:    true,
  ' ':  true,
  9:    true,
  D:    true,
  B:    true,
  '-1': true
};
obj.A = true;
obj[3] = true;
&quot;EFGHIJKLMNOPQRSTUVWXYZ&quot;.split('').forEach(function(key){
  obj[key] = true;
});
Object.defineProperty(obj, 'C', { value: true, enumerable: true });
Object.defineProperty(obj, '4', { value: true, enumerable: true });
delete obj[2];
obj[2] = true;

return JSON.stringify(obj) ===
  '{&quot;0&quot;:true,&quot;1&quot;:true,&quot;2&quot;:true,&quot;3&quot;:true,&quot;4&quot;:true,&quot;9&quot;:true,&quot; &quot;:true,&quot;D&quot;:true,&quot;B&quot;:true,&quot;-1&quot;:true,&quot;A&quot;:true,&quot;E&quot;:true,&quot;F&quot;:true,&quot;G&quot;:true,&quot;H&quot;:true,&quot;I&quot;:true,&quot;J&quot;:true,&quot;K&quot;:true,&quot;L&quot;:true,&quot;M&quot;:true,&quot;N&quot;:true,&quot;O&quot;:true,&quot;P&quot;:true,&quot;Q&quot;:true,&quot;R&quot;:true,&quot;S&quot;:true,&quot;T&quot;:true,&quot;U&quot;:true,&quot;V&quot;:true,&quot;W&quot;:true,&quot;X&quot;:true,&quot;Y&quot;:true,&quot;Z&quot;:true,&quot;C&quot;:true}';</div>}
```
###JSON.parse
          
```
function(){
              <div class="code">var result = '';
JSON.parse(
  '{&quot;0&quot;:true,&quot;1&quot;:true,&quot;2&quot;:true,&quot;3&quot;:true,&quot;4&quot;:true,&quot;9&quot;:true,&quot; &quot;:true,&quot;D&quot;:true,&quot;B&quot;:true,&quot;-1&quot;:true,&quot;E&quot;:true,&quot;F&quot;:true,&quot;G&quot;:true,&quot;H&quot;:true,&quot;I&quot;:true,&quot;J&quot;:true,&quot;K&quot;:true,&quot;L&quot;:true,&quot;A&quot;:true,&quot;C&quot;:true}',
  function reviver(k,v) {
    result += k;
    return v;
  }
);
return result === &quot;012349 DB-1EFGHIJKLAC&quot;;</div>}
```
###Reflect.ownKeys, string key order
          
```
function(){
              <div class="code">var obj = {
  2:    true,
  0:    true,
  1:    true,
  ' ':  true,
  9:    true,
  D:    true,
  B:    true,
  '-1': true
};
obj.A = true;
obj[3] = true;
&quot;EFGHIJKLMNOPQRSTUVWXYZ&quot;.split('').forEach(function(key){
  obj[key] = true;
});
Object.defineProperty(obj, 'C', { value: true, enumerable: true });
Object.defineProperty(obj, '4', { value: true, enumerable: true });
delete obj[2];
obj[2] = true;

return Reflect.ownKeys(obj).join('') === &quot;012349 DB-1AEFGHIJKLMNOPQRSTUVWXYZC&quot;;</div>}
```
###Reflect.ownKeys, symbol key order
          
```
function(){
              <div class="code">var sym1 = Symbol(), sym2 = Symbol(), sym3 = Symbol();
var obj = {
  1:    true,
  A:    true,
};
obj.B = true;
obj[sym1] = true;
obj[2] = true;
obj[sym2] = true;
Object.defineProperty(obj, 'C', { value: true, enumerable: true });
Object.defineProperty(obj, sym3,{ value: true, enumerable: true });
Object.defineProperty(obj, 'D', { value: true, enumerable: true });

var result = Reflect.ownKeys(obj);
var l = result.length;
return result[l-3] === sym1 &amp;&amp; result[l-2] === sym2 &amp;&amp; result[l-1] === sym3;</div>}
```
###Object.keys
          
```
function(){
              <div class="code">var obj = {
  // Non-negative integer names appear first in value order
  2:    true,
  0:    true,
  1:    true,
  // Other string names appear in source order
  ' ':  true,
  // Non-negative integers are sorted above other names
  9:    true,
  D:    true,
  B:    true,
  // Negative integers are treated as other names
  '-1': true,
};
// Other string names are added in order of creation
obj.A = true;
// Non-negative integer names, conversely, ignore order of creation
obj[3] = true;
// Having a total of 20+ properties doesn't affect property order
&quot;EFGHIJKLMNOPQRSTUVWXYZ&quot;.split('').forEach(function(key){
  obj[key] = true;
});
// Object.defineProperty doesn't affect the above rules
Object.defineProperty(obj, 'C', { value: true, enumerable: true });
Object.defineProperty(obj, '4', { value: true, enumerable: true });
// Deleting and reinserting a property doesn't preserve its position
delete obj[2];
obj[2] = true;

var forInOrder = '';
for(var key in obj)forInOrder += key;

return Object.keys(obj).join('') === forInOrder;</div>}
```
###Object.getOwnPropertyNames
          
```
function(){
              <div class="code">var obj = {
  2:    true,
  0:    true,
  1:    true,
  ' ':  true,
  9:    true,
  D:    true,
  B:    true,
  '-1': true
};
obj.A = true;
obj[3] = true;
&quot;EFGHIJKLMNOPQRSTUVWXYZ&quot;.split('').forEach(function(key){
  obj[key] = true;
});
Object.defineProperty(obj, 'C', { value: true, enumerable: true });
Object.defineProperty(obj, '4', { value: true, enumerable: true });
delete obj[2];
obj[2] = true;

return Object.getOwnPropertyNames(obj).join('') === &quot;012349 DB-1AEFGHIJKLMNOPQRSTUVWXYZC&quot;;</div>}
```
###Object.assign
          
```
function(){
              <div class="code">var result = '';
var target = {};

&quot;012349 DBACEFGHIJKLMNOPQRST&quot;.split('').concat(-1).forEach(function(key){
  Object.defineProperty(target, key, {
    set: function(){
      result += key;
    }
  })
});

var obj = {2: 2, 0: 0, 1: 1, ' ': ' ', 9: 9, D: 'D', B: 'B', '-1': '-1'};
Object.defineProperty(obj, 'A', {value: 'A',  enumerable: true});
Object.defineProperty(obj, '3', {value: '3',  enumerable: true});
Object.defineProperty(obj, 'C', {value: 'C',  enumerable: true});
Object.defineProperty(obj, '4', {value: '4',  enumerable: true});
delete obj[2];
obj[2] = true;

&quot;EFGHIJKLMNOPQRST&quot;.split('').forEach(function(key){
  obj[key] = key;
});

Object.assign(target, obj);

return result === &quot;012349 DB-1ACEFGHIJKLMNOPQRST&quot;;</div>}
```
###JSON.stringify
          
```
function(){
              <div class="code">var obj = {
  2:    true,
  0:    true,
  1:    true,
  ' ':  true,
  9:    true,
  D:    true,
  B:    true,
  '-1': true
};
obj.A = true;
obj[3] = true;
&quot;EFGHIJKLMNOPQRSTUVWXYZ&quot;.split('').forEach(function(key){
  obj[key] = true;
});
Object.defineProperty(obj, 'C', { value: true, enumerable: true });
Object.defineProperty(obj, '4', { value: true, enumerable: true });
delete obj[2];
obj[2] = true;

return JSON.stringify(obj) ===
  '{&quot;0&quot;:true,&quot;1&quot;:true,&quot;2&quot;:true,&quot;3&quot;:true,&quot;4&quot;:true,&quot;9&quot;:true,&quot; &quot;:true,&quot;D&quot;:true,&quot;B&quot;:true,&quot;-1&quot;:true,&quot;A&quot;:true,&quot;E&quot;:true,&quot;F&quot;:true,&quot;G&quot;:true,&quot;H&quot;:true,&quot;I&quot;:true,&quot;J&quot;:true,&quot;K&quot;:true,&quot;L&quot;:true,&quot;M&quot;:true,&quot;N&quot;:true,&quot;O&quot;:true,&quot;P&quot;:true,&quot;Q&quot;:true,&quot;R&quot;:true,&quot;S&quot;:true,&quot;T&quot;:true,&quot;U&quot;:true,&quot;V&quot;:true,&quot;W&quot;:true,&quot;X&quot;:true,&quot;Y&quot;:true,&quot;Z&quot;:true,&quot;C&quot;:true}';</div>}
```
###JSON.parse
          
```
function(){
              <div class="code">var result = '';
JSON.parse(
  '{&quot;0&quot;:true,&quot;1&quot;:true,&quot;2&quot;:true,&quot;3&quot;:true,&quot;4&quot;:true,&quot;9&quot;:true,&quot; &quot;:true,&quot;D&quot;:true,&quot;B&quot;:true,&quot;-1&quot;:true,&quot;E&quot;:true,&quot;F&quot;:true,&quot;G&quot;:true,&quot;H&quot;:true,&quot;I&quot;:true,&quot;J&quot;:true,&quot;K&quot;:true,&quot;L&quot;:true,&quot;A&quot;:true,&quot;C&quot;:true}',
  function reviver(k,v) {
    result += k;
    return v;
  }
);
return result === &quot;012349 DB-1EFGHIJKLAC&quot;;</div>}
```
###Reflect.ownKeys, string key order
          
```
function(){
              <div class="code">var obj = {
  2:    true,
  0:    true,
  1:    true,
  ' ':  true,
  9:    true,
  D:    true,
  B:    true,
  '-1': true
};
obj.A = true;
obj[3] = true;
&quot;EFGHIJKLMNOPQRSTUVWXYZ&quot;.split('').forEach(function(key){
  obj[key] = true;
});
Object.defineProperty(obj, 'C', { value: true, enumerable: true });
Object.defineProperty(obj, '4', { value: true, enumerable: true });
delete obj[2];
obj[2] = true;

return Reflect.ownKeys(obj).join('') === &quot;012349 DB-1AEFGHIJKLMNOPQRSTUVWXYZC&quot;;</div>}
```
###Reflect.ownKeys, symbol key order
          
```
function(){
              <div class="code">var sym1 = Symbol(), sym2 = Symbol(), sym3 = Symbol();
var obj = {
  1:    true,
  A:    true,
};
obj.B = true;
obj[sym1] = true;
obj[2] = true;
obj[sym2] = true;
Object.defineProperty(obj, 'C', { value: true, enumerable: true });
Object.defineProperty(obj, sym3,{ value: true, enumerable: true });
Object.defineProperty(obj, 'D', { value: true, enumerable: true });

var result = Reflect.ownKeys(obj);
var l = result.length;
return result[l-3] === sym1 &amp;&amp; result[l-2] === sym2 &amp;&amp; result[l-1] === sym3;</div>}
```
###Object.keys
          
```
function(){
              <div class="code">var obj = {
  // Non-negative integer names appear first in value order
  2:    true,
  0:    true,
  1:    true,
  // Other string names appear in source order
  ' ':  true,
  // Non-negative integers are sorted above other names
  9:    true,
  D:    true,
  B:    true,
  // Negative integers are treated as other names
  '-1': true,
};
// Other string names are added in order of creation
obj.A = true;
// Non-negative integer names, conversely, ignore order of creation
obj[3] = true;
// Having a total of 20+ properties doesn't affect property order
&quot;EFGHIJKLMNOPQRSTUVWXYZ&quot;.split('').forEach(function(key){
  obj[key] = true;
});
// Object.defineProperty doesn't affect the above rules
Object.defineProperty(obj, 'C', { value: true, enumerable: true });
Object.defineProperty(obj, '4', { value: true, enumerable: true });
// Deleting and reinserting a property doesn't preserve its position
delete obj[2];
obj[2] = true;

var forInOrder = '';
for(var key in obj)forInOrder += key;

return Object.keys(obj).join('') === forInOrder;</div>}
```
###Object.getOwnPropertyNames
          
```
function(){
              <div class="code">var obj = {
  2:    true,
  0:    true,
  1:    true,
  ' ':  true,
  9:    true,
  D:    true,
  B:    true,
  '-1': true
};
obj.A = true;
obj[3] = true;
&quot;EFGHIJKLMNOPQRSTUVWXYZ&quot;.split('').forEach(function(key){
  obj[key] = true;
});
Object.defineProperty(obj, 'C', { value: true, enumerable: true });
Object.defineProperty(obj, '4', { value: true, enumerable: true });
delete obj[2];
obj[2] = true;

return Object.getOwnPropertyNames(obj).join('') === &quot;012349 DB-1AEFGHIJKLMNOPQRSTUVWXYZC&quot;;</div>}
```
###Object.assign
          
```
function(){
              <div class="code">var result = '';
var target = {};

&quot;012349 DBACEFGHIJKLMNOPQRST&quot;.split('').concat(-1).forEach(function(key){
  Object.defineProperty(target, key, {
    set: function(){
      result += key;
    }
  })
});

var obj = {2: 2, 0: 0, 1: 1, ' ': ' ', 9: 9, D: 'D', B: 'B', '-1': '-1'};
Object.defineProperty(obj, 'A', {value: 'A',  enumerable: true});
Object.defineProperty(obj, '3', {value: '3',  enumerable: true});
Object.defineProperty(obj, 'C', {value: 'C',  enumerable: true});
Object.defineProperty(obj, '4', {value: '4',  enumerable: true});
delete obj[2];
obj[2] = true;

&quot;EFGHIJKLMNOPQRST&quot;.split('').forEach(function(key){
  obj[key] = key;
});

Object.assign(target, obj);

return result === &quot;012349 DB-1ACEFGHIJKLMNOPQRST&quot;;</div>}
```
###JSON.stringify
          
```
function(){
              <div class="code">var obj = {
  2:    true,
  0:    true,
  1:    true,
  ' ':  true,
  9:    true,
  D:    true,
  B:    true,
  '-1': true
};
obj.A = true;
obj[3] = true;
&quot;EFGHIJKLMNOPQRSTUVWXYZ&quot;.split('').forEach(function(key){
  obj[key] = true;
});
Object.defineProperty(obj, 'C', { value: true, enumerable: true });
Object.defineProperty(obj, '4', { value: true, enumerable: true });
delete obj[2];
obj[2] = true;

return JSON.stringify(obj) ===
  '{&quot;0&quot;:true,&quot;1&quot;:true,&quot;2&quot;:true,&quot;3&quot;:true,&quot;4&quot;:true,&quot;9&quot;:true,&quot; &quot;:true,&quot;D&quot;:true,&quot;B&quot;:true,&quot;-1&quot;:true,&quot;A&quot;:true,&quot;E&quot;:true,&quot;F&quot;:true,&quot;G&quot;:true,&quot;H&quot;:true,&quot;I&quot;:true,&quot;J&quot;:true,&quot;K&quot;:true,&quot;L&quot;:true,&quot;M&quot;:true,&quot;N&quot;:true,&quot;O&quot;:true,&quot;P&quot;:true,&quot;Q&quot;:true,&quot;R&quot;:true,&quot;S&quot;:true,&quot;T&quot;:true,&quot;U&quot;:true,&quot;V&quot;:true,&quot;W&quot;:true,&quot;X&quot;:true,&quot;Y&quot;:true,&quot;Z&quot;:true,&quot;C&quot;:true}';</div>}
```
###JSON.parse
          
```
function(){
              <div class="code">var result = '';
JSON.parse(
  '{&quot;0&quot;:true,&quot;1&quot;:true,&quot;2&quot;:true,&quot;3&quot;:true,&quot;4&quot;:true,&quot;9&quot;:true,&quot; &quot;:true,&quot;D&quot;:true,&quot;B&quot;:true,&quot;-1&quot;:true,&quot;E&quot;:true,&quot;F&quot;:true,&quot;G&quot;:true,&quot;H&quot;:true,&quot;I&quot;:true,&quot;J&quot;:true,&quot;K&quot;:true,&quot;L&quot;:true,&quot;A&quot;:true,&quot;C&quot;:true}',
  function reviver(k,v) {
    result += k;
    return v;
  }
);
return result === &quot;012349 DB-1EFGHIJKLAC&quot;;</div>}
```
###Reflect.ownKeys, string key order
          
```
function(){
              <div class="code">var obj = {
  2:    true,
  0:    true,
  1:    true,
  ' ':  true,
  9:    true,
  D:    true,
  B:    true,
  '-1': true
};
obj.A = true;
obj[3] = true;
&quot;EFGHIJKLMNOPQRSTUVWXYZ&quot;.split('').forEach(function(key){
  obj[key] = true;
});
Object.defineProperty(obj, 'C', { value: true, enumerable: true });
Object.defineProperty(obj, '4', { value: true, enumerable: true });
delete obj[2];
obj[2] = true;

return Reflect.ownKeys(obj).join('') === &quot;012349 DB-1AEFGHIJKLMNOPQRSTUVWXYZC&quot;;</div>}
```
###Reflect.ownKeys, symbol key order
          
```
function(){
              <div class="code">var sym1 = Symbol(), sym2 = Symbol(), sym3 = Symbol();
var obj = {
  1:    true,
  A:    true,
};
obj.B = true;
obj[sym1] = true;
obj[2] = true;
obj[sym2] = true;
Object.defineProperty(obj, 'C', { value: true, enumerable: true });
Object.defineProperty(obj, sym3,{ value: true, enumerable: true });
Object.defineProperty(obj, 'D', { value: true, enumerable: true });

var result = Reflect.ownKeys(obj);
var l = result.length;
return result[l-3] === sym1 &amp;&amp; result[l-2] === sym2 &amp;&amp; result[l-1] === sym3;</div>}
```
###Object.keys
          
```
function(){
              <div class="code">var obj = {
  // Non-negative integer names appear first in value order
  2:    true,
  0:    true,
  1:    true,
  // Other string names appear in source order
  ' ':  true,
  // Non-negative integers are sorted above other names
  9:    true,
  D:    true,
  B:    true,
  // Negative integers are treated as other names
  '-1': true,
};
// Other string names are added in order of creation
obj.A = true;
// Non-negative integer names, conversely, ignore order of creation
obj[3] = true;
// Having a total of 20+ properties doesn't affect property order
&quot;EFGHIJKLMNOPQRSTUVWXYZ&quot;.split('').forEach(function(key){
  obj[key] = true;
});
// Object.defineProperty doesn't affect the above rules
Object.defineProperty(obj, 'C', { value: true, enumerable: true });
Object.defineProperty(obj, '4', { value: true, enumerable: true });
// Deleting and reinserting a property doesn't preserve its position
delete obj[2];
obj[2] = true;

var forInOrder = '';
for(var key in obj)forInOrder += key;

return Object.keys(obj).join('') === forInOrder;</div>}
```
###Object.getOwnPropertyNames
          
```
function(){
              <div class="code">var obj = {
  2:    true,
  0:    true,
  1:    true,
  ' ':  true,
  9:    true,
  D:    true,
  B:    true,
  '-1': true
};
obj.A = true;
obj[3] = true;
&quot;EFGHIJKLMNOPQRSTUVWXYZ&quot;.split('').forEach(function(key){
  obj[key] = true;
});
Object.defineProperty(obj, 'C', { value: true, enumerable: true });
Object.defineProperty(obj, '4', { value: true, enumerable: true });
delete obj[2];
obj[2] = true;

return Object.getOwnPropertyNames(obj).join('') === &quot;012349 DB-1AEFGHIJKLMNOPQRSTUVWXYZC&quot;;</div>}
```
###Object.assign
          
```
function(){
              <div class="code">var result = '';
var target = {};

&quot;012349 DBACEFGHIJKLMNOPQRST&quot;.split('').concat(-1).forEach(function(key){
  Object.defineProperty(target, key, {
    set: function(){
      result += key;
    }
  })
});

var obj = {2: 2, 0: 0, 1: 1, ' ': ' ', 9: 9, D: 'D', B: 'B', '-1': '-1'};
Object.defineProperty(obj, 'A', {value: 'A',  enumerable: true});
Object.defineProperty(obj, '3', {value: '3',  enumerable: true});
Object.defineProperty(obj, 'C', {value: 'C',  enumerable: true});
Object.defineProperty(obj, '4', {value: '4',  enumerable: true});
delete obj[2];
obj[2] = true;

&quot;EFGHIJKLMNOPQRST&quot;.split('').forEach(function(key){
  obj[key] = key;
});

Object.assign(target, obj);

return result === &quot;012349 DB-1ACEFGHIJKLMNOPQRST&quot;;</div>}
```
###JSON.stringify
          
```
function(){
              <div class="code">var obj = {
  2:    true,
  0:    true,
  1:    true,
  ' ':  true,
  9:    true,
  D:    true,
  B:    true,
  '-1': true
};
obj.A = true;
obj[3] = true;
&quot;EFGHIJKLMNOPQRSTUVWXYZ&quot;.split('').forEach(function(key){
  obj[key] = true;
});
Object.defineProperty(obj, 'C', { value: true, enumerable: true });
Object.defineProperty(obj, '4', { value: true, enumerable: true });
delete obj[2];
obj[2] = true;

return JSON.stringify(obj) ===
  '{&quot;0&quot;:true,&quot;1&quot;:true,&quot;2&quot;:true,&quot;3&quot;:true,&quot;4&quot;:true,&quot;9&quot;:true,&quot; &quot;:true,&quot;D&quot;:true,&quot;B&quot;:true,&quot;-1&quot;:true,&quot;A&quot;:true,&quot;E&quot;:true,&quot;F&quot;:true,&quot;G&quot;:true,&quot;H&quot;:true,&quot;I&quot;:true,&quot;J&quot;:true,&quot;K&quot;:true,&quot;L&quot;:true,&quot;M&quot;:true,&quot;N&quot;:true,&quot;O&quot;:true,&quot;P&quot;:true,&quot;Q&quot;:true,&quot;R&quot;:true,&quot;S&quot;:true,&quot;T&quot;:true,&quot;U&quot;:true,&quot;V&quot;:true,&quot;W&quot;:true,&quot;X&quot;:true,&quot;Y&quot;:true,&quot;Z&quot;:true,&quot;C&quot;:true}';</div>}
```
###JSON.parse
          
```
function(){
              <div class="code">var result = '';
JSON.parse(
  '{&quot;0&quot;:true,&quot;1&quot;:true,&quot;2&quot;:true,&quot;3&quot;:true,&quot;4&quot;:true,&quot;9&quot;:true,&quot; &quot;:true,&quot;D&quot;:true,&quot;B&quot;:true,&quot;-1&quot;:true,&quot;E&quot;:true,&quot;F&quot;:true,&quot;G&quot;:true,&quot;H&quot;:true,&quot;I&quot;:true,&quot;J&quot;:true,&quot;K&quot;:true,&quot;L&quot;:true,&quot;A&quot;:true,&quot;C&quot;:true}',
  function reviver(k,v) {
    result += k;
    return v;
  }
);
return result === &quot;012349 DB-1EFGHIJKLAC&quot;;</div>}
```
###Reflect.ownKeys, string key order
          
```
function(){
              <div class="code">var obj = {
  2:    true,
  0:    true,
  1:    true,
  ' ':  true,
  9:    true,
  D:    true,
  B:    true,
  '-1': true
};
obj.A = true;
obj[3] = true;
&quot;EFGHIJKLMNOPQRSTUVWXYZ&quot;.split('').forEach(function(key){
  obj[key] = true;
});
Object.defineProperty(obj, 'C', { value: true, enumerable: true });
Object.defineProperty(obj, '4', { value: true, enumerable: true });
delete obj[2];
obj[2] = true;

return Reflect.ownKeys(obj).join('') === &quot;012349 DB-1AEFGHIJKLMNOPQRSTUVWXYZC&quot;;</div>}
```
###Reflect.ownKeys, symbol key order
          
```
function(){
              <div class="code">var sym1 = Symbol(), sym2 = Symbol(), sym3 = Symbol();
var obj = {
  1:    true,
  A:    true,
};
obj.B = true;
obj[sym1] = true;
obj[2] = true;
obj[sym2] = true;
Object.defineProperty(obj, 'C', { value: true, enumerable: true });
Object.defineProperty(obj, sym3,{ value: true, enumerable: true });
Object.defineProperty(obj, 'D', { value: true, enumerable: true });

var result = Reflect.ownKeys(obj);
var l = result.length;
return result[l-3] === sym1 &amp;&amp; result[l-2] === sym2 &amp;&amp; result[l-1] === sym3;</div>}
```
###Object.keys
          
```
function(){
              <div class="code">var obj = {
  // Non-negative integer names appear first in value order
  2:    true,
  0:    true,
  1:    true,
  // Other string names appear in source order
  ' ':  true,
  // Non-negative integers are sorted above other names
  9:    true,
  D:    true,
  B:    true,
  // Negative integers are treated as other names
  '-1': true,
};
// Other string names are added in order of creation
obj.A = true;
// Non-negative integer names, conversely, ignore order of creation
obj[3] = true;
// Having a total of 20+ properties doesn't affect property order
&quot;EFGHIJKLMNOPQRSTUVWXYZ&quot;.split('').forEach(function(key){
  obj[key] = true;
});
// Object.defineProperty doesn't affect the above rules
Object.defineProperty(obj, 'C', { value: true, enumerable: true });
Object.defineProperty(obj, '4', { value: true, enumerable: true });
// Deleting and reinserting a property doesn't preserve its position
delete obj[2];
obj[2] = true;

var forInOrder = '';
for(var key in obj)forInOrder += key;

return Object.keys(obj).join('') === forInOrder;</div>}
```
###Object.getOwnPropertyNames
          
```
function(){
              <div class="code">var obj = {
  2:    true,
  0:    true,
  1:    true,
  ' ':  true,
  9:    true,
  D:    true,
  B:    true,
  '-1': true
};
obj.A = true;
obj[3] = true;
&quot;EFGHIJKLMNOPQRSTUVWXYZ&quot;.split('').forEach(function(key){
  obj[key] = true;
});
Object.defineProperty(obj, 'C', { value: true, enumerable: true });
Object.defineProperty(obj, '4', { value: true, enumerable: true });
delete obj[2];
obj[2] = true;

return Object.getOwnPropertyNames(obj).join('') === &quot;012349 DB-1AEFGHIJKLMNOPQRSTUVWXYZC&quot;;</div>}
```
###Object.assign
          
```
function(){
              <div class="code">var result = '';
var target = {};

&quot;012349 DBACEFGHIJKLMNOPQRST&quot;.split('').concat(-1).forEach(function(key){
  Object.defineProperty(target, key, {
    set: function(){
      result += key;
    }
  })
});

var obj = {2: 2, 0: 0, 1: 1, ' ': ' ', 9: 9, D: 'D', B: 'B', '-1': '-1'};
Object.defineProperty(obj, 'A', {value: 'A',  enumerable: true});
Object.defineProperty(obj, '3', {value: '3',  enumerable: true});
Object.defineProperty(obj, 'C', {value: 'C',  enumerable: true});
Object.defineProperty(obj, '4', {value: '4',  enumerable: true});
delete obj[2];
obj[2] = true;

&quot;EFGHIJKLMNOPQRST&quot;.split('').forEach(function(key){
  obj[key] = key;
});

Object.assign(target, obj);

return result === &quot;012349 DB-1ACEFGHIJKLMNOPQRST&quot;;</div>}
```
###JSON.stringify
          
```
function(){
              <div class="code">var obj = {
  2:    true,
  0:    true,
  1:    true,
  ' ':  true,
  9:    true,
  D:    true,
  B:    true,
  '-1': true
};
obj.A = true;
obj[3] = true;
&quot;EFGHIJKLMNOPQRSTUVWXYZ&quot;.split('').forEach(function(key){
  obj[key] = true;
});
Object.defineProperty(obj, 'C', { value: true, enumerable: true });
Object.defineProperty(obj, '4', { value: true, enumerable: true });
delete obj[2];
obj[2] = true;

return JSON.stringify(obj) ===
  '{&quot;0&quot;:true,&quot;1&quot;:true,&quot;2&quot;:true,&quot;3&quot;:true,&quot;4&quot;:true,&quot;9&quot;:true,&quot; &quot;:true,&quot;D&quot;:true,&quot;B&quot;:true,&quot;-1&quot;:true,&quot;A&quot;:true,&quot;E&quot;:true,&quot;F&quot;:true,&quot;G&quot;:true,&quot;H&quot;:true,&quot;I&quot;:true,&quot;J&quot;:true,&quot;K&quot;:true,&quot;L&quot;:true,&quot;M&quot;:true,&quot;N&quot;:true,&quot;O&quot;:true,&quot;P&quot;:true,&quot;Q&quot;:true,&quot;R&quot;:true,&quot;S&quot;:true,&quot;T&quot;:true,&quot;U&quot;:true,&quot;V&quot;:true,&quot;W&quot;:true,&quot;X&quot;:true,&quot;Y&quot;:true,&quot;Z&quot;:true,&quot;C&quot;:true}';</div>}
```
###JSON.parse
          
```
function(){
              <div class="code">var result = '';
JSON.parse(
  '{&quot;0&quot;:true,&quot;1&quot;:true,&quot;2&quot;:true,&quot;3&quot;:true,&quot;4&quot;:true,&quot;9&quot;:true,&quot; &quot;:true,&quot;D&quot;:true,&quot;B&quot;:true,&quot;-1&quot;:true,&quot;E&quot;:true,&quot;F&quot;:true,&quot;G&quot;:true,&quot;H&quot;:true,&quot;I&quot;:true,&quot;J&quot;:true,&quot;K&quot;:true,&quot;L&quot;:true,&quot;A&quot;:true,&quot;C&quot;:true}',
  function reviver(k,v) {
    result += k;
    return v;
  }
);
return result === &quot;012349 DB-1EFGHIJKLAC&quot;;</div>}
```
###Reflect.ownKeys, string key order
          
```
function(){
              <div class="code">var obj = {
  2:    true,
  0:    true,
  1:    true,
  ' ':  true,
  9:    true,
  D:    true,
  B:    true,
  '-1': true
};
obj.A = true;
obj[3] = true;
&quot;EFGHIJKLMNOPQRSTUVWXYZ&quot;.split('').forEach(function(key){
  obj[key] = true;
});
Object.defineProperty(obj, 'C', { value: true, enumerable: true });
Object.defineProperty(obj, '4', { value: true, enumerable: true });
delete obj[2];
obj[2] = true;

return Reflect.ownKeys(obj).join('') === &quot;012349 DB-1AEFGHIJKLMNOPQRSTUVWXYZC&quot;;</div>}
```
###Reflect.ownKeys, symbol key order
          
```
function(){
              <div class="code">var sym1 = Symbol(), sym2 = Symbol(), sym3 = Symbol();
var obj = {
  1:    true,
  A:    true,
};
obj.B = true;
obj[sym1] = true;
obj[2] = true;
obj[sym2] = true;
Object.defineProperty(obj, 'C', { value: true, enumerable: true });
Object.defineProperty(obj, sym3,{ value: true, enumerable: true });
Object.defineProperty(obj, 'D', { value: true, enumerable: true });

var result = Reflect.ownKeys(obj);
var l = result.length;
return result[l-3] === sym1 &amp;&amp; result[l-2] === sym2 &amp;&amp; result[l-1] === sym3;</div>}
```
###Object.keys
          
```
function(){
              <div class="code">var obj = {
  // Non-negative integer names appear first in value order
  2:    true,
  0:    true,
  1:    true,
  // Other string names appear in source order
  ' ':  true,
  // Non-negative integers are sorted above other names
  9:    true,
  D:    true,
  B:    true,
  // Negative integers are treated as other names
  '-1': true,
};
// Other string names are added in order of creation
obj.A = true;
// Non-negative integer names, conversely, ignore order of creation
obj[3] = true;
// Having a total of 20+ properties doesn't affect property order
&quot;EFGHIJKLMNOPQRSTUVWXYZ&quot;.split('').forEach(function(key){
  obj[key] = true;
});
// Object.defineProperty doesn't affect the above rules
Object.defineProperty(obj, 'C', { value: true, enumerable: true });
Object.defineProperty(obj, '4', { value: true, enumerable: true });
// Deleting and reinserting a property doesn't preserve its position
delete obj[2];
obj[2] = true;

var forInOrder = '';
for(var key in obj)forInOrder += key;

return Object.keys(obj).join('') === forInOrder;</div>}
```
###Object.getOwnPropertyNames
          
```
function(){
              <div class="code">var obj = {
  2:    true,
  0:    true,
  1:    true,
  ' ':  true,
  9:    true,
  D:    true,
  B:    true,
  '-1': true
};
obj.A = true;
obj[3] = true;
&quot;EFGHIJKLMNOPQRSTUVWXYZ&quot;.split('').forEach(function(key){
  obj[key] = true;
});
Object.defineProperty(obj, 'C', { value: true, enumerable: true });
Object.defineProperty(obj, '4', { value: true, enumerable: true });
delete obj[2];
obj[2] = true;

return Object.getOwnPropertyNames(obj).join('') === &quot;012349 DB-1AEFGHIJKLMNOPQRSTUVWXYZC&quot;;</div>}
```
###Object.assign
          
```
function(){
              <div class="code">var result = '';
var target = {};

&quot;012349 DBACEFGHIJKLMNOPQRST&quot;.split('').concat(-1).forEach(function(key){
  Object.defineProperty(target, key, {
    set: function(){
      result += key;
    }
  })
});

var obj = {2: 2, 0: 0, 1: 1, ' ': ' ', 9: 9, D: 'D', B: 'B', '-1': '-1'};
Object.defineProperty(obj, 'A', {value: 'A',  enumerable: true});
Object.defineProperty(obj, '3', {value: '3',  enumerable: true});
Object.defineProperty(obj, 'C', {value: 'C',  enumerable: true});
Object.defineProperty(obj, '4', {value: '4',  enumerable: true});
delete obj[2];
obj[2] = true;

&quot;EFGHIJKLMNOPQRST&quot;.split('').forEach(function(key){
  obj[key] = key;
});

Object.assign(target, obj);

return result === &quot;012349 DB-1ACEFGHIJKLMNOPQRST&quot;;</div>}
```
###JSON.stringify
          
```
function(){
              <div class="code">var obj = {
  2:    true,
  0:    true,
  1:    true,
  ' ':  true,
  9:    true,
  D:    true,
  B:    true,
  '-1': true
};
obj.A = true;
obj[3] = true;
&quot;EFGHIJKLMNOPQRSTUVWXYZ&quot;.split('').forEach(function(key){
  obj[key] = true;
});
Object.defineProperty(obj, 'C', { value: true, enumerable: true });
Object.defineProperty(obj, '4', { value: true, enumerable: true });
delete obj[2];
obj[2] = true;

return JSON.stringify(obj) ===
  '{&quot;0&quot;:true,&quot;1&quot;:true,&quot;2&quot;:true,&quot;3&quot;:true,&quot;4&quot;:true,&quot;9&quot;:true,&quot; &quot;:true,&quot;D&quot;:true,&quot;B&quot;:true,&quot;-1&quot;:true,&quot;A&quot;:true,&quot;E&quot;:true,&quot;F&quot;:true,&quot;G&quot;:true,&quot;H&quot;:true,&quot;I&quot;:true,&quot;J&quot;:true,&quot;K&quot;:true,&quot;L&quot;:true,&quot;M&quot;:true,&quot;N&quot;:true,&quot;O&quot;:true,&quot;P&quot;:true,&quot;Q&quot;:true,&quot;R&quot;:true,&quot;S&quot;:true,&quot;T&quot;:true,&quot;U&quot;:true,&quot;V&quot;:true,&quot;W&quot;:true,&quot;X&quot;:true,&quot;Y&quot;:true,&quot;Z&quot;:true,&quot;C&quot;:true}';</div>}
```
###JSON.parse
          
```
function(){
              <div class="code">var result = '';
JSON.parse(
  '{&quot;0&quot;:true,&quot;1&quot;:true,&quot;2&quot;:true,&quot;3&quot;:true,&quot;4&quot;:true,&quot;9&quot;:true,&quot; &quot;:true,&quot;D&quot;:true,&quot;B&quot;:true,&quot;-1&quot;:true,&quot;E&quot;:true,&quot;F&quot;:true,&quot;G&quot;:true,&quot;H&quot;:true,&quot;I&quot;:true,&quot;J&quot;:true,&quot;K&quot;:true,&quot;L&quot;:true,&quot;A&quot;:true,&quot;C&quot;:true}',
  function reviver(k,v) {
    result += k;
    return v;
  }
);
return result === &quot;012349 DB-1EFGHIJKLAC&quot;;</div>}
```
###Reflect.ownKeys, string key order
          
```
function(){
              <div class="code">var obj = {
  2:    true,
  0:    true,
  1:    true,
  ' ':  true,
  9:    true,
  D:    true,
  B:    true,
  '-1': true
};
obj.A = true;
obj[3] = true;
&quot;EFGHIJKLMNOPQRSTUVWXYZ&quot;.split('').forEach(function(key){
  obj[key] = true;
});
Object.defineProperty(obj, 'C', { value: true, enumerable: true });
Object.defineProperty(obj, '4', { value: true, enumerable: true });
delete obj[2];
obj[2] = true;

return Reflect.ownKeys(obj).join('') === &quot;012349 DB-1AEFGHIJKLMNOPQRSTUVWXYZC&quot;;</div>}
```
###Reflect.ownKeys, symbol key order
          
```
function(){
              <div class="code">var sym1 = Symbol(), sym2 = Symbol(), sym3 = Symbol();
var obj = {
  1:    true,
  A:    true,
};
obj.B = true;
obj[sym1] = true;
obj[2] = true;
obj[sym2] = true;
Object.defineProperty(obj, 'C', { value: true, enumerable: true });
Object.defineProperty(obj, sym3,{ value: true, enumerable: true });
Object.defineProperty(obj, 'D', { value: true, enumerable: true });

var result = Reflect.ownKeys(obj);
var l = result.length;
return result[l-3] === sym1 &amp;&amp; result[l-2] === sym2 &amp;&amp; result[l-1] === sym3;</div>}
```
###Object.keys
          
```
function(){
              <div class="code">var obj = {
  // Non-negative integer names appear first in value order
  2:    true,
  0:    true,
  1:    true,
  // Other string names appear in source order
  ' ':  true,
  // Non-negative integers are sorted above other names
  9:    true,
  D:    true,
  B:    true,
  // Negative integers are treated as other names
  '-1': true,
};
// Other string names are added in order of creation
obj.A = true;
// Non-negative integer names, conversely, ignore order of creation
obj[3] = true;
// Having a total of 20+ properties doesn't affect property order
&quot;EFGHIJKLMNOPQRSTUVWXYZ&quot;.split('').forEach(function(key){
  obj[key] = true;
});
// Object.defineProperty doesn't affect the above rules
Object.defineProperty(obj, 'C', { value: true, enumerable: true });
Object.defineProperty(obj, '4', { value: true, enumerable: true });
// Deleting and reinserting a property doesn't preserve its position
delete obj[2];
obj[2] = true;

var forInOrder = '';
for(var key in obj)forInOrder += key;

return Object.keys(obj).join('') === forInOrder;</div>}
```
###Object.getOwnPropertyNames
          
```
function(){
              <div class="code">var obj = {
  2:    true,
  0:    true,
  1:    true,
  ' ':  true,
  9:    true,
  D:    true,
  B:    true,
  '-1': true
};
obj.A = true;
obj[3] = true;
&quot;EFGHIJKLMNOPQRSTUVWXYZ&quot;.split('').forEach(function(key){
  obj[key] = true;
});
Object.defineProperty(obj, 'C', { value: true, enumerable: true });
Object.defineProperty(obj, '4', { value: true, enumerable: true });
delete obj[2];
obj[2] = true;

return Object.getOwnPropertyNames(obj).join('') === &quot;012349 DB-1AEFGHIJKLMNOPQRSTUVWXYZC&quot;;</div>}
```
###Object.assign
          
```
function(){
              <div class="code">var result = '';
var target = {};

&quot;012349 DBACEFGHIJKLMNOPQRST&quot;.split('').concat(-1).forEach(function(key){
  Object.defineProperty(target, key, {
    set: function(){
      result += key;
    }
  })
});

var obj = {2: 2, 0: 0, 1: 1, ' ': ' ', 9: 9, D: 'D', B: 'B', '-1': '-1'};
Object.defineProperty(obj, 'A', {value: 'A',  enumerable: true});
Object.defineProperty(obj, '3', {value: '3',  enumerable: true});
Object.defineProperty(obj, 'C', {value: 'C',  enumerable: true});
Object.defineProperty(obj, '4', {value: '4',  enumerable: true});
delete obj[2];
obj[2] = true;

&quot;EFGHIJKLMNOPQRST&quot;.split('').forEach(function(key){
  obj[key] = key;
});

Object.assign(target, obj);

return result === &quot;012349 DB-1ACEFGHIJKLMNOPQRST&quot;;</div>}
```
###JSON.stringify
          
```
function(){
              <div class="code">var obj = {
  2:    true,
  0:    true,
  1:    true,
  ' ':  true,
  9:    true,
  D:    true,
  B:    true,
  '-1': true
};
obj.A = true;
obj[3] = true;
&quot;EFGHIJKLMNOPQRSTUVWXYZ&quot;.split('').forEach(function(key){
  obj[key] = true;
});
Object.defineProperty(obj, 'C', { value: true, enumerable: true });
Object.defineProperty(obj, '4', { value: true, enumerable: true });
delete obj[2];
obj[2] = true;

return JSON.stringify(obj) ===
  '{&quot;0&quot;:true,&quot;1&quot;:true,&quot;2&quot;:true,&quot;3&quot;:true,&quot;4&quot;:true,&quot;9&quot;:true,&quot; &quot;:true,&quot;D&quot;:true,&quot;B&quot;:true,&quot;-1&quot;:true,&quot;A&quot;:true,&quot;E&quot;:true,&quot;F&quot;:true,&quot;G&quot;:true,&quot;H&quot;:true,&quot;I&quot;:true,&quot;J&quot;:true,&quot;K&quot;:true,&quot;L&quot;:true,&quot;M&quot;:true,&quot;N&quot;:true,&quot;O&quot;:true,&quot;P&quot;:true,&quot;Q&quot;:true,&quot;R&quot;:true,&quot;S&quot;:true,&quot;T&quot;:true,&quot;U&quot;:true,&quot;V&quot;:true,&quot;W&quot;:true,&quot;X&quot;:true,&quot;Y&quot;:true,&quot;Z&quot;:true,&quot;C&quot;:true}';</div>}
```
###JSON.parse
          
```
function(){
              <div class="code">var result = '';
JSON.parse(
  '{&quot;0&quot;:true,&quot;1&quot;:true,&quot;2&quot;:true,&quot;3&quot;:true,&quot;4&quot;:true,&quot;9&quot;:true,&quot; &quot;:true,&quot;D&quot;:true,&quot;B&quot;:true,&quot;-1&quot;:true,&quot;E&quot;:true,&quot;F&quot;:true,&quot;G&quot;:true,&quot;H&quot;:true,&quot;I&quot;:true,&quot;J&quot;:true,&quot;K&quot;:true,&quot;L&quot;:true,&quot;A&quot;:true,&quot;C&quot;:true}',
  function reviver(k,v) {
    result += k;
    return v;
  }
);
return result === &quot;012349 DB-1EFGHIJKLAC&quot;;</div>}
```
###Reflect.ownKeys, string key order
          
```
function(){
              <div class="code">var obj = {
  2:    true,
  0:    true,
  1:    true,
  ' ':  true,
  9:    true,
  D:    true,
  B:    true,
  '-1': true
};
obj.A = true;
obj[3] = true;
&quot;EFGHIJKLMNOPQRSTUVWXYZ&quot;.split('').forEach(function(key){
  obj[key] = true;
});
Object.defineProperty(obj, 'C', { value: true, enumerable: true });
Object.defineProperty(obj, '4', { value: true, enumerable: true });
delete obj[2];
obj[2] = true;

return Reflect.ownKeys(obj).join('') === &quot;012349 DB-1AEFGHIJKLMNOPQRSTUVWXYZC&quot;;</div>}
```
###Reflect.ownKeys, symbol key order
          
```
function(){
              <div class="code">var sym1 = Symbol(), sym2 = Symbol(), sym3 = Symbol();
var obj = {
  1:    true,
  A:    true,
};
obj.B = true;
obj[sym1] = true;
obj[2] = true;
obj[sym2] = true;
Object.defineProperty(obj, 'C', { value: true, enumerable: true });
Object.defineProperty(obj, sym3,{ value: true, enumerable: true });
Object.defineProperty(obj, 'D', { value: true, enumerable: true });

var result = Reflect.ownKeys(obj);
var l = result.length;
return result[l-3] === sym1 &amp;&amp; result[l-2] === sym2 &amp;&amp; result[l-1] === sym3;</div>}
```
###Object.keys
          
```
function(){
              <div class="code">var obj = {
  // Non-negative integer names appear first in value order
  2:    true,
  0:    true,
  1:    true,
  // Other string names appear in source order
  ' ':  true,
  // Non-negative integers are sorted above other names
  9:    true,
  D:    true,
  B:    true,
  // Negative integers are treated as other names
  '-1': true,
};
// Other string names are added in order of creation
obj.A = true;
// Non-negative integer names, conversely, ignore order of creation
obj[3] = true;
// Having a total of 20+ properties doesn't affect property order
&quot;EFGHIJKLMNOPQRSTUVWXYZ&quot;.split('').forEach(function(key){
  obj[key] = true;
});
// Object.defineProperty doesn't affect the above rules
Object.defineProperty(obj, 'C', { value: true, enumerable: true });
Object.defineProperty(obj, '4', { value: true, enumerable: true });
// Deleting and reinserting a property doesn't preserve its position
delete obj[2];
obj[2] = true;

var forInOrder = '';
for(var key in obj)forInOrder += key;

return Object.keys(obj).join('') === forInOrder;</div>}
```
###Object.getOwnPropertyNames
          
```
function(){
              <div class="code">var obj = {
  2:    true,
  0:    true,
  1:    true,
  ' ':  true,
  9:    true,
  D:    true,
  B:    true,
  '-1': true
};
obj.A = true;
obj[3] = true;
&quot;EFGHIJKLMNOPQRSTUVWXYZ&quot;.split('').forEach(function(key){
  obj[key] = true;
});
Object.defineProperty(obj, 'C', { value: true, enumerable: true });
Object.defineProperty(obj, '4', { value: true, enumerable: true });
delete obj[2];
obj[2] = true;

return Object.getOwnPropertyNames(obj).join('') === &quot;012349 DB-1AEFGHIJKLMNOPQRSTUVWXYZC&quot;;</div>}
```
###Object.assign
          
```
function(){
              <div class="code">var result = '';
var target = {};

&quot;012349 DBACEFGHIJKLMNOPQRST&quot;.split('').concat(-1).forEach(function(key){
  Object.defineProperty(target, key, {
    set: function(){
      result += key;
    }
  })
});

var obj = {2: 2, 0: 0, 1: 1, ' ': ' ', 9: 9, D: 'D', B: 'B', '-1': '-1'};
Object.defineProperty(obj, 'A', {value: 'A',  enumerable: true});
Object.defineProperty(obj, '3', {value: '3',  enumerable: true});
Object.defineProperty(obj, 'C', {value: 'C',  enumerable: true});
Object.defineProperty(obj, '4', {value: '4',  enumerable: true});
delete obj[2];
obj[2] = true;

&quot;EFGHIJKLMNOPQRST&quot;.split('').forEach(function(key){
  obj[key] = key;
});

Object.assign(target, obj);

return result === &quot;012349 DB-1ACEFGHIJKLMNOPQRST&quot;;</div>}
```
###JSON.stringify
          
```
function(){
              <div class="code">var obj = {
  2:    true,
  0:    true,
  1:    true,
  ' ':  true,
  9:    true,
  D:    true,
  B:    true,
  '-1': true
};
obj.A = true;
obj[3] = true;
&quot;EFGHIJKLMNOPQRSTUVWXYZ&quot;.split('').forEach(function(key){
  obj[key] = true;
});
Object.defineProperty(obj, 'C', { value: true, enumerable: true });
Object.defineProperty(obj, '4', { value: true, enumerable: true });
delete obj[2];
obj[2] = true;

return JSON.stringify(obj) ===
  '{&quot;0&quot;:true,&quot;1&quot;:true,&quot;2&quot;:true,&quot;3&quot;:true,&quot;4&quot;:true,&quot;9&quot;:true,&quot; &quot;:true,&quot;D&quot;:true,&quot;B&quot;:true,&quot;-1&quot;:true,&quot;A&quot;:true,&quot;E&quot;:true,&quot;F&quot;:true,&quot;G&quot;:true,&quot;H&quot;:true,&quot;I&quot;:true,&quot;J&quot;:true,&quot;K&quot;:true,&quot;L&quot;:true,&quot;M&quot;:true,&quot;N&quot;:true,&quot;O&quot;:true,&quot;P&quot;:true,&quot;Q&quot;:true,&quot;R&quot;:true,&quot;S&quot;:true,&quot;T&quot;:true,&quot;U&quot;:true,&quot;V&quot;:true,&quot;W&quot;:true,&quot;X&quot;:true,&quot;Y&quot;:true,&quot;Z&quot;:true,&quot;C&quot;:true}';</div>}
```
###JSON.parse
          
```
function(){
              <div class="code">var result = '';
JSON.parse(
  '{&quot;0&quot;:true,&quot;1&quot;:true,&quot;2&quot;:true,&quot;3&quot;:true,&quot;4&quot;:true,&quot;9&quot;:true,&quot; &quot;:true,&quot;D&quot;:true,&quot;B&quot;:true,&quot;-1&quot;:true,&quot;E&quot;:true,&quot;F&quot;:true,&quot;G&quot;:true,&quot;H&quot;:true,&quot;I&quot;:true,&quot;J&quot;:true,&quot;K&quot;:true,&quot;L&quot;:true,&quot;A&quot;:true,&quot;C&quot;:true}',
  function reviver(k,v) {
    result += k;
    return v;
  }
);
return result === &quot;012349 DB-1EFGHIJKLAC&quot;;</div>}
```
###Reflect.ownKeys, string key order
          
```
function(){
              <div class="code">var obj = {
  2:    true,
  0:    true,
  1:    true,
  ' ':  true,
  9:    true,
  D:    true,
  B:    true,
  '-1': true
};
obj.A = true;
obj[3] = true;
&quot;EFGHIJKLMNOPQRSTUVWXYZ&quot;.split('').forEach(function(key){
  obj[key] = true;
});
Object.defineProperty(obj, 'C', { value: true, enumerable: true });
Object.defineProperty(obj, '4', { value: true, enumerable: true });
delete obj[2];
obj[2] = true;

return Reflect.ownKeys(obj).join('') === &quot;012349 DB-1AEFGHIJKLMNOPQRSTUVWXYZC&quot;;</div>}
```
###Reflect.ownKeys, symbol key order
          
```
function(){
              <div class="code">var sym1 = Symbol(), sym2 = Symbol(), sym3 = Symbol();
var obj = {
  1:    true,
  A:    true,
};
obj.B = true;
obj[sym1] = true;
obj[2] = true;
obj[sym2] = true;
Object.defineProperty(obj, 'C', { value: true, enumerable: true });
Object.defineProperty(obj, sym3,{ value: true, enumerable: true });
Object.defineProperty(obj, 'D', { value: true, enumerable: true });

var result = Reflect.ownKeys(obj);
var l = result.length;
return result[l-3] === sym1 &amp;&amp; result[l-2] === sym2 &amp;&amp; result[l-1] === sym3;</div>}
```
###Object.keys
          
```
function(){
              <div class="code">var obj = {
  // Non-negative integer names appear first in value order
  2:    true,
  0:    true,
  1:    true,
  // Other string names appear in source order
  ' ':  true,
  // Non-negative integers are sorted above other names
  9:    true,
  D:    true,
  B:    true,
  // Negative integers are treated as other names
  '-1': true,
};
// Other string names are added in order of creation
obj.A = true;
// Non-negative integer names, conversely, ignore order of creation
obj[3] = true;
// Having a total of 20+ properties doesn't affect property order
&quot;EFGHIJKLMNOPQRSTUVWXYZ&quot;.split('').forEach(function(key){
  obj[key] = true;
});
// Object.defineProperty doesn't affect the above rules
Object.defineProperty(obj, 'C', { value: true, enumerable: true });
Object.defineProperty(obj, '4', { value: true, enumerable: true });
// Deleting and reinserting a property doesn't preserve its position
delete obj[2];
obj[2] = true;

var forInOrder = '';
for(var key in obj)forInOrder += key;

return Object.keys(obj).join('') === forInOrder;</div>}
```
###Object.getOwnPropertyNames
          
```
function(){
              <div class="code">var obj = {
  2:    true,
  0:    true,
  1:    true,
  ' ':  true,
  9:    true,
  D:    true,
  B:    true,
  '-1': true
};
obj.A = true;
obj[3] = true;
&quot;EFGHIJKLMNOPQRSTUVWXYZ&quot;.split('').forEach(function(key){
  obj[key] = true;
});
Object.defineProperty(obj, 'C', { value: true, enumerable: true });
Object.defineProperty(obj, '4', { value: true, enumerable: true });
delete obj[2];
obj[2] = true;

return Object.getOwnPropertyNames(obj).join('') === &quot;012349 DB-1AEFGHIJKLMNOPQRSTUVWXYZC&quot;;</div>}
```
###Object.assign
          
```
function(){
              <div class="code">var result = '';
var target = {};

&quot;012349 DBACEFGHIJKLMNOPQRST&quot;.split('').concat(-1).forEach(function(key){
  Object.defineProperty(target, key, {
    set: function(){
      result += key;
    }
  })
});

var obj = {2: 2, 0: 0, 1: 1, ' ': ' ', 9: 9, D: 'D', B: 'B', '-1': '-1'};
Object.defineProperty(obj, 'A', {value: 'A',  enumerable: true});
Object.defineProperty(obj, '3', {value: '3',  enumerable: true});
Object.defineProperty(obj, 'C', {value: 'C',  enumerable: true});
Object.defineProperty(obj, '4', {value: '4',  enumerable: true});
delete obj[2];
obj[2] = true;

&quot;EFGHIJKLMNOPQRST&quot;.split('').forEach(function(key){
  obj[key] = key;
});

Object.assign(target, obj);

return result === &quot;012349 DB-1ACEFGHIJKLMNOPQRST&quot;;</div>}
```
###JSON.stringify
          
```
function(){
              <div class="code">var obj = {
  2:    true,
  0:    true,
  1:    true,
  ' ':  true,
  9:    true,
  D:    true,
  B:    true,
  '-1': true
};
obj.A = true;
obj[3] = true;
&quot;EFGHIJKLMNOPQRSTUVWXYZ&quot;.split('').forEach(function(key){
  obj[key] = true;
});
Object.defineProperty(obj, 'C', { value: true, enumerable: true });
Object.defineProperty(obj, '4', { value: true, enumerable: true });
delete obj[2];
obj[2] = true;

return JSON.stringify(obj) ===
  '{&quot;0&quot;:true,&quot;1&quot;:true,&quot;2&quot;:true,&quot;3&quot;:true,&quot;4&quot;:true,&quot;9&quot;:true,&quot; &quot;:true,&quot;D&quot;:true,&quot;B&quot;:true,&quot;-1&quot;:true,&quot;A&quot;:true,&quot;E&quot;:true,&quot;F&quot;:true,&quot;G&quot;:true,&quot;H&quot;:true,&quot;I&quot;:true,&quot;J&quot;:true,&quot;K&quot;:true,&quot;L&quot;:true,&quot;M&quot;:true,&quot;N&quot;:true,&quot;O&quot;:true,&quot;P&quot;:true,&quot;Q&quot;:true,&quot;R&quot;:true,&quot;S&quot;:true,&quot;T&quot;:true,&quot;U&quot;:true,&quot;V&quot;:true,&quot;W&quot;:true,&quot;X&quot;:true,&quot;Y&quot;:true,&quot;Z&quot;:true,&quot;C&quot;:true}';</div>}
```
###JSON.parse
          
```
function(){
              <div class="code">var result = '';
JSON.parse(
  '{&quot;0&quot;:true,&quot;1&quot;:true,&quot;2&quot;:true,&quot;3&quot;:true,&quot;4&quot;:true,&quot;9&quot;:true,&quot; &quot;:true,&quot;D&quot;:true,&quot;B&quot;:true,&quot;-1&quot;:true,&quot;E&quot;:true,&quot;F&quot;:true,&quot;G&quot;:true,&quot;H&quot;:true,&quot;I&quot;:true,&quot;J&quot;:true,&quot;K&quot;:true,&quot;L&quot;:true,&quot;A&quot;:true,&quot;C&quot;:true}',
  function reviver(k,v) {
    result += k;
    return v;
  }
);
return result === &quot;012349 DB-1EFGHIJKLAC&quot;;</div>}
```
###Reflect.ownKeys, string key order
          
```
function(){
              <div class="code">var obj = {
  2:    true,
  0:    true,
  1:    true,
  ' ':  true,
  9:    true,
  D:    true,
  B:    true,
  '-1': true
};
obj.A = true;
obj[3] = true;
&quot;EFGHIJKLMNOPQRSTUVWXYZ&quot;.split('').forEach(function(key){
  obj[key] = true;
});
Object.defineProperty(obj, 'C', { value: true, enumerable: true });
Object.defineProperty(obj, '4', { value: true, enumerable: true });
delete obj[2];
obj[2] = true;

return Reflect.ownKeys(obj).join('') === &quot;012349 DB-1AEFGHIJKLMNOPQRSTUVWXYZC&quot;;</div>}
```
###Reflect.ownKeys, symbol key order
          
```
function(){
              <div class="code">var sym1 = Symbol(), sym2 = Symbol(), sym3 = Symbol();
var obj = {
  1:    true,
  A:    true,
};
obj.B = true;
obj[sym1] = true;
obj[2] = true;
obj[sym2] = true;
Object.defineProperty(obj, 'C', { value: true, enumerable: true });
Object.defineProperty(obj, sym3,{ value: true, enumerable: true });
Object.defineProperty(obj, 'D', { value: true, enumerable: true });

var result = Reflect.ownKeys(obj);
var l = result.length;
return result[l-3] === sym1 &amp;&amp; result[l-2] === sym2 &amp;&amp; result[l-1] === sym3;</div>}
```
###Object.keys
          
```
function(){
              <div class="code">var obj = {
  // Non-negative integer names appear first in value order
  2:    true,
  0:    true,
  1:    true,
  // Other string names appear in source order
  ' ':  true,
  // Non-negative integers are sorted above other names
  9:    true,
  D:    true,
  B:    true,
  // Negative integers are treated as other names
  '-1': true,
};
// Other string names are added in order of creation
obj.A = true;
// Non-negative integer names, conversely, ignore order of creation
obj[3] = true;
// Having a total of 20+ properties doesn't affect property order
&quot;EFGHIJKLMNOPQRSTUVWXYZ&quot;.split('').forEach(function(key){
  obj[key] = true;
});
// Object.defineProperty doesn't affect the above rules
Object.defineProperty(obj, 'C', { value: true, enumerable: true });
Object.defineProperty(obj, '4', { value: true, enumerable: true });
// Deleting and reinserting a property doesn't preserve its position
delete obj[2];
obj[2] = true;

var forInOrder = '';
for(var key in obj)forInOrder += key;

return Object.keys(obj).join('') === forInOrder;</div>}
```
###Object.getOwnPropertyNames
          
```
function(){
              <div class="code">var obj = {
  2:    true,
  0:    true,
  1:    true,
  ' ':  true,
  9:    true,
  D:    true,
  B:    true,
  '-1': true
};
obj.A = true;
obj[3] = true;
&quot;EFGHIJKLMNOPQRSTUVWXYZ&quot;.split('').forEach(function(key){
  obj[key] = true;
});
Object.defineProperty(obj, 'C', { value: true, enumerable: true });
Object.defineProperty(obj, '4', { value: true, enumerable: true });
delete obj[2];
obj[2] = true;

return Object.getOwnPropertyNames(obj).join('') === &quot;012349 DB-1AEFGHIJKLMNOPQRSTUVWXYZC&quot;;</div>}
```
###Object.assign
          
```
function(){
              <div class="code">var result = '';
var target = {};

&quot;012349 DBACEFGHIJKLMNOPQRST&quot;.split('').concat(-1).forEach(function(key){
  Object.defineProperty(target, key, {
    set: function(){
      result += key;
    }
  })
});

var obj = {2: 2, 0: 0, 1: 1, ' ': ' ', 9: 9, D: 'D', B: 'B', '-1': '-1'};
Object.defineProperty(obj, 'A', {value: 'A',  enumerable: true});
Object.defineProperty(obj, '3', {value: '3',  enumerable: true});
Object.defineProperty(obj, 'C', {value: 'C',  enumerable: true});
Object.defineProperty(obj, '4', {value: '4',  enumerable: true});
delete obj[2];
obj[2] = true;

&quot;EFGHIJKLMNOPQRST&quot;.split('').forEach(function(key){
  obj[key] = key;
});

Object.assign(target, obj);

return result === &quot;012349 DB-1ACEFGHIJKLMNOPQRST&quot;;</div>}
```
###JSON.stringify
          
```
function(){
              <div class="code">var obj = {
  2:    true,
  0:    true,
  1:    true,
  ' ':  true,
  9:    true,
  D:    true,
  B:    true,
  '-1': true
};
obj.A = true;
obj[3] = true;
&quot;EFGHIJKLMNOPQRSTUVWXYZ&quot;.split('').forEach(function(key){
  obj[key] = true;
});
Object.defineProperty(obj, 'C', { value: true, enumerable: true });
Object.defineProperty(obj, '4', { value: true, enumerable: true });
delete obj[2];
obj[2] = true;

return JSON.stringify(obj) ===
  '{&quot;0&quot;:true,&quot;1&quot;:true,&quot;2&quot;:true,&quot;3&quot;:true,&quot;4&quot;:true,&quot;9&quot;:true,&quot; &quot;:true,&quot;D&quot;:true,&quot;B&quot;:true,&quot;-1&quot;:true,&quot;A&quot;:true,&quot;E&quot;:true,&quot;F&quot;:true,&quot;G&quot;:true,&quot;H&quot;:true,&quot;I&quot;:true,&quot;J&quot;:true,&quot;K&quot;:true,&quot;L&quot;:true,&quot;M&quot;:true,&quot;N&quot;:true,&quot;O&quot;:true,&quot;P&quot;:true,&quot;Q&quot;:true,&quot;R&quot;:true,&quot;S&quot;:true,&quot;T&quot;:true,&quot;U&quot;:true,&quot;V&quot;:true,&quot;W&quot;:true,&quot;X&quot;:true,&quot;Y&quot;:true,&quot;Z&quot;:true,&quot;C&quot;:true}';</div>}
```
###JSON.parse
          
```
function(){
              <div class="code">var result = '';
JSON.parse(
  '{&quot;0&quot;:true,&quot;1&quot;:true,&quot;2&quot;:true,&quot;3&quot;:true,&quot;4&quot;:true,&quot;9&quot;:true,&quot; &quot;:true,&quot;D&quot;:true,&quot;B&quot;:true,&quot;-1&quot;:true,&quot;E&quot;:true,&quot;F&quot;:true,&quot;G&quot;:true,&quot;H&quot;:true,&quot;I&quot;:true,&quot;J&quot;:true,&quot;K&quot;:true,&quot;L&quot;:true,&quot;A&quot;:true,&quot;C&quot;:true}',
  function reviver(k,v) {
    result += k;
    return v;
  }
);
return result === &quot;012349 DB-1EFGHIJKLAC&quot;;</div>}
```
###Reflect.ownKeys, string key order
          
```
function(){
              <div class="code">var obj = {
  2:    true,
  0:    true,
  1:    true,
  ' ':  true,
  9:    true,
  D:    true,
  B:    true,
  '-1': true
};
obj.A = true;
obj[3] = true;
&quot;EFGHIJKLMNOPQRSTUVWXYZ&quot;.split('').forEach(function(key){
  obj[key] = true;
});
Object.defineProperty(obj, 'C', { value: true, enumerable: true });
Object.defineProperty(obj, '4', { value: true, enumerable: true });
delete obj[2];
obj[2] = true;

return Reflect.ownKeys(obj).join('') === &quot;012349 DB-1AEFGHIJKLMNOPQRSTUVWXYZC&quot;;</div>}
```
###Reflect.ownKeys, symbol key order
          
```
function(){
              <div class="code">var sym1 = Symbol(), sym2 = Symbol(), sym3 = Symbol();
var obj = {
  1:    true,
  A:    true,
};
obj.B = true;
obj[sym1] = true;
obj[2] = true;
obj[sym2] = true;
Object.defineProperty(obj, 'C', { value: true, enumerable: true });
Object.defineProperty(obj, sym3,{ value: true, enumerable: true });
Object.defineProperty(obj, 'D', { value: true, enumerable: true });

var result = Reflect.ownKeys(obj);
var l = result.length;
return result[l-3] === sym1 &amp;&amp; result[l-2] === sym2 &amp;&amp; result[l-1] === sym3;</div>}
```
###Object.keys
          
```
function(){
              <div class="code">var obj = {
  // Non-negative integer names appear first in value order
  2:    true,
  0:    true,
  1:    true,
  // Other string names appear in source order
  ' ':  true,
  // Non-negative integers are sorted above other names
  9:    true,
  D:    true,
  B:    true,
  // Negative integers are treated as other names
  '-1': true,
};
// Other string names are added in order of creation
obj.A = true;
// Non-negative integer names, conversely, ignore order of creation
obj[3] = true;
// Having a total of 20+ properties doesn't affect property order
&quot;EFGHIJKLMNOPQRSTUVWXYZ&quot;.split('').forEach(function(key){
  obj[key] = true;
});
// Object.defineProperty doesn't affect the above rules
Object.defineProperty(obj, 'C', { value: true, enumerable: true });
Object.defineProperty(obj, '4', { value: true, enumerable: true });
// Deleting and reinserting a property doesn't preserve its position
delete obj[2];
obj[2] = true;

var forInOrder = '';
for(var key in obj)forInOrder += key;

return Object.keys(obj).join('') === forInOrder;</div>}
```
###Object.getOwnPropertyNames
          
```
function(){
              <div class="code">var obj = {
  2:    true,
  0:    true,
  1:    true,
  ' ':  true,
  9:    true,
  D:    true,
  B:    true,
  '-1': true
};
obj.A = true;
obj[3] = true;
&quot;EFGHIJKLMNOPQRSTUVWXYZ&quot;.split('').forEach(function(key){
  obj[key] = true;
});
Object.defineProperty(obj, 'C', { value: true, enumerable: true });
Object.defineProperty(obj, '4', { value: true, enumerable: true });
delete obj[2];
obj[2] = true;

return Object.getOwnPropertyNames(obj).join('') === &quot;012349 DB-1AEFGHIJKLMNOPQRSTUVWXYZC&quot;;</div>}
```
###Object.assign
          
```
function(){
              <div class="code">var result = '';
var target = {};

&quot;012349 DBACEFGHIJKLMNOPQRST&quot;.split('').concat(-1).forEach(function(key){
  Object.defineProperty(target, key, {
    set: function(){
      result += key;
    }
  })
});

var obj = {2: 2, 0: 0, 1: 1, ' ': ' ', 9: 9, D: 'D', B: 'B', '-1': '-1'};
Object.defineProperty(obj, 'A', {value: 'A',  enumerable: true});
Object.defineProperty(obj, '3', {value: '3',  enumerable: true});
Object.defineProperty(obj, 'C', {value: 'C',  enumerable: true});
Object.defineProperty(obj, '4', {value: '4',  enumerable: true});
delete obj[2];
obj[2] = true;

&quot;EFGHIJKLMNOPQRST&quot;.split('').forEach(function(key){
  obj[key] = key;
});

Object.assign(target, obj);

return result === &quot;012349 DB-1ACEFGHIJKLMNOPQRST&quot;;</div>}
```
###JSON.stringify
          
```
function(){
              <div class="code">var obj = {
  2:    true,
  0:    true,
  1:    true,
  ' ':  true,
  9:    true,
  D:    true,
  B:    true,
  '-1': true
};
obj.A = true;
obj[3] = true;
&quot;EFGHIJKLMNOPQRSTUVWXYZ&quot;.split('').forEach(function(key){
  obj[key] = true;
});
Object.defineProperty(obj, 'C', { value: true, enumerable: true });
Object.defineProperty(obj, '4', { value: true, enumerable: true });
delete obj[2];
obj[2] = true;

return JSON.stringify(obj) ===
  '{&quot;0&quot;:true,&quot;1&quot;:true,&quot;2&quot;:true,&quot;3&quot;:true,&quot;4&quot;:true,&quot;9&quot;:true,&quot; &quot;:true,&quot;D&quot;:true,&quot;B&quot;:true,&quot;-1&quot;:true,&quot;A&quot;:true,&quot;E&quot;:true,&quot;F&quot;:true,&quot;G&quot;:true,&quot;H&quot;:true,&quot;I&quot;:true,&quot;J&quot;:true,&quot;K&quot;:true,&quot;L&quot;:true,&quot;M&quot;:true,&quot;N&quot;:true,&quot;O&quot;:true,&quot;P&quot;:true,&quot;Q&quot;:true,&quot;R&quot;:true,&quot;S&quot;:true,&quot;T&quot;:true,&quot;U&quot;:true,&quot;V&quot;:true,&quot;W&quot;:true,&quot;X&quot;:true,&quot;Y&quot;:true,&quot;Z&quot;:true,&quot;C&quot;:true}';</div>}
```
###JSON.parse
          
```
function(){
              <div class="code">var result = '';
JSON.parse(
  '{&quot;0&quot;:true,&quot;1&quot;:true,&quot;2&quot;:true,&quot;3&quot;:true,&quot;4&quot;:true,&quot;9&quot;:true,&quot; &quot;:true,&quot;D&quot;:true,&quot;B&quot;:true,&quot;-1&quot;:true,&quot;E&quot;:true,&quot;F&quot;:true,&quot;G&quot;:true,&quot;H&quot;:true,&quot;I&quot;:true,&quot;J&quot;:true,&quot;K&quot;:true,&quot;L&quot;:true,&quot;A&quot;:true,&quot;C&quot;:true}',
  function reviver(k,v) {
    result += k;
    return v;
  }
);
return result === &quot;012349 DB-1EFGHIJKLAC&quot;;</div>}
```
###Reflect.ownKeys, string key order
          
```
function(){
              <div class="code">var obj = {
  2:    true,
  0:    true,
  1:    true,
  ' ':  true,
  9:    true,
  D:    true,
  B:    true,
  '-1': true
};
obj.A = true;
obj[3] = true;
&quot;EFGHIJKLMNOPQRSTUVWXYZ&quot;.split('').forEach(function(key){
  obj[key] = true;
});
Object.defineProperty(obj, 'C', { value: true, enumerable: true });
Object.defineProperty(obj, '4', { value: true, enumerable: true });
delete obj[2];
obj[2] = true;

return Reflect.ownKeys(obj).join('') === &quot;012349 DB-1AEFGHIJKLMNOPQRSTUVWXYZC&quot;;</div>}
```
###Reflect.ownKeys, symbol key order
          
```
function(){
              <div class="code">var sym1 = Symbol(), sym2 = Symbol(), sym3 = Symbol();
var obj = {
  1:    true,
  A:    true,
};
obj.B = true;
obj[sym1] = true;
obj[2] = true;
obj[sym2] = true;
Object.defineProperty(obj, 'C', { value: true, enumerable: true });
Object.defineProperty(obj, sym3,{ value: true, enumerable: true });
Object.defineProperty(obj, 'D', { value: true, enumerable: true });

var result = Reflect.ownKeys(obj);
var l = result.length;
return result[l-3] === sym1 &amp;&amp; result[l-2] === sym2 &amp;&amp; result[l-1] === sym3;</div>}
```
