/**
 * 判断是否在这个区间内
 *
 * @param {number} source 源数据
 * @param {Array<number>} section 区间
 * @returns {boolean}
 */
export const isSection = function (source, section) {
    let min = section[0];
    let max = section[1];
    if (source >= min && source <= max) {
        return true;
    }
    else {
        return false;
    }
};
/**
 * 计算数字数组的和
 *
 * @param {Array<number>} array
 * @returns {number}
 */
export const sum = function (array) {
    let result = 0;
    for (let n of array) {
        result += n;
    }
    return result;
};
/**
 * 计算数字数组的乘积
 *
 * @param {Array<number>} array
 * @returns {number}
 */
export const accumulate = function (array) {
    let result = 1;
    array.forEach(n => {
        result = result * n;
    });
    return result;
};
