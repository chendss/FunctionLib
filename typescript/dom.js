"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 根据选择器获得一个匹配的dom对象
 *
 * @param {string} selector css选择器
 * @returns {HTMLElement} DOM对象
 */
exports.q = function (selector) {
    return document.querySelector(selector);
};
/**
 * 根据选择器获得所有匹配的dom对象
 *
 * @param {string} selector
 * @returns {NodeListOf<Element>}
 */
exports.qs = function (selector) {
    return document.querySelectorAll(selector);
};
/**
 * 绑定该选择器匹配的所有 DOM对象的click事件
 *
 * @param {string} selector css选择器
 * @param {(e: Event) => void} handle click回调函数
 */
exports.bindClick = function (selector, handle) {
    const queries = exports.qs(selector);
    queries.forEach(q => q.addEventListener("click", handle, false));
};
/**
 * 绑定该选择器匹配的所有 DOM对象的input事件
 *
 * @param {string} selector css选择器
 * @param {(e: Event) => void} handle click回调函数
 */
exports.bindInput = function (selector, handle) {
    const queries = exports.qs(selector);
    queries.forEach(q => q.addEventListener("input", handle, false));
};
/**
 * 获得滚动条位置
 *
 * @returns
 */
exports.windowScrollTop = function () {
    let Y1 = document.documentElement.scrollTop;
    let Y2 = document.body.scrollTop;
    if (Y1 === 0) {
        return Y2;
    }
    else {
        return Y1;
    }
};
