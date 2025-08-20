// time: O(n * m)
// space: O(1)

/**
 * @param {number[][]} matrix
 * @return {number}
 */
const countSquares = matrix => {
    const n = matrix.length;
    const m = matrix[0].length;
    let result = 0;

    for (let row = 0; row < n; row++) {
        for (let col = 0; col < m; col++) {
            const topLeft =
                row - 1 >= 0 && col - 1 >= 0 ? matrix[row - 1][col - 1] : 0;
            const left = col - 1 >= 0 ? matrix[row][col - 1] : 0;
            const top = row - 1 >= 0 ? matrix[row - 1][col] : 0;
            const curr = matrix[row][col];

            if (curr === 0) continue;

            const min = Math.min(topLeft, left, top);

            matrix[row][col] = min + 1;

            result += matrix[row][col];
        }
    }

    return result;
};
