// time: O(n ^ 2)
// space: O(1)

/**
 * @param {number[]} nums
 * @param {number} key
 * @param {number} k
 * @return {number[]}
 */
const findKDistantIndices = (nums, key, k) => {
    const result = [];
    const n = nums.length;
    for (let i = 0; i < n; i++)
        for (let j = 0; j < n; j++)
            if (nums[j] === key && Math.abs(j - i) <= k) 
                result.push(nums[i]);
    return result;
};

