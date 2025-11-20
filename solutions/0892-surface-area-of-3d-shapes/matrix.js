// time: O(n * n)
// space: O(1)

/**
 * @param {number[][]} grid
 * @return {number}
 */
const surfaceArea = grid => {
    const n = grid.length;
    let result = 0;

    for (let row = 0; row < n; row++) {
        for (let col = 0; col < n; col++) {
            const curr = grid[row][col];
            const top = row - 1 >= 0 ? grid[row - 1][col] : 0;
            const right = col + 1 < n ? grid[row][col + 1] : 0;
            const left = col - 1 >= 0 ? grid[row][col - 1] : 0;
            const bottom = row + 1 < n ? grid[row + 1][col] : 0;

            if (curr) result += 2;
            result += Math.max(curr - top, 0);
            result += Math.max(curr - left, 0);
            result += Math.max(curr - right, 0);
            result += Math.max(curr - bottom, 0);
        }
    }

    return result;
};

