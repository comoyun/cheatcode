// time: O(N)
// space: O(H)

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const subtreeWithAllDeepest = root => {
    const getMaxDepth = node => {
        if (!node) return 0;
        return 1 + Math.max(getMaxDepth(node.left), getMaxDepth(node.right));
    };

    const maxDepth = getMaxDepth(root);
    let result = null;

    const dfs = (node, depth = 1) => {
        if (!node) return false;
        if (depth === maxDepth) {
            result = node;
            return true;
        }

        const left = dfs(node.left, depth + 1);
        const right = dfs(node.right, depth + 1);

        if (left && right) result = node;
        return left || right;
    };

    dfs(root);
    return result;
};

