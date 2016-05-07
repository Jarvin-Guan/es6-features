###basic functionality
          
```
function() {
    var p1 = new Promise(function(resolve, reject) {
        resolve("foo");
    });
    var p2 = new Promise(function(resolve, reject) {
        reject("quux");
    });
    var score = 0;

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

    p1.then(thenFn, shouldNotRun);
    p2.then(shouldNotRun, catchFn);
    p1.catch(shouldNotRun);
    p2.catch(catchFn);

    p1.then(function() {
        // Promise.prototype.then() should return a new Promise
        score += p1.then() !== p1;
        check();
    });

    function check() {
        if (score === 4) asyncTestPassed();
    }
}
```
###constructor requires new
          
```
function() {
    new Promise(function() {});
    try {
        Promise(function() {});
        return false;
    } catch (e) {
        return true;
    }
}
```
###Promise.prototype isn't an instance
          
```
function() {
    new Promise(function() {});
    try {
        Promise.prototype.then(function() {});
    } catch (e) {
        return true;
    }
}
```
###Promise.all
          
```
function() {
    var fulfills = Promise.all([
        new Promise(function(resolve) {
            setTimeout(resolve, 200, "foo");
        }),
        new Promise(function(resolve) {
            setTimeout(resolve, 100, "bar");
        }),
    ]);
    var rejects = Promise.all([
        new Promise(function(_, reject) {
            setTimeout(reject, 200, "baz");
        }),
        new Promise(function(_, reject) {
            setTimeout(reject, 100, "qux");
        }),
    ]);
    var score = 0;
    fulfills.then(function(result) {
        score += (result + "" === "foo,bar");
        check();
    });
    rejects.catch(function(result) {
        score += (result === "qux");
        check();
    });

    function check() {
        if (score === 2) asyncTestPassed();
    }
}
```
###Promise.all, generic iterables
          
```
function() {
    var fulfills = Promise.all(global.__createIterableObject([
        new Promise(function(resolve) {
            setTimeout(resolve, 200, "foo");
        }),
        new Promise(function(resolve) {
            setTimeout(resolve, 100, "bar");
        }),
    ]));
    var rejects = Promise.all(global.__createIterableObject([
        new Promise(function(_, reject) {
            setTimeout(reject, 200, "baz");
        }),
        new Promise(function(_, reject) {
            setTimeout(reject, 100, "qux");
        }),
    ]));
    var score = 0;
    fulfills.then(function(result) {
        score += (result + "" === "foo,bar");
        check();
    });
    rejects.catch(function(result) {
        score += (result === "qux");
        check();
    });

    function check() {
        if (score === 2) asyncTestPassed();
    }
}
```
###Promise.race
          
```
function() {
    var fulfills = Promise.race([
        new Promise(function(resolve) {
            setTimeout(resolve, 200, "foo");
        }),
        new Promise(function(_, reject) {
            setTimeout(reject, 300, "bar");
        }),
    ]);
    var rejects = Promise.race([
        new Promise(function(_, reject) {
            setTimeout(reject, 200, "baz");
        }),
        new Promise(function(resolve) {
            setTimeout(resolve, 300, "qux");
        }),
    ]);
    var score = 0;
    fulfills.then(function(result) {
        score += (result === "foo");
        check();
    });
    rejects.catch(function(result) {
        score += (result === "baz");
        check();
    });

    function check() {
        if (score === 2) asyncTestPassed();
    }
}
```
###Promise.race, generic iterables
          
```
function() {
    var fulfills = Promise.race(global.__createIterableObject([
        new Promise(function(resolve) {
            setTimeout(resolve, 200, "foo");
        }),
        new Promise(function(_, reject) {
            setTimeout(reject, 300, "bar");
        }),
    ]));
    var rejects = Promise.race(global.__createIterableObject([
        new Promise(function(_, reject) {
            setTimeout(reject, 200, "baz");
        }),
        new Promise(function(resolve) {
            setTimeout(resolve, 300, "qux");
        }),
    ]));
    var score = 0;
    fulfills.then(function(result) {
        score += (result === "foo");
        check();
    });
    rejects.catch(function(result) {
        score += (result === "baz");
        check();
    });

    function check() {
        if (score === 2) asyncTestPassed();
    }
}
```
