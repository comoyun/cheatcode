// time: O(1)
// space: O(1)

/**
 * @param {number} n
 * @return {number}
 */
const bitwiseComplement = n =>
    n === 0 ? 1 : n ^ ((1 << (Math.floor(Math.log2(n)) + 1)) - 1);
