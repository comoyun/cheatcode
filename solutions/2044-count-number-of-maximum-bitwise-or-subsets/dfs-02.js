// time: O(2^n)
// space: O(n)

/**
 * @param {number[]} nums
 * @return {number}
 */
const countMaxOrSubsets = nums => {
    let max = 0;
    for (const num of nums) max |= num;

    const dfs = (i, or) => {
        if (or === max) return 2 ** (nums.length - i);
        if (i === nums.length) return 0;
        return dfs(i + 1, or) + dfs(i + 1, or | nums[i]);
    };

    return dfs(0, 0);
};
