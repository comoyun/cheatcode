// time: O(n^2 log n + q)
// space: O(n^2 log n)

/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[]}
 */
const productQueries = (n, queries) => {
    /* WARNING: This solution won't pass on LC */

    const mod = 10 ** 9 + 7;
    const queue = [[n, []]];
    const result = [];
    const set = new Set();
    let powers = [];

    while (queue.length) {
        const [rem, path] = queue.shift();
        if (set.has(rem)) continue;
        if (rem === 0) {
            powers = path;
            break;
        }
        if (rem < 0) continue;
        set.add(rem);
        for (let i = 0; i < 31; i++) {
            const num = 1 << i;
            queue.push([rem - num, [...path, num]]);
        }
    }

    for (let i = 1; i < powers.length; i++) powers[i] *= powers[i - 1];

    for (const [start, end] of queries) {
        const left = start > 0 ? powers[start - 1] : 1;
        const right = powers[end];
        result.push((right / left) % mod);
    }

    return result;
};
