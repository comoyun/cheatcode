// time: O(n)
// space: O(1)

/**
 * @param {ListNode} head
 * @return {number[]}
 */
const nodesBetweenCriticalPoints = head => {
    let a = head;
    let b = head.next;
    let c = head.next.next;

    if (!c) return [-1, -1];

    let first = -1;
    let last = -1;
    let prev = -1;
    let idx = 3;
    let min = Infinity;

    while (c !== null) {
        if (
            (b.val < c.val && b.val < a.val) ||
            (b.val > c.val && b.val > a.val)
        ) {
            if (first === -1) first = idx - 1;

            prev = last;
            last = idx - 1;

            if (prev !== -1) min = Math.min(min, last - prev);
        }

        a = b;
        b = c;
        c = c.next;
        idx++;
    }

    if (min === Infinity) return [-1, -1];

    return [min, last - first];
};
