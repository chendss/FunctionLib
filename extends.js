"use strict";
var log = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    console.log.apply(console, args);
};
var copyObj_ = function (obj) {
    var result = JSON.parse(JSON.stringify(obj));
    return result;
};
var chainObject = function (chainList, value) {
    var result = value;
    for (var i = chainList.length - 1; i >= 0; i--) {
        var key = chainList[i];
        var item = {};
        item[key] = result;
        result = item;
    }
    return result;
};
var deepMergeObj = function () {
    var objectList = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        objectList[_i] = arguments[_i];
    }
};
var rest = chainObject(["fuck", "fuck3"], "111");
log(rest);
//# sourceMappingURL=extends.js.map