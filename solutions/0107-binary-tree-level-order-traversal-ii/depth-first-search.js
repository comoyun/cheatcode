// time: O(n)
// space: O(n)

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrderBottom = root => {
    const result = [];

    const dfs = (node, level) => {
        if (!node) return;

        if (!result[level]) result[level] = [];

        result[level].push(node.val);

        dfs(node.left, level + 1);
        dfs(node.right, level + 1);
    };

    dfs(root, 0);
    return result.reverse();
};
