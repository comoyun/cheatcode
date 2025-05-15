/*
 * @title: Two-pointers
 * @time: O(n)
 * @space: O(1)
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteMiddle = head => {
    if (!head || !head.next) return null;

    let slow = null,
        fast = head;
    while (fast && fast.next) {
        if (slow) slow = slow.next;
        else slow = head;
        fast = fast.next.next;
    }

    slow.next = slow.next.next;
    return head;
};
