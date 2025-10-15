// time: O(nm)
// space: O(1)

/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
const isToeplitzMatrix = matrix => {
    const n = matrix.length;
    const m = matrix[0].length;

    for (let i = 0; i < m; i++) {
        let row = 1;
        let col = i + 1;

        while (row < n && col < m) {
            if (matrix[row - 1][col - 1] !== matrix[row][col]) return false;
            row++;
            col++;
        }
    }

    for (let i = 1; i < n; i++) {
        let row = i + 1;
        let col = 1;

        while (row < n && col < m) {
            if (matrix[row - 1][col - 1] !== matrix[row][col]) return false;
            row++;
            col++;
        }
    }

    return true;
};


