/**
 * 同步调用判断函数，全部为true时返回ture
 *
 * @param {Array<Function>} array 函数队列
 * @returns {boolean}
 */
export const asyncCall = function(queue: Array<Function>): boolean {
    for (let fun of queue) {
        if (!fun()) {
            return false
        }
    }
    return true
}
