/*
 * @title: Array
 * @time: O(n)
 * @space: O(1)
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDisappearedNumbers = nums => {
    for (let i = 0; i < nums.length; i++) {
        while (nums[i] !== nums[nums[i] - 1]) {
            const j = nums[i] - 1;
            [nums[i], nums[j]] = [nums[j], nums[i]];
        }
    }

    const result = [];
    for (let i = 0; i < nums.length; i++)
        if (nums[i] !== i + 1) result.push(i + 1);
    return result;
};

