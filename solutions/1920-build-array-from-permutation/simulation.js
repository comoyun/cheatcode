/*
 * @title: Build Array from Permutation
 * @time: O(n)
 * @space: O(n)
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const buildArray = nums => nums.map(el => nums[el]);
