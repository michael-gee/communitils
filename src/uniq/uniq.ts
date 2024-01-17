/**
 * @name uniq
 * @description Removes duplicate elements from an array.
 *
 * @param array - The array to remove duplicates from.
 * @param options - Optional configuration for deep comparison of objects and arrays.
 * @returns A new array with duplicate elements removed.
 */

export interface UniqOptions {
  deep?: boolean;
}

export function uniq(array: unknown[], options?: UniqOptions) {
  if (options?.deep) {
    const stringified = new Set();

    array.forEach(item => {
      stringified.add(JSON.stringify(item));
    });

    return Array.from(stringified).map(item => JSON.parse(item as string));
  }

  return Array.from(new Set(array));
}
