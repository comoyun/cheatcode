// time: O(1)
// space: O(1)

/**
 * @param {number} n
 * @return {number}
 */
const arrangeCoins = n => Math.floor((Math.sqrt(8 * n + 1) - 1) / 2);

