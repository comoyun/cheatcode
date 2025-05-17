/*
 * @title: Stack
 * @time: O(n)
 * @space: O(n)
 */

/**
 * @param {ListNode} head
 * @return {number}
 */
const pairSum = head => {
    const stack = [];
    let slow = head,
        fast = head,
        result = 0;
    while (fast && fast.next) {
        stack.push(slow.val);
        slow = slow.next;
        fast = fast.next.next;
    }
    while (stack.length) {
        const twin = stack.pop();
        result = Math.max(twin + slow.val, result);
        slow = slow.next;
    }
    return result;
};
