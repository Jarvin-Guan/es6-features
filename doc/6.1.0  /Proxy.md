###constructor requires new
          
```
function() {
    new Proxy({}, {});
    try {
        Proxy({}, {});
        return false;
    } catch (e) {
        return true;
    }
}
```
###no &quot;prototype&quot; property
          
```
function() {
    new Proxy({}, {});
    return !Proxy.hasOwnProperty('prototype');
}
```
###&quot;get&quot; handler
          
```
function() {
    var proxied = {};
    var proxy = new Proxy(proxied, {
        get: function(t, k, r) {
            return t === proxied && k === "foo" && r === proxy && 5;
        }
    });
    return proxy.foo === 5;
}
```
###&quot;get&quot; handler, instances of proxies
          
```
function() {
    var proxied = {};
    var proxy = Object.create(new Proxy(proxied, {
        get: function(t, k, r) {
            return t === proxied && k === "foo" && r === proxy && 5;
        }
    }));
    return proxy.foo === 5;
}
```
###&quot;get&quot; handler invariants
          
```
function() {
    var passed = false;
    var proxied = {};
    var proxy = new Proxy(proxied, {
        get: function() {
            passed = true;
            return 4;
        }
    });
    // The value reported for a property must be the same as the value of the corresponding
    // target object property if the target object property is a non-writable,
    // non-configurable own data property.
    Object.defineProperty(proxied, "foo", {
        value: 5,
        enumerable: true
    });
    try {
        proxy.foo;
        return false;
    } catch (e) {}
    // The value reported for a property must be undefined if the corresponding target
    // object property is a non-configurable own accessor property that has undefined
    // as its [[Get]] attribute.
    Object.defineProperty(proxied, "bar", {
        set: function() {},
        enumerable: true
    });
    try {
        proxy.bar;
        return false;
    } catch (e) {}
    return passed;
}
```
###&quot;set&quot; handler
          
```
function() {
    var proxied = {};
    var passed = false;
    var proxy = new Proxy(proxied, {
        set: function(t, k, v, r) {
            passed = t === proxied && k + v === "foobar" && r === proxy;
        }
    });
    proxy.foo = "bar";
    return passed;
}
```
###&quot;set&quot; handler, instances of proxies
          
```
function() {
    var proxied = {};
    var passed = false;
    var proxy = Object.create(new Proxy(proxied, {
        set: function(t, k, v, r) {
            passed = t === proxied && k + v === "foobar" && r === proxy;
        }
    }));
    proxy.foo = "bar";
    return passed;
}
```
###&quot;set&quot; handler invariants
          
```
function() {
    var passed = false;
    new Proxy({}, {});
    // Cannot change the value of a property to be different from the value of
    // the corresponding target object if the corresponding target object
    // property is a non-writable, non-configurable own data property.
    var proxied = {};
    var proxy = new Proxy(proxied, {
        set: function() {
            passed = true;
            return true;
        }
    });
    Object.defineProperty(proxied, "foo", {
        value: 2,
        enumerable: true
    });
    proxy.foo = 2;
    try {
        proxy.foo = 4;
        return false;
    } catch (e) {}
    // Cannot set the value of a property if the corresponding target
    // object property is a non-configurable own accessor property
    // that has undefined as its [[Set]] attribute.
    Object.defineProperty(proxied, "bar", {
        get: function() {},
        enumerable: true
    });
    try {
        proxy.bar = 2;
        return false;
    } catch (e) {}
    return passed;
}
```
###&quot;has&quot; handler
          
```
function() {
    var proxied = {};
    var passed = false;
    "foo" in new Proxy(proxied, {
        has: function(t, k) {
            passed = t === proxied && k === "foo";
        }
    });
    return passed;
}
```
###&quot;has&quot; handler, instances of proxies
          
```
function() {
    var proxied = {};
    var passed = false;
    "foo" in Object.create(new Proxy(proxied, {
        has: function(t, k) {
            passed = t === proxied && k === "foo";
        }
    }));
    return passed;
}
```
###&quot;has&quot; handler invariants
          
