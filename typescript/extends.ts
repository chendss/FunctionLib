import { log } from "./DebugPro"
import { deepCopyObj, chainObject } from "./ObjcectPro"

let rest: Object = chainObject(["fuck3", "fuck1"], 11)
log(rest)
