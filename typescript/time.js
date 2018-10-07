"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const objectTools_1 = require("./objectTools");
const stringTools_1 = require("./stringTools");
const mathTools_1 = require("./mathTools");
const stringTools_2 = require("./stringTools");
const business_1 = require("./business");
/**
 * 计算同步函数执行时间
 *
 * @param {Function} callback
 * @returns {number}
 */
exports.runTime = function (callback) {
    let start = new Date();
    callback();
    let end = new Date();
    return end.getTime() - start.getTime();
};
/**
 * 返回友好时间 （xx之前、刚）
 *
 * @param {string} timeStr
 * @returns {string}
 */
exports.toRelativeTime = function (timeStr) {
    let [oldTime, nowTime] = [new Date(timeStr), new Date()];
    let range = (nowTime.getTime() - oldTime.getTime()) / (60 * 1000);
    if (range < 0) {
        return "";
    }
    let rangeStrList = "525600-年,43200-个月,1440-天,60-小时,1-分钟".split(",");
    let rangeList = rangeStrList.map(item => item.split("-"));
    let result = "刚刚";
    for (let v of rangeList) {
        let num = Math.floor(range / parseInt(v[0]));
        if (num > 0) {
            result = num + v[1] + "之前";
            break;
        }
    }
    return result;
};
/**
 * 返回当前时间 eg: '2018-10-06'
 *
 * @returns {string}
 */
exports.nowTime = function () {
    let [date, seperator] = [new Date(), "-"];
    let timeDict = {
        year: date.getFullYear(),
        numberMonth: String(date.getMonth() + 1),
        numberDate: String(date.getDate())
    };
    let zeroKeys = ["numberMonth", "numberDate"];
    for (let key of zeroKeys) {
        let item = parseInt(timeDict[key]);
        if (mathTools_1.isSection(item, [1, 9])) {
            timeDict[key] = stringTools_1.shift(timeDict[key], "0");
        }
    }
    let result = Object.values(timeDict).join(seperator);
    return result;
};
/**
 * utc时间转本地时间
 *
 * @param {*} utc
 * @returns
 */
exports.localeTime = function (utc) {
    let base = "{} {}";
    let dateObject = new Date(utc);
    let date = dateObject.toLocaleDateString();
    let time = dateObject.toLocaleTimeString();
    let result = stringTools_2.format(base, date, time);
    return result;
};
/**
 * 转化成Date类型
 *
 * @param {(string | Date)} time
 * @returns {Date}
 */
exports.toDate = function (time) {
    if (objectTools_1.typeZh(time) === "时间") {
        return time;
    }
    else {
        let result = new Date(time);
        return result;
    }
};
/**
 * 计算时间间隔
 *
 * @param {number} dxTime
 * @returns {IObject}
 */
exports.intervalTime = function (dxTime) {
    dxTime = Math.abs(dxTime) / 1000;
    let [dayTime, hourTime] = [60 * 24 * 60, 60 * 60];
    let [day, hour, minute, second] = [0, 0, 0, 0];
    day = Math.floor(dxTime / dayTime);
    hour = Math.floor(dxTime / hourTime) - day * 24;
    minute = Math.floor(dxTime / 60) - day * 24 * 60 - hour * 60;
    second = Math.floor(dxTime) - day * dayTime - hour * hourTime - minute * 60;
    let result = {
        day: business_1.addZero(day),
        hour: business_1.addZero(hour),
        minute: business_1.addZero(minute),
        second: business_1.addZero(second)
    };
    return result;
};
/**
 * 倒计时函数
 *
 * @param {(string | Date)} start
 * @param {(string | Date)} end
 * @param {number} [dx=999]
 * @returns {IObject}
 */
exports.countDown = function (start, end, dx = 999) {
    let [startTime, endTime] = [start, end].map(t => exports.toDate(t).getTime());
    let result = {
        day: "0",
        hour: "0",
        minute: "0",
        second: "0"
    };
    setInterval(() => {
        endTime -= dx;
        let dxTime = startTime - endTime;
        objectTools_1.migration(result, exports.intervalTime(dxTime));
    }, dx);
    return result;
};
