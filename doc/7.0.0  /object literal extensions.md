###computed properties
          
```
function() {
    var x = 'y';
    return ({
        [x]: 1
    }).y === 1;
}
```
###shorthand properties
          
```
function() {
    var a = 7,
        b = 8,
        c = {
            a,
            b
        };
    return c.a === 7 && c.b === 8;
}
```
###shorthand methods
          
```
function() {
    return ({
        y() {
            return 2;
        }
    }).y() === 2;
}
```
###string-keyed shorthand methods
          
```
function() {
    return ({
        "foo bar" () {
            return 4;
        }
    })["foo bar"]() === 4;
}
```
###computed shorthand methods
          
```
function() {
    var x = 'y';
    return ({
        [x]() {
            return 1
        }
    }).y() === 1;
}
```
###computed accessors
          
```
function() {
    var x = 'y',
        valueSet,
        obj = {
            get [x]() {
                return 1
            },
            set [x](value) {
                valueSet = value
            }
        };
    obj.y = 'foo';
    return obj.y === 1 && valueSet === 'foo';
}
```
