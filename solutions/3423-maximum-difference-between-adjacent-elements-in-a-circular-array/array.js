/*
 * @title: Array
 * @time: O(n)
 * @space: O(1)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const maxAdjacentDistance = nums => {
    const n = nums.length;
    let result = Math.abs(nums[0] - nums[n - 1]);
    for (let i = 1; i < n; i++)
        result = Math.max(result, Math.abs(nums[i] - nums[i - 1]));
    return result;
};
