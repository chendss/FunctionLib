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
 * @param {Array<any>} source
 * @param {Array<any>} target
 */
export const concatFront = function<T>(source: T[], target: T[]): T[] {
    let result = target.concat(source)
    return result
}

/**
 * 将任意参数变成数组
 * @param val 传入参数
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
 * @param list1 数组1
 * @param list2 数组2
 */
export const intersection = function(
    list1: Array<string | number>,
    list2: Array<string | number>
): Array<string | number> {
    let list1_ = list1.slice()
    let list2_ = list2.slice()
    let result: Array<string | number> = []
    for (let item of list1_) {
        if (list2_.includes(item)) {
            result.push(item)
        }
    }
    return result
}

/**
 * 判断两个数组是否有交集
 * @param list1 数组1
 * @param list2 数组2
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
