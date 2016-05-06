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
###constructors accept generic iterables
          
```
function(){
              <div class="code">var constructors = [
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
for(var i = 0; i &lt; constructors.length; i++){
  var arr = new global[constructors[i]](__createIterableObject([1, 2, 3]));
  if(arr.length !== 3 || arr[0] !== 1 || arr[1] !== 2 || arr[2] !== 3)return false;
}
return true;</div>}
```
###%TypedArray%.from
          
```
function(){
              <div class="code">return typeof Int8Array.from === &quot;function&quot; &amp;&amp;
typeof Uint8Array.from === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.from === &quot;function&quot; &amp;&amp;
typeof Int16Array.from === &quot;function&quot; &amp;&amp;
typeof Uint16Array.from === &quot;function&quot; &amp;&amp;
typeof Int32Array.from === &quot;function&quot; &amp;&amp;
typeof Uint32Array.from === &quot;function&quot; &amp;&amp;
typeof Float32Array.from === &quot;function&quot; &amp;&amp;
typeof Float64Array.from === &quot;function&quot;;</div>}
```
###%TypedArray%.of
          
```
function(){
              <div class="code">return typeof Int8Array.of === &quot;function&quot; &amp;&amp;
typeof Uint8Array.of === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.of === &quot;function&quot; &amp;&amp;
typeof Int16Array.of === &quot;function&quot; &amp;&amp;
typeof Uint16Array.of === &quot;function&quot; &amp;&amp;
typeof Int32Array.of === &quot;function&quot; &amp;&amp;
typeof Uint32Array.of === &quot;function&quot; &amp;&amp;
typeof Float32Array.of === &quot;function&quot; &amp;&amp;
typeof Float64Array.of === &quot;function&quot;;</div>}
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
###%TypedArray%.prototype.join
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.join === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.join === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.join === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.join === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.join === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.join === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.join === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.join === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.join === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.indexOf
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.indexOf === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.lastIndexOf
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.lastIndexOf === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.slice
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.slice === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.every
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.every === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.every === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.every === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.every === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.every === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.every === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.every === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.every === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.every === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.filter
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.filter === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.forEach
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.forEach === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.map
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.map === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.map === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.map === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.map === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.map === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.map === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.map === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.map === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.map === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.reduce
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.reduce === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.reduceRight
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.reduceRight === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.reverse
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.reverse === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.some
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.some === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.some === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.some === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.some === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.some === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.some === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.some === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.some === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.some === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.sort
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.sort === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.copyWithin
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.copyWithin === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.find
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.find === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.find === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.find === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.find === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.find === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.find === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.find === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.find === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.find === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.findIndex
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.findIndex === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.fill
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.fill === &quot;function&quot;;</div>}
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
###constructors accept generic iterables
          
```
function(){
              <div class="code">var constructors = [
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
for(var i = 0; i &lt; constructors.length; i++){
  var arr = new global[constructors[i]](__createIterableObject([1, 2, 3]));
  if(arr.length !== 3 || arr[0] !== 1 || arr[1] !== 2 || arr[2] !== 3)return false;
}
return true;</div>}
```
###%TypedArray%.from
          
```
function(){
              <div class="code">return typeof Int8Array.from === &quot;function&quot; &amp;&amp;
typeof Uint8Array.from === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.from === &quot;function&quot; &amp;&amp;
typeof Int16Array.from === &quot;function&quot; &amp;&amp;
typeof Uint16Array.from === &quot;function&quot; &amp;&amp;
typeof Int32Array.from === &quot;function&quot; &amp;&amp;
typeof Uint32Array.from === &quot;function&quot; &amp;&amp;
typeof Float32Array.from === &quot;function&quot; &amp;&amp;
typeof Float64Array.from === &quot;function&quot;;</div>}
```
###%TypedArray%.of
          
```
function(){
              <div class="code">return typeof Int8Array.of === &quot;function&quot; &amp;&amp;
typeof Uint8Array.of === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.of === &quot;function&quot; &amp;&amp;
typeof Int16Array.of === &quot;function&quot; &amp;&amp;
typeof Uint16Array.of === &quot;function&quot; &amp;&amp;
typeof Int32Array.of === &quot;function&quot; &amp;&amp;
typeof Uint32Array.of === &quot;function&quot; &amp;&amp;
typeof Float32Array.of === &quot;function&quot; &amp;&amp;
typeof Float64Array.of === &quot;function&quot;;</div>}
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
###%TypedArray%.prototype.join
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.join === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.join === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.join === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.join === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.join === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.join === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.join === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.join === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.join === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.indexOf
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.indexOf === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.lastIndexOf
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.lastIndexOf === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.slice
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.slice === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.every
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.every === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.every === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.every === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.every === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.every === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.every === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.every === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.every === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.every === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.filter
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.filter === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.forEach
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.forEach === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.map
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.map === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.map === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.map === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.map === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.map === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.map === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.map === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.map === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.map === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.reduce
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.reduce === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.reduceRight
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.reduceRight === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.reverse
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.reverse === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.some
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.some === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.some === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.some === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.some === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.some === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.some === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.some === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.some === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.some === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.sort
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.sort === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.copyWithin
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.copyWithin === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.find
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.find === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.find === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.find === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.find === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.find === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.find === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.find === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.find === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.find === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.findIndex
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.findIndex === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.fill
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.fill === &quot;function&quot;;</div>}
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
###constructors accept generic iterables
          
