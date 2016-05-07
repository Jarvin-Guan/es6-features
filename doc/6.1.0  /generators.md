###basic functionality
          
```
function() {
    function* generator() {
        yield 5;
        yield 6;
    };
    var iterator = generator();
    var item = iterator.next();
    var passed = item.value === 5 && item.done === false;
    item = iterator.next();
    passed &= item.value === 6 && item.done === false;
    item = iterator.next();
    passed &= item.value === undefined && item.done === true;
    return passed;
}
```
###generator function expressions
          
```
function() {
    var generator = function*() {
        yield 5;
        yield 6;
    };
    var iterator = generator();
    var item = iterator.next();
    var passed = item.value === 5 && item.done === false;
    item = iterator.next();
    passed &= item.value === 6 && item.done === false;
    item = iterator.next();
    passed &= item.value === undefined && item.done === true;
    return passed;
}
```
###correct &quot;this&quot; binding
          
```
function() {
    function* generator() {
        yield this.x;
        yield this.y;
    };
    var iterator = {
        g: generator,
        x: 5,
        y: 6
    }.g();
    var item = iterator.next();
    var passed = item.value === 5 && item.done === false;
    item = iterator.next();
    passed &= item.value === 6 && item.done === false;
    item = iterator.next();
    passed &= item.value === undefined && item.done === true;
    return passed;
}
```
###can't use &quot;this&quot; with new
          
```
function() {
    function* generator() {
        yield this.x;
        yield this.y;
    };
    try {
        (new generator()).next();
    } catch (e) {
        return true;
    }
}
```
###sending
          
```
function() {
    var sent;

    function* generator() {
        sent = [yield 5, yield 6];
    };
    var iterator = generator();
    iterator.next();
    iterator.next("foo");
    iterator.next("bar");
    return sent[0] === "foo" && sent[1] === "bar";
}
```
###%GeneratorPrototype%
          
```
function() {
    function* generatorFn() {}
    var ownProto = Object.getPrototypeOf(generatorFn());
    var passed = ownProto === generatorFn.prototype;

    var sharedProto = Object.getPrototypeOf(ownProto);
    passed &= sharedProto !== Object.prototype &&
        sharedProto === Object.getPrototypeOf(function*() {}.prototype) &&
        sharedProto.hasOwnProperty('next');

    return passed;
}
```
###%GeneratorPrototype% prototype chain
          
```
function() {
    function* generatorFn() {}
    var g = generatorFn();
    var ownProto = Object.getPrototypeOf(g);
    var passed = ownProto === generatorFn.prototype;

    var sharedProto = Object.getPrototypeOf(ownProto);
    var iterProto = Object.getPrototypeOf(sharedProto);

    passed &= iterProto.hasOwnProperty(Symbol.iterator) &&
        !sharedProto.hasOwnProperty(Symbol.iterator) &&
        !ownProto.hasOwnProperty(Symbol.iterator) &&
        g[Symbol.iterator]() === g;

    return passed;
}
```
###%GeneratorPrototype%.constructor
          
```
function() {
    function* g() {}
    var iterator = new g.constructor("a", "b", "c", "yield a; yield b; yield c;")(5, 6, 7);
    var item = iterator.next();
    var passed = item.value === 5 && item.done === false;
    item = iterator.next();
    passed &= item.value === 6 && item.done === false;
    item = iterator.next();
    passed &= item.value === 7 && item.done === false;
    item = iterator.next();
    passed &= item.value === undefined && item.done === true;

    passed &= g.constructor === (function*() {}).constructor;
    return passed;
}
```
###%GeneratorPrototype%.throw
          
```
function() {
    var passed = false;

    function* generator() {
        try {
            yield 5;
            yield 6;
        } catch (e) {
            passed = (e === "foo");
        }
    };
    var iterator = generator();
    iterator.next();
    iterator.throw("foo");
    return passed;
}
```
###%GeneratorPrototype%.return
          
```
function() {
    function* generator() {
        yield 5;
        yield 6;
    };
    var iterator = generator();
    var item = iterator.next();
    var passed = item.value === 5 && item.done === false;
    item = iterator.return("quxquux");
    passed &= item.value === "quxquux" && item.done === true;
    item = iterator.next();
    passed &= item.value === undefined && item.done === true;
    return passed;
}
```
###yield operator precedence
          
```
function() {
    var passed;

    function* generator() {
        passed = yield 0 ? true : false;
    };
    var iterator = generator();
    iterator.next();
    iterator.next(true);
    return passed;
}
```
###yield *, arrays
          
```
function() {
    var iterator = (function* generator() {
        yield * [5, 6];
    }());
    var item = iterator.next();
    var passed = item.value === 5 && item.done === false;
    item = iterator.next();
    passed &= item.value === 6 && item.done === false;
    item = iterator.next();
    passed &= item.value === undefined && item.done === true;
    return passed;
}
```
###yield *, sparse arrays
          
```
function() {
    var iterator = (function* generator() {
        yield * [, , ];
    }());
    var item = iterator.next();
    var passed = item.value === undefined && item.done === false;
    item = iterator.next();
    passed &= item.value === undefined && item.done === false;
    item = iterator.next();
    passed &= item.value === undefined && item.done === true;
    return passed;
}
```
###yield *, strings
          
```
function() {
    var iterator = (function* generator() {
        yield * "56";
    }());
    var item = iterator.next();
    var passed = item.value === "5" && item.done === false;
    item = iterator.next();
    passed &= item.value === "6" && item.done === false;
    item = iterator.next();
    passed &= item.value === undefined && item.done === true;
    return passed;
}
```
###yield *, astral plane strings
          
