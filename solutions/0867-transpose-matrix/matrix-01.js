// time: O(nm)
// space: O(nm)

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
const transpose = matrix => {
    const ROWS = matrix.length;
    const COLS = matrix[0].length;
    const result = [];

    for (let row = 0; row < Math.max(ROWS, COLS); row++) {
        const p = [];
        if (row >= COLS) break;
        for (let col = 0; col < Math.max(ROWS, COLS); col++) {
            if (col >= ROWS) break;
            p.push(matrix[col][row]);
        }
        result.push(p);
    }

    return result;
};
