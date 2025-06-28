/*
 * @title: Math
 * @time: O(n)
 * @space: O(n)
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = (nums, k) => {
    const copy = [...nums];
    for (let i = 0; i < copy.length; i++)
        nums[(i + k) % nums.length] = copy[i];
    return nums;
};
