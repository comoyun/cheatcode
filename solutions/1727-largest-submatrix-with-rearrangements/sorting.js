// time: O(n * m log m)
// space: O(n * m)

/**
 * @param {number[][]} matrix
 * @return {number}
 */
const largestSubmatrix = matrix => {
    let result = 0;
    const arr = Array.from({ length: matrix.length }, (_, row) => [
        ...matrix[row],
    ]);

    for (let col = 0; col < matrix[0].length; col++)
        for (let row = 1; row < matrix.length; row++)
            if (arr[row][col]) arr[row][col] += arr[row - 1][col];

    for (let row = 0; row < matrix.length; row++) {
        const con = [];
        for (let col = 0; col < matrix[0].length; col++)
            if (arr[row][col]) con.push(arr[row][col]);

        con.sort((a, b) => b - a);

        for (let i = 0; i < con.length; i++) {
            const curr = con[i];
            result = Math.max(result, curr * (i + 1));
        }
    }

    return result;
};

