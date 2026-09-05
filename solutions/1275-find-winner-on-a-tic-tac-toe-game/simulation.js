// time: O(1)
// space: O(1)

/**
 * @param {number[][]} moves
 * @return {string}
 */
const tictactoe = moves => {
    const board = Array.from({ length: 3 }, () => new Array(3).fill(-1));

    for (let i = 0; i < moves.length; i++) {
        const [row, col] = moves[i];
        board[row][col] = i % 2;
    }

    const [[a, b, c], [d, e, f], [g, h, i]] = board;

    const wins = [
        [a, b, c],
        [d, e, f],
        [g, h, i],
        [a, d, g],
        [b, e, h],
        [c, f, i],
        [a, e, i],
        [c, e, g],
    ];

    for (const [a, b, c] of wins)
        if (a !== -1 && a === b && b === c) return ['A', 'B'][a];

    return moves.length === 9 ? 'Draw' : 'Pending';
};

