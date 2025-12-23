// time: O(N)
// space: O(N)

/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
const isCousins = (root, x, y) => {
    const depth = {};
    let level = 0;

    const dfs = (node, parent = null) => {
        if (!node) return 0;

        depth[node.val] ??= [0, 0];
        depth[node.val][0] = level++;
        depth[node.val][1] = parent;

        dfs(node.right, node.val);
        dfs(node.left, node.val);

        level--;
    };

    dfs(root);

    return depth[x][0] === depth[y][0] && depth[x][1] !== depth[y][1];
};
