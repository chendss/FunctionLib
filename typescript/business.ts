/**
 * 范围转文字（[0,5] 5x以下）
 *
 * @param {string} symbol
 * @param {(IArrayValue)} list
 * @returns {string}
 */
export const rangSymbol = function(symbol: string, list: IArrayValue): string {
    let result = ""
    let [min, max] = [list[0], list[1]]
    if (min === 0) {
        if (max === 0) {
            result = "不限"
        } else {
            result = max + symbol + "以下"
        }
    } else if (max === 0) {
        result = min + symbol + "以上"
    } else {
        result = `${min}-${max}${symbol}`
    }
    return result
}
