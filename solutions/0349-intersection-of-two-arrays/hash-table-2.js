// time: O(n + m)
// space: O(n)

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersection = (nums1, nums2) => {
    const result = [];
    const map = {};

    for (const num of nums1) map[num] = 1;
    for (const num of nums2) {
        if (num in map && map[num] === 1) {
            map[num]++;
            result.push(num);
        }
    }

    return result;
};
