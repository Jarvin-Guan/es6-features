###[[Set]]
          
```
function() {
    // [[Set]] -&gt; [[GetOwnProperty]]
    var gopd = [];
    var p = new Proxy({}, {
        getOwnPropertyDescriptor: function(o, v) {
            gopd.push(v);
            return Object.getOwnPropertyDescriptor(o, v);
        }
    });
    p.foo = 1;
    p.bar = 1;
    return gopd + '' === "foo,bar";
}
```
###Object.assign
          
```
function() {
    // Object.assign -&gt; [[GetOwnProperty]]
    var gopd = [];
    var p = new Proxy({
        foo: 1,
        bar: 2
    }, {
        getOwnPropertyDescriptor: function(o, v) {
            gopd.push(v);
            return Object.getOwnPropertyDescriptor(o, v);
        }
    });
    Object.assign({}, p);
    return gopd + '' === "foo,bar";
}
```
###Object.prototype.hasOwnProperty
          
```
function() {
    // Object.prototype.hasOwnProperty -&gt; HasOwnProperty -&gt; [[GetOwnProperty]]
    var gopd = [];
    var p = new Proxy({
        foo: 1,
        bar: 2
    }, {
        getOwnPropertyDescriptor: function(o, v) {
            gopd.push(v);
            return Object.getOwnPropertyDescriptor(o, v);
        }
    });
    p.hasOwnProperty('garply');
    return gopd + '' === "garply";
}
```
###Function.prototype.bind
          
```
function() {
    // Function.prototype.bind -&gt; HasOwnProperty -&gt; [[GetOwnProperty]]
    var gopd = [];
    var p = new Proxy(Function(), {
        getOwnPropertyDescriptor: function(o, v) {
            gopd.push(v);
            return Object.getOwnPropertyDescriptor(o, v);
        }
    });
    p.bind();
    return gopd + '' === "length";
}
```
