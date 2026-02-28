// time: O(n log n)
// space: O(1)

/**
 * @param {number} n
 * @return {number}
 */
const concatenatedBinary = n => {
    const MOD = 10 ** 9 + 7;
    let result = 0;
    let pow = 1;

    for (let i = n; i > 0; i--) {
        let curr = i;
        while (curr) {
            result += pow * (curr & 1);
            result %= MOD;

            curr >>= 1;

            pow *= 2;
            pow %= MOD;
        }
    }

    return result;
};
