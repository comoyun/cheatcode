// time: O(n * m)
// space: O(1)

/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {boolean}
 */
const areSimilar = (mat, k) => {
    const n = mat.length;
    const m = mat[0].length;

    for (let row = 0; row < n; row++) {
        for (let col = 0; col < m; col++) {
            const curr = mat[row][col];
            if (row & 1 && curr !== mat[row].at(col - (((k % m) + m) % m)))
                return false;
            if (!(row & 1) && curr !== mat[row][(col + k) % m]) return false;
        }
    }

    return true;
};
