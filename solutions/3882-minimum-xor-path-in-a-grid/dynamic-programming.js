// time: O(n * m * v)
// space: O(n * m * v)

/**
 * @param {number[][]} grid
 * @return {number}
 */
const minCost = grid => {
    const n = grid.length;
    const m = grid[0].length;
    const dp = Array.from({ length: n }, () =>
        Array.from({ length: m }, () => new Uint8Array(1024))
    );

    dp[n - 1][m - 1][grid[n - 1][m - 1]] = 1;

    for (let i = n - 1; i >= 0; i--) {
        for (let j = m - 1; j >= 0; j--) {
            if (i === n - 1 && j === m - 1) continue;

            const curr = grid[i][j];
            const nextCol = j + 1 < m ? dp[i][j + 1] : null;
            const nextRow = i + 1 < n ? dp[i + 1][j] : null;

            for (let k = 0; k < 1024; k++)
                if (nextCol?.[k] || nextRow?.[k]) dp[i][j][k ^ curr] = 1;
        }
    }

    return dp[0][0].indexOf(1);
};

