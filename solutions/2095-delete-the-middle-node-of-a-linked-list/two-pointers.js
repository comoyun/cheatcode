// time: O(n)
// space: O(1)

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteMiddle = head => {
    let slow = head;
    let fast = head.next;

    if (!fast) return null;

    while (fast && fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    slow.next = slow.next.next;
    return head;
};
