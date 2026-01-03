// time: O(N * N)
// space: O(N)

/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
const rotateString = (s, goal) =>
    s.length === goal.length && (s + s).includes(goal);
