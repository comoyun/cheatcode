// time: O(n)
// space: O(n)

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const invertTree = root => {
    if (!root) return null;
    const dfs = node => {
        if (!node) return;

        const temp = node.left;
        node.left = node.right;
        node.right = temp;

        dfs(node.left);
        dfs(node.right);
    };
    dfs(root);
    return root;
};
