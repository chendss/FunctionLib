"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runTime = function (callback) {
    let start = new Date();
    callback();
    let end = new Date();
    return end.getTime() - start.getTime();
};
//# sourceMappingURL=time.js.map