"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const objectTools_1 = require("./objectTools");
const debug_1 = require("./debug");
let test_data = {
    fuck: 1,
    test: {
        tt: []
    }
};
let test_data2 = {
    fuck: 1,
    test: {
        tt: []
    }
};
debug_1.log(objectTools_1.isEqual(test_data, test_data2));
