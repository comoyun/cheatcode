/*
 * @title Brute Force
 * @time: O(n ^ 2)
 * @space: O(1)
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const countSubarrays = (nums, k) => {
    /* TLE. Just for intuition. */
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        let sum = 0;
        for (let j = i; j < nums.length; j++) {
            const length = j - i + 1;
            sum += nums[j];
            if (sum * length >= k) break;
            count++;
        }
    }
    return count;
};
