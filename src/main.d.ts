/**
 * @name isEmpty
 * Checks if a value is empty.
 * @param value - The value to check.
 * @returns `true` if the value is empty, `false` otherwise.
 */
export declare function isEmpty(value: string | object | unknown[] | Set<unknown> | Map<unknown, unknown>): boolean;
/**
 * @name isNil
 * Checks if a value is null or undefined.
 * @param value - The value to check.
 * @returns True if the value is null or undefined, false otherwise.
 */
export declare function isNil(value: unknown): boolean;
/**
 * @name omit
 * Creates a new object by omitting specified properties from the input object.
 * @param object - The input object from which properties will be omitted.
 * @param properties - The properties to be omitted. Can be a string or an array of strings.
 * @returns A new object with the specified properties omitted.
 */
export declare function omit(object: Record<string, unknown>, properties: string | string[]): {
    [x: string]: unknown;
};
/**
 * @name pick
 * Creates a new object with the specified properties from the given object.
 * @param object - The object from which to pick properties.
 * @param properties - The properties to pick from the object.
 * @returns A new object containing only the picked properties.
 */
export declare function pick(object: Record<string, unknown>, properties: string | string[]): Record<string, unknown>;
