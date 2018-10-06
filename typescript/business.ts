import { paramsIncludes, paramsIncludesAll } from "./paramsTools"
/**
 * 范围转文字（[0,5] 5x以下）
 *
 * @param {string} symbol
 * @param {(IArrayValue)} list
 * @returns {string}
 */
export const rangSymbol = function(symbol: string, value: IArrayValue): string {
    let result = ""
    let low = value[0]
    let hight = value[1]
    if (paramsIncludesAll([0, "0"], low, hight)) {
        result = "不限"
    } else if (paramsIncludes([0, "0"], low)) {
        result = `${hight}${symbol}以下`
    } else if (paramsIncludes([0, "0"], hight)) {
        result = `${low}${symbol}以上`
    } else {
        result = `${low}-${hight}${symbol}`
    }
    return result
}
