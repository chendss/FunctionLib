"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const arrayTools_1 = require("./arrayTools");
const objectTools_1 = require("./objectTools");
/**
 * 将对象转化成url查询字符串
 *
 * @param {({
 *     [name: string]: string | number
 * })} obj
 * @returns {string}
 */
exports.param = function (obj) {
    let result = [];
    for (let key in obj) {
        let val = obj[key];
        if (arrayTools_1.isIntersection([objectTools_1.typeZh(val)], ["字符串", "数字"])) {
            result.push(`${key}=${val}`);
        }
        else {
            throw new Error("只允许传入字符串和数字");
        }
    }
    return result.join("&");
};
