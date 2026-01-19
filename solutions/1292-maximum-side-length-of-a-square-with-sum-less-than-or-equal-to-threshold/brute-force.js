// time: O(N * M * K ^ 2)
// space: O(1)

/**
 * @param {number[][]} mat
 * @param {number} threshold
 * @return {number}
 */
const maxSideLength = (mat, threshold) => {
    const n = mat.length;
    const m = mat[0].length;
    let result = 0;

    const getSum = (sr, sc, er, ec) => {
        let sum = 0;
        for (let r = sr; r <= er; r++) {
            for (let c = sc; c <= ec; c++) {
                sum += mat[r][c];
            }
        }
        return sum;
    };

    for (let row = 0; row < n; row++) {
        for (let col = 0; col < m; col++) {
            const maxLen = Math.min(n - row, m - col);

            for (let len = 1; len <= maxLen; len++) {
                const sum = getSum(row, col, row + len - 1, col + len - 1);
                if (sum > threshold) break;
                result = Math.max(result, len);
            }
        }
    }

    return result;
};
