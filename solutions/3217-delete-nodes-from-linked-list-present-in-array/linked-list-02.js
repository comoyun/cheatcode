// time: O(m)
// space: O(n)

/**
 * @param {number[]} nums
 * @param {ListNode} head
 * @return {ListNode}
 */
const modifiedList = (nums, head) => {
    const set = new Set([...nums]);

    let dummy = new ListNode(null, head);
    let curr = dummy;

    while (curr && curr.next) {
        if (set.has(curr.next.val)) curr.next = curr.next.next;
        else curr = curr.next;
    }

    return dummy.next;
};
