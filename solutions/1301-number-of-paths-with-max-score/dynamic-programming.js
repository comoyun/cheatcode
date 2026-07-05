// time: O(n * m)
// space: O(n * m)

/**
 * @param {string[]} board
 * @return {number[]}
 */
const pathsWithMaxScore = board => {
    const MOD = 10 ** 9 + 7;
    const n = board.length;
    const m = board[n - 1].length;
    const dp = Array.from({ length: n + 1 }, () =>
        Array.from({ length: m + 1 }, () => [0, 0])
    );

    dp[n - 1][m - 1] = [0, 1];

    for (let row = n - 1; row >= 0; row--) {
        for (let col = m - 1; col >= 0; col--) {
            if (row === n - 1 && col === m - 1) continue;
            const cell = board[row][col];

            if (cell === 'X') continue;

            const [rightSum, rightCount] = dp[row][col + 1];
            const [bottomSum, bottomCount] = dp[row + 1][col];
            const [diagSum, diagCount] = dp[row + 1][col + 1];
            let count = 0;
            let max = 0;

            if (rightSum > bottomSum) {
                max = rightSum;
                count = rightCount;
            } else if (rightSum < bottomSum) {
                max = bottomSum;
                count = bottomCount;
            } else {
                max = bottomSum;
                count = rightCount + bottomCount;
            }

            if (diagSum > max) {
                max = diagSum;
                count = diagCount;
            } else if (diagSum === max) {
                count += diagCount;
            }

            if (count)
                dp[row][col] = [max + (isNaN(cell) ? 0 : +cell), count % MOD];
        }
    }

    return dp[0][0];
};
