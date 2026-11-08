// time: O(n * m)
// space: O(n + m)

/**
 * @param {number[][]} grid
 * @return {number}
 */
const countServers = grid => {
    const n = grid.length;
    const m = grid[0].length;
    const rows = new Array(n).fill(0);
    const cols = new Array(m).fill(0);
    let result = 0;

    for (let row = 0; row < n; row++) {
        let count = 0;
        for (let col = 0; col < m; col++) {
            const cell = grid[row][col];
            count += cell;
            cols[col] += cell;
        }
        rows[row] += count;
    }

    for (let row = 0; row < n; row++) {
        if (rows[row] > 1) {
            result += rows[row];
            continue;
        }
        for (let col = 0; col < m; col++)
            result += grid[row][col] ? (cols[col] > 1 ? 1 : 0) : 0;
    }

    return result;
};
