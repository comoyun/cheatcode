// time: O(n)
// space: O(1)

/**
 * @param {string} s
 * @return {boolean}
 */
const doesAliceWin = s => [...s].some(c => 'aeiou'.includes(c));
