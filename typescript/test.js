"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const time_1 = require("./time");
const debug_1 = require("./debug");
let t = "2018-10-03";
debug_1.log(t, time_1.toRelativeTime(t));
