// time: O(log n)
// space: O(1)

/**
 * @param {number} n
 * @return {number}
 */
const binaryGap = n => {
    // POTD
    // this is the solution after about 6 months
    // close to bit-manipulation-01.js but I think better

    let i = 0,
        result = 0,
        last = Infinity;

    while (n) {
        const bit = n & 1;

        if (bit) {
            result = Math.max(result, i - last);
            last = i;
        }

        i++;
        n >>= 1;
    }
    return result;
};
