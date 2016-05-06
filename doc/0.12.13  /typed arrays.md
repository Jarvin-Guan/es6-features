###Int8Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Int8Array(buffer);         view[0] = 0x80;
return view[0] === -0x80;</div>}
```
###Uint8Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Uint8Array(buffer);        view[0] = 0x100;
return view[0] === 0;</div>}
```
###Uint8ClampedArray
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Uint8ClampedArray(buffer); view[0] = 0x100;
return view[0] === 0xFF;</div>}
```
###Int16Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Int16Array(buffer);        view[0] = 0x8000;
return view[0] === -0x8000;</div>}
```
###Uint16Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Uint16Array(buffer);       view[0] = 0x10000;
return view[0] === 0;</div>}
```
###Int32Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Int32Array(buffer);        view[0] = 0x80000000;
return view[0] === -0x80000000;</div>}
```
###Uint32Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Uint32Array(buffer);       view[0] = 0x100000000;
return view[0] === 0;</div>}
```
###Float32Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Float32Array(buffer);       view[0] = 0.1;
return view[0] === 0.10000000149011612;</div>}
```
###Float64Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Float64Array(buffer);       view[0] = 0.1;
return view[0] === 0.1;</div>}
```
###DataView (Int8)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setInt8 (0, 0x80);
return view.getInt8(0) === -0x80;</div>}
```
###DataView (Uint8)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setUint8(0, 0x100);
return view.getUint8(0) === 0;</div>}
```
###DataView (Int16)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setInt16(0, 0x8000);
return view.getInt16(0) === -0x8000;</div>}
```
###DataView (Uint16)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setUint16(0, 0x10000);
return view.getUint16(0) === 0;</div>}
```
###DataView (Int32)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setInt32(0, 0x80000000);
return view.getInt32(0) === -0x80000000;</div>}
```
###DataView (Uint32)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setUint32(0, 0x100000000);
return view.getUint32(0) === 0;</div>}
```
###DataView (Float32)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setFloat32(0, 0.1);
return view.getFloat32(0) === 0.10000000149011612;</div>}
```
###DataView (Float64)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setFloat64(0, 0.1);
return view.getFloat64(0) === 0.1;</div>}
```
###constructors require new
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var constructors = [
  'ArrayBuffer',
  'DataView',
  'Int8Array',
  'Uint8Array',
  'Uint8ClampedArray',
  'Int16Array',
  'Uint16Array',
  'Int32Array',
  'Uint32Array',
  'Float32Array',
  'Float64Array'
];
return constructors.every(function (constructor) {
  try {
    if (constructor in global) {
      global[constructor](constructor === &quot;ArrayBuffer&quot; ? 64 : buffer);
    }
    return false;
  } catch(e) {
    return true;
  }
});</div>}
```
###%TypedArray%.prototype.subarray
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.subarray === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.keys
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.keys === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.values
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.values === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.values === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.values === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.values === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.values === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.values === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.values === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.values === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.values === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.entries
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.entries === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype[Symbol.iterator]
          
```
function(){
              <div class="code">return typeof Int8Array.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype[Symbol.iterator] === &quot;function&quot;;</div>}
```
###Int8Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Int8Array(buffer);         view[0] = 0x80;
return view[0] === -0x80;</div>}
```
###Uint8Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Uint8Array(buffer);        view[0] = 0x100;
return view[0] === 0;</div>}
```
###Uint8ClampedArray
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Uint8ClampedArray(buffer); view[0] = 0x100;
return view[0] === 0xFF;</div>}
```
###Int16Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Int16Array(buffer);        view[0] = 0x8000;
return view[0] === -0x8000;</div>}
```
###Uint16Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Uint16Array(buffer);       view[0] = 0x10000;
return view[0] === 0;</div>}
```
###Int32Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Int32Array(buffer);        view[0] = 0x80000000;
return view[0] === -0x80000000;</div>}
```
###Uint32Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Uint32Array(buffer);       view[0] = 0x100000000;
return view[0] === 0;</div>}
```
###Float32Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Float32Array(buffer);       view[0] = 0.1;
return view[0] === 0.10000000149011612;</div>}
```
###Float64Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Float64Array(buffer);       view[0] = 0.1;
return view[0] === 0.1;</div>}
```
###DataView (Int8)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setInt8 (0, 0x80);
return view.getInt8(0) === -0x80;</div>}
```
###DataView (Uint8)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setUint8(0, 0x100);
return view.getUint8(0) === 0;</div>}
```
###DataView (Int16)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setInt16(0, 0x8000);
return view.getInt16(0) === -0x8000;</div>}
```
###DataView (Uint16)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setUint16(0, 0x10000);
return view.getUint16(0) === 0;</div>}
```
###DataView (Int32)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setInt32(0, 0x80000000);
return view.getInt32(0) === -0x80000000;</div>}
```
###DataView (Uint32)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setUint32(0, 0x100000000);
return view.getUint32(0) === 0;</div>}
```
###DataView (Float32)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setFloat32(0, 0.1);
return view.getFloat32(0) === 0.10000000149011612;</div>}
```
###DataView (Float64)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setFloat64(0, 0.1);
return view.getFloat64(0) === 0.1;</div>}
```
###constructors require new
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var constructors = [
  'ArrayBuffer',
  'DataView',
  'Int8Array',
  'Uint8Array',
  'Uint8ClampedArray',
  'Int16Array',
  'Uint16Array',
  'Int32Array',
  'Uint32Array',
  'Float32Array',
  'Float64Array'
];
return constructors.every(function (constructor) {
  try {
    if (constructor in global) {
      global[constructor](constructor === &quot;ArrayBuffer&quot; ? 64 : buffer);
    }
    return false;
  } catch(e) {
    return true;
  }
});</div>}
```
###%TypedArray%.prototype.subarray
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.subarray === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.keys
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.keys === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.values
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.values === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.values === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.values === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.values === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.values === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.values === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.values === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.values === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.values === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.entries
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.entries === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype[Symbol.iterator]
          
