// time: O(N)
// space: O(N)

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isBalanced = root => {
    const dfs = node => {
        if (!node) return 0;
        const left = dfs(node.left);
        const right = dfs(node.right);
        const diff = left - right;

        if (Math.abs(diff) > 1) return Infinity;

        return 1 + Math.max(left, right);
    };
    return dfs(root) !== Infinity;
};

