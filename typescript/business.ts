import { paramsIncludes, paramsIncludesAll } from "./paramsTools"
import { typeZh } from "./objectTools"
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

/**
 * 对不满10的数字补0
 *
 * @param {(number | string)} source
 * @returns {string}
 */
export const addZero = function(source: number | string): string {
    if (typeZh(source) === "数字") {
        return source <= 9 ? `0${source}` : String(source)
    } else {
        let source_ = parseInt(source as string)
        return source_ <= 9 ? `0${source_}` : String(source_)
    }
}
