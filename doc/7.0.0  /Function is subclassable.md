###can be called
          
```
function() {
    class C extends Function {}
    var c = new C("return 'foo';");
    return c() === 'foo';
}
```
###correct prototype chain
          
```
function() {
    class C extends Function {}
    var c = new C("return 'foo';");
    return c instanceof C && c instanceof Function && Object.getPrototypeOf(C) === Function;
}
```
###can be used with &quot;new&quot;
          
```
function() {
    class C extends Function {}
    var c = new C("this.bar = 2;");
    c.prototype.baz = 3;
    return new c().bar === 2 && new c().baz === 3;
}
```
###Function.prototype.call
          
```
function() {
    class C extends Function {}
    var c = new C("x", "return this.bar + x;");
    return c.call({
        bar: 1
    }, 2) === 3;
}
```
###Function.prototype.apply
          
```
function() {
    class C extends Function {}
    var c = new C("x", "return this.bar + x;");
    return c.apply({
        bar: 1
    }, [2]) === 3;
}
```
###Function.prototype.bind
          
```
function() {
    class C extends Function {}
    var c = new C("x", "y", "return this.bar + x + y;").bind({
        bar: 1
    }, 2);
    return c(6) === 9 && c instanceof C;
}
```
