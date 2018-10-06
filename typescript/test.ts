import { log } from "./debug"
import { compact } from "./arrayTools";

let test_data = [1,2,3,4,undefined,null]
log(compact(test_data))