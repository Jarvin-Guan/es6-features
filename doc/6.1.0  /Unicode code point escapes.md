###in strings
          
```
function() {
    return '\u{1d306}' == '\ud834\udf06';
}
```
###in identifiers
          
```
function() {
    var\ u {
        102 C0
    } = {\
        u {
            102 C0
        }: 2
    };
    return\ u {
        102 C0
    }['\ud800\udec0'] === 2;
}
```
