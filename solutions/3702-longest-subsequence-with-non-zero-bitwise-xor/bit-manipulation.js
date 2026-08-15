// time: O(n)
// space: O(1)

/**
 * @param {number[]} nums
 * @return {number}
 */
const longestSubsequence = nums => {
    const n = nums.length;
    let result = n;
    let xor = 0;
    let zeroes = 0;

    for (let i = 0; i < n; i++) {
        const num = nums[i];
        if (num === 0) zeroes++;
        else xor ^= num;
    }

    if (xor) return result;
    if (zeroes === n) return 0;
    return result - 1;
};
