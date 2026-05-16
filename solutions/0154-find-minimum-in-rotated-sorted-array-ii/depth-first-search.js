// time: O(n)
// space: O(n)

/**
 * @param {number[]} nums
 * @return {number}
 */
const findMin = nums => {
    const dfs = (left, right) => {
        if (left >= right) return nums[left];
        if (nums[left] < nums[right]) return nums[left];
        const mid = left + ((right - left) >> 1);
        return Math.min(dfs(left, mid), dfs(mid + 1, right));
    };
    return dfs(0, nums.length - 1);
};
