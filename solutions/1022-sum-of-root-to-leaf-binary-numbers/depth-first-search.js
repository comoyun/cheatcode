// time: O(n)
// space: O(n)

/**
 * @param {TreeNode} root
 * @return {number}
 */
const sumRootToLeaf = root => {
    const dfs = (node, curr) => {
        if (!node) return 0;
        curr = (curr << 1) | node.val;
        if (!node.left && !node.right) return curr;
        return dfs(node.left, curr) + dfs(node.right, curr);
    };
    return dfs(root, 0);
};
