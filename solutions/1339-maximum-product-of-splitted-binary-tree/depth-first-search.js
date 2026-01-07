// time: O(N)
// space: O(N)

/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxProduct = root => {
    const MOD = 10 ** 9 + 7;
    let result = 0;

    const getSum = node => {
        if (!node) return 0;
        return node.val + getSum(node.right) + getSum(node.left);
    };

    const sum = getSum(root);

    const dfs = node => {
        if (!node) return 0;

        let leftSum = dfs(node.left);
        let rightSum = dfs(node.right);
        const cur = node.val + leftSum + rightSum;

        result = Math.max(result, cur * (sum - cur));
        return cur;
    };

    dfs(root);
    return result % MOD;
};

