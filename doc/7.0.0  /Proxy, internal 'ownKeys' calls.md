###SetIntegrityLevel
          
```
function() {
    // SetIntegrityLevel -&gt; [[OwnPropertyKeys]]
    var ownKeysCalled = 0;
    var p = new Proxy({}, {
        ownKeys: function(o) {
            ownKeysCalled++;
            return Object.keys(o);
        }
    });
    Object.freeze(p);
    return ownKeysCalled === 1;
}
```
###TestIntegrityLevel
          
```
function() {
    // TestIntegrityLevel -&gt; [[OwnPropertyKeys]]
    var ownKeysCalled = 0;
    var p = new Proxy(Object.preventExtensions({}), {
        ownKeys: function(o) {
            ownKeysCalled++;
            return Object.keys(o);
        }
    });
    Object.isFrozen(p);
    return ownKeysCalled === 1;
}
```
###SerializeJSONObject
          
```
function() {
    // SerializeJSONObject -&gt; EnumerableOwnNames -&gt; [[OwnPropertyKeys]]
    var ownKeysCalled = 0;
    var p = new Proxy({}, {
        ownKeys: function(o) {
            ownKeysCalled++;
            return Object.keys(o);
        }
    });
    JSON.stringify({
        a: p,
        b: p
    });
    return ownKeysCalled === 2;
}
```
