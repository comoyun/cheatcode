/**
 * @param {number[][]} grid
 * @return {number}
 */
const countNegatives = matrix => {
    let row = 0;
    let col = matrix[0].length - 1;
    let result = 0;

    while (row < matrix.length && col >= 0) {
        const cell = matrix[row][col];

        if (cell < 0) {
            result += matrix.length - row;
            col--;
        } else {
            row++;
        }
    }

    return result;
};

