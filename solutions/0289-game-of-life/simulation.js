// time: O(nm)
// space: O(nm)

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const gameOfLife = function (board) {
    const rows = board.length;
    const cols = board[0].length;
    const copy = Array.from({ length: rows }, (_, idx) => [...board[idx]]);
    const directions = [
        [-1, -1],
        [-1, 0],
        [-1, 1],
        [0, 1],
        [1, 1],
        [1, 0],
        [1, -1],
        [0, -1],
    ];

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            let lives = 0;
            let dead = 0;

            for (const [dr, dc] of directions) {
                const nr = row + dr;
                const nc = col + dc;

                if (nr < 0 || nc < 0) continue;
                if (nr >= rows || nc >= cols) continue;
                const cell = copy[nr][nc];

                if (cell) lives++;
                else dead++;
            }

            if (lives < 2 || lives > 3) board[row][col] = 0;
            if (!copy[row][col] && lives === 3) board[row][col] = 1;
        }
    }
};
