import { paramsSome, paramsEvery } from "./paramsTools";
import { typeZh, deepMerge, deepCopy } from "./objectTools";
import { castArray, flattenDeep, removalRepeat } from "./arrayTools";
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
/**
 * 单个表单验证规则生成
 *
 * @param {IObject} config
 * @returns {IObject}
 */
const ruleCreate = function (config) {
    let itemType = config["itemType"];
    let trigger = "";
    if (["input", "toggleInput", "textarea", "map"].includes(itemType)) {
        trigger = "blur";
    }
    else if (["select", "multipleSelect"].includes(itemType)) {
        trigger = "change";
    }
    let result = {
        required: true,
        message: `请${trigger === "blur" ? "输入" : "选择"}${config.text}`,
        trigger
    };
    return result;
};
/**
 * 表单验证规则生成器
 *
 * @param {Array<string>} keyList
 * @param {IArrayObject} configList
 * @returns {IObject}
 */
export const rulesCreate = function (keyList, configList) {
    let result = {};
    for (let key of keyList) {
        result[key] = [];
        let config = configList.find(item => item.key === key);
        if (config == null)
            continue;
        result[key].push(ruleCreate(config));
    }
    return result;
};
/**
 * 表单验证合并
 *
 * @param {IObject} rules
 * @param {IObject} newRules
 * @returns IObject
 */
export const rulesMerge = function (rules, newRules) {
    let keyList = Object.keys(newRules);
    for (let key of keyList) {
        let oldRule = rules[key][0];
        if (typeZh(newRules[key]) === "对象") {
            rules[key][0] = deepMerge(oldRule, newRules[key]);
        }
        else if (typeZh(newRules[key]) === "数组") {
            rules[key] = rules[key].concat(newRules[key]);
        }
    }
    return rules;
};
/**
 * 检查路由是否重复
 *
 * @param {...Array<IArrayObject>} routesList
 * @returns {Boolean}
 */
export const checkRouts = function (...routesList) {
    let pathList = routesList.map(routes => routes.map(route => route.path));
    let flattenRoutes = flattenDeep(pathList);
    let routeName = [];
    let name = "";
    for (let route of flattenRoutes) {
        if (flattenRoutes.filter(r => r === route).length !== 1) {
            name = String(route);
            pathList.forEach((routes, i) => {
                if (routes.includes(route)) {
                    routeName.push(i);
                }
            });
        }
    }
    routeName = removalRepeat(routeName);
    if (routeName.length !== 0) {
        throw new Error(`${name} 路由重复，分别在 第 ${routeName.join(",")} 号路由数组`);
    }
    else {
        return true;
    }
};
/**
 * 平面结构转树状结构
 *
 * @param {IArrayObject} temp
 * @param {string} parentId
 * @returns {IArrayObject}
 */
const toTree = function (temp, parentId) {
    let result = [];
    let temp_ = [];
    for (let item of temp) {
        if (item.pid === parentId) {
            let sub = deepCopy(item);
            temp_ = toTree(temp, item.id);
            if (temp_.length > 0) {
                sub.children = temp_;
            }
            result.push(sub);
        }
    }
    return result;
};
/**
 * 菜单生成器
 *
 * @param {IArrayObject} serverMenu
 * @returns {IArrayObject}
 */
export const menuCreate = function (serverMenu) {
    let parentList = serverMenu.filter(menu => menu.pid == null);
    let result = [];
    for (let parent of parentList) {
        parent.children = toTree(serverMenu, parent.id);
        result.push(parent);
    }
    return result;
};
