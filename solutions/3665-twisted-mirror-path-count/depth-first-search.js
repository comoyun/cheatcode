// time: O(n * m)
// space: O(n * m)

/**
 * @param {number[][]} grid
 * @return {number}
 */
const uniquePaths = grid => {
    const n = grid.length;
    const m = grid[0].length;
    const MOD = 10 ** 9 + 7;
    const mirror = [1, 0];
    const dir = [
        [1, 0],
        [0, 1],
    ];
    const memo = Array.from({ length: n }, () =>
        Array.from({ length: m }, () => [-1, -1])
    );

    const dfs = (row, col, d) => {
        if (row === n || col === m) return 0;
        if (row === n - 1 && col === m - 1) return 1;
        if (memo[row][col][d] !== -1) return memo[row][col][d];

        const cell = grid[row][col];
        let count = 0;

        if (cell) {
            const m = mirror[d];
            const [dr, dc] = dir[m];
            count += dfs(row + dr, col + dc, m);
            count %= MOD;
        } else {
            count += dfs(row + dir[0][0], col + dir[0][1], 0);
            count %= MOD;
            count += dfs(row + dir[1][0], col + dir[1][1], 1);
            count %= MOD;
        }

        return (memo[row][col][d] = count);
    };

    return dfs(0, 0, 0);
};
