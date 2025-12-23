// time: O(N)
// space: O(1)

/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
const isCousins = (root, x, y) => {
    let foundX = false;
    let xDepth = -1;
    let xParent = -1;

    let foundY = false;
    let yDepth = -1;
    let yParent = -1;

    const dfs = (node, level, parent = null) => {
        if (!node) return;

        if (node.val === x) {
            foundX = true;
            xDepth = level;
            xParent = parent;
            return;
        }

        if (node.val === y) {
            foundY = true;
            yDepth = level;
            yParent = parent;
            return;
        }

        dfs(node.left, level + 1, node.val);
        dfs(node.right, level + 1, node.val);
    };

    dfs(root, 0);

    if (foundX && foundY) return xDepth === yDepth && xParent !== yParent;
    return false;
};
