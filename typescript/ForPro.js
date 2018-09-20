"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unshiftFor = function (list_, callback) {
    for (var i = list_.length - 1; i >= 0; i--) {
        callback(i);
    }
};
//# sourceMappingURL=ForPro.js.map