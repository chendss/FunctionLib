"use strict";
exports.__esModule = true;
/**
 * 打印函数-console.log
 * @param args
 */
exports.log = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    console.log.apply(console, args);
};
