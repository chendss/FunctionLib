import { toRelativeTime } from "./time"
import { flattenDeep } from "./arrayTools"
import { param } from "./httpTools"
import { log } from "./debug"

let t = "2018-10-03"
log(t, toRelativeTime(t))
