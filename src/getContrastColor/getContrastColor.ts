/**
 * @name getContrastColor
 * @description Calculates the contrast color based on the input color.
 *
 * @param color - The color to calculate the contrast color for. It can be either a string representing a hex color code (e.g., "#ffffff") or an array representing an RGB color (e.g., [255, 255, 255]).
 * @param options - The options for returning the contrast color. It can have a property `returnAs` which can be either "text", "hex", or "rgb".
 * @returns The contrast color based on the input color. If `options.returnAs` is "text", it returns either "black" or "white". If `options.returnAs` is "hex", it returns either "#000" or "#fff". If `options.returnAs` is "rgb", it returns either [0, 0, 0] or [255, 255, 255].
 */

export type RGB = [red: number, green: number, blue: number];

export function getContrastColor(color: string | RGB, options?: { returnAs: 'text' | 'hex' | 'rgb' }) {
  let r, g, b;

  if (typeof color === 'string') {
    if (color.length == 4) {
      color = '#' + color[1].repeat(2) + color[2].repeat(2) + color[3].repeat(2);
    }

    r = parseInt(color.substring(1, 3), 16);
    g = parseInt(color.substring(3, 5), 16);
    b = parseInt(color.substring(5, 7), 16);
  } else {
    r = color[0] as number;
    g = color[1] as number;
    b = color[2] as number;
  }

  const LUMINANCE = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  const DEFAULT_THRESHOLD = Math.sqrt(1.05 * 0.05) - 0.05;

  if (options?.returnAs) {
    switch (options.returnAs) {
      case 'text':
        return LUMINANCE > DEFAULT_THRESHOLD ? 'black' : 'white';

      case 'hex':
        return LUMINANCE > DEFAULT_THRESHOLD ? '#000' : '#fff';

      case 'rgb':
        return LUMINANCE > DEFAULT_THRESHOLD ? [0, 0, 0] : [255, 255, 255];
    }
  }

  return LUMINANCE > DEFAULT_THRESHOLD ? 'black' : 'white';
}
