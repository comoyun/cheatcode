// time: O(n)
// space: O(n)

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
const pathSum = (root, targetSum) => {
    let count = 0;

    const dfs = (node, currPath) => {
        if (!node) return;

        currPath.push(node.val);

        let tempSum = 0;
        for (let i = currPath.length - 1; i >= 0; i--) {
            tempSum += currPath[i];
            if (tempSum === targetSum) count++;
        }

        dfs(node.left, currPath);
        dfs(node.right, currPath);

        currPath.pop();
    };

    dfs(root, []);
    return count;
};
