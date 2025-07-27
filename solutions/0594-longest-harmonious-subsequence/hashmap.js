// time: O(n)
// space: O(n)

/**
 * @param {number[]} nums
 * @return {number}
 */
const findLHS = nums => {
    const freq = {};
    let result = 0;
    for (const num of nums) freq[num] = (freq[num] || 0) + 1;
    for (const num of nums) {
        const next = num + 1;
        if (freq[next]) result = Math.max(result, freq[next] + freq[num]);
    }
    return result;
};
