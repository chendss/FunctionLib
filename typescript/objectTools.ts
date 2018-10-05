import { log } from "./debug"
import { isIntersection, isValueList } from "./arrayTools"
/**
 * 深度复制对象
 *
 * @template T
 * @param {T} obj
 * @returns {T}
 */
export const deepCopy = function<T>(obj: T): T {
    let result = JSON.parse(JSON.stringify(obj))
    return result
}

/**
 * 链式对象生成函数
 *
 * @param {string[]} chainList
 * @param {*} value
 * @returns {object}
 */
export const chainObject = function(chainList: string[], value: any): object {
    let result = deepCopy(value)
    let chainListCopy = chainList.reverse()
    for (let key of chainListCopy) {
        let item: IObject = {}
        item[key] = result
        result = item
    }
    return result
}

/**
 * 浅度复制
 *
 * @param {*} src
 * @returns
 */
export const shallowCopy = function(src: IObject) {
    let result: IObject = {}
    for (var prop in src) {
        if (src.hasOwnProperty(prop)) {
            result[prop] = src[prop]
        }
    }
    return result
}

/**
 * 判断是否为NaN
 *
 * @param {*} obj
 * @returns {boolean}
 */
export const isNaN = function(obj: any): boolean {
    let result = obj === obj
    return !result
}

/**
 * 判断元素的正确类型
 *
 * @param {*} obj
 * @returns {string}
 */
export const type = function(obj: any): string {
    let result = Object.prototype.toString.call(obj)
    result = result.substring(8, result.length - 1)
    if (isNaN(obj)) {
        return "NaN"
    } else {
        return result
    }
}

/**
 * 判断元素的正确类型(返回中文)
 *
 * @param {*} obj
 * @returns {string}
 */
export const typeZh = function(obj: any): string {
    const outDict: IObjectString = {
        Number: "数字",
        Undefined: "未定义",
        Object: "对象",
        Array: "数组",
        String: "字符串",
        Null: "空值",
        NaN: "NaN"
    }
    let typeStr = outDict[type(obj)]
    return typeStr
}

/**
 * 判断两个对象是否相等
 *
 * @param {IObject} source
 * @param {IObject} target
 * @returns {boolean}
 */
export const isEqualObject = function(
    source: IObject,
    target: IObject
): boolean {
    let sourceKeys = Object.keys(source)
    let targetLen = Object.keys(target).length
    if (sourceKeys.length !== targetLen) return false
    for (let key of sourceKeys) {
        if (!isEqual(source[key], target[key])) {
            return false
        }
    }
    return true
}

/**
 * 判断两个数组是否相等
 *
 * @param {Array<any>} source
 * @param {Array<any>} target
 * @returns {boolean}
 */
export const isEqualArray = function(
    source: Array<any>,
    target: Array<any>
): boolean {
    if (source.length !== target.length) return false
    for (let index in source) {
        if (!isEqual(source[index], target[index])) {
            return false
        }
    }
    return true
}

/**
 * 判断两个元素是否相等
 *
 * @param {*} source
 * @param {*} target
 * @returns {boolean}
 */
export const isEqual = function(source: any, target: any): boolean {
    let [sourceType, targetType] = [typeZh(source), typeZh(target)]
    if (sourceType !== targetType) return false
    if (isValueList([source, target])) {
        return source === target
    } else if (sourceType === "对象") {
        return isEqualObject(source as IObject, target as IObject)
    } else if (sourceType === "数组") {
        return isEqualArray(source as Array<any>, target as Array<any>)
    } else {
        return false
    }
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
