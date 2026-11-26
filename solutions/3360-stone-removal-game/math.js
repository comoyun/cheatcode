// time: O(1)
// space: O(1)

/**
 * @param {number} n
 * @return {boolean}
 */
const canAliceWin = n => !!(Math.ceil((Math.sqrt(441 - 8 * n) - 1) / 2) & 1);

