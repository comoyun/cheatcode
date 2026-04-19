// time: O(n + m)
// space: O(1)

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const maxDistance = (nums1, nums2) => {
    let i = 0,
        j = 0,
        result = 0;

    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] > nums2[j]) i++;
        else if (i > j) j++;
        else result = Math.max(result, j++ - i);
    }

    return result;
};

