import { describe, it, expect } from 'vitest';
import { getContrastColor, type RGB } from './getContrastColor';

describe('getContrastColor()', () => {
  describe('when the color is passed as a hex string', () => {
    it('should return "black" for a light color', () => {
      const color = '#AAA'; // gray
      const result = getContrastColor(color);
      expect(result).toBe('black');
    });

    it('should return "white" for a dark color', () => {
      const color = '#800000'; // maroon
      const result = getContrastColor(color);
      expect(result).toBe('white');
    });
  });

  describe('when the color is passed as an RGB array', () => {
    it('should return "black" for a light color', () => {
      const color: RGB = [255, 69, 0]; // orangered
      const result = getContrastColor(color);
      expect(result).toBe('black');
    });

    it('should return "white" for a dark color', () => {
      const color: RGB = [0, 0, 205]; // mediumblue
      const result = getContrastColor(color);
      expect(result).toBe('white');
    });
  });

  describe('when the color is passed as a hex string and the returnAs option is passed as "hex"', () => {
    it('should return "#000" for a light color', () => {
      const color = '#FFFF00'; // yellow
      const result = getContrastColor(color, { returnAs: 'hex' });
      expect(result).toBe('#000');
    });

    it('should return "#FFF" for a dark color', () => {
      const color = '#4B0082'; // indigo
      const result = getContrastColor(color, { returnAs: 'hex' });
      expect(result).toBe('#fff');
    });
  });

  describe('when the color is passed as an RGB array and the returnAs option is passed as "rgb"', () => {
    it('should return [0, 0, 0] for a light color', () => {
      const color: RGB = [250, 128, 114]; // salmon
      const result = getContrastColor(color, { returnAs: 'rgb' });
      expect(result).toEqual([0, 0, 0]);
    });

    it('should return [255, 255, 255] for a dark color', () => {
      const color: RGB = [139, 0, 0]; // darkred
      const result = getContrastColor(color, { returnAs: 'rgb' });
      expect(result).toEqual([255, 255, 255]);
    });
  });

  describe('when the color is passed as a hex string and the returnAs option is passed as "text"', () => {
    it('should return "black" for a light color', () => {
      const color = '#F0F8FF'; // aliceblue
      const result = getContrastColor(color, { returnAs: 'text' });
      expect(result).toBe('black');
    });

    it('should return "white" for a dark color', () => {
      const color = '#000080'; // navy
      const result = getContrastColor(color, { returnAs: 'text' });
      expect(result).toBe('white');
    });
  });
});
