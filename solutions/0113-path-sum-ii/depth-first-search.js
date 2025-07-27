// time: O(n)
// space: O(n)

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
const pathSum = (root, targetSum) => {
    const result = [];
    const path = [];
    const dfs = (node, sum) => {
        if (!node) return;
        path.push(node.val);
        sum += node.val;
        if (!node.left && !node.right && sum == targetSum)
            result.push([...path]);
        dfs(node.left, sum);
        dfs(node.right, sum);
        path.pop();
    };
    dfs(root, 0);
    return result;
};
