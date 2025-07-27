// time: O(n)
// space: O(n)

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function (root) {
    if (!root) return null;

    const dfs = (node, next) => {
        if (!node) return;

        node.next = next;

        const getNext = n => {
            while (n) {
                if (n.left) return n.left;
                if (n.right) return n.right;
                n = n.next;
            }
            return null;
        };

        dfs(node.right, getNext(next));
        dfs(node.left, node.right ? node.right : getNext(next));
    };

    dfs(root, null);
    return root;
};
