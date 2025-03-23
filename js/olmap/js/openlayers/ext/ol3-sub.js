/**
 * 从ol中取出的公用部分，ol-release中并没有该部分，ol-debug中含有该部分，
 * 调试模式时不应该引入该文件
 */

ol.obj = ol.obj || {};
ol.math = ol.math || {};
ol.events = ol.events || {};

/*--------------- ol.obj ---------------------*/
/**
 * Removes all properties from an object.
 * @param {Object} object The object to clear.
 */
ol.obj.clear = function(object) {
  for (var property in object) {
    delete object[property];
  }
};


/**
 * Get an array of property values from an object.
 * @param {Object<K,V>} object The object from which to get the values.
 * @return {!Array<V>} The property values.
 * @template K,V
 */
ol.obj.getValues = function(object) {
  var values = [];
  for (var property in object) {
    values.push(object[property]);
  }
  return values;
};


/**
 * Determine if an object has any properties.
 * @param {Object} object The object to check.
 * @return {boolean} The object is empty.
 */
ol.obj.isEmpty = function(object) {
  var property;
  for (property in object) {
    return false;
  }
  return !property;
};

/*--------------- ol.math ---------------------*/
/**
 * Takes a number and clamps it to within the provided bounds.
 * @param {number} value The input number.
 * @param {number} min The minimum value to return.
 * @param {number} max The maximum value to return.
 * @return {number} The input number if it is within bounds, or the nearest
 *     number within the bounds.
 */
ol.math.clamp = function(value, min, max) {
    return Math.min(Math.max(value, min), max);
};


/**
 * Return the hyperbolic cosine of a given number. The method will use the
 * native `Math.cosh` function if it is available, otherwise the hyperbolic
 * cosine will be calculated via the reference implementation of the Mozilla
 * developer network.
 *
 * @param {number} x X.
 * @return {number} Hyperbolic cosine of x.
 */
ol.math.cosh = (function() {
    // Wrapped in a iife, to save the overhead of checking for the native
    // implementation on every invocation.
    var cosh;
    if ('cosh' in Math) {
        // The environment supports the native Math.cosh function, use it…
        cosh = Math.cosh;
    } else {
        // … else, use the reference implementation of MDN:
        cosh = function(x) {
            var y = Math.exp(x);
            return (y + 1 / y) / 2;
        };
    }
    return cosh;
}());


/**
 * @param {number} x X.
 * @return {number} The smallest power of two greater than or equal to x.
 */
ol.math.roundUpToPowerOfTwo = function(x) {
    ol.asserts.assert(0 < x, 29); // `x` must be greater than `0`
    return Math.pow(2, Math.ceil(Math.log(x) / Math.LN2));
};


/**
 * Returns the square of the closest distance between the point (x, y) and the
 * line segment (x1, y1) to (x2, y2).
 * @param {number} x X.
 * @param {number} y Y.
 * @param {number} x1 X1.
 * @param {number} y1 Y1.
 * @param {number} x2 X2.
 * @param {number} y2 Y2.
 * @return {number} Squared distance.
 */
ol.math.squaredSegmentDistance = function(x, y, x1, y1, x2, y2) {
    var dx = x2 - x1;
    var dy = y2 - y1;
    if (dx !== 0 || dy !== 0) {
        var t = ((x - x1) * dx + (y - y1) * dy) / (dx * dx + dy * dy);
        if (t > 1) {
            x1 = x2;
            y1 = y2;
        } else if (t > 0) {
            x1 += dx * t;
            y1 += dy * t;
        }
    }
    return ol.math.squaredDistance(x, y, x1, y1);
};


/**
 * Returns the square of the distance between the points (x1, y1) and (x2, y2).
 * @param {number} x1 X1.
 * @param {number} y1 Y1.
 * @param {number} x2 X2.
 * @param {number} y2 Y2.
 * @return {number} Squared distance.
 */
ol.math.squaredDistance = function(x1, y1, x2, y2) {
    var dx = x2 - x1;
    var dy = y2 - y1;
    return dx * dx + dy * dy;
};


/**
 * Solves system of linear equations using Gaussian elimination method.
 *
 * @param {Array.<Array.<number>>} mat Augmented matrix (n x n + 1 column)
 *                                     in row-major order.
 * @return {Array.<number>} The resulting vector.
 */
