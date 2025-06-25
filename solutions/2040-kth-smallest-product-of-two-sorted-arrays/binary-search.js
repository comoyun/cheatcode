/*
 * @title: Binary Search
 * @time: O(log(range) len(nums1) log(len(nums2)))
 * @space: O(1)
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
const kthSmallestProduct = (nums1, nums2, k) => {
    const getSmallerCount = (x, a) => {
        if (a === 0) return x >= 0 ? nums2.length : 0;

        let count = 0;
        let left = 0,
            right = nums2.length - 1;

        if (a > 0) {
            while (left <= right) {
                const mid = Math.floor((left + right) / 2);
                if (a * nums2[mid] <= x) {
                    count = mid + 1;
                    left = mid + 1;
                    continue;
                }
                right = mid - 1;
            }
        } else {
            while (left <= right) {
                const mid = Math.floor((left + right) / 2);
                if (a * nums2[mid] <= x) {
                    count = nums2.length - mid;
                    right = mid - 1;
                    continue;
                }
                left = mid + 1;
            }
        }

        return count;
    };

    const getCount = x =>
        nums1.reduce((acc, curr) => acc + getSmallerCount(x, curr), 0);

    let left = -1e10,
        right = 1e10,
        ans = 0;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const count = getCount(mid);
        if (count >= k) {
            ans = mid;
            right = mid - 1;
            continue;
        }
        left = mid + 1;
    }

    return ans;
};
