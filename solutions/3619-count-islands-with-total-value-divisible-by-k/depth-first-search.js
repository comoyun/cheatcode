// time: O(n * m)
// space: O(n * m)

/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
const countIslands = (grid, k) => {
    const n = grid.length;
    const m = grid[0].length;
    const dirs = [
        [1, 0],
        [0, 1],
        [-1, 0],
        [0, -1],
    ];
    let result = 0;

    const dfs = (row, col) => {
        if (row < 0 || col < 0 || row === n || col === m) return 0;
        if (!grid[row][col]) return 0;
        let sum = grid[row][col];
        grid[row][col] = 0;

        for (const [dr, dc] of dirs) {
            const nr = dr + row;
            const nc = dc + col;
            sum += dfs(nr, nc);
        }

        return sum;
    };

    for (let row = 0; row < n; row++) {
        for (let col = 0; col < m; col++) {
            const sum = dfs(row, col);
            result += sum && sum % k === 0 ? 1 : 0;
        }
    }

    return result;
};