```
function(){
              <div class="code">var constructors = [
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
for(var i = 0; i &lt; constructors.length; i++){
  var arr = new global[constructors[i]](__createIterableObject([1, 2, 3]));
  if(arr.length !== 3 || arr[0] !== 1 || arr[1] !== 2 || arr[2] !== 3)return false;
}
return true;</div>}
```
###%TypedArray%.from
          
```
function(){
              <div class="code">return typeof Int8Array.from === &quot;function&quot; &amp;&amp;
typeof Uint8Array.from === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.from === &quot;function&quot; &amp;&amp;
typeof Int16Array.from === &quot;function&quot; &amp;&amp;
typeof Uint16Array.from === &quot;function&quot; &amp;&amp;
typeof Int32Array.from === &quot;function&quot; &amp;&amp;
typeof Uint32Array.from === &quot;function&quot; &amp;&amp;
typeof Float32Array.from === &quot;function&quot; &amp;&amp;
typeof Float64Array.from === &quot;function&quot;;</div>}
```
###%TypedArray%.of
          
```
function(){
              <div class="code">return typeof Int8Array.of === &quot;function&quot; &amp;&amp;
typeof Uint8Array.of === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.of === &quot;function&quot; &amp;&amp;
typeof Int16Array.of === &quot;function&quot; &amp;&amp;
typeof Uint16Array.of === &quot;function&quot; &amp;&amp;
typeof Int32Array.of === &quot;function&quot; &amp;&amp;
typeof Uint32Array.of === &quot;function&quot; &amp;&amp;
typeof Float32Array.of === &quot;function&quot; &amp;&amp;
typeof Float64Array.of === &quot;function&quot;;</div>}
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
###%TypedArray%.prototype.join
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.join === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.join === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.join === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.join === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.join === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.join === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.join === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.join === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.join === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.indexOf
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.indexOf === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.lastIndexOf
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.lastIndexOf === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.slice
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.slice === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.every
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.every === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.every === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.every === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.every === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.every === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.every === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.every === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.every === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.every === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.filter
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.filter === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.forEach
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.forEach === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.map
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.map === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.map === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.map === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.map === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.map === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.map === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.map === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.map === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.map === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.reduce
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.reduce === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.reduceRight
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.reduceRight === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.reverse
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.reverse === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.some
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.some === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.some === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.some === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.some === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.some === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.some === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.some === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.some === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.some === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.sort
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.sort === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.copyWithin
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.copyWithin === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.find
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.find === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.find === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.find === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.find === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.find === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.find === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.find === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.find === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.find === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.findIndex
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.findIndex === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.fill
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.fill === &quot;function&quot;;</div>}
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
###constructors accept generic iterables
          
```
function(){
              <div class="code">var constructors = [
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
for(var i = 0; i &lt; constructors.length; i++){
  var arr = new global[constructors[i]](__createIterableObject([1, 2, 3]));
  if(arr.length !== 3 || arr[0] !== 1 || arr[1] !== 2 || arr[2] !== 3)return false;
}
return true;</div>}
```
###%TypedArray%.from
          
```
function(){
              <div class="code">return typeof Int8Array.from === &quot;function&quot; &amp;&amp;
typeof Uint8Array.from === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.from === &quot;function&quot; &amp;&amp;
typeof Int16Array.from === &quot;function&quot; &amp;&amp;
typeof Uint16Array.from === &quot;function&quot; &amp;&amp;
typeof Int32Array.from === &quot;function&quot; &amp;&amp;
typeof Uint32Array.from === &quot;function&quot; &amp;&amp;
typeof Float32Array.from === &quot;function&quot; &amp;&amp;
typeof Float64Array.from === &quot;function&quot;;</div>}
```
###%TypedArray%.of
          
```
function(){
              <div class="code">return typeof Int8Array.of === &quot;function&quot; &amp;&amp;
typeof Uint8Array.of === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.of === &quot;function&quot; &amp;&amp;
typeof Int16Array.of === &quot;function&quot; &amp;&amp;
typeof Uint16Array.of === &quot;function&quot; &amp;&amp;
typeof Int32Array.of === &quot;function&quot; &amp;&amp;
typeof Uint32Array.of === &quot;function&quot; &amp;&amp;
typeof Float32Array.of === &quot;function&quot; &amp;&amp;
typeof Float64Array.of === &quot;function&quot;;</div>}
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
###%TypedArray%.prototype.join
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.join === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.join === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.join === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.join === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.join === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.join === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.join === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.join === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.join === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.indexOf
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.indexOf === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.lastIndexOf
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.lastIndexOf === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.slice
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.slice === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.every
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.every === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.every === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.every === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.every === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.every === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.every === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.every === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.every === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.every === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.filter
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.filter === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.forEach
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.forEach === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.map
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.map === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.map === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.map === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.map === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.map === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.map === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.map === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.map === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.map === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.reduce
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.reduce === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.reduceRight
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.reduceRight === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.reverse
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.reverse === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.some
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.some === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.some === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.some === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.some === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.some === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.some === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.some === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.some === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.some === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.sort
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.sort === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.copyWithin
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.copyWithin === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.find
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.find === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.find === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.find === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.find === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.find === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.find === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.find === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.find === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.find === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.findIndex
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.findIndex === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.fill
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.fill === &quot;function&quot;;</div>}
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
###constructors accept generic iterables
          
