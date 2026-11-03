// time: O(n)
// space: O(1)

/**
 * @param {number[]} nums
 * @return {number}
 */
const minMoves = nums => {
    const n = nums.length;
    let max = nums[0];
    let sum = 0;

    for (let i = 0; i < n; i++) {
        max = Math.max(max, nums[i]);
        sum += nums[i];
    }

    return max * n - sum;
};
