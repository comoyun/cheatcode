/*
 * @title: Sorting
 * @time: O(n ^ 2)
 * @space: O(n)
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const singleNumber = nums => {
    const result = [];

    for (let i = 0; i < nums.length; i++) {
        let isUnique = true;
        for (let j = 0; j < nums.length; j++) {
            if (i !== j && nums[i] === nums[j]) {
                isUnique = false;
                break;
            }
        }
        if (isUnique) result.push(nums[i]);
    }
    return result;
};
