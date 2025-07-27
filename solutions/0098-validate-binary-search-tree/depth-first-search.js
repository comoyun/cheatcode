// time: O(n)
// space: O(n)

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isValidBST = root => {
    const dfs = (node, min = -Infinity, max = Infinity) => {
        if (!node) return true;
        const val = node.val;

        if (val <= min || val >= max) return false;

        return dfs(node.left, min, val) && dfs(node.right, val, max);
    };
    return dfs(root);
};
