// time: O(1)
// space: O(1)

/**
 * @param {number} num
 * @return {number}
 */
const findComplement = num => num ^ ((1 << (Math.log2(num) + 1)) - 1);

