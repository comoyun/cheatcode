/*
 * @title: Sorting
 * @time: O(n log n)
 * @space: O(n)
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const singleNumber = nums => {
    nums.sort((a, b) => a - b);
    const result = [];
    let i = 0;
    while (i < nums.length) {
        let count = 1;
        while (i + count < nums.length && nums[i + count] === nums[i]) count++;
        if (count === 1) result.push(nums[i]);
        i += count;
    }
    return result;
};
