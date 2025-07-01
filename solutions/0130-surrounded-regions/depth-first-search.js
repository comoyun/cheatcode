/*
 * @title: DFS
 * @time: O(nm)
 * @space: O(nm)
 */

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const solve = board => {
    const forbidden = new Set();
    const ROWS = board.length;
    const COLS = board[0].length;
    const dirs = [
        [0, 1],
        [1, 0],
        [-1, 0],
        [0, -1],
    ];

    const dfs = (row, col) => {
        const key = `${row},${col}`;
        if (forbidden.has(key)) return;
        forbidden.add(key);

        for (const [dr, dc] of dirs) {
            const nr = row + dr,
                nc = col + dc;
            if (nr < 0 || nr >= ROWS || nc < 0 || nc >= COLS) continue;
            if (board[nr][nc] === 'X') continue;
            dfs(nr, nc);
        }
    };

    for (let r = 0; r < ROWS; r++) {
        if (board[r][0] === 'O') dfs(r, 0);
        if (board[r][COLS - 1] === 'O') dfs(r, COLS - 1);
    }
    for (let c = 0; c < COLS; c++) {
        if (board[0][c] === 'O') dfs(0, c);
        if (board[ROWS - 1][c] === 'O') dfs(ROWS - 1, c);
    }

    for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
            const key = `${row},${col}`;
            if (!forbidden.has(key)) board[row][col] = 'X';
        }
    }
};
