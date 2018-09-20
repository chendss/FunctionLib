// eg
var target = [[null], [undefined], [""], [{}], [1, 2, 3]];
var input = [null, undefined, "", {}, [1, 2, 3]];
var isNaN5 = function (val) {
    return typeof val === 'number' && isNaN(val);
};
var test = function (value1, value2) {
    if (isNaN5(value1)) {
        if (isNaN5(value2)) {
            return true;
        }
        else {
            return false;
        }
    }
    return value1 === value2;
};
var anyToArray = function (val) {
    if (val instanceof Array) {
        return val;
    }
    else {
        return [val];
    }
};
var isEqual = function (a, b) {
    if (a instanceof Object) {
        if (b instanceof Object) {
            if (Object.keys(a).length !== Object.keys(b).length) {
                return false;
            }
            else {
                for (var _i = 0, _a = Object.keys(a); _i < _a.length; _i++) {
                    var key = _a[_i];
                    if (!isEqual(a[key], b[key])) {
                        return false;
                    }
                }
                return true;
            }
        }
        else {
            return false;
        }
    }
    else if (a instanceof Array) {
        if (b instanceof Array) {
            if (a.length !== b.length) {
                return false;
            }
            else {
                for (var index in a) {
                    if (!isEqual(a[index], b[index])) {
                        return false;
                    }
                }
                return true;
            }
        }
        else {
            return false;
        }
    }
    else {
        return test(a, b);
    }
};
var log = function () {
    var parameter = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        parameter[_i] = arguments[_i];
    }
    console.log.apply(console, arguments);
};
var main = function () {
    for (var i = 0; i < input.length; i++) {
        var target_item = target[i];
        var input_item = input[i];
        if (isEqual(target_item, anyToArray(input_item)) === false) {
            return false;
        }
    }
    return true;
};
log(main());
