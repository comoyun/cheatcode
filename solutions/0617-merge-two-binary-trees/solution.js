// time: O(n)
// space: O(1)

/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
const mergeTrees = (root1, root2) => {
    const dfs = (a, b) => {
        if (!a && b) return b;
        if (a && !b) return a;
        if (!a && !b) return null;
        b.val += a.val;
        b.left = dfs(a.left, b.left);
        b.right = dfs(a.right, b.right);
        return b;
    };

    return dfs(root1, root2);
};
