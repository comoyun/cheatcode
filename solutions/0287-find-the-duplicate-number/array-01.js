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
    for (let i = 0; i < nums.length; i++) {
        const num = Math.abs(nums[i]);
        if (nums[num] < 0) return num;
        nums[num] *= -1;
    }
    return -1;
};
