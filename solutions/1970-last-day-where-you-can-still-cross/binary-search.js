// time: O(M * N * K)
// space: O(M * N)

/**
 * @param {number} row
 * @param {number} col
 * @param {number[][]} cells
 * @return {number}
 */
const latestDayToCross = (rows, cols, cells) => {
    const getForbiddenCells = upto => {
        const set = new Set();
        for (let i = 0; i <= upto; i++) {
            const [row, col] = cells[i];
            set.add(`${row},${col}`);
        }
        return set;
    };

    const canCross = day => {
        const dangerZones = getForbiddenCells(day);
        const visited = new Set();

        const dfs = (row, col) => {
            const key = `${row},${col}`;

            if (row < 1 || col < 1 || col > cols || row > rows) return false;
            if (dangerZones.has(key)) return false;
            if (visited.has(key)) return false;
            if (row === rows) return true;

            visited.add(key);

            return (
                dfs(row + 1, col) ||
                dfs(row - 1, col) ||
                dfs(row, col + 1) ||
                dfs(row, col - 1)
            );
        };

        for (let i = 1; i <= cols; i++) {
            if (dfs(1, i)) return true;
        }

        return false;
    };

    let left = 0;
    let right = cells.length - 1;

    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        if (canCross(mid)) left = mid + 1;
        else right = mid - 1;
    }

    return left;
};
