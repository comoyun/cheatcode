// time: O(n)
// space: O(n)

/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
const buildTree = (inorder, postorder) => {
    let idx = postorder.length - 1;
    const build = bank => {
        if (idx < 0) return null;
        if (!bank.length) return null;

        const val = postorder[idx--];
        const node = new TreeNode(val);

        let i = bank.indexOf(val);

        node.right = build(bank.slice(i + 1));
        node.left = build(bank.slice(0, i));

        return node;
    };
    return build(inorder);
};

