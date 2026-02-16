// time: O(1)
// space: O(1)

/**
 * @param {number} n
 * @return {number}
 */
const reverseBits = n => {
    const bin = n.toString(2).padStart(32, '0').split('');
    const rev = bin.reverse().join('');
    return parseInt(rev, 2);
};
