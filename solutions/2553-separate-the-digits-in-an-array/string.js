// time: O(n * d)
// space: O(n * d)

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const separateDigits = nums => nums.join('').split('').map(Number);
