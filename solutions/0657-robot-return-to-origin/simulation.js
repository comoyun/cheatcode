// time: O(n)
// space: O(1)

/**
 * @param {string} moves
 * @return {boolean}
 */
const judgeCircle = moves => {
    let x = 0;
    let y = 0;

    for (const move of moves) {
        if (move === 'R') x++;
        else if (move === 'L') x--;
        else if (move === 'U') y--;
        else y++;
    }

    return x === 0 && y === 0;
};
