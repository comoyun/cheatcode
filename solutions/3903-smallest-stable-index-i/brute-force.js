// time: O(n)
// space: O(1)

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const firstStableIndex = (nums, k) => {
    const n = nums.length;
    let max = 0;

    for (let i = 0; i < n; i++) {
        let min = nums[i];
        max = Math.max(max, nums[i]);
        for (let j = i; j < n; j++) min = Math.min(min, nums[j]);
        if (max - min <= k) return i;
    }

    return -1;
};
