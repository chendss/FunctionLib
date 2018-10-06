import { isSetEquality, anyToArray } from "./arrayTools"

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
    let sourceList = anyToArray(sourceArray)
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
    let sourceList = anyToArray(sourceArray)
    for (let arg of params) {
        if (!sourceList.includes(arg)) {
            return false
        }
    }
    return true
}