```
function(){
              <div class="code">var constructors = [
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
for(var i = 0; i &lt; constructors.length; i++){
  var arr = new global[constructors[i]](__createIterableObject([1, 2, 3]));
  if(arr.length !== 3 || arr[0] !== 1 || arr[1] !== 2 || arr[2] !== 3)return false;
}
return true;</div>}
```
###%TypedArray%.from
          
```
function(){
              <div class="code">return typeof Int8Array.from === &quot;function&quot; &amp;&amp;
typeof Uint8Array.from === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.from === &quot;function&quot; &amp;&amp;
typeof Int16Array.from === &quot;function&quot; &amp;&amp;
typeof Uint16Array.from === &quot;function&quot; &amp;&amp;
typeof Int32Array.from === &quot;function&quot; &amp;&amp;
typeof Uint32Array.from === &quot;function&quot; &amp;&amp;
typeof Float32Array.from === &quot;function&quot; &amp;&amp;
typeof Float64Array.from === &quot;function&quot;;</div>}
```
###%TypedArray%.of
          
```
function(){
              <div class="code">return typeof Int8Array.of === &quot;function&quot; &amp;&amp;
typeof Uint8Array.of === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.of === &quot;function&quot; &amp;&amp;
typeof Int16Array.of === &quot;function&quot; &amp;&amp;
typeof Uint16Array.of === &quot;function&quot; &amp;&amp;
typeof Int32Array.of === &quot;function&quot; &amp;&amp;
typeof Uint32Array.of === &quot;function&quot; &amp;&amp;
typeof Float32Array.of === &quot;function&quot; &amp;&amp;
typeof Float64Array.of === &quot;function&quot;;</div>}
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
###%TypedArray%.prototype.join
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.join === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.join === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.join === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.join === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.join === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.join === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.join === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.join === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.join === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.indexOf
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.indexOf === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.lastIndexOf
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.lastIndexOf === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.slice
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.slice === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.every
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.every === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.every === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.every === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.every === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.every === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.every === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.every === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.every === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.every === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.filter
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.filter === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.forEach
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.forEach === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.map
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.map === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.map === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.map === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.map === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.map === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.map === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.map === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.map === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.map === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.reduce
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.reduce === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.reduceRight
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.reduceRight === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.reverse
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.reverse === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.some
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.some === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.some === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.some === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.some === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.some === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.some === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.some === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.some === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.some === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.sort
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.sort === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.copyWithin
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.copyWithin === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.find
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.find === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.find === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.find === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.find === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.find === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.find === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.find === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.find === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.find === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.findIndex
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.findIndex === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.fill
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.fill === &quot;function&quot;;</div>}
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
###constructors accept generic iterables
          
```
function(){
              <div class="code">var constructors = [
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
for(var i = 0; i &lt; constructors.length; i++){
  var arr = new global[constructors[i]](__createIterableObject([1, 2, 3]));
  if(arr.length !== 3 || arr[0] !== 1 || arr[1] !== 2 || arr[2] !== 3)return false;
}
return true;</div>}
```
###%TypedArray%.from
          
```
function(){
              <div class="code">return typeof Int8Array.from === &quot;function&quot; &amp;&amp;
typeof Uint8Array.from === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.from === &quot;function&quot; &amp;&amp;
typeof Int16Array.from === &quot;function&quot; &amp;&amp;
typeof Uint16Array.from === &quot;function&quot; &amp;&amp;
typeof Int32Array.from === &quot;function&quot; &amp;&amp;
typeof Uint32Array.from === &quot;function&quot; &amp;&amp;
typeof Float32Array.from === &quot;function&quot; &amp;&amp;
typeof Float64Array.from === &quot;function&quot;;</div>}
```
###%TypedArray%.of
          
```
function(){
              <div class="code">return typeof Int8Array.of === &quot;function&quot; &amp;&amp;
typeof Uint8Array.of === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.of === &quot;function&quot; &amp;&amp;
typeof Int16Array.of === &quot;function&quot; &amp;&amp;
typeof Uint16Array.of === &quot;function&quot; &amp;&amp;
typeof Int32Array.of === &quot;function&quot; &amp;&amp;
typeof Uint32Array.of === &quot;function&quot; &amp;&amp;
typeof Float32Array.of === &quot;function&quot; &amp;&amp;
typeof Float64Array.of === &quot;function&quot;;</div>}
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
###%TypedArray%.prototype.join
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.join === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.join === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.join === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.join === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.join === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.join === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.join === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.join === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.join === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.indexOf
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.indexOf === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.lastIndexOf
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.lastIndexOf === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.slice
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.slice === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.every
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.every === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.every === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.every === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.every === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.every === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.every === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.every === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.every === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.every === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.filter
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.filter === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.forEach
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.forEach === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.map
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.map === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.map === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.map === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.map === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.map === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.map === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.map === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.map === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.map === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.reduce
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.reduce === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.reduceRight
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.reduceRight === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.reverse
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.reverse === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.some
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.some === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.some === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.some === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.some === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.some === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.some === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.some === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.some === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.some === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.sort
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.sort === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.copyWithin
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.copyWithin === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.find
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.find === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.find === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.find === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.find === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.find === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.find === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.find === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.find === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.find === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.findIndex
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.findIndex === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.fill
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.fill === &quot;function&quot;;</div>}
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
###constructors accept generic iterables
          
