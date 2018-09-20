"use strict";
exports.__esModule = true;
exports.runTime = function (callback) {
    var start = new Date();
    var startTime = start.getTime();
    callback();
    var end = new Date();
    var endTime = end.getTime();
    return endTime - startTime;
};
