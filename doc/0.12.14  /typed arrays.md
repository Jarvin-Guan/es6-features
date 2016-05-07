###Int8Array
          
```
function() {
    var buffer = new ArrayBuffer(64);
    var view = new Int8Array(buffer);
    view[0] = 0x80;
    return view[0] === -0x80;
}
```
###Uint8Array
          
```
function() {
    var buffer = new ArrayBuffer(64);
    var view = new Uint8Array(buffer);
    view[0] = 0x100;
    return view[0] === 0;
}
```
###Uint8ClampedArray
          
```
function() {
    var buffer = new ArrayBuffer(64);
    var view = new Uint8ClampedArray(buffer);
    view[0] = 0x100;
    return view[0] === 0xFF;
}
```
###Int16Array
          
```
function() {
    var buffer = new ArrayBuffer(64);
    var view = new Int16Array(buffer);
    view[0] = 0x8000;
    return view[0] === -0x8000;
}
```
###Uint16Array
          
```
function() {
    var buffer = new ArrayBuffer(64);
    var view = new Uint16Array(buffer);
    view[0] = 0x10000;
    return view[0] === 0;
}
```
###Int32Array
          
```
function() {
    var buffer = new ArrayBuffer(64);
    var view = new Int32Array(buffer);
    view[0] = 0x80000000;
    return view[0] === -0x80000000;
}
```
###Uint32Array
          
```
function() {
    var buffer = new ArrayBuffer(64);
    var view = new Uint32Array(buffer);
    view[0] = 0x100000000;
    return view[0] === 0;
}
```
###Float32Array
          
```
function() {
    var buffer = new ArrayBuffer(64);
    var view = new Float32Array(buffer);
    view[0] = 0.1;
    return view[0] === 0.10000000149011612;
}
```
###Float64Array
          
```
function() {
    var buffer = new ArrayBuffer(64);
    var view = new Float64Array(buffer);
    view[0] = 0.1;
    return view[0] === 0.1;
}
```
###DataView (Int8)
          
```
function() {
    var buffer = new ArrayBuffer(64);
    var view = new DataView(buffer);
    view.setInt8(0, 0x80);
    return view.getInt8(0) === -0x80;
}
```
###DataView (Uint8)
          
```
function() {
    var buffer = new ArrayBuffer(64);
    var view = new DataView(buffer);
    view.setUint8(0, 0x100);
    return view.getUint8(0) === 0;
}
```
###DataView (Int16)
          
```
function() {
    var buffer = new ArrayBuffer(64);
    var view = new DataView(buffer);
    view.setInt16(0, 0x8000);
    return view.getInt16(0) === -0x8000;
}
```
###DataView (Uint16)
          
```
function() {
    var buffer = new ArrayBuffer(64);
    var view = new DataView(buffer);
    view.setUint16(0, 0x10000);
    return view.getUint16(0) === 0;
}
```
###DataView (Int32)
          
```
function() {
    var buffer = new ArrayBuffer(64);
    var view = new DataView(buffer);
    view.setInt32(0, 0x80000000);
    return view.getInt32(0) === -0x80000000;
}
```
###DataView (Uint32)
          
```
function() {
    var buffer = new ArrayBuffer(64);
    var view = new DataView(buffer);
    view.setUint32(0, 0x100000000);
    return view.getUint32(0) === 0;
}
```
###DataView (Float32)
          
```
function() {
    var buffer = new ArrayBuffer(64);
    var view = new DataView(buffer);
    view.setFloat32(0, 0.1);
    return view.getFloat32(0) === 0.10000000149011612;
}
```
###DataView (Float64)
          
```
function() {
    var buffer = new ArrayBuffer(64);
    var view = new DataView(buffer);
    view.setFloat64(0, 0.1);
    return view.getFloat64(0) === 0.1;
}
```
###constructors require new
          
```
function() {
    var buffer = new ArrayBuffer(64);
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
    return constructors.every(function(constructor) {
        try {
            if (constructor in global) {
                global[constructor](constructor === "ArrayBuffer" ? 64 : buffer);
            }
            return false;
        } catch (e) {
            return true;
        }
    });
}
```
###%TypedArray%.prototype.subarray
          
```
function() {
    return typeof Int8Array.prototype.subarray === "function" &&
        typeof Uint8Array.prototype.subarray === "function" &&
        typeof Uint8ClampedArray.prototype.subarray === "function" &&
        typeof Int16Array.prototype.subarray === "function" &&
        typeof Uint16Array.prototype.subarray === "function" &&
        typeof Int32Array.prototype.subarray === "function" &&
        typeof Uint32Array.prototype.subarray === "function" &&
        typeof Float32Array.prototype.subarray === "function" &&
        typeof Float64Array.prototype.subarray === "function";
}
```
###%TypedArray%.prototype.keys
          
```
function() {
    return typeof Int8Array.prototype.keys === "function" &&
        typeof Uint8Array.prototype.keys === "function" &&
        typeof Uint8ClampedArray.prototype.keys === "function" &&
        typeof Int16Array.prototype.keys === "function" &&
        typeof Uint16Array.prototype.keys === "function" &&
        typeof Int32Array.prototype.keys === "function" &&
        typeof Uint32Array.prototype.keys === "function" &&
        typeof Float32Array.prototype.keys === "function" &&
        typeof Float64Array.prototype.keys === "function";
}
```
###%TypedArray%.prototype.values
          
```
function() {
    return typeof Int8Array.prototype.values === "function" &&
        typeof Uint8Array.prototype.values === "function" &&
        typeof Uint8ClampedArray.prototype.values === "function" &&
        typeof Int16Array.prototype.values === "function" &&
        typeof Uint16Array.prototype.values === "function" &&
        typeof Int32Array.prototype.values === "function" &&
        typeof Uint32Array.prototype.values === "function" &&
        typeof Float32Array.prototype.values === "function" &&
        typeof Float64Array.prototype.values === "function";
}
```
###%TypedArray%.prototype.entries
          
```
function() {
    return typeof Int8Array.prototype.entries === "function" &&
        typeof Uint8Array.prototype.entries === "function" &&
        typeof Uint8ClampedArray.prototype.entries === "function" &&
        typeof Int16Array.prototype.entries === "function" &&
        typeof Uint16Array.prototype.entries === "function" &&
        typeof Int32Array.prototype.entries === "function" &&
        typeof Uint32Array.prototype.entries === "function" &&
        typeof Float32Array.prototype.entries === "function" &&
        typeof Float64Array.prototype.entries === "function";
}
```
###%TypedArray%.prototype[Symbol.iterator]
          
```
function() {
    return typeof Int8Array.prototype[Symbol.iterator] === "function" &&
        typeof Uint8Array.prototype[Symbol.iterator] === "function" &&
        typeof Uint8ClampedArray.prototype[Symbol.iterator] === "function" &&
        typeof Int16Array.prototype[Symbol.iterator] === "function" &&
        typeof Uint16Array.prototype[Symbol.iterator] === "function" &&
        typeof Int32Array.prototype[Symbol.iterator] === "function" &&
        typeof Uint32Array.prototype[Symbol.iterator] === "function" &&
        typeof Float32Array.prototype[Symbol.iterator] === "function" &&
        typeof Float64Array.prototype[Symbol.iterator] === "function";
}
```
