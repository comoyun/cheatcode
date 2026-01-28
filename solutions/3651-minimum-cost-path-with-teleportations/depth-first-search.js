// time: O(IDK)
// space: O(IDK)

/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
const minCost = (grid, k) => {
    // WARNING: This gives TLE
    const n = grid.length;
    const m = grid[0].length;
    const arr = [];

    for (let row = 0; row < n; row++) {
        for (let col = 0; col < m; col++) {
            const curr = grid[row][col];
            arr.push([curr, row, col]);
        }
    }

    const binarySearch = target => {
        let left = 0;
        let right = arr.length - 1;
        while (left <= right) {
            const mid = left + Math.floor((right - left) / 2);
            if (arr[mid][0] > target) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return right;
    };

    arr.sort((a, b) => a[0] - b[0]);

    const memo = {};
    const dfs = (row, col, k) => {
        if (row < 0 || row >= n || col < 0 || col >= m) return Infinity;
        if (k < 0) return Infinity;
        if (row === n - 1 && col === m - 1) return 0;

        const state = `${row},${col},${k}`;
        if (state in memo) return memo[state];

        const curr = grid[row][col];
        const tpIdx = binarySearch(curr);
        let min = Infinity;

        if (k > 0) {
            for (let i = 0; i <= tpIdx; i++) {
                const [, r, c] = arr[i];
                if (r >= row || c >= col) {
                    const cost = dfs(r, c, k - 1);
                    min = Math.min(min, cost);
                }
            }
        }

        if (row + 1 < n)
            min = Math.min(min, grid[row + 1][col] + dfs(row + 1, col, k));
        if (col + 1 < m)
            min = Math.min(min, grid[row][col + 1] + dfs(row, col + 1, k));

        return (memo[state] = min);
    };
    return dfs(0, 0, k);
};

