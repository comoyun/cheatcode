// time: O(n)
// space: O(1)

/**
 * @param {string} s
 * @return {number}
 */
const numSub = s => {
    const MOD = 10 ** 9 + 7;
    let ones = 0;
    let result = 0;

    for (const bit of s) {
        ones += +bit;

        if (bit === '0') {
            result += (ones * (ones + 1)) / 2;
            result %= MOD;
            ones = 0;
        }
    }

    return (result + (ones * (ones + 1)) / 2) % MOD;
};
