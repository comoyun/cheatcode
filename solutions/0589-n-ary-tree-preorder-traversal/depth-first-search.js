// time: O(n)
// space: O(n)

/**
 * @param {_Node|null} root
 * @return {number[]}
 */
const preorder = root => {
    const result = [];
    const traverse = node => {
        if (!node) return;
        result.push(node.val);
        for (const child of node.children) traverse(child);
    };
    traverse(root);
    return result;
};

