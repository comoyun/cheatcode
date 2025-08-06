// time: O(n^2)
// space: O(n)

/**
 * @param {number} n
 * @return {number}
 */
const integerBreak = n => {
    const memo = {};
    const dfs = sum => {
        if (sum === n) return 1;
        if (sum > n) return 0;
        if (sum in memo) return memo[sum];

        let best = 0;
        for (let i = 1; i < n; i++) {
            const next = dfs(sum + i);
            best = Math.max(best, i * next);
        }

        return (memo[sum] = best);
    };
    return dfs(0);
};


