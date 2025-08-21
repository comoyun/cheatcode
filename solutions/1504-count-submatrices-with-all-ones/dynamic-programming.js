// time: O(n * m^2)
// space: O(m)

/**
 * @param {number[][]} mat
 * @return {number}
 */
const numSubmat = mat => {
    const n = mat.length;
    const m = mat[0].length;

    let result = 0;
    const heights = new Array(m).fill(0);

    for (let r = 0; r < n; r++) {
        for (let c = 0; c < m; c++) heights[c] = mat[r][c] ? heights[c] + 1 : 0;
        for (let c = 0; c < m; c++) {
            let minH = heights[c];
            for (let j = c; j >= 0 && heights[j]; j++) {
                minH = Math.min(minH, heights[j]);

                if (minH === 0) break

                result += minH;
            }
        }
    }

    return result;
};

