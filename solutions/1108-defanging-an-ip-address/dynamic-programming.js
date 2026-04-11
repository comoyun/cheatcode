// time: O(n)
// space: O(n)

/**
 * @param {string} address
 * @return {string}
 */
const deleteAndEarn = nums => {
    const maxVal = Math.max(...nums);
    const points = new Array(maxVal + 1).fill(0);

    for (const num of nums) points[num] += num;

    let prev2 = 0,
        prev1 = 0;

    for (const p of points) {
        const curr = Math.max(prev1, prev2 + p);
        prev2 = prev1;
        prev1 = curr;
    }

    return prev1;
};

