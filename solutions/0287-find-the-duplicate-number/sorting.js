/*
 * @title: Sorting
 * @time: O(n log n)
 * @space: O(n)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const findDuplicate = nums => {
    nums.sort((a, b) => a - b);
    for (let i = 1; i < nums.length; i++)
        if (nums[i] === nums[i - 1]) return nums[i];
    return -1;
};
