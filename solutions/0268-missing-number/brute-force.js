// time: O(n^2)
// space: O(1)

/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = nums => {
    for (let i = 0; i < nums.length; i++)
        if (nums.indexOf(i) === -1) return i;
    return nums.length;
};
