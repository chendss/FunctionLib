"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const objectTools_1 = require("./objectTools");
const debug_1 = require("./debug");
let key = ["fuck-test", 'fuck-ttt'];
let json = {
    fuck: {
        test: 111,
        ttt: 'ss'
    }
};
debug_1.log(objectTools_1.chainObjects(key, [111, 'sss']));
