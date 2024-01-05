import { describe, it, expect } from 'vitest';
import { pick } from './pick';

describe('pick()', () => {
  const originalObject = { a: 'a', b: 'b', c: 'c', d: 'd' };

  describe('when the "properties" parameter passed is a string', () => {
    it('should return an object with the single valid property passed as the properties param', () => {
      expect(pick(originalObject, 'b')).toEqual({ b: 'b' });
    });

    it('should return an empty object when an invalid property name as the properties param', () => {
      expect(pick(originalObject, 'z')).toEqual({});
    });
  });

  describe('when the "properties" parameter passed is a array', () => {
    it('should return an object with ALL properties specified within the properties array', () => {
      expect(pick(originalObject, ['a', 'c'])).toEqual({ a: 'a', c: 'c' });
    });

    it('should ignore removing invalid properies from the object while still removing the valid ones', () => {
      expect(pick(originalObject, ['a', 'c', 't', 'z'])).toEqual({ a: 'a', c: 'c' });
    });
  });

  it('should return an empty object when the string property passed are not found', () => {
    expect(pick(originalObject, 'z')).toEqual({});
  });

  it('should return an empty object when array properties passed are not found', () => {
    expect(pick(originalObject, ['t', 'z'])).toEqual({});
  });
});
