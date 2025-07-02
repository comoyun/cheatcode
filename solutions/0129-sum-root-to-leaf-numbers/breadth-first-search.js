/*
 * @title: BFS
 * @time: O(n)
 * @space: O(n)
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
const sumNumbers = root => {
    const queue = [[root, root.val]];
    let sum = 0;
    while (queue.length) {
        const [node, value] = queue.shift();
        if (!node.left && !node.right) sum += value;
        if (node.left) queue.push([node.left, value * 10 + node.left.val]);
        if (node.right) queue.push([node.right, value * 10 + node.right.val]);
    }
    return sum;
};
