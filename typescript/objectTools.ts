/**
 * 深度复制对象
 *
 * @template T
 * @param {T} obj
 * @returns {T}
 */
export const deepCopy = function<T>(obj: T): T {
    let result = JSON.parse(JSON.stringify(obj))
    return result
}

/**
 * 链式对象生成函数
 * @param chainList 数组键
 * @param value 值
 */
export const chainObject = function(chainList: string[], value: any): object {
    let result = deepCopy(value)
    let chainListCopy = chainList.reverse()
    for (let key of chainListCopy) {
        let item: { [name: string]: any } = {}
        item[key] = result
        result = item
    }
    return result
}

/**
 * 判断是否为NaN
 *
 * @param {*} obj
 * @returns {boolean}
 */
export const isNaN = function(obj: any): boolean {
    let result = obj === obj
    return !result
}

/**
 * 判断元素的正确类型
 *
 * @param {*} obj
 * @returns {string}
 */
export const type = function(obj: any): string {
    let result = Object.prototype.toString.call(obj)
    result = result.substring(8, result.length - 1)
    if (isNaN(obj)) {
        return "NaN"
    } else {
        return result
    }
}

/**
 * 判断元素的正确类型(返回中文)
 *
 * @param {*} obj
 * @returns {string}
 */
export const typeZh = function(obj: any): string {
    const outDict: { [name: string]: string } = {
        Number: "数字",
        Undefined: "未定义",
        Object: "对象",
        Array: "数组",
        String: "字符串",
        Null: "空值",
        NaN: "NaN"
    }
    let typeStr = outDict[type(obj)]
    return typeStr
}
