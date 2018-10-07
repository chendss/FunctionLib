import { toDate, countDown } from "./time"
import { log } from "./debug"
import { compact, arrayDefault } from "./arrayTools"
import { addZero } from "./business"
import { type } from "./objectTools"

let test = "2018-10-02"

let t = countDown(test, new Date())
setInterval(() => {
    log(t)
}, 500)
