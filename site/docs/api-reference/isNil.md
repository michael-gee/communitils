---
sidebar_position: 3
tags:
  - validation
---

# isNil

Checks if a value is null or undefined.

### Parameters

`value (any)`: The value to check.

### Returns

`(boolean)`: `true` if the value is null or undefined, `false` otherwise.

### Examples

```ts
isNil(' ');
// Expected output: false

isNil(22);
// Expected output: false

isNil({});
// Expected output: false

isNil(null);
// Expected output: true

isNil(undefined);
// Expected output: true
```
