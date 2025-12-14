// time: O(N * M)
// space: O(1)

/**
 * @param {character[][]} board
 * @return {number}
 */
const numRookCaptures = board => {
    let rookRow = -1;
    let rookCol = -1;
    let result = 0;

    for (let row = 0; row < board.length; row++) {
        let found = false;
        for (let col = 0; col < board[0].length; col++) {
            if (board[row][col] === 'R') {
                rookRow = row;
                rookCol = col;
                found = true;
                break;
            }
        }

        if (found) break;
    }

    for (let row = rookRow - 1; row >= 0; row--) {
        const cell = board[row][rookCol];
        if (cell === '.') continue;
        if (cell === 'B') break;
        result++;
        break;
    }

    for (let row = rookRow + 1; row < board.length; row++) {
        const cell = board[row][rookCol];
        if (cell === '.') continue;
        if (cell === 'B') break;
        result++;
        break;
    }

    for (let col = rookCol - 1; col >= 0; col--) {
        const cell = board[rookRow][col];
        if (cell === '.') continue;
        if (cell === 'B') break;
        result++;
        break;
    }

    for (let col = rookCol + 1; col < board[0].length; col++) {
        const cell = board[rookRow][col];
        if (cell === '.') continue;
        if (cell === 'B') break;
        result++;
        break;
    }

    return result;
};
