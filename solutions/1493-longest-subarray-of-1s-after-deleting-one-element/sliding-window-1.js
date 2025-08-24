// time: O(n)
// space: O(1)

/**
 * @param {number[]} nums
 * @return {number}
 */
const longestSubarray = nums => {
    let left = 0, right = 0, count = 0, longest = 0;
    for (; right < nums.length; right++) {
        let length = right - left + 1;
        count += nums[right];
        if (count === length) {
            longest = Math.max(longest, count - 1);
            continue;
        }
        while (count + 1 < length) {
            count -= nums[left++];
            length = right - left + 1;
        }
        longest = Math.max(longest, count);
    }
    return longest;
};
