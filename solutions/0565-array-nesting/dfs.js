/*
 * @title: DFS
 * @time: O(n)
 * @space: O(n)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const arrayNesting = nums => {
    let result = 0;
    const visited = new Set();
    const dfs = num => {
        if (visited.has(num)) return 0;
        visited.add(num);
        return 1 + dfs(nums[num]);
    };

    for (const num of nums) result = Math.max(result, dfs(num));
    return result;
};
