// time: O(n * m * v)
// space: O(n * m * v)

/**
 * @param {number[][]} grid
 * @return {number}
 */
const minCost = grid => {
    const n = grid.length;
    const m = grid[0].length;
    const memo = new Map();

    const dfs = (row, col, xor) => {
        if (row >= n || col >= m) return Infinity;

        xor ^= grid[row][col];

        if (row === n - 1 && col === m - 1) return xor;

        const key = `${row * m + col},${xor}`;
        if (memo.has(key)) return memo.get(key);

        const result = Math.min(dfs(row + 1, col, xor), dfs(row, col + 1, xor));

        memo.set(key, result);
        return result;
    };

    return dfs(0, 0, 0);
};
