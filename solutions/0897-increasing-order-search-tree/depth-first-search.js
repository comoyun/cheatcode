// time: O(n)
// space: O(n)

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const increasingBST = root => {
    const dummy = {};
    let curr = dummy;
    const dfs = node => {
        if (!node) return;
        dfs(node.left);
        node.left = null;
        curr.right = node;
        curr = node;
        dfs(node.right);
    };

    dfs(root);
    return dummy.right;
};

