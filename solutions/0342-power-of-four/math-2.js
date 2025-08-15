// time: O(1)
// space: O(1)

/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfFour = n => {
    while (n % 4 === 0) n = Math.floor(n / 4);
    return n === 1;
};
