// time: O(n * k)
// space: O(n * k)

/**
 * @param {number} n
 * @param {number} x
 * @return {number}
 */
const numberOfWays = (n, x) => {
    const mod = 10 ** 9 + 7;

    const powers = [];
    for (let i = 1; i ** x <= n; i++) powers.push(i ** x);

    const memo = new Map();

    const dfs = (num, idx) => {
        if (num === 0) return 1;
        if (num < 0 || idx >= powers.length) return 0;

        const key = `${num},${idx}`;
        if (memo.has(key)) return memo.get(key);

        let count = dfs(num, idx + 1);
        count += dfs(num - powers[idx], idx + 1);
        count %= mod;

        memo.set(key, count);
        return count;
    };

    return dfs(n, 0);
};
