// time: O(1)
// space: O(1)

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
const getSum = (a, b) => {
    /* WARNING: This solution doesn't pass on LC.
     * It only works with positive numbers */

    let sum = 0;
    let carry = 0;
    let mask = 1;

    while (a || b || carry) {
        const bitA = a & 1;
        const bitB = b & 1;

        sum |= (bitA ^ bitB ^ carry) * mask;
        carry = (bitA & bitB) | (carry & (bitA ^ bitB));

        mask <<= 1;
        a >>>= 1;
        b >>>= 1;
    }

    return sum;
};


