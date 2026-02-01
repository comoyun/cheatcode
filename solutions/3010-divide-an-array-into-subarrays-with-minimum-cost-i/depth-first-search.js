// time: O(N)
// space: O(N)

/**
 * @param {number[]} nums
 * @return {number}
 */
const minimumCost = nums => {
    const memo = {};

    const dfs = (i, k) => {
        if (k === 0) return 0;
        if (i >= nums.length) return Infinity;

        const key = i + ',' + k;
        if (key in memo) return memo[key];

        return (memo[key] = Math.min(
            dfs(i + 1, k),
            nums[i] + dfs(i + 1, k - 1)
        ));
    };

    return nums[0] + dfs(1, 2);
};
