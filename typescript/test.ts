import { flattenDeep } from "./arrayTools"
import { param } from "./httpTools"
import { log } from "./debug"

let test_data = [[[1]], [1, [1, 2], [1, 2, [[[1], [2]]]]]]
log(flattenDeep(test_data))
