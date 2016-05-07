###ToPrimitive
          
```
function() {
    // ToPrimitive -&gt; Get -&gt; [[Get]]
    var get = [];
    var p = new Proxy({
        toString: Function()
    }, {
        get: function(o, k) {
            get.push(k);
            return o[k];
        }
    });
    p + 3;
    return get[0] === Symbol.toPrimitive && get.slice(1) + '' === "valueOf,toString";
}
```
###CreateListFromArrayLike
          
```
function() {
    // CreateListFromArrayLike -&gt; Get -&gt; [[Get]]
    var get = [];
    var p = new Proxy({
        length: 2,
        0: 0,
        1: 0
    }, {
        get: function(o, k) {
            get.push(k);
            return o[k];
        }
    });
    Function.prototype.apply({}, p);
    return get + '' === "length,0,1";
}
```
###HasBinding
          
```
function() {
    // HasBinding -&gt; Get -&gt; [[Get]]
    var get = [];
    var p = new Proxy({
        foo: 1
    }, {
        get: function(o, k) {
            get.push(k);
            return o[k];
        }
    });
    p[Symbol.unscopables] = p;
    with(p) {
        typeof foo;
    }
    return get[0] === Symbol.unscopables && get.slice(1) + '' === "foo";
}
```
###CreateDynamicFunction
          
```
function() {
    // CreateDynamicFunction -&gt; GetPrototypeFromConstructor -&gt; Get -&gt; [[Get]]
    var get = [];
    var p = new Proxy(Function, {
        get: function(o, k) {
            get.push(k);
            return o[k];
        }
    });
    new p;
    return get + '' === "prototype";
}
```
###ClassDefinitionEvaluation
          
```
function() {
    // ClassDefinitionEvaluation -&gt; Get -&gt; [[Get]]
    var get = [];
    var p = new Proxy(Function(), {
        get: function(o, k) {
            get.push(k);
            return o[k];
        }
    });
    class C extends p {}
    return get + '' === "prototype";
}
```
###IteratorComplete, IteratorValue
          
```
function() {
    // IteratorComplete -&gt; Get -&gt; [[Get]]
    // IteratorValue -&gt; Get -&gt; [[Get]]
    var get = [];
    var iterable = {};
    iterable[Symbol.iterator] = function() {
        return {
            next: function() {
                return new Proxy({
                    value: 2,
                    done: false
                }, {
                    get: function(o, k) {
                        get.push(k);
                        return o[k];
                    }
                });
            }
        };
    }
    var i = 0;
    for (var e of iterable) {
        if (++i & gt; = 2) break;
    }
    return get + '' === "done,value,done,value";
}
```
###ToPropertyDescriptor
          
```
function() {
    // ToPropertyDescriptor -&gt; Get -&gt; [[Get]]
    var get = [];
    var p = new Proxy({
        enumerable: true,
        configurable: true,
        value: true,
        writable: true,
        get: Function(),
        set: Function()
    }, {
        get: function(o, k) {
            get.push(k);
            return o[k];
        }
    });
    try {
        // This will throw, since it will have true for both "get" and "value",
        // but not before performing a Get on every property.
        Object.defineProperty({}, "foo", p);
    } catch (e) {
        return get + '' === "enumerable,configurable,value,writable,get,set";
    }
}
```
###Object.assign
          
```
function() {
    // Object.assign -&gt; Get -&gt; [[Get]]
    var get = [];
    var p = new Proxy({
        foo: 1,
        bar: 2
    }, {
        get: function(o, k) {
            get.push(k);
            return o[k];
        }
    });
    Object.assign({}, p);
    return get + '' === "foo,bar";
}
```
###Object.defineProperties
          
```
function() {
    // Object.defineProperties -&gt; Get -&gt; [[Get]]
    var get = [];
    var p = new Proxy({
        foo: {},
        bar: {}
    }, {
        get: function(o, k) {
            get.push(k);
            return o[k];
        }
    });
    Object.defineProperties({}, p);
    return get + '' === "foo,bar";
}
```
###Function.prototype.bind
          
```
function() {
    // Function.prototype.bind -&gt; Get -&gt; [[Get]]
    var get = [];
    var p = new Proxy(Function(), {
        get: function(o, k) {
            get.push(k);
            return o[k];
        }
    });
    Function.prototype.bind.call(p);
    return get + '' === "length,name";
}
```
###Error.prototype.toString
          
```
function() {
    // Error.prototype.toString -&gt; Get -&gt; [[Get]]
    var get = [];
    var p = new Proxy({}, {
        get: function(o, k) {
            get.push(k);
            return o[k];
        }
    });
    Error.prototype.toString.call(p);
    return get + '' === "name,message";
}
```
###String.raw
          
```
function() {
    // String.raw -&gt; Get -&gt; [[Get]]
    var get = [];
    var raw = new Proxy({
        length: 2,
        0: '',
        1: ''
    }, {
        get: function(o, k) {
            get.push(k);
            return o[k];
        }
    });
    var p = new Proxy({
        raw: raw
    }, {
        get: function(o, k) {
            get.push(k);
            return o[k];
        }
    });
    String.raw(p);
    return get + '' === "raw,length,0,1";
}
```
###RegExp constructor
          
