// time: O(n)
// space: O(n)

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const lowestCommonAncestor = (root, p, q) => {
    let result;
    const dfs = node => {
        if (!node) return 0;
        let sum = dfs(node.left) + dfs(node.right);
        if (node === p || node === q) sum++;
        if (sum === 2 && !result) result = node;
        return sum;
    };
    dfs(root);
    return result;
};
