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
