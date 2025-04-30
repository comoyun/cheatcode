/*
 * @title: Cheat
 * @time: O(n)
 * @space: O(n)
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2) => {
    let sum = toBigInt(l1) + toBigInt(l2);
    if (!sum) return new ListNode(0);

    let head = new ListNode(0),
        tail = head;
    while (sum) {
        tail.next = new ListNode(Number(sum % 10n));
        tail = tail.next;
        sum /= 10n;
    }
    return head.next;
};

const toBigInt = node => {
    let n = 0n,
        mul = 1n;
    while (node) {
        n += BigInt(node.val) * mul;
        mul *= 10n;
        node = node.next;
    }
    return n;
};
