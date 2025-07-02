/*
 * @title: BFS
 * @time: O(n)
 * @space: O(n)
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
const connect = root => {
    if (!root) return null;

    const queue = [root];
    while (queue.length) {
        const length = queue.length;
        let prev = null;
        for (let i = 0; i < length; i++) {
            const node = queue.shift();
            if (prev) prev.next = node;
            prev = node;
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }
    return root;
};
