/**
 * @name invertColor
 * @description - Inverts the color by converting it to its complementary color.
 *
 * @param color - The color to invert. It can be either a string representing a hex color code (e.g., "#ffffff") or an array representing an RGB color (e.g., [255, 255, 255]).
 * @param options.bw - If true, returns black (#000000) for light colors and white (#FFFFFF) for dark colors.
 * @returns The inverted color in hexadecimal format (#RRGGBB).
 */

export type RGB = [red: number, green: number, blue: number];

export function invertColor(color: string | RGB, options?: { bw: boolean }) {
  let r, g, b;

  if (typeof color === 'string') {
    let hex = color;

    if (hex.indexOf('#') === 0) {
      hex = color.slice(1);
    }
    // convert 3-digit hex to 6-digits.
    if (hex.length === 3) {
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    if (hex.length !== 6) {
      throw new Error('Invalid HEX color.');
    }

    r = parseInt(hex.substring(0, 2), 16);
    g = parseInt(hex.substring(2, 4), 16);
    b = parseInt(hex.substring(4, 6), 16);
  } else {
    r = color[0] as number;
    g = color[1] as number;
    b = color[2] as number;
  }

  if (options?.bw) {
    // https://stackoverflow.com/a/3943023/112731
    return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? '#000000' : '#FFFFFF';
  }

  r = (255 - r).toString(16).toUpperCase();
  g = (255 - g).toString(16).toUpperCase();
  b = (255 - b).toString(16).toUpperCase();

  return '#' + _padZero(r) + _padZero(g) + _padZero(b);
}

function _padZero(str: string, len: number = 2) {
  len = len || 2;
  const zeros = new Array(len).join('0');
  return (zeros + str).slice(-len);
}
