// time: O(n + m)
// space: O(1)

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = (matrix, target) => {
    let row = 0;
    let col = matrix[0].length - 1;

    while (row < matrix.length && col >= 0) {
        const cell = matrix[row][col];
        if (cell === target) return true;
        if (cell > target) col--;
        else row++;
    }
    return false;
};
