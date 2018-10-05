"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 获得字符串里关键字的数量
 *
 * @param {string} str 字符串
 * @param {string} target 关键字
 * @returns
 */
exports.findCount = function (str, target) {
    let reg = new RegExp(target, "g");
    let value = str.match(reg);
    let result = 0;
    if (value instanceof Array) {
        result = value.length;
    }
    return result;
};
