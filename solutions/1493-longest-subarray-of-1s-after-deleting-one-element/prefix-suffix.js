/*
 * @title: Prefix + Suffix
 * @time: O(n)
 * @space: O(n)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const longestSubarray = nums => {
    const length = nums.length,
        prefix = Array(length).fill(0),
        suffix = Array(length).fill(0);
    let longest = 0;

    for (let i = 0; i < length; i++)
        if (nums[i]) prefix[i] = (i > 0 ? prefix[i - 1] : 0) + 1;

    for (let i = length - 1; i >= 0; i--)
        if (nums[i]) suffix[i] = (i < length - 1 ? suffix[i + 1] : 0) + 1;

    for (let i = 0; i < length; i++) {
        if (nums[i]) {
            longest = Math.max(longest, prefix[i] - 1);
            continue;
        }
        let left = 0;
        if (i > 0) left = prefix[i - 1];
        let right = 0;
        if (i < length - 1) right = suffix[i + 1];
        longest = Math.max(longest, left + right);
    }

    return longest;
};