```
function(){
              <div class="code">return typeof Int8Array.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype[Symbol.iterator] === &quot;function&quot;;</div>}
```
###Int8Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Int8Array(buffer);         view[0] = 0x80;
return view[0] === -0x80;</div>}
```
###Uint8Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Uint8Array(buffer);        view[0] = 0x100;
return view[0] === 0;</div>}
```
###Uint8ClampedArray
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Uint8ClampedArray(buffer); view[0] = 0x100;
return view[0] === 0xFF;</div>}
```
###Int16Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Int16Array(buffer);        view[0] = 0x8000;
return view[0] === -0x8000;</div>}
```
###Uint16Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Uint16Array(buffer);       view[0] = 0x10000;
return view[0] === 0;</div>}
```
###Int32Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Int32Array(buffer);        view[0] = 0x80000000;
return view[0] === -0x80000000;</div>}
```
###Uint32Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Uint32Array(buffer);       view[0] = 0x100000000;
return view[0] === 0;</div>}
```
###Float32Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Float32Array(buffer);       view[0] = 0.1;
return view[0] === 0.10000000149011612;</div>}
```
###Float64Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Float64Array(buffer);       view[0] = 0.1;
return view[0] === 0.1;</div>}
```
###DataView (Int8)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setInt8 (0, 0x80);
return view.getInt8(0) === -0x80;</div>}
```
###DataView (Uint8)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setUint8(0, 0x100);
return view.getUint8(0) === 0;</div>}
```
###DataView (Int16)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setInt16(0, 0x8000);
return view.getInt16(0) === -0x8000;</div>}
```
###DataView (Uint16)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setUint16(0, 0x10000);
return view.getUint16(0) === 0;</div>}
```
###DataView (Int32)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setInt32(0, 0x80000000);
return view.getInt32(0) === -0x80000000;</div>}
```
###DataView (Uint32)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setUint32(0, 0x100000000);
return view.getUint32(0) === 0;</div>}
```
###DataView (Float32)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setFloat32(0, 0.1);
return view.getFloat32(0) === 0.10000000149011612;</div>}
```
###DataView (Float64)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setFloat64(0, 0.1);
return view.getFloat64(0) === 0.1;</div>}
```
###constructors require new
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var constructors = [
  'ArrayBuffer',
  'DataView',
  'Int8Array',
  'Uint8Array',
  'Uint8ClampedArray',
  'Int16Array',
  'Uint16Array',
  'Int32Array',
  'Uint32Array',
  'Float32Array',
  'Float64Array'
];
return constructors.every(function (constructor) {
  try {
    if (constructor in global) {
      global[constructor](constructor === &quot;ArrayBuffer&quot; ? 64 : buffer);
    }
    return false;
  } catch(e) {
    return true;
  }
});</div>}
```
###%TypedArray%.prototype.subarray
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.subarray === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.keys
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.keys === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.values
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.values === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.values === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.values === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.values === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.values === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.values === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.values === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.values === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.values === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.entries
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.entries === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype[Symbol.iterator]
          
```
function(){
              <div class="code">return typeof Int8Array.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype[Symbol.iterator] === &quot;function&quot;;</div>}
```
###Int8Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Int8Array(buffer);         view[0] = 0x80;
return view[0] === -0x80;</div>}
```
###Uint8Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Uint8Array(buffer);        view[0] = 0x100;
return view[0] === 0;</div>}
```
###Uint8ClampedArray
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Uint8ClampedArray(buffer); view[0] = 0x100;
return view[0] === 0xFF;</div>}
```
###Int16Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Int16Array(buffer);        view[0] = 0x8000;
return view[0] === -0x8000;</div>}
```
###Uint16Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Uint16Array(buffer);       view[0] = 0x10000;
return view[0] === 0;</div>}
```
###Int32Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Int32Array(buffer);        view[0] = 0x80000000;
return view[0] === -0x80000000;</div>}
```
###Uint32Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Uint32Array(buffer);       view[0] = 0x100000000;
return view[0] === 0;</div>}
```
###Float32Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Float32Array(buffer);       view[0] = 0.1;
return view[0] === 0.10000000149011612;</div>}
```
###Float64Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Float64Array(buffer);       view[0] = 0.1;
return view[0] === 0.1;</div>}
```
###DataView (Int8)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setInt8 (0, 0x80);
return view.getInt8(0) === -0x80;</div>}
```
###DataView (Uint8)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setUint8(0, 0x100);
return view.getUint8(0) === 0;</div>}
```
###DataView (Int16)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setInt16(0, 0x8000);
return view.getInt16(0) === -0x8000;</div>}
```
###DataView (Uint16)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setUint16(0, 0x10000);
return view.getUint16(0) === 0;</div>}
```
###DataView (Int32)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setInt32(0, 0x80000000);
return view.getInt32(0) === -0x80000000;</div>}
```
###DataView (Uint32)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setUint32(0, 0x100000000);
return view.getUint32(0) === 0;</div>}
```
###DataView (Float32)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setFloat32(0, 0.1);
return view.getFloat32(0) === 0.10000000149011612;</div>}
```
###DataView (Float64)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setFloat64(0, 0.1);
return view.getFloat64(0) === 0.1;</div>}
```
###constructors require new
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var constructors = [
  'ArrayBuffer',
  'DataView',
  'Int8Array',
  'Uint8Array',
  'Uint8ClampedArray',
  'Int16Array',
  'Uint16Array',
  'Int32Array',
  'Uint32Array',
  'Float32Array',
  'Float64Array'
];
return constructors.every(function (constructor) {
  try {
    if (constructor in global) {
      global[constructor](constructor === &quot;ArrayBuffer&quot; ? 64 : buffer);
    }
    return false;
  } catch(e) {
    return true;
  }
});</div>}
```
###%TypedArray%.prototype.subarray
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.subarray === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.keys
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.keys === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.values
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.values === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.values === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.values === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.values === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.values === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.values === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.values === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.values === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.values === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.entries
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.entries === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype[Symbol.iterator]
          
