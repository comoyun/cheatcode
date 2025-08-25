// time: O(nm)
// space: O(nm)

/**
 * @param {number[][]} mat
 * @return {number[]}
 */
const findDiagonalOrder = mat => {
    const rows = mat.length;
    const cols = mat[0].length;
    const result = [];

    const pushDiagonal = (row, col, reverse) => {
        const diag = [];
        while (row < rows && col >= 0) {
            diag.push(mat[row][col]);
            row++;
            col--;
        }
        if (reverse) diag.reverse();
        result.push(...diag);
    };

    let reverse = false;

    for (let col = 0; col < cols; col++) {
        pushDiagonal(0, col, reverse);
        reverse = !reverse;
    }

    for (let row = 1; row < rows; row++) {
        pushDiagonal(row, cols - 1, reverse);
        reverse = !reverse;
    }

    return result;
};
