// time: O(n)
// space: O(1)

/**
 * @param {number[]} nums
 * @return {number}
 */
const minimumDeletions = nums => {
    const n = nums.length;
    let min = 0;
    let max = 0;

    for (let i = 0; i < n; i++) {
        if (nums[min] > nums[i]) min = i;
        if (nums[max] < nums[i]) max = i;
    }

    if (min > max) [min, max] = [max, min];

    return Math.min(max + 1, min + 1 + n - max, n - min);
};

