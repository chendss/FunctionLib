/**
 * 深度复制对象
 * @param obj 对象
 */
export const deepCopyObj = function(obj: any) {
    let result = JSON.parse(JSON.stringify(obj))
    return result
}

/**
 * 链式对象生成函数
 * @param chainList 数组键
 * @param value 值
 */
export const chainObject = function(chainList: string[], value: any) {
    let result: Object
    let value_ = deepCopyObj(value)
    for (let i = chainList.length - 1; i >= 0; i--) {
        let key = chainList[i]
        let item: any = {}
        item[key] = value_
        value_ = item
    }
    result = value_
    return result
}
