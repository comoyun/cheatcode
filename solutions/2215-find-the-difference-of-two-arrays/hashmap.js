// time: O(n)
// space: O(n)

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
const findDifference = (nums1, nums2) => {
    const seen1 = {},
          seen2 = {};
    const res = [[], []];

    for (const n of nums1) seen1[n] = true;
    for (const n of nums2) seen2[n] = true;

    for (const n in seen1) 
        if (!(n in seen2)) res[0].push(+n);
    for (const n in seen2)
        if (!(n in seen1)) res[1].push(+n);

    return res;
};
