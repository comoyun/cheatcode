// time: O(n)
// space: O(1)

/**
 * @param {number[]} nums
 * @return {number}
 */
const longestSubarray = nums => {
    let max = nums.reduce((acc, curr) => Math.max(acc, curr), 0);
    let result = 0;
    let streak = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === max) streak++;
        else streak = 0;

        result = Math.max(result, streak);
    }
    return result;
};
