// time: O(n log n)
// space: O(1)

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findMissingElements = nums => {
    const result = [];
    const n = nums.length;

    nums.sort((a, b) => a - b);

    for (let i = 1; i < n; i++)
        for (let j = nums[i - 1] + 1; j < nums[i]; j++) result.push(j);

    return result;
};
