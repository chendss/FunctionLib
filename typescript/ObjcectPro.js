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
    var result;
    var value_ = exports.deepCopyObj(value);
    for (var i = chainList.length - 1; i >= 0; i--) {
        var key = chainList[i];
        var item = {};
        item[key] = value_;
        value_ = item;
    }
    result = value_;
    return result;
};
//# sourceMappingURL=ObjcectPro.js.map