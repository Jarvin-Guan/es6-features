###[[Set]]
          
```
function() {
    // [[Set]] -> [[DefineOwnProperty]]
    var def = [];
    var p = new Proxy({
        foo: 1,
        bar: 2
    }, {
        defineProperty: function(o, v, desc) {
            def.push(v);
            Object.defineProperty(o, v, desc);
            return true;
        }
    });
    p.foo = 2;
    p.bar = 4;
    return def + '' === "foo,bar";
}
```
###SetIntegrityLevel
          
```
function() {
    // SetIntegrityLevel -> DefinePropertyOrThrow -> [[DefineOwnProperty]]
    var def = [];
    var p = new Proxy({
        foo: 1,
        bar: 2
    }, {
        defineProperty: function(o, v, desc) {
            def.push(v);
            Object.defineProperty(o, v, desc);
            return true;
        }
    });
    Object.freeze(p);
    return def + '' === "foo,bar";
}
```
