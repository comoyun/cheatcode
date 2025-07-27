// time: O(n)
// space: O(n)

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const zigzagLevelOrder = root => {
    if (!root) return [];
    const queue = [root];
    const levels = [];
    while (queue.length) {
        const length = queue.length;
        const level = [];
        for (let i = 0; i < length; i++) {
            const curr = queue.shift();
            level.push(curr.val);
            if (curr.left) queue.push(curr.left);
            if (curr.right) queue.push(curr.right);
        }
        levels.push(level);
    }
    return levels.map((level, idx) => (idx & 1 ? level.reverse() : level));
};
