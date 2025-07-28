// time: O(2^n)
// space: O(n)

/**
 * @param {number[]} nums
 * @return {number}
 */
const countMaxOrSubsets = nums => {
    let max = 0;
    let result = 0;
    for (const num of nums) max |= num;
    const dfs = (idx = 0, or = 0) => {
        if (idx >= nums.length) {
            if (or === max) result++;
            return;
        }

        dfs(idx + 1, or);
        dfs(idx + 1, or | nums[idx]);
    };
    dfs();
    return result;
};
