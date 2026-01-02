// time: O(N)
// space: O(1)

/**
 * @param {number[]} nums
 * @return {number}
 */
const repeatedNTimes = nums => {
    for (let i = 2; i < nums.length; i++)
        if (nums[i] === nums[i - 1] || nums[i] === nums[i - 2]) return nums[i];
};
