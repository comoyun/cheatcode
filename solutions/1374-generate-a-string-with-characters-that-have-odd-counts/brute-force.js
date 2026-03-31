// time: O(n)
// space: O(n)

/**
 * @param {number} n
 * @return {string}
 */
const generateTheString = n =>
    n & 1 ? 'a'.repeat(n) : 'a'.repeat(n - 1) + 'b';
