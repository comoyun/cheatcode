// time: O(n^2)
// space: O(n)

/**
 * @param {ListNode} head
 * @return {number}
 */
const pairSum = head => {
    let length = 0;
    let result = 0;
    const dfs = (node, idx = 1) => {
        if (!node) return [];

        length++;
        const rest = dfs(node.next, idx + 1);

        if (idx > length / 2) return [...rest, node.val];

        result = Math.max(result, node.val + rest.pop());

        return rest;
    };

    dfs(head);

    return result;
};
