import {
    type,
    typeZh,
} from "./objectTools"
import { log } from "./debug"

// let test_list = (function(): Array<number> {
//     let length: number = 10000
//     let result: Array<number> = []
//     for (let i: number = 0; i < length; i++) {
//         result.push(i)
//     }
//     return result
// })()

const testType = function() {
    let testArr = [1, undefined, NaN, {}, [], [], "11"]
    for (let i of testArr) {
        log(type(i))
        log(typeZh(i))
    }
}

testType()
// let dt1: number = runTime(function() {
//     let list: Array<number> = [1, 2, 3]
// })
// log(dt1)
