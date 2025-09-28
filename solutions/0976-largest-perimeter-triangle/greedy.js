// time: O()
// space: O()

/**
 * @param {number[]} nums
 * @return {number}
 */
const largestPerimeter = nums => {
    nums.sort((a, b) => a - b);
    for (let i = nums.length - 1; i >= 2; i--)
        if (nums[i - 2] + nums[i - 1] > nums[i])
            return nums[i - 2] + nums[i - 1] + nums[i];

    return 0;
};

