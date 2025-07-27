// time: O(n)
// space: O(n)

/**
 * @param {number} n
 * @return {number}
 */
const numTilings = n => {
    const MOD = 1e9 + 7;
    const memo = new Map();

    const backtrack = (n, prev) => {
        if (!n && !prev) return 1;
        if (n < 0) return 0;

        const key = `${n},${prev}`;
        if (memo.has(key)) return memo.get(key);

        let res = 0;
        if (prev === 0)
            res =
                (backtrack(n - 1, 0) +
                    backtrack(n - 2, 0) +
                    backtrack(n - 2, 1) +
                    backtrack(n - 2, 2)) %
                MOD;
        else if (prev === 1)
            res = (backtrack(n - 1, 0) + backtrack(n - 1, 2)) % MOD;
        else if (prev === 2)
            res = (backtrack(n - 1, 0) + backtrack(n - 1, 1)) % MOD;

        memo.set(key, res);
        return res;
    };

    return backtrack(n, 0);
};
