import { log } from "./debug"
import {
    isIntersection,
    isValueList,
    anyToArray,
    arrayDefault
} from "./arrayTools"
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
export const chainObject = function(
    chainList: Array<string>,
    value: any
): object {
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
 * 链式对象 多值赋值
 *
 * @param {(Array<string> | string)} chainKey
 * @param {(Array<any> | any)} value
 * @returns
 */
export const chainObjectMultiple = function(
    chainKey: Array<string> | string,
    value: Array<any> | any
) {
    let result = {}
    if (chainKey instanceof Array) {
        let length = chainKey.length
        let value_ = value || arrayDefault(length)
        for (let i = 0; i < length; i++) {
            let itemChainKey = chainKey[i].split("-")
            let item = chainObject(itemChainKey, value_[i])
            result = deepMerge(result, item)
        }
    } else {
        let chainList = chainKey.split("-")
        result = chainObject(chainList, value)
    }
    return result
}

/**
 * 链式取得对象的值
 *
 * @param {Array<string>} chainList
 * @param {IObject} target
 * @returns {(IObject | null)}
 */
export const chainValue = function(
    chainList: Array<string>,
    target: IObject
): any {
    let result: any = null
    let source: any = target
    for (let key of chainList) {
        if (!source.hasOwnProperty(key)) {
            return null
        }
        ;[result, source] = arrayDefault(2, source[key])
    }
    return result
}

/**
 * 取得链式对象的值 存在数组里或者单个值
 *
 * @param {(Array<string> | string)} chainKey
 * @param {IObject} target
 * @returns
 */
export const chainValueList = function(
    chainKey: Array<string> | string,
    target: IObject
) {
    let errorMsg = chainKey + "chainValueList方法必须传入 target "
    if (!target) throw new Error(errorMsg)
    let chainKey_ = anyToArray(chainKey)
    let result = []
    for (let i = 0; i < chainKey_.length; i++) {
        let chainList = chainKey_[i].split("-")
        let value = chainValue(chainList, target)
        result.push(value)
    }
    if (result.length === 1) {
        result = result[0]
    }
    return result
}

/**
 * 浅度复制
 *
 * @param {IObject} src
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
        NaN: "NaN",
        Function: "函数",
        Date: "时间"
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
const isEqualObject = function(source: IObject, target: IObject): boolean {
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
const isEqualArray = function(source: Array<any>, target: Array<any>): boolean {
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
 * 合并对象
 *
 * @param {IObject} source
 * @param {IObject} acc
 * @returns {IObject}
 */
const deepMergeObject = function(source: IObject, acc: IObject): IObject {
    for (let [key, value] of Object.entries(source)) {
        if (value instanceof Object && key in acc) {
            value = deepMerge(acc[key], value)
        }
        acc = { ...acc, [key]: value }
    }
    let result = acc
    return result
}

/**
 * 合并多个元素，兼容数组与对象
 *
 * @param {(...Array<Object | Array<any>>)} sources
 * @returns {(Object | Array<any>)}
 */
export const deepMerge = function(
    ...sources: Array<Object | Array<any>>
): Object | Array<any> {
    let acc: IObject | Array<any> = {}
    for (let source of sources) {
        if (source instanceof Array) {
            acc = [...(source as Array<any>)]
        } else if (typeZh(source) === "对象") {
            acc = deepMergeObject(source, acc as IObject)
        }
    }
    return acc
}

/**
 * 将第二个对象的值迁移到第一个对象
 *
 * @param {IObject} source
 * @param {IObject} target
 */
export const migration = function(source: IObject, target: IObject) {
    for (let key in target) {
        if (target.hasOwnProperty(key)) {
            source[key] = target[key]
        }
    }
}
