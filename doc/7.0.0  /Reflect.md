###Reflect.get
          
```
function() {
    return Reflect.get({
        qux: 987
    }, "qux") === 987;
}
```
###Reflect.set
          
```
function() {
    var obj = {};
    Reflect.set(obj, "quux", 654);
    return obj.quux === 654;
}
```
###Reflect.has
          
```
function() {
    return Reflect.has({
        qux: 987
    }, "qux");
}
```
###Reflect.deleteProperty
          
```
function() {
    var obj = {
        bar: 456
    };
    Reflect.deleteProperty(obj, "bar");
    return !("bar" in obj);
}
```
###Reflect.getOwnPropertyDescriptor
          
```
function() {
    var obj = {
        baz: 789
    };
    var desc = Reflect.getOwnPropertyDescriptor(obj, "baz");
    return desc.value === 789 &&
        desc.configurable && desc.writable && desc.enumerable;
}
```
###Reflect.defineProperty
          
```
function() {
    var obj = {};
    Reflect.defineProperty(obj, "foo", {
        value: 123
    });
    return obj.foo === 123 &&
        Reflect.defineProperty(Object.freeze({}), "foo", {
            value: 123
        }) === false;
}
```
###Reflect.getPrototypeOf
          
```
function() {
    return Reflect.getPrototypeOf([]) === Array.prototype;
}
```
###Reflect.setPrototypeOf
          
```
function() {
    var obj = {};
    Reflect.setPrototypeOf(obj, Array.prototype);
    return obj instanceof Array;
}
```
###Reflect.isExtensible
          
```
function() {
    return Reflect.isExtensible({}) &&
        !Reflect.isExtensible(Object.preventExtensions({}));
}
```
###Reflect.preventExtensions
          
```
function() {
    var obj = {};
    Reflect.preventExtensions(obj);
    return !Object.isExtensible(obj);
}
```
###Reflect.ownKeys, string keys
          
```
function() {
    var obj = Object.create({
        C: true
    });
    obj.A = true;
    Object.defineProperty(obj, 'B', {
        value: true,
        enumerable: false
    });

    return Reflect.ownKeys(obj).sort() + '' === "A,B";
}
```
###Reflect.ownKeys, symbol keys
          
```
function() {
    var s1 = Symbol(),
        s2 = Symbol(),
        s3 = Symbol();
    var proto = {};
    proto[s1] = true;
    var obj = Object.create(proto);
    obj[s2] = true;
    Object.defineProperty(obj, s3, {
        value: true,
        enumerable: false
    });

    var keys = Reflect.ownKeys(obj);
    return keys.indexOf(s2) & gt; - 1 && keys.indexOf(s3) & gt; - 1 && keys.length === 2;
}
```
###Reflect.apply
          
```
function() {
    return Reflect.apply(Array.prototype.push, [1, 2], [3, 4, 5]) === 5;
}
```
###Reflect.construct
          
```
function() {
    return Reflect.construct(function(a, b, c) {
        this.qux = a + b + c;
    }, ["foo", "bar", "baz"]).qux === "foobarbaz";
}
```
###Reflect.construct sets new.target meta-property
          
```
function() {
    return Reflect.construct(function(a, b, c) {
        if (new.target === Object) {
            this.qux = a + b + c;
        }
    }, ["foo", "bar", "baz"], Object).qux === "foobarbaz";
}
```
###Reflect.construct creates instances from third argument
          
```
function() {
    function F() {}
    var obj = Reflect.construct(function() {
        this.y = 1;
    }, [], F);
    return obj.y === 1 && obj instanceof F;
}
```
###Reflect.construct, Array subclassing
          
```
function() {
    function F() {}
    var obj = Reflect.construct(Array, [], F);
    obj[2] = 'foo';
    return obj.length === 3 && obj instanceof F;
}
```
###Reflect.construct, RegExp subclassing
          
```
function() {
    function F() {}
    var obj = Reflect.construct(RegExp, ["baz", "g"], F);
    return RegExp.prototype.exec.call(obj, "foobarbaz")[0] === "baz" && obj.lastIndex === 9 && obj instanceof F;
}
```
###Reflect.construct, Function subclassing
          
```
function() {
    function F() {}
    var obj = Reflect.construct(Function, ["return 2"], F);
    return obj() === 2 && obj instanceof F;
}
```
###Reflect.construct, Promise subclassing
          
```
function() {
    function F() {}
    var p1 = Reflect.construct(Promise, [function(resolve, reject) {
        resolve("foo");
    }], F);
    var p2 = Reflect.construct(Promise, [function(resolve, reject) {
        reject("quux");
    }], F);
    var score = +(p1 instanceof F && p2 instanceof F);

    function thenFn(result) {
        score += (result === "foo");
        check();
    }

    function catchFn(result) {
        score += (result === "quux");
        check();
    }

    function shouldNotRun(result) {
        score = -Infinity;
    }

    p1.then = p2.then = Promise.prototype.then;
    p1.catch = p2.catch = Promise.prototype.catch;

    p1.then(thenFn, shouldNotRun);
    p2.then(shouldNotRun, catchFn);
    p1.catch(shouldNotRun);
    p2.catch(catchFn);

    function check() {
        if (score === 4) asyncTestPassed();
    }
}
```
