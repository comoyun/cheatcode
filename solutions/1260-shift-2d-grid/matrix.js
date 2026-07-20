// time: O(n * m)
// space: O(n * m)

/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
const shiftGrid = (grid, k) => {
    const n = grid.length;
    const m = grid[0].length;
    const linear = new Array(n * m).fill(0);

    for (let row = 0; row < n; row++)
        for (let col = 0; col < m; col++)
            linear[row * m + col] = grid[row][col];

    k %= n * m;

    for (let i = 0; i < n * m; i++) {
        const idx = (i + k) % (n * m);
        grid[Math.floor(idx / m)][idx % m] = linear[i];
    }

    return grid;
};
