import { typeZh } from "./objectTools"
import { log } from "./debug"
/**
 * 分割数组
 *
 * @param {Array} array
 * @param {number} n
 * @returns
 */
export const chunk = function<T>(array: T[], n: number): T[][] {
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
export const isValueList = function<T>(array: T[]): boolean {
    for (let item of array) {
        let itemType = typeZh(item)
        if (!isIntersection([itemType],['字符串','数字'])) {
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
export const removalRepeat = function<T>(array: T[], key: string = ""): T[] {
    if (isValueList(array)) {
        let result = Array.from(new Set(array))
        return result
    } else {
        let result: Array<IObject> = []
        let array_ = array as Array<IObject>
        for (let source of array_) {
            let len = result.filter(target => target[key] === source[key])
                .length
            if (len === 0) {
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
export const concatFront = function<T>(source: T[], target: T[]): T[] {
    let result = target.concat(source)
    return result
}

/**
 * 将任意参数变成数组
 *
 * @param {*} val
 * @returns {Array<any>}
 */
export const anyToArray = function(val: any): Array<any> {
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
export const intersection = function(
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
export const isIntersection = function(
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
export const isSetEquality = function(
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
 * 展开数组
 *
 * @param {Array<any>} array
 * @returns {(Array<string | number>)}
 */
export const flattenDeep = function(array: Array<any>): Array<string | number> {
    let result: Array<string | number> = []
    let arrayCopy = array.slice()
    let newArray: Array<string | number> = []
    while (true) {
        let hasArray = false
        for (let item of arrayCopy) {
            if (item instanceof Array) {
                hasArray = true
                newArray = newArray.concat(item)
            } else {
                newArray.push(item)
            }
        }
        if (hasArray) {
            arrayCopy = newArray.slice()
            newArray = []
        } else {
            result = newArray
            break
        }
    }
    return result
}
