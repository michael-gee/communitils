/**
 * @name isNil
 * Checks if a value is null or undefined.
 * @param value - The value to check.
 * @returns True if the value is null or undefined, false otherwise.
 */

export function isNil(value: unknown) {
  return value == null;
}
