/*
 * @title: Prefix Sum
 * @time: O(1)
 * @space: O(1)
 */

/**
 * @param {number[][]} matrix
 */
class NumMatrix {
    constructor(matrix) {
        const m = matrix.length,
            n = matrix[0].length;
        this.prefix = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

        for (let i = 1; i <= m; i++)
            for (let j = 1; j <= n; j++)
                this.prefix[i][j] =
                    matrix[i - 1][j - 1] +
                    this.prefix[i - 1][j] +
                    this.prefix[i][j - 1] -
                    this.prefix[i - 1][j - 1];
    }

    /**
     * @param {number} row1
     * @param {number} col1
     * @param {number} row2
     * @param {number} col2
     * @return {number}
     */
    sumRegion(row1, col1, row2, col2) {
        const p = this.prefix;
        return (
            p[row2 + 1][col2 + 1] -
            p[row2 + 1][col1] -
            p[row1][col2 + 1] +
            p[row1][col1]
        );
    }
}
