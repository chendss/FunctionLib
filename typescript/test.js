"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const debug_1 = require("./debug");
const arrayTools_1 = require("./arrayTools");
let test_data = [1, 2, 3, 4, undefined, null];
debug_1.log(arrayTools_1.compact(test_data));
