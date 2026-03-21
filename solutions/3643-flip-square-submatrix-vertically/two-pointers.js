// time: O(k * k)
// space: O(1)

/**
 * @param {number[][]} grid
 * @param {number} x
 * @param {number} y
 * @param {number} k
 * @return {number[][]}
 */
const reverseSubmatrix = (grid, x, y, k) => {
    let start = x;
    let end = x + k - 1;

    while (start < end) {
        for (let col = y; col < y + k; col++)
            [grid[start][col], grid[end][col]] = [
                grid[end][col],
                grid[start][col],
            ];

        start++;
        end--;
    }
    return grid;
};
