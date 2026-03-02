// time: O(n ^ 2)
// space: O(n)

/**
 * @param {number[][]} grid
 * @return {number}
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
const minSwaps = grid => {
    const n = grid.length;
    const nums = new Array(n);
    let result = 0;

    for (let i = 0; i < n; i++) {
        let count = 0;
        for (let j = n - 1; j >= 0 && grid[i][j] === 0; j--) count++;
        nums[i] = count;
    }

    for (let i = 0; i < n; i++) {
        const need = n - i - 1;

        let j = i;
        while (j < n && nums[j] < need) j++;

        if (j === n) return -1;

        while (j > i) {
            [nums[j], nums[j - 1]] = [nums[j - 1], nums[j]];
            result++;
            j--;
        }
    }

    return result;
};

