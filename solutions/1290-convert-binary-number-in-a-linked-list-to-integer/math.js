// time: O(n)
// space: O(1)

/**
 * @param {ListNode} head
 * @return {number}
 */
const getDecimalValue = head => {
    let len = 0;
    let curr = head;
    while (curr) {
        len++;
        curr = curr.next;
    }
    let result = 0;
    curr = head;
    while (curr) {
        result += curr.val * Math.pow(2, --len);
        curr = curr.next;
    }
    return result;
};
