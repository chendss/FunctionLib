"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.q = function (queryName) {
    return document.querySelector(queryName);
};
exports.qs = function (queryName) {
    return document.querySelectorAll(queryName);
};
exports.bindClick = function (queryName, handle) {
    const querys = exports.qs(queryName);
    querys.forEach(q => q.addEventListener('click', handle, false));
};
exports.bindInput = function (queryName, handle) {
    const querys = exports.qs(queryName);
    querys.forEach(q => q.addEventListener('input', handle, false));
};
