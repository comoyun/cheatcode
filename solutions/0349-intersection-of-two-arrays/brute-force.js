// time: O(n * m)
// space: O(k)

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersection = (nums1, nums2) => {
    const result = new Set();
    for (const a of nums1) {
        for (const b of nums2) {
            if (a === b) {
                result.add(a);
                break;
            }
        }
    }
    return [...result];
};
