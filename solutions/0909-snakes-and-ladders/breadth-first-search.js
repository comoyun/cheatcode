// time: O(n^2)
// space: O(n^2)

/**
 * @param {number[][]} board
 * @return {number}
 */
const snakesAndLadders = board => {
    const n = board.length;
    const queue = [[1, 0]];
    const seen = new Set();

    const convert = label => {
        const rowFromBottom = Math.floor((label - 1) / n);
        let col = (label - 1) % n;

        if (rowFromBottom & 1) col = n - 1 - col;
        const row = n - 1 - rowFromBottom;
        return [row, col];
    };

    while (queue.length > 0) {
        const [square, moves] = queue.shift();

        if (seen.has(square)) continue;
        seen.add(square);

        if (square === n * n) return moves;

        for (let i = 1; i <= 6; i++) {
            let next = square + i;
            if (next > n * n) continue;

            const [row, col] = convert(next);
            if (board[row][col] !== -1) next = board[row][col];

            queue.push([next, moves + 1]);
        }
    }

    return -1;
};
