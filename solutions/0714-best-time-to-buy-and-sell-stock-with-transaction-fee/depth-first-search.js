// time: O(n)
// space: O(n)

/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
const maxProfit = (prices, fee) => {
    const n = prices.length;
    const memo = new Map();

    const dfs = (i, holding) => {
        if (i === n) return 0;
        const key = `${i},${holding}`;
        if (memo.has(key)) return memo.get(key);

        let res = dfs(i + 1, holding);

        if (holding) res = Math.max(res, prices[i] - fee + dfs(i + 1, 0));
        else res = Math.max(res, -prices[i] + dfs(i + 1, 1));

        memo.set(key, res);
        return res;
    };

    return dfs(0, 0);
};