```
function(){
              <div class="code">var constructors = [
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
for(var i = 0; i &lt; constructors.length; i++){
  var arr = new global[constructors[i]](__createIterableObject([1, 2, 3]));
  if(arr.length !== 3 || arr[0] !== 1 || arr[1] !== 2 || arr[2] !== 3)return false;
}
return true;</div>}
```
###%TypedArray%.from
          
```
function(){
              <div class="code">return typeof Int8Array.from === &quot;function&quot; &amp;&amp;
typeof Uint8Array.from === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.from === &quot;function&quot; &amp;&amp;
typeof Int16Array.from === &quot;function&quot; &amp;&amp;
typeof Uint16Array.from === &quot;function&quot; &amp;&amp;
typeof Int32Array.from === &quot;function&quot; &amp;&amp;
typeof Uint32Array.from === &quot;function&quot; &amp;&amp;
typeof Float32Array.from === &quot;function&quot; &amp;&amp;
typeof Float64Array.from === &quot;function&quot;;</div>}
```
###%TypedArray%.of
          
```
function(){
              <div class="code">return typeof Int8Array.of === &quot;function&quot; &amp;&amp;
typeof Uint8Array.of === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.of === &quot;function&quot; &amp;&amp;
typeof Int16Array.of === &quot;function&quot; &amp;&amp;
typeof Uint16Array.of === &quot;function&quot; &amp;&amp;
typeof Int32Array.of === &quot;function&quot; &amp;&amp;
typeof Uint32Array.of === &quot;function&quot; &amp;&amp;
typeof Float32Array.of === &quot;function&quot; &amp;&amp;
typeof Float64Array.of === &quot;function&quot;;</div>}
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
###%TypedArray%.prototype.join
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.join === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.join === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.join === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.join === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.join === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.join === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.join === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.join === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.join === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.indexOf
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.indexOf === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.lastIndexOf
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.lastIndexOf === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.slice
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.slice === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.every
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.every === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.every === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.every === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.every === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.every === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.every === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.every === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.every === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.every === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.filter
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.filter === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.forEach
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.forEach === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.map
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.map === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.map === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.map === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.map === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.map === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.map === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.map === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.map === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.map === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.reduce
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.reduce === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.reduceRight
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.reduceRight === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.reverse
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.reverse === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.some
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.some === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.some === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.some === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.some === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.some === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.some === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.some === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.some === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.some === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.sort
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.sort === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.copyWithin
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.copyWithin === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.find
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.find === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.find === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.find === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.find === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.find === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.find === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.find === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.find === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.find === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.findIndex
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.findIndex === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.fill
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.fill === &quot;function&quot;;</div>}
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
###constructors accept generic iterables
          
```
function(){
              <div class="code">var constructors = [
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
for(var i = 0; i &lt; constructors.length; i++){
  var arr = new global[constructors[i]](__createIterableObject([1, 2, 3]));
  if(arr.length !== 3 || arr[0] !== 1 || arr[1] !== 2 || arr[2] !== 3)return false;
}
return true;</div>}
```
###%TypedArray%.from
          
```
function(){
              <div class="code">return typeof Int8Array.from === &quot;function&quot; &amp;&amp;
typeof Uint8Array.from === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.from === &quot;function&quot; &amp;&amp;
typeof Int16Array.from === &quot;function&quot; &amp;&amp;
typeof Uint16Array.from === &quot;function&quot; &amp;&amp;
typeof Int32Array.from === &quot;function&quot; &amp;&amp;
typeof Uint32Array.from === &quot;function&quot; &amp;&amp;
typeof Float32Array.from === &quot;function&quot; &amp;&amp;
typeof Float64Array.from === &quot;function&quot;;</div>}
```
###%TypedArray%.of
          
```
function(){
              <div class="code">return typeof Int8Array.of === &quot;function&quot; &amp;&amp;
typeof Uint8Array.of === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.of === &quot;function&quot; &amp;&amp;
typeof Int16Array.of === &quot;function&quot; &amp;&amp;
typeof Uint16Array.of === &quot;function&quot; &amp;&amp;
typeof Int32Array.of === &quot;function&quot; &amp;&amp;
typeof Uint32Array.of === &quot;function&quot; &amp;&amp;
typeof Float32Array.of === &quot;function&quot; &amp;&amp;
typeof Float64Array.of === &quot;function&quot;;</div>}
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
###%TypedArray%.prototype.join
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.join === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.join === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.join === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.join === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.join === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.join === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.join === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.join === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.join === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.indexOf
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.indexOf === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.lastIndexOf
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.lastIndexOf === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.slice
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.slice === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.every
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.every === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.every === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.every === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.every === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.every === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.every === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.every === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.every === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.every === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.filter
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.filter === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.forEach
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.forEach === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.map
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.map === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.map === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.map === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.map === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.map === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.map === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.map === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.map === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.map === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.reduce
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.reduce === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.reduceRight
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.reduceRight === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.reverse
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.reverse === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.some
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.some === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.some === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.some === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.some === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.some === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.some === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.some === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.some === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.some === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.sort
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.sort === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.copyWithin
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.copyWithin === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.find
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.find === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.find === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.find === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.find === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.find === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.find === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.find === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.find === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.find === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.findIndex
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.findIndex === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.fill
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.fill === &quot;function&quot;;</div>}
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
###constructors accept generic iterables
          
