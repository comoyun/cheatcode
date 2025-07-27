// time: O(n)
// space: O(n)

/**
 * @param {number[]} nums
 * @return {number}
 */
const maximumLength = nums => {
    const dfs = (idx, parity, count = 0) => {
        if (idx >= nums.length) return count;
        if (nums[idx] % 2 === parity[count % 2]) count++;
        return dfs(idx + 1, parity, count);
    };
    return Math.max(
        dfs(0, [0, 0]),
        dfs(0, [1, 1]),
        dfs(0, [0, 1]),
        dfs(0, [1, 0])
    );
};
