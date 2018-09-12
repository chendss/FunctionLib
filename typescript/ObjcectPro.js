"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deepCopyObj = function (obj) {
    var result = JSON.parse(JSON.stringify(obj));
    return result;
};
exports.chainObject = function (chainList, value) {
    var result = value;
    for (var i = chainList.length - 1; i >= 0; i--) {
        var key = chainList[i];
        var item = {};
        item[key] = result;
        result = item;
    }
    return result;
};
//# sourceMappingURL=ObjcectPro.js.map