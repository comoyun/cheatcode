// time: O(n * m)
// space: O(1)

/**
 * @param {number[][]} grid
 * @return {number}
 */
const islandPerimeter = grid => {
    const n = grid.length;
    const m = grid[0].length;
    const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    let result = 0;

    for (let row = 0; row < n; row++) {
        for (let col = 0; col < m; col++) {
            if (!grid[row][col]) continue;

            for (const [dr, dc] of dirs) {
                const nr = dr + row;
                const nc = dc + col;

                if (nr < 0 || nc < 0 || nr === n || nc === m || !grid[nr][nc])
                    result++;
            }
        }
    }

    return result;
};
