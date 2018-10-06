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
/**
 * 类似py的format函数
 *
 * @param {string} source
 * @param {(...Array<string | number>)} args
 * @returns {string}
 */
exports.format = function (source, ...args) {
    let result = source;
    for (let arg of args) {
        result.replace("{}", String(arg));
    }
    return result;
};
/**
 * 将关键字插入字符串前面
 *
 * @param {string} source 字符串
 * @param {string} str 关键字
 * @returns {string}
 */
exports.shift = function (source, str) {
    let result = str + source;
    return result;
};
