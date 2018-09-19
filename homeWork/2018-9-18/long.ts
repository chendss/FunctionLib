// eg
let target: Array<any> = [[null], [undefined], [""], [{}], [1, 2, 3]]

let input: Array<any> = [null, undefined, "", {}, [1, 2, 3]]

const isNaN5 = function (val): boolean {
    return typeof val === 'number' && isNaN(val)
}
const test = function (value1, value2): boolean {
    if (isNaN5(value1)) {
        if (isNaN5(value2)) {
            return true
        } else {
            return false
        }
    }
    return value1 === value2
}

const anyToArray = function (val: any): Array<any> {
    if (val instanceof Array) {
        return val
    } else {
        return [val]
    }
}

const isEqual = function (a, b): boolean {
    if (a instanceof Object) {
        if (b instanceof Object) {
            if (Object.keys(a).length !== Object.keys(b).length) {
                return false
            } else {
                for (let key of Object.keys(a)) {
                    if (!isEqual(a[key], b[key])) {
                        return false
                    }
                }
                return true
            }
        } else {
            return false
        }
    } else if (a instanceof Array) {
        if (b instanceof Array) {
            if (a.length !== b.length) {
                return false
            } else {
                for (let index in a) {
                    if (!isEqual(a[index], b[index])) {
                        return false
                    }
                }
                return true
            }
        } else {
            return false
        }
    } else {
        return test(a, b)
    }
}

const log = function (...parameter: Array<any>): void {
    console.log.apply(console, arguments)
}

const main = function (): boolean {
    for (let i = 0; i < input.length; i++) {
        let target_item = target[i]
        let input_item = input[i]
        if (isEqual(target_item,anyToArray( input_item)) === false) {
            return false
        }
    }
    return true
}

log(main())
