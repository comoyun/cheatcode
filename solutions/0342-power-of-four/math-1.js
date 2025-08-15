// time: O(1)
// space: O(1)

/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfFour = n => /^1(0)*$/.test(n.toString(4));
