"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const debug_1 = require("./debug");
const stringTools_1 = require("./stringTools");
let test = ["fuck我的:", "fuck我的,", "fuck我的:", "fuc k我的 ", "fuck我的q"];
test.forEach(item => {
    debug_1.log(stringTools_1.removeZh(item), stringTools_1.trimSpace(item), stringTools_1.removeSpecial(item));
});
