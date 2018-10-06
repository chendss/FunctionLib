import { rangSymbol } from "./business"
import { paramsIncludesAll } from "./paramsTools"
import { deepMerge, typeZh, type } from "./objectTools"
import { log } from "./debug"

let test = [[0, 50], [10, 0], [0, 0]]
for (let item of test) {
    log(rangSymbol("万", item))
}
