/*
 * @title: Dynamic Programming
 * @time: O(n * n)
 * @space: O(n * k)
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const maximumLength = (nums, k) => {
    const n = nums.length;
    let result = 0;
    const dp = Array.from({ length: n }, () => {
        return {};
    });

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            const mod = (nums[i] + nums[j]) % k;
            dp[j][mod] = dp[j][mod] || 1;
            dp[i][mod] = Math.max(dp[i][mod] || 0, 1 + dp[j][mod]);
            result = Math.max(result, dp[i][mod]);
        }
    }

    return result;
};
