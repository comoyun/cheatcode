// time: O(n)
// space: O(n)

/**
 * @param {TreeNode} root
 * @return {number}
 */
const rob = root => {
    const memo = new Map();

    const dfs = node => {
        if (!node) return 0;
        if (memo.has(node)) return memo.get(node);

        let take = node.val;
        if (node.left) take += dfs(node.left.left) + dfs(node.left.right);
        if (node.right) take += dfs(node.right.left) + dfs(node.right.right);

        let skip = dfs(node.left) + dfs(node.right);

        let res = Math.max(take, skip);
        memo.set(node, res);
        return res;
    };

    return dfs(root);
};

