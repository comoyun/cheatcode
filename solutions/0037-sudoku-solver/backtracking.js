// time: O(9 ^ (n * m))
// space: O(n * m)

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const solveSudoku = board => {
    const n = board.length;
    const m = board[0].length;
    const rows = Array.from({ length: n }, () => new Set());
    const cols = Array.from({ length: m }, () => new Set());
    const boxes = Array.from({ length: 9 }, () => new Set());

    for (let row = 0; row < n; row++) {
        for (let col = 0; col < m; col++) {
            const cell = board[row][col];
            const id = Math.floor(row / 3) * 3 + Math.floor(col / 3);
            if (cell === '.') continue;
            rows[row].add(cell);
            cols[col].add(cell);
            boxes[id].add(cell);
        }
    }

    const backtrack = (r, c) => {
        for (let row = r; row < n; row++) {
            for (let col = row === r ? c : 0; col < m; col++) {
                const cell = board[row][col];
                if (cell !== '.') continue;
                for (let i = 1; i <= 9; i++) {
                    const str = i.toString();
                    const id = Math.floor(row / 3) * 3 + Math.floor(col / 3);
                    if (
                        rows[row].has(str) ||
                        cols[col].has(str) ||
                        boxes[id].has(str)
                    )
                        continue;
                    rows[row].add(str);
                    cols[col].add(str);
                    boxes[id].add(str);
                    board[row][col] = str;

                    if (backtrack(row, col)) return true;

                    rows[row].delete(str);
                    cols[col].delete(str);
                    boxes[id].delete(str);
                    board[row][col] = '.';
                }

                return false;
            }
        }

        return true;
    };

    backtrack(0, 0);
    return board;
};
