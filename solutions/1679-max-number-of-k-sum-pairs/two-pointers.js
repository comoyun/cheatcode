/*
 * @title: Two Pointers
 * @time: O(n log n)
 * @space: O(1)
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const maxOperations = (nums, k) => {
    nums.sort((a, b) => a - b);
    let left = 0,
        right = nums.length - 1,
        operations = 0;
    while (left < right) {
        const sum = nums[left] + nums[right];
        if (sum > k) {
            right--;
            continue;
        }
        if (sum < k) {
            left++;
            continue;
        }
        operations++;
        left++;
        right--;
    }
    return operations;
};

