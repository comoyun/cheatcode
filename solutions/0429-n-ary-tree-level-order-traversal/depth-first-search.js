// time: O(n)
// space: O(w)

/**
 * @param {_Node|null} root
 * @return {number[][]}
 */
const levelOrder = root => {
    const result = [];
    const dfs = (node, level = 0) => {
        if (!node) return;
        if (level >= result.length) result[level] ??= [];
        result[level].push(node.val);
        for (const child of node.children) dfs(child, level + 1);
    };
    dfs(root);
    return result;
};

