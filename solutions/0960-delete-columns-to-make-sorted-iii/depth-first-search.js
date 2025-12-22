// time: O(N^2 * M)
// space: O(1)

/**
 * @param {string[]} strs
 * @return {number}
 */
const minDeletionSize = strs => {
    const m = strs.length;
    const n = strs[0].length;
    const memo = new Map();

    const ok = (i, j) => {
        for (let r = 0; r < m; r++) if (strs[r][i] > strs[r][j]) return false;
        return true;
    };

    const dfs = (prev, cur) => {
        if (cur === n) return 0;

        const key = `${prev},${cur}`;
        if (memo.has(key)) return memo.get(key);

        let res = dfs(prev, cur + 1);

        if (prev === -1 || ok(prev, cur))
            res = Math.max(res, 1 + dfs(cur, cur + 1));

        memo.set(key, res);
        return res;
    };

    const kept = dfs(-1, 0);
    return n - kept;
};

