const log = function() {
    console.log(...arguments)
}

const copyObj_ = function(obj) {
    let result = JSON.parse(JSON.stringify(obj))
    return result
}

const chainObject = function(chainList, value) {
    let result = value
    for (let i = chainList.length - 1; i >= 0; i--) {
        let key = chainList[i]
        let item = {}
        item[key] = result
        result = item
    }
    return result
}

const deepMergeObj = function(...objectList){
    class result {}

}

log(new Object())


