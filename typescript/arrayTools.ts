import { paramsSome, isFalse, three } from "./paramsTools"
import { typeZh, type, isNaN } from "./objectTools"
import { log } from "./debug"
/**
 * 分割数组
 *
 * @param {Array} array
 * @param {number} n
 * @returns
 */
export const chunk = function <T>(array: T[], n: number): T[][] {
    let result: T[][] = []
    for (let i = 0, len = array.length; i < len; i += n) {
        result.push(array.slice(i, i + n))
    }
    return result
}

/**
 * 判断数组是否值类型数组
 *
 * @template T
 * @param {T[]} array
 * @returns {boolean}
 */
export const isValueList = function <T>(array: T[]): boolean {
    for (let item of array) {
        let itemType = typeZh(item)
        if (!isIntersection([itemType], ["字符串", "数字"])) {
            return false
        }
    }
    return true
}

/**
 * 去除数组重复项，兼容类型：值类型 和 值是值类型的对象
 *
 * @template T
 * @param {T[]} array
 * @param {string} [key=""]
 * @returns {T[]}
 */
export const removalRepeat = function <T>(array: T[], key: string = ""): T[] {
    if (isValueList(array)) {
        let result = Array.from(new Set(array))
        return result
    } else {
        let result: Array<IObject> = []
        let array_ = array as Array<IObject>
        for (let source of array_) {
            let list_ = result.filter(target => target[key] === source[key])
            if (list_.length === 0) {
                result.push(source)
            }
        }
        return result as T[]
    }
}

/**
 * 将数组合并目标数组前
 *
 * @template T
 * @param {T[]} source
 * @param {T[]} target
 * @returns {T[]}
 */
export const concatFront = function <T>(source: T[], target: T[]): T[] {
    let result = target.concat(source)
    return result
}

/**
 * 将任意参数变成数组
 *
 * @param {*} val
 * @returns {Array<any>}
 */
export const castArray = function (val: any): Array<any> {
    if (typeZh(val) === "数组") {
        return val
    } else {
        return [val]
    }
}

/**
 * 返回两个数组的交集
 *
 * @param {(Array<string | number>)} list1
 * @param {(Array<string | number>)} list2
 * @returns {(Array<string | number>)}
 */
export const intersection = function (
    list1: Array<string | number>,
    list2: Array<string | number>
): Array<string | number> {
    let intersectionList: Array<string | number> = []
    intersectionList = list1.filter(item => list2.includes(item))
    let result = removalRepeat(intersectionList)
    return result
}

/**
 * 判断两个数组是否有交集
 *
 * @param {(Array<string | number>)} list1
 * @param {(Array<string | number>)} list2
 * @returns {boolean}
 */
export const isIntersection = function (
    list1: Array<string | number>,
    list2: Array<string | number>
): boolean {
    let list1_ = list1.slice()
    let list2_ = list2.slice()
    for (let item of list1_) {
        if (list2_.includes(item)) {
            return true
        }
    }
    return false
}

/**
 * 判断两个集合是否相等
 *
 * @param {(Array<string | number>)} S1
 * @param {(Array<string | number>)} S2
 * @returns {boolean}
 */
export const isSetEquality = function (
    S1: Array<string | number>,
    S2: Array<string | number>
): boolean {
    let len1 = S1.length
    let len2 = S2.length
    if (len1 !== len2) {
        return false
    } else {
        let intersection_ = intersection(S1, S2)
        let len = intersection_.length
        return len === len1
    }
}

/**
 * 将array递归为一维数组
 *
 * @param {Array<any>} array
 * @returns {(Array<string | number>)}
 */
export const flattenDeep = function (array: Array<any>): Array<string | number> {
    let result: Array<string | number> = []
    for (let item of array) {
        if (item instanceof Array) {
            let array_ = flattenDeep(item)
            result = result.concat(array_)
        } else {
            result.push(item)
        }
    }
    return result
}

/**
 * 生成一个数字数组
 *
 * @param {number} n 数组长度
 * @returns {Array<number>}
 */
export const range = function (n: number): Array<number> {
    let result: Array<number> = arrayDefault(n, (i: number) => i)
    return result
}

/**
 * 生成一个带默认值的数组
 *
 * @param {number} n 数组长度
 * @param {*} item 默认值
 * @returns {Array<any>}
 */
export const arrayDefault = function (n: number, item: any = null): Array<any> {
    let result = []
    for (let i = 0; i < n; i++) {
        if (typeZh(item) === "函数") {
            result.push(item(i))
        } else {
            result.push(item)
        }
    }
    return result
}

/**
 * 返回元素的长度 数组，对象的键个数，字符串长度
 *
 * @param { any)} list_
 * @returns {number}
 */
export const len = function (source: any): number {
    let type_ = typeZh(source)
    let result = 0
    if (paramsSome(type_, "数组", "字符串")) {
        let source_ = source as Array<any> | String
        result = source_.length
    } else if (type_ === "对象") {
        let source_ = source as IObject
        result = Object.keys(source_).length
    }
    return result
}

/**
 * 过滤数组里的假值
 *
 * @template T
 * @param {T[]} array
 * @returns {T[]}
 */
export const compact = function <T>(array: T[]): T[] {
    let result = array.filter(arr => isFalse(arr))
    return result
}

/**
 * 获取array数组的第n个元素。如果n为负数，则返回从数组结尾开始的第n个元素。
 *
 * @param {Array<any>} array
 * @param {number} [n=0]
 */
export const nth = function (array: Array<any>, n: number = 0) {
    let length = array.length
    if (n >= 0) {
        return array[n]
    } else {
        let n_ = length - Math.abs(n)
        return array[n_]
    }
}

/**
 * includes加强版，兼容对象数组
 *
 * @param {IArrayValueObject} array
 * @param {(string | number)} value
 * @param {string} [key=""]
 * @returns {boolean}
 */
export const includesPro = function (
    array: IArrayValueObject,
    key: string = "",
    value: string | number
): boolean {
    if (isValueList(array)) {
        return array.includes(value)
    } else {
        let array_ = array as IArrayObject
        let index = array_.findIndex(item => item[key] === value)
        return index !== -1
    }
}

/**
 * 从数组 获得 n 个随机元素
 *
 * @param {Array<any>} array
 * @returns
 */
export const sampleSize = function (array: Array<any>, n: number = 1) {
    let length = array.length
    let result = []
    for (let i of range(n)) {
        let index = Math.floor(Math.random() * length)
        result.push(array[index])
    }
    return three(result.length === 1, result[0], result)
}

/**
 * 寻找所有符合条件的元素
 *
 * @template T
 * @param {T[]} array
 * @param {Function} callback
 * @returns {T[]}
 */
export const findAll = function <T>(array: T[], callback: Function): T[] {
    let result: T[] = []
    for (let item of array) {
        if (callback(item)) {
            result.push(item)
        }
    }
    return result
}


/**
* 去除数组的重复元素，包括对象数组
*  callback(array[], result[])
* @template T
* @param {T[]} array
* @param {(Function | null)} [callback=null]
* @returns {T[]}
*/
export const removeCopy = function <T>(array: T[], callback: Function | null = null): T[] {
    let result: T[] = []
    if (callback == null) {
        result = Array.from(new Set(array))
    } else {
        array.forEach(ele => {
            ; result.find(item => callback(ele, item)) ? '' : result.push(ele)
        })
    }
    return result
}