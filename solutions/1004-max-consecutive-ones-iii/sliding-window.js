/*
 * @title: Sliding Window
 * @time: O(n)
 * @space: O(1)
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const longestOnes = (nums, k) => {
    let left = 0,
        right = 0,
        count = 0,
        longest = 0;
    for (; right < nums.length; right++) {
        let length = right - left + 1;
        count += nums[right];
        while (count + k < length) {
            if (nums[left++]) count--;
            length = right - left + 1;
        }
        longest = Math.max(longest, Math.min(count + k, nums.length));
    }
    return longest;
};
