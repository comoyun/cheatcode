/*
 * @title: DFS
 * @time: O(n)
 * @space: O(n)
 */

/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
const flatten = root => {
    const preorder = [];
    const dfs = node => {
        if (!node) return;
        preorder.push(node);
        dfs(node.left);
        dfs(node.right);
    };

    dfs(root);
    let curr = preorder.shift();

    for (const node of preorder) {
        curr.left = null;
        curr.right = node;
        curr = node;
    }
};
