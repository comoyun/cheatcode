/*
 * @title: Simulation
 * @time: O(nm)
 * @space: O(nm)
 */

/**
 * @param {number[][]} mat
 * @return {number[]}
 */
const findDiagonalOrder = mat => {
    const ROWS = mat.length,
        COLS = mat[0].length;
    const result = [];
    const diags = [];

    const isValid = (row, col) =>
        col >= 0 && col < COLS && row >= 0 && row < ROWS;

    const getDiag = (row, col) => {
        const diag = [];
        while (isValid(row, col)) {
            diag.push(mat[row][col]);
            row++;
            col--;
        }
        return diag;
    };

    for (let col = 0; col < COLS; col++) {
        const diag = getDiag(0, col);
        diags.push(diag);
    }

    for (let row = 1; row < ROWS; row++) {
        const diag = getDiag(row, COLS - 1);
        diags.push(diag);
    }

    for (let i = 0; i < diags.length; i++) {
        const diag = diags[i];
        if ((i & 1) === 0) diag.reverse();
        for (const el of diag) result.push(el);
    }

    return result;
};

