###Boolean is subclassable
          
```
function() {
    class C extends Boolean {}
    var c = new C(true);
    return c instanceof Boolean && c instanceof C && c == true;
}
```
###Number is subclassable
          
```
function() {
    class C extends Number {}
    var c = new C(6);
    return c instanceof Number && c instanceof C && +c === 6;
}
```
###String is subclassable
          
```
function() {
    class C extends String {}
    var c = new C("golly");
    return c instanceof String && c instanceof C && c + '' === "golly" && c[0] === "g" && c.length === 5;
}
```
###Map is subclassable
          
```
function() {
    var key = {};
    class M extends Map {}
    var map = new M();

    map.set(key, 123);

    return map instanceof M && map.has(key) && map.get(key) === 123;
}
```
###Set is subclassable
          
```
function() {
    var obj = {};
    class S extends Set {}
    var set = new S();

    set.add(123);
    set.add(123);

    return set instanceof S && set.has(123);
}
```
