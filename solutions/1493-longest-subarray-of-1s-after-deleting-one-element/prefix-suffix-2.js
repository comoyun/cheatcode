// time: O(n)
// space: O(n)

/**
 * @param {number[]} nums
 * @return {number}
 */
const longestSubarray = nums => {
    let result = 0;
    const prefix = [...nums];
    const suffix = [...nums];

    for (let i = 1; i < prefix.length; i++) {
        if (prefix[i] === 0) continue;
        prefix[i] += prefix[i - 1];
    }

    for (let i = suffix.length - 2; i >= 0; i--) {
        if (suffix[i] === 0) continue;
        suffix[i] += suffix[i + 1];
    }

    for (let i = 1; i < nums.length - 1; i++) {
        const length = prefix[i - 1] + suffix[i + 1];
        result = Math.max(result, length);
    }

    return result;
};
