// time: O()
// space: O()

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
const numberOfSets = (n, k) => {
    const dp = new Array(n * (k + 1)).fill(-1);
    const MOD = 10 ** 9 + 7;

    const dfs = (start, count) => {
        if (start === n) return 0;
        if (count === 0) return 1;

        const idx = k * start + count;

        if (dp[idx] !== -1) return dp[idx];

        let result = 0;

        for (let i = start + 1; i < n; i++) {
            result += dfs(i, count - 1);
            result %= MOD;
        }

        result += dfs(start + 1, count);
        result %= MOD;

        return (dp[idx] = result);
    };

    return dfs(0, k);
};
