// time: O()
// space: O()

/**
 * @param {number[][]} mat
 * @return {number}
 */
const numSpecial = mat => {
    const n = mat.length;
    const m = mat[0].length;
    let result = 0;

    const special = (row, col) => {
        for (let c = 0; c < m; c++) if (c !== col && mat[row][c]) return false;
        for (let r = 0; r < n; r++) if (r !== row && mat[r][col]) return false;
        return true;
    };

    for (let row = 0; row < n; row++)
        for (let col = 0; col < m; col++)
            if (mat[row][col] && special(row, col)) result++;

    return result;
};

