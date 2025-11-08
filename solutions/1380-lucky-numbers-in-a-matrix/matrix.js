// time: O(nm)
// space: O(n + m)

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const luckyNumbers = matrix => {
    const result = [];

    const rows = matrix.map(row => Math.min(...row));

    const cols = Array.from({ length: matrix[0].length }, (_, col) => {
        let max = -Infinity;
        for (let row = 0; row < matrix.length; row++)
            max = Math.max(max, matrix[row][col]);
        return max;
    });

    for (let row = 0; row < matrix.length; row++)
        for (let col = 0; col < matrix[0].length; col++)
            if (
                matrix[row][col] === rows[row] &&
                matrix[row][col] === cols[col]
            )
                result.push(matrix[row][col]);

    return result;
};

