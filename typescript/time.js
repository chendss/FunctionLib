"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 计算同步函数执行时间
 * @param callback 执行函数
 */
exports.runTime = function (callback) {
    let start = new Date();
    callback();
    let end = new Date();
    return end.getTime() - start.getTime();
};
