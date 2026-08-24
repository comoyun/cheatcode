// time: O(n * m)
// space: O(n * m)

/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */
const oddCells = (m, n, indices) => {
    const map = {};
    let result = 0;

    for (const [row, col] of indices) {
        for (let r = 0; r < m; r++) {
            const idx = n * r + col;
            map[idx] ??= 0;
            map[idx]++;
        }
        for (let c = 0; c < n; c++) {
            const idx = n * row + c;
            map[idx] ??= 0;
            map[idx]++;
        }
    }

    for (const key in map) result += map[key] & 1;

    return result;
};

