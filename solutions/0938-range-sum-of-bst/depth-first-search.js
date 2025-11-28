// time: O(n)
// space: O(n)

/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
const rangeSumBST = (root, low, high) => {
    const dfs = node => {
        if (!node) return 0;
        if (node.val > high) return dfs(node.left);
        if (node.val < low) return dfs(node.right);
        return node.val + dfs(node.left) + dfs(node.right);
    };

    return dfs(root);
};

