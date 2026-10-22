// time: O(n)
// space: O(1)

/**
 * @param {number[]} nums
 * @return {number}
 */
const minOperations = nums => {
    const n = nums.length;
    let maxIdx = 0;
    let minIdx = 0;
    let count = 0;
    let dir = 0;

    for (let i = 1; i < n; i++) {
        const diff = nums[i] - nums[i - 1];

        if (nums[maxIdx] < nums[i]) maxIdx = i;
        if (nums[minIdx] > nums[i]) minIdx = i;

        if (Math.abs(diff) > 1) count++;
        else if (diff && !dir) dir = diff;
        else if (diff && dir !== diff) return -1;
    }

    if (count > 1) return -1;
    if (!count) return dir === -1 ? 1 : 0;
    if (dir === -1) return Math.min(n - maxIdx + 1, minIdx + 2);

    return Math.min(minIdx, n - minIdx + 2);
};
