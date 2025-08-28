// time: o(m ∗ n ∗ log(min(m,n)))
// space: O(min(n, m))

/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
const sortMatrix = grid => {
    const n = grid.length;
    const m = grid[0].length;

    const diagonalSort = (row, col, comp) => {
        const bkRow = row;
        const bkCol = col;

        const arr = [];

        while (row < n && col < m) {
            arr.push(grid[row][col]);
            row++;
            col++;
        }

        arr.sort(comp);

        row = bkRow;
        col = bkCol;

        while (row < n && col < m) {
            grid[row][col] = arr.pop();
            row++;
            col++;
        }
    };

    for (let col = 1; col < m; col++) diagonalSort(0, col, (a, b) => b - a);
    for (let row = 0; row < n; row++) diagonalSort(row, 0, (a, b) => a - b);

    return grid;
};

