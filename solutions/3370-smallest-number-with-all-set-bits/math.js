// time: O(1)
// space: O(1)

/**
 * @param {number} n
 * @return {number}
 */
const smallestNumber = n => 2 ** Math.floor(Math.log2(n) + 1) - 1;

