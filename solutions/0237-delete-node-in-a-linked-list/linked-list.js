// time: O(1)
// space: O(1)

/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
const deleteNode = node => {
    node.val = node.next.val;
    node.next = node.next.next;
};
