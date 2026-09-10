// time: O(n)
// space: O(n)

/**
 * @param {TreeNode} root
 * @return {number}
 */
const averageOfSubtree = root => {
    const dfs = node => {
        if (!node) return { sum: 0, nodes: 0, result: 0 };

        const [left, right] = [dfs(node.left), dfs(node.right)];

        const total = left.sum + right.sum + node.val;
        const nodes = left.nodes + right.nodes + 1;
        const average = Math.floor(total / nodes);

        let result = left.result + right.result;

        if (node.val === average) result++;

        return { sum: total, nodes, result };
    };

    return dfs(root).result;
};

