import { castArray } from './arrayTools';
import { isNaN } from './objectTools';
/**
 * 批量判断第一个值是否与其他参数相等
 *
 * @param {(string | number)} params
 * @param {(...Array<string | number>)} args
 * @returns {boolean}
 */
export const isEqualAll = function (params, ...args) {
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
export const checkParameter = function (...params) {
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
export const paramsSome = function (sourceArray, ...params) {
    let sourceList = castArray(sourceArray);
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
export const paramsEvery = function (sourceArray, ...params) {
    let sourceList = castArray(sourceArray);
    for (let arg of params) {
        if (!sourceList.includes(arg)) {
            return false;
        }
    }
    return true;
};
/**
 * 判断是否为假值
 *
 * @param {*} item
 * @returns {boolean}
 */
export const isFalse = function (item) {
    let valueList = [null, undefined, '', 0, false];
    if (valueList.includes(item)) {
        return true;
    }
    else if (isNaN(item)) {
        return true;
    }
    else {
        return false;
    }
};
/**
 * 三元表达式的函数形式
 *
 * @param {boolean} condition
 * @param {*} trueValue
 * @param {*} falseValue
 * @returns
 */
export const three = function (condition, trueValue, falseValue) {
    if (condition) {
        return trueValue;
    }
    return falseValue;
};
