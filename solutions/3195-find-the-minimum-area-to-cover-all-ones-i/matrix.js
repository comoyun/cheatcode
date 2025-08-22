// time: O(n * m)
// space: O(1)

/**
 * @param {number[][]} grid
 * @return {number}
 */
const minimumArea = grid => {
    const n = grid.length;
    const m = grid[0].length;

    let start = Infinity;
    let end = -Infinity;

    let startRow = 0;
    let endRow = 0;

    for (let row = 0; row < n; row++) {
        for (let col = 0; col < m; col++) {
            if (grid[row][col]) {
                if (start === Infinity) startRow = row;
                start = Math.min(start, col);
                end = Math.max(end, col);
                endRow = row;
            }
        }
    }

    const width = end - start + 1;
    const height = endRow - startRow + 1;

    return width * height;
};

