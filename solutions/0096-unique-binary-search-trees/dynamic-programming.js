/*
 * @title: Dynamic Programming
 * @time: O(n ^ 2)
 * @space: O(n)
 */

/**
 * @param {number} n
 * @return {number}
 */
const numTrees = n => {
    const dp = new Array(n + 1).fill(0);
    dp[0] = dp[1] = 1;
    for (let i = 2; i <= n; i++)
        for (let j = 0; j < i; j++)
            dp[i] += dp[j] * dp[i - j - 1];
    return dp[n];
};
