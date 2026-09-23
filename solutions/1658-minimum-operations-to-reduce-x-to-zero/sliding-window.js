// time: O(n)
// space: O(1)

/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
const minOperations = (nums, x) => {
    const n = nums.length;
    const total = nums.reduce((prev, curr) => prev + curr, 0);
    const target = total - x;
    let left = 0;
    let right = 0;
    let sum = 0;
    let result = 0;

    if (!target) return n;

    for (; right < n; right++) {
        sum += nums[right];

        while (sum > target) sum -= nums[left++];
        if (sum === target) result = Math.max(result, right - left + 1);
    }

    return n - (result || n + 1);
};
