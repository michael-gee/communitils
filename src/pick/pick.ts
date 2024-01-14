/**
 * @name pick
 * @description Creates a new object with the specified properties from the given object.
 *
 * @param object - The object from which to pick properties.
 * @param properties - The properties to pick from the object.
 * @returns A new object containing only the picked properties.
 */

export function pick(object: Record<string, unknown>, properties: string | string[]) {
  const picked: Record<string, unknown> = {};

  if (Array.isArray(properties)) {
    return properties.reduce((obj, key) => {
      if (object?.hasOwnProperty(key)) {
        obj[key] = object[key];
      }
      return obj;
    }, picked as Record<string, unknown>);
  }

  if (object?.hasOwnProperty(properties)) {
    picked[properties] = object[properties];
  }

  return picked;
}
