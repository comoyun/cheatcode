/*
 * @title: Greedy
 * @time: O(n)
 * @space: O(1)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const maximumDifference = nums => {
    let min = nums[0],
        result = -1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > min) {
            result = Math.max(result, nums[i] - min);
            continue;
        }
        min = nums[i];
    }

    return result;
};
