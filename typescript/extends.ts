import { log } from "./DebugPro"
import { deepCopyObj, chainObject } from "./ObjcectPro"

let rest: Object = chainObject(["fuck", "fuck1"], "111")
log(rest)
