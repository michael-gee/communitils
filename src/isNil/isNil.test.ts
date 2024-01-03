import { describe, it, expect } from 'vitest';
import { isNil } from './isNil';

describe('isNil()', () => {
  it('should specify if the parameter passed is `null` or `undefined', () => {
    expect(isNil(true)).toBe(false);
    expect(isNil(false)).toBe(false);
    expect(isNil('string')).toBe(false);
    expect(isNil(22)).toBe(false);
    expect(isNil(0)).toBe(false);
    expect(isNil({})).toBe(false);
    expect(isNil([])).toBe(false);

    expect(isNil(undefined)).toBe(true);
    expect(isNil(null)).toBe(true);
  });
});
