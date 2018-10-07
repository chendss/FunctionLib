"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const paramsTools_1 = require("./paramsTools");
const objectTools_1 = require("./objectTools");
/**
 * 分割数组
 *
 * @param {Array} array
 * @param {number} n
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
 * 判断数组是否值类型数组
 *
 * @template T
 * @param {T[]} array
 * @returns {boolean}
 */
exports.isValueList = function (array) {
    for (let item of array) {
        let itemType = objectTools_1.typeZh(item);
        if (!exports.isIntersection([itemType], ["字符串", "数字"])) {
            return false;
        }
    }
    return true;
};
/**
 * 去除数组重复项，兼容类型：值类型 和 值是值类型的对象
 *
 * @template T
 * @param {T[]} array
 * @param {string} [key=""]
 * @returns {T[]}
 */
exports.removalRepeat = function (array, key = "") {
    if (exports.isValueList(array)) {
        let result = Array.from(new Set(array));
        return result;
    }
    else {
        let result = [];
        let array_ = array;
        for (let source of array_) {
            let list_ = result.filter(target => target[key] === source[key]);
            if (list_.length === 0) {
                result.push(source);
            }
        }
        return result;
    }
};
/**
 * 将数组合并目标数组前
 *
 * @template T
 * @param {T[]} source
 * @param {T[]} target
 * @returns {T[]}
 */
exports.concatFront = function (source, target) {
    let result = target.concat(source);
    return result;
};
/**
 * 将任意参数变成数组
 *
 * @param {*} val
 * @returns {Array<any>}
 */
exports.castArray = function (val) {
    if (objectTools_1.typeZh(val) === "数组") {
        return val;
    }
    else {
        return [val];
    }
};
/**
 * 返回两个数组的交集
 *
 * @param {(Array<string | number>)} list1
 * @param {(Array<string | number>)} list2
 * @returns {(Array<string | number>)}
 */
exports.intersection = function (list1, list2) {
    let intersectionList = [];
    intersectionList = list1.filter(item => list2.includes(item));
    let result = exports.removalRepeat(intersectionList);
    return result;
};
/**
 * 判断两个数组是否有交集
 *
 * @param {(Array<string | number>)} list1
 * @param {(Array<string | number>)} list2
 * @returns {boolean}
 */
exports.isIntersection = function (list1, list2) {
    let list1_ = list1.slice();
    let list2_ = list2.slice();
    for (let item of list1_) {
        if (list2_.includes(item)) {
            return true;
        }
    }
    return false;
};
/**
 * 判断两个集合是否相等
 *
 * @param {(Array<string | number>)} S1
 * @param {(Array<string | number>)} S2
 * @returns {boolean}
 */
exports.isSetEquality = function (S1, S2) {
    let len1 = S1.length;
    let len2 = S2.length;
    if (len1 !== len2) {
        return false;
    }
    else {
        let intersection_ = exports.intersection(S1, S2);
        let len = intersection_.length;
        return len === len1;
    }
};
/**
 * 将array递归为一维数组
 *
 * @param {Array<any>} array
 * @returns {(Array<string | number>)}
 */
exports.flattenDeep = function (array) {
    let result = [];
    for (let item of array) {
        if (item instanceof Array) {
            let array_ = exports.flattenDeep(item);
            result = result.concat(array_);
        }
        else {
            result.push(item);
        }
    }
    return result;
};
/**
 * 生成一个数字数组
 *
 * @param {number} n 数组长度
 * @returns {Array<number>}
 */
exports.range = function (n) {
    let result = exports.arrayDefault(n, (i) => i);
    return result;
};
/**
 * 生成一个带默认值的数组
 *
 * @param {number} n 数组长度
 * @param {*} item 默认值
 * @returns {Array<any>}
 */
exports.arrayDefault = function (n, item = null) {
    let result = [];
    for (let i = 0; i < n; i++) {
        if (objectTools_1.typeZh(item) === "函数") {
            result.push(item(i));
        }
        else {
            result.push(item);
        }
    }
    return result;
};
/**
 * 返回元素的长度 数组，对象的键个数，字符串长度
 *
 * @param { any)} list_
 * @returns {number}
 */
exports.len = function (source) {
    let type_ = objectTools_1.typeZh(source);
    let result = 0;
    if (paramsTools_1.paramsIncludes(type_, "数组", "字符串")) {
        let source_ = source;
        result = source_.length;
    }
    else if (type_ === "对象") {
        let source_ = source;
        result = Object.keys(source_).length;
    }
    return result;
};
/**
 * 过滤数组里的假值
 *
 * @template T
 * @param {T[]} array
 * @returns {T[]}
 */
exports.compact = function (array) {
    let result = array.filter(arr => paramsTools_1.isFalse(arr));
    return result;
};
/**
 * 获取array数组的第n个元素。如果n为负数，则返回从数组结尾开始的第n个元素。
 *
 * @param {Array<any>} array
 * @param {number} [n=0]
 */
exports.nth = function (array, n = 0) {
    let length = array.length;
    if (n >= 0) {
        return array[n];
    }
    else {
        let n_ = length - Math.abs(n);
        return array[n_];
    }
};
/**
 * includes加强版，兼容对象数组
 *
 * @param {IArrayValueObject} array
 * @param {(string | number)} value
 * @param {string} [key=""]
 * @returns {boolean}
 */
exports.includesPro = function (array, key = "", value) {
    if (exports.isValueList(array)) {
        return array.includes(value);
    }
    else {
        let array_ = array;
        let index = array_.findIndex(item => item[key] === value);
        return index !== -1;
    }
};
/**
 * 从数组 获得 n 个随机元素
 *
 * @param {Array<any>} array
 * @returns
 */
exports.sampleSize = function (array, n = 1) {
    let length = array.length;
    let result = [];
    for (let i of exports.range(n)) {
        let index = Math.floor(Math.random() * length);
        result.push(array[index]);
    }
    return paramsTools_1.three(result.length === 1, result[0], result);
};
