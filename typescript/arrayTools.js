"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const objectTools_1 = require("./objectTools");
/**
 * 分割数组
 *
 * @param {*} array
 * @param {*} n
 * @returns
 */
exports.chunk = function (array, n) {
    let result = [];
    for (let i = 0, len = array.length; i < len; i += n) {
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
    let result = target.concat(source);
    return result;
};
/**
 * 将任意参数变成数组
 * @param val 传入参数
 */
exports.anyToArray = function (val) {
    if (objectTools_1.typeZh(val) === "数组") {
        return val;
    }
    else {
        return [val];
    }
};
