import { range } from "./arrayTools";
/**
 * 校验类型
 */
export const regularDict = new class RegularDict {
    constructor() {
        this.email = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        this.手机号 = /^1[34578]\d{9}$/;
        this.qq号码 = /^[1-9][0-9]{4,10}$/;
        this.微信号 = /^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/;
        this.正整数 = /^\d+$/;
        this.数字 = /^\d*\.?\d+$/;
        this.中文 = /^[\\u4e00-\\u9fa5]{0,}$/;
    }
}();
/**
 * 校验身份证是否合法
 *
 * @param {string} card
 * @returns {boolean}
 */
export const checkCard = function (card) {
    let parmas = "7|9|10|5|8|4|2|1|6|3|7|9|10|5|8|4|2".split("|");
    let checkParams = "1|0|X|9|8|7|6|5|4|3|2".split("|");
    let temp = 0;
    for (let i in range(17)) {
        temp += Number(card[i]) * parseInt(parmas[i]);
    }
    let remainder = temp % 11;
    return checkParams[remainder] === card[17];
};
const checkRegular = function (str, regExp) {
    let r = new RegExp(regExp, "g");
    return r.test(str);
};
/**
 * 检查手机号是否合法
 *
 * @param {(string | number)} phone
 * @returns {boolean}
 */
export const checkPhone = function (phone) {
    let phone_ = String(phone);
    let re = regularDict.手机号;
    return checkRegular(phone_, re);
};
/**
 * 检查邮箱是否合法
 *
 * @param {string} email
 * @returns {boolean}
 */
export const checkEmail = function (email) {
    let email_ = String(email);
    return checkRegular(email_, regularDict.email);
};
