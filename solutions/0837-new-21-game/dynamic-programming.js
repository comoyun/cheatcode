// time: O(n)
// space: O(n)

/**
 * @param {number} n
 * @param {number} k
 * @param {number} maxPts
 * @return {number}
 */
const new21Game = (n, k, maxPts) => {
    if (k === 0 || n >= maxPts + k - 1) return 1;

    const dp = new Array(n + 1).fill(0);
    dp[0] = 1;

    let sum = 1;
    let result = 0;

    for (let i = 1; i <= n; i++) {
        dp[i] = sum / maxPts;

        if (i < k) sum += dp[i];
        else result += dp[i];

        if (i - maxPts >= 0) sum -= dp[i - maxPts];
    }

    return result;
};