```
function() {
    var passed = false;
    new Proxy({}, {});
    // A property cannot be reported as non-existent, if it exists as a
    // non-configurable own property of the target object.
    var proxied = {};
    var proxy = new Proxy(proxied, {
        has: function() {
            passed = true;
            return false;
        }
    });
    Object.defineProperty(proxied, "foo", {
        value: 2,
        writable: true,
        enumerable: true
    });
    try {
        'foo' in proxy;
        return false;
    } catch (e) {}
    // A property cannot be reported as non-existent, if it exists as an
    // own property of the target object and the target object is not extensible.
    proxied.bar = 2;
    Object.preventExtensions(proxied);
    try {
        'bar' in proxy;
        return false;
    } catch (e) {}
    return passed;
}
```
###&quot;deleteProperty&quot; handler
          
```
function() {
    var proxied = {};
    var passed = false;
    delete new Proxy(proxied, {
        deleteProperty: function(t, k) {
            passed = t === proxied && k === "foo";
        }
    }).foo;
    return passed;
}
```
###&quot;deleteProperty&quot; handler invariant
          
```
function() {
    var passed = false;
    new Proxy({}, {});
    // A property cannot be reported as deleted, if it exists as a non-configurable
    // own property of the target object.
    var proxied = {};
    Object.defineProperty(proxied, "foo", {
        value: 2,
        writable: true,
        enumerable: true
    });
    try {
        delete new Proxy(proxied, {
            deleteProperty: function() {
                passed = true;
                return true;
            }
        }).foo;
        return false;
    } catch (e) {}
    return passed;
}
```
###&quot;getOwnPropertyDescriptor&quot; handler
          
```
function() {
    var proxied = {};
    var fakeDesc = {
        value: "foo",
        configurable: true
    };
    var returnedDesc = Object.getOwnPropertyDescriptor(
        new Proxy(proxied, {
            getOwnPropertyDescriptor: function(t, k) {
                return t === proxied && k === "foo" && fakeDesc;
            }
        }),
        "foo"
    );
    return (returnedDesc.value === fakeDesc.value && returnedDesc.configurable === fakeDesc.configurable && returnedDesc.writable === false && returnedDesc.enumerable === false);
}
```
###&quot;getOwnPropertyDescriptor&quot; handler invariants
          
```
function() {
    var passed = false;
    new Proxy({}, {});
    // A property cannot be reported as non-existent, if it exists as a non-configurable
    // own property of the target object.
    var proxied = {};
    var proxy = new Proxy(proxied, {
        getOwnPropertyDescriptor: function() {
            passed = true;
            return undefined;
        }
    });
    Object.defineProperty(proxied, "foo", {
        value: 2,
        writable: true,
        enumerable: true
    });
    try {
        Object.getOwnPropertyDescriptor(proxy, "foo");
        return false;
    } catch (e) {}
    // A property cannot be reported as non-existent, if it exists as an own property
    // of the target object and the target object is not extensible.
    proxied.bar = 3;
    Object.preventExtensions(proxied);
    try {
        Object.getOwnPropertyDescriptor(proxy, "bar");
        return false;
    } catch (e) {}
    // A property cannot be reported as existent, if it does not exists as an own property
    // of the target object and the target object is not extensible.
    try {
        Object.getOwnPropertyDescriptor(new Proxy(proxied, {
            getOwnPropertyDescriptor: function() {
                return {
                    value: 2,
                    configurable: true,
                    writable: true,
                    enumerable: true
                };
            }
        }), "baz");
        return false;
    } catch (e) {}
    // A property cannot be reported as non-configurable, if it does not exists as an own
    // property of the target object or if it exists as a configurable own property of
    // the target object.
    try {
        Object.getOwnPropertyDescriptor(new Proxy({}, {
            getOwnPropertyDescriptor: function() {
                return {
                    value: 2,
                    configurable: false,
                    writable: true,
                    enumerable: true
                };
            }
        }), "baz");
        return false;
    } catch (e) {}
    try {
        Object.getOwnPropertyDescriptor(new Proxy({
            baz: 1
        }, {
            getOwnPropertyDescriptor: function() {
                return {
                    value: 1,
                    configurable: false,
                    writable: true,
                    enumerable: true
                };
            }
        }), "baz");
        return false;
    } catch (e) {}
    return passed;
}
```
###&quot;defineProperty&quot; handler
          
