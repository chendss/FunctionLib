import { isSetEquality, castArray } from "./arrayTools"
import { isNaN } from "./objectTools"

/**
 * 批量判断第一个值是否与其他参数相等
 *
 * @param {(string | number)} params
 * @param {(...Array<string | number>)} args
 * @returns {boolean}
 */
export const isEqualAll = function(
    params: string | number,
    ...args: Array<string | number>
): boolean {
    for (let arg of args) {
        if (params !== arg) {
            return false
        }
    }
    return true
}

/**
 * 检查传入的参数是否有空值
 *
 * @param {...Array<any>} params
 * @returns {boolean}
 */
export const checkParameter = function(...params: Array<any>): boolean {
    for (let item of params) {
        if (item == null || isNaN(item)) {
            return false
        }
    }
    return true
}

/**
 * 判断其他参数是否在第一个参数（数组）里
 * 仅仅适用于值类型数组
 * @param {(IArrayValue|any)} sourceArray
 * @param {...Array<any>} params
 * @returns
 */
export const paramsIncludes = function(
    sourceArray: IArrayValue | any,
    ...params: Array<any>
) {
    let sourceList = castArray(sourceArray)
    let args = [...params]
    for (let arg of args) {
        if (sourceList.includes(arg)) {
            return true
        }
    }
    return false
}

/**
 * 判断其他参数是否都在第一个参数（数组）里
 *
 * @param {(IArrayValue | any)} sourceArray
 * @param {...Array<any>} params
 * @returns
 */
export const paramsIncludesAll = function(
    sourceArray: IArrayValue | any,
    ...params: Array<any>
) {
    let sourceList = castArray(sourceArray)
    for (let arg of params) {
        if (!sourceList.includes(arg)) {
            return false
        }
    }
    return true
}

/**
 * 判断是否为假值
 *
 * @param {*} item
 * @returns {boolean}
 */
export const isFalse = function(item: any): boolean {
    let valueList = [null, undefined, "", 0, false]
    if (valueList.includes(item)) {
        return false
    } else if (isNaN(item)) {
        return false
    } else {
        return true
    }
}

/**
 * 三元表达式的函数形式
 *
 * @param {boolean} condition
 * @param {*} trueValue
 * @param {*} falseValue
 * @returns
 */
export const three = function(
    condition: boolean,
    trueValue: any,
    falseValue: any
) {
    if (condition) {
        return trueValue
    }
    return falseValue
}
