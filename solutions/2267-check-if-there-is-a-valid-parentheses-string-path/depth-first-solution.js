// time: O(n * m * (m + n))
// space: O(n * m * (m + n))

/**
 * @param {character[][]} grid
 * @return {boolean}
 */
const hasValidPath = grid => {
    const n = grid.length;
    const m = grid[0].length;
    const memo = {};

    const dfs = (row, col, balance) => {
        const key = `${row},${col},${balance}`;

        if (key in memo) return memo[key];
        if (row === n || col === m) return (memo[key] = false);

        balance += grid[row][col] === '(' ? 1 : -1;

        if (row === n - 1 && col === m - 1) return balance === 0;

        if (balance < 0) return (memo[key] = false);

        if (dfs(row + 1, col, balance)) return true;
        if (dfs(row, col + 1, balance)) return true;

        return (memo[key] = false);
    };

    return dfs(0, 0, 0);
};
