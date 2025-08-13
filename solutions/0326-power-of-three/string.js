// time: O(1)
// space: O(1)

/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfThree = n => {
    const base3 = n.toString(3);
    return /^1(0)*$/.test(base3);
};
