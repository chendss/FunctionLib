import { runTime } from "./timePro"
import { concatFront } from "./ArrayPro"
import { log } from "./DebugPro"

let test_list = (function(): Array<number> {
    let length: number = 10000
    let result: Array<number> = []
    for (let i: number = 0; i < length; i++) {
        result.push(i)
    }
    return result
})()

// let dt1: number = runTime(function() {
//     let list: Array<number> = [1, 2, 3]
// })
// log(dt1)
