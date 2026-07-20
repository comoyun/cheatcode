// time: O()
// space: O()

/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
const shiftGrid = (grid, k) => {
    const n = grid.length;
    const m = grid[0].length;
    k %= n * m;
    if (k === 0) return grid;

    const res = Array.from({ length: n }, () => new Array(m).fill(0));

    while (k) {
        for (let row = 0; row < n; row++) {
            for (let col = 1; col < m; col++) {
                res[row][col] = grid[row][col - 1];
            }
        }

        for (let row = 1; row < n; row++) {
            const prev = grid[row - 1][m - 1];
            res[row][0] = prev;
        }

        res[0][0] = grid[n - 1][m - 1];
        grid = res.map(row => [...row]);
        k--;
    }

    return res;
};

// Examples:
console.log(
    shiftGrid(
        [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
        ],
        1
    )
);
console.log(
    shiftGrid(
        [
            [3, 8, 1, 9],
            [19, 7, 2, 5],
            [4, 6, 11, 10],
            [12, 0, 21, 13],
        ],
        4
    )
);
console.log(
    shiftGrid(
        [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
        ],
        9
    )
);

