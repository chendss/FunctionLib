/**
 * 同步调用判断函数，全部为true时返回ture
 *
 * @param {Array<Function>} array 函数队列
 * @returns {boolean}
 */
export const asyncCall = function (queue) {
    for (let fun of queue) {
        if (fun() === false) {
            return false;
        }
    }
    return true;
};
