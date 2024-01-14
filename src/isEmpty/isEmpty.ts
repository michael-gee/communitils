/**
 * @name isEmpty
 * Checks if a value is empty.
 * @param value - The value to check.
 * @returns `true` if the value is empty, `false` otherwise.
 */

export function isEmpty(value: string | object | unknown[] | Set<unknown> | Map<unknown, unknown>) {
  if (typeof value === 'string') {
    return value.trim() === '';
  }

  if (Array.isArray(value)) {
    return value.length === 0;
  }

  if (value instanceof Set || value instanceof Map) {
    return value.size === 0;
  }

  return Object.keys(value).length === 0;
}
