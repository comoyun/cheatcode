// time: O(1)
// space: O(1)

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const hasIncreasingSubarrays = (nums, k) => {
    if (k === 1) return true;
    const n = nums.length;
    const prefix = new Array(n).fill(1);
    const postfix = new Array(n).fill(1);

    for (let i = 1; i < n; i++)
        prefix[i] = nums[i] > nums[i - 1] ? prefix[i - 1] + 1 : 1;

    for (let i = n - 2; i >= 0; i--)
        postfix[i] = nums[i] < nums[i + 1] ? postfix[i + 1] + 1 : 1;

    for (let i = 0; i + 1 < n; i++)
        if (prefix[i] >= k && postfix[i + 1] >= k) return true;

    return false;
};

