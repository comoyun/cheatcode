// time: O(n)
// space: O(n)

/**
 * @param {TreeNode} root
 * @return {number}
 */
const sumNumbers = root => {
    const stack = [[root, root.val.toString()]];
    let sum = 0;
    while (stack.length) {
        const [node, num] = stack.pop();
        if (!node.left && !node.right) sum += parseInt(num);
        if (node.left) stack.push([node.left, num + node.left.val]);
        if (node.right) stack.push([node.right, num + node.right.val]);
    }
    return sum;
};
