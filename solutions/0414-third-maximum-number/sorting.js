/*
 * @title: Sorting
 * @time: O(n)
 * @space: O(n)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const thirdMax = nums => {
    const uniq = [...new Set(nums)].sort((a, b) => b - a);
    return uniq.length > 2 ? uniq[2] : uniq[0];
};

