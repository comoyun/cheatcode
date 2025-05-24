/*
 * @title: Array
 * @time: O(n)
 * @space: O(1)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const firstMissingPositive = nums => {
    let i = 0;
    while (i < nums.length) {
        if (
            nums[i] > 0 &&
            nums[i] <= nums.length &&
            nums[nums[i] - 1] !== nums[i]
        )
            [nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]];
        else i++;
    }

    for (let i = 0; i < nums.length; i++) if (nums[i] !== i + 1) return i + 1;

    return nums.length + 1;
};
