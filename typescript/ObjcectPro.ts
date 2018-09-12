export const deepCopyObj = function(obj: object) {
    let result = JSON.parse(JSON.stringify(obj))
    return result
}

export const chainObject = function(chainList: Array<string>, value: any) {
    let result = value
    for (let i = chainList.length - 1; i >= 0; i--) {
        let key = chainList[i]
        let item: any = {}
        item[key] = result
        result = item
    }
    return result
}
