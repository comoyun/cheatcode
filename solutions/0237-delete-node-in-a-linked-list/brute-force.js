// time: O(n)
// space: O(1)

/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
const deleteNode = node => {
    let next = node.next;
    let prev = null;
    let curr = node;

    while (next) {
        curr.val = next.val;
        prev = curr;
        curr = curr.next;
        next = next.next;
    }

    prev.next = null;
};

