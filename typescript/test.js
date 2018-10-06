"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const business_1 = require("./business");
const debug_1 = require("./debug");
let test = [[0, 50], [10, 0], [0, 0]];
for (let item of test) {
    debug_1.log(business_1.rangSymbol("万", item));
}
