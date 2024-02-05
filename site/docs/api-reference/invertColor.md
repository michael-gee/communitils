---
tags:
  - string
---

# invertColor

Inverts the color by converting it to its complementary color.

A common use case would be for when you need to display text on a background that is unknown until runtime and you want to ensure the text is readable regardless of what color is displayed.

### Parameters

`color (string)`: The color to invert. It can be either a string representing a hex color code (e.g., "#FFFFFF") or an array representing an RGB color (e.g., [255, 255, 255]).

`options ({ bw: boolean })`: If true, returns black (#000000 or [0, 0, 0]) for light colors and white (#FFFFFF or [255, 255, 255]) for dark colors.

### Returns

`(string)`: The inverted color in the format which you passed the color param.

### Examples

```ts
invertColor('#000000');
// Expected output: #FFFFFF

invertColor('#0E0099');
// Expected output: #F1FF66

invertColor([0, 0, 0]);
// Expected output: [255, 255, 255]]

invertColor([121, 52, 38]);
// Expected output: [134, 203, 217]

invertColor('#400B06', { bw: true });
// Expected output: #FFFFFF

invertColor('C1EC00', { bw: true });
// Expected output: #000000

invertColor([121, 52, 38], { bw: true });
// Expected output: [255, 255, 255]
```
