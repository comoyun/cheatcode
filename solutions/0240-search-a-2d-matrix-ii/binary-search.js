// time: O(n log m)
// space: O(1)

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = (matrix, target) => {
    const m = matrix[0].length;

    const has = row => {
        let left = 0;
        let right = m - 1;

        while (left <= right) {
            const mid = left + Math.floor((right - left) / 2);
            const cell = row[mid];

            if (cell === target) return true;
            else if (cell < target) left = mid + 1;
            else if (cell > target) right = mid - 1;
        }

        return false;
    };

    for (const row of matrix) if (has(row)) return true;
    return false;
};
