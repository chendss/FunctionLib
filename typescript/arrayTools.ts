import { log } from "./debug"
/**
 * 等分数组
 *
 * @param {*} array
 * @param {*} n
 * @returns
 */
export const splitArray = function <T>(array: T[], n: number): T[][] {
    let result = []
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
export const concatFront = function <T>(source: T[], target: T[]): T[] {
    let result = target.concat(source)
    return result
}
