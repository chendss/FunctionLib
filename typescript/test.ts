import { isEqual } from "./objectTools"
import { log } from "./debug"
import { flattenDeep } from "./arrayTools"

let test_data = {
    fuck: 1,
    test: {
        tt: []
    }
}
let test_data2 = {
    fuck: 1,
    test: {
        tt: []
    }
}
log(isEqual(test_data, test_data2))
