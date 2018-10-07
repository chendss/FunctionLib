import { typeZh, shallowCopy, migration } from "./objectTools"
import { shift } from "./stringTools"
import { isSection } from "./mathTools"
import { format } from "./stringTools"
import { addZero } from "./business"
import { log } from "./debug"
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

/**
 * 返回当前时间 eg: '2018-10-06'
 *
 * @returns {string}
 */
export const nowTime = function(): string {
    let [date, seperator] = [new Date(), "-"]
    let timeDict: IObject = {
        year: date.getFullYear(),
        numberMonth: String(date.getMonth() + 1),
        numberDate: String(date.getDate())
    }
    let zeroKeys = ["numberMonth", "numberDate"]
    for (let key of zeroKeys) {
        let item: number = parseInt(timeDict[key])
        if (isSection(item, [1, 9])) {
            timeDict[key] = shift(timeDict[key], "0")
        }
    }
    let result = Object.values(timeDict).join(seperator)
    return result
}

/**
 * utc时间转本地时间
 *
 * @param {*} utc
 * @returns
 */
export const localeTime = function(utc: string) {
    let base = "{} {}"
    let dateObject = new Date(utc)
    let date = dateObject.toLocaleDateString()
    let time = dateObject.toLocaleTimeString()
    let result = format(base, date, time)
    return result
}

/**
 * 转化成Date类型
 *
 * @param {(string | Date)} time
 * @returns {Date}
 */
export const toDate = function(time: string | Date): Date {
    if (typeZh(time) === "时间") {
        return time as Date
    } else {
        let result = new Date(time as string)
        return result
    }
}

/**
 * 计算时间间隔
 *
 * @param {number} dxTime
 * @returns {IObject}
 */
export const intervalTime = function(dxTime: number): IObject {
    dxTime = Math.abs(dxTime) / 1000
    let [dayTime, hourTime] = [60 * 24 * 60, 60 * 60]
    let [day, hour, minute, second] = [0, 0, 0, 0]
    day = Math.floor(dxTime / dayTime)
    hour = Math.floor(dxTime / hourTime) - day * 24
    minute = Math.floor(dxTime / 60) - day * 24 * 60 - hour * 60
    second = Math.floor(dxTime) - day * dayTime - hour * hourTime - minute * 60
    let result: IObject = {
        day: addZero(day),
        hour: addZero(hour),
        minute: addZero(minute),
        second: addZero(second)
    }
    return result
}

/**
 * 倒计时函数
 *
 * @param {(string | Date)} start
 * @param {(string | Date)} end
 * @param {number} [dx=999]
 * @returns {IObject}
 */
export const countDown = function(
    start: string | Date,
    end: string | Date,
    dx: number = 999
): IObject {
    let [startTime, endTime] = [start, end].map(t => toDate(t).getTime())
    let result: IObject = {
        day: "0",
        hour: "0",
        minute: "0",
        second: "0"
    }
    setInterval(() => {
        endTime -= dx
        let dxTime = startTime - endTime
        migration(result, intervalTime(dxTime))
    }, dx)
    return result
}
