// time: O(nm)
// space: O(nm)

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
const transpose = matrix => {
    const result = Array.from({ length: matrix[0].length }, () =>
        new Array(matrix.length).fill(0)
    );

    for (let row = 0; row < matrix.length; row++)
        for (let col = 0; col < matrix[0].length; col++)
            result[col][row] = matrix[row][col];

    return result;
};
