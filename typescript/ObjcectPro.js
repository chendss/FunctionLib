"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 深度复制对象
 * @param obj 对象
 */
exports.deepCopyObj = function (obj) {
    var result = JSON.parse(JSON.stringify(obj));
    return result;
};
/**
 * 链式对象生成函数
 * @param chainList 数组键
 * @param value 值
 */
exports.chainObject = function (chainList, value) {
    var result = exports.deepCopyObj(value);
    var chainListCopy = chainList.reverse();
    for (var _i = 0, chainListCopy_1 = chainListCopy; _i < chainListCopy_1.length; _i++) {
        var key = chainListCopy_1[_i];
        var item = {};
        item[key] = result;
        result = item;
    }
    return result;
};
exports.isNaN = function (obj) {
    var result = obj === obj;
    return !result;
};
exports.type = function (obj) {
    var outDict = {
        Number: "数字",
        Undefined: "未定义",
        Object: "对象",
        Array: "数组",
        String: "字符串"
    };
    var type = Object.prototype.toString.call(obj);
    type = type.substring(8, type.length - 1);
    if (exports.isNaN(obj)) {
        return "NaN";
    }
    else {
        var result = outDict[type];
        return result;
    }
};
//# sourceMappingURL=ObjcectPro.js.map