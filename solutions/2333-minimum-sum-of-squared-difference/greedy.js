// time: O(n log n)
// space: O(n)

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k1
 * @param {number} k2
 * @return {number}
 */
const minSumSquareDiff = (nums1, nums2, k1, k2) => {
    const freq = {};
    const arr = [];
    let total = k1 + k2;
    let result = 0;

    for (let i = 0; i < nums1.length; i++) {
        const diff = Math.abs(nums1[i] - nums2[i]);
        freq[diff] = (freq[diff] || 0) + 1;
    }

    for (const key in freq) arr.push([+key, freq[key]]);

    arr.sort((a, b) => b[0] - a[0]);

    for (let i = 0; i < arr.length; i++) {
        const [val, count] = arr[i];
        const next = arr[i + 1]?.[0] || 0;
        const cost = (val - next) * count;

        if (total >= cost) {
            total -= cost;
            if (arr[i + 1]) arr[i + 1][1] += count;
            continue;
        }

        const div = Math.floor(total / count);
        const rem = total % count;
        const newVal = val - div;

        result += newVal ** 2 * (count - rem);
        result += (newVal - 1) ** 2 * rem;

        for (let j = i + 1; j < arr.length; j++)
            result += arr[j][0] ** 2 * arr[j][1];

        return result;
    }

    return result;
};
