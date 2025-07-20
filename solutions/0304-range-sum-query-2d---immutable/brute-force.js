/*
 * @title: Prefix Sum
 * Time: O((row2 - row1 + 1) * (col2 - col1 + 1))
 * @space: O(1)
 */

/**
 * @param {number[][]} matrix
 */
class NumMatrix {
    constructor(matrix) {
        this.matrix = matrix;
    }

    /**
     * @param {number} row1
     * @param {number} col1
     * @param {number} row2
     * @param {number} col2
     * @return {number}
     */
    sumRegion(row1, col1, row2, col2) {
        let sum = 0;
        for (let row = row1; row <= row2; row++)
            for (let col = col1; col <= col2; col++)
                sum += this.matrix[row][col];
        return sum;
    }
}
