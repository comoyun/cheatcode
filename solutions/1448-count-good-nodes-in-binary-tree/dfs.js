/*
 * @title: DFS
 * @time: O(n)
 * @space: O(n)
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
const goodNodes = root => {
    let count = 0;
    const dfs = (node, maxSeen = -Infinity) => {
        if (!node) return;
        if (node.val >= maxSeen) {
            count++;
            maxSeen = node.val;
        }

        dfs(node.left, maxSeen);
        dfs(node.right, maxSeen);
    };
    dfs(root);
    return count;
};
