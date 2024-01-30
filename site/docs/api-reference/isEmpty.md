---
sidebar_position: 2
tags:
  - validation
---

# isEmpty

Checks if a value is empty.

### Parameters

`value (string | array | object | map | set)`: The value to check.

### Returns

`(boolean)`: `true` if the value is empty, `false` otherwise.

### Examples

```ts
isEmpty(' ');
// Expected output: true

isEmpty([]);
// Expected output: true

isEmpty({});
// Expected output: true

isEmpty(new Map());
// Expected output: true

isEmpty(new Set());
// Expected output: true
```
