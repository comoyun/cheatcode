// time: O(1)
// space: O(1)

/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = nums => {
    const n = nums.length;
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = nums.reduce((a, b) => a + b, 0);
    return expectedSum - actualSum;
};
