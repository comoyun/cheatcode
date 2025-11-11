// time: O(mnl)
// space: O(mnl)

/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const findMaxForm = (strs, m, n) => {
    const memo = {};

    const dfs = (i, zeros, ones) => {
        if (i === strs.length) return 0;
        const key = `${i},${zeros},${ones}`;
        if (key in memo) return memo[key];

        const curr = strs[i];
        const z = curr.split('0').length - 1;
        const o = curr.split('1').length - 1;

        let take = 0;
        if (zeros + z <= m && ones + o <= n)
            take = 1 + dfs(i + 1, zeros + z, ones + o);

        const skip = dfs(i + 1, zeros, ones);

        return (memo[key] = Math.max(take, skip));
    };

    return dfs(0, 0, 0);
};

