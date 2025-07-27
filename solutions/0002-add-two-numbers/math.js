// time: O(n)
// space: O(n)

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2) => {
    const result = new ListNode(0);
    let curr = result,
        carry = 0,
        digit = 0;

    while (l1 || l2 || carry) {
        const nextNode = new ListNode(0);

        const a = l1 ? l1.val : 0,
            b = l2 ? l2.val : 0;

        const sum = a + b + carry;
        digit = sum % 10;
        carry = Math.floor(sum / 10);

        l1 = l1?.next;
        l2 = l2?.next;

        nextNode.val = digit;
        curr.next = nextNode;
        curr = nextNode;
    }

    return result.next;
};