```
function(){
              <div class="code">var constructors = [
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
for(var i = 0; i &lt; constructors.length; i++){
  var arr = new global[constructors[i]](__createIterableObject([1, 2, 3]));
  if(arr.length !== 3 || arr[0] !== 1 || arr[1] !== 2 || arr[2] !== 3)return false;
}
return true;</div>}
```
###%TypedArray%.from
          
```
function(){
              <div class="code">return typeof Int8Array.from === &quot;function&quot; &amp;&amp;
typeof Uint8Array.from === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.from === &quot;function&quot; &amp;&amp;
typeof Int16Array.from === &quot;function&quot; &amp;&amp;
typeof Uint16Array.from === &quot;function&quot; &amp;&amp;
typeof Int32Array.from === &quot;function&quot; &amp;&amp;
typeof Uint32Array.from === &quot;function&quot; &amp;&amp;
typeof Float32Array.from === &quot;function&quot; &amp;&amp;
typeof Float64Array.from === &quot;function&quot;;</div>}
```
###%TypedArray%.of
          
```
function(){
              <div class="code">return typeof Int8Array.of === &quot;function&quot; &amp;&amp;
typeof Uint8Array.of === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.of === &quot;function&quot; &amp;&amp;
typeof Int16Array.of === &quot;function&quot; &amp;&amp;
typeof Uint16Array.of === &quot;function&quot; &amp;&amp;
typeof Int32Array.of === &quot;function&quot; &amp;&amp;
typeof Uint32Array.of === &quot;function&quot; &amp;&amp;
typeof Float32Array.of === &quot;function&quot; &amp;&amp;
typeof Float64Array.of === &quot;function&quot;;</div>}
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
###%TypedArray%.prototype.join
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.join === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.join === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.join === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.join === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.join === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.join === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.join === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.join === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.join === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.indexOf
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.indexOf === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.lastIndexOf
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.lastIndexOf === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.slice
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.slice === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.every
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.every === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.every === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.every === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.every === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.every === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.every === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.every === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.every === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.every === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.filter
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.filter === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.forEach
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.forEach === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.map
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.map === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.map === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.map === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.map === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.map === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.map === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.map === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.map === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.map === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.reduce
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.reduce === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.reduceRight
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.reduceRight === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.reverse
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.reverse === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.some
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.some === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.some === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.some === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.some === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.some === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.some === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.some === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.some === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.some === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.sort
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.sort === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.copyWithin
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.copyWithin === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.find
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.find === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.find === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.find === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.find === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.find === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.find === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.find === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.find === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.find === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.findIndex
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.findIndex === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.fill
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.fill === &quot;function&quot;;</div>}
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
###constructors accept generic iterables
          
```
function(){
              <div class="code">var constructors = [
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
for(var i = 0; i &lt; constructors.length; i++){
  var arr = new global[constructors[i]](__createIterableObject([1, 2, 3]));
  if(arr.length !== 3 || arr[0] !== 1 || arr[1] !== 2 || arr[2] !== 3)return false;
}
return true;</div>}
```
###%TypedArray%.from
          
```
function(){
              <div class="code">return typeof Int8Array.from === &quot;function&quot; &amp;&amp;
typeof Uint8Array.from === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.from === &quot;function&quot; &amp;&amp;
typeof Int16Array.from === &quot;function&quot; &amp;&amp;
typeof Uint16Array.from === &quot;function&quot; &amp;&amp;
typeof Int32Array.from === &quot;function&quot; &amp;&amp;
typeof Uint32Array.from === &quot;function&quot; &amp;&amp;
typeof Float32Array.from === &quot;function&quot; &amp;&amp;
typeof Float64Array.from === &quot;function&quot;;</div>}
```
###%TypedArray%.of
          
```
function(){
              <div class="code">return typeof Int8Array.of === &quot;function&quot; &amp;&amp;
typeof Uint8Array.of === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.of === &quot;function&quot; &amp;&amp;
typeof Int16Array.of === &quot;function&quot; &amp;&amp;
typeof Uint16Array.of === &quot;function&quot; &amp;&amp;
typeof Int32Array.of === &quot;function&quot; &amp;&amp;
typeof Uint32Array.of === &quot;function&quot; &amp;&amp;
typeof Float32Array.of === &quot;function&quot; &amp;&amp;
typeof Float64Array.of === &quot;function&quot;;</div>}
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
###%TypedArray%.prototype.join
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.join === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.join === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.join === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.join === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.join === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.join === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.join === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.join === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.join === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.indexOf
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.indexOf === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.lastIndexOf
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.lastIndexOf === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.slice
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.slice === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.every
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.every === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.every === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.every === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.every === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.every === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.every === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.every === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.every === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.every === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.filter
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.filter === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.forEach
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.forEach === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.map
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.map === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.map === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.map === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.map === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.map === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.map === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.map === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.map === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.map === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.reduce
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.reduce === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.reduceRight
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.reduceRight === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.reverse
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.reverse === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.some
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.some === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.some === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.some === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.some === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.some === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.some === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.some === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.some === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.some === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.sort
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.sort === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.copyWithin
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.copyWithin === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.find
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.find === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.find === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.find === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.find === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.find === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.find === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.find === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.find === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.find === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.findIndex
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.findIndex === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.fill
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.fill === &quot;function&quot;;</div>}
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
###constructors accept generic iterables
          
