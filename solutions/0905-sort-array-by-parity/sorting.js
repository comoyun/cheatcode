/*
 * @title: Sorting
 * @time: O(n log n)
 * @space: O(1)
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortArrayByParity = nums => {
    nums.sort((a, b) => (a & 1) - (b & 1));
    return nums;
};