```
function(){
              <div class="code">return typeof Int8Array.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype[Symbol.iterator] === &quot;function&quot;;</div>}
```
###Int8Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Int8Array(buffer);         view[0] = 0x80;
return view[0] === -0x80;</div>}
```
###Uint8Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Uint8Array(buffer);        view[0] = 0x100;
return view[0] === 0;</div>}
```
###Uint8ClampedArray
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Uint8ClampedArray(buffer); view[0] = 0x100;
return view[0] === 0xFF;</div>}
```
###Int16Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Int16Array(buffer);        view[0] = 0x8000;
return view[0] === -0x8000;</div>}
```
###Uint16Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Uint16Array(buffer);       view[0] = 0x10000;
return view[0] === 0;</div>}
```
###Int32Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Int32Array(buffer);        view[0] = 0x80000000;
return view[0] === -0x80000000;</div>}
```
###Uint32Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Uint32Array(buffer);       view[0] = 0x100000000;
return view[0] === 0;</div>}
```
###Float32Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Float32Array(buffer);       view[0] = 0.1;
return view[0] === 0.10000000149011612;</div>}
```
###Float64Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Float64Array(buffer);       view[0] = 0.1;
return view[0] === 0.1;</div>}
```
###DataView (Int8)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setInt8 (0, 0x80);
return view.getInt8(0) === -0x80;</div>}
```
###DataView (Uint8)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setUint8(0, 0x100);
return view.getUint8(0) === 0;</div>}
```
###DataView (Int16)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setInt16(0, 0x8000);
return view.getInt16(0) === -0x8000;</div>}
```
###DataView (Uint16)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setUint16(0, 0x10000);
return view.getUint16(0) === 0;</div>}
```
###DataView (Int32)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setInt32(0, 0x80000000);
return view.getInt32(0) === -0x80000000;</div>}
```
###DataView (Uint32)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setUint32(0, 0x100000000);
return view.getUint32(0) === 0;</div>}
```
###DataView (Float32)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setFloat32(0, 0.1);
return view.getFloat32(0) === 0.10000000149011612;</div>}
```
###DataView (Float64)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setFloat64(0, 0.1);
return view.getFloat64(0) === 0.1;</div>}
```
###constructors require new
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var constructors = [
  'ArrayBuffer',
  'DataView',
  'Int8Array',
  'Uint8Array',
  'Uint8ClampedArray',
  'Int16Array',
  'Uint16Array',
  'Int32Array',
  'Uint32Array',
  'Float32Array',
  'Float64Array'
];
return constructors.every(function (constructor) {
  try {
    if (constructor in global) {
      global[constructor](constructor === &quot;ArrayBuffer&quot; ? 64 : buffer);
    }
    return false;
  } catch(e) {
    return true;
  }
});</div>}
```
###%TypedArray%.prototype.subarray
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.subarray === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.keys
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.keys === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.values
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.values === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.values === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.values === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.values === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.values === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.values === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.values === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.values === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.values === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.entries
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.entries === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype[Symbol.iterator]
          
```
function(){
              <div class="code">return typeof Int8Array.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype[Symbol.iterator] === &quot;function&quot;;</div>}
```
###Int8Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Int8Array(buffer);         view[0] = 0x80;
return view[0] === -0x80;</div>}
```
###Uint8Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Uint8Array(buffer);        view[0] = 0x100;
return view[0] === 0;</div>}
```
###Uint8ClampedArray
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Uint8ClampedArray(buffer); view[0] = 0x100;
return view[0] === 0xFF;</div>}
```
###Int16Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Int16Array(buffer);        view[0] = 0x8000;
return view[0] === -0x8000;</div>}
```
###Uint16Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Uint16Array(buffer);       view[0] = 0x10000;
return view[0] === 0;</div>}
```
###Int32Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Int32Array(buffer);        view[0] = 0x80000000;
return view[0] === -0x80000000;</div>}
```
###Uint32Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Uint32Array(buffer);       view[0] = 0x100000000;
return view[0] === 0;</div>}
```
###Float32Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Float32Array(buffer);       view[0] = 0.1;
return view[0] === 0.10000000149011612;</div>}
```
###Float64Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Float64Array(buffer);       view[0] = 0.1;
return view[0] === 0.1;</div>}
```
###DataView (Int8)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setInt8 (0, 0x80);
return view.getInt8(0) === -0x80;</div>}
```
###DataView (Uint8)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setUint8(0, 0x100);
return view.getUint8(0) === 0;</div>}
```
###DataView (Int16)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setInt16(0, 0x8000);
return view.getInt16(0) === -0x8000;</div>}
```
###DataView (Uint16)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setUint16(0, 0x10000);
return view.getUint16(0) === 0;</div>}
```
###DataView (Int32)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setInt32(0, 0x80000000);
return view.getInt32(0) === -0x80000000;</div>}
```
###DataView (Uint32)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setUint32(0, 0x100000000);
return view.getUint32(0) === 0;</div>}
```
###DataView (Float32)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setFloat32(0, 0.1);
return view.getFloat32(0) === 0.10000000149011612;</div>}
```
###DataView (Float64)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setFloat64(0, 0.1);
return view.getFloat64(0) === 0.1;</div>}
```
###constructors require new
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var constructors = [
  'ArrayBuffer',
  'DataView',
  'Int8Array',
  'Uint8Array',
  'Uint8ClampedArray',
  'Int16Array',
  'Uint16Array',
  'Int32Array',
  'Uint32Array',
  'Float32Array',
  'Float64Array'
];
return constructors.every(function (constructor) {
  try {
    if (constructor in global) {
      global[constructor](constructor === &quot;ArrayBuffer&quot; ? 64 : buffer);
    }
    return false;
  } catch(e) {
    return true;
  }
});</div>}
```
###%TypedArray%.prototype.subarray
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.subarray === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.keys
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.keys === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.values
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.values === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.values === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.values === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.values === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.values === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.values === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.values === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.values === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.values === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.entries
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.entries === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype[Symbol.iterator]
          
