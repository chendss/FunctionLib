/**
 * 深度复制对象
 * @param obj 对象
 */
export const deepCopy = function <T>(obj: T): T {
    let result = JSON.parse(JSON.stringify(obj))
    return result
}

/**
 * 链式对象生成函数
 * @param chainList 数组键
 * @param value 值
 */
export const chainObject = function(chainList: string[], value: any): object {
    let result: any = deepCopy(value)
    let chainListCopy = chainList.reverse()
    for (let key of chainListCopy) {
        let item: any = {}
        item[key] = result
        result = item
    }
    return result
}

/**
 * 判断是否为NaN
 * @param obj 
 */
export const isNaN = function(obj: any): boolean {
    let result = obj === obj
    return !result
}

/**
 * 判断元素的正确类型
 * @param obj 
 */
export const type = function(obj: any): string {
    let typeStr = Object.prototype.toString.call(obj)
    typeStr = typeStr.substring(8, typeStr.length - 1)
    if (isNaN(obj)) {
        return "NaN"
    } else {
        return typeStr
    }
}

export const typeZh = function (obj: any): string {
    const outDict: {[name: string]: string} = {
        Number: "数字",
        Undefined: "未定义",
        Object: "对象",
        Array: "数组",
        String: "字符串",
        Null: "空值",
        NaN: "NaN",
    }
    const typeStr = outDict[type(obj)]
    return typeStr
}

