import { describe, it, expect } from 'vitest';
import { isEmpty } from './isEmpty';

describe('isEmpty()', () => {
  describe('when checking a string', () => {
    it('should return `true` if the string is empty', () => {
      expect(isEmpty('')).toBe(true);
      expect(isEmpty(' ')).toBe(true);
      expect(isEmpty('  ')).toBe(true);
      expect(isEmpty('   ')).toBe(true);
    });

    it('should return `false` if the string is not empty', () => {
      expect(isEmpty('a')).toBe(false);
      expect(isEmpty(' a')).toBe(false);
      expect(isEmpty('a ')).toBe(false);
      expect(isEmpty(' a ')).toBe(false);
    });
  });

  describe('when checking an array', () => {
    it('should return `true` if the array is empty', () => {
      expect(isEmpty([])).toBe(true);
    });

    it('should return `false` if the array is not empty', () => {
      expect(isEmpty([1])).toBe(false);
      expect(isEmpty([1, 2])).toBe(false);
    });
  });

  describe('when checking a Set', () => {
    it('should return `true` if the Set is empty', () => {
      expect(isEmpty(new Set())).toBe(true);
    });

    it('should return `false` if the Set is not empty', () => {
      expect(isEmpty(new Set([1]))).toBe(false);
      expect(isEmpty(new Set([1, 2]))).toBe(false);
    });
  });

  describe('when checking a Map', () => {
    it('should return `true` if the Map is empty', () => {
      expect(isEmpty(new Map())).toBe(true);
    });

    it('should return `false` if the Map is not empty', () => {
      expect(isEmpty(new Map([['a', 1]]))).toBe(false);
      expect(
        isEmpty(
          new Map([
            ['a', 1],
            ['b', 2]
          ])
        )
      ).toBe(false);
    });
  });

  describe('when checking an object', () => {
    it('should return `true` if the object is empty', () => {
      expect(isEmpty({})).toBe(true);
    });

    it('should return `false` if the object is not empty', () => {
      expect(isEmpty({ a: 1 })).toBe(false);
      expect(isEmpty({ a: 1, b: 2 })).toBe(false);
    });
  });
});
