###Object.keys
          
```
function() {
    var obj = {
        // Non-negative integer names appear first in value order
        2: true,
        0: true,
        1: true,
        // Other string names appear in source order
        ' ': true,
        // Non-negative integers are sorted above other names
        9: true,
        D: true,
        B: true,
        // Negative integers are treated as other names
        '-1': true,
    };
    // Other string names are added in order of creation
    obj.A = true;
    // Non-negative integer names, conversely, ignore order of creation
    obj[3] = true;
    // Having a total of 20+ properties doesn't affect property order
    "EFGHIJKLMNOPQRSTUVWXYZ".split('').forEach(function(key) {
        obj[key] = true;
    });
    // Object.defineProperty doesn't affect the above rules
    Object.defineProperty(obj, 'C', {
        value: true,
        enumerable: true
    });
    Object.defineProperty(obj, '4', {
        value: true,
        enumerable: true
    });
    // Deleting and reinserting a property doesn't preserve its position
    delete obj[2];
    obj[2] = true;

    var forInOrder = '';
    for (var key in obj) forInOrder += key;

    return Object.keys(obj).join('') === forInOrder;
}
```
###JSON.stringify
          
```
function() {
    var obj = {
        2: true,
        0: true,
        1: true,
        ' ': true,
        9: true,
        D: true,
        B: true,
        '-1': true
    };
    obj.A = true;
    obj[3] = true;
    "EFGHIJKLMNOPQRSTUVWXYZ".split('').forEach(function(key) {
        obj[key] = true;
    });
    Object.defineProperty(obj, 'C', {
        value: true,
        enumerable: true
    });
    Object.defineProperty(obj, '4', {
        value: true,
        enumerable: true
    });
    delete obj[2];
    obj[2] = true;

    return JSON.stringify(obj) ===
        '{"0":true,"1":true,"2":true,"3":true,"4":true,"9":true," ":true,"D":true,"B":true,"-1":true,"A":true,"E":true,"F":true,"G":true,"H":true,"I":true,"J":true,"K":true,"L":true,"M":true,"N":true,"O":true,"P":true,"Q":true,"R":true,"S":true,"T":true,"U":true,"V":true,"W":true,"X":true,"Y":true,"Z":true,"C":true}';
}
```
###JSON.parse
          
```
function() {
    var result = '';
    JSON.parse(
        '{"0":true,"1":true,"2":true,"3":true,"4":true,"9":true," ":true,"D":true,"B":true,"-1":true,"E":true,"F":true,"G":true,"H":true,"I":true,"J":true,"K":true,"L":true,"A":true,"C":true}',
        function reviver(k, v) {
            result += k;
            return v;
        }
    );
    return result === "012349 DB-1EFGHIJKLAC";
}
```
