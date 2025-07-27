// time: O(nm)
// space: O(1)

/**
 * @param {number[][]} img
 * @return {number[][]}
 */
const imageSmoother = img => {
    const ROWS = img.length;
    const COLS = img[0].length;

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

    const getAverage = (row, col) => {
        let sum = 0;
        let count = 0;

        for (const [dr, dc] of dirs) {
            const nr = dr + row;
            const nc = dc + col;

            if (nr < 0 || nr >= ROWS) continue;
            if (nc < 0 || nc >= COLS) continue;

            const orig = img[nr][nc] % 1000;
            sum += orig;
            count++;
        }

        return Math.floor(sum / count);
    };

    for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
            const orig = img[row][col] % 1000;
            const avg = getAverage(row, col);
            img[row][col] = avg * 1000 + orig;
        }
    }

    for (let row = 0; row < ROWS; row++)
        for (let col = 0; col < COLS; col++)
            img[row][col] = Math.floor(img[row][col] / 1000);

    return img;
};

console.log(
    imageSmoother([
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1],
    ])
);
