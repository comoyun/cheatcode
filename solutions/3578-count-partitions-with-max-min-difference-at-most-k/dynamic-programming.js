// time: O()
// space: O()

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const countPartitions = (nums, k) => {
    // WARNING: This soltuion gives TLE
    const n = nums.length;
    const MOD = 10 ** 9 + 7;

    const dp = Array(n + 1).fill(0);
    dp[n] = 1;

    for (let i = n - 1; i >= 0; i--) {
        let min = nums[i];
        let max = nums[i];

        for (let j = i; j < n; j++) {
            min = Math.min(min, nums[j]);
            max = Math.max(max, nums[j]);

            if (max - min > k) break;

            dp[i] = (dp[i] + dp[j + 1]) % MOD;
        }
    }

    return dp[0];
};
