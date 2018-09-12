const log: any = function(...args: string[]) {
    console.log(...args)
}

const copyObj_: Object = function(obj: Object) {
    let result = JSON.parse(JSON.stringify(obj))
    return result
}

const chainObject = function(chainList: Array<string>, value: any) {
    let result = value
    for (let i = chainList.length - 1; i >= 0; i--) {
        let key = chainList[i]
        let item: any = {}
        item[key] = result
        result = item
    }
    return result
}

const deepMergeObj = function(...objectList: Array<object>) {}

let rest: Object = chainObject(["fuck", "fuck3"], "111")
log(rest)
