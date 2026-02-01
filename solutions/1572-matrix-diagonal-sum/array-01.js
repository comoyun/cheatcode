// time: O(N)
// space: O(1)

/**
 * @param {number[][]} mat
 * @return {number}
 */
const diagonalSum = mat => {
    const n = mat.length;

    let row = 0;
    let col = 0;
    let sum = 0;

    while (row < n && col < n) {
        sum += mat[row][col];
        row++;
        col++;
    }

    row = 0;
    col = n - 1;
    while (row < n && col >= 0) {
        sum += mat[row][col];
        row++;
        col--;
    }

    if (n & 1) sum -= mat[Math.floor(n / 2)][Math.floor(n / 2)];

    return sum;
};

