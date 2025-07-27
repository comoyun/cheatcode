// time: O(n)
// space: O(n)

/**
 * @param {TreeNode} root
 * @return {number}
 */
const sumOfLeftLeaves = root => {
    const dfs = (node, left = false) => {
        if (!node) return 0;
        if (!node.left && !node.right && left) return node.val;
        return dfs(node.left, true) + dfs(node.right, false);
    };
    return dfs(root);
};