```
function(){
              <div class="code">var constructors = [
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
for(var i = 0; i &lt; constructors.length; i++){
  var arr = new global[constructors[i]](__createIterableObject([1, 2, 3]));
  if(arr.length !== 3 || arr[0] !== 1 || arr[1] !== 2 || arr[2] !== 3)return false;
}
return true;</div>}
```
###%TypedArray%.from
          
```
function(){
              <div class="code">return typeof Int8Array.from === &quot;function&quot; &amp;&amp;
typeof Uint8Array.from === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.from === &quot;function&quot; &amp;&amp;
typeof Int16Array.from === &quot;function&quot; &amp;&amp;
typeof Uint16Array.from === &quot;function&quot; &amp;&amp;
typeof Int32Array.from === &quot;function&quot; &amp;&amp;
typeof Uint32Array.from === &quot;function&quot; &amp;&amp;
typeof Float32Array.from === &quot;function&quot; &amp;&amp;
typeof Float64Array.from === &quot;function&quot;;</div>}
```
###%TypedArray%.of
          
```
function(){
              <div class="code">return typeof Int8Array.of === &quot;function&quot; &amp;&amp;
typeof Uint8Array.of === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.of === &quot;function&quot; &amp;&amp;
typeof Int16Array.of === &quot;function&quot; &amp;&amp;
typeof Uint16Array.of === &quot;function&quot; &amp;&amp;
typeof Int32Array.of === &quot;function&quot; &amp;&amp;
typeof Uint32Array.of === &quot;function&quot; &amp;&amp;
typeof Float32Array.of === &quot;function&quot; &amp;&amp;
typeof Float64Array.of === &quot;function&quot;;</div>}
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
###%TypedArray%.prototype.join
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.join === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.join === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.join === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.join === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.join === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.join === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.join === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.join === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.join === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.indexOf
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.indexOf === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.lastIndexOf
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.lastIndexOf === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.slice
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.slice === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.every
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.every === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.every === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.every === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.every === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.every === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.every === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.every === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.every === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.every === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.filter
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.filter === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.forEach
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.forEach === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.map
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.map === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.map === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.map === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.map === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.map === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.map === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.map === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.map === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.map === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.reduce
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.reduce === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.reduceRight
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.reduceRight === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.reverse
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.reverse === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.some
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.some === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.some === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.some === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.some === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.some === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.some === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.some === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.some === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.some === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.sort
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.sort === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.copyWithin
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.copyWithin === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.find
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.find === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.find === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.find === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.find === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.find === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.find === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.find === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.find === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.find === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.findIndex
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.findIndex === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.fill
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.fill === &quot;function&quot;;</div>}
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
###constructors accept generic iterables
          
```
function(){
              <div class="code">var constructors = [
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
for(var i = 0; i &lt; constructors.length; i++){
  var arr = new global[constructors[i]](__createIterableObject([1, 2, 3]));
  if(arr.length !== 3 || arr[0] !== 1 || arr[1] !== 2 || arr[2] !== 3)return false;
}
return true;</div>}
```
###%TypedArray%.from
          
```
function(){
              <div class="code">return typeof Int8Array.from === &quot;function&quot; &amp;&amp;
typeof Uint8Array.from === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.from === &quot;function&quot; &amp;&amp;
typeof Int16Array.from === &quot;function&quot; &amp;&amp;
typeof Uint16Array.from === &quot;function&quot; &amp;&amp;
typeof Int32Array.from === &quot;function&quot; &amp;&amp;
typeof Uint32Array.from === &quot;function&quot; &amp;&amp;
typeof Float32Array.from === &quot;function&quot; &amp;&amp;
typeof Float64Array.from === &quot;function&quot;;</div>}
```
###%TypedArray%.of
          
```
function(){
              <div class="code">return typeof Int8Array.of === &quot;function&quot; &amp;&amp;
typeof Uint8Array.of === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.of === &quot;function&quot; &amp;&amp;
typeof Int16Array.of === &quot;function&quot; &amp;&amp;
typeof Uint16Array.of === &quot;function&quot; &amp;&amp;
typeof Int32Array.of === &quot;function&quot; &amp;&amp;
typeof Uint32Array.of === &quot;function&quot; &amp;&amp;
typeof Float32Array.of === &quot;function&quot; &amp;&amp;
typeof Float64Array.of === &quot;function&quot;;</div>}
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
###%TypedArray%.prototype.join
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.join === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.join === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.join === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.join === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.join === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.join === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.join === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.join === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.join === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.indexOf
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.indexOf === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.lastIndexOf
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.lastIndexOf === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.slice
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.slice === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.every
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.every === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.every === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.every === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.every === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.every === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.every === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.every === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.every === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.every === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.filter
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.filter === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.forEach
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.forEach === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.map
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.map === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.map === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.map === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.map === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.map === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.map === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.map === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.map === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.map === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.reduce
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.reduce === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.reduceRight
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.reduceRight === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.reverse
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.reverse === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.some
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.some === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.some === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.some === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.some === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.some === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.some === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.some === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.some === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.some === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.sort
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.sort === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.copyWithin
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.copyWithin === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.find
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.find === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.find === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.find === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.find === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.find === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.find === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.find === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.find === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.find === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.findIndex
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.findIndex === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.fill
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.fill === &quot;function&quot;;</div>}
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
###constructors accept generic iterables
          
