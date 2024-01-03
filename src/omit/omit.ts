export function omit(object: Record<string, unknown>, properties: string | string[]) {
  if (Array.isArray(properties)) {
    const copyObject = { ...object };

    properties.forEach(property => {
      delete copyObject[property];
    });

    return copyObject;
  }

  const { [properties]: _, ...rest } = object;
  return rest;
}
