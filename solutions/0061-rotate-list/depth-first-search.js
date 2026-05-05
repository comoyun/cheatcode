// time: O(n)
// space: O(n)

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const rotateRight = (head, k) => {
    let tail = null;
    const dfs = (node, length) => {
        if (!node) return 0;

        const count = dfs(node.next, length + 1);

        if (!node.next) {
            k %= length;
            tail = node;
        }

        if (count === k) {
            if (k === 0) return;
            const temp = head;
            head = node.next;
            node.next = null;
            tail.next = temp;
        }

        return count + 1;
    };

    dfs(head, 1);
    return head;
};

