// time: O(log n)
// space: O(log n)

/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfTwo = (n, power = 0) => {
    if (n <= 0) return false;
    const val = 1 << power;
    if (val === n) return true;
    if (val > n) return false;
    return isPowerOfTwo(n, power + 1);
};
