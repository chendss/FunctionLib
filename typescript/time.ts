/**
 * 计算同步函数执行时间
 *
 * @param {Function} callback
 * @returns {number}
 */
export const runTime = function(callback: Function): number {
    let start = new Date()
    callback()
    let end = new Date()
    return end.getTime() - start.getTime()
}

/**
 * 返回友好时间 （xx之前、刚）
 *
 * @param {string} timeStr
 * @returns {string}
 */
export const toRelativeTime = function(timeStr: string): string {
    let [oldTime, nowTime] = [new Date(timeStr), new Date()]
    let range = (nowTime.getTime() - oldTime.getTime()) / (60 * 1000)
    if (range < 0) {
        return ""
    }
    let rangeStrList = "525600-年,43200-个月,1440-天,60-小时,1-分钟".split(",")
    let rangeList: Array<Array<string>> = rangeStrList.map(item =>
        item.split("-")
    )
    let result = "刚刚"
    for (let v of rangeList) {
        let num = Math.floor(range / parseInt(v[0]))
        if (num > 0) {
            result = num + v[1] + "之前"
            break
        }
    }
    return result
}
