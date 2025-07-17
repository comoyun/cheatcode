/*
 * @title: Dynamic Programming
 * @time: O(k * k + n * k)
 * @space: O(k * k)
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const maximumLength = (nums, k) => {
    const dp = Array.from({ length: k }, () => new Array(k).fill(0));
    let res = 0;
    for (const num of nums) {
        const mod = num % k;
        for (let prev = 0; prev < k; prev++) {
            dp[prev][mod] = dp[mod][prev] + 1;
            res = Math.max(res, dp[prev][mod]);
        }
    }
    return res;
};
