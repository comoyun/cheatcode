// time: O(n * m)
// space: O(n * m)

/**
 * @param {number[][]} grid
 * @param {number} x
 * @return {number}
 */
const minOperations = (grid, x) => {
    const arr = [];
    for (const row of grid) for (const col of row) arr.push(col);
    arr.sort((a, b) => a - b);
    const mid = Math.floor(arr.length / 2);
    let result = 0;

    for (const row of grid) {
        for (const col of row) {
            const diff = Math.abs(col - arr[mid]);
            if (diff % x !== 0) return -1;
            result += diff / x;
        }
    }
    return result;
};
