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
        let next = curr.next;
        while (next && set.has(next.val)) next = next.next;
        curr.next = next;
        curr = next;
    }

    return dummy.next;
};

