/*
 * @title: Array
 * @time: O(n)
 * @space: O(1)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const findDuplicate = nums => {
    while (nums[0] !== nums[nums[0]]) {
        const next = nums[0];
        [nums[0], nums[next]] = [nums[next], nums[0]];
    }
    return nums[0];
};

