// time: O(n)
// space: O(n)

/**
 * @param {TreeNode} root
 * @return {number}
 */
const findTilt = root => {
    let result = 0;
    const dfs = node => {
        if (!node) return 0;
        const left = dfs(node.left);
        const right = dfs(node.right);
        result += Math.abs(left - right);
        return node.val + left + right;
    };
    dfs(root);
    return result;
};

