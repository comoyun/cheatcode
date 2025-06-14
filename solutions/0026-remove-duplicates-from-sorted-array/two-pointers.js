/*
 * @title: Two Pointers
 * @time: O(n)
 * @space: O(1)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = nums => {
    let left = 0,
        right = 1;
    for (; right < nums.length; right++) {
        const num = nums[right];
        if (num !== nums[left]) nums[++left] = num;
    }
    return left + 1;
};