```
function(){
              <div class="code">return typeof Int8Array.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype[Symbol.iterator] === &quot;function&quot;;</div>}
```
###Int8Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Int8Array(buffer);         view[0] = 0x80;
return view[0] === -0x80;</div>}
```
###Uint8Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Uint8Array(buffer);        view[0] = 0x100;
return view[0] === 0;</div>}
```
###Uint8ClampedArray
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Uint8ClampedArray(buffer); view[0] = 0x100;
return view[0] === 0xFF;</div>}
```
###Int16Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Int16Array(buffer);        view[0] = 0x8000;
return view[0] === -0x8000;</div>}
```
###Uint16Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Uint16Array(buffer);       view[0] = 0x10000;
return view[0] === 0;</div>}
```
###Int32Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Int32Array(buffer);        view[0] = 0x80000000;
return view[0] === -0x80000000;</div>}
```
###Uint32Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Uint32Array(buffer);       view[0] = 0x100000000;
return view[0] === 0;</div>}
```
###Float32Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Float32Array(buffer);       view[0] = 0.1;
return view[0] === 0.10000000149011612;</div>}
```
###Float64Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Float64Array(buffer);       view[0] = 0.1;
return view[0] === 0.1;</div>}
```
###DataView (Int8)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setInt8 (0, 0x80);
return view.getInt8(0) === -0x80;</div>}
```
###DataView (Uint8)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setUint8(0, 0x100);
return view.getUint8(0) === 0;</div>}
```
###DataView (Int16)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setInt16(0, 0x8000);
return view.getInt16(0) === -0x8000;</div>}
```
###DataView (Uint16)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setUint16(0, 0x10000);
return view.getUint16(0) === 0;</div>}
```
###DataView (Int32)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setInt32(0, 0x80000000);
return view.getInt32(0) === -0x80000000;</div>}
```
###DataView (Uint32)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setUint32(0, 0x100000000);
return view.getUint32(0) === 0;</div>}
```
###DataView (Float32)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setFloat32(0, 0.1);
return view.getFloat32(0) === 0.10000000149011612;</div>}
```
###DataView (Float64)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setFloat64(0, 0.1);
return view.getFloat64(0) === 0.1;</div>}
```
###constructors require new
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var constructors = [
  'ArrayBuffer',
  'DataView',
  'Int8Array',
  'Uint8Array',
  'Uint8ClampedArray',
  'Int16Array',
  'Uint16Array',
  'Int32Array',
  'Uint32Array',
  'Float32Array',
  'Float64Array'
];
return constructors.every(function (constructor) {
  try {
    if (constructor in global) {
      global[constructor](constructor === &quot;ArrayBuffer&quot; ? 64 : buffer);
    }
    return false;
  } catch(e) {
    return true;
  }
});</div>}
```
###%TypedArray%.prototype.subarray
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.subarray === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.keys
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.keys === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.values
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.values === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.values === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.values === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.values === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.values === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.values === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.values === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.values === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.values === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.entries
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.entries === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype[Symbol.iterator]
          
```
function(){
              <div class="code">return typeof Int8Array.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype[Symbol.iterator] === &quot;function&quot;;</div>}
```
###Int8Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Int8Array(buffer);         view[0] = 0x80;
return view[0] === -0x80;</div>}
```
###Uint8Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Uint8Array(buffer);        view[0] = 0x100;
return view[0] === 0;</div>}
```
###Uint8ClampedArray
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Uint8ClampedArray(buffer); view[0] = 0x100;
return view[0] === 0xFF;</div>}
```
###Int16Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Int16Array(buffer);        view[0] = 0x8000;
return view[0] === -0x8000;</div>}
```
###Uint16Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Uint16Array(buffer);       view[0] = 0x10000;
return view[0] === 0;</div>}
```
###Int32Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Int32Array(buffer);        view[0] = 0x80000000;
return view[0] === -0x80000000;</div>}
```
###Uint32Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Uint32Array(buffer);       view[0] = 0x100000000;
return view[0] === 0;</div>}
```
###Float32Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Float32Array(buffer);       view[0] = 0.1;
return view[0] === 0.10000000149011612;</div>}
```
###Float64Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Float64Array(buffer);       view[0] = 0.1;
return view[0] === 0.1;</div>}
```
###DataView (Int8)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setInt8 (0, 0x80);
return view.getInt8(0) === -0x80;</div>}
```
###DataView (Uint8)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setUint8(0, 0x100);
return view.getUint8(0) === 0;</div>}
```
###DataView (Int16)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setInt16(0, 0x8000);
return view.getInt16(0) === -0x8000;</div>}
```
###DataView (Uint16)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setUint16(0, 0x10000);
return view.getUint16(0) === 0;</div>}
```
###DataView (Int32)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setInt32(0, 0x80000000);
return view.getInt32(0) === -0x80000000;</div>}
```
###DataView (Uint32)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setUint32(0, 0x100000000);
return view.getUint32(0) === 0;</div>}
```
###DataView (Float32)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setFloat32(0, 0.1);
return view.getFloat32(0) === 0.10000000149011612;</div>}
```
###DataView (Float64)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setFloat64(0, 0.1);
return view.getFloat64(0) === 0.1;</div>}
```
###constructors require new
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var constructors = [
  'ArrayBuffer',
  'DataView',
  'Int8Array',
  'Uint8Array',
  'Uint8ClampedArray',
  'Int16Array',
  'Uint16Array',
  'Int32Array',
  'Uint32Array',
  'Float32Array',
  'Float64Array'
];
return constructors.every(function (constructor) {
  try {
    if (constructor in global) {
      global[constructor](constructor === &quot;ArrayBuffer&quot; ? 64 : buffer);
    }
    return false;
  } catch(e) {
    return true;
  }
});</div>}
```
###%TypedArray%.prototype.subarray
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.subarray === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.keys
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.keys === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.values
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.values === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.values === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.values === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.values === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.values === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.values === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.values === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.values === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.values === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.entries
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.entries === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype[Symbol.iterator]
          
