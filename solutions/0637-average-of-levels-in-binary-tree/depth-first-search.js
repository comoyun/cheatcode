// time: O(N)
// space: O(H)

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const averageOfLevels = root => {
    const result = [];

    const dfs = (node, level = 0) => {
        if (!node) return;

        result[level] ??= [0, 0];
        result[level][0] += node.val;
        result[level][1]++;

        dfs(node.left, level + 1);
        dfs(node.right, level + 1);
    }


    dfs(root);

    return result.map(el => el[0] / el[1]);
};

