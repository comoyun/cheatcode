// time: O(m * n)
// space: O(m * n)

/**
 * @param {character[][]} grid
 * @return {boolean}
 */
const containsCycle = grid => {
    const n = grid.length;
    const m = grid[0].length;

    const visited = Array.from({ length: n }, () => Array(m).fill(false));

    const dirs = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
    ];

    const dfs = (r, c, pr, pc, char) => {
        if (visited[r][c]) return true;
        visited[r][c] = true;

        for (const [dr, dc] of dirs) {
            const nr = r + dr;
            const nc = c + dc;

            if (
                nr >= 0 &&
                nc >= 0 &&
                nr < n &&
                nc < m &&
                grid[nr][nc] === char &&
                !(nr === pr && nc === pc) &&
                dfs(nr, nc, r, c, char)
            )
                return true;
        }

        return false;
    };

    for (let i = 0; i < n; i++)
        for (let j = 0; j < m; j++)
            if (!visited[i][j]) if (dfs(i, j, -1, -1, grid[i][j])) return true;

    return false;
};

