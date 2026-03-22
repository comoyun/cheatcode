// time: O(n * m)
// space: O(1)

/**
 * @param {number[][]} mat
 * @param {number[][]} target
 * @return {boolean}
 */
const findRotation = (mat, target) => {
    const n = mat.length;
    const m = mat[0].length;
    let steps = 0;
    let result = true;

    for (let col = m - 1; col >= 0; col--) {
        for (let row = 0; row < n; row++, steps++) {
            const cell1 = target[row][col];
            const cell2 = mat[Math.floor(steps / m)][steps % m];

            if (cell1 !== cell2) {
                result = false;
                break;
            }
        }

        if (!result) break;
    }

    if (result) return true;
    result = true;
    steps = 0;

    for (let row = n - 1; row >= 0; row--) {
        for (let col = m - 1; col >= 0; col--, steps++) {
            const cell1 = target[row][col];
            const cell2 = mat[Math.floor(steps / m)][steps % m];

            if (cell1 !== cell2) {
                result = false;
                break;
            }
        }

        if (!result) break;
    }

    if (result) return true;
    result = true;
    steps = 0;

    for (let col = 0; col < m; col++) {
        for (let row = n - 1; row >= 0; row--, steps++) {
            const cell1 = target[row][col];
            const cell2 = mat[Math.floor(steps / m)][steps % m];

            if (cell1 !== cell2) {
                result = false;
                break;
            }
        }

        if (!result) break;
    }

    if (result) return true;
    result = true;

    for (let row = 0; row < n; row++) {
        for (let col = 0; col < m; col++) {
            const cell1 = target[row][col];
            const cell2 = mat[row][col];

            if (cell1 !== cell2) {
                result = false;
                break;
            }
        }

        if (!result) break;
    }

    return result;
};

