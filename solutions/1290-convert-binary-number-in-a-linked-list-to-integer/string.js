/*
 * @title: String
 * @time: O(n)
 * @space: O(1)
 */

/**
 * @param {ListNode} head
 * @return {number}
 */
const getDecimalValue = head => {
    let curr = head;
    let bin = '';
    while (curr) {
        bin += curr.val;
        curr = curr.next;
    }
    return parseInt(bin, 2);
};
