// time: O(2^n)
// space: O(n)

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const predictTheWinner = nums => {
    const dfs = (a, b, turn, l, r) => {
        if (l > r) return a >= b;

        if (turn) {
            return (
                dfs(a + nums[l], b, false, l + 1, r) ||
                dfs(a + nums[r], b, false, l, r - 1)
            );
        }

        return (
            dfs(a, b + nums[l], true, l + 1, r) &&
            dfs(a, b + nums[r], true, l, r - 1)
        );
    };

    return dfs(0, 0, true, 0, nums.length - 1);
};
