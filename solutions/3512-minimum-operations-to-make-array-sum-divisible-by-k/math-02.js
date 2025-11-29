// time: O(n)
// space: O(1)

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const minOperations = (nums, k) => {
    const sum = nums.reduce((prev, curr) => prev + curr, 0);
    return sum % k;
};
