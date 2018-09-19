/**
 * 等分数组
 *
 * @param {*} array
 * @param {*} n
 * @returns
 */
export const splitArray = function (array: any[], n: number): any[] {
    let result = []
    for (let i = 0, len = array.length; i < len; i += n) {
        result.push(array.slice(i, i + n))
    }
    return result
}

/**
* 加强版数组unshift
*
* @param {any[]} array
* @param {*} item
*/
export const unshiftPro = function (array: any[], item: any): void {
    array.reverse()
    array.push(item)
    array.reverse()
}