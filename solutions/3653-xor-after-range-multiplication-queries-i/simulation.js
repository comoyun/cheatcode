// time: O(q * n)
// space: O(1)

/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number}
 */
const xorAfterQueries = (nums, queries) => {
    const MOD = 10 ** 9 + 7;
    for (const [left, right, k, v] of queries)
        for (let i = left; i <= right; i += k) nums[i] = (nums[i] * v) % MOD;
    return nums.reduce((prev, curr) => prev ^ curr, 0);
};