```
function(){
              <div class="code">var constructors = [
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
for(var i = 0; i &lt; constructors.length; i++){
  var arr = new global[constructors[i]](__createIterableObject([1, 2, 3]));
  if(arr.length !== 3 || arr[0] !== 1 || arr[1] !== 2 || arr[2] !== 3)return false;
}
return true;</div>}
```
###%TypedArray%.from
          
```
function(){
              <div class="code">return typeof Int8Array.from === &quot;function&quot; &amp;&amp;
typeof Uint8Array.from === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.from === &quot;function&quot; &amp;&amp;
typeof Int16Array.from === &quot;function&quot; &amp;&amp;
typeof Uint16Array.from === &quot;function&quot; &amp;&amp;
typeof Int32Array.from === &quot;function&quot; &amp;&amp;
typeof Uint32Array.from === &quot;function&quot; &amp;&amp;
typeof Float32Array.from === &quot;function&quot; &amp;&amp;
typeof Float64Array.from === &quot;function&quot;;</div>}
```
###%TypedArray%.of
          
```
function(){
              <div class="code">return typeof Int8Array.of === &quot;function&quot; &amp;&amp;
typeof Uint8Array.of === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.of === &quot;function&quot; &amp;&amp;
typeof Int16Array.of === &quot;function&quot; &amp;&amp;
typeof Uint16Array.of === &quot;function&quot; &amp;&amp;
typeof Int32Array.of === &quot;function&quot; &amp;&amp;
typeof Uint32Array.of === &quot;function&quot; &amp;&amp;
typeof Float32Array.of === &quot;function&quot; &amp;&amp;
typeof Float64Array.of === &quot;function&quot;;</div>}
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
###%TypedArray%.prototype.join
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.join === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.join === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.join === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.join === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.join === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.join === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.join === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.join === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.join === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.indexOf
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.indexOf === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.lastIndexOf
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.lastIndexOf === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.slice
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.slice === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.every
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.every === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.every === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.every === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.every === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.every === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.every === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.every === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.every === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.every === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.filter
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.filter === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.forEach
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.forEach === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.map
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.map === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.map === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.map === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.map === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.map === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.map === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.map === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.map === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.map === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.reduce
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.reduce === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.reduceRight
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.reduceRight === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.reverse
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.reverse === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.some
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.some === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.some === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.some === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.some === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.some === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.some === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.some === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.some === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.some === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.sort
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.sort === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.copyWithin
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.copyWithin === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.find
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.find === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.find === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.find === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.find === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.find === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.find === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.find === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.find === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.find === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.findIndex
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.findIndex === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.fill
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.fill === &quot;function&quot;;</div>}
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
###constructors accept generic iterables
          
```
function(){
              <div class="code">var constructors = [
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
for(var i = 0; i &lt; constructors.length; i++){
  var arr = new global[constructors[i]](__createIterableObject([1, 2, 3]));
  if(arr.length !== 3 || arr[0] !== 1 || arr[1] !== 2 || arr[2] !== 3)return false;
}
return true;</div>}
```
###%TypedArray%.from
          
```
function(){
              <div class="code">return typeof Int8Array.from === &quot;function&quot; &amp;&amp;
typeof Uint8Array.from === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.from === &quot;function&quot; &amp;&amp;
typeof Int16Array.from === &quot;function&quot; &amp;&amp;
typeof Uint16Array.from === &quot;function&quot; &amp;&amp;
typeof Int32Array.from === &quot;function&quot; &amp;&amp;
typeof Uint32Array.from === &quot;function&quot; &amp;&amp;
typeof Float32Array.from === &quot;function&quot; &amp;&amp;
typeof Float64Array.from === &quot;function&quot;;</div>}
```
###%TypedArray%.of
          
```
function(){
              <div class="code">return typeof Int8Array.of === &quot;function&quot; &amp;&amp;
typeof Uint8Array.of === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.of === &quot;function&quot; &amp;&amp;
typeof Int16Array.of === &quot;function&quot; &amp;&amp;
typeof Uint16Array.of === &quot;function&quot; &amp;&amp;
typeof Int32Array.of === &quot;function&quot; &amp;&amp;
typeof Uint32Array.of === &quot;function&quot; &amp;&amp;
typeof Float32Array.of === &quot;function&quot; &amp;&amp;
typeof Float64Array.of === &quot;function&quot;;</div>}
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
###%TypedArray%.prototype.join
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.join === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.join === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.join === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.join === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.join === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.join === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.join === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.join === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.join === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.indexOf
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.indexOf === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.lastIndexOf
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.lastIndexOf === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.slice
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.slice === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.every
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.every === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.every === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.every === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.every === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.every === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.every === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.every === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.every === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.every === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.filter
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.filter === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.forEach
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.forEach === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.map
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.map === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.map === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.map === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.map === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.map === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.map === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.map === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.map === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.map === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.reduce
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.reduce === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.reduceRight
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.reduceRight === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.reverse
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.reverse === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.some
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.some === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.some === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.some === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.some === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.some === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.some === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.some === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.some === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.some === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.sort
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.sort === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.copyWithin
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.copyWithin === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.find
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.find === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.find === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.find === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.find === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.find === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.find === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.find === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.find === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.find === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.findIndex
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.findIndex === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.fill
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.fill === &quot;function&quot;;</div>}
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
###constructors accept generic iterables
          
