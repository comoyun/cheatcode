// time: O(1)
// space: O(1)

/**
 * @param {number} num
 * @param {number} sum
 * @return {string}
 */
const maxSumOfSquares = (num, sum) => {
    const count = (sum / 9) | 0;
    const rem = sum % 9;
    const total = (rem && 1) + count;

    if (total > num) return '';

    return (
        '9'.repeat(count) +
        (rem ? rem.toString() : '') +
        '0'.repeat(num - total)
    );
};
