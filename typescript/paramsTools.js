"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const arrayTools_1 = require("./arrayTools");
/**
 * 批量判断第一个值是否与其他参数相等
 *
 * @param {(string | number)} params
 * @param {(...Array<string | number>)} args
 * @returns {boolean}
 */
exports.isEqualAll = function (params, ...args) {
    for (let arg of args) {
        if (params !== arg) {
            return false;
        }
    }
    return true;
};
/**
 * 检查传入的参数是否有空值
 *
 * @param {...Array<any>} params
 * @returns {boolean}
 */
exports.checkParameter = function (...params) {
    for (let item of params) {
        if (item == null || isNaN(item)) {
            return false;
        }
    }
    return true;
};
/**
 * 判断其他参数是否在第一个参数（数组）里
 * 仅仅适用于值类型数组
 * @param {(IArrayValue|any)} sourceArray
 * @param {...Array<any>} params
 * @returns
 */
exports.paramsIncludes = function (sourceArray, ...params) {
    let sourceList = arrayTools_1.anyToArray(sourceArray);
    let args = [...params];
    for (let arg of args) {
        if (sourceList.includes(arg)) {
            return true;
        }
    }
    return false;
};
/**
 * 判断其他参数是否都在第一个参数（数组）里
 *
 * @param {(IArrayValue | any)} sourceArray
 * @param {...Array<any>} params
 * @returns
 */
exports.paramsIncludesAll = function (sourceArray, ...params) {
    let sourceList = arrayTools_1.anyToArray(sourceArray);
    for (let arg of params) {
        if (!sourceList.includes(arg)) {
            return false;
        }
    }
    return true;
};
