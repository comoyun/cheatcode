// time: O(d)
// space: O(1)

/**
 * @param {number} n
 * @return {number}
 */
const maxProduct = n => {
    let max1 = 0;
    let max2 = 0;

    while (n) {
        const digit = n % 10;
        if (digit > max1) {
            max2 = max1;
            max1 = digit;
        } else if (digit > max2) {
            max2 = digit;
        }
        n = Math.floor(n / 10);
    }

    return max1 * max2;
};
