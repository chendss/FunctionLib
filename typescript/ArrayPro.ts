/**
 * 等分数组
 *
 * @param {*} array
 * @param {*} n
 * @returns
 */
export const splitArray = function(array: any[], n: number): any[] {
    var result = []
    for (var i = 0, len = array.length; i < len; i += n) {
        result.push(array.slice(i, i + n))
    }
    return result
}
