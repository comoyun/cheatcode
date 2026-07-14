// time: O(n * m^2)
// space: O(n * m^2)

/**
 * @param {number[]} nums
 * @return {number}
 */
const subsequencePairCount = nums => {
    const memo = {};
    const MOD = 10 ** 9 + 7;

    const gcd = (a, b) => {
        while (b) {
            const next = b;
            b = a % b;
            a = next;
        }
        return a;
    };

    const dfs = (a, b, i) => {
        const key = (i * 201 + a) * 201 + b;

        if (key in memo) return memo[key];
        if (i === nums.length) return a && a === b ? 1 : 0;

        const result =
            (dfs(gcd(a, nums[i]), b, i + 1) +
                dfs(a, gcd(b, nums[i]), i + 1) +
                dfs(a, b, i + 1)) %
            MOD;

        memo[key] = result;
        return result;
    };

    return dfs(0, 0, 0);
};
