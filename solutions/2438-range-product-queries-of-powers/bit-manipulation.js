// time: O(m)
// space: O(n)

/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[]}
 */
const productQueries = (n, queries) => {
    const mod = 10 ** 9 + 7;
    const bins = [];
    const result = [];
    let rep = 1;

    while (n) {
        if (n & 1) bins.push(rep);
        n >>= 1;
        rep <<= 1;
    }

    for (let i = 1; i < bins.length; i++) bins[i] *= bins[i - 1];

    for (const [start, end] of queries) {
        const left = start > 0 ? bins[start - 1] : 1;
        const right = bins[end];
        result.push((right / left) % mod);
    }

    return result;
};
