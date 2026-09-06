// time: O(n * m)
// space: O(n * m)

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
const numDistinct = (s, t) => {
    const m = s.length;
    const n = t.length;
    const dp = Array.from({ length: m }, () => new Array(n).fill(-1));

    const dfs = (i, j) => {
        if (j === n) return 1;
        if (i === m) return 0;
        if (dp[i][j] !== -1) return dp[i][j];

        let count = 0;
        if (s[i] === t[j]) count += dfs(i + 1, j + 1);
        count += dfs(i + 1, j);

        return (dp[i][j] = count);
    };

    return dfs(0, 0);
};

