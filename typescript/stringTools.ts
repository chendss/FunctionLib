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

/**
 * 替换所有查询字符串
 *
 * @param {string} source 源字符串
 * @param {string} searchValue 待替换的字符串
 * @param {string} aceValue 替换字符串
 * @returns {string}
 */
export const replaceAll = function(
    source: string,
    searchValue: string,
    aceValue: string
): string {
    let result = source
    while (result.includes(aceValue)) {
        result.replace(aceValue, searchValue)
    }
    return result
}

/**
 * 类似py的format函数
 *
 * @param {string} source
 * @param {(...Array<string | number>)} args
 * @returns {string}
 */
export const format = function(
    source: string,
    ...args: Array<string | number>
): string {
    let result = source
    args.reverse()
    while (result.includes("{}")) {
        let arg = String(args[0])
        result.replace("{}", arg)
        args.pop()
    }
    return result
}

/**
 * 将关键字插入字符串前面
 *
 * @param {string} source 字符串
 * @param {string} str 关键字
 * @returns {string}
 */
export const shift = function(source: string, str: string): string {
    let result = str + source
    return result
}
