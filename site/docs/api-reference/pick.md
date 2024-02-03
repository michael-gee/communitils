---
sidebar_position: 6
tags:
  - object
---

# pick

Creates a new object with the specified properties from the given object.

### Parameters

`object (object)`: The object from which to pick properties.

`properties (string | string[])`: The properties to pick from the object. Can be a string or an array of strings.

### Returns

`(object)`: A new object containing only the picked properties.

### Examples

```ts
pick({ a: 'a', b: 'b', c: 'c' }, 'b');
// Expected output: { b: 'b' }

pick({ a: 'a', b: 'b', c: 'c', d: 'd' }, ['c', 'd']);
// Expected output: { c: 'c', d: 'd' }
```
