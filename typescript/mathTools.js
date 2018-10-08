"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 判断是否在这个区间内
 *
 * @param {number} source 源数据
 * @param {Array<number>} section 区间
 * @returns {boolean}
 */
exports.isSection = function (source, section) {
    let min = section[0];
    let max = section[1];
    if (source >= min && source <= max) {
        return true;
    }
    else {
        return false;
    }
};
/**
 * 计算数字数组的和
 *
 * @param {Array<number>} array
 * @returns {number}
 */
exports.sum = function (array) {
    let result = 0;
    for (let n of array) {
        result += n;
    }
    return result;
};
