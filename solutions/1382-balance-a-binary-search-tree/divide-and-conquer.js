// time: O(N)
// space: O(N)

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const balanceBST = root => {
    const arr = [];

    const inorder = node => {
        if (!node) return;
        inorder(node.left);
        arr.push(node.val);
        inorder(node.right);
    };

    inorder(root);

    const build = (left, right) => {
        if (left > right) return null;

        const mid = left + Math.floor((right - left) / 2);
        const node = new TreeNode(arr[mid]);

        node.left = build(left, mid - 1);
        node.right = build(mid + 1, right);

        return node;
    };

    return build(0, arr.length - 1);
};

