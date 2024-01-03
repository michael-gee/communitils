import { describe, it, expect } from 'vitest';
import { omit } from './omit';

describe('omit()', () => {
  const originalObject = { a: 'a', b: 'b', c: 'c' };

  describe('when the "properties" parameter passed is a string', () => {
    it('should remove the single property specified from the object', () => {
      expect(omit(originalObject, 'c')).toEqual({ a: 'a', b: 'b' });
    });

    it('should not remove any properties if an invalid property name is passed', () => {
      expect(omit(originalObject, 'invalid')).toEqual(originalObject);
    });
  });

  describe('when the "properties" parameter passed is a array', () => {
    it('should remove ALL object properties specified within the array', () => {
      expect(omit(originalObject, ['a', 'c'])).toEqual({ b: 'b' });
    });

    it('should ignore removing invalid properies from the object while still removing the valid ones', () => {
      expect(omit(originalObject, ['test', 'invalid', 'a'])).toEqual({ b: 'b', c: 'c' });
    });
  });
});
