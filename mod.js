"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPositive = exports.infinity = exports.numberRow = void 0;
/**
*
* @param {number} end To what number should it count.
* @param {number} start Where to start the counting. Defaults to 1.
* @param {number | string} datatype Which datatype. Can be either any string or any number. Defaults to string. If number, might break sometimes.
* @returns {number | string} A concatenation of every number from `start` to `numbers`, in datatype `datatype`.
* @example numberRow(1, 10) // "10987654321"
* @example numberRow(10, 1, 1, 8) // 12345678910
*/
function numberRow(end, start = 1, step = 1, datatype = "") {
    if (end < start) {
        step = -step;
    }
    let result = "";
    for (let i = start; i <= end; i += step) {
        result += i.toString();
    }
    return typeof datatype === 'string' ? result : parseInt(result);
}
exports.numberRow = numberRow;
/**
 *
 * @param {number} i The number to check.
 * @returns {boolean} Whether `i` is positive or negative.
 * @example isPositive(78) // true
 * @example isPositive(-31) // false
 */
function isPositive(i) {
    return Math.abs(i) == i;
}
exports.isPositive = isPositive;
/**
 * @param {number} side Whether infinity should be positive or negative. Defaults to positive. Can be any number. If negative, returns negative infinity, otherwise returns positive infinity.
 * @returns {number} Positive or negative infinity. Depends on `side`.
 */
function infinity(side = 1) {
    return isPositive(side) ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;
}
exports.infinity = infinity;
function expose(){for(const k in exports){if(k==expose){continue;}Math[k]=exports[k]}}
exports.expose = expose;