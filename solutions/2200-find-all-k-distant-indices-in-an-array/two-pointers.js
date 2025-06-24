/*
 * @title: Two Pointers
 * @time: O(n)
 * @space: O(1)
 */

/**
 * @param {number[]} nums
 * @param {number} key
 * @param {number} k
 * @return {number[]}
 */
const findKDistantIndices = (nums, key, k) => {
    const result = [];
    const n = nums.length;
    let right = 0,
        left = 0;
    for (let i = 0; i < n; i++) {
        if (nums[i] === key) {
            left = Math.max(right, i - k);
            right = Math.min(n - 1, i + k) + 1;
            for (let j = left; j < right; j++) 
                result.push(nums[j]);
        }
    }
    return result;
};

