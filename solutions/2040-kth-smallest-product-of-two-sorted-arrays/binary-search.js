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
    const getSmallerCount = (x, a, arr) => {
        if (a === 0) return x >= 0 ? arr.length : 0;

        let left = 0,
            right = arr.length - 1,
            res = 0;

        const isPositive = a > 0;

        while (left <= right) {
            const mid = (left + right) >> 1;
            const prod = a * arr[mid];

            if (prod <= x) {
                if (isPositive) {
                    res = mid + 1;
                    left = mid + 1;
                } else {
                    res = arr.length - mid;
                    right = mid - 1;
                }
            } else {
                if (isPositive) right = mid - 1;
                else left = mid + 1;
            }
        }

        return res;
    };

    const getCount = x => {
        let count = 0;
        for (const a of nums1) {
            count += getSmallerCount(x, a, nums2);
        }
        return count;
    };

    let left = -1e10,
        right = 1e10,
        ans = 0;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const count = getCount(mid);
        if (count >= k) {
            ans = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return ans;
};

console.log(kthSmallestProduct([2, 5], [3, 4], 2));
console.log(kthSmallestProduct([-4, -2, 0, 3], [2, 4], 6));
console.log(kthSmallestProduct([-2, -1, 0, 1, 2], [-3, -1, 2, 4, 5], 3));
