import { range } from "./arrayTools"

/**
 * 校验身份证是否合法
 *
 * @param {string} card
 * @returns {boolean}
 */
export const checkCard = function(card: string): boolean {
    let parmas = "7|9|10|5|8|4|2|1|6|3|7|9|10|5|8|4|2".split("|")
    let checkParams = "1|0|X|9|8|7|6|5|4|3|2".split("|")
    let temp = 0
    for (let i in range(17)) {
        temp += Number(card[i]) * parseInt(parmas[i])
    }
    let remainder = temp % 11
    return checkParams[remainder] === card[17]
}
