// time: O(n)
// space: O(n)

/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
const solveQueries = (nums, queries) => {
    const n = nums.length;
    const map1 = {};
    const map2 = {};
    const result = [];

    for (let i = 0; i < n; i++) {
        const num = nums[i];
        map1[num] ??= [];
        map1[num].push(i);
        map2[i] = map1[num].length - 1;
    }

    for (const idx of queries) {
        const num = nums[idx];
        const indices = map1[num];
        const start = map2[idx];
        const leftDiff = start > 0 ? idx - indices[start - 1] : Infinity;
        const rightDiff =
            start < indices.length - 1 ? indices[start + 1] - idx : Infinity;
        const res = Math.min(
            leftDiff,
            rightDiff,
            n - idx + indices[0],
            idx + (n - indices[indices.length - 1])
        );
        result.push(res >= n ? -1 : res);
    }

    return result;
};
