// time: O(n + m)
// space: O(n + m)

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = (nums1, nums2) => {
    const merged = [];
    let i = 0,
        j = 0;

    if (nums1[0] > nums2[0]) [nums1, nums2] = [nums2, nums1];

    while (i < nums1.length || j < nums2.length) {
        if (i >= nums1.length) merged.push(nums2[j++]);
        else if (j >= nums2.length) merged.push(nums1[i++]);
        else merged.push(nums1[i] < nums2[j] ? nums1[i++] : nums2[j++]);
    }

    const mid = Math.floor(merged.length / 2);

    if (merged.length % 2 === 0) return (merged[mid - 1] + merged[mid]) / 2;
    return merged[mid];
};

