/*
 * @title: DFS
 * @time: O(n)
 * @space: O(n)
 */

/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
const leafSimilar = (root1, root2) => {
    const areEqual = (a, b) =>
        a.length === b.length && a.every((v, i) => v === b[i]);

    const getLeaves = node => {
        const leaves = [];
        const dfs = node => {
            if (!node) return;
            if (!node.left && !node.right) leaves.push(node.val);
            dfs(node.left);
            dfs(node.right);
        };
        dfs(node);
        return leaves;
    };

    return areEqual(getLeaves(root1), getLeaves(root2));
};
