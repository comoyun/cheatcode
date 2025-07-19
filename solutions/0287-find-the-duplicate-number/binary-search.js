/*
 * @title: Binary Search
 * @time: O(n log n)
 * @space: O(1)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const findDuplicate = nums => {
    let left = 1,
        right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        let count = 0;
        for (const num of nums) if (num <= mid) count++;

        if (count > mid) right = mid - 1;
        else left = mid + 1;
    }

    return left;
};
