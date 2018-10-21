import { paramsSome, paramsEvery } from "./paramsTools";
import { typeZh } from "./objectTools";
import { castArray } from "./arrayTools";
/**
 * 范围转文字（[0,5] 5x以下）
 *
 * @param {string} symbol
 * @param {(IArrayValue)} list
 * @returns {string}
 */
export const rangSymbol = function (symbol, value) {
    let result = "";
    let low = value[0];
    let hight = value[1];
    if (paramsEvery([0, "0"], low, hight)) {
        result = "不限";
    }
    else if (paramsSome([0, "0"], low)) {
        result = `${hight}${symbol}以下`;
    }
    else if (paramsSome([0, "0"], hight)) {
        result = `${low}${symbol}以上`;
    }
    else {
        result = `${low}-${hight}${symbol}`;
    }
    return result;
};
/**
 * 对不满10的数字补0
 *
 * @param {(number | string)} source
 * @returns {string}
 */
export const addZero = function (source) {
    if (typeZh(source) === "数字") {
        return source <= 9 ? `0${source}` : String(source);
    }
    else {
        let source_ = parseInt(source);
        return source_ <= 9 ? `0${source_}` : String(source_);
    }
};
/**
 * 字符串数组转对象数组 text-value
 *
 * @param {Array<string>} strList
 * @returns
 */
export const toObjArray = function (strList) {
    let strList_ = castArray(strList);
    let result = strList_.map(item => {
        return { text: item, value: item, checked: false };
    });
    return result;
};
/**
 * 生成一个表单数据，含有两个值，一个是表单键-值，一个是表单键-展示文本
 *
 * @param {Array<[string, string, any]>} dataList
 * @returns
 */
export const formDataStructure = function (dataList) {
    let form = {};
    let config = [];
    for (let item of dataList) {
        let name = item[1];
        let value = item[2];
        let keyConfig = item[0];
        let [key, itemType] = keyConfig.includes("-")
            ? [...keyConfig.split("-")]
            : [keyConfig, "input"];
        form[key] = value;
        config.push({ key, text: name, itemType });
    }
    return { form, config };
};
