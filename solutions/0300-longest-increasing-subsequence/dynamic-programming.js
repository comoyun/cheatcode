// time: O(n)
// space: O(1)

/**
 * @param {number[]} nums
 * @return {number}
 */
const lengthOfLIS = nums => {
    const n = nums.length;
    const dp = new Array(n).fill(0);
    for (let i = n - 1; i >= 0; i--) {
        let max = 1;
        for (let j = i + 1; j < n; j++)
            if (nums[i] < nums[j]) max = Math.max(max, 1 + dp[j]);
        dp[i] = max;
    }

    return Math.max(...dp);
};
