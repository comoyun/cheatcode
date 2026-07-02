// time: O(m * n)
// space: O(m * n)

/**
 * @param {number[][]} grid
 * @param {number} health
 * @return {boolean}
 */
const findSafeWalk = (grid, health) => {
    const n = grid.length;
    const m = grid[0].length;
    const queue = [[0, 0, health - grid[0][0]]];
    let head = 0;
    const dirs = [
        [1, 0],
        [0, 1],
        [-1, 0],
        [0, -1],
    ];
    const xp = Array.from({ length: n }, () => new Array(m).fill(0));
    const outOfBounds = (row, col) =>
        row < 0 || col < 0 || row >= n || col >= m;
    xp[0][0] = queue[0][2];

    while (head < queue.length) {
        const [row, col, health] = queue[head++];

        if (row === n - 1 && col === m - 1) return true;

        for (const [dr, dc] of dirs) {
            const nr = dr + row;
            const nc = dc + col;

            if (outOfBounds(nr, nc)) continue;

            const nh = health - grid[nr][nc];

            if (nh < 1 || nh <= xp[nr][nc]) continue;

            xp[nr][nc] = nh;
            queue.push([nr, nc, nh]);
        }
    }

    return false;
};

