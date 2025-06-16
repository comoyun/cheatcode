/*
 * @title: Brute Force
 * @time: O(n ^ 2)
 * @space: O(1)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const maximumDifference = nums => {
    let result = -1;
    for (let i = 0; i < nums.length; i++) {
        const min = nums[i];
        for (let j = i + 1; j < nums.length; j++) {
            const max = nums[j];
            if (max > min) result = Math.max(result, max - min);
        }
    }
    return result;
};
