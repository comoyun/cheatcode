// time: O(n)
// space: O(n)

/**
 * @param {TreeNode} root
 * @return {number}
 */
const sumNumbers = root => {
    let sum = 0;
    let num = 0;
    const dfs = node => {
        if (!node) return;
        num *= 10;
        num += node.val;

        if (!node.left && !node.right) sum += num;

        dfs(node.left);
        dfs(node.right);

        num /= 10;
        num = Math.floor(num);

        return sum;
    };
    return dfs(root);
};
