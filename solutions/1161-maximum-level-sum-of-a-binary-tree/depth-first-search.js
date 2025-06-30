/*
 * @title: DFS
 * @time: O(n)
 * @space: O(n)
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxLevelSum = root => {
    let result = 0,
        max = -Infinity,
        level = 0;
    const levels = {};
    const dfs = node => {
        if (!node) return;
        level++;

        levels[level] = (levels[level] || 0) + node.val;

        dfs(node.left);
        dfs(node.right);
        level--;
    };

    dfs(root);
    for (const level in levels) {
        if (levels[level] > max) {
            max = levels[level];
            result = +level;
        }
    }
    return result;
};
