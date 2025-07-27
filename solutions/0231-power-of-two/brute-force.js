// time: O(log n)
// space: O(1)

/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfTwo = n => {
    for (let i = 0; i < 32; i++) {
        const pow = Math.pow(2, i);
        if (pow > n) return false;
        if (pow === n) return true;
    }
    return false;
};

