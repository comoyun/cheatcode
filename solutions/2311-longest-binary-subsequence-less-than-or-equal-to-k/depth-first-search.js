/*
 * @title: Brute Force DFS
 * @time: O(n * 2^n)
 * @space: O(n)
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const longestSubsequence = (s, k) => {
    /* WARNING: This won't pass on LeetCode */
    const dfs = (idx, bin = '') => {
        const b10 = parseInt(bin, 2);
        if (b10 > k) return 0;
        if (idx >= s.length) return bin.length;
        return Math.max(
            dfs(idx + 1, bin + s[idx]),
            dfs(idx + 1, bin),
            bin.length
        );
    };

    return dfs(0);
};
