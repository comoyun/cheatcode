// time: O(n)
// space: O(1)

/**
 * @param {number} n
 * @return {boolean}
 */
const checkDivisibility = n => {
    const num = n;
    let p = 1;
    let s = 0;

    while (n) {
        const digit = n % 10;

        p *= digit;
        s += digit;
        n = Math.floor(n / 10);
    }

    return num % (s + p) === 0;
};

