// time: O(n)
// space: O(n)

/**
 * @param {number[][]} descriptions
 * @return {TreeNode}
 */
const createBinaryTree = descriptions => {
    const map = {};

    for (const [parent, child] of descriptions) {
        if (!(parent in map)) map[parent] = new TreeNode(parent);
        if (!(child in map)) map[child] = new TreeNode(child);
    }

    for (const [parent, child, isLeft] of descriptions) {
        if (isLeft) map[parent].left = map[child];
        else map[parent].right = map[child];
    }

    for (const [parent, child] of descriptions) delete map[child];
    for (const key in map) return map[key];
};