```
function(){
              <div class="code">return typeof Int8Array.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype[Symbol.iterator] === &quot;function&quot;;</div>}
```
###Int8Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Int8Array(buffer);         view[0] = 0x80;
return view[0] === -0x80;</div>}
```
###Uint8Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Uint8Array(buffer);        view[0] = 0x100;
return view[0] === 0;</div>}
```
###Uint8ClampedArray
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Uint8ClampedArray(buffer); view[0] = 0x100;
return view[0] === 0xFF;</div>}
```
###Int16Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Int16Array(buffer);        view[0] = 0x8000;
return view[0] === -0x8000;</div>}
```
###Uint16Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Uint16Array(buffer);       view[0] = 0x10000;
return view[0] === 0;</div>}
```
###Int32Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Int32Array(buffer);        view[0] = 0x80000000;
return view[0] === -0x80000000;</div>}
```
###Uint32Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Uint32Array(buffer);       view[0] = 0x100000000;
return view[0] === 0;</div>}
```
###Float32Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Float32Array(buffer);       view[0] = 0.1;
return view[0] === 0.10000000149011612;</div>}
```
###Float64Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Float64Array(buffer);       view[0] = 0.1;
return view[0] === 0.1;</div>}
```
###DataView (Int8)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setInt8 (0, 0x80);
return view.getInt8(0) === -0x80;</div>}
```
###DataView (Uint8)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setUint8(0, 0x100);
return view.getUint8(0) === 0;</div>}
```
###DataView (Int16)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setInt16(0, 0x8000);
return view.getInt16(0) === -0x8000;</div>}
```
###DataView (Uint16)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setUint16(0, 0x10000);
return view.getUint16(0) === 0;</div>}
```
###DataView (Int32)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setInt32(0, 0x80000000);
return view.getInt32(0) === -0x80000000;</div>}
```
###DataView (Uint32)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setUint32(0, 0x100000000);
return view.getUint32(0) === 0;</div>}
```
###DataView (Float32)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setFloat32(0, 0.1);
return view.getFloat32(0) === 0.10000000149011612;</div>}
```
###DataView (Float64)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setFloat64(0, 0.1);
return view.getFloat64(0) === 0.1;</div>}
```
###constructors require new
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var constructors = [
  'ArrayBuffer',
  'DataView',
  'Int8Array',
  'Uint8Array',
  'Uint8ClampedArray',
  'Int16Array',
  'Uint16Array',
  'Int32Array',
  'Uint32Array',
  'Float32Array',
  'Float64Array'
];
return constructors.every(function (constructor) {
  try {
    if (constructor in global) {
      global[constructor](constructor === &quot;ArrayBuffer&quot; ? 64 : buffer);
    }
    return false;
  } catch(e) {
    return true;
  }
});</div>}
```
###%TypedArray%.prototype.subarray
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.subarray === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.keys
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.keys === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.values
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.values === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.values === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.values === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.values === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.values === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.values === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.values === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.values === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.values === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.entries
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.entries === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype[Symbol.iterator]
          
