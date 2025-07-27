// time: O(n)
// space: O(n)

/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxLevelSum = root => {
    const queue = [root];
    let level = 1,
        res = 0,
        max = -Infinity,
        i = 0;
    while (i < queue.length) {
        let len = queue.length - i,
            sum = 0;
        for (let j = 0; j < len; j++) {
            const curr = queue[i++];
            sum += curr.val;
            if (curr.left) queue.push(curr.left);
            if (curr.right) queue.push(curr.right);
        }
        if (sum > max) {
            max = sum;
            res = level;
        }
        level++;
    }
    return res;
};
