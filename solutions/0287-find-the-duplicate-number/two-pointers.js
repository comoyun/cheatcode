// time: O(n)
// space: O(1)

/**
 * @param {number[]} nums
 * @return {number}
 */
const findDuplicate = nums => {
    let slow = nums[0];
    let fast = nums[0];

    while (true) {
        slow = nums[slow];
        fast = nums[nums[fast]];
        if (slow === fast) break;
    }

    let ptr1 = nums[0];
    let ptr2 = slow;
    while (ptr1 !== ptr2) {
        ptr1 = nums[ptr1];
        ptr2 = nums[ptr2];
    }

    return ptr1;
};
