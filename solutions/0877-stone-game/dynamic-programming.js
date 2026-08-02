// time: O(n * n)
// space: O(n * n)

/**
 * @param {number[]} piles
 * @return {boolean}
 */
const stoneGame = piles => {
    const n = piles.length;
    const memo = {};

    const dfs = (left, right) => {
        const key = `${left},${right}`;

        if (key in memo) return memo[key];
        if (left === right) return piles[left];

        return (memo[key] = Math.max(
            piles[left] - dfs(left + 1, right),
            piles[right] - dfs(left, right - 1)
        ));
    };

    return dfs(0, n - 1) > 0;
};
