###basic functionality
          
```
function() {
    var object = {};
    var symbol = Symbol();
    var value = {};
    object[symbol] = value;
    return object[symbol] === value;
}
```
###typeof support
          
```
function() {
    return typeof Symbol() === "symbol";
}
```
###symbol keys are hidden to pre-ES6 code
          
```
function() {
    var object = {};
    var symbol = Symbol();
    object[symbol] = 1;

    for (var x in object) {}
    var passed = !x;

    if (Object.keys && Object.getOwnPropertyNames) {
        passed &= Object.keys(object).length === 0 && Object.getOwnPropertyNames(object).length === 0;
    }

    return passed;
}
```
###Object.defineProperty support
          
```
function() {
    var object = {};
    var symbol = Symbol();
    var value = {};

    if (Object.defineProperty) {
        Object.defineProperty(object, symbol, {
            value: value
        });
        return object[symbol] === value;
    }

    return passed;
}
```
###symbols inherit from Symbol.prototype
          
```
function() {
    var symbol = Symbol();
    var passed = symbol.foo === undefined;
    Symbol.prototype.foo = 2;
    passed &= symbol.foo === 2;
    delete Symbol.prototype.foo;
    return passed;
}
```
###cannot coerce to string or number
          
```
function() {
    var symbol = Symbol();

    try {
        symbol + "";
        return false;
    } catch (e) {}

    try {
        symbol + 0;
        return false;
    } catch (e) {}

    return true;
}
```
###can convert with String()
          
```
function() {
    return String(Symbol("foo")) === "Symbol(foo)";
}
```
###new Symbol() throws
          
```
function() {
    var symbol = Symbol();
    try {
        new Symbol();
    } catch (e) {
        return true;
    }
}
```
###JSON.stringify ignores symbols
          
```
function() {
    var object = {
        foo: Symbol()
    };
    object[Symbol()] = 1;
    var array = [Symbol()];
    return JSON.stringify(object) === '{}' && JSON.stringify(array) === '[null]' && JSON.stringify(Symbol()) === undefined;
}
```
###global symbol registry
          
```
function() {
    var symbol = Symbol.for('foo');
    return Symbol.for('foo') === symbol &&
        Symbol.keyFor(symbol) === 'foo';
}
```
