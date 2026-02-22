// time: O(n)
// space: O(1)

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
const countPrimeSetBits = (left, right) => {
    let result = 0;
    const primes = new Set([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31]);

    for (let i = left; i <= right; i++) {
        let bits = 0;
        let num = i;

        while (num) {
            bits += num & 1;
            num >>= 1;
        }

        if (primes.has(bits)) result++;
    }

    return result;
};

