// time: O(n)
// space: O(n)

/**
 * @param {number[]} stoneValue
 * @return {string}
 */
const stoneGameIII = stoneValue => {
    const n = stoneValue.length;
    const memo = {};

    const dfs = i => {
        if (i in memo) return memo[i];
        if (i >= n) return 0;
        let max = stoneValue[i] - dfs(i + 1);

        if (i + 1 < n)
            max = Math.max(max, stoneValue[i] + stoneValue[i + 1] - dfs(i + 2));
        if (i + 2 < n)
            max = Math.max(
                max,
                stoneValue[i] +
                    stoneValue[i + 1] +
                    stoneValue[i + 2] -
                    dfs(i + 3)
            );

        return (memo[i] = max);
    };

    const result = dfs(0);

    return result < 0 ? 'Bob' : result > 0 ? 'Alice' : 'Tie';
};
