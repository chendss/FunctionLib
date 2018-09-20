"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runTime = function (callback) {
    var start = new Date();
    var startTime = start.getTime();
    callback();
    var end = new Date();
    var endTime = end.getTime();
    return endTime - startTime;
};
//# sourceMappingURL=timePro.js.map