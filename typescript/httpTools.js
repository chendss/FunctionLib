import { typeZh } from './objectTools';
/**
 * 将对象转化成url查询字符串
 *
 * @param {IObjectValue} obj
 * @returns {string}
 */
export const param = function (obj) {
    let result = [];
    for (let key in obj) {
        let val = obj[key];
        let type = typeZh(val);
        if (['字符串', '数字'].includes(type)) {
            result.push(`${key}=${val}`);
        }
        else {
            throw new Error('只允许传入字符串和数字');
        }
    }
    return result.join('&');
};
/**
 * 查询字符串转对象
 *
 * @param {string} url
 */
export const queryParse = function (url) {
    let queryStr = url.split('?')[1];
    let result = {};
    let queryStrArray = queryStr.split('&');
    let queryArray = queryStrArray.map(item => item.split('='));
    queryArray.forEach(queryList => {
        let [key, value] = queryList;
        result[key] = value;
    });
    return result;
};
