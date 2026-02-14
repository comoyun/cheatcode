// time: O(1)
// space: O(1)

/**
 * @param {number} poured
 * @param {number} query_row
 * @param {number} query_glass
 * @return {number}
 */
const champagneTower = (poured, query_row, query_glass) => {
    const tower = Array.from({ length: 100 }, (_, i) => Array(i + 1).fill(0));
    tower[0][0] = poured;

    for (let r = 0; r < 100; r++) {
        for (let c = 0; c <= r; c++) {
            const overflow = Math.max((tower[r][c] - 1) / 2, 0);
            if (overflow > 0) {
                if (r + 1 < 100) {
                    tower[r + 1][c] += overflow;
                    tower[r + 1][c + 1] += overflow;
                }
            }
        }
    }

    return Math.min(tower[query_row][query_glass], 1);
};
