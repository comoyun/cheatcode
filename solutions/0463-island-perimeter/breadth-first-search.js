// time: O(n * m)
// space: O(n * m)

/**
 * @param {number[][]} grid
 * @return {number}
 */
const islandPerimeter = grid => {
    const n = grid.length;
    const m = grid[0].length;
    const queue = [];
    const dirs = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1],
    ];
    let result = 0;

    const getPerimeter = (row, col) => {
        let perimeter = 0;
        for (const [dr, dc] of dirs) {
            const nr = row + dr;
            const nc = col + dc;

            if (nr < 0 || nc < 0 || nr === n || nc === m || !grid[nr][nc])
                perimeter++;
        }

        return perimeter;
    };

    for (let row = 0; row < n; row++) {
        let found = false;
        for (let col = 0; col < m; col++) {
            const cell = grid[row][col];

            if (cell) {
                result += getPerimeter(row, col);
                grid[row][col] = -1;
                queue.push([row, col]);
                found = true;
                break;
            }
        }
        if (found) break;
    }

    let idx = 0;

    while (idx < queue.length) {
        const [row, col] = queue[idx++];

        for (const [dr, dc] of dirs) {
            const nr = dr + row;
            const nc = dc + col;

            if (nr < 0 || nc < 0 || nr === n || nc === m || grid[nr][nc] < 1)
                continue;
            grid[nr][nc] = -1;

            result += getPerimeter(nr, nc);
            queue.push([nr, nc]);
        }
    }

    return result;
};

