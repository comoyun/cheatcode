// time: O(n)
// space: O(n)

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const leftRightDifference = nums => {
    const n = nums.length;
    const prefix = new Array(n + 1).fill(0);
    const suffix = new Array(n + 1).fill(0);

    for (let i = 0; i < n; i++) prefix[i + 1] = prefix[i] + nums[i];
    for (let i = n - 1; i >= 0; i--) suffix[i] = suffix[i + 1] + nums[i];

    for (let i = 0; i < n; i++) {
        const p = prefix[i];
        const s = suffix[i + 1];
        nums[i] = Math.abs(p - s);
    }

    return nums;
};
