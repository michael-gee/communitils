import { describe, it, expect } from 'vitest';
import { isEmpty } from './isEmpty';
import { isNil } from '../isNil';

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

  describe('when checking an boolean', () => {
    it('should return `true` if a `true` OR `false` boolean value is passed', () => {
      expect(isEmpty(true)).toBe(true);
      expect(isEmpty(false)).toBe(true);
    });
  });

  describe('when checking an boolean', () => {
    it('should return `true` if a `true` OR `false` boolean value is passed', () => {
      expect(isEmpty(true)).toBe(true);
      expect(isEmpty(false)).toBe(true);
    });
  });

  describe('when checking an function', () => {
    it('should return `true` if ANY function definition is passed', () => {
      expect(isEmpty(() => {})).toBe(true);
      expect(isEmpty(function () {})).toBe(true);
      expect(isEmpty(isNil)).toBe(true);
    });
  });

  describe('when checking an number', () => {
    it('should return `true` if ANY number is passed', () => {
      expect(isEmpty(0)).toBe(true);
      expect(isEmpty(-10)).toBe(true);
      expect(isEmpty(10)).toBe(true);
    });
  });
});
