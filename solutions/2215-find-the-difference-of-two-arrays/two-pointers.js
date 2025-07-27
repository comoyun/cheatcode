// time: O(n log n)
// space: O(1)

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
const findDifference = (nums1, nums2) => {
    const removeDuplicates = arr => {
        let j = 0;
        for (let i = 0; i < arr.length; i++) {
            if (i > 0 && arr[i] === arr[i - 1]) continue;
            arr[j++] = arr[i];
        }
        return j;
    };

    nums1.sort((a, b) => a - b);
    nums1.length = removeDuplicates(nums1);

    nums2.sort((a, b) => a - b);
    nums2.length = removeDuplicates(nums2);

    const result = [[], []];

    let i = 0,
        j = 0;
    while (i < nums1.length || j < nums2.length) {
        const a = i < nums1.length ? nums1[i] : Infinity,
            b = j < nums2.length ? nums2[j] : Infinity;
        if (a < b) {
            result[0].push(a);
            i++;
        } else if (a > b) {
            result[1].push(b);
            j++;
        } else {
            i++;
            j++;
        }
    }
    return result;
};
