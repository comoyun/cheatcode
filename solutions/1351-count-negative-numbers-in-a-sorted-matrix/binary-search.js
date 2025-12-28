// time: O(N * log M)
// space: O(1)

/**
 * @param {number[][]} grid
 * @return {number}
 */
const countNegatives = matrix => {
    let result = 0;

    for (const row of matrix) {
        let left = 0;
        let right = row.length - 1;

        while (left <= right) {
            const mid = left + Math.floor((right - left) / 2);

            if (row[mid] < 0) right = mid - 1;
            else left = mid + 1;
        }

        result += row.length - left;
    }

    return result;
};
