// time: O(n)
// space: O(1)

/**
 * @param {string} s
 * @return {number}
 */
const numSteps = s => {
    let n = BigInt('0b' + s);
    let result = 0;
    while (n !== 1n) {
        if (n % 2n === 0n) n >>= 1n;
        else n += 1n;
        result++;
    }

    return result;
};
