// time: O(n)
// space: O(1)

/**
 * @param {TreeNode} root
 * @return {number}
 */
const getMinimumDifference = root => {
    let prev = null;
    let min = Infinity;

    const dfs = node => {
        if (!node) return;
        dfs(node.left);
        if (prev !== null) min = Math.min(min, node.val - prev);
        prev = node.val;
        dfs(node.right);
    };

    dfs(root);
    return min;
};
