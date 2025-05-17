/*
 * @title: Two Pointers
 * @time: O(n)
 * @space: O(1)
 */

/**
 * @param {ListNode} head
 * @return {number}
 */
const pairSum = head => {
    let prev = null,
        curr = head,
        slow = head,
        fast = head,
        result = 0;
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = curr.next;
        curr.next = prev;
        prev = curr;
        curr = slow;
    }

    while (slow) {
        result = Math.max(slow.val + prev.val, result);
        prev = prev.next;
        slow = slow.next;
    }

    return result;
};
