// time: O(n^3)
// space: O(n^2)

/**
 * @param {number[]} stoneValue
 * @return {number}
 */
const stoneGameV = stoneValue => {
    const n = stoneValue.length;
    const memo = Array.from({ length: n }, () => Array(n).fill(-1));
    for (let i = 1; i < n; i++) stoneValue[i] += stoneValue[i - 1];

    const dfs = (left, right) => {
        if (memo[left][right] !== -1) return memo[left][right];
        if (left === right) return 0;

        let result = 0;

        for (let i = left; i < right; i++) {
            const leftSum =
                stoneValue[i] - (left > 0 ? stoneValue[left - 1] : 0);
            const rightSum = stoneValue[right] - stoneValue[i];

            if (leftSum < rightSum) {
                result = Math.max(result, leftSum + dfs(left, i));
            } else if (leftSum > rightSum) {
                result = Math.max(result, rightSum + dfs(i + 1, right));
            } else {
                result = Math.max(
                    result,
                    leftSum + dfs(left, i),
                    rightSum + dfs(i + 1, right)
                );
            }
        }

        return (memo[left][right] = result);
    };

    return dfs(0, n - 1, 0);
};

