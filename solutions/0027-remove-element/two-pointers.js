/*
 * @title: Two Pointers
 * @time: O(n)
 * @space: O(1)
 */

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = (nums, val) => {
    let left = 0, right = 0;
    for (; right < nums.length; right++) {
        const num = nums[right];
        if (num === val) continue;
        nums[left++] = num;
    }
    return left;
};
