/*
 * @title: Type
 * @time: O(n∗k∗Log(n))
 * @space: O(n)
 */

/**
 * @param {number[][]} events
 * @param {number} k
 * @return {number}
 */
const maxValue = (events, k) => {
    events.sort((a, b) => a[1] - b[1]);
    const n = events.length;
    const dp = Array(n)
        .fill()
        .map(() => Array(k + 1).fill(0));

    for (let i = 0; i < n; i++) {
        const [start, end, val] = events[i];

        let low = 0,
            high = i - 1;
        let last = -1;
        while (low <= high) {
            const mid = Math.floor((low + high) / 2);
            if (events[mid][1] < start) {
                last = mid;
                low = mid + 1;
                continue;
            }
            high = mid - 1;
        }

        if (i > 0) for (let j = 0; j <= k; j++) dp[i][j] = dp[i - 1][j];

        for (let j = 1; j <= k; j++) {
            if (last !== -1) {
                dp[i][j] = Math.max(dp[i][j], dp[last][j - 1] + val);
                continue;
            }
            dp[i][j] = Math.max(dp[i][j], val);
        }
    }

    return dp[n - 1][k];
};
