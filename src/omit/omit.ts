/**
 * @name omit
 * @description Creates a new object by omitting specified properties from the input object.
 *
 * @param object - The input object from which properties will be omitted.
 * @param properties - The properties to be omitted. Can be a string or an array of strings.
 * @returns A new object with the specified properties omitted.
 */

export function omit(object: Record<string, unknown>, properties: string | string[]) {
  if (Array.isArray(properties)) {
    const copyObject = { ...object };

    properties.forEach(property => {
      delete copyObject[property];
    });

    return copyObject;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { [properties]: _, ...rest } = object;
  return rest;
}
