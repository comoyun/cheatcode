// time: O(n log m + n log n + m log m)
// space: O(k)

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersection = (nums1, nums2) => {
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);
    const result = new Set();

    if (nums1.length > nums2.length) [nums1, nums2] = [nums2, nums1];

    for (const num of nums1) {
        let left = 0;
        let right = nums2.length - 1;
        while (left <= right) {
            const mid = left + Math.floor((right - left) / 2);
            if (nums2[mid] > num) right = mid - 1;
            else if (nums2[mid] < num) left = mid + 1;
            else {
                result.add(num);
                break;
            }
        }
    }

    return [...result];
};
