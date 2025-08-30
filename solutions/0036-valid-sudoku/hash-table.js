// time: O(n * m)
// space: O(n + m)

/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = board => {
    const n = board.length;
    const m = board[0].length;
    const rows = Array.from({ length: n }, () => new Set());
    const cols = Array.from({ length: m }, () => new Set());
    const subBoxes = Array.from({ length: 9 }, () => new Set());

    for (let row = 0; row < n; row++) {
        for (let col = 0; col < m; col++) {
            const cell = board[row][col];
            const id = Math.floor(((row * m + col) / 81) * 9);
            if (cell === '.') continue;
            if (rows[row].has(cell)) return false;
            if (cols[col].has(cell)) return false;
            if (subBoxes[id].has(cell)) return false;
            rows[row].add(cell);
            subBoxes[id].add(cell);
            cols[col].add(cell);
        }
    }

    return true;
};
