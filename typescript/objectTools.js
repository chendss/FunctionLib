"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const arrayTools_1 = require("./arrayTools");
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
 *
 * @param {string[]} chainList
 * @param {*} value
 * @returns {object}
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
 * 浅度复制
 *
 * @param {*} src
 * @returns
 */
exports.shallowCopy = function (src) {
    let result = {};
    for (var prop in src) {
        if (src.hasOwnProperty(prop)) {
            result[prop] = src[prop];
        }
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
/**
 * 判断两个对象是否相等
 *
 * @param {IObject} source
 * @param {IObject} target
 * @returns {boolean}
 */
exports.isEqualObject = function (source, target) {
    let sourceKeys = Object.keys(source);
    let targetLen = Object.keys(target).length;
    if (sourceKeys.length !== targetLen)
        return false;
    for (let key of sourceKeys) {
        if (!exports.isEqual(source[key], target[key])) {
            return false;
        }
    }
    return true;
};
/**
 * 判断两个数组是否相等
 *
 * @param {Array<any>} source
 * @param {Array<any>} target
 * @returns {boolean}
 */
exports.isEqualArray = function (source, target) {
    if (source.length !== target.length)
        return false;
    for (let index in source) {
        if (!exports.isEqual(source[index], target[index])) {
            return false;
        }
    }
    return true;
};
/**
 * 判断两个元素是否相等
 *
 * @param {*} source
 * @param {*} target
 * @returns {boolean}
 */
exports.isEqual = function (source, target) {
    let [sourceType, targetType] = [exports.typeZh(source), exports.typeZh(target)];
    if (sourceType !== targetType)
        return false;
    if (arrayTools_1.isValueList([source, target])) {
        return source === target;
    }
    else if (sourceType === "对象") {
        return exports.isEqualObject(source, target);
    }
    else if (sourceType === "数组") {
        return exports.isEqualArray(source, target);
    }
    else {
        return false;
    }
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
