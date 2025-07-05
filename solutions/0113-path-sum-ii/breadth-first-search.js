/*
 * @title: BFS
 * @time: O(n)
 * @space: O(n)
 */

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
const pathSum = (root, targetSum) => {
    if (!root) return [];

    const result = [];
    const queue = [[root, root.val, [root.val]]];

    while (queue.length) {
        const [node, sum, path] = queue.shift();
        if (sum === targetSum && !node.left && !node.right) result.push(path);
        if (node.left)
            queue.push([
                node.left,
                sum + node.left.val,
                [...path, node.left.val],
            ]);
        if (node.right)
            queue.push([
                node.right,
                sum + node.right.val,
                [...path, node.right.val],
            ]);
    }

    return result;
};
