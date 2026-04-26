// time: O(n)
// space: O(1)

/**
 * @param {string} moves
 * @return {number}
 */
const furthestDistanceFromOrigin = moves => {
    const freq = { L: 0, R: 0, _: 0 };
    for (const move of moves) freq[move]++;
    return Math.abs(freq.L - freq.R) + freq._;
};
