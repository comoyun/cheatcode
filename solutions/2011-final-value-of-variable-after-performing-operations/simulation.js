// time: O(n)
// space: O(1)

/**
 * @param {string[]} operations
 * @return {number}
 */
const finalValueAfterOperations = operations =>
    operations.reduce((acc, curr) => acc + (curr.includes('+') ? 1 : -1), 0);

