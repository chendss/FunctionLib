/**
 * 计算同步函数执行时间
 * @param callback 执行函数
 */
export const runTime = function(callback: Function): number {
    let start = new Date()
    callback()
    let end = new Date()
    return end.getTime() - start.getTime()
}