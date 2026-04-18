// time: O(log n)
// space: O(1)

/**
 * @param {number} n
 * @return {number}
 */
const mirrorDistance = n =>
    Math.abs(n - parseInt(n.toString().split('').reverse().join('')));
