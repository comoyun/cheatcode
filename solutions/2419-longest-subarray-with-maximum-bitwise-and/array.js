// time: O(n)
// space: O(1)

/**
 * @param {number[]} nums
 * @return {number}
 */
const longestSubarray = nums => {
    let max = 0;
    let result = 0;
    let len = 0;
    for (const num of nums) max = Math.max(max, num);

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === max) len++;
        else len = 0;
        result = Math.max(result, len);
    }
    return result;
};
