// time: O(n * k)
// space: O(n * k)

/**
 * @param {number} n
 * @param {number} x
 * @return {number}
 */
const numberOfWays = (n, x) => {
    /* WARNING: This solution gives TLE on LC */
    const mod = 10 ** 9 + 7;
    const powers = [];

    for (let i = 1; ; i++) {
        const val = i ** x;
        if (val > n) break;
        powers.push(val);
    }

    const memo = new Map();

    const dfs = (num, start) => {
        const key = `${num},${start}`;

        if (num === 0) return 1;
        if (num < 0) return 0;
        if (memo.has(key)) return memo.get(key);

        let count = 0;
        for (let i = start; i < powers.length; i++) {
            count += dfs(num - powers[i], i + 1);
            count %= mod;
        }

        memo.set(key, count);
        return count;
    };

    return dfs(n, 0);
};
