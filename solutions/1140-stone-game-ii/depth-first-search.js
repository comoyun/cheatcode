// time: O(n^2)
// space: O(n^2)

/**
 * @param {number[]} piles
 * @return {number}
 */
const stoneGameII = piles => {
    const n = piles.length;
    const memo = {};

    const dfs = (idx, m) => {
        const key = idx + ',' + m;
        let result = -Infinity;
        let sum = 0;

        if (key in memo) return memo[key];

        for (let x = 1; x <= 2 * m; x++) {
            if (idx + x - 1 >= n) return (memo[key] = sum);
            sum += piles[idx + x - 1];
            result = Math.max(result, sum - dfs(idx + x, Math.max(m, x)));
        }

        return (memo[key] = result);
    };

    const total = piles.reduce((a, b) => a + b, 0);
    return (total + dfs(0, 1)) / 2;
};
