// time: O(N)
// space: O(N)

/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxLevelSum = root => {
    const levels = [];

    const dfs = (node, level = 0) => {
        if (!node) return;

        levels[level] ??= 0;
        levels[level] += node.val;

        dfs(node.left, level + 1);
        dfs(node.right, level + 1);
    };

    dfs(root);

    const max = Math.max(...levels);
    for (let i = 0; i < levels.length; i++) 
        if (levels[i] === max) return i + 1;
};
