/*
 * @title: Bitwise
 * @time: O(n)
 * @space: O(1)
 */

/**
 * @param {ListNode} head
 * @return {number}
 */
const getDecimalValue = head => {
    let curr = head;
    let result = 0;
    while (curr) {
        result <<= 1;
        result |= curr.val;
        curr = curr.next;
    }
    return result;
};
