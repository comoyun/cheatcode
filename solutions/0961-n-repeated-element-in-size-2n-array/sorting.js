// time: O(N log N)
// space: O(log N)

/**
 * @param {number[]} nums
 * @return {number}
 */
const repeatedNTimes = nums => {
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 1; i++)
        if (nums[i] === nums[i + 1]) return nums[i];
};
