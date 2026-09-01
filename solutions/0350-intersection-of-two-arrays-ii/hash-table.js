// time: O(n + m)
// space: O(min(n,m))

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = (nums1, nums2) => {
    const freq = {};
    const result = [];

    for (const num of nums1) freq[num] = (freq[num] || 0) + 1;
    for (const num of nums2) {
        if (freq[num]) {
            result.push(num);
            freq[num]--;
        }
    }

    return result;
};

