// time: O(n)
// space: O(n)

/**
 * @param {string} s
 * @return {number}
 */
const numDecodings = s => {
    const memo = {};

    const dfs = idx => {
        if (idx === s.length) return 1;
        if (s[idx] === '0') return 0;
        if (idx in memo) return memo[idx];

        let count = dfs(idx + 1);
        if (idx + 1 < s.length && +s.slice(idx, idx + 2) <= 26)
            count += dfs(idx + 2);

        return (memo[idx] = count);
    };

    return dfs(0);
};
