export const runTime = function(callback:Function):number{
    let start:Date = new Date()
    let startTime:number = start.getTime()
    callback()
    let end :Date =  new Date()
    let endTime:number = end.getTime()
    return endTime-startTime
}