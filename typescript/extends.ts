import { log } from "./DebugPro"
import { deepCopyObj, chainObject } from "./ObjcectPro"

let rest: object = chainObject(["fuckf1", "fuck1"], 11)
log(rest)
