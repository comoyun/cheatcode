/*
 * @title: Sorting
 * @time: O(n log n)
 * @space: O(n)
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const maxSubsequence = (nums, k) => {
    return nums
        .map((val, idx) => [val, idx])
        .sort((a, b) => b[0] - a[0])
        .slice(0, k)
        .sort((a, b) => a[1] - b[1])
        .map(([val]) => val);
};

