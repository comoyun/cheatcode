// time: O(nm)
// space: O(1)

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const setZeroes = matrix => {
    const ROWS = matrix.length,
        COLS = matrix[0].length,
        MARK = Infinity;

    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            if (!matrix[r][c]) {
                for (let col = 0; col < COLS; col++)
                    if (matrix[r][col]) matrix[r][col] = MARK;
                for (let row = 0; row < ROWS; row++)
                    if (matrix[row][c]) matrix[row][c] = MARK;
            }
        }
    }

    for (let r = 0; r < ROWS; r++)
        for (let c = 0; c < COLS; c++)
            if (matrix[r][c] === MARK) matrix[r][c] = 0;

    return matrix;
};
