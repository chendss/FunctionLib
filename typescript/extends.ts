import { type } from "./ObjcectPro"
import { log } from "./DebugPro"

// let test_list = (function(): Array<number> {
//     let length: number = 10000
//     let result: Array<number> = []
//     for (let i: number = 0; i < length; i++) {
//         result.push(i)
//     }
//     return result
// })()

let test: Array<any> = [1, undefined, NaN, {}, [], [], "11"]
test.forEach(ele => {
    log(type(ele))
})
// let dt1: number = runTime(function() {
//     let list: Array<number> = [1, 2, 3]
// })
// log(dt1)
