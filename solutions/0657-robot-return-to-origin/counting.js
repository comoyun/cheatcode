// time: O(n)
// space: O(1)

/**
 * @param {string} moves
 * @return {boolean}
 */
const judgeCircle = moves => {
    const dir = { L: 0, R: 0, U: 0, D: 0 };
    for (const move of moves) dir[move]++;
    return dir.L === dir.R && dir.U === dir.D;
};
