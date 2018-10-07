import { log } from "./debug"
import { type } from "./objectTools"
import { nth, includesPro } from "./arrayTools"

let test = [{ fuck: 1 }, { fuck: 2 }]
log(includesPro(test, "fuck", 3))
