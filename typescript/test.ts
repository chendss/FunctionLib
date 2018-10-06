import { chainValue, chainObject, chainObjects } from "./objectTools"
import { rangSymbol } from "./business"
import { log } from "./debug"

let key = ["fuck-test",'fuck-ttt']
let json = {
    fuck: {
        test: 111,
        ttt:'ss'
    }
}
log(chainObjects(key, [111,'sss']))
