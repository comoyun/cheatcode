// time: O(n * m)
// space: O(n * m)

/**
 * @param {number[][]} grid
 * @return {number}
 */
const closedIsland = grid => {
    const n = grid.length;
    const m = grid[0].length;
    const visited = new Array(n * m).fill(false);
    const dirs = [
        [1, 0],
        [0, 1],
        [0, -1],
        [-1, 0],
    ];
    let result = 0;
    let out = false;

    const dfs = (row, col) => {
        for (const [dr, dc] of dirs) {
            const nr = dr + row;
            const nc = dc + col;
            if (nr < 0 || nc < 0 || nr === n || nc === m) {
                out = true;
                continue;
            }
            if (grid[nr][nc]) continue;
            const idx = nr * m + nc;
            if (visited[idx]) continue;
            visited[idx] = true;
            dfs(nr, nc);
        }
    };

    for (let row = 0; row < n; row++) {
        for (let col = 0; col < m; col++) {
            const idx = row * m + col;
            if (visited[idx]) continue;
            if (grid[row][col]) continue;
            out = false;
            visited[idx] = true;
            dfs(row, col);
            if (!out) result++;
        }
    }

    return result;
};

