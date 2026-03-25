// time: O(m * n)
// space: O(1)

/**
 * @param {number[][]} grid
 * @return {boolean}
 */
const canPartitionGrid = grid => {
    let total = 0;
    for (const row of grid) for (const col of row) total += col;

    let rowSum = 0;
    for (const row of grid) {
        for (const col of row) rowSum += col;
        if (2 * rowSum > total) break;
        if (2 * rowSum === total) return true;
    }

    let colSum = 0;
    for (let col = 0; col < grid[0].length; col++) {
        for (let row = 0; row < grid.length; row++) colSum += grid[row][col];
        if (2 * colSum > total) break;
        if (2 * colSum === total) return true;
    }

    return false;
};
