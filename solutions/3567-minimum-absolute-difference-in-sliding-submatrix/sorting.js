// time: O(m * n * k^2 * log(k))
// space: O(m * n * k^2 * log(k))

/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
const minAbsDiff = (grid, k) => {
    const n = grid.length;
    const m = grid[0].length;
    const result = [];

    for (let i = 0; i <= n - k; i++) {
        const row = [];

        for (let j = 0; j <= m - k; j++) {
            const nums = [];

            for (let x = i; x < i + k; x++)
                for (let y = j; y < j + k; y++) nums.push(grid[x][y]);

            nums.sort((a, b) => a - b);

            let min = Infinity;

            for (let l = 1; l < nums.length; l++) {
                const diff = nums[l] - nums[l - 1];

                if (diff !== 0) {
                    min = Math.min(min, diff);
                    if (min === 1) break;
                }
            }

            row.push(min === Infinity ? 0 : min);
        }

        result.push(row);
    }

    return result;
};
