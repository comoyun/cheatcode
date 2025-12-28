// time: O(N * M)
// space: O(1)

/**
 * @param {number[][]} grid
 * @return {number}
 */
const countNegatives = matrix => {
    let result = 0;

    for (const row of matrix) {
        for (const col of row) {
            if (col < 0) result++;
        }
    }

    return result;
};
