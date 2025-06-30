/*
 * @title: DFS
 * @time: O(n)
 * @space: O(n)
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
const longestZigZag = root => {
    let longest = 0;
    const dfs = (node, right = true, count = 1) => {
        if (!node) return;

        longest = Math.max(count, longest);
        dfs(node.right, !right, right ? count + 1 : 1);
        dfs(node.left, right, !right ? count + 1 : 1);
    };
    dfs(root);
    return longest;
};
