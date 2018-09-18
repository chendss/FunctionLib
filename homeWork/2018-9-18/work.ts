// eg
let target: Array<any> = [[null], [undefined], [""], [{}], [1, 2, 3]]

let input: Array<any> = [null, undefined, "", {}, [1, 2, 3]]

const test = function(value1, value2): boolean {
    return false
}

const anyToArray = function(array: Array<any>): Array<any> {
    return []
}

const isEqual = function(value1, value2): boolean {
    return false
}

const log = function(...parameter: Array<any>): void {}

const main = function(): boolean {
    for (let i = 0; i < input.length; i++) {
        let target_item = target[i]
        let input_item = input[i]
        if (isEqual(target_item, input_item) === false) {
            return false
        }
    }
    return true
}

log(main())
