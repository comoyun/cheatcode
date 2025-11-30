// time: O(n)
// space: O(n)

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const increasingBST = root => {
    const dummy = {};
    let curr = dummy;
    const stack = [];

    let node = root;
    while (node || stack.length) {
        while (node) {
            stack.push(node);
            node = node.left;
        }

        node = stack.pop();

        node.left = null;
        curr.right = node;
        curr = node;

        node = node.right;
    }

    return dummy.right;
};
