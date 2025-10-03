// time: O(n * m)
// space: O(1)

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
const numberOfPairs = (nums1, nums2, k) => {
    const n = nums1.length;
    const m = nums2.length;

    let result = 0;
    for (let i = 0; i < n; i++) {
        const a = nums1[i];
        for (let j = 0; j < m; j++) {
            const b = nums2[j] * k;
            if (a % b === 0) result++;
        }
    }

    return result;
};

