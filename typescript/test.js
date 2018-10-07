"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const time_1 = require("./time");
const debug_1 = require("./debug");
let test = "2018-10-02";
let t = time_1.countDown(test, new Date());
setInterval(() => {
    debug_1.log(t);
}, 500);
