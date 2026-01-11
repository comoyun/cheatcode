// time: O(N * N)
// space: O(W)

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const averageOfLevels = root => {
    const result = [];
    const queue = [root];

    while (queue.length) {
        let sum = 0;
        let count = queue.length;

        for (let i = 0; i < count; i++) {
            const curr = queue.shift();
            sum += curr.val;

            if (curr.left) queue.push(curr.left);
            if (curr.right) queue.push(curr.right);
        }

        result.push(sum / count);
    }

    return result;
};

