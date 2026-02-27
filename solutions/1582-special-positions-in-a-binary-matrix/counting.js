// time: O(n * m)
// space: O(n + m)

/**
 * @param {number[][]} mat
 * @return {number}
 */
const numSpecial = mat => {
    const n = mat.length;
    const m = mat[0].length;
    let result = 0;

    const rows = new Array(n).fill(0);
    const cols = new Array(m).fill(0);

    for (let row = 0; row < n; row++) {
        for (let col = 0; col < m; col++) {
            if (mat[row][col]) {
                rows[row]++;
                cols[col]++;
            }
        }
    }

    for (let row = 0; row < n; row++)
        for (let col = 0; col < m; col++)
            if (rows[row] - cols[col] === 0 && mat[row][col]) 
                result++;

    return result;
};