```
function(){
              <div class="code">return typeof Int8Array.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype[Symbol.iterator] === &quot;function&quot;;</div>}
```
###Int8Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Int8Array(buffer);         view[0] = 0x80;
return view[0] === -0x80;</div>}
```
###Uint8Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Uint8Array(buffer);        view[0] = 0x100;
return view[0] === 0;</div>}
```
###Uint8ClampedArray
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Uint8ClampedArray(buffer); view[0] = 0x100;
return view[0] === 0xFF;</div>}
```
###Int16Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Int16Array(buffer);        view[0] = 0x8000;
return view[0] === -0x8000;</div>}
```
###Uint16Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Uint16Array(buffer);       view[0] = 0x10000;
return view[0] === 0;</div>}
```
###Int32Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Int32Array(buffer);        view[0] = 0x80000000;
return view[0] === -0x80000000;</div>}
```
###Uint32Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Uint32Array(buffer);       view[0] = 0x100000000;
return view[0] === 0;</div>}
```
###Float32Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Float32Array(buffer);       view[0] = 0.1;
return view[0] === 0.10000000149011612;</div>}
```
###Float64Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Float64Array(buffer);       view[0] = 0.1;
return view[0] === 0.1;</div>}
```
###DataView (Int8)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setInt8 (0, 0x80);
return view.getInt8(0) === -0x80;</div>}
```
###DataView (Uint8)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setUint8(0, 0x100);
return view.getUint8(0) === 0;</div>}
```
###DataView (Int16)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setInt16(0, 0x8000);
return view.getInt16(0) === -0x8000;</div>}
```
###DataView (Uint16)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setUint16(0, 0x10000);
return view.getUint16(0) === 0;</div>}
```
###DataView (Int32)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setInt32(0, 0x80000000);
return view.getInt32(0) === -0x80000000;</div>}
```
###DataView (Uint32)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setUint32(0, 0x100000000);
return view.getUint32(0) === 0;</div>}
```
###DataView (Float32)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setFloat32(0, 0.1);
return view.getFloat32(0) === 0.10000000149011612;</div>}
```
###DataView (Float64)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setFloat64(0, 0.1);
return view.getFloat64(0) === 0.1;</div>}
```
###constructors require new
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var constructors = [
  'ArrayBuffer',
  'DataView',
  'Int8Array',
  'Uint8Array',
  'Uint8ClampedArray',
  'Int16Array',
  'Uint16Array',
  'Int32Array',
  'Uint32Array',
  'Float32Array',
  'Float64Array'
];
return constructors.every(function (constructor) {
  try {
    if (constructor in global) {
      global[constructor](constructor === &quot;ArrayBuffer&quot; ? 64 : buffer);
    }
    return false;
  } catch(e) {
    return true;
  }
});</div>}
```
###%TypedArray%.prototype.subarray
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.subarray === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.keys
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.keys === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.values
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.values === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.values === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.values === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.values === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.values === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.values === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.values === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.values === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.values === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.entries
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.entries === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype[Symbol.iterator]
          
```
function(){
              <div class="code">return typeof Int8Array.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype[Symbol.iterator] === &quot;function&quot;;</div>}
```
###Int8Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Int8Array(buffer);         view[0] = 0x80;
return view[0] === -0x80;</div>}
```
###Uint8Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Uint8Array(buffer);        view[0] = 0x100;
return view[0] === 0;</div>}
```
###Uint8ClampedArray
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Uint8ClampedArray(buffer); view[0] = 0x100;
return view[0] === 0xFF;</div>}
```
###Int16Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Int16Array(buffer);        view[0] = 0x8000;
return view[0] === -0x8000;</div>}
```
###Uint16Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Uint16Array(buffer);       view[0] = 0x10000;
return view[0] === 0;</div>}
```
###Int32Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Int32Array(buffer);        view[0] = 0x80000000;
return view[0] === -0x80000000;</div>}
```
###Uint32Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Uint32Array(buffer);       view[0] = 0x100000000;
return view[0] === 0;</div>}
```
###Float32Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Float32Array(buffer);       view[0] = 0.1;
return view[0] === 0.10000000149011612;</div>}
```
###Float64Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Float64Array(buffer);       view[0] = 0.1;
return view[0] === 0.1;</div>}
```
###DataView (Int8)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setInt8 (0, 0x80);
return view.getInt8(0) === -0x80;</div>}
```
###DataView (Uint8)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setUint8(0, 0x100);
return view.getUint8(0) === 0;</div>}
```
###DataView (Int16)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setInt16(0, 0x8000);
return view.getInt16(0) === -0x8000;</div>}
```
###DataView (Uint16)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setUint16(0, 0x10000);
return view.getUint16(0) === 0;</div>}
```
###DataView (Int32)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setInt32(0, 0x80000000);
return view.getInt32(0) === -0x80000000;</div>}
```
###DataView (Uint32)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setUint32(0, 0x100000000);
return view.getUint32(0) === 0;</div>}
```
###DataView (Float32)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setFloat32(0, 0.1);
return view.getFloat32(0) === 0.10000000149011612;</div>}
```
###DataView (Float64)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setFloat64(0, 0.1);
return view.getFloat64(0) === 0.1;</div>}
```
###constructors require new
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var constructors = [
  'ArrayBuffer',
  'DataView',
  'Int8Array',
  'Uint8Array',
  'Uint8ClampedArray',
  'Int16Array',
  'Uint16Array',
  'Int32Array',
  'Uint32Array',
  'Float32Array',
  'Float64Array'
];
return constructors.every(function (constructor) {
  try {
    if (constructor in global) {
      global[constructor](constructor === &quot;ArrayBuffer&quot; ? 64 : buffer);
    }
    return false;
  } catch(e) {
    return true;
  }
});</div>}
```
###%TypedArray%.prototype.subarray
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.subarray === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.keys
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.keys === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.values
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.values === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.values === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.values === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.values === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.values === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.values === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.values === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.values === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.values === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.entries
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.entries === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype[Symbol.iterator]
          
