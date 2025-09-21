// time: O(Rows ∗ Cols ∗ Log(Rows ∗ Cols))
// space: O(Rows * Cols)

/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rCenter
 * @param {number} cCenter
 * @return {number[][]}
 */
const allCellsDistOrder = (rows, cols, rCenter, cCenter) => {
    const result = [];

    for (let row = 0; row < rows; row++) {
        const r = Math.abs(row - rCenter);
        for (let col = 0; col < cols; col++) {
            const c = Math.abs(col - cCenter);
            result.push([row, col, r + c]);
        }
    }

    return result.sort((a, b) => a[2] - b[2]).map(item => [item[0], item[1]]);
};
