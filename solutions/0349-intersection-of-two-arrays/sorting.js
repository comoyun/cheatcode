// time: O(n log n + m log m)
// space: O(k)

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersection = (nums1, nums2) => {
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);
    const result = [];

    let i = 0, j = 0;
    while (i < nums1.length && j < nums2.length) {
        const a = nums1[i++];
        while (i < nums1.length && nums1[i] === a) i++;
        while (j < nums2.length && nums2[j] < a) j++;
        if (j < nums2.length && nums2[j] === a) result.push(a);
    }

    return result;
};
