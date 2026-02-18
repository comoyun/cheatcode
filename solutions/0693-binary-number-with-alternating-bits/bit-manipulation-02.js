// time: O(1)
// space: O(1)

/**
 * @param {number} n
 * @return {boolean}
 */
const hasAlternatingBits = n => {
    let t = (n >> 1) + n;
    return (t & (t + 1)) === 0;
};
