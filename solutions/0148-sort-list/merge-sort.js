/*
 * @title: Merge Sort
 * @time: O(n logn)
 * @space: O(log n)
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const sortList = head => {
    const merge = (list1, list2) => {
        const dummy = new Node();
        let curr = dummy;

        while (list1 && list2) {
            if (list1.val < list2.val) {
                curr.next = list1;
                list1 = list1.next;
            } else {
                curr.next = list2;
                list2 = list2.next;
            }
            curr = curr.next;
        }

        curr.next = list1 || list2;
        return dummy.next;
    };

    const mergeSort = list => {
        if (!list) return null;
        if (!list.next) return list;

        let slow = list,
            fast = list;
        while (fast?.next?.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        const cap = slow.next;
        slow.next = null;

        const left = mergeSort(list);
        const right = mergeSort(cap);

        return merge(left, right);
    };

    return mergeSort(head);
};
