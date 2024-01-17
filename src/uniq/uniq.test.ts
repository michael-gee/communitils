import { describe, it, expect } from 'vitest';
import { uniq } from './uniq';

describe('uniq()', () => {
  describe('when no options are passed', () => {
    it('should return an array with duplicates removed', () => {
      expect(uniq([1, 1])).toEqual([1]);
      expect(uniq([1, 2, 1])).toEqual([1, 2]);
      expect(uniq([1, 2, 3, 1, 2])).toEqual([1, 2, 3]);

      expect(uniq(['a', 'a'])).toEqual(['a']);
      expect(uniq(['a', 'b', 'a'])).toEqual(['a', 'b']);
      expect(uniq(['a', 'b', 'c', 'a', 'b'])).toEqual(['a', 'b', 'c']);

      expect(uniq([true, true])).toEqual([true]);
      expect(uniq([true, false, true])).toEqual([true, false]);
      expect(uniq([true, false, true, false])).toEqual([true, false]);

      expect(uniq([null, null])).toEqual([null]);
      expect(uniq([null, undefined, null])).toEqual([null, undefined]);
      expect(uniq([null, undefined, null, undefined])).toEqual([null, undefined]);
    });
  });

  describe('when deep option is true', () => {
    it('should return an array with nested values (arrays and objects) with duplicates removed', () => {
      expect(uniq([[1], [1]], { deep: true })).toEqual([[1]]);
      expect(uniq([[1], [2], [1]], { deep: true })).toEqual([[1], [2]]);
      expect(uniq([[1], [2], [3], [1], [2]], { deep: true })).toEqual([[1], [2], [3]]);

      expect(uniq([{ a: 'a' }, { a: 'a' }], { deep: true })).toEqual([{ a: 'a' }]);
      expect(uniq([{ a: 'a' }, { a: 'b' }, { a: 'a' }], { deep: true })).toEqual([{ a: 'a' }, { a: 'b' }]);
      expect(uniq([{ a: 'a' }, { a: 'b' }, { a: 'c' }, { a: 'a' }, { a: 'b' }], { deep: true })).toEqual([
        { a: 'a' },
        { a: 'b' },
        { a: 'c' }
      ]);
    });
  });
});
