import { typeZh } from "./objectTools"
import { log } from "./debug"
/**
 * 分割数组
 *
 * @param {*} array
 * @param {*} n
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
