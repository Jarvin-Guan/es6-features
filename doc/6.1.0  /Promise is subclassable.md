###basic functionality
          
```
function() {
    class P extends Promise {}
    var p1 = new P(function(resolve, reject) {
        resolve("foo");
    });
    var p2 = new P(function(resolve, reject) {
        reject("quux");
    });
    var score = +(p1 instanceof P);

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
        // P.prototype.then() should return a new P
        score += p1.then() instanceof P && p1.then() !== p1;
        check();
    });

    function check() {
        if (score === 5) asyncTestPassed();
    }
}
```
###correct prototype chain
          
```
function() {
    class C extends Promise {}
    var c = new C(function(resolve, reject) {
        resolve("foo");
    });
    return c instanceof C && c instanceof Promise && Object.getPrototypeOf(C) === Promise;
}
```
###Promise.all
          
```
function() {
    class P extends Promise {}
    var fulfills = P.all([
        new Promise(function(resolve) {
            setTimeout(resolve, 200, "foo");
        }),
        new Promise(function(resolve) {
            setTimeout(resolve, 100, "bar");
        }),
    ]);
    var rejects = P.all([
        new Promise(function(_, reject) {
            setTimeout(reject, 200, "baz");
        }),
        new Promise(function(_, reject) {
            setTimeout(reject, 100, "qux");
        }),
    ]);
    var score = +(fulfills instanceof P);
    fulfills.then(function(result) {
        score += (result + "" === "foo,bar");
        check();
    });
    rejects.catch(function(result) {
        score += (result === "qux");
        check();
    });

    function check() {
        if (score === 3) asyncTestPassed();
    }
}
```
###Promise.race
          
```
function() {
    class P extends Promise {}
    var fulfills = P.race([
        new Promise(function(resolve) {
            setTimeout(resolve, 200, "foo");
        }),
        new Promise(function(_, reject) {
            setTimeout(reject, 300, "bar");
        }),
    ]);
    var rejects = P.race([
        new Promise(function(_, reject) {
            setTimeout(reject, 200, "baz");
        }),
        new Promise(function(resolve) {
            setTimeout(resolve, 300, "qux");
        }),
    ]);
    var score = +(fulfills instanceof P);
    fulfills.then(function(result) {
        score += (result === "foo");
        check();
    });
    rejects.catch(function(result) {
        score += (result === "baz");
        check();
    });

    function check() {
        if (score === 3) asyncTestPassed();
    }
}
```
