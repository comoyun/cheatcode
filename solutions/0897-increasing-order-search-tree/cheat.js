// time: O(n log n)
// space: O(n)

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const increasingBST = root => {
    const dummy = {};
    let curr = dummy;
    const stack = [root];
    const result = [];

    while (stack.length) {
        const node = stack.pop();
        result.push(node);

        if (node.left) stack.push(node.left);
        if (node.right) stack.push(node.right);
    }

    result.sort((a, b) => a.val - b.val);

    for (const node of result) {
        node.left = null;
        curr.right = node;
        curr = node;
    }

    return dummy.right;
};
