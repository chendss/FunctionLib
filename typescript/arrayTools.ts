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
    let result: Array<string | number> = []
    result = list1.filter(item => list2.includes(item))
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
        if (len1 === intersection_.length) {
            return true
        } else {
            return false
        }
    }
}
