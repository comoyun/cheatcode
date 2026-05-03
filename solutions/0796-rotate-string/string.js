// time: O(n * n)
// space: O(n)

/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
const rotateString = (s, goal) =>
    s.length === goal.length && (s + s).includes(goal);
