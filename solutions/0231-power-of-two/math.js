// time: O(1)
// space: O(1)

/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfTwo = n => {
    const raw = Math.log2(n),
        flo = Math.floor(raw);
    return n && raw === flo;
};
