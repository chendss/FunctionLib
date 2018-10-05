"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 深度复制对象
 *
 * @template T
 * @param {T} obj
 * @returns {T}
 */
exports.deepCopy = function (obj) {
    let result = JSON.parse(JSON.stringify(obj));
    return result;
};
/**
 * 链式对象生成函数
 * @param chainList 数组键
 * @param value 值
 */
exports.chainObject = function (chainList, value) {
    let result = exports.deepCopy(value);
    let chainListCopy = chainList.reverse();
    for (let key of chainListCopy) {
        let item = {};
        item[key] = result;
        result = item;
    }
    return result;
};
/**
 * 判断是否为NaN
 *
 * @param {*} obj
 * @returns {boolean}
 */
exports.isNaN = function (obj) {
    let result = obj === obj;
    return !result;
};
/**
 * 判断元素的正确类型
 *
 * @param {*} obj
 * @returns {string}
 */
exports.type = function (obj) {
    let result = Object.prototype.toString.call(obj);
    result = result.substring(8, result.length - 1);
    if (exports.isNaN(obj)) {
        return "NaN";
    }
    else {
        return result;
    }
};
/**
 * 判断元素的正确类型(返回中文)
 *
 * @param {*} obj
 * @returns {string}
 */
exports.typeZh = function (obj) {
    const outDict = {
        Number: "数字",
        Undefined: "未定义",
        Object: "对象",
        Array: "数组",
        String: "字符串",
        Null: "空值",
        NaN: "NaN"
    };
    let typeStr = outDict[exports.type(obj)];
    return typeStr;
};
exports.isEqual = function (source, target) {
    return false;
};
/**
 * 检查传入的参数是否有空值
 *
 * @param {...Array<any>} params
 * @returns {boolean}
 */
exports.checkParameter = function (...params) {
    for (let item of params) {
        if (item == null || exports.isNaN(item)) {
            return false;
        }
    }
    return true;
};
