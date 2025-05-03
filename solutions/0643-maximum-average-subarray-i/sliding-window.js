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
const findMaxAverage = (nums, k) => {
    let left = 0,
        right = 0,
        sum = 0,
        max = -Infinity;
    for (; right < nums.length; right++) {
        const length = right - left + 1;
        sum += nums[right];
        if (length === k) {
            max = Math.max(max, sum / k);
            sum -= nums[left++];
        }
    }
    return max;
};
