// time: O(n)
// space: O(1)

/**
 * @param {number[]} nums
 * @return {number}
 */
const longestSubarray = nums => {
    let left = 0;
    let right = 0;
    let result = 0;
    let zeros = 0;

    for (; right < nums.length; right++) {
        if (!nums[right] && !zeros) zeros = 1;
        else if (!nums[right]) while (nums[left++]);
        result = Math.max(result, right - left);
    }

    return result;
};
