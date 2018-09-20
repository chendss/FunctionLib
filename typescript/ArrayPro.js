"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 等分数组
 *
 * @param {*} array
 * @param {*} n
 * @returns
 */
exports.splitArray = function (array, n) {
    var result = [];
    for (var i = 0, len = array.length; i < len; i += n) {
        result.push(array.slice(i, i + n));
    }
    return result;
};
/**
 * 将数组合并目标数组前
 *
 * @param {Array<any>} source
 * @param {Array<any>} target
 */
exports.concatFront = function (source, target) {
    var result = target.concat(source);
    return result;
};
//# sourceMappingURL=ArrayPro.js.map