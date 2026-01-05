// time: O(N * M)
// space: O(1)

/**
 * @param {number[][]} matrix
 * @return {number}
 */
const maxMatrixSum = matrix => {
    let sum = 0;
    let min = Infinity;
    let count = 0;
    for (const row of matrix) {
        for (const col of row) {
            if (col < 0) count++;
            sum += Math.abs(col);
            min = Math.min(min, Math.abs(col));
        }
    }

    if (count & 1) return sum - 2 * min;
    return sum;
};