```
function() {
    var iterator = (function* generator() {
        yield * "𠮷𠮶";
    }());
    var item = iterator.next();
    var passed = item.value === "𠮷" && item.done === false;
    item = iterator.next();
    passed &= item.value === "𠮶" && item.done === false;
    item = iterator.next();
    passed &= item.value === undefined && item.done === true;
    return passed;
}
```
###yield *, generator instances
          
```
function() {
    var iterator = (function* generator() {
        yield * (function*() {
            yield 5;
            yield 6;
            yield 7;
        }());
    }());
    var item = iterator.next();
    var passed = item.value === 5 && item.done === false;
    item = iterator.next();
    passed &= item.value === 6 && item.done === false;
    item = iterator.next();
    passed &= item.value === 7 && item.done === false;
    item = iterator.next();
    passed &= item.value === undefined && item.done === true;
    return passed;
}
```
###yield *, generic iterables
          
```
function() {
    var iterator = (function* generator() {
        yield * global.__createIterableObject([5, 6, 7]);
    }());
    var item = iterator.next();
    var passed = item.value === 5 && item.done === false;
    item = iterator.next();
    passed &= item.value === 6 && item.done === false;
    item = iterator.next();
    passed &= item.value === 7 && item.done === false;
    item = iterator.next();
    passed &= item.value === undefined && item.done === true;
    return passed;
}
```
###yield *, instances of iterables
          
```
function() {
    var iterator = (function* generator() {
        yield * Object.create(__createIterableObject([5, 6, 7]));
    }());
    var item = iterator.next();
    var passed = item.value === 5 && item.done === false;
    item = iterator.next();
    passed &= item.value === 6 && item.done === false;
    item = iterator.next();
    passed &= item.value === 7 && item.done === false;
    item = iterator.next();
    passed &= item.value === undefined && item.done === true;
    return passed;
}
```
###yield * on non-iterables is a runtime error
          
```
function() {
    var iterator = (function* generator() {
        yield * [5];
    }());
    var item = iterator.next();
    var passed = item.value === 5 && item.done === false;
    iterator = (function* generator() {
        yield * 5;
    }());
    try {
        iterator.next();
    } catch (e) {
        return passed;
    }
}
```
###yield *, iterator closing
          
```
function() {
    var closed = '';
    var iter = __createIterableObject([1, 2, 3], {
        'return': function() {
            closed += 'a';
            return {
                done: true
            };
        }
    });
    var gen = (function* generator() {
        try {
            yield * iter;
        } finally {
            closed += 'b';
        }
    })();
    gen.next();
    gen['return']();
    return closed === 'ab';
}
```
###yield *, iterator closing via throw()
          
```
function() {
    var closed = false;
    var iter = global.__createIterableObject([1, 2, 3], {
        'throw': undefined,
        'return': function() {
            closed = true;
            return {
                done: true
            };
        }
    });
    var gen = (function*() {
        try {
            yield * iter;
        } catch (e) {}
    })();
    gen.next();
    gen['throw']();
    return closed;
}
```
###shorthand generator methods
          
```
function() {
    var o = { * generator() {
            yield 5;
            yield 6;
        },
    };
    var iterator = o.generator();
    var item = iterator.next();
    var passed = item.value === 5 && item.done === false;
    item = iterator.next();
    passed &= item.value === 6 && item.done === false;
    item = iterator.next();
    passed &= item.value === undefined && item.done === true;
    return passed;
}
```
###string-keyed shorthand generator methods
          
```
function() {
    var o = { * "foo bar" () {
            yield 5;
            yield 6;
        },
    };
    var iterator = o["foo bar"]();
    var item = iterator.next();
    var passed = item.value === 5 && item.done === false;
    item = iterator.next();
    passed &= item.value === 6 && item.done === false;
    item = iterator.next();
    passed &= item.value === undefined && item.done === true;
    return passed;
}
```
###computed shorthand generators
          
```
function() {
    var garply = "generator";
    var o = { * [garply]() {
            yield 5;
            yield 6;
        },
    };
    var iterator = o.generator();
    var item = iterator.next();
    var passed = item.value === 5 && item.done === false;
    item = iterator.next();
    passed &= item.value === 6 && item.done === false;
    item = iterator.next();
    passed &= item.value === undefined && item.done === true;
    return passed;
}
```
###shorthand generator methods, classes
          
```
function() {
    class C { * generator() {
            yield 5;
            yield 6;
        }
    };
    var iterator = new C().generator();
    var item = iterator.next();
    var passed = item.value === 5 && item.done === false;
    item = iterator.next();
    passed &= item.value === 6 && item.done === false;
    item = iterator.next();
    passed &= item.value === undefined && item.done === true;
    return passed;
}
```
###computed shorthand generators, classes
          
```
function() {
    var garply = "generator";
    class C { * [garply]() {
            yield 5;
            yield 6;
        }
    }
    var iterator = new C().generator();
    var item = iterator.next();
    var passed = item.value === 5 && item.done === false;
    item = iterator.next();
    passed &= item.value === 6 && item.done === false;
    item = iterator.next();
    passed &= item.value === undefined && item.done === true;
    return passed;
}
```
###shorthand generators can't be constructors
          
```
function() {
    class C { * generator() {
            yield 5;
            yield 6;
        }
    };
    try {
        Function("class D { * constructor() { return {}; } }");
    } catch (e) {
        return true;
    }
}
```
