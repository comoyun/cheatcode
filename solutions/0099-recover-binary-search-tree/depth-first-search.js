// time: O(n)
// space: O(n)

/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
const recoverTree = root => {
    const nodes = [];

    const inorder = node => {
        if (!node) return;
        inorder(node.left);
        nodes.push(node);
        inorder(node.right);
    };

    inorder(root);

    let first = null,
        second = null;

    for (let i = 0; i < nodes.length - 1; i++) {
        if (nodes[i].val > nodes[i + 1].val) {
            if (!first) {
                first = nodes[i];
                second = nodes[i + 1];
            } else {
                second = nodes[i + 1];
                break;
            }
        }
    }

    if (first && second) [first.val, second.val] = [second.val, first.val];
};
