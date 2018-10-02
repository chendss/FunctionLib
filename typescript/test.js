"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const objectTools_1 = require("./objectTools");
const debug_1 = require("./debug");
// let test_list = (function(): Array<number> {
//     let length: number = 10000
//     let result: Array<number> = []
//     for (let i: number = 0; i < length; i++) {
//         result.push(i)
//    s }
//     return result
// })()
const testType = function () {
    let testArr = [1, undefined, NaN, {}, [], [], "11"];
    for (let i of testArr) {
        debug_1.log(objectTools_1.type(i));
        debug_1.log(objectTools_1.typeZh(i));
    }
};
testType();
// let dt1: number = runTime(function() {
//     let list: Array<number> = [1, 2, 3]
// })
// log(dt1)
