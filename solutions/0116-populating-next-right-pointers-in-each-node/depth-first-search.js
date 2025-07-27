// time: O(n)
// space: O(log n)

/**
 * @param {_Node} root
 * @return {_Node}
 */
const connect = root => {
    const dfs = (node, next) => {
        if (!node) return;
        node.next = next;
        dfs(node.left, node.right);
        dfs(node.right, next ? next.left : null);
    };
    dfs(root, null);
    return root;
};
