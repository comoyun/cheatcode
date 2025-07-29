// time: O(n^2 log n)
// space: O(n)

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const smallestSubarrays = nums => {
    /* WARNING: This solution gives TLE */
    const n = nums.length;
    const result = new Array(n).fill(0);
    const suffixOr = [...nums];

    for (let i = n - 2; i >= 0; i--) suffixOr[i] |= suffixOr[i + 1];

    const getOr = (from, to) => {
        let or = 0;
        for (let i = from; i <= to; i++) or |= nums[i];
        return or;
    };

    for (let i = 0; i < n; i++) {
        const target = suffixOr[i];
        let left = i;
        let right = n - 1;

        while (left <= right) {
            const mid = left + ((right - left) >> 1);
            const or = getOr(i, mid);

            if (or < target) left = mid + 1;
            else right = mid - 1;
        }

        result[i] = left - i + 1;
    }

    return result;
};
