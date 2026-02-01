// time: O(N * N)
// space: O(1)

/**
 * @param {number[]} nums
 * @return {number}
 */
const minimumCost = nums => {
    let result = 0;

    for (let i = 1; i < nums.length - 1; i++)
        for (let j = i + 1; j < nums.length; j++)
            result = Math.min(result, nums[0] + nums[i] + nums[j]);

    return result;
};
