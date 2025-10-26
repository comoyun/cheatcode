// time: O(nm)
// space: O(nm)

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
const floodFill = (image, sr, sc, color) => {
    const rows = image.length;
    const cols = image[0].length;
    const og = image[sr][sc];

    const queue = [[sr, sc]];
    const dirs = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1],
    ];

    while (queue.length) {
        const [row, col] = queue.shift();

        if (row >= rows || col >= cols) continue;
        if (row < 0 || col < 0) continue;
        if (image[row][col] !== og) continue;
        if (image[row][col] === color) continue;

        image[row][col] = color;

        for (const [dr, dc] of dirs) {
            const nr = row + dr;
            const nc = col + dc;
            queue.push([nr, nc]);
        }
    }

    return image;
};

