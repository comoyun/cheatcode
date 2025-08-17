// time: O(k * maxPts)
// space: O(k)

/**
 * @param {number} n
 * @param {number} k
 * @param {number} maxPts
 * @return {number}
 */
const new21Game = (n, k, maxPts) => {
    /* WARNING: This solution gives TLE */
    const memo = new Array(k).fill(null);
    const dfs = total => {
        if (total >= k) return total <= n ? 1 : 0;
        if (memo[total] !== null) return memo[total];

        let sum = 0;
        for (let i = 1; i <= maxPts; i++) sum += dfs(total + i);

        memo[total] = sum / maxPts;
        return memo[total];
    };
    return dfs(0);
};

