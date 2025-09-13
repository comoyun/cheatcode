// time: O()
// space: O()

/**
 * @param {TreeNode} root
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */
const addOneRow = (root, val, depth) => {
    if (depth === 1) {
        const newRoot = new TreeNode(val);
        newRoot.left = root;
        return newRoot;
    }

    const dfs = (node, level) => {
        if (!node) return;

        if (level === depth - 1) {
            const left = new TreeNode(val);
            const right = new TreeNode(val);

            left.left = node.left;
            right.right = node.right;

            node.left = left;
            node.right = right;
        } else {
            dfs(node.left, level + 1);
            dfs(node.right, level + 1);
        }
    };

    dfs(root, 1);
    return root;
};