ol.math.solveLinearSystem = function(mat) {
    var n = mat.length;

    if (ol.DEBUG) {
        for (var row = 0; row < n; row++) {
            console.assert(mat[row].length == n + 1,
                'every row should have correct number of columns');
        }
    }

    for (var i = 0; i < n; i++) {
        // Find max in the i-th column (ignoring i - 1 first rows)
        var maxRow = i;
        var maxEl = Math.abs(mat[i][i]);
        for (var r = i + 1; r < n; r++) {
            var absValue = Math.abs(mat[r][i]);
            if (absValue > maxEl) {
                maxEl = absValue;
                maxRow = r;
            }
        }

        if (maxEl === 0) {
            return null; // matrix is singular
        }

        // Swap max row with i-th (current) row
        var tmp = mat[maxRow];
        mat[maxRow] = mat[i];
        mat[i] = tmp;

        // Subtract the i-th row to make all the remaining rows 0 in the i-th column
        for (var j = i + 1; j < n; j++) {
            var coef = -mat[j][i] / mat[i][i];
            for (var k = i; k < n + 1; k++) {
                if (i == k) {
                    mat[j][k] = 0;
                } else {
                    mat[j][k] += coef * mat[i][k];
                }
            }
        }
    }

    // Solve Ax=b for upper triangular matrix A (mat)
    var x = new Array(n);
    for (var l = n - 1; l >= 0; l--) {
        x[l] = mat[l][n] / mat[l][l];
        for (var m = l - 1; m >= 0; m--) {
            mat[m][n] -= mat[m][l] * x[l];
        }
    }
    return x;
};


/**
 * Converts radians to to degrees.
 *
 * @param {number} angleInRadians Angle in radians.
 * @return {number} Angle in degrees.
 */
ol.math.toDegrees = function(angleInRadians) {
    return angleInRadians * 180 / Math.PI;
};


/**
 * Converts degrees to radians.
 *
 * @param {number} angleInDegrees Angle in degrees.
 * @return {number} Angle in radians.
 */
ol.math.toRadians = function(angleInDegrees) {
    return angleInDegrees * Math.PI / 180;
};

/**
 * Returns the modulo of a / b, depending on the sign of b.
 *
 * @param {number} a Dividend.
 * @param {number} b Divisor.
 * @return {number} Modulo.
 */
ol.math.modulo = function(a, b) {
    var r = a % b;
    return r * b < 0 ? r + b : r;
};

/**
 * Calculates the linearly interpolated value of x between a and b.
 *
 * @param {number} a Number
 * @param {number} b Number
 * @param {number} x Value to be interpolated.
 * @return {number} Interpolated value.
 */
ol.math.lerp = function(a, b, x) {
    return a + x * (b - a);
};

/*--------------- ol.events ---------------------*/
/**
 * @param {ol.EventsKey} listenerObj Listener object.
 * @return {ol.EventsListenerFunctionType} Bound listener.
 */
ol.events.bindListener_ = function(listenerObj) {
    var boundListener = function(evt) {
        var listener = listenerObj.listener;
        var bindTo = listenerObj.bindTo || listenerObj.target;
        if (listenerObj.callOnce) {
            ol.events.unlistenByKey(listenerObj);
        }
        return listener.call(bindTo, evt);
    };
    listenerObj.boundListener = boundListener;
    return boundListener;
};


/**
 * Finds the matching {@link ol.EventsKey} in the given listener
 * array.
 *
 * @param {!Array<!ol.EventsKey>} listeners Array of listeners.
 * @param {!Function} listener The listener function.
 * @param {Object=} opt_this The `this` value inside the listener.
 * @param {boolean=} opt_setDeleteIndex Set the deleteIndex on the matching
 *     listener, for {@link ol.events.unlistenByKey}.
 * @return {ol.EventsKey|undefined} The matching listener object.
 * @private
 */
ol.events.findListener_ = function(listeners, listener, opt_this,
                                   opt_setDeleteIndex) {
    var listenerObj;
    for (var i = 0, ii = listeners.length; i < ii; ++i) {
        listenerObj = listeners[i];
        if (listenerObj.listener === listener &&
            listenerObj.bindTo === opt_this) {
            if (opt_setDeleteIndex) {
                listenerObj.deleteIndex = i;
            }
            return listenerObj;
        }
    }
    return undefined;
};


/**
 * @param {ol.EventTargetLike} target Target.
 * @param {string} type Type.
 * @return {Array.<ol.EventsKey>|undefined} Listeners.
 */
ol.events.getListeners = function(target, type) {
    var listenerMap = target.ol_lm;
    return listenerMap ? listenerMap[type] : undefined;
};


/**
 * Get the lookup of listeners.  If one does not exist on the target, it is
 * created.
 * @param {ol.EventTargetLike} target Target.
 * @return {!Object.<string, Array.<ol.EventsKey>>} Map of
 *     listeners by event type.
 * @private
 */
ol.events.getListenerMap_ = function(target) {
    var listenerMap = target.ol_lm;
    if (!listenerMap) {
        listenerMap = target.ol_lm = {};
    }
    return listenerMap;
};


/**
 * Clean up all listener objects of the given type.  All properties on the
 * listener objects will be removed, and if no listeners remain in the listener
 * map, it will be removed from the target.
 * @param {ol.EventTargetLike} target Target.
 * @param {string} type Type.
 * @private
 */
ol.events.removeListeners_ = function(target, type) {
    var listeners = ol.events.getListeners(target, type);
    if (listeners) {
        for (var i = 0, ii = listeners.length; i < ii; ++i) {
            target.removeEventListener(type, listeners[i].boundListener);
            ol.obj.clear(listeners[i]);
        }
        listeners.length = 0;
        var listenerMap = target.ol_lm;
        if (listenerMap) {
            delete listenerMap[type];
            if (Object.keys(listenerMap).length === 0) {
                delete target.ol_lm;
            }
        }
    }
};


