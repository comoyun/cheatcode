// time: O(N)
// space: O(N)

/**
 * @param {number} n
 * @return {number}
 */
const numOfWays = n => {
    const MOD = 10 ** 9 + 7;
    const memo = {};

    const dfs = (row, p) => {
        if (row === 1) return 6;

        const key = `${row},${p}`;
        if (key in memo) return memo[key];

        let res;
        if (p === 0) res = (2 * dfs(row - 1, 0) + 2 * dfs(row - 1, 1)) % MOD;
        else res = (2 * dfs(row - 1, 0) + 3 * dfs(row - 1, 1)) % MOD;

        return (memo[key] = res);
    };

    return (dfs(n, 0) + dfs(n, 1)) % MOD;
};
