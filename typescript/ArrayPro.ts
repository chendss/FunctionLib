import { log } from "./DebugPro"
/**
 * 等分数组
 *
 * @param {*} array
 * @param {*} n
 * @returns
 */
export const splitArray = function(array: any[], n: number): any[] {
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
export const concatFront = function(
    source: Array<any>,
    target: Array<any>
): Array<any> {
    let result: Array<any> = target.concat(source)
    return result
}
