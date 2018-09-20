"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ObjcectPro_1 = require("./ObjcectPro");
var DebugPro_1 = require("./DebugPro");
// let test_list = (function(): Array<number> {
//     let length: number = 10000
//     let result: Array<number> = []
//     for (let i: number = 0; i < length; i++) {
//         result.push(i)
//     }
//     return result
// })()
var test = [1, undefined, NaN, {}, [], [], "11"];
test.forEach(function (ele) {
    DebugPro_1.log(ObjcectPro_1.type(ele));
});
// let dt1: number = runTime(function() {
//     let list: Array<number> = [1, 2, 3]
// })
// log(dt1)
//# sourceMappingURL=extends.js.map