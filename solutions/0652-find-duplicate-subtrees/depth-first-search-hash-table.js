// time: O(n)
// space: O(n)

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode[]}
 */
const findDuplicateSubtrees = root => {
    const result = [];
    const map = {};

    const scan = node => {
        if (!node) return '*';

        const fingerprint = [node.val, scan(node.left), scan(node.right)].join(
            ','
        );

        map[fingerprint] = (map[fingerprint] || 0) + 1;
        if (map[fingerprint] === 2) result.push(node);

        return fingerprint;
    };

    scan(root);
    return result;
};

