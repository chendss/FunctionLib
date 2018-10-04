"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const arrayTools_1 = require("./arrayTools");
const debug_1 = require("./debug");
let test_data = [[[1]], [1, [1, 2], [1, 2, [[[1], [2]]]]]];
debug_1.log(arrayTools_1.flattenDeep(test_data));
