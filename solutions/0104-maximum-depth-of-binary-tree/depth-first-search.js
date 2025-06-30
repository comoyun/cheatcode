/*
 * @title: DFS
 * @time: O(n)
 * @space: O(n)
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepth = root => {
    const dfs = node => {
        if (!node) return 0;
        return 1 + Math.max(dfs(node.left), dfs(node.right));
    };
    return dfs(root);
};
