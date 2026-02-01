// time: O(N)
// space: O(1)

/**
 * @param {number[][]} mat
 * @return {number}
 */
const diagonalSum = mat => {
    const n = mat.length;
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += mat[i][i];
        sum += mat[i][n - i - 1];
    }
    if (n & 1) sum -= mat[n >> 1][n >> 1];
    return sum;
};
