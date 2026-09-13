// time: O(log n)
// space: O(1)

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
const hammingDistance = (x, y) => {
    let a = x;
    let b = y;
    let result = 0;

    while (a || b) {
        const bitA = a & 1;
        const bitB = b & 1;
        result += bitA ^ bitB;
        a >>= 1;
        b >>= 1;
    }

    return result;
};
