---
tags:
  - array
---

# uniq

Removes duplicate elements from an array.

### Parameters

`array (unknown[])`: The array to remove duplicates from.

`options ({ deep?: boolean })`: Optional configuration for deep comparison of objects and arrays.

### Returns

`(array)`: A new array with duplicate elements removed.

### Examples

```ts
uniq([1, 2, 3, 1, 2]);
// Expected output: [ 1, 2, 3 ]

uniq(['a', 'b' 'c', 'd', 'a', 'b']);
// Expected output: [ 'a', 'b', 'c', 'd' ]

uniq([ [1], [2], [3], [1], [2] ], { deep: true });
// Expected output: [ [1], [2], [3] ]

uniq([ { a: 'a' }, { b: 'b' }, { c: 'c' }, { a: 'a' }, { b: 'b' } ], { deep: true });
// Expected output: [ { a: 'a' }, { b: 'b' }, { c: 'c' } ]
```
