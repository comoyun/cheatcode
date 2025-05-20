/*
 * @title: Array
 * @time: O(n)
 * @space: O(n)
 */

/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {boolean}
 */
const isZeroArray = (nums, ranges) => {
    const diff = new Array(nums.length + 1).fill(0);

    for (const [l, r] of ranges) {
        diff[l]++;
        diff[r + 1]--;
    }

    diff.reduce((sum, cur, idx) => diff[idx] = sum + cur, 0);

    for (let i = 0; i < nums.length; i++) {
        const rem = nums[i] - diff[i];
        if (rem) return false;
    }

    return true;
};
