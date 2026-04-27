// time: O(m * n)
// space: O(m * n)

/**
 * @param {number[][]} grid
 * @return {boolean}
 */
const hasValidPath = grid => {
    const n = grid.length;
    const m = grid[0].length;
    const dirs = [
        [-1, 0, 'UP'],
        [0, -1, 'LEFT'],
        [1, 0, 'DOWN'],
        [0, 1, 'RIGHT'],
    ];
    const POSSIBLE_DIRS = {
        UP: [2, 3, 4],
        DOWN: [2, 5, 6],
        RIGHT: [1, 3, 5],
        LEFT: [1, 4, 6],
    };
    const visited = new Set();
    const dfs = (row, col, dir) => {
        const key = row * m + col;
        if (row >= n || col >= m || row < 0 || col < 0) return false;
        if (visited.has(key)) return false;
        visited.add(key);
        const cell = grid[row][col];
        if (dir) {
            let found = false;
            for (const d of POSSIBLE_DIRS[dir]) if (cell === d) found = true;
            if (!found) return false;
        }
        if (row === n - 1 && col === m - 1) return true;
        for (const [dr, dc, dx] of dirs) {
            if (POSSIBLE_DIRS[dx].includes(cell))
                if (dfs(row + dr, col + dc, dx)) return true;
        }
        return false;
    };
    return dfs(0, 0);
};
