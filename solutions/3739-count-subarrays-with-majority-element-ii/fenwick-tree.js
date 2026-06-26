// time: O(n log n)
// space: O(n)

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const countMajoritySubarrays = (nums, target) => {
    const n = nums.length;
    const arr = new Array(n);

    for (let i = 0; i < n; i++) arr[i] = nums[i] === target ? 1 : -1;

    const prefix = new Array(n + 1).fill(0);
    for (let i = 1; i < prefix.length; i++)
        prefix[i] = prefix[i - 1] + arr[i - 1];

    const values = [...new Set(prefix)].sort((a, b) => a - b);

    const rank = new Map();
    for (let i = 0; i < values.length; i++) rank.set(values[i], i + 1);

    const bit = new Array(values.length + 1).fill(0);

    const update = i => {
        while (i < bit.length) {
            bit[i]++;
            i += i & -i;
        }
    };

    const query = i => {
        let result = 0;
        while (i > 0) {
            result += bit[i];
            i -= i & -i;
        }
        return result;
    };

    let result = 0;

    update(rank.get(prefix[0]));

    for (let i = 1; i <= n; i++) {
        const r = rank.get(prefix[i]);
        result += query(r - 1);
        update(r);
    }

    return result;
};
