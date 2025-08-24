// time: O(n)
// space: O(1)

/**
 * @param {number} a
 * @param {number[]} b
 * @return {number}
 */
const superPow = (a, b) => {
    let result = 1;
    const mod = 1337;
    const pow = (n, p) => {
        let result = 1;
        for (let i = 0; i < p; i++) result = (result * n) % mod;
        return result;
    };

    for (let i = b.length - 1; i >= 0; i--) {
        result *= pow(a, b[i]);
        result %= mod;
        a = pow(a, 10);
    }

    return result;
};

