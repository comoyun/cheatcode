// time: O(n)
// space: O(1)

/**
 * @param {number[]} nums
 * @return {number}
 */
const longestSubarray = nums => {
    let maxLen = 0,
        curr = 0,
        prev = 0,
        seenZero = false;
    for (let i = 0; i <= nums.length; i++) {
        let num = nums[i] ?? 0;
        if (num) {
            curr++;
            continue;
        }
        seenZero = seenZero || i < nums.length;
        maxLen = Math.max(maxLen, curr + prev);
        prev = curr;
        curr = 0;
    }
    return seenZero ? maxLen : nums.length - 1;
};
