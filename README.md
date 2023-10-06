# mathext

[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/the-one-with-raspberry/mathext)
[![GitHub last commit (master)](https://img.shields.io/github/last-commit/the-one-with-raspberry/mathext/master)](https://github.com/the-one-with-raspberry/mathext/tree/master)
[![GitHub issues](https://img.shields.io/github/issues/the-one-with-raspberry/mathext)](https://github.com/the-one-with-raspberry/mathext/issues)
[![npm](https://img.shields.io/npm/v/%40berriz44%2Fmathext)](https://www.npmjs.com/package/@berriz44/mathext)
[![GitHub Repo stars](https://img.shields.io/github/stars/the-one-with-raspberry/mathext)](https://github.com/the-one-with-raspberry/mathext)


`mathext` is an extension of the `math` interface in JavaScript.

how to install:

```bash
npm install @berriz44/mathext
```

usage:

```js
const MathExt = require('@berriz44/mathext')
```

# items

## `MathExt.numberRow: number | string | Array<number>`

### parameter list:

1. `end: number` | to what number should it count
2. `start: number` | what number should it start with. defaults to 1.
3. `step: number` | how much to increment each number. defaults to 1. affected by `start` and `end`.
4. `datatype: number | string | Array<any>` | can be any number, array or string. defaults to array. determines the return type of the function.

### returns:

a `number`, `string`, or `Array<number>` representing a row of numbers

### examples:

```js
MathExt.numberRow(10, 1)
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
typeof MathExt.numberRow(10, 1)
/// Array<number>
```

```js
MathExt.numberRow(11, 1, 2)
// [1, 3, 5, 7, 9, 11]
```

```js
MathExt.numberRow(10, 1, 1, "")
// "12345678910"
typeof MathExt.numberRow(10, 1, 1, "")
// 'string'
```

```js
MathExt.numberRow(10, 1, 1, 0)
// 12345678910
typeof MathExt.numberRow(10, 1, 1, 0)
// 'number'