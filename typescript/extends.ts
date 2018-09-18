import { log } from "./DebugPro"
import { deepCopyObj, chainObject } from "./ObjcectPro"

let rest: object = chainObject(["fuck", "fuck1"], 11)
log(rest)
