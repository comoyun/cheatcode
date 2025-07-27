// time: O(nm)
// space: O(nm)

/**
 * @param {number[][]} img
 * @return {number[][]}
 */
const imageSmoother = img => {
    const ROWS = img.length;
    const COLS = img[0].length;
    const copy = Array.from({ length: ROWS }, (_, row) => [...img[row]]);

    const getAverage = (row, col) => {
        const dirs = [
            [-1, -1],
            [-1, 0],
            [-1, 1],
            [0, -1],
            [0, 0],
            [0, 1],
            [1, -1],
            [1, 0],
            [1, 1],
        ];
        let sum = 0;
        let count = 0;

        for (const [dr, dc] of dirs) {
            const nr = dr + row;
            const nc = dc + col;

            if (nr < 0 || nr >= ROWS) continue;
            if (nc < 0 || nc >= COLS) continue;

            sum += copy[nr][nc];
            count++;
        }

        return Math.floor(sum / count);
    };

    for (let row = 0; row < ROWS; row++)
        for (let col = 0; col < COLS; col++)
            img[row][col] = getAverage(row, col);

    return img;
};
