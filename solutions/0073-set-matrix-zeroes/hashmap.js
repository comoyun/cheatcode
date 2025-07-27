// time: O(nm)
// space: O(n + m)

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const setZeroes = matrix => {
    const zeroCols = new Set(),
        zeroRows = new Set();
    const ROWS = matrix.length,
        COLS = matrix[0].length;

    for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
            if (!matrix[row][col]) {
                zeroCols.add(col);
                zeroRows.add(row);
            }
        }
    }

    for (let row = 0; row < ROWS; row++)
        for (let col = 0; col < COLS; col++)
            if (zeroRows.has(row) || zeroCols.has(col)) 
                matrix[row][col] = 0;

    return matrix;
};
