// time: O(n)
// space: O(n)

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const firstStableIndex = (nums, k) => {
    const n = nums.length;
    const suffix = new Array(n).fill(Infinity);
    let max = 0;

    suffix[n - 1] = nums[n - 1];

    for (let i = n - 2; i >= 0; i--)
        suffix[i] = Math.min(suffix[i + 1], nums[i]);

    for (let i = 0; i < n; i++) {
        max = Math.max(max, nums[i]);
        if (max - suffix[i] <= k) return i;
    }

    return -1;
};
