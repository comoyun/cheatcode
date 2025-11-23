// time: O(log n)
// space: O(1)

/**
 * @param {number} n
 * @return {number}
 */
const binaryGap = n => {
    let left = Infinity;
    let right = 0;
    let result = 0;
    while (n) {
        const bit = n & 1;
        if (bit) {
            result = Math.max(result, right - left);
            left = right;
        }
        right++;
        n >>= 1;
    }

    return result;
};
