// time: O(1)
// space: O(1)

/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfFour = n => {
    for (let i = 0; i < 17; i++) 
        if (4 ** i === n) return true;
    return false;
};

