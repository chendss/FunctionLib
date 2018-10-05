import { log } from "./debug"
import { isIntersection } from "./arrayTools"
import { typeZh } from "./objectTools"

/**
 * 将对象转化成url查询字符串
 *
 * @param {({
 *     [name: string]: string | number
 * })} obj
 * @returns {string}
 */
export const param = function(obj: IObjectValue): string {
    let result: Array<string> = []
    for (let key in obj) {
        let val = obj[key]
        if (isIntersection([typeZh(val)], ["字符串", "数字"])) {
            result.push(`${key}=${val}`)
        } else {
            throw new Error("只允许传入字符串和数字")
        }
    }
    return result.join("&")
}
