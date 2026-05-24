// time: O(n * d)
// space: O(n)

/**
 * @param {number[]} arr
 * @param {number} d
 * @return {number}
 */
const maxJumps = (arr, d) => {
    const n = arr.length;
    const memo = Array(n).fill(-1);

    const dfs = i => {
        if (memo[i] !== -1) return memo[i];

        let best = 0;

        for (let j = i - 1; j >= Math.max(0, i - d); j--) {
            if (arr[j] >= arr[i]) break;
            best = Math.max(best, dfs(j));
        }

        for (let j = i + 1; j <= Math.min(n - 1, i + d); j++) {
            if (arr[j] >= arr[i]) break;
            best = Math.max(best, dfs(j));
        }

        return (memo[i] = best + 1);
    };

    let result = 0;
    for (let i = 0; i < n; i++) result = Math.max(result, dfs(i));

    return result;
};

