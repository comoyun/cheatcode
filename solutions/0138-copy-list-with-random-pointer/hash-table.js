// time: O(n)
// space: O(n)

/**
 * @param {_Node} head
 * @return {_Node}
 */
const copyRandomList = head => {
    const map = new Map();
    const dummy = new _Node(0);
    let curr = head,
        copy = dummy;

    while (curr) {
        const node = new _Node(curr.val);
        map.set(curr, node);
        copy.next = node;
        copy = node;
        curr = curr.next;
    }

    curr = head;
    copy = dummy.next;
    while (curr) {
        copy.random = map.get(curr.random) || null;
        curr = curr.next;
        copy = copy.next;
    }

    return dummy.next;
};