```
function(){
              <div class="code">return typeof Int8Array.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype[Symbol.iterator] === &quot;function&quot;;</div>}
```
###Int8Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Int8Array(buffer);         view[0] = 0x80;
return view[0] === -0x80;</div>}
```
###Uint8Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Uint8Array(buffer);        view[0] = 0x100;
return view[0] === 0;</div>}
```
###Uint8ClampedArray
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Uint8ClampedArray(buffer); view[0] = 0x100;
return view[0] === 0xFF;</div>}
```
###Int16Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Int16Array(buffer);        view[0] = 0x8000;
return view[0] === -0x8000;</div>}
```
###Uint16Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Uint16Array(buffer);       view[0] = 0x10000;
return view[0] === 0;</div>}
```
###Int32Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Int32Array(buffer);        view[0] = 0x80000000;
return view[0] === -0x80000000;</div>}
```
###Uint32Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Uint32Array(buffer);       view[0] = 0x100000000;
return view[0] === 0;</div>}
```
###Float32Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Float32Array(buffer);       view[0] = 0.1;
return view[0] === 0.10000000149011612;</div>}
```
###Float64Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Float64Array(buffer);       view[0] = 0.1;
return view[0] === 0.1;</div>}
```
###DataView (Int8)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setInt8 (0, 0x80);
return view.getInt8(0) === -0x80;</div>}
```
###DataView (Uint8)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setUint8(0, 0x100);
return view.getUint8(0) === 0;</div>}
```
###DataView (Int16)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setInt16(0, 0x8000);
return view.getInt16(0) === -0x8000;</div>}
```
###DataView (Uint16)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setUint16(0, 0x10000);
return view.getUint16(0) === 0;</div>}
```
###DataView (Int32)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setInt32(0, 0x80000000);
return view.getInt32(0) === -0x80000000;</div>}
```
###DataView (Uint32)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setUint32(0, 0x100000000);
return view.getUint32(0) === 0;</div>}
```
###DataView (Float32)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setFloat32(0, 0.1);
return view.getFloat32(0) === 0.10000000149011612;</div>}
```
###DataView (Float64)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setFloat64(0, 0.1);
return view.getFloat64(0) === 0.1;</div>}
```
###constructors require new
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var constructors = [
  'ArrayBuffer',
  'DataView',
  'Int8Array',
  'Uint8Array',
  'Uint8ClampedArray',
  'Int16Array',
  'Uint16Array',
  'Int32Array',
  'Uint32Array',
  'Float32Array',
  'Float64Array'
];
return constructors.every(function (constructor) {
  try {
    if (constructor in global) {
      global[constructor](constructor === &quot;ArrayBuffer&quot; ? 64 : buffer);
    }
    return false;
  } catch(e) {
    return true;
  }
});</div>}
```
###%TypedArray%.prototype.subarray
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.subarray === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.keys
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.keys === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.values
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.values === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.values === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.values === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.values === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.values === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.values === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.values === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.values === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.values === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.entries
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.entries === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype[Symbol.iterator]
          
```
function(){
              <div class="code">return typeof Int8Array.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype[Symbol.iterator] === &quot;function&quot;;</div>}
```
###Int8Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Int8Array(buffer);         view[0] = 0x80;
return view[0] === -0x80;</div>}
```
###Uint8Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Uint8Array(buffer);        view[0] = 0x100;
return view[0] === 0;</div>}
```
###Uint8ClampedArray
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Uint8ClampedArray(buffer); view[0] = 0x100;
return view[0] === 0xFF;</div>}
```
###Int16Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Int16Array(buffer);        view[0] = 0x8000;
return view[0] === -0x8000;</div>}
```
###Uint16Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Uint16Array(buffer);       view[0] = 0x10000;
return view[0] === 0;</div>}
```
###Int32Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Int32Array(buffer);        view[0] = 0x80000000;
return view[0] === -0x80000000;</div>}
```
###Uint32Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Uint32Array(buffer);       view[0] = 0x100000000;
return view[0] === 0;</div>}
```
###Float32Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Float32Array(buffer);       view[0] = 0.1;
return view[0] === 0.10000000149011612;</div>}
```
###Float64Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Float64Array(buffer);       view[0] = 0.1;
return view[0] === 0.1;</div>}
```
###DataView (Int8)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setInt8 (0, 0x80);
return view.getInt8(0) === -0x80;</div>}
```
###DataView (Uint8)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setUint8(0, 0x100);
return view.getUint8(0) === 0;</div>}
```
###DataView (Int16)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setInt16(0, 0x8000);
return view.getInt16(0) === -0x8000;</div>}
```
###DataView (Uint16)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setUint16(0, 0x10000);
return view.getUint16(0) === 0;</div>}
```
###DataView (Int32)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setInt32(0, 0x80000000);
return view.getInt32(0) === -0x80000000;</div>}
```
###DataView (Uint32)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setUint32(0, 0x100000000);
return view.getUint32(0) === 0;</div>}
```
###DataView (Float32)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setFloat32(0, 0.1);
return view.getFloat32(0) === 0.10000000149011612;</div>}
```
###DataView (Float64)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setFloat64(0, 0.1);
return view.getFloat64(0) === 0.1;</div>}
```
###constructors require new
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var constructors = [
  'ArrayBuffer',
  'DataView',
  'Int8Array',
  'Uint8Array',
  'Uint8ClampedArray',
  'Int16Array',
  'Uint16Array',
  'Int32Array',
  'Uint32Array',
  'Float32Array',
  'Float64Array'
];
return constructors.every(function (constructor) {
  try {
    if (constructor in global) {
      global[constructor](constructor === &quot;ArrayBuffer&quot; ? 64 : buffer);
    }
    return false;
  } catch(e) {
    return true;
  }
});</div>}
```
###%TypedArray%.prototype.subarray
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.subarray === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.keys
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.keys === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.values
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.values === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.values === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.values === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.values === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.values === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.values === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.values === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.values === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.values === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.entries
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.entries === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype[Symbol.iterator]
          
