/*
 * @title: Prefix Sum
 * @time: O(n)
 * @space: O(1)
 */

/**
 * @param {number[][]} matrix
 */
class NumMatrix {
    constructor(matrix) {
        this.matrix = matrix;
        this.modifyPrefixSum();
    }

    modifyPrefixSum() {
        const ROWS = this.matrix.length;
        const COLS = this.matrix[0].length;
        for (let row = 0; row < ROWS; row++)
            for (let col = 1; col < COLS; col++)
                this.matrix[row][col] += this.matrix[row][col - 1];
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
            sum +=
                this.matrix[row][col2] -
                (col1 - 1 >= 0 ? this.matrix[row][col1 - 1] : 0);
        return sum;
    }
}
