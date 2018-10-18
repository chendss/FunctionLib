import { log } from "./debug";
import { removeZh, trimSpace, removeSpecial } from "./stringTools";
let test = ["fuck我的:", "fuck我的,", "fuck我的:", "fuc k我的 ", "fuck我的q"];
test.forEach(item => {
    log(removeZh(item), trimSpace(item), removeSpecial(item));
});
