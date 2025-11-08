// time: O(n)
// space: O(n)

/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

const getTargetCopy = (original, cloned, target) => {
    const dfs = (aNode, bNode) => {
        if (aNode === null) return null;
        if (aNode === target) return bNode;

        return dfs(aNode.left, bNode.left) || dfs(aNode.right, bNode.right);
    };

    return dfs(original, cloned);
};

