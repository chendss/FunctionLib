"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 等分数组
 *
 * @param {*} array
 * @param {*} n
 * @returns
 */
exports.splitArray = function (array, n) {
    var result = [];
    for (var i = 0, len = array.length; i < len; i += n) {
        result.push(array.slice(i, i + n));
    }
    return result;
};
/**
* 加强版数组unshift
*
* @param {any[]} array
* @param {*} item
*/
exports.unshiftPro = function (array, item) {
    array.reverse();
    array.push(item);
    array.reverse();
};
//# sourceMappingURL=ArrayPro.js.map