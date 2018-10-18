"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 同步调用判断函数，全部为true时返回ture
 *
 * @param {Array<Function>} array 函数队列
 * @returns {boolean}
 */
exports.asyncCall = function (queue) {
    for (let fun of queue) {
        if (fun() === false) {
            return false;
        }
    }
    return true;
};
