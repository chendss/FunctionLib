/**
 * 获得字符串里关键字的数量
 *
 * @param {string} str 字符串
 * @param {string} target 关键字
 * @returns
 */
export const findCount = function (str, target) {
    let reg = new RegExp(target, 'g');
    let value = str.match(reg);
    let result = 0;
    if (value instanceof Array) {
        result = value.length;
    }
    return result;
};
/**
 * 替换所有查询字符串
 *
 * @param {string} source 源字符串
 * @param {string} searchValue 待替换的字符串
 * @param {string} aceValue 替换字符串
 * @returns {string}
 */
export const replaceAll = function (source, searchValue, aceValue) {
    let result = source;
    while (result.includes(aceValue)) {
        result = result.replace(aceValue, searchValue);
    }
    return result;
};
/**
 * 类似py的format函数
 *
 * @param {string} source
 * @param {(...Array<string | number>)} args
 * @returns {string}
 */
export const format = function (source, ...args) {
    let result = source;
    while (result.includes('{}') && args.length !== 0) {
        let arg = String(args[0]);
        result = result.replace('{}', arg);
        args.shift();
    }
    return result;
};
/**
 * 去除字符串空格
 *
 * @param {string} str
 * @returns {string}
 */
export const trimSpace = function (str) {
    let result = str.replace(/[ ]/g, '');
    return result;
};
/**
 * 去除中文
 *
 * @param {string} str
 * @returns {string}
 */
export const removeZh = function (str) {
    let re = /[\u4E00-\u9FA5]/g;
    let result = str.replace(re, '');
    return result;
};
/**
 * 去除特殊符号
 *
 * @param {string} str
 * @returns {string}
 */
export const removeSpecial = function (str) {
    let re = /[&\|\\\*^%$#@:：\-]/g;
    let result = str.replace(re, '');
    return result;
};
/**
 * 去除英文
 *
 * @param {string} str
 * @returns {string}
 */
export const removeEn = function (str) {
    let re = /[&\\|\\\\*^%$#@:：\\-]/g;
    let result = str.replace(re, '');
    return result;
};
