// time: O(N * M)
// space: O(1)

/**
 * @param {number[][]} grid
 * @return {number}
 */
const numMagicSquaresInside = grid => {
    let result = 0;
    for (let row = 0; row < grid.length - 2; row++) {
        for (let col = 0; col < grid[row].length - 2; col++) {
            const vals = [
                grid[row][col],
                grid[row][col + 1],
                grid[row][col + 2],
                grid[row + 1][col],
                grid[row + 1][col + 1],
                grid[row + 1][col + 2],
                grid[row + 2][col],
                grid[row + 2][col + 1],
                grid[row + 2][col + 2],
            ];

            if (vals.some(x => x < 1 || x > 9)) continue;

            const set = new Set(vals);

            const [a, b, c, d, e, f, g, h, i] = vals;

            const sum = a + b + c;

            if (
                sum === d + e + f &&
                sum === g + h + i &&
                sum === a + d + g &&
                sum === b + e + h &&
                sum === c + f + i &&
                sum === a + e + i &&
                sum === c + e + g &&
                set.size === 9
            )
                result++;
        }
    }

    return result;
};

