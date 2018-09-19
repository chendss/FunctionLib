// eg
let target: Array<any> = [
    [null],
    [undefined],
    [""],
    [{ b: 2, a: 1 }],
    [1, 2, 3]
]

let input: Array<any> = [null, undefined, "", { a: 1, b: 2 }, [1, 2, 3]]

const test = function(value1, value2): boolean {
    if (value1 === value2) {
        return true
    } else {
        return false
    }
}

const anyToArray = function(array: any): Array<any> {
    if (array instanceof Array) {
        return array
    } else {
        return [array]
    }
}

const isEqual = function(value1, value2): boolean {
    return false
}

const log = function(...parameter: Array<any>): void {
    console.log.apply(console, ...parameter)
}

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
