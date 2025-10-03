// time: O(n log n)
// space: O(n)

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const frequencySort = nums => {
    const freq = {};
    for (const n of nums) freq[n] = (freq[n] || 0) + 1;

    return nums.sort((a, b) =>
        freq[a] === freq[b] ? b - a : freq[a] - freq[b]
    );
};

