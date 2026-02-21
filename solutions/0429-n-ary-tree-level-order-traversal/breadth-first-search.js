// time: O(n ^ 2)
// space: O(w)

/**
 * @param {_Node|null} root
 * @return {number[][]}
 */
const levelOrder = root => {
    if (!root) return [];

    const result = [];
    const queue = [root];

    while (queue.length) {
        const len = queue.length;
        const level = [];

        for (let i = 0; i < len; i++) {
            const curr = queue.shift();
            level.push(curr.val);
            for (const child of curr.children) queue.push(child);
        }

        result.push(level);
    }

    return result;
};
