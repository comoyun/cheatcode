// time: O(n * m)
// space: O(1)

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = matrix => {
    const n = matrix.length;

    for (let row = 0; row < n; row++)
        for (let col = row + 1; col < n; col++)
            [matrix[row][col], matrix[col][row]] = [
                matrix[col][row],
                matrix[row][col],
            ];

    for (const row of matrix) row.reverse();
};
