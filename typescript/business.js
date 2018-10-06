"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const paramsTools_1 = require("./paramsTools");
/**
 * 范围转文字（[0,5] 5x以下）
 *
 * @param {string} symbol
 * @param {(IArrayValue)} list
 * @returns {string}
 */
exports.rangSymbol = function (symbol, value) {
    let result = "";
    let low = value[0];
    let hight = value[1];
    if (paramsTools_1.paramsIncludesAll([0, "0"], low, hight)) {
        result = "不限";
    }
    else if (paramsTools_1.paramsIncludes([0, "0"], low)) {
        result = `${hight}${symbol}以下`;
    }
    else if (paramsTools_1.paramsIncludes([0, "0"], hight)) {
        result = `${low}${symbol}以上`;
    }
    else {
        result = `${low}-${hight}${symbol}`;
    }
    return result;
};
