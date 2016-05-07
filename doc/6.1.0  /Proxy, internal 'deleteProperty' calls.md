###Array.prototype.copyWithin
          
```
function() {
    // Array.prototype.copyWithin -&gt; DeletePropertyOrThrow -&gt; [[Delete]]
    var del = [];
    var p = new Proxy([0, 0, 0, , , , ], {
        deleteProperty: function(o, v) {
            del.push(v);
            return delete o[v];
        }
    });
    p.copyWithin(0, 3);
    return del + '' === "0,1,2";
}
```
###Array.prototype.pop
          
```
function() {
    // Array.prototype.pop -&gt; DeletePropertyOrThrow -&gt; [[Delete]]
    var del = [];
    var p = new Proxy([0, 0, 0], {
        deleteProperty: function(o, v) {
            del.push(v);
            return delete o[v];
        }
    });
    p.pop();
    return del + '' === "2";
}
```
###Array.prototype.reverse
          
```
function() {
    // Array.prototype.reverse -&gt; DeletePropertyOrThrow -&gt; [[Delete]]
    var del = [];
    var p = new Proxy([0, , 2, , 4, , ], {
        deleteProperty: function(o, v) {
            del.push(v);
            return delete o[v];
        }
    });
    p.reverse();
    return del + '' === "0,4,2";
}
```
###Array.prototype.shift
          
```
function() {
    // Array.prototype.shift -&gt; DeletePropertyOrThrow -&gt; [[Delete]]
    var del = [];
    var p = new Proxy([0, , 0, , 0, 0], {
        deleteProperty: function(o, v) {
            del.push(v);
            return delete o[v];
        }
    });
    p.shift();
    return del + '' === "0,2,5";
}
```
###Array.prototype.splice
          
```
function() {
    // Array.prototype.splice -&gt; DeletePropertyOrThrow -&gt; [[Delete]]
    var del = [];
    var p = new Proxy([0, 0, 0, 0, , 0], {
        deleteProperty: function(o, v) {
            del.push(v);
            return delete o[v];
        }
    });
    p.splice(2, 2, 0);
    return del + '' === "3,5";
}
```
###Array.prototype.unshift
          
```
function() {
    // Array.prototype.unshift -&gt; DeletePropertyOrThrow -&gt; [[Delete]]
    var del = [];
    var p = new Proxy([0, 0, , 0, , 0], {
        deleteProperty: function(o, v) {
            del.push(v);
            return delete o[v];
        }
    });
    p.unshift(0);
    return del + '' === "5,3";
}
```
