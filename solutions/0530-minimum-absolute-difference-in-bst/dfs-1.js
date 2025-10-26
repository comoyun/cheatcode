// time: O(n)
// space: O(n)

/**
 * @param {TreeNode} root
 * @return {number}
 */
const getMinimumDifference = root => {
    const result = [];
    const dfs = node => {
        if (!node) return;
        dfs(node.left);
        result.push(node.val);
        dfs(node.right);
    };

    dfs(root);

    let min = Infinity;
    for (let i = 1; i < result.length; i++) {
        const a = result[i];
        const b = result[i - 1];

        if (a - b < min) min = Math.abs(a - b);
    }

    return min;
};