```
function(){
              <div class="code">return typeof Int8Array.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype[Symbol.iterator] === &quot;function&quot;;</div>}
```
###Int8Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Int8Array(buffer);         view[0] = 0x80;
return view[0] === -0x80;</div>}
```
###Uint8Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Uint8Array(buffer);        view[0] = 0x100;
return view[0] === 0;</div>}
```
###Uint8ClampedArray
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Uint8ClampedArray(buffer); view[0] = 0x100;
return view[0] === 0xFF;</div>}
```
###Int16Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Int16Array(buffer);        view[0] = 0x8000;
return view[0] === -0x8000;</div>}
```
###Uint16Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Uint16Array(buffer);       view[0] = 0x10000;
return view[0] === 0;</div>}
```
###Int32Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Int32Array(buffer);        view[0] = 0x80000000;
return view[0] === -0x80000000;</div>}
```
###Uint32Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Uint32Array(buffer);       view[0] = 0x100000000;
return view[0] === 0;</div>}
```
###Float32Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Float32Array(buffer);       view[0] = 0.1;
return view[0] === 0.10000000149011612;</div>}
```
###Float64Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Float64Array(buffer);       view[0] = 0.1;
return view[0] === 0.1;</div>}
```
###DataView (Int8)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setInt8 (0, 0x80);
return view.getInt8(0) === -0x80;</div>}
```
###DataView (Uint8)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setUint8(0, 0x100);
return view.getUint8(0) === 0;</div>}
```
###DataView (Int16)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setInt16(0, 0x8000);
return view.getInt16(0) === -0x8000;</div>}
```
###DataView (Uint16)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setUint16(0, 0x10000);
return view.getUint16(0) === 0;</div>}
```
###DataView (Int32)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setInt32(0, 0x80000000);
return view.getInt32(0) === -0x80000000;</div>}
```
###DataView (Uint32)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setUint32(0, 0x100000000);
return view.getUint32(0) === 0;</div>}
```
###DataView (Float32)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setFloat32(0, 0.1);
return view.getFloat32(0) === 0.10000000149011612;</div>}
```
###DataView (Float64)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setFloat64(0, 0.1);
return view.getFloat64(0) === 0.1;</div>}
```
###constructors require new
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var constructors = [
  'ArrayBuffer',
  'DataView',
  'Int8Array',
  'Uint8Array',
  'Uint8ClampedArray',
  'Int16Array',
  'Uint16Array',
  'Int32Array',
  'Uint32Array',
  'Float32Array',
  'Float64Array'
];
return constructors.every(function (constructor) {
  try {
    if (constructor in global) {
      global[constructor](constructor === &quot;ArrayBuffer&quot; ? 64 : buffer);
    }
    return false;
  } catch(e) {
    return true;
  }
});</div>}
```
###%TypedArray%.prototype.subarray
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.subarray === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.keys
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.keys === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.values
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.values === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.values === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.values === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.values === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.values === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.values === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.values === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.values === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.values === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.entries
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.entries === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype[Symbol.iterator]
          
```
function(){
              <div class="code">return typeof Int8Array.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype[Symbol.iterator] === &quot;function&quot;;</div>}
```
###Int8Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Int8Array(buffer);         view[0] = 0x80;
return view[0] === -0x80;</div>}
```
###Uint8Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Uint8Array(buffer);        view[0] = 0x100;
return view[0] === 0;</div>}
```
###Uint8ClampedArray
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Uint8ClampedArray(buffer); view[0] = 0x100;
return view[0] === 0xFF;</div>}
```
###Int16Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Int16Array(buffer);        view[0] = 0x8000;
return view[0] === -0x8000;</div>}
```
###Uint16Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Uint16Array(buffer);       view[0] = 0x10000;
return view[0] === 0;</div>}
```
###Int32Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Int32Array(buffer);        view[0] = 0x80000000;
return view[0] === -0x80000000;</div>}
```
###Uint32Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Uint32Array(buffer);       view[0] = 0x100000000;
return view[0] === 0;</div>}
```
###Float32Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Float32Array(buffer);       view[0] = 0.1;
return view[0] === 0.10000000149011612;</div>}
```
###Float64Array
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new Float64Array(buffer);       view[0] = 0.1;
return view[0] === 0.1;</div>}
```
###DataView (Int8)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setInt8 (0, 0x80);
return view.getInt8(0) === -0x80;</div>}
```
###DataView (Uint8)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setUint8(0, 0x100);
return view.getUint8(0) === 0;</div>}
```
###DataView (Int16)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setInt16(0, 0x8000);
return view.getInt16(0) === -0x8000;</div>}
```
###DataView (Uint16)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setUint16(0, 0x10000);
return view.getUint16(0) === 0;</div>}
```
###DataView (Int32)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setInt32(0, 0x80000000);
return view.getInt32(0) === -0x80000000;</div>}
```
###DataView (Uint32)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setUint32(0, 0x100000000);
return view.getUint32(0) === 0;</div>}
```
###DataView (Float32)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setFloat32(0, 0.1);
return view.getFloat32(0) === 0.10000000149011612;</div>}
```
###DataView (Float64)
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var view = new DataView(buffer);
view.setFloat64(0, 0.1);
return view.getFloat64(0) === 0.1;</div>}
```
###constructors require new
          
```
function(){
              <div class="code">var buffer = new ArrayBuffer(64);
var constructors = [
  'ArrayBuffer',
  'DataView',
  'Int8Array',
  'Uint8Array',
  'Uint8ClampedArray',
  'Int16Array',
  'Uint16Array',
  'Int32Array',
  'Uint32Array',
  'Float32Array',
  'Float64Array'
];
return constructors.every(function (constructor) {
  try {
    if (constructor in global) {
      global[constructor](constructor === &quot;ArrayBuffer&quot; ? 64 : buffer);
    }
    return false;
  } catch(e) {
    return true;
  }
});</div>}
```
###%TypedArray%.prototype.subarray
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.subarray === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.subarray === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.keys
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.keys === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.keys === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.values
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.values === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.values === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.values === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.values === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.values === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.values === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.values === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.values === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.values === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.entries
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.entries === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.entries === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype[Symbol.iterator]
          
```
function(){
              <div class="code">return typeof Int8Array.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype[Symbol.iterator] === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype[Symbol.iterator] === &quot;function&quot;;</div>}
```
