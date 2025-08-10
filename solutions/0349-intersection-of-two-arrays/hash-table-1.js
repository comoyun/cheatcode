// time: O(n + m)
// space: O(k)

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersection = (nums1, nums2) => {
    const result = new Set();
    const set = new Set();

    for (const num of nums1) set.add(num);
    for (const num of nums2) if (set.has(num)) result.add(num);

    return [...result];
};
