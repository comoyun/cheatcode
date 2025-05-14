/*
 * @title: Dfs
 * @time: O(n)
 * @space: O(n)
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
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
