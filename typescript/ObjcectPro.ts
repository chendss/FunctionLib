/**
 * 深度复制对象
 * @param obj 对象
 */
export const deepCopyObj = function(obj: any): any {
    let result = JSON.parse(JSON.stringify(obj))
    return result
}

/**
 * 链式对象生成函数
 * @param chainList 数组键
 * @param value 值
 */
export const chainObject = function(chainList: string[], value: any): object {
    let result: any = deepCopyObj(value)
    let chainListCopy = chainList.reverse()
    for (let key of chainListCopy) {
        let item: any = {}
        item[key] = result
        result = item
    }
    return result
}

export const isNaN = function(obj: any): boolean {
    let result = obj === obj
    return !result
}

export const type = function(obj: any): string {
    let outDict: any = {
        Number: "数字",
        Undefined: "未定义",
        Object: "对象",
        Array: "数组",
        String: "字符串"
    }
    let type: string = Object.prototype.toString.call(obj)
    type = type.substring(8, type.length - 1)
    if (isNaN(obj)) {
        return "NaN"
    } else {
        let result = outDict[type] as string
        return result
    }
}