/**
 * Registers an event listener on an event target. Inspired by
 * {@link https://google.github.io/closure-library/api/source/closure/goog/events/events.js.src.html}
 *
 * This function efficiently binds a `listener` to a `this` object, and returns
 * a key for use with {@link ol.events.unlistenByKey}.
 *
 * @param {ol.EventTargetLike} target Event target.
 * @param {string} type Event type.
 * @param {ol.EventsListenerFunctionType} listener Listener.
 * @param {Object=} opt_this Object referenced by the `this` keyword in the
 *     listener. Default is the `target`.
 * @param {boolean=} opt_once If true, add the listener as one-off listener.
 * @return {ol.EventsKey} Unique key for the listener.
 */
ol.events.listen = function(target, type, listener, opt_this, opt_once) {
    var listenerMap = ol.events.getListenerMap_(target);
    var listeners = listenerMap[type];
    if (!listeners) {
        listeners = listenerMap[type] = [];
    }
    var listenerObj = ol.events.findListener_(listeners, listener, opt_this,
        false);
    if (listenerObj) {
        if (!opt_once) {
            // Turn one-off listener into a permanent one.
            listenerObj.callOnce = false;
        }
    } else {
        listenerObj = /** @type {ol.EventsKey} */ ({
            bindTo: opt_this,
            callOnce: !!opt_once,
            listener: listener,
            target: target,
            type: type
        });
        target.addEventListener(type, ol.events.bindListener_(listenerObj));
        listeners.push(listenerObj);
    }

    return listenerObj;
};


/**
 * Registers a one-off event listener on an event target. Inspired by
 * {@link https://google.github.io/closure-library/api/source/closure/goog/events/events.js.src.html}
 *
 * This function efficiently binds a `listener` as self-unregistering listener
 * to a `this` object, and returns a key for use with
 * {@link ol.events.unlistenByKey} in case the listener needs to be unregistered
 * before it is called.
 *
 * When {@link ol.events.listen} is called with the same arguments after this
 * function, the self-unregistering listener will be turned into a permanent
 * listener.
 *
 * @param {ol.EventTargetLike} target Event target.
 * @param {string} type Event type.
 * @param {ol.EventsListenerFunctionType} listener Listener.
 * @param {Object=} opt_this Object referenced by the `this` keyword in the
 *     listener. Default is the `target`.
 * @return {ol.EventsKey} Key for unlistenByKey.
 */
ol.events.listenOnce = function(target, type, listener, opt_this) {
    return ol.events.listen(target, type, listener, opt_this, true);
};


/**
 * Unregisters an event listener on an event target. Inspired by
 * {@link https://google.github.io/closure-library/api/source/closure/goog/events/events.js.src.html}
 *
 * To return a listener, this function needs to be called with the exact same
 * arguments that were used for a previous {@link ol.events.listen} call.
 *
 * @param {ol.EventTargetLike} target Event target.
 * @param {string} type Event type.
 * @param {ol.EventsListenerFunctionType} listener Listener.
 * @param {Object=} opt_this Object referenced by the `this` keyword in the
 *     listener. Default is the `target`.
 */
ol.events.unlisten = function(target, type, listener, opt_this) {
    var listeners = ol.events.getListeners(target, type);
    if (listeners) {
        var listenerObj = ol.events.findListener_(listeners, listener, opt_this,
            true);
        if (listenerObj) {
            ol.events.unlistenByKey(listenerObj);
        }
    }
};


/**
 * Unregisters event listeners on an event target. Inspired by
 * {@link https://google.github.io/closure-library/api/source/closure/goog/events/events.js.src.html}
 *
 * The argument passed to this function is the key returned from
 * {@link ol.events.listen} or {@link ol.events.listenOnce}.
 *
 * @param {ol.EventsKey} key The key.
 */
ol.events.unlistenByKey = function(key) {
    if (key && key.target) {
        key.target.removeEventListener(key.type, key.boundListener);
        var listeners = ol.events.getListeners(key.target, key.type);
        if (listeners) {
            var i = 'deleteIndex' in key ? key.deleteIndex : listeners.indexOf(key);
            if (i !== -1) {
                listeners.splice(i, 1);
            }
            if (listeners.length === 0) {
                ol.events.removeListeners_(key.target, key.type);
            }
        }
        ol.obj.clear(key);
    }
};


/**
 * Unregisters all event listeners on an event target. Inspired by
 * {@link https://google.github.io/closure-library/api/source/closure/goog/events/events.js.src.html}
 *
 * @param {ol.EventTargetLike} target Target.
 */
ol.events.unlistenAll = function(target) {
    var listenerMap = ol.events.getListenerMap_(target);
    for (var type in listenerMap) {
        ol.events.removeListeners_(target, type);
    }
};
