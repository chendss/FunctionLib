/**
 * 获得字符串里关键字的数量
 *
 * @param {string} str 字符串
 * @param {string} target 关键字
 * @returns
 */
export const findCount = function(str: string, target: string) {
    let reg = new RegExp(target, "g")
    let value = str.match(reg)
    let result = 0
    if (value instanceof Array) {
        result = value.length
    }
    return result
}
