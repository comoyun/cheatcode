/*
 * @title: Binary Search Tree
 * @time: O(n)
 * @space: O(n)
 */

/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
const sortedListToBST = head => {
    const build = head => {
        if (!head) return null;
        if (!head.next) return new TreeNode(head.val);

        let slow = head;
        let fast = head;
        let prev = null;
        while (fast && fast.next) {
            prev = slow;
            slow = slow.next;
            fast = fast.next.next;
        }
        if (prev) prev.next = null;

        const node = new TreeNode(slow.val);

        node.left = build(head);
        node.right = build(slow.next);

        return node;
    };
    return build(head);
};
