/**
 * @interface IObject [name: string]: any
 */
interface IObject {
    [name: string]: any
}

/**
 * @interface IObjectString [name: string]: string
 */
interface IObjectString {
    [name: string]: string
}

/**
 * @interface IObjectValue [name: string]: string|number
 */
interface IObjectValue {
    [name: string]: string | number
}

/**
 * @interface IArrayValue Array<string | number>
 */
interface IArrayValue extends Array<string | number> {}

/**
 * @interface IArrayValueObject Array<string | number| IObject>
 */
interface IArrayValueObject extends Array<string | number | IObject> {}

/**
 * @interface IArrayObject Array<IObject>
 */
interface IArrayObject extends Array<IObject> {}