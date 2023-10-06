
/**
* 
* @param {number} end To what number should it count.
* @param {number} start Where to start the counting. Defaults to 1.
* @param {number | string} datatype Which datatype. Can be either any string, any number or any array. Defaults to array. If number, might break sometimes.
* @returns {number | string} A concatenation of every number from `start` to `numbers`, in datatype `datatype`.
* @example numberRow(1, 10) // "10987654321"
* @example numberRow(10, 1, 1, 8) // 12345678910
*/
function numberRow(end: number, start: number = 1, step: number = 1, datatype: number | string | Array<any> = []): number | string | Array<any> {
    if (end < start) { step = -step; }
    let result = []
    for (let i = start; i <= end; i += step) {
        result.push(i)
    }
    return typeof datatype === 'string' ? result.join("") : typeof datatype === 'number' ? parseInt(result.join("")) : result
}

/**
 * 
 * @param {number} i The number to check. 
 * @returns {boolean} Whether `i` is positive or negative.
 * @example isPositive(78) // true
 * @example isPositive(-31) // false
 */
function isPositive(i: number): boolean {
    return Math.abs(i) == i
}

/**
 * @param {number} side Whether infinity should be positive or negative. Defaults to positive. Can be any number. If negative, returns negative infinity, otherwise returns positive infinity.
 * @returns {number} Positive or negative infinity. Depends on `side`.
 */
function infinity(side: number = 1): number {
    return isPositive(side) ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY
}

function turnStringArrayToNumberArray(arr: Array<string>): Array<number> {
    let result: number[] = [];
    for (let i of arr) {
        result.push(parseInt(i))
    }
    return result
}

export {numberRow,infinity,isPositive,turnStringArrayToNumberArray}