```
function() {
    var proxied = {};
    var passed = false;
    Object.defineProperty(
        new Proxy(proxied, {
            defineProperty: function(t, k, d) {
                passed = t === proxied && k === "foo" && d.value === 5;
                return true;
            }
        }),
        "foo", {
            value: 5,
            configurable: true
        }
    );
    return passed;
}
```
###&quot;defineProperty&quot; handler invariants
          
```
function() {
    var passed = false;
    new Proxy({}, {});
    // A property cannot be added, if the target object is not extensible.
    var proxied = Object.preventExtensions({});
    var proxy = new Proxy(proxied, {
        defineProperty: function() {
            passed = true;
            return true;
        }
    });
    try {
        Object.defineProperty(proxy, "foo", {
            value: 2
        });
        return false;
    } catch (e) {}
    // A property cannot be non-configurable, unless there exists a corresponding
    // non-configurable own property of the target object.
    try {
        Object.defineProperty(
            new Proxy({
                bar: true
            }, {
                defineProperty: function() {
                    return true;
                }
            }),
            "bar", {
                value: 5,
                configurable: false,
                writable: true,
                enumerable: true
            }
        );
        return false;
    } catch (e) {}
    return passed;
}
```
###&quot;getPrototypeOf&quot; handler
          
```
function() {
    var proxied = {};
    var fakeProto = {};
    var proxy = new Proxy(proxied, {
        getPrototypeOf: function(t) {
            return t === proxied && fakeProto;
        }
    });
    return Object.getPrototypeOf(proxy) === fakeProto;
}
```
###&quot;getPrototypeOf&quot; handler invariant
          
```
function() {
    var passed = false;
    new Proxy({}, {});
    // If the target object is not extensible, [[GetPrototypeOf]] applied to the proxy object
    // must return the same value as [[GetPrototypeOf]] applied to the proxy object's target object.
    try {
        Object.getPrototypeOf(new Proxy(Object.preventExtensions({}), {
            getPrototypeOf: function() {
                passed = true;
                return {};
            }
        }));
        return false;
    } catch (e) {}
    return passed;
}
```
###&quot;setPrototypeOf&quot; handler
          
```
function() {
    var proxied = {};
    var newProto = {};
    var passed = false;
    Object.setPrototypeOf(
        new Proxy(proxied, {
            setPrototypeOf: function(t, p) {
                passed = t === proxied && p === newProto;
                return true;
            }
        }),
        newProto
    );
    return passed;
}
```
###&quot;setPrototypeOf&quot; handler invariant
          
```
function() {
    var passed = false;
    new Proxy({}, {});
    Object.setPrototypeOf({}, {});
    // If the target object is not extensible, the argument value must be the
    // same as the result of [[GetPrototypeOf]] applied to target object.
    try {
        Object.setPrototypeOf(
            new Proxy(Object.preventExtensions({}), {
                setPrototypeOf: function() {
                    passed = true;
                    return true;
                }
            }), {});
        return false;
    } catch (e) {}
    return passed;
}
```
###&quot;isExtensible&quot; handler
          
```
function() {
    var proxied = {};
    var passed = false;
    Object.isExtensible(
        new Proxy(proxied, {
            isExtensible: function(t) {
                passed = t === proxied;
                return true;
            }
        })
    );
    return passed;
}
```
###&quot;isExtensible&quot; handler invariant
          
```
function() {
    var passed = false;
    new Proxy({}, {});
    // [[IsExtensible]] applied to the proxy object must return the same value
    // as [[IsExtensible]] applied to the proxy object's target object with the same argument.
    try {
        Object.isExtensible(new Proxy({}, {
            isExtensible: function(t) {
                passed = true;
                return false;
            }
        }));
        return false;
    } catch (e) {}
    try {
        Object.isExtensible(new Proxy(Object.preventExtensions({}), {
            isExtensible: function(t) {
                return true;
            }
        }));
        return false;
    } catch (e) {}
    return true;
}
```
###&quot;preventExtensions&quot; handler
          
```
function() {
    var proxied = {};
    var passed = false;
    Object.preventExtensions(
        new Proxy(proxied, {
            preventExtensions: function(t) {
                passed = t === proxied;
                return Object.preventExtensions(proxied);
            }
        })
    );
    return passed;
}
```
###&quot;preventExtensions&quot; handler invariant
          
