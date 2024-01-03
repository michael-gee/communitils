import { describe, it, expect } from 'vitest';
import { addTwoNumbers } from './example';

describe('addTwoNumbers()', () => {
  it('should return the sum of two numbers', () => {
    expect(addTwoNumbers(2, 2)).toBe(4);
    expect(addTwoNumbers(5, 5)).toBe(10);
    expect(addTwoNumbers(50, 50)).toBe(100);
    expect(addTwoNumbers(2234, 4000)).toBe(6234);
  });
});