```
function() {
    // RegExp -&gt; Get -&gt; [[Get]]
    var get = [];
    var re = {
        constructor: null
    };
    re[Symbol.match] = true;
    var p = new Proxy(re, {
        get: function(o, k) {
            get.push(k);
            return o[k];
        }
    });
    RegExp(p);
    return get[0] === Symbol.match && get.slice(1) + '' === "constructor,source,flags";
}
```
###RegExp.prototype.flags
          
```
function() {
    // RegExp.prototype.flags -&gt; Get -&gt; [[Get]]
    var get = [];
    var p = new Proxy({}, {
        get: function(o, k) {
            get.push(k);
            return o[k];
        }
    });
    Object.getOwnPropertyDescriptor(RegExp.prototype, 'flags').get.call(p);
    return get + '' === "global,ignoreCase,multiline,unicode,sticky";
}
```
###RegExp.prototype.toString
          
```
function() {
    // RegExp.prototype.toString -&gt; Get -&gt; [[Get]]
    var get = [];
    var p = new Proxy({}, {
        get: function(o, k) {
            get.push(k);
            return o[k];
        }
    });
    RegExp.prototype.toString.call(p);
    return get + '' === "source,flags";
}
```
###Array.from
          
```
function() {
    // Array.from -&gt; Get -&gt; [[Get]]
    var get = [];
    var p = new Proxy({
        length: 2,
        0: '',
        1: ''
    }, {
        get: function(o, k) {
            get.push(k);
            return o[k];
        }
    });
    Array.from(p);
    return get[0] === Symbol.iterator && get.slice(1) + '' === "length,0,1";
}
```
###Array.prototype.pop
          
```
function() {
    // Array.prototype.pop -&gt; Get -&gt; [[Get]]
    var get = [];
    var p = new Proxy([0, 1, 2, 3], {
        get: function(o, k) {
            get.push(k);
            return o[k];
        }
    });
    Array.prototype.pop.call(p);
    return get + '' === "length,3";
}
```
###Array.prototype.reverse
          
```
function() {
    // Array.prototype.reverse -&gt; Get -&gt; [[Get]]
    var get = [];
    var p = new Proxy([0, , 2, , 4, , ], {
        get: function(o, k) {
            get.push(k);
            return o[k];
        }
    });
    Array.prototype.reverse.call(p);
    return get + '' === "length,0,4,2";
}
```
###Array.prototype.shift
          
```
function() {
    // Array.prototype.shift -&gt; Get -&gt; [[Get]]
    var get = [];
    var p = new Proxy([0, 1, 2, 3], {
        get: function(o, k) {
            get.push(k);
            return o[k];
        }
    });
    Array.prototype.shift.call(p);
    return get + '' === "length,0,1,2,3";
}
```
###Array.prototype.toString
          
```
function() {
    // Array.prototype.toString -&gt; Get -&gt; [[Get]]
    var get = [];
    var p = new Proxy({
        join: Function()
    }, {
        get: function(o, k) {
            get.push(k);
            return o[k];
        }
    });
    Array.prototype.toString.call(p);
    return get + '' === "join";
}
```
###JSON.stringify
          
```
function() {
    // JSON.stringify -&gt; Get -&gt; [[Get]]
    var get = [];
    var p = new Proxy({}, {
        get: function(o, k) {
            get.push(k);
            return o[k];
        }
    });
    JSON.stringify(p);
    return get + '' === "toJSON";
}
```
###Promise resolve functions
          
```
function() {
    // Promise resolve functions -&gt; Get -&gt; [[Get]]
    var get = [];
    var p = new Proxy({}, {
        get: function(o, k) {
            get.push(k);
            return o[k];
        }
    });
    new Promise(function(resolve) {
        resolve(p);
    });
    return get + '' === "then";
}
```
###String.prototype.replace
          
```
function() {
    // String.prototype.replace functions -&gt; Get -&gt; [[Get]]
    var get = [];
    var proxied = {};
    proxied[Symbol.toPrimitive] = Function();
    var p = new Proxy(proxied, {
        get: function(o, k) {
            get.push(k);
            return o[k];
        }
    });
    "".replace(p);
    return get[0] === Symbol.replace && get[1] === Symbol.toPrimitive && get.length === 2;
}
```
###String.prototype.split
          
```
function() {
    // String.prototype.split functions -&gt; Get -&gt; [[Get]]
    var get = [];
    var proxied = {};
    proxied[Symbol.toPrimitive] = Function();
    var p = new Proxy(proxied, {
        get: function(o, k) {
            get.push(k);
            return o[k];
        }
    });
    "".split(p);
    return get[0] === Symbol.split && get[1] === Symbol.toPrimitive && get.length === 2;
}
```
###Date.prototype.toJSON
          
```
function() {
    // Date.prototype.toJSON -&gt; ToPrimitive -&gt; Get -&gt; [[Get]]
    // Date.prototype.toJSON -&gt; Invoke -&gt; GetMethod -&gt; GetV -&gt; [[Get]]
    var get = [];
    var p = new Proxy({
        toString: Function(),
        toISOString: Function()
    }, {
        get: function(o, k) {
            get.push(k);
            return o[k];
        }
    });
    Date.prototype.toJSON.call(p);
    return get[0] === Symbol.toPrimitive && get.slice(1) + '' === "valueOf,toString,toISOString";
}
```
