// time: O(1)
// space: O(1)

/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfThree = n => {
    for (let power = 0; power < 32; power++) 
        if (3 ** power === n) return true;
    return false;
};

