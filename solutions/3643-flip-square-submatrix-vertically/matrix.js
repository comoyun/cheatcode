// time: O(k * k)
// space: O(1)

/**
 * @param {number[][]} grid
 * @param {number} x
 * @param {number} y
 * @param {number} k
 * @return {number[][]}
 */
const reverseSubmatrix = (grid, x, y, k) => {
    for (let row = 0; row < k / 2; row++)
        for (let col = 0; col < k; col++)
            [grid[x + row][y + col], grid[k + x - row - 1][y + col]] = [
                grid[k + x - row - 1][y + col],
                grid[x + row][y + col],
            ];

    return grid;
};
