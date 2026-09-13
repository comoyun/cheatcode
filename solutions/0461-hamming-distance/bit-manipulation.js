// time: O(log n)
// space: O(1)

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
const hammingDistance = (x, y) => {
    let result = 0;

    while (x || y) {
        result += (x & 1) ^ (y & 1);
        x >>= 1;
        y >>= 1;
    }

    return result;
};
