"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const debug_1 = require("./debug");
const arrayTools_1 = require("./arrayTools");
let test = [{ fuck: 1 }, { fuck: 2 }];
debug_1.log(arrayTools_1.includesPro(test, "fuck", 3));
