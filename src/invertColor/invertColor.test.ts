import { describe, it, expect } from 'vitest';
import { invertColor } from './invertColor';

describe('invertColor()', () => {
  describe('when the color is provided as a string', () => {
    it('should invert the color to the expected value', () => {
      expect(invertColor('#000000')).toBe('#FFFFFF');
      expect(invertColor('#FFFFFF')).toBe('#000000');
      expect(invertColor('#0E0099')).toBe('#F1FF66');
      expect(invertColor('#00FF00')).toBe('#FF00FF');
      expect(invertColor('#FF0100')).toBe('#00FEFF');
    });
  });

  describe('when the color is provided as an RGB array', () => {
    it('should invert the color to the expected value', () => {
      expect(invertColor([0, 0, 0])).toBe('#FFFFFF');
      expect(invertColor([255, 255, 255])).toBe('#000000');
      expect(invertColor([121, 52, 38])).toBe('#86CBD9');
    });
  });

  describe('when the color is provided as a string and the bw option is true', () => {
    it('should return black for light colors and white for dark colors', () => {
      expect(invertColor('#000000', { bw: true })).toBe('#FFFFFF');
      expect(invertColor('FFFFFF', { bw: true })).toBe('#000000');
      expect(invertColor('#400B06', { bw: true })).toBe('#FFFFFF');
      expect(invertColor('C1EC00', { bw: true })).toBe('#000000');
      expect(invertColor('#005856', { bw: true })).toBe('#FFFFFF');
    });
  });

  describe('when the color is provided as an RGB array and the bw option is true', () => {
    it('should return black for light colors and white for dark colors', () => {
      expect(invertColor([0, 0, 0], { bw: true })).toBe('#FFFFFF');
      expect(invertColor([255, 255, 255], { bw: true })).toBe('#000000');
    });
  });
});
