---
sidebar_position: 4
tags:
  - object
---

# omit

Creates a new object by omitting specified properties from the input object.

### Parameters

`object (object)`: The input object from which properties will be omitted.

`properties (string | string[])`: The property or properties to be omitted. Can be a string or an array of strings.

### Returns

`(object)`: A new object with the specified properties omitted.

### Examples

```ts
omit({ a: 'a', b: 'b', c: 'c' }, 'b');
// Expected output: { a: 'a', c: 'c' }

omit({ a: 'a', b: 'b', c: 'c', d: 'd' }, ['c', 'd']);
// Expected output: { a: 'a', b: 'b' }
```
