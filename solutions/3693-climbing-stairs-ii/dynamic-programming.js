// time: O(n)
// space: O(1)

/**
 * @param {number} n
 * @param {number[]} costs
 * @return {number}
 */
const climbStairs = (n, costs) => {
    const prev = [0, 0, 0];

    for (let i = 0; i < costs.length; i++) {
        const cost = costs[i];
        const curr = Math.min(prev[2] + 1, prev[1] + 4, prev[0] + 9);
        prev[0] = prev[1];
        prev[1] = prev[2];
        prev[2] = curr + cost;
    }

    return prev[2];
};
