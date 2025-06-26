/*
 * @title: Greedy
 * @time: O(n)
 * @space: O(1)
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const longestSubsequence = (s, k) => {
    let bin = '';
    for (let i = s.length - 1; i >= 0; i--) {
        const nextBin = s[i] + bin;
        if (parseInt(nextBin, 2) > k) continue;
        bin = nextBin;
    }
    return bin.length;
};
