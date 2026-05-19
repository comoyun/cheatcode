// time: O(n)
// space: O(1)

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const getCommon = (nums1, nums2) => {
    let i = 0;
    let j = 0;

    while (i < nums1.length && j < nums2.length) {
        const a = nums1[i];
        const b = nums2[j];

        if (a > b) j++;
        else if (b > a) i++;
        else return a;
    }

    return -1;
};

