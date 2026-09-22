// time: O(n * n)
// space: O(1)

/**
 * @param {number[][]} grid
 * @return {number}
 */
const projectionArea = grid => {
    const n = grid.length;
    let result = 0;

    for (let row = 0; row < n; row++) {
        let max1 = 0;
        let max2 = 0;

        for (let col = 0; col < n; col++) {
            max1 = Math.max(max1, grid[row][col]);
            max2 = Math.max(max2, grid[col][row]);
            result += grid[row][col] ? 1 : 0;
        }

        result += max1 + max2;
    }

    return result;
};
