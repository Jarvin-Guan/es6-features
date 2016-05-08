###Object.assign
          
```
function() {
    // Object.assign -> Set -> [[Set]]
    var set = [];
    var p = new Proxy({}, {
        set: function(o, k, v) {
            set.push(k);
            o[k] = v;
            return true;
        }
    });
    Object.assign(p, {
        foo: 1,
        bar: 2
    });
    return set + '' === "foo,bar";
}
```
###Array.from
          
```
function() {
    // Array.from -> Set -> [[Set]]
    var set = [];
    var p = new Proxy({}, {
        set: function(o, k, v) {
            set.push(k);
            o[k] = v;
            return true;
        }
    });
    Array.from.call(function() {
        return p;
    }, {
        length: 2,
        0: 1,
        1: 2
    });
    return set + '' === "length";
}
```
###Array.of
          
```
function() {
    // Array.from -> Set -> [[Set]]
    var set = [];
    var p = new Proxy({}, {
        set: function(o, k, v) {
            set.push(k);
            o[k] = v;
            return true;
        }
    });
    Array.of.call(function() {
        return p;
    }, 1, 2, 3);
    return set + '' === "length";
}
```
###Array.prototype.copyWithin
          
```
function() {
    // Array.prototype.copyWithin -> Set -> [[Set]]
    var set = [];
    var p = new Proxy([1, 2, 3, 4, 5, 6], {
        set: function(o, k, v) {
            set.push(k);
            o[k] = v;
            return true;
        }
    });
    p.copyWithin(0, 3);
    return set + '' === "0,1,2";
}
```
###Array.prototype.fill
          
```
function() {
    // Array.prototype.fill -> Set -> [[Set]]
    var set = [];
    var p = new Proxy([1, 2, 3, 4, 5, 6], {
        set: function(o, k, v) {
            set.push(k);
            o[k] = v;
            return true;
        }
    });
    p.fill(0, 3);
    return set + '' === "3,4,5";
}
```
###Array.prototype.pop
          
```
function() {
    // Array.prototype.pop -> Set -> [[Set]]
    var set = [];
    var p = new Proxy([], {
        set: function(o, k, v) {
            set.push(k);
            o[k] = v;
            return true;
        }
    });
    p.pop();
    return set + '' === "length";
}
```
###Array.prototype.push
          
```
function() {
    // Array.prototype.push -> Set -> [[Set]]
    var set = [];
    var p = new Proxy([], {
        set: function(o, k, v) {
            set.push(k);
            o[k] = v;
            return true;
        }
    });
    p.push(0, 0, 0);
    return set + '' === "0,1,2,length";
}
```
###Array.prototype.reverse
          
```
function() {
    // Array.prototype.reverse -> Set -> [[Set]]
    var set = [];
    var p = new Proxy([0, 0, 0, , ], {
        set: function(o, k, v) {
            set.push(k);
            o[k] = v;
            return true;
        }
    });
    p.reverse();
    return set + '' === "3,1,2";
}
```
###Array.prototype.shift
          
```
function() {
    // Array.prototype.shift -> Set -> [[Set]]
    var set = [];
    var p = new Proxy([0, 0, , 0], {
        set: function(o, k, v) {
            set.push(k);
            o[k] = v;
            return true;
        }
    });
    p.shift();
    return set + '' === "0,2,length";
}
```
###Array.prototype.splice
          
```
function() {
    // Array.prototype.splice -> Set -> [[Set]]
    var set = [];
    var p = new Proxy([1, 2, 3], {
        set: function(o, k, v) {
            set.push(k);
            o[k] = v;
            return true;
        }
    });
    p.splice(1, 0, 0);
    return set + '' === "3,2,1,length";
}
```
###Array.prototype.unshift
          
```
function() {
    // Array.prototype.unshift -> Set -> [[Set]]
    var set = [];
    var p = new Proxy([0, 0, , 0], {
        set: function(o, k, v) {
            set.push(k);
            o[k] = v;
            return true;
        }
    });
    p.unshift(0, 1);
    return set + '' === "5,3,2,0,1,length";
}
```