```
function() {
    var passed = false;
    new Proxy({}, {});
    // [[PreventExtensions]] applied to the proxy object only returns true
    // if [[IsExtensible]] applied to the proxy object's target object is false.
    try {
        Object.preventExtensions(new Proxy({}, {
            preventExtensions: function() {
                passed = true;
                return true;
            }
        }));
        return false;
    } catch (e) {}
    return passed;
}
```
###&quot;ownKeys&quot; handler
          
```
function() {
    var proxied = {};
    var passed = false;
    Object.keys(
        new Proxy(proxied, {
            ownKeys: function(t) {
                passed = t === proxied;
                return [];
            }
        })
    );
    return passed;
}
```
###&quot;ownKeys&quot; handler invariant
          
```
function() {
    var passed = false;
    new Proxy({}, {});
    // The Type of each result List element is either String or Symbol.
    try {
        Object.keys(new Proxy({}, {
            ownKeys: function() {
                passed = true;
                return [2];
            }
        }));
        return false;
    } catch (e) {}
    // The result List must contain the keys of all non-configurable own properties of the target object.
    var proxied = {};
    Object.defineProperty(proxied, "foo", {
        value: 2,
        writable: true,
        enumerable: true
    });
    try {
        Object.keys(new Proxy(proxied, {
            ownKeys: function() {
                return [];
            }
        }));
        return false;
    } catch (e) {}
    // If the target object is not extensible, then the result List must contain all the keys
    // of the own properties of the target object and no other values.
    try {
        Object.keys(new Proxy(Object.preventExtensions({
            b: 1
        }), {
            ownKeys: function() {
                return ['a'];
            }
        }));
        return false;
    } catch (e) {}
    return passed;
}
```
###&quot;apply&quot; handler
          
```
function() {
    var proxied = function() {};
    var passed = false;
    var host = {
        method: new Proxy(proxied, {
            apply: function(t, thisArg, args) {
                passed = t === proxied && thisArg === host && args + "" === "foo,bar";
            }
        })
    };
    host.method("foo", "bar");
    return passed;
}
```
###&quot;apply&quot; handler invariant
          
```
function() {
    var passed = false;
    new Proxy(function() {}, {
        apply: function() {
            passed = true;
        }
    })();
    // A Proxy exotic object only has a [[Call]] internal method if the
    // initial value of its [[ProxyTarget]] internal slot is an object
    // that has a [[Call]] internal method.
    try {
        new Proxy({}, {
            apply: function() {}
        })();
        return false;
    } catch (e) {}
    return passed;
}
```
###&quot;construct&quot; handler
          
```
function() {
    var proxied = function() {};
    var passed = false;
    new new Proxy(proxied, {
        construct: function(t, args) {
            passed = t === proxied && args + "" === "foo,bar";
            return {};
        }
    })("foo", "bar");
    return passed;
}
```
###&quot;construct&quot; handler invariants
          
```
function() {
    var passed = false;
    new Proxy({}, {});
    // A Proxy exotic object only has a [[Construct]] internal method if the
    // initial value of its [[ProxyTarget]] internal slot is an object
    // that has a [[Construct]] internal method.
    try {
        new new Proxy({}, {
            construct: function(t, args) {
                return {};
            }
        })();
        return false;
    } catch (e) {}
    // The result of [[Construct]] must be an Object.
    try {
        new new Proxy(function() {}, {
            construct: function(t, args) {
                passed = true;
                return 5;
            }
        })();
        return false;
    } catch (e) {}
    return passed;
}
```
###Proxy.revocable
          
```
function() {
    var obj = Proxy.revocable({}, {
        get: function() {
            return 5;
        }
    });
    var passed = (obj.proxy.foo === 5);
    obj.revoke();
    try {
        obj.proxy.foo;
    } catch (e) {
        passed &= e instanceof TypeError;
    }
    return passed;
}
```
###Array.isArray support
          
```
function() {
    return Array.isArray(new Proxy([], {}));
}
```
###JSON.stringify support
          
```
function() {
    return JSON.stringify(new Proxy(['foo'], {})) === '["foo"]';
}
```