```
function(){
              <div class="code">var constructors = [
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
for(var i = 0; i &lt; constructors.length; i++){
  var arr = new global[constructors[i]](__createIterableObject([1, 2, 3]));
  if(arr.length !== 3 || arr[0] !== 1 || arr[1] !== 2 || arr[2] !== 3)return false;
}
return true;</div>}
```
###%TypedArray%.from
          
```
function(){
              <div class="code">return typeof Int8Array.from === &quot;function&quot; &amp;&amp;
typeof Uint8Array.from === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.from === &quot;function&quot; &amp;&amp;
typeof Int16Array.from === &quot;function&quot; &amp;&amp;
typeof Uint16Array.from === &quot;function&quot; &amp;&amp;
typeof Int32Array.from === &quot;function&quot; &amp;&amp;
typeof Uint32Array.from === &quot;function&quot; &amp;&amp;
typeof Float32Array.from === &quot;function&quot; &amp;&amp;
typeof Float64Array.from === &quot;function&quot;;</div>}
```
###%TypedArray%.of
          
```
function(){
              <div class="code">return typeof Int8Array.of === &quot;function&quot; &amp;&amp;
typeof Uint8Array.of === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.of === &quot;function&quot; &amp;&amp;
typeof Int16Array.of === &quot;function&quot; &amp;&amp;
typeof Uint16Array.of === &quot;function&quot; &amp;&amp;
typeof Int32Array.of === &quot;function&quot; &amp;&amp;
typeof Uint32Array.of === &quot;function&quot; &amp;&amp;
typeof Float32Array.of === &quot;function&quot; &amp;&amp;
typeof Float64Array.of === &quot;function&quot;;</div>}
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
###%TypedArray%.prototype.join
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.join === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.join === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.join === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.join === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.join === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.join === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.join === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.join === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.join === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.indexOf
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.indexOf === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.indexOf === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.lastIndexOf
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.lastIndexOf === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.lastIndexOf === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.slice
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.slice === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.slice === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.every
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.every === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.every === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.every === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.every === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.every === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.every === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.every === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.every === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.every === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.filter
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.filter === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.filter === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.forEach
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.forEach === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.forEach === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.map
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.map === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.map === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.map === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.map === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.map === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.map === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.map === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.map === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.map === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.reduce
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.reduce === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.reduce === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.reduceRight
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.reduceRight === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.reduceRight === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.reverse
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.reverse === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.reverse === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.some
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.some === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.some === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.some === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.some === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.some === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.some === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.some === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.some === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.some === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.sort
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.sort === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.sort === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.copyWithin
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.copyWithin === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.copyWithin === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.find
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.find === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.find === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.find === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.find === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.find === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.find === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.find === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.find === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.find === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.findIndex
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.findIndex === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.findIndex === &quot;function&quot;;</div>}
```
###%TypedArray%.prototype.fill
          
```
function(){
              <div class="code">return typeof Int8Array.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Uint8Array.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Uint8ClampedArray.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Int16Array.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Uint16Array.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Int32Array.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Uint32Array.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Float32Array.prototype.fill === &quot;function&quot; &amp;&amp;
typeof Float64Array.prototype.fill === &quot;function&quot;;</div>}
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
