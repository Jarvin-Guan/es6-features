###no semicolon needed after do-while
          
```
function() {
    do {} while (false) return true;
}
```
###Invalid Date
          
```
function() {
    return new Date(NaN) + "" === "Invalid Date";
}
```
